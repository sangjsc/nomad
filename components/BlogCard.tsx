import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, User, Tag } from "lucide-react"
import type { BlogPost } from "@/lib/blog"

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="bg-white/95 backdrop-blur-sm shadow-2xl rounded-3xl overflow-hidden hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] transition-all duration-500 transform hover:-translate-y-3 group border border-white/20">
      <Link href={`/blog/${post.slug}`}>
        <div className="relative overflow-hidden">
          {post.image ? (
            <div className="relative h-56 sm:h-48 overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={250}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ) : (
            <div className="w-full h-56 sm:h-48 bg-gradient-to-br from-slate-50 via-rose-50 to-purple-50 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-100/50 via-pink-100/30 to-purple-100/50"></div>
              <div className="relative text-slate-400 text-4xl font-light tracking-wider">
                {post.title.charAt(0)}
              </div>
            </div>
          )}
          
          {/* 프리미엄 뱃지 */}
          <div className="absolute top-4 right-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Premium
          </div>
        </div>
        
        <CardContent className="p-6 sm:p-8 relative">
          {/* 세련된 장식 요소 */}
          <div className="absolute top-0 left-0 w-12 h-1 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full"></div>
          
          <div className="mt-2 mb-4">
            <h3 className="text-xl sm:text-2xl font-semibold text-slate-800 group-hover:text-slate-900 transition-colors duration-300 line-clamp-2 leading-tight tracking-tight">
              {post.title}
            </h3>
          </div>
          
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 line-clamp-3 font-light">
            {post.excerpt}
          </p>
          
          {/* 태그 표시 */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.slice(0, 2).map((tag, index) => (
                <span key={index} className="bg-gradient-to-r from-rose-50 to-pink-50 text-rose-700 px-3 py-1 rounded-xl text-xs font-medium border border-rose-100">
                  #{tag}
                </span>
              ))}
            </div>
          )}
          
          {/* 하단 메타 정보 */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-slate-500">
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-medium">{new Date(post.date).toLocaleDateString('ko-KR', { month: 'long', day: 'numeric' })}</span>
              </div>
              {post.author && (
                <div className="flex items-center space-x-2 text-slate-500">
                  <User className="w-4 h-4" />
                  <span className="text-sm font-medium">{post.author}</span>
                </div>
              )}
            </div>
            
            {/* 읽기 버튼 */}
            <div className="flex items-center text-rose-600 group-hover:text-rose-700 transition-colors duration-300">
              <span className="text-sm font-medium mr-2">읽기</span>
              <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center group-hover:bg-rose-200 transition-colors duration-300">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}