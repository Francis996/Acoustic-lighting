"use client";

import { useEffect, useState } from "react";
import { useSiteInteractions } from "./useSiteInteractions";

const PRODUCT_ROTATION_INTERVAL_MS = 24 * 60 * 60 * 1000;

export function SiteHeader({ content, ctaHref = "/contact" }) {
  useSiteInteractions();

  const nav = content.navigation;
  const customProductLink = nav.products.customLink;
  const [featureLinks, setFeatureLinks] = useState(() => nav.products.featureLinks.slice(0, 3));

  useEffect(() => {
    let isActive = true;
    const controller = new AbortController();

    async function loadFeatureProducts() {
      try {
        const response = await fetch("/api/nav-feature-products", {
          cache: "no-store",
          signal: controller.signal
        });

        if (!response.ok) {
          return;
        }

        const data = await response.json();
        const products = Array.isArray(data.products) ? data.products.slice(0, 3) : [];

        if (isActive && products.length === 3) {
          setFeatureLinks(products);
        }
      } catch (error) {
        if (error?.name === "AbortError") {
          return;
        }
      }
    }

    loadFeatureProducts();
    const timer = window.setInterval(loadFeatureProducts, PRODUCT_ROTATION_INTERVAL_MS);

    return () => {
      isActive = false;
      controller.abort();
      window.clearInterval(timer);
    };
  }, []);

  return (
    <header className="site-header" data-header>
      <a
        className="brand"
        href="/"
        aria-label={content.common.brandAriaLabel}
      >
        <img
          className="brand-logo"
          src="/assets/img/brand/floseek-logo-header.png"
          alt={content.common.logoAlt}
          width="560"
          height="135"
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
        <a className="nav-link" href="/">
          {nav.home}
        </a>

        <div className="mega-item">
          <a className="mega-trigger" href="/products" aria-expanded="false" aria-haspopup="true">
            {nav.products.label}
          </a>
          <div className="mega-panel product-mega">
            <div className="mega-intro">
              <span>{nav.products.introLabel}</span>
              <strong>{nav.products.introTitle}</strong>
              <p>{nav.products.introText}</p>
              <a href={nav.products.introHref}>
                {nav.products.introCta}
              </a>
            </div>
            <div className="mega-list">
              {nav.products.items.map((item) => (
                <a href={item.href} key={item.title}>
                  <b>{item.title}</b>
                  <small>{item.text}</small>
                </a>
              ))}
            </div>
            <div className="mega-feature">
              <span>{nav.products.featureLabel}</span>
              {featureLinks.map((item) => (
                <a className="mega-feature-link" href={item.href} key={item.href}>
                  {item.image ? (
                    <span className="mega-feature-thumb" aria-hidden="true">
                      <img src={item.image} alt="" loading="eager" decoding="async" />
                    </span>
                  ) : null}
                  <span className="mega-feature-title">{item.title}</span>
                </a>
              ))}
              {customProductLink ? (
                <a className="mega-feature-link" href={customProductLink.href}>
                  {customProductLink.image ? (
                    <span className="mega-feature-thumb" aria-hidden="true">
                      <img src={customProductLink.image} alt="" loading="eager" decoding="async" />
                    </span>
                  ) : null}
                  <span className="mega-feature-title">{customProductLink.title}</span>
                </a>
              ) : null}
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
                  <a href={item.href} key={item.title}>
                    <b>{item.title}</b>
                    <small>{item.text}</small>
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}

      </nav>

      <div className="header-actions">
        <a className="header-cta" href={ctaHref} data-contact-popup>
          {content.common.getQuote}
        </a>
      </div>
    </header>
  );
}
