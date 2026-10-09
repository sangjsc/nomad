import BlogPageClient from "@/components/BlogPageClient"
import { BLOG_POSTS_PER_PAGE, getPaginatedPosts, getPostsByCategory } from "@/lib/blog"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "코스 선택과 준비 | 노마드출장마사지 블로그",
  description: "타이·아로마·스웨디시 코스 비교와 마사지 전후 이용 정보. 방식·시간·강도별 차이를 정리한 노마드 안내.",
  openGraph: {
    title: "코스 선택과 준비 | 노마드출장마사지 블로그",
    description: "타이·아로마·스웨디시 코스 비교와 마사지 전후 이용 정보. 방식·시간·강도별 차이를 정리한 노마드 안내.",
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
    description: "타이·아로마·스웨디시 코스 비교와 마사지 전후 이용 정보. 방식·시간·강도별 차이를 정리한 노마드 안내.",
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
