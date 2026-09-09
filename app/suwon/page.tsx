import type { Metadata } from "next";
import LocationPage from "../components/LocationPage";

export const metadata: Metadata = {
  title: "수원출장마사지 | 경기도 수원 홈타이 예약 안내 | 오후 7시~오전 4시",
  description: "수원출장마사지·홈타이 예약은 노마드출장마사지에 문의하세요. 타이·아로마·스웨디시 코스, 오후 7시~오전 4시 상담. 선입금 없이 이용 후 결제합니다.",
  keywords:
    "수원출장마사지, 수원홈타이, 수원출장태국마사지, 수원출장안마, 수원마사지, 팔달구출장마사지, 영통구출장마사지, 권선구출장마사지, 장안구출장마사지, 인계동출장마사지, 광교출장마사지, 매탄동출장마사지, 세류동출장마사지, 정자동출장마사지, 호매실동출장마사지, 수원시출장마사지",
  openGraph: {
    title: "수원출장마사지 | 경기도 수원 홈타이 예약 안내 | 노마드출장마사지",
    description: "수원출장마사지·홈타이 예약은 노마드출장마사지에 문의하세요. 타이·아로마·스웨디시 코스, 오후 7시~오전 4시 상담. 선입금 없이 이용 후 결제합니다.",
    url: "https://www.nomadthai.kr/suwon",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/og/suwon",
        width: 1200,
        height: 630,
        alt: "수원출장마사지 - 노마드출장마사지 오후 7시~오전 4시 서비스",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "수원출장마사지 | 노마드출장마사지",
    description: "수원출장마사지·홈타이 예약은 노마드출장마사지에 문의하세요. 타이·아로마·스웨디시 코스, 오후 7시~오전 4시 상담. 선입금 없이 이용 후 결제합니다.",
    images: ["/og/suwon"],
  },
  alternates: {
    canonical: "https://www.nomadthai.kr/suwon",
  },
};

export default function SuwonPage() {
  return (
    <LocationPage
      city="수원"
      cityEn="suwon"
      theme="rose"
      heroImage="/images/location-9.jpg"
      teamImages={[
        { src: '/images/location-1.jpg', title: '예약 확인', desc: "받으실 주소와 원하는 시간을 알려주세요", gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-2.jpg', title: '코스 안내', desc: '코스가 고민되면 차이부터 물어보세요', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-3.jpg', title: '방문 일정', desc: '방문 시간과 총금액을 예약 전에 확인하세요', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="수원에서 집이나 숙소로 부르는 마사지를 찾고 계신가요? 타이·아로마·스웨디시 중 원하는 코스를 고르세요. 오후 7시~오전 4시에 상담하며, 마사지를 받으신 뒤 결제합니다."
      areas={["팔달구", "영통구", "권선구", "장안구", "인계동", "광교", "매탄동", "세류동", "정자동", "호매실동"]}
      latitude="37.26357"
      longitude="127.02860"
      intro={
        <>
          <p>
            인계동이나 광교에서 문의하실 때도 주소와 건물명을 함께 알려주세요. 아파트·오피스텔은 공동현관 출입 방법을, 호텔·숙소는 외부 방문객이 들어갈 수 있는지 확인해주시면 됩니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            60·90·120분 중 어느 정도 시간을 쓰실 수 있는지 먼저 생각해보세요. 코스를 고르기 어렵다면 타이·아로마·스웨디시의 차이부터 물어보셔도 좋습니다. 원하는 강도와 시간을 듣고 설명해드립니다.
          </p>
        </>
      }
      outro={
        <>
          <p>
            예약할 때 방문 시간과 코스, 총금액을 함께 확인해주세요. 예약금은 없고 이용 후 현장에서 결제합니다. 수원 어느 지역이든 출장·주차·야간 추가비는 받지 않습니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">팔달구 영통구 권선구 장안구 인계동 광교 매탄동 세류동 정자동 호매실동</div>
        </>
      }
    />
  );
}
