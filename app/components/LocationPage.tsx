import Image from 'next/image'
import Link from 'next/link'
import {
  Phone,
  MapPin,
  Clock,
  Shield,
  Heart,
  Flower2,
  Crown,
  Sparkles,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { KAKAO_CHAT_URL, PHONE_TEL, PRIMARY_SERVICE_AREAS, SERVICE_AREAS, SITE_URL } from '@/lib/site'

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

type LocationFaq = {
  question: string
  answer: string
}

type RelatedContentLink = {
  href: string
  title: string
  description: string
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
  localGuide?: React.ReactNode
  faqItems?: LocationFaq[]
  relatedAreaSlugs?: string[]
  relatedContentLinks?: RelatedContentLink[]
}

export default function LocationPage({
  city,
  cityEn,
  description,
  areas,
  intro,
  serviceDescription,
  outro,
  theme,
  localGuide,
  faqItems,
  relatedAreaSlugs,
  relatedContentLinks = [],
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
  const currentTheme = themes[theme] || themes.rose
  const pageUrl = `${SITE_URL}/${cityEn}`
  const fullCityName = cityEn === 'gwangju' ? '경기도 광주시' : `경기도 ${city}시`
  const defaultFaqItems: LocationFaq[] = [
    {
      question: `${city}출장마사지 예약은 얼마나 미리 해야 하나요?`,
      answer: `${city}출장마사지는 당일 예약도 가능합니다. 상담 시 현재 위치와 희망 시간을 확인한 뒤 가능한 방문 예상 시간을 안내해드립니다.`,
    },
    {
      question: `${city}출장마사지 이용 시 준비할 것이 있나요?`,
      answer: `별도의 마사지 용품은 준비하지 않으셔도 됩니다. 호텔이나 숙소는 외부 방문과 객실 출입 가능 여부를 먼저 확인해주세요.`,
    },
    {
      question: `${city} 지역별 방문 시간은 어떻게 확인하나요?`,
      answer: `읍면동, 건물 유형과 출입 방법을 알려주시면 접수 순서와 이동 동선을 확인해 가능한 시간을 안내해드립니다.`,
    },
  ]
  const displayedFaqItems = faqItems?.length ? faqItems : defaultFaqItems
  const relatedAreas = relatedAreaSlugs?.length
    ? relatedAreaSlugs
        .map((slug) => SERVICE_AREAS.find((area) => area.slug === slug))
        .filter((area): area is (typeof SERVICE_AREAS)[number] => Boolean(area))
    : PRIMARY_SERVICE_AREAS.filter((area) => area.slug !== cityEn)
  const faqJsonLd = faqItems?.length
    ? {
        "@type": "FAQPage",
        "@id": `${pageUrl}/#faq`,
        mainEntity: displayedFaqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : null

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: `${fullCityName} 출장마사지`,
        description,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: [
          { "@id": `${SITE_URL}/#massage-service` },
          {
            "@type": "City",
            name: fullCityName,
            containedInPlace: { "@type": "AdministrativeArea", name: "경기도" },
          },
        ],
        mainEntity: { "@id": `${SITE_URL}/#massage-service` },
        breadcrumb: { "@id": `${pageUrl}/#breadcrumb` },
        inLanguage: "ko-KR",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "홈",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "서비스 지역",
            item: `${SITE_URL}/service-areas`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: fullCityName,
          },
        ],
      },
      ...(faqJsonLd ? [faqJsonLd] : []),
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-slate-100">


        <section className="relative py-6 sm:py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="order-1 w-full lg:col-span-7">
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
                    asChild
                    className={`h-auto min-h-12 bg-gradient-to-r ${currentTheme.gradientFrom} ${currentTheme.gradientVia} ${currentTheme.gradientTo} ${currentTheme.hoverGradientFrom} ${currentTheme.hoverGradientVia} ${currentTheme.hoverGradientTo} text-white px-8 py-4 text-lg sm:text-xl rounded-2xl font-bold shadow-xl transition-all duration-300 transform active:scale-95 w-full sm:w-auto hover:shadow-2xl`}
                  >
                    <a href={PHONE_TEL} aria-label={`${city} 출장마사지 전화 예약`}>
                      <Phone className="w-5 h-5 mr-3" />
                      📞 지금 예약하기
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className={`h-auto min-h-12 border-2 ${currentTheme.border} ${currentTheme.text} hover:bg-gray-50 px-8 py-4 text-lg sm:text-xl rounded-2xl font-bold transition-all duration-300 active:scale-95 w-full sm:w-auto hover:shadow-lg bg-white`}
                  >
                    <a href={KAKAO_CHAT_URL} target="_blank" rel="noopener noreferrer" aria-label={`${city} 카카오톡 상담`}>
                      💬 카카오톡 상담
                    </a>
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
                      19:00~04:00 운영
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

              <div className="order-2 w-full lg:col-span-5">
                <div className="relative max-w-md mx-auto lg:max-w-none">
                  <div className={`absolute inset-0 bg-gradient-to-br ${currentTheme.gradientFrom} ${currentTheme.gradientTo} rounded-3xl transform rotate-3 lg:rotate-6 opacity-20`}></div>
                  <Card className="bg-white shadow-2xl rounded-3xl overflow-hidden relative transition-all duration-500">
                    <div className="relative">
                      <Image
                        src={heroImage}
                        alt={`${city} 출장마사지 전문 관리사 - 노마드출장마사지`}
                        width={500}
                        height={600}
                        sizes="(max-width: 1024px) 100vw, 42vw"
                        className="h-56 w-full object-cover sm:h-80 lg:h-96"
                        style={{ objectPosition: 'center top' }}
                        priority
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
          <div className="container mx-auto px-4 sm:px-6">
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
                        19–04
                      </div>
                      <div className="text-sm lg:text-base text-gray-600 font-medium">
                        오후 7시~오전 4시 운영
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
                          desc: `${city} 전 지역 접수 순서와 이동 동선에 맞춰 방문 시간을 안내`,
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
          <div className="container mx-auto px-4 sm:px-6">
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

        {/* GEAF Q&A 섹션 - 구글 AI/SGE 최적화 */}
        {!faqItems?.length && (
          <section className="py-12 lg:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 lg:mb-12">
              <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-4">
                {city} 출장마사지 자주 묻는 질문
              </h2>
              <p className="text-base lg:text-lg text-gray-600">
                {city} 출장마사지에 대해 가장 많이 궁금해하시는 내용입니다
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-5 lg:p-6 border border-rose-100">
                <h3 className={`text-lg lg:text-xl font-bold ${currentTheme.lightText} mb-3`}>
                  {city} 출장마사지 가격은 얼마인가요?
                </h3>
                <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                  노마드타이의 {city} 출장마사지 기본 가격은 <strong>70,000원(60분)</strong>부터 시작합니다.
                  관리사가 도착한 후 결제하는 <strong>100% 후불제</strong>로 운영되며,
                  타이마사지, 아로마마사지, 스웨디시 중 선택 가능합니다.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-5 lg:p-6 border border-purple-100">
                <h3 className={`text-lg lg:text-xl font-bold ${currentTheme.lightText} mb-3`}>
                  {city} 출장마사지 예약 후 얼마나 빨리 오나요?
                </h3>
                <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                  {city}시 전 지역 예약 접수 후 이동 동선과 교통 상황을 확인해 방문 시간을 안내해드립니다.
                  <strong>오후 7시부터 오전 4시까지</strong> 운영되며, 심야 시간대도 예약 가능합니다.
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-5 lg:p-6 border border-pink-100">
                <h3 className={`text-lg lg:text-xl font-bold ${currentTheme.lightText} mb-3`}>
                  {city} 어느 지역까지 출장 가능한가요?
                </h3>
                <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                  {city}시 전 지역({areas.slice(0, 5).join(', ')} 등) 호텔, 모텔, 자택 모두 방문 가능합니다.
                  정확한 주소를 말씀해주시면 출장 가능 여부와 예상 도착 시간을 안내해드립니다.
                </p>
              </div>
            </div>
          </div>
          </section>
        )}

        <section
          id="services"
          className={`py-16 lg:py-24 bg-gradient-to-br from-white via-gray-50 ${currentTheme.lightBg}/40`}
        >
          <div className="container mx-auto px-4 sm:px-6">
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

                  <table className="w-full border-separate border-spacing-y-2">
                    <thead className="sr-only">
                      <tr>
                        <th scope="col">시간</th>
                        <th scope="col">가격</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white/70 rounded-xl">
                        <td className="text-gray-700 font-medium text-sm lg:text-base p-2 lg:p-3 rounded-l-xl">60분</td>
                        <td className={`font-bold ${currentTheme.lightText} text-sm lg:text-base p-2 lg:p-3 rounded-r-xl text-right`}>70,000원</td>
                      </tr>
                      <tr className="bg-white/70 rounded-xl">
                        <td className="text-gray-700 font-medium text-sm lg:text-base p-2 lg:p-3 rounded-l-xl">90분</td>
                        <td className={`font-bold ${currentTheme.lightText} text-sm lg:text-base p-2 lg:p-3 rounded-r-xl text-right`}>80,000원</td>
                      </tr>
                      <tr className="bg-white/70 rounded-xl">
                        <td className="text-gray-700 font-medium text-sm lg:text-base p-2 lg:p-3 rounded-l-xl">120분</td>
                        <td className={`font-bold ${currentTheme.lightText} text-sm lg:text-base p-2 lg:p-3 rounded-r-xl text-right`}>100,000원</td>
                      </tr>
                    </tbody>
                  </table>
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

                  <table className="w-full border-separate border-spacing-y-2">
                    <thead className="sr-only">
                      <tr>
                        <th scope="col">시간</th>
                        <th scope="col">가격</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white/70 rounded-xl">
                        <td className="text-gray-700 font-medium text-sm lg:text-base p-2 lg:p-3 rounded-l-xl">60분</td>
                        <td className={`font-bold ${currentTheme.lightText} text-sm lg:text-base p-2 lg:p-3 rounded-r-xl text-right`}>80,000원</td>
                      </tr>
                      <tr className="bg-white/70 rounded-xl">
                        <td className="text-gray-700 font-medium text-sm lg:text-base p-2 lg:p-3 rounded-l-xl">90분</td>
                        <td className={`font-bold ${currentTheme.lightText} text-sm lg:text-base p-2 lg:p-3 rounded-r-xl text-right`}>90,000원</td>
                      </tr>
                      <tr className="bg-white/70 rounded-xl">
                        <td className="text-gray-700 font-medium text-sm lg:text-base p-2 lg:p-3 rounded-l-xl">120분</td>
                        <td className={`font-bold ${currentTheme.lightText} text-sm lg:text-base p-2 lg:p-3 rounded-r-xl text-right`}>110,000원</td>
                      </tr>
                    </tbody>
                  </table>
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

                  <table className="w-full border-separate border-spacing-y-2">
                    <thead className="sr-only">
                      <tr>
                        <th scope="col">시간</th>
                        <th scope="col">가격</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white/70 rounded-xl">
                        <td className="text-gray-700 font-medium text-sm lg:text-base p-2 lg:p-3 rounded-l-xl">60분</td>
                        <td className={`font-bold ${currentTheme.lightText} text-sm lg:text-base p-2 lg:p-3 rounded-r-xl text-right`}>100,000원</td>
                      </tr>
                      <tr className="bg-white/70 rounded-xl">
                        <td className="text-gray-700 font-medium text-sm lg:text-base p-2 lg:p-3 rounded-l-xl">90분</td>
                        <td className={`font-bold ${currentTheme.lightText} text-sm lg:text-base p-2 lg:p-3 rounded-r-xl text-right`}>130,000원</td>
                      </tr>
                      <tr className="bg-white/70 rounded-xl">
                        <td className="text-gray-700 font-medium text-sm lg:text-base p-2 lg:p-3 rounded-l-xl">120분</td>
                        <td className={`font-bold ${currentTheme.lightText} text-sm lg:text-base p-2 lg:p-3 rounded-r-xl text-right`}>160,000원</td>
                      </tr>
                    </tbody>
                  </table>
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
          <div className="container mx-auto px-4 sm:px-6">
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
                  Service Guide
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
                  className="group relative overflow-hidden rounded-3xl shadow-lg transition-all duration-500 md:hover:-translate-y-2 md:hover:scale-105 md:hover:shadow-2xl"
                >
                  <div className="relative">
                    <Image
                      src={item.src || '/placeholder.svg'}
                      alt={`${city} 출장마사지 ${item.title} - 노마드출장마사지`}
                      width={400}
                      height={500}
                      className="h-72 w-full object-cover transition-transform duration-700 md:group-hover:scale-110 md:group-hover:brightness-110 lg:h-96"
                      style={{ objectPosition: 'center top' }}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    <div className="absolute inset-0 bg-white/0 transition-all duration-500 md:group-hover:bg-white/20"></div>

                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${item.gradient} opacity-100 transition-all duration-500 md:opacity-0 md:group-hover:opacity-100`}
                    ></div>

                    <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-white/10 opacity-100 transition-all duration-300 md:opacity-0 md:group-hover:opacity-100"></div>

                    <div className="absolute inset-0 flex translate-y-0 transform flex-col justify-end p-4 transition-all duration-300 md:translate-y-2 md:group-hover:translate-y-0 lg:p-6">
                      <div className="rounded-2xl border border-white/40 bg-white/90 p-4 opacity-100 shadow-lg backdrop-blur-sm transition-all duration-500 delay-100 md:opacity-0 md:group-hover:opacity-100 lg:p-6">
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
                      className="absolute right-4 top-4 hidden h-12 w-12 items-center justify-center rounded-full bg-white/80 opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 delay-200 md:flex md:group-hover:opacity-100"
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
          <div className="container mx-auto px-4 sm:px-6">
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
                {city}시 전지역에서 이용 가능한 {city}출장마사지 및 {city}출장홈타이 서비스
              </p>
            </div>

            {localGuide}

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
                      {areas.slice(3, 6).join(', ')} 등 읍면동은 실제 주소와 희망 시간을 확인한 뒤 <strong className={currentTheme.text}>{city}홈타이</strong> 방문 가능 일정을 안내합니다.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      상담 운영시간은 오후 7시~오전 4시이며, 접수 순서와 이동 동선에 따라 가능한 <strong className={currentTheme.text}>{city}출장타이마사지</strong> 시간을 안내합니다.
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
                      <strong className={currentTheme.text}>{city}출장마사지</strong>는 오후 7시~오전 4시로 운영됩니다.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      오후 8시부터 자정까지는 <strong className={currentTheme.text}>{city}홈타이</strong> 예약 문의가 특히 많습니다.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {city}시 전 지역 접수 순서와 이동 동선을 기준으로, 가능한 예약 시간을 빠르게 안내해드립니다.
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                {displayedFaqItems.map((item) => (
                  <div key={item.question} className="bg-white rounded-2xl p-4 lg:p-6 shadow-md">
                    <h4 className="font-bold text-gray-800 mb-2">{item.question}</h4>
                    <p className="text-gray-600 text-sm lg:text-base leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {relatedContentLinks.length > 0 && (
              <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg lg:p-8">
                <h3 className="text-2xl font-bold text-gray-800">{city} 예약 전 함께 볼 안내</h3>
                <p className="mt-2 text-gray-600">위치와 시간대에 맞는 예약 정보를 먼저 확인해보세요.</p>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  {relatedContentLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-2xl border border-slate-200 p-5 transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
                    >
                      <span className={`font-bold ${currentTheme.text}`}>{item.title}</span>
                      <span className="mt-2 block text-sm leading-6 text-gray-600">{item.description}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Related Areas Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-rose-50/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 lg:mb-16">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-rose-100 to-purple-100 rounded-full px-4 lg:px-6 py-2 lg:py-3 mb-4 lg:mb-6">
                <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-rose-600" />
                <span className="text-rose-800 font-semibold text-sm lg:text-base">
                  Other Areas
                </span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-6">
                인접 지역 출장마사지
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                현재 위치와 이동 동선을 확인해 경기 주요 서비스 지역의 가능한 일정을 안내합니다
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
              {relatedAreas.map((area) => (
                <Link key={area.slug} href={`/${area.slug}`}>
                  <Card className="bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 rounded-2xl overflow-hidden group border-2 border-transparent hover:border-rose-200">
                    <CardContent className="p-4 lg:p-5">
                      <div className={`w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br ${currentTheme.gradientFrom} ${currentTheme.gradientTo} rounded-xl flex items-center justify-center mx-auto mb-2 lg:mb-3 group-hover:scale-110 transition-transform duration-300`}>
                        <MapPin className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                      </div>
                      <h3 className="text-xs lg:text-sm font-bold text-gray-800 mb-1 text-center group-hover:text-rose-600 transition-colors duration-300">
                        {area.name} 출장마사지
                      </h3>
                      <p className="text-xs text-gray-600 text-center">
                        {area.fullName}
                      </p>
                      <div className="mt-2 text-center">
                        <span className="inline-flex items-center text-xs text-rose-600 font-medium group-hover:text-rose-700">
                          오후 7시~오전 4시
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
                  경기 주요 서비스 지역 예약 안내
                </h3>
                <p className="text-sm lg:text-base text-gray-600 mb-6">
                  지역별 방문 가능 시간 확인 · 100% 후불제 · 오후 7시~오전 4시 운영
                </p>
                <div className="flex flex-wrap gap-2 lg:gap-3 justify-center">
                  <Button asChild className={`h-auto min-h-11 bg-gradient-to-r ${currentTheme.gradientFrom} ${currentTheme.gradientTo} text-white`}>
                    <Link href="/service-areas">전체 서비스 지역 보기</Link>
                  </Button>
                  <Button asChild variant="outline" className="h-auto min-h-11">
                    <Link href="/about">예약 이용 안내</Link>
                  </Button>
                  {/* Course names are navigation aids, not structured price claims. */}
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
          <div className="container mx-auto px-4 sm:px-6">
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
                      asChild
                      className={`h-auto min-h-12 bg-white ${currentTheme.text} hover:bg-rose-50 px-6 lg:px-10 py-3 lg:py-4 text-lg lg:text-xl rounded-full font-bold shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto`}
                    >
                    <a href={PHONE_TEL} aria-label={`${city} 출장마사지 전화 예약`}>
                        <Phone className="w-5 h-5 mr-2" />
                        전화로 예약하기
                      </a>
                    </Button>
                    <Button
                      asChild
                      className="h-auto min-h-12 bg-green-500 hover:bg-green-600 text-white px-6 lg:px-10 py-3 lg:py-4 text-lg lg:text-xl rounded-full font-bold shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                    >
                      <a href={KAKAO_CHAT_URL} target="_blank" rel="noopener noreferrer" aria-label={`${city} 카카오톡 상담`}>
                        카카오톡 상담
                      </a>
                    </Button>
                  </div>

                  <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-4">
                    {['이천시', '경기도 광주시', '여주시', '용인시', '수원시'].map(
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
          <div className="container mx-auto px-4 sm:px-6">
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
                  <span>오후 7시~오전 4시 운영</span>
                  <span>•</span>
                  <span>100% 후불제</span>
                  <span>•</span>
                  <span>전문 관리사</span>
                </div>

                {/* 공식 채널 링크 */}
                <div className="flex flex-wrap gap-3 lg:gap-4 text-sm text-gray-400 mt-4">
                  {PRIMARY_SERVICE_AREAS.filter((area) => area.slug !== cityEn).map((area) => (
                    <Link key={area.slug} href={`/${area.slug}`} className={`hover:${currentTheme.text} transition-colors duration-200`}>
                      {area.name} 출장마사지
                    </Link>
                  ))}
                  <Link href="/service-areas" className={`hover:${currentTheme.text} transition-colors duration-200`}>전체 서비스 지역</Link>
                  <Link href="/about" className={`hover:${currentTheme.text} transition-colors duration-200`}>이용 안내</Link>
                </div>
              </div>
              <div className="text-center lg:text-right">
                <div
                  className={`text-xl lg:text-3xl font-bold ${currentTheme.text} mb-3 lg:mb-4`}
                >
                  010-8186-7771
                </div>
                <Button
                  asChild
                  className={`h-auto min-h-12 bg-gradient-to-r ${currentTheme.gradientFrom} ${currentTheme.gradientTo} ${currentTheme.hoverGradientFrom} ${currentTheme.hoverGradientTo} px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold text-sm lg:text-base transition-all duration-300 transform hover:scale-105`}
                >
                  <a href={PHONE_TEL} aria-label={`${city} 출장마사지 전화 예약`}>지금 예약하기</a>
                </Button>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
