// Run: node scripts/test-blog-priority-guides.cjs [--built]
// In-memory server rendering by default. --built also checks the latest next build.
// No network, global require hooks, fixture writes, or build output.
const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const Module = require('node:module')
const ts = require('typescript')
const React = require('react')
const { renderToStaticMarkup } = require('react-dom/server')
const projectRoot = path.resolve(__dirname, '..')
process.chdir(projectRoot)

function loadTypeScript(relativePath, overrides = {}) {
  const cache = new Map()
  function load(filename) {
    if (cache.has(filename)) return cache.get(filename).exports
    const compiled = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2020,
        jsx: ts.JsxEmit.ReactJSX,
        esModuleInterop: true,
      },
      fileName: filename,
    }).outputText
    const instance = new Module(filename, module)
    instance.filename = filename
    instance.paths = Module._nodeModulePaths(path.dirname(filename))
    const requireOriginal = instance.require.bind(instance)
    instance.require = (request) => {
      if (Object.hasOwn(overrides, request)) return overrides[request]
      if (request.startsWith('@/') || request.startsWith('.')) {
        const base = request.startsWith('@/')
          ? path.join(projectRoot, request.slice(2))
          : path.resolve(path.dirname(filename), request)
        const target = [base + '.ts', base + '.tsx'].find((candidate) => fs.existsSync(candidate))
        assert.ok(target, 'Missing TypeScript dependency: ' + request)
        return load(target)
      }
      return requireOriginal(request)
    }
    cache.set(filename, instance)
    instance._compile(compiled, filename)
    return instance.exports
  }
  return load(path.join(projectRoot, relativePath))
}

const renderOverrides = {
  'next/link': ({ children, ...props }) => React.createElement('a', props, children),
  'next/image': ({ src, alt, width, height, className }) => React.createElement('img', { src, alt, width, height, className }),
  '@/components/ui/button': {
    Button: ({ children, asChild, variant, size, ...props }) => asChild
      ? React.cloneElement(children, props)
      : React.createElement('button', props, children),
  },
  '@/components/ui/card': {
    Card: ({ children, ...props }) => React.createElement('div', props, children),
    CardContent: ({ children, ...props }) => React.createElement('div', props, children),
  },
  '@/components/BlogCard': ({ post }) => React.createElement('article', { 'data-blog-post': post.slug },
    React.createElement('a', { href: `/blog/${post.slug}` }, post.title)),
}
const BlogPage = loadTypeScript('components/BlogPageClient.tsx', renderOverrides).default
const blog = loadTypeScript('lib/blog.ts')
const allPosts = blog.getSortedPostsData()
const expectedGuides = [
  'icheon-massage-guide', 'icheon-eup-myeon-booking-guide', 'icheon-night-booking-checklist',
  'yeoju-massage-guide', 'yeoju-eup-myeon-night-booking-guide', 'yeoju-weekend-reservation-faq',
]
const guideSection = (html) => html.match(/<section\b[^>]*aria-labelledby="priority-region-guides-title"[^>]*>[\s\S]*?<\/section>/)?.[0]
const withoutScripts = (html) => html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
let passed = 0
function test(name, callback) {
  callback()
  passed += 1
  console.log('PASS ' + name)
}

function checkGuides(html, expected, label) {
  const visibleHtml = withoutScripts(html)
  const section = guideSection(visibleHtml)
  assert.equal(Boolean(section), expected, label)
  assert.equal((visibleHtml.match(/<h1(?:\s|>)/g) || []).length, 1, label + ': one H1')
  if (!expected) return
  assert.equal((section.match(/<h2(?:\s|>)/g) || []).length, 1)
  assert.equal((section.match(/<h3(?:\s|>)/g) || []).length, 2)
  assert.equal((section.match(/<article(?:\s|>)/g) || []).length, 2)
  assert.deepEqual([...section.matchAll(/<a\b[^>]*href="([^"]+)"/g)].map((match) => match[1]),
    expectedGuides.map((slug) => `/blog/${slug}`))
  assert.ok(visibleHtml.indexOf(section) < visibleHtml.indexOf('최신 블로그 글 목록'), label + ': guides before the list')
}

for (const category of ['all', 'regional', 'official', 'info']) {
  test(category + ': guides appear only on the intended first pages; post order stays unchanged', () => {
    const basePath = category === 'all' ? '/blog' : `/blog/${category}`
    const categoryPosts = category === 'all' ? allPosts : allPosts.filter((post) => post.category === category)
    for (const currentPage of [1, 2, 3]) {
      const posts = categoryPosts.slice((currentPage - 1) * 9, currentPage * 9)
      const html = renderToStaticMarkup(React.createElement(BlogPage, { posts, category, currentPage, totalPages: 3, basePath }))
      checkGuides(html, currentPage === 1 && ['all', 'regional'].includes(category), `${basePath} page ${currentPage}`)
      assert.deepEqual([...html.matchAll(/data-blog-post="([^"]+)"/g)].map((match) => match[1]), posts.map((post) => post.slug))
    }
  })
}

test('all six guide destinations are published regional articles for their named city', () => {
  for (const slug of expectedGuides) {
    const post = allPosts.find((candidate) => candidate.slug === slug)
    assert.ok(post, slug + ': present in the published list, not draft or redirected')
    assert.equal(post.category, 'regional', slug)
    assert.ok(post.title.includes(slug.startsWith('icheon-') ? '이천' : '여주'), slug)
  }
})

test('six article price links target the existing rendered regional price tables', () => {
  for (const city of ['icheon', 'yeoju']) {
    const RegionPage = loadTypeScript(`app/${city}/page.tsx`, renderOverrides).default
    const regionHtml = withoutScripts(renderToStaticMarkup(React.createElement(RegionPage)))
    assert.equal((regionHtml.match(/id="services"/g) || []).length, 1, city)
    const services = regionHtml.match(/<section\b[^>]*id="services"[^>]*>[\s\S]*?<\/section>/)?.[0]
    assert.ok(services?.includes('<table'), city + ': hash points to the price table section')
    for (const slug of expectedGuides.filter((candidate) => candidate.startsWith(city + '-'))) {
      const content = blog.getPostData(slug).content
      const priceLinks = [...content.matchAll(/\[[^\]]*가격표\]\(([^)]+)\)/g)].map((match) => match[1])
      assert.deepEqual(priceLinks, [`/${city}#services`], slug)
    }
  }
})

if (process.argv.includes('--built')) {
  const buildRoot = path.join(projectRoot, '.next/server/app')
  const readBuilt = (pathname) => fs.readFileSync(path.join(buildRoot, pathname.slice(1) + '.html'), 'utf8')
  test('built HTML shows the guide section on exactly the two intended listing pages', () => {
    const sitemap = fs.readFileSync(path.join(buildRoot, 'sitemap.xml.body'), 'utf8')
    const listings = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)]
      .map((match) => new URL(match[1]).pathname)
      .filter((pathname) => /^\/blog(?:\/(?:regional|official|info))?(?:\/page\/[0-9]+)?$/.test(pathname))
    assert.ok(listings.includes('/blog') && listings.includes('/blog/regional'))
    assert.ok(listings.some((pathname) => pathname.startsWith('/blog/page/')))
    for (const pathname of listings) checkGuides(readBuilt(pathname), ['/blog', '/blog/regional'].includes(pathname), pathname)
  })
  test('built articles retain self-canonicals and expose direct price-table links', () => {
    for (const slug of expectedGuides) {
      const html = withoutScripts(readBuilt(`/blog/${slug}`))
      assert.ok(html.includes(`rel="canonical" href="https://www.nomadthai.kr/blog/${slug}"`), slug)
      const priceLinks = [...html.matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)]
        .filter((match) => match[2].replace(/<[^>]+>/g, '').includes('가격표'))
      const city = slug.startsWith('icheon-') ? 'icheon' : 'yeoju'
      assert.ok(priceLinks.length >= 2, slug + ': article and reservation aside both link to prices')
      assert.ok(priceLinks.every((match) => match[1] === `/${city}#services`), slug)
      assert.equal((withoutScripts(readBuilt(`/${city}`)).match(/id="services"/g) || []).length, 1, city)
    }
  })
}

console.log(`\n${passed} priority guide regression tests passed. No network or file writes.`)
