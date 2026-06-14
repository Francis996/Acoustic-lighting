"use client";

import { LanguageSwitcher } from "./LanguageSwitcher";
import { useSiteInteractions } from "./useSiteInteractions";
import { localizeHref } from "../i18n/routing";

export function SiteHeader({ locale, currentPath, messages, ctaHref = "/contact" }) {
  useSiteInteractions();

  const nav = messages.navigation;

  return (
    <header className="site-header" data-header>
      <a
        className="brand"
        href={localizeHref(locale, "/")}
        aria-label={messages.common.brandAriaLabel}
      >
        <img
          className="brand-logo"
          src="/assets/img/brand/kingornan-logo-header.png"
          alt={messages.common.logoAlt}
          width="118"
          height="88"
        />
      </a>

      <button
        className="nav-toggle"
        type="button"
        aria-label={nav.openNavigation}
        aria-expanded="false"
        data-nav-toggle
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className="main-nav" aria-label={nav.ariaLabel} data-nav>
        <a className="nav-link" href={localizeHref(locale, "/")}>
          {nav.home}
        </a>

        <div className="mega-item">
          <button className="mega-trigger" type="button" aria-expanded="false">
            {nav.products.label}
          </button>
          <div className="mega-panel product-mega">
            <div className="mega-intro">
              <span>{nav.products.introLabel}</span>
              <strong>{nav.products.introTitle}</strong>
              <p>{nav.products.introText}</p>
              <a href={localizeHref(locale, nav.products.introHref)}>
                {nav.products.introCta}
              </a>
            </div>
            <div className="mega-list">
              {nav.products.items.map((item) => (
                <a href={localizeHref(locale, item.href)} key={item.title}>
                  <b>{item.title}</b>
                  <small>{item.text}</small>
                </a>
              ))}
            </div>
            <div className="mega-feature">
              <span>{nav.products.featureLabel}</span>
              {nav.products.featureLinks.map((item) => (
                <a href={localizeHref(locale, item.href)} key={item.title}>
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        </div>

        {["applications", "company", "resources"].map((section) => (
          <div className="mega-item" key={section}>
            <button className="mega-trigger" type="button" aria-expanded="false">
              {nav[section].label}
            </button>
            <div className="mega-panel compact-mega">
              <div className="mega-intro">
                <span>{nav[section].introLabel}</span>
                <strong>{nav[section].introTitle}</strong>
                <p>{nav[section].introText}</p>
              </div>
              <div className="mega-list two-col">
                {nav[section].items.map((item) => (
                  <a href={localizeHref(locale, item.href)} key={item.title}>
                    <b>{item.title}</b>
                    <small>{item.text}</small>
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className="mobile-language-switcher">
          <LanguageSwitcher currentLocale={locale} currentPath={currentPath} />
        </div>
      </nav>

      <div className="header-actions">
        <LanguageSwitcher currentLocale={locale} currentPath={currentPath} />
        <a className="header-cta" href={localizeHref(locale, ctaHref)}>
          {messages.common.getQuote}
        </a>
      </div>
    </header>
  );
}
