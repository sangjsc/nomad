import type { Metadata } from "next";
import LocationPage from "../components/LocationPage";

export const metadata: Metadata = {
  title: "여주출장마사지 | 경기도 여주시 홈타이 예약 안내 | 오후 7시~오전 4시",
  description: "여주출장마사지·홈타이, 여흥·중앙·오학동부터 가남읍까지 직접 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없는 후불 결제. 오후 7시~오전 4시 상담.",
  openGraph: {
    title: "여주출장마사지 | 경기도 여주시 홈타이 예약 안내 | 노마드출장마사지",
    description: "여주출장마사지·홈타이, 여흥·중앙·오학동부터 가남읍까지 직접 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없는 후불 결제. 오후 7시~오전 4시 상담.",
    url: "https://www.nomadthai.kr/yeoju",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/og/yeoju",
        width: 1200,
        height: 630,
        alt: "여주출장마사지 - 노마드출장마사지 오후 7시~오전 4시 상담",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "여주출장마사지 | 노마드출장마사지",
    description: "여주출장마사지·홈타이, 여흥·중앙·오학동부터 가남읍까지 직접 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없는 후불 결제. 오후 7시~오전 4시 상담.",
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
        { src: '/images/location-3.jpg', title: '방문 마사지', desc: '집·오피스텔·숙소로 직접 방문', gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-4.jpg', title: '마사지 코스', desc: '타이·아로마·스웨디시 60·90·120분', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-5.jpg', title: '후불 결제', desc: '예약금 없이 서비스 후 현장 결제', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="여주 도심부터 가남읍·점동면까지 찾아가는 출장마사지. 타이 60분 7만원부터 아로마·스웨디시까지, 출장·주차·야간 추가비 없이 이용 후 현장에서 결제합니다."
      areas={["여흥동", "중앙동", "오학동", "가남읍", "점동면", "세종대왕면", "흥천면", "금사면", "산북면", "대신면", "북내면", "강천면"]}
      latitude="37.297809"
      longitude="127.637352"
      intro={
        <>
          <p>
            여흥·중앙·오학동과 가남읍의 자택·오피스텔·숙소로 방문합니다. 점동·세종대왕·흥천·금사·산북·대신·북내·강천면도 같은 가격과 결제 기준을 적용합니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            타이·아로마·스웨디시를 60·90·120분으로 제공합니다. 코스별 관리 방식과 강도는 상담에서 안내하며, 이용 시간에 맞춰 예약할 수 있습니다.
          </p>
        </>
      }
      localGuide={
        <div className="mb-12 rounded-3xl border border-amber-100 bg-white p-6 shadow-xl lg:p-10">
          <p className="font-semibold text-amber-700">여주 방문 예약</p>
          <h2 className="mt-2 text-2xl font-bold text-gray-900 lg:text-4xl">여주 시내부터 읍·면까지 방문</h2>
          <p className="mt-4 max-w-3xl leading-7 text-gray-600">예약 접수 항목은 주소·건물명·희망 시간·코스입니다. 출입구와 주차 위치를 기준으로 방문하며, 숙소는 외부 방문객 출입이 허용되어야 합니다.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl bg-amber-50 p-5"><h3 className="font-bold text-gray-900">여흥·중앙·오학동</h3><p className="mt-2 text-sm leading-6 text-gray-600">여주 시내의 자택과 오피스텔로 방문합니다. 타이·아로마·스웨디시를 60·90·120분으로 이용할 수 있습니다.</p></article>
            <article className="rounded-2xl bg-orange-50 p-5"><h3 className="font-bold text-gray-900">가남읍·점동면</h3><p className="mt-2 text-sm leading-6 text-gray-600">가남읍·점동면도 출장비 없이 방문 예약을 받습니다. 입구가 여러 곳인 건물은 예약 시 진입 위치를 함께 접수합니다.</p></article>
            <article className="rounded-2xl bg-yellow-50 p-5"><h3 className="font-bold text-gray-900">세종대왕·흥천·금사·산북면</h3><p className="mt-2 text-sm leading-6 text-gray-600">읍·면 지역도 공개 가격표와 후불 결제를 동일하게 적용합니다. 방문 시간은 주소와 예약 현황에 따라 안내합니다.</p></article>
            <article className="rounded-2xl bg-slate-50 p-5"><h3 className="font-bold text-gray-900">대신·북내·강천면</h3><p className="mt-2 text-sm leading-6 text-gray-600">대신·북내·강천면의 자택과 숙소에서도 방문 서비스를 이용할 수 있습니다. 야간이나 주차에 따른 추가비는 없습니다.</p></article>
          </div>
        </div>
      }
      faqItems={[
        { question: "여주 읍·면 지역도 방문하나요?", answer: "가남읍과 점동·세종대왕·흥천·금사·산북·대신·북내·강천면 모두 방문 예약을 받습니다. 실제 방문 시간은 주소와 예약 일정에 따라 안내합니다." },
        { question: "주말 당일 예약도 가능한가요?", answer: "주말에도 당일 예약 상담을 받습니다. 예약 가능 시간은 당일 일정에 따라 달라지며, 상담 후 확정합니다." },
        { question: "읍·면 야간 예약에는 어떤 정보가 필요한가요?", answer: "주소·건물명·희망 시간·코스와 출입·주차 정보가 필요합니다. 입구가 찾기 어려운 경우에는 가까운 표지가 방문 기준이 됩니다." },
        { question: "예약할 때 미리 결제하나요?", answer: "예약금과 선입금은 없습니다. 서비스가 끝난 뒤 현장에서 결제합니다." },
      ]}
      relatedAreaSlugs={["icheon", "yongin", "gwangju", "anseong"]}
      relatedContentLinks={[
        { href: "/blog/yeoju-massage-guide", title: "여주에서 처음 예약한다면", description: "집이나 숙소에서 받기 전에 알아둘 내용" },
        { href: "/blog/yeoju-eup-myeon-night-booking-guide", title: "여주 읍·면의 늦은 시간 예약", description: "읍·면별 주소·출입 및 방문 일정 안내" },
        { href: "/blog/yeoju-weekend-reservation-faq", title: "여주 주말 예약, 자주 묻는 질문", description: "주말 당일 예약과 방문 일정" },
      ]}
      outro={
        <>
          <p>
            여주 읍·면 지역도 출장·주차·야간 추가비가 없습니다. 오후 7시~오전 4시 전화·카카오톡 예약, 예약금 없이 서비스 후 현장 결제입니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">여흥동 · 중앙동 · 오학동 · 가남읍 · 점동면 · 세종대왕면 · 흥천면 · 금사면 · 산북면 · 대신면 · 북내면 · 강천면</div>
        </>
      }
    />
  );
}
