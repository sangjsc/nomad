import { Metadata } from 'next'
import LocationPage from '../components/LocationPage'

export const metadata: Metadata = {
  title: '하남출장마사지 | 경기도 하남 홈타이 예약 안내 | 오후 7시~오전 4시',
  description: '경기도 하남시 전 지역 출장마사지·홈타이 예약 안내. 오후 7시~오전 4시 운영, 100% 후불제, 전화·카카오톡 상담이 가능합니다.',
  keywords: '하남출장마사지, 하남출장안마, 하남홈타이, 하남출장태국마사지, 하남마사지, 미사강변도시출장마사지, 위례동출장안마, 신장동출장마사지, 천현동출장안마, 감북동홈타이, 감일동출장마사지, 감이동출장안마, 창우동출장안마, 덕풍동출장마사지, 미사역출장안마, 하남시출장마사지',
  openGraph: {
    title: '하남출장마사지 | 경기도 하남 홈타이 예약 안내 | 노마드출장마사지',
    description: '경기도 하남시 전 지역 출장마사지 예약 안내. 오후 7시~오전 4시 운영, 100% 후불제로 이용 가능합니다.',
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
    description: '하남시 전 지역 오후 7시~오전 4시 출장마사지. 100% 후불제로 예약 가능합니다.',
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
        { src: '/images/location-7.jpg', title: '예약 확인', desc: "위치·시간·코스를 상담할 때 확인", gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-8.jpg', title: '코스 안내', desc: '타이·아로마·스웨디시 코스별 안내', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-9.jpg', title: '방문 일정', desc: '접수 순서와 이동 동선 확인 후 안내', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="하남 출장마사지·홈타이 예약 안내입니다. 오후 7시~오전 4시 상담하며 실제 주소와 희망 시간을 확인해 가능한 일정을 안내하고 서비스 완료 후 현장에서 결제합니다."
      areas={[
        "미사강변도시", "위례동", "신장동", "천현동", "감북동", "감일동", "감이동", "창우동", "덕풍동", "미사역", "검단산"
      ]}
      latitude="37.5392"
      longitude="127.2145"
      intro={
        <>
          <p>
            노마드출장마사지는 하남의 자택·오피스텔과 외부 방문이 허용된 호텔·숙소에서 이용할 코스와 방문 가능 일정을 상담합니다. 건물명과 출입·주차 조건을 함께 알려주세요.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            노마드출장마사지 하남 서비스는 타이·아로마·스웨디시 코스와 60·90·120분 이용 시간을 안내합니다. 현재 위치와 희망 시간을 확인한 뒤 가능한 방문 일정을 안내하며, 예약금과 선입금 없이 서비스 완료 후 현장에서 결제합니다.
          </p>
        </>
      }
      outro={
        <>
          <p>
            하남 지역의 실제 주소와 희망 시간, 원하는 코스를 전화나 카카오톡으로 알려주시면 접수 순서와 이동 동선을 확인해 가능한 일정을 안내합니다. 최종 코스·시간·금액은 예약 확정 전에 확인해주세요.
          </p>
          <div className="mt-4 text-sm text-gray-600">미사강변도시 위례동 신장동 천현동 감북동 감일동 감이동 창우동 덕풍동 미사역 검단산</div>
        </>
      }
    />
  );
}
