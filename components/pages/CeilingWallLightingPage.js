"use client";

import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import { MaterialColorSection } from "../MaterialColorSection";
import { InlineContactCta } from "../InlineContactCta";
import { InquiryHiddenFields, PhoneWhatsAppField, inquiryAction, inquiryEmail, mailtoHref } from "../inquiryConfig";

const models = [
  {
    model: "KO-XYM-0170",
    name: "Modular acoustic ceiling panel light",
    scene: "/assets/img/ceiling-wall-ko-xym-0170-catalog-scene.jpeg",
    product: "/assets/img/ceiling-wall-ko-xym-0170-catalog-product.jpeg",
    href: "/products/acoustic-ceiling-wall-lighting/ko-xym-0170-acoustic-ceiling-wall-light",
    specs: ["600 x 600 x 40 mm module", "8W / 16W options", "Non-dim, 1-10V or DALI"]
  },
  {
    model: "KO-XYM-0167",
    name: "Decorative acoustic mirror wall light",
    scene: "/assets/img/ceiling-wall-ko-xym-0167-catalog-scene.jpeg",
    product: "/assets/img/ceiling-wall-ko-xym-0167-catalog-product.jpeg",
    href: "/products/acoustic-ceiling-wall-lighting/ko-xym-0167-acoustic-ceiling-wall-light",
    specs: ["400 / 600 / 800 x 70 mm", "10W / 15W / 20W options", "Acoustic, carbon steel and PMMA body"]
  },
  {
    model: "KO-XYM-0215",
    name: "Decorative acoustic wall light",
    scene: "/assets/img/ceiling-wall-ko-xym-0215-catalog-scene.jpeg",
    product: "/assets/img/ceiling-wall-ko-xym-0215-catalog-product-nologo.jpeg",
    href: "/products/acoustic-ceiling-wall-lighting/ko-xym-0215-acoustic-ceiling-wall-light",
    specs: ["350 x 60 mm wall light", "12W LED option", "Non-dim, 1-10V or DALI"]
  }
];

const ceilingSpecRows = [
  ["Model range", "KO-XYM-0170, 0167 and 0215"],
  ["Installation type", "Ceiling panel modules and decorative wall-mounted acoustic lights"],
  ["Typical dimensions", "600 x 600 x 40 mm ceiling module, 400-800 x 70 mm mirror wall lights and 350 x 60 mm wall lights"],
  ["Power range", "8W / 16W for ceiling modules, 10W / 15W / 20W for KO-XYM-0167 and 12W for KO-XYM-0215"],
  ["Dimming", "Non-dim, 1-10V or DALI depending on model"],
  ["Materials", "Acoustic body with aluminum, carbon steel, PMMA or lighting hardware by model"],
  ["Use condition", "Indoor IP20 commercial interiors where suspended pendants are not suitable"]
];

const ceilingApplications = [
  {
    title: "Reception & Waiting Walls",
    image: "/assets/img/ceiling-wall-application-reception-waiting-wall.png",
    href: "/applications/commercial-interiors",
    text: "Use decorative wall lights as acoustic feature pieces in front-of-house areas."
  },
  {
    title: "Meeting & Lounge Rooms",
    image: "/assets/img/ceiling-wall-application-meeting-lounge-room.png",
    href: "/applications/office-meeting-rooms",
    text: "Add soft wall lighting and sound-absorbing form without lowering the ceiling plane."
  },
  {
    title: "Ceiling Feature Zones",
    image: "/assets/img/ceiling-wall-application-ceiling-feature-zone.png",
    href: "/applications/commercial-interiors",
    text: "Use modular ceiling panels above collaboration or seating zones where acoustic coverage is needed overhead."
  }
];

export function CeilingWallLightingPage({ content }) {
  return (
    <>
      <SiteHeader content={content} ctaHref="#ceiling-wall-quote" />
      <main className="ceiling-page">
        <section className="ceiling-hero section-dark">
          <div className="wrap ceiling-hero-grid">
            <div className="ceiling-hero-copy reveal">
              <p className="eyebrow">Acoustic Ceiling & Wall Lighting</p>
              <h1>Acoustic ceiling and wall lights for quieter commercial interiors.</h1>
              <p>
                PET felt ceiling and wall lighting combines decorative form, soft illumination
                and sound comfort for offices, lounges, reception areas and public interiors.
              </p>
              <div className="collection-actions">
                <a className="btn primary" href="#ceiling-wall-quote" data-contact-popup>Request Ceiling & Wall Quote</a>
                <a className="btn glass" href="#ceiling-wall-models">View KO Models</a>
              </div>
            </div>
            <div className="ceiling-hero-board reveal delay-1">
              <img className="wide" src="/assets/img/ceiling-wall-ko-xym-0170-catalog-scene.jpeg" alt="KO-XYM-0170 modular acoustic ceiling panel light in a meeting room" />
              <img src="/assets/img/ceiling-wall-ko-xym-0167-catalog-scene.jpeg" alt="KO-XYM-0167 decorative acoustic mirror wall lights in a lounge office" />
              <img src="/assets/img/ceiling-wall-ko-xym-0215-catalog-scene.jpeg" alt="KO-XYM-0215 decorative acoustic wall lights in a lounge interior" />
            </div>
          </div>
        </section>

        <section className="linear-summary">
          <div className="wrap linear-summary-grid">
            <article><b>01</b><strong>Ceiling-ready forms</strong><span>Round acoustic rings and discs integrate light and soft PET felt surfaces overhead.</span></article>
            <article><b>02</b><strong>Wall feature lighting</strong><span>Decorative acoustic wall lights create calmer reception, lounge and meeting areas.</span></article>
            <article><b>03</b><strong>Project customization</strong><span>Color series, diameter, LED specification, cable and mounting details can be confirmed by project.</span></article>
          </div>
        </section>

        <section className="section ceiling-models" id="ceiling-wall-models">
          <div className="wrap">
            <div className="linear-section-head reveal">
              <div>
                <h2>Ceiling and wall acoustic lighting models.</h2>
                <p>Models KO-XYM-0170, KO-XYM-0167 and KO-XYM-0215 are matched with their catalog scene images for faster project evaluation.</p>
              </div>
              <a href="#ceiling-wall-quote" data-contact-popup>Send model list</a>
            </div>
            <div className="ceiling-model-grid">
              {models.map((item, index) => (
                <article className={`ceiling-model-card reveal delay-${index + 1}`} key={item.model}>
                  <div className="ceiling-model-scene">
                    <img src={item.scene} alt={`${item.model} ${item.name} scene`} loading="lazy" />
                    <span>{item.model}</span>
                  </div>
                  <div className="ceiling-model-copy">
                    <img src={item.product} alt={`${item.model} ${item.name} product image`} loading="lazy" />
                    <div>
                      <h3>{item.name}</h3>
                      <ul>
                        {item.specs.map((spec) => <li key={spec}>{spec}</li>)}
                      </ul>
                      <a className="model-detail-link" href={item.href}>View product details</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <InlineContactCta
              eyebrow="Ceiling & Wall Models"
              title="Checking a wall feature or ceiling module quotation?"
              text="Send model, mounting surface, size, CCT, dimming and quantity. We will confirm suitable options for your surface."
              cta="Ask for ceiling/wall quote"
            />
          </div>
        </section>

        <section className="section specs section-soft">
          <div className="wrap pendant-spec-layout">
            <div className="spec-card reveal">
              <p className="eyebrow dark">Specification Range</p>
              <h2>Ceiling and wall acoustic lights selected by mounting surface and visual role.</h2>
              <p>Use the ceiling module where overhead acoustic coverage is needed, and choose wall-mounted models for decorative acoustic lighting on reception, lounge and meeting room walls.</p>
            </div>
            <div className="spec-table reveal delay-1" role="table" aria-label="Acoustic Ceiling and Wall Lighting specification range">
              {ceilingSpecRows.map(([label, value]) => (
                <div role="row" key={label}><strong>{label}</strong><span>{value}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="section ceiling-applications section-dark">
          <div className="wrap ceiling-application-grid">
            <div className="ceiling-application-copy reveal">
              <p className="eyebrow">Applications</p>
              <h2>For surfaces that need to look calmer and sound softer.</h2>
              <p>
                Use ceiling and wall acoustic lighting where pendant drops are not suitable,
                or where the project needs a decorative acoustic feature integrated with the architecture.
              </p>
            </div>
            <div className="ceiling-application-list reveal delay-1">
              {ceilingApplications.map((item) => (
                <article key={item.title}>
                  <img src={item.image} alt={`${item.title} acoustic ceiling and wall lighting application`} loading="lazy" />
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.text}</span>
                    <a className="application-card-link" href={item.href}>View application</a>
                  </div>
                </article>
              ))}
            </div>
            <InlineContactCta
              eyebrow="Surface Planning"
              title="Need a decorative acoustic feature without pendant drops?"
              text="Share wall or ceiling photos, room use and desired visual role. We can suggest practical ceiling and wall models."
              cta="Discuss surface lighting"
              variant="dark"
            />
          </div>
        </section>

        <MaterialColorSection text="Ceiling modules and wall-mounted acoustic lights can use selected PET felt or fabric finishes so panels, discs and mirror forms match the surrounding wall or ceiling scheme. Check the final series with each KO model before production." />

        <section className="contact-section section-dark" id="ceiling-wall-quote">
          <div className="wrap contact-grid">
            <div className="contact-copy reveal">
              <h2>Request ceiling and wall acoustic lighting pricing.</h2>
              <p>Send model numbers, diameter, felt or fabric series, CCT, quantity and project market. We will confirm the suitable specification and quotation.</p>
              <div className="contact-methods">
                <a href={mailtoHref("Acoustic Ceiling & Wall Lighting Inquiry")}>{inquiryEmail}</a>
                <a href="https://wa.me/8615888067484" target="_blank" rel="noopener">WhatsApp: +86 15888067484</a>
              </div>
            </div>
            <form className="inquiry-form reveal delay-1" action={inquiryAction} method="post">
              <InquiryHiddenFields subject="Acoustic Ceiling & Wall Lighting Inquiry" />
              <label>Name<input type="text" name="Name" placeholder="Your name" required /></label>
              <label>Email<input type="email" name="Email" placeholder="name@company.com" required /></label>
              <PhoneWhatsAppField />
              <label>Country<input type="text" name="Country" placeholder="Your country / market" /></label>
              <label>
                Product Family
                <select name="Product Family" defaultValue="Acoustic Ceiling & Wall Lighting">
                  <option>Acoustic Ceiling & Wall Lighting</option>
                  <option>KO-XYM-0170</option>
                  <option>KO-XYM-0167</option>
                  <option>KO-XYM-0215</option>
                  <option>Custom Acoustic Lighting</option>
                </select>
              </label>
              <label className="full">Message<textarea name="Message" rows="5" placeholder="Tell us model, size, color series, CCT, dimming, quantity and project schedule."></textarea></label>
              <button className="btn primary full" type="submit">Submit Ceiling & Wall Inquiry</button>
              <p className="form-note">After submitting, your inquiry will be sent directly to the sales team.</p>
            </form>
          </div>
        </section>
      </main>
      <SiteFooter content={content} />
    </>
  );
}
