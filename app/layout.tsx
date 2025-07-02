import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "노마드출장마사지 | 이천, 광주, 여주, 용인 빠르게 찾아가는 프리미엄 마사지",
  description: "경기도 이천, 광주, 여주, 용인 전지역 빠르게 찾아가는 노마드출장마사지! 최고의 실력을 갖춘 관리사가 편안한 공간에서 피로를 풀어드립니다. 지금 바로 예약하세요.",
  keywords: "이천출장마사지, 광주출장마사지, 여주출장마사지, 용인출장마사지, 홈타이, 방문마사지, 아로마마사지, 출장마사지, 방문마사지",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
