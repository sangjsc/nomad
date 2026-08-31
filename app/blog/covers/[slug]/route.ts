import { getPostData } from '@/lib/blog'
import { NextRequest } from 'next/server'

const palettes = [
  { bgA: '#0f172a', bgB: '#334155', accentA: '#fb7185', accentB: '#f97316' },
  { bgA: '#1f2937', bgB: '#0f766e', accentA: '#22d3ee', accentB: '#2dd4bf' },
  { bgA: '#111827', bgB: '#4c1d95', accentA: '#a78bfa', accentB: '#f472b6' },
  { bgA: '#1e293b', bgB: '#7c2d12', accentA: '#f59e0b', accentB: '#f43f5e' },
  { bgA: '#0b1324', bgB: '#1d4ed8', accentA: '#38bdf8', accentB: '#60a5fa' },
  { bgA: '#111827', bgB: '#166534', accentA: '#22c55e', accentB: '#84cc16' },
]

function hashText(value: string): number {
  let hash = 0
  for (let index = 0; index < value.length; index += 1) {
    hash = ((hash << 5) - hash) + value.charCodeAt(index)
    hash |= 0
  }
  return Math.abs(hash)
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function truncate(value: string, maxLength: number): string {
  if (value.length <= maxLength) {
    return value
  }
  return `${value.slice(0, Math.max(0, maxLength - 1))}...`
}

function getCategoryLabel(category?: string): string {
  if (category === 'regional') {
    return 'REGIONAL GUIDE'
  }
  if (category === 'official') {
    return 'OFFICIAL UPDATE'
  }
  return 'BOOKING INFO'
}

export const revalidate = 86400
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<unknown> }
) {
  const resolvedParams = await params as { slug?: string } | undefined
  const slug = typeof resolvedParams?.slug === 'string' && resolvedParams.slug.length > 0
    ? resolvedParams.slug
    : 'post'
  const post = getPostData(slug)
  const title = truncate(post?.title ?? slug.replace(/-/g, ' '), 44)
  const excerpt = truncate(post?.excerpt ?? 'Booking and service guide', 92)
  const categoryLabel = getCategoryLabel(post?.category)
  const palette = palettes[hashText(slug) % palettes.length]
  const decoSeed = hashText(`${slug}-cover`)

  const circleX = 920 + (decoSeed % 120)
  const circleY = 90 + (decoSeed % 80)
  const circleR = 120 + (decoSeed % 30)

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${escapeXml(title)}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${palette.bgA}" />
      <stop offset="100%" stop-color="${palette.bgB}" />
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${palette.accentA}" />
      <stop offset="100%" stop-color="${palette.accentB}" />
    </linearGradient>
    <filter id="blur">
      <feGaussianBlur stdDeviation="42" />
    </filter>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)" />
  <circle cx="${circleX}" cy="${circleY}" r="${circleR}" fill="${palette.accentA}" opacity="0.28" filter="url(#blur)" />
  <circle cx="190" cy="550" r="180" fill="${palette.accentB}" opacity="0.2" filter="url(#blur)" />

  <rect x="70" y="76" rx="999" ry="999" width="250" height="42" fill="url(#accent)" opacity="0.95" />
  <text x="94" y="104" fill="#ffffff" font-size="20" font-family="Arial, sans-serif" letter-spacing="1.2">${escapeXml(categoryLabel)}</text>

  <text x="70" y="220" fill="#ffffff" font-size="58" font-weight="700" font-family="Arial, sans-serif">${escapeXml(title)}</text>
  <text x="70" y="288" fill="#e2e8f0" font-size="30" font-family="Arial, sans-serif">${escapeXml(excerpt)}</text>

  <rect x="70" y="500" rx="10" ry="10" width="360" height="54" fill="#ffffff" opacity="0.1" />
  <text x="94" y="535" fill="#f8fafc" font-size="24" font-family="Arial, sans-serif">nomadthai.kr/blog/${escapeXml(slug)}</text>
</svg>`

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=86400, stale-while-revalidate=604800',
    },
  })
}
