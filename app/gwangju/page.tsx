import type { Metadata } from "next";
import LocationPage from "../components/LocationPage";

export const metadata: Metadata = {
  title: "광주출장마사지 1등업체 | 24시간 광주홈타이 | 100% 후불제",
  description:
    "광주출장마사지 1등업체 노마드! 경기도 광주시 전지역 24시간 광주출장마사지, 광주홈타이, 광주출장태국마사지 서비스. 100% 후불제, 30분 내 도착. 광주출장마사지 전문업체.",
  keywords:
    "광주출장마사지, 광주홈타이, 광주출장태국마사지, 광주출장안마, 광주마사지, 송정동출장마사지, 경안동출장마사지, 쌍령동출장마사지, 오포읍출장마사지, 곤지암읍출장마사지, 남종면출장마사지, 중부면출장마사지, 남한산성면출장마사지, 초월읍출장마사지, 도척면출장마사지, 경기도광주출장마사지",
  openGraph: {
    title: "광주출장마사지 1등업체 | 광주홈타이 전문 | 노마드출장마사지",
    description: "경기도 광주시 1등 광주출장마사지 전문업체. 24시간 광주홈타이, 광주출장태국마사지 서비스. 100% 후불제로 안심하고 이용하세요.",
    url: "https://www.nomadthai.kr/gwangju",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/images/spa-background.jpg",
        width: 1200,
        height: 630,
        alt: "광주출장마사지 - 노마드출장마사지 24시간 서비스",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "광주출장마사지 1등업체 | 노마드출장마사지",
    description: "경기도 광주시 전지역 24시간 출장마사지. 100% 후불제, 30분 내 도착.",
    images: ["/images/spa-background.jpg"],
  },
  alternates: {
    canonical: "https://www.nomadthai.kr/gwangju",
  },
};

export default function GwangjuPage() {
  return (
    <LocationPage
      city="광주"
      cityEn="gwangju"
      theme="purple"
      heroImage="/images/location-5.jpg"
      teamImages={[
        { src: '/images/location-6.jpg', title: '전문 관리사', desc: "실력과 마인드를 겸비한 전문 여성 관리사", gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-7.jpg', title: '럭셔리 서비스', desc: '최고급 프리미엄 경험', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-8.jpg', title: '힐링 서비스', desc: '완벽한 휴식과 회복', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="광주 출장마사지, 노마드출장마사지! 24시간 언제든 고객님의 편안한 공간으로 신속하게 찾아가는 프리미엄 홈타이. 100% 후불제로 광주 어디서든 최상의 힐링을 경험하세요."
      areas={["송정동", "경안동", "쌍령동", "오포읍", "곤지암읍", "남종면", "중부면", "남한산성면", "초월읍", "도척면"]}
      latitude="37.429084"
      longitude="127.255189"
      intro={
        <>
          <p>
            바쁜 일상에 지친 광주 고객님을 위한 최상의 힐링. 노마드출장마사지는 광주 전 지역 호텔, 모텔, 자택 등 고객님이 계신 곳으로 전문 관리사가 직접 방문하여 프라이빗하고 편안한 마사지 경험을 선사합니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            노마드출장마사지 광주점은 다년간의 노하우와 체계적인 교육을 수료한 엄선된 전문 관리사들이 차별화된 서비스를 제공합니다. 태국 현지 마사지 스쿨 출신 관리사들의 타이, 아로마, 스웨디시 등 다양한 프로그램으로 피로를 해소하고 활력을 되찾으세요. 모든 서비스는 100% 후불제로 안심하고 이용 가능합니다.
          </p>
        </>
      }
      outro={
        <>
          <p>
            고객 만족 최우선! 노마드출장마사지 광주점에서 최상의 서비스를 경험하세요. 예약금, 선입금 없이 서비스 완료 후 현장 결제하는 투명한 시스템. 간편한 전화 한 통으로 광주 최고의 힐링을 경험하세요. 고객님의 소중한 시간을 위한 최고의 선택입니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">#송정동 #경안동 #쌍령동 #오포읍 #곤지암읍 #남종면 #중부면 #남한산성면 #초월읍 #도척면</div>
        </>
      }
    />
  );
}