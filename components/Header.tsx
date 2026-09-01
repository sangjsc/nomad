import Link from "next/link"
import { ChevronDown, Crown, Heart, MapPin, Menu, Phone, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PHONE_DISPLAY, PHONE_TEL, PRIMARY_SERVICE_AREAS, SERVICE_AREAS } from "@/lib/site"

const priorityNavLinks = [
  { href: "/", label: "홈", icon: Crown },
  ...PRIMARY_SERVICE_AREAS.map((area) => ({
    href: `/${area.slug}`,
    label: area.name,
    icon: undefined,
  })),
]

const utilityNavLinks = [
  { href: "/", label: "홈", icon: Crown },
  { href: "/service-areas", label: "전체지역 안내", icon: MapPin },
  { href: "/about", label: "이용 안내", icon: Sparkles },
  { href: "/blog", label: "블로그", icon: Heart },
]

export default function Header() {
  return (
    <>
      <div className="hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-2 text-white md:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-rose-300" />
                <span className="text-slate-200">이천 · 광주 · 여주 · 용인 · 수원 · 화성 · 평택 · 시흥 · 부천 · 광명 외 경기권 다수 지역</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="h-4 w-4 text-rose-300" />
                <span className="text-slate-200">오후 7시~오전 4시 상담 · 서비스 완료 후 현장 결제</span>
              </div>
            </div>
            <a href={PHONE_TEL} className="flex items-center space-x-2 text-slate-200 transition-colors hover:text-white">
              <Phone className="h-4 w-4 text-rose-300" />
              <span className="font-medium">{PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-[70] border-b border-slate-200/60 bg-white shadow-sm md:bg-white/95 md:backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between md:h-20">
            <Link href="/" aria-label="노마드출장마사지 홈으로 이동" className="flex min-w-0 items-center space-x-3">
              <div className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-rose-600 shadow-lg md:h-12 md:w-12">
                  <Crown className="h-5 w-5 text-white md:h-6 md:w-6" />
                </div>
                <div className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-500">
                  <Sparkles className="h-2 w-2 text-white" />
                </div>
              </div>
              <div className="min-w-0">
                <p className="truncate bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-base font-bold text-transparent sm:text-xl md:text-2xl">
                  노마드출장마사지
                </p>
                <p className="-mt-1 hidden text-xs text-slate-500 sm:block md:text-sm">Premium Massage Service</p>
              </div>
            </Link>

            <nav aria-label="주요 메뉴" className="hidden items-center space-x-1 xl:flex">
              {priorityNavLinks.map((link) => {
                const IconComponent = link.icon
                return (
                  <Link key={link.href} href={link.href} className="group rounded-full px-3 py-2 transition-colors hover:bg-slate-50">
                    <span className="flex items-center space-x-2">
                      {IconComponent ? <IconComponent className="h-4 w-4 text-rose-500" /> : null}
                      <span className="whitespace-nowrap text-sm font-medium text-slate-700 group-hover:text-slate-900">{link.label}</span>
                    </span>
                  </Link>
                )
              })}

              <details className="group relative">
                <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 [&::-webkit-details-marker]:hidden">
                  <MapPin className="h-4 w-4 text-rose-500" aria-hidden="true" />
                  <span className="whitespace-nowrap">전체 22개 지역</span>
                  <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" aria-hidden="true" />
                </summary>
                <div className="absolute right-0 top-full mt-3 w-[36rem] rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl">
                  <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-3">
                    <div>
                      <p className="font-bold text-slate-900">경기 지역별 출장마사지</p>
                      <p className="mt-1 text-xs text-slate-500">원하는 지역 페이지로 바로 이동하세요</p>
                    </div>
                    <Link href="/service-areas" className="text-sm font-semibold text-rose-600 hover:text-rose-700">
                      전체 안내 보기
                    </Link>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {SERVICE_AREAS.map((area) => (
                      <Link
                        key={area.slug}
                        href={`/${area.slug}`}
                        title={`${area.fullName} 출장마사지 페이지`}
                        className="flex min-h-10 items-center rounded-xl border border-slate-100 bg-slate-50 px-3 text-sm font-medium text-slate-700 transition-colors hover:border-rose-200 hover:bg-rose-50 hover:text-rose-700"
                      >
                        {area.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </details>

              <Link href="/about" className="group rounded-full px-3 py-2 transition-colors hover:bg-slate-50">
                <span className="flex items-center space-x-2">
                  <Sparkles className="h-4 w-4 text-rose-500" />
                  <span className="whitespace-nowrap text-sm font-medium text-slate-700 group-hover:text-slate-900">이용 안내</span>
                </span>
              </Link>
              <Link href="/blog" className="group rounded-full px-3 py-2 transition-colors hover:bg-slate-50">
                <span className="flex items-center space-x-2">
                  <Heart className="h-4 w-4 text-rose-500" />
                  <span className="whitespace-nowrap text-sm font-medium text-slate-700 group-hover:text-slate-900">블로그</span>
                </span>
              </Link>
            </nav>

            <div className="hidden md:block">
              <Button asChild className="rounded-full bg-gradient-to-r from-rose-500 to-rose-600 px-6 py-3 font-semibold text-white shadow-lg hover:from-rose-600 hover:to-rose-700">
                <a href={PHONE_TEL}><Phone className="mr-2 h-4 w-4" />지금 예약</a>
              </Button>
            </div>

            <details className="relative shrink-0 xl:hidden">
              <summary aria-label="전체 메뉴 열기" className="list-none cursor-pointer rounded-md p-3 text-slate-700 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 [&::-webkit-details-marker]:hidden">
                <Menu className="h-6 w-6" />
              </summary>
              <div className="absolute right-0 top-full mt-2 max-h-[calc(100vh-9.5rem)] w-[min(22rem,calc(100vw-2rem))] overflow-y-auto overscroll-contain rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl md:max-h-[calc(100vh-8rem)]">
                <nav aria-label="모바일 전체 메뉴">
                  <div className="mb-3 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-slate-900">전체 22개 지역</p>
                      <p className="mt-0.5 text-xs text-slate-500">지역을 선택하세요</p>
                    </div>
                    <Link href="/service-areas" className="text-xs font-semibold text-rose-600 hover:text-rose-700">
                      전체 안내
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {SERVICE_AREAS.map((area) => (
                      <Link
                        key={area.slug}
                        href={`/${area.slug}`}
                        title={`${area.fullName} 출장마사지 페이지`}
                        className={`flex min-h-11 items-center rounded-xl border px-3 text-sm font-medium transition-colors ${
                          area.tier === 1
                            ? "border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100"
                            : "border-slate-100 bg-slate-50 text-slate-700 hover:border-rose-200 hover:bg-rose-50"
                        }`}
                      >
                        {area.name}
                      </Link>
                    ))}
                  </div>

                  <div className="mt-4 space-y-1 border-t border-slate-100 pt-3">
                  {utilityNavLinks.map((link) => {
                    const IconComponent = link.icon
                    return (
                      <Link key={link.href} href={link.href} className="flex min-h-11 items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50">
                        {IconComponent ? <IconComponent className="h-4 w-4 text-rose-500" /> : null}
                        <span>{link.label}</span>
                      </Link>
                    )
                  })}
                  </div>
                  <Button asChild size="sm" className="mt-2 min-h-11 w-full rounded-lg bg-gradient-to-r from-rose-500 to-rose-600 font-semibold text-white hover:from-rose-600 hover:to-rose-700">
                    <a href={PHONE_TEL}><Phone className="mr-2 h-4 w-4" />예약하기</a>
                  </Button>
                </nav>
              </div>
            </details>
          </div>
        </div>
      </header>
    </>
  )
}
