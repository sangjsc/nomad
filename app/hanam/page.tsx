import { Metadata } from 'next'
import LocationPage from '../components/LocationPage'

export const metadata: Metadata = {
  title: '하남출장마사지 | 경기도 하남 홈타이 예약 안내 | 오후 7시~오전 4시',
  description: '하남출장마사지·홈타이, 미사·위례·감일 등 방문 예약 상담. 오후 7시~오전 4시 문의, 타이·아로마·스웨디시, 선입금 없이 이용 후 결제.',
  keywords: '하남출장마사지, 하남출장안마, 하남홈타이, 하남출장태국마사지, 하남마사지, 미사강변도시출장마사지, 위례동출장안마, 신장동출장마사지, 천현동출장안마, 감북동홈타이, 감일동출장마사지, 감이동출장안마, 창우동출장안마, 덕풍동출장마사지, 미사역출장안마, 하남시출장마사지',
  openGraph: {
    title: '하남출장마사지 | 경기도 하남 홈타이 예약 안내 | 노마드출장마사지',
    description: '하남출장마사지·홈타이, 미사·위례·감일 등 방문 예약 상담. 오후 7시~오전 4시 문의, 타이·아로마·스웨디시, 선입금 없이 이용 후 결제.',
    url: 'https://www.nomadthai.kr/hanam',
    type: 'website',
    locale: 'ko_KR',
    images: [
      {
        url: '/og/hanam',
        width: 1200,
        height: 630,
        alt: '하남출장마사지 - 노마드출장마사지 오후 7시~오전 4시 서비스',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '하남출장마사지 | 노마드출장마사지',
    description: '하남출장마사지·홈타이, 미사·위례·감일 등 방문 예약 상담. 오후 7시~오전 4시 문의, 타이·아로마·스웨디시, 선입금 없이 이용 후 결제.',
    images: ['/og/hanam'],
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
        { src: '/images/location-7.jpg', title: '예약 확인', desc: "받으실 주소와 원하는 시간을 알려주세요", gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-8.jpg', title: '코스 안내', desc: '코스가 고민되면 차이부터 물어보세요', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-9.jpg', title: '방문 일정', desc: '방문 시간과 총금액을 예약 전에 확인하세요', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="하남에서 집이나 숙소로 부르는 마사지를 예약하실 수 있습니다. 받으실 주소와 원하는 시간을 알려주세요. 오후 7시~오전 4시에 상담하며 방문 가능 여부부터 확인합니다."
      areas={[
        "미사강변도시", "위례동", "신장동", "천현동", "감북동", "감일동", "감이동", "창우동", "덕풍동", "미사역", "검단산"
      ]}
      latitude="37.5392"
      longitude="127.2145"
      intro={
        <>
          <p>
            미사강변도시·위례동·감일동에서 문의하실 때 건물명과 주소를 함께 보내주세요. 아파트는 동과 출입구를, 오피스텔은 공동현관이나 방문 등록 방법을 알려주시면 됩니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            60·90·120분 중 이용 시간을 고른 뒤 타이·아로마·스웨디시 코스를 비교해보세요. 어떤 차이가 있는지 궁금하시면 예약 전에 설명해드립니다. 숙소 이용은 외부 방문객 출입이 허용되는 경우에 상담할 수 있습니다.
          </p>
        </>
      }
      outro={
        <>
          <p>
            원하는 시간에 방문할 수 있는지 확인하고 코스와 금액을 정합니다. 예약금 없이 서비스 후 현장 결제이며, 하남 지역의 출장비·주차비·야간 추가비는 없습니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">미사강변도시 위례동 신장동 천현동 감북동 감일동 감이동 창우동 덕풍동 미사역 검단산</div>
        </>
      }
    />
  );
}
