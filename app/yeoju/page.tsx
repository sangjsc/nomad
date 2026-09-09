import type { Metadata } from "next";
import LocationPage from "../components/LocationPage";

export const metadata: Metadata = {
  title: "여주출장마사지 | 경기도 여주시 홈타이 예약 안내 | 오후 7시~오전 4시",
  description: "여주출장마사지·홈타이, 여흥·중앙·오학동과 가남읍 등 방문 예약 상담. 오후 7시~오전 4시 문의, 출장·주차·야간 추가비 없이 이용 후 결제.",
  openGraph: {
    title: "여주출장마사지 | 경기도 여주시 홈타이 예약 안내 | 노마드출장마사지",
    description: "여주출장마사지·홈타이, 여흥·중앙·오학동과 가남읍 등 방문 예약 상담. 오후 7시~오전 4시 문의, 출장·주차·야간 추가비 없이 이용 후 결제.",
    url: "https://www.nomadthai.kr/yeoju",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/og/yeoju",
        width: 1200,
        height: 630,
        alt: "여주출장마사지 - 노마드출장마사지 오후 7시~오전 4시 서비스",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "여주출장마사지 | 노마드출장마사지",
    description: "여주출장마사지·홈타이, 여흥·중앙·오학동과 가남읍 등 방문 예약 상담. 오후 7시~오전 4시 문의, 출장·주차·야간 추가비 없이 이용 후 결제.",
    images: ["/og/yeoju"],
  },
  alternates: {
    canonical: "https://www.nomadthai.kr/yeoju",
  },
};

export default function YeojuPage() {
  return (
    <LocationPage
      city="여주"
      cityEn="yeoju"
      theme="amber"
      heroImage="/images/location-2.jpg"
      teamImages={[
        { src: '/images/location-3.jpg', title: '주소 확인', desc: '건물 입구가 어디인지 함께 알려주세요', gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-4.jpg', title: '코스 안내', desc: '코스가 고민되면 차이부터 물어보세요', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-5.jpg', title: '일정 안내', desc: '원하는 시간에 예약할 수 있는지 확인하세요', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="여주에서 집이나 숙소로 부르는 마사지를 원하시면 주소와 시간을 알려주세요. 오후 7시~오전 4시에 상담하며 방문 가능 여부를 확인합니다. 마사지를 받으신 뒤 현장에서 결제하시면 됩니다."
      areas={["여흥동", "중앙동", "오학동", "가남읍", "점동면", "세종대왕면", "흥천면", "금사면", "산북면", "대신면", "북내면", "강천면"]}
      latitude="37.297809"
      longitude="127.637352"
      intro={
        <>
          <p>
            여흥·중앙·오학동이나 가남읍에서 문의하실 때 건물명과 도로명 주소를 함께 보내주세요. 점동·세종대왕·흥천·금사·산북·대신·북내·강천면도 건물 입구를 찾기 어려우면 가까운 표지를 덧붙여주시면 좋습니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            타이·아로마·스웨디시 중 받고 싶은 코스와 시간을 말씀해주세요. 아직 코스를 고르지 못하셨다면 차이를 설명해드립니다. 원하는 시간에 예약이 어려울 수도 있으니, 다른 시간도 괜찮으시면 함께 알려주세요.
          </p>
        </>
      }
      localGuide={
        <div className="mb-12 rounded-3xl border border-amber-100 bg-white p-6 shadow-xl lg:p-10">
          <p className="font-semibold text-amber-700">여주 방문 예약</p>
          <h2 className="mt-2 text-2xl font-bold text-gray-900 lg:text-4xl">여주 읍·면에서도, 주소부터 보내주세요</h2>
          <p className="mt-4 max-w-3xl leading-7 text-gray-600">주소와 건물명을 보내주시면 방문할 수 있는지 확인해드립니다. 원하는 시간 외에 가능한 시간이 더 있다면 함께 적어주세요.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl bg-amber-50 p-5"><h3 className="font-bold text-gray-900">여흥·중앙·오학동</h3><p className="mt-2 text-sm leading-6 text-gray-600">아파트나 오피스텔은 동과 건물명을 알려주세요. 공동현관 출입 방법과 주차 위치도 함께 부탁드립니다.</p></article>
            <article className="rounded-2xl bg-orange-50 p-5"><h3 className="font-bold text-gray-900">가남읍·점동면</h3><p className="mt-2 text-sm leading-6 text-gray-600">도로명 주소와 건물명을 보내주세요. 입구가 여러 곳이면 어느 쪽으로 들어가야 하는지도 알려주세요.</p></article>
            <article className="rounded-2xl bg-yellow-50 p-5"><h3 className="font-bold text-gray-900">세종대왕·흥천·금사·산북면</h3><p className="mt-2 text-sm leading-6 text-gray-600">받고 싶은 시간과 코스를 먼저 말씀해주세요. 원하는 시간이 어려우면 다른 시간도 괜찮은지 함께 여쭤봅니다.</p></article>
            <article className="rounded-2xl bg-slate-50 p-5"><h3 className="font-bold text-gray-900">대신·북내·강천면</h3><p className="mt-2 text-sm leading-6 text-gray-600">건물 입구와 주차 위치를 알려주세요. 숙소에서 받으실 때는 외부 방문객 출입이 허용되는지 먼저 확인해주세요.</p></article>
          </div>
        </div>
      }
      faqItems={[
        { question: "여주 읍·면에서도 문의해도 되나요?", answer: "네. 가남읍과 점동·세종대왕·흥천·금사·산북·대신·북내·강천면의 주소를 보내주세요. 방문할 수 있는지, 어느 시간에 가능한지 확인해드립니다." },
        { question: "주말에 오늘 받을 수 있는지 물어봐도 되나요?", answer: "네. 당일 문의도 받습니다. 다만 원하는 시간에 예약이 가능한지는 확인이 필요합니다. 다른 시간도 괜찮으시면 함께 말씀해주세요." },
        { question: "읍·면에서 늦은 시간에 부르려면 뭘 알려드리면 되나요?", answer: "받으실 주소와 건물명, 원하는 시간을 보내주세요. 길을 찾기 어려운 곳이라면 가까운 표지도 부탁드립니다. 코스와 출입·주차 방법은 예약할 때 함께 확인합니다." },
        { question: "예약할 때 미리 결제하나요?", answer: "아니요. 예약금이나 선입금 없이 서비스를 받으신 뒤 현장에서 결제합니다." },
      ]}
      relatedAreaSlugs={["icheon", "yongin", "gwangju", "anseong"]}
      relatedContentLinks={[
        { href: "/blog/yeoju-massage-guide", title: "여주에서 처음 예약한다면", description: "집이나 숙소에서 받기 전에 알아둘 내용" },
        { href: "/blog/yeoju-eup-myeon-night-booking-guide", title: "여주 읍·면의 늦은 시간 예약", description: "주소와 건물 입구, 원하는 시간 알려주기" },
        { href: "/blog/yeoju-weekend-reservation-faq", title: "여주 주말 예약, 자주 묻는 질문", description: "오늘 받을 수 있는지 문의하기 전에" },
      ]}
      outro={
        <>
          <p>
            여주는 읍·면 지역도 출장·주차·야간 추가비를 따로 받지 않습니다. 전화나 카카오톡으로 방문 시간과 코스 금액을 확인해주세요. 선입금 없이 서비스 후 현장에서 결제합니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">여흥동 · 중앙동 · 오학동 · 가남읍 · 점동면 · 세종대왕면 · 흥천면 · 금사면 · 산북면 · 대신면 · 북내면 · 강천면</div>
        </>
      }
    />
  );
}
