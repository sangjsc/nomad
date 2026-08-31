import type { Metadata } from "next"
import { notFound, permanentRedirect } from "next/navigation"
import BlogPageClient from "@/components/BlogPageClient"
import {
  BLOG_POSTS_PER_PAGE,
  getCategoryPageCount,
  getPaginatedPosts,
  getPostsByCategory,
} from "@/lib/blog"

interface InfoPaginatedPageProps {
  params: Promise<{
    page: string
  }>
}

function parsePageNumber(rawPage: string): number | null {
  const page = Number(rawPage)
  if (!Number.isInteger(page) || page < 1) {
    return null
  }
  return page
}

export function generateStaticParams() {
  const totalPages = getCategoryPageCount("info", BLOG_POSTS_PER_PAGE)
  if (totalPages <= 1) {
    return []
  }

  return Array.from({ length: totalPages - 1 }, (_, index) => ({
    page: String(index + 2),
  }))
}

export async function generateMetadata({ params }: InfoPaginatedPageProps): Promise<Metadata> {
  const { page: rawPage } = await params
  const page = parsePageNumber(rawPage)

  if (!page) {
    return {
      title: "글을 찾을 수 없습니다 | 노마드출장마사지",
      robots: { index: false, follow: false },
    }
  }

  if (page === 1) {
    return {
      title: "테라피 인사이트 | 노마드출장마사지 블로그",
      alternates: {
        canonical: "https://www.nomadthai.kr/blog/info",
      },
    }
  }

  const totalPages = getCategoryPageCount("info", BLOG_POSTS_PER_PAGE)
  if (page > totalPages) {
    return {
      title: "글을 찾을 수 없습니다 | 노마드출장마사지",
      robots: { index: false, follow: false },
    }
  }

  const title = `테라피 인사이트 ${page}페이지 | 노마드출장마사지 블로그`
  const description = `마사지 이용 팁과 웰빙 정보 ${page}페이지입니다.`
  const url = `https://www.nomadthai.kr/blog/info/page/${page}`

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website", images: ["https://www.nomadthai.kr/og/home"] },
    twitter: { card: "summary_large_image", title, description, images: ["https://www.nomadthai.kr/og/home"] },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function InfoPaginatedPage({ params }: InfoPaginatedPageProps) {
  const { page: rawPage } = await params
  const page = parsePageNumber(rawPage)

  if (!page) {
    notFound()
  }

  if (page === 1) {
    permanentRedirect("/blog/info")
  }

  const paginated = getPaginatedPosts(getPostsByCategory("info"), page, BLOG_POSTS_PER_PAGE)

  if (page > paginated.totalPages) {
    notFound()
  }

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
