"use client";

import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import { localizeHref } from "../../i18n/routing";

export function ProductDetailPage({ locale, messages, currentPath }) {
  const page = messages.pages.productDetail;

  return (
    <>
      <SiteHeader locale={locale} currentPath={currentPath} messages={messages} ctaHref="#quote" />
      <main className="product-template-page">
        <section className="simple-product-hero">
          <div className="wrap simple-product-grid">
            <div className="simple-product-media reveal">
              <img src="/assets/img/products/tr-xym-0137/image304.jpeg" alt={page.heroImageAlt} />
            </div>
            <div className="simple-product-info reveal delay-1">
              <a className="simple-breadcrumb" href={localizeHref(locale, "/products/acoustic-pendant-lights")}>{page.breadcrumb}</a>
              <p className="simple-product-code">{page.code}</p>
              <h1>{page.title}</h1>
              <p>{page.text}</p>
              <div className="simple-actions">
                <a className="btn primary" href="#quote">{page.primaryCta}</a>
                <a className="btn secondary" href="#technical">{page.secondaryCta}</a>
              </div>
              <dl className="quick-specs" aria-label={page.quickSpecsAriaLabel}>
                {page.quickSpecs.map((item) => (
                  <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section className="simple-product-section">
          <div className="wrap simple-detail-grid">
            <div className="simple-detail-copy reveal">
              <h2>{page.overview.title}</h2>
              {page.overview.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="simple-line-drawing reveal delay-1">
              <img src="/assets/img/products/tr-xym-0137/image305.jpeg" alt={page.lineDrawingAlt} />
            </div>
          </div>
        </section>

        <section className="simple-product-section simple-product-soft" id="technical">
          <div className="wrap">
            <div className="simple-section-head reveal">
              <h2>{page.technical.title}</h2>
              <p>{page.technical.text}</p>
            </div>
            <div className="simple-spec-table reveal delay-1">
              {page.technical.rows.map((row) => (
                <div key={row.label}><strong>{row.label}</strong><span>{row.value}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="simple-product-section">
          <div className="wrap simple-options-grid">
            <div className="simple-option-card reveal">
              <h2>{page.options.title}</h2>
              <ul>
                {page.options.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="simple-quote-card reveal delay-1" id="quote">
              <h2>{page.quote.title}</h2>
              <p>{page.quote.text}</p>
              <a className="btn primary" href="mailto:sales@kingornan.com?subject=TR-XYM-0137%20Ring%20Family%20Inquiry">{page.quote.primaryCta}</a>
              <a className="simple-text-link" href="https://wa.me/8615888067484" target="_blank" rel="noopener">{page.quote.secondaryCta}</a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} messages={messages} />
    </>
  );
}
