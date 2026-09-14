// Run: node scripts/test-robots-headers.cjs [--built]
// Read-only checks; Vercel headers need a separate post-deploy HTTP verification.
const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const { pathToFileURL } = require('node:url')
const root = path.resolve(__dirname, '..')

function assertNoBlanketRobotsHeaders(rules, label) {
  for (const rule of rules || []) {
    for (const header of rule.headers || []) {
      assert.notEqual(header.key.toLowerCase(), 'x-robots-tag',
        `${label} ${rule.source}: route status/metadata must control indexing, not a blanket header`)
    }
  }
}

async function main() {
  const vercel = JSON.parse(fs.readFileSync(path.join(root, 'vercel.json'), 'utf8'))
  assertNoBlanketRobotsHeaders(vercel.headers, 'Vercel')
  const { default: config } = await import(pathToFileURL(path.join(root, 'next.config.mjs')).href)
  const nextHeaders = await config.headers()
  assertNoBlanketRobotsHeaders(nextHeaders, 'Next.js')
  const securityHeaders = nextHeaders.find((rule) => rule.source === '/(.*)')?.headers || []
  assert.ok(securityHeaders.some((header) => header.key === 'X-Content-Type-Options' && header.value === 'nosniff'))
  assert.ok(securityHeaders.some((header) => header.key === 'X-Frame-Options' && header.value === 'DENY'))
  console.log('PASS configuration: no blanket robots header; security headers preserved')

  if (process.argv.includes('--built')) {
    const read = (file) => fs.readFileSync(path.join(root, '.next/server/app', file), 'utf8')
      .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
    assert.match(read('_not-found.html'), /<meta\b[^>]*name="robots"[^>]*content="noindex"[^>]*>/i)
    for (const route of ['icheon', 'yeoju', 'blog', 'blog/regional', 'blog/page/2', 'blog/yeoju-massage-guide']) {
      const html = read(route + '.html')
      assert.ok(!/<meta\b[^>]*name="(?:robots|googlebot)"[^>]*content="[^"]*noindex/i.test(html), route)
      assert.ok(html.includes(`rel="canonical" href="https://www.nomadthai.kr/${route}"`), route)
    }
    console.log('PASS rendered output: 404 remains noindex; six normal routes retain canonical and no noindex')
  }
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
