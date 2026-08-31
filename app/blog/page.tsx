import type { Metadata } from "next"
import BlogPageClient from "@/components/BlogPageClient"
import { BLOG_POSTS_PER_PAGE, getPaginatedPosts, getSortedPostsData } from "@/lib/blog"

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.nomadthai.kr/blog",
  },
}

export default function BlogPage() {
  const paginated = getPaginatedPosts(getSortedPostsData(), 1, BLOG_POSTS_PER_PAGE)

  return (
    <BlogPageClient
      posts={paginated.posts}
      currentPage={paginated.currentPage}
      totalPages={paginated.totalPages}
      basePath="/blog"
    />
  )
}
