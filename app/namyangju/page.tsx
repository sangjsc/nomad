import type { Metadata } from "next";
import LocationPage from "../components/LocationPage";

export const metadata: Metadata = {
  title: "남양주출장마사지 | 남양주출장안마·홈타이 예약 안내 | 오후 7시~오전 4시",
  description:
    "경기도 남양주시 전 지역 남양주출장마사지·남양주출장안마·남양주 홈타이 예약 안내. 오후 7시~오전 4시 운영, 100% 후불제로 이용 가능합니다.",
  keywords:
    "남양주출장마사지, 남양주출장안마, 남양주 출장 안마, 남양주 홈타이, 남양주마사지, 남양주출장태국마사지, 호평동출장마사지, 평내동출장마사지, 다산동출장마사지, 별내동출장마사지, 와부읍출장마사지, 진접읍출장마사지, 오남읍출장마사지, 화도읍출장마사지, 금곡동출장마사지, 퇴계원읍출장마사지, 남양주시출장마사지",
  openGraph: {
    title: "남양주출장마사지 | 남양주출장안마·홈타이 예약 안내 | 노마드출장마사지",
    description: "경기도 남양주시 전 지역 남양주출장마사지·남양주출장안마 예약 안내. 오후 7시~오전 4시 운영, 100% 후불제로 안심하고 이용하세요.",
    url: "https://www.nomadthai.kr/namyangju",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/og/namyangju",
        width: 1200,
        height: 630,
        alt: "남양주출장마사지 - 노마드출장마사지 오후 7시~오전 4시 서비스",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "남양주출장마사지 | 남양주출장안마 노마드출장마사지",
    description: "남양주시 전 지역 오후 7시~오전 4시 남양주출장마사지·남양주 홈타이 예약. 100% 후불제로 이용 가능합니다.",
    images: ["/og/namyangju"],
  },
  alternates: {
    canonical: "https://www.nomadthai.kr/namyangju",
  },
};

export default function NamyangjuPage() {
  return (
    <LocationPage
      city="남양주"
      cityEn="namyangju"
      theme="rose"
      heroImage="/images/location-3.jpg"
      teamImages={[
        { src: '/images/location-5.jpg', title: '예약 확인', desc: "위치·시간·코스를 상담할 때 확인", gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-6.jpg', title: '코스 안내', desc: '타이·아로마·스웨디시 코스별 안내', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-7.jpg', title: '방문 일정', desc: '접수 순서와 이동 동선 확인 후 안내', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="남양주출장마사지, 남양주출장안마, 남양주 홈타이 예약을 한곳에서 안내하는 노마드출장마사지 남양주 페이지입니다. 오후 7시부터 오전 4시까지 100% 후불제로 운영합니다."
      areas={["호평동", "평내동", "다산동", "별내동", "와부읍", "진접읍", "오남읍", "화도읍", "금곡동", "퇴계원읍"]}
      latitude="37.6360"
      longitude="127.2165"
      intro={
        <>
          <p>
            남양주 호평동, 평내동, 다산동 중심으로 호텔·자택·오피스텔 방문 예약을 안내합니다. 늦은 시간에도 접수 순서에 따라 가능한 시간대를 빠르게 안내해드립니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            노마드출장마사지 남양주점은 별내동, 와부읍 생활권 이동 동선을 고려해 타이·아로마·스웨디시 코스를 운영합니다. 남양주출장안마, 남양주 홈타이 문의 시 코스 소요 시간과 관리 방식을 먼저 설명해드립니다.
          </p>
        </>
      }
      outro={
        <>
          <p>
            남양주출장마사지 예약은 선입금 없이 100% 후불제로 운영됩니다. 진접읍, 오남읍, 화도읍 포함 남양주시 전역에서 오후 7시부터 오전 4시까지 이용 가능합니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">호평동 평내동 다산동 별내동 와부읍 진접읍 오남읍 화도읍 금곡동 퇴계원읍</div>
        </>
      }
    />
  );
}
