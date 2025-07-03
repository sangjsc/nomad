import ClientPage from "./ClientPage"

export const metadata: Metadata = {
  title: "노마드출장마사지 | 이천·광주·여주·용인 출장안마",
  description:
    "경기도 이천, 광주, 여주, 용인 전문 출장마사지 & 출장안마. 24시간 예약, 100% 후불제. 전문 관리사가 신속하게 방문하여 최상의 힐링을 선사합니다.",
  keywords:
    "출장마사지, 출장안마, 이천출장안마, 광주출장안마, 여주출장안마, 용인출장안마, 경기도출장마사지, 24시간출장, 후불제출장",
  openGraph: {
    title: "노마드출장마사지 | 경기 동남부권 대표 출장안마",
    description: "이천, 광주, 여주, 용인 24시간 출장마사지. 집에서 편안하게 즐기는 프리미엄 힐링 서비스.",
    url: "https://nomadthai.kr",
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
    canonical: "https://nomadthai.kr",
  },
}

export default function HomePage() {
  return <ClientPage />
}
