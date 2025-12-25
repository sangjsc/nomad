import BlogPageClient from "@/components/BlogPageClient"
import { getPostsByCategory } from "@/lib/blog"

export default function RegionalBlogPage() {
  const posts = getPostsByCategory('regional')
  return <BlogPageClient posts={posts} category="regional" />
}
