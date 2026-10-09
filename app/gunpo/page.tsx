import { Metadata } from 'next'
import LocationPage from '../components/LocationPage'

export const metadata: Metadata = {
  title: '군포출장마사지 | 경기도 군포 홈타이 예약 안내 | 오후 7시~오전 4시',
  description: '군포출장마사지·홈타이, 산본·금정·당정 등으로 직접 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없는 후불 결제. 오후 7시~오전 4시 상담.',
  keywords: '군포출장마사지, 군포출장안마, 군포홈타이, 군포출장태국마사지, 군포마사지, 산본동출장마사지, 금정동출장안마, 당정동출장마사지, 대야미동출장안마, 반월동홈타이, 재궁동출장마사지, 산본역출장마사지, 금정역출장안마, 당정역출장마사지, 군포시출장마사지',
  openGraph: {
    title: '군포출장마사지 | 경기도 군포 홈타이 예약 안내 | 노마드출장마사지',
    description: '군포출장마사지·홈타이, 산본·금정·당정 등으로 직접 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없는 후불 결제. 오후 7시~오전 4시 상담.',
    url: 'https://www.nomadthai.kr/gunpo',
    type: 'website',
    locale: 'ko_KR',
    images: [
      {
        url: '/og/gunpo',
        width: 1200,
        height: 630,
        alt: '군포출장마사지 - 노마드출장마사지 오후 7시~오전 4시 상담',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '군포출장마사지 | 노마드출장마사지',
    description: '군포출장마사지·홈타이, 산본·금정·당정 등으로 직접 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없는 후불 결제. 오후 7시~오전 4시 상담.',
    images: ['/og/gunpo'],
  },
  alternates: {
    canonical: 'https://www.nomadthai.kr/gunpo',
  },
}

export default function GunpoPage() {
  return (
    <LocationPage
      city="군포"
      cityEn="gunpo"
      theme="rose"
      heroImage="/images/location-3.jpg"
      teamImages={[
        { src: '/images/location-4.jpg', title: '방문 마사지', desc: "집·오피스텔·숙소로 직접 방문", gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-5.jpg', title: '마사지 코스', desc: '타이·아로마·스웨디시 60·90·120분', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-6.jpg', title: '후불 결제', desc: '예약금 없이 서비스 후 현장 결제', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="산본동·금정동·당정동에서 이동 없이 받는 군포 방문 마사지. 타이 60분 7만원부터 아로마·스웨디시까지, 출장·주차·야간 추가비 없이 서비스 후 결제합니다."
      areas={[
        "산본동", "금정동", "당정동", "대야미동", "반월동", "재궁동", "산본역", "금정역", "당정역", "지하철 4호선"
      ]}
      latitude="37.3618"
      longitude="126.9351"
      intro={
        <>
          <p>
            산본·금정·당정역 인근 예약은 역 이름과 함께 도로명 주소와 건물명으로 접수합니다. 공동현관·방문 등록 방법이 필요하며, 숙소는 외부 방문객 출입이 허용되어야 합니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            타이·아로마·스웨디시는 60·90·120분 코스로 구성됩니다. 이용 시간과 코스별 금액을 미리 안내하며, 원하는 관리 방식과 강도에 맞춰 예약합니다.
          </p>
        </>
      }
      outro={
        <>
          <p>
            군포 출장마사지는 오후 7시~오전 4시 전화·카카오톡 상담으로 예약을 받습니다. 방문 일정은 상담 후 정하며, 선입금 없이 이용 후 현장에서 결제합니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">산본동 금정동 당정동 대야미동 반월동 재궁동 산본역 금정역 당정역 지하철4호선</div>
        </>
      }
    />
  );
}
