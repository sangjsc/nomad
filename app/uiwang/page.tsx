import { Metadata } from 'next'
import LocationPage from '../components/LocationPage'

export const metadata: Metadata = {
  title: '의왕출장마사지 | 경기도 의왕 홈타이 예약 안내 | 오후 7시~오전 4시',
  description: '경기도 의왕시 전 지역 출장마사지·홈타이 예약 안내. 오후 7시~오전 4시 운영, 100% 후불제, 전화·카카오톡 상담이 가능합니다.',
  keywords: '의왕출장마사지, 의왕출장안마, 의왕홈타이, 의왕출장태국마사지, 의왕마사지, 내손동출장마사지, 오전동출장안마, 고천동출장마사지, 왕곡동출장안마, 초평동홈타이, 부곡동출장안마, 의왕역출장마사지, 의왕시출장마사지',
  openGraph: {
    title: '의왕출장마사지 | 경기도 의왕 홈타이 예약 안내 | 노마드출장마사지',
    description: '경기도 의왕시 전 지역 출장마사지 예약 안내. 오후 7시~오전 4시 운영, 100% 후불제로 이용 가능합니다.',
    url: 'https://www.nomadthai.kr/uiwang',
    type: 'website',
    locale: 'ko_KR',
    images: [
      {
        url: '/og/uiwang',
        width: 1200,
        height: 630,
        alt: '의왕출장마사지 - 노마드출장마사지 오후 7시~오전 4시 서비스',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '의왕출장마사지 | 노마드출장마사지',
    description: '의왕시 전 지역 오후 7시~오전 4시 출장마사지. 100% 후불제로 예약 가능합니다.',
    images: ['/og/uiwang'],
  },
  alternates: {
    canonical: 'https://www.nomadthai.kr/uiwang',
  },
}

export default function UiwangPage() {
  return (
    <LocationPage
      city="의왕"
      cityEn="uiwang"
      theme="purple"
      heroImage="/images/location-1.jpg"
      teamImages={[
        { src: '/images/location-2.jpg', title: '전문 관리사', desc: "실력과 마인드를 겸비한 전문 여성 관리사", gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-3.jpg', title: '럭셔리 서비스', desc: '최고급 프리미엄 경험', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-4.jpg', title: '힐링 서비스', desc: '완벽한 휴식과 회복', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="의왕 출장마사지, 노마드출장마사지! 오후 7시부터 오전 4시까지 고객님의 편안한 공간으로 신속하게 찾아가는 프리미엄 홈타이. 100% 후불제로 의왕 어디서든 최상의 힐링을 경험하세요."
      areas={[
        "고천동", "부곡동", "오전동", "내손1동", "내손2동", "청계동", "포일동", "학의동", "의왕역"
      ]}
      latitude="37.3448"
      longitude="126.9681"
      intro={
        <>
          <p>
            바쁜 일상에 지친 의왕 고객님을 위한 최상의 힐링. 노마드출장마사지는 의왕 전 지역 호텔, 모텔, 자택 등 고객님이 계신 곳으로 전문 관리사가 직접 방문하여 프라이빗하고 편안한 마사지 경험을 선사합니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            노마드출장마사지 의왕점은 다년간의 노하우와 체계적인 교육을 수료한 엄선된 전문 관리사들이 차별화된 서비스를 제공합니다. 태국 현지 마사지 스쿨 출신 관리사들의 타이, 아로마, 스웨디시 등 다양한 프로그램으로 피로를 해소하고 활력을 되찾으세요. 모든 서비스는 100% 후불제로 안심하고 이용 가능합니다.
          </p>
        </>
      }
      outro={
        <>
          <p>
            고객 만족 최우선! 노마드출장마사지 의왕점에서 최상의 서비스를 경험하세요. 예약금, 선입금 없이 서비스 완료 후 현장 결제하는 투명한 시스템. 간편한 전화 한 통으로 의왕 최고의 힐링을 경험하세요. 고객님의 소중한 시간을 위한 최고의 선택입니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">고천동 부곡동 오전동 내손1동 내손2동 청계동 포일동 학의동 의왕역</div>
        </>
      }
    />
  );
}
