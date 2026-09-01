import type { Metadata } from "next";
import LocationPage from "../components/LocationPage";

export const metadata: Metadata = {
  title: "안산출장마사지 | 경기도 안산 홈타이 예약 안내 | 오후 7시~오전 4시",
  description:
    "안산시 단원구·상록구 출장마사지·홈타이 예약 안내. 고잔·초지·선부·월피·성포·본오·사동 등 주소와 희망 시간을 확인하며 오후 7시~오전 4시 상담, 서비스 완료 후 현장 결제.",
  openGraph: {
    title: "안산출장마사지 | 경기도 안산 홈타이 예약 안내 | 노마드출장마사지",
    description: "안산 단원구·상록구의 주소와 희망 시간을 확인해 가능한 출장마사지 일정을 안내합니다.",
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
    description: "안산 출장마사지 예약 안내. 오후 7시~오전 4시 상담, 서비스 완료 후 현장 결제.",
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
        { src: '/images/location-2.jpg', title: '주소 확인', desc: '단원구·상록구와 세부 주소 확인', gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-3.jpg', title: '코스 안내', desc: '타이·아로마·스웨디시 코스별 상담', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-4.jpg', title: '일정 안내', desc: '접수 순서와 이동 동선 확인 후 안내', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="안산시 단원구·상록구 출장마사지·홈타이 예약 안내입니다. 고잔·초지·선부·월피·성포·본오·사동 등 주소와 희망 시간을 확인해 가능한 일정을 안내하며, 오후 7시~오전 4시 상담·서비스 완료 후 현장 결제 기준입니다."
      areas={["단원구", "상록구", "중앙동", "고잔동", "초지동", "선부동", "월피동", "성포동", "본오동", "사동"]}
      latitude="37.32187"
      longitude="126.83088"
      intro={
        <>
          <p>
            안산은 단원구와 상록구로 나뉘며, 고잔·중앙·초지·선부동과 월피·성포·본오·사동 등 위치에 따라 이동 동선이 달라집니다. 도로명 주소와 건물명, 출입 방법을 먼저 확인해 가능한 시간을 안내합니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            상담 시 주소와 건물명, 희망 시간 1·2순위, 타이·아로마·스웨디시 중 원하는 코스와 이용 시간, 공동현관·주차 정보를 알려주세요. 접수 순서와 이동 동선을 반영해 방문 가능 시간을 안내하고 서비스 완료 후 현장에서 결제합니다.
          </p>
        </>
      }
      localGuide={
        <div className="mb-12 rounded-3xl border border-emerald-100 bg-white p-6 shadow-xl lg:p-10">
          <p className="font-semibold text-emerald-700">ANSAN LOCAL GUIDE</p>
          <h2 className="mt-2 text-2xl font-bold text-gray-900 lg:text-4xl">안산 단원구·상록구 예약 확인 사항</h2>
          <p className="mt-4 max-w-3xl leading-7 text-gray-600">단원구와 상록구는 이동 동선이 달라 세부 주소와 출입 방법을 먼저 확인합니다.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl bg-emerald-50 p-5"><h3 className="font-bold text-gray-900">고잔·중앙·초지동</h3><p className="mt-2 text-sm leading-6 text-gray-600">오피스텔·아파트는 공동현관과 방문 등록, 주차 정보를 확인해주세요.</p></article>
            <article className="rounded-2xl bg-teal-50 p-5"><h3 className="font-bold text-gray-900">선부동과 단원구 생활권</h3><p className="mt-2 text-sm leading-6 text-gray-600">도로명 주소와 건물명, 희망 시간 1·2순위를 알려주세요.</p></article>
            <article className="rounded-2xl bg-cyan-50 p-5"><h3 className="font-bold text-gray-900">월피·성포동</h3><p className="mt-2 text-sm leading-6 text-gray-600">현재 위치와 접수 순서를 기준으로 방문 가능 시간을 확인합니다.</p></article>
            <article className="rounded-2xl bg-slate-50 p-5"><h3 className="font-bold text-gray-900">본오·사동과 상록구 생활권</h3><p className="mt-2 text-sm leading-6 text-gray-600">호텔·숙소는 외부 방문 허용 여부와 출입 절차를 먼저 확인해주세요.</p></article>
          </div>
        </div>
      }
      faqItems={[
        { question: "단원구와 상록구 모두 상담할 수 있나요?", answer: "고잔·초지·선부동과 월피·성포·본오·사동 등 정확한 주소를 확인해 가능한 시간을 안내합니다." },
        { question: "안산 심야 당일 문의도 가능한가요?", answer: "운영시간 안에 문의할 수 있으며, 접수 상황에 따라 가능한 시간이 달라질 수 있습니다." },
        { question: "안산 호텔이나 오피스텔은 무엇을 확인해야 하나요?", answer: "외부 방문 허용 여부, 공동현관·방문 등록과 주차 정보를 먼저 확인해주세요." },
        { question: "안산 결제 방식은 무엇인가요?", answer: "서비스 완료 후 현장 결제하는 후불제 기준입니다." },
      ]}
      relatedAreaSlugs={["siheung", "suwon", "hwaseong", "anyang"]}
      relatedContentLinks={[
        { href: "/blog/ansan-night-booking-guide", title: "안산 심야 예약 안내", description: "늦은 시간 문의 전 주소·출입·희망 시간 확인" },
        { href: "/blog/ansan-massage-guide", title: "안산 이용 안내", description: "단원구·상록구 생활권별 예약 정보" },
        { href: "/blog/first-visit-reservation-payment-flow", title: "첫 예약·결제 순서", description: "상담부터 서비스 완료 후 현장 결제까지" },
      ]}
      outro={
        <>
          <p>
            단원구·상록구의 표시된 생활권은 실제 주소와 희망 시간을 기준으로 가능한 일정을 안내합니다. 오후 7시~오전 4시 전화·카카오톡 상담이 가능하며 서비스 완료 후 현장에서 결제합니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">단원구 · 상록구 · 중앙동 · 고잔동 · 초지동 · 선부동 · 월피동 · 성포동 · 본오동 · 사동</div>
        </>
      }
    />
  );
}
