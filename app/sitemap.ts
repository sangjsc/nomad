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
  // Actual copy revision for the home, region and service-information pages.
  // Business-fact verification dates and original article dates stay separate.
  const copyModifiedDate = "2026-10-09"
  const releaseDate = new Date(`${SEO_RELEASE_DATE}T00:00:00+09:00`)
  const posts = getSortedPostsData()
  const latestPostUpdate = (category?: string) => new Date(Math.max(
    releaseDate.getTime(),
    ...posts.filter((post) => !category || post.category === category)
      .map((post) => new Date(getPostLastModified(post)).getTime()),
  ))
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
    lastModified: copyModifiedDate,
  }))

  const blogListUrls: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/blog`, lastModified: latestPostUpdate() },
    { url: `${SITE_URL}/blog/official`, lastModified: latestPostUpdate("official") },
    { url: `${SITE_URL}/blog/regional`, lastModified: latestPostUpdate("regional") },
    { url: `${SITE_URL}/blog/info`, lastModified: latestPostUpdate("info") },
  ]

  const paginatedListUrls: MetadataRoute.Sitemap = [
    ...Array.from({ length: Math.max(0, blogPageCount - 1) }, (_, index) => ({
      url: `${SITE_URL}/blog/page/${index + 2}`,
      lastModified: latestPostUpdate(),
    })),
    ...Object.entries(categoryPageCounts).flatMap(([category, pageCount]) =>
      Array.from({ length: Math.max(0, pageCount - 1) }, (_, index) => ({
        url: `${SITE_URL}/blog/${category}/page/${index + 2}`,
        lastModified: latestPostUpdate(category),
      })),
    ),
  ]

  return [
    { url: SITE_URL, lastModified: copyModifiedDate },
    { url: `${SITE_URL}/service-areas`, lastModified: copyModifiedDate },
    { url: `${SITE_URL}/about`, lastModified: copyModifiedDate },
    { url: `${SITE_URL}/contact`, lastModified: copyModifiedDate },
    ...blogListUrls,
    ...paginatedListUrls,
    ...locationUrls,
    ...blogUrls,
  ]
}
