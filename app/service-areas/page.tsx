import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Clock, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  PRIMARY_SERVICE_AREAS,
  SECONDARY_SERVICE_AREAS,
  SERVICE_AREAS,
  SITE_URL,
  TERTIARY_SERVICE_AREAS,
} from "@/lib/site"

export const metadata: Metadata = {
  title: "경기 주요 22개 서비스 지역 | 노마드출장마사지",
  description:
    "경기도 이천, 광주(경기도 광주시), 여주, 용인, 수원, 화성, 평택, 시흥, 부천, 광명 포함 주요 도시 출장마사지 서비스를 제공합니다. 오후 7시~오전 4시 운영, 100% 후불제 예약.",
  alternates: { canonical: "/service-areas" },
  openGraph: {
    title: "경기 주요 22개 서비스 지역 | 노마드출장마사지",
    description: "이천·경기 광주·여주·용인 등 경기 주요 22개 서비스 지역의 출장마사지 예약 범위와 운영시간을 확인하세요.",
    url: "/service-areas",
    type: "website",
    images: [{ url: "/og/home", width: 1200, height: 630, alt: "경기 주요 22개 서비스 지역" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "경기 주요 22개 서비스 지역 | 노마드출장마사지",
    description: "이천·경기 광주·여주·용인 등 경기 주요 22개 지역의 예약 안내를 확인하세요.",
    images: ["/og/home"],
  },
}

function AreaCard({ area, featured = false }: { area: (typeof SERVICE_AREAS)[number]; featured?: boolean }) {
  return (
    <Link href={`/${area.slug}`} className="group block h-full">
      <Card className={`h-full transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-lg ${featured ? "border-rose-200 bg-gradient-to-br from-rose-50 to-white" : "border-slate-200"}`}>
        <CardContent className="flex h-full items-center justify-between p-5">
          <div>
            <p className="font-bold text-slate-900">{area.name} 출장마사지</p>
            <p className="mt-1 text-sm text-slate-500">{area.fullName} 전지역</p>
          </div>
          <ArrowRight className="h-5 w-5 text-rose-500 transition-transform group-hover:translate-x-1" />
        </CardContent>
      </Card>
    </Link>
  )
}

export default function ServiceAreasPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/service-areas#webpage`,
    url: `${SITE_URL}/service-areas`,
    name: "경기도 출장마사지 서비스 지역",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#massage-service` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: SERVICE_AREAS.map((area, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: area.fullName,
        url: `${SITE_URL}/${area.slug}`,
      })),
    },
    inLanguage: "ko-KR",
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-rose-950 py-20 text-white">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
            <MapPin className="h-7 w-7 text-rose-300" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">경기 주요 22개 지역 출장마사지</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            오후 7시부터 오전 4시까지 신속하게 찾아가는 프리미엄 홈케어 서비스
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-slate-200">
            <span className="rounded-full bg-white/10 px-4 py-2"><Clock className="mr-2 inline h-4 w-4" />오후 7시~오전 4시 운영</span>
            <span className="rounded-full bg-white/10 px-4 py-2"><Phone className="mr-2 inline h-4 w-4" />{PHONE_DISPLAY}</span>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-16">
        <div className="mb-12">
          <p className="font-semibold text-rose-600">Service Areas</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">이천 · 경기 광주 · 여주 · 용인</h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-600">
            노마드출장마사지는 이천·경기 광주·여주·용인 등 경기 주요 지역의 방문 가능 일정을 안내합니다
          </p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PRIMARY_SERVICE_AREAS.map((area) => <AreaCard key={area.slug} area={area} featured />)}
          </div>
        </div>

        <div className="border-t border-slate-200 pt-12">
          <h2 className="text-2xl font-bold text-slate-900">추가 서비스 지역</h2>
          <p className="mt-3 text-slate-600">현재 위치와 접수 순서에 따라 지역별 방문 가능 시간을 안내합니다</p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[...SECONDARY_SERVICE_AREAS, ...TERTIARY_SERVICE_AREAS].map((area) => <AreaCard key={area.slug} area={area} />)}
          </div>
        </div>

        <Card className="mt-14 overflow-hidden border-0 bg-gradient-to-r from-rose-600 to-fuchsia-600 text-white shadow-xl">
          <CardContent className="flex flex-col items-center justify-between gap-6 p-8 text-center md:flex-row md:text-left">
            <div>
              <h2 className="text-2xl font-bold">지금 바로 예약하세요!</h2>
              <p className="mt-2 text-rose-50">경기 주요 22개 지역 예약 안내 · 100% 후불제 · 오후 7시~오전 4시 운영</p>
            </div>
            <Button asChild size="lg" className="shrink-0 bg-white text-rose-700 hover:bg-rose-50">
              <a href={PHONE_TEL}><Phone className="mr-2 h-5 w-5" />전화 상담</a>
            </Button>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}
