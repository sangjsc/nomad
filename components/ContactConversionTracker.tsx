"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { SERVICE_AREAS } from "@/lib/site"

type ContactMethod = "phone" | "kakao"

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

function sendEvent(name: string, parameters: Record<string, string>) {
  if (typeof window.gtag === "function") {
    window.gtag("event", name, parameters)
  } else {
    // Match Google's gtag queue format while the tag initializes.
    function queueCommand(..._args: unknown[]) {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push(arguments)
    }
    queueCommand("event", name, parameters)
  }
}

function getServiceArea(pathname: string) {
  const pathSegments = pathname.split("/").filter(Boolean)
  const matchedArea = SERVICE_AREAS.find((area) =>
    pathSegments.some((segment) => segment === area.slug || segment.startsWith(`${area.slug}-`)),
  )
  return matchedArea?.slug ?? "sitewide"
}

function getCtaLocation(link: HTMLAnchorElement) {
  const explicitLocation = link.closest<HTMLElement>("[data-cta-location]")?.dataset.ctaLocation
  if (explicitLocation) return explicitLocation
  if (link.closest("nav[aria-label='빠른 예약 및 상담']")) return "mobile_bottom_nav"
  if (link.closest("header")) return "header"
  if (link.closest("article")) return "blog_article"
  if (link.closest("footer")) return "footer"
  return "page_content"
}

export default function ContactConversionTracker() {
  const pathname = usePathname()

  useEffect(() => {
    // In-memory, per-page interaction only; not a booking or proof of reading prices.
    let pricingShortcutUsed = false

    const handleClick = (event: MouseEvent) => {
      const target = event.target
      if (!(target instanceof Element)) return

      const link = target.closest<HTMLAnchorElement>("a[href]")
      if (!link) return

      const rawHref = link.getAttribute("href")?.trim() ?? ""
      const isPricingShortcut =
        link.getAttribute("data-analytics-event") === "price_table_click" && rawHref === "#services"
      let method: ContactMethod | null = null

      if (rawHref.toLowerCase().startsWith("tel:")) {
        method = "phone"
      } else {
        try {
          const url = new URL(link.href, window.location.href)
          if (url.hostname === "open.kakao.com") method = "kakao"
        } catch {
          return
        }
      }

      if (!method && !isPricingShortcut) return

      const ctaText = (link.innerText || link.getAttribute("aria-label") || method || "price_table")
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 80)
      const parameters = {
        service_area: getServiceArea(window.location.pathname),
        cta_location: getCtaLocation(link),
        cta_text: ctaText,
        page_path: window.location.pathname,
      }

      if (isPricingShortcut) {
        pricingShortcutUsed = true
        sendEvent("price_table_click", parameters)
        return
      }

      if (method) {
        sendEvent(method === "phone" ? "phone_click" : "kakao_click", {
          ...parameters,
          contact_method: method,
          pricing_shortcut_used: pricingShortcutUsed ? "yes" : "no",
        })
      }
    }

    document.addEventListener("click", handleClick, true)
    return () => document.removeEventListener("click", handleClick, true)
  }, [pathname])

  return null
}
