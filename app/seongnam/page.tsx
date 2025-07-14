import { Metadata } from 'next'
import LocationPage from '../components/LocationPage'

export const metadata: Metadata = {
  title: '성남 출장마사지 | 분당·판교 IT워커 전용 | 노마드 - 24시간',
  description: '분당·판교 IT 허브 테크워커 전용 디지털 디톡스 마사지! 코딩과 야근으로 굳어진 어깨와 목을 시원하게 풀어드립니다. VIP 테크 전문 서비스.',
  keywords: '성남 출장마사지, 성남 출장안마, 분당 출장마사지, 판교 출장마사지, 수정구 출장마사지, 성남 타이마사지, 성남 아로마마사지, 성남 스웨디시',
  openGraph: {
    title: '성남 출장마사지 | 24시간 전문 서비스',
    description: '성남시 전체 지역 출장마사지 전문업체. IT 전문업채 비즈니스맨과 성남 시민들을 위한 프리미엄 서비스',
    url: 'https://nomadthai.kr/seongnam',
  },
  alternates: {
    canonical: 'https://nomadthai.kr/seongnam',
  },
}

export default function SeongnamPage() {
  return (
    <LocationPage
      city="성남"
      cityEn="seongnam"
      theme="blue"
      heroImage="/images/spa-image-1.jpg"
      description="성남 출장마사지, 노마드출장마사지! 24시간 언제든 고객님의 편안한 공간으로 신속하게 찾아가는 프리미엄 홈타이. 100% 후불제로 성남 어디서든 최상의 힐링을 경험하세요."
      areas={["분당구", "수정구", "중원구", "야탑동", "정자동", "서현동", "판교동", "태평동", "신흥동", "복정동"]}
      latitude="37.4449"
      longitude="127.1388"
      intro={
        <>
          <p>
            바쁜 일상에 지친 성남 고객님을 위한 최상의 힐링. 노마드출장마사지는 성남 전 지역 호텔, 모텔, 자택 등 고객님이 계신 곳으로 전문 관리사가 직접 방문하여 프라이빗하고 편안한 마사지 경험을 선사합니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            노마드출장마사지 성남점은 다년간의 노하우와 체계적인 교육을 수료한 엄선된 전문 관리사들이 차별화된 서비스를 제공합니다. 태국 현지 마사지 스쿨 출신 관리사들의 타이, 아로마, 스웨디시 등 다양한 프로그램으로 피로를 해소하고 활력을 되찾으세요. 모든 서비스는 100% 후불제로 안심하고 이용 가능합니다.
          </p>
        </>
      }
      outro={
        <>
          <p>
            고객 만족 최우선! 노마드출장마사지 성남점에서 최상의 서비스를 경험하세요. 예약금, 선입금 없이 서비스 완료 후 현장 결제하는 투명한 시스템. 간편한 전화 한 통으로 성남 최고의 힐링을 경험하세요. 고객님의 소중한 시간을 위한 최고의 선택입니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">#분당구 #수정구 #중원구 #야탑동 #정자동 #서현동 #판교동 #태평동 #신흥동 #복정동</div>
        </>
      }
    />
  );
}
