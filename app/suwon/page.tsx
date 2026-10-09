import type { Metadata } from "next";
import LocationPage from "../components/LocationPage";

export const metadata: Metadata = {
  title: "수원출장마사지 | 경기도 수원 홈타이 예약 안내 | 오후 7시~오전 4시",
  description: "수원출장마사지·홈타이, 자택과 숙소로 직접 방문합니다. 타이 60분 7만원부터 아로마·스웨디시까지, 출장·주차·야간 추가비 없는 후불 결제. 오후 7시~오전 4시 상담.",
  keywords:
    "수원출장마사지, 수원홈타이, 수원출장태국마사지, 수원출장안마, 수원마사지, 팔달구출장마사지, 영통구출장마사지, 권선구출장마사지, 장안구출장마사지, 인계동출장마사지, 광교출장마사지, 매탄동출장마사지, 세류동출장마사지, 정자동출장마사지, 호매실동출장마사지, 수원시출장마사지",
  openGraph: {
    title: "수원출장마사지 | 경기도 수원 홈타이 예약 안내 | 노마드출장마사지",
    description: "수원출장마사지·홈타이, 자택과 숙소로 직접 방문합니다. 타이 60분 7만원부터 아로마·스웨디시까지, 출장·주차·야간 추가비 없는 후불 결제. 오후 7시~오전 4시 상담.",
    url: "https://www.nomadthai.kr/suwon",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/og/suwon",
        width: 1200,
        height: 630,
        alt: "수원출장마사지 - 노마드출장마사지 오후 7시~오전 4시 상담",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "수원출장마사지 | 노마드출장마사지",
    description: "수원출장마사지·홈타이, 자택과 숙소로 직접 방문합니다. 타이 60분 7만원부터 아로마·스웨디시까지, 출장·주차·야간 추가비 없는 후불 결제. 오후 7시~오전 4시 상담.",
    images: ["/og/suwon"],
  },
  alternates: {
    canonical: "https://www.nomadthai.kr/suwon",
  },
};

export default function SuwonPage() {
  return (
    <LocationPage
      city="수원"
      cityEn="suwon"
      theme="rose"
      heroImage="/images/location-9.jpg"
      teamImages={[
        { src: '/images/location-1.jpg', title: '방문 마사지', desc: "집·오피스텔·숙소로 직접 방문", gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-2.jpg', title: '마사지 코스', desc: '타이·아로마·스웨디시 60·90·120분', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-3.jpg', title: '후불 결제', desc: '예약금 없이 서비스 후 현장 결제', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="수원의 집과 숙소에서 즐기는 타이·아로마·스웨디시. 타이 60분 7만원부터 시작하며 출장·주차·야간 추가비 없이 이용 후 결제합니다."
      areas={["팔달구", "영통구", "권선구", "장안구", "인계동", "광교", "매탄동", "세류동", "정자동", "호매실동"]}
      latitude="37.26357"
      longitude="127.02860"
      intro={
        <>
          <p>
            인계동·광교를 포함한 수원 방문 예약은 도로명 주소와 건물명을 기준으로 접수합니다. 공동현관 출입 방법이 필요하며, 호텔·숙소는 외부 방문객 출입이 허용되는 곳에서 이용할 수 있습니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            타이 60분 7만원, 아로마 8만원, 스웨디시 10만원부터입니다. 여유 있게 관리받는 90·120분 코스도 마련되어 있으며, 선호 강도에 맞춰 진행합니다.
          </p>
        </>
      }
      outro={
        <>
          <p>
            수원 방문 예약은 전화와 카카오톡으로 접수합니다. 오후 7시~오전 4시 상담 후 일정을 정하며, 예약금 없이 서비스가 끝난 뒤 현장에서 결제합니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">팔달구 영통구 권선구 장안구 인계동 광교 매탄동 세류동 정자동 호매실동</div>
        </>
      }
    />
  );
}
