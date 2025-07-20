import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const locales = ["en", "es"]
const defaultLocale = "en"

function getLocale(request: NextRequest): string {
  // Check if locale is already in the pathname
  const pathname = request.nextUrl.pathname
  const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

  if (pathnameHasLocale) {
    return pathname.split("/")[1]
  }

  // Get locale from Accept-Language header
  const acceptLanguage = request.headers.get("accept-language")
  if (acceptLanguage) {
    const preferredLocale = acceptLanguage
      .split(",")
      .map((lang) => lang.split(";")[0].trim())
      .find((lang) => {
        const langCode = lang.split("-")[0]
        return locales.includes(langCode)
      })

    if (preferredLocale) {
      const langCode = preferredLocale.split("-")[0]
      return locales.includes(langCode) ? langCode : defaultLocale
    }
  }

  return defaultLocale
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Skip middleware for API routes, static files, and Next.js internals
  if (pathname.startsWith("/_next") || pathname.startsWith("/api") || pathname.includes(".")) {
    return
  }

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

  if (pathnameHasLocale) return

  // Redirect to locale-prefixed path
  const locale = getLocale(request)
  const newUrl = new URL(`/${locale}${pathname}`, request.url)

  return NextResponse.redirect(newUrl)
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
}
