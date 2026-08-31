import type { Metadata } from "next";
import LocationPage from "../components/LocationPage";

export const metadata: Metadata = {
  title: "광명출장마사지 | 광명출장안마·홈타이 예약 안내 | 오후 7시~오전 4시",
  description:
    "경기도 광명시 전 지역 광명출장마사지·광명출장안마·광명 홈타이 예약 안내. 오후 7시~오전 4시 운영, 100% 후불제로 이용 가능합니다.",
  keywords:
    "광명출장마사지, 광명출장안마, 광명 출장 안마, 광명 홈타이, 광명마사지, 광명출장태국마사지, 철산동출장마사지, 하안동출장마사지, 광명동출장마사지, 소하동출장마사지, 일직동출장마사지, 학온동출장마사지, 노온사동출장마사지, 가학동출장마사지, 옥길동출장마사지, 광명사거리출장마사지, 광명시출장마사지",
  openGraph: {
    title: "광명출장마사지 | 광명출장안마·홈타이 예약 안내 | 노마드출장마사지",
    description: "경기도 광명시 전 지역 광명출장마사지·광명출장안마 예약 안내. 오후 7시~오전 4시 운영, 100% 후불제로 안심하고 이용하세요.",
    url: "https://www.nomadthai.kr/gwangmyeong",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/og/gwangmyeong",
        width: 1200,
        height: 630,
        alt: "광명출장마사지 - 노마드출장마사지 오후 7시~오전 4시 서비스",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "광명출장마사지 | 광명출장안마 노마드출장마사지",
    description: "광명시 전 지역 오후 7시~오전 4시 광명출장마사지·광명 홈타이 예약. 100% 후불제로 이용 가능합니다.",
    images: ["/og/gwangmyeong"],
  },
  alternates: {
    canonical: "https://www.nomadthai.kr/gwangmyeong",
  },
};

export default function GwangmyeongPage() {
  return (
    <LocationPage
      city="광명"
      cityEn="gwangmyeong"
      theme="amber"
      heroImage="/images/location-8.jpg"
      teamImages={[
        { src: '/images/location-5.jpg', title: '전문 관리사', desc: "실력과 마인드를 겸비한 전문 여성 관리사", gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-6.jpg', title: '럭셔리 서비스', desc: '최고급 프리미엄 경험', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-7.jpg', title: '힐링 서비스', desc: '완벽한 휴식과 회복', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="광명출장마사지, 광명출장안마, 광명 홈타이 예약을 한곳에서 안내하는 노마드출장마사지 광명 페이지입니다. 오후 7시부터 오전 4시까지 100% 후불제로 운영합니다."
      areas={["철산동", "하안동", "광명동", "소하동", "일직동", "학온동", "노온사동", "가학동", "옥길동", "광명사거리"]}
      latitude="37.4786"
      longitude="126.8647"
      intro={
        <>
          <p>
            광명 철산동, 하안동, 광명동 중심으로 호텔·자택·오피스텔 방문 예약을 안내합니다. 늦은 시간에도 접수 순서에 따라 가능한 시간대를 빠르게 안내해드립니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            노마드출장마사지 광명점은 소하동, 일직동 생활권 이동 동선을 고려해 타이·아로마·스웨디시 코스를 운영합니다. 광명출장안마, 광명 홈타이 문의 시 코스 소요 시간과 관리 방식을 먼저 설명해드립니다.
          </p>
        </>
      }
      outro={
        <>
          <p>
            광명출장마사지 예약은 선입금 없이 100% 후불제로 운영됩니다. 학온동, 노온사동, 가학동 포함 광명시 전역에서 오후 7시부터 오전 4시까지 이용 가능합니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">철산동 하안동 광명동 소하동 일직동 학온동 노온사동 가학동 옥길동 광명사거리</div>
        </>
      }
    />
  );
}
