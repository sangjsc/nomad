import Image from "next/image"
import Link from "next/link"
import { Phone, MapPin, Clock, Shield, Heart, Flower2, Crown, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PRIMARY_SERVICE_AREAS, SERVICE_AREAS, SITE_URL } from "@/lib/site"

export default function ClientPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: "노마드출장마사지",
        description:
          "집에서 편하게 받는 타이·아로마·스웨디시. 이천·경기 광주·여주·용인 등 경기 22개 지역, 오후 7시~오전 4시 상담. 추가비 없이 마사지 후 결제합니다.",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        mainEntity: { "@id": `${SITE_URL}/#massage-service` },
        about: [
          { "@id": `${SITE_URL}/#organization` },
          { "@id": `${SITE_URL}/#massage-service` },
        ],
        inLanguage: "ko-KR",
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-rose-50 overflow-x-hidden [&_p]:break-keep [&_h2]:break-keep [&_h3]:break-keep [&_h4]:break-keep">


        {/* Ultra Luxury Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Premium Background */}
          <div className="absolute inset-0">
            <Image
              src="/images/spa-background.jpg"
              alt="노마드출장마사지 메인 - 경기 주요 22개 지역 예약 안내"
              fill
              className="object-cover"
              style={{ objectPosition: "center 20%" }}
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-gray-900/60 to-purple-900/70"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 hidden h-20 w-20 animate-pulse rounded-full bg-rose-400/20 blur-xl motion-reduce:animate-none sm:block"></div>
          <div className="absolute bottom-32 right-16 hidden h-32 w-32 animate-pulse rounded-full bg-purple-400/20 blur-2xl delay-1000 motion-reduce:animate-none sm:block"></div>

          {/* Hero Content */}
          <div className="relative z-10 container mx-auto px-2 sm:px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left px-2 sm:px-0">
                <div className="mb-4 lg:mb-8">
                  <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-rose-500/20 to-purple-500/20 backdrop-blur-sm border border-rose-400/30 rounded-full px-3 lg:px-6 py-2 lg:py-3 mb-3 lg:mb-6">
                    <Sparkles className="w-3 h-3 lg:w-5 lg:h-5 text-rose-300" />
                    <span className="text-xs lg:text-base font-medium text-rose-200">경기도 22개 지역으로 찾아갑니다</span>
                  </div>

                  <h1 className="text-3xl sm:text-4xl lg:text-7xl xl:text-8xl font-bold mb-3 lg:mb-6 leading-tight">
                    <span className="bg-gradient-to-r from-white via-rose-100 to-purple-100 bg-clip-text text-transparent block">
                      노마드출장마사지
                    </span>
                    <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 bg-clip-text text-transparent block">
                      집에서 편하게
                    </span>
                  </h1>

                  <p className="break-keep text-sm sm:text-lg lg:text-2xl xl:text-3xl text-gray-200 mb-4 lg:mb-8 leading-relaxed px-2 sm:px-0">
                    타이·아로마·스웨디시, 원하는 코스로 골라보세요.
                    <br />
                    <span className="text-rose-300">오후 7시~오전 4시 상담</span>
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 lg:gap-6 mb-6 lg:mb-12 px-2 sm:px-0">
                  <Button
                    asChild
                    className="h-auto min-h-12 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 hover:from-rose-600 hover:via-pink-600 hover:to-purple-700 text-white px-4 lg:px-10 py-3 lg:py-5 text-base lg:text-xl rounded-full font-bold shadow-2xl ring-4 ring-rose-400/30 hover:ring-rose-300/50 transition-all duration-300 transform hover:scale-105"
                  >
                    <a href="tel:01081867771">
                      <Phone className="w-4 h-4 mr-2" />
                      지금 예약하기
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="h-auto min-h-12 border-2 border-white/50 text-white hover:bg-white hover:text-gray-800 px-4 lg:px-10 py-3 lg:py-5 text-base lg:text-xl rounded-full font-bold transition-all duration-300 bg-transparent sm:backdrop-blur-sm"
                  >
                    <a href="https://open.kakao.com/o/ssZxRuEh" target="_blank" rel="noopener noreferrer">
                      카카오톡 상담
                    </a>
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
                    <span className="text-xs lg:text-base text-white font-medium">오후 7시~오전 4시 운영</span>
                  </div>
                  <div className="flex items-center justify-center sm:justify-start space-x-2 bg-white/10 backdrop-blur-sm rounded-xl p-2 lg:p-4">
                    <Crown className="w-4 h-4 lg:w-6 lg:h-6 text-pink-300" />
                    <span className="text-xs lg:text-base text-white font-medium">추가비 없음</span>
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
                        alt="노마드출장마사지 예약 코스 안내"
                        width={500}
                        height={600}
                        className="w-full h-96 xl:h-[500px] object-cover object-center"
                        style={{ objectPosition: "center top" }}
                        sizes="(min-width: 1280px) 500px, (min-width: 1024px) 50vw, 100vw"
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
                          <h3 className="font-bold text-gray-800 text-lg">오늘 받을 수 있을까요?</h3>
                          <p className="text-rose-500 text-sm">전화나 카톡으로 물어보세요</p>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">계신 곳과 원하는 시간을 알려주세요. 언제 방문할 수 있는지 답해드리겠습니다.</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Service Areas Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-white via-rose-50/30 to-purple-50/30">
          <div className="container mx-auto px-2 sm:px-4">
            <div className="text-center mb-12 lg:mb-16">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-rose-100 to-purple-100 rounded-full px-4 lg:px-6 py-2 lg:py-3 mb-4 lg:mb-6">
                <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-rose-600" />
                <span className="text-rose-800 font-semibold text-sm lg:text-base">어디에서 받으실 건가요?</span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-6">경기 주요 22개 지역 출장마사지</h2>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                계신 지역을 눌러 가격과 예약 방법을 살펴보세요.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
              {SERVICE_AREAS.map((area, index) => {
                const themes = ["from-blue-400 to-cyan-500", "from-purple-400 to-indigo-500", "from-amber-400 to-orange-500", "from-rose-400 to-pink-500"]
                return (
                <Link key={area.slug} href={`/${area.slug}`}>
                  <Card className="bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 rounded-2xl overflow-hidden group">
                    <CardContent className="p-4 lg:p-6">
                      <div className={`w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br ${themes[index % themes.length]} rounded-xl flex items-center justify-center mx-auto mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <MapPin className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                      </div>
                      <h3 className="text-sm lg:text-base font-bold text-gray-800 mb-1 lg:mb-2 text-center group-hover:text-rose-600 transition-colors duration-300">
                        {area.name} 출장마사지
                      </h3>
                      <p className="text-xs lg:text-sm text-gray-600 text-center">
                        {area.fullName} 전지역
                      </p>
                      <div className="mt-2 lg:mt-3 text-center">
                        <span className="inline-flex items-center text-xs lg:text-sm text-rose-600 font-medium group-hover:text-rose-700">
                          오후 7시~오전 4시 예약
                          <Crown className="w-3 h-3 lg:w-4 lg:h-4 ml-1" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
                )
              })}
            </div>

            <div className="mt-12 lg:mt-16 text-center">
              <Card className="bg-gradient-to-br from-rose-500 via-pink-500 to-purple-600 text-white rounded-3xl shadow-2xl p-6 lg:p-8 max-w-4xl mx-auto">
                <h3 className="text-xl lg:text-3xl font-bold mb-4">오늘 예약이 궁금하시면</h3>
                <p className="text-sm lg:text-lg mb-6 opacity-90">
                  원하시는 지역과 시간을 말씀해주세요. 당일 예약은 빈 시간과 거리에 따라 달라집니다.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button
                    asChild
                    className="h-auto min-h-12 bg-white text-rose-600 hover:bg-rose-50 px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg rounded-full font-bold shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <a href="tel:01081867771">
                      <Phone className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
                      010-8186-7771
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="h-auto min-h-12 border-white bg-transparent text-white hover:bg-white hover:text-rose-600">
                    <Link href="/service-areas">전체 서비스 지역</Link>
                  </Button>
                  <Button
                    asChild
                    className="h-auto min-h-12 bg-green-500 hover:bg-green-600 text-white px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg rounded-full font-bold shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <a href="https://open.kakao.com/o/ssZxRuEh" target="_blank" rel="noopener noreferrer">
                      카카오톡 상담
                    </a>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Rest of the sections remain the same as before... */}
        {/* Ultra Premium About Section */}
        <section id="about" className="py-16 lg:py-24 bg-gradient-to-br from-white via-rose-50/30 to-purple-50/30">
          <div className="container mx-auto px-2 sm:px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Content */}
              <div>
                <div className="mb-8 lg:mb-12">
                  <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-rose-100 to-purple-100 rounded-full px-4 lg:px-6 py-2 lg:py-3 mb-4 lg:mb-6">
                    <Crown className="w-4 h-4 lg:w-5 lg:h-5 text-rose-600" />
                    <span className="text-rose-800 font-semibold text-sm lg:text-base">노마드출장마사지</span>
                  </div>
                  <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-4 lg:mb-6">나갈 필요 없이,<br />계신 곳에서 쉬세요</h2>
                  <div className="w-16 lg:w-24 h-1 bg-gradient-to-r from-rose-400 via-pink-500 to-purple-500 mb-6 lg:mb-8"></div>
                </div>

                <div className="space-y-4 lg:space-y-6 text-gray-600 leading-relaxed">
                  <p className="text-lg lg:text-xl">
                    <span className="font-bold text-rose-600">노마드출장마사지</span>는 이천·경기 광주·여주·용인 등
                    경기도 22개 지역에서 이용하실 수 있습니다. 집이나 오피스텔에서 편하게 받아보세요.
                  </p>
                  <p className="text-base lg:text-lg">
                    어떤 코스를 고를지 모르겠다면 상담할 때 물어보세요.
                    호텔에서 받으실 때는 외부인 방문이 가능한지 숙소에 먼저 확인해주세요.
                  </p>
                  <p className="text-base lg:text-lg">
                    전화와 카톡 상담은 <span className="font-bold">오후 7시~오전 4시</span>입니다.
                    예약금은 받지 않습니다. 마사지를 다 받으신 뒤 현장에서 결제하시면 됩니다.
                  </p>
                </div>

                <div className="mt-8 lg:mt-12 grid grid-cols-2 gap-4 lg:gap-8">
                  <Card className="bg-gradient-to-br from-rose-50 to-pink-50 border-rose-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                    <CardContent className="p-4 lg:p-6 text-center">
                      <div className="text-2xl lg:text-4xl font-bold text-rose-600 mb-2">19–04</div>
                      <div className="text-sm lg:text-base text-gray-600 font-medium">오후 7시~오전 4시 운영</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                    <CardContent className="p-4 lg:p-6 text-center">
                      <div className="text-2xl lg:text-4xl font-bold text-purple-600 mb-2">100%</div>
                      <div className="text-sm lg:text-base text-gray-600 font-medium">서비스 후 결제</div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Right Content - Ultra Premium Why Us Card */}
              <div className="relative">
                <Card className="bg-gradient-to-br from-rose-500 via-pink-500 to-purple-600 text-white rounded-3xl shadow-2xl overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 lg:w-32 h-24 lg:h-32 bg-white/10 rounded-full -translate-y-12 lg:-translate-y-16 translate-x-6 lg:translate-x-8"></div>
                  <div className="absolute bottom-0 left-0 w-16 lg:w-24 h-16 lg:h-24 bg-white/10 rounded-full translate-y-8 lg:translate-y-12 -translate-x-4 lg:-translate-x-6"></div>

                  <CardContent className="p-6 lg:p-12 relative z-10">
                    <div className="mb-6 lg:mb-10">
                      <div className="flex items-center space-x-3 mb-4 lg:mb-6">
                        <Crown className="w-6 h-6 lg:w-8 lg:h-8" />
                        <h3 className="text-2xl lg:text-4xl font-bold">부담 없이 고르세요</h3>
                      </div>
                      <div className="w-12 lg:w-16 h-1 bg-white/50"></div>
                    </div>

                    <div className="space-y-4 lg:space-y-6">
                      {[
                        {
                          title: "추가비는 없습니다",
                          desc: "어느 지역이든 출장비·주차비·야간 추가비를 따로 받지 않습니다.",
                        },
                        {
                          title: "받고 싶은 만큼",
                          desc: "타이·아로마·스웨디시 중에서 코스를, 60·90·120분 중에서 시간을 고르세요.",
                        },
                        {
                          title: "결제는 마지막에",
                          desc: "예약할 때 미리 보내실 돈은 없습니다. 마사지를 마친 뒤 결제해주세요.",
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
                <span className="text-rose-800 font-semibold text-sm lg:text-base">어떤 코스로 받을까요?</span>
              </div>
              <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-4 lg:mb-6">마사지 코스와 가격</h2>
              <div className="w-16 lg:w-24 h-1 bg-gradient-to-r from-rose-400 via-pink-500 to-purple-500 mx-auto mb-6 lg:mb-8"></div>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                타이는 60분 7만원부터입니다. 아래 가격 외 출장·주차·야간 추가비는 없습니다.
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
                    스트레칭과 압을 사용하는 코스입니다. 선호하는 강도를 말씀해주세요.
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
                    아로마 오일을 사용하는 코스입니다. 향에 민감하시면 예약할 때 알려주세요.
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
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3 lg:mb-4">스웨디시 마사지</h3>

                  <p className="text-gray-600 mb-4 lg:mb-6 leading-relaxed text-sm lg:text-base">
                    오일을 사용해 부드럽게 진행합니다. 강한 압이 부담스러운 분은 상담할 때 말씀해주세요.
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
                  <span className="text-purple-800 font-semibold text-sm lg:text-base">두 가지를 함께 받고 싶다면</span>
                </div>
                <h3 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-4">120분 묶음 코스</h3>
                <div className="w-12 lg:w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-10 max-w-4xl mx-auto">
                {/* 타이 + 아로마 패키지 */}
                <Card className="bg-gradient-to-br from-rose-500 via-pink-500 to-purple-500 text-white shadow-2xl rounded-3xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                  <CardContent className="p-6 lg:p-8 relative">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-5"></div>

                    <div className="flex items-center space-x-3 mb-4 lg:mb-6">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                        <Heart className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl lg:text-2xl font-bold">타이 + 아로마</h4>
                        <p className="text-white/80 text-sm lg:text-base">각 60분씩, 총 120분</p>
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
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-5"></div>

                    <div className="flex items-center space-x-3 mb-4 lg:mb-6">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                        <Crown className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl lg:text-2xl font-bold">타이 + 스웨디시</h4>
                        <p className="text-white/80 text-sm lg:text-base">각 60분씩, 총 120분</p>
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
                <span className="text-rose-800 font-semibold text-sm lg:text-base">처음 이용하시나요?</span>
              </div>
              <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-4 lg:mb-6">예약은 이렇게 하시면 됩니다</h2>
              <div className="w-16 lg:w-24 h-1 bg-gradient-to-r from-rose-400 via-pink-500 to-purple-500 mx-auto mb-6 lg:mb-8"></div>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                긴 설명은 필요 없습니다. 계신 곳, 원하는 시간, 코스를 알려주세요.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10">
              {[
                {
                  src: "/images/spa-image-2.jpg",
                  title: "1. 위치와 시간",
                  desc: "받으실 주소와 원하는 시간을 보내주세요.",
                  gradient: "from-rose-200/80 via-pink-200/70 to-purple-200/60",
                  alt: "노마드출장마사지 위치와 예약 시간 확인 안내",
                },
                {
                  src: "/images/spa-image-3.jpg",
                  title: "2. 코스 선택",
                  desc: "원하는 코스와 시간을 고르세요. 고민되시면 물어보셔도 됩니다.",
                  gradient: "from-pink-200/80 via-rose-200/70 to-purple-200/60",
                  alt: "노마드출장마사지 타이 아로마 스웨디시 코스 안내",
                },
                {
                  src: "/images/spa-image-4.jpg",
                  title: "3. 시간 확정",
                  desc: "방문 가능한 시간과 금액을 확인한 뒤 예약해주세요.",
                  gradient: "from-purple-200/80 via-pink-200/70 to-rose-200/60",
                  alt: "노마드출장마사지 방문 가능 일정 안내",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2`}
                >
                  <div className="relative">
                    <Image
                      src={item.src || "/placeholder.svg"}
                      alt={item.alt || `${item.title} - 노마드출장마사지`}
                      width={400}
                      height={500}
                      className="w-full h-72 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-700 group-hover:brightness-110"
                      style={{ objectPosition: "center center" }}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
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
                      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-white/40 shadow-lg">
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
                <div className="absolute top-0 right-0 w-32 lg:w-48 h-32 lg:h-48 bg-white/10 rounded-full -translate-y-16 lg:-translate-y-24 translate-x-8 lg:translate-x-12"></div>
                <div className="absolute bottom-0 left-0 w-24 lg:w-36 h-24 lg:h-36 bg-white/10 rounded-full translate-y-12 lg:translate-y-18 -translate-x-6 lg:-translate-x-9"></div>

                <div className="relative z-10">
                  <div className="mb-6 lg:mb-10">
                    <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 lg:px-6 py-2 lg:py-3 mb-4 lg:mb-6">
                      <Crown className="w-4 h-4 lg:w-5 lg:h-5" />
                      <span className="font-semibold text-sm lg:text-base">전화·카카오톡 예약</span>
                    </div>
                    <h2 className="text-2xl lg:text-4xl xl:text-5xl font-bold mb-3 lg:mb-4">궁금한 점부터 물어보세요</h2>
                    <p className="text-lg lg:text-xl text-white/90 mb-6 lg:mb-8">
                      코스나 예약 시간이 고민되시면 전화나 카톡으로 편하게 문의해주세요.
                    </p>
                    <div className="flex items-center justify-center space-x-3 lg:space-x-4 text-xl lg:text-3xl font-bold mb-6 lg:mb-10">
                      <Phone className="w-6 h-6 lg:w-8 lg:h-8" />
                      <span>010-8186-7771</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center mb-8 lg:mb-12">
                    <Button
                      asChild
                      className="h-auto min-h-12 bg-white text-rose-600 hover:bg-rose-50 px-6 lg:px-10 py-3 lg:py-4 text-lg lg:text-xl rounded-full font-bold shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                    >
                      <a href="tel:01081867771">
                        <Phone className="w-5 h-5 mr-2" />
                        전화로 예약하기
                      </a>
                    </Button>
                    <Button
                      asChild
                      className="h-auto min-h-12 bg-green-500 hover:bg-green-600 text-white px-6 lg:px-10 py-3 lg:py-4 text-lg lg:text-xl rounded-full font-bold shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                    >
                      <a href="https://open.kakao.com/o/ssZxRuEh" target="_blank" rel="noopener noreferrer">
                        카카오톡 상담
                      </a>
                    </Button>
                  </div>

                  {/* Service Areas */}
                  <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-4">
                    {["이천시", "경기도 광주시", "여주시", "용인시", "수원시"].map((area, index) => (
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
                <Link href="/" className="flex items-center space-x-3 lg:space-x-4 mb-4 lg:mb-6">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-rose-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Crown className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-lg lg:text-xl font-bold">노마드출장마사지</div>
                  <div className="text-xs lg:text-sm text-rose-400">경기도 22개 지역 출장마사지</div>
                  </div>
                </Link>
                <p className="text-gray-400 mb-4 lg:mb-6 text-sm lg:text-base leading-relaxed">
                  타이·아로마·스웨디시를 계신 곳에서 편하게 받으세요.
                </p>
                <div className="flex flex-wrap items-center gap-2 lg:gap-4 text-xs lg:text-sm text-gray-400">
                  <span>오후 7시~오전 4시 운영</span>
                  <span>•</span>
                  <span>100% 후불제</span>
                  <span>•</span>
                  <span>전화·카카오톡 상담</span>
                </div>

                <div className="flex flex-wrap gap-3 lg:gap-4 text-sm text-gray-400 mt-4">
                  {PRIMARY_SERVICE_AREAS.map((area) => (
                    <Link key={area.slug} href={`/${area.slug}`} className="hover:text-rose-400 transition-colors duration-200">
                      {area.name} 출장마사지
                    </Link>
                  ))}
                  <Link href="/service-areas" className="hover:text-rose-400 transition-colors duration-200">전체 서비스 지역</Link>
                  <Link href="/about" className="hover:text-rose-400 transition-colors duration-200">이용 안내</Link>
                </div>
              </div>
              <div className="text-center lg:text-right">
                <div className="text-xl lg:text-3xl font-bold text-rose-400 mb-3 lg:mb-4">010-8186-7771</div>
                <Button
                  asChild
                  className="h-auto min-h-12 bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold text-sm lg:text-base transition-all duration-300 transform hover:scale-105"
                >
                  <a href="tel:01081867771">지금 예약하기</a>
                </Button>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
