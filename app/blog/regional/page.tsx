import BlogPageClient from "@/components/BlogPageClient"
import { BLOG_POSTS_PER_PAGE, getPaginatedPosts, getPostsByCategory } from "@/lib/blog"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "경기 지역 안심 가이드 | 노마드출장마사지 블로그",
  description: "경기 주요 지역별 출장마사지 이용 가이드를 모아둔 카테고리입니다.",
  openGraph: {
    title: "경기 지역 안심 가이드 | 노마드출장마사지 블로그",
    description: "경기 주요 지역별 출장마사지 이용 가이드 모음",
    url: "https://www.nomadthai.kr/blog/regional",
    siteName: "노마드출장마사지",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "https://www.nomadthai.kr/og/home",
        width: 1200,
        height: 630,
        alt: "경기 지역 출장마사지 가이드",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "경기 지역 안심 가이드 | 노마드출장마사지",
    description: "지역별 이용 포인트와 예약 체크리스트",
    images: ["https://www.nomadthai.kr/og/home"],
  },
  alternates: {
    canonical: "https://www.nomadthai.kr/blog/regional",
  },
}

export default function RegionalBlogPage() {
  const paginated = getPaginatedPosts(getPostsByCategory("regional"), 1, BLOG_POSTS_PER_PAGE)

  return (
    <BlogPageClient
      posts={paginated.posts}
      category="regional"
      currentPage={paginated.currentPage}
      totalPages={paginated.totalPages}
      basePath="/blog/regional"
    />
  )
}
