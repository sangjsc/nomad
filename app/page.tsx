import ClientPage from "./ClientPage"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "노마드 출장마사지 | 경기 프리미엄 출장안마 24시",
  description:
    "경기 전역 24시간 출장마사지·출장안마 전문. 빠른 배차, 100% 후불제, 여성 전문 관리사가 즉시 방문합니다.",
  keywords:
    "출장마사지, 출장안마, 경기출장마사지, 수원출장마사지, 수원 출장마사지, 용인출장마사지, 용인 출장마사지, 이천출장마사지, 이천 출장마사지, 출장마사지24시, 방문마사지",
  openGraph: {
    title: "노마드 출장마사지 | 집·호텔에서 즐기는 프리미엄 힐링",
    description: "24시간 경기 출장마사지. 집이나 호텔에서 편하게 받는 프리미엄 힐링 서비스.",
    url: "https://www.nomadthai.kr",
    siteName: "노마드 출장마사지",
    locale: "ko_KR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://www.nomadthai.kr",
  },
}

export default function HomePage() {
  return <ClientPage />
}
