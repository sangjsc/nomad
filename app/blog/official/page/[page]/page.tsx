import type { Metadata } from "next"
import { notFound, permanentRedirect } from "next/navigation"
import BlogPageClient from "@/components/BlogPageClient"
import {
  BLOG_POSTS_PER_PAGE,
  getCategoryPageCount,
  getPaginatedPosts,
  getPostsByCategory,
} from "@/lib/blog"

interface OfficialPaginatedPageProps {
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
  const totalPages = getCategoryPageCount("official", BLOG_POSTS_PER_PAGE)
  if (totalPages <= 1) {
    return []
  }

  return Array.from({ length: totalPages - 1 }, (_, index) => ({
    page: String(index + 2),
  }))
}

export async function generateMetadata({ params }: OfficialPaginatedPageProps): Promise<Metadata> {
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
      title: "공식 소식 | 노마드출장마사지 블로그",
      alternates: {
        canonical: "https://www.nomadthai.kr/blog/official",
      },
    }
  }

  const totalPages = getCategoryPageCount("official", BLOG_POSTS_PER_PAGE)
  if (page > totalPages) {
    return {
      title: "글을 찾을 수 없습니다 | 노마드출장마사지",
      robots: { index: false, follow: false },
    }
  }

  const title = `공식 소식 ${page}페이지 | 노마드출장마사지 블로그`
  const description = `노마드출장마사지 공식 공지와 운영 소식 ${page}페이지입니다.`
  const url = `https://www.nomadthai.kr/blog/official/page/${page}`

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

export default async function OfficialPaginatedPage({ params }: OfficialPaginatedPageProps) {
  const { page: rawPage } = await params
  const page = parsePageNumber(rawPage)

  if (!page) {
    notFound()
  }

  if (page === 1) {
    permanentRedirect("/blog/official")
  }

  const paginated = getPaginatedPosts(getPostsByCategory("official"), page, BLOG_POSTS_PER_PAGE)

  if (page > paginated.totalPages) {
    notFound()
  }

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
