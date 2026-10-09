// Run after next build: node scripts/test-copy-refresh.cjs [pre-edit backup directory]
// Reads local source/build files only. No requests, contact clicks or analytics events.
const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const matter = require('gray-matter')
const project = path.resolve(__dirname, '..')
const rendered = path.join(project, '.next/server/app')
const backup = process.argv[2] && path.resolve(process.argv[2])
const read = (file) => fs.readFileSync(file, 'utf8')
const noScripts = (html) => html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
const text = (html) => noScripts(html).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
const rejected = /알려\s?주세요|골라\s?보세요|고르세요|부담\s?없이|물어\s?보세요|쉬세요|생각해\s?보세요|살펴\s?보세요|읽어\s?보세요|선택해\s?주세요|선택하세요|즐기세요|나갈 필요 없이|긴 설명은 필요 없습니다|다양한 니즈|특별한 힐링 경험|몸과 마음의 조화/
const redirected = new Set(['gyeonggi-massage-guidebook-2024', 'icheon-bubal-majang-booking-notes'])
const blogDir = path.join(project, 'content/blog')
const files = fs.readdirSync(blogDir).filter((file) => file.endsWith('.md')).sort()
assert.equal(files.length, 61, 'All existing article sources retained')
const links = (source) => [...new Set([...source.matchAll(/\]\(([^)]+)\)/g)].map((match) => match[1]))].sort()
let changed = 0
let published = 0
let drafts = 0
let redirects = 0
for (const file of files) {
  const raw = read(path.join(blogDir, file))
  const post = matter(raw)
  const slug = file.slice(0, -3)
  assert.ok(!rejected.test([post.data.title, post.data.excerpt, post.content].join('\n')), file + ': rejected copy')
  if (backup) {
    const beforeRaw = read(path.join(backup, 'content/blog', file))
    const before = matter(beforeRaw)
    for (const key of ['date', 'category', 'tags', 'draft', 'author', 'image']) {
      assert.deepEqual(post.data[key], before.data[key], `${file}: preserve ${key}`)
    }
    for (const url of links(before.content)) assert.ok(links(post.content).includes(url), `${file}: retain ${url}`)
    if (raw !== beforeRaw) {
      changed += 1
      assert.equal(String(post.data.updated), '2026-10-09', file + ': actual edit date')
    }
  }
  if (post.data.draft) drafts += 1
  if (redirected.has(slug)) redirects += 1
  if (post.data.draft || redirected.has(slug)) continue
  published += 1
  const html = read(path.join(rendered, 'blog', `${slug}.html`))
  assert.ok(!rejected.test(noScripts(html)), `${slug}: rendered copy and metadata`)
  assert.ok(html.includes(`rel="canonical" href="https://www.nomadthai.kr/blog/${slug}"`), `${slug}: canonical`)
  assert.ok(noScripts(html).includes(`src="/blog/covers/${slug}"`), `${slug}: current SVG cover without stale raster optimization`)
}

const home = read(path.join(rendered, 'index.html'))
const sitemap = read(path.join(rendered, 'sitemap.xml.body'))
const sitemapDates = new Map([...sitemap.matchAll(/<url>\s*<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g)].map((match) => [match[1], match[2]]))
for (const route of ['', '/about', '/contact', '/service-areas']) {
  assert.equal(sitemapDates.get(`https://www.nomadthai.kr${route}`), '2026-10-09', `${route || '/'}: actual sitemap copy revision`)
}
const homeText = text(home)
assert.equal((homeText.match(/계신 곳으로 직접 찾아가는 특급 마사지 서비스/g) || []).length, 1, 'One homepage brand tagline')
assert.ok(homeText.includes('타이 60분 7만원부터'), 'Homepage starting price')
assert.ok(!rejected.test(noScripts(home)), 'Homepage copy and metadata')
assert.ok(noScripts(home).includes('data-cta-location="home_hero"'), 'Homepage price shortcut')
assert.ok(/<a\b[^>]*href="#services"[^>]*data-analytics-event="price_table_click"/.test(home), 'Price shortcut tracking preserved')

let regions = 0
for (const entry of fs.readdirSync(path.join(project, 'app'), { withFileTypes: true })) {
  const sourceFile = path.join(project, 'app', entry.name, 'page.tsx')
  if (!entry.isDirectory() || !fs.existsSync(sourceFile)) continue
  const source = read(sourceFile)
  if (!source.includes('<LocationPage')) continue
  regions += 1
  assert.equal(sitemapDates.get(`https://www.nomadthai.kr/${entry.name}`), '2026-10-09', `${entry.name}: actual sitemap copy revision`)
  const html = read(path.join(rendered, `${entry.name}.html`))
  const body = text(html)
  assert.ok(!rejected.test(noScripts(html)), `${entry.name}: rejected copy and metadata`)
  assert.ok(body.includes('노마드 방문 마사지 서비스'), `${entry.name}: service copy`)
  assert.ok(!body.includes('특급 마사지 서비스'), `${entry.name}: no repeated home tagline`)
  const graph = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
    .flatMap((match) => { const value = JSON.parse(match[1]); return value['@graph'] || [value] })
  const faq = graph.find((node) => node['@type'] === 'FAQPage')
  assert.ok(faq, `${entry.name}: FAQ schema`)
  for (const question of faq.mainEntity) {
    assert.ok(body.includes(question.name), `${entry.name}: schema question visible`)
    assert.ok(body.includes(question.acceptedAnswer.text), `${entry.name}: schema answer visible`)
  }
}
assert.equal(regions, 22, 'All 22 regions checked')
for (const route of ['about', 'contact', 'service-areas', 'blog', 'blog/info', 'blog/official', 'blog/regional']) {
  assert.ok(!rejected.test(noScripts(read(path.join(rendered, `${route}.html`)))), route + ': rejected copy and metadata')
}
if (backup) {
  for (const file of ['lib/site.ts', 'components/ContactConversionTracker.tsx', 'lib/blog.ts', 'next.config.mjs']) {
    assert.equal(read(path.join(project, file)), read(path.join(backup, file)), `${file}: business data, routing and tracking unchanged`)
  }
}
console.log(JSON.stringify({ sourceArticles: files.length, changedArticles: backup ? changed : 'backup not supplied', publishedArticles: published, draftSources: drafts, redirectedSources: redirects, regionalPages: regions, status: 'PASS' }, null, 2))
