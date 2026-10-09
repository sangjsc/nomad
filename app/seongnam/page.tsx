import { Metadata } from 'next'
import LocationPage from '../components/LocationPage'

export const metadata: Metadata = {
  title: '성남출장마사지 | 경기도 성남 홈타이 예약 안내 | 오후 7시~오전 4시',
  description: '성남출장마사지·홈타이, 분당구·수정구·중원구로 직접 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없는 후불 결제. 오후 7시~오전 4시 상담.',
  keywords: '성남출장마사지, 성남홈타이, 성남출장태국마사지, 성남출장안마, 성남마사지, 분당구출장마사지, 수정구출장마사지, 중원구출장마사지, 야탑동출장마사지, 정자동출장마사지, 서현동출장마사지, 판교동출장마사지, 태평동출장마사지, 신흥동출장마사지, 복정동출장마사지, 성남시출장마사지',
  openGraph: {
    title: '성남출장마사지 | 경기도 성남 홈타이 예약 안내 | 노마드출장마사지',
    description: '성남출장마사지·홈타이, 분당구·수정구·중원구로 직접 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없는 후불 결제. 오후 7시~오전 4시 상담.',
    url: 'https://www.nomadthai.kr/seongnam',
    type: 'website',
    locale: 'ko_KR',
    images: [
      {
        url: '/og/seongnam',
        width: 1200,
        height: 630,
        alt: '성남출장마사지 - 노마드출장마사지 오후 7시~오전 4시 상담',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '성남출장마사지 | 노마드출장마사지',
    description: '성남출장마사지·홈타이, 분당구·수정구·중원구로 직접 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없는 후불 결제. 오후 7시~오전 4시 상담.',
    images: ['/og/seongnam'],
  },
  alternates: {
    canonical: 'https://www.nomadthai.kr/seongnam',
  },
}

export default function SeongnamPage() {
  return (
    <LocationPage
      city="성남"
      cityEn="seongnam"
      theme="blue"
      heroImage="/images/location-6.jpg"
      teamImages={[
        { src: '/images/location-1.jpg', title: '방문 마사지', desc: "집·오피스텔·숙소로 직접 방문", gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-2.jpg', title: '마사지 코스', desc: '타이·아로마·스웨디시 60·90·120분', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-3.jpg', title: '후불 결제', desc: '예약금 없이 서비스 후 현장 결제', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="분당구·수정구·중원구에서 집으로 찾아오는 성남 마사지 서비스. 타이 60분 7만원부터, 출장·주차·야간 추가비 없이 서비스 후 현장에서 결제합니다."
      areas={["분당구", "수정구", "중원구", "야탑동", "정자동", "서현동", "판교동", "태평동", "신흥동", "복정동"]}
      latitude="37.4449"
      longitude="127.1388"
      intro={
        <>
          <p>
            판교동·야탑동·정자동의 예약은 도로명 주소와 건물명을 기준으로 접수합니다. 아파트·오피스텔은 공동현관 출입 방법이 필요하며, 숙소는 외부 방문객 출입이 허용되어야 합니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            60분 코스부터 90·120분 코스까지, 일정에 맞는 이용 시간을 선택할 수 있습니다. 타이·아로마·스웨디시의 관리 방식과 선호 강도를 상담해 예약합니다.
          </p>
        </>
      }
      outro={
        <>
          <p>
            성남 출장마사지는 오후 7시~오전 4시 전화·카카오톡으로 예약을 받습니다. 방문 시간과 총금액을 안내한 뒤 일정을 정하며 예약금은 없습니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">#분당구 #수정구 #중원구 #야탑동 #정자동 #서현동 #판교동 #태평동 #신흥동 #복정동</div>
        </>
      }
    />
  );
}
