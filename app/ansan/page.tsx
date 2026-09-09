import type { Metadata } from "next";
import LocationPage from "../components/LocationPage";

export const metadata: Metadata = {
  title: "안산출장마사지 | 경기도 안산 홈타이 예약 안내 | 오후 7시~오전 4시",
  description: "안산출장마사지·홈타이, 단원구·상록구 방문 예약 상담. 오후 7시~오전 4시 문의, 타이·아로마·스웨디시, 출장·주차·야간 추가비 없는 후불 결제.",
  openGraph: {
    title: "안산출장마사지 | 경기도 안산 홈타이 예약 안내 | 노마드출장마사지",
    description: "안산출장마사지·홈타이, 단원구·상록구 방문 예약 상담. 오후 7시~오전 4시 문의, 타이·아로마·스웨디시, 출장·주차·야간 추가비 없는 후불 결제.",
    url: "https://www.nomadthai.kr/ansan",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/og/ansan",
        width: 1200,
        height: 630,
        alt: "안산출장마사지 - 노마드출장마사지 오후 7시~오전 4시 서비스",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "안산출장마사지 | 노마드출장마사지",
    description: "안산출장마사지·홈타이, 단원구·상록구 방문 예약 상담. 오후 7시~오전 4시 문의, 타이·아로마·스웨디시, 출장·주차·야간 추가비 없는 후불 결제.",
    images: ["/og/ansan"],
  },
  alternates: {
    canonical: "https://www.nomadthai.kr/ansan",
  },
};

export default function AnsanPage() {
  return (
    <LocationPage
      city="안산"
      cityEn="ansan"
      theme="green"
      heroImage="/images/location-1.jpg"
      teamImages={[
        { src: '/images/location-2.jpg', title: '주소 확인', desc: '받으실 주소와 건물명을 알려주세요', gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-3.jpg', title: '코스 안내', desc: '코스가 고민되면 차이부터 물어보세요', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-4.jpg', title: '일정 안내', desc: '원하는 시간에 예약할 수 있는지 확인하세요', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="안산에서 출장마사지를 찾으시면 단원구·상록구의 받으실 주소와 시간을 알려주세요. 타이·아로마·스웨디시 코스를 상담하며, 오후 7시~오전 4시에 문의를 받습니다."
      areas={["단원구", "상록구", "중앙동", "고잔동", "초지동", "선부동", "월피동", "성포동", "본오동", "사동"]}
      latitude="37.32187"
      longitude="126.83088"
      intro={
        <>
          <p>
            고잔·중앙·초지·선부동이나 월피·성포·본오·사동에서 예약을 원하시면 도로명 주소와 건물명을 보내주세요. 방문할 수 있는지 확인한 뒤 시간을 정합니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            타이·아로마·스웨디시 중 원하는 코스와 이용 시간을 말씀해주세요. 아직 코스를 고르지 않으셨다면 관리 방식과 금액부터 설명해드립니다. 공동현관 출입이나 방문 차량 등록이 필요한지도 함께 알려주세요.
          </p>
        </>
      }
      localGuide={
        <div className="mb-12 rounded-3xl border border-emerald-100 bg-white p-6 shadow-xl lg:p-10">
          <p className="font-semibold text-emerald-700">안산 방문 예약</p>
          <h2 className="mt-2 text-2xl font-bold text-gray-900 lg:text-4xl">단원구·상록구에서 예약할 때 알아둘 점</h2>
          <p className="mt-4 max-w-3xl leading-7 text-gray-600">건물명과 주소를 보내주시면 받으실 곳을 확인합니다. 집인지 숙소인지, 원하는 시간이 언제인지 함께 알려주세요.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl bg-emerald-50 p-5"><h3 className="font-bold text-gray-900">고잔·중앙·초지동</h3><p className="mt-2 text-sm leading-6 text-gray-600">아파트와 오피스텔은 동·건물명과 공동현관 출입 방법을 알려주세요. 방문 차량 등록이 필요한지도 확인 부탁드립니다.</p></article>
            <article className="rounded-2xl bg-teal-50 p-5"><h3 className="font-bold text-gray-900">선부동과 단원구</h3><p className="mt-2 text-sm leading-6 text-gray-600">도로명 주소와 건물명, 받고 싶은 시간을 보내주세요. 그 시간이 어렵다면 다른 시간도 괜찮은지 말씀해주세요.</p></article>
            <article className="rounded-2xl bg-cyan-50 p-5"><h3 className="font-bold text-gray-900">월피·성포동</h3><p className="mt-2 text-sm leading-6 text-gray-600">받으실 주소와 코스를 정하셨다면 예약 가능한 시간을 문의해주세요. 시간과 금액을 확인한 뒤 예약을 잡습니다.</p></article>
            <article className="rounded-2xl bg-slate-50 p-5"><h3 className="font-bold text-gray-900">본오·사동과 상록구</h3><p className="mt-2 text-sm leading-6 text-gray-600">호텔이나 숙소에서 받으실 때는 외부 방문객의 객실 출입이 허용되는지 먼저 확인해주세요.</p></article>
          </div>
        </div>
      }
      faqItems={[
        { question: "단원구와 상록구 모두 문의해도 되나요?", answer: "네. 고잔·초지·선부동과 월피·성포·본오·사동 등 받으실 주소를 보내주세요. 원하는 시간에 방문할 수 있는지 확인해드립니다." },
        { question: "안산에서 늦은 시간에 당일 예약할 수 있나요?", answer: "오후 7시~오전 4시에 당일 문의도 받습니다. 다만 원하는 시간의 예약 가능 여부는 확인이 필요합니다. 주소와 시간을 먼저 알려주세요." },
        { question: "안산 호텔이나 오피스텔에서 받으려면 뭘 확인하나요?", answer: "호텔은 외부 방문객의 객실 출입이 허용되는지 먼저 물어봐주세요. 오피스텔은 공동현관 출입 방법과 주차·방문 등록 절차를 알려주시면 됩니다." },
        { question: "예약할 때 입금해야 하나요?", answer: "선입금이나 예약금은 없습니다. 서비스가 끝난 뒤 예약할 때 확인한 금액을 현장에서 결제하시면 됩니다." },
      ]}
      relatedAreaSlugs={["siheung", "suwon", "hwaseong", "anyang"]}
      relatedContentLinks={[
        { href: "/blog/ansan-night-booking-guide", title: "안산에서 늦은 시간에 예약하기", description: "주소와 출입 방법, 받고 싶은 시간부터 알려주세요" },
        { href: "/blog/ansan-massage-guide", title: "안산에서 처음 예약한다면", description: "단원구·상록구의 집이나 숙소에서 받기 전에" },
        { href: "/blog/first-visit-reservation-payment-flow", title: "처음 문의부터 결제까지", description: "예약할 때 확인할 것과 이용 후 결제 순서" },
      ]}
      outro={
        <>
          <p>
            안산 어느 지역이든 출장·주차·야간 추가비는 없습니다. 오후 7시~오전 4시에 전화나 카카오톡으로 문의해주세요. 예약금 없이 서비스를 받으신 뒤 현장에서 결제합니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">단원구 · 상록구 · 중앙동 · 고잔동 · 초지동 · 선부동 · 월피동 · 성포동 · 본오동 · 사동</div>
        </>
      }
    />
  );
}
