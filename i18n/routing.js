import { defaultLocale, locales, rtlLocales, siteUrl } from "./config";

export function isValidLocale(locale) {
  return locales.includes(locale);
}

export function getDirection(locale) {
  return rtlLocales.has(locale) ? "rtl" : "ltr";
}

export function stripLocalePrefix(pathname = "/") {
  const segments = pathname.split("/");
  const maybeLocale = segments[1];

  if (isValidLocale(maybeLocale)) {
    const remainder = `/${segments.slice(2).join("/")}`.replace(/\/+/g, "/");
    return remainder === "/" ? "/" : remainder.replace(/\/$/, "") || "/";
  }

  return pathname === "/" ? "/" : pathname.replace(/\/$/, "") || "/";
}

export function localizePath(locale, pathname = "/") {
  const cleanPath = stripLocalePrefix(pathname);
  if (locale === defaultLocale) {
    return cleanPath;
  }

  return cleanPath === "/" ? `/${locale}` : `/${locale}${cleanPath}`;
}

export function getAbsoluteUrl(locale, pathname = "/") {
  return `${siteUrl}${localizePath(locale, pathname)}`;
}

export function localizeHref(locale, href = "/") {
  if (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  ) {
    return href;
  }

  if (href.startsWith("#")) {
    const base = localizePath(locale, "/");
    return `${base}${href}`;
  }

  const [pathname, hash] = href.split("#");
  const localizedPath = localizePath(locale, pathname || "/");
  return hash ? `${localizedPath}#${hash}` : localizedPath;
}

export function getAlternates(pathname = "/") {
  const languages = Object.fromEntries(
    locales.map((locale) => [locale, getAbsoluteUrl(locale, pathname)])
  );

  languages["x-default"] = `${siteUrl}${stripLocalePrefix(pathname)}`;

  return {
    canonical: `${siteUrl}${localizePath(defaultLocale, pathname)}`,
    languages,
  };
}

export function createMetadata({ locale, pathname, title, description, images = [] }) {
  const canonical = getAbsoluteUrl(locale, pathname);

  return {
    title,
    description,
    alternates: getAlternates(pathname),
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "KingOrnan Acoustic Lighting",
      locale,
      type: "website",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: images.map((image) => image.url),
    },
  };
}
