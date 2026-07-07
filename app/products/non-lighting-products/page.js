import { SiteFooter } from "../../../components/SiteFooter";
import { SiteHeader } from "../../../components/SiteHeader";
import { InlineContactCta } from "../../../components/InlineContactCta";
import content from "../../../content/siteContent.json";
import { getProductDetailsByRoute } from "../../../content/productDetails";
import { createPageMetadata } from "../../../lib/metadata";

const pathname = "/products/non-lighting-products";
const products = getProductDetailsByRoute(pathname);

export function generateMetadata() {
  return createPageMetadata({
    pathname,
    title: "Non-lighting Acoustic Products | PET Felt Acoustic Product Supplier | FLOSEEK",
    description: "Browse FLOSEEK non-lighting PET felt acoustic product models with local exact-model assets and B2B quotation support.",
    images: [{ url: "/assets/img/linear/felt-material-stack.webp" }]
  });
}

export default function Page() {
  return (
    <>
      <SiteHeader content={content} ctaHref="/contact" />
      <main className="product-template-page">
        <section className="simple-product-hero">
          <div className="wrap simple-product-grid">
            <div className="simple-product-info">
              <p className="simple-product-code">PET Felt Acoustic Products</p>
              <h1>Non-lighting acoustic product models.</h1>
              <p>Exact-model local assets for PET felt acoustic products that are not categorized as lighting fixtures.</p>
              <div className="simple-actions">
                <a className="btn primary" href="/contact" data-contact-popup>Ask for acoustic product quote</a>
                <a className="btn secondary" href="#non-lighting-models">View models</a>
              </div>
            </div>
          </div>
        </section>
        <section className="simple-product-section" id="non-lighting-models">
          <div className="wrap related-grid product-related-grid">
            {Object.entries(products).map(([slug, product]) => (
              <a className="related-card" href={`${pathname}/${slug}`} key={slug}>
                <img src={product.heroImage} alt={product.heroImageAlt} loading="lazy" />
                <strong>{product.model}</strong>
                <span>{product.text}</span>
                <small>View product details</small>
              </a>
            ))}
            <InlineContactCta
              eyebrow="PET Felt Products"
              title="Need material, color, size or packaging confirmation?"
              text="Send the model, quantity, target use and destination market. We will confirm quotation scope for non-lighting acoustic products."
              cta="Ask about PET felt products"
            />
          </div>
        </section>
      </main>
      <SiteFooter content={content} />
    </>
  );
}
