"use client";

import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import { MaterialColorSection } from "../MaterialColorSection";
import { InlineContactCta } from "../InlineContactCta";
import { InquiryHiddenFields, PhoneWhatsAppField, inquiryAction, inquiryEmail, mailtoHref } from "../inquiryConfig";

const linearProducts = [
  {
    model: "KO-XYM-0164",
    name: "Flat acoustic linear workstation light",
    image: "/assets/img/linear/ko-xym-0164-office-scene.jpeg",
    href: "/products/acoustic-linear-lights/ko-xym-0164-acoustic-linear-light",
    specs: ["Office workstation scene", "Type C felt color options", "Linear acoustic pendant layout"]
  },
  {
    model: "KO-XYM-0159",
    name: "Slim felt linear office light",
    image: "/assets/img/linear/ko-xym-0159-yellow-boardroom.webp",
    href: "/products/acoustic-linear-lights/ko-xym-0159-acoustic-linear-light",
    specs: ["1050 / 1280 / 2000 mm", "30W / 40W / 58W", "Non-dim, 1-10V or DALI"]
  },
  {
    model: "KO-XYM-0090",
    name: "Soft capsule acoustic light",
    image: "/assets/img/linear/ko-xym-0090-office-row.webp",
    href: "/products/acoustic-linear-lights/ko-xym-0090-acoustic-linear-light",
    specs: ["1180 x 250 x 125 mm", "30W", "Microprismatic, lens or reflector optics"]
  },
  {
    model: "KO-XYM-0009",
    name: "Flat rectangular acoustic panel light",
    image: "/assets/img/linear/ko-xym-0009-blue-office-scene.webp",
    href: "/products/acoustic-linear-lights/ko-xym-0009-acoustic-linear-light",
    specs: ["900 x 600 x 9 mm", "15W", "Spotlight configuration available"]
  },
  {
    model: "KO-XYM-0017",
    name: "Extended blue acoustic work light",
    image: "/assets/img/linear/ko-xym-0017-orange-meeting-scene.webp",
    href: "/products/acoustic-linear-lights/ko-xym-0017-acoustic-linear-light",
    specs: ["1200 x 350 x 9 mm", "18W", "Suspended office workstation layout"]
  },
  {
    model: "KO-XYM-0142",
    name: "Multi-wing acoustic pendant light",
    image: "/assets/img/linear/ko-xym-0142-meeting-scene.jpeg",
    href: "/products/acoustic-linear-lights/ko-xym-0142-acoustic-linear-light",
    specs: ["Meeting and collaboration scene", "Type C felt color options", "Suspended acoustic wing layout"]
  },
  {
    model: "KO-XYM-0088",
    name: "Ribbed acoustic linear shade",
    image: "/assets/img/linear/ko-xym-0088-reception-scene.jpeg",
    href: "/products/acoustic-linear-lights/ko-xym-0088-acoustic-linear-light",
    specs: ["Office and reception scenes", "Type C felt color options", "Ribbed acoustic pendant body"]
  },
  {
    model: "KO-XYM-0140",
    name: "Terracotta capsule acoustic pendant",
    image: "/assets/img/linear/ko-xym-0140-scene-generated.png",
    href: "/products/acoustic-pendant-lights/ko-xym-0140-acoustic-pendant-light",
    specs: ["1070 x 660 x 385 mm family", "2 x 20W option", "Diffuser plate optics"]
  }
];

const linearSpecRows = [
  ["Model range", "KO-XYM-0164, 0159, 0090, 0009, 0017, 0142, 0088 and 0140"],
  ["Form factor", "Linear pendants, flat acoustic panels, capsule bodies and wing-style suspended lights"],
  ["Typical dimensions", "From 900 mm compact panels to 2000 mm linear office versions, depending on model"],
  ["Power range", "15W, 18W, 30W, 40W, 58W and 2 x 20W options by model"],
  ["Dimming", "Non-dim, 1-10V and DALI options for selected linear models"],
  ["Optics", "Diffuser, microprismatic diffuser, spotlight, lens, honeycomb and reflector cup options"],
  ["Materials", "PET felt acoustic body with aluminum or lighting hardware depending on structure"],
  ["Best installation", "Suspended above desks, meeting tables, training rooms and reception work zones"]
];

const linearApplications = [
  {
    title: "Open Office Workstations",
    image: "/assets/img/linear/ko-xym-0164-office-scene.jpeg",
    href: "/applications/office-meeting-rooms",
    text: "Long suspended acoustic surfaces help calm desk rows while delivering task-level light."
  },
  {
    title: "Meeting & Boardroom Tables",
    image: "/assets/img/linear/ko-xym-0142-meeting-scene.jpeg",
    href: "/applications/office-meeting-rooms",
    text: "Wing and linear forms support speech comfort and visual focus above collaborative tables."
  },
  {
    title: "Reception & Focus Areas",
    image: "/assets/img/linear/ko-xym-0088-reception-scene.jpeg",
    href: "/applications/commercial-interiors",
    text: "Ribbed or capsule forms add acoustic texture where a visible design feature is needed."
  }
];

export function LinearLightsPage({ content }) {
  return (
    <>
      <SiteHeader content={content} ctaHref="#linear-quote" />
      <main className="linear-page">
        <section className="linear-hero section-dark">
          <div className="wrap linear-hero-grid">
            <div className="linear-hero-copy reveal">
              <h1>Acoustic Linear Lights for focused office space.</h1>
              <p>
                PET felt linear lighting for open offices, meeting rooms and learning spaces,
                combining soft acoustic surfaces with architectural LED optics and KO model customization.
              </p>
              <div className="collection-actions">
                <a className="btn primary" href="#linear-quote" data-contact-popup>Get Linear Light Quote</a>
                <a className="btn glass" href="#linear-products">View KO Models</a>
              </div>
              <div className="linear-proof">
                <span>KO model system</span>
                <span>3000K / 4000K / 6000K</span>
                <span>DALI / 1-10V options</span>
              </div>
            </div>

            <div className="linear-hero-stage reveal delay-1" aria-label="Acoustic linear light office scene">
              <img className="linear-scene main" src="/assets/img/linear/catalog-page20-right-scene.jpeg" alt="Green acoustic linear baffle lights installed above office workstations" />
              <img className="linear-scene" src="/assets/img/linear/ko-xym-0164-office-scene.jpeg" alt="KO-XYM-0164 acoustic linear lights installed above office workstations" />
              <img className="linear-scene" src="/assets/img/linear/ko-xym-0142-meeting-scene.jpeg" alt="KO-XYM-0142 acoustic wing lights above a meeting table" />
              <img className="linear-scene product" src="/assets/img/linear/ko-xym-0088-reception-scene.jpeg" alt="KO-XYM-0088 acoustic linear shade in a reception office scene" />
            </div>
          </div>
        </section>

        <section className="linear-summary">
          <div className="wrap linear-summary-grid">
            <article><b>01</b><strong>Linear acoustic control</strong><span>Long PET felt surfaces help calm open offices while keeping the ceiling visually clean.</span></article>
            <article><b>02</b><strong>Project-ready optics</strong><span>Diffuser, microprismatic, spotlight, lens, honeycomb and reflector cup options by model.</span></article>
            <article><b>03</b><strong>Custom color selection</strong><span>Type A, B and C PET felt colors are available, with Type F velvet fabric for non-felt finishes.</span></article>
          </div>
        </section>

        <section className="section linear-products" id="linear-products">
          <div className="wrap">
            <div className="linear-section-head reveal">
              <div>
                <h2>KO office linear light models from catalog pages 19-34.</h2>
                <p>Selected office-series products are matched to their scene images. Original TR model prefixes have been converted to KO for the website.</p>
              </div>
              <a href="#linear-quote" data-contact-popup>Send model list</a>
            </div>

            <div className="linear-product-grid">
              {linearProducts.map((product, index) => (
                <article className={`linear-product-card reveal delay-${Math.min(index, 4)}`} key={product.model}>
                  <div className="linear-product-image">
                    <img src={product.image} alt={`${product.model} ${product.name}`} loading="lazy" />
                    <span>{product.model}</span>
                  </div>
                  <h3 className="linear-product-title">{product.name}</h3>
                  <div className="linear-product-copy">
                    <ul>
                      {product.specs.map((spec) => <li key={spec}>{spec}</li>)}
                    </ul>
                    <a className="model-detail-link" href={product.href}>View product details</a>
                  </div>
                </article>
              ))}
            </div>
            <InlineContactCta
              eyebrow="Linear Model List"
              title="Need pricing for workstation or meeting-room linear lights?"
              text="Send KO model numbers, length, optic, dimming, felt color and quantity for a focused quotation."
              cta="Send linear inquiry"
            />
          </div>
        </section>

        <section className="section specs section-soft">
          <div className="wrap pendant-spec-layout">
            <div className="spec-card reveal">
              <p className="eyebrow dark">Specification Range</p>
              <h2>Linear acoustic lighting specified by length, optic and desk layout.</h2>
              <p>Use the KO models as starting points. Final dimensions, wattage, dimming and color series should be checked against reflected ceiling plans and workstation spacing.</p>
            </div>
            <div className="spec-table reveal delay-1" role="table" aria-label="Acoustic Linear Lights specification range">
              {linearSpecRows.map(([label, value]) => (
                <div role="row" key={label}><strong>{label}</strong><span>{value}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="section linear-spaces section-dark">
          <div className="wrap linear-space-grid">
            <div className="linear-space-copy reveal">
              <p className="eyebrow">Applications</p>
              <h2>Real scene embedding for office, boardroom and focused work zones.</h2>
              <p>
                Linear acoustic lights work best where speech comfort and desk-level visual comfort must be solved together:
                workstations, meeting tables, lounge booths and training rooms.
              </p>
            </div>
            <div className="linear-scene-wall reveal delay-1">
              {linearApplications.map((item) => (
                <article className="linear-application-card" key={item.title}>
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.text}</span>
                    <a className="application-card-link" href={item.href}>View application</a>
                  </div>
                </article>
              ))}
            </div>
            <InlineContactCta
              eyebrow="Layout Review"
              title="Have a desk row, boardroom or reception layout to check?"
              text="Share your plan and installation height. We can help match linear acoustic lights to the scene."
              cta="Review my layout"
              variant="dark"
            />
          </div>
        </section>

        <MaterialColorSection text="Color names from the source catalog have been removed. The page keeps only the matching material series and color numbers for clean project communication." />

        <section className="contact-section section-dark" id="linear-quote">
          <div className="wrap contact-grid">
            <div className="contact-copy reveal">
              <h2>Request acoustic linear light pricing.</h2>
              <p>Send KO model numbers, dimensions, felt color series, CCT, dimming type, quantity and project market. We will confirm the suitable specification and quotation.</p>
              <div className="contact-methods">
                <a href={mailtoHref("Acoustic Linear Lights Inquiry")}>{inquiryEmail}</a>
                <a href="https://wa.me/8615888067484" target="_blank" rel="noopener">WhatsApp: +86 15888067484</a>
              </div>
            </div>

            <form className="inquiry-form reveal delay-1" action={inquiryAction} method="post">
              <InquiryHiddenFields subject="Acoustic Linear Lights Inquiry" />
              <label>Name<input type="text" name="Name" placeholder="Your name" required /></label>
              <label>Email<input type="email" name="Email" placeholder="name@company.com" required /></label>
              <PhoneWhatsAppField />
              <label>Country<input type="text" name="Country" placeholder="Your country / market" /></label>
              <label>
                Product Family
                <select name="Product Family" defaultValue="Acoustic Linear Lights">
                  <option>Acoustic Linear Lights</option>
                  <option>KO-XYM-0164</option>
                  <option>KO-XYM-0159</option>
                  <option>KO-XYM-0090</option>
                  <option>KO-XYM-0142</option>
                  <option>KO-XYM-0088</option>
                  <option>Custom Acoustic Lighting</option>
                </select>
              </label>
              <label className="full">Message<textarea name="Message" rows="5" placeholder="Tell us model, size, color series, CCT, dimming, quantity and project schedule."></textarea></label>
              <button className="btn primary full" type="submit">Submit Linear Light Inquiry</button>
              <p className="form-note">After submitting, your inquiry will be sent directly to the sales team.</p>
            </form>
          </div>
        </section>
      </main>
      <SiteFooter content={content} />
    </>
  );
}
