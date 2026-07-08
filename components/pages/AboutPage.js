"use client";

import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import { InlineContactCta } from "../InlineContactCta";

const factoryProductionImages = [
  {
    src: "/assets/img/company/factory-candidates/acoustic-factory-candidate-04.png",
    alt: "Acoustic pendant light assembly line in the FLOSEEK factory",
    label: "Pendant assembly"
  },
  {
    src: "/assets/img/company/kingornan-factory-workshop.webp",
    alt: "FLOSEEK lighting factory workshop with assembly benches",
    label: "Real workshop"
  },
  {
    src: "/assets/img/company/factory-candidates/acoustic-factory-candidate-06.png",
    alt: "Round acoustic ceiling and wall light electrical testing in the FLOSEEK factory",
    label: "Electrical testing"
  },
  {
    src: "/assets/img/company/kingornan-factory-assembly-line.webp",
    alt: "FLOSEEK lighting products moving through the assembly line",
    label: "Factory line"
  },
  {
    src: "/assets/img/company/factory-candidates/acoustic-factory-candidate-07.png",
    alt: "PET felt preparation for acoustic linear lighting production",
    label: "PET felt preparation"
  },
  {
    src: "/assets/img/company/kingornan-factory-workbench.webp",
    alt: "FLOSEEK workers assembling lighting products at workshop benches",
    label: "Bench assembly"
  },
  {
    src: "/assets/img/company/factory-candidates/acoustic-factory-candidate-08.png",
    alt: "Acoustic linear light packing line in the FLOSEEK factory",
    label: "Linear light packing"
  },
  {
    src: "/assets/img/company/kingornan-factory-cutting.webp",
    alt: "FLOSEEK workshop cutting and preparing lighting panels",
    label: "Material cutting"
  },
  {
    src: "/assets/img/company/factory-candidates/acoustic-factory-candidate-09.png",
    alt: "Acoustic pendant light wiring preparation in the FLOSEEK factory",
    label: "Wiring preparation"
  },
  {
    src: "/assets/img/company/kingornan-factory-aging-test.jpg",
    alt: "FLOSEEK lighting aging test process",
    label: "Aging test"
  },
  {
    src: "/assets/img/company/kingornan-factory-laboratory.jpg",
    alt: "FLOSEEK lighting laboratory testing equipment",
    label: "Testing laboratory"
  }
];

const factoryCarouselImages = [...factoryProductionImages, ...factoryProductionImages];

const factorySteps = [
  {
    title: "PET felt processing",
    text: "Cutting, trimming and surface checks for felt parts before assembly."
  },
  {
    title: "Lighting assembly",
    text: "Drivers, diffusers, suspension parts and acoustic bodies are matched by order."
  },
  {
    title: "Testing and packing",
    text: "Electrical inspection, finish checks and export packing are handled before shipment."
  }
];

export function AboutPage({ content }) {
  const page = content.pages.about;

  return (
    <>
      <SiteHeader content={content} />
      <main id="top">
        <section className="about-hero section-dark">
          <div className="wrap about-hero-grid">
            <div className="about-hero-copy reveal">
              <p className="eyebrow">{page.hero.eyebrow}</p>
              <h1>{page.hero.title}</h1>
              <p>{page.hero.lead}</p>
              <div className="hero-actions">
                <a className="btn primary" href="/contact" data-contact-popup>
                  {page.hero.primaryCta}
                </a>
                <a className="btn glass" href="#factory">
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
              <p className="brand-parent-note">
                FLOSEEK is an acoustic lighting brand under{" "}
                <a href="https://www.kingornan.com/" target="_blank" rel="noopener noreferrer">
                  KingOrnan
                </a>
                , officially registered in 2025 after KingOrnan began acoustic lighting development in 2024.
              </p>
            </div>
            <div className="quote-panel reveal delay-1">
              <span>{page.story.quoteLabel}</span>
              <blockquote>{page.story.quote}</blockquote>
              <small>{page.story.quoteSource}</small>
            </div>
          </div>
        </section>

        <section className="section section-soft about-factory" id="factory">
          <div className="wrap">
            <div className="about-factory-head reveal">
              <p className="eyebrow dark">Factory Capability</p>
              <h2>Real production support for acoustic lighting orders.</h2>
              <p>
                From PET felt preparation to lighting assembly, testing and packing,
                FLOSEEK supports acoustic lighting projects with in-house workshop
                coordination and export-ready processes.
              </p>
            </div>
            <div className="about-factory-layout">
              <div className="about-factory-gallery reveal" aria-label="Factory production carousel">
                <div className="about-factory-track">
                  {factoryCarouselImages.map((image, index) => (
                    <figure key={`${image.src}-${index}`}>
                      <img src={image.src} alt={image.alt} width="900" height="675" loading="lazy" />
                      <figcaption>{image.label}</figcaption>
                    </figure>
                  ))}
                </div>
              </div>
              <aside className="about-factory-panel reveal delay-1">
                <h3>Built for project and B2B supply.</h3>
                <p>
                  Our factory team prepares acoustic lighting orders around clear product
                  models, finish requirements, sample checks and project delivery needs.
                </p>
                <ul>
                  {factorySteps.map((step) => (
                    <li key={step.title}>
                      <strong>{step.title}</strong>
                      <span>{step.text}</span>
                    </li>
                  ))}
                </ul>
                <a className="btn primary" href="/contact" data-contact-popup>
                  Ask about factory capability
                </a>
              </aside>
            </div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="wrap">
            <InlineContactCta
              eyebrow="Company Support"
              title="Need factory, OEM or project supply information?"
              text="Send your product category, target quantity and market requirements. Our sales team can confirm capability, samples and quotation scope."
              cta="Talk to sales"
            />
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
            <InlineContactCta
              eyebrow="B2B Cooperation"
              title="Checking whether FLOSEEK fits your acoustic lighting project?"
              text="Share your project stage, drawings or sourcing plan. We will route product, production and engineering questions to the right team."
              cta="Send cooperation inquiry"
            />
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
            <a className="btn primary reveal delay-1" href="/contact" data-contact-popup>
              {page.cta.button}
            </a>
          </div>
        </section>
      </main>
      <SiteFooter content={content} />
    </>
  );
}
