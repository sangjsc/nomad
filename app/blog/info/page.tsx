import BlogPageClient from "@/components/BlogPageClient"
import { getPostsByCategory } from "@/lib/blog"

export default function InfoBlogPage() {
  const posts = getPostsByCategory('info')
  return <BlogPageClient posts={posts} category="info" />
}
