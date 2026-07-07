"use client";

import { useEffect } from "react";
import { InlineContactCta } from "../InlineContactCta";
import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import { buildProjectCategories, buildProjects } from "../../lib/projectsData";

export function ProjectsPage({ content }) {
  const projects = buildProjects(content);
  const projectCategories = buildProjectCategories(content);

  useEffect(() => {
    document
      .querySelectorAll(".projects-page .reveal")
      .forEach((element) => element.classList.add("is-visible"));
  }, []);

  return (
    <>
      <SiteHeader content={content} ctaHref="/contact" />
      <main className="projects-page">
        <section className="projects-hero section-dark">
          <div className="hero-bg"></div>
          <div className="wrap projects-hero-grid">
            <div className="projects-hero-copy reveal">
              <p className="eyebrow">Projects</p>
              <h1>Acoustic lighting projects from real application scenarios.</h1>
              <p>
                Browse project pages built directly from FLOSEEK application cases across
                workplaces, education spaces, hospitality interiors and commercial fit-outs.
              </p>
              <div className="hero-actions">
                <a className="btn primary" href="#project-list">View projects</a>
                <a className="btn glass" href="/contact" data-contact-popup>Start a project</a>
              </div>
            </div>
            <div className="projects-hero-media reveal delay-1">
              <img
                src="/assets/img/applications/commercial-interiors/gallery-retail-ko-xym-0139-corrected.png"
                alt="Commercial interior acoustic lighting project with PET Felt pendant lights"
              />
            </div>
          </div>
        </section>

        <section className="section projects-overview">
          <div className="wrap projects-overview-grid">
            <div className="projects-overview-copy reveal">
              <p className="eyebrow dark">Project Library</p>
              <h2>One project index for every generated application case.</h2>
              <p>
                Each project page includes the project brief, application context, project team
                information, product models and practical specification notes for B2B buyers.
              </p>
            </div>
            <div className="project-category-strip reveal delay-1">
              {projectCategories.map((category) => (
                <a href={category.href} key={category.key}>
                  <strong>{category.count}</strong>
                  <span>{category.title}</span>
                </a>
              ))}
            </div>
            <InlineContactCta
              eyebrow="Project Support"
              title="Have a project brief that needs product matching?"
              text="Send space type, drawings, model references and schedule. We will help connect the brief with suitable acoustic lighting options."
              cta="Start project inquiry"
            />
          </div>
        </section>

        <section className="section projects-list-section section-soft" id="project-list">
          <div className="wrap">
            <div className="section-head reveal">
              <p className="eyebrow dark">Selected Projects</p>
              <h2>Project references by application category.</h2>
              <p>
                These project pages reuse the visual assets and case information already generated
                for Applications, then expand each case into a dedicated reference page.
              </p>
            </div>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <article className={`project-card reveal delay-${Math.min((index % 4) + 1, 4)}`} key={project.slug}>
                  <a className="project-card-image" href={project.href} aria-label={project.name}>
                    <img src={project.image} alt={project.alt} loading="lazy" />
                  </a>
                  <div className="project-card-copy">
                    <span>{project.categoryTitle}</span>
                    <h3>{project.name}</h3>
                    <p>{project.brief}</p>
                    <dl>
                      <div><dt>Location</dt><dd>{project.location}</dd></div>
                      <div><dt>Sector</dt><dd>{project.sector}</dd></div>
                      <div><dt>Products</dt><dd>{project.modelCodes}</dd></div>
                    </dl>
                    <a className="project-card-link" href={project.href}>See project</a>
                  </div>
                </article>
              ))}
            </div>
            <InlineContactCta
              eyebrow="Similar Reference"
              title="Found a reference close to your project?"
              text="Tell us the reference page, target quantity and market so our team can prepare quotation guidance for a similar solution."
              cta="Ask about similar project"
            />
          </div>
        </section>
      </main>
      <SiteFooter content={content} />
    </>
  );
}
