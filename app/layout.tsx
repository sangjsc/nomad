import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import MobileBottomNav from '@/components/MobileBottomNav'
import ScrollToTop from '@/components/ScrollToTop'
import Script from 'next/script'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.nomadthai.kr'),
  title: "노마드출장마사지 | 이천, 광주, 여주, 용인 빠르게 찾아가는 프리미엄 마사지",
  description: "경기도 이천, 광주, 여주, 용인 전지역 빠르게 찾아가는 노마드출장마사지! 최고의 실력을 갖춘 관리사가 편안한 공간에서 피로를 풀어드립니다. 지금 바로 예약하세요.",
  keywords: "이천출장마사지, 광주출장마사지, 여주출장마사지, 용인출장마사지, 홈타이, 방문마사지, 아로마마사지, 출장마사지, 방문마사지",
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.svg'
  },
  openGraph: {
    title: "노마드출장마사지 | 이천, 광주, 여주, 용인 프리미엄 마사지",
    description: "경기도 전지역 빠르게 찾아가는 노마드출장마사지! 최고의 실력을 갖춘 관리사가 편안한 공간에서 피로를 풀어드립니다.",
    images: ['/images/spa-background.jpg'],
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  }
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KV1DS4S3MR"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-base"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KV1DS4S3MR');
            `,
          }}
        />
        <Header />
        <main className="pb-20 md:pb-0">{children}</main>
        <MobileBottomNav />
        <ScrollToTop />
      </body>
    </html>
  )
}