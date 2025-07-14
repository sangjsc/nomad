'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Crown, Phone, Tag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import BlogCard from '@/components/BlogCard'
import type { BlogPost } from '@/lib/blog'

interface BlogPageClientProps {
  posts: BlogPost[]
}

export default function BlogPageClient({ posts }: BlogPageClientProps) {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const allCategories = ['all', ...Array.from(new Set(posts.flatMap(p => p.tags || [])))]

  const filteredPosts = selectedCategory === 'all' 
    ? posts 
    : posts.filter(post => post.tags?.includes(selectedCategory))

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

          {/* Category Filter */}
          <div className='flex justify-center flex-wrap gap-2 mb-12'>
            {allCategories.map(category => (
              <Button 
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full capitalize ${selectedCategory === category ? 'bg-rose-500 hover:bg-rose-600' : ''}`}>
                {category === 'all' ? '전체보기' : category}
              </Button>
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
            <div className='flex flex-wrap justify-center gap-4'>
              <Link href='/suwon' className='text-rose-500 hover:text-rose-600 font-semibold'>수원</Link>
              <Link href='/ansan' className='text-rose-500 hover:text-rose-600 font-semibold'>안산</Link>
              <Link href='/icheon' className='text-rose-500 hover:text-rose-600 font-semibold'>이천</Link>
              <Link href='/gwangju' className='text-rose-500 hover:text-rose-600 font-semibold'>광주</Link>
              <Link href='/yeoju' className='text-rose-500 hover:text-rose-600 font-semibold'>여주</Link>
              <Link href='/yongin' className='text-rose-500 hover:text-rose-600 font-semibold'>용인</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}