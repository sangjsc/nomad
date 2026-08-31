import { ImageResponse } from 'next/og'

export const runtime = 'edge'

const OG_CONFIG: Record<
  string,
  { title: string; subtitle: string; badge: string; from: string; to: string }
> = {
  home: {
    title: 'NOMAD THAI MASSAGE',
    subtitle: 'Gyeonggi Business Trip Massage | 19:00-04:00',
    badge: 'NOMADTHAI.KR',
    from: '#0f172a',
    to: '#7c3aed',
  },
  icheon: {
    title: 'ICHEON MASSAGE',
    subtitle: 'Icheon, Gyeonggi-do | Home Thai Booking',
    badge: 'ICHEON',
    from: '#1d4ed8',
    to: '#0ea5e9',
  },
  gwangju: {
    title: 'GWANGJU GYEONGGI MASSAGE',
    subtitle: 'Gwangju-si (Gyeonggi) | Home Thai Booking',
    badge: 'GWANGJU',
    from: '#2563eb',
    to: '#7c3aed',
  },
  yeoju: {
    title: 'YEOJU MASSAGE',
    subtitle: 'Yeoju-si | Evening Booking',
    badge: 'YEOJU',
    from: '#0f766e',
    to: '#0891b2',
  },
  yongin: {
    title: 'YONGIN MASSAGE',
    subtitle: 'Yongin-si | Home Thai Booking',
    badge: 'YONGIN',
    from: '#0f766e',
    to: '#7c3aed',
  },
  suwon: {
    title: 'SUWON MASSAGE',
    subtitle: 'Suwon-si | Home Thai Booking',
    badge: 'SUWON',
    from: '#be123c',
    to: '#7c3aed',
  },
  ansan: {
    title: 'ANSAN MASSAGE',
    subtitle: 'Ansan-si | Home Thai Booking',
    badge: 'ANSAN',
    from: '#065f46',
    to: '#0ea5e9',
  },
  seongnam: {
    title: 'SEONGNAM MASSAGE',
    subtitle: 'Seongnam-si | Home Thai Booking',
    badge: 'SEONGNAM',
    from: '#1d4ed8',
    to: '#6366f1',
  },
  hanam: {
    title: 'HANAM MASSAGE',
    subtitle: 'Hanam-si | Home Thai Booking',
    badge: 'HANAM',
    from: '#047857',
    to: '#4f46e5',
  },
  anyang: {
    title: 'ANYANG MASSAGE',
    subtitle: 'Anyang-si | Home Thai Booking',
    badge: 'ANYANG',
    from: '#1e40af',
    to: '#7c3aed',
  },
  gunpo: {
    title: 'GUNPO MASSAGE',
    subtitle: 'Gunpo-si | Home Thai Booking',
    badge: 'GUNPO',
    from: '#be123c',
    to: '#fb7185',
  },
  uiwang: {
    title: 'UIWANG MASSAGE',
    subtitle: 'Uiwang-si | Home Thai Booking',
    badge: 'UIWANG',
    from: '#6d28d9',
    to: '#2563eb',
  },
  gwacheon: {
    title: 'GWACHEON MASSAGE',
    subtitle: 'Gwacheon-si | Home Thai Booking',
    badge: 'GWACHEON',
    from: '#b45309',
    to: '#f97316',
  },
  hwaseong: {
    title: 'HWASEONG MASSAGE',
    subtitle: 'Hwaseong-si | Home Thai Booking',
    badge: 'HWASEONG',
    from: '#047857',
    to: '#0ea5e9',
  },
  pyeongtaek: {
    title: 'PYEONGTAEK MASSAGE',
    subtitle: 'Pyeongtaek-si | Home Thai Booking',
    badge: 'PYEONGTAEK',
    from: '#1d4ed8',
    to: '#14b8a6',
  },
  siheung: {
    title: 'SIHEUNG MASSAGE',
    subtitle: 'Siheung-si | Home Thai Booking',
    badge: 'SIHEUNG',
    from: '#6d28d9',
    to: '#2563eb',
  },
  bucheon: {
    title: 'BUCHEON MASSAGE',
    subtitle: 'Bucheon-si | Home Thai Booking',
    badge: 'BUCHEON',
    from: '#be123c',
    to: '#7c3aed',
  },
  gwangmyeong: {
    title: 'GWANGMYEONG MASSAGE',
    subtitle: 'Gwangmyeong-si | Home Thai Booking',
    badge: 'GWANGMYEONG',
    from: '#b45309',
    to: '#ef4444',
  },
  osan: {
    title: 'OSAN MASSAGE',
    subtitle: 'Osan-si | Home Thai Booking',
    badge: 'OSAN',
    from: '#047857',
    to: '#3b82f6',
  },
  anseong: {
    title: 'ANSEONG MASSAGE',
    subtitle: 'Anseong-si | Home Thai Booking',
    badge: 'ANSEONG',
    from: '#1e40af',
    to: '#8b5cf6',
  },
  goyang: {
    title: 'GOYANG MASSAGE',
    subtitle: 'Goyang-si | Home Thai Booking',
    badge: 'GOYANG',
    from: '#5b21b6',
    to: '#2563eb',
  },
  namyangju: {
    title: 'NAMYANGJU MASSAGE',
    subtitle: 'Namyangju-si | Home Thai Booking',
    badge: 'NAMYANGJU',
    from: '#be123c',
    to: '#f97316',
  },
  paju: {
    title: 'PAJU MASSAGE',
    subtitle: 'Paju-si | Home Thai Booking',
    badge: 'PAJU',
    from: '#9a3412',
    to: '#f59e0b',
  },
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug: rawSlug } = await params
  const slug = (rawSlug || 'home').toLowerCase()
  const config = OG_CONFIG[slug] ?? OG_CONFIG.home

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: `linear-gradient(135deg, ${config.from}, ${config.to})`,
          color: '#ffffff',
          fontFamily: 'Arial, sans-serif',
          padding: '64px 72px',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.24) 0%, rgba(255,255,255,0) 42%), radial-gradient(circle at 90% 90%, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 48%)',
          }}
        />
        <div
          style={{
            display: 'flex',
            fontSize: 30,
            letterSpacing: 1.1,
            borderRadius: 9999,
            backgroundColor: 'rgba(255,255,255,0.18)',
            border: '1px solid rgba(255,255,255,0.25)',
            padding: '12px 24px',
            alignSelf: 'flex-start',
            zIndex: 1,
          }}
        >
          {config.badge}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18, zIndex: 1 }}>
          <div
            style={{
              fontSize: 82,
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: -1.8,
              textShadow: '0 6px 30px rgba(0,0,0,0.28)',
            }}
          >
            {config.title}
          </div>
          <div
            style={{
              fontSize: 34,
              opacity: 0.96,
              lineHeight: 1.3,
            }}
          >
            {config.subtitle}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 1,
          }}
        >
          <div style={{ fontSize: 26, opacity: 0.95 }}>
            Postpaid Booking | Call 010-8186-7771
          </div>
          <div style={{ fontSize: 24, opacity: 0.85 }}>www.nomadthai.kr</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
}
