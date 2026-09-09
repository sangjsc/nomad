// Run from any working directory: node scripts/test-blog-relations.cjs
// TypeScript and fixtures stay in memory: no installs, network, or build output.
const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const Module = require('node:module')
const ts = require('typescript')
const projectRoot = path.resolve(__dirname, '..')
process.chdir(projectRoot)

function loadTypeScript(relativePath, overrides = {}) {
  const cache = new Map()
  function load(filename) {
    if (cache.has(filename)) return cache.get(filename).exports
    const compiled = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
      compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, esModuleInterop: true },
      fileName: filename,
    }).outputText
    const instance = new Module(filename, module)
    instance.filename = filename
    instance.paths = Module._nodeModulePaths(path.dirname(filename))
    const requireOriginal = instance.require.bind(instance)
    instance.require = (request) => {
      if (Object.hasOwn(overrides, request)) return overrides[request]
      if (request.startsWith('.')) {
        const target = path.resolve(path.dirname(filename), request + '.ts')
        if (fs.existsSync(target)) return load(target)
      }
      return requireOriginal(request)
    }
    cache.set(filename, instance)
    instance._compile(compiled, filename)
    return instance.exports
  }
  return load(path.join(projectRoot, relativePath))
}

const { getPostServiceArea } = loadTypeScript('lib/blog-utils.ts')
const realBlog = loadTypeScript('lib/blog.ts')
let passed = 0
function test(name, callback) {
  callback()
  passed += 1
  console.log('PASS ' + name)
}
const input = (changes = {}) => ({ slug: 'unassigned-guide', title: '예약 안내', category: 'regional', tags: [], ...changes })

test('slug prefix wins over incidental city tags', () => {
  assert.equal(getPostServiceArea(input({ slug: 'icheon-hotel-guide', title: '숙소 안내', tags: ['수원출장마사지'] }))?.slug, 'icheon')
})
test('unique regional title or tag resolves an area', () => {
  assert.equal(getPostServiceArea(input({ title: '여주 예약 안내' }))?.slug, 'yeoju')
  assert.equal(getPostServiceArea(input({ title: '판교 퇴근 후 안내', tags: ['성남출장마사지'] }))?.slug, 'seongnam')
})
test('ambiguous regional and general city tags do not pick the first area', () => {
  assert.equal(getPostServiceArea(input({ title: '이천·여주 방문 안내' })), undefined)
  assert.equal(getPostServiceArea(input({ category: 'info', tags: ['이천출장마사지'] })), undefined)
})
test('Gyeonggi Gwangju is distinct from metropolitan and unqualified Gwangju', () => {
  assert.equal(getPostServiceArea(input({ title: '경기도 광주 위치 FAQ | 광주광역시와 구분' }))?.slug, 'gwangju')
  assert.equal(getPostServiceArea(input({ title: '경기 광주 예약 안내' }))?.slug, 'gwangju')
  assert.equal(getPostServiceArea(input({ title: '광주광역시 예약 안내', tags: ['광주출장마사지'] })), undefined)
  assert.equal(getPostServiceArea(input({ slug: 'gwangju-guide', title: '광주광역시 예약 안내' })), undefined)
  assert.equal(getPostServiceArea(input({ title: '광주 예약 안내', tags: ['광주출장마사지'] })), undefined)
})

const allRealPosts = realBlog.getSortedPostsData()
const realCases = [
  ['gwangju-massage-guide', 'gwangju'],
  ['gwangju-gyeonggi-location-faq', 'gwangju'],
  ['yeoju-massage-guide', 'yeoju'],
  ['yongin-massage-guide', 'yongin'],
  ['icheon-night-booking-checklist', 'icheon'],
  ['ansan-massage-guide', 'ansan'],
  ['pangyo-after-work-massage-guide', 'seongnam'],
]
for (const [slug, expectedArea] of realCases) {
  test('real ' + slug + ': local first, then general only', () => {
    const post = realBlog.getPostData(slug)
    assert.ok(post)
    assert.equal(getPostServiceArea(post)?.slug, expectedArea)
    const related = realBlog.getRelatedPosts(post)
    const availableLocal = allRealPosts.filter((candidate) => candidate.slug !== slug && getPostServiceArea(candidate)?.slug === expectedArea)
    assert.equal(related.filter((candidate) => getPostServiceArea(candidate)?.slug === expectedArea).length, Math.min(3, availableLocal.length))
    assert.equal(new Set(related.map((candidate) => candidate.slug)).size, related.length)
    let generalStarted = false
    for (const candidate of related) {
      assert.notEqual(candidate.slug, slug)
      assert.ok(!candidate.draft)
      const area = getPostServiceArea(candidate)
      if (area) {
        assert.equal(area.slug, expectedArea)
        assert.equal(generalStarted, false)
      } else {
        generalStarted = true
        assert.ok(['info', 'official'].includes(candidate.category))
      }
    }
  })
}
test('real information article recommends general guidance, not arbitrary regions', () => {
  const post = realBlog.getPostData('first-booking-checkpoints')
  assert.ok(post)
  assert.equal(getPostServiceArea(post), undefined)
  const related = realBlog.getRelatedPosts(post)
  assert.ok(related.length > 0)
  assert.ok(related.every((candidate) => !getPostServiceArea(candidate) && ['info', 'official'].includes(candidate.category)))
})
test('all published posts retain unique, relevant, non-self recommendations', () => {
  for (const post of allRealPosts) {
    const area = getPostServiceArea(post)
    const related = realBlog.getRelatedPosts(post)
    assert.ok(related.length <= 3)
    assert.equal(new Set(related.map((candidate) => candidate.slug)).size, related.length)
    for (const candidate of related) {
      const candidateArea = getPostServiceArea(candidate)
      assert.notEqual(candidate.slug, post.slug)
      assert.ok(!candidate.draft)
      assert.ok(candidateArea ? area && candidateArea.slug === area.slug : ['info', 'official'].includes(candidate.category))
    }
  }
})

function fixtureBlog(entries) {
  const directory = path.join(projectRoot, 'content/blog')
  const files = new Map(entries.map(([filename, data]) => [filename, '---\n' + JSON.stringify(data) + '\n---\nFixture body.\n']))
  const fixtureFs = {
    existsSync: (filename) => filename === directory || files.has(path.basename(filename)),
    readdirSync: () => [...files.keys()],
    readFileSync: (filename) => {
      assert.ok(files.has(path.basename(filename)), 'Unknown fixture ' + filename)
      return files.get(path.basename(filename))
    },
  }
  return loadTypeScript('lib/blog.ts', { fs: fixtureFs })
}
const fixture = (title, category = 'regional', changes = {}) => ({ title, category, date: '2026-01-01', excerpt: '', tags: [], ...changes })
const fixtureEntries = [
  ['gwangju-source.md', fixture('경기도 광주 예약', 'regional', { tags: ['홈타이', '노마드타이'] })],
  ['gwangju-local.md', fixture('경기도 광주 숙소 안내')],
  ['gwangju-local.mdx', fixture('경기도 광주 숙소 안내 중복')],
  ['general-guide.md', fixture('첫 예약 안내', 'info')],
  ['ansan-unrelated.md', fixture('안산 안내', 'regional', { updated: '2026-09-10', tags: ['홈타이', '노마드타이'] })],
  ['gwangju-draft.md', fixture('경기도 광주 초안', 'regional', { draft: true })],
  ['icheon-bubal-majang-booking-notes.md', fixture('전환된 옛 문서', 'info')],
  ['gyeonggi-massage-guidebook-2024.md', fixture('전환된 옛 문서', 'official')],
]
test('fixture excludes self, duplicates, draft, redirects and unrelated regional padding', () => {
  const blog = fixtureBlog(fixtureEntries)
  const source = blog.getPostData('gwangju-source')
  assert.ok(source)
  assert.deepEqual(blog.getRelatedPosts(source).map((post) => post.slug), ['gwangju-local', 'general-guide'])
  assert.equal(blog.getRelatedPosts(source, 0).length, 0)
  assert.equal(blog.getRelatedPosts(source, 1).length, 1)
  assert.equal(blog.getRelatedPosts(source, Number.NaN).length, 0)
  assert.equal(blog.getRelatedPosts({ ...source, draft: true }).length, 0)
})
test('fixture returns fewer items when no relevant general fallback exists', () => {
  const blog = fixtureBlog(fixtureEntries.filter(([filename]) => filename !== 'general-guide.md'))
  assert.deepEqual(blog.getRelatedPosts(blog.getPostData('gwangju-source')).map((post) => post.slug), ['gwangju-local'])
})

console.log('\n' + passed + ' regression tests passed. No network, fixture writes, or build output.')
