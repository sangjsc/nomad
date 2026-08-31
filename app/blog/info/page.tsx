import BlogPageClient from "@/components/BlogPageClient"
import { BLOG_POSTS_PER_PAGE, getPaginatedPosts, getPostsByCategory } from "@/lib/blog"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "테라피 인사이트 | 노마드출장마사지 블로그",
  description: "마사지 이용 팁과 웰빙 인사이트를 정리한 정보형 콘텐츠 모음입니다.",
  openGraph: {
    title: "테라피 인사이트 | 노마드출장마사지 블로그",
    description: "마사지 이용 팁과 웰빙 인사이트 콘텐츠 모음",
    url: "https://www.nomadthai.kr/blog/info",
    siteName: "노마드출장마사지",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "https://www.nomadthai.kr/og/home",
        width: 1200,
        height: 630,
        alt: "테라피 인사이트 블로그",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "테라피 인사이트 | 노마드출장마사지",
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
