import type { Metadata } from "next";
import LocationPage from "../components/LocationPage";

export const metadata: Metadata = {
  title: "경기도 광주출장마사지 | 광주시 홈타이 예약 안내 | 오후 7시~오전 4시",
  description: "경기도 광주 출장마사지·홈타이, 오포·초월·곤지암 등 집과 숙소로 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없이 후불 결제. 오후 7시~오전 4시 상담.",
  openGraph: {
    title: "경기도 광주출장마사지 | 광주시 홈타이 예약 안내 | 노마드출장마사지",
    description: "경기도 광주 출장마사지·홈타이, 오포·초월·곤지암 등 집과 숙소로 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없이 후불 결제. 오후 7시~오전 4시 상담.",
    url: "https://www.nomadthai.kr/gwangju",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/og/gwangju",
        width: 1200,
        height: 630,
        alt: "광주출장마사지 - 노마드출장마사지 오후 7시~오전 4시 상담",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "경기도 광주출장마사지 | 노마드출장마사지",
    description: "경기도 광주 출장마사지·홈타이, 오포·초월·곤지암 등 집과 숙소로 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없이 후불 결제. 오후 7시~오전 4시 상담.",
    images: ["/og/gwangju"],
  },
  alternates: {
    canonical: "https://www.nomadthai.kr/gwangju",
  },
};

export default function GwangjuPage() {
  return (
    <LocationPage
      city="광주"
      cityEn="gwangju"
      heroTitle="경기도 광주 출장마사지"
      theme="purple"
      heroImage="/images/location-5.jpg"
      teamImages={[
        { src: '/images/location-6.jpg', title: '방문 마사지', desc: '집·오피스텔·숙소로 직접 방문', gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-7.jpg', title: '마사지 코스', desc: '타이·아로마·스웨디시 60·90·120분', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-8.jpg', title: '후불 결제', desc: '예약금 없이 서비스 후 현장 결제', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="경기도 광주시의 집과 숙소로 찾아가는 타이·아로마·스웨디시 마사지. 타이 60분 7만원부터, 출장·주차·야간 추가비 없이 서비스를 받은 뒤 결제합니다."
      areas={["경안동", "쌍령동", "송정동", "탄벌동", "광남1동", "광남2동", "오포1동", "오포2동", "신현동", "능평동", "초월읍", "곤지암읍", "도척면", "퇴촌면", "남종면", "남한산성면"]}
      latitude="37.429084"
      longitude="127.255189"
      intro={
        <>
          <div className="mb-6 p-4 bg-gradient-to-r from-purple-50 to-indigo-50 border-l-4 border-purple-500 rounded-lg">
            <p className="text-base sm:text-lg font-semibold text-gray-800 leading-relaxed">
              방문 지역은 <strong className="text-purple-700">경기도 광주시</strong>입니다. 광주광역시와 구분합니다.
            </p>
          </div>
          <p>
            경안·쌍령·송정·탄벌동과 오포1·2동·신현·능평동, 초월·곤지암읍까지 방문 예약을 받습니다. 익숙한 공간에서 타이·아로마·스웨디시를 이용할 수 있습니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            타이 60분 7만원, 아로마 60분 8만원, 스웨디시 60분 10만원부터입니다. 90분과 120분 코스도 제공하며, 예약한 금액은 서비스가 끝난 뒤 현장에서 결제합니다.
          </p>
        </>
      }
      localGuide={
        <div className="mb-12 rounded-3xl border border-purple-100 bg-white p-6 shadow-xl lg:p-10">
          <p className="font-semibold text-purple-700">경기도 광주 방문 예약</p>
          <h2 className="mt-2 text-2xl font-bold text-gray-900 lg:text-4xl">광주시 생활권별 방문 서비스</h2>
          <p className="mt-4 max-w-3xl leading-7 text-gray-600">방문 일정은 경기도 광주시의 도로명 주소와 건물명, 희망 시간을 기준으로 정합니다. 출입·주차 정보가 필요하며 숙소는 외부 방문객 출입이 허용되어야 합니다.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl bg-purple-50 p-5"><h3 className="font-bold text-gray-900">경안·쌍령·송정·탄벌동</h3><p className="mt-2 text-sm leading-6 text-gray-600">자택과 오피스텔에서 타이·아로마·스웨디시를 이용할 수 있습니다. 공동현관·방문 차량 등록 절차는 예약 시 접수합니다.</p></article>
            <article className="rounded-2xl bg-indigo-50 p-5"><h3 className="font-bold text-gray-900">오포1·2동·신현·능평동</h3><p className="mt-2 text-sm leading-6 text-gray-600">오포1·2동과 신현·능평동으로 방문합니다. 같은 건물 이름을 구분할 수 있도록 도로명 주소를 기준으로 예약을 받습니다.</p></article>
            <article className="rounded-2xl bg-fuchsia-50 p-5"><h3 className="font-bold text-gray-900">초월읍·곤지암읍</h3><p className="mt-2 text-sm leading-6 text-gray-600">초월읍·곤지암읍도 추가 출장비 없이 이용할 수 있습니다. 당일 예약은 가능한 방문 일정에 따라 접수합니다.</p></article>
            <article className="rounded-2xl bg-slate-50 p-5"><h3 className="font-bold text-gray-900">도척·퇴촌·남종·남한산성면</h3><p className="mt-2 text-sm leading-6 text-gray-600">도척·퇴촌·남종·남한산성면도 같은 가격과 후불 결제를 적용합니다. 입구가 찾기 어려운 곳은 주변 표지를 기준으로 방문합니다.</p></article>
          </div>
        </div>
      }
      faqItems={[
        { question: "광주광역시도 오시나요?", answer: "이 페이지의 서비스 지역은 경기도 광주시입니다. 광주광역시는 방문 지역에 포함되지 않습니다." },
        { question: "오포·신현·능평·초월·곤지암도 방문하나요?", answer: "네. 해당 지역 모두 방문 예약을 받습니다. 실제 방문 시간은 주소와 예약 현황에 따라 안내합니다." },
        { question: "경기 광주 호텔이나 숙소에서 받을 수 있나요?", answer: "외부 방문객의 객실 출입이 허용되는 호텔·숙소에서 이용할 수 있습니다. 예약 전에 숙소 측 출입 규정 확인이 필요합니다." },
        { question: "예약에는 어떤 정보가 필요한가요?", answer: "경기도 광주시의 도로명 주소·건물명·희망 시간과 출입·주차 정보가 필요합니다. 코스와 이용 시간은 상담을 통해 정할 수 있습니다." },
      ]}
      relatedAreaSlugs={["seongnam", "yongin", "icheon", "hanam"]}
      relatedContentLinks={[
        { href: "/blog/gwangju-gyeonggi-location-faq", title: "경기 광주 주소 확인하기", description: "광주광역시와 헷갈리지 않게 주소 보내기" },
        { href: "/blog/gwangju-opo-chowol-booking-guide", title: "오포·초월에서 예약하기", description: "오포·초월 방문 주소와 예약 일정" },
        { href: "/blog/gwangju-massage-guide", title: "경기 광주 호텔·오피스텔 예약", description: "숙소 출입과 예약 전에 알아둘 내용" },
      ]}
      outro={
        <>
          <p>
            경기도 광주시 출장마사지 예약은 오후 7시~오전 4시 전화와 카카오톡으로 접수합니다. 예약금과 출장·주차·야간 추가비는 없습니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">경안동 · 쌍령동 · 송정동 · 탄벌동 · 오포1동 · 오포2동 · 신현동 · 능평동 · 초월읍 · 곤지암읍</div>
        </>
      }
    />
  );
}
