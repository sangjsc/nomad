import type { Metadata } from "next";
import LocationPage from "../components/LocationPage";

export const metadata: Metadata = {
  title: "남양주출장마사지 | 남양주출장안마·홈타이 예약 안내 | 오후 7시~오전 4시",
  description: "남양주출장마사지·홈타이, 다산·별내·호평 등 방문 예약 상담. 오후 7시~오전 4시 문의, 선입금 및 출장·주차·야간 추가비 없이 이용 후 결제.",
  keywords:
    "남양주출장마사지, 남양주출장안마, 남양주 출장 안마, 남양주 홈타이, 남양주마사지, 남양주출장태국마사지, 호평동출장마사지, 평내동출장마사지, 다산동출장마사지, 별내동출장마사지, 와부읍출장마사지, 진접읍출장마사지, 오남읍출장마사지, 화도읍출장마사지, 금곡동출장마사지, 퇴계원읍출장마사지, 남양주시출장마사지",
  openGraph: {
    title: "남양주출장마사지 | 남양주출장안마·홈타이 예약 안내 | 노마드출장마사지",
    description: "남양주출장마사지·홈타이, 다산·별내·호평 등 방문 예약 상담. 오후 7시~오전 4시 문의, 선입금 및 출장·주차·야간 추가비 없이 이용 후 결제.",
    url: "https://www.nomadthai.kr/namyangju",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/og/namyangju",
        width: 1200,
        height: 630,
        alt: "남양주출장마사지 - 노마드출장마사지 오후 7시~오전 4시 서비스",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "남양주출장마사지 | 남양주출장안마 노마드출장마사지",
    description: "남양주출장마사지·홈타이, 다산·별내·호평 등 방문 예약 상담. 오후 7시~오전 4시 문의, 선입금 및 출장·주차·야간 추가비 없이 이용 후 결제.",
    images: ["/og/namyangju"],
  },
  alternates: {
    canonical: "https://www.nomadthai.kr/namyangju",
  },
};

export default function NamyangjuPage() {
  return (
    <LocationPage
      city="남양주"
      cityEn="namyangju"
      theme="rose"
      heroImage="/images/location-3.jpg"
      teamImages={[
        { src: '/images/location-5.jpg', title: '예약 확인', desc: "받으실 주소와 원하는 시간을 알려주세요", gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-6.jpg', title: '코스 안내', desc: '코스가 고민되면 차이부터 물어보세요', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-7.jpg', title: '방문 일정', desc: '방문 시간과 총금액을 예약 전에 확인하세요', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="남양주에서 출장마사지를 예약하시려면 주소와 받고 싶은 시간을 알려주세요. 다산동·별내동·호평동 등 방문할 곳을 확인한 뒤 답변드립니다. 상담시간은 오후 7시~오전 4시입니다."
      areas={["호평동", "평내동", "다산동", "별내동", "와부읍", "진접읍", "오남읍", "화도읍", "금곡동", "퇴계원읍"]}
      latitude="37.6360"
      longitude="127.2165"
      intro={
        <>
          <p>
            평내동이나 와부읍에서 문의하셔도 도로명 주소와 건물명을 보내주시면 됩니다. 입구를 찾기 어려운 곳이라면 가까운 표지나 주차 위치도 덧붙여주세요. 숙소는 외부 방문객 출입이 허용돼야 합니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            타이·아로마·스웨디시 중 받고 싶은 방식과 시간을 말씀해주세요. 아직 코스를 정하지 못하셨다면 차이를 설명해드립니다. 원하는 시간이 어려울 때를 대비해 다른 가능한 시간도 알려주시면 좋습니다.
          </p>
        </>
      }
      outro={
        <>
          <p>
            진접읍·오남읍·화도읍이라고 출장비를 더 받지 않습니다. 주차·야간 추가비도 없고 예약금이나 선입금도 없습니다. 서비스가 끝나면 현장에서 결제해주세요.
          </p>
          <div className="mt-4 text-sm text-gray-600">호평동 평내동 다산동 별내동 와부읍 진접읍 오남읍 화도읍 금곡동 퇴계원읍</div>
        </>
      }
    />
  );
}
