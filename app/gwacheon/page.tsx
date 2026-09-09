import { Metadata } from 'next'
import LocationPage from '../components/LocationPage'

export const metadata: Metadata = {
  title: '과천출장마사지 | 경기도 과천 홈타이 예약 안내 | 오후 7시~오전 4시',
  description: '과천출장마사지·홈타이, 중앙·별양·갈현 등 방문 예약 상담. 오후 7시~오전 4시 문의, 타이·아로마·스웨디시, 선입금과 출장·주차·야간 추가비 없음.',
  keywords: '과천출장마사지, 과천출장안마, 과천홈타이, 과천출장태국마사지, 과천마사지, 중앙동출장마사지, 갈현동출장안마, 별양동출장마사지, 원문동출장안마, 과천동홈타이, 주암동출장마사지, 문원동출장안마, 막계동출장마사지, 청계동출장안마, 관문동홈타이, 과천시출장마사지',
  openGraph: {
    title: '과천출장마사지 | 경기도 과천 홈타이 예약 안내 | 노마드출장마사지',
    description: '과천출장마사지·홈타이, 중앙·별양·갈현 등 방문 예약 상담. 오후 7시~오전 4시 문의, 타이·아로마·스웨디시, 선입금과 출장·주차·야간 추가비 없음.',
    url: 'https://www.nomadthai.kr/gwacheon',
    type: 'website',
    locale: 'ko_KR',
    images: [
      {
        url: '/og/gwacheon',
        width: 1200,
        height: 630,
        alt: '과천출장마사지 - 노마드출장마사지 오후 7시~오전 4시 서비스',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '과천출장마사지 | 노마드출장마사지',
    description: '과천출장마사지·홈타이, 중앙·별양·갈현 등 방문 예약 상담. 오후 7시~오전 4시 문의, 타이·아로마·스웨디시, 선입금과 출장·주차·야간 추가비 없음.',
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
        { src: '/images/location-5.jpg', title: '예약 확인', desc: "받으실 주소와 원하는 시간을 알려주세요", gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-6.jpg', title: '코스 안내', desc: '코스가 고민되면 차이부터 물어보세요', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-7.jpg', title: '방문 일정', desc: '방문 시간과 총금액을 예약 전에 확인하세요', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="과천에서 집이나 숙소로 부르는 마사지를 찾고 계신가요? 주소와 원하는 시간을 알려주세요. 오후 7시~오전 4시에 상담하며, 예약 전에 방문 가능 여부를 확인합니다."
      areas={["중앙동", "갈현동", "별양동", "원문동", "과천동", "주암동", "문원동", "막계동", "청계동", "관문동"]}
      latitude="37.4138"
      longitude="126.9875"
      intro={
        <>
          <p>
            중앙동·별양동·갈현동 등에서 아파트나 오피스텔로 예약하실 때는 건물명과 동, 출입구를 함께 알려주세요. 숙소라면 외부 방문객이 객실에 들어갈 수 있는지 먼저 확인해주세요.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            타이·아로마·스웨디시 코스와 60·90·120분 이용 시간을 비교해보세요. 코스명만으로 고르기 어렵다면 원하는 강도와 시간을 말씀해주세요. 궁금한 점을 확인한 뒤 결정하셔도 됩니다.
          </p>
        </>
      }
      outro={
        <>
          <p>
            방문 시간과 코스, 금액을 확인하셨다면 예약을 진행합니다. 과천 지역의 출장·주차·야간 추가비는 없으며, 선입금 없이 서비스가 끝난 뒤 현장에서 결제하시면 됩니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">중앙동 갈현동 별양동 원문동 과천동 주암동 문원동 막계동 청계동 관문동</div>
        </>
      }
    />
  );
}
