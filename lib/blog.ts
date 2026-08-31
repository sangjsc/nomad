import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/blog')
const redirectedPostSlugs = new Set(['gyeonggi-massage-guidebook-2024'])

export type BlogCategory = 'official' | 'regional' | 'info'

export interface BlogPostSummary {
  slug: string
  title: string
  date: string
  updated?: string
  excerpt: string
  author?: string
  tags?: string[]
  image?: string
  category?: BlogCategory
  draft?: boolean
}

export interface BlogPost extends BlogPostSummary {
  content: string
}

export interface PaginatedPosts {
  posts: BlogPostSummary[]
  currentPage: number
  totalPages: number
  hasPrevPage: boolean
  hasNextPage: boolean
}

export const BLOG_POSTS_PER_PAGE = 9

interface BlogFrontmatter {
  title?: string
  date?: string
  updated?: string
  excerpt?: string
  author?: string
  tags?: string[]
  image?: string
  category?: BlogCategory
  draft?: boolean
}

export function getBlogCoverImage(slug: string): string {
  return `/blog/covers/${slug}`
}

function toIsoDate(input?: string): string | undefined {
  if (!input) {
    return undefined
  }
  const parsed = new Date(input)
  if (Number.isNaN(parsed.getTime())) {
    return undefined
  }
  return parsed.toISOString()
}

function mapFileToPost(fileName: string, includeContent: true): BlogPost
function mapFileToPost(fileName: string, includeContent?: false): BlogPostSummary
function mapFileToPost(fileName: string, includeContent = false): BlogPost | BlogPostSummary {
  const slug = fileName.replace(/\.(md|mdx)$/, '')
  const fullPath = path.join(postsDirectory, fileName)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)
  const data = matterResult.data as BlogFrontmatter
  const published = toIsoDate(data.date) || new Date().toISOString()
  const updated = toIsoDate(data.updated)

  const basePost: BlogPostSummary = {
    slug,
    title: data.title || slug,
    date: published,
    updated,
    excerpt: data.excerpt || '',
    author: data.author,
    tags: data.tags || [],
    image: getBlogCoverImage(slug),
    category: data.category,
    draft: data.draft === true,
  }

  if (includeContent) {
    return {
      ...basePost,
      content: matterResult.content,
    }
  }

  return basePost
}

export function getSortedPostsData(): BlogPostSummary[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
    .map((fileName) => mapFileToPost(fileName))
    .filter((post) => !post.draft && !redirectedPostSlugs.has(post.slug))

  return allPostsData.sort((a, b) => {
    const aTime = new Date(a.updated || a.date).getTime()
    const bTime = new Date(b.updated || b.date).getTime()
    return bTime - aTime
  })
}

export function getPostData(slug: string): BlogPost | null {
  if (!fs.existsSync(postsDirectory)) {
    return null
  }

  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const mdxPath = path.join(postsDirectory, `${slug}.mdx`)
  
  let filePath = ''
  if (fs.existsSync(fullPath)) {
    filePath = fullPath
  } else if (fs.existsSync(mdxPath)) {
    filePath = mdxPath
  } else {
    return null
  }
  const post = mapFileToPost(path.basename(filePath), true)
  return post.draft ? null : post
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  return getSortedPostsData().map((post) => post.slug)
}

export function getPostsByCategory(category: BlogCategory): BlogPostSummary[] {
  const allPosts = getSortedPostsData()
  return allPosts.filter(post => post.category === category)
}

export function getPaginatedPosts(
  posts: BlogPostSummary[],
  page: number,
  pageSize = BLOG_POSTS_PER_PAGE,
): PaginatedPosts {
  const safePageSize = Math.max(1, pageSize)
  const totalPages = Math.max(1, Math.ceil(posts.length / safePageSize))
  const currentPage = Math.min(Math.max(1, page), totalPages)
  const start = (currentPage - 1) * safePageSize
  const end = start + safePageSize

  return {
    posts: posts.slice(start, end),
    currentPage,
    totalPages,
    hasPrevPage: currentPage > 1,
    hasNextPage: currentPage < totalPages,
  }
}

export function getAllPostsPageCount(pageSize = BLOG_POSTS_PER_PAGE): number {
  const allPosts = getSortedPostsData()
  return Math.max(1, Math.ceil(allPosts.length / Math.max(1, pageSize)))
}

export function getCategoryPageCount(
  category: BlogCategory,
  pageSize = BLOG_POSTS_PER_PAGE,
): number {
  const categoryPosts = getPostsByCategory(category)
  return Math.max(1, Math.ceil(categoryPosts.length / Math.max(1, pageSize)))
}

export function getPostLastModified(post: BlogPostSummary): string {
  return post.updated || post.date
}

export function getRelatedPosts(post: BlogPostSummary, limit = 3): BlogPostSummary[] {
  const allPosts = getSortedPostsData()
  const sourceTags = new Set(post.tags || [])

  const scored = allPosts
    .filter((candidate) => candidate.slug !== post.slug)
    .map((candidate) => {
      let score = 0
      if (candidate.category && post.category && candidate.category === post.category) {
        score += 3
      }
      const sharedTags = (candidate.tags || []).filter((tag) => sourceTags.has(tag))
      score += sharedTags.length * 2
      if (score === 0) {
        score = 1
      }
      return { candidate, score }
    })
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score
      }
      return new Date(getPostLastModified(b.candidate)).getTime() - new Date(getPostLastModified(a.candidate)).getTime()
    })

  return scored.slice(0, limit).map((item) => item.candidate)
}
