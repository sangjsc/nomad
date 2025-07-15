import { Metadata } from 'next'
import LocationPage from '../components/LocationPage'

export const metadata: Metadata = {
  title: '안양 힙링 마사지 | 전통과 현대의 조화 | 노마드 - 24시간',
  description: '안양시 전문 출장마사지 서비스. 동안구, 만안구 등 안양시 전 지역 출장안마 전문업체. 24시간 예약, 100% 후불제, 여성 전문관리사.',
  keywords: '안양 출장마사지, 안양 출장안마, 동안구 출장마사지, 만안구 출장마사지, 안양 타이마사지, 안양 아로마마사지, 안양 스웨디시',
  openGraph: {
    title: '안양 출장마사지 | 24시간 전문 서비스',
    description: '안양시 전체 지역 출장마사지 전문업체. 안양 시민들을 위한 프리미엄 서비스',
    url: 'https://nomadthai.kr/anyang',
  },
  alternates: {
    canonical: 'https://nomadthai.kr/anyang',
  },
}

export default function AnyangPage() {
  return (
    <LocationPage
      city="안양"
      cityEn="anyang"
      theme="coral"
      heroImage="/images/spa-image-2.jpg"
      description="안양 출장마사지, 노마드출장마사지! 24시간 언제든 고객님의 편안한 공간으로 신속하게 찾아가는 프리미엄 홈타이. 100% 후불제로 안양 어디서든 최상의 힐링을 경험하세요."
      areas={["동안구", "만안구", "비산동", "갈산동", "관양동", "평촌동", "호계동", "법계원동", "안양동", "박달동"]}
      latitude="37.3943"
      longitude="126.9568"
      intro={
        <>
          <p>
            바쁜 일상에 지친 안양 고객님을 위한 최상의 힐링. 노마드출장마사지는 안양 전 지역 호텔, 모텔, 자택 등 고객님이 계신 곳으로 전문 관리사가 직접 방문하여 프라이빗하고 편안한 마사지 경험을 선사합니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            노마드출장마사지 안양점은 다년간의 노하우와 체계적인 교육을 수료한 엄선된 전문 관리사들이 차별화된 서비스를 제공합니다. 태국 현지 마사지 스쿨 출신 관리사들의 타이, 아로마, 스웨디시 등 다양한 프로그램으로 피로를 해소하고 활력을 되찾으세요. 모든 서비스는 100% 후불제로 안심하고 이용 가능합니다.
          </p>
        </>
      }
      outro={
        <>
          <p>
            고객 만족 최우선! 노마드출장마사지 안양점에서 최상의 서비스를 경험하세요. 예약금, 선입금 없이 서비스 완료 후 현장 결제하는 투명한 시스템. 간편한 전화 한 통으로 안양 최고의 힐링을 경험하세요. 고객님의 소중한 시간을 위한 최고의 선택입니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">#동안구 #만안구 #비산동 #갈산동 #관양동 #평촌동 #호계동 #법계원동 #안양동 #박달동</div>
        </>
      }
    />
  );
}
