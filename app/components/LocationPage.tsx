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
}: LocationPageProps) {
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const currentTheme = useMemo(() => themes[theme] || themes.rose, [theme])

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `노마드출장마사지 ${city}점`,
    description: `경기도 ${city}시 전문 출장마사지 서비스. ${city} 출장안마 전문 업체.`,
    url: `https://nomadthai.kr/${cityEn}`,
    telephone: '010-8186-7771',
    address: {
      '@type': 'PostalAddress',
      addressLocality: `${city}시`,
      addressRegion: '경기도',
      addressCountry: 'KR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: latitude,
      longitude: longitude,
    },
    openingHours: 'Mo-Su 00:00-23:59',
    priceRange: '₩₩',
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '37.2636',
        longitude: '127.2794',
      },
      geoRadius: '50000',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: '마사지 서비스',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '타이 마사지',
            description: '전통 타이 마사지 기법',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '아로마 마사지',
            description: '향긋한 아로마 오일 마사지',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '스웨디시 힐링 마사지',
            description: '깊은 이완과 근육 회복을 위한 전문 마사지',
          },
        },
      ],
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-slate-100">
        <header className={`bg-white/95 backdrop-blur-xl shadow-xl border-b ${currentTheme.lightBorder} sticky top-0 z-50`}>
          <div className="container mx-auto px-2 sm:px-4 py-3 lg:py-6">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="flex items-center space-x-3 lg:space-x-4"
              >
                <div
                  className={`w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br ${currentTheme.gradientFrom} ${currentTheme.gradientVia} ${currentTheme.gradientTo} rounded-2xl flex items-center justify-center shadow-2xl ring-4 ${currentTheme.ring}`}
                >
                  <Crown className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                </div>
                <div>
                  <div className="text-xl lg:text-3xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">
                    노마드출장마사지
                  </div>
                  <div
                    className={`text-xs lg:text-sm ${currentTheme.text} font-medium`}
                  >
                    {city} 전문 출장마사지
                  </div>
                </div>
              </Link>

              <nav className="hidden xl:flex items-center space-x-6 text-sm font-medium text-gray-600">
                <Link
                  href="/"
                  className={`hover:${currentTheme.text} transition-all duration-300 relative group`}
                >
                  홈
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 ${currentTheme.bg} transition-all duration-300 group-hover:w-full`}
                  ></span>
                </Link>
                <Link
                  href="/icheon"
                  className={`hover:${currentTheme.text} transition-all duration-300 relative group ${
                    cityEn === 'icheon' ? `${currentTheme.text} font-bold` : ''
                  }`}
                >
                  이천 출장마사지
                  {cityEn === 'icheon' && (
                    <span
                      className={`absolute -bottom-1 left-0 w-full h-0.5 ${currentTheme.bg}`}
                    ></span>
                  )}
                </Link>
                <Link
                  href="/gwangju"
                  className={`hover:${currentTheme.text} transition-all duration-300 relative group ${
                    cityEn === 'gwangju' ? `${currentTheme.text} font-bold` : ''
                  }`}
                >
                  광주 출장마사지
                  {cityEn === 'gwangju' && (
                    <span
                      className={`absolute -bottom-1 left-0 w-full h-0.5 ${currentTheme.bg}`}
                    ></span>
                  )}
                </Link>
                <Link
                  href="/yeoju"
                  className={`hover:${currentTheme.text} transition-all duration-300 relative group ${
                    cityEn === 'yeoju' ? `${currentTheme.text} font-bold` : ''
                  }`}
                >
                  여주 출장마사지
                  {cityEn === 'yeoju' && (
                    <span
                      className={`absolute -bottom-1 left-0 w-full h-0.5 ${currentTheme.bg}`}
                    ></span>
                  )}
                </Link>
                <Link
                  href="/yongin"
                  className={`hover:${currentTheme.text} transition-all duration-300 relative group ${
                    cityEn === 'yongin' ? `${currentTheme.text} font-bold` : ''
                  }`}
                >
                  용인 출장마사지
                  {cityEn === 'yongin' && (
                    <span
                      className={`absolute -bottom-1 left-0 w-full h-0.5 ${currentTheme.bg}`}
                    ></span>
                  )}
                </Link>
                <Link
                  href="#services"
                  className={`hover:${currentTheme.text} transition-all duration-300 relative group`}
                >
                  서비스 & 가격
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 ${currentTheme.bg} transition-all duration-300 group-hover:w-full`}
                  ></span>
                </Link>
              </nav>

              <div className="flex items-center space-x-3">
                <Button
                  className={`bg-gradient-to-r ${currentTheme.gradientFrom} ${currentTheme.gradientVia} ${currentTheme.gradientTo} ${currentTheme.hoverGradientFrom} ${currentTheme.hoverGradientVia} ${currentTheme.hoverGradientTo} text-white px-4 lg:px-8 py-2 lg:py-3 rounded-full font-semibold shadow-xl ring-2 ${currentTheme.ring} ${currentTheme.hoverRing} transition-all duration-300 transform hover:scale-105 text-sm lg:text-base`}
                  onClick={() => window.open('tel:010-8186-7771')}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  지금 예약
                </Button>

                <div className="xl:hidden">
                  <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="sm" className="text-gray-700">
                        <Menu className="w-6 h-6" />
                      </Button>
                    </SheetTrigger>
                    <SheetContent
                      side="right"
                      className="w-[300px] sm:w-[400px] bg-white/95 backdrop-blur-xl"
                    >
                      <SheetHeader>
                        <SheetTitle className="text-2xl font-bold text-gray-800">
                          메뉴
                        </SheetTitle>
                      </SheetHeader>
                      <div className="mt-8 flex flex-col space-y-4">
                        <SheetClose asChild>
                          <Link
                            href="/"
                            className={`text-lg font-medium text-gray-700 hover:${currentTheme.text} transition-colors`}
                          >
                            홈
                          </Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link
                            href="/icheon"
                            className={`text-lg font-medium text-gray-700 hover:${currentTheme.text} transition-colors`}
                          >
                            이천 출장마사지
                          </Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link
                            href="/gwangju"
                            className={`text-lg font-medium text-gray-700 hover:${currentTheme.text} transition-colors`}
                          >
                            광주 출장마사지
                          </Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link
                            href="/yeoju"
                            className={`text-lg font-medium text-gray-700 hover:${currentTheme.text} transition-colors`}
                          >
                            여주 출장마사지
                          </Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link
                            href="/yongin"
                            className={`text-lg font-medium text-gray-700 hover:${currentTheme.text} transition-colors`}
                          >
                            용인 출장마사지
                          </Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link
                            href="#services"
                            className={`text-lg font-medium text-gray-700 hover:${currentTheme.text} transition-colors`}
                          >
                            서비스 & 가격
                          </Link>
                        </SheetClose>
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </div>
          </div>
        </header>

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

                  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6 leading-tight text-gray-900">
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
                    className={`bg-gradient-to-r ${currentTheme.gradientFrom} ${currentTheme.gradientVia} ${currentTheme.gradientTo} ${currentTheme.hoverGradientFrom} ${currentTheme.hoverGradientVia} ${currentTheme.hoverGradientTo} text-white px-8 py-4 text-lg rounded-2xl font-bold shadow-xl transition-all duration-300 transform active:scale-95 w-full sm:w-auto`}
                    onClick={() => window.open('tel:010-8186-7771')}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    지금 예약하기
                  </Button>
                  <Button
                    variant="outline"
                    className={`border-2 ${currentTheme.border} ${currentTheme.text} hover:bg-gray-50 px-8 py-4 text-lg rounded-2xl font-bold transition-all duration-300 active:scale-95 w-full sm:w-auto`}
                    onClick={() =>
                      window.open('https://open.kakao.com/o/ssZxRuEh')
                    }
                  >
                    카카오톡 상담
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
                  <Card className="bg-white shadow-2xl rounded-3xl overflow-hidden relative transform hover:-rotate-1 transition-all duration-500">
                    <div className="relative">
                      <Image
                        src={heroImage}
                        alt={`${city} 출장마사지 전문 관리사`}
                        width={500}
                        height={600}
                        className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                        style={{ objectPosition: 'center top' }}
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
              {[
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
              ].map((item, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2`}
                >
                  <div className="relative">
                    <Image
                      src={item.src || '/placeholder.svg'}
                      alt={`${item.title} - 노마드출장마사지`}
                      width={400}
                      height={500}
                      className="w-full h-72 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-700 group-hover:brightness-110"
                      style={{ objectPosition: 'center center' }}
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
                <div className="flex flex-wrap gap-4 text-sm text-gray-400 mt-4">
                  <Link href="/icheon" className={`hover:${currentTheme.text}`}>
                    이천출장마사지
                  </Link>
                  <Link href="/gwangju" className={`hover:${currentTheme.text}`}>
                    광주출장마사지
                  </Link>
                  <Link href="/yeoju" className={`hover:${currentTheme.text}`}>
                    여주출장마사지
                  </Link>
                  <Link href="/yongin" className={`hover:${currentTheme.text}`}>
                    용인출장마사지
                  </Link>
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
