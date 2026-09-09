import type { Metadata } from "next";
import LocationPage from "../components/LocationPage";

export const metadata: Metadata = {
  title: "화성출장마사지 | 화성출장안마·홈타이 예약 안내 | 오후 7시~오전 4시",
  description: "화성출장마사지·홈타이, 동탄·병점·향남 등 방문 예약 상담. 오후 7시~오전 4시 문의할 수 있으며 출장·주차·야간 추가비 없이 이용 후 결제합니다.",
  keywords:
    "화성출장마사지, 화성출장안마, 화성 출장 안마, 화성 홈타이, 화성마사지, 화성출장태국마사지, 동탄출장마사지, 병점동출장마사지, 향남읍출장마사지, 봉담읍출장마사지, 남양읍출장마사지, 진안동출장마사지, 새솔동출장마사지, 반월동출장마사지, 기안동출장마사지, 송산면출장마사지, 화성시출장마사지",
  openGraph: {
    title: "화성출장마사지 | 화성출장안마·홈타이 예약 안내 | 노마드출장마사지",
    description: "화성출장마사지·홈타이, 동탄·병점·향남 등 방문 예약 상담. 오후 7시~오전 4시 문의할 수 있으며 출장·주차·야간 추가비 없이 이용 후 결제합니다.",
    url: "https://www.nomadthai.kr/hwaseong",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/og/hwaseong",
        width: 1200,
        height: 630,
        alt: "화성출장마사지 - 노마드출장마사지 오후 7시~오전 4시 서비스",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "화성출장마사지 | 화성출장안마 노마드출장마사지",
    description: "화성출장마사지·홈타이, 동탄·병점·향남 등 방문 예약 상담. 오후 7시~오전 4시 문의할 수 있으며 출장·주차·야간 추가비 없이 이용 후 결제합니다.",
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
        { src: '/images/location-5.jpg', title: '예약 확인', desc: "받으실 주소와 원하는 시간을 알려주세요", gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-6.jpg', title: '코스 안내', desc: '코스가 고민되면 차이부터 물어보세요', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-7.jpg', title: '방문 일정', desc: '방문 시간과 총금액을 예약 전에 확인하세요', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="동탄·병점·향남 등 화성에서 출장마사지를 원하시면 주소와 받고 싶은 시간을 알려주세요. 오후 7시~오전 4시에 상담을 받으며, 방문 가능 여부를 확인한 뒤 예약을 잡습니다."
      areas={["동탄", "병점동", "향남읍", "봉담읍", "남양읍", "진안동", "새솔동", "반월동", "기안동", "송산면"]}
      latitude="37.1995"
      longitude="126.8312"
      intro={
        <>
          <p>
            집에서 받을지, 머무는 숙소에서 받을지 먼저 말씀해주세요. 봉담읍·남양읍을 포함해 건물명과 도로명 주소를 보내주시면 방문할 곳을 정확히 확인할 수 있습니다. 숙소는 외부 방문객 출입이 허용돼야 합니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            타이·아로마·스웨디시 중 원하는 코스가 있으면 말씀해주세요. 아직 정하지 않으셨다면 코스별 방식과 이용 시간을 설명해드립니다. 주차 장소나 별도 출입 절차가 있으면 예약할 때 함께 알려주세요.
          </p>
        </>
      }
      outro={
        <>
          <p>
            진안동·새솔동·반월동에서도 같은 결제 기준을 적용합니다. 선입금은 받지 않고 서비스가 끝난 뒤 현장에서 결제합니다. 출장비와 주차비, 야간 추가비도 없습니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">동탄 병점동 향남읍 봉담읍 남양읍 진안동 새솔동 반월동 기안동 송산면</div>
        </>
      }
    />
  );
}
