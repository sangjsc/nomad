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
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "LocalBusiness",
              "name": "노마드출장마사지",
              "url": "https://nomadthai.kr",
              "telephone": "010-8186-7771",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "이천, 광주, 여주, 용인",
                "addressRegion": "경기도",
                "addressCountry": "KR"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              },
              "description": "경기도 이천, 광주, 여주, 용인 전지역 빠르게 찾아가는 노마드출장마사지! 최고의 실력을 갖춘 관리사가 편안한 공간에서 피로를 풀어드립니다.",
              "image": "https://nomadthai.kr/images/spa-background.jpg",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "마사지 서비스",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "타이 마사지",
                      "description": "전통 타이 마사지 기법으로 몸의 균형을 맞춰드립니다",
                      "areaServed": ["이천시", "광주시", "여주시", "용인시"]
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "아로마 마사지",
                      "description": "향긋한 아로마 오일로 심신의 안정을 선사합니다",
                      "areaServed": ["이천시", "광주시", "여주시", "용인시"]
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "스웨디시 힐링 마사지",
                      "description": "깊은 이완과 근육 회복을 위한 전문 마사지",
                      "areaServed": ["이천시", "광주시", "여주시", "용인시"]
                    }
                  }
                ]
              }
            })
          }}
        />
        {children}
      </body>
    </html>
  )
}
