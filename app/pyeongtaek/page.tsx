import type { Metadata } from "next";
import LocationPage from "../components/LocationPage";

export const metadata: Metadata = {
  title: "평택출장마사지 | 평택출장안마·홈타이 예약 안내 | 오후 7시~오전 4시",
  description: "평택출장마사지·홈타이 예약은 주소와 원하는 시간을 먼저 알려주세요. 오후 7시~오전 4시 상담, 타이·아로마·스웨디시, 추가비 없는 후불 결제.",
  keywords:
    "평택출장마사지, 평택출장안마, 평택 출장 안마, 평택 홈타이, 평택마사지, 평택출장태국마사지, 평택동출장마사지, 서정동출장마사지, 비전동출장마사지, 용이동출장마사지, 고덕동출장마사지, 안중읍출장마사지, 팽성읍출장마사지, 청북읍출장마사지, 송탄출장마사지, 오성면출장마사지, 평택시출장마사지",
  openGraph: {
    title: "평택출장마사지 | 평택출장안마·홈타이 예약 안내 | 노마드출장마사지",
    description: "평택출장마사지·홈타이 예약은 주소와 원하는 시간을 먼저 알려주세요. 오후 7시~오전 4시 상담, 타이·아로마·스웨디시, 추가비 없는 후불 결제.",
    url: "https://www.nomadthai.kr/pyeongtaek",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/og/pyeongtaek",
        width: 1200,
        height: 630,
        alt: "평택출장마사지 - 노마드출장마사지 오후 7시~오전 4시 서비스",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "평택출장마사지 | 평택출장안마 노마드출장마사지",
    description: "평택출장마사지·홈타이 예약은 주소와 원하는 시간을 먼저 알려주세요. 오후 7시~오전 4시 상담, 타이·아로마·스웨디시, 추가비 없는 후불 결제.",
    images: ["/og/pyeongtaek"],
  },
  alternates: {
    canonical: "https://www.nomadthai.kr/pyeongtaek",
  },
};

export default function PyeongtaekPage() {
  return (
    <LocationPage
      city="평택"
      cityEn="pyeongtaek"
      theme="blue"
      heroImage="/images/location-5.jpg"
      teamImages={[
        { src: '/images/location-5.jpg', title: '예약 확인', desc: "받으실 주소와 원하는 시간을 알려주세요", gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-6.jpg', title: '코스 안내', desc: '코스가 고민되면 차이부터 물어보세요', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-7.jpg', title: '방문 일정', desc: '방문 시간과 총금액을 예약 전에 확인하세요', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="평택에서 받으실 장소와 시간을 알려주시면 방문할 수 있는지 확인해드립니다. 타이·아로마·스웨디시 코스를 상담할 수 있으며, 오후 7시~오전 4시에 문의를 받습니다."
      areas={["평택동", "서정동", "비전동", "용이동", "고덕동", "안중읍", "팽성읍", "청북읍", "송탄", "오성면"]}
      latitude="36.9921"
      longitude="127.1127"
      intro={
        <>
          <p>
            평택동·서정동·비전동뿐 아니라 용이동·고덕동에서도 도로명 주소와 건물명을 함께 보내주세요. 숙소를 이용 중이라면 외부 방문객 출입이 가능한지 먼저 물어봐주세요.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            코스를 고르셨다면 이용 시간과 원하는 강도를 말씀해주세요. 코스가 고민될 때는 관리 방식의 차이부터 설명해드립니다. 주소를 확인한 뒤 예약할 시간과 금액을 함께 정합니다.
          </p>
        </>
      }
      outro={
        <>
          <p>
            안중읍·팽성읍·청북읍도 별도 출장비를 받지 않습니다. 주차비와 야간 추가비도 없으며, 예약금 없이 마사지를 받으신 뒤 현장에서 결제합니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">평택동 서정동 비전동 용이동 고덕동 안중읍 팽성읍 청북읍 송탄 오성면</div>
        </>
      }
    />
  );
}
