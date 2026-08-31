import { getPostLastModified, getSortedPostsData } from "@/lib/blog"

const siteUrl = "https://www.nomadthai.kr"

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
}

export async function GET() {
  const posts = getSortedPostsData().slice(0, 50)

  const items = posts
    .map((post) => {
      const title = escapeXml(post.title)
      const description = escapeXml(post.excerpt || `${post.title} 관련 글`)
      const url = `${siteUrl}/blog/${post.slug}`
      const pubDate = new Date(post.date).toUTCString()

      return `
        <item>
          <title>${title}</title>
          <link>${url}</link>
          <guid>${url}</guid>
          <description>${description}</description>
          <pubDate>${pubDate}</pubDate>
        </item>`
    })
    .join("")

  const lastBuildDate =
    posts.length > 0
      ? new Date(getPostLastModified(posts[0])).toUTCString()
      : new Date().toUTCString()

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>노마드출장마사지 블로그</title>
    <link>${siteUrl}/blog</link>
    <description>노마드출장마사지 공식 블로그 RSS 피드</description>
    <language>ko-KR</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${siteUrl}/blog/rss.xml" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  })
}
