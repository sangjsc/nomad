import { Metadata } from 'next'
import LocationPage from '../components/LocationPage'

export const metadata: Metadata = {
  title: '안양출장마사지 | 경기도 안양 홈타이 예약 안내 | 오후 7시~오전 4시',
  description: '안양출장마사지·홈타이, 동안구·만안구 예약 상담. 타이·아로마·스웨디시 60·90·120분 코스, 오후 7시~오전 4시 문의, 선입금 없는 후불 결제.',
  keywords: '안양출장마사지, 안양홈타이, 안양출장태국마사지, 안양출장안마, 안양마사지, 동안구출장마사지, 만안구출장마사지, 비산동출장마사지, 갈산동출장마사지, 관양동출장마사지, 평촌동출장마사지, 호계동출장마사지, 범계동출장마사지, 안양동출장마사지, 박달동출장마사지, 안양시출장마사지',
  openGraph: {
    title: '안양출장마사지 | 경기도 안양 홈타이 예약 안내 | 노마드출장마사지',
    description: '안양출장마사지·홈타이, 동안구·만안구 예약 상담. 타이·아로마·스웨디시 60·90·120분 코스, 오후 7시~오전 4시 문의, 선입금 없는 후불 결제.',
    url: 'https://www.nomadthai.kr/anyang',
    type: 'website',
    locale: 'ko_KR',
    images: [
      {
        url: '/og/anyang',
        width: 1200,
        height: 630,
        alt: '안양출장마사지 - 노마드출장마사지 오후 7시~오전 4시 서비스',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '안양출장마사지 | 노마드출장마사지',
    description: '안양출장마사지·홈타이, 동안구·만안구 예약 상담. 타이·아로마·스웨디시 60·90·120분 코스, 오후 7시~오전 4시 문의, 선입금 없는 후불 결제.',
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
        { src: '/images/location-3.jpg', title: '예약 확인', desc: "받으실 주소와 원하는 시간을 알려주세요", gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-4.jpg', title: '코스 안내', desc: '코스가 고민되면 차이부터 물어보세요', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-5.jpg', title: '방문 일정', desc: '방문 시간과 총금액을 예약 전에 확인하세요', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="안양에서 원하는 시간에 마사지를 받을 수 있는지 먼저 문의해보세요. 동안구·만안구의 방문 주소를 확인해 예약을 잡습니다. 오후 7시~오전 4시에 상담을 받습니다."
      areas={["동안구", "만안구", "비산동", "갈산동", "관양동", "평촌동", "호계동", "범계동", "안양동", "박달동"]}
      latitude="37.3943"
      longitude="126.9568"
      intro={
        <>
          <p>
            평촌동·범계동이나 안양동·박달동에서 받으실 예정이라면 도로명 주소와 건물명을 알려주세요. 공동현관이나 방문 등록이 있는 건물은 들어가는 방법도 함께 부탁드립니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            타이·아로마·스웨디시와 60·90·120분 코스를 고를 수 있습니다. 코스명만 보고 정하기 어려우시면 관리 방식과 시간 차이를 물어보세요. 예약을 확정하기 전에 총금액도 함께 확인합니다.
          </p>
        </>
      }
      outro={
        <>
          <p>
            숙소에서 이용할 때는 외부 방문객 출입이 허용되는지 확인해주세요. 선입금은 없으며 서비스 후 현장에서 결제합니다. 안양 지역의 출장·주차·야간 추가비도 없습니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">동안구 만안구 비산동 갈산동 관양동 평촌동 호계동 범계동 안양동 박달동</div>
        </>
      }
    />
  );
}
