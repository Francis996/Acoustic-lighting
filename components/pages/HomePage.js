"use client";

import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import { localizeHref } from "../../i18n/routing";

export function HomePage({ locale, messages, currentPath }) {
  const page = messages.pages.home;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Ningbo King Ornan Technology Co., Ltd.",
        alternateName: "KingOrnan",
        url: "https://www.kingornan.com/",
        logo: "https://www.kingornan.com/assets/img/brand/kingornan-logo-header.png",
        email: "sales@kingornan.com",
        telephone: "+86 15888067484",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Ningbo / Zhongshan",
          addressRegion: "Zhejiang / Guangdong",
          addressCountry: "CN"
        }
      },
      {
        "@type": "WebSite",
        name: "KingOrnan Acoustic Lighting",
        url: "https://www.kingornan.com/"
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faq.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer
          }
        }))
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SiteHeader locale={locale} currentPath={currentPath} messages={messages} />
      <main id="top">
        <section className="hero section-dark">
          <div className="hero-bg"></div>
          <div className="hero-grid wrap">
            <div className="hero-copy reveal">
              <p className="eyebrow">{page.hero.eyebrow}</p>
              <h1>{page.hero.title}</h1>
              <p className="hero-lead">{page.hero.lead}</p>
              <div className="hero-actions">
                <a className="btn primary" href={localizeHref(locale, "/contact")}>
                  {page.hero.primaryCta}
                </a>
                <a className="btn glass" href={localizeHref(locale, "/#products")}>
                  {page.hero.secondaryCta}
                </a>
              </div>
              <div className="hero-proof" aria-label={page.hero.proofAriaLabel}>
                {page.hero.proof.map((item) => (
                  <div key={item.value}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-visual reveal delay-1">
              <img
                src="/assets/img/home/banner.webp"
                alt={page.hero.imageAlt}
                width="1254"
                height="1254"
                loading="eager"
              />
              <div className="floating-card card-top">
                <span>{page.hero.cards[0].number}</span>
                <strong>{page.hero.cards[0].title}</strong>
                <small>{page.hero.cards[0].text}</small>
              </div>
              <div className="floating-card card-bottom">
                <span>{page.hero.cards[1].number}</span>
                <strong>{page.hero.cards[1].title}</strong>
                <small>{page.hero.cards[1].text}</small>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-label={page.trustStrip.ariaLabel}>
          <div className="wrap trust-shell">
            <div className="trust-intro">
              <span>{page.trustStrip.label}</span>
              <strong>{page.trustStrip.title}</strong>
            </div>
            <div className="trust-grid">
              {page.trustStrip.items.map((item) => (
                <article key={item.number}>
                  <b>{item.number}</b>
                  <strong>{item.title}</strong>
                  <small>{item.text}</small>
                </article>
              ))}
            </div>
            <a className="trust-cta" href={localizeHref(locale, "/contact")}>
              {page.trustStrip.cta}
            </a>
          </div>
        </section>

        <section className="section products" id="products">
          <div className="wrap">
            <div className="section-head reveal">
              <p className="eyebrow dark">{page.products.eyebrow}</p>
              <h2>{page.products.title}</h2>
              <p>{page.products.text}</p>
            </div>

            <div className="product-grid">
              {page.products.items.map((item, index) => (
                <article className={`product-card reveal delay-${index}`} key={item.number}>
                  <img src={item.image} alt={item.alt} width="1422" height="1106" loading="lazy" />
                  <div>
                    <p>{item.number}</p>
                    <h3>{item.title}</h3>
                    <span>{item.text}</span>
                    <a href={localizeHref(locale, item.href)}>{item.cta}</a>
                  </div>
                </article>
              ))}

              <article className="product-card accent-card reveal delay-4">
                <div>
                  <p>{page.products.accent.number}</p>
                  <h3>{page.products.accent.title}</h3>
                  <span>{page.products.accent.text}</span>
                  <a href={localizeHref(locale, "/#oem")}>{page.products.accent.cta}</a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section solution section-soft" id="solutions">
          <div className="wrap split-grid">
            <div className="solution-copy reveal">
              <p className="eyebrow dark">{page.solutions.eyebrow}</p>
              <h2>{page.solutions.title}</h2>
              <p>{page.solutions.text}</p>
              <div className="benefit-list">
                {page.solutions.benefits.map((item) => (
                  <div key={item.number}>
                    <b>{item.number}</b>
                    <strong>{item.title}</strong>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="solution-visual reveal delay-1">
              <img
                src="/assets/img/home/solution-office-acoustic-lighting.webp"
                alt={page.solutions.imageAlt}
                width="1200"
                height="900"
                loading="lazy"
              />
              <div className="metric-panel">
                <strong>{page.solutions.metricTitle}</strong>
                <span>{page.solutions.metricText}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section applications" id="applications">
          <div className="wrap">
            <div className="section-head centered reveal">
              <p className="eyebrow dark">{page.applications.eyebrow}</p>
              <h2>{page.applications.title}</h2>
            </div>

            <div className="application-grid">
              {[
                "/assets/img/home/app-office.webp",
                "/assets/img/home/app-education.webp",
                "/assets/img/home/app-hospitality.webp",
                "/assets/img/home/app-commercial.webp"
              ].map((src, index) => (
                <article className={`app-card reveal delay-${index}`} key={src}>
                  <img src={src} alt={page.applications.items[index].alt} width="700" height="700" loading="lazy" />
                  <strong>{page.applications.items[index].title}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section oem section-dark" id="oem">
          <div className="wrap">
            <div className="section-head light reveal">
              <p className="eyebrow">{page.oem.eyebrow}</p>
              <h2>{page.oem.title}</h2>
              <p>{page.oem.text}</p>
            </div>

            <div className="process-grid">
              {page.oem.steps.map((item, index) => (
                <article className={`process-card reveal delay-${index}`} key={item.number}>
                  <span>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>

            <div className="custom-tags reveal">
              {page.oem.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section specs">
          <div className="wrap specs-grid">
            <div className="spec-card reveal">
              <p className="eyebrow dark">{page.specs.eyebrow}</p>
              <h2>{page.specs.title}</h2>
              <p>{page.specs.text}</p>
            </div>
            <div className="spec-table reveal delay-1" role="table" aria-label={page.specs.ariaLabel}>
              {page.specs.rows.map((row) => (
                <div role="row" key={row.label}>
                  <strong>{row.label}</strong>
                  <span>{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section factory section-soft" id="factory">
          <div className="wrap split-grid reverse">
            <div className="factory-gallery reveal">
              <img className="large" src={page.factory.images[0].src} alt={page.factory.images[0].alt} width="1200" height="800" loading="lazy" />
              <img src={page.factory.images[1].src} alt={page.factory.images[1].alt} width="700" height="520" loading="lazy" />
              <img src={page.factory.images[2].src} alt={page.factory.images[2].alt} width="700" height="520" loading="lazy" />
            </div>

            <div className="factory-copy reveal delay-1">
              <p className="eyebrow dark">{page.factory.eyebrow}</p>
              <h2>{page.factory.title}</h2>
              <p>{page.factory.text}</p>
              <ul className="check-list">
                {page.factory.checklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section faq" id="faq">
          <div className="wrap faq-grid">
            <div className="faq-intro reveal">
              <p className="eyebrow dark">{page.faq.eyebrow}</p>
              <h2>{page.faq.title}</h2>
              <p>{page.faq.text}</p>
            </div>

            <div className="faq-list reveal delay-1">
              {page.faq.items.map((item, index) => (
                <details open={index === 0} key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section section-dark" id="contact">
          <div className="wrap contact-grid">
            <div className="contact-copy reveal">
              <p className="eyebrow">{page.contact.eyebrow}</p>
              <h2>{page.contact.title}</h2>
              <p>{page.contact.text}</p>
              <div className="contact-methods">
                <a href="mailto:sales@kingornan.com?subject=Acoustic%20Lighting%20Project%20Inquiry">sales@kingornan.com</a>
                <a href="https://wa.me/8615888067484" target="_blank" rel="noopener">
                  WhatsApp: +86 15888067484
                </a>
              </div>
            </div>

            <form className="inquiry-form reveal delay-1" action="mailto:sales@kingornan.com" method="post" encType="text/plain">
              <label>
                {page.contact.form.name}
                <input type="text" name="Name" placeholder={page.contact.form.placeholders.name} required />
              </label>
              <label>
                {page.contact.form.email}
                <input type="email" name="Email" placeholder={page.contact.form.placeholders.email} required />
              </label>
              <label>
                {page.contact.form.country}
                <input type="text" name="Country" placeholder={page.contact.form.placeholders.country} />
              </label>
              <label>
                {page.contact.form.productRequirement}
                <select name="Product Requirement">
                  {page.contact.form.options.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
              <label className="full">
                {page.contact.form.message}
                <textarea name="Message" rows="5" placeholder={page.contact.form.placeholders.message}></textarea>
              </label>
              <button className="btn primary full" type="submit">
                {page.contact.form.submit}
              </button>
              <p className="form-note">{page.contact.form.note}</p>
            </form>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} messages={messages} />
    </>
  );
}
