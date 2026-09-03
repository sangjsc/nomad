import type { Metadata } from "next";
import LocationPage from "../components/LocationPage";

export const metadata: Metadata = {
  title: "평택출장마사지 | 평택출장안마·홈타이 예약 안내 | 오후 7시~오전 4시",
  description:
    "경기도 평택시 전 지역 평택출장마사지·평택출장안마·평택 홈타이 예약 안내. 오후 7시~오전 4시 운영, 100% 후불제로 이용 가능합니다.",
  keywords:
    "평택출장마사지, 평택출장안마, 평택 출장 안마, 평택 홈타이, 평택마사지, 평택출장태국마사지, 평택동출장마사지, 서정동출장마사지, 비전동출장마사지, 용이동출장마사지, 고덕동출장마사지, 안중읍출장마사지, 팽성읍출장마사지, 청북읍출장마사지, 송탄출장마사지, 오성면출장마사지, 평택시출장마사지",
  openGraph: {
    title: "평택출장마사지 | 평택출장안마·홈타이 예약 안내 | 노마드출장마사지",
    description: "경기도 평택시 전 지역 평택출장마사지·평택출장안마 예약 안내. 오후 7시~오전 4시 운영, 100% 후불제로 안심하고 이용하세요.",
    url: "https://www.nomadthai.kr/pyeongtaek",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/og/pyeongtaek",
        width: 1200,
        height: 630,
        alt: "평택출장마사지 - 노마드출장마사지 오후 7시~오전 4시 서비스",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "평택출장마사지 | 평택출장안마 노마드출장마사지",
    description: "평택시 전 지역 오후 7시~오전 4시 평택출장마사지·평택 홈타이 예약. 100% 후불제로 이용 가능합니다.",
    images: ["/og/pyeongtaek"],
  },
  alternates: {
    canonical: "https://www.nomadthai.kr/pyeongtaek",
  },
};

export default function PyeongtaekPage() {
  return (
    <LocationPage
      city="평택"
      cityEn="pyeongtaek"
      theme="blue"
      heroImage="/images/location-5.jpg"
      teamImages={[
        { src: '/images/location-5.jpg', title: '예약 확인', desc: "위치·시간·코스를 상담할 때 확인", gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-6.jpg', title: '코스 안내', desc: '타이·아로마·스웨디시 코스별 안내', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-7.jpg', title: '방문 일정', desc: '접수 순서와 이동 동선 확인 후 안내', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="평택출장마사지, 평택출장안마, 평택 홈타이 예약을 한곳에서 안내하는 노마드출장마사지 평택 페이지입니다. 오후 7시부터 오전 4시까지 100% 후불제로 운영합니다."
      areas={["평택동", "서정동", "비전동", "용이동", "고덕동", "안중읍", "팽성읍", "청북읍", "송탄", "오성면"]}
      latitude="36.9921"
      longitude="127.1127"
      intro={
        <>
          <p>
            평택 평택동, 서정동, 비전동 중심으로 호텔·자택·오피스텔 방문 예약을 안내합니다. 늦은 시간에도 접수 순서에 따라 가능한 시간대를 빠르게 안내해드립니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            노마드출장마사지 평택점은 용이동, 고덕동 생활권 이동 동선을 고려해 타이·아로마·스웨디시 코스를 운영합니다. 평택출장안마, 평택 홈타이 문의 시 코스 소요 시간과 관리 방식을 먼저 설명해드립니다.
          </p>
        </>
      }
      outro={
        <>
          <p>
            평택출장마사지 예약은 선입금 없이 100% 후불제로 운영됩니다. 안중읍, 팽성읍, 청북읍 포함 평택시 전역에서 오후 7시부터 오전 4시까지 이용 가능합니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">평택동 서정동 비전동 용이동 고덕동 안중읍 팽성읍 청북읍 송탄 오성면</div>
        </>
      }
    />
  );
}
