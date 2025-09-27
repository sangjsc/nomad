import type { MetadataRoute } from "next"
import { getSortedPostsData } from "@/lib/blog"

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getSortedPostsData()
  
  // 지역 페이지 목록
  const locationPages = [
    "ansan", "anyang", "suwon", "yongin", "icheon", 
    "gwangju", "yeoju", "seongnam", "gunpo", "gwacheon", 
    "uiwang", "hanam"
  ]
  
  const blogUrls = posts.map((post) => ({
    url: `https://www.nomadthai.kr/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  const locationUrls = locationPages.map((location) => ({
    url: `https://www.nomadthai.kr/${location}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.95, // 지역 페이지는 높은 우선순위
  }))

  return [
    {
      url: "https://www.nomadthai.kr",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://www.nomadthai.kr/blog",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...locationUrls,
    ...blogUrls,
  ]
}
