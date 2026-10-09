import type { Metadata } from "next";
import LocationPage from "../components/LocationPage";

export const metadata: Metadata = {
  title: "용인출장마사지 | 경기도 용인 홈타이 예약 안내 | 오후 7시~오전 4시",
  description: "용인출장마사지·홈타이, 처인구·기흥구·수지구로 직접 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없이 서비스 후 결제. 오후 7시~오전 4시 상담.",
  openGraph: {
    title: "용인출장마사지 | 경기도 용인 홈타이 예약 안내 | 노마드출장마사지",
    description: "용인출장마사지·홈타이, 처인구·기흥구·수지구로 직접 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없이 서비스 후 결제. 오후 7시~오전 4시 상담.",
    url: "https://www.nomadthai.kr/yongin",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/og/yongin",
        width: 1200,
        height: 630,
        alt: "용인출장마사지 - 노마드출장마사지 오후 7시~오전 4시 상담",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "용인출장마사지 | 노마드출장마사지",
    description: "용인출장마사지·홈타이, 처인구·기흥구·수지구로 직접 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없이 서비스 후 결제. 오후 7시~오전 4시 상담.",
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
        { src: '/images/location-4.jpg', title: '방문 마사지', desc: '집·오피스텔·숙소로 직접 방문', gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-5.jpg', title: '마사지 코스', desc: '타이·아로마·스웨디시 60·90·120분', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-6.jpg', title: '후불 결제', desc: '예약금 없이 서비스 후 현장 결제', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="처인구·기흥구·수지구에서 편한 공간 그대로 즐기는 용인 방문 마사지. 타이 60분 7만원부터, 출장·주차·야간 추가비 없이 이용 후 결제합니다."
      areas={["처인구", "기흥구", "수지구", "포곡읍", "모현읍", "이동읍", "남사읍", "백암면", "양지면", "동백동", "보정동", "죽전동", "상현동"]}
      latitude="37.240245"
      longitude="127.178020"
      intro={
        <>
          <p>
            포곡·모현·이동·남사읍과 백암·양지면, 동백·보정·죽전·상현동까지 용인 방문 예약을 받습니다. 자택과 오피스텔은 물론, 외부 방문이 허용되는 숙소에서도 이용할 수 있습니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            타이·아로마·스웨디시를 60·90·120분 코스로 제공합니다. 관리 방식과 선호 강도에 맞춰 코스를 정하고, 공개 가격표의 금액으로 이용합니다.
          </p>
        </>
      }
      localGuide={
        <div className="mb-12 rounded-3xl border border-rose-100 bg-white p-6 shadow-xl lg:p-10">
          <p className="font-semibold text-rose-700">용인 방문 예약</p>
          <h2 className="mt-2 text-2xl font-bold text-gray-900 lg:text-4xl">처인구·기흥구·수지구 방문 서비스</h2>
          <p className="mt-4 max-w-3xl leading-7 text-gray-600">도로명 주소·건물명·희망 시간을 기준으로 방문 일정을 상담합니다. 출입·주차 정보는 예약 시 접수하며, 숙소는 외부 방문객의 객실 출입이 허용되어야 합니다.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl bg-rose-50 p-5"><h3 className="font-bold text-gray-900">처인구와 읍·면</h3><p className="mt-2 text-sm leading-6 text-gray-600">포곡·모현·이동·남사읍과 백암·양지면도 방문 예약을 받습니다. 찾기 어려운 입구는 가까운 표지를 기준으로 안내합니다.</p></article>
            <article className="rounded-2xl bg-pink-50 p-5"><h3 className="font-bold text-gray-900">기흥구</h3><p className="mt-2 text-sm leading-6 text-gray-600">동백·보정동의 자택과 오피스텔로 방문합니다. 공동현관과 방문 차량 등록이 필요한 건물도 예약 시 출입 절차를 접수합니다.</p></article>
            <article className="rounded-2xl bg-fuchsia-50 p-5"><h3 className="font-bold text-gray-900">수지구</h3><p className="mt-2 text-sm leading-6 text-gray-600">죽전·상현동 등 수지구도 동일한 코스와 가격으로 이용할 수 있습니다. 출장·주차·야간 추가비는 없습니다.</p></article>
            <article className="rounded-2xl bg-slate-50 p-5"><h3 className="font-bold text-gray-900">호텔·오피스텔 방문</h3><p className="mt-2 text-sm leading-6 text-gray-600">별도의 매장 방문 없이 예약한 장소에서 서비스를 받습니다. 결제는 예약금 없이 관리가 끝난 뒤 현장에서 진행합니다.</p></article>
          </div>
        </div>
      }
      faqItems={[
        { question: "처인구·기흥구·수지구 모두 방문하나요?", answer: "네. 세 지역 모두 방문 예약을 받습니다. 주소와 당일 예약 현황에 따라 방문 시간을 안내합니다." },
        { question: "포곡·모현·이동·남사읍이나 백암·양지면도 오시나요?", answer: "해당 읍·면도 방문 예약을 받으며 추가 출장비는 없습니다. 방문 일정은 도로명 주소와 예약 현황을 기준으로 정합니다." },
        { question: "아파트나 오피스텔, 호텔에서도 받을 수 있나요?", answer: "자택·오피스텔에서 이용할 수 있으며 공동현관과 방문 차량 등록 정보가 필요합니다. 호텔·숙소는 외부 방문객의 객실 출입이 허용되는 경우에 이용할 수 있습니다." },
        { question: "몇 시에 문의할 수 있고, 결제는 언제 하나요?", answer: "상담시간은 오후 7시부터 다음 날 오전 4시까지입니다. 예약금과 선입금 없이 서비스 후 현장에서 결제합니다." },
      ]}
      relatedAreaSlugs={["gwangju", "seongnam", "suwon", "icheon"]}
      relatedContentLinks={[
        { href: "/blog/yongin-dispatch-district-guide", title: "용인에서 예약할 때 주소 보내기", description: "처인·기흥·수지구의 방문 지역과 주소 안내" },
        { href: "/blog/yongin-cheoin-booking-checklist", title: "처인구 읍·면에서 예약하기", description: "도로명 주소와 건물 입구 확인하기" },
        { href: "/blog/yongin-suji-giheung-evening-guide", title: "수지·기흥에서 저녁에 예약하기", description: "공동현관과 주차, 원하는 시간 미리 확인하기" },
      ]}
      outro={
        <>
          <p>
            용인 전 지역에 출장·주차·야간 추가비 없는 후불 결제를 적용합니다. 전화·카카오톡 예약 상담은 오후 7시부터 다음 날 오전 4시까지입니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">처인구 · 기흥구 · 수지구 · 포곡읍 · 모현읍 · 이동읍 · 남사읍 · 동백동 · 보정동 · 죽전동 · 상현동</div>
        </>
      }
    />
  );
}
