import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "마사지 정보 블로그 | 노마드출장마사지",
  description: "타이·아로마·스웨디시 코스 비교, 지역별 방문 예약, 후불 결제와 이용 안내. 노마드출장마사지 블로그.",
  keywords: "마사지 정보, 아로마테라피, 스트레스 해소, 건강 정보, 출장마사지 팁, 웰빙 라이프",
  openGraph: {
    title: "마사지 정보 블로그 | 노마드출장마사지",
    description: "타이·아로마·스웨디시 코스 비교, 지역별 방문 예약, 후불 결제와 이용 안내. 노마드출장마사지 블로그.",
    url: "https://www.nomadthai.kr/blog",
    siteName: "노마드출장마사지",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "https://www.nomadthai.kr/og/home",
        width: 1200,
        height: 630,
        alt: "노마드출장마사지 블로그",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "노마드출장마사지 블로그",
    description: "타이·아로마·스웨디시 코스 비교, 지역별 방문 예약, 후불 결제와 이용 안내. 노마드출장마사지 블로그.",
    images: ["https://www.nomadthai.kr/og/home"],
  },
  alternates: {
    types: {
      "application/rss+xml": "https://www.nomadthai.kr/blog/rss.xml",
    },
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
