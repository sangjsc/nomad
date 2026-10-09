import type { Metadata } from "next";
import LocationPage from "../components/LocationPage";

export const metadata: Metadata = {
  title: "화성출장마사지 | 화성출장안마·홈타이 예약 안내 | 오후 7시~오전 4시",
  description: "화성출장마사지·홈타이, 동탄·병점·향남의 집과 숙소로 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없이 후불 결제. 오후 7시~오전 4시 상담.",
  keywords:
    "화성출장마사지, 화성출장안마, 화성 출장 안마, 화성 홈타이, 화성마사지, 화성출장태국마사지, 동탄출장마사지, 병점동출장마사지, 향남읍출장마사지, 봉담읍출장마사지, 남양읍출장마사지, 진안동출장마사지, 새솔동출장마사지, 반월동출장마사지, 기안동출장마사지, 송산면출장마사지, 화성시출장마사지",
  openGraph: {
    title: "화성출장마사지 | 화성출장안마·홈타이 예약 안내 | 노마드출장마사지",
    description: "화성출장마사지·홈타이, 동탄·병점·향남의 집과 숙소로 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없이 후불 결제. 오후 7시~오전 4시 상담.",
    url: "https://www.nomadthai.kr/hwaseong",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/og/hwaseong",
        width: 1200,
        height: 630,
        alt: "화성출장마사지 - 노마드출장마사지 오후 7시~오전 4시 상담",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "화성출장마사지 | 화성출장안마 노마드출장마사지",
    description: "화성출장마사지·홈타이, 동탄·병점·향남의 집과 숙소로 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없이 후불 결제. 오후 7시~오전 4시 상담.",
    images: ["/og/hwaseong"],
  },
  alternates: {
    canonical: "https://www.nomadthai.kr/hwaseong",
  },
};

export default function HwaseongPage() {
  return (
    <LocationPage
      city="화성"
      cityEn="hwaseong"
      theme="green"
      heroImage="/images/location-4.jpg"
      teamImages={[
        { src: '/images/location-5.jpg', title: '방문 마사지', desc: "집·오피스텔·숙소로 직접 방문", gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-6.jpg', title: '마사지 코스', desc: '타이·아로마·스웨디시 60·90·120분', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-7.jpg', title: '후불 결제', desc: '예약금 없이 서비스 후 현장 결제', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="동탄·병점·향남에서 이동 없이 받는 화성 방문 마사지. 타이 60분 7만원부터 아로마·스웨디시까지, 출장·주차·야간 추가비 없이 이용 후 결제합니다."
      areas={["동탄", "병점동", "향남읍", "봉담읍", "남양읍", "진안동", "새솔동", "반월동", "기안동", "송산면"]}
      latitude="37.1995"
      longitude="126.8312"
      intro={
        <>
          <p>
            봉담읍·남양읍을 포함한 화성 방문 예약에는 도로명 주소와 건물명, 출입·주차 안내가 필요합니다. 호텔과 숙소는 외부 방문객 출입이 허용되는 경우에 이용할 수 있습니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            타이·아로마·스웨디시는 각각 60·90·120분으로 구성되어 있습니다. 관리 방식과 선호 강도에 맞춰 코스를 정하며, 금액은 공개 가격표 그대로 적용합니다.
          </p>
        </>
      }
      outro={
        <>
          <p>
            진안동·새솔동·반월동을 비롯한 화성 지역도 선입금 없이 서비스 후 현장 결제입니다. 전화·카카오톡 상담은 오후 7시~오전 4시이며 방문 일정은 예약 시 안내합니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">동탄 병점동 향남읍 봉담읍 남양읍 진안동 새솔동 반월동 기안동 송산면</div>
        </>
      }
    />
  );
}
