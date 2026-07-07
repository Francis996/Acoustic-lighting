"use client";

import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import { MaterialColorSection } from "../MaterialColorSection";
import { InlineContactCta } from "../InlineContactCta";
import { InquiryHiddenFields, PhoneWhatsAppField, inquiryAction, inquiryEmail, mailtoHref } from "../inquiryConfig";

const floorModels = [
  {
    model: "KO-XYM-0198",
    name: "Oversized acoustic shade floor lamp",
    scene: "/assets/img/floor/ko-xym-0198-lounge-scene-enhanced.webp",
    product: "/assets/img/floor/ko-xym-0198-product-scene-enhanced.webp",
    href: "/products/acoustic-floor-lamps/ko-xym-0198-acoustic-floor-lamp",
    specs: ["1570 x 1150 x 2200 mm", "E27 x 1 light source", "Carbon steel, acoustic and wooden materials"]
  },
  {
    model: "KO-XYM-0172",
    name: "Tripod acoustic fabric floor lamp",
    scene: "/assets/img/floor/ko-xym-0172-tripod-scene-enhanced.webp",
    product: "/assets/img/floor/ko-xym-0172-tripod-product-enhanced.webp",
    href: "/products/acoustic-floor-lamps/ko-xym-0172-acoustic-floor-lamp",
    specs: ["590 x 1670 mm", "E27 x 1 light source", "Aluminum, carbon steel and acoustic body"]
  },
  {
    model: "KO-XYM-0199",
    name: "Arc acoustic floor lamp",
    scene: "/assets/img/floor/ko-xym-0199-office-scene-enhanced.webp",
    product: "/assets/img/floor/ko-xym-0199-lounge-scene-enhanced.webp",
    href: "/products/acoustic-floor-lamps/ko-xym-0199-acoustic-floor-lamp",
    specs: ["1870 x 800 x 2110 mm", "30W LED option", "Aluminum, acoustic and fabric finish"]
  },
  {
    model: "KO-XYM-0197",
    name: "Soft acoustic column floor lamp",
    scene: "/assets/img/floor/ko-xym-0197-booth-scene-enhanced.webp",
    product: "/assets/img/floor/ko-xym-0197-blue-product-enhanced.webp",
    href: "/products/acoustic-floor-lamps/ko-xym-0197-acoustic-floor-lamp",
    specs: ["850 x 1800 mm", "E27 x 6 light source", "Carbon steel and acoustic fabric body"]
  }
];

const floorSpecRows = [
  ["Model range", "KO-XYM-0198, 0172, 0199 and 0197"],
  ["Form factor", "Oversized shade, tripod lamp, arc lamp and acoustic column floor lamp"],
  ["Typical dimensions", "590 x 1670 mm, 850 x 1800 mm, 1570 x 1150 x 2200 mm and 1870 x 800 x 2110 mm options"],
  ["Light source", "E27 x 1, E27 x 6 and 30W LED options depending on model"],
  ["Dimming", "Non-dim as standard on catalog floor lamp models"],
  ["Materials", "Carbon steel, aluminum, acoustic fabric and wooden details depending on product family"],
  ["Best placement", "Freestanding near lounges, waiting areas, breakout zones and flexible office corners"]
];

const floorApplications = [
  {
    title: "Reception Lounges",
    href: "/applications/commercial-interiors",
    text: "Freestanding acoustic lighting for seating groups where ceiling work is limited."
  },
  {
    title: "Breakout & Focus Corners",
    href: "/applications/office-meeting-rooms",
    text: "Movable lamps help define small zones while adding soft vertical acoustic mass."
  },
  {
    title: "Hospitality Seating Areas",
    href: "/applications/restaurant-hospitality",
    text: "Tripod and oversized shade forms bring warm atmosphere to hotel, cafe and lounge spaces."
  }
];

export function FloorLampsPage({ content }) {
  return (
    <>
      <SiteHeader content={content} ctaHref="#floor-quote" />
      <main className="floor-page">
        <section className="floor-hero section-dark">
          <div className="wrap floor-hero-grid">
            <div className="floor-hero-copy reveal">
              <p className="eyebrow">Acoustic Floor Lamps</p>
              <h1>Freestanding acoustic lamps for lounges, offices and flexible interiors.</h1>
              <p>
                PET felt and fabric acoustic floor lamps add soft light, vertical acoustic surfaces
                and movable comfort for reception areas, informal meetings and quiet corners.
              </p>
              <div className="collection-actions">
                <a className="btn primary" href="#floor-quote" data-contact-popup>Request Floor Lamp Quote</a>
                <a className="btn glass" href="#floor-models">View KO Models</a>
              </div>
              <div className="floor-proof">
                <span>Catalog pages 11-14</span>
                <span>E27 / LED options</span>
                <span>Type F fabric colors</span>
              </div>
            </div>
            <div className="floor-hero-board reveal delay-1">
              <img className="wide" src="/assets/img/floor/ko-xym-0198-lounge-scene-enhanced.webp" alt="KO-XYM-0198 acoustic floor lamp in lounge seating areas" />
              <img src="/assets/img/floor/ko-xym-0172-tripod-scene-enhanced.webp" alt="KO-XYM-0172 tripod acoustic floor lamp beside a chair" />
              <img src="/assets/img/floor/ko-xym-0197-booth-scene-enhanced.webp" alt="KO-XYM-0197 acoustic column floor lamp in a lounge booth" />
            </div>
          </div>
        </section>

        <section className="floor-summary">
          <div className="wrap floor-summary-grid">
            <article><b>01</b><strong>Freestanding acoustic comfort</strong><span>Movable lamps add light and soft vertical acoustic mass without ceiling suspension.</span></article>
            <article><b>02</b><strong>Lounge-ready visual forms</strong><span>Tripod, arc, oversized shade and column forms support different interior styles.</span></article>
            <article><b>03</b><strong>Project color matching</strong><span>Fabric colors, light source, power and packaging can be confirmed for bulk orders.</span></article>
          </div>
        </section>

        <section className="section floor-models" id="floor-models">
          <div className="wrap">
            <div className="linear-section-head reveal">
              <div>
                <h2>Acoustic floor lamp models from catalog pages 11-14.</h2>
                <p>Models KO-XYM-0198, KO-XYM-0172, KO-XYM-0199 and KO-XYM-0197 are matched with their source catalog visuals for project review.</p>
              </div>
              <a href="#floor-quote" data-contact-popup>Send model list</a>
            </div>

            <div className="floor-model-grid">
              {floorModels.map((item, index) => (
                <article className={`floor-model-card reveal delay-${Math.min(index + 1, 4)}`} key={item.model}>
                  <div className="floor-model-scene">
                    <img src={item.scene} alt={`${item.model} ${item.name} scene`} loading="lazy" />
                    <span>{item.model}</span>
                  </div>
                  <div className="floor-model-copy">
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
              eyebrow="Floor Lamp Selection"
              title="Need floor lamp pricing for lounges or flexible interiors?"
              text="Send model codes, color series, quantity and destination market. We will confirm bulk-order options and packing details."
              cta="Ask for floor lamp quote"
            />
          </div>
        </section>

        <section className="section specs section-soft">
          <div className="wrap pendant-spec-layout">
            <div className="spec-card reveal">
              <p className="eyebrow dark">Specification Range</p>
              <h2>Freestanding acoustic lamps specified by footprint, height and light source.</h2>
              <p>Floor lamp models are best treated as furniture-scale lighting. Confirm the model around seating layout, power access, shade size and the level of acoustic presence needed in the room.</p>
            </div>
            <div className="spec-table reveal delay-1" role="table" aria-label="Acoustic Floor Lamps specification range">
              {floorSpecRows.map(([label, value]) => (
                <div role="row" key={label}><strong>{label}</strong><span>{value}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="section floor-applications section-dark">
          <div className="wrap floor-application-grid">
            <div className="floor-application-copy reveal">
              <p className="eyebrow">Applications</p>
              <h2>Use floor lamps where acoustic treatment needs to stay flexible.</h2>
              <p>
                Floor acoustic lamps suit areas where furniture layouts change, where ceiling work is limited,
                or where soft partitions and lighting need to support small social zones.
              </p>
            </div>
            <div className="floor-application-list reveal delay-1">
              {floorApplications.map((item) => (
                <article key={item.title}>
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                  <a className="application-card-link" href={item.href}>View application</a>
                </article>
              ))}
            </div>
            <InlineContactCta
              eyebrow="Flexible Space Support"
              title="Planning acoustic comfort without ceiling suspension?"
              text="Tell us the seating area, power access and quantity so we can suggest suitable freestanding acoustic lamp models."
              cta="Discuss floor lamp project"
              variant="dark"
            />
          </div>
        </section>

        <MaterialColorSection text="Floor lamps are furniture-scale acoustic products, so material and color selection should coordinate with upholstery, lounge seating and nearby wall finishes. Use Type F fabric and PET felt series as starting points for project color confirmation." />

        <section className="contact-section section-dark" id="floor-quote">
          <div className="wrap contact-grid">
            <div className="contact-copy reveal">
              <h2>Request acoustic floor lamp pricing.</h2>
              <p>Send model numbers, color series, light source, quantity and project market. We will confirm suitable specifications and quotation details.</p>
              <div className="contact-methods">
                <a href={mailtoHref("Acoustic Floor Lamps Inquiry")}>{inquiryEmail}</a>
                <a href="https://wa.me/8615888067484" target="_blank" rel="noopener">WhatsApp: +86 15888067484</a>
              </div>
            </div>

            <form className="inquiry-form reveal delay-1" action={inquiryAction} method="post">
              <InquiryHiddenFields subject="Acoustic Floor Lamps Inquiry" />
              <label>Name<input type="text" name="Name" placeholder="Your name" required /></label>
              <label>Email<input type="email" name="Email" placeholder="name@company.com" required /></label>
              <PhoneWhatsAppField />
              <label>Country<input type="text" name="Country" placeholder="Your country / market" /></label>
              <label>
                Product Family
                <select name="Product Family" defaultValue="Acoustic Floor Lamps">
                  <option>Acoustic Floor Lamps</option>
                  <option>KO-XYM-0198</option>
                  <option>KO-XYM-0172</option>
                  <option>KO-XYM-0199</option>
                  <option>KO-XYM-0197</option>
                  <option>Custom Acoustic Lighting</option>
                </select>
              </label>
              <label className="full">Message<textarea name="Message" rows="5" placeholder="Tell us model, color series, light source, quantity and project schedule."></textarea></label>
              <button className="btn primary full" type="submit">Submit Floor Lamp Inquiry</button>
              <p className="form-note">After submitting, your inquiry will be sent directly to the sales team.</p>
            </form>
          </div>
        </section>
      </main>
      <SiteFooter content={content} />
    </>
  );
}
