"use client";

import { useEffect } from "react";
import { ApplicationInquiryForm } from "../ApplicationInquiryForm";
import { InlineContactCta } from "../InlineContactCta";
import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";

export function EducationSpacesPage({ content }) {
  const page = content.pages.educationSpaces;

  useEffect(() => {
    document
      .querySelectorAll(".office-app-page .reveal")
      .forEach((element) => element.classList.add("is-visible"));
  }, []);

  return (
    <>
      <SiteHeader content={content} ctaHref="#education-project-support" />
      <main className="office-app-page">
        <section className="office-app-hero section-dark">
          <div className="hero-bg"></div>
          <div className="wrap office-app-hero-grid">
            <div className="office-app-hero-copy reveal">
              <p className="eyebrow">{page.hero.eyebrow}</p>
              <h1>{page.hero.title}</h1>
              <p>{page.hero.text}</p>
              <div className="hero-actions">
                <a className="btn primary" href="#education-project-support" data-contact-popup>{page.hero.primaryCta}</a>
                <a className="btn glass" href="#education-cases">{page.hero.secondaryCta}</a>
              </div>
              <div className="office-app-proof" aria-label="Education acoustic lighting spaces">
                {page.hero.proof.map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>
            <div className="office-app-hero-media reveal delay-1">
              <img src={page.hero.image} alt={page.hero.imageAlt} />
            </div>
          </div>
        </section>

        <section className="section office-app-intro">
          <div className="wrap office-app-intro-grid">
            <div className="office-app-intro-copy reveal">
              <p className="eyebrow dark">{page.intro.eyebrow}</p>
              <h2>{page.intro.title}</h2>
              <p>{page.intro.text}</p>
            </div>
            <div className="office-app-intro-list reveal delay-1">
              {page.intro.items.map((item) => (
                <article key={item.title}>
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </article>
              ))}
            </div>
            <InlineContactCta
              eyebrow="Education Layout Review"
              title="Need acoustic lighting suggestions for classrooms or learning spaces?"
              text="Send room type, ceiling height, desk layout and quantity so we can suggest practical acoustic lighting options."
              cta="Review education space"
            />
          </div>
        </section>

        <section className="section office-case-section section-soft" id="education-cases">
          <div className="wrap">
            <div className="section-head reveal">
              <p className="eyebrow dark">{page.cases.eyebrow}</p>
              <h2>{page.cases.title}</h2>
              <p>{page.cases.text}</p>
            </div>
            <div className="office-case-list">
              {page.cases.items.map((project, index) => (
                <article className={`office-case-card reveal delay-${Math.min(index + 1, 4)}`} key={project.name}>
                  <div className="office-case-image">
                    <img src={project.image} alt={project.alt} loading="lazy" />
                  </div>
                  <div className="office-case-body">
                    <span>{project.location}</span>
                    <h3>{project.name}</h3>
                    <p>{project.brief}</p>
                    <dl>
                      <div><dt>Sector</dt><dd>{project.sector}</dd></div>
                      <div><dt>Project team</dt><dd>{project.designRole}</dd></div>
                      <div>
                        <dt>Product model</dt>
                        <dd className="office-model-links">
                          {project.models.map((model) => (
                            <a href={model.href} key={`${project.name}-${model.code}`}>
                              <b>{model.code}</b>
                              <span>{model.name}</span>
                            </a>
                          ))}
                        </dd>
                      </div>
                      <div><dt>Lighting scope</dt><dd>{project.product}</dd></div>
                    </dl>
                    <ul>
                      {project.results.map((result) => <li key={result}>{result}</li>)}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
            <InlineContactCta
              eyebrow="Education Project"
              title="Planning a similar classroom, library or study area project?"
              text="Share the target space, product references and timeline. We will confirm suitable models and quotation scope."
              cta="Discuss education project"
            />
          </div>
        </section>

        <section className="section office-spec-section">
          <div className="wrap office-spec-grid">
            <div className="spec-card reveal">
              <p className="eyebrow dark">{page.spec.eyebrow}</p>
              <h2>{page.spec.title}</h2>
            </div>
            <div className="spec-table reveal delay-1" role="table" aria-label="Education acoustic lighting specification notes">
              {page.spec.rows.map((row) => (
                <div role="row" key={row.label}><strong>{row.label}</strong><span>{row.value}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="office-app-cta section-dark" id="education-project-support">
          <div className="wrap office-app-cta-grid">
            <div>
              <p className="eyebrow">{page.cta.eyebrow}</p>
              <h2>{page.cta.title}</h2>
              <p>{page.cta.text}</p>
            </div>
            <ApplicationInquiryForm
              subject="Education Spaces Acoustic Lighting Inquiry"
              application={page.hero.eyebrow}
              submitLabel={page.cta.button}
            />
          </div>
        </section>
      </main>
      <SiteFooter content={content} />
    </>
  );
}
