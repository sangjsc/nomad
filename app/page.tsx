import ClientPage from "./ClientPage"
import type { Metadata } from "next"

const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION

export const metadata: Metadata = {
  title: "노마드출장마사지 | 경기 주요 22개 지역 예약 안내",
  description:
    "이천·경기 광주·여주·용인 등 경기 22개 지역으로 직접 찾아가는 노마드출장마사지. 타이 60분 7만원부터, 출장·주차·야간 추가비 없는 100% 후불제. 오후 7시~오전 4시 상담.",
  openGraph: {
    title: "노마드출장마사지 | 경기 주요 22개 지역 예약 안내",
    description: "이천·경기 광주·여주·용인 등 경기 22개 지역으로 직접 찾아가는 노마드출장마사지. 타이 60분 7만원부터, 출장·주차·야간 추가비 없는 100% 후불제. 오후 7시~오전 4시 상담.",
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
    description: "이천·경기 광주·여주·용인 등 경기 22개 지역으로 직접 찾아가는 노마드출장마사지. 타이 60분 7만원부터, 출장·주차·야간 추가비 없는 100% 후불제. 오후 7시~오전 4시 상담.",
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
