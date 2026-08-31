import { MessageCircle, Phone } from "lucide-react"
import { KAKAO_CHAT_URL, PHONE_TEL } from "@/lib/site"

export default function MobileBottomNav() {
  return (
    <nav
      aria-label="빠른 예약 및 상담"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-slate-200/80 bg-white shadow-[0_-8px_24px_rgba(15,23,42,0.12)] md:hidden"
    >
      <div className="grid grid-cols-2 gap-2 px-3 pb-[calc(0.5rem+env(safe-area-inset-bottom))] pt-2">
        <a
          href={PHONE_TEL}
          aria-label="전화로 즉시 예약"
          className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 px-4 text-base font-bold text-white shadow-md transition-transform active:scale-[0.98]"
        >
          <Phone className="h-5 w-5" aria-hidden="true" />
          전화 예약
        </a>
        <a
          href={KAKAO_CHAT_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="카카오톡으로 상담"
          className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#FEE500] px-4 text-base font-bold text-[#191919] shadow-md transition-transform active:scale-[0.98]"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          카톡 상담
        </a>
      </div>
    </nav>
  )
}
