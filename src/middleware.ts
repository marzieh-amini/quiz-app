import { NextRequest, NextResponse } from "next/server";
import Negotiator from "negotiator";
import { match } from "@formatjs/intl-localematcher";
const locales: string[] = ["en-us", "en", "fa", "fa-ir"];

export function getLocale(request: NextRequest) {
  const negotiator: any = {};
  request.headers.forEach((value, key) => {
    negotiator[key] = value;
  });
  const languages = new Negotiator({
    headers: negotiator,
  }).languages();
  const defaultLocale = "fa-ir";
  const locale = match(languages, locales, defaultLocale);

  return locale;
}
export function middleware(request: NextRequest) {
  
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  if (pathnameHasLocale) return;

  const locale = getLocale(request);

  return NextResponse.redirect(
    new URL(
      `/${locale}${pathname.startsWith("/") ? "/" : ""}${pathname}`,
      request.url
    )
  );
}
export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
