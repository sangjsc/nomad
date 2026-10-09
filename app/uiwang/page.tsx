import { Metadata } from 'next'
import LocationPage from '../components/LocationPage'

export const metadata: Metadata = {
  title: '의왕출장마사지 | 경기도 의왕 홈타이 예약 안내 | 오후 7시~오전 4시',
  description: '의왕출장마사지·홈타이, 고천·부곡·오전·내손·청계로 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없는 후불 결제. 오후 7시~오전 4시 상담.',
  keywords: '의왕출장마사지, 의왕출장안마, 의왕홈타이, 의왕출장태국마사지, 의왕마사지, 내손동출장마사지, 오전동출장안마, 고천동출장마사지, 왕곡동출장안마, 초평동홈타이, 부곡동출장안마, 의왕역출장마사지, 의왕시출장마사지',
  openGraph: {
    title: '의왕출장마사지 | 경기도 의왕 홈타이 예약 안내 | 노마드출장마사지',
    description: '의왕출장마사지·홈타이, 고천·부곡·오전·내손·청계로 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없는 후불 결제. 오후 7시~오전 4시 상담.',
    url: 'https://www.nomadthai.kr/uiwang',
    type: 'website',
    locale: 'ko_KR',
    images: [
      {
        url: '/og/uiwang',
        width: 1200,
        height: 630,
        alt: '의왕출장마사지 - 노마드출장마사지 오후 7시~오전 4시 상담',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '의왕출장마사지 | 노마드출장마사지',
    description: '의왕출장마사지·홈타이, 고천·부곡·오전·내손·청계로 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없는 후불 결제. 오후 7시~오전 4시 상담.',
    images: ['/og/uiwang'],
  },
  alternates: {
    canonical: 'https://www.nomadthai.kr/uiwang',
  },
}

export default function UiwangPage() {
  return (
    <LocationPage
      city="의왕"
      cityEn="uiwang"
      theme="purple"
      heroImage="/images/location-1.jpg"
      teamImages={[
        { src: '/images/location-2.jpg', title: '방문 마사지', desc: "집·오피스텔·숙소로 직접 방문", gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-3.jpg', title: '마사지 코스', desc: '타이·아로마·스웨디시 60·90·120분', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-4.jpg', title: '후불 결제', desc: '예약금 없이 서비스 후 현장 결제', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="고천·부곡·오전·내손·청계의 편한 공간으로 찾아갑니다. 타이 60분 7만원부터 시작하는 의왕 방문 마사지, 출장·주차·야간 추가비 없이 후불로 이용합니다."
      areas={[
        "고천동", "부곡동", "오전동", "내손1동", "내손2동", "청계동", "포일동", "학의동", "의왕역"
      ]}
      latitude="37.3448"
      longitude="126.9681"
      intro={
        <>
          <p>
            고천동·부곡동·오전동과 내손1·2동·청계동의 예약에는 주소와 건물명이 필요합니다. 포일동·학의동도 출입·주차 정보를 기준으로 방문하며, 숙소는 외부 방문객 출입이 허용되어야 합니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            타이·아로마·스웨디시를 60·90·120분으로 제공합니다. 각 코스의 관리 방식과 금액을 상담에서 안내하고 선호하는 강도에 맞춰 진행합니다.
          </p>
        </>
      }
      outro={
        <>
          <p>
            의왕 예약 상담은 오후 7시부터 다음 날 오전 4시까지 전화와 카카오톡으로 진행합니다. 방문 시간과 코스를 정한 뒤 이용하며, 예약금이나 선입금은 없습니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">고천동 부곡동 오전동 내손1동 내손2동 청계동 포일동 학의동 의왕역</div>
        </>
      }
    />
  );
}
