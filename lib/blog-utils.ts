// 클라이언트/서버 공통 유틸리티 함수

export function extractCityFromTitle(title: string): string {
  const cities = ['수원', '안산', '성남', '안양', '과천', '의왕', '군포', '하남', '이천', '광주', '여주', '용인']
  for (const city of cities) {
    if (title.includes(city)) {
      return city
    }
  }
  return ''
}
