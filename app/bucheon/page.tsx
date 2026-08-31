import type { Metadata } from "next";
import LocationPage from "../components/LocationPage";

export const metadata: Metadata = {
  title: "부천출장마사지 | 부천출장안마·홈타이 예약 안내 | 오후 7시~오전 4시",
  description:
    "경기도 부천시 전 지역 부천출장마사지·부천출장안마·부천 홈타이 예약 안내. 오후 7시~오전 4시 운영, 100% 후불제로 이용 가능합니다.",
  keywords:
    "부천출장마사지, 부천출장안마, 부천 출장 안마, 부천 홈타이, 부천마사지, 부천출장태국마사지, 중동출장마사지, 상동출장마사지, 역곡동출장마사지, 송내동출장마사지, 원미동출장마사지, 심곡동출장마사지, 소사본동출장마사지, 괴안동출장마사지, 고강동출장마사지, 옥길동출장마사지, 부천시출장마사지",
  openGraph: {
    title: "부천출장마사지 | 부천출장안마·홈타이 예약 안내 | 노마드출장마사지",
    description: "경기도 부천시 전 지역 부천출장마사지·부천출장안마 예약 안내. 오후 7시~오전 4시 운영, 100% 후불제로 안심하고 이용하세요.",
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
    description: "부천시 전 지역 오후 7시~오전 4시 부천출장마사지·부천 홈타이 예약. 100% 후불제로 이용 가능합니다.",
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
        { src: '/images/location-5.jpg', title: '전문 관리사', desc: "실력과 마인드를 겸비한 전문 여성 관리사", gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-6.jpg', title: '럭셔리 서비스', desc: '최고급 프리미엄 경험', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-7.jpg', title: '힐링 서비스', desc: '완벽한 휴식과 회복', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="부천출장마사지, 부천출장안마, 부천 홈타이 예약을 한곳에서 안내하는 노마드출장마사지 부천 페이지입니다. 오후 7시부터 오전 4시까지 100% 후불제로 운영합니다."
      areas={["중동", "상동", "역곡동", "송내동", "원미동", "심곡동", "소사본동", "괴안동", "고강동", "옥길동"]}
      latitude="37.5034"
      longitude="126.7660"
      intro={
        <>
          <p>
            부천 중동, 상동, 역곡동 중심으로 호텔·자택·오피스텔 방문 예약을 안내합니다. 늦은 시간에도 접수 순서에 따라 가능한 시간대를 빠르게 안내해드립니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            노마드출장마사지 부천점은 송내동, 원미동 생활권 이동 동선을 고려해 타이·아로마·스웨디시 코스를 운영합니다. 부천출장안마, 부천 홈타이 문의 시 코스 소요 시간과 관리 방식을 먼저 설명해드립니다.
          </p>
        </>
      }
      outro={
        <>
          <p>
            부천출장마사지 예약은 선입금 없이 100% 후불제로 운영됩니다. 심곡동, 소사본동, 괴안동 포함 부천시 전역에서 오후 7시부터 오전 4시까지 이용 가능합니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">중동 상동 역곡동 송내동 원미동 심곡동 소사본동 괴안동 고강동 옥길동</div>
        </>
      }
    />
  );
}
