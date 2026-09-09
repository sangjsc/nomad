import type { Metadata } from "next";
import Link from "next/link";
import LocationPage from "../components/LocationPage";
import { SERVICE_INFORMATION_UPDATED } from "@/lib/site";

export const metadata: Metadata = {
  title: "이천출장마사지 | 타이·홈타이 7만원부터 후불제",
  description: "이천출장마사지·홈타이, 타이 60분 7만원부터. 오후 7시~오전 4시 상담하며 출장·주차·야간 추가비 없이 서비스를 받으신 뒤 현장에서 결제합니다.",
  openGraph: {
    title: "이천출장마사지 | 타이·홈타이 7만원부터 후불제",
    description: "이천출장마사지·홈타이, 타이 60분 7만원부터. 오후 7시~오전 4시 상담하며 출장·주차·야간 추가비 없이 서비스를 받으신 뒤 현장에서 결제합니다.",
    url: "https://www.nomadthai.kr/icheon",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/og/icheon",
        width: 1200,
        height: 630,
        alt: "이천출장마사지 - 노마드출장마사지 오후 7시~오전 4시 서비스",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "이천출장마사지 | 타이·홈타이 7만원부터 후불제",
    description: "이천출장마사지·홈타이, 타이 60분 7만원부터. 오후 7시~오전 4시 상담하며 출장·주차·야간 추가비 없이 서비스를 받으신 뒤 현장에서 결제합니다.",
    images: ["/og/icheon"],
  },
  alternates: {
    canonical: "https://www.nomadthai.kr/icheon",
  },
};

export default function IcheonPage() {
  return (
    <LocationPage
      city="이천"
      cityEn="icheon"
      heroTitle="이천 출장마사지·홈타이 예약 안내"
      theme="blue"
      heroImage="/images/location-7.jpg"
      teamImages={[
        { src: '/images/location-8.jpg', title: '방문 관리', desc: "원하는 강도를 편하게 말씀해주세요", gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-9.jpg', title: '코스 안내', desc: '코스가 고민되면 차이부터 물어보세요', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-1.jpg', title: '예약 안내', desc: '받으실 주소와 시간을 먼저 알려주세요', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="이천에서 타이·아로마·스웨디시 마사지를 예약하실 수 있습니다. 타이 60분은 7만원부터이며, 상담시간은 오후 7시~오전 4시입니다. 주소와 받고 싶은 시간을 먼저 알려주세요."
      areas={["중리동", "창전동", "증포동", "관고동", "부발읍", "장호원읍", "마장면", "신둔면", "백사면", "호법면", "대월면", "모가면", "설성면", "율면"]}
      latitude="37.27221"
      longitude="127.43513"
      intro={
        <>
          <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 rounded-lg">
            <p className="text-lg font-semibold text-gray-800 leading-relaxed">
              <strong className="text-blue-600">이천 중리동·창전동·증포동·부발읍 등</strong>에서 받으실 주소와 시간을 알려주세요.
            </p>
          </div>
          <p>
            집에서 편하게 받고 싶으신가요? 부발·장호원읍, 마장·신둔·백사면에서도 도로명 주소와 건물명을 보내주시면 방문할 수 있는지 확인합니다. 호텔이나 숙소에 계시면 외부 방문객 출입이 되는지 먼저 물어봐주세요.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            타이·아로마·스웨디시 중 원하는 코스를 골라주세요. 코스가 고민되면 이용 시간과 선호하는 강도부터 말씀해주셔도 됩니다. 코스별 차이와 금액을 확인한 뒤 예약하시면 됩니다. 예약금 없이 마사지를 받으신 후 현장에서 결제합니다.
          </p>
        </>
      }
      localGuide={
        <div className="mb-12 rounded-3xl border border-blue-100 bg-white p-6 shadow-xl lg:p-10">
          <div className="max-w-3xl">
            <p className="font-semibold text-blue-600">이천 방문 예약</p>
            <h2 className="mt-2 text-2xl font-bold text-gray-900 lg:text-4xl">이천에서 예약할 때, 이것만 알려주세요</h2>
            <p className="mt-4 leading-7 text-gray-600">
              받으실 주소와 원하는 시간을 먼저 보내주세요. 아파트나 오피스텔은 출입 방법을, 숙소는 외부 방문객 출입이 되는지 확인해주세요.
            </p>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-3 rounded-2xl border border-blue-100 bg-blue-50 p-4 text-sm sm:grid-cols-4 sm:p-5">
            <div><span className="block text-slate-500">상담시간</span><strong className="mt-1 block text-slate-950">19:00~04:00</strong></div>
            <div><span className="block text-slate-500">시작가격</span><strong className="mt-1 block text-slate-950">타이 60분 70,000원</strong></div>
            <div><span className="block text-slate-500">결제</span><strong className="mt-1 block text-slate-950">서비스 후 현장 결제</strong></div>
            <div><span className="block text-slate-500">정보 확인일</span><strong className="mt-1 block text-slate-950"><time dateTime={SERVICE_INFORMATION_UPDATED}>{SERVICE_INFORMATION_UPDATED}</time></strong></div>
          </div>
          <div className="mt-4 flex flex-wrap gap-4 text-sm font-semibold">
            <Link href="/contact" className="text-blue-700 hover:text-blue-900">예약 문의하기</Link>
            <Link href="/about" className="text-blue-700 hover:text-blue-900">노마드 이용 방법</Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl bg-blue-50 p-5">
              <h3 className="font-bold text-gray-900">창전·증포·중리·관고동</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">자택이나 오피스텔에서 받으실 때는 건물명과 공동현관 출입 방법을 알려주세요. 숙소라면 외부 방문객이 객실에 들어갈 수 있어야 합니다.</p>
            </article>
            <article className="rounded-2xl bg-indigo-50 p-5">
              <h3 className="font-bold text-gray-900">부발읍·부발역·마장면</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">부발역 근처라면 역 이름과 함께 건물명도 알려주세요. 부발읍이나 마장면의 다른 곳은 도로명 주소를 보내주시면 됩니다.</p>
            </article>
            <article className="rounded-2xl bg-cyan-50 p-5">
              <h3 className="font-bold text-gray-900">장호원읍과 남부 읍·면</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">장호원읍과 대월·모가·설성·율면도 먼저 주소를 보내주세요. 당일 예약은 방문할 수 있는 시간을 확인한 뒤 잡습니다.</p>
            </article>
            <article className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-bold text-gray-900">신둔·백사·호법면</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">길을 찾기 어려운 곳이라면 가까운 건물이나 표지를 덧붙여주세요. 주차 장소와 들어가는 방법도 함께 알려주시면 좋습니다.</p>
            </article>
          </div>

          <div className="mt-8 rounded-2xl bg-slate-900 p-6 text-white">
            <h3 className="text-xl font-bold">예약할 때 먼저 알려주실 4가지</h3>
            <ol className="mt-4 grid gap-3 text-sm leading-6 text-slate-200 md:grid-cols-2">
              <li><strong className="text-white">1. 위치</strong> — 읍면동, 건물명 또는 숙소명</li>
              <li><strong className="text-white">2. 장소</strong> — 자택·오피스텔·호텔과 출입 방법</li>
              <li><strong className="text-white">3. 코스</strong> — 원하는 관리 방식과 이용 시간</li>
              <li><strong className="text-white">4. 일정</strong> — 희망 시간과 가능한 대체 시간</li>
            </ol>
          </div>
        </div>
      }
      faqItems={[
        {
          question: "이천 읍·면 지역도 문의해도 되나요?",
          answer: "네. 중리동·창전동·증포동·관고동과 부발읍·장호원읍, 8개 면 모두 주소를 보내주시면 됩니다. 다만 원하는 시간에 방문할 수 있는지는 예약 전에 확인해주세요.",
        },
        {
          question: "이천역이나 부발역 근처 오피스텔도 되나요?",
          answer: "주소와 건물명을 알려주시면 방문 여부를 확인합니다. 공동현관 출입 방법과 방문 등록이 필요한지도 함께 알려주세요.",
        },
        {
          question: "이천 호텔이나 숙소에서도 받을 수 있나요?",
          answer: "외부 방문객의 객실 출입이 허용되는 숙소라면 문의하실 수 있습니다. 예약 전에 숙소 측에 확인해주세요.",
        },
        {
          question: "장호원읍이나 율면도 오늘 예약할 수 있나요?",
          answer: "당일 문의도 받습니다. 주소와 원하는 시간을 알려주시면 방문할 수 있는지 확인해드립니다. 다른 시간도 괜찮으시면 함께 말씀해주세요.",
        },
        {
          question: "이천출장마사지 상담은 몇 시까지 하나요?",
          answer: "오후 7시부터 다음 날 오전 4시까지입니다. 늦은 시간에도 문의하실 수 있지만, 원하는 시간의 예약 가능 여부는 별도로 확인해주세요.",
        },
        {
          question: "먼저 입금해야 하나요?",
          answer: "아니요. 예약금이나 선입금은 없습니다. 서비스를 받으신 뒤 예약할 때 확인한 금액을 현장에서 결제하시면 됩니다.",
        },
      ]}
      relatedAreaSlugs={["gwangju", "yeoju", "anseong"]}
      relatedContentLinks={[
        {
          href: "/blog/icheon-eup-myeon-booking-guide",
          title: "이천 읍·면에서 주소 보내는 법",
          description: "장호원·부발·마장·신둔·백사에서 건물 입구까지 알려주기",
        },
        {
          href: "/blog/icheon-massage-guide",
          title: "이천 호텔·숙소에서 예약하기",
          description: "외부 방문객 출입이 되는지 먼저 확인해주세요",
        },
        {
          href: "/blog/icheon-night-booking-checklist",
          title: "이천 밤 10시 이후에 문의하려면",
          description: "늦은 시간에 예약할 때 미리 알아둘 내용",
        },
      ]}
      outro={
        <>
          <p>
            예약을 원하시면 전화나 카카오톡으로 주소와 시간을 보내주세요. 방문 가능 여부를 확인하고 코스와 금액을 함께 정합니다. 이천 어느 지역이든 출장·주차·야간 추가비는 없습니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">중리동 · 창전동 · 증포동 · 관고동 · 부발읍 · 장호원읍 · 마장면 · 신둔면 · 백사면 · 호법면 · 대월면 · 모가면 · 설성면 · 율면</div>
        </>
      }
    />
  );
}
