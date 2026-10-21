import content from "../../../content/siteContent.json";
import { SiteFooter } from "../../../components/SiteFooter";
import { SiteHeader } from "../../../components/SiteHeader";
import { ArticleBrandCard } from "../../../components/ArticleBrandCard";
import { RelatedArticles } from "../../../components/RelatedArticles";
import { mailtoHref } from "../../../components/inquiryConfig";
import { absoluteUrl, createPageMetadata } from "../../../lib/metadata";

const pathname = "/blog/commercial-acoustic-lighting-specification";
const title = "How to Build a Commercial Acoustic Lighting Specification";
const seoTitle = "Commercial Acoustic Lighting Specification Guide";
const description =
  "Build a commercial acoustic lighting specification with copyable clauses for absorption, photometrics, PET felt, controls and installation.";
const heroImage = "/assets/img/blog/commercial-acoustic-lighting-specification-hero.webp";

const quickRows = [
  ["Room performance", "Acoustic and lighting targets for each zone", "Proposed layout, calculations and supporting data", "Acoustic and lighting designers"],
  ["Acoustic contribution", "Required evidence basis and useful frequency bands", "Applicable report, tested configuration and proposed quantity", "Acoustic designer"],
  ["Lighting", "Illuminance, uniformity, glare, colour quality and controls", "IES/LDT file, luminaire schedule and driver information", "Lighting designer"],
  ["PET felt and appearance", "Grade, thickness, colour, finish and sample approval", "Material data, physical swatch and construction drawing", "Architect and project team"],
  ["Safety and market documents", "Destination and project acceptance requirements", "Applicable material and luminaire documents for the offered model", "Responsible specialists and approving authority"],
  ["Installation", "Coordinates, finished height, fixing, power and service access", "Dimensioned drawing, suspension details and installation manual", "Contractor and project designers"],
  ["Substitutions", "What must remain equivalent and how changes are approved", "Marked comparison of every proposed deviation", "Specifier before procurement"]
];

const acousticWordingRows = [
  ["PET felt NRC 0.85", "It may describe a flat sample with a particular backing.", "Label material data clearly; request complete-object absorption evidence when the room calculation depends on the pendant."],
  ["Soundproof acoustic light", "Absorption inside a room does not establish isolation between rooms.", "State the room-acoustic goal and specify sound isolation separately where required."],
  ["One pendant per table for acoustics", "A decorative count may not match the absorption the room needs.", "Calculate quantity from the room target and applicable unit data, then coordinate the lighting layout."],
  ["Reduce RT60 by 30%", "The baseline, frequencies and occupancy condition are missing.", "State the baseline, target, frequency range, condition and method through the acoustic designer."]
];

const scheduleRows = [
  ["Room and fixture tag", "Room code / AL-01", "Reflected ceiling plan and fixture schedule"],
  ["Model and dimensions", "Code / L × W × H", "Dimensioned drawing with revision"],
  ["PET felt", "Maker, grade, thickness and colour", "Material data and approved physical swatch"],
  ["Lighting", "Delivered lm / W / optic / CCT / CRI", "Model-specific datasheet and IES/LDT file"],
  ["Controls", "Protocol / driver / group", "Driver datasheet and wiring diagram"],
  ["Acoustic contribution", "Unit data in relevant frequency bands", "Report with specimen identity and mounting"],
  ["Quantity and position", "Number / coordinates / orientation", "Issued plan and room calculations"],
  ["Installation height", "Bottom above floor and fixed furniture", "Elevation and suspension drawing"],
  ["Safety documents", "Project- and market-specific list", "Exact-model documents and scope review"],
  ["Service and approval", "Driver access / sample / spares", "Manual, approved sample and warranty"]
];

const responsibilityRows = [
  ["Architect / lead specifier", "Design intent, visible dimensions, finish, sample approval and substitution rules", "Approved model, drawing revision and physical sample"],
  ["Acoustic designer", "Room target, frequency range, calculation method and acceptable evidence", "Room model or calculation linked to applicable product data"],
  ["Lighting designer", "Illuminance, uniformity, glare review, CCT, CRI, optics and control intent", "Calculation based on the exact photometric file and mounting layout"],
  ["Electrical / controls designer", "Supply, protocol, driver compatibility, addressing and emergency interface", "Wiring, driver and commissioning information"],
  ["Fire professional / approving authority", "Applicable material and installation acceptance route", "Project-specific report and classification review"],
  ["Supplier", "Exact product configuration and truthful document scope", "Drawings, data, samples, reports, manuals and declared deviations"],
  ["Contractor", "Buildability, fixing, access, coordination and approved installation", "Coordinated shop drawings, method and handover records"]
];

const reviewRows = [
  ["Accept for the stated scope", "Drawing, model, driver and photometric file identify the same product; required calculations pass.", "Record the approved revision, sample and document set."],
  ["Clarify", "The report describes the felt sheet while the room calculation assumes complete-pendant data.", "Request applicable evidence or revise the calculation and claim."],
  ["Reject the substitution", "The proposed driver uses the wrong control method or the fixture clashes with the coordinated ceiling.", "Submit a compliant alternative and rerun affected reviews."]
];

const faqs = [
  {
    question: "What is the minimum information in an acoustic pendant light specification?",
    answer: "Identify the room use, fixture construction, lighting targets, control method, mounting, acoustic evidence basis, project-specific documents and submittal process. A short product description alone is rarely enough for a commercial project."
  },
  {
    question: "Can a specification require NRC 0.85 for a complete acoustic pendant?",
    answer: "It may request material data where relevant, but NRC should not be used as a shortcut for the finished pendant's room contribution. For a discrete suspended fixture, ask the acoustic designer which per-object data and test conditions are needed."
  },
  {
    question: "Should every project require ISO 354 data for each exact fixture?",
    answer: "The evidence needed depends on the claim, product type, available testing and project acceptance route. When a room calculation relies on a quantified fixture contribution, the designer should define acceptable object-level data and how product variants are handled."
  },
  {
    question: "Is UGR a fixed property of a luminaire?",
    answer: "No. The luminaire influences glare, but a UGR calculation also depends on the room, layout, observer position and direction of view. Review the actual project arrangement rather than relying only on a catalogue value."
  },
  {
    question: "Can I copy the sample specification clause without changes?",
    answer: "No. Complete every bracket with project decisions, remove inapplicable items and check local standards and contract requirements. The clause is a drafting framework, not a completed engineering specification."
  },
  {
    question: "How should custom PET felt colours be specified?",
    answer: "Use the material and colour code together with an approved physical sample. Record how replacement batches will be matched and confirm whether the relevant reports cover the selected material variant."
  },
  {
    question: "What if the acoustic and lighting calculations need different quantities?",
    answer: "Set the luminaire quantity from the lighting layout and add unlit treatment where the room needs more absorption. A mixed system is usually better than adding unnecessary light sources only to gain felt area."
  },
  {
    question: "Which documents should accompany an acoustic pendant submittal?",
    answer: "Start with a model-specific datasheet and drawing, IES or LDT file when calculations are required, driver and wiring data, applicable acoustic evidence, PET felt information, project-required safety and fire documents, installation instructions, sample approvals and warranty terms."
  }
];

const relatedLinks = [
  ["How to Choose PET Felt Acoustic Pendant Lights", "/blog/how-to-choose-pet-felt-acoustic-pendant-lights"],
  ["NRC, αw and Sabins Explained", "/blog/nrc-alpha-w-sabins-acoustic-lighting"],
  ["LED Acoustic Pendant Light Specification Guide", "/blog/led-acoustic-pendant-light-specification-guide"],
  ["Fire-Rated PET Felt Lighting: Buyer Document Checklist", "/blog/fire-rated-pet-felt-acoustic-lighting-documents"],
  ["Acoustic Pendant Light Placement Guide", "/blog/acoustic-pendant-light-placement-guide"],
  ["Is Acoustic Lighting Worth the Cost?", "/blog/is-acoustic-lighting-worth-the-cost"],
  ["Acoustic Pendant Lights", "/products/acoustic-pendant-lights"],
  ["Custom Acoustic Lighting Solutions", "/custom-acoustic-lighting-solutions"]
];

const references = [
  ["ISO 354:2003: Measurement of sound absorption in a reverberation room", "https://www.iso.org/standard/34545.html"],
  ["ISO 20189:2018: Rating sound absorption of screens, furniture and single objects", "https://www.iso.org/standard/67230.html"],
  ["IES: Learn about photometric IES files", "https://ies.org/education/learn-about-ies-files/"],
  ["CIE 117: Discomfort glare in interior lighting", "https://www.cie.co.at/publications/discomfort-glare-interior-lighting"],
  ["IEC 60598-1:2024: General requirements and tests for luminaires", "https://webstore.iec.ch/en/publication/66620"]
];

function ArticleTable({ columns, rows }) {
  return (
    <div className="article-table-wrap">
      <table className="article-table">
        <thead><tr>{columns.map((column) => <th key={column}>{column}</th>)}</tr></thead>
        <tbody>{rows.map((row) => <tr key={row[0]}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}</tbody>
      </table>
    </div>
  );
}

function ArticleImage({ src, alt, caption, width, height, eager = false }) {
  return (
    <figure className="article-image">
      <img src={src} alt={alt} width={width} height={height} loading={eager ? "eager" : "lazy"} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export function generateMetadata() {
  return createPageMetadata({ pathname, title: seoTitle, description, images: [{ url: absoluteUrl(heroImage) }] });
}

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: absoluteUrl(heroImage),
    datePublished: "2026-10-21",
    dateModified: "2026-10-21",
    author: { "@type": "Organization", name: "FLOSEEK Acoustic Lighting" },
    publisher: {
      "@type": "Organization",
      name: "FLOSEEK Acoustic Lighting",
      logo: { "@type": "ImageObject", url: absoluteUrl("/assets/img/brand/floseek-logo-header.png") }
    },
    mainEntityOfPage: absoluteUrl(pathname)
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer }
    }))
  };
  const workflowSteps = [
    "Define the room use, acoustic target, lighting criteria and responsible designers.",
    "Identify the exact luminaire construction, finish, LED package, optic and driver.",
    "Set the acoustic evidence basis for the complete object or clearly labelled material data.",
    "Calculate the lighting layout with the exact IES or LDT photometric file.",
    "Coordinate finished height, structure, ceiling services and maintenance access.",
    "List the project- and market-specific material and luminaire documents.",
    "Review every submittal against one room-and-product schedule.",
    "Lock approved drawings, samples, components and reports before production."
  ];
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to build a commercial acoustic lighting specification",
    description,
    step: workflowSteps.map((text, position) => ({ "@type": "HowToStep", position: position + 1, text }))
  };

  return <>
    <SiteHeader content={content} ctaHref="#specification-review" />
    <main id="top" className="blog-article-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <section className="article-hero section-dark">
        <div className="wrap article-hero-grid">
          <div className="article-hero-copy reveal">
            <p className="eyebrow">Architect and Contractor Guide</p>
            <h1>{title}</h1>
            <p>Turn a short product description into a specification that connects room targets, the exact fixture, supporting evidence and the final installed condition.</p>
            <div className="hero-actions">
              <a className="btn primary" href="#specification-review" data-contact-popup>Request a Specification Review</a>
              <a className="btn glass" href="#quick-answer">See What to Specify</a>
            </div>
          </div>
          <ArticleImage
            src={heroImage}
            alt="Architect and lighting consultant reviewing acoustic pendant drawings, photometric data and PET felt samples beside the installed fixture"
            caption="A reliable specification connects the drawing, material sample, calculation file and installed product as one coordinated object."
            width="1672"
            height="941"
            eager
          />
        </div>
      </section>

      <div className="article-content-layout wrap">
        <article className="article-body">
          <div className="article-meta reveal">
            <span>Commercial specification guide</span>
            <span>Approx. 18 min read</span>
            <span>For architects, consultants, contractors and project buyers</span>
          </div>

          <section className="article-section reveal" id="quick-answer">
            <h2>Quick answer: what belongs in an acoustic lighting specification?</h2>
            <p><strong>A commercial acoustic lighting specification should connect four things: the room requirement, the exact product, the evidence behind each claim and the installed configuration.</strong> It should tell the project team what success means, what the supplier must submit and who reviews each item.</p>
            <p>Think of it as a four-link chain: <strong>room → product → proof → installation</strong>. If one link is missing, a good-looking catalogue claim may never reach the real room.</p>
            <ArticleTable columns={["Requirement", "Project team defines", "Supplier submits", "Primary reviewer"]} rows={quickRows} />
            <blockquote className="article-quote">Evidence should identify the exact offered model and configuration—or state clearly where its applicability ends.</blockquote>
          </section>

          <section className="article-section reveal">
            <h2>Why a short schedule description is not enough</h2>
            <p>An architect writes “PET felt acoustic pendant, NRC 0.85, 40 W, UGR &lt;19, dimmable.” Three suppliers can appear to comply while offering three very different things: a felt-sheet report, a light with no model-specific photometric file, or a driver that cannot talk to the building controls.</p>
            <p>The description is like writing “four-door car, efficient engine, automatic” for a fleet purchase. It sounds specific until someone needs to confirm payload, safety evidence, dimensions, fuel system and maintenance. A buildable specification replaces adjectives with requirements that can be checked.</p>
          </section>

          <section className="article-section reveal">
            <h2>1. Start with the room brief</h2>
            <p>Do not begin by copying claims from a product page. Start with what the room must do and who owns each decision.</p>
            <ul className="article-list">
              <li>Room code, use, occupancy, dimensions and ceiling height.</li>
              <li>Furniture layout, work planes, screens and principal viewing positions.</li>
              <li>Existing floor, wall and ceiling finishes, plus any measured acoustic baseline.</li>
              <li>Acoustic target, useful frequencies and calculation method set by the acoustic designer.</li>
              <li>Lighting targets, uniformity, visual comfort and operating scenes set by the lighting designer.</li>
              <li>Structure, sprinklers, detectors, HVAC, AV devices and maintenance routes.</li>
              <li>Destination market and the project&apos;s submittal and approval route.</li>
            </ul>
            <p>A meeting room may prioritise table light, visible faces on video and reduced speech reflections. An open office may give more weight to desk uniformity and screen glare. A restaurant may place warmth and cleanability higher. The same fixture name cannot serve as the full specification for all three.</p>
            <p>If a target has not been decided, say <strong>“to be confirmed by the responsible project designer.”</strong> That is more honest—and more useful—than allowing a supplier&apos;s marketing number to become the target by accident.</p>
          </section>

          <section className="article-section reveal">
            <h2>2. Specify the acoustic result in the right unit</h2>
            <p>A flat felt sample and a suspended light can use the same PET material yet place very different amounts of absorption in a room. It is like comparing fabric by the square metre with a finished upholstered chair: the material matters, but shape, exposed area and construction change the final object.</p>
            <p>For a discrete pendant, ask for the <strong>equivalent sound absorption area per complete object</strong>, ideally in relevant frequency bands and with the tested specimen, dimensions and mounting identified. <a href="https://www.iso.org/standard/34545.html" target="_blank" rel="noreferrer">ISO 354</a> covers reverberation-room measurement, including equivalent absorption area of objects. <a href="https://www.iso.org/standard/67230.html" target="_blank" rel="noreferrer">ISO 20189</a> addresses how discrete interior objects are assessed and rated.</p>
            <p>A material NRC or αw can still be useful material information. It should not quietly become the finished fixture&apos;s per-unit contribution. Read our <a href="/blog/nrc-alpha-w-sabins-acoustic-lighting">plain-English guide to NRC, αw and sabins</a> for the full distinction.</p>
            <ArticleTable columns={["Draft wording", "Why it is incomplete", "More useful requirement"]} rows={acousticWordingRows} />
            <p>Do not promise that a fixed number of lights guarantees a reverberation time unless the complete room has been assessed on that basis. Other finishes, furniture, occupancy and layout all affect the result.</p>
          </section>

          <section className="article-section reveal">
            <h2>3. Specify lighting as a room calculation</h2>
            <p>Wattage measures electrical input. It does not tell the contractor how much useful light reaches a desk. Saying “40 W” is like describing a hose by how much water enters it without showing where the spray lands.</p>
            <p>Ask the lighting designer to define maintained illuminance, uniformity, relevant glare criteria and operating scenes for each zone. Then require an IES or LDT photometric file for the <strong>exact size, LED package, optic and output setting</strong> offered. The <a href="https://ies.org/education/learn-about-ies-files/" target="_blank" rel="noreferrer">Illuminating Engineering Society explains how IES files carry digital light-distribution data for predictive calculations</a>.</p>
            <ul className="article-list">
              <li>Delivered lumens and complete-luminaire input power.</li>
              <li>Mounting height and work plane used in the calculation.</li>
              <li>Light distribution and direct/indirect split where applicable.</li>
              <li>CCT, CRI and any project colour-tolerance requirement.</li>
              <li>Diffuser or optic, driver model and control protocol.</li>
              <li>Emergency-lighting interface only where the project requires it.</li>
            </ul>
            <p>Glare belongs to the arrangement, not just the box. <a href="https://www.cie.co.at/publications/discomfort-glare-interior-lighting" target="_blank" rel="noreferrer">CIE 117</a> notes that UGR depends on observer position and direction of view. Include the actual seated and standing views that matter.</p>
            <p>For definitions of lumens, CCT, CRI, UGR and drivers, use the <a href="/blog/led-acoustic-pendant-light-specification-guide">LED acoustic pendant light specification guide</a>.</p>
          </section>

          <section className="article-section reveal">
            <h2>4. Lock down the product construction</h2>
            <p>“Acoustic pendant” names a category. A contractor needs a build. Identify the approved model or basis of design, shape, dimensions, felt grade and thickness, colour, exposed felt arrangement, frame, diffuser, driver, canopy and suspension kit.</p>
            <p>Reference the physical finish sample by approval date and code. If customisation is allowed, state the permitted range. A different diameter, felt source, optic or driver may change photometrics, acoustic evidence, weight, packaging and document scope.</p>
            <blockquote className="article-quote">Treat the approved configuration like a recipe. Changing one ingredient may be harmless, or it may change the result—but the change must be visible before production.</blockquote>
            <p>FLOSEEK&apos;s <a href="/products/acoustic-pendant-lights">acoustic pendant range</a> includes different forms and configurations. A project schedule should identify the selected configuration rather than applying one family-level description to every size and LED option.</p>
          </section>

          <section className="article-section reveal">
            <h2>5. Name the control system precisely</h2>
            <p>“Dimmable” is a feature, not a controls specification. It is like writing “has a charging port” without saying which plug fits.</p>
            <p>Name DALI, 0–10 V, phase-cut/TRIAC or the other defined project method, together with the matching driver. Where relevant, record circuit or address, intended minimum dim level, control grouping and commissioning responsibility.</p>
            <p>If an alternative changes the driver, require evidence of compatibility with the installed controls and update the schedule. A bench test can be useful when the dimmer, controller and driver combination remains uncertain. The electrician also needs the correct input voltage, wiring, driver location and service-access instructions.</p>
          </section>

          <section className="article-section reveal">
            <h2>6. Keep material fire evidence and luminaire safety evidence separate</h2>
            <p>A PET felt reaction-to-fire report and an electrical safety document for the luminaire answer different questions. Think of them as a building&apos;s fire door certificate and an appliance&apos;s electrical test: both matter, but one cannot replace the other.</p>
            <p>Where the project requires material fire evidence, the responsible fire professional should define the applicable test, classification and acceptance criteria. Compare specimen, thickness, backing, mounting, orientation and permitted scope with the product being supplied. Avoid “fireproof” as a shortcut.</p>
            <p>For the complete luminaire, request documents tied to its actual electrical configuration and destination. <a href="https://webstore.iec.ch/en/publication/66620" target="_blank" rel="noreferrer">IEC 60598-1:2024</a> sets general safety requirements and tests for luminaires; the project team still determines which approvals and declarations apply.</p>
            <p>Use the <a href="/blog/fire-rated-pet-felt-acoustic-lighting-documents">PET felt lighting document checklist</a> to match reports with the offered material and installation.</p>
          </section>

          <section className="article-section reveal">
            <h2>7. Draw the installed condition—not only the cable length</h2>
            <p>“1.2 m suspension” may still leave the bottom of a deep fixture unclear. State the finished bottom height above floor and, where relevant, above fixed furniture. Show centre point, orientation, ceiling elevation and suspension method on the coordinated drawing.</p>
            <ul className="article-list">
              <li>Fixture weight and responsibility for structural fixing.</li>
              <li>Number and location of suspension points.</li>
              <li>Canopy dimensions, power entry and driver location.</li>
              <li>Adjustment tolerance for cable lengths and levelling.</li>
              <li>How the diffuser, driver and felt body are accessed or cleaned.</li>
              <li>Coordination with sprinklers, detectors, HVAC, AV and access panels.</li>
              <li>Headroom and safe access where people pass below.</li>
            </ul>
            <p>There is no responsible universal clearance for every sprinkler or circulation route. Final distances depend on the geometry, system design and locally adopted requirements. Our <a href="/blog/acoustic-pendant-light-placement-guide">placement guide</a> provides a practical drawing workflow.</p>
          </section>

          <section className="article-section reveal">
            <h2>Copyable acoustic pendant specification clause</h2>
            <p>The square brackets below are fields for the responsible project team to complete. They are not universal values or FLOSEEK product claims.</p>
            <blockquote className="article-quote article-specification-template">
              <p><strong>Acoustic pendant luminaire — [project code / location]</strong><br />Provide [quantity] suspended acoustic luminaires, model [approved model or basis of design], overall size [dimensions], with PET felt body [material grade, thickness, construction and approved colour code], frame [finish], diffuser or optic [type] and suspension assembly [description]. Installed bottom of fixture: [height] above finished floor; orientation and coordinates as shown on drawing [reference and revision].</p>
              <p><strong>Lighting</strong><br />The complete offered luminaire shall provide [delivered output or approved range], [CCT and tolerance], [CRI requirement] and [driver/control protocol]. The lighting calculation shall demonstrate [maintained illuminance, uniformity and relevant glare criteria] at [work plane and observer positions] in the issued layout. Provide IES/LDT data for the exact offered size, LED, optic and output setting, plus driver, wiring and commissioning information.</p>
              <p><strong>Acoustics</strong><br />The room target is [target, frequencies, measurement or modelling condition], established by [responsible acoustic designer]. Submit test data for [complete suspended fixture or agreed evidence basis], including frequency-band equivalent absorption area, specimen identity and test mounting. State differences between tested and proposed construction and identify the absorption attributed to the proposed quantity. Label material-only NRC or αw information as such.</p>
              <p><strong>Materials and documents</strong><br />Submit the product drawing, PET felt specification, physical colour sample, applicable acoustic report and [project-specified fire/material documents]. Submit the luminaire safety and electrical documents required for [destination/project], identifying the offered model and configuration. State the scope and limitations of each report.</p>
              <p><strong>Installation and handover</strong><br />Provide dimensioned installation instructions, fixture weight, fixing details, canopy and driver locations, access method, maintenance instructions, labels and warranty terms. Coordinate final locations with structure and ceiling services. Do not change approved felt, frame, LED package, optic, driver, suspension or mounting without a written comparison and project approval.</p>
            </blockquote>
            <p>This wording makes responsibility visible: the supplier documents a product; the project&apos;s designers decide whether that product and layout satisfy the room.</p>
          </section>

          <section className="article-section reveal">
            <h2>Add a one-page schedule beside the clause</h2>
            <p>Long clauses explain the rules. A one-page schedule works like a boarding pass: it puts the exact room, product and evidence in one place so reviewers can see quickly whether everything belongs to the same journey.</p>
            <ArticleTable columns={["Field", "Entry to complete", "Evidence at submittal"]} rows={scheduleRows} />
            <p>Avoid entering a target that the corresponding report or calculation cannot verify. The supplier can propose a product range; the responsible designer still selects and approves the final value.</p>
          </section>

          <section className="article-section reveal">
            <h2>Who decides what?</h2>
            <p>A strong specification does not make the manufacturer responsible for the room design or leave the contractor guessing which claim to trust. It gives each participant a clear lane.</p>
            <ArticleTable columns={["Party", "Owns or defines", "Reviewable output"]} rows={responsibilityRows} />
          </section>

          <section className="article-section reveal">
            <h2>Submittal review: accept, clarify or reject</h2>
            <ArticleTable columns={["Outcome", "Example", "Next step"]} rows={reviewRows} />
            <p><strong>Clarify</strong> is often the right first response. Missing evidence is a reason to resolve a claim before approval; by itself, it is not proof that a product is unsafe or ineffective.</p>
            <p>Before production, lock the approved model, drawings, felt sample, LED, optic, driver, packaging and required reports to the purchase order. When a component changes, identify which calculations and approvals need another look.</p>
          </section>

          <section className="article-section reveal">
            <h2>Common specification mistakes</h2>
            <div className="article-subsection"><h3>Copying a material rating into the luminaire schedule</h3><p>The felt&apos;s NRC or αw may belong to a flat, backed specimen. Label it accurately and request complete-object data where the room calculation requires it.</p></div>
            <div className="article-subsection"><h3>Requiring a catalogue UGR number without a room view</h3><p>Ask the lighting designer to review the actual layout, mounting and viewing directions. A favourable product value is not a room calculation.</p></div>
            <div className="article-subsection"><h3>Naming only wattage and colour temperature</h3><p>Useful light also depends on output, optic, height and distribution. Include photometric data and work-plane criteria.</p></div>
            <div className="article-subsection"><h3>Saying only “dimmable”</h3><p>Name the control protocol, driver and commissioning scope before ordering.</p></div>
            <div className="article-subsection"><h3>Writing “fireproof PET felt”</h3><p>Set the applicable project requirement and request evidence whose specimen and scope match the supplied material and use.</p></div>
            <div className="article-subsection"><h3>Approving a sample but allowing unseen production changes</h3><p>Record the felt grade, colour and construction. Every proposed substitute should trigger a written comparison.</p></div>
            <div className="article-subsection"><h3>Forgetting the maintenance route</h3><p>Check access to the driver, diffuser, suspension and felt surfaces while the ceiling can still change.</p></div>
          </section>

          <section className="article-section reveal">
            <h2>An eight-step specification workflow</h2>
            <ol className="article-list">
              <li><strong>Define the room.</strong> Record use, geometry, finishes, furniture and responsible designers.</li>
              <li><strong>Set measurable targets.</strong> Establish acoustic, lighting, controls and appearance requirements.</li>
              <li><strong>Identify the product.</strong> Fix size, construction, felt, optic, driver and suspension.</li>
              <li><strong>Match the evidence.</strong> Check the specimen, photometric file and document scope against the offered configuration.</li>
              <li><strong>Coordinate the installation.</strong> Resolve height, structure, services, wiring and maintenance access.</li>
              <li><strong>Build one schedule.</strong> Put room, model, values, drawings and evidence in one row.</li>
              <li><strong>Review deviations.</strong> Accept, clarify or reject each proposed change in writing.</li>
              <li><strong>Lock production.</strong> Tie approved components, samples and documents to the purchase order and handover set.</li>
            </ol>
          </section>

          <section className="article-section reveal">
            <h2>The practical finish</h2>
            <p>A strong commercial acoustic lighting specification lets the architect, acoustic consultant, lighting designer, contractor and supplier discuss the <strong>same proposed object</strong>. It also shows immediately which target is confirmed, which document is missing and which change needs another approval.</p>
            <blockquote className="article-quote">Final check: can every meaningful claim be traced to the room brief, one product configuration and a reviewable report, drawing or calculation?</blockquote>
            <p>If yes, competing products can be compared fairly and the approved fixture is less likely to become a surprise on site.</p>
          </section>

          <section className="article-section article-faq reveal">
            <h2>FAQ</h2>
            {faqs.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}
          </section>

          <section className="article-section reveal" id="specification-review">
            <div className="article-inline-cta">
              <div>
                <span>Commercial specification support</span>
                <h3>Make the proposed product, evidence and installed condition agree.</h3>
                <p>Send the room schedule, reflected ceiling plan, preferred form, lighting and acoustic targets, destination and required document list. FLOSEEK can prepare available drawings, product data, material information and quotation details for the project team to review.</p>
              </div>
              <a className="btn primary" href={mailtoHref("Commercial Acoustic Lighting Specification Review")} data-contact-popup>Send Your Specification</a>
            </div>
          </section>

          <section className="article-section reveal">
            <h2>Related guides and product pages</h2>
            <ul className="article-link-list">{relatedLinks.map(([label, href]) => <li key={href}><a href={href}>{label}</a></li>)}</ul>
          </section>

          <RelatedArticles currentPath={pathname} />

          <section className="article-final-cta reveal">
            <p className="eyebrow">Move from description to buildable detail</p>
            <h2>Give every room target a matching product, document and installation detail.</h2>
            <p>FLOSEEK supports commercial projects with configurable PET felt acoustic lighting, drawings, photometric information, material documentation, samples and project-ready quotation scope.</p>
            <div className="hero-actions">
              <a className="btn primary" href={mailtoHref("Acoustic Lighting Specification Project")} data-contact-popup>Request Project Support</a>
              <a className="btn glass" href="/custom-acoustic-lighting-solutions">Explore Custom Solutions</a>
            </div>
          </section>

          <section className="article-section reveal">
            <h2>Technical references</h2>
            <ul className="article-reference-list">{references.map(([label, href]) => <li key={href}><a href={href} target="_blank" rel="noreferrer">{label}</a></li>)}</ul>
          </section>
        </article>
        <ArticleBrandCard />
      </div>
    </main>
    <SiteFooter content={content} />
  </>;
}
