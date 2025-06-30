"use client"

import Image from "next/image"
import { Phone, MapPin, Clock, Star, Shield, Award, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Mobile-First Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm md:text-lg">{"ND"}</span>
              </div>
              <div className="text-lg md:text-2xl font-bold text-gray-800">노마드출장마사지</div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="w-6 h-6" />
              </Button>
            </div>

            {/* Desktop Navigation */}
          </div>
        </div>
      </header>

      {/* Mobile-Optimized Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/spa-background.jpg"
            alt="Professional Thai Massage Service"
            fill
            className="object-cover"
            style={{ objectPosition: "center 30%" }}
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Mobile-First Content */}
        <div className="relative z-10 text-center text-white max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-4">
          <div className="mb-3 md:mb-4 text-sm md:text-lg font-medium">고객만족도 1위 출장홈타이</div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 md:mb-6 leading-tight">
            이천24시
            <br />
            출장마사지
          </h1>

          <div className="space-y-1 md:space-y-2 text-sm sm:text-base md:text-lg lg:text-xl mb-6 md:mb-8">
            <p>최상의 마인드를 갖춘고 20대 관리사</p>
            <p className="text-orange-400 font-semibold">100% 후불 안심결제 시스템</p>
            <p>서울/경기/인천 30분내로 출발 이동</p>
          </div>

          <Button
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-full font-semibold w-full sm:w-auto"
            onClick={() => window.open("tel:010-8186-7771")}
          >
            지금 바로 예약하기
          </Button>
        </div>
      </section>

      {/* Mobile-Optimized Services Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4">프리미엄 마사지 서비스</h2>
            <p className="text-sm md:text-base text-gray-600">전문 관리사가 제공하는 최고급 마사지 서비스</p>
          </div>

          {/* Mobile-First Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Features - Mobile Stacked */}
            <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
              <Card className="border-orange-200">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center space-x-3 mb-3 md:mb-4">
                    <Shield className="w-6 h-6 md:w-8 md:h-8 text-orange-500" />
                    <h3 className="text-lg md:text-xl font-semibold">100% 안심 시스템</h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-600">후불제 시스템으로 안전하고 신뢰할 수 있는 서비스</p>
                </CardContent>
              </Card>

              <Card className="border-orange-200">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center space-x-3 mb-3 md:mb-4">
                    <Award className="w-6 h-6 md:w-8 md:h-8 text-orange-500" />
                    <h3 className="text-lg md:text-xl font-semibold">전문 관리사</h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-600">엄선된 20대 전문 관리사가 최상의 서비스 제공</p>
                </CardContent>
              </Card>

              <Card className="border-orange-200">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center space-x-3 mb-3 md:mb-4">
                    <Clock className="w-6 h-6 md:w-8 md:h-8 text-orange-500" />
                    <h3 className="text-lg md:text-xl font-semibold">24시간 운영</h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-600">언제든지 편리한 시간에 예약 가능한 24시간 서비스</p>
                </CardContent>
              </Card>
            </div>

            {/* Pricing - Mobile First */}
            <div className="order-1 lg:order-2">
              <Card className="border-2 border-orange-300 shadow-lg">
                <CardContent className="p-4 md:p-6">
                  <div className="text-center mb-4 md:mb-6">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">이천 출장마사지</h3>
                    <div className="bg-orange-500 text-white px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-semibold inline-block">
                      24시간 운영중
                    </div>
                  </div>

                  <div className="space-y-3 md:space-y-4">
                    <div className="bg-gradient-to-r from-orange-50 to-red-50 p-3 md:p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2 md:mb-3 text-sm md:text-base">타이 마사지</h4>
                      <div className="space-y-1 md:space-y-2 text-xs md:text-sm">
                        <div className="flex justify-between">
                          <span>60분 코스</span>
                          <span className="font-semibold">70,000원</span>
                        </div>
                        <div className="flex justify-between">
                          <span>90분 코스</span>
                          <span className="font-semibold">80,000원</span>
                        </div>
                        <div className="flex justify-between">
                          <span>120분 코스</span>
                          <span className="font-semibold">100,000원</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-orange-50 to-red-50 p-3 md:p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2 md:mb-3 text-sm md:text-base">아로마 마사지</h4>
                      <div className="space-y-1 md:space-y-2 text-xs md:text-sm">
                        <div className="flex justify-between">
                          <span>60분 코스</span>
                          <span className="font-semibold">80,000원</span>
                        </div>
                        <div className="flex justify-between">
                          <span>90분 코스</span>
                          <span className="font-semibold">90,000원</span>
                        </div>
                        <div className="flex justify-between">
                          <span>120분 코스</span>
                          <span className="font-semibold">110,000원</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-orange-50 to-red-50 p-3 md:p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2 md:mb-3 text-sm md:text-base">
                        스웨디시 힐링 마사지
                      </h4>
                      <div className="space-y-1 md:space-y-2 text-xs md:text-sm">
                        <div className="flex justify-between">
                          <span>60분 코스</span>
                          <span className="font-semibold">100,000원</span>
                        </div>
                        <div className="flex justify-between">
                          <span>90분 코스</span>
                          <span className="font-semibold">130,000원</span>
                        </div>
                        <div className="flex justify-between">
                          <span>120분 코스</span>
                          <span className="font-semibold">160,000원</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-orange-100 to-red-100 p-3 md:p-4 rounded-lg border-2 border-orange-300">
                      <h4 className="font-semibold text-gray-800 mb-2 md:mb-3 text-sm md:text-base">스페셜 패키지</h4>
                      <div className="space-y-1 md:space-y-2 text-xs md:text-sm">
                        <div className="flex justify-between">
                          <span>타이 60분 + 아로마 60분</span>
                          <span className="font-semibold text-orange-600">110,000원</span>
                        </div>
                        <div className="flex justify-between">
                          <span>타이 60분 + 스웨디시 60분</span>
                          <span className="font-semibold text-orange-600">130,000원</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact - Mobile Optimized */}
            <div className="space-y-4 md:space-y-6 order-3">
              <Card className="bg-gradient-to-br from-orange-500 to-red-500 text-white">
                <CardContent className="p-4 md:p-6 text-center">
                  <Phone className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4" />
                  <h3 className="text-lg md:text-xl font-bold mb-2">지금 바로 예약</h3>
                  <div className="text-xl md:text-2xl font-bold mb-3 md:mb-4">010-8186-7771</div>
                  <Button
                    className="bg-white text-orange-500 hover:bg-gray-100 w-full font-semibold text-sm md:text-base"
                    onClick={() => window.open("tel:010-8186-7771")}
                  >
                    전화 걸기
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 md:p-6">
                  <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">서비스 지역</h3>
                  <div className="space-y-2 text-xs md:text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-3 h-3 md:w-4 md:h-4 text-orange-500" />
                      <span>이천시 전 지역</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-3 h-3 md:w-4 md:h-4 text-orange-500" />
                      <span> 경기도 광주시 전 지역</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-3 h-3 md:w-4 md:h-4 text-orange-500" />
                      <span> 여주시 전 지역</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-3 h-3 md:w-4 md:h-4 text-orange-500" />
                      <span>안산 전 지역</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile-Optimized Gallery Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4">전문 관리사</h2>
            <p className="text-sm md:text-base text-gray-600">깨끗하고 전문적인 최고의 서비스를 제공해 드립니다. </p>
          </div>

          {/* Mobile-First Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {/* Image 1 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image
                src="/images/spa-image-1.jpg"
                alt="전문 관리사 서비스"
                width={400}
                height={500}
                className="w-full h-64 md:h-80 object-cover object-top group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 text-white">
                  <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">전문 관리사</h3>
                  <p className="text-xs md:text-sm">친절하고 전문적인 서비스 제공</p>
                </div>
              </div>
            </div>

            {/* Image 2 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image
                src="/images/spa-image-2.jpg"
                alt="프리미엄 서비스"
                width={400}
                height={500}
                className="w-full h-64 md:h-80 object-cover object-top group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 text-white">
                  <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">프리미엄 서비스</h3>
                  <p className="text-xs md:text-sm">최상의 마사지 경험 제공</p>
                </div>
              </div>
            </div>

            {/* Image 3 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 sm:col-span-2 lg:col-span-1">
              <Image
                src="/images/spa-image-3.jpg"
                alt="고급 서비스"
                width={400}
                height={500}
                className="w-full h-64 md:h-80 object-cover object-top group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 text-white">
                  <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">고급 서비스</h3>
                  <p className="text-xs md:text-sm">럭셔리한 마사지 경험</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile-Optimized Call to Action */}
          <div className="text-center mt-8 md:mt-12">
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">지금 바로 예약하세요!</h3>
              <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">경기도 이천,광주,여주 최고의 마사지</p>
              <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:gap-4 justify-center items-center mb-4">
                <div className="flex items-center space-x-2 text-orange-600 font-bold text-lg md:text-xl">
                  <Phone className="w-5 h-5 md:w-6 md:h-6" />
                  <span>010-8186-7771</span>
                </div>
              </div>
              <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:gap-4 justify-center items-center">
                <Button
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold w-full md:w-auto"
                  onClick={() => window.open("tel:010-8186-7771")}
                >
                  전화로 예약하기
                </Button>
                <Button
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold w-full md:w-auto"
                  onClick={() => window.open("https://open.kakao.com/o/ssZxRuEh")}
                >
                  카카오톡 상담
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile-Optimized Footer */}
      <footer className="bg-gray-800 text-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4 md:mb-6">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm md:text-base">{"ND"}</span>
                </div>
                <span className="text-lg md:text-xl font-bold">노마드출장마사지</span>
              </div>
              <p className="text-gray-300 mb-3 md:mb-4 text-sm md:text-base">
                검증된 이천출장마사지 프리미엄 마사지 업체
              </p>
              <div className="space-y-2 text-xs md:text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Clock className="w-3 h-3 md:w-4 md:h-4" />
                  <span>24시간 운영</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-3 h-3 md:w-4 md:h-4" />
                  <span>100% 후불 안심 시스템</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-3 h-3 md:w-4 md:h-4" />
                  <span>전문 관리사 상주</span>
                </div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <div className="text-2xl md:text-3xl font-bold text-orange-400 mb-3 md:mb-4">010-8186-7771</div>
              <Button
                className="bg-orange-500 hover:bg-orange-600 px-4 md:px-6 py-2 md:py-3 w-full md:w-auto"
                onClick={() => window.open("tel:010-8186-7771")}
              >
                지금 예약하기
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
