'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  Phone,
  MapPin,
  Clock,
  Shield,
  Menu,
  Heart,
  Flower2,
  Crown,
  Sparkles,
  X,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useState, useMemo } from 'react'
import dynamic from 'next/dynamic'

const Sheet = dynamic(
  () => import('@/components/ui/sheet').then(mod => mod.Sheet),
  { ssr: false },
)
const SheetContent = dynamic(
  () => import('@/components/ui/sheet').then(mod => mod.SheetContent),
  { ssr: false },
)
const SheetHeader = dynamic(
  () => import('@/components/ui/sheet').then(mod => mod.SheetHeader),
  { ssr: false },
)
const SheetTitle = dynamic(
  () => import('@/components/ui/sheet').then(mod => mod.SheetTitle),
  { ssr: false },
)
const SheetTrigger = dynamic(
  () => import('@/components/ui/sheet').then(mod => mod.SheetTrigger),
  { ssr: false },
)
const SheetClose = dynamic(
  () => import('@/components/ui/sheet').then(mod => mod.SheetClose),
  { ssr: false },
)

const themes = {
  rose: {
    bg: 'bg-rose-500',
    text: 'text-rose-600',
    border: 'border-rose-300',
    ring: 'ring-rose-200/30',
    hoverRing: 'hover:ring-rose-300/50',
    gradientFrom: 'from-rose-400',
    gradientVia: 'via-pink-400',
    gradientTo: 'to-fuchsia-500',
    hoverGradientFrom: 'hover:from-rose-500',
    hoverGradientVia: 'hover:via-pink-500',
    hoverGradientTo: 'hover:to-fuchsia-600',
    lightBg: 'bg-gradient-to-br from-rose-50 to-pink-50',
    lightText: 'text-rose-700',
    lightBorder: 'border-rose-200',
    accentText: 'text-rose-400',
    accentText2: 'text-pink-400',
  },
  green: {
    bg: 'bg-emerald-500',
    text: 'text-emerald-600',
    border: 'border-emerald-300',
    ring: 'ring-emerald-200/30',
    hoverRing: 'hover:ring-emerald-300/50',
    gradientFrom: 'from-emerald-400',
    gradientVia: 'via-green-400',
    gradientTo: 'to-teal-500',
    hoverGradientFrom: 'hover:from-emerald-500',
    hoverGradientVia: 'hover:via-green-500',
    hoverGradientTo: 'hover:to-teal-600',
    lightBg: 'bg-gradient-to-br from-emerald-50 to-green-50',
    lightText: 'text-emerald-700',
    lightBorder: 'border-emerald-200',
    accentText: 'text-emerald-400',
    accentText2: 'text-green-400',
  },
  blue: {
    bg: 'bg-blue-500',
    text: 'text-blue-600',
    border: 'border-blue-300',
    ring: 'ring-blue-200/30',
    hoverRing: 'hover:ring-blue-300/50',
    gradientFrom: 'from-blue-400',
    gradientVia: 'via-indigo-400',
    gradientTo: 'to-purple-500',
    hoverGradientFrom: 'hover:from-blue-500',
    hoverGradientVia: 'hover:via-indigo-500',
    hoverGradientTo: 'hover:to-purple-600',
    lightBg: 'bg-gradient-to-br from-blue-50 to-indigo-50',
    lightText: 'text-blue-700',
    lightBorder: 'border-blue-200',
    accentText: 'text-blue-400',
    accentText2: 'text-indigo-400',
  },
  amber: {
    bg: 'bg-orange-500',
    text: 'text-orange-600',
    border: 'border-orange-300',
    ring: 'ring-orange-200/30',
    hoverRing: 'hover:ring-orange-300/50',
    gradientFrom: 'from-orange-400',
    gradientVia: 'via-amber-400',
    gradientTo: 'to-yellow-500',
    hoverGradientFrom: 'hover:from-orange-500',
    hoverGradientVia: 'hover:via-amber-500',
    hoverGradientTo: 'hover:to-yellow-600',
    lightBg: 'bg-gradient-to-br from-orange-50 to-amber-50',
    lightText: 'text-orange-700',
    lightBorder: 'border-orange-200',
    accentText: 'text-orange-400',
    accentText2: 'text-amber-400',
  },
  purple: {
    bg: 'bg-purple-500',
    text: 'text-purple-600',
    border: 'border-purple-300',
    ring: 'ring-purple-200/30',
    hoverRing: 'hover:ring-purple-300/50',
    gradientFrom: 'from-purple-400',
    gradientVia: 'via-violet-400',
    gradientTo: 'to-indigo-500',
    hoverGradientFrom: 'hover:from-purple-500',
    hoverGradientVia: 'hover:via-violet-500',
    hoverGradientTo: 'hover:to-indigo-600',
    lightBg: 'bg-gradient-to-br from-purple-50 to-violet-50',
    lightText: 'text-purple-700',
    lightBorder: 'border-purple-200',
    accentText: 'text-purple-400',
    accentText2: 'text-violet-400',
  },
}

interface LocationPageProps {
  city: string
  cityEn: string
  description: string
  areas: string[]
  intro: React.ReactNode
  serviceDescription: React.ReactNode
  outro: React.ReactNode
  latitude: string
  longitude: string
  theme: keyof typeof themes
  heroImage?: string
  teamImages?: { src: string; title: string; desc: string; gradient: string; }[];
}

export default function LocationPage({
  city,
  cityEn,
  description,
  areas,
  intro,
  serviceDescription,
  outro,
  latitude,
  longitude,
  theme,
  heroImage = '/images/spa-image-1.jpg',
  teamImages = [
    {
      src: '/images/spa-image-2.jpg',
      title: '전문 관리사',
      desc: "실력과 마인드를 겸비한 전문 여성 관리사",
      gradient: `from-rose-200/80 via-pink-200/70 to-purple-200/60`,
    },
    {
      src: '/images/spa-image-3.jpg',
      title: '럭셔리 서비스',
      desc: '최고급 프리미엄 경험',
      gradient: `from-pink-200/80 via-rose-200/70 to-purple-200/60`,
    },
    {
      src: '/images/spa-image-4.jpg',
      title: '힐링 서비스',
      desc: '완벽한 휴식과 회복',
      gradient: `from-purple-200/80 via-pink-200/70 to-rose-200/60`,
    },
  ],
}: LocationPageProps) {
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const currentTheme = useMemo(() => themes[theme] || themes.rose, [theme])

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": `노마드출장마사지 ${city}점`,
        "description": `경기도 ${city}시 전문 출장마사지 서비스. ${city} 출장안마 전문 업체.`,
        "url": `https://www.nomadthai.kr/${cityEn}`,
        "telephone": "010-8186-7771",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": `${city}시`,
          "addressRegion": "경기도",
          "addressCountry": "KR",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": latitude,
          "longitude": longitude,
        },
        "openingHours": "Mo-Su 00:00-23:59",
        "priceRange": "₩₩-₩₩₩",
        "paymentAccepted": ["Cash", "Credit Card"],
        "currenciesAccepted": "KRW",
        "serviceArea": [
          {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": latitude,
              "longitude": longitude,
            },
            "geoRadius": "30000", // 30km 반경
          },
          {
            "@type": "City",
            "name": `${city}시`,
            "description": `${city}출장마사지 전문 서비스 지역`
          }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": `${city} 출장마사지 서비스`,
          "itemListElement": [
            {
              "@type": "Offer",
              "price": "70000",
              "priceCurrency": "KRW",
              "availability": "https://schema.org/InStock",
              "validFrom": new Date().toISOString().split('T')[0],
              "itemOffered": {
                "@type": "Service",
                "name": `${city} 타이 마사지`,
                "description": `${city}시 전통 타이 마사지 기법으로 몸의 균형을 맞춰드립니다. 60분/90분/120분 코스`,
                "serviceType": `${city}출장 타이마사지`,
                "areaServed": `${city}시`
              },
            },
            {
              "@type": "Offer",
              "price": "80000",
              "priceCurrency": "KRW",
              "availability": "https://schema.org/InStock",
              "validFrom": new Date().toISOString().split('T')[0],
              "itemOffered": {
                "@type": "Service",
                "name": `${city} 아로마 마사지`,
                "description": `${city}시 향긋한 아로마 오일로 심신의 안정을 선사합니다. 60분/90분/120분 코스`,
                "serviceType": `${city}출장 아로마마사지`,
                "areaServed": `${city}시`
              },
            },
            {
              "@type": "Offer",
              "price": "100000",
              "priceCurrency": "KRW",
              "availability": "https://schema.org/InStock",
              "validFrom": new Date().toISOString().split('T')[0],
              "itemOffered": {
                "@type": "Service",
                "name": `${city} 스웨디시 힐링 마사지`,
                "description": `${city}시 깊은 이완과 근육 회복을 위한 전문 마사지. 60분/90분/120분 코스`,
                "serviceType": `${city}출장 스웨디시마사지`,
                "areaServed": `${city}시`
              },
            },
            {
              "@type": "Offer",
              "price": "80000",
              "priceCurrency": "KRW",
              "availability": "https://schema.org/InStock",
              "validFrom": new Date().toISOString().split('T')[0],
              "itemOffered": {
                "@type": "Service",
                "name": `${city} 홈타이`,
                "description": `${city}시 집에서 편안하게 받는 태국식 전통 마사지 서비스`,
                "serviceType": `${city}출장 홈타이`,
                "areaServed": `${city}시`
              },
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": `${city} 출장마사지 예약은 어떻게 하나요?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `전화(010-8186-7771) 또는 카카오톡 채널을 통해 24시간 언제든지 ${city} 전 지역으로 예약 상담이 가능합니다.`,
            },
          },
          {
            "@type": "Question",
            "name": "결제는 어떻게 이루어지나요?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "저희 노마드출장마사지는 100% 후불제를 원칙으로 합니다. 관리사에게 서비스를 받으신 후 현장에서 직접 결제하시면 됩니다.",
            },
          },
          {
            "@type": "Question",
            "name": `${city} 어느 지역까지 가능한가요?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `${city}시 전 지역 및 인근 지역까지 출장이 가능합니다. 자세한 주소는 전화 문의 시 친절하게 안내해 드립니다.`,
            },
          },
        ],
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Mobile Floating CTA */}
      <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
        <div className="grid grid-cols-2 gap-2">
          <Button
            className={`bg-gradient-to-r ${currentTheme.gradientFrom} ${currentTheme.gradientVia} ${currentTheme.gradientTo} text-white px-4 py-3 text-base rounded-xl font-bold shadow-2xl transition-all duration-300 transform active:scale-95 w-full`}
            onClick={() => window.open('tel:010-8186-7771')}
          >
            <Phone className="w-4 h-4 mr-2" />
            즉시 예약
          </Button>
          <Button
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 text-base rounded-xl font-bold shadow-2xl transition-all duration-300 transform active:scale-95 w-full"
            onClick={() => window.open('https://open.kakao.com/o/ssZxRuEh')}
          >
            💬 카톡 상담
          </Button>
        </div>
      </div>

      <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-slate-100 pb-20 md:pb-0">
        

        <section className="relative py-8 sm:py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="w-full lg:col-span-7 order-2 lg:order-1">
                <div className="mb-6 lg:mb-8 text-center lg:text-left">
                  <div
                    className={`inline-flex items-center space-x-2 bg-gradient-to-r ${currentTheme.lightBg} rounded-full px-4 lg:px-6 py-2 lg:py-3 mb-4 lg:mb-6 border ${currentTheme.lightBorder}`}
                  >
                    <MapPin
                      className={`w-4 h-4 lg:w-5 lg:h-5 ${currentTheme.lightText}`}
                    />
                    <span
                      className={`text-sm lg:text-base font-medium ${currentTheme.lightText}`}
                    >
                      경기도 {city}시
                    </span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 lg:mb-6 leading-tight text-gray-900">
                    <span className={`bg-gradient-to-r ${currentTheme.gradientFrom} ${currentTheme.gradientVia} ${currentTheme.gradientTo} bg-clip-text text-transparent block`}>
                      {city} 출장마사지
                    </span>
                  </h1>

                  <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 lg:mb-8 leading-relaxed">
                    {description}
                  </p>
                </div>

                <div className="flex flex-col gap-4 mb-8 lg:mb-12">
                  <Button
                    className={`bg-gradient-to-r ${currentTheme.gradientFrom} ${currentTheme.gradientVia} ${currentTheme.gradientTo} ${currentTheme.hoverGradientFrom} ${currentTheme.hoverGradientVia} ${currentTheme.hoverGradientTo} text-white px-8 py-5 text-lg sm:text-xl rounded-2xl font-bold shadow-xl transition-all duration-300 transform active:scale-95 w-full sm:w-auto hover:shadow-2xl`}
                    onClick={() => window.open('tel:010-8186-7771')}
                  >
                    <Phone className="w-5 h-5 mr-3" />
                    📞 지금 예약하기
                  </Button>
                  <Button
                    variant="outline"
                    className={`border-2 ${currentTheme.border} ${currentTheme.text} hover:bg-gray-50 px-8 py-5 text-lg sm:text-xl rounded-2xl font-bold transition-all duration-300 active:scale-95 w-full sm:w-auto hover:shadow-lg bg-white`}
                    onClick={() =>
                      window.open('https://open.kakao.com/o/ssZxRuEh')
                    }
                  >
                    💬 카카오톡 상담
                  </Button>
                </div>

                <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
                  <div className={`bg-gradient-to-br ${currentTheme.lightBg} rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 text-center border ${currentTheme.lightBorder}`}>
                    <Shield
                      className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 ${currentTheme.lightText} mx-auto mb-1 sm:mb-2`}
                    />
                    <span className="text-xs sm:text-sm lg:text-base font-medium text-gray-700">
                      100% 후불제
                    </span>
                  </div>
                  <div className={`bg-gradient-to-br ${currentTheme.lightBg} rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 text-center border ${currentTheme.lightBorder}`}>
                    <Clock
                      className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 ${currentTheme.lightText} mx-auto mb-1 sm:mb-2`}
                    />
                    <span className="text-xs sm:text-sm lg:text-base font-medium text-gray-700">
                      24시간 운영
                    </span>
                  </div>
                  <div className={`bg-gradient-to-br ${currentTheme.lightBg} rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 text-center border ${currentTheme.lightBorder}`}>
                    <Crown
                      className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 ${currentTheme.lightText} mx-auto mb-1 sm:mb-2`}
                    />
                    <span className="text-xs sm:text-sm lg:text-base font-medium text-gray-700">
                      전문 관리사
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-full lg:col-span-5 order-1 lg:order-2">
                <div className="relative max-w-md mx-auto lg:max-w-none">
                  <div className={`absolute inset-0 bg-gradient-to-br ${currentTheme.gradientFrom} ${currentTheme.gradientTo} rounded-3xl transform rotate-3 lg:rotate-6 opacity-20`}></div>
                  <Card className="bg-white shadow-2xl rounded-3xl overflow-hidden relative transition-all duration-500">
                    <div className="relative">
                      <Image
                        src={heroImage}
                        alt={`${city} 출장마사지 전문 관리사 - 노마드출장마사지`}
                        width={500}
                        height={600}
                        className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                        style={{ objectPosition: 'center top' }}
                        priority
                        loading="eager"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${currentTheme.gradientFrom}/20 via-transparent to-transparent`}></div>
                    </div>
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br ${currentTheme.gradientFrom} ${currentTheme.gradientTo} rounded-full flex items-center justify-center`}>
                          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-800 text-base sm:text-lg">
                            {city} 전문 서비스
                          </h3>
                          <p className={`${currentTheme.text} text-xs sm:text-sm`}>
                            Premium Experience
                          </p>
                        </div>
                      </div>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        최고의 마사지 경험을 선사합니다
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className={`py-16 lg:py-24 bg-gradient-to-br from-white via-gray-50 ${currentTheme.lightBg}/20`}
        >
          <div className="container mx-auto px-2 sm:px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <div className="mb-8 lg:mb-12">
                  <div
                    className={`inline-flex items-center space-x-2 bg-gradient-to-r from-rose-100 to-purple-100 rounded-full px-4 lg:px-6 py-2 lg:py-3 mb-4 lg:mb-6`}
                  >
                    <Crown
                      className={`w-4 h-4 lg:w-5 lg:h-5 ${currentTheme.lightText}`}
                    />
                    <span
                      className={`font-semibold text-sm lg:text-base ${currentTheme.lightText}`}
                    >
                      {`프리미엄 ${city} 출장 마사지`}
                    </span>
                  </div>
                  <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-4 lg:mb-6">
                    ABOUT OUR {city.toUpperCase()} SERVICE
                  </h2>
                  <div
                    className={`w-16 lg:w-24 h-1 bg-gradient-to-r ${currentTheme.gradientFrom} ${currentTheme.gradientVia} ${currentTheme.gradientTo} mb-6 lg:mb-8`}
                  ></div>
                </div>

                <div className="space-y-4 lg:space-y-6 text-gray-600 leading-relaxed">
                  <div className="text-lg lg:text-xl">{intro}</div>
                  <div className="text-base lg:text-lg">
                    {serviceDescription}
                  </div>
                  <div className="text-base lg:text-lg">{outro}</div>
                </div>

                <div className="mt-8 lg:mt-12 grid grid-cols-2 gap-4 lg:gap-8">
                  <Card
                    className={`bg-gradient-to-br from-rose-50 to-pink-50 ${currentTheme.lightBorder} shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}
                  >
                    <CardContent className="p-4 lg:p-6 text-center">
                      <div
                        className={`text-2xl lg:text-4xl font-bold ${currentTheme.lightText} mb-2`}
                      >
                        24/7
                      </div>
                      <div className="text-sm lg:text-base text-gray-600 font-medium">
                        24시간 운영
                      </div>
                    </CardContent>
                  </Card>
                  <Card
                    className={`bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}
                  >
                    <CardContent className="p-4 lg:p-6 text-center">
                      <div className="text-2xl lg:text-4xl font-bold text-purple-600 mb-2">
                        100%
                      </div>
                      <div className="text-sm lg:text-base text-gray-600 font-medium">
                        후불 안심
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="relative">
                <Card
                  className={`bg-gradient-to-br ${currentTheme.gradientFrom} ${currentTheme.gradientVia} ${currentTheme.gradientTo} text-white rounded-3xl shadow-2xl overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 w-24 lg:w-32 h-24 lg:h-32 bg-white/10 rounded-full -translate-y-12 lg:-translate-y-16 translate-x-12 lg:translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-16 lg:w-24 h-16 lg:h-24 bg-white/10 rounded-full translate-y-8 lg:translate-y-12 -translate-x-8 lg:-translate-x-12"></div>

                  <CardContent className="p-6 lg:p-12 relative z-10">
                    <div className="mb-6 lg:mb-10">
                      <div className="flex items-center space-x-3 mb-4 lg:mb-6">
                        <Crown className="w-6 h-6 lg:w-8 lg:h-8" />
                        <h3 className="text-2xl lg:text-4xl font-bold italic">
                          Why us in {city}?
                        </h3>
                      </div>
                      <div className="w-12 lg:w-16 h-1 bg-white/50"></div>
                    </div>

                    <div className="space-y-4 lg:space-y-6">
                      {[
                        {
                          title: `집에서 편안하게, ${city} 어디든`,
                          desc: '고객님의 공간에서 프리미엄 마사지 서비스를 받으세요',
                        },
                        {
                          title: '전문 관리사',
                          desc: "실력과 마인드를 겸비한 전문 여성 관리사",
                        },
                        {
                          title: '안전한 후불제',
                          desc: '서비스 완료 후 결제하는 100% 안심 시스템',
                        },
                        {
                          title: '빠른 출발',
                          desc: `예약 후 30분 내로 ${city} 전지역으로 출발`,
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-3 lg:space-x-4"
                        >
                          <div className="w-6 h-6 lg:w-8 lg:h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          <div>
                            <h4 className="font-bold mb-1 lg:mb-2 text-sm lg:text-base">
                              {item.title}
                            </h4>
                            <p className="text-white/80 text-xs lg:text-sm leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className={`py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white ${currentTheme.lightBg}/30`}>
          <div className="container mx-auto px-2 sm:px-4">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-6">
                {city}시 서비스 지역
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                {city}시 전 지역에서 최고의 출장마사지 서비스를 제공합니다
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl">
              <div
                className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3`}
              >
                {areas.map((area, index) => (
                  <div
                    key={index}
                    className={`bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl p-3 text-center border ${currentTheme.lightBorder} hover:bg-rose-100 transition-colors duration-300`}
                  >
                    <span className="text-gray-700 font-medium text-sm lg:text-base">
                      {area}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="services"
          className={`py-16 lg:py-24 bg-gradient-to-br from-white via-gray-50 ${currentTheme.lightBg}/40`}
        >
          <div className="container mx-auto px-2 sm:px-4">
            <div className="text-center mb-12 lg:mb-20">
              <div
                className={`inline-flex items-center space-x-2 bg-gradient-to-r from-rose-100 to-purple-100 rounded-full px-4 lg:px-6 py-2 lg:py-3 mb-4 lg:mb-6`}
              >
                <Sparkles
                  className={`w-4 h-4 lg:w-5 lg:h-5 ${currentTheme.lightText}`}
                />
                <span
                  className={`font-semibold text-sm lg:text-base ${currentTheme.lightText}`}
                >
                  Our Services in {city}
                </span>
              </div>
              <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-4 lg:mb-6">
                {city} 출장마사지 서비스
              </h2>
              <div
                className={`w-16 lg:w-24 h-1 bg-gradient-to-r ${currentTheme.gradientFrom} ${currentTheme.gradientVia} ${currentTheme.gradientTo} mx-auto mb-6 lg:mb-8`}
              ></div>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                전문 관리사가 제공하는 다양한 프리미엄 마사지 서비스
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10">
              <Card className="bg-white shadow-2xl rounded-3xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 group">
                <div
                  className={`bg-gradient-to-br from-rose-100 via-pink-100 to-purple-100 p-6 lg:p-8`}
                >
                  <div
                    className={`w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br ${currentTheme.gradientFrom} ${currentTheme.gradientVia} ${currentTheme.gradientTo} rounded-2xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Flower2 className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3 lg:mb-4">
                    타이 마사지
                  </h3>
                  <p className="text-gray-600 mb-4 lg:mb-6 leading-relaxed text-sm lg:text-base">
                    전통 타이 마사지 기법으로 몸의 균형을 맞춰드립니다
                  </p>

                  <div className="space-y-2 lg:space-y-3">
                    {[
                      { time: '60분', price: '70,000원' },
                      { time: '90분', price: '80,000원' },
                      { time: '120분', price: '100,000원' },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-2 lg:p-3 bg-white/70 rounded-xl"
                      >
                        <span className="text-gray-700 font-medium text-sm lg:text-base">
                          {item.time}
                        </span>
                        <span
                          className={`font-bold ${currentTheme.lightText} text-sm lg:text-base`}
                        >
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              <Card className="bg-white shadow-2xl rounded-3xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 group">
                <div
                  className={`bg-gradient-to-br from-purple-100 via-pink-100 to-rose-100 p-6 lg:p-8`}
                >
                  <div
                    className={`w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br ${currentTheme.gradientFrom} ${currentTheme.gradientVia} ${currentTheme.gradientTo} rounded-2xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Heart className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3 lg:mb-4">
                    아로마 마사지
                  </h3>
                  <p className="text-gray-600 mb-4 lg:mb-6 leading-relaxed text-sm lg:text-base">
                    향긋한 아로마 오일로 심신의 안정을 선사합니다
                  </p>

                  <div className="space-y-2 lg:space-y-3">
                    {[
                      { time: '60분', price: '80,000원' },
                      { time: '90분', price: '90,000원' },
                      { time: '120분', price: '110,000원' },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-2 lg:p-3 bg-white/70 rounded-xl"
                      >
                        <span className="text-gray-700 font-medium text-sm lg:text-base">
                          {item.time}
                        </span>
                        <span
                          className={`font-bold ${currentTheme.lightText} text-sm lg:text-base`}
                        >
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              <Card className="bg-white shadow-2xl rounded-3xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 group md:col-span-2 lg:col-span-1">
                <div
                  className={`bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100 p-6 lg:p-8`}
                >
                  <div
                    className={`w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br ${currentTheme.gradientFrom} ${currentTheme.gradientVia} ${currentTheme.gradientTo} rounded-2xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Crown className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3 lg:mb-4">
                    스웨디시 힐링 마사지
                  </h3>

                  <p className="text-gray-600 mb-4 lg:mb-6 leading-relaxed text-sm lg:text-base">
                    깊은 이완과 근육 회복을 위한 전문 마사지
                  </p>

                  <div className="space-y-2 lg:space-y-3">
                    {[
                      { time: '60분', price: '100,000원' },
                      { time: '90분', price: '130,000원' },
                      { time: '120분', price: '160,000원' },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-2 lg:p-3 bg-white/70 rounded-xl"
                      >
                        <span className="text-gray-700 font-medium text-sm lg:text-base">
                          {item.time}
                        </span>
                        <span
                          className={`font-bold ${currentTheme.lightText} text-sm lg:text-base`}
                        >
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>

            <div className="mt-12 lg:mt-20">
              <div className="text-center mb-8 lg:mb-12">
                <div
                  className={`inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-4 lg:px-6 py-2 lg:py-3 mb-4`}
                >
                  <Crown
                    className={`w-4 h-4 lg:w-5 lg:h-5 ${currentTheme.lightText}`}
                  />
                  <span
                    className={`font-semibold text-sm lg:text-base ${currentTheme.lightText}`}
                  >
                    Special Package
                  </span>
                </div>
                <h3 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-4">
                  스페셜 패키지
                </h3>
                <div
                  className={`w-12 lg:w-16 h-1 bg-gradient-to-r ${currentTheme.gradientFrom} ${currentTheme.gradientVia} ${currentTheme.gradientTo} mx-auto`}
                ></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-10 max-w-4xl mx-auto">
                <Card
                  className={`bg-gradient-to-br ${currentTheme.gradientFrom} ${currentTheme.gradientVia} ${currentTheme.gradientTo} text-white shadow-2xl rounded-3xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2`}
                >
                  <CardContent className="p-6 lg:p-8 relative">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>

                    <div className="flex items-center space-x-3 mb-4 lg:mb-6">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                        <Heart className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl lg:text-2xl font-bold">
                          타이 + 아로마
                        </h4>
                        <p className="text-white/80 text-sm lg:text-base">
                          Thai + Aroma Package
                        </p>
                      </div>
                    </div>

                    <p className="text-white/90 mb-4 lg:mb-6 leading-relaxed text-sm lg:text-base">
                      타이 마사지 60분 + 아로마 마사지 60분
                    </p>

                    <div className="bg-white/10 rounded-xl p-3 lg:p-4 backdrop-blur-sm">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-sm lg:text-base">
                          총 120분
                        </span>
                        <span className="font-bold text-2xl lg:text-3xl">
                          110,000원
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 text-white shadow-2xl rounded-3xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                  <CardContent className="p-6 lg:p-8 relative">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>

                    <div className="flex items-center space-x-3 mb-4 lg:mb-6">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                        <Crown className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl lg:text-2xl font-bold">
                          타이 + 스웨디시 힐링
                        </h4>
                        <p className="text-white/80 text-sm lg:text-base">
                          Thai + Swedish Package
                        </p>
                      </div>
                    </div>

                    <p className="text-white/90 mb-4 lg:mb-6 leading-relaxed text-sm lg:text-base">
                      타이 마사지 60분 + 스웨디시 마사지 60분
                    </p>

                    <div className="bg-white/10 rounded-xl p-3 lg:p-4 backdrop-blur-sm">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-sm lg:text-base">
                          총 120분
                        </span>
                        <span className="font-bold text-2xl lg:text-3xl">
                          130,000원
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section
          id="team"
          className={`py-16 lg:py-24 bg-gradient-to-br ${currentTheme.lightBg}/30 via-white to-gray-50`}
        >
          <div className="container mx-auto px-2 sm:px-4">
            <div className="text-center mb-12 lg:mb-20">
              <div
                className={`inline-flex items-center space-x-2 bg-gradient-to-r from-rose-100 to-purple-100 rounded-full px-4 lg:px-6 py-2 lg:py-3 mb-4 lg:mb-6`}
              >
                <Crown
                  className={`w-4 h-4 lg:w-5 lg:h-5 ${currentTheme.lightText}`}
                />
                <span
                  className={`font-semibold text-sm lg:text-base ${currentTheme.lightText}`}
                >
                  Our Team
                </span>
              </div>
              <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-4 lg:mb-6">
                전문 관리사
              </h2>
              <div
                className={`w-16 lg:w-24 h-1 bg-gradient-to-r ${currentTheme.gradientFrom} ${currentTheme.gradientVia} ${currentTheme.gradientTo} mx-auto mb-6 lg:mb-8`}
              ></div>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                최고의 서비스를 제공하는 전문 관리사들을 만나보세요
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10">
              {teamImages.map((item, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2`}
                >
                  <div className="relative">
                    <Image
                      src={item.src || '/placeholder.svg'}
                      alt={`${city} ${item.title} - 노마드출장마사지`}
                      width={400}
                      height={500}
                      className="w-full h-72 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-700 group-hover:brightness-110"
                      style={{ objectPosition: 'center top' }}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={index === 0}
                    />

                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-all duration-500"></div>

                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${item.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500`}
                    ></div>

                    <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

                    <div className="absolute inset-0 flex flex-col justify-end p-4 lg:p-6 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-white/40 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 shadow-lg">
                        <div className="flex items-center space-x-3 mb-3">
                          <div
                            className={`w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br ${currentTheme.gradientFrom} ${currentTheme.gradientTo} rounded-full flex items-center justify-center shadow-md`}
                          >
                            <Crown className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                          </div>
                          <h3 className="text-lg lg:text-xl font-bold text-gray-800">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                          {item.desc}
                        </p>

                        <div className="flex justify-center mt-4">
                          <div
                            className={`w-12 h-1 bg-gradient-to-r ${currentTheme.gradientFrom} ${currentTheme.gradientTo} rounded-full`}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`absolute top-4 right-4 w-12 h-12 bg-white/80 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200 flex items-center justify-center shadow-lg`}
                    >
                      <Heart className={`w-6 h-6 ${currentTheme.text}`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local Information Section */}
        <section className={`py-16 lg:py-24 bg-gradient-to-br from-white via-gray-50 ${currentTheme.lightBg}/20`}>
          <div className="container mx-auto px-2 sm:px-4">
            <div className="text-center mb-12 lg:mb-16">
              <div className={`inline-flex items-center space-x-2 bg-gradient-to-r from-rose-100 to-purple-100 rounded-full px-4 lg:px-6 py-2 lg:py-3 mb-4 lg:mb-6`}>
                <MapPin className={`w-4 h-4 lg:w-5 lg:h-5 ${currentTheme.lightText}`} />
                <span className={`font-semibold text-sm lg:text-base ${currentTheme.lightText}`}>
                  {city} 지역 정보
                </span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-6">
                {city}출장마사지 서비스 지역 안내
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {city}시 전지역에서 이용 가능한 {city}출장마사지 및 {city}홈타이 서비스
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
              <Card className="bg-white shadow-xl rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-6 lg:p-8">
                  <div className="flex items-center mb-4 lg:mb-6">
                    <div className={`w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br ${currentTheme.gradientFrom} ${currentTheme.gradientTo} rounded-2xl flex items-center justify-center mr-4`}>
                      <MapPin className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-800">
                      {city}출장마사지 이용 가능 지역
                    </h3>
                  </div>
                  <div className="space-y-3 lg:space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      <strong className={currentTheme.text}>{city}출장마사지</strong>는 {areas.slice(0, 3).join(', ')} 등 {city}시 전 지역에서 이용하실 수 있습니다.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      특히 {areas.slice(3, 6).join(', ')} 지역의 <strong className={currentTheme.text}>{city}홈타이</strong> 서비스는 고객 만족도가 매우 높습니다.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      모든 지역에서 동일한 품질의 <strong className={currentTheme.text}>{city}출장태국마사지</strong> 서비스를 제공하며, 24시간 예약이 가능합니다.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-xl rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-6 lg:p-8">
                  <div className="flex items-center mb-4 lg:mb-6">
                    <div className={`w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mr-4`}>
                      <Clock className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-800">
                      {city}출장마사지 운영 시간
                    </h3>
                  </div>
                  <div className="space-y-3 lg:space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      <strong className={currentTheme.text}>{city}출장마사지</strong>는 24시간 연중무휴로 운영됩니다.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      오전 9시부터 새벽 2시까지는 <strong className={currentTheme.text}>{city}홈타이</strong> 예약이 특히 많습니다.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {city}시 전지역 30분 내 도착을 목표로, 최대한 빠른 <strong className={currentTheme.text}>{city}출장마사지</strong> 서비스를 제공합니다.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Enhanced FAQ Section */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl">
              <div className="text-center mb-8 lg:mb-12">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                  {city}출장마사지 자주 묻는 질문
                </h3>
                <div className={`w-16 lg:w-24 h-1 bg-gradient-to-r ${currentTheme.gradientFrom} ${currentTheme.gradientTo} mx-auto`}></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <div className="space-y-4 lg:space-y-6">
                  <div className="bg-white rounded-2xl p-4 lg:p-6 shadow-md">
                    <h4 className="font-bold text-gray-800 mb-2">
                      {city}출장마사지 예약은 얼마나 미리 해야 하나요?
                    </h4>
                    <p className="text-gray-600 text-sm lg:text-base">
                      {city}출장마사지는 당일 예약도 가능합니다. {city}홈타이 서비스는 예약 후 30분 내 도착을 목표로 하고 있습니다.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-4 lg:p-6 shadow-md">
                    <h4 className="font-bold text-gray-800 mb-2">
                      {city}출장마사지 이용 시 준비할 것이 있나요?
                    </h4>
                    <p className="text-gray-600 text-sm lg:text-base">
                      {city}출장마사지 이용 시 별도로 준비하실 것은 없습니다. 모든 마사지 용품은 관리사가 직접 준비해 드립니다.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4 lg:space-y-6">
                  <div className="bg-white rounded-2xl p-4 lg:p-6 shadow-md">
                    <h4 className="font-bold text-gray-800 mb-2">
                      {city}홈타이와 {city}출장마사지의 차이점은?
                    </h4>
                    <p className="text-gray-600 text-sm lg:text-base">
                      {city}홈타이는 태국 전통 마사지 기법을, {city}출장마사지는 다양한 마사지 기법을 포함합니다. 고객 선호에 따라 선택 가능합니다.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-4 lg:p-6 shadow-md">
                    <h4 className="font-bold text-gray-800 mb-2">
                      {city}출장마사지 가격은 지역별로 차이가 있나요?
                    </h4>
                    <p className="text-gray-600 text-sm lg:text-base">
                      {city}시 전지역 동일한 가격으로 {city}출장마사지 서비스를 제공하며, 추가 교통비는 없습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Areas Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-rose-50/30">
          <div className="container mx-auto px-2 sm:px-4">
            <div className="text-center mb-12 lg:mb-16">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-rose-100 to-purple-100 rounded-full px-4 lg:px-6 py-2 lg:py-3 mb-4 lg:mb-6">
                <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-rose-600" />
                <span className="text-rose-800 font-semibold text-sm lg:text-base">
                  Other Areas
                </span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-6">
                경기도 전지역 출장마사지
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                노마드출장마사지는 경기도 전지역에서 동일한 프리미엄 서비스를 제공합니다
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
              {[
                { name: "안산출장마사지", href: "/ansan", area: "안산시" },
                { name: "안양출장마사지", href: "/anyang", area: "안양시" },
                { name: "수원출장마사지", href: "/suwon", area: "수원시" },
                { name: "용인출장마사지", href: "/yongin", area: "용인시" },
                { name: "이천출장마사지", href: "/icheon", area: "이천시" },
                { name: "광주출장마사지", href: "/gwangju", area: "광주시" },
                { name: "여주출장마사지", href: "/yeoju", area: "여주시" },
                { name: "성남출장마사지", href: "/seongnam", area: "성남시" },
                { name: "군포출장마사지", href: "/gunpo", area: "군포시" },
                { name: "과천출장마사지", href: "/gwacheon", area: "과천시" },
                { name: "의왕출장마사지", href: "/uiwang", area: "의왕시" },
                { name: "하남출장마사지", href: "/hanam", area: "하남시" }
              ].filter(location => !location.href.includes(cityEn)).map((location, index) => (
                <Link key={index} href={location.href}>
                  <Card className="bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 rounded-2xl overflow-hidden group border-2 border-transparent hover:border-rose-200">
                    <CardContent className="p-4 lg:p-5">
                      <div className={`w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br ${currentTheme.gradientFrom} ${currentTheme.gradientTo} rounded-xl flex items-center justify-center mx-auto mb-2 lg:mb-3 group-hover:scale-110 transition-transform duration-300`}>
                        <MapPin className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                      </div>
                      <h3 className="text-xs lg:text-sm font-bold text-gray-800 mb-1 text-center group-hover:text-rose-600 transition-colors duration-300">
                        {location.name}
                      </h3>
                      <p className="text-xs text-gray-600 text-center">
                        {location.area}
                      </p>
                      <div className="mt-2 text-center">
                        <span className="inline-flex items-center text-xs text-rose-600 font-medium group-hover:text-rose-700">
                          24시간
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="mt-12 lg:mt-16 text-center">
              <Card className={`bg-gradient-to-br ${currentTheme.lightBg} border-2 ${currentTheme.lightBorder} rounded-3xl p-6 lg:p-8 max-w-4xl mx-auto shadow-xl`}>
                <h3 className={`text-xl lg:text-2xl font-bold mb-4 ${currentTheme.lightText}`}>
                  경기도 어디든 동일한 프리미엄 서비스
                </h3>
                <p className="text-sm lg:text-base text-gray-600 mb-6">
                  모든 지역에서 동일한 품질의 서비스 · 100% 후불제 · 전문 관리사
                </p>
                <div className="flex flex-wrap gap-2 lg:gap-3 justify-center">
                  <span className="bg-white rounded-full px-3 lg:px-4 py-1 lg:py-2 text-xs lg:text-sm text-gray-700 font-medium shadow-sm">
                    타이마사지
                  </span>
                  <span className="bg-white rounded-full px-3 lg:px-4 py-1 lg:py-2 text-xs lg:text-sm text-gray-700 font-medium shadow-sm">
                    아로마마사지
                  </span>
                  <span className="bg-white rounded-full px-3 lg:px-4 py-1 lg:py-2 text-xs lg:text-sm text-gray-700 font-medium shadow-sm">
                    스웨디시마사지
                  </span>
                  <span className="bg-white rounded-full px-3 lg:px-4 py-1 lg:py-2 text-xs lg:text-sm text-gray-700 font-medium shadow-sm">
                    홈타이
                  </span>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-slate-800 to-purple-900">
          <div className="container mx-auto px-2 sm:px-4">
            <div className="max-w-5xl mx-auto">
              <Card
                className={`bg-gradient-to-br ${currentTheme.gradientFrom} ${currentTheme.gradientVia} ${currentTheme.gradientTo} rounded-3xl p-6 lg:p-16 text-white text-center shadow-2xl overflow-hidden relative`}
              >
                <div className="absolute top-0 right-0 w-32 lg:w-48 h-32 lg:h-48 bg-white/10 rounded-full -translate-y-16 lg:-translate-y-24 translate-x-16 lg:translate-x-24"></div>
                <div className="absolute bottom-0 left-0 w-24 lg:w-36 h-24 lg:h-36 bg-white/10 rounded-full translate-y-12 lg:translate-y-18 -translate-x-12 lg:-translate-x-18"></div>

                <div className="relative z-10">
                  <div className="mb-6 lg:mb-10">
                    <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 lg:px-6 py-2 lg:py-3 mb-4 lg:mb-6">
                      <Crown className="w-4 h-4 lg:w-5 lg:h-5" />
                      <span className="font-semibold text-sm lg:text-base">
                        Premium Booking
                      </span>
                    </div>
                    <h2 className="text-2xl lg:text-4xl xl:text-5xl font-bold mb-3 lg:mb-4">
                      {city} 출장마사지 지금 바로 예약하세요
                    </h2>
                    <p className="text-lg lg:text-xl text-white/90 mb-6 lg:mb-8">
                      경기도 {city}시 최고의 프리미엄 출장마사지
                    </p>
                    <div className="flex items-center justify-center space-x-3 lg:space-x-4 text-xl lg:text-3xl font-bold mb-6 lg:mb-10">
                      <Phone className="w-6 h-6 lg:w-8 lg:h-8" />
                      <span>010-8186-7771</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center mb-8 lg:mb-12">
                    <Button
                      className={`bg-white ${currentTheme.text} hover:bg-rose-50 px-6 lg:px-10 py-3 lg:py-4 text-lg lg:text-xl rounded-full font-bold shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto`}
                      onClick={() => window.open('tel:010-8186-7771')}
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      전화로 예약하기
                    </Button>
                    <Button
                      className="bg-green-500 hover:bg-green-600 text-white px-6 lg:px-10 py-3 lg:py-4 text-lg lg:text-xl rounded-full font-bold shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                      onClick={() =>
                        window.open('https://open.kakao.com/o/ssZxRuEh')
                      }
                    >
                      카카오톡 상담
                    </Button>
                  </div>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
                    {['이천시', '광주시', '여주시', '용인시'].map(
                      (area, index) => (
                        <div
                          key={index}
                          className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 lg:p-4 hover:bg-white/20 transition-all duration-300"
                        >
                          <MapPin className="w-4 h-4 lg:w-6 lg:h-6 mx-auto mb-1 lg:mb-2" />
                          <span className="text-xs lg:text-sm font-medium">
                            {area}
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white py-12 lg:py-16">
          <div className="container mx-auto px-2 sm:px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <Link
                  href="/"
                  className="flex items-center space-x-3 lg:space-x-4 mb-4 lg:mb-6"
                >
                  <div
                    className={`w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br ${currentTheme.gradientFrom} ${currentTheme.gradientTo} rounded-2xl flex items-center justify-center shadow-lg`}
                  >
                    <Crown className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-lg lg:text-xl font-bold">
                      노마드출장마사지
                    </div>
                    <div className={`text-xs lg:text-sm ${currentTheme.text}`}>
                      {city} 전문 출장마사지
                    </div>
                  </div>
                </Link>
                <div className="text-gray-400 mb-4 lg:mb-6 text-sm lg:text-base leading-relaxed">
                  {outro}
                </div>
                <div className="flex flex-wrap items-center gap-2 lg:gap-4 text-xs lg:text-sm text-gray-400">
                  <span>24시간 운영</span>
                  <span>•</span>
                  <span>100% 후불제</span>
                  <span>•</span>
                  <span>전문 관리사</span>
                </div>
                <div className="flex flex-wrap gap-3 lg:gap-4 text-sm text-gray-400 mt-4">
                  {[
                    { name: "안산출장마사지", href: "/ansan" },
                    { name: "안양출장마사지", href: "/anyang" },
                    { name: "수원출장마사지", href: "/suwon" },
                    { name: "용인출장마사지", href: "/yongin" },
                    { name: "이천출장마사지", href: "/icheon" },
                    { name: "광주출장마사지", href: "/gwangju" },
                    { name: "여주출장마사지", href: "/yeoju" },
                    { name: "성남출장마사지", href: "/seongnam" },
                    { name: "군포출장마사지", href: "/gunpo" },
                    { name: "과천출장마사지", href: "/gwacheon" },
                    { name: "의왕출장마사지", href: "/uiwang" },
                    { name: "하남출장마사지", href: "/hanam" }
                  ].filter(location => !location.href.includes(cityEn)).slice(0, 8).map((location, index) => (
                    <Link key={index} href={location.href} className={`hover:${currentTheme.text} transition-colors duration-200`}>
                      {location.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="text-center lg:text-right">
                <div
                  className={`text-xl lg:text-3xl font-bold ${currentTheme.text} mb-3 lg:mb-4`}
                >
                  010-8186-7771
                </div>
                <Button
                  className={`bg-gradient-to-r ${currentTheme.gradientFrom} ${currentTheme.gradientTo} ${currentTheme.hoverGradientFrom} ${currentTheme.hoverGradientTo} px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold text-sm lg:text-base transition-all duration-300 transform hover:scale-105`}
                  onClick={() => window.open('tel:010-8186-7771')}
                >
                  지금 예약하기
                </Button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
