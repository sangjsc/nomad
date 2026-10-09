import { Metadata } from 'next'
import LocationPage from '../components/LocationPage'

export const metadata: Metadata = {
  title: '안양출장마사지 | 경기도 안양 홈타이 예약 안내 | 오후 7시~오전 4시',
  description: '안양출장마사지·홈타이, 동안구·만안구 자택과 숙소로 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없이 이용 후 결제. 오후 7시~오전 4시 상담.',
  keywords: '안양출장마사지, 안양홈타이, 안양출장태국마사지, 안양출장안마, 안양마사지, 동안구출장마사지, 만안구출장마사지, 비산동출장마사지, 갈산동출장마사지, 관양동출장마사지, 평촌동출장마사지, 호계동출장마사지, 범계동출장마사지, 안양동출장마사지, 박달동출장마사지, 안양시출장마사지',
  openGraph: {
    title: '안양출장마사지 | 경기도 안양 홈타이 예약 안내 | 노마드출장마사지',
    description: '안양출장마사지·홈타이, 동안구·만안구 자택과 숙소로 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없이 이용 후 결제. 오후 7시~오전 4시 상담.',
    url: 'https://www.nomadthai.kr/anyang',
    type: 'website',
    locale: 'ko_KR',
    images: [
      {
        url: '/og/anyang',
        width: 1200,
        height: 630,
        alt: '안양출장마사지 - 노마드출장마사지 오후 7시~오전 4시 상담',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '안양출장마사지 | 노마드출장마사지',
    description: '안양출장마사지·홈타이, 동안구·만안구 자택과 숙소로 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없이 이용 후 결제. 오후 7시~오전 4시 상담.',
    images: ['/og/anyang'],
  },
  alternates: {
    canonical: 'https://www.nomadthai.kr/anyang',
  },
}

export default function AnyangPage() {
  return (
    <LocationPage
      city="안양"
      cityEn="anyang"
      theme="blue"
      heroImage="/images/location-2.jpg"
      teamImages={[
        { src: '/images/location-3.jpg', title: '방문 마사지', desc: "집·오피스텔·숙소로 직접 방문", gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-4.jpg', title: '마사지 코스', desc: '타이·아로마·스웨디시 60·90·120분', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-5.jpg', title: '후불 결제', desc: '예약금 없이 서비스 후 현장 결제', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="동안구·만안구 자택과 숙소로 직접 찾아가는 안양 방문 마사지. 타이 60분 7만원부터, 출장·주차·야간 추가비 없이 이용 후 현장에서 결제합니다."
      areas={["동안구", "만안구", "비산동", "갈산동", "관양동", "평촌동", "호계동", "범계동", "안양동", "박달동"]}
      latitude="37.3943"
      longitude="126.9568"
      intro={
        <>
          <p>
            평촌동·범계동과 안양동·박달동의 예약은 도로명 주소와 건물명으로 접수합니다. 공동현관·방문 등록 방법이 필요하며, 숙소는 외부 방문객 출입이 허용되어야 합니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            타이·아로마·스웨디시를 60·90·120분 코스로 제공합니다. 코스에 따른 관리 방식과 금액을 안내하며 선호하는 강도에 맞춰 진행합니다.
          </p>
        </>
      }
      outro={
        <>
          <p>
            안양 출장마사지 예약은 오후 7시~오전 4시 전화·카카오톡으로 접수합니다. 방문 시간과 코스를 정한 뒤 이용하며, 예약금 없이 서비스 후 결제합니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">동안구 만안구 비산동 갈산동 관양동 평촌동 호계동 범계동 안양동 박달동</div>
        </>
      }
    />
  );
}
