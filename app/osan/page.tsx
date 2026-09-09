import type { Metadata } from "next";
import LocationPage from "../components/LocationPage";

export const metadata: Metadata = {
  title: "오산출장마사지 | 오산출장안마·홈타이 예약 안내 | 오후 7시~오전 4시",
  description: "오산출장마사지·홈타이, 오산동·원동·세교동 등 예약 상담. 타이·아로마·스웨디시, 오후 7시~오전 4시 문의, 추가비 없이 이용 후 현장 결제.",
  keywords:
    "오산출장마사지, 오산출장안마, 오산 출장 안마, 오산 홈타이, 오산마사지, 오산출장태국마사지, 오산동출장마사지, 원동출장마사지, 세교동출장마사지, 궐동출장마사지, 금암동출장마사지, 갈곶동출장마사지, 수청동출장마사지, 내삼미동출장마사지, 부산동출장마사지, 외삼미동출장마사지, 오산시출장마사지",
  openGraph: {
    title: "오산출장마사지 | 오산출장안마·홈타이 예약 안내 | 노마드출장마사지",
    description: "오산출장마사지·홈타이, 오산동·원동·세교동 등 예약 상담. 타이·아로마·스웨디시, 오후 7시~오전 4시 문의, 추가비 없이 이용 후 현장 결제.",
    url: "https://www.nomadthai.kr/osan",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/og/osan",
        width: 1200,
        height: 630,
        alt: "오산출장마사지 - 노마드출장마사지 오후 7시~오전 4시 서비스",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "오산출장마사지 | 오산출장안마 노마드출장마사지",
    description: "오산출장마사지·홈타이, 오산동·원동·세교동 등 예약 상담. 타이·아로마·스웨디시, 오후 7시~오전 4시 문의, 추가비 없이 이용 후 현장 결제.",
    images: ["/og/osan"],
  },
  alternates: {
    canonical: "https://www.nomadthai.kr/osan",
  },
};

export default function OsanPage() {
  return (
    <LocationPage
      city="오산"
      cityEn="osan"
      theme="green"
      heroImage="/images/location-9.jpg"
      teamImages={[
        { src: '/images/location-5.jpg', title: '예약 확인', desc: "받으실 주소와 원하는 시간을 알려주세요", gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-6.jpg', title: '코스 안내', desc: '코스가 고민되면 차이부터 물어보세요', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-7.jpg', title: '방문 일정', desc: '방문 시간과 총금액을 예약 전에 확인하세요', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="오산에서 편한 장소로 마사지를 부르고 싶으시면 주소와 시간을 알려주세요. 타이·아로마·스웨디시 코스를 상담할 수 있습니다. 문의는 오후 7시~오전 4시에 받습니다."
      areas={["오산동", "원동", "세교동", "궐동", "금암동", "갈곶동", "수청동", "내삼미동", "부산동", "외삼미동"]}
      latitude="37.1499"
      longitude="127.0772"
      intro={
        <>
          <p>
            오산동·원동·세교동의 자택이나 오피스텔에서 받으실 수 있는지 문의해보세요. 궐동·금암동도 건물명과 도로명 주소를 함께 주시면 방문할 장소를 정확하게 확인할 수 있습니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            코스를 고르기 전에 이용 시간과 원하는 강도부터 말씀해주셔도 됩니다. 타이·아로마·스웨디시의 차이를 설명해드립니다. 호텔·숙소로 예약하실 때는 외부 방문객 출입이 허용되는지 확인해주세요.
          </p>
        </>
      }
      outro={
        <>
          <p>
            갈곶동·수청동·내삼미동도 별도 출장비가 없습니다. 주차·야간 추가비나 선입금도 받지 않습니다. 예약한 코스와 금액을 확인한 뒤, 이용 후 현장에서 결제하시면 됩니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">오산동 원동 세교동 궐동 금암동 갈곶동 수청동 내삼미동 부산동 외삼미동</div>
        </>
      }
    />
  );
}
