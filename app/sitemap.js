import { locales } from "../i18n/config";
import { getAbsoluteUrl } from "../i18n/routing";

const paths = [
  "/",
  "/about",
  "/contact",
  "/products/acoustic-pendant-lights",
  "/products/acoustic-pendant-lights/tr-xym-0137-ring-family"
];

export default function sitemap() {
  const now = new Date();

  return paths.flatMap((pathname) =>
    locales.map((locale) => ({
      url: getAbsoluteUrl(locale, pathname),
      lastModified: now,
      alternates: {
        languages: Object.fromEntries(locales.map((item) => [item, getAbsoluteUrl(item, pathname)]))
      }
    }))
  );
}
