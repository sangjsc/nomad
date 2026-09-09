import { Metadata } from 'next'
import LocationPage from '../components/LocationPage'

export const metadata: Metadata = {
  title: '성남출장마사지 | 경기도 성남 홈타이 예약 안내 | 오후 7시~오전 4시',
  description: '성남출장마사지·홈타이 예약 상담. 분당구·수정구·중원구의 방문 주소와 시간을 확인합니다. 오후 7시~오전 4시 상담, 선입금 없이 이용 후 결제.',
  keywords: '성남출장마사지, 성남홈타이, 성남출장태국마사지, 성남출장안마, 성남마사지, 분당구출장마사지, 수정구출장마사지, 중원구출장마사지, 야탑동출장마사지, 정자동출장마사지, 서현동출장마사지, 판교동출장마사지, 태평동출장마사지, 신흥동출장마사지, 복정동출장마사지, 성남시출장마사지',
  openGraph: {
    title: '성남출장마사지 | 경기도 성남 홈타이 예약 안내 | 노마드출장마사지',
    description: '성남출장마사지·홈타이 예약 상담. 분당구·수정구·중원구의 방문 주소와 시간을 확인합니다. 오후 7시~오전 4시 상담, 선입금 없이 이용 후 결제.',
    url: 'https://www.nomadthai.kr/seongnam',
    type: 'website',
    locale: 'ko_KR',
    images: [
      {
        url: '/og/seongnam',
        width: 1200,
        height: 630,
        alt: '성남출장마사지 - 노마드출장마사지 오후 7시~오전 4시 서비스',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '성남출장마사지 | 노마드출장마사지',
    description: '성남출장마사지·홈타이 예약 상담. 분당구·수정구·중원구의 방문 주소와 시간을 확인합니다. 오후 7시~오전 4시 상담, 선입금 없이 이용 후 결제.',
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
        { src: '/images/location-1.jpg', title: '예약 확인', desc: "받으실 주소와 원하는 시간을 알려주세요", gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-2.jpg', title: '코스 안내', desc: '코스가 고민되면 차이부터 물어보세요', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-3.jpg', title: '방문 일정', desc: '방문 시간과 총금액을 예약 전에 확인하세요', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="성남에서 타이·아로마·스웨디시 마사지를 예약하실 수 있습니다. 분당구·수정구·중원구 중 방문할 주소와 원하는 시간을 알려주세요. 상담시간은 오후 7시~오전 4시입니다."
      areas={["분당구", "수정구", "중원구", "야탑동", "정자동", "서현동", "판교동", "태평동", "신흥동", "복정동"]}
      latitude="37.4449"
      longitude="127.1388"
      intro={
        <>
          <p>
            판교동·야탑동·정자동에서 문의하실 때는 건물 이름까지 함께 적어주세요. 집과 오피스텔은 현관 출입 방법을, 숙소는 외부 방문객 출입이 되는지 확인해주시면 됩니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            짧게 받고 싶은 날에는 60분, 더 여유를 두고 싶다면 90분이나 120분 코스를 살펴보세요. 타이·아로마·스웨디시 중 어떤 방식이 맞을지 고민되면 선호하는 강도와 함께 상담해보세요.
          </p>
        </>
      }
      outro={
        <>
          <p>
            방문 시간과 코스를 정한 뒤 금액을 확인하고 예약하시면 됩니다. 예약금 없이 이용 후 현장 결제이며, 성남 지역의 출장·주차·야간 추가비는 없습니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">#분당구 #수정구 #중원구 #야탑동 #정자동 #서현동 #판교동 #태평동 #신흥동 #복정동</div>
        </>
      }
    />
  );
}
