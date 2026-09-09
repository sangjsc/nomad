import type { Metadata } from "next";
import LocationPage from "../components/LocationPage";

export const metadata: Metadata = {
  title: "부천출장마사지 | 부천출장안마·홈타이 예약 안내 | 오후 7시~오전 4시",
  description: "부천출장마사지·홈타이, 중동·상동·역곡동 등 방문 예약 상담. 오후 7시~오전 4시 문의하세요. 출장·주차·야간 추가비 없이 이용 후 결제합니다.",
  keywords:
    "부천출장마사지, 부천출장안마, 부천 출장 안마, 부천 홈타이, 부천마사지, 부천출장태국마사지, 중동출장마사지, 상동출장마사지, 역곡동출장마사지, 송내동출장마사지, 원미동출장마사지, 심곡동출장마사지, 소사본동출장마사지, 괴안동출장마사지, 고강동출장마사지, 옥길동출장마사지, 부천시출장마사지",
  openGraph: {
    title: "부천출장마사지 | 부천출장안마·홈타이 예약 안내 | 노마드출장마사지",
    description: "부천출장마사지·홈타이, 중동·상동·역곡동 등 방문 예약 상담. 오후 7시~오전 4시 문의하세요. 출장·주차·야간 추가비 없이 이용 후 결제합니다.",
    url: "https://www.nomadthai.kr/bucheon",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/og/bucheon",
        width: 1200,
        height: 630,
        alt: "부천출장마사지 - 노마드출장마사지 오후 7시~오전 4시 서비스",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "부천출장마사지 | 부천출장안마 노마드출장마사지",
    description: "부천출장마사지·홈타이, 중동·상동·역곡동 등 방문 예약 상담. 오후 7시~오전 4시 문의하세요. 출장·주차·야간 추가비 없이 이용 후 결제합니다.",
    images: ["/og/bucheon"],
  },
  alternates: {
    canonical: "https://www.nomadthai.kr/bucheon",
  },
};

export default function BucheonPage() {
  return (
    <LocationPage
      city="부천"
      cityEn="bucheon"
      theme="rose"
      heroImage="/images/location-7.jpg"
      teamImages={[
        { src: '/images/location-5.jpg', title: '예약 확인', desc: "받으실 주소와 원하는 시간을 알려주세요", gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-6.jpg', title: '코스 안내', desc: '코스가 고민되면 차이부터 물어보세요', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-7.jpg', title: '방문 일정', desc: '방문 시간과 총금액을 예약 전에 확인하세요', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="부천의 집이나 오피스텔에서 마사지를 받고 싶으시면 주소와 원하는 시간을 보내주세요. 타이·아로마·스웨디시 코스를 상담하며, 상담시간은 오후 7시~오전 4시입니다."
      areas={["중동", "상동", "역곡동", "송내동", "원미동", "심곡동", "소사본동", "괴안동", "고강동", "옥길동"]}
      latitude="37.5034"
      longitude="126.7660"
      intro={
        <>
          <p>
            중동·상동·역곡동에서 문의하실 때 건물명과 동·호수, 공동현관 출입 방법을 함께 알려주세요. 호텔이나 숙소라면 외부 방문객 출입이 허용되는 곳인지 확인이 필요합니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            송내동·원미동에서도 코스부터 정해두실 필요는 없습니다. 얼마나 오래 받고 싶은지, 어느 정도 강도를 선호하는지 말씀해주시면 선택할 수 있는 코스를 설명해드립니다.
          </p>
        </>
      }
      outro={
        <>
          <p>
            심곡동·소사본동·괴안동을 포함해 부천 지역은 출장·주차·야간 추가비가 없습니다. 방문 시간과 코스 금액을 예약 전에 확인하시고, 이용 후 현장에서 결제해주세요.
          </p>
          <div className="mt-4 text-sm text-gray-600">중동 상동 역곡동 송내동 원미동 심곡동 소사본동 괴안동 고강동 옥길동</div>
        </>
      }
    />
  );
}
