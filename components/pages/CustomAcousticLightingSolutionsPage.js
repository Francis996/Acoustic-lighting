"use client";

import { useEffect } from "react";
import { ApplicationInquiryForm } from "../ApplicationInquiryForm";
import { InlineContactCta } from "../InlineContactCta";
import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";

const capabilities = [
  {
    title: "Product form and scale",
    text: "Adjust pendant, linear, baffle, ceiling, wall or floor-lamp formats around target room size, ceiling condition and installation method."
  },
  {
    title: "PET felt color and texture",
    text: "Match available PET felt series, project color palettes and sample confirmation requirements before bulk order approval."
  },
  {
    title: "LED and control specification",
    text: "Confirm wattage, lumen output, CCT, CRI, driver, dimming, suspension length and installation accessories for the target market."
  },
  {
    title: "Private label packaging",
    text: "Support carton marks, product labels, instruction details and packaging checks for distributor or brand programs."
  },
  {
    title: "Sample development",
    text: "Create practical samples for appearance, lighting effect, installation and electrical confirmation before production planning."
  },
  {
    title: "Bulk order management",
    text: "Organize production photos, inspection points, packaging confirmation and shipment support for repeatable B2B supply."
  }
];

const solutionTypes = [
  {
    title: "Brand collection development",
    text: "For acoustic lighting brands building a differentiated product line instead of reselling standard catalog models.",
    image: "/assets/img/products/ko-xym-0137/ko-xym-0137-product-main-ai-redraw-1600x1200.webp"
  },
  {
    title: "Project-based specification",
    text: "For contractors, designers and distributors who need a product adjusted around drawings, ceiling plans or room requirements.",
    image: "/assets/img/home/solution-office-acoustic-lighting.webp"
  },
  {
    title: "Market-ready supply",
    text: "For importers who need stable samples, clear quotation scope, packaging details and export-ready batch management.",
    image: "/assets/img/company/kingornan-factory-assembly-line.webp"
  }
];

const productFamilies = [
  {
    title: "Acoustic Pendant Lights",
    text: "Decorative PET felt pendant forms for offices, meeting rooms, hospitality and commercial interiors.",
    href: "/products/acoustic-pendant-lights",
    image: "/assets/img/home/Acoustic Pendant Lights.webp"
  },
  {
    title: "Acoustic Linear Lights",
    text: "Linear and baffle-style acoustic lighting for desks, classrooms, conference rooms and focused work zones.",
    href: "/products/acoustic-linear-lights",
    image: "/assets/img/home/Acoustic Linear Lights.webp"
  },
  {
    title: "Ceiling & Wall Lighting",
    text: "Surface-mounted acoustic lighting concepts for reception areas, circulation spaces and feature zones.",
    href: "/products/acoustic-ceiling-wall-lighting",
    image: "/assets/img/home/Wall Acoustic Lights.webp"
  }
];

const requirementGroups = [
  {
    label: "Product direction",
    value: "Target family, reference model, shape, size, application space and installation method."
  },
  {
    label: "Lighting specification",
    value: "Wattage, lumen output, CCT, CRI, dimming, driver preference and market voltage."
  },
  {
    label: "Material and finish",
    value: "PET felt color, texture, thickness expectation, sample approval method and matching references."
  },
  {
    label: "Order planning",
    value: "Quantity, sample deadline, bulk order timeline, packaging, labeling and destination market."
  }
];

export function CustomAcousticLightingSolutionsPage({ content }) {
  const oem = content.pages.home.oem;

  useEffect(() => {
    document
      .querySelectorAll(".custom-solutions-page .reveal")
      .forEach((element) => element.classList.add("is-visible"));
  }, []);

  return (
    <>
      <SiteHeader content={content} ctaHref="#custom-solution-inquiry" />
      <main className="custom-solutions-page" id="top">
        <section className="custom-solutions-hero section-dark">
          <div className="hero-bg"></div>
          <div className="wrap custom-solutions-hero-grid">
            <div className="custom-solutions-hero-copy reveal">
              <p className="eyebrow">OEM / ODM Acoustic Lighting</p>
              <h1>Custom Acoustic Lighting Solutions</h1>
              <p>
                Develop PET felt acoustic lighting around your brand, project
                drawings, application space and target market instead of staying
                limited to standard catalog items.
              </p>
              <div className="hero-actions">
                <a className="btn primary" href="#custom-solution-inquiry" data-contact-popup>
                  Start custom inquiry
                </a>
                <a className="btn glass" href="#custom-solution-process">
                  View process
                </a>
              </div>
              <div className="custom-solutions-proof" aria-label="Custom acoustic lighting support">
                <span>OEM / ODM development</span>
                <span>PET felt color matching</span>
                <span>Sample to bulk production</span>
              </div>
            </div>

            <div className="custom-solutions-hero-media reveal delay-1">
              <img
                className="custom-solutions-hero-main"
                src="/assets/img/home/banner.webp"
                alt="Custom PET felt acoustic lighting for commercial projects"
                width="1254"
                height="1254"
                loading="eager"
              />
              <div className="custom-solutions-float-card">
                <strong>From concept to sample</strong>
                <span>Then sample to stable bulk production.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="custom-solutions-summary">
          <div className="wrap custom-solutions-summary-grid">
            <article>
              <b>01</b>
              <strong>For brands</strong>
              <span>Create a product family with custom forms, colors, labels and packaging.</span>
            </article>
            <article>
              <b>02</b>
              <strong>For project buyers</strong>
              <span>Match acoustic lighting to drawings, ceiling height, room function and schedule.</span>
            </article>
            <article>
              <b>03</b>
              <strong>For distributors</strong>
              <span>Confirm sample details and prepare repeatable export supply for local markets.</span>
            </article>
          </div>
        </section>

        <section className="section custom-capability-section">
          <div className="wrap">
            <div className="section-head reveal">
              <p className="eyebrow dark">Customization Scope</p>
              <h2>Build the product around the order reality.</h2>
              <p>
                FLOSEEK combines acoustic material selection, lighting engineering
                and manufacturing follow-up so custom work stays practical for
                sampling, quotation and production.
              </p>
            </div>
            <div className="custom-capability-grid">
              {capabilities.map((item, index) => (
                <article className={`custom-capability-card reveal delay-${Math.min(index, 4)}`} key={item.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section custom-solution-types section-soft">
          <div className="wrap">
            <div className="section-head reveal">
              <p className="eyebrow dark">Solution Types</p>
              <h2>Three common ways buyers use custom acoustic lighting.</h2>
            </div>
            <div className="custom-solution-type-list">
              {solutionTypes.map((item, index) => (
                <article className={`custom-solution-type-card reveal delay-${index}`} key={item.title}>
                  <img src={item.image} alt={`${item.title} custom acoustic lighting`} loading="lazy" />
                  <div>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
            <InlineContactCta
              eyebrow="Custom Fit Check"
              title="Have a reference image, drawing or target product idea?"
              text="Send it with quantity, market and timeline. We can check whether it should start from an existing KO model or a new structure."
              cta="Check my idea"
            />
          </div>
        </section>

        <section className="section custom-process-section section-dark" id="custom-solution-process">
          <div className="wrap">
            <div className="section-head light reveal">
              <p className="eyebrow">{oem.eyebrow}</p>
              <h2>{oem.title}</h2>
              <p>{oem.text}</p>
            </div>
            <div className="process-grid custom-process-grid">
              {oem.steps.map((item, index) => (
                <article className={`process-card reveal delay-${index}`} key={item.number}>
                  <span>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
            <div className="custom-tags reveal">
              {oem.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section custom-product-family-section">
          <div className="wrap">
            <div className="section-head reveal">
              <p className="eyebrow dark">Product Starting Points</p>
              <h2>Start from a proven product family, then customize the details.</h2>
              <p>
                Most projects move faster when the custom request begins from an
                existing acoustic pendant, linear, ceiling or wall lighting family.
              </p>
            </div>
            <div className="custom-family-grid">
              {productFamilies.map((item, index) => (
                <a className={`custom-family-card reveal delay-${index}`} href={item.href} key={item.title}>
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <span>View product family</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section custom-requirements-section section-soft">
          <div className="wrap custom-requirements-grid">
            <div className="custom-requirements-copy reveal">
              <p className="eyebrow dark">Inquiry Preparation</p>
              <h2>What to send before sample development.</h2>
              <p>
                A clear first inquiry helps the team confirm feasibility, quotation
                scope and the fastest route from sample to production.
              </p>
            </div>
            <div className="spec-table custom-requirements-table reveal delay-1" role="table" aria-label="Custom acoustic lighting inquiry preparation">
              {requirementGroups.map((row) => (
                <div role="row" key={row.label}>
                  <strong>{row.label}</strong>
                  <span>{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="office-app-cta section-dark" id="custom-solution-inquiry">
          <div className="wrap office-app-cta-grid">
            <div>
              <p className="eyebrow">Custom Project Inquiry</p>
              <h2>Send your custom acoustic lighting requirements.</h2>
              <p>
                Share product direction, quantity, color, lighting specification,
                packaging needs and target market. FLOSEEK will reply with a
                practical development path.
              </p>
            </div>
            <ApplicationInquiryForm
              subject="Custom Acoustic Lighting Solutions Inquiry"
              application="Custom Acoustic Lighting Solutions"
              submitLabel="Send custom inquiry"
            />
          </div>
        </section>
      </main>
      <SiteFooter content={content} />
    </>
  );
}
