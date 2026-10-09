import type { Metadata } from "next";
import LocationPage from "../components/LocationPage";

export const metadata: Metadata = {
  title: "부천출장마사지 | 부천출장안마·홈타이 예약 안내 | 오후 7시~오전 4시",
  description: "부천출장마사지·홈타이, 중동·상동·역곡동 등으로 직접 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없이 서비스 후 결제. 오후 7시~오전 4시 상담.",
  keywords:
    "부천출장마사지, 부천출장안마, 부천 출장 안마, 부천 홈타이, 부천마사지, 부천출장태국마사지, 중동출장마사지, 상동출장마사지, 역곡동출장마사지, 송내동출장마사지, 원미동출장마사지, 심곡동출장마사지, 소사본동출장마사지, 괴안동출장마사지, 고강동출장마사지, 옥길동출장마사지, 부천시출장마사지",
  openGraph: {
    title: "부천출장마사지 | 부천출장안마·홈타이 예약 안내 | 노마드출장마사지",
    description: "부천출장마사지·홈타이, 중동·상동·역곡동 등으로 직접 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없이 서비스 후 결제. 오후 7시~오전 4시 상담.",
    url: "https://www.nomadthai.kr/bucheon",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/og/bucheon",
        width: 1200,
        height: 630,
        alt: "부천출장마사지 - 노마드출장마사지 오후 7시~오전 4시 상담",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "부천출장마사지 | 부천출장안마 노마드출장마사지",
    description: "부천출장마사지·홈타이, 중동·상동·역곡동 등으로 직접 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없이 서비스 후 결제. 오후 7시~오전 4시 상담.",
    images: ["/og/bucheon"],
  },
  alternates: {
    canonical: "https://www.nomadthai.kr/bucheon",
  },
};

export default function BucheonPage() {
  return (
    <LocationPage
      city="부천"
      cityEn="bucheon"
      theme="rose"
      heroImage="/images/location-7.jpg"
      teamImages={[
        { src: '/images/location-5.jpg', title: '방문 마사지', desc: "집·오피스텔·숙소로 직접 방문", gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-6.jpg', title: '마사지 코스', desc: '타이·아로마·스웨디시 60·90·120분', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-7.jpg', title: '후불 결제', desc: '예약금 없이 서비스 후 현장 결제', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="중동·상동·역곡동에서 편한 공간 그대로 받는 부천 방문 마사지. 타이 60분 7만원부터, 출장·주차·야간 추가비 없이 서비스를 받은 뒤 결제합니다."
      areas={["중동", "상동", "역곡동", "송내동", "원미동", "심곡동", "소사본동", "괴안동", "고강동", "옥길동"]}
      latitude="37.5034"
      longitude="126.7660"
      intro={
        <>
          <p>
            부천의 자택·오피스텔 방문 예약에는 도로명 주소와 건물명, 동·호수 및 공동현관 출입 방법이 필요합니다. 호텔과 숙소는 외부 방문객 출입이 허용되는 곳에서 이용할 수 있습니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            송내동·원미동에서도 타이·아로마·스웨디시를 60·90·120분으로 이용할 수 있습니다. 각 코스의 관리 방식과 가격은 상담에서 안내합니다.
          </p>
        </>
      }
      outro={
        <>
          <p>
            심곡동·소사본동·괴안동을 포함한 부천 지역의 예약 상담은 오후 7시~오전 4시입니다. 전화·카카오톡으로 방문 일정을 정하며 선입금 없이 현장 후불로 결제합니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">중동 상동 역곡동 송내동 원미동 심곡동 소사본동 괴안동 고강동 옥길동</div>
        </>
      }
    />
  );
}
