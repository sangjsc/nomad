import type { Metadata } from "next";
import LocationPage from "../components/LocationPage";

export const metadata: Metadata = {
  title: "용인 출장마사지 | 출장안마 | 노마드 - 24시간",
  description:
    "용인 출장마사지, 출장안마는 역시 노마드! 수지, 기흥, 처인 등 용인시 전 지역 24시간 방문, 100% 후불제. 첨단과 자연이 어우러진 용인에서 최상의 힐링을 경험하세요.",
  keywords:
    "용인출장마사지, 용인출장안마, 수지출장안마, 기흥출장마사지, 처인출장안마, 동탄출장마사지, 경기도용인출장, 24시간출장안마",
  openGraph: {
    title: "용인 출장마사지 & 출장안마 | 노마드출장마사지",
    description: "경기도 용인시 1등 출장마사지. 수지, 기흥, 처인 어디든 24시간 예약 가능합니다.",
    url: "https://nomadthai.kr/yongin",
  },
  alternates: {
    canonical: "https://nomadthai.kr/yongin",
  },
};

export default function YonginPage() {
  return (
    <LocationPage
      city="용인"
      cityEn="yongin"
      description="경기도 용인시 전 지역에서 최고의 출장마사지 서비스를 제공합니다."
      areas={["수지구", "기흥구", "처인구", "죽전동", "분당선", "신갈동", "구성동", "보정동", "동천동", "상현동"]}
      latitude="37.240245"
      longitude="127.178020"
      intro={
        <>
          <p>
            첨단 도시와 자연의 아름다움이 공존하는 경기도 <strong>용인</strong>, 노마드출장마사지가 여러분의 일상에 특별한 활력을 더해드립니다.
            <strong>수지, 기흥, 처인</strong> 등 용인시 어디에서든, 집, 호텔, 오피스텔 등 가장 편안한 장소에서 프리미엄 <strong>출장안마</strong> 서비스를 만나보세요.
          </p>
        </>
      }
      serviceDescription={
        <>
          용인시의 핵심 지역인 <strong>수지구와 기흥구, 처인구</strong> 전 지역을 신속하게 커버합니다.
          고객님의 소중한 시간을 위해 예약 후 30분 내 도착을 목표로 하며, 용인 시민들의 지친 심신을 달래주는 최고의 <strong>출장마사지</strong> 경험을 약속합니다.
        </>
      }
      outro={
        <>
          경기도 용인에서의 재충전이 필요할 때, 노마드출장마사지가 정답입니다.
          용인 시민 여러분의 삶의 질을 높이는 프리미엄 힐링 파트너가 되겠습니다.
        </>
      }
    />
  );
}
