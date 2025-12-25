'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Crown, Phone, Tag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import BlogCard from '@/components/BlogCard'
import type { BlogPost, BlogCategory } from '@/lib/blog'

interface BlogPageClientProps {
  posts: BlogPost[]
  category?: 'all' | BlogCategory
}

export default function BlogPageClient({ posts, category = 'all' }: BlogPageClientProps) {
  const categories = [
    { id: 'all', label: '전체', href: '/blog' },
    { id: 'official', label: '[공식] 브랜드 소식', href: '/blog/official' },
    { id: 'regional', label: '[경기] 지역 안심 가이드', href: '/blog/regional' },
    { id: 'info', label: '[정보] 테라피 인사이트', href: '/blog/info' },
  ]

  const filteredPosts = posts

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: '노마드출장마사지 블로그',
    description: '출장마사지와 건강 정보를 제공하는 전문 블로그',
    url: 'https://nomadthai.kr/blog',
    publisher: {
      '@type': 'Organization',
      name: '노마드출장마사지',
      url: 'https://nomadthai.kr',
    },
    blogPost: posts.map(post => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      url: `https://nomadthai.kr/blog/${post.slug}`,
      datePublished: post.date,
    })),
  }

  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <div className='min-h-screen bg-gray-50'>
        
        {/* Main Content */}
        <main className='container mx-auto px-4 py-8 md:py-12'>
          <div className='text-center mb-10 md:mb-16'>
            <h1 className='text-4xl md:text-5xl font-extrabold text-gray-900 mb-3'>블로그</h1>
            <p className='text-lg text-gray-600'>마사지와 웰빙에 대한 유용한 정보를 확인하세요.</p>
          </div>

          {/* Category Navigation */}
          <div className='flex justify-center flex-wrap gap-2 mb-12'>
            {categories.map(cat => (
              <Link key={cat.id} href={cat.href}>
                <Button
                  variant={category === cat.id ? 'default' : 'outline'}
                  className={`rounded-full ${category === cat.id ? 'bg-rose-500 hover:bg-rose-600' : ''}`}>
                  {cat.label}
                </Button>
              </Link>
            ))}
          </div>

          {/* Blog Posts */}
          {filteredPosts.length > 0 ? (
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
              {filteredPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className='text-center py-16'>
              <div className='w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                <Tag className='w-10 h-10 text-rose-400' />
              </div>
              <h3 className='text-2xl font-bold text-gray-800 mb-2'>선택한 카테고리에 글이 없습니다.</h3>
              <p className='text-gray-600'>다른 카테고리를 확인해보세요.</p>
            </div>
          )}
        </main>

        {/* Location Navigation */}
        <div className='bg-white mt-16 py-8 border-t'>
          <div className='container mx-auto px-4 text-center'>
            <h3 className='text-xl md:text-2xl font-bold text-gray-800 mb-4'>다른 지역 마사지 페이지 둘러보기</h3>
            <div className='flex flex-wrap justify-center gap-3 lg:gap-4'>
              <Link href='/suwon' className='text-rose-500 hover:text-rose-600 font-semibold'>수원출장마사지</Link>
              <Link href='/ansan' className='text-rose-500 hover:text-rose-600 font-semibold'>안산출장마사지</Link>
              <Link href='/seongnam' className='text-rose-500 hover:text-rose-600 font-semibold'>성남출장마사지</Link>
              <Link href='/anyang' className='text-rose-500 hover:text-rose-600 font-semibold'>안양출장마사지</Link>
              <Link href='/gwacheon' className='text-rose-500 hover:text-rose-600 font-semibold'>과천출장마사지</Link>
              <Link href='/uiwang' className='text-rose-500 hover:text-rose-600 font-semibold'>의왕출장마사지</Link>
              <Link href='/gunpo' className='text-rose-500 hover:text-rose-600 font-semibold'>군포출장마사지</Link>
              <Link href='/hanam' className='text-rose-500 hover:text-rose-600 font-semibold'>하남출장마사지</Link>
              <Link href='/icheon' className='text-rose-500 hover:text-rose-600 font-semibold'>이천출장마사지</Link>
              <Link href='/gwangju' className='text-rose-500 hover:text-rose-600 font-semibold'>광주출장마사지</Link>
              <Link href='/yeoju' className='text-rose-500 hover:text-rose-600 font-semibold'>여주출장마사지</Link>
              <Link href='/yongin' className='text-rose-500 hover:text-rose-600 font-semibold'>용인출장마사지</Link>
            </div>

            {/* Verification & Assets */}
            <div className='mt-8 pt-6 border-t border-gray-200'>
              <p className='text-[10px] lg:text-[11px] text-gray-500 leading-relaxed'>
                [Verification & Assets]{' '}
                <a href='https://www.nomadthai.kr' target='_blank' rel='noopener noreferrer' className='hover:text-gray-400 transition-colors'>Main</a>
                {' | '}
                <a href='https://gitlab.com/nomadthai-official/nomadthai-main-hub/-/snippets/4916220' target='_blank' rel='noopener noreferrer' className='hover:text-gray-400 transition-colors'>GitLab</a>
                {' | '}
                <a href='https://github.com/sangjsc/nomad' target='_blank' rel='noopener noreferrer' className='hover:text-gray-400 transition-colors'>GitHub</a>
                {' | '}
                <a href='https://solo.to/nomadthai' target='_blank' rel='noopener noreferrer' className='hover:text-gray-400 transition-colors'>Solo.to</a>
                {' | '}
                <a href='https://anyflip.com/dibje/wkpr' target='_blank' rel='noopener noreferrer' className='hover:text-gray-400 transition-colors'>Guide</a>
                {' | '}
                <a href='https://issuu.com/docs/6f464d67eece8867f497cb1331aa6f83' target='_blank' rel='noopener noreferrer' className='hover:text-gray-400 transition-colors'>Roadmap</a>
                {' | '}
                <a href='https://pin.it/32KOgnNEr' target='_blank' rel='noopener noreferrer' className='hover:text-gray-400 transition-colors'>News</a>
                {' | '}
                <a href='https://x.com/jscnwing9201' target='_blank' rel='noopener noreferrer' className='hover:text-gray-400 transition-colors'>X</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}