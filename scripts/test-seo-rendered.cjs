// Run after next build. Checks only generated local files; no requests or analytics.
const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const root = path.resolve(__dirname, '..', '.next', 'server', 'app')
const read = (name) => fs.readFileSync(path.join(root, name), 'utf8')
const sitemap = read('sitemap.xml.body')
const urls = Array.from(sitemap.matchAll(/<loc>([^<]+)<\/loc>/g), (match) => match[1])
assert.equal(urls.length, 100)
assert.equal(new Set(urls).size, 100)
assert.ok(!urls.some((url) => /image-example|korean-business-trip-massage|icheon-bubal-majang-booking-notes|gyeonggi-massage-guidebook-2024/.test(url)))

const regions = urls.map((url) => new URL(url).pathname)
  .filter((pathname) => /^\/[a-z]+$/.test(pathname) && !['/about', '/contact', '/blog'].includes(pathname))
assert.equal(regions.length, 22)
for (const region of regions) {
  const html = read(region.slice(1) + '.html')
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, region)
  assert.ok(html.includes(`rel="canonical" href="https://www.nomadthai.kr${region}"`), region)
  const nav = html.match(/<nav[^>]+aria-label="[^"]*예약 안내 바로가기"[^>]*>([\s\S]*?)<\/nav>/)?.[0]
  assert.ok(nav, region)
  assert.ok(nav.includes('data-cta-location="local_guide_nav"'), region)
  assert.ok(/<a[^>]*href="#services"[^>]*data-analytics-event="price_table_click"/.test(nav), region)
  for (const [, target] of nav.matchAll(/href="#([^"]+)"/g)) {
    assert.equal((html.match(new RegExp(`id="${target}"`, 'g')) || []).length, 1, `${region}#${target}`)
  }
}

const blogCases = {
  'gwangju-massage-guide': 'gwangju',
  'yeoju-massage-guide': 'yeoju',
  'yongin-massage-guide': 'yongin',
  'icheon-night-booking-checklist': 'icheon',
  'ansan-massage-guide': 'ansan',
  'pangyo-after-work-massage-guide': 'seongnam',
}
for (const [slug, region] of Object.entries(blogCases)) {
  const html = read(`blog/${slug}.html`)
  const aside = html.match(/<aside[^>]+aria-label="[^"]*공식 예약 정보"[^>]*>[\s\S]*?<\/aside>/)?.[0]
  assert.ok(aside, slug)
  assert.ok(aside.includes(`href="/${region}#services"`), slug)
  assert.ok(aside.includes(`href="/${region}#local-guide"`), slug)
  assert.ok(aside.includes('출장·주차·야간 추가비 없음'), slug)
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, slug)
}

const timeGuide = read('blog/suwon-booking-time-guide.html')
assert.ok(timeGuide.includes('19:00~04:00'))
assert.ok(!timeGuide.includes('**오후 7시'))
assert.ok(!/09:00-12:00|12:00-18:00|18:00-23:00/.test(timeGuide))
assert.ok(timeGuide.includes('2026-09-10'))
const faq = read('blog/suwon-weekend-night-booking-faq.html')
assert.ok(faq.includes('href="/blog/icheon-eup-myeon-booking-guide"'))
assert.ok(!faq.includes('icheon-bubal-majang-booking-notes'))
assert.ok(!/빠른 회복|깊은 근육 이완|문의가 가장 몰리는/.test(faq))
console.log('PASS rendered SEO: sitemap 100 unique URLs; 22 regional navigations, anchors, H1/canonicals and price tracking; 6 regional article shortcuts; 2 corrected Suwon articles.')
