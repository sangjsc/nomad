// Run from any working directory: node scripts/test-blog-pagination.cjs
// Load TypeScript in memory; no server, network, global require hooks, or file writes.
const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const Module = require('node:module')
const ts = require('typescript')
const { isValidElement } = require('react')
const projectRoot = path.resolve(__dirname, '..')

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

const invalidPages = [
  '', '0', '0000', '-1', '-2', '+2', ' 2', '2 ', '\t2', '2\n',
  '0x2', '0b10', '0o2', '2e0', '2.0', 'Infinity', 'NaN', '2junk',
  '\uFF12', '\u0662', '9007199254740992', '999999999999999999999',
]
const paramsFor = (page) => ({ params: Promise.resolve({ page }) })
let passed = 0
async function test(name, callback) {
  await callback()
  passed += 1
  console.log('PASS ' + name)
}

// Navigation helpers throw distinguishable outcomes, just as Next stops route rendering.
class NavigationResult extends Error {
  constructor(status, destination) {
    super(destination || String(status))
    this.status = status
    this.destination = destination
  }
}
const navigation = {
  notFound: () => { throw new NavigationResult(404) },
  permanentRedirect: (destination) => { throw new NavigationResult(308, destination) },
}
const BlogPageClient = () => null
const routes = [undefined, 'official', 'regional', 'info'].map((category) => ({
  category,
  basePath: category ? `/blog/${category}` : '/blog',
  file: category ? `app/blog/${category}/page/[page]/page.tsx` : 'app/blog/page/[page]/page.tsx',
}))

function loadRoute(route) {
  const pageSize = 9
  const posts = Array.from({ length: 20 }, (_, index) => ({ slug: `${route.category || 'all'}-${index + 1}` }))
  const totalPages = 3
  const checkCategory = (category) => assert.equal(category, route.category)
  const blog = {
    BLOG_POSTS_PER_PAGE: pageSize,
    getAllPostsPageCount: (size) => { assert.equal(size, pageSize); return totalPages },
    getCategoryPageCount: (category, size) => {
      checkCategory(category)
      assert.equal(size, pageSize)
      return totalPages
    },
    getSortedPostsData: () => posts,
    getPostsByCategory: (category) => { checkCategory(category); return posts },
    getPaginatedPosts: (receivedPosts, page, size) => {
      assert.equal(receivedPosts, posts)
      assert.equal(size, pageSize)
      // Production pagination clamps oversized input. The route must still reject it.
      const currentPage = Math.min(page, totalPages)
      return {
        posts: posts.slice((currentPage - 1) * size, currentPage * size),
        currentPage,
        totalPages,
      }
    },
  }
  return {
    exports: loadTypeScript(route.file, {
      'next/navigation': navigation,
      '@/lib/blog': blog,
      '@/components/BlogPageClient': BlogPageClient,
    }),
    posts,
  }
}

async function main() {
  const { parsePageNumber } = loadTypeScript('lib/blog-pagination.ts')
  await test('parser accepts positive ASCII integers and leading zero aliases', () => {
    for (const [raw, expected] of [['1', 1], ['2', 2], ['0001', 1], ['0002', 2], ['9007199254740991', Number.MAX_SAFE_INTEGER]]) {
      assert.equal(parsePageNumber(raw), expected, raw)
    }
  })
  await test('parser rejects zero, unsafe integers and non-decimal spellings', () => {
    for (const raw of invalidPages) assert.equal(parsePageNumber(raw), null, JSON.stringify(raw))
  })

  for (const route of routes) {
    const { exports: pageModule, posts } = loadRoute(route)
    const canonical = (suffix = '') => 'https://www.nomadthai.kr' + route.basePath + suffix
    await test(route.basePath + ': standard pages retain rendering and self-canonical metadata', async () => {
      assert.deepEqual(pageModule.generateStaticParams(), [{ page: '2' }, { page: '3' }])
      for (const page of [2, 3]) {
        const element = await pageModule.default(paramsFor(String(page)))
        assert.ok(isValidElement(element))
        assert.equal(element.type, BlogPageClient)
        assert.deepEqual(element.props.posts, posts.slice((page - 1) * 9, page * 9))
        assert.equal(element.props.currentPage, page)
        assert.equal(element.props.totalPages, 3)
        assert.equal(element.props.category, route.category)
        assert.equal(element.props.basePath, route.basePath)
        const metadata = await pageModule.generateMetadata(paramsFor(String(page)))
        assert.equal(metadata.alternates.canonical, canonical(`/page/${page}`))
        assert.equal(metadata.openGraph.url, canonical(`/page/${page}`))
        assert.equal(metadata.robots.index, true)
      }
    })
    await test(route.basePath + ': leading zero aliases permanently redirect to standard URLs', async () => {
      for (const raw of ['02', '0002', '0003']) {
        const destination = `${route.basePath}/page/${Number(raw)}`
        await assert.rejects(pageModule.default(paramsFor(raw)), (error) =>
          error instanceof NavigationResult && error.status === 308 && error.destination === destination)
        const metadata = await pageModule.generateMetadata(paramsFor(raw))
        assert.equal(metadata.alternates.canonical, 'https://www.nomadthai.kr' + destination)
      }
    })
    await test(route.basePath + ': page one and its aliases redirect to the list root', async () => {
      for (const raw of ['1', '01', '0001']) {
        await assert.rejects(pageModule.default(paramsFor(raw)), (error) =>
          error instanceof NavigationResult && error.status === 308 && error.destination === route.basePath)
        const metadata = await pageModule.generateMetadata(paramsFor(raw))
        assert.equal(metadata.alternates.canonical, canonical())
      }
    })
    await test(route.basePath + ': malformed and out-of-range pages return 404 and noindex', async () => {
      for (const raw of [...invalidPages, '4', '0004', '999', '000999', '9007199254740991']) {
        await assert.rejects(pageModule.default(paramsFor(raw)), (error) =>
          error instanceof NavigationResult && error.status === 404, JSON.stringify(raw))
        const metadata = await pageModule.generateMetadata(paramsFor(raw))
        assert.equal(metadata.robots?.index, false, JSON.stringify(raw))
        assert.equal(metadata.alternates?.canonical, undefined, JSON.stringify(raw))
      }
    })
  }
  console.log(`\n${passed} pagination regression tests passed. No network or file writes.`)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
