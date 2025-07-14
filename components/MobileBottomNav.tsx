"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, MapPin, Phone, BookOpen, Crown } from "lucide-react"

const navItems = [
  {
    href: "/",
    label: "홈",
    icon: Home,
  },
  {
    href: "/seongnam",
    label: "성남",
    icon: MapPin,
  },
  {
    href: "/anyang", 
    label: "안양",
    icon: MapPin,
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

export default function MobileBottomNav() {
  const pathname = usePathname()

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      {/* Background */}
      <div className="bg-white/95 backdrop-blur-md border-t border-slate-200/50 shadow-lg">
        <div className="grid grid-cols-5 px-2 py-2">
          {navItems.map((item) => {
            const IconComponent = item.icon
            const isActive = pathname === item.href
            const isPhoneCall = item.isExternal
            
            if (isPhoneCall) {
              return (
                <button
                  key={item.href}
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

            return (
              <Link
                key={item.href}
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