import type { Metadata } from "next";
import LocationPage from "../components/LocationPage";

export const metadata: Metadata = {
  title: "이천 출장마사지 | 출장안마 | 노마드 - 24시간",
  description:
    "이천 출장마사지, 출장안마 전문 노마드출장마사지입니다. 이천시 전 지역 24시간 방문 가능, 100% 후불제. 지친 일상에 활력을 되찾아주는 최고의 힐링을 경험하세요.",
  keywords:
    "이천출장마사지, 이천출장안마, 이천마사지, 부발읍출장안마, 하이닉스출장마사지, 경기도이천출장, 24시간출장안마",
  openGraph: {
    title: "이천 출장마사지 & 출장안마 | 노마드출장마사지",
    description: "경기도 이천시 1등 출장마사지. 24시간 언제든 편하게 예약하고 최상의 서비스를 경험하세요.",
    url: "https://nomadthai.kr/icheon",
  },
  alternates: {
    canonical: "https://nomadthai.kr/icheon",
  },
};

export default function IcheonPage() {
  return (
    <LocationPage
      city="이천"
      cityEn="icheon"
      description="경기도 이천시 전 지역에서 최고의 출장마사지 서비스를 제공합니다."
      areas={["부발읍", "신둔면", "백사면", "설성면", "마장면", "호법면", "모가면", "중리동", "증포동", "관고동"]}
      latitude="37.27221"
      longitude="127.43513"
      intro={
        <>
          <p>
            쌀과 도자기의 고장, 경기도 <strong>이천</strong>의 중심에서 노마드출장마사지가 여러분을 찾아갑니다.
            일상의 피로와 스트레스에 지친 이천 시민 여러분께 집이나 원하시는 곳에서 편안하게 최상의 힐링을 경험할 수 있는 기회를 선사합니다.
            이천 전 지역, 어디든 불러만 주시면 전문 관리사가 신속하게 방문하여 활력을 되찾아 드립니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          이천 전 지역, 어디든 30분 내 방문을 약속드립니다. 특히 <strong>부발읍 하이닉스 근처</strong>나 시내 중심가에서 많은 분들이 찾아주십니다. 
          저희는 단순한 마사지를 넘어, 이천 고객님 한 분 한 분의 컨디션에 맞춘 <strong>프리미엄 출장안마</strong> 서비스를 제공합니다.
        </>
      }
      outro={
        <>
          이천에서의 특별한 휴식이 필요할 땐, 주저 말고 노마드출장마사지를 찾아주세요. 
          이천시민 여러분의 삶에 활력을 더하는 최고의 파트너가 되겠습니다.
        </>
      }
    />
  );
}
