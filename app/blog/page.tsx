import BlogPageClient from "@/components/BlogPageClient"
import { getSortedPostsData } from "@/lib/blog"

export default function BlogPage() {
  const posts = getSortedPostsData()
  return <BlogPageClient posts={posts} />
}