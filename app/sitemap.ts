import type { MetadataRoute } from "next"
import {
  BLOG_POSTS_PER_PAGE,
  getAllPostsPageCount,
  getCategoryPageCount,
  getPostLastModified,
  getSortedPostsData,
} from "@/lib/blog"
import { SEO_RELEASE_DATE, SERVICE_AREAS, SITE_URL } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const releaseDate = new Date(`${SEO_RELEASE_DATE}T00:00:00+09:00`)
  const posts = getSortedPostsData()
  const blogPageCount = getAllPostsPageCount(BLOG_POSTS_PER_PAGE)
  const categoryPageCounts = {
    official: getCategoryPageCount("official", BLOG_POSTS_PER_PAGE),
    regional: getCategoryPageCount("regional", BLOG_POSTS_PER_PAGE),
    info: getCategoryPageCount("info", BLOG_POSTS_PER_PAGE),
  }

  const blogUrls: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(getPostLastModified(post)),
  }))

  const locationUrls: MetadataRoute.Sitemap = SERVICE_AREAS.map((area) => ({
    url: `${SITE_URL}/${area.slug}`,
    lastModified: releaseDate,
  }))

  const blogListUrls: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/blog`, lastModified: releaseDate },
    { url: `${SITE_URL}/blog/official`, lastModified: releaseDate },
    { url: `${SITE_URL}/blog/regional`, lastModified: releaseDate },
    { url: `${SITE_URL}/blog/info`, lastModified: releaseDate },
  ]

  const paginatedListUrls: MetadataRoute.Sitemap = [
    ...Array.from({ length: Math.max(0, blogPageCount - 1) }, (_, index) => ({
      url: `${SITE_URL}/blog/page/${index + 2}`,
      lastModified: releaseDate,
    })),
    ...Object.entries(categoryPageCounts).flatMap(([category, pageCount]) =>
      Array.from({ length: Math.max(0, pageCount - 1) }, (_, index) => ({
        url: `${SITE_URL}/blog/${category}/page/${index + 2}`,
        lastModified: releaseDate,
      })),
    ),
  ]

  return [
    { url: SITE_URL, lastModified: releaseDate },
    { url: `${SITE_URL}/service-areas`, lastModified: releaseDate },
    { url: `${SITE_URL}/about`, lastModified: releaseDate },
    ...blogListUrls,
    ...paginatedListUrls,
    ...locationUrls,
    ...blogUrls,
  ]
}
