"use client"

import Image from "next/image"
import { Phone, MapPin, Clock, Shield, Menu, Heart, Flower2, Crown, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ClientPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-rose-50">
      {/* Ultra Luxury Header */}
      <header className="bg-white/95 backdrop-blur-xl shadow-xl border-b border-rose-100/50 sticky top-0 z-50">
        <div className="container mx-auto px-2 sm:px-4 py-3 lg:py-6">
          <div className="flex items-center justify-between">
            {/* Premium Logo */}
            <div className="flex items-center space-x-3 lg:space-x-4">
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-rose-400 via-pink-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl ring-4 ring-rose-200/50">
                <Crown className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
              </div>
              <div>
                <div className="text-xl lg:text-3xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">
                  노마드출장마사지
                </div>
                <div className="text-xs lg:text-sm text-rose-500 font-medium">Luxury Spa Experience</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-8 text-sm font-medium text-gray-600">
              <a href="#" className="hover:text-rose-500 transition-all duration-300 relative group">
                홈
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#services" className="hover:text-rose-500 transition-all duration-300 relative group">
                서비스 & 가격
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#team" className="hover:text-rose-500 transition-all duration-300 relative group">
                관리사
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#about" className="hover:text-rose-500 transition-all duration-300 relative group">
                소개
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-3">
              <Button
                className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 hover:from-rose-600 hover:via-pink-600 hover:to-purple-700 text-white px-4 lg:px-8 py-2 lg:py-3 rounded-full font-semibold shadow-xl ring-2 ring-rose-300/50 hover:ring-rose-400/50 transition-all duration-300 transform hover:scale-105 text-sm lg:text-base"
                onClick={() => window.open("tel:010-8186-7771")}
              >
                <Phone className="w-4 h-4 mr-2" />
                지금 예약
              </Button>

              <div className="xl:hidden">
                <Button variant="ghost" size="sm" className="text-gray-700">
                  <Menu className="w-6 h-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Ultra Luxury Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Premium Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/spa-background.jpg"
            alt="Premium Massage Service"
            fill
            className="object-cover"
            style={{ objectPosition: "center 30%" }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-gray-900/60 to-purple-900/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-rose-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-2 sm:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left px-2 sm:px-0">
              <div className="mb-4 lg:mb-8">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-rose-500/20 to-purple-500/20 backdrop-blur-sm border border-rose-400/30 rounded-full px-3 lg:px-6 py-2 lg:py-3 mb-3 lg:mb-6">
                  <Sparkles className="w-3 h-3 lg:w-5 lg:h-5 text-rose-300" />
                  <span className="text-xs lg:text-base font-medium text-rose-200">Welcome  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-7xl xl:text-8xl font-bold mb-3 lg:mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-white via-rose-100 to-purple-100 bg-clip-text text-transparent block">
                    이천, 광주, 여주, 용인
                  </span>
                  <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 bg-clip-text text-transparent block">
                    노마드 출장마사지
                  </span>
                </h1>

                <p className="text-sm sm:text-lg lg:text-2xl xl:text-3xl text-gray-200 mb-4 lg:mb-8 leading-relaxed px-2 sm:px-0">
                  {""}
                  <br className="hidden sm:block" />
                  <span className="text-rose-300">{""}</span>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 lg:gap-6 mb-6 lg:mb-12 px-2 sm:px-0">
                <Button
                  className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 hover:from-rose-600 hover:via-pink-600 hover:to-purple-700 text-white px-4 lg:px-10 py-3 lg:py-5 text-base lg:text-xl rounded-full font-bold shadow-2xl ring-4 ring-rose-400/30 hover:ring-rose-300/50 transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.open("tel:010-8186-7771")}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  지금 예약하기
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-white/50 text-white hover:bg-white hover:text-gray-800 px-4 lg:px-10 py-3 lg:py-5 text-base lg:text-xl rounded-full font-bold transition-all duration-300 bg-transparent backdrop-blur-sm"
                  onClick={() => window.open("https://open.kakao.com/o/ssZxRuEh")}
                >
                  카카오톡 상담
                </Button>
              </div>

              {/* Premium Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 lg:gap-6 px-2 sm:px-0">
                <div className="flex items-center justify-center sm:justify-start space-x-2 bg-white/10 backdrop-blur-sm rounded-xl p-2 lg:p-4">
                  <Shield className="w-4 h-4 lg:w-6 lg:h-6 text-rose-300" />
                  <span className="text-xs lg:text-base text-white font-medium">100% 후불제</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start space-x-2 bg-white/10 backdrop-blur-sm rounded-xl p-2 lg:p-4">
                  <Clock className="w-4 h-4 lg:w-6 lg:h-6 text-purple-300" />
                  <span className="text-xs lg:text-base text-white font-medium">24시간 운영</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start space-x-2 bg-white/10 backdrop-blur-sm rounded-xl p-2 lg:p-4">
                  <Crown className="w-4 h-4 lg:w-6 lg:h-6 text-pink-300" />
                  <span className="text-xs lg:text-base text-white font-medium">전문 관리사</span>
                </div>
              </div>
            </div>

            {/* Right Content - Premium Floating Card */}
            <div className="relative hidden lg:block">
              <div className="relative">
                <Card className="bg-white/95 backdrop-blur-xl shadow-2xl rounded-3xl overflow-hidden transform rotate-2 hover:rotate-0 transition-all duration-700 ring-1 ring-rose-200/50">
                  <div className="relative">
                    <Image
                      src="/images/spa-image-1.jpg"
                      alt="Premium Service"
                      width={500}
                      height={600}
                      className="w-full h-96 xl:h-[500px] object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-500/30 via-transparent to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                      <Heart className="w-5 h-5 text-rose-500" />
                    </div>
                  </div>
                  <CardContent className="p-6 xl:p-8">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 text-lg">프리미엄 서비스</h3>
                        <p className="text-rose-500 text-sm">Premium Experience</p>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">최고급 마사지 경험을 선사합니다</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ultra Premium About Section */}
      <section id="about" className="py-16 lg:py-24 bg-gradient-to-br from-white via-rose-50/30 to-purple-50/30">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div>
              <div className="mb-8 lg:mb-12">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-rose-100 to-purple-100 rounded-full px-4 lg:px-6 py-2 lg:py-3 mb-4 lg:mb-6">
                  <Crown className="w-4 h-4 lg:w-5 lg:h-5 text-rose-600" />
                  <span className="text-rose-800 font-semibold text-sm lg:text-base">{"프리미엄 출장 마사지"}</span>
                </div>
                <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-4 lg:mb-6">ABOUT US</h2>
                <div className="w-16 lg:w-24 h-1 bg-gradient-to-r from-rose-400 via-pink-500 to-purple-500 mb-6 lg:mb-8"></div>
              </div>

              <div className="space-y-4 lg:space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg lg:text-xl">
                  <span className="font-bold text-rose-600">노마드출장마사지</span>는 이천, 광주, 여주 지역의 프리미엄
                  출장 마사지 서비스입니다.
                </p>
                <p className="text-base lg:text-lg">
                  저희의 모든 관리사는 전문적인 교육을 받았으며, 고객님께 최상의 힐링 경험을 제공하기 위해 최선을 다하고
                  있습니다. 편안한 공간에서 받는 전문적인 마사지로 일상의 스트레스를 해소하세요.
                </p>
                <p className="text-base lg:text-lg">
                  100% 후불 시스템으로 안전하고 신뢰할 수 있는 서비스를 제공하며, 24시간 언제든지 예약이 가능합니다.
                </p>
              </div>

              <div className="mt-8 lg:mt-12 grid grid-cols-2 gap-4 lg:gap-8">
                <Card className="bg-gradient-to-br from-rose-50 to-pink-50 border-rose-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <CardContent className="p-4 lg:p-6 text-center">
                    <div className="text-2xl lg:text-4xl font-bold text-rose-600 mb-2">24/7</div>
                    <div className="text-sm lg:text-base text-gray-600 font-medium">24시간 운영</div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <CardContent className="p-4 lg:p-6 text-center">
                    <div className="text-2xl lg:text-4xl font-bold text-purple-600 mb-2">100%</div>
                    <div className="text-sm lg:text-base text-gray-600 font-medium">후불 안심</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right Content - Ultra Premium Why Us Card */}
            <div className="relative">
              <Card className="bg-gradient-to-br from-rose-500 via-pink-500 to-purple-600 text-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-24 lg:w-32 h-24 lg:h-32 bg-white/10 rounded-full -translate-y-12 lg:-translate-y-16 translate-x-12 lg:translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-16 lg:w-24 h-16 lg:h-24 bg-white/10 rounded-full translate-y-8 lg:translate-y-12 -translate-x-8 lg:-translate-x-12"></div>

                <CardContent className="p-6 lg:p-12 relative z-10">
                  <div className="mb-6 lg:mb-10">
                    <div className="flex items-center space-x-3 mb-4 lg:mb-6">
                      <Crown className="w-6 h-6 lg:w-8 lg:h-8" />
                      <h3 className="text-2xl lg:text-4xl font-bold italic">Why us?</h3>
                    </div>
                    <div className="w-12 lg:w-16 h-1 bg-white/50"></div>
                  </div>

                  <div className="space-y-4 lg:space-y-6">
                    {[
                      {
                        title: "집에서 편안하게, 이동 없이",
                        desc: "고객님의 공간에서 프리미엄 마사지 서비스를 받으세요",
                      },
                      {
                        title: "전문 관리사",
                        desc: "엄선된 20대 전문 관리사가 최상의 서비스 제공",
                      },
                      {
                        title: "안전한 후불제",
                        desc: "서비스 완료 후 결제하는 100% 안심 시스템",
                      },
                      {
                        title: "빠른 출발",
                        desc: "예약 후 30분 내로 출발하여 신속한 서비스",
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3 lg:space-x-4">
                        <div className="w-6 h-6 lg:w-8 lg:h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <div>
                          <h4 className="font-bold mb-1 lg:mb-2 text-sm lg:text-base">{item.title}</h4>
                          <p className="text-white/80 text-xs lg:text-sm leading-relaxed">{item.desc}</p>
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

      {/* Ultra Premium Services Section */}
      <section id="services" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-rose-50">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="text-center mb-12 lg:mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-rose-100 to-purple-100 rounded-full px-4 lg:px-6 py-2 lg:py-3 mb-4 lg:mb-6">
              <Sparkles className="w-4 h-4 lg:w-5 lg:h-5 text-rose-600" />
              <span className="text-rose-800 font-semibold text-sm lg:text-base">Our Services</span>
            </div>
            <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-4 lg:mb-6">마사지 서비스</h2>
            <div className="w-16 lg:w-24 h-1 bg-gradient-to-r from-rose-400 via-pink-500 to-purple-500 mx-auto mb-6 lg:mb-8"></div>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              전문 관리사가 제공하는 다양한 프리미엄 마사지 서비스
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10">
            {/* Thai Massage */}
            <Card className="bg-white shadow-2xl rounded-3xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 group">
              <div className="bg-gradient-to-br from-rose-100 via-pink-100 to-purple-100 p-6 lg:p-8">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Flower2 className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3 lg:mb-4">타이 마사지</h3>
                <p className="text-gray-600 mb-4 lg:mb-6 leading-relaxed text-sm lg:text-base">
                  전통 타이 마사지 기법으로 몸의 균형을 맞춰드립니다
                </p>

                <div className="space-y-2 lg:space-y-3">
                  {[
                    { time: "60분", price: "70,000원" },
                    { time: "90분", price: "80,000원" },
                    { time: "120분", price: "100,000원" },
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-2 lg:p-3 bg-white/70 rounded-xl">
                      <span className="text-gray-700 font-medium text-sm lg:text-base">{item.time}</span>
                      <span className="font-bold text-rose-600 text-sm lg:text-base">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Aroma Massage */}
            <Card className="bg-white shadow-2xl rounded-3xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 group">
              <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-rose-100 p-6 lg:p-8">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3 lg:mb-4">아로마 마사지</h3>
                <p className="text-gray-600 mb-4 lg:mb-6 leading-relaxed text-sm lg:text-base">
                  향긋한 아로마 오일로 심신의 안정을 선사합니다
                </p>

                <div className="space-y-2 lg:space-y-3">
                  {[
                    { time: "60분", price: "80,000원" },
                    { time: "90분", price: "90,000원" },
                    { time: "120분", price: "110,000원" },
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-2 lg:p-3 bg-white/70 rounded-xl">
                      <span className="text-gray-700 font-medium text-sm lg:text-base">{item.time}</span>
                      <span className="font-bold text-purple-600 text-sm lg:text-base">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Swedish Massage */}
            <Card className="bg-white shadow-2xl rounded-3xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 group md:col-span-2 lg:col-span-1">
              <div className="bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100 p-6 lg:p-8">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Crown className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3 lg:mb-4">스웨디시 힐링 마사지</h3>
                <p className="text-gray-600 mb-4 lg:mb-6 leading-relaxed text-sm lg:text-base">
                  깊은 이완과 근육 회복을 위한 전문 마사지
                </p>

                <div className="space-y-2 lg:space-y-3">
                  {[
                    { time: "60분", price: "100,000원" },
                    { time: "90분", price: "130,000원" },
                    { time: "120분", price: "160,000원" },
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-2 lg:p-3 bg-white/70 rounded-xl">
                      <span className="text-gray-700 font-medium text-sm lg:text-base">{item.time}</span>
                      <span className="font-bold text-pink-600 text-sm lg:text-base">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* 스페셜 패키지 섹션 */}
          <div className="mt-12 lg:mt-20">
            <div className="text-center mb-8 lg:mb-12">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-4 lg:px-6 py-2 lg:py-3 mb-4">
                <Crown className="w-4 h-4 lg:w-5 lg:h-5 text-purple-600" />
                <span className="text-purple-800 font-semibold text-sm lg:text-base">Special Package</span>
              </div>
              <h3 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-4">스페셜 패키지</h3>
              <div className="w-12 lg:w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-10 max-w-4xl mx-auto">
              {/* 타이 + 아로마 패키지 */}
              <Card className="bg-gradient-to-br from-rose-500 via-pink-500 to-purple-500 text-white shadow-2xl rounded-3xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                <CardContent className="p-6 lg:p-8 relative">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>

                  <div className="flex items-center space-x-3 mb-4 lg:mb-6">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                      <Heart className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl lg:text-2xl font-bold">타이 + 아로마</h4>
                      <p className="text-white/80 text-sm lg:text-base">Thai + Aroma Package</p>
                    </div>
                  </div>

                  <p className="text-white/90 mb-4 lg:mb-6 leading-relaxed text-sm lg:text-base">
                    타이 마사지 60분 + 아로마 마사지 60분
                  </p>

                  <div className="bg-white/10 rounded-xl p-3 lg:p-4 backdrop-blur-sm">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-sm lg:text-base">총 120분</span>
                      <span className="font-bold text-2xl lg:text-3xl">110,000원</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 타이 + 스웨디시 패키지 */}
              <Card className="bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 text-white shadow-2xl rounded-3xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                <CardContent className="p-6 lg:p-8 relative">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>

                  <div className="flex items-center space-x-3 mb-4 lg:mb-6">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                      <Crown className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl lg:text-2xl font-bold">타이 + 스웨디시 힐링 </h4>
                      <p className="text-white/80 text-sm lg:text-base">Thai + Swedish Package</p>
                    </div>
                  </div>

                  <p className="text-white/90 mb-4 lg:mb-6 leading-relaxed text-sm lg:text-base">
                    타이 마사지 60분 + 스웨디시 마사지 60분
                  </p>

                  <div className="bg-white/10 rounded-xl p-3 lg:p-4 backdrop-blur-sm">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-sm lg:text-base">총 120분</span>
                      <span className="font-bold text-2xl lg:text-3xl">130,000원</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Ultra Premium Gallery Section */}
      <section id="team" className="py-16 lg:py-24 bg-gradient-to-br from-rose-50 via-white to-purple-50">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="text-center mb-12 lg:mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-rose-100 to-purple-100 rounded-full px-4 lg:px-6 py-2 lg:py-3 mb-4 lg:mb-6">
              <Crown className="w-4 h-4 lg:w-5 lg:h-5 text-rose-600" />
              <span className="text-rose-800 font-semibold text-sm lg:text-base">Our Team</span>
            </div>
            <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-4 lg:mb-6">전문 관리사</h2>
            <div className="w-16 lg:w-24 h-1 bg-gradient-to-r from-rose-400 via-pink-500 to-purple-500 mx-auto mb-6 lg:mb-8"></div>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              최고의 서비스를 제공하는 전문 관리사들을 만나보세요
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10">
            {[
              {
                src: "/images/spa-image-2.jpg",
                title: "전문 관리사",
                desc: "친절하고 전문적인 서비스",
                gradient: "from-rose-200/80 via-pink-200/70 to-purple-200/60",
              },
              {
                src: "/images/spa-image-4.jpg",
                title: "럭셔리 서비스",
                desc: "최고급 프리미엄 경험",
                gradient: "from-pink-200/80 via-rose-200/70 to-purple-200/60",
              },
              {
                src: "/images/spa-image-5.jpg",
                title: "힐링 서비스",
                desc: "완벽한 휴식과 회복",
                gradient: "from-purple-200/80 via-pink-200/70 to-rose-200/60",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2`}
              >
                <div className="relative">
                  <Image
                    src={item.src || "/placeholder.svg"}
                    alt={item.title}
                    width={400}
                    height={500}
                    className="w-full h-72 lg:h-96 object-cover object-center group-hover:scale-110 transition-transform duration-700 group-hover:brightness-110"
                  />

                  {/* 밝은 오버레이 */}
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-all duration-500"></div>

                  {/* 산뜻한 그라데이션 오버레이 */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${item.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500`}
                  ></div>

                  {/* 밝은 글로우 효과 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

                  {/* 텍스트 컨테이너 */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 lg:p-6 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-white/40 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 shadow-lg">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center shadow-md">
                          <Crown className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                        </div>
                        <h3 className="text-lg lg:text-xl font-bold text-gray-800">{item.title}</h3>
                      </div>
                      <p className="text-sm lg:text-base text-gray-600 leading-relaxed">{item.desc}</p>

                      {/* 장식 요소 */}
                      <div className="flex justify-center mt-4">
                        <div className="w-12 h-1 bg-gradient-to-r from-rose-300 to-pink-300 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* 코너 장식 - 밝은 버전 */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/80 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200 flex items-center justify-center shadow-lg">
                    <Heart className="w-6 h-6 text-rose-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ultra Premium Contact Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-slate-800 to-purple-900">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="bg-gradient-to-br from-rose-500 via-pink-500 to-purple-600 rounded-3xl p-6 lg:p-16 text-white text-center shadow-2xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 lg:w-48 h-32 lg:h-48 bg-white/10 rounded-full -translate-y-16 lg:-translate-y-24 translate-x-16 lg:translate-x-24"></div>
              <div className="absolute bottom-0 left-0 w-24 lg:w-36 h-24 lg:h-36 bg-white/10 rounded-full translate-y-12 lg:translate-y-18 -translate-x-12 lg:-translate-x-18"></div>

              <div className="relative z-10">
                <div className="mb-6 lg:mb-10">
                  <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 lg:px-6 py-2 lg:py-3 mb-4 lg:mb-6">
                    <Crown className="w-4 h-4 lg:w-5 lg:h-5" />
                    <span className="font-semibold text-sm lg:text-base">Premium Booking</span>
                  </div>
                  <h2 className="text-2xl lg:text-4xl xl:text-5xl font-bold mb-3 lg:mb-4">지금 바로 예약하세요</h2>
                  <p className="text-lg lg:text-xl text-white/90 mb-6 lg:mb-8">
                    경기도 이천, 광주, 여주 최고의 프리미엄 마사지
                  </p>
                  <div className="flex items-center justify-center space-x-3 lg:space-x-4 text-xl lg:text-3xl font-bold mb-6 lg:mb-10">
                    <Phone className="w-6 h-6 lg:w-8 lg:h-8" />
                    <span>010-8186-7771</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center mb-8 lg:mb-12">
                  <Button
                    className="bg-white text-rose-600 hover:bg-rose-50 px-6 lg:px-10 py-3 lg:py-4 text-lg lg:text-xl rounded-full font-bold shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                    onClick={() => window.open("tel:010-8186-7771")}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    전화로 예약하기
                  </Button>
                  <Button
                    className="bg-green-500 hover:bg-green-600 text-white px-6 lg:px-10 py-3 lg:py-4 text-lg lg:text-xl rounded-full font-bold shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                    onClick={() => window.open("https://open.kakao.com/o/ssZxRuEh")}
                  >
                    카카오톡 상담
                  </Button>
                </div>

                {/* Service Areas */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
                  {["이천시", "광주시", "여주시", "용인시"].map((area, index) => (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 lg:p-4 hover:bg-white/20 transition-all duration-300"
                    >
                      <MapPin className="w-4 h-4 lg:w-6 lg:h-6 mx-auto mb-1 lg:mb-2" />
                      <span className="text-xs lg:text-sm font-medium">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Ultra Premium Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white py-12 lg:py-16">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 lg:space-x-4 mb-4 lg:mb-6">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-rose-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Crown className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <div>
                  <div className="text-lg lg:text-xl font-bold">노마드출장마사지</div>
                  <div className="text-xs lg:text-sm text-rose-400">Luxury Spa Experience</div>
                </div>
              </div>
              <p className="text-gray-400 mb-4 lg:mb-6 text-sm lg:text-base leading-relaxed">
                검증된 프리미엄 출장마사지 서비스
              </p>
              <div className="flex flex-wrap items-center gap-2 lg:gap-4 text-xs lg:text-sm text-gray-400">
                <span>24시간 운영</span>
                <span>•</span>
                <span>100% 후불제</span>
                <span>•</span>
                <span>전문 관리사</span>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <div className="text-xl lg:text-3xl font-bold text-rose-400 mb-3 lg:mb-4">010-8186-7771</div>
              <Button
                className="bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold text-sm lg:text-base transition-all duration-300 transform hover:scale-105"
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
