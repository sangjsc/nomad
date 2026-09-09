import type { Metadata } from "next";
import LocationPage from "../components/LocationPage";

export const metadata: Metadata = {
  title: "용인출장마사지 | 경기도 용인 홈타이 예약 안내 | 오후 7시~오전 4시",
  description: "용인출장마사지·홈타이, 처인구·기흥구·수지구 방문 예약 상담. 오후 7시~오전 4시 문의, 타이·아로마·스웨디시, 추가비 없는 후불 결제.",
  openGraph: {
    title: "용인출장마사지 | 경기도 용인 홈타이 예약 안내 | 노마드출장마사지",
    description: "용인출장마사지·홈타이, 처인구·기흥구·수지구 방문 예약 상담. 오후 7시~오전 4시 문의, 타이·아로마·스웨디시, 추가비 없는 후불 결제.",
    url: "https://www.nomadthai.kr/yongin",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/og/yongin",
        width: 1200,
        height: 630,
        alt: "용인출장마사지 - 노마드출장마사지 오후 7시~오전 4시 서비스",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "용인출장마사지 | 노마드출장마사지",
    description: "용인출장마사지·홈타이, 처인구·기흥구·수지구 방문 예약 상담. 오후 7시~오전 4시 문의, 타이·아로마·스웨디시, 추가비 없는 후불 결제.",
    images: ["/og/yongin"],
  },
  alternates: {
    canonical: "https://www.nomadthai.kr/yongin",
  },
};

export default function YonginPage() {
  return (
    <LocationPage
      city="용인"
      cityEn="yongin"
      theme="rose"
      heroImage="/images/location-3.jpg"
      teamImages={[
        { src: '/images/location-4.jpg', title: '주소 확인', desc: '어느 구, 어느 건물에서 받으시나요?', gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-5.jpg', title: '코스 안내', desc: '코스가 고민되면 차이부터 물어보세요', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-6.jpg', title: '일정 안내', desc: '원하는 시간에 예약할 수 있는지 확인하세요', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="용인 처인구·기흥구·수지구에서 받으실 주소와 시간을 알려주세요. 타이·아로마·스웨디시 코스를 상담할 수 있습니다. 상담시간은 오후 7시~오전 4시이며, 이용 후 현장에서 결제합니다."
      areas={["처인구", "기흥구", "수지구", "포곡읍", "모현읍", "이동읍", "남사읍", "백암면", "양지면", "동백동", "보정동", "죽전동", "상현동"]}
      latitude="37.240245"
      longitude="127.178020"
      intro={
        <>
          <p>
            포곡·모현·이동·남사읍과 백암·양지면, 동백·보정·죽전·상현동에서도 문의하실 수 있습니다. 구 이름만 보내시기보다는 도로명 주소와 건물명까지 알려주시면 방문할 곳을 정확하게 확인할 수 있습니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            코스를 고르셨다면 이용 시간과 선호하는 강도를 말씀해주세요. 처음이라 고민되시면 타이·아로마·스웨디시의 차이부터 물어보셔도 좋습니다. 방문할 시간과 코스 금액은 예약을 잡기 전에 함께 확인합니다.
          </p>
        </>
      }
      localGuide={
        <div className="mb-12 rounded-3xl border border-rose-100 bg-white p-6 shadow-xl lg:p-10">
          <p className="font-semibold text-rose-700">용인 방문 예약</p>
          <h2 className="mt-2 text-2xl font-bold text-gray-900 lg:text-4xl">처인구·기흥구·수지구, 어디에서 받으시나요?</h2>
          <p className="mt-4 max-w-3xl leading-7 text-gray-600">주소와 건물명, 원하는 시간을 알려주세요. 방문 가능 여부를 확인한 뒤 예약을 도와드립니다. 다른 시간도 괜찮으시면 함께 말씀해주세요.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl bg-rose-50 p-5"><h3 className="font-bold text-gray-900">처인구와 읍·면</h3><p className="mt-2 text-sm leading-6 text-gray-600">포곡·모현·이동·남사읍과 백암·양지면은 도로명 주소를 보내주세요. 건물을 찾기 어려우면 가까운 표지도 알려주시면 좋습니다.</p></article>
            <article className="rounded-2xl bg-pink-50 p-5"><h3 className="font-bold text-gray-900">기흥구</h3><p className="mt-2 text-sm leading-6 text-gray-600">동백·보정동 등에서 아파트나 오피스텔로 예약하시면 공동현관 출입 방법과 주차 위치를 함께 알려주세요.</p></article>
            <article className="rounded-2xl bg-fuchsia-50 p-5"><h3 className="font-bold text-gray-900">수지구</h3><p className="mt-2 text-sm leading-6 text-gray-600">죽전·상현동 등 받으실 곳의 건물명과 주소를 보내주세요. 원하는 시간에 방문할 수 있는지 먼저 확인해드립니다.</p></article>
            <article className="rounded-2xl bg-slate-50 p-5"><h3 className="font-bold text-gray-900">호텔·오피스텔에서 받으신다면</h3><p className="mt-2 text-sm leading-6 text-gray-600">호텔·숙소는 외부 방문객 출입이 허용돼야 합니다. 오피스텔은 공동현관이나 방문 차량 등록 방법을 알려주세요.</p></article>
          </div>
        </div>
      }
      faqItems={[
        { question: "처인구·기흥구·수지구 모두 문의할 수 있나요?", answer: "네. 받으실 주소와 원하는 시간을 보내주세요. 방문할 수 있는지 확인한 뒤 예약할 시간을 정합니다." },
        { question: "포곡·모현·이동·남사읍이나 백암·양지면도 오시나요?", answer: "주소와 원하는 시간을 알려주시면 방문 가능 여부를 확인해드립니다. 입구를 찾기 어려운 곳이라면 가까운 기준 지점도 알려주세요." },
        { question: "아파트나 오피스텔, 호텔에서도 받을 수 있나요?", answer: "집이나 오피스텔은 공동현관 출입 방법과 방문 차량 등록 여부를 알려주세요. 호텔·숙소는 외부 방문객의 객실 출입이 허용되는지 먼저 확인해주셔야 합니다." },
        { question: "몇 시에 문의할 수 있고, 결제는 언제 하나요?", answer: "상담은 오후 7시부터 다음 날 오전 4시까지입니다. 예약금이나 선입금 없이 서비스를 받으신 뒤 현장에서 결제합니다." },
      ]}
      relatedAreaSlugs={["gwangju", "seongnam", "suwon", "icheon"]}
      relatedContentLinks={[
        { href: "/blog/yongin-dispatch-district-guide", title: "용인에서 예약할 때 주소 보내기", description: "처인·기흥·수지구 중 받으실 곳을 알려주세요" },
        { href: "/blog/yongin-cheoin-booking-checklist", title: "처인구 읍·면에서 예약하기", description: "도로명 주소와 건물 입구 확인하기" },
        { href: "/blog/yongin-suji-giheung-evening-guide", title: "수지·기흥에서 저녁에 예약하기", description: "공동현관과 주차, 원하는 시간 미리 확인하기" },
      ]}
      outro={
        <>
          <p>
            용인 어느 지역이든 출장·주차·야간 추가비는 없습니다. 오후 7시~오전 4시에 전화나 카카오톡으로 문의해주세요. 선입금 없이 마사지를 받으신 뒤 현장에서 결제합니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">처인구 · 기흥구 · 수지구 · 포곡읍 · 모현읍 · 이동읍 · 남사읍 · 동백동 · 보정동 · 죽전동 · 상현동</div>
        </>
      }
    />
  );
}
