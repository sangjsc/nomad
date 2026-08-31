"use client"

import Link from "next/link"
import Image from "next/image"
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { BlogPost, BlogPostSummary } from "@/lib/blog"
import { extractCityFromTitle } from "@/lib/blog-utils"
import { PRIMARY_SERVICE_AREAS, SERVICE_AREAS } from "@/lib/site"

interface BlogLayoutProps {
  post: BlogPost
  relatedPosts?: BlogPostSummary[]
  children: React.ReactNode
}

export default function BlogLayout({ post, relatedPosts = [], children }: BlogLayoutProps) {
  const city = post.category === 'regional' ? extractCityFromTitle(post.title) : ''
  const imageAlt = city ? `${city} 출장마사지 노마드타이` : post.title
  const modifiedDate = post.updated || post.date
  const postSearchText = [post.title, ...(post.tags || [])].join(' ')
  const matchedArea = SERVICE_AREAS.find((area) => {
    const shortName = area.name.replace('경기 ', '')
    return postSearchText.includes(area.name) || postSearchText.includes(shortName)
  })
  const contextualAreas = matchedArea
    ? [matchedArea, ...PRIMARY_SERVICE_AREAS.filter((area) => area.slug !== matchedArea.slug)].slice(0, 4)
    : PRIMARY_SERVICE_AREAS

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Organization",
      "@id": "https://www.nomadthai.kr/#organization",
      name: post.author || "노마드출장마사지",
      url: "https://www.nomadthai.kr/about",
    },
    publisher: {
      "@id": "https://www.nomadthai.kr/#organization",
    },
    datePublished: post.date,
    dateModified: modifiedDate,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.nomadthai.kr/blog/${post.slug}`,
    },
    image: "https://www.nomadthai.kr/og/home",
    url: `https://www.nomadthai.kr/blog/${post.slug}`,
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "홈",
        item: "https://www.nomadthai.kr",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "블로그",
        item: "https://www.nomadthai.kr/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://www.nomadthai.kr/blog/${post.slug}`,
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-rose-50">
        

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
              <Link href="/" className="hover:text-rose-500">홈</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-rose-500">블로그</Link>
              <span>/</span>
              <span className="font-medium text-gray-700 truncate">{post.title}</span>
            </div>

            {/* Article */}
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {post.image && (
                <div className="relative h-56 md:h-80 w-full">
                  <Image
                    src={post.image}
                    alt={imageAlt}
                    fill
                    className="w-full h-full"
                    style={{ objectFit: "cover" }}
                    priority
                    sizes="(max-width: 768px) 100vw, 896px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              )}
              
              <div className="p-6 md:p-10">
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                  {post.title}
                </h1>
                
                {post.excerpt && (
                  <p className="text-lg text-gray-600 mb-6">
                    {post.excerpt}
                  </p>
                )}
                
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-500 border-y py-4 mb-8">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>업데이트: {new Date(modifiedDate).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  {post.author && (
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  )}
                </div>

                <div className="prose prose-lg max-w-none prose-p:text-gray-700 prose-headings:font-bold prose-headings:text-gray-800 prose-a:text-rose-600 hover:prose-a:text-rose-700 prose-strong:text-gray-800">
                  {children}
                </div>

                {post.tags && post.tags.length > 0 && (
                  <div className="mt-10 pt-6 border-t">
                    <div className="flex items-center flex-wrap gap-3">
                      <span className="font-semibold text-gray-800">관련 태그:</span>
                      {post.tags.map((tag) => (
                        <span key={tag} className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {relatedPosts.length > 0 && (
                  <div className="mt-10 pt-6 border-t">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">관련 글 더 보기</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {relatedPosts.map((related) => (
                        <Link
                          key={related.slug}
                          href={`/blog/${related.slug}`}
                          className="p-4 rounded-xl border border-gray-200 hover:border-rose-300 hover:bg-rose-50/40 transition-colors"
                        >
                          <p className="text-xs text-gray-500 mb-2">
                            {new Date(related.updated || related.date).toLocaleDateString('ko-KR')}
                          </p>
                          <p className="font-semibold text-gray-800 line-clamp-2">{related.title}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-10 flex flex-wrap gap-4 border-t pt-6">
                  <Link href="/service-areas" className="font-semibold text-rose-600 hover:text-rose-700">서비스 지역 확인</Link>
                  <Link href="/about" className="font-semibold text-rose-600 hover:text-rose-700">예약 및 이용 안내</Link>
                </div>
              </div>
            </article>

            {/* Navigation and Share */}
            <div className="mt-8 md:mt-12 flex flex-col sm:flex-row justify-between items-center gap-4">
              <Button variant="outline" asChild>
                <Link href="/blog">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  모든 글 보기
                </Link>
              </Button>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-600">이 글 공유하기:</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({ title: post.title, text: post.excerpt, url: window.location.href });
                    } else {
                      navigator.clipboard.writeText(window.location.href);
                      alert('링크가 클립보드에 복사되었습니다!');
                    }
                  }}
                >
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </main>

        {/* Call to Action */}
        <section className="py-16 lg:py-20 bg-rose-500">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">예약 전 서비스 지역과 시간을 확인하세요</h2>
              <p className="text-lg lg:text-xl mb-6 text-rose-100 font-semibold">
                현재 글과 관련된 지역 안내
              </p>
              <div className="flex flex-wrap justify-center gap-2 lg:gap-3 mb-8 text-white">
                {contextualAreas.map((area, index) => (
                  <span key={area.slug} className="inline-flex items-center gap-2">
                    {index > 0 ? <span>|</span> : null}
                    <Link href={`/${area.slug}`} className="hover:text-rose-200 underline transition-colors">
                      {area.name} 출장마사지
                    </Link>
                  </span>
                ))}
                <span className="inline-flex items-center gap-2">
                  <span>|</span>
                  <Link href="/service-areas" className="hover:text-rose-200 underline transition-colors">
                    전체 서비스 지역
                  </Link>
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-rose-600 hover:bg-rose-50 rounded-full font-bold shadow-lg transition transform hover:scale-105"
                  onClick={() => window.open("tel:010-8186-7771")}
                >
                  전화로 예약하기
                </Button>
                <Button
                  size="lg"
                  className="bg-white text-rose-600 hover:bg-rose-50 rounded-full font-bold shadow-lg transition transform hover:scale-105"
                  asChild
                >
                  <Link href="/">홈으로 돌아가기</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
