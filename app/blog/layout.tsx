import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "마사지 정보 블로그 | 노마드출장마사지",
  description: "출장마사지, 아로마테라피, 스트레스 해소법 등 건강과 웰빙에 관한 유용한 정보를 제공합니다. 경기도 이천, 광주, 여주, 용인 지역 전문 출장마사지 서비스.",
  keywords: "마사지 정보, 아로마테라피, 스트레스 해소, 건강 정보, 출장마사지 팁, 웰빙 라이프",
  openGraph: {
    title: "마사지 정보 블로그 | 노마드출장마사지",
    description: "건강과 웰빙에 관한 전문적인 정보를 제공하는 노마드출장마사지 블로그",
    url: "https://nomadthai.kr/blog",
    siteName: "노마드출장마사지",
    locale: "ko_KR",
    type: "website",
  },
  alternates: {
    canonical: "https://nomadthai.kr/blog",
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}