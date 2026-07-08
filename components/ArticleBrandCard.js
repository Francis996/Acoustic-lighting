import { mailtoHref } from "./inquiryConfig";

export function ArticleBrandCard() {
  return (
    <aside className="article-brand-card" aria-label="FLOSEEK acoustic lighting manufacturer profile">
      <div className="article-brand-card-inner">
        <div className="article-brand-top">
          <img
            src="/assets/img/brand/floseek-logo-transparent.png"
            alt="FLOSEEK acoustic lighting"
            width="220"
            height="84"
            loading="lazy"
          />
          <span>FLOSEEK by KingOrnan</span>
        </div>

        <img
          className="article-brand-photo"
          src="/assets/img/company/kingornan-factory-workshop.webp"
          alt="FLOSEEK lighting factory workshop for acoustic lighting production"
          loading="lazy"
        />

        <h2>Need a custom acoustic lighting plan?</h2>
        <p>
          KingOrnan began acoustic lighting development in 2024. FLOSEEK was
          officially registered as a brand in 2025 with acoustic lighting as
          its core product category.
        </p>

        <div className="article-brand-stats" aria-label="FLOSEEK and KingOrnan background">
          <div>
            <strong>14+ yrs</strong>
            <span>Lighting manufacturing background since KingOrnan was founded in 2012.</span>
          </div>
          <div>
            <strong>OEM/ODM</strong>
            <span>Custom PET felt color, size, LED, dimming, label and packaging support.</span>
          </div>
          <div>
            <strong>Acoustic focus</strong>
            <span>Pendant, linear, ceiling, wall and floor acoustic lighting for B2B projects.</span>
          </div>
        </div>

        <a
          className="article-brand-cta"
          href={mailtoHref("Custom Acoustic Lighting Plan")}
          data-contact-popup
        >
          Send Project Requirements
        </a>
      </div>
    </aside>
  );
}
