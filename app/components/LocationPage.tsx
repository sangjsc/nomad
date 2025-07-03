"use client"
import Link from "next/link"
import { Phone, MapPin, Clock, Shield, Crown, Star, Heart, Flower2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

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
}: LocationPageProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `노마드출장마사지 ${city}점`,
    description: `경기도 ${city}시 전문 출장마사지 서비스. ${city} 출장안마 전문 업체.`,
    url: `https://nomadthai.kr/${cityEn}`,
    telephone: "010-8186-7771",
    address: {
      "@type": "PostalAddress",
      addressLocality: `${city}시`,
      addressRegion: "경기도",
      addressCountry: "KR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: latitude,
      longitude: longitude,
    },
    openingHours: "Mo-Su 00:00-23:59",
    priceRange: "₩₩",
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "37.2636",
        longitude: "127.2794",
      },
      geoRadius: "50000",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "마사지 서비스",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "타이 마사지",
            description: "전통 타이 마사지 기법",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "아로마 마사지",
            description: "향긋한 아로마 오일 마사지",
          },
        },
      ],
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-rose-50">
        {/* Header */}
        <header className="bg-white/95 backdrop-blur-xl shadow-xl border-b border-rose-100/50 sticky top-0 z-50">
          <div className="container mx-auto px-2 sm:px-4 py-3 lg:py-6">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-3 lg:space-x-4">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-rose-400 via-pink-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl ring-4 ring-rose-200/50">
                  <Crown className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                </div>
                <div>
                  <div className="text-xl lg:text-3xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">
                    노마드출장마사지
                  </div>
                  <div className="text-xs lg:text-sm text-rose-500 font-medium">{city} 전문 출장마사지</div>
                </div>
              </Link>

              {/* Navigation */}
              <nav className="hidden xl:flex items-center space-x-6 text-sm font-medium text-gray-600">
                <Link href="/" className="hover:text-rose-500 transition-all duration-300">
                  홈
                </Link>
                <Link
                  href="/icheon"
                  className={`hover:text-rose-500 transition-all duration-300 ${cityEn === "icheon" ? "text-rose-500 font-bold" : ""}`}
                >
                  이천
                </Link>
                <Link
                  href="/gwangju"
                  className={`hover:text-rose-500 transition-all duration-300 ${cityEn === "gwangju" ? "text-rose-500 font-bold" : ""}`}
                >
                  광주
                </Link>
                <Link
                  href="/yeoju"
                  className={`hover:text-rose-500 transition-all duration-300 ${cityEn === "yeoju" ? "text-rose-500 font-bold" : ""}`}
                >
                  여주
                </Link>
                <Link
                  href="/yongin"
                  className={`hover:text-rose-500 transition-all duration-300 ${cityEn === "yongin" ? "text-rose-500 font-bold" : ""}`}
                >
                  용인
                </Link>
                <Link href="#services" className="hover:text-rose-500 transition-all duration-300">
                  서비스
                </Link>
              </nav>

              <Button
                className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 hover:from-rose-600 hover:via-pink-600 hover:to-purple-700 text-white px-4 lg:px-8 py-2 lg:py-3 rounded-full font-semibold shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => window.open("tel:010-8186-7771")}
              >
                <Phone className="w-4 h-4 mr-2" />
                지금 예약
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-100/50 via-white to-purple-100/50"></div>

          <div className="container mx-auto px-2 sm:px-4 relative z-10">
            <div className="text-center mb-12 lg:mb-16">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-rose-100 to-purple-100 rounded-full px-4 lg:px-6 py-2 lg:py-3 mb-6">
                <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-rose-600" />
                <span className="text-rose-800 font-semibold text-sm lg:text-base">경기도 {city}시</span>
              </div>

              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-800 mb-6">
                <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                  {city} 출장마사지
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                {description}
                <br />
                <span className="font-semibold text-rose-600">24시간 언제든 예약 가능, 100% 후불제 안심 서비스</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button
                  className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 hover:from-rose-600 hover:via-pink-600 hover:to-purple-700 text-white px-8 lg:px-12 py-4 lg:py-5 text-lg lg:text-xl rounded-full font-bold shadow-2xl transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.open("tel:010-8186-7771")}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {city} 출장마사지 예약하기
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-rose-500 text-rose-600 hover:bg-rose-500 hover:text-white px-8 lg:px-12 py-4 lg:py-5 text-lg lg:text-xl rounded-full font-bold transition-all duration-300 bg-transparent"
                  onClick={() => window.open("https://open.kakao.com/o/ssZxRuEh")}
                >
                  카카오톡 상담
                </Button>
              </div>

              {/* Service Areas */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                  <MapPin className="w-6 h-6 inline mr-2 text-rose-500" />
                  {city}시 서비스 지역
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                  {areas.map((area, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl p-3 text-center border border-rose-200/50"
                    >
                      <span className="text-gray-700 font-medium text-sm lg:text-base">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-rose-50">
          <div className="container mx-auto px-2 sm:px-4">
            <div className="text-center mb-12 lg:mb-20">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-6">{city} 출장마사지 서비스</h2>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                경기도 {city}시에서 최고의 출장마사지 서비스를 경험하세요
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
              {/* Thai Massage */}
              <Card className="bg-white shadow-2xl rounded-3xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 group">
                <div className="bg-gradient-to-br from-rose-100 via-pink-100 to-purple-100 p-6 lg:p-8">
                  {/* 아이콘과 장식 요소 */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-rose-500 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                      <Flower2 className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
                    </div>
                    {/* 장식 도트들 */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-rose-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-pink-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4 text-center">{city} 타이 마사지</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-center">
                    전통 타이 마사지 기법으로 {city}시 고객님의 몸의 균형을 맞춰드립니다
                  </p>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-white/70 rounded-xl">
                      <span className="text-gray-700 font-medium">60분</span>
                      <span className="font-bold text-rose-600">70,000원</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/70 rounded-xl">
                      <span className="text-gray-700 font-medium">90분</span>
                      <span className="font-bold text-rose-600">80,000원</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/70 rounded-xl">
                      <span className="text-gray-700 font-medium">120분</span>
                      <span className="font-bold text-rose-600">100,000원</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Aroma Massage */}
              <Card className="bg-white shadow-2xl rounded-3xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 group">
                <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-rose-100 p-6 lg:p-8">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                      <Heart className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-purple-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-pink-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4 text-center">{city} 아로마 마사지</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-center">
                    향긋한 아로마 오일로 {city}시 고객님의 심신의 안정을 선사합니다
                  </p>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-white/70 rounded-xl">
                      <span className="text-gray-700 font-medium">60분</span>
                      <span className="font-bold text-purple-600">80,000원</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/70 rounded-xl">
                      <span className="text-gray-700 font-medium">90분</span>
                      <span className="font-bold text-purple-600">90,000원</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/70 rounded-xl">
                      <span className="text-gray-700 font-medium">120분</span>
                      <span className="font-bold text-purple-600">110,000원</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Swedish Massage */}
              <Card className="bg-white shadow-2xl rounded-3xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 group md:col-span-2 lg:col-span-1">
                <div className="bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100 p-6 lg:p-8">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                      <Crown className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-pink-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4 text-center">{city} 스웨디시 힐링</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-center">
                    깊은 이완과 근육 회복을 위한 {city}시 전문 마사지
                  </p>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-white/70 rounded-xl">
                      <span className="text-gray-700 font-medium">60분</span>
                      <span className="font-bold text-pink-600">100,000원</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/70 rounded-xl">
                      <span className="text-gray-700 font-medium">90분</span>
                      <span className="font-bold text-pink-600">130,000원</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/70 rounded-xl">
                      <span className="text-gray-700 font-medium">120분</span>
                      <span className="font-bold text-pink-600">160,000원</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-rose-50 via-white to-purple-50">
          <div className="container mx-auto px-2 sm:px-4">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-6">
                왜 {city} 고객님들이 저희를 선택할까요?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Clock,
                  title: "24시간 운영",
                  desc: `${city}시 언제든 예약 가능`,
                },
                {
                  icon: Shield,
                  title: "100% 후불제",
                  desc: "서비스 완료 후 안심 결제",
                },
                {
                  icon: Crown,
                  title: "전문 관리사",
                  desc: "검증된 20대 전문 관리사",
                },
                {
                  icon: Star,
                  title: "빠른 출발",
                  desc: "예약 후 30분 내 출발",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="bg-white shadow-xl rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-slate-800 to-purple-900">
          <div className="container mx-auto px-2 sm:px-4">
            <Card className="bg-gradient-to-br from-rose-500 via-pink-500 to-purple-600 rounded-3xl p-8 lg:p-16 text-white text-center shadow-2xl">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">{city} 출장마사지 지금 예약하세요</h2>
              <p className="text-xl lg:text-2xl mb-8">경기도 {city}시 최고의 프리미엄 출장마사지 서비스</p>

              <div className="flex items-center justify-center space-x-4 text-2xl lg:text-4xl font-bold mb-10">
                <Phone className="w-8 h-8" />
                <span>010-8186-7771</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  className="bg-white text-rose-600 hover:bg-rose-50 px-10 py-4 text-xl rounded-full font-bold shadow-xl transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.open("tel:010-8186-7771")}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {city} 출장마사지 전화예약
                </Button>
                <Button
                  className="bg-green-500 hover:bg-green-600 text-white px-10 py-4 text-xl rounded-full font-bold shadow-xl transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.open("https://open.kakao.com/o/ssZxRuEh")}
                >
                  카카오톡 상담
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white py-12">
          <div className="container mx-auto px-2 sm:px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <Link href="/" className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-purple-600 rounded-2xl flex items-center justify-center">
                    <Crown className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xl font-bold">노마드출장마사지</div>
                    <div className="text-sm text-rose-400">{city} 전문 출장마사지</div>
                  </div>
                </Link>
                <p className="text-gray-400 mb-4">{outro}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                  <Link href="/icheon" className="hover:text-rose-400">
                    이천출장마사지
                  </Link>
                  <Link href="/gwangju" className="hover:text-rose-400">
                    광주출장마사지
                  </Link>
                  <Link href="/yeoju" className="hover:text-rose-400">
                    여주출장마사지
                  </Link>
                  <Link href="/yongin" className="hover:text-rose-400">
                    용인출장마사지
                  </Link>
                </div>
              </div>
              <div className="text-center lg:text-right">
                <div className="text-2xl lg:text-3xl font-bold text-rose-400 mb-4">010-8186-7771</div>
                <Button
                  className="bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.open("tel:010-8186-7771")}
                >
                  {city} 출장마사지 예약
                </Button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
