"use client";

import { defaultLocale, localeNames, locales } from "../i18n/config";
import { localizePath } from "../i18n/routing";

export function LanguageSwitcher({ currentLocale, currentPath }) {
  return (
    <div className="language-switcher" aria-label="Language switcher">
      {locales.map((locale) => {
        const isActive = locale === currentLocale;
        const href = localizePath(locale, currentPath);

        return (
          <a
            className={`language-option${isActive ? " is-active" : ""}`}
            href={href}
            hrefLang={locale}
            lang={locale}
            key={locale}
            aria-current={isActive ? "true" : undefined}
          >
            {localeNames[locale]}
          </a>
        );
      })}
    </div>
  );
}
