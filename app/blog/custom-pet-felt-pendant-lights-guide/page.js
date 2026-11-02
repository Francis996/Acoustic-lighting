import content from "../../../content/siteContent.json";
import { SiteFooter } from "../../../components/SiteFooter";
import { SiteHeader } from "../../../components/SiteHeader";
import { ArticleBrandCard } from "../../../components/ArticleBrandCard";
import { RelatedArticles } from "../../../components/RelatedArticles";
import { mailtoHref } from "../../../components/inquiryConfig";
import { absoluteUrl, createPageMetadata } from "../../../lib/metadata";

const pathname = "/blog/custom-pet-felt-pendant-lights-guide";
const title = "Custom PET Felt Pendant Lights: Color, Shape, LED, MOQ and OEM Process";
const seoTitle = "Custom PET Felt Pendant Lights: Options, MOQ & OEM Process";
const description = "Plan custom PET felt pendant lights with clear choices for color, shape, size, LED, MOQ, samples and bulk quality control. Includes an RFQ checklist.";
const heroImage = "/assets/img/blog/custom-pet-felt-pendant-lights-hero.webp";

const optionsRows = [
  ["Felt color or texture", "Series, color code, physical swatch and finish", "Sample appearance, cut edges and production color range"],
  ["Size", "Width, depth, weight and finished hanging height", "Drawing, support, carton and acoustic evidence"],
  ["Shape and felt pattern", "Ribs, folds, layers and exposed surfaces", "Prototype, assembly method and complete fixture acoustic data"],
  ["LED and optic", "Delivered lumens, CCT, CRI, distribution and diffuser", "Photometric file, thermal review and electrical documents"],
  ["Driver and controls", "Supply voltage, dimming protocol and driver access", "Compatibility, wiring and service plan"],
  ["Suspension and canopy", "Cable positions, fixing, power entry and installed drop", "Structure, ceiling coordination and installation sheet"],
  ["Branding and packing", "Label, manual, carton artwork and protection", "Artwork proof, carton sample and packing inspection"]
];

const routeRows = [
  ["Configured model", "Existing ring, listed size, available felt color and listed CCT", "Is this exact combination already documented?"],
  ["Modified model", "Existing drum with a new diameter or suspension", "Which drawing, component, carton or report must change?"],
  ["New structure", "Original felt form around a selected light engine", "Who owns the design and what validation is needed?"],
  ["Private label", "Repeatable model with buyer labels, manuals and cartons", "Which variants can share components and approvals?"]
];

const ledRows = [
  ["Light source", "Integrated LED or replaceable lamp holder for this product family?"],
  ["Output", "Delivered lumens and maintained light on the table or desk?"],
  ["Distribution", "Downlight, direct and indirect light, diffuser, lens or another optic?"],
  ["Appearance", "CCT, CRI and consistency across the installation?"],
  ["Glare", "Which seated views, screens or workstations need checking?"],
  ["Controls", "Non dimming, 1–10 V, DALI or another project method?"],
  ["Electrical", "Destination voltage, driver model, location and access?"],
  ["Evidence", "Does the IES or LDT file represent the exact offered build?"]
];

const quantityRows = [
  ["Prototype quantity", "How many samples are needed for design, electrical and site approval?"],
  ["Production MOQ per model", "What is the minimum batch for the finished configuration?"],
  ["MOQ per color", "Can two felt colors share an order or are they separate batches?"],
  ["MOQ per electrical variant", "Can different CCT, driver or voltage versions be combined?"],
  ["Material purchase minimum", "Does a new felt series or special color need extra material commitment?"],
  ["Repeat order MOQ", "Can later replenishment be smaller than the first production run?"]
];

const sampleRows = [
  ["1. Brief", "Reference model, room, quantity, market and deadline", "Feasibility questions and suitable starting family"],
  ["2. Specification", "Color, dimensions, LED and control requirements", "Marked drawing, proposed components and quote scope"],
  ["3. Development terms", "Sample count, budget, tooling and approval points", "Sample cost, production MOQ and estimated schedule"],
  ["4. Prototype", "Feedback from design, electrical and installation reviewers", "Physical sample and applicable draft documents"],
  ["5. Review", "One consolidated change list against a drawing revision", "Revised sample or written response to each comment"],
  ["6. Production reference", "Signed appearance, dimensions, lighting and label approval", "Identified sample and locked bill of materials"],
  ["7. Bulk release", "Purchase order and final variant quantities", "Production, inspection and shipment plan"]
];

const qcRows = [
  ["Identity", "Model, revision, felt code, LED and driver option, destination market"],
  ["Appearance", "Approved sample, felt face and edge, joins and allowed variation"],
  ["Dimensions", "Critical sizes and agreed measurement tolerances"],
  ["Lighting", "LED and driver references, CCT, output and functional check"],
  ["Mechanical", "Suspension hardware, cables, canopy, mass and assembly"],
  ["Documents", "Rating label, instructions and applicable report versions"],
  ["Packing", "Carton dimensions, protection, marks, quantity and spares"],
  ["Inspection", "Checkpoints, sampling method, failure handling and photo record"]
];

const rfqRows = [
  ["Buyer and market", "Company, destination country, use and required documents"],
  ["Reference", "Catalogue model, photo, sketch or dimensioned drawing"],
  ["Geometry", "Overall size, felt construction, weight limit and hanging height"],
  ["Material", "Felt series and code, physical color reference, finish and edge treatment"],
  ["Lighting", "Output or room target, CCT, CRI, optic and glare requirements"],
  ["Electrical", "Voltage, driver access, controls and wiring interface"],
  ["Acoustic", "Room target and whether complete fixture absorption data is needed"],
  ["Mounting", "Canopy, suspension, fixing, ceiling and site constraints"],
  ["Branding", "Logo, rating label, manual language and carton artwork"],
  ["Quantities", "Sample count and split by color, electrical and market variant"],
  ["Timing", "Sample approval, bulk delivery and shipping destination"],
  ["Approval", "Drawing sign off, production reference, inspection criteria and reports"]
];

const faqs = [
  { question: "Can PET felt acoustic pendants be made in a custom color?", answer: "Often, yes. Start with the available felt series and a physical swatch. A color outside that series may need material matching and a separate minimum purchase. Confirm the model, felt code and batch terms in the quote." },
  { question: "Can the pendant shape or diameter be customized?", answer: "Many projects can start from an existing family and change dimensions or the felt body. The feasibility, price, evidence and packaging depend on how far the new build moves from the approved model. Ask for a dimensioned drawing and sample for a substantial change." },
  { question: "What is the MOQ for a custom PET felt pendant?", answer: "There is no reliable universal MOQ for every custom build. Ask separately about the sample, finished model, felt color and electrical variant. FLOSEEK says orders can start from one piece, but the specific custom configuration needs its own quoted minimum." },
  { question: "How long does a custom sample take?", answer: "Timing depends on the starting model, completeness of the brief, material availability, revision rounds and any testing. Agree a dated sample plan after the drawing and components are defined." },
  { question: "Can one order combine several colors and CCTs?", answer: "Possibly. List every color and electrical combination with its quantity, then ask which variants can share a production batch and which carry separate minimums or lead times." },
  { question: "Does a new felt color change the acoustic result?", answer: "Color alone does not establish a performance change. Check whether the felt construction, thickness or finish has changed and whether available acoustic evidence covers the proposed complete pendant." },
  { question: "Can a custom pendant use DALI dimming?", answer: "DALI is among FLOSEEK's project options. Confirm that the selected luminaire, driver, voltage and control system are compatible; approve the wiring information and sample for that combination." },
  { question: "What is a golden sample?", answer: "It is an identified finished sample approved as the reference for production. Link it to the drawing revision, felt code, LED, driver, labels and any agreed exceptions." },
  { question: "What documents should accompany an OEM order?", answer: "Ask for the approved drawing and controlled specification, sample record, variant schedule, installation and electrical information, packing specification and the evidence required by the destination market and contract." }
];

const relatedLinks = [
  ["Custom Acoustic Lighting Solutions", "/custom-acoustic-lighting-solutions"],
  ["PET Felt Acoustic Pendant Lights", "/products/acoustic-pendant-lights"],
  ["PET Felt Acoustic Material Lighting Guide", "/blog/pet-felt-acoustic-material-lighting-guide"],
  ["Commercial Acoustic Lighting Specification Guide", "/blog/commercial-acoustic-lighting-specification"],
  ["LED Acoustic Pendant Light Specification Guide", "/blog/led-acoustic-pendant-light-specification-guide"],
  ["NRC, αw and Sabins Explained", "/blog/nrc-alpha-w-sabins-acoustic-lighting"],
  ["Acoustic Pendant Light Placement Guide", "/blog/acoustic-pendant-light-placement-guide"],
  ["How to Compare PET Felt Acoustic Lighting Manufacturers", "/blog/how-to-compare-pet-felt-acoustic-lighting-manufacturers"],
  ["Is Acoustic Lighting Worth the Cost?", "/blog/is-acoustic-lighting-worth-the-cost"]
];

const references = [
  ["ISO 354: Measurement of sound absorption in a reverberation room", "https://www.iso.org/standard/34545.html"],
  ["ISO 20189: Rating the sound absorption of single interior objects", "https://www.iso.org/standard/67230.html"],
  ["IES: Understanding photometric IES files", "https://ies.org/education/learn-about-ies-files/"],
  ["FLOSEEK: Custom acoustic lighting solutions", "https://www.floseek.com/custom-acoustic-lighting-solutions"],
  ["FLOSEEK: Contact and sample information", "https://www.floseek.com/contact"]
];

function ArticleTable({ columns, rows }) {
  return <div className="article-table-wrap"><table className="article-table"><thead><tr>{columns.map((column) => <th key={column}>{column}</th>)}</tr></thead><tbody>{rows.map((row) => <tr key={row[0]}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}</tbody></table></div>;
}

function ArticleImage({ src, alt, caption, width, height, eager = false }) {
  return <figure className="article-image"><img src={src} alt={alt} width={width} height={height} loading={eager ? "eager" : "lazy"} /><figcaption>{caption}</figcaption></figure>;
}

export function generateMetadata() {
  return createPageMetadata({ pathname, title: seoTitle, description, images: [{ url: absoluteUrl(heroImage) }] });
}

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org", "@type": "Article", headline: title, description, image: absoluteUrl(heroImage),
    datePublished: "2026-10-30", dateModified: "2026-10-30",
    author: { "@type": "Organization", name: "FLOSEEK Acoustic Lighting" },
    publisher: { "@type": "Organization", name: "FLOSEEK Acoustic Lighting", logo: { "@type": "ImageObject", url: absoluteUrl("/assets/img/brand/floseek-logo-header.png") } },
    mainEntityOfPage: absoluteUrl(pathname)
  };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) };
  const steps = [
    "Choose a catalogue family or supply a clear reference sketch.",
    "List requested changes to felt, shape, size, light, controls, suspension and packaging.",
    "Agree the drawing, variant quantities, sample cost, production minimum and schedule.",
    "Review the physical prototype and matching technical documents.",
    "Approve an identified production sample and locked component specification.",
    "Inspect bulk production and packed units against the approved reference."
  ];
  const howToSchema = { "@context": "https://schema.org", "@type": "HowTo", name: "How to order custom PET felt pendant lights", description, step: steps.map((text, position) => ({ "@type": "HowToStep", position: position + 1, text })) };

  return <>
    <SiteHeader content={content} ctaHref="#custom-quote" />
    <main id="top" className="blog-article-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <section className="article-hero section-dark"><div className="wrap article-hero-grid">
        <div className="article-hero-copy reveal"><p className="eyebrow">Custom Pendant Buyer Guide</p><h1>{title}</h1><p>A custom pendant is more than a color choice. See how a change to the felt, form or light affects the sample, price, evidence and repeat order.</p><div className="hero-actions"><a className="btn primary" href="#custom-quote" data-contact-popup>Request a Custom Sample Quote</a><a className="btn glass" href="#quick-answer">Explore Custom Options</a></div></div>
        <ArticleImage src={heroImage} alt="Three realistically scaled PET felt pendant concepts in grey, olive and terracotta above a design table with color swatches" caption="Choose the form, felt and light together, then confirm the final combination with a physical sample." width="1672" height="941" eager />
      </div></section>

      <div className="article-content-layout wrap"><article className="article-body">
        <div className="article-meta reveal"><span>Custom pendant and OEM guide</span><span>Approx. 17 min read</span><span>For designers, distributors and project buyers</span></div>

        <section className="article-section reveal" id="quick-answer"><h2>What can you customize on a PET felt pendant?</h2>
          <p><strong>Color, size, shape, LED output, optic, controls, suspension and packaging may all be customizable.</strong> Availability depends on the selected product family. Ask what changes from the reference model, what must be sampled and which documents still apply.</p>
          <p>Think of a tailored jacket. Changing its color is one decision; changing the cut, fabric and fasteners creates a different piece of work. A pendant behaves much the same way: each design change can affect the build and its approvals.</p>
          <ArticleTable columns={["Request", "Specify", "What may need review"]} rows={optionsRows} />
          <p>Start with a named model from the <a href="/products/acoustic-pendant-lights">FLOSEEK acoustic pendant range</a>. Ring, drum, canopy, petal, linear and disc families do not all share the same light source, optic or mounting options.</p>
        </section>

        <section className="article-section reveal"><h2>First decide how far the request goes</h2>
          <p>A marked change list tells the supplier more than the word “custom.” It makes clear what stays from an existing product and what needs development.</p>
          <ArticleTable columns={["Route", "Example", "Question before quoting"]} rows={routeRows} />
          <p>A distributor may order a configured model for a showroom, modify a sample for one project, then build a private label collection. Each step can have a different price, sample route and production minimum.</p>
        </section>

        <section className="article-section reveal"><h2>Approve PET felt color in your hand, not only on screen</h2>
          <p>Two screens can show the same photograph in different shades. Felt also has texture: its face, cut edge and underside may look different under the proposed lamp. Record the felt series, supplier code and an identified physical swatch.</p>
          <ArticleImage src="/assets/img/linear/type-a-felt-colors.webp" alt="Physical PET felt swatches arranged in rows of neutral, warm, blue and green colors" caption="A color card helps narrow the choice. Approve the actual felt series and a physical swatch under the room's planned light before production." width="1156" height="727" />
          <ol className="article-list"><li>Choose an available series or send a physical target.</li><li>View real swatches beside the furniture, ceiling finish and intended light color.</li><li>Approve a finished sample when the felt is folded, layered or visible from both sides.</li><li>Record acceptable variation and keep an identified reference for repeat orders.</li></ol>
          <p>A Pantone, RAL or screen color is a useful target, but it cannot guarantee an identical appearance on textured PET felt. If a new material color is needed, ask about matching rounds, material minimum, extra cost and timing. See our <a href="/blog/pet-felt-acoustic-material-lighting-guide">PET felt material guide</a> for construction and finish checks.</p>
        </section>

        <section className="article-section reveal"><h2>Shape and size changes affect the whole object</h2>
          <p>Enlarging a pendant is not like enlarging a photograph. More felt may need a different frame, new suspension points, another carton or a revised light distribution. A deeper body can hide the LED from one viewpoint while blocking useful light from another.</p>
          <p>Request a dimensioned drawing with overall size, finished weight, felt thickness and layers, luminous opening, cable positions, canopy and fixing, driver access, installed bottom height and packed dimensions. Check whether a large ring fits doors and lifts on its route to the ceiling.</p>
          <p>The room still decides whether the new object works. Review sightlines, headroom, sprinklers, HVAC and the work plane calculation with the <a href="/blog/acoustic-pendant-light-placement-guide">pendant placement guide</a>.</p>
          <div className="article-subsection"><h3>Acoustic evidence must follow the new geometry</h3><p>A flat felt NRC is material information, not the sound absorption of the finished pendant. <a href="https://www.iso.org/standard/34545.html" target="_blank" rel="noreferrer">ISO 354</a> distinguishes absorption coefficients for materials from equivalent absorption area for objects; <a href="https://www.iso.org/standard/67230.html" target="_blank" rel="noreferrer">ISO 20189</a> covers assessment of single interior objects. If the room design uses a per-pendant acoustic value, ask whether the redesigned fixture matches the tested configuration. Our <a href="/blog/nrc-alpha-w-sabins-acoustic-lighting">NRC, αw and sabins guide</a> explains the units.</p></div>
        </section>

        <section className="article-section reveal"><h2>LED options: describe the light people will receive</h2>
          <p>“30 W LED” tells you electricity input, much as a tap rating tells you flow without showing where water lands. It does not define useful light on a desk, glare or how colors appear. Specify the light and electrical parts together.</p>
          <ArticleTable columns={["Item", "RFQ question"]} rows={ledRows} />
          <p>FLOSEEK lists integrated LED or lamp holder options depending on the family, along with non dimming, 1–10 V and DALI project options. Confirm the exact combination for the destination market. Changing the LED, diffuser or optic may make an older photometric file unrepresentative; the <a href="https://ies.org/education/learn-about-ies-files/" target="_blank" rel="noreferrer">IES guide to photometric files</a> explains why light distribution data matters. Our <a href="/blog/led-acoustic-pendant-light-specification-guide">LED specification guide</a> covers the detailed lighting questions.</p>
        </section>

        <section className="article-section reveal" id="moq"><h2>What does MOQ mean for a custom pendant?</h2>
          <p><strong>MOQ means minimum order quantity.</strong> A supplier may accept one prototype while a new felt color, driver, carton or tooling needs a larger production batch. Ask for the minimum at each level rather than one unexplained number.</p>
          <ArticleTable columns={["Quantity", "What it answers"]} rows={quantityRows} />
          <p>FLOSEEK&apos;s <a href="/contact">contact page</a> says MOQ can start from one piece. That is useful for starting a conversation, but a newly developed specification needs its own sample and bulk terms. Ask whether development or tooling charges apply, who owns dedicated tooling and whether any charge can be credited to production.</p>
          <div className="article-subsection"><h3>A 120 piece example</h3><p>Suppose you need 120 pendants in two felt colors with 3000 K LED and DALI. “MOQ 50” leaves a crucial question open: 50 total, 50 per color or 50 for each color and driver combination? Ask for a variant matrix with quantity, unit price, sample cost, one time charges and lead time for each line. If a later site may need only 12 matching units, price that replenishment route now.</p></div>
        </section>

        <section className="article-section reveal"><h2>OEM, ODM and project customization</h2>
          <ul className="article-list"><li><strong>Project customization:</strong> adapt an existing model for one room or project schedule.</li><li><strong>OEM or private label:</strong> supply the agreed product with buyer labels, instructions and packaging.</li><li><strong>ODM or product development:</strong> develop or adapt a design for repeat supply.</li></ul>
          <p>The label alone does not settle drawing ownership, exclusivity or tooling rights. For a branded collection, put those terms, approved files and the method for future component substitutions in writing. FLOSEEK describes its broader <a href="/custom-acoustic-lighting-solutions">custom acoustic lighting process</a> on the service page.</p>
        </section>

        <section className="article-section reveal"><h2>From brief to approved sample</h2>
          <p>The sample clock starts when the brief is clear enough to build. If color, driver and dimensions are still moving, a promised date is only a guess. Agree milestones and revision rounds in the project quotation.</p>
          <ArticleTable columns={["Stage", "Buyer provides or approves", "Supplier returns"]} rows={sampleRows} />
          <p>At the prototype review, handle the pendant as an installer would: compare felt to the swatch, measure its size and drop, switch it on at the intended color and dim level, check driver access and inspect the carton. Link approval to a drawing revision and sample ID. “Looks good” in an email is hard to use when the second shipment arrives.</p>
          <p>Where third party acoustic or electrical tests are required for the changed design, agree that work before fixing an installation date. The construction must be stable enough for the evidence to describe what will be shipped.</p>
        </section>

        <section className="article-section reveal"><h2>Bulk quality control: make the approved sample repeatable</h2>
          <p>A prototype proves one version can be made. Bulk control checks that every carton contains that approved version. The finished sample is the reference; the drawing and component list explain how to repeat it.</p>
          <ArticleTable columns={["Control point", "Record on the approved specification"]} rows={qcRows} />
          <p>If felt, LED, driver or a structural part becomes unavailable, review the proposed substitute before production. Keep the approved drawing, color code, component revision and reference sample for later orders. A familiar model name alone does not guarantee an identical second batch.</p>
        </section>

        <section className="article-section reveal" id="rfq"><h2>Copy ready RFQ checklist</h2>
          <p>Send one brief that covers the product, room and order. A rendering starts the conversation; the details below make the quote comparable.</p>
          <ArticleTable columns={["RFQ field", "Information to include"]} rows={rfqRows} />
          <p>Attach a reflected ceiling plan for project orders. For a brand program, add label rules, packaging artwork and a forecast by variant. Ask suppliers to show material, light engine, development and logistics as separate quote lines. Our <a href="/blog/how-to-compare-pet-felt-acoustic-lighting-manufacturers">manufacturer comparison guide</a> explains how to review suppliers on the same basis.</p>
        </section>

        <section className="article-section reveal"><h2>Common customization mistakes</h2>
          <div className="article-subsection"><h3>Approving color from a rendering</h3><p>Screen light can hide felt texture and edge color. Approve an identified physical swatch.</p></div>
          <div className="article-subsection"><h3>Changing the body but keeping an old acoustic claim</h3><p>Check whether complete fixture test evidence still applies to the new form.</p></div>
          <div className="article-subsection"><h3>Changing the LED but keeping an old lighting file</h3><p>An altered LED, optic or diffuser can change output and distribution. Request data for the final build.</p></div>
          <div className="article-subsection"><h3>Treating a prototype price as a production price</h3><p>Development and one off freight differ from repeat manufacturing. Compare the full commercial schedule.</p></div>
          <div className="article-subsection"><h3>Leaving variant splits until the purchase order</h3><p>“200 pieces in assorted colors and controls” is not a production plan. List every combination and quantity.</p></div>
          <div className="article-subsection"><h3>Forgetting installation and packing</h3><p>The pendant must fit its fixing, delivery route and carton as well as the design brief.</p></div>
        </section>

        <section className="article-section article-faq reveal"><h2>FAQ</h2>{faqs.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</section>

        <section className="article-section reveal" id="custom-quote"><div className="article-inline-cta"><div><span>Custom pendant sample and quotation</span><h3>Turn your idea into a buildable sample brief.</h3><p>Send the target form, dimensions, felt reference, LED and controls, quantity by variant, destination market and desired sample date. FLOSEEK can confirm the feasible scope and quote sample and production terms.</p></div><a className="btn primary" href={mailtoHref("Custom PET Felt Pendant Sample Quote")} data-contact-popup>Request a Custom Sample Quote</a></div></section>

        <section className="article-section reveal"><h2>Related guides and product pages</h2><ul className="article-link-list">{relatedLinks.map(([label, href]) => <li key={href}><a href={href}>{label}</a></li>)}</ul></section>
        <RelatedArticles currentPath={pathname} />
        <section className="article-final-cta reveal"><p className="eyebrow">From sample to repeat order</p><h2>Specify the change, approve the sample and keep the finished build consistent.</h2><p>FLOSEEK supports custom acoustic lighting with product development, PET felt selection, LED and control options, samples, packaging and B2B supply coordination.</p><div className="hero-actions"><a className="btn primary" href={mailtoHref("Custom Acoustic Pendant Project")} data-contact-popup>Send Project Requirements</a><a className="btn glass" href="/custom-acoustic-lighting-solutions">Explore Custom Solutions</a></div></section>
        <section className="article-section reveal"><h2>Technical and product references</h2><ul className="article-reference-list">{references.map(([label, href]) => <li key={href}><a href={href} target="_blank" rel="noreferrer">{label}</a></li>)}</ul></section>
      </article><ArticleBrandCard /></div>
    </main><SiteFooter content={content} />
  </>;
}
