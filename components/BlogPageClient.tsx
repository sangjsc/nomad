import Link from 'next/link'
import { Tag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import BlogCard from '@/components/BlogCard'
import type { BlogPostSummary, BlogCategory } from '@/lib/blog'
import { PRIMARY_SERVICE_AREAS, SITE_URL } from '@/lib/site'

interface BlogPageClientProps {
  posts: BlogPostSummary[]
  category?: 'all' | BlogCategory
  currentPage?: number
  totalPages?: number
  basePath?: string
}

function buildPageHref(basePath: string, page: number): string {
  if (page <= 1) {
    return basePath
  }
  return `${basePath}/page/${page}`
}

function getVisiblePages(currentPage: number, totalPages: number): number[] {
  const maxVisible = 5
  const pages: number[] = []
  const start = Math.max(1, currentPage - Math.floor(maxVisible / 2))
  const end = Math.min(totalPages, start + maxVisible - 1)
  const adjustedStart = Math.max(1, end - maxVisible + 1)

  for (let page = adjustedStart; page <= end; page += 1) {
    pages.push(page)
  }

  return pages
}

export default function BlogPageClient({
  posts,
  category = 'all',
  currentPage = 1,
  totalPages = 1,
  basePath = '/blog',
}: BlogPageClientProps) {
  const categories: Array<{ id: 'all' | BlogCategory; label: string; href: string }> = [
    { id: 'all', label: '전체', href: '/blog' },
    { id: 'official', label: '노마드 소식', href: '/blog/official' },
    { id: 'regional', label: '지역별 이용 방법', href: '/blog/regional' },
    { id: 'info', label: '코스 선택과 준비', href: '/blog/info' },
  ]

  const pageTitle =
    category === 'official'
      ? '노마드 소식'
      : category === 'regional'
        ? '지역별 이용 방법'
        : category === 'info'
          ? '코스 선택과 준비'
          : '블로그'

  const pageDescription =
    category === 'official'
      ? '운영시간과 결제 방법 등 이용하실 때 알아두실 소식입니다.'
      : category === 'regional'
        ? '우리 동네에서 예약하는 방법, 숙소에서 받을 때 궁금한 점을 모았습니다.'
        : category === 'info'
          ? '어떤 코스를 고를지, 받기 전후에는 무엇을 챙길지 살펴보세요.'
          : '처음 예약할 때 궁금한 점부터 코스 고르는 방법까지, 필요한 글을 찾아보세요.'

  const currentPath = buildPageHref(basePath, currentPage)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: '노마드출장마사지 블로그',
    description: '출장마사지 예약 방법, 코스 선택과 지역별 이용 방법을 정리한 노마드 블로그',
    url: `${SITE_URL}${currentPath}`,
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
  }

  const visiblePages = getVisiblePages(currentPage, totalPages)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="min-h-screen bg-gray-50">
        <main className="container mx-auto px-4 py-8 md:py-12">
          <div className="mb-10 text-center md:mb-16">
            <h1 className="mb-3 text-4xl font-extrabold text-gray-900 md:text-5xl">{pageTitle}</h1>
            <p className="text-lg text-gray-600">{pageDescription}</p>
          </div>

          <div className="mb-10 flex flex-wrap justify-center gap-2 md:mb-12">
            {categories.map((item) => (
              <Link key={item.id} href={item.href}>
                <Button
                  variant={category === item.id ? 'default' : 'outline'}
                  className={`rounded-full ${category === item.id ? 'bg-rose-500 hover:bg-rose-600' : ''}`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>

          {posts.length > 0 ? (
            <>
              <h2 className="sr-only">최신 블로그 글 목록</h2>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post, index) => (
                  <BlogCard key={post.slug} post={post} priority={index === 0} />
                ))}
              </div>

              {totalPages > 1 && (
                <nav className="mt-10 flex flex-wrap items-center justify-center gap-2 md:mt-12" aria-label="블로그 페이지 이동">
                  {currentPage > 1 && (
                    <Link
                      href={buildPageHref(basePath, currentPage - 1)}
                      className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-rose-300 hover:text-rose-600"
                    >
                      이전
                    </Link>
                  )}

                  {visiblePages.map((page) => (
                    <Link
                      key={page}
                      href={buildPageHref(basePath, page)}
                      aria-current={page === currentPage ? 'page' : undefined}
                      className={`min-w-10 rounded-full border px-4 py-2 text-center text-sm font-semibold transition-colors ${
                        page === currentPage
                          ? 'border-rose-500 bg-rose-500 text-white'
                          : 'border-gray-300 bg-white text-gray-700 hover:border-rose-300 hover:text-rose-600'
                      }`}
                    >
                      {page}
                    </Link>
                  ))}

                  {currentPage < totalPages && (
                    <Link
                      href={buildPageHref(basePath, currentPage + 1)}
                      className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-rose-300 hover:text-rose-600"
                    >
                      다음
                    </Link>
                  )}
                </nav>
              )}
            </>
          ) : (
            <div className="py-16 text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-rose-100">
                <Tag className="h-10 w-10 text-rose-400" />
              </div>
              <h2 className="mb-2 text-2xl font-bold text-gray-800">등록된 글이 없습니다.</h2>
              <p className="text-gray-600">다른 주제의 글을 살펴보세요.</p>
            </div>
          )}
        </main>

        <div className="mt-16 border-t bg-white py-8">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-xl font-bold text-gray-800 md:text-2xl">계신 지역의 가격과 예약 방법</h2>
            <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
              {PRIMARY_SERVICE_AREAS.map((area) => (
                <Link key={area.slug} href={`/${area.slug}`} className="font-semibold text-rose-500 hover:text-rose-600">
                  {area.name}출장마사지
                </Link>
              ))}
              <Link href="/service-areas" className="font-semibold text-rose-500 hover:text-rose-600">전체 서비스 지역</Link>
              <Link href="/about" className="font-semibold text-rose-500 hover:text-rose-600">이용 안내</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
