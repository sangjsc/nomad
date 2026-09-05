import type { Metadata } from "next";
import LocationPage from "../components/LocationPage";

export const metadata: Metadata = {
  title: "경기도 광주출장마사지 | 광주시 홈타이 예약 안내 | 오후 7시~오전 4시",
  description:
    "경기도 광주시 경안동·오포1·2동·신현동·능평동·초월읍·곤지암읍 출장마사지·홈타이 예약 안내. 오후 7시~오전 4시 상담, 서비스 완료 후 현장 결제.",
  openGraph: {
    title: "경기도 광주출장마사지 | 광주시 홈타이 예약 안내 | 노마드출장마사지",
    description: "광주광역시가 아닌 경기도 광주시의 주소·희망 시간·코스를 확인해 방문 가능 일정을 안내합니다.",
    url: "https://www.nomadthai.kr/gwangju",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/og/gwangju",
        width: 1200,
        height: 630,
        alt: "광주출장마사지 - 노마드출장마사지 오후 7시~오전 4시 서비스",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "경기도 광주출장마사지 | 노마드출장마사지",
    description: "경기도 광주시 출장마사지 예약 안내. 오후 7시~오전 4시 상담, 서비스 완료 후 현장 결제.",
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
        { src: '/images/location-6.jpg', title: '주소 확인', desc: '경기도 광주시와 세부 주소를 먼저 확인', gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-7.jpg', title: '코스 안내', desc: '타이·아로마·스웨디시 코스별 상담', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-8.jpg', title: '일정 안내', desc: '접수 순서와 이동 동선 확인 후 안내', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="경기도 광주시 경안동·오포1·2동·신현동·능평동·초월읍·곤지암읍 출장마사지·홈타이 예약 안내입니다. 오후 7시~오전 4시 상담하며 주소와 희망 시간을 확인해 가능한 일정을 안내하고 서비스 완료 후 현장 결제합니다."
      areas={["경안동", "쌍령동", "송정동", "탄벌동", "광남1동", "광남2동", "오포1동", "오포2동", "신현동", "능평동", "초월읍", "곤지암읍", "도척면", "퇴촌면", "남종면", "남한산성면"]}
      latitude="37.429084"
      longitude="127.255189"
      intro={
        <>
          <div className="mb-6 p-4 bg-gradient-to-r from-purple-50 to-indigo-50 border-l-4 border-purple-500 rounded-lg">
            <p className="text-base sm:text-lg font-semibold text-gray-800 leading-relaxed">
              본 페이지는 <strong className="text-purple-700">광주광역시가 아닌 경기도 광주시</strong> 예약 안내입니다.
            </p>
          </div>
          <p>
            광주광역시가 아닌 경기도 광주시 안내입니다. 경안·쌍령·송정·탄벌동과 오포1·2동·신현·능평동, 초월·곤지암읍 등은 이동 동선이 다르므로 실제 주소와 희망 시간을 먼저 확인합니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            도로명 주소와 건물명, 희망 시간 1·2순위, 원하는 코스와 이용 시간, 공동현관·주차 정보를 알려주세요. 타이·아로마·스웨디시 중 원하는 방식을 확인하고 접수 순서와 이동 동선에 따라 방문 가능 시간을 안내합니다. 호텔·숙소는 외부 방문 허용 여부를 먼저 확인해야 합니다.
          </p>
        </>
      }
      localGuide={
        <div className="mb-12 rounded-3xl border border-purple-100 bg-white p-6 shadow-xl lg:p-10">
          <p className="font-semibold text-purple-700">GYEONGGI GWANGJU LOCAL GUIDE</p>
          <h2 className="mt-2 text-2xl font-bold text-gray-900 lg:text-4xl">경기도 광주시 생활권별 예약 확인 사항</h2>
          <p className="mt-4 max-w-3xl leading-7 text-gray-600">같은 광주시 안에서도 도심·오포권·읍면권의 이동 동선이 다릅니다. 도로명 주소와 건물명을 알려주시면 접수 상황에 맞는 가능한 시간을 확인합니다.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl bg-purple-50 p-5"><h3 className="font-bold text-gray-900">경안·쌍령·송정·탄벌동</h3><p className="mt-2 text-sm leading-6 text-gray-600">공동현관, 방문 등록과 주차 위치를 상담할 때 함께 알려주세요.</p></article>
            <article className="rounded-2xl bg-indigo-50 p-5"><h3 className="font-bold text-gray-900">오포1·2동·신현·능평동</h3><p className="mt-2 text-sm leading-6 text-gray-600">생활권이 넓으므로 동 이름뿐 아니라 도로명 주소와 건물명을 확인합니다.</p></article>
            <article className="rounded-2xl bg-fuchsia-50 p-5"><h3 className="font-bold text-gray-900">초월읍·곤지암읍</h3><p className="mt-2 text-sm leading-6 text-gray-600">희망 시간과 가능한 대체 시간을 함께 알려주시면 이동 동선을 확인하기 좋습니다.</p></article>
            <article className="rounded-2xl bg-slate-50 p-5"><h3 className="font-bold text-gray-900">도척·퇴촌·남종·남한산성면</h3><p className="mt-2 text-sm leading-6 text-gray-600">건물명이나 가까운 기준 지점, 출입·주차 정보를 함께 확인합니다.</p></article>
          </div>
        </div>
      }
      faqItems={[
        { question: "광주광역시 서비스인가요?", answer: "아닙니다. 이 페이지는 경기도 광주시 기준입니다." },
        { question: "오포1·2동·신현동·능평동·초월읍·곤지암읍도 상담할 수 있나요?", answer: "정확한 주소와 희망 시간을 확인해 당일 가능한 일정을 안내합니다." },
        { question: "경기 광주 호텔이나 숙소에서도 가능한가요?", answer: "숙소가 외부 방문과 객실 출입을 허용하는지 예약자가 먼저 확인해야 합니다." },
        { question: "문의할 때 무엇을 알려야 하나요?", answer: "경기도 광주시라는 지역 표기, 도로명 주소·건물명, 희망 시간, 코스·이용 시간, 출입·주차 정보를 알려주세요." },
      ]}
      relatedAreaSlugs={["seongnam", "yongin", "icheon", "hanam"]}
      relatedContentLinks={[
        { href: "/blog/gwangju-gyeonggi-location-faq", title: "경기 광주 위치 FAQ", description: "광주광역시와 구분해 주소를 전달하는 방법" },
        { href: "/blog/gwangju-opo-chowol-booking-guide", title: "오포·초월 예약 가이드", description: "오포권과 초월읍의 위치·시간 확인 항목" },
        { href: "/blog/gwangju-massage-guide", title: "경기 광주 이용 안내", description: "숙소·오피스텔 예약 전 확인할 내용" },
      ]}
      outro={
        <>
          <p>
            경기도 광주시의 표시된 생활권은 실제 주소와 희망 시간을 확인한 뒤 가능한 일정을 안내합니다. 오후 7시~오전 4시 전화·카카오톡 상담, 서비스 완료 후 현장 결제 기준입니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">경안동 · 쌍령동 · 송정동 · 탄벌동 · 오포1동 · 오포2동 · 신현동 · 능평동 · 초월읍 · 곤지암읍</div>
        </>
      }
    />
  );
}
