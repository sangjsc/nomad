import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle2, Clock, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  CONSULTATION_HOURS,
  KAKAO_CHAT_URL,
  PAYMENT_POLICY,
  PHONE_DISPLAY,
  PHONE_TEL,
  SERVICE_AREAS,
  SERVICE_INFORMATION_UPDATED,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site"

export const metadata: Metadata = {
  title: "운영·이용 안내 | 노마드출장마사지",
  description:
    "노마드출장마사지가 경기도 22개 지역의 집과 숙소로 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없이 서비스 후 결제. 오후 7시~오전 4시 상담.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "운영·이용 안내 | 노마드출장마사지",
    description: "노마드출장마사지가 경기도 22개 지역의 집과 숙소로 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없이 서비스 후 결제. 오후 7시~오전 4시 상담.",
    url: "/about",
    type: "website",
    images: [{ url: "/og/home", width: 1200, height: 630, alt: "노마드출장마사지 운영·이용 안내" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "운영·이용 안내 | 노마드출장마사지",
    description: "노마드출장마사지가 경기도 22개 지역의 집과 숙소로 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없이 서비스 후 결제. 오후 7시~오전 4시 상담.",
    images: ["/og/home"],
  },
}

const steps = [
  {
    title: "원하는 장소로 방문",
    text: "자택·오피스텔·숙소로 찾아갑니다. 예약에는 주소와 건물명, 출입·주차 정보가 필요합니다.",
  },
  {
    title: "타이·아로마·스웨디시",
    text: "타이 60분 7만원부터 시작하며 코스별로 60·90·120분을 제공합니다. 방문 일정은 상담 후 정합니다.",
  },
  {
    title: "추가비 없는 후불 결제",
    text: `예약금과 출장·주차·야간 추가비 없이 ${PAYMENT_POLICY}합니다.`,
  },
]

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${SITE_URL}/about#webpage`,
    url: `${SITE_URL}/about`,
    name: `${SITE_NAME} 운영 및 이용 안내`,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "ko-KR",
  }

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="border-b border-slate-200 bg-gradient-to-br from-rose-50 via-white to-purple-50 py-14 sm:py-20">
        <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="font-semibold text-rose-600">노마드출장마사지</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">운영·이용 안내</h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            {SITE_NAME}는 이천을 비롯한 경기도 {SERVICE_AREAS.length}개 지역의 집과 숙소로 찾아갑니다. 타이·아로마·스웨디시를 편한 공간에서 즐기고, 추가비 없이 서비스 후 현장에서 결제합니다.
          </p>
          <p className="mt-3 text-sm text-slate-500">
            운영 정보 확인일 <time dateTime={SERVICE_INFORMATION_UPDATED}>{SERVICE_INFORMATION_UPDATED}</time>
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={step.title} className="border-slate-200 shadow-sm">
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 font-bold text-rose-700">{index + 1}</div>
                <h2 className="mt-5 text-xl font-bold text-slate-950">{step.title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{step.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="text-3xl font-bold text-slate-950">노마드 서비스 안내</h2>
            <ul className="mt-6 space-y-4 text-slate-700">
              {[
                `상담시간: 매일 ${CONSULTATION_HOURS}`,
                `서비스 지역: 이천·경기 광주·여주·용인 등 경기도 ${SERVICE_AREAS.length}개 지역`,
                "코스: 타이·아로마·스웨디시, 60·90·120분",
                `결제: 예약금·선입금 없이 ${PAYMENT_POLICY}`,
                "추가비: 모든 지역 출장·주차·야간 추가비 없음",
                "호텔·숙소는 예약 전 외부 방문과 객실 출입 허용 여부 확인",
              ].map((item) => (
                <li key={item} className="flex gap-3 leading-7">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-rose-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-amber-950">
              <div className="flex items-center gap-2 font-bold"><ShieldCheck className="h-5 w-5" />방문 일정</div>
              <p className="mt-2">
                방문 시간은 주소와 예약 현황에 따라 안내합니다. 당일 예약도 전화·카카오톡 상담으로 접수합니다.
              </p>
            </div>
          </div>

          <Card className="border-0 bg-slate-950 text-white shadow-xl">
            <CardContent className="p-7 sm:p-8">
              <Clock className="h-9 w-9 text-rose-300" />
              <h2 className="mt-5 text-2xl font-bold">전화·카카오톡 예약</h2>
              <p className="mt-3 leading-7 text-slate-300">매일 오후 7시부터 다음 날 오전 4시까지 예약 상담을 받습니다. 코스와 금액을 안내한 뒤 방문 일정을 정합니다.</p>
              <p className="mt-7 text-2xl font-bold text-rose-300">{PHONE_DISPLAY}</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Button asChild className="min-h-12 bg-rose-600 hover:bg-rose-700">
                  <a href={PHONE_TEL}><Phone className="mr-2 h-4 w-4" />전화 상담</a>
                </Button>
                <Button asChild className="min-h-12 bg-emerald-600 hover:bg-emerald-700">
                  <a href={KAKAO_CHAT_URL} target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2 h-4 w-4" />카카오톡 상담</a>
                </Button>
                <Button asChild variant="outline" className="min-h-12 border-slate-600 bg-transparent text-white hover:bg-slate-800 hover:text-white">
                  <Link href="/contact"><Phone className="mr-2 h-4 w-4" />예약 방법</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <nav className="mt-12 flex flex-wrap gap-4 border-t border-slate-200 pt-8 text-sm font-semibold" aria-label="관련 공식 안내">
          <Link href="/service-areas" className="inline-flex items-center text-rose-700 hover:text-rose-800"><MapPin className="mr-2 h-4 w-4" />전체 서비스 지역</Link>
          <Link href="/contact" className="text-rose-700 hover:text-rose-800">문의·예약</Link>
          <Link href="/icheon" className="text-rose-700 hover:text-rose-800">이천 지역 안내</Link>
        </nav>
      </section>
    </main>
  )
}
