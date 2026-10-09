// Run after next build: node scripts/test-internal-links-rendered.cjs
// Parser fixtures only: node scripts/test-internal-links-rendered.cjs --self-test
// Reads generated files and public assets. No requests, installs, or file writes.
const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')

const project = path.resolve(__dirname, '..')
const built = path.join(project, '.next')
const rendered = path.join(built, 'server', 'app')

function decodeEntities(value) {
  // React escapes these named references in attributes; numeric references also
  // cover Unicode IDs and URL punctuation without relying on a browser parser.
  const named = {
    amp: '&', AMP: '&', lt: '<', LT: '<', gt: '>', GT: '>',
    quot: '"', QUOT: '"', apos: "'", nbsp: '\u00a0',
    colon: ':', sol: '/', num: '#', quest: '?', equals: '=',
    percnt: '%', period: '.', comma: ',', semi: ';', plus: '+',
    lpar: '(', rpar: ')', lowbar: '_', hyphen: '\u2010',
    excl: '!', commat: '@', dollar: '$', ast: '*', Tab: '\t', NewLine: '\n',
  }
  return value.replace(/&(?:#(x[0-9a-f]+|[0-9]+);?|([a-z][a-z0-9]*);)/gi, (reference, numeric, name) => {
    if (!numeric) return named[name] ?? reference
    const code = numeric[0].toLowerCase() === 'x'
      ? Number.parseInt(numeric.slice(1), 16)
      : Number.parseInt(numeric, 10)
    return code === 0 || code > 0x10ffff || (code >= 0xd800 && code <= 0xdfff)
      ? '\ufffd'
      : String.fromCodePoint(code)
  })
}

function parseHtml(html) {
  const hrefs = []
  const fragments = new Set()
  // Serialized React payloads, raw text and comments are not rendered links.
  const markup = html.replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<(script|style|textarea|title)\b[^>]*>[\s\S]*?<\/\1\s*>/gi, '')
  const tags = /<([a-z][\w:-]*)\b((?:[^"'<>]|"[^"]*"|'[^']*')*)>/gi
  for (const tag of markup.matchAll(tags)) {
    const attributes = new Map()
    const attributePattern = /([^\s=/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g
    for (const attribute of tag[2].matchAll(attributePattern)) {
      const name = attribute[1].toLowerCase()
      // Like HTML, the first duplicate attribute wins.
      if (!attributes.has(name)) attributes.set(name, decodeEntities(attribute[2] ?? attribute[3] ?? attribute[4] ?? ''))
    }
    if (attributes.has('id')) fragments.add(attributes.get('id'))
    if (tag[1].toLowerCase() !== 'a') continue
    if (attributes.has('name')) fragments.add(attributes.get('name'))
    if (attributes.has('href')) hrefs.push(attributes.get('href'))
  }
  return { hrefs, fragments }
}

function followRedirects(initial, rules) {
  let url = new URL(initial)
  let hops = 0
  const seen = new Set()
  while (true) {
    assert.ok(!seen.has(url.href), `Redirect cycle: ${initial}`)
    seen.add(url.href)
    // Conditional redirects cannot be established from rendered HTML alone.
    const rule = rules.find((candidate) => !candidate.has?.length && !candidate.missing?.length
      && new RegExp(candidate.regex).test(url.pathname))
    if (!rule) return { url, hops }
    assert.ok(hops < 10, `Too many redirects: ${initial}`)
    const match = new RegExp(rule.regex).exec(url.pathname)
    const parameters = [...rule.source.matchAll(/:([a-z][a-z0-9_]*)(?:[?*+])?/gi)]
    const values = new Map(parameters.map((parameter, index) => [parameter[1], match[index + 1]]))
    const destination = rule.destination.replace(/:([a-z][a-z0-9_]*)(?:[?*+])?/gi, (token, name) => {
      assert.ok(values.has(name), `Unresolved redirect parameter ${token}: ${rule.source}`)
      return values.get(name) ?? ''
    })
    const redirected = new URL(destination, url)
    if (!destination.includes('#')) redirected.hash = url.hash
    if (!destination.includes('?')) redirected.search = url.search
    url = redirected
    hops += 1
    // An external destination must not match the local site's rules again.
    if (url.origin !== new URL(initial).origin) return { url, hops }
  }
}

function selfTest() {
  const parsed = parseHtml(`
    <!-- <a href="/comment">ignore</a> -->
    <script>const example = '<a href="/script">';</script>
    <style>.example::after { content: '<a href="/style">'; }</style>
    <textarea><a href="/textarea">text</a></textarea>
    <A data-href="/not-href" HREF='/blog?a=1&amp;b=2#part&#x2D;2' title="x > y">link</A>
    <a href=/blog/page/2>page</a><a href="" href="/ignored-duplicate">self</a>
    <section id='part-2'></section><a name="old&#45;anchor"></a>
    <div id="&#51060;&#52380;&amp;&quot;"></div>
  `)
  assert.deepEqual(parsed.hrefs, ['/blog?a=1&b=2#part-2', '/blog/page/2', ''])
  assert.deepEqual([...parsed.fragments], ['part-2', 'old-anchor', '이천&"'])
  assert.equal(decodeEntities('&lt;&gt;&apos;&#x1f600;&#0;&#x110000;'), "<>'😀\ufffd\ufffd")
  const rules = [
    { source: '/:path+/', destination: '/:path+', regex: '^/(.+)/$' },
    { source: '/old', destination: '/new', regex: '^/old$' },
  ]
  const redirected = followRedirects('https://example.test/old/?x=1#details', rules)
  assert.equal(redirected.url.href, 'https://example.test/new?x=1#details')
  assert.equal(redirected.hops, 2)
  assert.throws(() => followRedirects('https://example.test/old', [
    { source: '/old', destination: '/old', regex: '^/old$' },
  ]), /Redirect cycle/)
  console.log('PASS fixtures: rendered anchors, quoted/unquoted attributes, entities, fragments and redirects')
}

function collectFiles(directory, prefix = '') {
  const files = new Map()
  if (!fs.existsSync(directory)) return files
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const relative = prefix + entry.name
    const absolute = path.join(directory, entry.name)
    if (entry.isDirectory()) {
      for (const [name, filename] of collectFiles(absolute, relative + '/')) files.set(name, filename)
    } else if (entry.isFile()) {
      files.set(relative, absolute)
    }
  }
  return files
}

function main() {
  selfTest()
  if (process.argv.includes('--self-test')) return
  const sitemap = fs.readFileSync(path.join(rendered, 'sitemap.xml.body'), 'utf8')
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => decodeEntities(match[1]))
  assert.equal(urls.length, 100, 'Expected the current 100 published sitemap pages')
  assert.equal(new Set(urls).size, urls.length, 'Duplicate sitemap URLs')
  const origin = new URL(urls[0]).origin
  const manifest = JSON.parse(fs.readFileSync(path.join(built, 'routes-manifest.json'), 'utf8'))
  const files = collectFiles(rendered)
  const publicFiles = collectFiles(path.join(project, 'public'))
  const htmlCache = new Map()
  const failures = []
  const targets = new Set()
  let internalLinks = 0
  let checkedFragments = 0
  let redirectedLinks = 0
  let skippedLinks = 0

  function resolveFile(pathname) {
    const relative = decodeURIComponent(pathname).replace(/^\//, '')
    const html = files.get(relative ? `${relative}.html` : 'index.html')
    if (html) return { filename: html, isHtml: true }
    const asset = publicFiles.get(relative)
    if (asset) return { filename: asset, isHtml: /\.html?$/i.test(relative) }
    const response = files.get(`${relative}.body`)
    return response ? { filename: response, isHtml: false } : undefined
  }

  function readHtml(filename) {
    if (!htmlCache.has(filename)) htmlCache.set(filename, parseHtml(fs.readFileSync(filename, 'utf8')))
    return htmlCache.get(filename)
  }

  for (const source of urls) {
    const sourceUrl = new URL(source)
    assert.equal(sourceUrl.origin, origin, `Unexpected sitemap origin: ${source}`)
    const sourceFile = resolveFile(sourceUrl.pathname)
    assert.ok(sourceFile?.isHtml, `Missing sitemap HTML: ${source}`)
    for (const href of readHtml(sourceFile.filename).hrefs) {
      try {
        const initial = new URL(href, sourceUrl)
        if (!['http:', 'https:'].includes(initial.protocol) || initial.origin !== origin) {
          skippedLinks += 1
          continue
        }
        const { url: target, hops } = followRedirects(initial, manifest.redirects || [])
        if (hops) redirectedLinks += 1
        if (target.origin !== origin) {
          skippedLinks += 1
          continue
        }
        internalLinks += 1
        targets.add(target.pathname)
        const targetFile = resolveFile(target.pathname)
        assert.ok(targetFile, `Missing target ${target.pathname}`)
        if (target.hash && targetFile.isHtml) {
          // Text-fragment directives need no HTML ID; a preceding ID still does.
          const fragment = decodeURIComponent(target.hash.slice(1).split(':~:text=')[0])
          if (fragment) {
            checkedFragments += 1
            assert.ok(readHtml(targetFile.filename).fragments.has(fragment), `Missing fragment ${target.pathname}#${fragment}`)
          }
        }
      } catch (error) {
        failures.push(`${sourceUrl.pathname}: href=${JSON.stringify(href)}: ${error.message}`)
      }
    }
  }
  assert.equal(failures.length, 0, `Broken internal links:\n${failures.join('\n')}`)
  console.log(`PASS internal links: ${urls.length} sitemap pages; ${internalLinks} links to ${targets.size} targets; ${checkedFragments} HTML fragments; ${redirectedLinks} redirected links; ${skippedLinks} external/non-HTTP links skipped`)
}

main()
