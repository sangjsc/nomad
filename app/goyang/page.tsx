import type { Metadata } from "next";
import LocationPage from "../components/LocationPage";

export const metadata: Metadata = {
  title: "고양출장마사지 | 고양출장안마·홈타이 예약 안내 | 오후 7시~오전 4시",
  description: "고양출장마사지·홈타이, 일산동구·일산서구·덕양구로 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없이 이용 후 현장 결제. 오후 7시~오전 4시 상담.",
  keywords:
    "고양출장마사지, 고양출장안마, 고양 출장 안마, 고양 홈타이, 고양마사지, 고양출장태국마사지, 일산동구출장마사지, 일산서구출장마사지, 덕양구출장마사지, 주엽동출장마사지, 마두동출장마사지, 화정동출장마사지, 행신동출장마사지, 백석동출장마사지, 탄현동출장마사지, 대화동출장마사지, 고양시출장마사지",
  openGraph: {
    title: "고양출장마사지 | 고양출장안마·홈타이 예약 안내 | 노마드출장마사지",
    description: "고양출장마사지·홈타이, 일산동구·일산서구·덕양구로 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없이 이용 후 현장 결제. 오후 7시~오전 4시 상담.",
    url: "https://www.nomadthai.kr/goyang",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/og/goyang",
        width: 1200,
        height: 630,
        alt: "고양출장마사지 - 노마드출장마사지 오후 7시~오전 4시 상담",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "고양출장마사지 | 고양출장안마 노마드출장마사지",
    description: "고양출장마사지·홈타이, 일산동구·일산서구·덕양구로 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없이 이용 후 현장 결제. 오후 7시~오전 4시 상담.",
    images: ["/og/goyang"],
  },
  alternates: {
    canonical: "https://www.nomadthai.kr/goyang",
  },
};

export default function GoyangPage() {
  return (
    <LocationPage
      city="고양"
      cityEn="goyang"
      theme="purple"
      heroImage="/images/location-2.jpg"
      teamImages={[
        { src: '/images/location-5.jpg', title: '방문 마사지', desc: "집·오피스텔·숙소로 직접 방문", gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-6.jpg', title: '마사지 코스', desc: '타이·아로마·스웨디시 60·90·120분', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-7.jpg', title: '후불 결제', desc: '예약금 없이 서비스 후 현장 결제', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="일산동구·일산서구·덕양구에서 머무는 공간으로 찾아갑니다. 타이 60분 7만원부터 시작하는 방문 마사지, 출장·주차·야간 추가비 없이 후불로 이용합니다."
      areas={["일산동구", "일산서구", "덕양구", "주엽동", "마두동", "화정동", "행신동", "백석동", "탄현동", "대화동"]}
      latitude="37.6584"
      longitude="126.8320"
      intro={
        <>
          <p>
            주엽동·마두동의 자택과 오피스텔 예약에는 건물명과 주소, 공동현관 출입 방법이 필요합니다. 호텔은 외부 방문객의 객실 출입이 허용되는 경우에 이용할 수 있습니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            타이·아로마·스웨디시를 60·90·120분으로 제공합니다. 코스별 가격과 관리 방식을 비교할 수 있으며, 강도는 선호에 맞춰 진행합니다.
          </p>
        </>
      }
      outro={
        <>
          <p>
            화정동·행신동·백석동도 동일한 가격과 결제 기준을 적용합니다. 고양 예약 상담은 오후 7시~오전 4시, 결제는 서비스가 끝난 뒤 현장에서 진행합니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">일산동구 일산서구 덕양구 주엽동 마두동 화정동 행신동 백석동 탄현동 대화동</div>
        </>
      }
    />
  );
}
