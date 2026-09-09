import { Metadata } from 'next'
import LocationPage from '../components/LocationPage'

export const metadata: Metadata = {
  title: '군포출장마사지 | 경기도 군포 홈타이 예약 안내 | 오후 7시~오전 4시',
  description: '군포출장마사지·홈타이, 산본·금정·당정 등 예약 상담. 타이·아로마·스웨디시 60·90·120분, 오후 7시~오전 4시 문의, 추가비 없는 후불 결제.',
  keywords: '군포출장마사지, 군포출장안마, 군포홈타이, 군포출장태국마사지, 군포마사지, 산본동출장마사지, 금정동출장안마, 당정동출장마사지, 대야미동출장안마, 반월동홈타이, 재궁동출장마사지, 산본역출장마사지, 금정역출장안마, 당정역출장마사지, 군포시출장마사지',
  openGraph: {
    title: '군포출장마사지 | 경기도 군포 홈타이 예약 안내 | 노마드출장마사지',
    description: '군포출장마사지·홈타이, 산본·금정·당정 등 예약 상담. 타이·아로마·스웨디시 60·90·120분, 오후 7시~오전 4시 문의, 추가비 없는 후불 결제.',
    url: 'https://www.nomadthai.kr/gunpo',
    type: 'website',
    locale: 'ko_KR',
    images: [
      {
        url: '/og/gunpo',
        width: 1200,
        height: 630,
        alt: '군포출장마사지 - 노마드출장마사지 오후 7시~오전 4시 서비스',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '군포출장마사지 | 노마드출장마사지',
    description: '군포출장마사지·홈타이, 산본·금정·당정 등 예약 상담. 타이·아로마·스웨디시 60·90·120분, 오후 7시~오전 4시 문의, 추가비 없는 후불 결제.',
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
        { src: '/images/location-4.jpg', title: '예약 확인', desc: "받으실 주소와 원하는 시간을 알려주세요", gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-5.jpg', title: '코스 안내', desc: '코스가 고민되면 차이부터 물어보세요', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-6.jpg', title: '방문 일정', desc: '방문 시간과 총금액을 예약 전에 확인하세요', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="군포에서 받으실 장소와 시간을 알려주세요. 타이·아로마·스웨디시 가운데 원하는 코스를 상담할 수 있습니다. 문의는 오후 7시~오전 4시에 받습니다."
      areas={[
        "산본동", "금정동", "당정동", "대야미동", "반월동", "재궁동", "산본역", "금정역", "당정역", "지하철 4호선"
      ]}
      latitude="37.3618"
      longitude="126.9351"
      intro={
        <>
          <p>
            산본동·금정동·당정동에서 문의하실 때는 가까운 역 이름뿐 아니라 건물명과 주소도 함께 부탁드립니다. 공동현관이나 방문 등록이 있는 건물은 출입 방법도 알려주세요.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            60·90·120분 중 원하는 이용 시간을 선택해주세요. 코스를 정하지 못하셨다면 타이·아로마·스웨디시의 차이를 먼저 물어보셔도 됩니다. 숙소로 예약하실 경우 외부 방문객 출입이 허용되는지 확인해주세요.
          </p>
        </>
      }
      outro={
        <>
          <p>
            방문할 수 있는 시간과 코스, 총금액을 확인한 뒤 예약하시면 됩니다. 군포 지역은 출장·주차·야간 추가비가 없으며, 선입금 없이 이용 후 현장에서 결제합니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">산본동 금정동 당정동 대야미동 반월동 재궁동 산본역 금정역 당정역 지하철4호선</div>
        </>
      }
    />
  );
}
