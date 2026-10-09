import type { Metadata } from "next";
import LocationPage from "../components/LocationPage";

export const metadata: Metadata = {
  title: "남양주출장마사지 | 남양주출장안마·홈타이 예약 안내 | 오후 7시~오전 4시",
  description: "남양주출장마사지·홈타이, 다산·별내·호평의 집과 숙소로 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없는 후불 결제. 오후 7시~오전 4시 상담.",
  keywords:
    "남양주출장마사지, 남양주출장안마, 남양주 출장 안마, 남양주 홈타이, 남양주마사지, 남양주출장태국마사지, 호평동출장마사지, 평내동출장마사지, 다산동출장마사지, 별내동출장마사지, 와부읍출장마사지, 진접읍출장마사지, 오남읍출장마사지, 화도읍출장마사지, 금곡동출장마사지, 퇴계원읍출장마사지, 남양주시출장마사지",
  openGraph: {
    title: "남양주출장마사지 | 남양주출장안마·홈타이 예약 안내 | 노마드출장마사지",
    description: "남양주출장마사지·홈타이, 다산·별내·호평의 집과 숙소로 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없는 후불 결제. 오후 7시~오전 4시 상담.",
    url: "https://www.nomadthai.kr/namyangju",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/og/namyangju",
        width: 1200,
        height: 630,
        alt: "남양주출장마사지 - 노마드출장마사지 오후 7시~오전 4시 상담",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "남양주출장마사지 | 남양주출장안마 노마드출장마사지",
    description: "남양주출장마사지·홈타이, 다산·별내·호평의 집과 숙소로 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없는 후불 결제. 오후 7시~오전 4시 상담.",
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
        { src: '/images/location-5.jpg', title: '방문 마사지', desc: "집·오피스텔·숙소로 직접 방문", gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-6.jpg', title: '마사지 코스', desc: '타이·아로마·스웨디시 60·90·120분', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-7.jpg', title: '후불 결제', desc: '예약금 없이 서비스 후 현장 결제', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="다산동·별내동·호평동에서 집으로 찾아오는 남양주 마사지 서비스. 타이 60분 7만원부터 아로마·스웨디시까지, 출장·주차·야간 추가비 없이 후불로 이용합니다."
      areas={["호평동", "평내동", "다산동", "별내동", "와부읍", "진접읍", "오남읍", "화도읍", "금곡동", "퇴계원읍"]}
      latitude="37.6360"
      longitude="127.2165"
      intro={
        <>
          <p>
            평내동·와부읍을 포함한 예약에는 도로명 주소와 건물명, 출입·주차 정보가 필요합니다. 입구가 여러 곳이면 가까운 표지를 기준으로 안내하며, 숙소는 외부 방문객 출입이 허용되어야 합니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            타이·아로마·스웨디시는 60·90·120분 코스로 운영합니다. 원하는 관리 방식과 이용 시간에 맞춰 예약하고, 공개 가격표에서 총금액을 살펴볼 수 있습니다.
          </p>
        </>
      }
      outro={
        <>
          <p>
            진접읍·오남읍·화도읍도 출장·주차·야간 추가비가 없습니다. 오후 7시~오전 4시에 전화·카카오톡으로 상담하며, 예약금 없이 서비스 후 현장에서 결제합니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">호평동 평내동 다산동 별내동 와부읍 진접읍 오남읍 화도읍 금곡동 퇴계원읍</div>
        </>
      }
    />
  );
}
