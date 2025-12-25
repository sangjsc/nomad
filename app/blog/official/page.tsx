import BlogPageClient from "@/components/BlogPageClient"
import { getPostsByCategory } from "@/lib/blog"

export default function OfficialBlogPage() {
  const posts = getPostsByCategory('official')
  return <BlogPageClient posts={posts} category="official" />
}
