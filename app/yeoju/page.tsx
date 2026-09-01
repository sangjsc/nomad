import type { Metadata } from "next";
import LocationPage from "../components/LocationPage";

export const metadata: Metadata = {
  title: "여주출장마사지 | 경기도 여주시 홈타이 예약 안내 | 오후 7시~오전 4시",
  description:
    "여흥동·중앙동·오학동, 가남읍과 여주시 읍·면 출장마사지·홈타이 예약 안내. 오후 7시~오전 4시 상담, 주소와 이동 동선 확인, 서비스 완료 후 현장 결제.",
  openGraph: {
    title: "여주출장마사지 | 경기도 여주시 홈타이 예약 안내 | 노마드출장마사지",
    description: "여주시 동·읍·면의 주소와 희망 시간을 확인해 가능한 출장마사지 예약 일정을 안내합니다.",
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
    description: "여주시 출장마사지 예약 안내. 오후 7시~오전 4시 상담, 서비스 완료 후 현장 결제.",
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
        { src: '/images/location-3.jpg', title: '주소 확인', desc: '읍면동·건물명과 가까운 기준 지점 확인', gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-4.jpg', title: '코스 안내', desc: '타이·아로마·스웨디시 코스별 상담', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-5.jpg', title: '일정 안내', desc: '접수 순서와 이동 동선 확인 후 안내', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="여흥동·중앙동·오학동, 가남읍과 여주시 읍·면 출장마사지·홈타이 예약 안내입니다. 오후 7시~오전 4시 상담하며 주소·희망 시간·이동 동선을 확인해 가능한 일정을 안내하고 서비스 완료 후 현장 결제합니다."
      areas={["여흥동", "중앙동", "오학동", "가남읍", "점동면", "세종대왕면", "흥천면", "금사면", "산북면", "대신면", "북내면", "강천면"]}
      latitude="37.297809"
      longitude="127.637352"
      intro={
        <>
          <p>
            여주는 여흥·중앙·오학동과 가남읍, 점동·세종대왕·흥천·금사·산북·대신·북내·강천면으로 생활권이 나뉩니다. 읍·면 문의는 도로명 주소와 건물명 또는 가까운 기준 지점을 함께 알려주시면 가능한 시간을 확인하기 쉽습니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            상담 시 정확한 주소, 희망 시간 1·2순위, 타이·아로마·스웨디시 중 원하는 코스와 이용 시간, 출입·주차 정보를 확인합니다. 접수 순서와 이동 동선을 반영해 가능한 시간을 안내하며 결제는 서비스 완료 후 현장에서 진행합니다.
          </p>
        </>
      }
      localGuide={
        <div className="mb-12 rounded-3xl border border-amber-100 bg-white p-6 shadow-xl lg:p-10">
          <p className="font-semibold text-amber-700">YEOJU LOCAL GUIDE</p>
          <h2 className="mt-2 text-2xl font-bold text-gray-900 lg:text-4xl">여주시 생활권별 예약 확인 사항</h2>
          <p className="mt-4 max-w-3xl leading-7 text-gray-600">여주 도심과 읍·면은 이동 범위가 다르므로 정확한 주소와 가능한 대체 시간을 함께 확인합니다.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl bg-amber-50 p-5"><h3 className="font-bold text-gray-900">여흥·중앙·오학동</h3><p className="mt-2 text-sm leading-6 text-gray-600">자택·오피스텔은 공동현관, 방문 등록과 주차 위치를 확인해주세요.</p></article>
            <article className="rounded-2xl bg-orange-50 p-5"><h3 className="font-bold text-gray-900">가남읍·점동면</h3><p className="mt-2 text-sm leading-6 text-gray-600">도로명 주소와 건물명, 가까운 기준 지점을 함께 알려주세요.</p></article>
            <article className="rounded-2xl bg-yellow-50 p-5"><h3 className="font-bold text-gray-900">세종대왕·흥천·금사·산북면</h3><p className="mt-2 text-sm leading-6 text-gray-600">희망 시간 1·2순위와 코스·이용 시간을 확인해 동선을 안내합니다.</p></article>
            <article className="rounded-2xl bg-slate-50 p-5"><h3 className="font-bold text-gray-900">대신·북내·강천면</h3><p className="mt-2 text-sm leading-6 text-gray-600">출입 방법과 주차 정보까지 알려주시면 가능한 일정을 확인하기 좋습니다.</p></article>
          </div>
        </div>
      }
      faqItems={[
        { question: "여주 읍·면 지역도 예약 상담이 가능한가요?", answer: "가남읍과 점동·세종대왕·흥천·금사·산북·대신·북내·강천면의 정확한 주소를 확인해 가능한 시간을 안내합니다." },
        { question: "주말 당일에도 문의할 수 있나요?", answer: "가능합니다. 다만 위치와 접수 상황에 따라 시간이 달라지므로 희망 시간 두 가지를 알려주세요." },
        { question: "읍·면 심야 문의 시 무엇이 필요한가요?", answer: "도로명 주소·건물명, 가까운 기준 지점, 출입·주차 정보, 희망 시간과 이용 코스를 알려주세요." },
        { question: "여주 결제 방식은 무엇인가요?", answer: "예약금이나 선결제가 아닌 서비스 완료 후 현장 결제 기준입니다." },
      ]}
      relatedAreaSlugs={["icheon", "yongin", "gwangju", "anseong"]}
      relatedContentLinks={[
        { href: "/blog/yeoju-massage-guide", title: "여주 이용 안내", description: "여주 도심과 읍면 예약 전 확인할 내용" },
        { href: "/blog/yeoju-eup-myeon-night-booking-guide", title: "여주 읍면 심야 예약 안내", description: "읍면 주소·기준 지점·희망 시간 전달 방법" },
        { href: "/blog/yeoju-weekend-reservation-faq", title: "여주 주말 예약 FAQ", description: "주말 당일 문의 시 준비할 정보" },
      ]}
      outro={
        <>
          <p>
            여흥·중앙·오학동과 가남읍 및 표시된 면 지역은 주소와 희망 시간을 확인해 가능한 일정을 안내합니다. 오후 7시~오전 4시 전화·카카오톡으로 문의할 수 있으며 서비스 완료 후 현장에서 결제합니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">여흥동 · 중앙동 · 오학동 · 가남읍 · 점동면 · 세종대왕면 · 흥천면 · 금사면 · 산북면 · 대신면 · 북내면 · 강천면</div>
        </>
      }
    />
  );
}
