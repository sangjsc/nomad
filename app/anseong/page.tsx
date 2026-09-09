import type { Metadata } from "next";
import LocationPage from "../components/LocationPage";

export const metadata: Metadata = {
  title: "안성출장마사지 | 안성출장안마·홈타이 예약 안내 | 오후 7시~오전 4시",
  description: "안성출장마사지·홈타이, 공도읍과 안성 읍·면 방문 예약 상담. 오후 7시~오전 4시 문의, 출장·주차·야간 추가비 없는 후불 결제.",
  keywords:
    "안성출장마사지, 안성출장안마, 안성 출장 안마, 안성 홈타이, 안성마사지, 안성출장태국마사지, 안성동출장마사지, 공도읍출장마사지, 보개면출장마사지, 미양면출장마사지, 대덕면출장마사지, 죽산면출장마사지, 일죽면출장마사지, 금광면출장마사지, 양성면출장마사지, 서운면출장마사지, 안성시출장마사지",
  openGraph: {
    title: "안성출장마사지 | 안성출장안마·홈타이 예약 안내 | 노마드출장마사지",
    description: "안성출장마사지·홈타이, 공도읍과 안성 읍·면 방문 예약 상담. 오후 7시~오전 4시 문의, 출장·주차·야간 추가비 없는 후불 결제.",
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
    description: "안성출장마사지·홈타이, 공도읍과 안성 읍·면 방문 예약 상담. 오후 7시~오전 4시 문의, 출장·주차·야간 추가비 없는 후불 결제.",
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
        { src: '/images/location-5.jpg', title: '예약 확인', desc: "받으실 주소와 원하는 시간을 알려주세요", gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-6.jpg', title: '코스 안내', desc: '코스가 고민되면 차이부터 물어보세요', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-7.jpg', title: '방문 일정', desc: '방문 시간과 총금액을 예약 전에 확인하세요', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="안성에서 받으실 주소와 원하는 시간을 전화나 카카오톡으로 알려주세요. 방문할 수 있는지 확인한 뒤 예약을 잡습니다. 상담은 오후 7시~오전 4시까지입니다."
      areas={["안성동", "공도읍", "보개면", "미양면", "대덕면", "죽산면", "일죽면", "금광면", "양성면", "서운면"]}
      latitude="37.0080"
      longitude="127.2798"
      intro={
        <>
          <p>
            안성동·공도읍·보개면뿐 아니라 미양면·대덕면에서도 도로명 주소와 건물명을 함께 보내주세요. 건물 입구를 찾기 어려운 곳이라면 가까운 기준 지점이나 주차 위치도 부탁드립니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            타이·아로마·스웨디시 중 원하는 코스가 있으신가요? 코스를 아직 정하지 못했다면 이용 시간과 선호하는 강도부터 말씀해주세요. 호텔·숙소에서 받으실 때는 외부 방문객 출입이 허용돼야 합니다.
          </p>
        </>
      }
      outro={
        <>
          <p>
            죽산면·일죽면·금광면도 출장비를 따로 받지 않습니다. 주차비와 야간 추가비도 없으며, 예약금 없이 서비스를 받으신 뒤 현장에서 결제합니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">안성동 공도읍 보개면 미양면 대덕면 죽산면 일죽면 금광면 양성면 서운면</div>
        </>
      }
    />
  );
}
