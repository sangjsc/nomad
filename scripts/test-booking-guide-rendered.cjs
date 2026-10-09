// Run after next build. Reads generated HTML only; never sends contact events.
const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')

const project = path.resolve(__dirname, '..')
const app = path.join(project, 'app')
const rendered = path.join(project, '.next', 'server', 'app')
const text = (html) => html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()
let checked = 0

for (const entry of fs.readdirSync(app, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue
  const page = path.join(app, entry.name, 'page.tsx')
  if (!fs.existsSync(page)) continue
  const source = fs.readFileSync(page, 'utf8')
  if (!source.includes('<LocationPage')) continue
  const city = source.match(/\bcity="([^"]+)"/)?.[1]
  const slug = source.match(/\bcityEn="([^"]+)"/)?.[1]
  const areasSource = source.match(/\bareas=\{\[([\s\S]*?)\]\}/)?.[1]
  assert.ok(city && slug && areasSource, `${entry.name}: regional props`)
  const areas = [...areasSource.matchAll(/["']([^"']+)["']/g)].map((match) => match[1])
  const fullCity = slug === 'gwangju' ? '경기도 광주시' : `경기도 ${city}시`
  const displayCity = slug === 'gwangju' ? '경기 광주' : city
  const expectedAreas = [...new Set([fullCity, ...areas])].slice(0, 5)
  const html = fs.readFileSync(path.join(rendered, `${slug}.html`), 'utf8')
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')

  const guide = html.match(/<section\b[^>]*\bid="team"[^>]*>[\s\S]*?<\/section>/)?.[0]
  assert.ok(guide, `${slug}: booking guide`)
  assert.ok(guide.includes('노마드 방문 마사지 서비스'), `${slug}: service heading`)
  assert.ok(guide.includes('코스 선택부터 방문 일정까지 상담에서 진행합니다.'), `${slug}: course chosen during consultation`)
  assert.ok(!guide.includes('긴 설명은 필요 없습니다'), `${slug}: old copy removed`)
  assert.ok(!guide.includes('md:opacity-0'), `${slug}: guide text must not require hover`)
  assert.equal((guide.match(/<h3\b/g) || []).length, 3, `${slug}: all guide cards preserved`)

  const contact = html.match(/<section\b[^>]*\bid="booking-contact"[^>]*>[\s\S]*?<\/section>/)?.[0]
  assert.ok(contact, `${slug}: contact section`)
  assert.ok(contact.includes('aria-labelledby="booking-contact-title"'), `${slug}: named contact section`)
  for (const id of ['booking-contact', 'booking-contact-title']) {
    assert.equal((html.match(new RegExp(`\\bid="${id}"`, 'g')) || []).length, 1, `${slug}: unique ${id}`)
  }
  const contactHeading = contact.match(/<h2\b[^>]*\bid="booking-contact-title"[^>]*>([\s\S]*?)<\/h2>/)?.[1]
  assert.ok(contactHeading, `${slug}: section label resolves to its heading`)
  assert.equal(text(contactHeading), `${displayCity} 예약 문의`, `${slug}: city-specific heading`)
  const displayedAreas = [...contact.matchAll(/<span class="text-xs lg:text-sm font-medium">([\s\S]*?)<\/span>/g)]
    .map((match) => text(match[1]))
  assert.deepEqual(displayedAreas, expectedAreas, `${slug}: current city and existing neighborhoods`)
  assert.equal((contact.match(/href="tel:01081867771"/g) || []).length, 1, `${slug}: phone destination preserved`)
  assert.equal((contact.match(/href="https:\/\/open.kakao.com\/o\/ssZxRuEh"/g) || []).length, 1, `${slug}: Kakao destination preserved`)
  assert.ok(!contact.includes('BOOKING GUIDE'), `${slug}: English filler removed`)
  checked += 1
}

assert.equal(checked, 22, 'Every regional page must be checked')
console.log(`PASS booking guide HTML: ${checked} regions retain 3 cards without md:opacity-0, current-city labels, revised copy and contact destinations. Visual layout requires browser QA.`)
