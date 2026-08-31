import type { Metadata } from "next";
import LocationPage from "../components/LocationPage";

export const metadata: Metadata = {
  title: "파주출장마사지 | 파주출장안마·홈타이 예약 안내 | 오후 7시~오전 4시",
  description:
    "경기도 파주시 전 지역 파주출장마사지·파주출장안마·파주 홈타이 예약 안내. 오후 7시~오전 4시 운영, 100% 후불제로 이용 가능합니다.",
  keywords:
    "파주출장마사지, 파주출장안마, 파주 출장 안마, 파주 홈타이, 파주마사지, 파주출장태국마사지, 금촌동출장마사지, 운정신도시출장마사지, 야당동출장마사지, 교하동출장마사지, 문산읍출장마사지, 조리읍출장마사지, 파주읍출장마사지, 탄현면출장마사지, 월롱면출장마사지, 법원읍출장마사지, 파주시출장마사지",
  openGraph: {
    title: "파주출장마사지 | 파주출장안마·홈타이 예약 안내 | 노마드출장마사지",
    description: "경기도 파주시 전 지역 파주출장마사지·파주출장안마 예약 안내. 오후 7시~오전 4시 운영, 100% 후불제로 안심하고 이용하세요.",
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
    description: "파주시 전 지역 오후 7시~오전 4시 파주출장마사지·파주 홈타이 예약. 100% 후불제로 이용 가능합니다.",
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
        { src: '/images/location-5.jpg', title: '전문 관리사', desc: "실력과 마인드를 겸비한 전문 여성 관리사", gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-6.jpg', title: '럭셔리 서비스', desc: '최고급 프리미엄 경험', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-7.jpg', title: '힐링 서비스', desc: '완벽한 휴식과 회복', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="파주출장마사지, 파주출장안마, 파주 홈타이 예약을 한곳에서 안내하는 노마드출장마사지 파주 페이지입니다. 오후 7시부터 오전 4시까지 100% 후불제로 운영합니다."
      areas={["금촌동", "운정신도시", "야당동", "교하동", "문산읍", "조리읍", "파주읍", "탄현면", "월롱면", "법원읍"]}
      latitude="37.7599"
      longitude="126.7802"
      intro={
        <>
          <p>
            파주 금촌동, 운정신도시, 야당동 중심으로 호텔·자택·오피스텔 방문 예약을 안내합니다. 늦은 시간에도 접수 순서에 따라 가능한 시간대를 빠르게 안내해드립니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            노마드출장마사지 파주점은 교하동, 문산읍 생활권 이동 동선을 고려해 타이·아로마·스웨디시 코스를 운영합니다. 파주출장안마, 파주 홈타이 문의 시 코스 소요 시간과 관리 방식을 먼저 설명해드립니다.
          </p>
        </>
      }
      outro={
        <>
          <p>
            파주출장마사지 예약은 선입금 없이 100% 후불제로 운영됩니다. 조리읍, 파주읍, 탄현면 포함 파주시 전역에서 오후 7시부터 오전 4시까지 이용 가능합니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">금촌동 운정신도시 야당동 교하동 문산읍 조리읍 파주읍 탄현면 월롱면 법원읍</div>
        </>
      }
    />
  );
}
