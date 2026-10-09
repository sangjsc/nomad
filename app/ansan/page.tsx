import type { Metadata } from "next";
import LocationPage from "../components/LocationPage";

export const metadata: Metadata = {
  title: "안산출장마사지 | 경기도 안산 홈타이 예약 안내 | 오후 7시~오전 4시",
  description: "안산출장마사지·홈타이, 단원구·상록구의 집과 숙소로 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없이 이용 후 결제. 오후 7시~오전 4시 상담.",
  openGraph: {
    title: "안산출장마사지 | 경기도 안산 홈타이 예약 안내 | 노마드출장마사지",
    description: "안산출장마사지·홈타이, 단원구·상록구의 집과 숙소로 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없이 이용 후 결제. 오후 7시~오전 4시 상담.",
    url: "https://www.nomadthai.kr/ansan",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/og/ansan",
        width: 1200,
        height: 630,
        alt: "안산출장마사지 - 노마드출장마사지 오후 7시~오전 4시 상담",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "안산출장마사지 | 노마드출장마사지",
    description: "안산출장마사지·홈타이, 단원구·상록구의 집과 숙소로 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없이 이용 후 결제. 오후 7시~오전 4시 상담.",
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
        { src: '/images/location-2.jpg', title: '방문 마사지', desc: '집·오피스텔·숙소로 직접 방문', gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-3.jpg', title: '마사지 코스', desc: '타이·아로마·스웨디시 60·90·120분', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-4.jpg', title: '후불 결제', desc: '예약금 없이 서비스 후 현장 결제', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="단원구·상록구의 집과 숙소에서 즐기는 방문 마사지. 타이 60분 7만원부터 아로마·스웨디시까지, 출장·주차·야간 추가비 없이 서비스를 받은 뒤 결제합니다."
      areas={["단원구", "상록구", "중앙동", "고잔동", "초지동", "선부동", "월피동", "성포동", "본오동", "사동"]}
      latitude="37.32187"
      longitude="126.83088"
      intro={
        <>
          <p>
            고잔·중앙·초지·선부동과 월피·성포·본오·사동으로 방문합니다. 집이나 오피스텔에서 이동 없이 쉬는 시간에 맞춰 타이·아로마·스웨디시를 이용할 수 있습니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            60·90·120분 코스로 구성되어 짧은 휴식부터 여유 있는 관리까지 선택할 수 있습니다. 코스별 금액은 가격표에 공개하며 예약금 없이 이용 후 결제합니다.
          </p>
        </>
      }
      localGuide={
        <div className="mb-12 rounded-3xl border border-emerald-100 bg-white p-6 shadow-xl lg:p-10">
          <p className="font-semibold text-emerald-700">안산 방문 예약</p>
          <h2 className="mt-2 text-2xl font-bold text-gray-900 lg:text-4xl">단원구·상록구 방문 서비스</h2>
          <p className="mt-4 max-w-3xl leading-7 text-gray-600">주소·건물명·희망 시간·코스를 기준으로 예약을 접수합니다. 공동현관과 주차·방문 등록 정보가 필요하며, 숙소는 외부 방문객 출입이 허용되어야 합니다.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl bg-emerald-50 p-5"><h3 className="font-bold text-gray-900">고잔·중앙·초지동</h3><p className="mt-2 text-sm leading-6 text-gray-600">고잔·중앙·초지동의 아파트와 오피스텔로 방문합니다. 타이·아로마·스웨디시를 60·90·120분으로 이용할 수 있습니다.</p></article>
            <article className="rounded-2xl bg-teal-50 p-5"><h3 className="font-bold text-gray-900">선부동과 단원구</h3><p className="mt-2 text-sm leading-6 text-gray-600">선부동을 비롯한 단원구에서 방문 예약을 받습니다. 실제 방문 시간은 주소와 당일 예약 일정에 따라 안내합니다.</p></article>
            <article className="rounded-2xl bg-cyan-50 p-5"><h3 className="font-bold text-gray-900">월피·성포동</h3><p className="mt-2 text-sm leading-6 text-gray-600">월피·성포동도 공개 가격표의 금액을 그대로 적용합니다. 출장·주차·야간 추가비와 예약금은 없습니다.</p></article>
            <article className="rounded-2xl bg-slate-50 p-5"><h3 className="font-bold text-gray-900">본오·사동과 상록구</h3><p className="mt-2 text-sm leading-6 text-gray-600">본오·사동의 자택과 숙소에서도 방문 마사지를 이용할 수 있습니다. 서비스가 끝난 뒤 현장에서 결제합니다.</p></article>
          </div>
        </div>
      }
      faqItems={[
        { question: "단원구와 상록구 모두 방문하나요?", answer: "네. 고잔·초지·선부동과 월피·성포·본오·사동 등 두 구에서 방문 예약을 받습니다. 방문 일정은 주소와 예약 현황에 따라 안내합니다." },
        { question: "안산에서 늦은 시간에 당일 예약할 수 있나요?", answer: "오후 7시~오전 4시에 당일 예약 상담을 받습니다. 실제 방문 시간은 주소와 예약 현황에 따라 정합니다." },
        { question: "안산 호텔이나 오피스텔에서 받으려면 뭘 확인하나요?", answer: "호텔은 외부 방문객의 객실 출입이 허용되어야 합니다. 오피스텔은 공동현관 출입 방법과 주차·방문 등록 정보가 필요합니다." },
        { question: "예약할 때 입금해야 하나요?", answer: "선입금과 예약금은 없습니다. 서비스가 끝난 뒤 예약 시 안내한 금액을 현장에서 결제합니다." },
      ]}
      relatedAreaSlugs={["siheung", "suwon", "hwaseong", "anyang"]}
      relatedContentLinks={[
        { href: "/blog/ansan-night-booking-guide", title: "안산에서 늦은 시간에 예약하기", description: "야간 방문 예약과 건물 출입 안내" },
        { href: "/blog/ansan-massage-guide", title: "안산에서 처음 예약한다면", description: "단원구·상록구의 집이나 숙소에서 받기 전에" },
        { href: "/blog/first-visit-reservation-payment-flow", title: "처음 문의부터 결제까지", description: "예약할 때 확인할 것과 이용 후 결제 순서" },
      ]}
      outro={
        <>
          <p>
            안산 출장마사지 전화·카카오톡 상담은 오후 7시~오전 4시입니다. 방문 일정과 코스는 예약 시 안내하며, 출장·주차·야간 추가비는 없습니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">단원구 · 상록구 · 중앙동 · 고잔동 · 초지동 · 선부동 · 월피동 · 성포동 · 본오동 · 사동</div>
        </>
      }
    />
  );
}
