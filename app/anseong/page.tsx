import type { Metadata } from "next";
import LocationPage from "../components/LocationPage";

export const metadata: Metadata = {
  title: "안성출장마사지 | 안성출장안마·홈타이 예약 안내 | 오후 7시~오전 4시",
  description: "안성출장마사지·홈타이, 공도읍과 안성 읍·면으로 직접 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없이 이용 후 결제. 오후 7시~오전 4시 상담.",
  keywords:
    "안성출장마사지, 안성출장안마, 안성 출장 안마, 안성 홈타이, 안성마사지, 안성출장태국마사지, 안성동출장마사지, 공도읍출장마사지, 보개면출장마사지, 미양면출장마사지, 대덕면출장마사지, 죽산면출장마사지, 일죽면출장마사지, 금광면출장마사지, 양성면출장마사지, 서운면출장마사지, 안성시출장마사지",
  openGraph: {
    title: "안성출장마사지 | 안성출장안마·홈타이 예약 안내 | 노마드출장마사지",
    description: "안성출장마사지·홈타이, 공도읍과 안성 읍·면으로 직접 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없이 이용 후 결제. 오후 7시~오전 4시 상담.",
    url: "https://www.nomadthai.kr/anseong",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/og/anseong",
        width: 1200,
        height: 630,
        alt: "안성출장마사지 - 노마드출장마사지 오후 7시~오전 4시 상담",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "안성출장마사지 | 안성출장안마 노마드출장마사지",
    description: "안성출장마사지·홈타이, 공도읍과 안성 읍·면으로 직접 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없이 이용 후 결제. 오후 7시~오전 4시 상담.",
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
        { src: '/images/location-5.jpg', title: '방문 마사지', desc: "집·오피스텔·숙소로 직접 방문", gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-6.jpg', title: '마사지 코스', desc: '타이·아로마·스웨디시 60·90·120분', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-7.jpg', title: '후불 결제', desc: '예약금 없이 서비스 후 현장 결제', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="공도읍과 안성 읍·면에서 편한 장소로 부르는 방문 마사지. 타이 60분 7만원부터 시작하며 출장·주차·야간 추가비 없이 서비스 후 결제합니다."
      areas={["안성동", "공도읍", "보개면", "미양면", "대덕면", "죽산면", "일죽면", "금광면", "양성면", "서운면"]}
      latitude="37.0080"
      longitude="127.2798"
      intro={
        <>
          <p>
            안성동·공도읍·보개면과 미양면·대덕면의 예약에는 주소와 건물명, 출입·주차 안내가 필요합니다. 호텔·숙소는 외부 방문객 출입이 허용되는 경우에 이용할 수 있습니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            타이·아로마·스웨디시를 각각 60·90·120분 코스로 제공합니다. 관리 방식과 이용 시간을 상담하고, 예약한 장소에서 선호 강도에 맞춰 진행합니다.
          </p>
        </>
      }
      outro={
        <>
          <p>
            죽산면·일죽면·금광면도 출장·주차·야간 추가비가 없습니다. 오후 7시~오전 4시 전화·카카오톡 예약, 선입금 없이 서비스 후 현장 결제입니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">안성동 공도읍 보개면 미양면 대덕면 죽산면 일죽면 금광면 양성면 서운면</div>
        </>
      }
    />
  );
}
