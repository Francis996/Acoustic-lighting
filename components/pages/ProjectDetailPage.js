"use client";

import { useEffect } from "react";
import { InlineContactCta } from "../InlineContactCta";
import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import { buildProjects, getRelatedProjects } from "../../lib/projectsData";
import { mailtoHref } from "../inquiryConfig";

export function ProjectDetailPage({ content, project }) {
  const relatedProjects = getRelatedProjects(buildProjects(content), project);

  useEffect(() => {
    document
      .querySelectorAll(".project-detail-page .reveal")
      .forEach((element) => element.classList.add("is-visible"));
  }, []);

  return (
    <>
      <SiteHeader content={content} ctaHref="/contact" />
      <main className="project-detail-page">
        <section className="project-detail-hero section-dark">
          <div className="wrap project-detail-hero-grid">
            <div className="project-detail-copy reveal">
              <a className="project-back-link" href="/projects">Projects</a>
              <p className="eyebrow">{project.categoryTitle}</p>
              <h1>{project.name}</h1>
              <p>{project.brief}</p>
            </div>
            <div className="project-detail-hero-media reveal delay-1">
              <img src={project.image} alt={project.alt} />
            </div>
          </div>
        </section>

        <section className="section project-story-section">
          <div className="wrap project-story-grid">
            <article className="project-story-copy reveal">
              <p className="eyebrow dark">Project Story</p>
              <h2>Lighting, acoustic surface and interior identity in one project layer.</h2>
              {project.overview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>
            <aside className="project-facts-panel reveal delay-1" aria-label="Project information">
              {project.facts.map((fact) => (
                <div key={fact.label}>
                  <span>{fact.label}</span>
                  <strong>{fact.value}</strong>
                </div>
              ))}
            </aside>
            <InlineContactCta
              eyebrow="Project Match"
              title="Need help adapting this reference to your own space?"
              text="Send your drawings, room type, quantity and preferred models. Sales can confirm suitable product and quotation options."
              cta="Ask about similar project"
            />
          </div>
        </section>

        <section className="project-gallery-section">
          <div className="wrap project-gallery-grid">
            <div className="project-gallery-main reveal">
              <img src={project.image} alt={project.alt} loading="lazy" />
            </div>
            <div className="project-gallery-notes reveal delay-1">
              <p className="eyebrow dark">Specification Notes</p>
              <h2>How the solution was specified.</h2>
              <ul>
                {project.specificationNotes.map((note) => <li key={note}>{note}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="section project-results-section section-soft">
          <div className="wrap project-results-grid">
            <div className="project-results-head reveal">
              <p className="eyebrow dark">Project Outcomes</p>
              <h2>Practical results for the space.</h2>
            </div>
            <div className="project-results-list reveal delay-1">
              {project.results.map((result) => (
                <article key={result}>
                  <span></span>
                  <p>{result}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section project-products-section">
          <div className="wrap">
            <div className="section-head reveal">
              <p className="eyebrow dark">Products Used</p>
              <h2>Acoustic lighting models in this project.</h2>
            </div>
            <div className="project-products-grid">
              {project.models.map((model) => (
                <a className="project-product-card reveal delay-1" href={model.href} key={model.code}>
                  <span>{model.code}</span>
                  <strong>{model.name}</strong>
                  <small>View product details</small>
                </a>
              ))}
            </div>
            <InlineContactCta
              eyebrow="Products Used"
              title="Want pricing for the models used in this case?"
              text="Send model codes, target quantity and market requirements so we can check configuration, color and delivery scope."
              cta="Request model pricing"
            />
          </div>
        </section>

        <section className="section project-related-section section-soft">
          <div className="wrap">
            <div className="section-head reveal">
              <p className="eyebrow dark">More Projects</p>
              <h2>Related acoustic lighting project references.</h2>
            </div>
            <div className="project-related-grid">
              {relatedProjects.map((item) => (
                <a className="project-related-card reveal delay-1" href={item.href} key={item.slug}>
                  <img src={item.image} alt={item.alt} loading="lazy" />
                  <span>{item.categoryTitle}</span>
                  <strong>{item.name}</strong>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="office-app-cta section-dark">
          <div className="wrap office-app-cta-grid">
            <div>
              <p className="eyebrow">Project Inquiry</p>
              <h2>Share your ceiling plan and target product models.</h2>
              <p>
                FLOSEEK can help confirm PET Felt color, size, CCT, dimming, suspension
                and packaging details for similar acoustic lighting projects.
              </p>
            </div>
            <div className="office-app-cta-actions">
              <a className="btn primary" href={mailtoHref(`Project inquiry: ${project.name}`)} data-contact-popup>
                Request project support
              </a>
              <a className="office-email-link" href={project.categoryHref}>
                View {project.categoryTitle}
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter content={content} />
    </>
  );
}
