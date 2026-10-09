import type { Metadata } from "next";
import LocationPage from "../components/LocationPage";

export const metadata: Metadata = {
  title: "오산출장마사지 | 오산출장안마·홈타이 예약 안내 | 오후 7시~오전 4시",
  description: "오산출장마사지·홈타이, 오산동·원동·세교동 등으로 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없이 이용 후 결제. 오후 7시~오전 4시 상담.",
  keywords:
    "오산출장마사지, 오산출장안마, 오산 출장 안마, 오산 홈타이, 오산마사지, 오산출장태국마사지, 오산동출장마사지, 원동출장마사지, 세교동출장마사지, 궐동출장마사지, 금암동출장마사지, 갈곶동출장마사지, 수청동출장마사지, 내삼미동출장마사지, 부산동출장마사지, 외삼미동출장마사지, 오산시출장마사지",
  openGraph: {
    title: "오산출장마사지 | 오산출장안마·홈타이 예약 안내 | 노마드출장마사지",
    description: "오산출장마사지·홈타이, 오산동·원동·세교동 등으로 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없이 이용 후 결제. 오후 7시~오전 4시 상담.",
    url: "https://www.nomadthai.kr/osan",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/og/osan",
        width: 1200,
        height: 630,
        alt: "오산출장마사지 - 노마드출장마사지 오후 7시~오전 4시 상담",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "오산출장마사지 | 오산출장안마 노마드출장마사지",
    description: "오산출장마사지·홈타이, 오산동·원동·세교동 등으로 방문합니다. 타이 60분 7만원부터, 출장·주차·야간 추가비 없이 이용 후 결제. 오후 7시~오전 4시 상담.",
    images: ["/og/osan"],
  },
  alternates: {
    canonical: "https://www.nomadthai.kr/osan",
  },
};

export default function OsanPage() {
  return (
    <LocationPage
      city="오산"
      cityEn="osan"
      theme="green"
      heroImage="/images/location-9.jpg"
      teamImages={[
        { src: '/images/location-5.jpg', title: '방문 마사지', desc: "집·오피스텔·숙소로 직접 방문", gradient: 'from-rose-200/80 via-pink-200/70 to-purple-200/60' },
        { src: '/images/location-6.jpg', title: '마사지 코스', desc: '타이·아로마·스웨디시 60·90·120분', gradient: 'from-pink-200/80 via-rose-200/70 to-purple-200/60' },
        { src: '/images/location-7.jpg', title: '후불 결제', desc: '예약금 없이 서비스 후 현장 결제', gradient: 'from-purple-200/80 via-pink-200/70 to-rose-200/60' },
      ]}
      description="오산의 집과 숙소가 마사지 공간이 됩니다. 타이 60분 7만원부터 아로마·스웨디시까지, 출장·주차·야간 추가비 없이 이용 후 현장에서 결제합니다."
      areas={["오산동", "원동", "세교동", "궐동", "금암동", "갈곶동", "수청동", "내삼미동", "부산동", "외삼미동"]}
      latitude="37.1499"
      longitude="127.0772"
      intro={
        <>
          <p>
            오산동·원동·세교동과 궐동·금암동의 예약은 주소와 건물명으로 접수합니다. 공동현관 출입 방법이 필요하며, 호텔·숙소는 외부 방문객 출입이 허용되어야 합니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          <p>
            60분부터 90·120분까지 일정에 맞는 코스로 이용할 수 있습니다. 타이·아로마·스웨디시의 관리 방식과 가격을 안내하며 강도는 선호에 맞춰 진행합니다.
          </p>
        </>
      }
      outro={
        <>
          <p>
            갈곶동·수청동·내삼미동도 추가비 없는 같은 결제 기준입니다. 오산 예약 상담은 오후 7시~오전 4시 전화·카카오톡으로 진행하며 선입금은 받지 않습니다.
          </p>
          <div className="mt-4 text-sm text-gray-600">오산동 원동 세교동 궐동 금암동 갈곶동 수청동 내삼미동 부산동 외삼미동</div>
        </>
      }
    />
  );
}
