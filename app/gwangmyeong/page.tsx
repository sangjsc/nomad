import type { Metadata } from "next";
import LocationPage from "../components/LocationPage";

export const metadata: Metadata = {
  title: "광명출장마사지 | 광명출장안마·홈타이 예약 안내 | 오후 7시~오전 4시",
  description: "광명출장마사지·홈타이, 철산·하안·소하·일직 등 방문 예약 상담. 오후 7시~오전 4시 문의, 출장·주차·야간 추가비 없이 이용 후 결제.",
  keywords:
    "광명출장마사지, 광명출장안마, 광명 출장 안마, 광명 홈타이, 광명마사지, 광명출장태국마사지, 철산동출장마사지, 하안동출장마사지, 광명동출장마사지, 소하동출장마사지, 일직동출장마사지, 학온동출장마사지, 노온사동출장마사지, 가학동출장마사지, 옥길동출장마사지, 광명사거리출장마사지, 광명시출장마사지",
  openGraph: {
    title: "광명출장마사지 | 광명출장안마·홈타이 예약 안내 | 노마드출장마사지",
    description: "광명출장마사지·홈타이, 철산·하안·소하·일직 등 방문 예약 상담. 오후 7시~오전 4시 문의, 출장·주차·야간 추가비 없이 이용 후 결제.",
    url: "https://www.nomadthai.kr/gwangmyeong",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/og/gwangmyeong",
        width: 1200,
        height: 630,
        alt: "광명출장마사지 - 노마드출장마사지 오후 7시~오전 4시 서비스",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "광명출장마사지 | 광명출장안마 노마드출장마사지",
    description: "광명출장마사지·홈타이, 철산·하안·소하·일직 등 방문 예약 상담. 오후 7시~오전 4시 문의, 출장·주차·야간 추가비 없이 이용 후 결제.",
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
        { src: '/images/location-5.jpg', title: '예약 확인', desc: "받으실 주소와 원하는 시간을 알려주세요", gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-6.jpg', title: '코스 안내', desc: '코스가 고민되면 차이부터 물어보세요', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-7.jpg', title: '방문 일정', desc: '방문 시간과 총금액을 예약 전에 확인하세요', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="광명에서 타이·아로마·스웨디시 마사지를 찾고 계신가요? 주소와 받고 싶은 시간을 알려주시면 방문 가능 여부를 확인합니다. 오후 7시~오전 4시에 문의해주세요."
      areas={["철산동", "하안동", "광명동", "소하동", "일직동", "학온동", "노온사동", "가학동", "옥길동", "광명사거리"]}
      latitude="37.4786"
      longitude="126.8647"
      intro={
        <>
          <p>
            철산동·하안동·광명동의 집이나 오피스텔에서 받으실 때 건물명과 공동현관 출입 방법을 알려주세요. 소하동·일직동에서도 호텔이나 숙소로 부르시려면 외부 방문객 출입이 허용돼야 합니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            코스별 관리 방식과 이용 시간을 먼저 비교해보세요. 원하는 강도나 궁금한 점을 말씀해주시면 코스를 정하는 데 필요한 내용을 설명해드립니다. 방문할 시간과 금액도 예약 전에 함께 확인합니다.
          </p>
        </>
      }
      outro={
        <>
          <p>
            학온동·노온사동·가학동을 포함해 광명 지역의 출장·주차·야간 추가비는 없습니다. 선입금은 받지 않으며, 마사지를 받으신 뒤 현장에서 결제하시면 됩니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">철산동 하안동 광명동 소하동 일직동 학온동 노온사동 가학동 옥길동 광명사거리</div>
        </>
      }
    />
  );
}
