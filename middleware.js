import { NextResponse } from "next/server";
import { defaultLocale, locales } from "./i18n/config";
import { getDirection } from "./i18n/routing";

function createLocaleResponse(request, locale, responseType = "next", url) {
  const headers = new Headers(request.headers);
  headers.set("x-locale", locale);
  headers.set("x-dir", getDirection(locale));

  const response =
    responseType === "rewrite"
      ? NextResponse.rewrite(url, {
          request: {
            headers
          }
        })
      : NextResponse.next({
          request: {
            headers
          }
        });

  response.headers.set("x-locale", locale);
  response.headers.set("x-dir", getDirection(locale));

  return response;
}

export function middleware(request) {
  const { pathname, search } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/assets") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const segments = pathname.split("/");
  const maybeLocale = segments[1];

  if (locales.includes(maybeLocale)) {
    if (maybeLocale === defaultLocale) {
      const redirectUrl = request.nextUrl.clone();
      redirectUrl.pathname = pathname.replace(/^\/en(?=\/|$)/, "") || "/";
      redirectUrl.search = search;
      return NextResponse.redirect(redirectUrl);
    }

    return createLocaleResponse(request, maybeLocale);
  }

  const rewriteUrl = request.nextUrl.clone();
  rewriteUrl.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;

  return createLocaleResponse(request, defaultLocale, "rewrite", rewriteUrl);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)"]
};
