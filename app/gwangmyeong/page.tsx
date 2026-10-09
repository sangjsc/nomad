import type { Metadata } from "next";
import LocationPage from "../components/LocationPage";

export const metadata: Metadata = {
  title: "광명출장마사지 | 광명출장안마·홈타이 예약 안내 | 오후 7시~오전 4시",
  description: "광명출장마사지·홈타이, 철산·하안·소하·일직 등으로 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없이 서비스 후 결제. 오후 7시~오전 4시 상담.",
  keywords:
    "광명출장마사지, 광명출장안마, 광명 출장 안마, 광명 홈타이, 광명마사지, 광명출장태국마사지, 철산동출장마사지, 하안동출장마사지, 광명동출장마사지, 소하동출장마사지, 일직동출장마사지, 학온동출장마사지, 노온사동출장마사지, 가학동출장마사지, 옥길동출장마사지, 광명사거리출장마사지, 광명시출장마사지",
  openGraph: {
    title: "광명출장마사지 | 광명출장안마·홈타이 예약 안내 | 노마드출장마사지",
    description: "광명출장마사지·홈타이, 철산·하안·소하·일직 등으로 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없이 서비스 후 결제. 오후 7시~오전 4시 상담.",
    url: "https://www.nomadthai.kr/gwangmyeong",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/og/gwangmyeong",
        width: 1200,
        height: 630,
        alt: "광명출장마사지 - 노마드출장마사지 오후 7시~오전 4시 상담",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "광명출장마사지 | 광명출장안마 노마드출장마사지",
    description: "광명출장마사지·홈타이, 철산·하안·소하·일직 등으로 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없이 서비스 후 결제. 오후 7시~오전 4시 상담.",
    images: ["/og/gwangmyeong"],
  },
  alternates: {
    canonical: "https://www.nomadthai.kr/gwangmyeong",
  },
};

export default function GwangmyeongPage() {
  return (
    <LocationPage
      city="광명"
      cityEn="gwangmyeong"
      theme="amber"
      heroImage="/images/location-8.jpg"
      teamImages={[
        { src: '/images/location-5.jpg', title: '방문 마사지', desc: "집·오피스텔·숙소로 직접 방문", gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-6.jpg', title: '마사지 코스', desc: '타이·아로마·스웨디시 60·90·120분', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-7.jpg', title: '후불 결제', desc: '예약금 없이 서비스 후 현장 결제', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="철산·하안·소하·일직의 집과 숙소에서 즐기는 광명 방문 마사지. 타이 60분 7만원부터, 출장·주차·야간 추가비 없이 이용 후 현장에서 결제합니다."
      areas={["철산동", "하안동", "광명동", "소하동", "일직동", "학온동", "노온사동", "가학동", "옥길동", "광명사거리"]}
      latitude="37.4786"
      longitude="126.8647"
      intro={
        <>
          <p>
            철산동·하안동·광명동의 예약에는 주소와 건물명, 공동현관 출입 방법이 필요합니다. 소하동·일직동의 호텔이나 숙소도 외부 방문객 출입이 허용되는 곳에서 이용할 수 있습니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            타이·아로마·스웨디시와 60·90·120분 코스를 제공합니다. 관리 방식과 이용 시간별 금액을 가격표에 공개하며, 선호하는 강도에 맞춰 진행합니다.
          </p>
        </>
      }
      outro={
        <>
          <p>
            학온동·노온사동·가학동을 포함한 광명 지역도 선입금 없이 이용 후 결제합니다. 전화·카카오톡 상담은 오후 7시~오전 4시이며, 방문 일정은 예약 시 안내합니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">철산동 하안동 광명동 소하동 일직동 학온동 노온사동 가학동 옥길동 광명사거리</div>
        </>
      }
    />
  );
}
