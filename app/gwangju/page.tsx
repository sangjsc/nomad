import type { Metadata } from "next";
import LocationPage from "../components/LocationPage";

export const metadata: Metadata = {
  title: "경기도 광주출장마사지 | 광주시 홈타이 예약 안내 | 오후 7시~오전 4시",
  description: "경기도 광주 출장마사지·홈타이 예약 상담. 오포·초월·곤지암 등 주소와 시간을 알려주세요. 오후 7시~오전 4시 문의, 추가비 없이 이용 후 결제.",
  openGraph: {
    title: "경기도 광주출장마사지 | 광주시 홈타이 예약 안내 | 노마드출장마사지",
    description: "경기도 광주 출장마사지·홈타이 예약 상담. 오포·초월·곤지암 등 주소와 시간을 알려주세요. 오후 7시~오전 4시 문의, 추가비 없이 이용 후 결제.",
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
    description: "경기도 광주 출장마사지·홈타이 예약 상담. 오포·초월·곤지암 등 주소와 시간을 알려주세요. 오후 7시~오전 4시 문의, 추가비 없이 이용 후 결제.",
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
        { src: '/images/location-6.jpg', title: '주소 확인', desc: '경기도 광주시의 주소를 보내주세요', gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-7.jpg', title: '코스 안내', desc: '코스가 고민되면 차이부터 물어보세요', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-8.jpg', title: '일정 안내', desc: '원하는 시간에 예약할 수 있는지 확인하세요', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="경기도 광주시에서 타이·아로마·스웨디시 마사지를 찾으시면 문의해주세요. 오후 7시~오전 4시에 주소와 원하는 시간을 확인해 예약을 도와드립니다. 이용 후 현장에서 결제합니다."
      areas={["경안동", "쌍령동", "송정동", "탄벌동", "광남1동", "광남2동", "오포1동", "오포2동", "신현동", "능평동", "초월읍", "곤지암읍", "도척면", "퇴촌면", "남종면", "남한산성면"]}
      latitude="37.429084"
      longitude="127.255189"
      intro={
        <>
          <div className="mb-6 p-4 bg-gradient-to-r from-purple-50 to-indigo-50 border-l-4 border-purple-500 rounded-lg">
            <p className="text-base sm:text-lg font-semibold text-gray-800 leading-relaxed">
              <strong className="text-purple-700">광주광역시가 아닌 경기도 광주시</strong>에서 받으실 분은 여기로 문의해주세요.
            </p>
          </div>
          <p>
            경안·쌍령·송정·탄벌동부터 오포1·2동·신현·능평동, 초월·곤지암읍까지 받으실 주소를 알려주세요. 건물명과 원하는 시간을 함께 보내주시면 방문할 수 있는지 확인해드립니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            코스를 아직 정하지 않으셨다면 이용 시간과 선호하는 강도부터 말씀해주세요. 타이·아로마·스웨디시의 차이를 설명해드립니다. 집이나 오피스텔은 현관 출입 방법을, 숙소는 외부 방문객 출입이 되는지 확인해주세요.
          </p>
        </>
      }
      localGuide={
        <div className="mb-12 rounded-3xl border border-purple-100 bg-white p-6 shadow-xl lg:p-10">
          <p className="font-semibold text-purple-700">경기도 광주 방문 예약</p>
          <h2 className="mt-2 text-2xl font-bold text-gray-900 lg:text-4xl">광주시 어디에서 받으실 예정인가요?</h2>
          <p className="mt-4 max-w-3xl leading-7 text-gray-600">동네 이름과 함께 도로명 주소, 건물명을 보내주세요. 원하시는 시간에 방문할 수 있는지 먼저 확인하고 예약을 잡습니다.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl bg-purple-50 p-5"><h3 className="font-bold text-gray-900">경안·쌍령·송정·탄벌동</h3><p className="mt-2 text-sm leading-6 text-gray-600">아파트나 오피스텔이라면 공동현관 출입 방법을 알려주세요. 방문 차량 등록이나 별도 주차 안내가 필요한지도 함께 부탁드립니다.</p></article>
            <article className="rounded-2xl bg-indigo-50 p-5"><h3 className="font-bold text-gray-900">오포1·2동·신현·능평동</h3><p className="mt-2 text-sm leading-6 text-gray-600">같은 이름의 건물이 있을 수 있으니 주소와 건물명을 함께 보내주세요. 동과 출입구까지 적어주시면 더 정확하게 찾아갈 수 있습니다.</p></article>
            <article className="rounded-2xl bg-fuchsia-50 p-5"><h3 className="font-bold text-gray-900">초월읍·곤지암읍</h3><p className="mt-2 text-sm leading-6 text-gray-600">오늘 예약하고 싶으시면 주소와 원하는 시간을 보내주세요. 다른 시간도 괜찮으시면 함께 적어주세요.</p></article>
            <article className="rounded-2xl bg-slate-50 p-5"><h3 className="font-bold text-gray-900">도척·퇴촌·남종·남한산성면</h3><p className="mt-2 text-sm leading-6 text-gray-600">건물 입구를 찾기 어려운 곳이라면 가까운 표지나 기준 지점을 알려주세요. 주차 위치도 함께 보내주시면 좋습니다.</p></article>
          </div>
        </div>
      }
      faqItems={[
        { question: "광주광역시도 오시나요?", answer: "여기서는 광주광역시가 아닌 경기도 광주시의 예약을 받습니다. 주소를 보내주실 때 경기도 광주시인지 확인해주세요." },
        { question: "오포1·2동·신현동·능평동·초월읍·곤지암읍도 문의할 수 있나요?", answer: "네. 도로명 주소와 받고 싶은 시간을 알려주세요. 방문할 수 있는지 확인한 뒤 시간을 말씀드립니다." },
        { question: "경기 광주 호텔이나 숙소에서 받을 수 있나요?", answer: "외부 방문객의 객실 출입이 허용되는 곳이어야 합니다. 숙소에 먼저 확인하신 뒤 주소와 원하는 시간을 보내주세요." },
        { question: "처음 문의할 때 뭘 보내면 되나요?", answer: "경기도 광주시의 도로명 주소와 건물명, 받고 싶은 시간을 먼저 보내주세요. 코스는 상담하면서 정하셔도 됩니다. 출입 방법과 주차 위치도 함께 알려주시면 좋습니다." },
      ]}
      relatedAreaSlugs={["seongnam", "yongin", "icheon", "hanam"]}
      relatedContentLinks={[
        { href: "/blog/gwangju-gyeonggi-location-faq", title: "경기 광주 주소 확인하기", description: "광주광역시와 헷갈리지 않게 주소 보내기" },
        { href: "/blog/gwangju-opo-chowol-booking-guide", title: "오포·초월에서 예약하기", description: "주소와 원하는 시간, 이렇게 알려주세요" },
        { href: "/blog/gwangju-massage-guide", title: "경기 광주 호텔·오피스텔 예약", description: "숙소 출입과 예약 전에 알아둘 내용" },
      ]}
      outro={
        <>
          <p>
            경기도 광주시 어느 지역이든 출장·주차·야간 추가비는 없습니다. 오후 7시~오전 4시에 전화나 카카오톡으로 문의해주세요. 예약금 없이 이용 후 현장에서 결제합니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">경안동 · 쌍령동 · 송정동 · 탄벌동 · 오포1동 · 오포2동 · 신현동 · 능평동 · 초월읍 · 곤지암읍</div>
        </>
      }
    />
  );
}
