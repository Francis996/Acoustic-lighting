import content from "../../../content/siteContent.json";
import { SiteFooter } from "../../../components/SiteFooter";
import { SiteHeader } from "../../../components/SiteHeader";
import { ArticleBrandCard } from "../../../components/ArticleBrandCard";
import { RelatedArticles } from "../../../components/RelatedArticles";
import { mailtoHref } from "../../../components/inquiryConfig";
import { absoluteUrl, createPageMetadata } from "../../../lib/metadata";

const pathname = "/blog/how-to-choose-pet-felt-acoustic-pendant-lights";
const title = "How to Choose PET Felt Acoustic Pendant Lights for Commercial Projects";
const seoTitle = "Choose PET Felt Acoustic Pendant Lights for Commercial Projects";
const description =
  "Choose PET felt acoustic pendant lights for commercial projects. Compare acoustic goals, LED specs, materials, installation and RFQ details.";

const sections = [
  {
    heading: "Quick Answer: What Should You Check First?",
    body: [
      "Start with project risk, not a product photo. Confirm the room application, acoustic objective, lighting performance, PET felt material, installation condition, required documents, and supplier fit before comparing prices.",
      "A useful first check should cover office, meeting room, restaurant, hotel, education, retail, or public-space use; whether the goal is echo reduction, speech comfort, or decorative acoustic support; and whether the fixture can meet the LED, dimming, color, safety, packing, and schedule requirements for the exact project.",
      "The short version: a good acoustic pendant light is the one that matches the room function, sound problem, lighting requirement, ceiling condition, document requirement, budget, and installation schedule."
    ]
  },
  {
    heading: "What a PET Felt Acoustic Pendant Light Actually Does",
    body: [
      "A PET felt acoustic pendant light combines illumination through an LED system with sound absorption support from exposed PET felt surfaces. It is useful in commercial interiors with hard surfaces such as glass walls, concrete ceilings, tile floors, metal furniture, and open layouts.",
      "Buyers should be careful with language. Acoustic pendant lighting is not soundproofing; it does not block sound transmission through walls, doors, or ceilings. It mainly helps absorb reflections inside the room and improve perceived acoustic comfort.",
      "In a restaurant, PET felt pendant lights may reduce harsh echo around dining tables. In an open office, they can support a quieter working atmosphere when used with other acoustic measures. In a meeting room, they can help soften reflections near the discussion zone."
    ]
  },
  {
    heading: "Start with the Room, Not the Fixture Shape",
    body: [
      "Many RFQs start with a reference photo. That is useful for style, but it is not enough for specification. A good recommendation should change when the room changes.",
      "Open offices usually need linear or modular PET felt acoustic pendants with controlled glare and consistent CCT. Meeting rooms need fixtures that support table lighting, speech comfort, video calls, and dimming. Restaurants and cafes often need warm CCT, ambience, cleaning awareness, and enough acoustic surface area.",
      "Hotel lobbies, classrooms, libraries, retail spaces, and showrooms each carry different risks around scale, brand color, speech clarity, durability, CRI, maintenance, and installation. If a supplier recommends the same pendant for every room without asking about ceiling height, table position, acoustic goal, or lighting requirement, the quotation is too generic for a serious project."
    ]
  },
  {
    heading: "Define the Acoustic Objective Before Asking for NRC",
    body: [
      "NRC can help compare sound absorption materials, but the real room result depends on how much absorptive material is installed, where it is placed, how the room is built, and whether other soft finishes are present.",
      "Before relying on one acoustic number, ask whether the data is for a material or a suspended object, what test method was used, what the sample size and mounting condition were, which frequency bands matter for the room, and how many fixtures will be installed.",
      "The buyer's real question is not only whether the product has NRC. It is whether this quantity, size, and placement will make a meaningful acoustic contribution in the room. If a project has a measured acoustic target, confirm available acoustic data by exact product configuration or involve an acoustic consultant."
    ]
  },
  {
    heading: "Evaluate LED and Lighting Specifications Like a Lighting Project",
    body: [
      "A PET felt acoustic pendant light is still a light fixture. It must satisfy lighting performance before its acoustic function can be useful.",
      "Check lumen output, wattage, CCT, CRI, beam angle, diffuser, glare control, dimming protocol, driver specification, and input voltage. Wattage does not equal useful light, and a good acoustic material cannot compensate for poor lighting comfort.",
      "For serious lighting layouts, ask whether IES or LDT photometric files are available for the exact product configuration. For dimming, do not accept 'dimmable' as a complete answer; confirm whether the project needs non-dimming, TRIAC, 0-10V, DALI, or another control system before production."
    ]
  },
  {
    heading: "Check PET Felt Material Beyond Eco-Friendly Claims",
    body: [
      "PET felt is popular because it is lightweight, formable, modern-looking, and often made with recycled PET fibers. But B2B buyers should not stop at the phrase eco-friendly.",
      "Important checks include PET felt thickness and density, recycled-content claim and supporting document if required, color card and batch tolerance, edge cutting quality, surface texture, dust visibility, odor control, cleaning instructions, and any fire-retardant or material safety information required by the destination market.",
      "For large projects, color consistency matters more than many buyers expect. A single pendant may look good, but a room with 60 pendants can expose small color differences between batches. Physical color cards and approved production samples should be used before mass production."
    ],
    image: {
      src: "/assets/img/linear/type-c-custom-colors-page.webp",
      alt: "custom PET felt colors for acoustic pendant light selection",
      caption: "Physical PET felt swatches help control color consistency before mass production."
    }
  },
  {
    heading: "Size, Shape and Suspension Height: What Can Go Wrong?",
    body: [
      "PET felt acoustic pendant lights are often chosen for their visual form, but form affects more than appearance. Large domes can create strong visual impact and more felt surface area, but they increase shipping volume, deformation risk, ceiling load, and installation difficulty.",
      "Linear acoustic pendants can suit desks and long tables, but their length, suspension points, glare control, and light distribution must match the layout. Disc, cloud, and grouped shapes can soften a ceiling landscape, but quantity and spacing must be planned to avoid visual clutter.",
      "A practical buyer should provide ceiling height, table size, floor plan, furniture layout, and preferred suspension height before asking for final recommendations."
    ],
    image: {
      src: "/assets/img/pendant/ko-xym-0127-canopy.jpeg",
      alt: "PET felt acoustic canopy pendant light for commercial project selection",
      caption: "Size, suspension height and fixture spacing should match the room function."
    }
  },
  {
    heading: "Build a Commercial Acoustic Lighting Specification Envelope",
    body: [
      "For repeated commercial projects, it helps to define an acceptable specification range instead of treating every pendant as a one-off product. This is especially useful for distributors, lighting brands, and project contractors.",
      "The envelope should define acceptable PET felt thickness, density, color family, recycled-content claim, edge finish, acoustic data availability, wattage range, lumen range, CCT options, CRI level, diffuser, glare control, dimming protocol, canopy type, suspension details, packing method, and warranty expectations.",
      "This approach prevents every quotation from becoming a vague negotiation and makes supplier comparison easier."
    ]
  },
  {
    heading: "Ask for a Project Document Set Without Overclaiming",
    body: [
      "Commercial acoustic lighting projects should not be confirmed only by product images and unit price. Before purchase, ask which documents are available for the exact model, LED configuration, PET felt color, and destination market.",
      "Useful documents may include product datasheet, PET felt material data, acoustic absorption data if performance is part of the specification, fire-retardant or material classification information if required, IES or LDT files if lighting calculation is needed, driver datasheet, dimming compatibility statement, installation manual, suspension kit details, color approval record, QC checklist, packing method, and warranty statement.",
      "This wording matters. The supplier should confirm what already exists, what is model-specific, and what must be discussed before quotation or production."
    ]
  },
  {
    heading: "Common Mistakes That Delay Acoustic Lighting Orders",
    body: [
      "The most common order delays come from asking for price with only a photo, treating acoustic lighting as soundproofing, ignoring glare, saying dimmable without naming the protocol, choosing by wattage only, skipping color sample approval, forgetting installation accessories, and comparing only unit price.",
      "The practical fix is to compare quotation scope line by line. Confirm application, dimensions, quantity, CCT, dimming, destination market, documents required by the project, canopy, suspension cable, driver location, accessory bags, and packing before production.",
      "A supplier that asks technical questions early may feel slower at first, but it usually reduces revisions, missing parts, and installation surprises later."
    ],
    image: {
      src: "/assets/img/company/kingornan-factory-workbench.webp",
      alt: "workbench inspection for acoustic lighting export order",
      caption: "QC and packing checks reduce installation risk for commercial acoustic lighting orders."
    }
  },
  {
    heading: "RFQ Checklist: What to Send Before Asking for a Quote",
    body: [
      "To receive a realistic quotation, send project type, destination market, quantity, reference photo or style direction, preferred shape and size, PET felt color, ceiling height, room dimensions or layout drawing, target lumen or wattage, CCT, CRI, dimming protocol, input voltage, required documents, packaging needs, delivery date, and sample requirement.",
      "A clear RFQ does not only help the supplier quote faster. It helps you compare suppliers fairly and avoid price differences caused by missing scope.",
      "If you are not sure which parameters matter, send the room layout and commercial use first. A project-capable supplier should help turn the room information into a workable product specification."
    ],
    cta: true
  }
];

const faqs = [
  {
    question: "Can PET felt acoustic pendant lights reduce noise?",
    answer:
      "They can help reduce sound reflections and improve acoustic comfort, especially in rooms with hard surfaces. The result depends on product size, quantity, felt material, room layout, and other acoustic treatments."
  },
  {
    question: "Can acoustic pendant lighting replace acoustic panels?",
    answer:
      "In some small or moderately noisy spaces, acoustic pendant lighting can provide useful acoustic support. In larger or demanding projects, it is usually part of a wider acoustic plan rather than a complete replacement for wall or ceiling panels."
  },
  {
    question: "What color temperature is suitable for commercial acoustic pendant lights?",
    answer:
      "3000K is common for restaurants, hotels, and warm hospitality interiors. 4000K is often selected for offices, meeting rooms, and workspaces. The final choice should match the lighting design and project standard."
  },
  {
    question: "What information is needed for a custom quotation?",
    answer:
      "A supplier usually needs product size, quantity, PET felt color, LED wattage, CCT, dimming type, destination country, packaging requirements, and project schedule."
  },
  {
    question: "Are PET felt pendant lights suitable for OEM or private label orders?",
    answer:
      "Yes, many PET felt pendant lights can be customized for OEM or private label orders, including colors, dimensions, LED options, packaging, and labels. MOQ and development cost should be confirmed with the manufacturer."
  }
];

export function generateMetadata() {
  return createPageMetadata({
    pathname,
    title: seoTitle,
    description,
    images: [{ url: absoluteUrl("/assets/img/pendant/ko-xym-0127-canopy.jpeg") }]
  });
}

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: absoluteUrl("/assets/img/pendant/ko-xym-0127-canopy.jpeg"),
    author: {
      "@type": "Organization",
      name: "FLOSEEK Acoustic Lighting"
    },
    publisher: {
      "@type": "Organization",
      name: "FLOSEEK Acoustic Lighting",
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/assets/img/brand/floseek-logo-header.png")
      }
    },
    mainEntityOfPage: absoluteUrl(pathname)
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  return (
    <>
      <SiteHeader content={content} ctaHref="#quote" />
      <main id="top" className="blog-article-page">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <section className="article-hero section-dark">
          <div className="wrap article-hero-grid">
            <div className="article-hero-copy reveal">
              <p className="eyebrow">Selection Guide</p>
              <h1>{title}</h1>
              <p>
                A procurement-ready B2B guide for selecting PET felt acoustic
                pendant lights by room function, acoustic objective, LED
                specification, material, installation and RFQ scope.
              </p>
              <div className="hero-actions">
                <a className="btn primary" href="#quote" data-contact-popup>Send Your Requirements</a>
                <a className="btn glass" href="/products/acoustic-pendant-lights">
                  View Product Families
                </a>
              </div>
            </div>
            <figure className="article-hero-media reveal delay-1">
              <img
                src="/assets/img/pendant/ko-xym-0127-canopy.jpeg"
                alt="PET felt acoustic canopy pendant light for commercial project selection"
                width="1600"
                height="1200"
                loading="eager"
              />
              <figcaption>Commercial acoustic pendant lights should be selected by room function, not only by product shape.</figcaption>
            </figure>
          </div>
        </section>

        <div className="article-content-layout wrap">
        <article className="article-body">
          <div className="article-meta reveal">
            <span>Commercial acoustic lighting</span>
            <span>Approx. 12 min read</span>
            <span>For architects, distributors, contractors and OEM buyers</span>
          </div>

          <section className="article-section reveal">
            <h2>You Are Not Just Choosing a Pendant Light</h2>
            <p>
              The most expensive mistake in a commercial acoustic lighting project
              is not choosing the wrong shape. It is choosing a fixture that looks
              good in a catalog but fails the room in practice.
            </p>
            <p>
              A PET felt acoustic pendant light may arrive on time and still
              create problems if it produces glare above desks, does not provide
              enough light on the table, lacks useful acoustic data for the
              project, uses the wrong dimming system, has unconfirmed material
              documentation, or cannot be installed at the planned ceiling height.
            </p>
            <p>
              This guide is written for architects, interior designers,
              contractors, distributors, facility managers, lighting brands and
              OEM buyers who need to choose PET felt acoustic pendant lights for
              real commercial projects, not just for a product mood board.
            </p>
          </section>

          {sections.map((section) => (
            <section className="article-section reveal" key={section.heading}>
              <h2>{section.heading}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.image ? (
                <figure className="article-image">
                  <img src={section.image.src} alt={section.image.alt} loading="lazy" />
                  <figcaption>{section.image.caption}</figcaption>
                </figure>
              ) : null}
              {section.cta ? (
                <div className="article-inline-cta" id="quote">
                  <div>
                    <span>Project quotation support</span>
                    <h3>Need help matching acoustic pendant lights to your project?</h3>
                    <p>
                      Send drawings, target quantity, LED requirements and PET felt color.
                      We can recommend suitable models and quotation options.
                    </p>
                  </div>
                  <a className="btn primary" href={mailtoHref("PET Felt Acoustic Pendant Light Project Requirements")} data-contact-popup>
                    Send Your Requirements
                  </a>
                </div>
              ) : null}
            </section>
          ))}

          <section className="article-section article-faq reveal">
            <h2>FAQ</h2>
            {faqs.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </section>

          <section className="article-section reveal">
            <h2>Conclusion</h2>
            <p>
              Choosing PET felt acoustic pendant lights is a commercial project
              decision, not a catalog selection. The best product is the one that
              matches room function, acoustic objective, lighting comfort,
              material requirement, installation condition, document needs and
              budget.
            </p>
            <p>
              Before placing an order, define the room, confirm acoustic and
              lighting targets, review PET felt material, check installation
              details, request only the documents needed for the exact project,
              and compare quotation scope carefully.
            </p>
          </section>

          <RelatedArticles currentPath={pathname} />

          <section className="article-final-cta reveal">
            <p className="eyebrow">Get a Quote</p>
            <h2>Need PET felt acoustic pendant lights for a commercial project?</h2>
            <p>
              Send your drawings, quantity, target market and lighting requirements
              to request a product recommendation, catalog and quotation.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href={mailtoHref("PET Felt Acoustic Pendant Light Quotation")} data-contact-popup>
                Get a Quote
              </a>
              <a className="btn glass" href="/contact" data-contact-popup>Contact Us</a>
            </div>
          </section>
        </article>
        <ArticleBrandCard />
        </div>
      </main>
      <SiteFooter content={content} />
    </>
  );
}
