import type { Metadata } from "next"
import Script from "next/script"
import Header from "@/components/Header"
import MobileBottomNav from "@/components/MobileBottomNav"
import ContactConversionTracker from "@/components/ContactConversionTracker"
import {
  CONSULTATION_HOURS,
  PHONE_DISPLAY,
  SITE_ALTERNATE_NAME,
  SITE_NAME,
  SITE_URL,
  schemaAreaServed,
} from "@/lib/site"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "�븶�����帶���� | ��� �ֿ� 22�� ���� ���帶������ȨŸ��",
  description:
    "��⵵ ��õ, ����(��⵵ ���ֽ�), ����, ����, ����, ȭ��, ����, ����, ��õ, ���� ���� �ֿ� ���� ���帶���� ���� �ȳ�. ���� 7��~���� 4�� ���, ���� �Ϸ� �� ���� ����.",
  manifest: "/manifest.json",
  icons: { icon: "/favicon.svg" },
  verification: {
    other: {
      "ahrefs-site-verification":
        "30e195960243813345bd96ca0c896cfe60df7d559c1fe62b75c5fab89362d978",
    },
  },
  openGraph: {
    title: "�븶�����帶���� | ��� �ֿ� 22�� ���� ���帶����",
    description:
      "��� �ֿ� 22�� �������� �ּҿ� ��� �ð��� Ȯ���� �� �湮 ���� ������ �ȳ��ϴ� �븶�����帶�����Դϴ�.",
    images: [
      {
        url: "/og/home",
        width: 1200,
        height: 630,
        alt: "�븶�����帶���� - ��� �ֿ� 22�� ���� ���� �ȳ�",
        type: "image/png",
      },
    ],
    type: "website",
    locale: "ko_KR",
    url: "/",
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: "�븶�����帶���� | ��� �ֿ� 22�� ���� ���帶����",
    description: "��� �ֿ� 22�� ������ ���� 7��~���� 4�� ��㡤�ĺ��� ���� �ȳ�.",
    images: ["/og/home"],
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        alternateName: SITE_ALTERNATE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/icon-512.svg`,
        sameAs: [
          "https://x.com/jscnwing9201",
          "https://www.youtube.com/@nomadthai_icheon",
        ],
        telephone: PHONE_DISPLAY,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: PHONE_DISPLAY,
          contactType: "reservations",
          availableLanguage: "Korean",
          hoursAvailable: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "19:00",
              closes: "23:59",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "00:00",
              closes: "04:00",
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        alternateName: SITE_ALTERNATE_NAME,
        inLanguage: "ko-KR",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/#massage-service`,
        name: "��⵵ ���帶���� ����",
        serviceType: "���帶����",
        url: `${SITE_URL}/service-areas`,
        description:
          "��õ����� ���֡����֡����� �� ��⵵ 22�� ���� ���帶���� ����",
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: schemaAreaServed,
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: SITE_URL,
          servicePhone: {
            "@type": "ContactPoint",
            telephone: PHONE_DISPLAY,
            contactType: "reservations",
          },
          availableLanguage: "Korean",
        },
      },
    ],
  }

  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KV1DS4S3MR"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-base"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KV1DS4S3MR');
            `,
          }}
        />
        <ContactConversionTracker />
        <Header />
        <div className="pb-[calc(5rem+env(safe-area-inset-bottom))] md:pb-0" data-consultation-hours={CONSULTATION_HOURS}>
          {children}
        </div>
        <MobileBottomNav />
      </body>
    </html>
  )
}

