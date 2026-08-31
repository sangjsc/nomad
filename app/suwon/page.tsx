import type { Metadata } from "next";
import LocationPage from "../components/LocationPage";

export const metadata: Metadata = {
  title: "수원출장마사지 | 경기도 수원 홈타이 예약 안내 | 오후 7시~오전 4시",
  description:
    "경기도 수원시(팔달구·영통구·권선구·장안구) 출장마사지·홈타이 예약 안내. 오후 7시~오전 4시 운영, 100% 후불제로 이용 가능합니다.",
  keywords:
    "수원출장마사지, 수원홈타이, 수원출장태국마사지, 수원출장안마, 수원마사지, 팔달구출장마사지, 영통구출장마사지, 권선구출장마사지, 장안구출장마사지, 인계동출장마사지, 광교출장마사지, 매탄동출장마사지, 세류동출장마사지, 정자동출장마사지, 호매실동출장마사지, 수원시출장마사지",
  openGraph: {
    title: "수원출장마사지 | 경기도 수원 홈타이 예약 안내 | 노마드출장마사지",
    description: "경기도 수원시 전 지역 출장마사지 예약 안내. 오후 7시~오전 4시 운영, 100% 후불제로 안심하고 이용하세요.",
    url: "https://www.nomadthai.kr/suwon",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/og/suwon",
        width: 1200,
        height: 630,
        alt: "수원출장마사지 - 노마드출장마사지 오후 7시~오전 4시 서비스",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "수원출장마사지 | 노마드출장마사지",
    description: "수원시 전 지역 오후 7시~오전 4시 출장마사지. 100% 후불제로 예약 가능합니다.",
    images: ["/og/suwon"],
  },
  alternates: {
    canonical: "https://www.nomadthai.kr/suwon",
  },
};

export default function SuwonPage() {
  return (
    <LocationPage
      city="수원"
      cityEn="suwon"
      theme="rose"
      heroImage="/images/location-9.jpg"
      teamImages={[
        { src: '/images/location-1.jpg', title: '전문 관리사', desc: "실력과 마인드를 겸비한 전문 여성 관리사", gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-2.jpg', title: '럭셔리 서비스', desc: '최고급 프리미엄 경험', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-3.jpg', title: '힐링 서비스', desc: '완벽한 휴식과 회복', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="수원 출장마사지, 노마드출장마사지! 오후 7시부터 오전 4시까지 고객님의 편안한 공간으로 신속하게 찾아가는 프리미엄 홈타이. 100% 후불제로 수원 어디서든 최상의 힐링을 경험하세요."
      areas={["팔달구", "영통구", "권선구", "장안구", "인계동", "광교", "매탄동", "세류동", "정자동", "호매실동"]}
      latitude="37.26357"
      longitude="127.02860"
      intro={
        <>
          <p>
            바쁜 일상에 지친 수원 고객님을 위한 최상의 힐링. 노마드출장마사지는 수원 전 지역 호텔, 모텔, 자택 등 고객님이 계신 곳으로 전문 관리사가 직접 방문하여 프라이빗하고 편안한 마사지 경험을 선사합니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            노마드출장마사지 수원점은 다년간의 노하우와 체계적인 교육을 수료한 엄선된 전문 관리사들이 차별화된 서비스를 제공합니다. 태국 현지 마사지 스쿨 출신 관리사들의 타이, 아로마, 스웨디시 등 다양한 프로그램으로 피로를 해소하고 활력을 되찾으세요. 모든 서비스는 100% 후불제로 안심하고 이용 가능합니다.
          </p>
        </>
      }
      outro={
        <>
          <p>
            고객 만족 최우선! 노마드출장마사지 수원점에서 최상의 서비스를 경험하세요. 예약금, 선입금 없이 서비스 완료 후 현장 결제하는 투명한 시스템. 간편한 전화 한 통으로 수원 최고의 힐링을 경험하세요. 고객님의 소중한 시간을 위한 최고의 선택입니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">팔달구 영통구 권선구 장안구 인계동 광교 매탄동 세류동 정자동 호매실동</div>
        </>
      }
    />
  );
}
