import BlogPageClient from "@/components/BlogPageClient"
import { BLOG_POSTS_PER_PAGE, getPaginatedPosts, getPostsByCategory } from "@/lib/blog"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "코스 선택과 준비 | 노마드출장마사지 블로그",
  description: "타이·아로마·스웨디시 중 어떤 코스를 고를지, 마사지 전후에는 무엇을 챙길지 살펴보세요.",
  openGraph: {
    title: "코스 선택과 준비 | 노마드출장마사지 블로그",
    description: "마사지 코스를 고르거나 처음 예약하실 때 읽어보세요.",
    url: "https://www.nomadthai.kr/blog/info",
    siteName: "노마드출장마사지",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "https://www.nomadthai.kr/og/home",
        width: 1200,
        height: 630,
        alt: "마사지 코스 선택과 준비",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "코스 선택과 준비 | 노마드출장마사지",
    description: "마사지 이용 팁과 웰빙 정보",
    images: ["https://www.nomadthai.kr/og/home"],
  },
  alternates: {
    canonical: "https://www.nomadthai.kr/blog/info",
  },
}

export default function InfoBlogPage() {
  const paginated = getPaginatedPosts(getPostsByCategory("info"), 1, BLOG_POSTS_PER_PAGE)

  return (
    <BlogPageClient
      posts={paginated.posts}
      category="info"
      currentPage={paginated.currentPage}
      totalPages={paginated.totalPages}
      basePath="/blog/info"
    />
  )
}
