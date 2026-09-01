import type { Metadata } from "next";
import LocationPage from "../components/LocationPage";

export const metadata: Metadata = {
  title: "이천출장마사지 | 타이·홈타이 후불제 예약 안내",
  description:
    "이천 출장마사지·타이마사지·홈타이 예약 안내. 중리·창전·증포·부발 등 이천 전 지역, 오후 7시~오전 4시 운영, 예약금 없는 후불제.",
  openGraph: {
    title: "이천출장마사지 | 타이·홈타이 후불제 예약 안내",
    description: "이천 출장마사지·타이마사지·홈타이 예약 안내. 중리·창전·증포·부발 등 이천 전 지역, 오후 7시~오전 4시 운영, 예약금 없는 후불제.",
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
    title: "이천출장마사지 | 타이·홈타이 후불제 예약 안내",
    description: "이천 전 지역 출장마사지·타이마사지·홈타이 예약 안내. 오후 7시~오전 4시 운영, 예약금 없는 후불제.",
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
      theme="blue"
      heroImage="/images/location-7.jpg"
      teamImages={[
        { src: '/images/location-8.jpg', title: '방문 관리', desc: "예약 내용과 선호 강도를 확인하는 방문 관리", gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-9.jpg', title: '코스 안내', desc: '타이·아로마·스웨디시 코스별 상담', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-1.jpg', title: '예약 안내', desc: '위치와 시간 확인 후 가능한 일정 안내', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="이천 출장마사지, 이천출장안마, 이천 홈타이 예약을 한 곳에서 안내하는 노마드출장마사지 이천 페이지입니다. 오후 7시부터 오전 4시까지 고객님의 편안한 공간으로 방문하며, 100% 후불제로 이용하실 수 있습니다."
      areas={["중리동", "창전동", "증포동", "관고동", "부발읍", "장호원읍", "마장면", "신둔면", "백사면", "호법면", "대월면", "모가면", "설성면", "율면"]}
      latitude="37.27221"
      longitude="127.43513"
      intro={
        <>
          <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 rounded-lg">
            <p className="text-lg font-semibold text-gray-800 leading-relaxed">
              노마드타이는 <strong className="text-blue-600">이천 전 지역(중리동, 창전동, 부발읍 등)</strong>을 아우르는 프리미엄 이천 출장마사지 공식 예약 채널입니다.
            </p>
          </div>
          <p>
            이천은 창전·증포·중리·관고동의 도심과 부발·장호원읍, 마장·신둔·백사면 등 넓은 읍면 생활권으로 이어집니다. 노마드출장마사지는 자택·오피스텔과 외부 방문이 가능한 호텔·숙소의 실제 주소를 확인해 이천출장안마 또는 이천 홈타이의 가능한 일정을 안내합니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            노마드출장마사지 이천 서비스는 타이, 아로마, 스웨디시 등 코스와 이용 시간을 상담하고 현재 위치에 맞는 방문 가능 일정을 안내합니다. 이천출장타이마사지 또는 이천출장홈타이 예약을 문의할 때 원하는 관리 방식과 강도, 이용 장소를 함께 알려주시면 선택 가능한 코스를 비교하기 쉽습니다. 모든 서비스는 예약금과 선입금 없이 관리사 도착 확인 후 결제하는 후불제로 운영합니다.
          </p>
        </>
      }
      localGuide={
        <div className="mb-12 rounded-3xl border border-blue-100 bg-white p-6 shadow-xl lg:p-10">
          <div className="max-w-3xl">
            <p className="font-semibold text-blue-600">ICHEON LOCAL GUIDE</p>
            <h2 className="mt-2 text-2xl font-bold text-gray-900 lg:text-4xl">이천 생활권별 예약 확인 사항</h2>
            <p className="mt-4 leading-7 text-gray-600">
              이천은 도심과 읍면 사이 이동 범위가 넓습니다. 실제 주소와 장소 유형을 먼저 확인하면 접수 순서와 이동 동선을 반영한 가능한 시간을 더 정확하게 안내받을 수 있습니다.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl bg-blue-50 p-5">
              <h3 className="font-bold text-gray-900">창전·증포·중리·관고 도심권</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">자택·오피스텔은 공동 현관과 주차 위치를, 호텔·숙소는 외부 방문과 객실 출입 가능 여부를 확인해주세요.</p>
            </article>
            <article className="rounded-2xl bg-indigo-50 p-5">
              <h3 className="font-bold text-gray-900">부발읍·부발역·마장면 생활권</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">산업·물류 지역과 주거지가 함께 있어 출발 위치와 실제 주소에 따라 이동 시간이 달라질 수 있습니다.</p>
            </article>
            <article className="rounded-2xl bg-cyan-50 p-5">
              <h3 className="font-bold text-gray-900">장호원읍·남부 읍면권</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">장호원읍과 대월·모가·설성·율면은 희망 시간과 함께 정확한 주소를 전달하면 당일 가능한 일정을 확인하기 좋습니다.</p>
            </article>
            <article className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-bold text-gray-900">신둔·백사·호법 생활권</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">읍면 도로와 건물 위치에 따라 동선이 달라지므로 건물명이나 가까운 기준 지점을 함께 알려주세요.</p>
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
          question: "이천시 2읍·8면·4동 모두 예약 상담이 가능한가요?",
          answer: "중리동·창전동·증포동·관고동과 부발읍·장호원읍, 8개 면의 실제 주소를 확인해 당일 방문 가능한 시간을 안내합니다.",
        },
        {
          question: "이천역이나 부발역 주변 오피스텔도 가능한가요?",
          answer: "공동 현관과 방문 등록 절차를 먼저 확인해주세요. 위치와 출입 방법을 상담할 때 알려주시면 가능한 일정을 안내합니다.",
        },
        {
          question: "이천 호텔이나 숙소에서도 이용할 수 있나요?",
          answer: "외부 방문과 객실 출입이 허용되는 숙소에서 상담할 수 있습니다. 예약 전에 숙소 정책을 직접 확인해주세요.",
        },
        {
          question: "장호원읍이나 율면도 당일 예약이 가능한가요?",
          answer: "실제 주소와 출발 위치, 접수 순서를 확인한 뒤 가능한 방문 시간을 안내합니다. 희망 시간과 대체 시간을 함께 알려주시면 좋습니다.",
        },
        {
          question: "이천출장마사지 운영시간은 어떻게 되나요?",
          answer: "상담과 예약 운영시간은 오후 7시부터 다음 날 오전 4시까지입니다. 늦은 시간은 당일 접수 상황에 따라 가능한 시간을 안내합니다.",
        },
        {
          question: "후불제 결제는 어떻게 진행되나요?",
          answer: "예약금이나 선입금을 받지 않으며, 관리사 도착을 확인한 다음 예약 과정에서 안내받은 금액을 결제합니다.",
        },
      ]}
      relatedAreaSlugs={["gwangju", "yeoju", "anseong"]}
      relatedContentLinks={[
        {
          href: "/blog/icheon-eup-myeon-booking-guide",
          title: "이천 읍면 예약 가이드",
          description: "도심과 읍면 지역에서 주소와 시간을 전달하는 방법",
        },
        {
          href: "/blog/icheon-bubal-majang-booking-notes",
          title: "부발·마장 예약 메모",
          description: "부발읍과 마장면 생활권의 위치·동선 확인 항목",
        },
        {
          href: "/blog/icheon-night-booking-checklist",
          title: "이천 심야 예약 체크리스트",
          description: "늦은 시간 문의 전에 준비할 위치·코스·시간 정보",
        },
      ]}
      outro={
        <>
          <p>
            노마드출장마사지 이천 서비스는 예약금과 선입금 없이 관리사 도착 확인 후 결제하는 방식으로 운영됩니다. 현재 위치와 원하는 코스, 희망 시간을 전화나 카카오톡으로 알려주시면 이천출장마사지·이천출장안마의 가능한 일정을 안내해드립니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">중리동 · 창전동 · 증포동 · 관고동 · 부발읍 · 장호원읍 · 마장면 · 신둔면 · 백사면 · 호법면 · 대월면 · 모가면 · 설성면 · 율면</div>
        </>
      }
    />
  );
}
