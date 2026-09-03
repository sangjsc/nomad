import type { Metadata } from "next";
import LocationPage from "../components/LocationPage";

export const metadata: Metadata = {
  title: "고양출장마사지 | 고양출장안마·홈타이 예약 안내 | 오후 7시~오전 4시",
  description:
    "경기도 고양시 전 지역 고양출장마사지·고양출장안마·고양 홈타이 예약 안내. 오후 7시~오전 4시 운영, 100% 후불제로 이용 가능합니다.",
  keywords:
    "고양출장마사지, 고양출장안마, 고양 출장 안마, 고양 홈타이, 고양마사지, 고양출장태국마사지, 일산동구출장마사지, 일산서구출장마사지, 덕양구출장마사지, 주엽동출장마사지, 마두동출장마사지, 화정동출장마사지, 행신동출장마사지, 백석동출장마사지, 탄현동출장마사지, 대화동출장마사지, 고양시출장마사지",
  openGraph: {
    title: "고양출장마사지 | 고양출장안마·홈타이 예약 안내 | 노마드출장마사지",
    description: "경기도 고양시 전 지역 고양출장마사지·고양출장안마 예약 안내. 오후 7시~오전 4시 운영, 100% 후불제로 안심하고 이용하세요.",
    url: "https://www.nomadthai.kr/goyang",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/og/goyang",
        width: 1200,
        height: 630,
        alt: "고양출장마사지 - 노마드출장마사지 오후 7시~오전 4시 서비스",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "고양출장마사지 | 고양출장안마 노마드출장마사지",
    description: "고양시 전 지역 오후 7시~오전 4시 고양출장마사지·고양 홈타이 예약. 100% 후불제로 이용 가능합니다.",
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
        { src: '/images/location-5.jpg', title: '예약 확인', desc: "위치·시간·코스를 상담할 때 확인", gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-6.jpg', title: '코스 안내', desc: '타이·아로마·스웨디시 코스별 안내', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-7.jpg', title: '방문 일정', desc: '접수 순서와 이동 동선 확인 후 안내', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="고양출장마사지, 고양출장안마, 고양 홈타이 예약을 한곳에서 안내하는 노마드출장마사지 고양 페이지입니다. 오후 7시부터 오전 4시까지 100% 후불제로 운영합니다."
      areas={["일산동구", "일산서구", "덕양구", "주엽동", "마두동", "화정동", "행신동", "백석동", "탄현동", "대화동"]}
      latitude="37.6584"
      longitude="126.8320"
      intro={
        <>
          <p>
            고양 일산동구, 일산서구, 덕양구 중심으로 호텔·자택·오피스텔 방문 예약을 안내합니다. 늦은 시간에도 접수 순서에 따라 가능한 시간대를 빠르게 안내해드립니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            노마드출장마사지 고양점은 주엽동, 마두동 생활권 이동 동선을 고려해 타이·아로마·스웨디시 코스를 운영합니다. 고양출장안마, 고양 홈타이 문의 시 코스 소요 시간과 관리 방식을 먼저 설명해드립니다.
          </p>
        </>
      }
      outro={
        <>
          <p>
            고양출장마사지 예약은 선입금 없이 100% 후불제로 운영됩니다. 화정동, 행신동, 백석동 포함 고양시 전역에서 오후 7시부터 오전 4시까지 이용 가능합니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">일산동구 일산서구 덕양구 주엽동 마두동 화정동 행신동 백석동 탄현동 대화동</div>
        </>
      }
    />
  );
}
