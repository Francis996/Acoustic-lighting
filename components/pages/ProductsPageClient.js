"use client";

import { useMemo, useState } from "react";
import { InlineContactCta } from "../InlineContactCta";

const allRoute = "all";

function scrollToProducts() {
  window.requestAnimationFrame(() => {
    document.getElementById("all-products")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

export function ProductsPageClient({ categories, allProducts }) {
  const [selectedRoute, setSelectedRoute] = useState(allRoute);

  const selectedCategory = categories.find((category) => category.route === selectedRoute);
  const visibleProducts = useMemo(() => {
    if (selectedRoute === allRoute) return allProducts;
    return allProducts.filter((product) => product.categoryRoute === selectedRoute);
  }, [allProducts, selectedRoute]);

  const showAllProducts = () => {
    setSelectedRoute(allRoute);
    scrollToProducts();
  };

  const showCategoryProducts = (route) => {
    setSelectedRoute(route);
    scrollToProducts();
  };

  return (
    <main className="products-index-page">
      <section className="products-index-hero">
        <div className="wrap products-index-hero-grid">
          <div className="products-index-copy reveal">
            <p className="eyebrow">Product Range</p>
            <h1>Products</h1>
            <p>
              Browse FLOSEEK PET felt acoustic lighting and acoustic product models by the current product
              categories. Each model links to its Products detail page for project review and quotation support.
            </p>
            <div className="hero-actions">
              <button className="btn primary" type="button" onClick={showAllProducts}>View All Models</button>
              <a className="btn glass" href="/contact" data-contact-popup>Send Product Inquiry</a>
            </div>
            <div className="hero-proof" aria-label="Products overview">
              <div>
                <strong>{allProducts.length}</strong>
                <span>Product models</span>
              </div>
              <div>
                <strong>{categories.length}</strong>
                <span>Current categories</span>
              </div>
              <div>
                <strong>KO</strong>
                <span>Model detail pages</span>
              </div>
            </div>
          </div>
          <div className="products-index-showcase reveal delay-1" aria-label="FLOSEEK product category preview">
            <div className="products-showcase-note">
              <strong>View category landing pages</strong>
              <span>Open the full series introduction page.</span>
            </div>
            {categories.slice(0, 4).map((category, index) => (
              <a
                className={`products-showcase-item item-${index + 1}${selectedRoute === category.route ? " is-active" : ""}`}
                href={category.route}
                key={category.route}
              >
                <div className="products-showcase-media">
                  <img src={category.image} alt={`${category.title} product preview`} />
                </div>
                <span>{category.title}</span>
                <em>View landing page</em>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="products-index-categories">
        <div className="wrap">
          <div className="products-count-row reveal">
            <strong>Number of results: {visibleProducts.length}</strong>
            <span>{selectedCategory ? `${selectedCategory.title} models` : "Filter model cards by category"}</span>
          </div>
          <div className="products-category-grid">
            {categories.map((category, index) => (
              <button
                className={`products-category-card${selectedRoute === category.route ? " is-active" : ""}`}
                type="button"
                onClick={() => showCategoryProducts(category.route)}
                key={category.route}
              >
                <img
                  src={category.filterImage || category.image}
                  alt={`${category.title} model card preview`}
                  loading="lazy"
                />
                <div>
                  <p>{String(index + 1).padStart(2, "0")}</p>
                  <strong>{category.title}</strong>
                  <small>{category.text}</small>
                </div>
                <em>{category.productCount} models</em>
                <b>Show model cards</b>
              </button>
            ))}
          </div>
          <InlineContactCta
            eyebrow="Category Selection"
            title="Not sure which product family fits your project?"
            text="Send room type, installation condition and quantity. We will point you to the most suitable acoustic lighting category."
            cta="Ask for category advice"
          />
        </div>
      </section>

      <section className="products-result-section" id="all-products">
        <div className="wrap">
          <div className="products-result-head reveal">
            <div>
              <p className="eyebrow dark">{selectedCategory ? selectedCategory.title : "All Products"}</p>
              <h2>{selectedCategory ? `${selectedCategory.title} models` : "All product models"}</h2>
              <p>
                {selectedCategory
                  ? `${visibleProducts.length} models are shown for this series. Click a model card to open its detail page.`
                  : "Grouped through the existing Products routes, with every card linking to its own model detail page."}
              </p>
            </div>
            {selectedCategory ? (
              <button className="btn primary" type="button" onClick={showAllProducts}>View all products</button>
            ) : (
              <a className="btn primary" href="/contact" data-contact-popup>Send model list</a>
            )}
          </div>

          <div className="products-result-grid">
            {visibleProducts.map((product) => (
              <a className="products-result-card" href={product.href} key={`${product.categoryRoute}-${product.slug}`}>
                <div className="products-result-image">
                  <img src={product.heroImage} alt={product.heroImageAlt} loading="lazy" />
                </div>
                <div className="products-result-body">
                  <span>{product.categoryTitle}</span>
                  <strong>{product.model}</strong>
                  <p>{product.title}</p>
                </div>
              </a>
            ))}
          </div>
          <InlineContactCta
            eyebrow="Model List"
            title="Want a quotation for several KO models together?"
            text="Send selected model codes, quantity, CCT, dimming and felt color. We will check availability and pricing scope."
            cta="Send selected models"
          />
        </div>
      </section>
    </main>
  );
}
