import type { Metadata } from "next";
import LocationPage from "../components/LocationPage";

export const metadata: Metadata = {
  title: "파주출장마사지 | 파주출장안마·홈타이 예약 안내 | 오후 7시~오전 4시",
  description: "파주출장마사지·홈타이 예약 상담. 금촌·운정·야당 등 주소와 시간을 확인합니다. 오후 7시~오전 4시 문의, 선입금과 출장·주차·야간 추가비 없음.",
  keywords:
    "파주출장마사지, 파주출장안마, 파주 출장 안마, 파주 홈타이, 파주마사지, 파주출장태국마사지, 금촌동출장마사지, 운정신도시출장마사지, 야당동출장마사지, 교하동출장마사지, 문산읍출장마사지, 조리읍출장마사지, 파주읍출장마사지, 탄현면출장마사지, 월롱면출장마사지, 법원읍출장마사지, 파주시출장마사지",
  openGraph: {
    title: "파주출장마사지 | 파주출장안마·홈타이 예약 안내 | 노마드출장마사지",
    description: "파주출장마사지·홈타이 예약 상담. 금촌·운정·야당 등 주소와 시간을 확인합니다. 오후 7시~오전 4시 문의, 선입금과 출장·주차·야간 추가비 없음.",
    url: "https://www.nomadthai.kr/paju",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/og/paju",
        width: 1200,
        height: 630,
        alt: "파주출장마사지 - 노마드출장마사지 오후 7시~오전 4시 서비스",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "파주출장마사지 | 파주출장안마 노마드출장마사지",
    description: "파주출장마사지·홈타이 예약 상담. 금촌·운정·야당 등 주소와 시간을 확인합니다. 오후 7시~오전 4시 문의, 선입금과 출장·주차·야간 추가비 없음.",
    images: ["/og/paju"],
  },
  alternates: {
    canonical: "https://www.nomadthai.kr/paju",
  },
};

export default function PajuPage() {
  return (
    <LocationPage
      city="파주"
      cityEn="paju"
      theme="amber"
      heroImage="/images/location-4.jpg"
      teamImages={[
        { src: '/images/location-5.jpg', title: '예약 확인', desc: "받으실 주소와 원하는 시간을 알려주세요", gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-6.jpg', title: '코스 안내', desc: '코스가 고민되면 차이부터 물어보세요', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-7.jpg', title: '방문 일정', desc: '방문 시간과 총금액을 예약 전에 확인하세요', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="파주에서 받으실 주소와 원하는 시간을 보내주세요. 금촌동·운정신도시·야당동 등 방문 가능 여부를 확인해 예약을 도와드립니다. 상담은 오후 7시~오전 4시까지입니다."
      areas={["금촌동", "운정신도시", "야당동", "교하동", "문산읍", "조리읍", "파주읍", "탄현면", "월롱면", "법원읍"]}
      latitude="37.7599"
      longitude="126.7802"
      intro={
        <>
          <p>
            교하동이나 문산읍에서 문의하실 때도 정확한 도로명 주소와 건물명을 알려주세요. 주소만으로 입구를 찾기 어려우면 가까운 건물이나 표지를 함께 적어주시면 좋습니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            타이·아로마·스웨디시 중 원하는 코스와 이용 시간을 말씀해주세요. 집은 공동현관 출입 방법을, 호텔·숙소는 외부 방문객 출입이 되는지 확인해주세요. 코스와 금액은 예약을 잡기 전에 설명해드립니다.
          </p>
        </>
      }
      outro={
        <>
          <p>
            조리읍·파주읍·탄현면을 포함해 지역에 따른 출장 추가비는 없습니다. 주차비와 야간 추가비도 받지 않습니다. 선입금 없이 이용 후 현장에서 결제해주세요.
          </p>
          <div className="mt-4 text-sm text-gray-600">금촌동 운정신도시 야당동 교하동 문산읍 조리읍 파주읍 탄현면 월롱면 법원읍</div>
        </>
      }
    />
  );
}
