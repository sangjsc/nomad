import type { Metadata } from "next"
import Link from "next/link"
import { Clock, MapPin, MessageCircle, Phone, WalletCards } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  CONSULTATION_HOURS,
  KAKAO_CHAT_URL,
  PAYMENT_POLICY,
  PHONE_DISPLAY,
  PHONE_TEL,
  SERVICE_INFORMATION_UPDATED,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site"

export const metadata: Metadata = {
  title: "문의·예약 | 노마드출장마사지 연락처",
  description: `노마드출장마사지 전화 ${PHONE_DISPLAY} 또는 카카오톡으로 예약하세요. 매일 ${CONSULTATION_HOURS} 상담하며, 받으실 장소와 원하는 시간·코스를 알려주시면 됩니다.`,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "노마드출장마사지 문의·예약",
    description: `매일 ${CONSULTATION_HOURS} 전화·카카오톡으로 상담합니다. 받으실 장소와 원하는 시간·코스를 알려주세요.`,
    url: "/contact",
    type: "website",
    images: [{ url: "/og/home", width: 1200, height: 630, alt: "노마드출장마사지 문의·예약" }],
  },
}

const bookingDetails = [
  "받으실 주소와 건물명",
  "원하는 예약 시간과 가능한 다른 시간",
  "타이·아로마·스웨디시 중 원하는 코스",
  "60·90·120분 중 이용 시간",
  "호텔·숙소인 경우 외부 방문과 주차 가능 여부",
]

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${SITE_URL}/contact#webpage`,
    url: `${SITE_URL}/contact`,
    name: `${SITE_NAME} 문의·예약`,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "ko-KR",
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="border-b border-slate-200 bg-gradient-to-br from-rose-50 via-white to-indigo-50 py-14 sm:py-20">
        <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="font-semibold text-rose-600">전화·카카오톡 상담</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">문의·예약</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            받으실 장소와 원하는 시간, 코스를 알려주세요. 코스를 아직 정하지 못하셨다면 상담할 때 물어보셔도 됩니다.
          </p>
          <p className="mt-3 text-sm text-slate-500">
            운영 정보 확인일 <time dateTime={SERVICE_INFORMATION_UPDATED}>{SERVICE_INFORMATION_UPDATED}</time>
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-5 md:grid-cols-2">
          <Card className="border-slate-200 shadow-sm">
            <CardContent className="p-6 sm:p-8">
              <Phone className="h-9 w-9 text-rose-600" />
              <h2 className="mt-5 text-2xl font-bold text-slate-950">전화 상담</h2>
              <p className="mt-2 text-lg font-semibold text-slate-800">{PHONE_DISPLAY}</p>
              <p className="mt-3 leading-7 text-slate-600">상담 가능 시간은 매일 {CONSULTATION_HOURS}입니다.</p>
              <Button asChild className="mt-6 min-h-12 w-full bg-rose-600 hover:bg-rose-700 sm:w-auto">
                <a href={PHONE_TEL} aria-label="노마드출장마사지 공식 전화 상담">전화 연결</a>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm">
            <CardContent className="p-6 sm:p-8">
              <MessageCircle className="h-9 w-9 text-emerald-600" />
              <h2 className="mt-5 text-2xl font-bold text-slate-950">카카오톡 상담</h2>
              <p className="mt-3 leading-7 text-slate-600">통화가 어려우시면 카카오톡에 주소와 원하는 시간을 남겨주세요.</p>
              <Button asChild className="mt-6 min-h-12 w-full bg-emerald-600 hover:bg-emerald-700 sm:w-auto">
                <a href={KAKAO_CHAT_URL} target="_blank" rel="noopener noreferrer">카카오톡 열기</a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <Card className="border-slate-200 shadow-sm">
            <CardContent className="p-6 sm:p-8">
              <MapPin className="h-8 w-8 text-indigo-600" />
              <h2 className="mt-4 text-2xl font-bold text-slate-950">문의할 때 알려주실 정보</h2>
              <ol className="mt-6 space-y-4">
                {bookingDetails.map((detail, index) => (
                  <li key={detail} className="flex gap-3 leading-7 text-slate-700">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700">{index + 1}</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>

          <div className="space-y-5">
            <Card className="border-slate-200 shadow-sm">
              <CardContent className="p-6">
                <Clock className="h-7 w-7 text-amber-600" />
                <h2 className="mt-4 text-xl font-bold text-slate-950">방문 시간 안내</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  방문 가능한 시간은 예약마다 다릅니다. 원하시는 시간이 있다면 주소와 함께 알려주세요. 바로 방문하기 어려울 수 있어 예약 전에 시간을 상담해주세요.
                </p>
              </CardContent>
            </Card>
            <Card className="border-slate-200 shadow-sm">
              <CardContent className="p-6">
                <WalletCards className="h-7 w-7 text-emerald-600" />
                <h2 className="mt-4 text-xl font-bold text-slate-950">결제 기준</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  예약금과 선입금 없이 {PAYMENT_POLICY}합니다. 어느 지역이든 출장·주차·야간 추가비는 없습니다. 결제 수단은 예약할 때 문의해주세요.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <nav className="mt-10 flex flex-wrap gap-4 border-t border-slate-200 pt-8 text-sm font-semibold" aria-label="관련 공식 안내">
          <Link href="/about" className="text-rose-700 hover:text-rose-800">운영·이용 안내</Link>
          <Link href="/service-areas" className="text-rose-700 hover:text-rose-800">전체 서비스 지역</Link>
          <Link href="/icheon" className="text-rose-700 hover:text-rose-800">이천 지역 안내</Link>
        </nav>
      </section>
    </main>
  )
}
