import type { Metadata } from "next";
import LocationPage from "../components/LocationPage";

export const metadata: Metadata = {
  title: "안성출장마사지 | 안성출장안마·홈타이 예약 안내 | 오후 7시~오전 4시",
  description:
    "경기도 안성시 전 지역 안성출장마사지·안성출장안마·안성 홈타이 예약 안내. 오후 7시~오전 4시 운영, 100% 후불제로 이용 가능합니다.",
  keywords:
    "안성출장마사지, 안성출장안마, 안성 출장 안마, 안성 홈타이, 안성마사지, 안성출장태국마사지, 안성동출장마사지, 공도읍출장마사지, 보개면출장마사지, 미양면출장마사지, 대덕면출장마사지, 죽산면출장마사지, 일죽면출장마사지, 금광면출장마사지, 양성면출장마사지, 서운면출장마사지, 안성시출장마사지",
  openGraph: {
    title: "안성출장마사지 | 안성출장안마·홈타이 예약 안내 | 노마드출장마사지",
    description: "경기도 안성시 전 지역 안성출장마사지·안성출장안마 예약 안내. 오후 7시~오전 4시 운영, 100% 후불제로 안심하고 이용하세요.",
    url: "https://www.nomadthai.kr/anseong",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/og/anseong",
        width: 1200,
        height: 630,
        alt: "안성출장마사지 - 노마드출장마사지 오후 7시~오전 4시 서비스",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "안성출장마사지 | 안성출장안마 노마드출장마사지",
    description: "안성시 전 지역 오후 7시~오전 4시 안성출장마사지·안성 홈타이 예약. 100% 후불제로 이용 가능합니다.",
    images: ["/og/anseong"],
  },
  alternates: {
    canonical: "https://www.nomadthai.kr/anseong",
  },
};

export default function AnseongPage() {
  return (
    <LocationPage
      city="안성"
      cityEn="anseong"
      theme="blue"
      heroImage="/images/location-1.jpg"
      teamImages={[
        { src: '/images/location-5.jpg', title: '전문 관리사', desc: "실력과 마인드를 겸비한 전문 여성 관리사", gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-6.jpg', title: '럭셔리 서비스', desc: '최고급 프리미엄 경험', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-7.jpg', title: '힐링 서비스', desc: '완벽한 휴식과 회복', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="안성출장마사지, 안성출장안마, 안성 홈타이 예약을 한곳에서 안내하는 노마드출장마사지 안성 페이지입니다. 오후 7시부터 오전 4시까지 100% 후불제로 운영합니다."
      areas={["안성동", "공도읍", "보개면", "미양면", "대덕면", "죽산면", "일죽면", "금광면", "양성면", "서운면"]}
      latitude="37.0080"
      longitude="127.2798"
      intro={
        <>
          <p>
            안성 안성동, 공도읍, 보개면 중심으로 호텔·자택·오피스텔 방문 예약을 안내합니다. 늦은 시간에도 접수 순서에 따라 가능한 시간대를 빠르게 안내해드립니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            노마드출장마사지 안성점은 미양면, 대덕면 생활권 이동 동선을 고려해 타이·아로마·스웨디시 코스를 운영합니다. 안성출장안마, 안성 홈타이 문의 시 코스 소요 시간과 관리 방식을 먼저 설명해드립니다.
          </p>
        </>
      }
      outro={
        <>
          <p>
            안성출장마사지 예약은 선입금 없이 100% 후불제로 운영됩니다. 죽산면, 일죽면, 금광면 포함 안성시 전역에서 오후 7시부터 오전 4시까지 이용 가능합니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">안성동 공도읍 보개면 미양면 대덕면 죽산면 일죽면 금광면 양성면 서운면</div>
        </>
      }
    />
  );
}
