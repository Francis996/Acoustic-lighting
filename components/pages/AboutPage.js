"use client";

import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import { localizeHref } from "../../i18n/routing";

export function AboutPage({ locale, messages, currentPath }) {
  const page = messages.pages.about;

  return (
    <>
      <SiteHeader locale={locale} currentPath={currentPath} messages={messages} />
      <main id="top">
        <section className="about-hero section-dark">
          <div className="wrap about-hero-grid">
            <div className="about-hero-copy reveal">
              <p className="eyebrow">{page.hero.eyebrow}</p>
              <h1>{page.hero.title}</h1>
              <p>{page.hero.lead}</p>
              <div className="hero-actions">
                <a className="btn primary" href={localizeHref(locale, "/contact")}>
                  {page.hero.primaryCta}
                </a>
                <a className="btn glass" href={localizeHref(locale, "/#factory")}>
                  {page.hero.secondaryCta}
                </a>
              </div>
            </div>
            <div className="founder-card reveal delay-1">
              <img
                src="/assets/img/company/alinna.png"
                alt={page.hero.founderImageAlt}
                width="1188"
                height="1400"
                loading="eager"
              />
              <div>
                <span>{page.hero.founderLabel}</span>
                <strong>{page.hero.founderName}</strong>
                <small>{page.hero.founderTitle}</small>
              </div>
            </div>
          </div>
        </section>

        <section className="about-proof">
          <div className="wrap about-proof-grid">
            {page.proof.map((item) => (
              <article key={item.value}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section about-story">
          <div className="wrap split-grid">
            <div className="story-copy reveal">
              <p className="eyebrow dark">{page.story.eyebrow}</p>
              <h2>{page.story.title}</h2>
              {page.story.paragraphs.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
            <div className="quote-panel reveal delay-1">
              <span>{page.story.quoteLabel}</span>
              <blockquote>{page.story.quote}</blockquote>
              <small>{page.story.quoteSource}</small>
            </div>
          </div>
        </section>

        <section className="section section-soft about-values">
          <div className="wrap">
            <div className="section-head reveal">
              <p className="eyebrow dark">{page.values.eyebrow}</p>
              <h2>{page.values.title}</h2>
              <p>{page.values.text}</p>
            </div>
            <div className="value-grid">
              {page.values.items.map((item) => (
                <article key={item.title}>
                  <span>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section about-timeline">
          <div className="wrap">
            <div className="section-head centered reveal">
              <p className="eyebrow dark">{page.timeline.eyebrow}</p>
              <h2>{page.timeline.title}</h2>
            </div>
            <div className="timeline-list">
              {page.timeline.items.map((item) => (
                <article key={item.year}>
                  <strong>{item.year}</strong>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-dark about-cta">
          <div className="wrap about-cta-grid">
            <div className="reveal">
              <p className="eyebrow">{page.cta.eyebrow}</p>
              <h2>{page.cta.title}</h2>
              <p>{page.cta.text}</p>
            </div>
            <a className="btn primary reveal delay-1" href={localizeHref(locale, "/contact")}>
              {page.cta.button}
            </a>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} messages={messages} />
    </>
  );
}
