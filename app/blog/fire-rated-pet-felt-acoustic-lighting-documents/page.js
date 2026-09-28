import content from "../../../content/siteContent.json";
import { SiteFooter } from "../../../components/SiteFooter";
import { SiteHeader } from "../../../components/SiteHeader";
import { ArticleBrandCard } from "../../../components/ArticleBrandCard";
import { RelatedArticles } from "../../../components/RelatedArticles";
import { mailtoHref } from "../../../components/inquiryConfig";
import { absoluteUrl, createPageMetadata } from "../../../lib/metadata";

const pathname = "/blog/fire-rated-pet-felt-acoustic-lighting-documents";
const title = "Fire-Rated PET Felt Acoustic Lighting: Documents Buyers Should Request";
const seoTitle = "Fire-Rated PET Felt Lighting: Buyer Document Checklist";
const description = "Buying PET felt acoustic lights? Learn which fire test reports and product documents to request, and how to check they match the installation.";
const heroImage = "/assets/img/blog/fire-rated-pet-felt-lighting-document-review-hero.webp";

const quickDocumentRows = [
  ["Fire test report or classification", "What the named specimen achieved under a stated method", "Specimen, construction, method edition, result, mounting, orientation and field of application"],
  ["PET felt specification and traceability", "Which material will actually be supplied", "Maker or grade, thickness, density, formulation or treatment, colour range and batch identification where relevant"],
  ["Complete luminaire safety documents", "Safety evidence for the stated electrical product", "Exact model, LED system, driver, wiring, supply, marking and destination-market requirements"],
  ["Product drawing and bill of materials", "Whether the quotation matches the documented construction", "Felt geometry, backing, adhesive, frame, diffuser, driver, suspension and model revision"],
  ["Installation drawing and project review", "Whether the planned use fits the evidence and site rules", "Ceiling condition, orientation, sprinklers, detectors, HVAC, electrical installation, access and maintenance"]
];

const terminologyRows = [
  ["Fire-retardant", "A material is designed or treated to reduce some aspect of burning.", "Not a result by itself. Ask for the method, specimen and measured or classified outcome."],
  ["Reaction to fire", "How a material or product responds when exposed to fire under a named test and classification route.", "May address flame spread, smoke or other characteristics depending on the system."],
  ["Fire resistance", "How long a building element or assembly maintains stated functions in a prescribed fire test.", "Do not turn a PET felt reaction-to-fire result into a one-hour or two-hour resistance claim."],
  ["Fireproof", "Suggests a product cannot burn or be affected by fire.", "Avoid this procurement term unless a precise, applicable definition and evidence are provided."]
];

const standardRows = [
  ["EN 13501-1", "Reaction-to-fire classification of construction products and building elements within its scope", "Does the classification cover the proposed product or assembly, mounting and intended end use?"],
  ["ASTM E84", "Comparative surface flame-spread and smoke-developed measurements for applicable exposed building-material surfaces", "Does the tested construction and ceiling-position mounting relate to the proposed application? Do not present the index alone as noncombustibility."],
  ["NFPA 701", "Flame-propagation test methods for textiles and films within its scope", "Is this product in the relevant category, and is NFPA 701 the evidence the project authority requested?"],
  ["UL 94", "Small-scale flammability tests for plastic materials used in parts of devices and appliances", "A V-0 or other material designation does not automatically replace evidence required for a building interior or suspended furnishing."],
  ["IEC 60598-1", "General safety requirements and tests for luminaires", "Does the luminaire documentation match the complete electrical construction? This is separate from the felt’s reaction-to-fire evidence."]
];

const matchRows = [
  ["9 mm felt, code PF-09, tested flat", "Same identified felt, construction and stated use", "Review the method and project criteria, then record the evidence as a provisional match."],
  ["12 mm free-hanging folded shade", "9 mm felt bonded to a rigid board", "Hold the claim and request an applicable assessment or different evidence route."],
  ["“Class A PET felt”", "Only a UL 94 V-0 entry", "Ask which requirement UL 94 addresses; do not translate V-0 into another classification."],
  ["New adhesive or decorative facing", "Report covers plain felt only", "Ask whether the added layer sits within the report or assessment scope."],
  ["Same pendant model, new felt supplier", "Report identifies the original felt source", "Require change review and supporting evidence before substitution."],
  ["Complete luminaire electrical file", "No identifiable felt fire document", "Continue the electrical review and resolve the felt or assembly requirement separately."]
];

const reportPasses = [
  ["1. Method and issuer", "Record the standard and edition, laboratory, report number, date, client and page count. Obtain the complete report or classification, not a cropped result page."],
  ["2. Specimen identity", "Match the felt maker or material code, thickness, density, composition, treatment and any colour limitations with the proposed bill of materials."],
  ["3. Complete construction", "Check backing, substrate, adhesive, facing, coating, frame and reinforcement. A flat bonded specimen is not automatically the same as a free-hanging shade."],
  ["4. Mounting and orientation", "Read the substrate, supports, air gap, exposed face, orientation and intended end-use scope. Compare them with the actual suspended design."],
  ["5. Result and limitations", "Record the result exactly, including permitted thicknesses, substrates, fixings and field-of-application statements. Do not shorten “tested to” into “approved everywhere.”"],
  ["6. Link to the luminaire", "Map the evidence to the pendant model, size, geometry, LED module, driver, diffuser, internal frame and suspension. Separate felt evidence from electrical-product evidence."],
  ["7. Delivery control", "Put the approved material code, colour range, thickness, model revision and report references on the sample approval or purchase order. Require written review before substitution."]
];

const faqs = [
  { question: "Is all PET felt used in acoustic lighting fire-retardant?", answer: "No general claim covers every PET felt. Formulation, thickness, finish, colour and treatment may vary. Ask for evidence tied to the exact material offered for the project." },
  { question: "Does an ASTM E84 Class A claim mean the whole pendant is fireproof?", answer: "No. ASTM E84 provides comparative surface flame-spread and smoke-developed measurements for a stated specimen and mounting. Review the full report and project criteria; the flame-spread index alone does not establish noncombustibility or approve every suspended luminaire." },
  { question: "Is an EN 13501-1 classification enough for a hanging acoustic light?", answer: "It depends on the classification scope, tested construction, intended end use and project requirement. The responsible reviewer must decide whether it applies to the proposed suspended configuration." },
  { question: "Can a supplier use UL 94 V-0 instead of a building fire test?", answer: "Do not make that substitution automatically. UL 94 covers small-scale tests for plastic materials used in parts of devices and appliances. It does not by itself prove the performance required of an interior finish or suspended assembly." },
  { question: "Must every acoustic pendant undergo the same fire test as the felt?", answer: "Not necessarily. The suitable route depends on the product category, jurisdiction and project specification. Material evidence, an assembly classification and luminaire electrical safety documents can answer different questions." },
  { question: "Does a CE mark prove the PET felt has a fire rating?", answer: "No. CE marking indicates that the manufacturer declares conformity with applicable EU harmonisation legislation for the product. Review the declaration and its scope; it should not be presented as an EN 13501-1, ASTM E84 or NFPA 701 result for the felt." },
  { question: "Will a report still apply if the colour or thickness changes?", answer: "Only if the report or a competent assessment covers the variant. Request the permitted range in writing; do not assume all colours, thicknesses, treatments or formulations perform identically." },
  { question: "What if the supplier only provides a one-page certificate?", answer: "Request the complete underlying report or classification and specimen details. If they are unavailable, record the claim as unverified and ask the project reviewer what alternative evidence is acceptable." }
];

const relatedLinks = [
  ["PET Felt Acoustic Material Lighting Guide", "/blog/pet-felt-acoustic-material-lighting-guide"],
  ["Acoustic Pendant Light Placement Guide", "/blog/acoustic-pendant-light-placement-guide"],
  ["NRC, αw and Sabins Explained", "/blog/nrc-alpha-w-sabins-acoustic-lighting"],
  ["LED Acoustic Pendant Light Specification Guide", "/blog/led-acoustic-pendant-light-specification-guide"],
  ["How to Choose PET Felt Acoustic Pendant Lights", "/blog/how-to-choose-pet-felt-acoustic-pendant-lights"],
  ["How to Compare Acoustic Lighting Manufacturers", "/blog/how-to-compare-pet-felt-acoustic-lighting-manufacturers"],
  ["FLOSEEK Acoustic Pendant Lights", "/products/acoustic-pendant-lights"],
  ["Custom Acoustic Lighting Solutions", "/custom-acoustic-lighting-solutions"]
];

const references = [
  ["ASTM E84-26a: Surface Burning Characteristics of Building Materials", "https://store.astm.org/standards/e84"],
  ["BS EN 13501-1:2018: Classification Using Reaction-to-Fire Test Data", "https://landingpage.bsigroup.com/LandingPage/Standard?UPI=000000000030348263"],
  ["NFPA 701 (2023): Flame Propagation of Textiles and Films", "https://link.nfpa.org/all-publications/701/2023"],
  ["UL Solutions: Combustion and UL 94 Tests for Plastics", "https://www.ul.com/services/combustion-fire-tests-plastics"],
  ["IEC 60598-1:2024: General Requirements and Tests for Luminaires", "https://webstore.iec.ch/en/publication/66620"],
  ["ISO/IEC 17025:2017: Competence of Testing and Calibration Laboratories", "https://www.iso.org/standard/66912.html"],
  ["European Commission: Low Voltage Directive 2014/35/EU", "https://single-market-economy.ec.europa.eu/single-market/goods/european-standards/harmonised-standards/low-voltage-lvd_en"]
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
    datePublished: "2026-09-28",
    dateModified: "2026-09-28",
    author: { "@type": "Organization", name: "FLOSEEK Acoustic Lighting" },
    publisher: { "@type": "Organization", name: "FLOSEEK Acoustic Lighting", logo: { "@type": "ImageObject", url: absoluteUrl("/assets/img/brand/floseek-logo-header.png") } },
    mainEntityOfPage: absoluteUrl(pathname)
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } }))
  };
  const workflowSteps = [
    "Define the project requirement and applicable evidence route.",
    "Request the complete report, material and luminaire document set.",
    "Build a one-page comparison between the tested specimen and ordered model.",
    "Resolve every material, construction or mounting difference in writing.",
    "Approve the physical sample and locked production specification.",
    "Verify the delivered and installed condition against the approved schedule."
  ];
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to review fire documentation for PET felt acoustic lighting",
    description,
    step: workflowSteps.map((text, position) => ({ "@type": "HowToStep", position: position + 1, text }))
  };

  return <>
    <SiteHeader content={content} ctaHref="#document-review" />
    <main id="top" className="blog-article-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <section className="article-hero section-dark">
        <div className="wrap article-hero-grid">
          <div className="article-hero-copy reveal">
            <p className="eyebrow">Buyer Document Checklist</p>
            <h1>{title}</h1>
            <p>A “fire-retardant” label is not enough to approve a PET felt acoustic pendant. Learn how to connect the test report, exact material, luminaire model, production order and final installation.</p>
            <div className="hero-actions">
              <a className="btn primary" href="#document-review" data-contact-popup>Request a Document Review</a>
              <a className="btn glass" href="#quick-answer">See the Required Documents</a>
            </div>
          </div>
          <ArticleImage
            src={heroImage}
            alt="Architect comparing PET felt samples, acoustic pendant drawings and a complete technical document set"
            caption="Reliable approval starts by matching the tested material to the quoted model and planned installation."
            width="1672"
            height="941"
            eager
          />
        </div>
      </section>

      <div className="article-content-layout wrap">
        <article className="article-body">
          <div className="article-meta reveal">
            <span>Fire and product documentation</span>
            <span>Approx. 16 min read</span>
            <span>For specifiers, contractors, importers and project buyers</span>
          </div>

          <section className="article-section reveal" id="quick-answer">
            <h2>Quick answer: request a matching document set, not a single badge</h2>
            <p>A buyer should request the applicable <strong>fire test report or classification, exact PET felt specification, traceability statement, complete luminaire safety documents, product drawing, bill of materials and installation instructions</strong>. Then compare the tested specimen with the product that will actually be delivered.</p>
            <p>A report is like a passport: it identifies one tested construction and the conditions under which the result was obtained. A genuine passport for a different traveller does not approve the person standing at the border. In the same way, a genuine report for 9 mm flat felt does not automatically cover a 12 mm folded pendant made with another adhesive or material source.</p>
            <ArticleTable columns={["Document or record", "What it can establish", "What to check"]} rows={quickDocumentRows} />
            <blockquote className="article-quote">A material fire report and a luminaire safety file answer different questions. Neither document alone is a universal approval for the installed pendant.</blockquote>
          </section>

          <section className="article-section reveal">
            <h2>What “fire-rated” means—and what it does not mean</h2>
            <p>The words on a sales page are often looser than the language in a test report. Use the exact term supported by the evidence.</p>
            <ArticleTable columns={["Term", "Plain-English meaning", "Buyer’s interpretation"]} rows={terminologyRows} />
            <p>The practical question is not “Is this fireproof?” It is: <strong>Which document supports the stated performance of the exact product and installation being offered?</strong></p>
          </section>

          <section className="article-section reveal">
            <h2>Why a flat felt sample report may not cover the finished pendant</h2>
            <p>Imagine a report for a 9 mm PET felt sheet fixed flat to a stated backing. The quoted luminaire uses a 12 mm folded shade, hangs freely below the ceiling, includes an adhesive seam and sits around an LED module. The report may still be useful evidence about the tested sheet, but the buyer cannot silently extend it to every difference.</p>
            <p>Thickness, formulation, colour treatment, backing, adhesive, decorative film, exposed edges, supports and orientation can change the question. Think of a recipe: flour from the same category does not make two cakes identical if the quantity, ingredients and baking method change.</p>
            <ul className="article-list">
              <li><strong>Material match:</strong> maker or grade, thickness, density, formulation, treatment and covered colours.</li>
              <li><strong>Construction match:</strong> flat, folded, laminated, bonded, framed or combined with other layers.</li>
              <li><strong>Mounting match:</strong> substrate, supports, air gap, exposed face and orientation.</li>
              <li><strong>End-use match:</strong> whether the classification or assessment covers the intended application.</li>
              <li><strong>Production match:</strong> whether the documented material and product revision will be supplied in quantity.</li>
            </ul>
            <p>This does not mean every pendant must undergo every fire test as a complete luminaire. The correct evidence route depends on the jurisdiction, product category, project specification and authority responsible for acceptance.</p>
          </section>

          <section className="article-section reveal">
            <h2>Which standard is the project actually asking for?</h2>
            <p>Standard numbers are not interchangeable currencies. An EN classification, ASTM index, NFPA 701 result, UL 94 designation and IEC luminaire file describe different tests and product scopes. A simple conversion table cannot approve a specific installation.</p>
            <ArticleTable columns={["Standard or document", "What it addresses", "Buyer’s check"]} rows={standardRows} />
            <p>The current <a href="https://store.astm.org/standards/e84" target="_blank" rel="noreferrer">ASTM E84</a> scope describes comparative testing of applicable exposed building-material surfaces in a ceiling-position setup and states that flame-spread index alone does not classify a material as noncombustible. <a href="https://www.ul.com/services/combustion-fire-tests-plastics" target="_blank" rel="noreferrer">UL Solutions</a> describes UL 94 as controlled, small-scale tests for polymeric materials used in parts and devices. These are useful tools, but they do not answer the same project question.</p>
            <p>Similarly, <a href="https://webstore.iec.ch/en/publication/66620" target="_blank" rel="noreferrer">IEC 60598-1:2024</a> addresses general luminaire safety. It does not turn the PET felt body into a classified construction product. A CE mark should be read with the declaration and applicable legislation; the <a href="https://single-market-economy.ec.europa.eu/single-market/goods/european-standards/harmonised-standards/low-voltage-lvd_en" target="_blank" rel="noreferrer">EU Low Voltage Directive</a> is one part of the electrical product framework, not a felt fire classification.</p>
          </section>

          <section className="article-section reveal">
            <h2>Read the fire report in seven passes</h2>
            <p>The headline class is the last item to trust, not the first item to read. Start with the specimen description and work outward.</p>
            <ArticleTable columns={["Pass", "What to do"]} rows={reportPasses} />
            <p>If accredited testing is required, confirm that the laboratory&apos;s accreditation scope covers the named method. <a href="https://www.iso.org/standard/66912.html" target="_blank" rel="noreferrer">ISO/IEC 17025</a> is about laboratory competence, impartiality and consistent operation; laboratory accreditation is not, by itself, product approval.</p>
          </section>

          <section className="article-section reveal">
            <h2>Map the evidence to the purchase order</h2>
            <p>The fastest useful review is a one-page match table. Put the test specimen in one column, the ordered product in the next and the unresolved difference in the third. “Same material” is not enough when the report and bill of materials use different codes.</p>
            <ArticleTable columns={["Quotation says", "Document says", "Procurement action"]} rows={matchRows} />
            <p>“Hold the claim” means the documents received do not yet support the stated claim. It does not by itself mean the product is unsafe. The responsible project reviewer decides what further evidence, assessment or testing is required.</p>
            <ArticleImage
              src="/assets/img/blog/acoustic-lighting-production-model-check.webp"
              alt="Technician checking the dimensions and construction of PET felt acoustic linear lights during production"
              caption="The approved document set should stay connected to the model revision, material source and construction that enter production."
              width="1672"
              height="941"
            />
          </section>

          <section className="article-section reveal">
            <h2>Control what will actually be delivered</h2>
            <p>A report can match the sample and still fail to match the production batch if substitutions are uncontrolled. Put the following details on the approved sample record or purchase order:</p>
            <ul className="article-list">
              <li>Pendant model, size, felt geometry and drawing revision.</li>
              <li>PET felt maker or grade, material code, thickness, density and approved colour range.</li>
              <li>Backing, adhesive, coating, facing, frame and reinforcement where relevant.</li>
              <li>LED module, driver, diffuser, wiring, canopy and suspension configuration.</li>
              <li>Applicable report or classification numbers and the claims they support.</li>
              <li>Notice and written approval required before any substitution.</li>
              <li>Batch or carton identification needed to trace delivered products.</li>
            </ul>
            <p>This is especially important for custom orders. The first sample may use one felt source while later production uses another unless the specification locks it. For more material checks, see the <a href="/blog/pet-felt-acoustic-material-lighting-guide">PET felt acoustic material guide</a>.</p>
          </section>

          <section className="article-section reveal">
            <h2>The installed ceiling can change the approval question</h2>
            <p>Good paperwork still has to fit the real ceiling. In a restaurant, school, hotel or public lobby, coordinate the hanging felt body with sprinklers, detectors, HVAC, emergency lighting, access panels and maintenance routes. The LED and driver also need the installation conditions stated by the luminaire manufacturer.</p>
            <ArticleTable columns={["Site issue", "Why it matters", "Project action"]} rows={[
              ["Sprinklers", "The body may obstruct the intended discharge pattern.", "Review the actual size, height and obstruction geometry with the fire-protection designer."],
              ["Detectors", "A suspended shade may interrupt coverage or line of sight.", "Overlay detection zones and confirm the layout with the responsible designer."],
              ["HVAC", "Air throw may be blocked or move a lightweight pendant.", "Check diffuser position, airflow, clearance and suspension stability."],
              ["Electrical installation", "Driver location, wiring and thermal conditions affect the complete luminaire.", "Follow the model-specific installation instructions and applicable electrical requirements."],
              ["Later alterations", "Paint, fabric, backing or a new mounting position may move the product outside the evidence scope.", "Trigger a document review before approving the change."]
            ]} />
            <p>Do not rely on a universal promise such as “600 mm from every sprinkler is enough.” Sprinkler type, obstruction geometry, ceiling height and local rules determine the review. The <a href="/blog/acoustic-pendant-light-placement-guide">acoustic pendant placement guide</a> covers ceiling coordination in more detail.</p>
          </section>

          <section className="article-section reveal">
            <h2>A six-step approval workflow</h2>
            <ol className="article-list">
              <li><strong>Define the project requirement.</strong> Record the destination, occupancy, product category and exact performance language. Ask the responsible professional to identify acceptable evidence.</li>
              <li><strong>Request the original document set.</strong> Collect the complete fire report or classification, felt data, luminaire safety documents, drawings and installation instructions.</li>
              <li><strong>Build a one-page match table.</strong> Place the tested specimen beside the ordered model, production material and planned mounting.</li>
              <li><strong>Resolve differences in writing.</strong> Ask whether an existing scope covers the change or whether further assessment or testing is required.</li>
              <li><strong>Approve the sample and production specification.</strong> Lock the revision, material source, colour range and permitted substitutions.</li>
              <li><strong>Check delivery and installation.</strong> Verify that the supplied model and coordinated ceiling layout match the approved schedule.</li>
            </ol>
            <blockquote className="article-quote">Good documentation is a chain: project requirement → applicable method → tested specimen → quoted model → production materials → installed condition. If one link changes, check the evidence again.</blockquote>
          </section>

          <section className="article-section reveal">
            <h2>RFQ wording you can copy</h2>
            <blockquote className="article-quote">Please quote the exact acoustic luminaire model, size, PET felt grade, thickness, colour range, driver and installation configuration for the stated project location and occupancy. Provide the complete applicable fire test report or classification, including the specimen description, test method and edition, report number, result, mounting conditions and stated scope. Provide material identification and a written link between the tested material and quoted product. Separately provide complete luminaire safety and electrical documents, product drawing, bill of materials and installation instructions applicable to the exact model. Identify every deviation from the tested or documented configuration and state what further review is required. Do not substitute felt, backing, adhesive, driver or construction without written approval.</blockquote>
            <p>If the project has not named a required classification, say so. Asking for “the highest rating available” can produce an impressive certificate for the wrong method.</p>
          </section>

          <section className="article-section reveal">
            <h2>Common documentation mistakes</h2>
            <div className="article-subsection"><h3>Treating a marketing badge as a report</h3><p>“Fire-retardant,” “Class A” or “fireproof” does not identify the method, specimen, result or field of application. Request the underlying evidence.</p></div>
            <div className="article-subsection"><h3>Converting one region&apos;s class into another</h3><p>EN, ASTM, NFPA and UL methods use different test arrangements and scopes. A conversion chart cannot approve a product.</p></div>
            <div className="article-subsection"><h3>Confusing acoustic and fire results</h3><p>NRC, αw or equivalent absorption addresses sound, not fire behaviour. The <a href="/blog/nrc-alpha-w-sabins-acoustic-lighting">NRC, αw and sabins guide</a> explains what those figures measure.</p></div>
            <div className="article-subsection"><h3>Treating CE marking as the felt&apos;s fire class</h3><p>Read the declaration and applicable legislation. Keep luminaire conformity evidence separate from the reaction-to-fire evidence requested for the felt or assembly.</p></div>
            <div className="article-subsection"><h3>Approving a sample, then changing the material</h3><p>The evidence should remain tied to the product revision delivered in quantity. Review supplier, thickness, colour-treatment, adhesive and construction changes before production.</p></div>
          </section>

          <section className="article-section article-faq reveal">
            <h2>FAQ</h2>
            {faqs.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}
          </section>

          <section className="article-section reveal" id="document-review">
            <div className="article-inline-cta">
              <div>
                <span>Project document support</span>
                <h3>Need documents for a PET felt acoustic lighting project?</h3>
                <p>Send the project location, occupancy, relevant fire specification, intended model, quantity and reflected ceiling plan. FLOSEEK can assemble available model, material and luminaire documents for review and identify where evidence needs confirmation.</p>
              </div>
              <a className="btn primary" href={mailtoHref("PET Felt Acoustic Lighting Document Review")} data-contact-popup>Request Project Documents</a>
            </div>
            <p>The project&apos;s fire, building and electrical professionals should determine the acceptance route and approve the final installation.</p>
          </section>

          <section className="article-section reveal">
            <h2>Related reading and product pages</h2>
            <ul className="article-link-list">{relatedLinks.map(([label, href]) => <li key={href}><a href={href}>{label}</a></li>)}</ul>
          </section>

          <RelatedArticles currentPath={pathname} />

          <section className="article-final-cta reveal">
            <p className="eyebrow">Build a traceable submittal</p>
            <h2>Match the material evidence, electrical product and installation before the order is released.</h2>
            <p>A clear document request saves more time than collecting a thick folder of unrelated certificates. Share the specification early so the quotation and submittal can be built around the same product.</p>
            <div className="hero-actions">
              <a className="btn primary" href={mailtoHref("Fire Document Checklist for Acoustic Lighting")} data-contact-popup>Discuss Your Document Requirements</a>
              <a className="btn glass" href="/products/acoustic-pendant-lights">View Acoustic Pendant Lights</a>
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
