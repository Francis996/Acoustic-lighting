"use client";

import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import { InquiryHiddenFields, inquiryAction, inquiryEmail, mailtoHref } from "../inquiryConfig";

export function CollectionPage({ locale, messages, currentPath }) {
  const page = messages.pages.collection;

  return (
    <>
      <SiteHeader locale={locale} currentPath={currentPath} messages={messages} ctaHref="#quote" />
      <main className="collection-page">
        <section className="collection-hero section-dark">
          <div className="hero-bg"></div>
          <div className="wrap collection-hero-grid">
            <div className="collection-hero-copy reveal">
              <p className="eyebrow">{page.hero.eyebrow}</p>
              <h1>{page.hero.title}</h1>
              <p>{page.hero.text}</p>
              <div className="collection-actions">
                <a className="btn primary" href="#quote">{page.hero.primaryCta}</a>
                <a className="btn glass" href="#collection">{page.hero.secondaryCta}</a>
              </div>
              <div className="collection-proof">
                {page.hero.proof.map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>
            <div className="collection-hero-board reveal delay-1">
              {page.hero.images.map((image) => (
                <img className={image.className} src={image.src} alt={image.alt} key={image.src} />
              ))}
            </div>
          </div>
        </section>

        <section className="collection-summary">
          <div className="wrap summary-grid">
            {page.summary.map((item) => (
              <article key={item.number}><b>{item.number}</b><strong>{item.title}</strong><span>{item.text}</span></article>
            ))}
          </div>
        </section>

        <section className="section pendant-products" id="collection">
          <div className="wrap">
            <div className="section-head reveal">
              <p className="eyebrow dark">{page.families.eyebrow}</p>
              <h2>{page.families.title}</h2>
              <p>{page.families.text}</p>
            </div>

            <div className="collection-filter reveal delay-1" aria-label={page.families.tagsAriaLabel}>
              {page.families.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>

            <div className="pendant-grid">
              {page.families.products.map((product, index) => (
                <article className={`pendant-card reveal delay-${Math.min(index, 4)}`} key={product.name}>
                  <div className="pendant-image">
                    <img src={product.image} alt={product.name} loading="lazy" />
                    <span>{product.tag}</span>
                  </div>
                  <div className="pendant-body">
                    <p>{product.model}</p>
                    <h3>{product.name}</h3>
                    <span>{product.text}</span>
                    <ul>
                      {product.specs.map((spec) => <li key={spec}>{spec}</li>)}
                    </ul>
                    <a href={product.href || "#quote"}>{product.cta}</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section specs section-soft">
          <div className="wrap pendant-spec-layout">
            <div className="spec-card reveal">
              <p className="eyebrow dark">{page.specs.eyebrow}</p>
              <h2>{page.specs.title}</h2>
              <p>{page.specs.text}</p>
            </div>
            <div className="spec-table reveal delay-1" role="table" aria-label={page.specs.ariaLabel}>
              {page.specs.rows.map((row) => (
                <div role="row" key={row.label}><strong>{row.label}</strong><span>{row.value}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="section pendant-applications" id="applications">
          <div className="wrap">
            <div className="section-head centered reveal">
              <p className="eyebrow dark">{page.applications.eyebrow}</p>
              <h2>{page.applications.title}</h2>
            </div>
            <div className="pendant-app-grid">
              {page.applications.items.map((item, index) => (
                <article className={`pendant-app-card reveal delay-${index + 1}`} key={item.title}>
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.text}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section custom-section section-dark" id="custom">
          <div className="wrap custom-grid">
            <div className="custom-copy reveal">
              <p className="eyebrow">{page.custom.eyebrow}</p>
              <h2>{page.custom.title}</h2>
              <p>{page.custom.text}</p>
            </div>
            <div className="custom-steps reveal delay-1">
              {page.custom.steps.map((item) => (
                <article key={item.number}><b>{item.number}</b><strong>{item.title}</strong><span>{item.text}</span></article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section section-dark" id="quote">
          <div className="wrap contact-grid">
            <div className="contact-copy reveal">
              <p className="eyebrow">{page.contact.eyebrow}</p>
              <h2>{page.contact.title}</h2>
              <p>{page.contact.text}</p>
              <div className="contact-methods">
                <a href={mailtoHref("Acoustic Pendant Light Inquiry")}>{inquiryEmail}</a>
                <a href="https://wa.me/8615888067484" target="_blank" rel="noopener">WhatsApp: +86 15888067484</a>
              </div>
            </div>

            <form className="inquiry-form reveal delay-1" action={inquiryAction} method="post">
              <InquiryHiddenFields subject="Acoustic Pendant Light Inquiry" />
              <label>{page.contact.form.name}<input type="text" name="Name" placeholder={page.contact.form.placeholders.name} required /></label>
              <label>{page.contact.form.email}<input type="email" name="Email" placeholder={page.contact.form.placeholders.email} required /></label>
              <label>{page.contact.form.country}<input type="text" name="Country" placeholder={page.contact.form.placeholders.country} /></label>
              <label>
                {page.contact.form.productFamily}
                <select name="Product Family">
                  {page.contact.form.options.map((option) => <option key={option}>{option}</option>)}
                </select>
              </label>
              <label className="full">{page.contact.form.message}<textarea name="Message" rows="5" placeholder={page.contact.form.placeholders.message}></textarea></label>
              <button className="btn primary full" type="submit">{page.contact.form.submit}</button>
              <p className="form-note">{page.contact.form.note}</p>
            </form>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} messages={messages} />
    </>
  );
}
