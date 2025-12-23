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
  keywords: "안산출장마사지, 안양출장마사지, 수원출장마사지, 용인출장마사지, 이천출장마사지, 광주출장마사지, 여주출장마사지, 성남출장마사지, 군포출장마사지, 과천출장마사지, 의왕출장마사지, 하남출장마사지, 홈타이, 방문마사지, 아로마마사지, 출장마사지",
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.svg'
  },
  openGraph: {
    title: "노마드출장마사지 | 경기도 프리미엄 출장마사지",
    description: "경기도 전지역 빠르게 찾아가는 노마드출장마사지! 최고의 실력을 갖춘 관리사가 편안한 공간에서 피로를 풀어드립니다.",
    images: [
      {
        url: '/images/spa-background.jpg',
        width: 1200,
        height: 630,
        alt: '노마드출장마사지 - 경기도 전지역 24시간 출장마사지 서비스',
        type: 'image/jpeg',
      },
    ],
    type: 'website',
    locale: 'ko_KR',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: '노마드출장마사지 | 경기도 프리미엄 출장마사지',
    description: '경기도 전지역 빠르게 찾아가는 노마드출장마사지! 24시간 후불제.',
    images: ['/images/spa-background.jpg'],
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
  const baseUrl = 'https://www.nomadthai.kr'

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
        <Script id="ld-localbusiness" type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "노마드출장마사지",
            "url": "${baseUrl}",
            "telephone": "+82-10-8186-7771",
            "areaServed": [
              {"@type": "City", "name": "안산시", "addressRegion": "경기", "addressCountry": "KR"},
              {"@type": "City", "name": "안양시", "addressRegion": "경기", "addressCountry": "KR"},
              {"@type": "City", "name": "수원시", "addressRegion": "경기", "addressCountry": "KR"},
              {"@type": "City", "name": "용인시", "addressRegion": "경기", "addressCountry": "KR"},
              {"@type": "City", "name": "이천시", "addressRegion": "경기", "addressCountry": "KR"},
              {"@type": "City", "name": "광주시", "addressRegion": "경기", "addressCountry": "KR"},
              {"@type": "City", "name": "여주시", "addressRegion": "경기", "addressCountry": "KR"},
              {"@type": "City", "name": "성남시", "addressRegion": "경기", "addressCountry": "KR"},
              {"@type": "City", "name": "군포시", "addressRegion": "경기", "addressCountry": "KR"},
              {"@type": "City", "name": "과천시", "addressRegion": "경기", "addressCountry": "KR"},
              {"@type": "City", "name": "의왕시", "addressRegion": "경기", "addressCountry": "KR"},
              {"@type": "City", "name": "하남시", "addressRegion": "경기", "addressCountry": "KR"}
            ],
            "openingHours": "Mo-Su 00:00-23:59",
            "priceRange": "₩₩₩",
            "serviceType": "출장 마사지 (호텔/자택 방문)",
            "paymentAccepted": "현금, 카드",
            "currenciesAccepted": "KRW"
          }
          `}
        </Script>
        <Script id="ld-service" type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "출장마사지",
            "provider": {
              "@type": "LocalBusiness",
              "name": "노마드출장마사지"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "마사지 서비스",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {"@type": "Service", "name": "아로마마사지 60분"},
                  "price": "70000",
                  "priceCurrency": "KRW"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {"@type": "Service", "name": "아로마마사지 90분"},
                  "price": "90000",
                  "priceCurrency": "KRW"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {"@type": "Service", "name": "아로마마사지 120분"},
                  "price": "120000",
                  "priceCurrency": "KRW"
                }
              ]
            }
          }
          `}
        </Script>
        <Header />
        <main className="pb-20 md:pb-0">{children}</main>
        <MobileBottomNav />
        <ScrollToTop />
      </body>
    </html>
  )
}