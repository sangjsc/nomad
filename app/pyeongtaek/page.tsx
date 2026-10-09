import type { Metadata } from "next";
import LocationPage from "../components/LocationPage";

export const metadata: Metadata = {
  title: "평택출장마사지 | 평택출장안마·홈타이 예약 안내 | 오후 7시~오전 4시",
  description: "평택출장마사지·홈타이, 고덕·비전·송탄 등 자택과 숙소로 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없는 후불 결제. 오후 7시~오전 4시 상담.",
  keywords:
    "평택출장마사지, 평택출장안마, 평택 출장 안마, 평택 홈타이, 평택마사지, 평택출장태국마사지, 평택동출장마사지, 서정동출장마사지, 비전동출장마사지, 용이동출장마사지, 고덕동출장마사지, 안중읍출장마사지, 팽성읍출장마사지, 청북읍출장마사지, 송탄출장마사지, 오성면출장마사지, 평택시출장마사지",
  openGraph: {
    title: "평택출장마사지 | 평택출장안마·홈타이 예약 안내 | 노마드출장마사지",
    description: "평택출장마사지·홈타이, 고덕·비전·송탄 등 자택과 숙소로 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없는 후불 결제. 오후 7시~오전 4시 상담.",
    url: "https://www.nomadthai.kr/pyeongtaek",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/og/pyeongtaek",
        width: 1200,
        height: 630,
        alt: "평택출장마사지 - 노마드출장마사지 오후 7시~오전 4시 상담",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "평택출장마사지 | 평택출장안마 노마드출장마사지",
    description: "평택출장마사지·홈타이, 고덕·비전·송탄 등 자택과 숙소로 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없는 후불 결제. 오후 7시~오전 4시 상담.",
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
        { src: '/images/location-5.jpg', title: '방문 마사지', desc: "집·오피스텔·숙소로 직접 방문", gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-6.jpg', title: '마사지 코스', desc: '타이·아로마·스웨디시 60·90·120분', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-7.jpg', title: '후불 결제', desc: '예약금 없이 서비스 후 현장 결제', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="평택의 집과 숙소로 찾아가는 타이·아로마·스웨디시. 타이 60분 7만원부터, 출장·주차·야간 추가비 없이 마사지를 받은 뒤 현장에서 결제합니다."
      areas={["평택동", "서정동", "비전동", "용이동", "고덕동", "안중읍", "팽성읍", "청북읍", "송탄", "오성면"]}
      latitude="36.9921"
      longitude="127.1127"
      intro={
        <>
          <p>
            평택동·서정동·비전동과 용이동·고덕동의 예약은 도로명 주소와 건물명으로 접수합니다. 숙소에서는 외부 방문객 출입이 허용되어야 하며, 방문 일정은 상담 후 정합니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            60·90·120분 코스에 따라 이용 시간과 금액이 정해집니다. 관리 방식은 타이·아로마·스웨디시 중 선택하며, 선호하는 강도에 맞춰 진행합니다.
          </p>
        </>
      }
      outro={
        <>
          <p>
            안중읍·팽성읍·청북읍도 출장·주차·야간 추가비가 없습니다. 전화·카카오톡 상담은 오후 7시~오전 4시이며, 예약금이나 선입금은 받지 않습니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">평택동 서정동 비전동 용이동 고덕동 안중읍 팽성읍 청북읍 송탄 오성면</div>
        </>
      }
    />
  );
}
