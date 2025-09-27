import ClientPage from "./ClientPage"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "노마드출장마사지 | 전국 프리미엄 출장안마 홈케어",
  description:
    "전국 주요도시 전문 출장마사지 & 출장안마. 24시간 예약, 100% 후불제. 전문 관리사가 신속하게 방문하여 최상의 힐링을 선사합니다.",
  keywords:
    "출장마사지, 출장안마, 홈케어, 홈타이, 방문마사지, 24시간출장, 후불제출장",
  openGraph: {
    title: "노마드출장마사지 | 당신의 공간에서 즐기는 최상의 힐링",
    description: "24시간 전국 출장마사지. 집에서 편안하게 즐기는 프리미엄 힐링 서비스.",
    url: "https://www.nomadthai.kr",
    siteName: "노마드출장마사지",
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
