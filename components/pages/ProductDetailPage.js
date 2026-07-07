"use client";

import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import { MaterialColorSection } from "../MaterialColorSection";
import { InlineContactCta } from "../InlineContactCta";
import { InquiryHiddenFields, PhoneWhatsAppField, inquiryAction, inquiryEmail, mailtoHref } from "../inquiryConfig";

const fallbackImages = {
  heroImage: "/assets/img/products/ko-xym-0137/ko-xym-0137-hero-showcase-v2.webp",
  lineDrawing: "/assets/img/products/ko-xym-0137/ko-xym-0137-line-drawing-updated.webp"
};

const fallbackScenes = [
  {
    src: "/assets/img/products/ko-xym-0137/ko-xym-0137-scene-office-enhanced.webp",
    alt: "KO-XYM-0137 acoustic pendant lights installed in an office workspace",
    label: "Office workspace installation"
  },
  {
    src: "/assets/img/products/ko-xym-0137/ko-xym-0137-scene-meeting-enhanced.webp",
    alt: "KO-XYM-0137 acoustic pendant light above a meeting table",
    label: "Meeting room pendant layout"
  }
];

const fallbackRelatedProducts = [
  {
    href: "/products/acoustic-pendant-lights/ko-xym-0185-drum-pendant",
    image: "/assets/img/pendant/ko-xym-0185-drum.jpeg",
    name: "KO-XYM-0185 Drum Pendant",
    text: "Cylindrical PET felt pendant for office, retail and hospitality areas."
  },
  {
    href: "/products/acoustic-pendant-lights/ko-xym-0121-disc-felt-pendant",
    image: "/assets/img/pendant/ko-xym-0121-dome-disc.jpeg",
    name: "KO-XYM-0121 Dome Disc Pendant",
    text: "Soft circular acoustic pendant family for lounge and meeting zones."
  },
  {
    href: "/products/acoustic-pendant-lights",
    image: "/assets/img/pendant/ko-xym-0048-petal.jpeg",
    name: "KO-XYM-0048 Petal Pendant",
    text: "Decorative PET felt pendant style for layered acoustic lighting plans."
  }
];

export function ProductDetailPage({ content, product }) {
  const productDefaults = {
    primaryCta: "Request Quote",
    secondaryCta: "Technical Data",
    quickSpecsAriaLabel: "Key specifications",
    quote: {
      title: "Request Product Details",
      text: "Send size, quantity, color, CCT, dimming and destination market. Our team will confirm configuration and quotation details.",
      primaryCta: "Email Sales",
      secondaryCta: "WhatsApp: +86 15888067484"
    },
    related: {
      title: "Related Products",
      text: "Use these related models as comparison options for acoustic lighting projects."
    },
    relatedProducts: []
  };
  const page = product ? {
    ...productDefaults,
    ...product,
    quote: { ...productDefaults.quote, ...(product.quote || {}) },
    related: { ...productDefaults.related, ...(product.related || {}) },
    relatedProducts: product.relatedProducts || productDefaults.relatedProducts
  } : {
    ...content.pages.productDetail,
    model: "KO-XYM-0137",
    heroImage: fallbackImages.heroImage,
    lineDrawing: fallbackImages.lineDrawing,
    scenes: {
      ...content.pages.productDetail.scenes,
      images: fallbackScenes
    },
    relatedProducts: fallbackRelatedProducts
  };
  const productFamily = page.productFamily || "Acoustic Pendant Lights";
  const inquirySubject = `${page.model || page.code} ${productFamily} Inquiry`;

  return (
    <>
      <SiteHeader content={content} ctaHref="#product-inquiry" />
      <main className="product-template-page">
        <section className="simple-product-hero">
          <div className="wrap simple-product-grid">
            <div className="simple-product-media">
              <img src={page.heroImage} alt={page.heroImageAlt} />
            </div>
            <div className="simple-product-info">
              <a className="simple-breadcrumb" href={page.breadcrumbHref || "/products/acoustic-pendant-lights"}>{page.breadcrumb}</a>
              <p className="simple-product-code">{page.code}</p>
              <h1>{page.title}</h1>
              <p>{page.text}</p>
              <div className="simple-actions">
                <a className="btn primary" href="#product-inquiry" data-contact-popup>{page.primaryCta}</a>
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
              <img src={page.lineDrawing} alt={page.lineDrawingAlt} loading="lazy" />
            </div>
            <InlineContactCta
              eyebrow="Model Check"
              title={`Need a quotation or drawing support for ${page.model || page.code}?`}
              text="Send quantity, color, CCT, dimming, voltage and destination market so sales can confirm the practical configuration."
              cta="Ask about this model"
            />
          </div>
        </section>

        <section className="simple-product-section product-scene-section">
          <div className="wrap">
            <div className="simple-section-head reveal">
              <h2>{page.scenes.title}</h2>
              <p>{page.scenes.text}</p>
            </div>
            <div className="product-scene-grid">
              {page.scenes.images.map((image, index) => (
                <article className={`product-scene-card reveal delay-${Math.min(index, 3)}`} key={image.src}>
                  <img src={image.src} alt={image.alt} loading="lazy" />
                  <span>{image.label}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="simple-product-section simple-product-soft" id="technical">
          <div className="wrap">
            <div className="simple-section-head reveal">
              <h2>{page.technical.title}</h2>
              {page.technical.text ? <p>{page.technical.text}</p> : null}
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
              <a className="btn primary" href={mailtoHref(inquirySubject)} data-contact-popup>{page.quote.primaryCta}</a>
              <a className="simple-text-link" href="https://wa.me/8615888067484" target="_blank" rel="noopener">{page.quote.secondaryCta}</a>
            </div>
          </div>
        </section>

        <MaterialColorSection text={page.materials.text} />

        <section className="simple-product-section simple-product-soft">
          <div className="wrap">
            <div className="simple-section-head reveal">
              <h2>{page.related.title}</h2>
              <p>{page.related.text}</p>
            </div>
            <div className="related-grid product-related-grid">
              {page.relatedProducts.map((product) => (
                <a className="related-card reveal" href={product.href} key={product.name}>
                  <img src={product.image} alt={product.name} loading="lazy" />
                  <strong>{product.name}</strong>
                  <span>{product.text}</span>
                </a>
              ))}
            </div>
            <InlineContactCta
              eyebrow="Product Comparison"
              title="Comparing this model with related acoustic lighting options?"
              text="Send the model shortlist and project use. We can help compare size, light source, material and quotation scope."
              cta="Compare models"
            />
          </div>
        </section>

        <section className="contact-section section-dark product-inquiry-section" id="product-inquiry">
          <div className="wrap contact-grid">
            <div className="contact-copy reveal">
              <p className="eyebrow">{page.inquiry.eyebrow}</p>
              <h2>{page.inquiry.title}</h2>
              <p>{page.inquiry.text}</p>
              <div className="contact-methods">
                <a href={mailtoHref(inquirySubject)}>{inquiryEmail}</a>
                <a href="https://wa.me/8615888067484" target="_blank" rel="noopener">WhatsApp: +86 15888067484</a>
              </div>
            </div>

            <form className="inquiry-form reveal delay-1" action={inquiryAction} method="post">
              <InquiryHiddenFields subject={inquirySubject} />
              <label>Name<input type="text" name="Name" placeholder="Your name" required /></label>
              <label>Email<input type="email" name="Email" placeholder="name@company.com" required /></label>
              <PhoneWhatsAppField />
              <label>Country / Market<input type="text" name="Country" placeholder="Project country" /></label>
              <label>
                Product family
                <select name="Product Family" defaultValue={productFamily}>
                  <option>Acoustic Pendant Lights</option>
                  <option>Acoustic Linear Lights</option>
                  <option>Acoustic Ceiling & Wall Lighting</option>
                  <option>Acoustic Floor Lamps</option>
                </select>
              </label>
              <label>Target quantity<input type="text" name="Quantity" placeholder="Example: 20 pcs / 1 project" /></label>
              <label>Preferred configuration<input type="text" name="Configuration" placeholder="Size, CCT, dimming, color" /></label>
              <label className="full">Project notes<textarea name="Message" rows="5" placeholder="Share room type, ceiling height, drawing status, deadline and certificate requirements."></textarea></label>
              <button className="btn primary full" type="submit">Submit {page.model || page.code} Inquiry</button>
              <p className="form-note">After submitting, your inquiry will be sent directly to the sales team.</p>
            </form>
          </div>
        </section>
      </main>
      <SiteFooter content={content} />
    </>
  );
}
