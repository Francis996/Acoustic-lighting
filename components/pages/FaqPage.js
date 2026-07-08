import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import { InlineContactCta } from "../InlineContactCta";
import { inquiryEmail, mailtoHref } from "../inquiryConfig";

export const faqGroups = [
  {
    label: "Acoustic lighting basics",
    title: "Basic acoustic lighting questions",
    items: [
      {
        question: "What is acoustic lighting?",
        answer: "Acoustic lighting combines a light fixture with sound-absorbing material, so one product can support illumination and room acoustic comfort."
      },
      {
        question: "What is PET felt?",
        answer: "PET felt is a polyester fiber acoustic material. It is commonly used for acoustic panels, baffles and decorative acoustic lighting bodies."
      },
      {
        question: "Can acoustic lights replace all acoustic panels?",
        answer: "Not always. Acoustic lights help add absorption near the ceiling or seating zone, but large noisy rooms may still need wall panels, ceiling panels or other acoustic treatment."
      },
      {
        question: "Where are acoustic lights usually used?",
        answer: "Common spaces include offices, meeting rooms, classrooms, libraries, restaurants, hotels, reception areas and commercial interiors."
      },
      {
        question: "Are acoustic lights mainly decorative or functional?",
        answer: "They are both. The product should provide useful light while the PET felt body adds acoustic surface area and a softer interior feeling."
      },
      {
        question: "Do acoustic lights reduce echo?",
        answer: "They can help reduce reflected sound, especially around desks, meeting tables and lounge zones. Final acoustic results depend on room size, surface materials and product quantity."
      }
    ]
  },
  {
    label: "Products and customization",
    title: "Product selection and customization",
    items: [
      {
        question: "Which acoustic lighting types does FLOSEEK supply?",
        answer: "We focus on acoustic pendant lights, acoustic linear lights, ceiling and wall acoustic lighting, acoustic floor lamps and selected PET felt acoustic products."
      },
      {
        question: "Can you customize size, shape and color?",
        answer: "Yes. Size, shape, PET felt color, CCT, wattage, dimming, suspension, canopy, label and packaging can be discussed by model and order plan."
      },
      {
        question: "Can I choose a PET felt color from a color card?",
        answer: "Yes. Please confirm the final color number with our sales team before sampling or production because color series can vary by material type and batch."
      },
      {
        question: "Can you make OEM or private-label acoustic lights?",
        answer: "Yes. OEM and private-label requests can include product specification, logo, carton marks, instruction sheet and packaging details."
      },
      {
        question: "Can you develop a completely new acoustic lighting design?",
        answer: "Possible projects should be reviewed by our engineering team. Please share drawings, target dimensions, quantity, material expectation and market requirements first."
      },
      {
        question: "Can the light source, CCT and dimming be changed?",
        answer: "Many models can be discussed with 3000K, 4000K, 6000K or dimming options such as 1-10V or DALI. Final options depend on the fixture structure and driver selection."
      },
      {
        question: "Can you provide product drawings or specification sheets?",
        answer: "Yes. Tell us the model and project stage. For custom items, drawings are usually confirmed after requirement review."
      }
    ]
  },
  {
    label: "B2B purchasing",
    title: "MOQ, payment, samples and delivery",
    items: [
      {
        question: "What is the MOQ?",
        answer: "MOQ can start from 1 piece. Standard catalog styles, samples and custom projects can all be discussed by model, material, customization level and packaging request."
      },
      {
        question: "Can I buy one sample before a bulk order?",
        answer: "Yes. Regular styles can usually be prepared within 7 days. Styles customized from customer drawings usually take about 15-20 days for sample development and confirmation."
      },
      {
        question: "Is the sample free?",
        answer: "Sample cost depends on model and customization. Please confirm with sales; some sample cost may be reviewed again when a bulk order is placed."
      },
      {
        question: "What are the payment terms?",
        answer: "The standard payment term is 30% deposit before production and 70% balance before shipment after inspection approval. Final terms are confirmed on the proforma invoice."
      },
      {
        question: "What is the production lead time?",
        answer: "Bulk order lead time is usually about 30 days after order confirmation. The final schedule depends on sample approval, material preparation, quantity, driver availability, packaging and shipment timing."
      },
      {
        question: "What packaging do you use?",
        answer: "Normal packaging is product inner box plus outer carton. Customized packaging, labels, carton marks or private-label packing can be arranged according to customer requirements."
      },
      {
        question: "Can you support urgent orders?",
        answer: "Sometimes. Please share model, quantity, deadline and destination country. We will check material stock and production capacity before confirming."
      },
      {
        question: "Can you ship internationally?",
        answer: "Yes. We support export orders. Shipping method, Incoterms, packing volume and documents should be confirmed with the sales team."
      },
      {
        question: "Can I use my own forwarder?",
        answer: "Usually yes. Please provide forwarder contact and shipping instructions early so carton labels and pickup timing can be coordinated."
      }
    ]
  },
  {
    label: "Project coordination",
    title: "Engineering and project cooperation",
    items: [
      {
        question: "What information should I send for a project quotation?",
        answer: "Send room type, drawings, ceiling height, quantity, target model, size, PET felt color, CCT, dimming, voltage, destination country and required delivery time."
      },
      {
        question: "Can you help choose models for a project?",
        answer: "Yes. Our team can suggest suitable product families from your room type, ceiling condition, budget, style and quantity. Final design approval remains with the project designer or buyer."
      },
      {
        question: "Can acoustic lights work with office layouts?",
        answer: "Yes. Linear lights can follow workstation rows, and pendants can be placed above meeting tables, reception desks, lounge zones or collaborative areas."
      },
      {
        question: "Can you help with installation details?",
        answer: "We can provide basic mounting and suspension information. Site installation should be checked by local electricians, contractors or engineers."
      },
      {
        question: "What should architects or designers prepare?",
        answer: "A reflected ceiling plan, room dimensions, ceiling height, fixture schedule, desired light level, color palette and acoustic goals will make review faster."
      },
      {
        question: "Can you match a project color palette?",
        answer: "We can help compare PET felt color numbers with your palette. For important projects, confirm with material swatches and a sample before bulk production."
      },
      {
        question: "Can you support dimming systems for commercial projects?",
        answer: "Some models support dimming options. Please confirm control type, driver requirement and local electrical standard before quotation."
      }
    ]
  },
  {
    label: "Personal buyers and company",
    title: "Small orders, quality and company questions",
    items: [
      {
        question: "Can personal project buyers purchase acoustic lights?",
        answer: "Yes, but these products are mainly built for B2B and project supply. For small personal projects, please contact sales to confirm MOQ, shipping cost and installation suitability."
      },
      {
        question: "Are acoustic lights suitable for home use?",
        answer: "Some models may suit home offices, studios or dining spaces, but voltage, installation, size and shipping cost should be checked before purchase."
      },
      {
        question: "What quality checks are done before shipment?",
        answer: "Typical checks include product appearance, dimensions, PET felt color, LED power-on test, dimming test when required, accessories, carton marks and packaging condition."
      },
      {
        question: "Do you provide certificates?",
        answer: "Certificates and market-specific documents should be confirmed by product specification and target market. FLOSEEK can support certificate materials through the KingOrnan parent brand when needed."
      },
      {
        question: "What is the warranty?",
        answer: "Warranty can be arranged from 2 to 5 years according to customer and project requirements. Final warranty terms depend on model, LED driver, order contract and application conditions."
      },
      {
        question: "Where is FLOSEEK based?",
        answer: "FLOSEEK works through the KingOrnan support system, with sales support in Ningbo, Zhejiang, China and manufacturing support in Zhongshan, Guangdong, China."
      },
      {
        question: "When was FLOSEEK registered as a brand?",
        answer: "KingOrnan began acoustic lighting development in 2024. FLOSEEK was officially registered as a brand in 2025 under KingOrnan, with acoustic lighting as its main product category."
      },
      {
        question: "Who should I contact if my question is not listed?",
        answer: "Contact our sales team for quotation, MOQ, payment and shipping. Contact our engineering team through sales for drawings, custom structures and project technical checks."
      }
    ]
  }
];

export function FaqPage({ content }) {
  const allItems = faqGroups.flatMap((group) => group.items);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allItems.map((item) => ({
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
      <SiteHeader content={content} ctaHref="/contact" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="faq-page" id="top">
        <section className="faq-hero section-dark">
          <div className="wrap faq-hero-grid">
            <div className="faq-hero-copy">
              <p className="eyebrow">FAQ</p>
              <h1>Acoustic lighting questions for B2B and project buyers.</h1>
              <p>
                Short answers about PET felt acoustic lighting, customization, MOQ from 1 piece,
                payment, samples, lead time, warranty, packaging and project purchasing.
              </p>
              <div className="hero-actions">
                <a className="btn primary" href="/contact" data-contact-popup>Contact Sales</a>
                <a className="btn glass" href={mailtoHref("Acoustic Lighting FAQ Question")} data-contact-popup>
                  Email a Question
                </a>
              </div>
            </div>
            <div className="faq-hero-panel">
              <strong>Before asking for a quote</strong>
              <span>Send model, quantity, country, CCT, dimming, color, packaging needs and project schedule.</span>
              <a href="/products">View product range</a>
            </div>
          </div>
        </section>

        <section className="section faq-index-section">
          <div className="wrap faq-index-grid">
            {faqGroups.map((group) => (
              <a href={`#${group.label.toLowerCase().replaceAll(" ", "-")}`} key={group.label}>
                <span>{group.items.length}</span>
                <strong>{group.label}</strong>
              </a>
            ))}
          </div>
        </section>

        <section className="section section-soft">
          <div className="wrap">
            <InlineContactCta
              eyebrow="Question Routing"
              title="Have a model, MOQ, payment or engineering question not covered here?"
              text="Send the uncertain points with your target product and market. We will confirm what is standard and what needs sales or engineering review."
              cta="Ask FLOSEEK"
            />
          </div>
        </section>

        <section className="faq-library-section">
          <div className="wrap faq-library-grid">
            {faqGroups.map((group) => (
              <section
                className="faq-group"
                id={group.label.toLowerCase().replaceAll(" ", "-")}
                key={group.label}
              >
                <div className="faq-group-head">
                  <p className="eyebrow dark">{group.label}</p>
                  <h2>{group.title}</h2>
                </div>
                <div className="faq-list">
                  {group.items.map((item, index) => (
                    <details open={index === 0} key={item.question}>
                      <summary>{item.question}</summary>
                      <p>{item.answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="faq-cta-section section-dark">
          <div className="wrap faq-cta-grid">
            <div>
              <p className="eyebrow">Still checking details?</p>
              <h2>Send the uncertain points to our sales team.</h2>
              <p>
                For MOQ, payment, certificates, lead time, project drawings or a custom
                structure, the safest answer depends on your exact model and market.
              </p>
            </div>
            <div className="faq-cta-actions">
              <a className="btn primary" href="/contact" data-contact-popup>Send Project Inquiry</a>
              <a className="office-email-link" href={mailtoHref("Acoustic Lighting FAQ Question")} data-contact-popup>
                {inquiryEmail}
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter content={content} />
    </>
  );
}
