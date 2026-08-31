import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import BlogLayout from "@/components/BlogLayout"
import { getPostData, getAllPostSlugs, getPostLastModified, getRelatedPosts } from "@/lib/blog"
import type { Metadata } from "next"

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostData(slug)

  if (!post) {
    return {
      title: "글을 찾을 수 없습니다 | 노마드출장마사지",
    }
  }

  const modifiedTime = getPostLastModified(post)

  return {
    title: `${post.title} | 노마드출장마사지 블로그`,
    description: post.excerpt || `${post.title}에 대한 전문적인 정보를 제공합니다.`,
    keywords: post.tags?.join(", ") || "마사지, 건강, 웰빙",
    openGraph: {
      title: post.title,
      description: post.excerpt || `${post.title}에 대한 전문적인 정보`,
      url: `https://www.nomadthai.kr/blog/${post.slug}`,
      siteName: "노마드출장마사지",
      locale: "ko_KR",
      type: "article",
      publishedTime: post.date,
      modifiedTime,
      authors: [post.author || "노마드출장마사지"],
      tags: post.tags,
      images: ["https://www.nomadthai.kr/og/home"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt || `${post.title}에 대한 전문적인 정보`,
      images: ["https://www.nomadthai.kr/og/home"],
    },
    other: {
      "article:published_time": post.date,
      "article:modified_time": modifiedTime,
    },
    alternates: {
      canonical: `https://www.nomadthai.kr/blog/${post.slug}`,
    },
  }
}

const components = {
  // Layout already renders the document H1 with the post title.
  // Legacy markdown repeats the same title, so omit its H1 instead of rendering a duplicate H2.
  h1: () => null,
  h2: (props: any) => <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8" {...props} />,
  h3: (props: any) => <h3 className="text-xl font-bold text-gray-800 mb-4 mt-6" {...props} />,
  p: (props: any) => <p className="text-lg text-gray-700 leading-relaxed mb-6" {...props} />,
  ul: (props: any) => <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-2" {...props} />,
  ol: (props: any) => <ol className="list-decimal list-inside text-lg text-gray-700 mb-6 space-y-2" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-rose-400 pl-6 py-2 my-6 bg-rose-50 text-lg italic text-gray-700" {...props} />
  ),
  strong: (props: any) => <strong className="font-semibold text-gray-900" {...props} />,
  em: (props: any) => <em className="italic text-gray-800" {...props} />,
  a: (props: any) => <a className="text-rose-600 hover:underline font-medium" {...props} />,
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getPostData(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post, 3)

  return (
    <BlogLayout post={post} relatedPosts={relatedPosts}>
      <MDXRemote source={post.content} components={components} />
    </BlogLayout>
  )
}
