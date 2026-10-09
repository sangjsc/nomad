"use client"

import { useEffect, useRef, type MouseEvent, type ReactNode } from "react"
import { usePathname } from "next/navigation"

/** Keep native, server-rendered links usable before hydration. */
export default function NavigationDisclosure({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDetailsElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    if (ref.current) ref.current.open = false
  }, [pathname])

  useEffect(() => {
    const closeOutside = (event: PointerEvent) => {
      const menu = ref.current
      if (menu?.open && event.target instanceof Node && !menu.contains(event.target)) {
        menu.open = false
      }
    }
    const closeOnEscape = (event: KeyboardEvent) => {
      const menu = ref.current
      if (event.key !== "Escape" || !menu?.open) return
      menu.open = false
      menu.querySelector("summary")?.focus({ preventScroll: true })
    }
    document.addEventListener("pointerdown", closeOutside)
    document.addEventListener("keydown", closeOnEscape)
    return () => {
      document.removeEventListener("pointerdown", closeOutside)
      document.removeEventListener("keydown", closeOnEscape)
    }
  }, [])

  const closeAfterLink = (event: MouseEvent<HTMLDetailsElement>) => {
    if (event.target instanceof Element && event.target.closest("a[href]")) {
      event.currentTarget.open = false
    }
  }

  return (
    <details
      ref={ref}
      className={className}
      data-navigation-disclosure
      onClick={closeAfterLink}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          event.currentTarget.open = false
        }
      }}
    >
      {children}
    </details>
  )
}
