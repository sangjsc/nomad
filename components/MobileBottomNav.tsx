"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, MapPin, Phone, BookOpen, Crown, ChevronUp } from "lucide-react"
import { useState } from "react"

const navItems = [
  {
    href: "/",
    label: "홈",
    icon: Home,
  },
  {
    label: "지역",
    icon: MapPin,
    isDropdown: true,
  },
  {
    href: "/blog",
    label: "블로그",
    icon: BookOpen,
  },
  {
    href: "tel:010-8186-7771",
    label: "예약",
    icon: Phone,
    isExternal: true,
  },
]

const locationItems = [
  { href: "/suwon", label: "수원" },
  { href: "/anyang", label: "안양" },
  { href: "/seongnam", label: "성남" },
  { href: "/ansan", label: "안산" },
  { href: "/gunpo", label: "군포" },
  { href: "/gwacheon", label: "과천" },
  { href: "/hanam", label: "하남" },
  { href: "/uiwang", label: "의왕" },
  { href: "/icheon", label: "이천" },
  { href: "/gwangju", label: "광주" },
  { href: "/yeoju", label: "여주" },
  { href: "/yongin", label: "용인" },
]

export default function MobileBottomNav() {
  const pathname = usePathname()
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false)

  const isLocationActive = locationItems.some(item => pathname === item.href)

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      {/* Location Dropdown */}
      {isLocationDropdownOpen && (
        <div className="absolute bottom-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-slate-200/50 shadow-lg">
          <div className="grid grid-cols-3 gap-2 p-4 max-h-64 overflow-y-auto">
            {locationItems.map((location) => (
              <Link
                key={location.href}
                href={location.href}
                onClick={() => setIsLocationDropdownOpen(false)}
                className={`flex items-center justify-center p-3 rounded-lg transition-all duration-200 active:scale-95 ${
                  pathname === location.href 
                    ? "bg-rose-100 text-rose-600" 
                    : "bg-slate-50 text-slate-700 hover:bg-slate-100"
                }`}
              >
                <span className="text-sm font-medium">{location.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Main Navigation */}
      <div className="bg-white/95 backdrop-blur-md border-t border-slate-200/50 shadow-lg">
        <div className="grid grid-cols-4 px-2 py-2">
          {navItems.map((item, index) => {
            const IconComponent = item.icon
            const isActive = item.href ? pathname === item.href : isLocationActive
            const isPhoneCall = item.isExternal
            const isDropdown = item.isDropdown
            
            if (isPhoneCall) {
              return (
                <button
                  key={index}
                  onClick={() => window.open(item.href)}
                  className="flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-200 active:scale-95"
                >
                  <div className="bg-gradient-to-br from-rose-500 to-rose-600 p-2 rounded-xl shadow-lg">
                    <IconComponent className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-xs font-medium text-rose-600 mt-1">
                    {item.label}
                  </span>
                </button>
              )
            }

            if (isDropdown) {
              return (
                <button
                  key={index}
                  onClick={() => setIsLocationDropdownOpen(!isLocationDropdownOpen)}
                  className={`flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-200 active:scale-95 ${
                    isActive ? "bg-rose-50" : "hover:bg-slate-50"
                  }`}
                >
                  <div className={`relative p-2 rounded-xl transition-colors ${
                    isActive 
                      ? "bg-rose-100" 
                      : "bg-slate-100"
                  }`}>
                    <IconComponent className={`w-4 h-4 ${
                      isActive 
                        ? "text-rose-600" 
                        : "text-slate-600"
                    }`} />
                    <ChevronUp className={`w-3 h-3 absolute -top-1 -right-1 transition-transform duration-200 ${
                      isLocationDropdownOpen ? "rotate-180" : ""
                    } ${
                      isActive 
                        ? "text-rose-600" 
                        : "text-slate-600"
                    }`} />
                  </div>
                  <span className={`text-xs font-medium mt-1 ${
                    isActive 
                      ? "text-rose-600" 
                      : "text-slate-600"
                  }`}>
                    {item.label}
                  </span>
                </button>
              )
            }

            return (
              <Link
                key={index}
                href={item.href}
                className={`flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-200 active:scale-95 ${
                  isActive ? "bg-rose-50" : "hover:bg-slate-50"
                }`}
              >
                <div className={`p-2 rounded-xl transition-colors ${
                  isActive 
                    ? "bg-rose-100" 
                    : "bg-slate-100"
                }`}>
                  <IconComponent className={`w-4 h-4 ${
                    isActive 
                      ? "text-rose-600" 
                      : "text-slate-600"
                  }`} />
                </div>
                <span className={`text-xs font-medium mt-1 ${
                  isActive 
                    ? "text-rose-600" 
                    : "text-slate-600"
                }`}>
                  {item.label}
                </span>
              </Link>
            )
          })}
        </div>
      </div>
      
      {/* Safe area for notch devices */}
      <div className="bg-white h-safe-area-inset-bottom"></div>
    </div>
  )
}