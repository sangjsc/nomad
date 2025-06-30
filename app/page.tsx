import type { Metadata } from "next"
import ClientPage from "./ClientPage"

export const metadata: Metadata = {
  title: "노마드출장마사지 - 24시간 예약 가능",
  description: "이천, 광주, 여주 출장마사지 전문 · 20대 관리사 · 후불 안심결제 시스템",
}

export default function HomePage() {
  return <ClientPage />
}
