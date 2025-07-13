import type { Metadata } from "next";
import LocationPage from "../components/LocationPage";

export const metadata: Metadata = {
  title: "여주 출장마사지 | 출장안마 | 노마드 - 24시간",
  description:
    "여주 출장마사지, 출장안마의 명가, 노마드출장마사지. 여주시 전 지역 24시간 방문, 100% 후불제. 세종대왕의 도시에서 왕과 같은 휴식을 경험하세요.",
  keywords:
    "여주출장마사지, 여주출장안마, 여주마사지, 가남읍출장안마, 오학동출장마사지, 경기도여주출장, 24시간출장안마",
  openGraph: {
    title: "여주 출장마사지 & 출장안마 | 노마드출장마사지",
    description: "경기도 여주시 1등 출장마사지. 24시간 언제든 편하게 예약하고 최상의 서비스를 경험하세요.",
    url: "https://nomadthai.kr/yeoju",
  },
  alternates: {
    canonical: "https://nomadthai.kr/yeoju",
  },
};

export default function YeojuPage() {
  return (
    <LocationPage
      city="여주"
      cityEn="yeoju"
      theme="amber"
      heroImage="/images/spa-image-3.jpg"
      description="조용하고 여유로운 여주에서 품격 있는 프리미엄 출장마사지 서비스를 제공합니다."
      areas={["여주동", "오학동", "현암동", "점동면", "가남읍", "능서면", "흥천면", "금사면", "산북면", "대신면"]}
      latitude="37.297809"
      longitude="127.637352"
      intro={
        <>
          <p>
            유서 깊고 조용한 <strong>여주</strong>에서 노마드출장마사지가 고객님만의 특별한 휴식처가 되어 드립니다.
            여유로운 도시 분위기에 어울리는 품격 있는 서비스로, 바쁜 일상에서 벗어나 진정한 힐링이 필요할 때 언제든 최상의 <strong>출장안마</strong> 서비스를 제공합니다.
            여주에서만 느낄 수 있는 특별하고 편안한 시간을 약속합니다.
          </p>
        </>
      }
      serviceDescription={
        <>
          여주시내 <strong>여주동, 오학동</strong>은 물론, <strong>가남읍</strong>까지 여주 전 지역 어디든 신속하게 방문합니다.
          저희 전문 관리사들은 여주 고객님들의 프라이빗한 공간에서 최고의 <strong>출장마사지</strong>를 제공하여, 일상의 스트레스를 해소하고 새로운 활력을 불어넣어 드립니다.
        </>
      }
      outro={
        <>
          경기도 여주에서의 가장 특별하고 편안한 휴식, 노마드출장마사지가 함께합니다.
          여주 시민 여러분의 건강과 행복을 위해 항상 최선을 다하겠습니다.
        </>
      }
    />
  );
}