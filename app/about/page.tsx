import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle2, Clock, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PHONE_DISPLAY, PHONE_TEL, SITE_NAME, SITE_URL } from "@/lib/site"

export const metadata: Metadata = {
  title: "프리미엄 출장 마사지 | 노마드출장마사지",
  description:
    "노마드출장마사지는 경기도 주요 도시를 중심으로 최상의 출장안마와 출장마사지 서비스를 제공하는 프리미엄 브랜드입니다.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "프리미엄 출장 마사지 | 노마드출장마사지",
    description: "바쁜 일상에 지친 고객님들을 위해 노마드출장마사지가 여러분을 찾아갑니다.",
    url: "/about",
    type: "website",
    images: [{ url: "/og/home", width: 1200, height: 630, alt: "노마드출장마사지 이용 안내" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "프리미엄 출장 마사지 | 노마드출장마사지",
    description: "노마드출장마사지의 예약 방법과 이용 전 확인 사항을 안내합니다.",
    images: ["/og/home"],
  },
}

const steps = [
  { title: "집에서 편안하게, 이동 없이", text: "고객님의 공간에서 프리미엄 마사지 서비스를 받으세요" },
  { title: "전문 관리사", text: "엄선된 20대 전문 관리사가 최상의 서비스 제공" },
  { title: "안전한 후불제", text: "서비스 완료 후 결제하는 100% 안심 시스템" },
]

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${SITE_URL}/about#webpage`,
    url: `${SITE_URL}/about`,
    name: `${SITE_NAME} 예약 및 이용 안내`,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "ko-KR",
  }

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="border-b border-slate-200 bg-gradient-to-br from-rose-50 via-white to-purple-50 py-20">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <p className="font-semibold text-rose-600">프리미엄 출장 마사지</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">ABOUT US</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            {SITE_NAME}는 경기도 주요 도시를 중심으로 최상의 출장안마와 출장마사지 서비스를 제공하는 프리미엄 브랜드입니다.
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-5xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={step.title} className="border-slate-200 shadow-sm">
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 font-bold text-rose-700">{index + 1}</div>
                <h2 className="mt-5 text-xl font-bold text-slate-900">{step.title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{step.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">프리미엄 출장 마사지</h2>
            <ul className="mt-6 space-y-4 text-slate-700">
              {[
                "오후 7시~오전 4시 운영",
                "집, 오피스텔, 호텔 등 가장 편안한 공간에서 격이 다른 서비스를 경험해 보세요.",
                "실력과 마인드를 겸비한 전문 여성 관리사로 구성되어 있습니다.",
                "서비스에 만족하신 후 결제하는 100% 안심 후불제입니다.",
              ].map((item) => (
                <li key={item} className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-rose-500" /><span>{item}</span></li>
              ))}
            </ul>
          </div>
          <Card className="border-0 bg-slate-950 text-white shadow-xl">
            <CardContent className="p-8">
              <Clock className="h-9 w-9 text-rose-300" />
              <h2 className="mt-5 text-2xl font-bold">지금 바로 예약하세요</h2>
              <p className="mt-3 leading-7 text-slate-300">최고의 프리미엄 마사지 서비스를 경험하세요</p>
              <p className="mt-7 text-2xl font-bold text-rose-300">{PHONE_DISPLAY}</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="bg-rose-600 hover:bg-rose-700"><a href={PHONE_TEL}><Phone className="mr-2 h-4 w-4" />전화 상담</a></Button>
                <Button asChild variant="outline" className="border-slate-600 bg-transparent text-white hover:bg-slate-800 hover:text-white"><Link href="/service-areas"><MapPin className="mr-2 h-4 w-4" />서비스 지역</Link></Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
