import type { Metadata } from "next";
import Link from "next/link";
import LocationPage from "../components/LocationPage";
import { SERVICE_INFORMATION_UPDATED } from "@/lib/site";

export const metadata: Metadata = {
  title: "이천출장마사지 | 타이·홈타이 7만원부터 후불제",
  description: "이천출장마사지·홈타이, 집과 숙소로 직접 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없이 서비스 후 현장 결제. 오후 7시~오전 4시 상담.",
  openGraph: {
    title: "이천출장마사지 | 타이·홈타이 7만원부터 후불제",
    description: "이천출장마사지·홈타이, 집과 숙소로 직접 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없이 서비스 후 현장 결제. 오후 7시~오전 4시 상담.",
    url: "https://www.nomadthai.kr/icheon",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/og/icheon",
        width: 1200,
        height: 630,
        alt: "이천출장마사지 - 노마드출장마사지 오후 7시~오전 4시 상담",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "이천출장마사지 | 타이·홈타이 7만원부터 후불제",
    description: "이천출장마사지·홈타이, 집과 숙소로 직접 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없이 서비스 후 현장 결제. 오후 7시~오전 4시 상담.",
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
      heroTitle="이천 출장마사지·홈타이"
      theme="blue"
      heroImage="/images/location-7.jpg"
      teamImages={[
        { src: '/images/location-8.jpg', title: '방문 마사지', desc: "집·오피스텔·숙소로 직접 방문", gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-9.jpg', title: '마사지 코스', desc: '타이·아로마·스웨디시 60·90·120분', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-1.jpg', title: '후불 결제', desc: '예약금 없이 서비스 후 현장 결제', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="이천의 집과 숙소에서 즐기는 타이·아로마·스웨디시 마사지. 타이 60분 7만원부터, 출장·주차·야간 추가비 없이 서비스가 끝난 뒤 결제합니다."
      areas={["중리동", "창전동", "증포동", "관고동", "부발읍", "장호원읍", "마장면", "신둔면", "백사면", "호법면", "대월면", "모가면", "설성면", "율면"]}
      latitude="37.27221"
      longitude="127.43513"
      intro={
        <>
          <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 rounded-lg">
            <p className="text-lg font-semibold text-gray-800 leading-relaxed">
              <strong className="text-blue-600">이천 중리동·창전동·증포동·부발읍 등</strong>으로 노마드가 직접 찾아갑니다.
            </p>
          </div>
          <p>
            부발·장호원읍과 마장·신둔·백사면까지. 이천 시내뿐 아니라 읍·면 지역의 자택과 오피스텔에도 직접 방문합니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            타이는 60분 7만원, 아로마는 8만원, 스웨디시는 10만원부터 시작합니다. 각 코스는 60·90·120분으로 구성되며, 선호하는 강도에 맞춰 진행합니다. 예약금 없이 서비스 후 현장에서 결제합니다.
          </p>
        </>
      }
      localGuide={
        <div className="mb-12 rounded-3xl border border-blue-100 bg-white p-6 shadow-xl lg:p-10">
          <div className="max-w-3xl">
            <p className="font-semibold text-blue-600">이천 방문 예약</p>
            <h2 className="mt-2 text-2xl font-bold text-gray-900 lg:text-4xl">이천 도심부터 읍·면까지 방문</h2>
            <p className="mt-4 leading-7 text-gray-600">
              방문 일정은 주소·건물명·희망 시간을 기준으로 상담합니다. 아파트·오피스텔은 출입 방법이 필요하며, 호텔·숙소는 외부 방문객의 객실 출입이 허용되어야 합니다.
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
              <p className="mt-2 text-sm leading-6 text-gray-600">이천 도심의 자택과 오피스텔로 방문합니다. 타이·아로마·스웨디시 모두 동일한 공개 가격을 적용합니다.</p>
            </article>
            <article className="rounded-2xl bg-indigo-50 p-5">
              <h3 className="font-bold text-gray-900">부발읍·부발역·마장면</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">부발역 인근과 부발읍·마장면도 방문 예약을 받습니다. 역 이름보다 도로명 주소와 건물명이 정확한 방문 기준입니다.</p>
            </article>
            <article className="rounded-2xl bg-cyan-50 p-5">
              <h3 className="font-bold text-gray-900">장호원읍과 남부 읍·면</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">장호원읍과 대월·모가·설성·율면까지 예약 상담을 진행합니다. 당일 예약은 가능한 방문 일정에 따라 접수합니다.</p>
            </article>
            <article className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-bold text-gray-900">신둔·백사·호법면</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">신둔·백사·호법면도 출장·주차·야간 추가비가 없습니다. 길을 찾기 어려운 입구는 주변 건물이나 표지를 기준으로 안내합니다.</p>
            </article>
          </div>

          <div className="mt-8 rounded-2xl bg-slate-900 p-6 text-white">
            <h3 className="text-xl font-bold">예약 접수 항목</h3>
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
          question: "이천 읍·면 지역도 방문하나요?",
          answer: "네. 중리·창전·증포·관고동과 부발·장호원읍, 8개 면 모두 방문 예약을 받습니다. 방문 시간은 주소와 당일 예약 일정에 따라 정합니다.",
        },
        {
          question: "이천역이나 부발역 근처 오피스텔도 되나요?",
          answer: "이천역·부발역 인근 오피스텔도 예약을 받습니다. 주소와 건물명, 공동현관·방문 등록 절차를 기준으로 방문 일정을 안내합니다.",
        },
        {
          question: "이천 호텔이나 숙소에서도 받을 수 있나요?",
          answer: "외부 방문객의 객실 출입이 허용되는 호텔·숙소에서 이용할 수 있습니다. 숙소의 출입 규정은 예약 전에 확인이 필요합니다.",
        },
        {
          question: "장호원읍이나 율면도 오늘 예약할 수 있나요?",
          answer: "장호원읍과 율면도 당일 예약 상담을 받습니다. 실제 방문 시간은 주소와 예약 현황에 따라 안내합니다.",
        },
        {
          question: "이천출장마사지 상담은 몇 시까지 하나요?",
          answer: "상담시간은 오후 7시부터 다음 날 오전 4시까지입니다. 늦은 시간 예약도 상담하며, 방문 일정은 예약 현황에 따라 정합니다.",
        },
        {
          question: "먼저 입금해야 하나요?",
          answer: "예약금과 선입금은 없습니다. 서비스를 받은 뒤 예약 시 안내한 금액을 현장에서 결제합니다.",
        },
      ]}
      relatedAreaSlugs={["gwangju", "yeoju", "anseong"]}
      relatedContentLinks={[
        {
          href: "/blog/icheon-eup-myeon-booking-guide",
          title: "이천 읍·면에서 주소 보내는 법",
          description: "장호원·부발·마장·신둔·백사 주소·출입 안내",
        },
        {
          href: "/blog/icheon-massage-guide",
          title: "이천 호텔·숙소에서 예약하기",
          description: "숙소의 외부 방문객·객실 출입 규정",
        },
        {
          href: "/blog/icheon-night-booking-checklist",
          title: "이천 밤 10시 이후 예약",
          description: "늦은 시간에 예약할 때 미리 알아둘 내용",
        },
      ]}
      outro={
        <>
          <p>
            이천 출장마사지 예약은 전화와 카카오톡으로 접수합니다. 상담시간은 오후 7시부터 다음 날 오전 4시까지이며, 방문 일정과 코스 금액은 예약 시 안내합니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">중리동 · 창전동 · 증포동 · 관고동 · 부발읍 · 장호원읍 · 마장면 · 신둔면 · 백사면 · 호법면 · 대월면 · 모가면 · 설성면 · 율면</div>
        </>
      }
    />
  );
}
