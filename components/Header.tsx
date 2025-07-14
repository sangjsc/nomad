"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Phone, MapPin, Menu, X, Crown, Sparkles, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const navLinks = [
  { href: "/", label: "홈", icon: Crown },
  { href: "/suwon", label: "수원" },
  { href: "/ansan", label: "안산" },
  { href: "/seongnam", label: "성남" },
  { href: "/anyang", label: "안양" },
  { href: "/gwacheon", label: "과천" },
  { href: "/uiwang", label: "의왕" },
  { href: "/gunpo", label: "군포" },
  { href: "/hanam", label: "하남" },
  { href: "/icheon", label: "이천" },
  { href: "/gwangju", label: "광주" },
  { href: "/yeoju", label: "여주" },
  { href: "/yongin", label: "용인" },
  { href: "/blog", label: "블로그", icon: Heart },
]

const getPageTheme = (pathname: string) => {
  if (pathname === '/seongnam') return 'blue'
  if (pathname === '/anyang') return 'rose'
  if (pathname === '/gwacheon') return 'purple'
  if (pathname === '/uiwang') return 'blue'
  if (pathname === '/gunpo') return 'rose'
  if (pathname === '/hanam') return 'green'
  return 'rose' // default theme
}

const themeColors = {
  rose: {
    primary: 'from-rose-500 to-rose-600',
    hover: 'hover:from-rose-600 hover:to-rose-700',
    accent: 'text-rose-300',
    border: 'border-rose-300',
    text: 'text-rose-700',
    bg: 'bg-rose-50'
  },
  blue: {
    primary: 'from-blue-500 to-blue-600', 
    hover: 'hover:from-blue-600 hover:to-blue-700',
    accent: 'text-blue-300',
    border: 'border-blue-300',
    text: 'text-blue-700',
    bg: 'bg-blue-50'
  },
  purple: {
    primary: 'from-purple-500 to-purple-600',
    hover: 'hover:from-purple-600 hover:to-purple-700', 
    accent: 'text-purple-300',
    border: 'border-purple-300',
    text: 'text-purple-700',
    bg: 'bg-purple-50'
  },
  green: {
    primary: 'from-green-500 to-green-600',
    hover: 'hover:from-green-600 hover:to-green-700',
    accent: 'text-green-300', 
    border: 'border-green-300',
    text: 'text-green-700',
    bg: 'bg-green-50'
  }
}

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const currentTheme = getPageTheme(pathname)
  const colors = themeColors[currentTheme]

  return (
    <>
      {/* Premium Top Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <MapPin className={`w-4 h-4 ${colors.accent}`} />
                <span className="text-slate-200">수원 · 안산 · 성남 · 안양 · 과천 · 의왕 · 군포 · 하남 · 이천 · 광주 · 여주 · 용인</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className={`w-4 h-4 ${colors.accent}`} />
                <span className="text-slate-200">24시간 운영 · 100% 후불제</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className={`w-4 h-4 ${colors.accent}`} />
              <a 
                href="tel:010-8186-7771" 
                className={`text-slate-200 hover:text-white font-medium transition-colors`}
              >
                010-8186-7771
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br ${colors.primary} rounded-xl flex items-center justify-center shadow-lg`}>
                  <Crown className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center">
                  <Sparkles className="w-2 h-2 text-white" />
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                  노마드출장마사지
                </h1>
                <p className="text-xs md:text-sm text-slate-500 -mt-1">Premium Massage Service</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {navLinks.map((link) => {
                const IconComponent = link.icon
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`group relative px-2 py-2 rounded-full transition-all duration-300 ${
                      isActive 
                        ? `${colors.bg} ${colors.text}` 
                        : 'hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      {IconComponent && <IconComponent className={`w-4 h-4 ${isActive ? colors.text : 'text-rose-500'}`} />}
                      <span className={`font-medium text-sm whitespace-nowrap ${
                        isActive 
                          ? colors.text 
                          : 'text-slate-700 group-hover:text-slate-900'
                      }`}>
                        {link.label}
                      </span>
                    </div>
                    <div className={`absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r ${colors.primary} rounded-full transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`} />
                  </Link>
                )
              })}
            </nav>

            {/* Call Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                size="lg"
                className={`bg-gradient-to-r ${colors.primary} ${colors.hover} text-white font-semibold rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                onClick={() => window.open("tel:010-8186-7771")}
              >
                <Phone className="w-4 h-4 mr-2" />
                지금 예약
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-slate-700" />
              ) : (
                <Menu className="w-6 h-6 text-slate-700" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white/98 backdrop-blur-md">
            <div className="container mx-auto px-4 py-3">
              <nav className="space-y-1">
                {navLinks.map((link) => {
                  const IconComponent = link.icon
                  const isActive = pathname === link.href
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors group ${
                        isActive 
                          ? `${colors.bg} ${colors.text}` 
                          : 'hover:bg-slate-50'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {IconComponent && (
                        <IconComponent className={`w-4 h-4 ${isActive ? colors.text : 'text-rose-500'}`} />
                      )}
                      <span className={`font-medium text-sm ${
                        isActive 
                          ? colors.text 
                          : 'text-slate-700 group-hover:text-slate-900'
                      }`}>
                        {link.label}
                      </span>
                    </Link>
                  )
                })}
                
                {/* Mobile Contact Info */}
                <div className="pt-2 border-t border-slate-200 mt-3">
                  <Button
                    size="sm"
                    className={`w-full bg-gradient-to-r ${colors.primary} ${colors.hover} text-white font-semibold rounded-lg py-2 shadow-lg`}
                    onClick={() => {
                      window.open("tel:010-8186-7771")
                      setIsMenuOpen(false)
                    }}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    예약하기
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
