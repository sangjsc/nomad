"use client"

import Image from "next/image"
import { Phone, MapPin, Clock, Star, Shield, Menu, Heart, Flower2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ClientPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Elegant Header - Rose Bangkok Style */}
      <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Elegant Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-pink-400 via-rose-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                <Flower2 className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <div>
                <div className="text-xl md:text-2xl font-bold text-gray-800">노마드출장마사지</div>
                <div className="text-xs text-pink-500 font-medium">Premium Spa Experience</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium text-gray-600">
              <a href="#" className="hover:text-pink-500 transition-colors">
                홈
              </a>
              <a href="#" className="hover:text-pink-500 transition-colors">
                서비스 & 가격
              </a>
              <a href="#" className="hover:text-pink-500 transition-colors">
                관리사
              </a>
              <a href="#" className="hover:text-pink-500 transition-colors">
                소개
              </a>
              <a href="#" className="hover:text-pink-500 transition-colors">
                연락처
              </a>
            </nav>

            {/* Book Now Button */}
            <div className="flex items-center space-x-4">
              <Button
                className="bg-gradient-to-r from-pink-400 to-rose-500 hover:from-pink-500 hover:to-rose-600 text-white px-6 py-2 rounded-full font-medium shadow-lg transition-all duration-300 hidden sm:block"
                onClick={() => window.open("tel:010-8186-7771")}
              >
                지금 예약
              </Button>

              {/* Mobile Menu */}
              <div className="lg:hidden">
                <Button variant="ghost" size="sm">
                  <Menu className="w-6 h-6 text-gray-600" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Rose Bangkok Style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/spa-background.jpg"
            alt="Premium Massage Service"
            fill
            className="object-cover"
            style={{ objectPosition: "center 30%" }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-pink-50/40 to-rose-100/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              <div className="mb-6">
                <p className="text-pink-500 font-medium text-lg mb-2 italic">Welcome to</p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6 leading-tight">
                  노마드출장
                  <br />
                  <span className="text-pink-500">마사지</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                  Experience a luxurious retreat
                  <br />
                  in the comfort of your home.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  className="bg-gradient-to-r from-pink-400 to-rose-500 hover:from-pink-500 hover:to-rose-600 text-white px-8 py-4 text-lg rounded-full font-semibold shadow-xl transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.open("tel:010-8186-7771")}
                >
                  지금 예약하기
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-4 text-lg rounded-full font-semibold transition-all duration-300 bg-transparent"
                  onClick={() => window.open("https://open.kakao.com/o/ssZxRuEh")}
                >
                  카카오톡 상담
                </Button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-pink-500" />
                  <span className="text-sm text-gray-600">100% 후불제</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-pink-500" />
                  <span className="text-sm text-gray-600">24시간 운영</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-pink-500" />
                  <span className="text-sm text-gray-600">전문 관리사</span>
                </div>
              </div>
            </div>

            {/* Right Content - Floating Card */}
            <div className="relative hidden lg:block">
              <div className="relative">
                <Card className="bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="relative">
                    <Image
                      src="/images/spa-image-1.jpg"
                      alt="Premium Massage Experience"
                      width={400}
                      height={500}
                      className="w-full h-96 object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent"></div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <Heart className="w-5 h-5 text-pink-500" />
                      <span className="font-semibold text-gray-800">프리미엄 서비스</span>
                    </div>
                    <p className="text-gray-600 text-sm">최고급 마사지 경험을 선사합니다</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Rose Bangkok Style */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="mb-8">
                <p className="text-pink-500 font-medium text-lg mb-2 italic">Professional Massage</p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">ABOUT US</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-rose-500 mb-6"></div>
              </div>

              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  <span className="font-semibold text-pink-500">노마드출장마사지</span>는 이천, 광주, 여주 지역의
                  프리미엄 출장 마사지 서비스입니다.
                </p>
                <p>
                  저희의 모든 관리사는 전문적인 교육을 받았으며, 고객님께 최상의 힐링 경험을 제공하기 위해 최선을 다하고
                  있습니다. 편안한 공간에서 받는 전문적인 마사지로 일상의 스트레스를 해소하세요.
                </p>
                <p>
                  100% 후불 시스템으로 안전하고 신뢰할 수 있는 서비스를 제공하며, 24시간 언제든지 예약이 가능합니다.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white rounded-2xl shadow-lg">
                  <div className="text-3xl font-bold text-pink-500 mb-2">24/7</div>
                  <div className="text-sm text-gray-600">24시간 운영</div>
                </div>
                <div className="text-center p-4 bg-white rounded-2xl shadow-lg">
                  <div className="text-3xl font-bold text-pink-500 mb-2">100%</div>
                  <div className="text-sm text-gray-600">후불 안심</div>
                </div>
              </div>
            </div>

            {/* Right Content - Why Us Card */}
            <div className="relative">
              <Card className="bg-gradient-to-br from-pink-400 to-rose-500 text-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>

                <CardContent className="p-8 md:p-12 relative z-10">
                  <div className="mb-8">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 italic">Why us?</h3>
                    <div className="w-16 h-1 bg-white/50"></div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">집에서 편안하게, 이동 없이</h4>
                        <p className="text-white/80 text-sm">고객님의 공간에서 프리미엄 마사지 서비스를 받으세요</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">전문 관리사</h4>
                        <p className="text-white/80 text-sm">엄선된 20대 전문 관리사가 최상의 서비스 제공</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">안전한 후불제</h4>
                        <p className="text-white/80 text-sm">서비스 완료 후 결제하는 100% 안심 시스템</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">빠른 출발</h4>
                        <p className="text-white/80 text-sm">예약 후 30분 내로 출발하여 신속한 서비스</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-pink-500 font-medium text-lg mb-2 italic">Our Services</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">마사지 서비스</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-rose-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              전문 관리사가 제공하는 다양한 프리미엄 마사지 서비스
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Thai Massage */}
            <Card className="bg-white shadow-xl rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-pink-100 to-rose-100 p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center mb-6">
                  <Flower2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">타이 마사지</h3>
                <p className="text-gray-600 mb-6">전통 타이 마사지 기법으로 몸의 균형을 맞춰드립니다</p>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">60분</span>
                    <span className="font-bold text-pink-500">70,000원</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">90분</span>
                    <span className="font-bold text-pink-500">80,000원</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">120분</span>
                    <span className="font-bold text-pink-500">100,000원</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Aroma Massage */}
            <Card className="bg-white shadow-xl rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">아로마 마사지</h3>
                <p className="text-gray-600 mb-6">향긋한 아로마 오일로 심신의 안정을 선사합니다</p>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">60분</span>
                    <span className="font-bold text-purple-500">80,000원</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">90분</span>
                    <span className="font-bold text-purple-500">90,000원</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">120분</span>
                    <span className="font-bold text-purple-500">110,000원</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Swedish Massage */}
            <Card className="bg-white shadow-xl rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 md:col-span-2 lg:col-span-1">
              <div className="bg-gradient-to-br from-rose-100 to-pink-100 p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">스웨디시 마사지</h3>
                <p className="text-gray-600 mb-6">깊은 이완과 근육 회복을 위한 전문 마사지</p>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">60분</span>
                    <span className="font-bold text-rose-500">100,000원</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">90분</span>
                    <span className="font-bold text-rose-500">130,000원</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">120분</span>
                    <span className="font-bold text-rose-500">160,000원</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-pink-500 font-medium text-lg mb-2 italic">Our Team</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">전문 관리사</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-rose-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              최고의 서비스를 제공하는 전문 관리사들을 만나보세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500">
              <Image
                src="/images/spa-image-1.jpg"
                alt="전문 관리사"
                width={400}
                height={500}
                className="w-full h-96 object-cover object-top group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-500/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold mb-2">전문 관리사</h3>
                  <p className="text-sm text-pink-100">친절하고 전문적인 서비스</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500">
              <Image
                src="/images/spa-image-2.jpg"
                alt="프리미엄 서비스"
                width={400}
                height={500}
                className="w-full h-96 object-cover object-top group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-500/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold mb-2">프리미엄 서비스</h3>
                  <p className="text-sm text-rose-100">최상의 마사지 경험</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 md:col-span-2 lg:col-span-1">
              <Image
                src="/images/spa-image-3.jpg"
                alt="럭셔리 서비스"
                width={400}
                height={500}
                className="w-full h-96 object-cover object-top group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold mb-2">럭셔리 서비스</h3>
                  <p className="text-sm text-purple-100">최고급 프리미엄 경험</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">지금 바로 예약하세요</h2>
                <p className="text-xl text-pink-100 mb-6">경기도 이천, 광주, 여주 최고의 프리미엄 마사지</p>
                <div className="flex items-center justify-center space-x-3 text-2xl md:text-3xl font-bold mb-8">
                  <Phone className="w-8 h-8" />
                  <span>010-8186-7771</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  className="bg-white text-pink-500 hover:bg-pink-50 px-8 py-4 text-lg rounded-full font-bold shadow-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                  onClick={() => window.open("tel:010-8186-7771")}
                >
                  전화로 예약하기
                </Button>
                <Button
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg rounded-full font-bold shadow-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                  onClick={() => window.open("https://open.kakao.com/o/ssZxRuEh")}
                >
                  카카오톡 상담
                </Button>
              </div>

              {/* Service Areas */}
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 rounded-2xl p-4">
                  <MapPin className="w-6 h-6 mx-auto mb-2" />
                  <span className="text-sm">이천시</span>
                </div>
                <div className="bg-white/10 rounded-2xl p-4">
                  <MapPin className="w-6 h-6 mx-auto mb-2" />
                  <span className="text-sm">광주시</span>
                </div>
                <div className="bg-white/10 rounded-2xl p-4">
                  <MapPin className="w-6 h-6 mx-auto mb-2" />
                  <span className="text-sm">여주시</span>
                </div>
                <div className="bg-white/10 rounded-2xl p-4">
                  <MapPin className="w-6 h-6 mx-auto mb-2" />
                  <span className="text-sm">안산시</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center">
                  <Flower2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold">노마드출장마사지</div>
                  <div className="text-sm text-pink-400">Premium Spa Experience</div>
                </div>
              </div>
              <p className="text-gray-400 mb-4">검증된 프리미엄 출장마사지 서비스</p>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span>24시간 운영</span>
                <span>•</span>
                <span>100% 후불제</span>
                <span>•</span>
                <span>전문 관리사</span>
              </div>
            </div>
            <div className="text-center md:text-right">
              <div className="text-2xl font-bold text-pink-400 mb-4">010-8186-7771</div>
              <Button
                className="bg-gradient-to-r from-pink-400 to-rose-500 hover:from-pink-500 hover:to-rose-600 px-6 py-3 rounded-full font-semibold"
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
