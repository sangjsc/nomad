import type { Metadata } from "next";
import LocationPage from "../components/LocationPage";

export const metadata: Metadata = {
  title: "고양출장마사지 | 고양출장안마·홈타이 예약 안내 | 오후 7시~오전 4시",
  description: "고양출장마사지·홈타이, 일산동구·일산서구·덕양구 예약 상담. 오후 7시~오전 4시 문의하세요. 선입금과 출장·주차·야간 추가비 없이 후불 결제합니다.",
  keywords:
    "고양출장마사지, 고양출장안마, 고양 출장 안마, 고양 홈타이, 고양마사지, 고양출장태국마사지, 일산동구출장마사지, 일산서구출장마사지, 덕양구출장마사지, 주엽동출장마사지, 마두동출장마사지, 화정동출장마사지, 행신동출장마사지, 백석동출장마사지, 탄현동출장마사지, 대화동출장마사지, 고양시출장마사지",
  openGraph: {
    title: "고양출장마사지 | 고양출장안마·홈타이 예약 안내 | 노마드출장마사지",
    description: "고양출장마사지·홈타이, 일산동구·일산서구·덕양구 예약 상담. 오후 7시~오전 4시 문의하세요. 선입금과 출장·주차·야간 추가비 없이 후불 결제합니다.",
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
    description: "고양출장마사지·홈타이, 일산동구·일산서구·덕양구 예약 상담. 오후 7시~오전 4시 문의하세요. 선입금과 출장·주차·야간 추가비 없이 후불 결제합니다.",
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
        { src: '/images/location-5.jpg', title: '예약 확인', desc: "받으실 주소와 원하는 시간을 알려주세요", gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-6.jpg', title: '코스 안내', desc: '코스가 고민되면 차이부터 물어보세요', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-7.jpg', title: '방문 일정', desc: '방문 시간과 총금액을 예약 전에 확인하세요', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="일산동구·일산서구·덕양구에서 출장마사지를 찾으시면 노마드에 문의해주세요. 방문할 주소와 시간을 확인한 뒤 예약을 잡습니다. 상담은 오후 7시~오전 4시까지입니다."
      areas={["일산동구", "일산서구", "덕양구", "주엽동", "마두동", "화정동", "행신동", "백석동", "탄현동", "대화동"]}
      latitude="37.6584"
      longitude="126.8320"
      intro={
        <>
          <p>
            주엽동·마두동의 자택이나 오피스텔에서 받으실 때는 동·건물명과 출입 방법을 알려주세요. 호텔에 머무르고 계시면 외부 방문객이 객실에 들어갈 수 있는지 먼저 확인해주세요.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            타이·아로마·스웨디시 중 받고 싶은 코스와 이용 시간을 말씀해주세요. 처음이라 차이가 궁금하시다면 코스를 정하기 전에 물어보셔도 됩니다. 강도에 대한 선호도 함께 알려주세요.
          </p>
        </>
      }
      outro={
        <>
          <p>
            화정동·행신동·백석동도 출장·주차·야간 추가비를 따로 받지 않습니다. 예약할 때 정한 코스와 금액을 확인하고, 서비스가 끝난 뒤 현장에서 결제하시면 됩니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">일산동구 일산서구 덕양구 주엽동 마두동 화정동 행신동 백석동 탄현동 대화동</div>
        </>
      }
    />
  );
}
