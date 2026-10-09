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

function characterWidth(character: string, fontSize: number): number {
  // Leave room for Korean fallback fonts and wider Latin letters without a canvas.
  if (character === ' ') return fontSize * 0.36
  if (/[ilI1|.,:;'!]/.test(character)) return fontSize * 0.4
  if (/[MWmw@#%&]/.test(character)) return fontSize * 1.05
  if (/^[\x00-\x7f]$/.test(character)) return fontSize * 0.8
  return fontSize * 1.1
}

function wrapText(value: string, maxWidth: number, fontSize: number, maxLines: number): string[] {
  let remaining = Array.from(value.replace(/\s+/g, ' ').trim())
  const lines: string[] = []

  while (remaining.length > 0 && lines.length < maxLines) {
    let width = 0
    let count = 0
    while (count < remaining.length && width + characterWidth(remaining[count], fontSize) <= maxWidth) {
      width += characterWidth(remaining[count], fontSize)
      count += 1
    }

    if (count === remaining.length) {
      lines.push(remaining.join(''))
      break
    }

    if (lines.length === maxLines - 1) {
      while (count > 0 && width + characterWidth('…', fontSize) > maxWidth) {
        count -= 1
        width -= characterWidth(remaining[count], fontSize)
      }
      lines.push(`${remaining.slice(0, count).join('').trimEnd()}…`)
      break
    }

    const lastSpace = remaining.slice(0, count).lastIndexOf(' ')
    const breakAt = lastSpace > 0 ? lastSpace : Math.max(1, count)
    lines.push(remaining.slice(0, breakAt).join('').trimEnd())
    remaining = remaining.slice(breakAt)
    while (remaining[0] === ' ') remaining.shift()
  }

  return lines
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
  const title = post?.title ?? slug.replace(/-/g, ' ')
  const excerpt = post?.excerpt ?? 'Booking and service guide'
  const titleLines = wrapText(title, 1020, 50, 3)
  const excerptLines = wrapText(excerpt, 1020, 26, 2)
  const coverUrl = wrapText(`nomadthai.kr/blog/${slug}`, 1012, 18, 1)[0] ?? ''
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

  <text fill="#ffffff" font-size="50" font-weight="700" font-family="Arial, sans-serif">${titleLines.map((line, index) => `<tspan x="70" y="${190 + index * 64}">${escapeXml(line)}</tspan>`).join('')}</text>
  <text fill="#e2e8f0" font-size="26" font-family="Arial, sans-serif">${excerptLines.map((line, index) => `<tspan x="70" y="${390 + index * 42}">${escapeXml(line)}</tspan>`).join('')}</text>

  <rect x="70" y="500" rx="10" ry="10" width="1060" height="54" fill="#ffffff" opacity="0.1" />
  <text x="94" y="534" fill="#f8fafc" font-size="18" font-family="Arial, sans-serif">${escapeXml(coverUrl)}</text>
</svg>`

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=86400, stale-while-revalidate=604800',
    },
  })
}
