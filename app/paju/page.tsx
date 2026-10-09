import type { Metadata } from "next";
import LocationPage from "../components/LocationPage";

export const metadata: Metadata = {
  title: "파주출장마사지 | 파주출장안마·홈타이 예약 안내 | 오후 7시~오전 4시",
  description: "파주출장마사지·홈타이, 금촌·운정·야당의 집과 숙소로 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없는 후불 결제. 오후 7시~오전 4시 상담.",
  keywords:
    "파주출장마사지, 파주출장안마, 파주 출장 안마, 파주 홈타이, 파주마사지, 파주출장태국마사지, 금촌동출장마사지, 운정신도시출장마사지, 야당동출장마사지, 교하동출장마사지, 문산읍출장마사지, 조리읍출장마사지, 파주읍출장마사지, 탄현면출장마사지, 월롱면출장마사지, 법원읍출장마사지, 파주시출장마사지",
  openGraph: {
    title: "파주출장마사지 | 파주출장안마·홈타이 예약 안내 | 노마드출장마사지",
    description: "파주출장마사지·홈타이, 금촌·운정·야당의 집과 숙소로 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없는 후불 결제. 오후 7시~오전 4시 상담.",
    url: "https://www.nomadthai.kr/paju",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/og/paju",
        width: 1200,
        height: 630,
        alt: "파주출장마사지 - 노마드출장마사지 오후 7시~오전 4시 상담",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "파주출장마사지 | 파주출장안마 노마드출장마사지",
    description: "파주출장마사지·홈타이, 금촌·운정·야당의 집과 숙소로 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없는 후불 결제. 오후 7시~오전 4시 상담.",
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
        { src: '/images/location-5.jpg', title: '방문 마사지', desc: "집·오피스텔·숙소로 직접 방문", gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-6.jpg', title: '마사지 코스', desc: '타이·아로마·스웨디시 60·90·120분', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-7.jpg', title: '후불 결제', desc: '예약금 없이 서비스 후 현장 결제', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="금촌동·운정신도시·야당동에서 이동 없이 만나는 파주 방문 마사지. 타이 60분 7만원부터, 출장·주차·야간 추가비 없이 이용 후 현장에서 결제합니다."
      areas={["금촌동", "운정신도시", "야당동", "교하동", "문산읍", "조리읍", "파주읍", "탄현면", "월롱면", "법원읍"]}
      latitude="37.7599"
      longitude="126.7802"
      intro={
        <>
          <p>
            교하동·문산읍을 포함한 예약에는 도로명 주소와 건물명, 출입 방법이 필요합니다. 찾기 어려운 입구는 주변 표지를 기준으로 안내하며, 숙소는 외부 방문객 출입이 허용되어야 합니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            타이·아로마·스웨디시를 60·90·120분으로 운영합니다. 각 코스의 가격을 미리 공개하고 선호하는 관리 방식과 이용 시간에 맞춰 예약을 받습니다.
          </p>
        </>
      }
      outro={
        <>
          <p>
            조리읍·파주읍·탄현면도 출장·주차·야간 추가비가 없습니다. 전화·카카오톡 상담은 오후 7시~오전 4시, 결제는 선입금 없이 서비스가 끝난 뒤 진행합니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">금촌동 운정신도시 야당동 교하동 문산읍 조리읍 파주읍 탄현면 월롱면 법원읍</div>
        </>
      }
    />
  );
}
