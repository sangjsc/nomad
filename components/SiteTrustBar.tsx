import Link from "next/link"
import {
  CONSULTATION_HOURS,
  PAYMENT_POLICY,
  PHONE_DISPLAY,
  PHONE_TEL,
  SERVICE_INFORMATION_UPDATED,
} from "@/lib/site"

export default function SiteTrustBar() {
  return (
    <aside className="border-t border-slate-800 bg-slate-950 text-slate-300" aria-label="공식 운영 정보">
      <div className="container mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="font-semibold text-white">노마드출장마사지 공식 운영 정보</p>
          <p className="mt-1 text-sm leading-6 text-slate-400">
            {CONSULTATION_HOURS} 상담 · {PAYMENT_POLICY} · 정보 확인일{" "}
            <time dateTime={SERVICE_INFORMATION_UPDATED}>{SERVICE_INFORMATION_UPDATED}</time>
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-3 text-sm" aria-label="공식 안내 링크">
          <Link href="/about" className="hover:text-white">운영·이용 안내</Link>
          <Link href="/contact" className="hover:text-white">문의·예약</Link>
          <Link href="/service-areas" className="hover:text-white">서비스 지역</Link>
          <a href={PHONE_TEL} className="font-semibold text-rose-300 hover:text-rose-200">
            {PHONE_DISPLAY}
          </a>
        </nav>
      </div>
    </aside>
  )
}
