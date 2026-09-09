import BlogPageClient from "@/components/BlogPageClient"
import { BLOG_POSTS_PER_PAGE, getPaginatedPosts, getPostsByCategory } from "@/lib/blog"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "노마드 소식 | 노마드출장마사지 블로그",
  description: "운영시간과 결제 방법 등 노마드출장마사지를 이용하실 때 알아두실 소식입니다.",
  openGraph: {
    title: "노마드 소식 | 노마드출장마사지 블로그",
    description: "노마드출장마사지의 공식 공지와 서비스 운영 소식",
    url: "https://www.nomadthai.kr/blog/official",
    siteName: "노마드출장마사지",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "https://www.nomadthai.kr/og/home",
        width: 1200,
        height: 630,
        alt: "노마드출장마사지 공식 소식",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "노마드 소식 | 노마드출장마사지",
    description: "서비스 운영 공지와 업데이트 모음",
    images: ["https://www.nomadthai.kr/og/home"],
  },
  alternates: {
    canonical: "https://www.nomadthai.kr/blog/official",
  },
}

export default function OfficialBlogPage() {
  const paginated = getPaginatedPosts(getPostsByCategory("official"), 1, BLOG_POSTS_PER_PAGE)

  return (
    <BlogPageClient
      posts={paginated.posts}
      category="official"
      currentPage={paginated.currentPage}
      totalPages={paginated.totalPages}
      basePath="/blog/official"
    />
  )
}
