import type { Metadata } from "next";
import LocationPage from "../components/LocationPage";

export const metadata: Metadata = {
  title: "시흥출장마사지 | 시흥출장안마·홈타이 예약 안내 | 오후 7시~오전 4시",
  description: "시흥출장마사지·홈타이, 정왕·배곧·신천 등으로 직접 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없이 서비스 후 결제. 오후 7시~오전 4시 상담.",
  keywords:
    "시흥출장마사지, 시흥출장안마, 시흥 출장 안마, 시흥 홈타이, 시흥마사지, 시흥출장태국마사지, 정왕동출장마사지, 배곧동출장마사지, 신천동출장마사지, 대야동출장마사지, 은행동출장마사지, 목감동출장마사지, 장현동출장마사지, 능곡동출장마사지, 월곶동출장마사지, 군자동출장마사지, 시흥시출장마사지",
  openGraph: {
    title: "시흥출장마사지 | 시흥출장안마·홈타이 예약 안내 | 노마드출장마사지",
    description: "시흥출장마사지·홈타이, 정왕·배곧·신천 등으로 직접 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없이 서비스 후 결제. 오후 7시~오전 4시 상담.",
    url: "https://www.nomadthai.kr/siheung",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/og/siheung",
        width: 1200,
        height: 630,
        alt: "시흥출장마사지 - 노마드출장마사지 오후 7시~오전 4시 상담",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "시흥출장마사지 | 시흥출장안마 노마드출장마사지",
    description: "시흥출장마사지·홈타이, 정왕·배곧·신천 등으로 직접 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없이 서비스 후 결제. 오후 7시~오전 4시 상담.",
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
        { src: '/images/location-5.jpg', title: '방문 마사지', desc: "집·오피스텔·숙소로 직접 방문", gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-6.jpg', title: '마사지 코스', desc: '타이·아로마·스웨디시 60·90·120분', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-7.jpg', title: '후불 결제', desc: '예약금 없이 서비스 후 현장 결제', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="정왕동·배곧동·신천동에서 편한 휴식 공간으로 찾아갑니다. 타이 60분 7만원부터 시작하는 시흥 방문 마사지, 출장·주차·야간 추가비 없는 후불 결제입니다."
      areas={["정왕동", "배곧동", "신천동", "대야동", "은행동", "목감동", "장현동", "능곡동", "월곶동", "군자동"]}
      latitude="37.3802"
      longitude="126.8031"
      intro={
        <>
          <p>
            대야동·은행동의 아파트와 오피스텔 예약에는 주소와 건물명, 공동현관 출입 방법이 필요합니다. 호텔·숙소는 외부 방문객의 출입이 허용되는 경우에 이용할 수 있습니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            타이·아로마·스웨디시를 60·90·120분으로 제공합니다. 코스별 관리 방식과 선호 강도를 상담하고, 일정에 맞는 이용 시간을 정합니다.
          </p>
        </>
      }
      outro={
        <>
          <p>
            목감동·장현동·능곡동도 동일한 가격과 후불 결제를 적용합니다. 시흥 예약 상담은 오후 7시~오전 4시 전화·카카오톡으로 진행하며, 예약금은 없습니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">정왕동 배곧동 신천동 대야동 은행동 목감동 장현동 능곡동 월곶동 군자동</div>
        </>
      }
    />
  );
}
