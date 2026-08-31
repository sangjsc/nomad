import Link from "next/link"
import Image from "next/image"
import type { BlogPostSummary } from "@/lib/blog"

interface BlogCardProps {
  post: BlogPostSummary
  priority?: boolean
}

export default function BlogCard({ post, priority = false }: BlogCardProps) {
  const dateToShow = post.updated || post.date

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative h-48 w-full overflow-hidden">
          {post.image ? (
            <Image
              src={post.image}
              alt={post.title}
              width={400}
              height={250}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={priority}
              loading={priority ? "eager" : "lazy"}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-slate-100 text-3xl font-semibold text-slate-400">
              {post.title.charAt(0)}
            </div>
          )}
        </div>
        <div className="p-5">
          <p className="mb-2 text-xs text-slate-500">
            {new Date(dateToShow).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          <h3 className="mb-3 line-clamp-2 text-lg font-bold leading-snug text-slate-900">
            {post.title}
          </h3>
          <p className="line-clamp-2 text-sm leading-relaxed text-slate-600">
            {post.excerpt}
          </p>
        </div>
      </Link>
    </article>
  )
}
