import ClientPage from "./ClientPage"
import type { Metadata } from "next"

const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION

export const metadata: Metadata = {
  title: "노마드출장마사지 | 경기 주요 22개 지역 예약 안내",
  description:
    "경기 주요 22개 지역 출장마사지·홈타이 예약 안내. 이천, 경기 광주, 여주, 용인, 수원, 화성 등에서 주소와 희망 시간을 확인해 방문 가능 일정을 안내합니다.",
  openGraph: {
    title: "노마드출장마사지 | 경기 주요 22개 지역 예약 안내",
    description: "오후 7시~오전 4시 경기 출장마사지. 집이나 호텔에서 편하게 받는 프리미엄 힐링 서비스.",
    url: "https://www.nomadthai.kr",
    siteName: "노마드출장마사지",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "https://www.nomadthai.kr/og/home",
        width: 1200,
        height: 630,
        alt: "노마드 출장마사지 대표 카드 이미지",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "노마드출장마사지 | 경기 주요 22개 지역 예약",
    description: "오후 7시~오전 4시 운영, 후불제 출장마사지 예약 서비스",
    images: ["https://www.nomadthai.kr/og/home"],
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
  ...(googleSiteVerification
    ? {
        verification: {
          google: googleSiteVerification,
        },
      }
    : {}),
  alternates: {
    canonical: "https://www.nomadthai.kr",
  },
}

export default function HomePage() {
  return <ClientPage />
}
