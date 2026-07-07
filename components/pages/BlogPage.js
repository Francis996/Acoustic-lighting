"use client";

import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import { InlineContactCta } from "../InlineContactCta";
import { blogArticles } from "../../lib/articlesData";

export function BlogPage({ content }) {
  return (
    <>
      <SiteHeader content={content} />
      <main id="top">
        <section className="about-hero section-dark">
          <div className="wrap about-hero-grid">
            <div className="about-hero-copy reveal">
              <p className="eyebrow">Blog</p>
              <h1>Acoustic lighting guides for project buyers.</h1>
              <p>
                Practical articles for choosing PET felt acoustic pendant lights,
                comparing applications and preparing B2B project specifications.
              </p>
              <div className="hero-actions">
                <a className="btn primary" href="/products/acoustic-pendant-lights">
                  View Product Families
                </a>
                <a className="btn glass" href="/contact" data-contact-popup>
                  Ask for a Quote
                </a>
              </div>
            </div>
            <div className="solution-visual reveal delay-1">
              <img
                src="/assets/img/home/solution-office-acoustic-lighting.webp"
                alt="PET felt acoustic lighting guide for office projects"
                width="1448"
                height="1086"
                loading="eager"
              />
            </div>
          </div>
        </section>

        <section className="section blog-list-section">
          <div className="wrap">
            <div className="blog-list-head reveal">
              <p className="eyebrow dark">Blog Articles</p>
              <h2>Practical guidance for acoustic lighting buyers.</h2>
            </div>
            <div className="blog-post-list">
              {blogArticles.map((post) => (
                <article className="blog-post-card reveal" key={post.title}>
                  <a className="blog-post-image" href={post.href} aria-label={post.title}>
                    <img src={post.image} alt={post.title} loading="lazy" />
                  </a>
                  <div className="blog-post-copy">
                    <div className="blog-post-meta">
                      <span>{post.label}</span>
                      <span>{post.readTime}</span>
                      <span>{post.date}</span>
                    </div>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <a className="blog-post-link" href={post.href}>Read article</a>
                  </div>
                </article>
              ))}
            </div>
            <InlineContactCta
              eyebrow="Reading for a project?"
              title="Send your project notes and ask for a matching product range."
              text="If the articles are close to your application, share room type, quantity, CCT, dimming and color needs for model recommendations."
              cta="Ask for recommendations"
            />
          </div>
        </section>
      </main>
      <SiteFooter content={content} />
    </>
  );
}
