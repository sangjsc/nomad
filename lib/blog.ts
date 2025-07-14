import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  author?: string
  tags?: string[]
  image?: string
}

export function getSortedPostsData(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.(md|mdx)$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const matterResult = matter(fileContents)

      return {
        slug,
        title: matterResult.data.title || slug,
        date: matterResult.data.date || new Date().toISOString(),
        excerpt: matterResult.data.excerpt || '',
        content: matterResult.content,
        author: matterResult.data.author,
        tags: matterResult.data.tags || [],
        image: matterResult.data.image,
      }
    })

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
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

  const fileContents = fs.readFileSync(filePath, 'utf8')
  const matterResult = matter(fileContents)

  return {
    slug,
    title: matterResult.data.title || slug,
    date: matterResult.data.date || new Date().toISOString(),
    excerpt: matterResult.data.excerpt || '',
    content: matterResult.content,
    author: matterResult.data.author,
    tags: matterResult.data.tags || [],
    image: matterResult.data.image,
  }
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames
    .filter((fileName) => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
    .map((fileName) => fileName.replace(/\.(md|mdx)$/, ''))
}