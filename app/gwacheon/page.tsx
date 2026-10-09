import { Metadata } from 'next'
import LocationPage from '../components/LocationPage'

export const metadata: Metadata = {
  title: '과천출장마사지 | 경기도 과천 홈타이 예약 안내 | 오후 7시~오전 4시',
  description: '과천출장마사지·홈타이, 중앙·별양·갈현의 집과 숙소로 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없이 이용 후 결제. 오후 7시~오전 4시 상담.',
  keywords: '과천출장마사지, 과천출장안마, 과천홈타이, 과천출장태국마사지, 과천마사지, 중앙동출장마사지, 갈현동출장안마, 별양동출장마사지, 원문동출장안마, 과천동홈타이, 주암동출장마사지, 문원동출장안마, 막계동출장마사지, 청계동출장안마, 관문동홈타이, 과천시출장마사지',
  openGraph: {
    title: '과천출장마사지 | 경기도 과천 홈타이 예약 안내 | 노마드출장마사지',
    description: '과천출장마사지·홈타이, 중앙·별양·갈현의 집과 숙소로 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없이 이용 후 결제. 오후 7시~오전 4시 상담.',
    url: 'https://www.nomadthai.kr/gwacheon',
    type: 'website',
    locale: 'ko_KR',
    images: [
      {
        url: '/og/gwacheon',
        width: 1200,
        height: 630,
        alt: '과천출장마사지 - 노마드출장마사지 오후 7시~오전 4시 상담',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '과천출장마사지 | 노마드출장마사지',
    description: '과천출장마사지·홈타이, 중앙·별양·갈현의 집과 숙소로 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없이 이용 후 결제. 오후 7시~오전 4시 상담.',
    images: ['/og/gwacheon'],
  },
  alternates: {
    canonical: 'https://www.nomadthai.kr/gwacheon',
  },
}

export default function GwacheonPage() {
  return (
    <LocationPage
      city="과천"
      cityEn="gwacheon"
      theme="amber"
      heroImage="/images/location-4.jpg"
      teamImages={[
        { src: '/images/location-5.jpg', title: '방문 마사지', desc: "집·오피스텔·숙소로 직접 방문", gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-6.jpg', title: '마사지 코스', desc: '타이·아로마·스웨디시 60·90·120분', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-7.jpg', title: '후불 결제', desc: '예약금 없이 서비스 후 현장 결제', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="중앙·별양·갈현에서 머무는 곳으로 찾아오는 과천 마사지 서비스. 타이 60분 7만원부터, 출장·주차·야간 추가비 없이 서비스를 받은 뒤 결제합니다."
      areas={["중앙동", "갈현동", "별양동", "원문동", "과천동", "주암동", "문원동", "막계동", "청계동", "관문동"]}
      latitude="37.4138"
      longitude="126.9875"
      intro={
        <>
          <p>
            중앙동·별양동·갈현동의 방문 예약에는 주소와 건물명, 동·출입구 정보가 필요합니다. 호텔·숙소는 외부 방문객의 객실 출입이 허용되는 곳에서 이용할 수 있습니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            타이·아로마·스웨디시를 60·90·120분으로 운영합니다. 선호하는 관리 방식과 이용 시간에 따라 코스를 정하며, 가격표에 공개된 금액으로 이용합니다.
          </p>
        </>
      }
      outro={
        <>
          <p>
            과천 출장마사지 예약은 오후 7시~오전 4시 전화·카카오톡으로 접수합니다. 상담 후 방문 일정을 정하고, 선입금 없이 서비스 후 현장에서 결제합니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">중앙동 갈현동 별양동 원문동 과천동 주암동 문원동 막계동 청계동 관문동</div>
        </>
      }
    />
  );
}
