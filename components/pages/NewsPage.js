"use client";

import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import { InlineContactCta } from "../InlineContactCta";
import { newsArticles } from "../../lib/newsData";

export function NewsPage({ content }) {
  const sortedNewsArticles = [...newsArticles].sort((first, second) =>
    second.publishedAt.localeCompare(first.publishedAt)
  );

  return (
    <>
      <SiteHeader content={content} />
      <main id="top">
        <section className="about-hero section-dark">
          <div className="wrap about-hero-grid">
            <div className="about-hero-copy reveal">
              <p className="eyebrow">News</p>
              <h1>Acoustic lighting industry news.</h1>
              <p>
                Current lighting, acoustics and interior design updates translated
                into practical notes for PET felt acoustic lighting buyers.
              </p>
              <div className="hero-actions">
                <a className="btn primary" href="#latest-news">
                  Read Latest News
                </a>
                <a className="btn glass" href="/contact" data-contact-popup>
                  Contact Sales
                </a>
              </div>
            </div>
            <div className="solution-visual reveal delay-1">
              <img
                src="/assets/img/home/solution-office-acoustic-lighting.webp"
                alt="Acoustic lighting industry news for commercial interiors"
                width="1200"
                height="800"
                loading="eager"
              />
            </div>
          </div>
        </section>

        <section className="section blog-list-section" id="latest-news">
          <div className="wrap">
            <div className="blog-list-head reveal">
              <p className="eyebrow dark">Latest Industry News</p>
              <h2>Fresh signals for acoustic lighting project buyers.</h2>
              <p>
                Sourced from current industry coverage, then summarized through
                a FLOSEEK acoustic lighting and B2B project specification lens.
              </p>
            </div>
            <div className="blog-post-list">
              {sortedNewsArticles.map((post) => (
                <article className="blog-post-card reveal" key={post.href}>
                  <a className="blog-post-image" href={post.href} aria-label={post.title}>
                    <img src={post.image} alt={post.title} loading="lazy" />
                  </a>
                  <div className="blog-post-copy">
                    <div className="blog-post-meta">
                      <span>{post.label}</span>
                      <span>{post.readTime}</span>
                      <span>{post.publishedDisplay}</span>
                      <span>{post.source.publisher}</span>
                    </div>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <a className="blog-post-link" href={post.href}>
                      Read industry note
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <InlineContactCta
              eyebrow="News Follow-up"
              title="Want to connect an industry trend with a project quotation?"
              text="Send the application, quantity, CCT, dimming requirement and PET felt color target. Sales can recommend matching acoustic lighting options."
              cta="Contact sales"
            />
          </div>
        </section>
      </main>
      <SiteFooter content={content} />
    </>
  );
}
