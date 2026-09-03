import type { Metadata } from "next";
import LocationPage from "../components/LocationPage";

export const metadata: Metadata = {
  title: "시흥출장마사지 | 시흥출장안마·홈타이 예약 안내 | 오후 7시~오전 4시",
  description:
    "경기도 시흥시 전 지역 시흥출장마사지·시흥출장안마·시흥 홈타이 예약 안내. 오후 7시~오전 4시 운영, 100% 후불제로 이용 가능합니다.",
  keywords:
    "시흥출장마사지, 시흥출장안마, 시흥 출장 안마, 시흥 홈타이, 시흥마사지, 시흥출장태국마사지, 정왕동출장마사지, 배곧동출장마사지, 신천동출장마사지, 대야동출장마사지, 은행동출장마사지, 목감동출장마사지, 장현동출장마사지, 능곡동출장마사지, 월곶동출장마사지, 군자동출장마사지, 시흥시출장마사지",
  openGraph: {
    title: "시흥출장마사지 | 시흥출장안마·홈타이 예약 안내 | 노마드출장마사지",
    description: "경기도 시흥시 전 지역 시흥출장마사지·시흥출장안마 예약 안내. 오후 7시~오전 4시 운영, 100% 후불제로 안심하고 이용하세요.",
    url: "https://www.nomadthai.kr/siheung",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/og/siheung",
        width: 1200,
        height: 630,
        alt: "시흥출장마사지 - 노마드출장마사지 오후 7시~오전 4시 서비스",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "시흥출장마사지 | 시흥출장안마 노마드출장마사지",
    description: "시흥시 전 지역 오후 7시~오전 4시 시흥출장마사지·시흥 홈타이 예약. 100% 후불제로 이용 가능합니다.",
    images: ["/og/siheung"],
  },
  alternates: {
    canonical: "https://www.nomadthai.kr/siheung",
  },
};

export default function SiheungPage() {
  return (
    <LocationPage
      city="시흥"
      cityEn="siheung"
      theme="purple"
      heroImage="/images/location-6.jpg"
      teamImages={[
        { src: '/images/location-5.jpg', title: '예약 확인', desc: "위치·시간·코스를 상담할 때 확인", gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-6.jpg', title: '코스 안내', desc: '타이·아로마·스웨디시 코스별 안내', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-7.jpg', title: '방문 일정', desc: '접수 순서와 이동 동선 확인 후 안내', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="시흥출장마사지, 시흥출장안마, 시흥 홈타이 예약을 한곳에서 안내하는 노마드출장마사지 시흥 페이지입니다. 오후 7시부터 오전 4시까지 100% 후불제로 운영합니다."
      areas={["정왕동", "배곧동", "신천동", "대야동", "은행동", "목감동", "장현동", "능곡동", "월곶동", "군자동"]}
      latitude="37.3802"
      longitude="126.8031"
      intro={
        <>
          <p>
            시흥 정왕동, 배곧동, 신천동 중심으로 호텔·자택·오피스텔 방문 예약을 안내합니다. 늦은 시간에도 접수 순서에 따라 가능한 시간대를 빠르게 안내해드립니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            노마드출장마사지 시흥점은 대야동, 은행동 생활권 이동 동선을 고려해 타이·아로마·스웨디시 코스를 운영합니다. 시흥출장안마, 시흥 홈타이 문의 시 코스 소요 시간과 관리 방식을 먼저 설명해드립니다.
          </p>
        </>
      }
      outro={
        <>
          <p>
            시흥출장마사지 예약은 선입금 없이 100% 후불제로 운영됩니다. 목감동, 장현동, 능곡동 포함 시흥시 전역에서 오후 7시부터 오전 4시까지 이용 가능합니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">정왕동 배곧동 신천동 대야동 은행동 목감동 장현동 능곡동 월곶동 군자동</div>
        </>
      }
    />
  );
}
