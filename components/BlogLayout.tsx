"use client"

import Link from "next/link"
import Image from "next/image"
import { Crown, Calendar, User, Tag, ArrowLeft, Share2, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import type { BlogPost } from "@/lib/blog"

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
                    alt={post.title}
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
              <p className="text-lg lg:text-xl mb-8 text-rose-100">
                일상의 피로를 풀어줄 최고의 프리미엄 마사지를 이천, 광주, 여주, 용인에서 경험해보세요.
              </p>
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
                  variant="outline"
                  className="border-white text-white hover:bg-white/20 rounded-full font-bold shadow-lg transition transform hover:scale-105"
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