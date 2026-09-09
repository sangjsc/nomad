import { Metadata } from 'next'
import LocationPage from '../components/LocationPage'

export const metadata: Metadata = {
  title: '의왕출장마사지 | 경기도 의왕 홈타이 예약 안내 | 오후 7시~오전 4시',
  description: '의왕출장마사지·홈타이 예약 상담. 고천·부곡·오전·내손·청계 등 방문 주소와 시간을 확인합니다. 오후 7시~오전 4시 문의, 추가비 없는 후불 결제.',
  keywords: '의왕출장마사지, 의왕출장안마, 의왕홈타이, 의왕출장태국마사지, 의왕마사지, 내손동출장마사지, 오전동출장안마, 고천동출장마사지, 왕곡동출장안마, 초평동홈타이, 부곡동출장안마, 의왕역출장마사지, 의왕시출장마사지',
  openGraph: {
    title: '의왕출장마사지 | 경기도 의왕 홈타이 예약 안내 | 노마드출장마사지',
    description: '의왕출장마사지·홈타이 예약 상담. 고천·부곡·오전·내손·청계 등 방문 주소와 시간을 확인합니다. 오후 7시~오전 4시 문의, 추가비 없는 후불 결제.',
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
    description: '의왕출장마사지·홈타이 예약 상담. 고천·부곡·오전·내손·청계 등 방문 주소와 시간을 확인합니다. 오후 7시~오전 4시 문의, 추가비 없는 후불 결제.',
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
        { src: '/images/location-2.jpg', title: '예약 확인', desc: "받으실 주소와 원하는 시간을 알려주세요", gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-3.jpg', title: '코스 안내', desc: '코스가 고민되면 차이부터 물어보세요', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-4.jpg', title: '방문 일정', desc: '방문 시간과 총금액을 예약 전에 확인하세요', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="의왕에서 출장마사지를 원하시면 주소와 받고 싶은 시간을 보내주세요. 방문 가능 여부를 확인한 뒤 예약을 도와드립니다. 상담시간은 오후 7시~오전 4시입니다."
      areas={[
        "고천동", "부곡동", "오전동", "내손1동", "내손2동", "청계동", "포일동", "학의동", "의왕역"
      ]}
      latitude="37.3448"
      longitude="126.9681"
      intro={
        <>
          <p>
            고천동·부곡동·오전동이나 내손1·2동·청계동에서 받으실 예정이라면 도로명 주소와 건물명을 알려주세요. 포일동·학의동도 건물 출입 방법이나 주차 위치를 함께 보내주시면 좋습니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            타이·아로마·스웨디시와 60·90·120분 코스를 상담할 수 있습니다. 어떤 코스가 좋을지 고민되면 원하는 강도와 이용 시간을 말씀해주세요. 관리 방식의 차이를 설명해드립니다.
          </p>
        </>
      }
      outro={
        <>
          <p>
            호텔이나 숙소에서는 외부 방문객 출입이 허용돼야 합니다. 예약금 없이 이용 후 현장에서 결제하며, 의왕 지역의 출장·주차·야간 추가비는 받지 않습니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">고천동 부곡동 오전동 내손1동 내손2동 청계동 포일동 학의동 의왕역</div>
        </>
      }
    />
  );
}
