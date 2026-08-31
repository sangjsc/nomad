import { Metadata } from 'next'
import LocationPage from '../components/LocationPage'

export const metadata: Metadata = {
  title: '과천출장마사지 | 경기도 과천 홈타이 예약 안내 | 오후 7시~오전 4시',
  description: '경기도 과천시 전 지역 출장마사지·홈타이 예약 안내. 오후 7시~오전 4시 운영, 100% 후불제, 전화·카카오톡 상담이 가능합니다.',
  keywords: '과천출장마사지, 과천출장안마, 과천홈타이, 과천출장태국마사지, 과천마사지, 중앙동출장마사지, 갈현동출장안마, 별양동출장마사지, 원문동출장안마, 과천동홈타이, 주암동출장마사지, 문원동출장안마, 막계동출장마사지, 청계동출장안마, 관문동홈타이, 과천시출장마사지',
  openGraph: {
    title: '과천출장마사지 | 경기도 과천 홈타이 예약 안내 | 노마드출장마사지',
    description: '경기도 과천시 전 지역 출장마사지 예약 안내. 오후 7시~오전 4시 운영, 100% 후불제로 이용 가능합니다.',
    url: 'https://www.nomadthai.kr/gwacheon',
    type: 'website',
    locale: 'ko_KR',
    images: [
      {
        url: '/og/gwacheon',
        width: 1200,
        height: 630,
        alt: '과천출장마사지 - 노마드출장마사지 오후 7시~오전 4시 서비스',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '과천출장마사지 | 노마드출장마사지',
    description: '과천시 전 지역 오후 7시~오전 4시 출장마사지. 100% 후불제로 예약 가능합니다.',
    images: ['/og/gwacheon'],
  },
  alternates: {
    canonical: 'https://www.nomadthai.kr/gwacheon',
  },
}

export default function GwacheonPage() {
  return (
    <LocationPage
      city="과천"
      cityEn="gwacheon"
      theme="amber"
      heroImage="/images/location-4.jpg"
      teamImages={[
        { src: '/images/location-5.jpg', title: '전문 관리사', desc: "실력과 마인드를 겸비한 전문 여성 관리사", gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-6.jpg', title: '럭셔리 서비스', desc: '최고급 프리미엄 경험', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-7.jpg', title: '힐링 서비스', desc: '완벽한 휴식과 회복', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="과천 출장마사지, 노마드출장마사지! 오후 7시부터 오전 4시까지 고객님의 편안한 공간으로 신속하게 찾아가는 프리미엄 홈타이. 100% 후불제로 과천 어디서든 최상의 힐링을 경험하세요."
      areas={["중앙동", "갈현동", "별양동", "원문동", "과천동", "주암동", "문원동", "막계동", "청계동", "관문동"]}
      latitude="37.4138"
      longitude="126.9875"
      intro={
        <>
          <p>
            바쁜 일상에 지친 과천 고객님을 위한 최상의 힐링. 노마드출장마사지는 과천 전 지역 호텔, 모텔, 자택 등 고객님이 계신 곳으로 전문 관리사가 직접 방문하여 프라이빗하고 편안한 마사지 경험을 선사합니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            노마드출장마사지 과천점은 다년간의 노하우와 체계적인 교육을 수료한 엄선된 전문 관리사들이 차별화된 서비스를 제공합니다. 태국 현지 마사지 스쿨 출신 관리사들의 타이, 아로마, 스웨디시 등 다양한 프로그램으로 피로를 해소하고 활력을 되찾으세요. 모든 서비스는 100% 후불제로 안심하고 이용 가능합니다.
          </p>
        </>
      }
      outro={
        <>
          <p>
            고객 만족 최우선! 노마드출장마사지 과천점에서 최상의 서비스를 경험하세요. 예약금, 선입금 없이 서비스 완료 후 현장 결제하는 투명한 시스템. 간편한 전화 한 통으로 과천 최고의 힐링을 경험하세요. 고객님의 소중한 시간을 위한 최고의 선택입니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">중앙동 갈현동 별양동 원문동 과천동 주암동 문원동 막계동 청계동 관문동</div>
        </>
      }
    />
  );
}
