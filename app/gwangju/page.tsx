import type { Metadata } from "next";
import LocationPage from "../components/LocationPage";

export const metadata: Metadata = {
  title: "광주 출장마사지 | 출장안마 | 노마드 - 24시간",
  description:
    "경기도 광주 출장마사지, 출장안마는 노마드출장마사지가 책임집니다. 광주시 전 지역 24시간 방문, 100% 후불제. 일상의 스트레스를 날려버릴 최고의 힐링을 선사합니다.",
  keywords:
    "광주출장마사지, 광주출장안마, 경기광주출장, 오포출장안마, 곤지암출장마사지, 경기도광주출장, 24시간출장안마",
  openGraph: {
    title: "광주 출장마사지 & 출장안마 | 노마드출장마사지",
    description: "경기도 광주시 1등 출장마사지. 24시간 언제든 편하게 예약하고 최상의 서비스를 경험하세요.",
    url: "https://nomadthai.kr/gwangju",
  },
  alternates: {
    canonical: "https://nomadthai.kr/gwangju",
  },
};

export default function GwangjuPage() {
  return (
    <LocationPage
      city="광주"
      cityEn="gwangju"
      description="경기도 광주시 전 지역에서 최고의 출장마사지 서비스를 제공합니다."
      areas={["송정동", "경안동", "쌍령동", "오포읍", "곤지암읍", "남종면", "중부면", "남한산성면", "초월읍", "도척면"]}
      latitude="37.429084"
      longitude="127.255189"
      intro={
        <>
          <p>
            아름다운 자연과 역사가 공존하는 경기도 <strong>광주</strong>, 노마드출장마사지가 여러분의 편안한 휴식을 책임집니다.
            복잡한 도심을 벗어나 휴식이 필요할 때, 계신 곳 어디든 전문 관리사가 직접 방문하여 최상의 <strong>출장안마</strong> 서비스를 제공합니다.
            광주시 전역, 신속하고 프라이빗한 케어로 활력을 되찾으세요.
          </p>
        </>
      }
      serviceDescription={
        <>
          광주시청이 위치한 <strong>송정동, 경안동</strong>은 물론, <strong>오포, 곤지암</strong> 등 광주 전 지역이 저희의 서비스 범위입니다.
          고객님의 프라이버시를 최우선으로 생각하며, 예약 즉시 가장 가까운 전문 관리사가 배정되어 최고의 <strong>출장마사지</strong> 경험을 선사합니다.
        </>
      }
      outro={
        <>
          경기도 광주에서의 완벽한 재충전, 노마드출장마사지와 함께하세요.
          광주 시민 여러분의 지친 몸과 마음에 진정한 힐링을 선물하겠습니다.
        </>
      }
    />
  );
}
