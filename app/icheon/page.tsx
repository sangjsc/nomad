import type { Metadata } from "next";
import LocationPage from "../components/LocationPage";

export const metadata: Metadata = {
  title: "이천출장마사지 1등업체 | 24시간 이천홈타이 | 100% 후불제",
  description:
    "이천출장마사지 1등업체 노마드! 이천시 전지역 24시간 이천출장마사지, 이천홈타이, 이천출장태국마사지 서비스. 100% 후불제, 30분 내 도착. 이천출장마사지 전문업체. 자연의 힐링까지!",
  keywords:
    "이천출장마사지, 이천홈타이, 이천출장태국마사지, 이천출장안마, 이천마사지, 부발읍출장마사지, 신둔면출장마사지, 백사면출장마사지, 설성면출장마사지, 마장면출장마사지, 호법면출장마사지, 모가면출장마사지, 중리동출장마사지, 증포동출장마사지, 관고동출장마사지, 이천시출장마사지",
  openGraph: {
    title: "이천출장마사지 1등업체 | 이천홈타이 전문 | 노마드출장마사지",
    description: "경기도 이천시 1등 이천출장마사지 전문업체. 24시간 이천홈타이, 이천출장태국마사지 서비스. 100% 후불제로 안심하고 이용하세요.",
    url: "https://www.nomadthai.kr/icheon",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/images/spa-background.jpg",
        width: 1200,
        height: 630,
        alt: "이천출장마사지 - 노마드출장마사지 24시간 서비스",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "이천출장마사지 1등업체 | 노마드출장마사지",
    description: "이천시 전지역 24시간 출장마사지. 100% 후불제, 30분 내 도착.",
    images: ["/images/spa-background.jpg"],
  },
  alternates: {
    canonical: "https://www.nomadthai.kr/icheon",
  },
};

export default function IcheonPage() {
  return (
    <LocationPage
      city="이천"
      cityEn="icheon"
      theme="blue"
      heroImage="/images/location-7.jpg"
      teamImages={[
        { src: '/images/location-8.jpg', title: '전문 관리사', desc: "실력과 마인드를 겸비한 전문 여성 관리사", gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-9.jpg', title: '럭셔리 서비스', desc: '최고급 프리미엄 경험', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-1.jpg', title: '힐링 서비스', desc: '완벽한 휴식과 회복', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="이천 출장마사지, 노마드출장마사지! 자연과 힐링의 도시에서 24시간 언제든 고객님의 편안한 공간으로 신속하게 찾아가는 프리미엄 홈타이. 100% 후불제로 이천 어디서든 자연의 힐링을 경험하세요."
      areas={["부발읍", "신둔면", "백사면", "설성면", "마장면", "호법면", "모가면", "중리동", "증포동", "관고동"]}
      latitude="37.27221"
      longitude="127.43513"
      googleSiteLink="https://sites.google.com/view/nomadthai-guide/%EC%9D%B4%EC%B2%9C-%EB%A7%88%EC%82%AC%EC%A7%80-%EC%95%88%EC%8B%AC-%EC%97%85%EC%B2%B4-%EA%B0%80%EC%9D%B4%EB%93%9C?authuser=0"
      intro={
        <>
          <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 rounded-lg">
            <p className="text-lg font-semibold text-gray-800 leading-relaxed">
              노마드타이는 <strong className="text-blue-600">이천 전 지역(중리동, 창전동, 부발읍 등)</strong>을 아우르는 프리미엄 이천 출장마사지 공식 예약 채널입니다.
            </p>
          </div>
          <p>
            자연과 함께하는 힐링의 도시 이천! 쌀과 온천으로 유명한 이천에서 바쁜 일상에 지친 고객님을 위한 최상의 자연 힐링을 선사합니다. 노마드출장마사지는 이천 전 지역 호텔, 모텔, 자택 등 고객님이 계신 곳으로 전문 관리사가 직접 방문하여 자연의 편안함이 담긴 프라이빗한 마사지 경험을 제공합니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            이천의 자연 에너지를 담은 특별한 마사지! 노마드출장마사지 이천점은 자연 친화적인 아로마 오일과 함께 다년간의 노하우를 가진 전문 관리사들이 차별화된 네이처 테라피를 제공합니다. 태국 현지 마사지 스쿨 출신 관리사들의 타이, 아로마, 스웨디시 등 자연의 힘이 담긴 다양한 프로그램으로 피로를 해소하고 자연의 활력을 되찾으세요. 모든 서비스는 100% 후불제로 안심하고 이용 가능합니다.
          </p>
        </>
      }
      outro={
        <>
          <p>
            자연과 함께하는 힐링의 완성! 노마드출장마사지 이천점에서 자연 친화적 서비스를 만나보세요. 예약금, 선입금 없이 서비스 완료 후 현장 결제하는 투명한 시스템. 간편한 전화 한 통으로 이천 최고의 자연 힐링을 경험하세요. 자연의 에너지로 채워지는 소중한 시간을 만들어드립니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">부발읍 신둔면 백사면 설성면 마장면 호법면 모가면 중리동 증포동 관고동 자연힐링 네이처테라피</div>
        </>
      }
    />
  );
}