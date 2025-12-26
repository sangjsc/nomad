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
    { id: 'all', label: '?�체', href: '/blog' },
    { id: 'official', label: '[공식] 브랜???�식', href: '/blog/official' },
    { id: 'regional', label: '[경기] 지???�심 가?�드', href: '/blog/regional' },
    { id: 'info', label: '[?�보] ?�라???�사?�트', href: '/blog/info' },
  ]

  const filteredPosts = posts

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: '?�마?�출?�마?��? 블로�?,
    description: '출장마사지?� 건강 ?�보�??�공?�는 ?�문 블로�?,
    url: 'https://nomadthai.kr/blog',
    publisher: {
      '@type': 'Organization',
      name: '?�마?�출?�마?��?',
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
            <h1 className='text-4xl md:text-5xl font-extrabold text-gray-900 mb-3'>블로�?/h1>
            <p className='text-lg text-gray-600'>마사지?� ?�빙???�???�용???�보�??�인?�세??</p>
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
              <h3 className='text-2xl font-bold text-gray-800 mb-2'>?�택??카테고리??글???�습?�다.</h3>
              <p className='text-gray-600'>?�른 카테고리�??�인?�보?�요.</p>
            </div>
          )}
        </main>

        {/* Location Navigation */}
        <div className='bg-white mt-16 py-8 border-t'>
          <div className='container mx-auto px-4 text-center'>
            <h3 className='text-xl md:text-2xl font-bold text-gray-800 mb-4'>?�른 지??마사지 ?�이지 ?�러보기</h3>
            <div className='flex flex-wrap justify-center gap-3 lg:gap-4'>
              <Link href='/suwon' className='text-rose-500 hover:text-rose-600 font-semibold'>?�원출장마사지</Link>
              <Link href='/ansan' className='text-rose-500 hover:text-rose-600 font-semibold'>?�산출장마사지</Link>
              <Link href='/seongnam' className='text-rose-500 hover:text-rose-600 font-semibold'>?�남출장마사지</Link>
              <Link href='/anyang' className='text-rose-500 hover:text-rose-600 font-semibold'>?�양출장마사지</Link>
              <Link href='/gwacheon' className='text-rose-500 hover:text-rose-600 font-semibold'>과천출장마사지</Link>
              <Link href='/uiwang' className='text-rose-500 hover:text-rose-600 font-semibold'>?�왕출장마사지</Link>
              <Link href='/gunpo' className='text-rose-500 hover:text-rose-600 font-semibold'>군포출장마사지</Link>
              <Link href='/hanam' className='text-rose-500 hover:text-rose-600 font-semibold'>?�남출장마사지</Link>
              <Link href='/icheon' className='text-rose-500 hover:text-rose-600 font-semibold'>?�천출장마사지</Link>
              <Link href='/gwangju' className='text-rose-500 hover:text-rose-600 font-semibold'>광주출장마사지</Link>
              <Link href='/yeoju' className='text-rose-500 hover:text-rose-600 font-semibold'>?�주출장마사지</Link>
              <Link href='/yongin' className='text-rose-500 hover:text-rose-600 font-semibold'>?�인출장마사지</Link>
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
                <a href='https://x.com/jscnwing9201' target='_blank' rel='noopener noreferrer' className='hover:text-gray-400 transition-colors'>X</a>\r\n                {' | '}\r\n                <a href='https://gravatar.com/ndmthai' target='_blank' rel='noopener noreferrer' className='hover:text-gray-400 transition-colors'>Gravatar</a>\r\n                {' | '}\r\n                <a href='https://www.behance.net/nomadthai' target='_blank' rel='noopener noreferrer' className='hover:text-gray-400 transition-colors'>Behance</a>\r\n                {' | '}\r\n                <a href='https://medium.com/@jscnwing920' target='_blank' rel='noopener noreferrer' className='hover:text-gray-400 transition-colors'>Medium</a>\r\n                {' | '}\r\n                <a href='https://www.slideshare.net/slideshow/2026-2fe7/284836511' target='_blank' rel='noopener noreferrer' className='hover:text-gray-400 transition-colors'>SlideShare</a>\r\n                {' | '}\r\n                <a href='https://hub.docker.com/r/cclfrhr/nomadthai-core-v1' target='_blank' rel='noopener noreferrer' className='hover:text-gray-400 transition-colors'>Docker Hub</a>\r\n              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}