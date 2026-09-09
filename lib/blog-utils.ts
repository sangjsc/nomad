// 클라이언트/서버 공통 유틸리티 함수

import { SERVICE_AREAS, type ServiceArea } from './site'

export interface PostServiceAreaInput {
  slug: string
  title: string
  tags?: readonly string[]
  category?: string
}

// Keep this helper free of fs/blog.ts imports: both server recommendations and
// the client-rendered article layout need the same unambiguous area mapping.
export function getPostServiceArea(post: PostServiceAreaInput): ServiceArea | undefined {
  const slug = post.slug.trim().toLowerCase()
  const slugArea = SERVICE_AREAS.find((area) => slug === area.slug || slug.startsWith(`${area.slug}-`))
  const compactTitle = post.title.replace(/\s+/g, '')
  const hasGyeonggiGwangjuTitle = /(?:경기도|경기)광주/.test(compactTitle)
  const onlyMetropolitanGwangjuTitle = compactTitle.includes('광주광역시') && !hasGyeonggiGwangjuTitle

  if (slugArea) {
    return slugArea.slug === 'gwangju' && onlyMetropolitanGwangjuTitle ? undefined : slugArea
  }

  // General articles often carry several city tags; do not turn those tags into
  // a regional service claim or choose whichever city happens to be listed first.
  if (post.category !== 'regional') return undefined

  const searchText = [post.title, ...(post.tags || [])].join(' ').replace(/\s+/g, '')
  const matchingAreas = SERVICE_AREAS.filter((area) => {
    if (area.slug === 'gwangju') {
      return !onlyMetropolitanGwangjuTitle && /(?:경기도|경기)광주/.test(searchText)
    }
    return searchText.includes(area.name.replace(/\s+/g, ''))
  })

  return matchingAreas.length === 1 ? matchingAreas[0] : undefined
}

export function extractCityFromTitle(title: string): string {
  const cities = ['수원', '안산', '성남', '안양', '과천', '의왕', '군포', '하남', '이천', '광주', '여주', '용인']
  for (const city of cities) {
    if (title.includes(city)) {
      return city
    }
  }
  return ''
}
