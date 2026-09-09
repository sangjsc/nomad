import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Clock, CreditCard, MapPin, MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  CONSULTATION_HOURS,
  KAKAO_CHAT_URL,
  PAYMENT_POLICY,
  PHONE_DISPLAY,
  PHONE_TEL,
  SERVICE_AREAS,
  SERVICE_COURSES,
  SERVICE_INFORMATION_UPDATED,
  SITE_URL,
} from "@/lib/site"

export const metadata: Metadata = {
  title: "경기도 출장마사지 지역·가격·예약 안내 | 노마드출장마사지",
  description:
    "이천·경기 광주·여주·용인·안산 등 경기도 22개 지역의 출장마사지 가격과 예약 방법을 알아보세요. 오후 7시~오전 4시 상담, 출장·주차·야간 추가비 없이 서비스 후 결제합니다.",
  alternates: { canonical: "/service-areas" },
  openGraph: {
    title: "경기도 출장마사지 지역·가격·예약 안내 | 노마드출장마사지",
    description: "경기도 22개 지역의 출장마사지 가격과 예약 방법을 알아보세요. 출장·주차·야간 추가비 없이 서비스 후 결제합니다.",
    url: "/service-areas",
    type: "website",
    images: [{ url: "/og/home", width: 1200, height: 630, alt: "경기도 출장마사지 지역·가격·예약 안내" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "경기도 출장마사지 지역·가격·예약 안내",
    description: "이천·경기 광주·여주·용인·안산 등 22개 지역의 가격과 예약 방법을 알아보세요.",
    images: ["/og/home"],
  },
}

const FEATURED_AREA_SLUGS = ["icheon", "gwangju", "yeoju", "yongin", "ansan"]

const faqItems = [
  { question: "경기 광주는 광주광역시와 같은 지역인가요?", answer: "아닙니다. 방문 지역은 광주광역시가 아닌 경기도 광주시입니다." },
  { question: "몇 시까지 상담할 수 있나요?", answer: `매일 ${CONSULTATION_HOURS}에 전화와 카카오톡으로 상담합니다.` },
  { question: "결제는 언제 하나요?", answer: `예약금이나 선입금 없이 ${PAYMENT_POLICY}합니다. 어느 지역이든 출장·주차·야간 추가비는 없습니다.` },
  { question: "당일 예약도 가능한가요?", answer: "당일에도 문의하실 수 있습니다. 바로 방문하기 어려울 수 있으니 받으실 주소와 원하는 시간을 알려주세요." },
  { question: "호텔이나 숙소에서도 받을 수 있나요?", answer: "먼저 숙소에 외부인 방문과 객실 출입이 허용되는지 확인해주세요. 허용되는 곳이라면 주소와 출입 방법을 알려주시면 됩니다." },
  { question: "동네별로 알아둘 내용이 있나요?", answer: "받으실 지역을 선택하면 읍면동별 주소 전달 방법과 출입·주차 시 알아둘 내용을 볼 수 있습니다." },
]

function AreaCard({ area, featured = false }: { area: (typeof SERVICE_AREAS)[number]; featured?: boolean }) {
  return (
    <Link href={`/${area.slug}`} className="group block h-full">
      <Card className={`h-full transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-lg ${featured ? "border-rose-200 bg-gradient-to-br from-rose-50 to-white" : "border-slate-200"}`}>
        <CardContent className="flex h-full items-center justify-between p-5">
          <div>
            <h3 className="font-bold text-slate-900">{area.name} 예약 안내</h3>
            <p className="mt-1 text-sm text-slate-500">{area.fullName} · 코스·가격</p>
          </div>
          <ArrowRight className="h-5 w-5 text-rose-500 transition-transform group-hover:translate-x-1" />
        </CardContent>
      </Card>
    </Link>
  )
}

export default function ServiceAreasPage() {
  const featuredAreas = FEATURED_AREA_SLUGS
    .map((slug) => SERVICE_AREAS.find((area) => area.slug === slug))
    .filter((area): area is (typeof SERVICE_AREAS)[number] => Boolean(area))

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/service-areas#webpage`,
        url: `${SITE_URL}/service-areas`,
        name: "경기도 출장마사지 서비스 지역·가격·예약 안내",
        description: "경기도 22개 지역의 출장마사지 코스별 가격, 상담시간과 예약 방법",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#massage-service` },
        breadcrumb: { "@id": `${SITE_URL}/service-areas#breadcrumb` },
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: SERVICE_AREAS.length,
          itemListElement: SERVICE_AREAS.map((area, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: area.fullName,
            url: `${SITE_URL}/${area.slug}`,
          })),
        },
        dateModified: SERVICE_INFORMATION_UPDATED,
        inLanguage: "ko-KR",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/service-areas#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "홈", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "경기도 서비스 지역", item: `${SITE_URL}/service-areas` },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/service-areas#faq`,
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-rose-950 py-14 text-white sm:py-20">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10"><MapPin className="h-7 w-7 text-rose-300" /></div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">경기도 출장마사지 서비스 지역·가격·예약 안내</h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
            이천·경기 광주·여주·용인·안산 등 경기도 22개 지역으로 방문합니다. 받으실 지역을 선택해 코스와 가격을 살펴보세요. 어느 지역이든 출장·주차·야간 추가비는 없습니다.
          </p>
          <div className="mx-auto mt-7 grid max-w-3xl gap-3 text-left sm:grid-cols-3">
            <div className="rounded-2xl bg-white/10 p-4"><Clock className="mb-2 h-5 w-5 text-rose-300" /><p className="font-semibold">상담시간</p><p className="mt-1 text-sm text-slate-200">{CONSULTATION_HOURS}</p></div>
            <div className="rounded-2xl bg-white/10 p-4"><CreditCard className="mb-2 h-5 w-5 text-rose-300" /><p className="font-semibold">결제 기준</p><p className="mt-1 text-sm text-slate-200">{PAYMENT_POLICY}</p></div>
            <div className="rounded-2xl bg-white/10 p-4"><MapPin className="mb-2 h-5 w-5 text-rose-300" /><p className="font-semibold">방문 일정</p><p className="mt-1 text-sm text-slate-200">방문 시간 문의</p></div>
          </div>
          <p className="mx-auto mt-6 max-w-3xl rounded-xl border border-amber-300/30 bg-amber-200/10 px-4 py-3 text-sm leading-6 text-amber-50">
            원하시는 시간이 있다면 미리 문의해주세요. 당일 예약은 바로 방문하기 어려울 수 있습니다.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="min-h-12 bg-white font-bold text-rose-700 hover:bg-rose-50"><a href={PHONE_TEL}><Phone className="mr-2 h-5 w-5" />{PHONE_DISPLAY}</a></Button>
            <Button asChild size="lg" className="min-h-12 bg-emerald-500 font-bold text-white hover:bg-emerald-600"><a href={KAKAO_CHAT_URL} target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2 h-5 w-5" />카카오톡 상담</a></Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-14 sm:py-16">
        <div>
          <p className="font-semibold text-rose-600">지역별 안내</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">지역별 예약 안내 바로가기</h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-600">받으실 지역의 가격과 예약 방법을 살펴보세요.</p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{featuredAreas.map((area) => <AreaCard key={area.slug} area={area} featured />)}</div>
        </div>
        <div className="mt-14 border-t border-slate-200 pt-12">
          <h2 className="text-2xl font-bold text-slate-900">경기도 주요 22개 서비스 지역</h2>
          <p className="mt-3 text-slate-600">목록에서 지역을 고른 뒤, 전화나 카카오톡으로 주소와 원하는 시간을 알려주세요.</p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{SERVICE_AREAS.map((area) => <AreaCard key={area.slug} area={area} />)}</div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-14 sm:py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <p className="font-semibold text-rose-600">코스·가격</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">코스별 가격표</h2>
          <p className="mt-3 text-slate-600">원하는 코스와 이용 시간을 골라주세요. 예약금 없이 서비스가 끝난 뒤 결제합니다.</p>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {SERVICE_COURSES.map((course) => (
              <Card key={course.name} className="border-slate-200"><CardContent className="p-5 sm:p-6">
                <h3 className="text-xl font-bold text-slate-900">{course.name} 마사지</h3>
                <dl className="mt-4 divide-y divide-slate-100">
                  {course.prices.map((item) => <div key={item.minutes} className="flex items-center justify-between py-3"><dt className="text-slate-600">{item.minutes}분</dt><dd className="font-bold text-slate-900">{item.price.toLocaleString("ko-KR")}원</dd></div>)}
                </dl>
              </CardContent></Card>
            ))}
          </div>
          <p className="mt-5 text-sm text-slate-500">가격 정보 업데이트: {SERVICE_INFORMATION_UPDATED}</p>
        </div>
      </section>

      <section className="container mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:py-16 lg:grid-cols-2">
        <div>
          <p className="font-semibold text-rose-600">예약 준비</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">문의할 때 알려주세요</h2>
          <ul className="mt-6 space-y-3 text-slate-700">
            {["받으실 주소와 건물명", "원하는 예약 시간과 가능한 다른 시간", "원하는 코스와 60·90·120분 중 이용 시간", "호텔·숙소의 외부인 출입 규정", "연락 가능한 전화번호"].map((item) => <li key={item} className="flex gap-3 rounded-xl bg-white p-4 shadow-sm"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" /><span>{item}</span></li>)}
          </ul>
        </div>
        <div id="faq">
          <p className="font-semibold text-rose-600">궁금한 점</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">경기도 출장마사지 자주 묻는 질문</h2>
          <div className="mt-6 space-y-3">{faqItems.map((item) => <article key={item.question} className="rounded-2xl border border-slate-200 bg-white p-5"><h3 className="font-bold text-slate-900">{item.question}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{item.answer}</p></article>)}</div>
        </div>
      </section>

      <section className="bg-slate-900 py-14 text-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">예약은 전화로 문의해주세요</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">받으실 장소와 원하는 시간을 알려주세요. 코스와 가격이 궁금하시면 함께 물어보셔도 됩니다.</p>
          <Button asChild size="lg" className="mt-7 min-h-12 bg-rose-600 font-bold text-white hover:bg-rose-700"><a href={PHONE_TEL}><Phone className="mr-2 h-5 w-5" />{PHONE_DISPLAY}</a></Button>
          <p className="mt-6 text-xs text-slate-400">정보 업데이트: {SERVICE_INFORMATION_UPDATED}</p>
        </div>
      </section>
    </main>
  )
}
