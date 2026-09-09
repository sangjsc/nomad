import type { Metadata } from "next";
import LocationPage from "../components/LocationPage";

export const metadata: Metadata = {
  title: "시흥출장마사지 | 시흥출장안마·홈타이 예약 안내 | 오후 7시~오전 4시",
  description: "시흥출장마사지·홈타이, 정왕·배곧·신천 등 방문 예약 상담. 오후 7시~오전 4시 문의, 타이·아로마·스웨디시 코스와 추가비 없는 후불 결제.",
  keywords:
    "시흥출장마사지, 시흥출장안마, 시흥 출장 안마, 시흥 홈타이, 시흥마사지, 시흥출장태국마사지, 정왕동출장마사지, 배곧동출장마사지, 신천동출장마사지, 대야동출장마사지, 은행동출장마사지, 목감동출장마사지, 장현동출장마사지, 능곡동출장마사지, 월곶동출장마사지, 군자동출장마사지, 시흥시출장마사지",
  openGraph: {
    title: "시흥출장마사지 | 시흥출장안마·홈타이 예약 안내 | 노마드출장마사지",
    description: "시흥출장마사지·홈타이, 정왕·배곧·신천 등 방문 예약 상담. 오후 7시~오전 4시 문의, 타이·아로마·스웨디시 코스와 추가비 없는 후불 결제.",
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
    description: "시흥출장마사지·홈타이, 정왕·배곧·신천 등 방문 예약 상담. 오후 7시~오전 4시 문의, 타이·아로마·스웨디시 코스와 추가비 없는 후불 결제.",
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
        { src: '/images/location-5.jpg', title: '예약 확인', desc: "받으실 주소와 원하는 시간을 알려주세요", gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-6.jpg', title: '코스 안내', desc: '코스가 고민되면 차이부터 물어보세요', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-7.jpg', title: '방문 일정', desc: '방문 시간과 총금액을 예약 전에 확인하세요', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="시흥에서 집이나 숙소로 부르는 마사지를 찾고 계신가요? 정왕동·배곧동·신천동 등 받으실 주소와 시간을 알려주세요. 오후 7시~오전 4시에 상담할 수 있습니다."
      areas={["정왕동", "배곧동", "신천동", "대야동", "은행동", "목감동", "장현동", "능곡동", "월곶동", "군자동"]}
      latitude="37.3802"
      longitude="126.8031"
      intro={
        <>
          <p>
            대야동·은행동에서 아파트나 오피스텔로 예약하실 때는 건물명과 공동현관 출입 방법을 함께 보내주세요. 호텔이나 숙소에 계시면 외부 방문객이 들어올 수 있는지 먼저 확인해주세요.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            타이·아로마·스웨디시 가운데 어떤 코스를 고를지 고민되면 이용 시간과 선호하는 강도를 말씀해주세요. 코스별 차이를 설명하고 방문할 수 있는 시간을 확인해드립니다.
          </p>
        </>
      }
      outro={
        <>
          <p>
            목감동·장현동·능곡동도 출장·주차·야간 추가비가 없습니다. 방문 시간과 코스, 금액을 확인한 뒤 예약하시고 마사지를 받으신 후 현장에서 결제하시면 됩니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">정왕동 배곧동 신천동 대야동 은행동 목감동 장현동 능곡동 월곶동 군자동</div>
        </>
      }
    />
  );
}
