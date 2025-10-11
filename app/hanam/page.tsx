import { Metadata } from 'next'
import LocationPage from '../components/LocationPage'

export const metadata: Metadata = {
  title: '하남출장마사지 | 하남출장안마 | 하남홈타이 | 노마드 - 24시간',
  description: '하남출장마사지 1등업체 노마드! 하남시 전지역 24시간 출장안마, 하남홈타이, 하남출장태국마사지. 100% 후불제, 30분내 도착. 하남출장마사지 최저가 보장.',
  keywords: '하남출장마사지, 하남출장안마, 하남홈타이, 하남출장태국마사지, 하남마사지, 미사강변도시출장마사지, 위례동출장안마, 신장동출장마사지, 천현동출장안마, 감동홈타이, 감일동출장마사지, 창우동출장안마, 덕풍동출장마사지, 미사역출장안마, 하남시출장마사지',
  openGraph: {
    title: '하남 출장마사지 | 24시간 전문 서비스',
    description: '하남시 전체 지역 출장마사지 전문업체. 미사강변도시 주민들을 위한 프리미엄 서비스',
    url: 'https://www.nomadthai.kr/hanam',
  },
  alternates: {
    canonical: 'https://www.nomadthai.kr/hanam',
  },
}

export default function HanamPage() {
  return (
    <LocationPage
      city="하남"
      cityEn="hanam"
      theme="green"
      heroImage="/images/location-6.jpg"
      teamImages={[
        { src: '/images/location-7.jpg', title: '전문 관리사', desc: "실력과 마인드를 겸비한 전문 여성 관리사", gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-8.jpg', title: '럭셔리 서비스', desc: '최고급 프리미엄 경험', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-9.jpg', title: '힐링 서비스', desc: '완벽한 휴식과 회복', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="하남 출장마사지, 노마드출장마사지! 24시간 언제든 고객님의 편안한 공간으로 신속하게 찾아가는 프리미엄 홈타이. 100% 후불제로 하남 어디서든 최상의 힐링을 경험하세요."
      areas={[
        "미사강변도시", "위례동", "신장동", "천현동", "감동", "감일동", "창우동", "덕풍동", "미사역", "하남검단사"
      ]}
      latitude="37.5392"
      longitude="127.2145"
      intro={
        <>
          <p>
            바쁜 일상에 지친 하남 고객님을 위한 최상의 힐링. 노마드출장마사지는 하남 전 지역 호텔, 모텔, 자택 등 고객님이 계신 곳으로 전문 관리사가 직접 방문하여 프라이빗하고 편안한 마사지 경험을 선사합니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            노마드출장마사지 하남점은 다년간의 노하우와 체계적인 교육을 수료한 엄선된 전문 관리사들이 차별화된 서비스를 제공합니다. 태국 현지 마사지 스쿨 출신 관리사들의 타이, 아로마, 스웨디시 등 다양한 프로그램으로 피로를 해소하고 활력을 되찾으세요. 모든 서비스는 100% 후불제로 안심하고 이용 가능합니다.
          </p>
        </>
      }
      outro={
        <>
          <p>
            고객 만족 최우선! 노마드출장마사지 하남점에서 최상의 서비스를 경험하세요. 예약금, 선입금 없이 서비스 완료 후 현장 결제하는 투명한 시스템. 간편한 전화 한 통으로 하남 최고의 힐링을 경험하세요. 고객님의 소중한 시간을 위한 최고의 선택입니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">미사강변도시 위례동 신장동 천현동 감동 감일동 창우동 덕풍동 미사역 하남검단사</div>
        </>
      }
    />
  );
}
