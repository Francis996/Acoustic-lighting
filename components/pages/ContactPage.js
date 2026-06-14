"use client";

import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";

export function ContactPage({ locale, messages, currentPath }) {
  const page = messages.pages.contact;

  return (
    <>
      <SiteHeader locale={locale} currentPath={currentPath} messages={messages} ctaHref="#contact-form" />
      <main className="contact-page">
        <section className="contact-hero section-dark">
          <div className="hero-bg"></div>
          <div className="wrap contact-hero-grid">
            <div className="contact-hero-copy reveal">
              <p className="eyebrow">{page.hero.eyebrow}</p>
              <h1>{page.hero.title}</h1>
              <p>{page.hero.text}</p>
              <div className="contact-hero-actions">
                <a className="btn primary" href="#contact-form">{page.hero.primaryCta}</a>
                <a className="btn glass" href="https://wa.me/8615888067484" target="_blank" rel="noopener">
                  {page.hero.secondaryCta}
                </a>
              </div>
            </div>

            <form className="inquiry-form contact-page-form reveal delay-1" id="contact-form" action="mailto:sales@kingornan.com" method="post" encType="text/plain">
              <div className="form-intro full">
                <span>{page.formIntro.label}</span>
                <strong>{page.formIntro.title}</strong>
              </div>
              <label>{page.form.name}<input type="text" name="Name" placeholder={page.form.placeholders.name} required /></label>
              <label>{page.form.email}<input type="email" name="Email" placeholder={page.form.placeholders.email} required /></label>
              <label>{page.form.company}<input type="text" name="Company" placeholder={page.form.placeholders.company} /></label>
              <label>{page.form.country}<input type="text" name="Country" placeholder={page.form.placeholders.country} /></label>
              <label>
                {page.form.productInterest}
                <select name="Product Interest">
                  {page.form.options.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
              <label>{page.form.quantity}<input type="text" name="Quantity" placeholder={page.form.placeholders.quantity} /></label>
              <label className="full">{page.form.message}<textarea name="Message" rows="5" placeholder={page.form.placeholders.message}></textarea></label>
              <button className="btn primary full" type="submit">{page.form.submit}</button>
              <p className="form-note">{page.form.note}</p>
            </form>
          </div>
        </section>

        <section className="contact-connect-section">
          <div className="wrap">
            <div className="section-head reveal">
              <p className="eyebrow dark">{page.cardsSection.eyebrow}</p>
              <h2>{page.cardsSection.title}</h2>
              <p>{page.cardsSection.text}</p>
            </div>
            <div className="contact-card-grid">
              {page.cardsSection.cards.map((item) => (
                <a className="contact-info-card reveal" href={item.href} key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-address-section section-soft">
          <div className="wrap contact-address-grid">
            <div className="contact-address-copy reveal">
              <p className="eyebrow dark">{page.addressSection.eyebrow}</p>
              <h2>{page.addressSection.title}</h2>
              <p>{page.addressSection.text}</p>
            </div>
            <div className="address-list reveal delay-1">
              {page.addressSection.addresses.map((address) => (
                <article key={`${address.title}-${address.lines[0]}`}>
                  <span>{address.title}</span>
                  {address.lines.map((line) => <p key={line}>{line}</p>)}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-cta-section section-dark">
          <div className="wrap contact-cta-box reveal">
            <div>
              <p className="eyebrow">{page.ctaSection.eyebrow}</p>
              <h2>{page.ctaSection.title}</h2>
            </div>
            <a className="btn primary" href="#contact-form">{page.ctaSection.cta}</a>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} messages={messages} />
    </>
  );
}
