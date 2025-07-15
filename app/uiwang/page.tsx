import { Metadata } from 'next'
import LocationPage from '../components/LocationPage'

export const metadata: Metadata = {
  title: '의왕 출장마사지 | 출장안마 | 노마드 - 24시간',
  description: '의왕시 전문 출장마사지 서비스. 내손동, 오전동, 고천동 등 의왕시 전 지역 출장안마 전문업체. 24시간 예약, 100% 후불제, 여성 전문관리사.',
  keywords: '의왕 출장마사지, 의왕 출장안마, 내손동 출장마사지, 의왕 타이마사지, 의왕 아로마마사지, 의왕 스웨디시',
  openGraph: {
    title: '의왕 출장마사지 | 24시간 전문 서비스',
    description: '의왕시 전체 지역 출장마사지 전문업체. KTX 의왕역 이용객과 의왕 시민들을 위한 프리미엄 서비스',
    url: 'https://nomadthai.kr/uiwang',
  },
  alternates: {
    canonical: 'https://nomadthai.kr/uiwang',
  },
}

export default function UiwangPage() {
  return (
    <LocationPage
      city="의왕"
      cityEn="uiwang"
      theme="purple"
      heroImage="/images/spa-image-4.jpg"
      description="의왕 출장마사지, 노마드출장마사지! 24시간 언제든 고객님의 편안한 공간으로 신속하게 찾아가는 프리미엄 홈타이. 100% 후불제로 의왕 어디서든 최상의 힐링을 경험하세요."
      areas={[
        "내손동", "오전동", "고천동", "의왕동", "쯄량동", "매송동", "부곡동", "KTX의왕역", "경부선", "안양천"
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
          <div className="mt-4 text-sm text-gray-600">내손동 오전동 고천동 의왕동 쯄량동 매송동 부곡동 KTX의왕역 경부선 안양천</div>
        </>
      }
    />
  );
}
