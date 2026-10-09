import { Metadata } from 'next'
import LocationPage from '../components/LocationPage'

export const metadata: Metadata = {
  title: '하남출장마사지 | 경기도 하남 홈타이 예약 안내 | 오후 7시~오전 4시',
  description: '하남출장마사지·홈타이, 미사·위례·감일의 집과 숙소로 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없는 후불 결제. 오후 7시~오전 4시 상담.',
  keywords: '하남출장마사지, 하남출장안마, 하남홈타이, 하남출장태국마사지, 하남마사지, 미사강변도시출장마사지, 위례동출장안마, 신장동출장마사지, 천현동출장안마, 감북동홈타이, 감일동출장마사지, 감이동출장안마, 창우동출장안마, 덕풍동출장마사지, 미사역출장안마, 하남시출장마사지',
  openGraph: {
    title: '하남출장마사지 | 경기도 하남 홈타이 예약 안내 | 노마드출장마사지',
    description: '하남출장마사지·홈타이, 미사·위례·감일의 집과 숙소로 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없는 후불 결제. 오후 7시~오전 4시 상담.',
    url: 'https://www.nomadthai.kr/hanam',
    type: 'website',
    locale: 'ko_KR',
    images: [
      {
        url: '/og/hanam',
        width: 1200,
        height: 630,
        alt: '하남출장마사지 - 노마드출장마사지 오후 7시~오전 4시 상담',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '하남출장마사지 | 노마드출장마사지',
    description: '하남출장마사지·홈타이, 미사·위례·감일의 집과 숙소로 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없는 후불 결제. 오후 7시~오전 4시 상담.',
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
        { src: '/images/location-7.jpg', title: '방문 마사지', desc: "집·오피스텔·숙소로 직접 방문", gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-8.jpg', title: '마사지 코스', desc: '타이·아로마·스웨디시 60·90·120분', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-9.jpg', title: '후불 결제', desc: '예약금 없이 서비스 후 현장 결제', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="미사·위례·감일에서 편한 공간으로 찾아오는 하남 마사지 서비스. 타이 60분 7만원부터, 출장·주차·야간 추가비 없이 서비스를 받은 뒤 결제합니다."
      areas={[
        "미사강변도시", "위례동", "신장동", "천현동", "감북동", "감일동", "감이동", "창우동", "덕풍동", "미사역", "검단산"
      ]}
      latitude="37.5392"
      longitude="127.2145"
      intro={
        <>
          <p>
            미사강변도시·위례동·감일동의 방문 예약에는 주소와 건물명, 동·출입구 정보가 필요합니다. 공동현관이나 방문 등록 절차가 있는 경우 예약 시 함께 접수합니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            타이·아로마·스웨디시를 60·90·120분으로 제공합니다. 자택·오피스텔과 외부 방문객 출입이 허용되는 숙소에서 원하는 코스를 이용할 수 있습니다.
          </p>
        </>
      }
      outro={
        <>
          <p>
            하남 출장마사지 상담은 오후 7시~오전 4시 전화·카카오톡으로 진행합니다. 방문 시간과 코스 금액을 안내한 뒤 예약하며, 예약금 없이 서비스 후 현장에서 결제합니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">미사강변도시 위례동 신장동 천현동 감북동 감일동 감이동 창우동 덕풍동 미사역 검단산</div>
        </>
      }
    />
  );
}
