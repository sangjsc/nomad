export const SITE_URL = "https://www.nomadthai.kr"
export const SITE_NAME = "노마드출장마사지"
export const SITE_ALTERNATE_NAME = "노마드타이"
export const PHONE_DISPLAY = "010-8186-7771"
export const PHONE_TEL = "tel:01081867771"
export const KAKAO_CHAT_URL = "https://open.kakao.com/o/ssZxRuEh"
export const CONSULTATION_HOURS = "오후 7시~오전 4시"
export const SEO_RELEASE_DATE = "2026-09-01"
export const PAYMENT_POLICY = "서비스 완료 후 현장 결제"
export const SERVICE_INFORMATION_UPDATED = "2026-09-03"

export const SERVICE_COURSES = [
  { name: "타이", prices: [{ minutes: 60, price: 70000 }, { minutes: 90, price: 80000 }, { minutes: 120, price: 100000 }] },
  { name: "아로마", prices: [{ minutes: 60, price: 80000 }, { minutes: 90, price: 90000 }, { minutes: 120, price: 110000 }] },
  { name: "스웨디시", prices: [{ minutes: 60, price: 100000 }, { minutes: 90, price: 130000 }, { minutes: 120, price: 160000 }] },
] as const

export type ServiceArea = {
  slug: string
  name: string
  fullName: string
  tier: 1 | 2 | 3
}

// Tier 1 is the operator-confirmed priority. Tiers 2 and 3 use resident population,
// active lodging supply and regional access as demand proxies until Search Console
// and inquiry conversion data are available.
export const SERVICE_AREAS: readonly ServiceArea[] = [
  { slug: "icheon", name: "이천", fullName: "경기도 이천시", tier: 1 },
  { slug: "gwangju", name: "경기 광주", fullName: "경기도 광주시", tier: 1 },
  { slug: "yeoju", name: "여주", fullName: "경기도 여주시", tier: 1 },
  { slug: "yongin", name: "용인", fullName: "경기도 용인시", tier: 1 },
  { slug: "suwon", name: "수원", fullName: "경기도 수원시", tier: 2 },
  { slug: "hwaseong", name: "화성", fullName: "경기도 화성시", tier: 2 },
  { slug: "seongnam", name: "성남", fullName: "경기도 성남시", tier: 2 },
  { slug: "goyang", name: "고양", fullName: "경기도 고양시", tier: 2 },
  { slug: "pyeongtaek", name: "평택", fullName: "경기도 평택시", tier: 2 },
  { slug: "bucheon", name: "부천", fullName: "경기도 부천시", tier: 2 },
  { slug: "ansan", name: "안산", fullName: "경기도 안산시", tier: 2 },
  { slug: "anyang", name: "안양", fullName: "경기도 안양시", tier: 2 },
  { slug: "namyangju", name: "남양주", fullName: "경기도 남양주시", tier: 2 },
  { slug: "siheung", name: "시흥", fullName: "경기도 시흥시", tier: 2 },
  { slug: "paju", name: "파주", fullName: "경기도 파주시", tier: 2 },
  { slug: "osan", name: "오산", fullName: "경기도 오산시", tier: 3 },
  { slug: "hanam", name: "하남", fullName: "경기도 하남시", tier: 3 },
  { slug: "anseong", name: "안성", fullName: "경기도 안성시", tier: 3 },
  { slug: "gwangmyeong", name: "광명", fullName: "경기도 광명시", tier: 3 },
  { slug: "gunpo", name: "군포", fullName: "경기도 군포시", tier: 3 },
  { slug: "uiwang", name: "의왕", fullName: "경기도 의왕시", tier: 3 },
  { slug: "gwacheon", name: "과천", fullName: "경기도 과천시", tier: 3 },
]

export const PRIMARY_SERVICE_AREAS = SERVICE_AREAS.filter((area) => area.tier === 1)
export const SECONDARY_SERVICE_AREAS = SERVICE_AREAS.filter((area) => area.tier === 2)
export const TERTIARY_SERVICE_AREAS = SERVICE_AREAS.filter((area) => area.tier === 3)

export const schemaAreaServed = SERVICE_AREAS.map((area) => ({
  "@type": "City",
  name: area.fullName,
  containedInPlace: {
    "@type": "AdministrativeArea",
    name: "경기도",
  },
}))
