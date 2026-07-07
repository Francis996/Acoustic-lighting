import { notFound } from "next/navigation";
import content from "../../../content/siteContent.json";
import { ArticleBrandCard } from "../../../components/ArticleBrandCard";
import { SiteFooter } from "../../../components/SiteFooter";
import { SiteHeader } from "../../../components/SiteHeader";
import { mailtoHref } from "../../../components/inquiryConfig";
import { absoluteUrl, createPageMetadata } from "../../../lib/metadata";
import {
  getNewsArticle,
  getRelatedNewsArticles,
  newsArticles
} from "../../../lib/newsData";

export function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getNewsArticle(slug);

  if (!article) {
    return {};
  }

  return createPageMetadata({
    pathname: article.href,
    title: `${article.title} | FLOSEEK Industry News`,
    description: article.excerpt,
    images: [{ url: article.image }]
  });
}

export default async function Page({ params }) {
  const { slug } = await params;
  const article = getNewsArticle(slug);

  if (!article) {
    notFound();
  }

  const related = getRelatedNewsArticles(article.slug);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.excerpt,
    image: absoluteUrl(article.image),
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: {
      "@type": "Organization",
      name: "FLOSEEK Acoustic Lighting"
    },
    publisher: {
      "@type": "Organization",
      name: "FLOSEEK Acoustic Lighting",
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/assets/img/brand/floseek-logo-header.png")
      }
    },
    mainEntityOfPage: absoluteUrl(article.href),
    citation: article.source.url
  };

  return (
    <>
      <SiteHeader content={content} ctaHref="#quote" />
      <main id="top" className="blog-article-page">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />

        <section className="article-hero section-dark">
          <div className="wrap article-hero-grid">
            <div className="article-hero-copy reveal">
              <p className="eyebrow">{article.label}</p>
              <h1>{article.title}</h1>
              <p>{article.heroLead}</p>
              <div className="hero-actions">
                <a className="btn primary" href="#quote" data-contact-popup>
                  Ask About This Trend
                </a>
                <a className="btn glass" href="/news">
                  Back to News
                </a>
              </div>
            </div>
            <figure className="article-hero-media reveal delay-1">
              <img
                src={article.image}
                alt={article.title}
                width="1200"
                height="900"
                loading="eager"
              />
              <figcaption>
                Industry news summarized for acoustic lighting specification and B2B project planning.
              </figcaption>
            </figure>
          </div>
        </section>

        <div className="article-content-layout wrap">
          <article className="article-body">
            <div className="article-meta reveal">
              <span>{article.publishedDisplay}</span>
              <span>{article.readTime}</span>
              <span>Source: {article.source.publisher}</span>
            </div>

            <section className="article-section reveal">
              <h2>Industry Source</h2>
              <div className="article-source-card">
                <span>{article.source.publisher}</span>
                <h3>{article.source.title}</h3>
                <p>Published: {article.source.publishedDisplay}</p>
                <a href={article.source.url} target="_blank" rel="noopener noreferrer">
                  View original source
                </a>
              </div>
            </section>

            <section className="article-section reveal">
              <h2>News Summary</h2>
              {article.newsSummary.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <ul className="article-takeaway-list">
                {article.summaryBullets.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </section>

            <section className="article-section reveal">
              <h2>FLOSEEK Interpretation</h2>
              {article.floseekInterpretation.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>

            <section className="article-section reveal">
              <h2>Impact on Acoustic Lighting</h2>
              {article.industryImpact.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>

            <section className="related-articles reveal" aria-labelledby="related-news-title">
              <div className="related-articles-head">
                <p className="eyebrow">Related News</p>
                <h2 id="related-news-title">More acoustic lighting industry signals.</h2>
              </div>
              <div className="related-article-grid news-related-grid">
                {related.map((item) => (
                  <article className="related-article-card" key={item.href}>
                    <a className="related-article-image" href={item.href} aria-label={item.title}>
                      <img src={item.image} alt={item.title} loading="lazy" />
                    </a>
                    <div className="related-article-copy">
                      <div className="related-article-meta">
                        <span>{item.label}</span>
                        <span>{item.publishedDisplay}</span>
                      </div>
                      <h3>
                        <a href={item.href}>{item.title}</a>
                      </h3>
                      <p>{item.excerpt}</p>
                      <a className="related-article-link" href={item.href}>
                        Read industry note
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="article-final-cta reveal" id="quote">
              <p className="eyebrow">Apply This Trend</p>
              <h2>Need acoustic lighting options for a current project?</h2>
              <p>
                Send drawings, room type, target quantity, PET felt color, CCT and dimming needs.
                FLOSEEK can recommend project-ready acoustic lighting options.
              </p>
              <div className="hero-actions">
                <a
                  className="btn primary"
                  href={mailtoHref(`Acoustic Lighting Inquiry - ${article.title}`)}
                  data-contact-popup
                >
                  Send Requirements
                </a>
                <a className="btn glass" href="/products">
                  View Products
                </a>
              </div>
            </section>
          </article>
          <ArticleBrandCard />
        </div>
      </main>
      <SiteFooter content={content} />
    </>
  );
}
