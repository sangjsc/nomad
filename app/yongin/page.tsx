import type { Metadata } from "next";
import LocationPage from "../components/LocationPage";

export const metadata: Metadata = {
  title: "용인출장마사지 | 경기도 용인 홈타이 예약 안내 | 오후 7시~오전 4시",
  description:
    "용인시 처인구·기흥구·수지구 출장마사지·홈타이 예약 안내. 오후 7시~오전 4시 상담하며 세부 주소·희망 시간·이동 동선을 확인하고 서비스 완료 후 현장 결제합니다.",
  openGraph: {
    title: "용인출장마사지 | 경기도 용인 홈타이 예약 안내 | 노마드출장마사지",
    description: "용인 처인구·기흥구·수지구의 주소와 희망 시간을 확인해 가능한 출장마사지 일정을 안내합니다.",
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
    description: "용인 출장마사지 예약 안내. 오후 7시~오전 4시 상담, 서비스 완료 후 현장 결제.",
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
        { src: '/images/location-4.jpg', title: '주소 확인', desc: '처인·기흥·수지구와 세부 주소 확인', gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-5.jpg', title: '코스 안내', desc: '타이·아로마·스웨디시 코스별 상담', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-6.jpg', title: '일정 안내', desc: '접수 순서와 이동 동선 확인 후 안내', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="용인시 처인구·기흥구·수지구 출장마사지·홈타이 예약 안내입니다. 오후 7시~오전 4시 상담하며 세부 주소·희망 시간·이동 동선을 확인해 가능한 일정을 안내하고 서비스 완료 후 현장 결제합니다."
      areas={["처인구", "기흥구", "수지구", "포곡읍", "모현읍", "이동읍", "남사읍", "백암면", "양지면", "동백동", "보정동", "죽전동", "상현동"]}
      latitude="37.240245"
      longitude="127.178020"
      intro={
        <>
          <p>
            용인은 처인구·기흥구·수지구의 생활권과 이동 범위가 서로 다릅니다. 포곡·모현·이동·남사읍과 백암·양지면, 동백·보정·죽전·상현동 등 실제 주소를 확인해 권역별 가능한 시간을 안내합니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            도로명 주소와 건물명, 희망 시간 1·2순위, 코스와 이용 시간, 공동현관·주차 정보를 상담 시 알려주세요. 타이·아로마·스웨디시 중 원하는 방식을 확인하고 접수 순서와 이동 동선을 반영해 방문 가능 시간을 안내합니다.
          </p>
        </>
      }
      localGuide={
        <div className="mb-12 rounded-3xl border border-rose-100 bg-white p-6 shadow-xl lg:p-10">
          <p className="font-semibold text-rose-700">YONGIN LOCAL GUIDE</p>
          <h2 className="mt-2 text-2xl font-bold text-gray-900 lg:text-4xl">용인 3개 구 생활권별 예약 확인 사항</h2>
          <p className="mt-4 max-w-3xl leading-7 text-gray-600">처인구·기흥구·수지구는 이동 범위가 넓어 구 이름만으로는 시간을 확정하기 어렵습니다. 세부 주소와 희망 시간 두 가지를 함께 확인합니다.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl bg-rose-50 p-5"><h3 className="font-bold text-gray-900">처인구 도심·읍면권</h3><p className="mt-2 text-sm leading-6 text-gray-600">포곡·모현·이동·남사읍과 백암·양지면은 도로명 주소와 가까운 기준 지점을 알려주세요.</p></article>
            <article className="rounded-2xl bg-pink-50 p-5"><h3 className="font-bold text-gray-900">기흥구 생활권</h3><p className="mt-2 text-sm leading-6 text-gray-600">동백·보정동 등은 공동현관, 방문 등록과 주차 정보를 확인해주세요.</p></article>
            <article className="rounded-2xl bg-fuchsia-50 p-5"><h3 className="font-bold text-gray-900">수지구 생활권</h3><p className="mt-2 text-sm leading-6 text-gray-600">죽전·상현동 등 실제 주소와 희망 시간을 기준으로 가능한 동선을 확인합니다.</p></article>
            <article className="rounded-2xl bg-slate-50 p-5"><h3 className="font-bold text-gray-900">호텔·오피스텔 확인</h3><p className="mt-2 text-sm leading-6 text-gray-600">숙소 외부 방문 허용 여부, 공동현관과 방문 등록 절차를 먼저 확인해주세요.</p></article>
          </div>
        </div>
      }
      faqItems={[
        { question: "처인구·기흥구·수지구 모두 상담 가능한가요?", answer: "세 구의 정확한 주소와 희망 시간을 확인해 가능한 일정을 안내합니다." },
        { question: "포곡·모현·이동·남사읍이나 백암·양지면도 가능한가요?", answer: "실제 주소, 가까운 기준 지점과 희망 시간을 알려주시면 이동 동선을 확인합니다." },
        { question: "아파트·오피스텔·호텔에서는 무엇을 확인해야 하나요?", answer: "공동현관과 주차, 방문 등록 절차를 확인하고 호텔·숙소는 외부 방문 허용 여부를 먼저 확인해주세요." },
        { question: "용인 운영시간과 결제 방식은 무엇인가요?", answer: "오후 7시~오전 4시 상담하며, 서비스 완료 후 현장 결제 기준입니다." },
      ]}
      relatedAreaSlugs={["gwangju", "seongnam", "suwon", "icheon"]}
      relatedContentLinks={[
        { href: "/blog/yongin-dispatch-district-guide", title: "용인 권역별 예약 안내", description: "처인·기흥·수지구 주소 전달 방법" },
        { href: "/blog/yongin-cheoin-booking-checklist", title: "처인구 예약 체크리스트", description: "읍면 주소·기준 지점·출입 정보 확인" },
        { href: "/blog/yongin-suji-giheung-evening-guide", title: "수지·기흥 저녁 예약 안내", description: "공동현관·주차·희망 시간 준비 항목" },
      ]}
      outro={
        <>
          <p>
            처인구·기흥구·수지구와 표시된 읍·면·동은 실제 주소와 희망 시간을 확인해 가능한 일정을 안내합니다. 상담은 오후 7시~오전 4시이며 결제는 서비스 완료 후 현장에서 진행합니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">처인구 · 기흥구 · 수지구 · 포곡읍 · 모현읍 · 이동읍 · 남사읍 · 동백동 · 보정동 · 죽전동 · 상현동</div>
        </>
      }
    />
  );
}
