"use client"

import Link from "next/link"
import Image from "next/image"
import { Crown, Calendar, User, Tag, ArrowLeft, Share2, Menu, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import type { BlogPost } from "@/lib/blog"
import { extractCityFromTitle } from "@/lib/blog-utils"

interface BlogLayoutProps {
  post: BlogPost
  children: React.ReactNode
}

const navLinks = [
  { href: "/", label: "마사지 홈" },
  { href: "/icheon", label: "이천" },
  { href: "/gwangju", label: "광주" },
  { href: "/yeoju", label: "여주" },
  { href: "/yongin", label: "용인" },
]

export default function BlogLayout({ post, children }: BlogLayoutProps) {
  const city = post.category === 'regional' ? extractCityFromTitle(post.title) : ''
  const imageAlt = city ? `${city} 출장마사지 노마드타이` : post.title

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: post.author || "노마드출장마사지",
    },
    publisher: {
      "@type": "Organization",
      name: "노마드출장마사지",
      url: "https://nomadthai.kr",
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://nomadthai.kr/blog/${post.slug}`,
    },
    image: post.image ? `https://nomadthai.kr${post.image}` : "https://nomadthai.kr/images/spa-background.jpg",
    url: `https://nomadthai.kr/blog/${post.slug}`,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
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
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                    priority
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

                {/* 관련 공식 자료 */}
                <div className="mt-10 pt-6 border-t">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">관련 공식 자료</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <a
                      href="https://anyflip.com/dibje/wkpr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg hover:shadow-md transition-all group"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-1 group-hover:text-blue-600">AnyFlip 가이드</h4>
                          <p className="text-sm text-gray-600">전자책 형태의 상세 가이드</p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                      </div>
                    </a>
                    <a
                      href="https://issuu.com/docs/6f464d67eece8867f497cb1331aa6f83"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-lg hover:shadow-md transition-all group"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-1 group-hover:text-purple-600">Issuu 로드맵</h4>
                          <p className="text-sm text-gray-600">서비스 발전 계획</p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-600" />
                      </div>
                    </a>
                    <a
                      href="https://solo.to/nomadthai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-gradient-to-br from-rose-50 to-orange-50 border border-rose-200 rounded-lg hover:shadow-md transition-all group"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-1 group-hover:text-rose-600">Solo.to 허브</h4>
                          <p className="text-sm text-gray-600">모든 소셜 채널 통합</p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-rose-600" />
                      </div>
                    </a>
                  </div>
                </div>

                {/* Verification & Assets */}
                <div className="mt-8 pt-6 border-t text-center">
                  <p className="text-[10px] lg:text-[11px] text-gray-500 leading-relaxed">
                    [Verification & Assets]{' '}
                    <a href="https://www.nomadthai.kr" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">Main</a>
                    {' | '}
                    <a href="https://gitlab.com/nomadthai-official/nomadthai-main-hub/-/snippets/4916220" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">GitLab</a>
                    {' | '}
                    <a href="https://github.com/sangjsc/nomad" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">GitHub</a>
                    {' | '}
                    <a href="https://solo.to/nomadthai" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">Solo.to</a>
                    {' | '}
                    <a href="https://anyflip.com/dibje/wkpr" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">Guide</a>
                    {' | '}
                    <a href="https://issuu.com/docs/6f464d67eece8867f497cb1331aa6f83" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">Roadmap</a>
                    {' | '}
                    <a href="https://pin.it/32KOgnNEr" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">News</a>
                    {' | '}
                    <a href="https://x.com/jscnwing9201" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">X</a>
                    {' | '}
                    <a href="https://gravatar.com/ndmthai" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">Gravatar</a>
                    {' | '}
                    <a href="https://www.behance.net/nomadthai" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">Behance</a>
                    {' | '}
                    <a href="https://medium.com/@jscnwing920" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">Medium</a>
                    {' | '}
                    <a href="https://www.slideshare.net/slideshow/2026-2fe7/284836511" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">SlideShare</a>
                    {' | '}
                    <a href="https://hub.docker.com/r/cclfrhr/nomadthai-core-v1" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">Docker Hub</a>
                  </p>
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
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">지금 바로 최상의 휴식을 예약하세요</h2>
              <p className="text-lg lg:text-xl mb-6 text-rose-100 font-semibold">
                [노마드타이 경기도 서비스 지역 전체 보기]
              </p>
              <div className="flex flex-wrap justify-center gap-2 lg:gap-3 mb-8 text-white">
                <Link href="/suwon" className="hover:text-rose-200 underline transition-colors">수원</Link>
                <span>|</span>
                <Link href="/ansan" className="hover:text-rose-200 underline transition-colors">안산</Link>
                <span>|</span>
                <Link href="/seongnam" className="hover:text-rose-200 underline transition-colors">성남</Link>
                <span>|</span>
                <Link href="/anyang" className="hover:text-rose-200 underline transition-colors">안양</Link>
                <span>|</span>
                <Link href="/gwacheon" className="hover:text-rose-200 underline transition-colors">과천</Link>
                <span>|</span>
                <Link href="/uiwang" className="hover:text-rose-200 underline transition-colors">의왕</Link>
                <span>|</span>
                <Link href="/gunpo" className="hover:text-rose-200 underline transition-colors">군포</Link>
                <span>|</span>
                <Link href="/hanam" className="hover:text-rose-200 underline transition-colors">하남</Link>
                <span>|</span>
                <Link href="/icheon" className="hover:text-rose-200 underline transition-colors">이천</Link>
                <span>|</span>
                <Link href="/gwangju" className="hover:text-rose-200 underline transition-colors">광주</Link>
                <span>|</span>
                <Link href="/yeoju" className="hover:text-rose-200 underline transition-colors">여주</Link>
                <span>|</span>
                <Link href="/yongin" className="hover:text-rose-200 underline transition-colors">용인</Link>
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