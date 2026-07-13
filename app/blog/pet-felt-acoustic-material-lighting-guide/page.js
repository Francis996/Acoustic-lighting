import content from "../../../content/siteContent.json";
import { SiteFooter } from "../../../components/SiteFooter";
import { SiteHeader } from "../../../components/SiteHeader";
import { ArticleBrandCard } from "../../../components/ArticleBrandCard";
import { RelatedArticles } from "../../../components/RelatedArticles";
import { mailtoHref } from "../../../components/inquiryConfig";
import { absoluteUrl, createPageMetadata } from "../../../lib/metadata";

const pathname = "/blog/pet-felt-acoustic-material-lighting-guide";
const title = "PET Felt Acoustic Material Lighting Guide";
const seoTitle = "PET Felt Acoustic Material Lighting Guide: Recycled Content, Fire and Care";
const description =
  "A practical guide to PET felt acoustic lighting: recycled-content claims, sound absorption, fire-related documents, cleaning, color control and material checks for commercial projects.";
const heroImage = "/assets/img/products/ko-xym-0128/ko-xym-0128-scene-01-hd.webp";

const quickChecks = [
  ["Material", "PET felt is a polyester-based fibrous sheet formed into a shade, baffle or acoustic body.", "Request thickness, density, finish and an approved material sample."],
  ["Recycled content", "A recycled claim applies only to the scope documented, often the felt body rather than every fixture component.", "Ask for the percentage, source category and supporting statement."],
  ["Acoustic effect", "Felt can reduce reflections inside a room; it is not a barrier between rooms.", "Ask whether the data covers a flat sheet or the finished suspended product."],
  ["Fire-related evidence", "A report describes a defined sample, test method and condition. It is not a universal approval.", "Confirm the project standard and compare it with the report scope."],
  ["Cleaning", "Dust and small marks need gentle treatment, not the methods used for glass or metal.", "Request the maintenance guide before selecting a high-exposure location."],
  ["Bulk consistency", "Colour, edge finish and shape can look different across a large installation.", "Lock a physical sample, material batch approach and packing method."]
];

const applicationRows = [
  ["Open office", "Speech comfort, consistent colour, screen comfort and dust control.", "Quantity, ceiling layout, colour batch and lighting specification."],
  ["Meeting room", "Sound reflections around the table, face lighting and a close-up finish.", "Felt edge, glare, dimming, suspension and sample approval."],
  ["Restaurant or cafe", "Atmosphere without creating a difficult cleaning routine.", "Distance from oil, steam and cooking zones; cleaning access; fire-document request."],
  ["Hotel lobby", "Large visual impact, logistics and formal submittals.", "Structure, packing volume, colour control, installation and document scope."],
  ["School or library", "Durability, approachable maintenance and public-project paperwork.", "Cleaning plan, secure installation and project-specific document requirements."],
  ["Distributor or OEM", "Repeatable colour and a document set that future customers can use.", "Locked material specification, carton labels, QC records and claim wording."]
];

const documentSet = [
  "Product datasheet with model, dimensions, weight and installation method.",
  "PET felt material description: thickness, density or mass where available, finish and colour options.",
  "Recycled-content statement or third-party support when a sustainability claim is required.",
  "Acoustic test information only where the project calls for it, with the tested sample and mounting condition identified.",
  "Fire-related report requested by the project, with standard, date, laboratory, sample and scope checked.",
  "LED module and driver information, including wattage, CCT, CRI, voltage and dimming where applicable.",
  "Physical colour card or approved sample, cleaning guide, installation manual and suspension-kit details.",
  "Packing specification, carton labels, QC checklist and warranty terms."
];

const rfqItems = [
  "project type, destination country, room function, ceiling height and installation zone;",
  "product drawing or preferred shape, quantity, target size and suspension length;",
  "PET felt colour, physical-sample requirement and batch-control expectation;",
  "recycled-content claim needed, if any, and the evidence the client expects;",
  "acoustic data requirement and the room problem being addressed;",
  "fire-related project requirement, rather than a generic request for 'fireproof';",
  "light output, CCT, CRI, input voltage and dimming requirement;",
  "cleaning environment, sample deadline, delivery date and packing or private-label needs."
];

const faqs = [
  {
    question: "What is PET felt in acoustic lighting?",
    answer:
      "PET felt is a polyester-based fibrous material used to form the shade, baffle or acoustic body around a lighting system. It adds texture and colour while providing an absorptive surface in the room."
  },
  {
    question: "Does PET felt acoustic lighting soundproof a room?",
    answer:
      "No. It can help reduce reflected sound within a room, which may make a restaurant, office or meeting room feel less harsh. It does not stop sound travelling through a wall, door, ceiling gap or glazing."
  },
  {
    question: "Is PET felt acoustic lighting made from recycled plastic bottles?",
    answer:
      "Some PET felt contains recycled PET, but the exact percentage and source can vary. Ask for evidence that states the scope of the claim; a statement about the felt sheet does not automatically apply to the LED, driver, cable or canopy."
  },
  {
    question: "Is PET felt fireproof?",
    answer:
      "No. PET felt should not be described as fireproof. A project may request fire-related testing or classification for a defined material and application. Confirm the destination-market requirement, then compare it with the tested sample and report scope."
  },
  {
    question: "How should PET felt pendant lights be cleaned?",
    answer:
      "Use a soft brush, microfiber cloth or vacuum brush for dust. For a small mark, test a lightly damp cloth with mild soap on a hidden area first. Avoid soaking, strong solvents, bleach and abrasive pads unless the supplier provides different written guidance."
  },
  {
    question: "What should I check before approving PET felt colour?",
    answer:
      "Use a physical colour card or sample, not only a screen image. For a multi-fixture project, confirm the approved sample, colour naming, batch-control approach and carton or zone labels before bulk production."
  }
];

const relatedLinks = [
  ["What Is Acoustic Pendant Lighting?", "/blog/what-is-acoustic-pendant-lighting"],
  ["Acoustic Lighting vs Acoustic Panels", "/blog/acoustic-lighting-vs-acoustic-panels"],
  ["How to Choose PET Felt Acoustic Pendant Lights", "/blog/how-to-choose-pet-felt-acoustic-pendant-lights"],
  ["LED Acoustic Pendant Light Specification Guide", "/blog/led-acoustic-pendant-light-specification-guide"],
  ["PET Felt Acoustic Lighting Cost Guide", "/blog/pet-felt-acoustic-lighting-cost"],
  ["Compare Acoustic Lighting Manufacturers", "/blog/how-to-compare-pet-felt-acoustic-lighting-manufacturers"],
  ["Acoustic Pendant Lights", "/products/acoustic-pendant-lights"],
  ["Office and Meeting Room Applications", "/applications/office-meeting-rooms"],
  ["Restaurant and Hospitality Applications", "/applications/restaurant-hospitality"]
];

const references = [
  ["ISO 14021:2026: self-declared environmental claims", "https://www.iso.org/standard/14021"],
  ["ISO 354:2003: measuring sound absorption in a reverberation room", "https://www.iso.org/standard/34545.html"],
  ["ISO 20189:2018: rating single interior objects from laboratory measurements", "https://www.iso.org/standard/67230.html"],
  ["ASTM C423: sound absorption in a reverberation room", "https://store.astm.org/c0423-22.html"],
  ["ASTM E84: surface burning characteristics of building materials", "https://store.astm.org/e0084-25.html"],
  ["NFPA 701: flame propagation of textiles and films", "https://link.nfpa.org/all-publications/701/2023"]
];

function BulletList({ items }) {
  return <ul className="article-list">{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

function ArticleTable({ columns, rows }) {
  return (
    <div className="article-table-wrap">
      <table className="article-table">
        <thead><tr>{columns.map((column) => <th key={column}>{column}</th>)}</tr></thead>
        <tbody>{rows.map((row) => <tr key={row.join("|")}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}</tbody>
      </table>
    </div>
  );
}

function ArticleImage({ src, alt, caption, width, height }) {
  return (
    <figure className="article-image">
      <img src={src} alt={alt} width={width} height={height} loading="lazy" />
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
    headline: seoTitle,
    description,
    image: absoluteUrl(heroImage),
    datePublished: "2026-07-13",
    dateModified: "2026-07-13",
    author: { "@type": "Organization", name: "FLOSEEK Acoustic Lighting" },
    publisher: { "@type": "Organization", name: "FLOSEEK Acoustic Lighting", logo: { "@type": "ImageObject", url: absoluteUrl("/assets/img/brand/floseek-logo-header.png") } },
    mainEntityOfPage: absoluteUrl(pathname)
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } }))
  };

  return (
    <>
      <SiteHeader content={content} ctaHref="#quote" />
      <main id="top" className="blog-article-page">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <section className="article-hero section-dark">
          <div className="wrap article-hero-grid">
            <div className="article-hero-copy reveal">
              <p className="eyebrow">Commercial Material Guide</p>
              <h1>PET Felt Acoustic Material Lighting Guide</h1>
              <p>Understand what the felt body contributes, what it cannot promise, and which material details should be confirmed before a commercial project goes to quotation.</p>
              <div className="hero-actions">
                <a className="btn primary" href="#quote" data-contact-popup>Request Material Document Review</a>
                <a className="btn glass" href="/products/acoustic-pendant-lights">View Acoustic Pendant Lights</a>
              </div>
            </div>
            <figure className="article-hero-media reveal delay-1">
              <img src={heroImage} alt="Grey PET felt acoustic pendant light above a commercial meeting table" width="1222" height="1287" loading="eager" />
              <figcaption>PET felt is one part of the finished product: material, lighting, structure and installation still need to work together.</figcaption>
            </figure>
          </div>
        </section>

        <div className="article-content-layout wrap">
          <article className="article-body">
            <div className="article-meta reveal"><span>PET felt acoustic material guide</span><span>Approx. 14 min read</span><span>For designers, specifiers, contractors and buyers</span></div>

            <section className="article-section reveal">
              <h2>Three reassuring words can hide a lot of project questions</h2>
              <p>Acoustic pendant lights are often introduced as recycled, acoustic and fire-retardant. Those words are useful starting points, but none is a complete specification. A designer may need a reliable colour match. A contractor may need the right suspension details. A hotel operator may need a cleaning plan. A consultant may need documents that match the actual material and installation.</p>
              <p>So the useful question is not only, "What is PET felt?" It is, "Will this PET felt lighting suit this room, this approval route and this maintenance routine?" This guide answers that question in plain language. For the basic product category, start with <a href="/blog/what-is-acoustic-pendant-lighting">what acoustic pendant lighting is</a>. For the larger room-acoustics decision, compare <a href="/blog/acoustic-lighting-vs-acoustic-panels">acoustic lighting and acoustic panels</a>.</p>
            </section>

            <section className="article-section reveal">
              <h2>Quick answer: what should a buyer check first?</h2>
              <ArticleTable columns={["Check", "Plain meaning", "What to request"]} rows={quickChecks} />
              <p>Think of PET felt as a soft building skin around a light. It can make the fixture visually warmer and give sound a less reflective surface to hit. It does not turn a pendant into a complete acoustic solution, and it does not make project documentation optional.</p>
            </section>

            <section className="article-section reveal">
              <h2>What PET felt does in an acoustic light</h2>
              <p>PET felt is a dense, fibrous polyester material. In acoustic lighting it can be cut, folded or assembled into a shade, disc, baffle, linear body or custom form. The material usually has four jobs: it provides an absorptive surface, creates the visible colour and texture, helps form the shade, and brings acoustic treatment closer to the ceiling where it is needed.</p>
              <p>The simplest comparison is a hard room wearing a coat. Glass, metal and concrete tend to send sound back into the room. A fibrous felt surface gives some sound energy somewhere else to go. It is not a wall between rooms; it is a softer surface within the same room.</p>
              <ArticleImage src="/assets/img/linear/ko-xym-0090-closeup-grey-hq.jpeg" alt="Close-up of a grey PET felt acoustic light showing its fibrous surface, cut edge and integrated LED" width="1670" height="942" caption="A close view makes surface texture, edge quality and the relationship between the felt body and light source easier to judge." />
              <p>A finished acoustic pendant must still be reviewed as a complete product. The felt body, LED module, driver, diffuser, suspension, canopy, access for service and packing protection all affect whether the fixture succeeds on site. The companion <a href="/blog/led-acoustic-pendant-light-specification-guide">LED specification guide</a> covers the lighting side of that decision.</p>
            </section>

            <section className="article-section reveal">
              <h2>Recycled PET: use a claim that can be checked</h2>
              <p>Many PET felt products contain recycled PET. That can be a useful material story, but the wording should match the evidence. "Eco-friendly" tells a buyer very little. A recycled-content claim should state what it covers and be supported by a supplier statement or appropriate third-party evidence where the project requires it.</p>
              <p>Think of it like an ingredient label. "Made with fruit" is not the same as saying how much fruit is in the product. In the same way, "recycled PET acoustic lighting" is not enough for a project team that needs to understand the proportion, source and scope of the claim.</p>
              <BulletList items={[
                "What percentage of the PET felt is recycled?",
                "Is the stated content post-consumer, pre-consumer or mixed?",
                "Does the statement apply to the felt sheet only, or to the complete fixture?",
                "What evidence is available for the project file?",
                "Will the selected colour, thickness and batch follow the same claim?"
              ]} />
              <p>ISO 14021 addresses self-declared environmental claims. For a product page or quotation, the practical lesson is straightforward: say only what the available documentation supports, and avoid extending a felt-material claim to the driver, cable, canopy or packaging without evidence.</p>
              <ArticleImage src="/assets/img/linear/type-a-felt-colors-wide.webp" alt="PET felt colour swatches used for acoustic lighting material selection" width="1131" height="743" caption="A colour system is useful for selection, but a physical approved sample is still the control point for a bulk order." />
            </section>

            <section className="article-section reveal">
              <h2>Sound absorption: useful, but not soundproofing</h2>
              <p>In a hard room, sound behaves a little like a ping-pong ball: it hits a wall, ceiling, table or glazing and keeps bouncing. PET felt is porous and fibrous, so some sound energy can enter the material rather than reflecting straight back. That can help reduce the sharp, busy feeling of a restaurant, open office or meeting room.</p>
              <p>However, PET felt acoustic lighting does not soundproof a room. Soundproofing is about stopping sound from travelling between spaces, usually through building mass, sealed gaps, doors, glazing and ceiling construction. A pendant cannot solve a wall or door isolation problem.</p>
              <ArticleTable columns={["Room complaint", "What it usually means", "Can PET felt lighting help?"]} rows={[
                ["The room echoes.", "Reflections are building up inside the room.", "Yes, as part of an absorption plan with enough exposed material."],
                ["The restaurant gets louder as it fills up.", "Crowd noise keeps reflecting from hard finishes.", "It can help, but total surface area, placement and other finishes matter."],
                ["We hear the next meeting room.", "Sound is passing through walls, doors or ceiling paths.", "Not on its own. This needs sound-isolation construction work."],
                ["The office is distracting.", "Speech reflections and a lack of soft surfaces are reducing comfort.", "Often, together with panels, carpet, screens and space planning."]
              ]} />
              <p>For formal acoustic claims, request data that identifies the test method, sample type, thickness and mounting condition. ISO 354 and ASTM C423 describe reverberation-room approaches for sound absorption. ISO 20189 is also relevant when an interior product is treated as a discrete object rather than a flat wall or ceiling treatment. A report is useful for comparison, but it is not a prediction of the final room by itself.</p>
            </section>

            <section className="article-section reveal">
              <h2>What an NRC number can and cannot tell you</h2>
              <p>NRC is often used to compare absorptive materials. It can be useful, but it is not a promise that every room will achieve the same result. It is closer to a fuel-economy number than a guarantee of a particular journey: the installed area, ceiling height, fixture shape, air space, room volume and surrounding finishes all change the outcome.</p>
              <p>Before relying on acoustic data, ask whether the tested item was a flat felt sheet or a finished pendant, what thickness was used, how it was mounted, and whether the test sample matches the product you are ordering. Then ask the more practical question: how much absorptive surface will actually be installed in this room?</p>
            </section>

            <section className="article-section reveal">
              <h2>Fire wording: report scope matters more than a marketing label</h2>
              <p>PET felt is a polymer material. It should not be called fireproof. A more accurate project statement is: "fire-related material documentation can be provided subject to the requested standard and the selected product configuration." That language is less dramatic, but it is safer and more useful for approval.</p>
              <p>Fire requirements come from the project, the destination market and the intended application. A report for a flat felt sheet may not automatically apply to a finished acoustic pendant that also includes LEDs, a diffuser, adhesive, fasteners and suspension hardware. That does not make the pendant unsuitable. It means the project team needs to check what was actually tested.</p>
              <blockquote className="article-quote">A test report is evidence about a defined sample under a defined method. It is not a blanket approval for every colour, thickness, mounting condition or finished fixture.</blockquote>
              <BulletList items={[
                "Which standard or classification does the project actually request?",
                "What material, thickness, colour or construction was tested?",
                "What mounting or test condition was used?",
                "Who issued the report, and when?",
                "Does its scope fit the selected product and destination-market requirement?"
              ]} />
              <p>ASTM E84, EN 13501-1 and NFPA 701 are examples that may appear in project discussions, but they cover different product types and conditions. The right route is to get the requirement from the consultant, landlord, code professional or local authority before production, not to choose a standard from a product photo.</p>
            </section>

            <section className="article-section reveal">
              <h2>Cleaning and maintenance: choose the location before the colour</h2>
              <p>PET felt is not cleaned like glass, and it is not cleaned like a kitchen tile. Treat it more like a good wool hat: remove dust gently, spot-clean carefully, and do not soak or scrub it with harsh products unless the supplier gives written approval.</p>
              <BulletList items={[
                "Use a soft brush, microfiber cloth or vacuum with a brush attachment for normal dust.",
                "For a light mark, test a slightly damp cloth with mild soap on a hidden area first.",
                "Avoid strong solvents, bleach, abrasive pads and over-wetting.",
                "Let the felt air dry naturally if it has been spot-cleaned.",
                "Plan safe access for high pendants and check whether damaged pieces can be replaced."
              ]} />
              <p>This matters most in restaurants, cafes, hotel public areas and school spaces. A felt pendant can suit a dining area well, but a location exposed to heavy oil, smoke, steam or difficult access may create a maintenance burden that a beautiful rendering does not show.</p>
            </section>

            <section className="article-section reveal">
              <h2>Colour, edge quality and packing: where bulk projects reveal the difference</h2>
              <p>A single fixture can hide small variation. A ceiling with 100 fixtures cannot. Material thickness, density, cut edge, surface finish, colour and shape recovery become visible once a project is repeated at scale.</p>
              <p>Screen colour is not an approval method. Treat PET felt like paint: nobody should finish a lobby from a phone image alone. Use a physical swatch or finished sample, then record the approved colour, batch approach and room or zone labels for the order.</p>
              <ArticleImage src="/assets/img/products/ko-xym-0210/ko-xym-0210-scene-02-hd.webp" alt="Black PET felt acoustic ring lights installed in a commercial office" width="1542" height="1020" caption="When fixtures repeat through a space, colour consistency, edge finish, suspension details and lighting output become part of the same quality-control conversation." />
              <p>Packing deserves the same attention. Felt can be light but bulky. A carton that protects only the surface may still compress a larger form, bend an edge or mix accessories between rooms. The <a href="/blog/pet-felt-acoustic-lighting-cost">cost guide</a> explains why packing, access and documentation belong in an apples-to-apples quotation comparison.</p>
            </section>

            <section className="article-section reveal">
              <h2>Material priorities change by space</h2>
              <ArticleTable columns={["Space", "Material priorities", "Define early"]} rows={applicationRows} />
              <p>For a deeper room-by-room view, see the <a href="/applications/office-meeting-rooms">office and meeting-room applications</a> and <a href="/applications/restaurant-hospitality">restaurant and hospitality applications</a> pages. The material should follow the room's use, not only the shape that looks best in a catalogue.</p>
            </section>

            <section className="article-section reveal">
              <h2>Document set: what a B2B buyer should request</h2>
              <p>A complete document set is not paperwork for its own sake. It keeps the team from selecting a product by image, then discovering missing information at approval, installation or maintenance stage.</p>
              <BulletList items={documentSet} />
              <div className="article-inline-cta" id="quote">
                <span>Material document review</span>
                <h3>Need to check a PET felt material requirement before quotation?</h3>
                <p>Send the project type, destination country, product drawing, felt colour, required documents and cleaning environment. We can help identify the missing material and lighting decisions before sample production.</p>
                <div className="hero-actions"><a className="btn primary" href={mailtoHref("PET Felt Acoustic Material Document Review")} data-contact-popup>Request Material Document Review</a><a className="btn ghost" href="/contact">Send Project Requirements</a></div>
              </div>
            </section>

            <section className="article-section reveal">
              <h2>RFQ checklist for PET felt acoustic lighting</h2>
              <p>A weak RFQ asks for a "recycled, fireproof, soundproof PET felt pendant." Each word is too broad to quote safely. A stronger RFQ explains the room, the use case, the required evidence and the finished lighting requirement.</p>
              <blockquote className="article-quote">Please quote PET felt acoustic pendants for a restaurant dining area. We need warm light, a physical colour sample, practical cleaning guidance, the project-requested fire-related material document, LED and driver data, packing details and a stated MOQ.</blockquote>
              <p>Include:</p>
              <BulletList items={rfqItems} />
              <p>For supplier due diligence beyond the material itself, use the <a href="/blog/how-to-compare-pet-felt-acoustic-lighting-manufacturers">manufacturer comparison guide</a>. It covers sample-to-bulk control, QC, packing and quotation scope.</p>
            </section>

            <section className="article-section article-faq reveal">
              <h2>FAQ</h2>
              {faqs.map((faq) => <div className="article-subsection" key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></div>)}
            </section>

            <section className="article-section reveal">
              <h2>Related reading and product pages</h2>
              <ul className="article-links">{relatedLinks.map(([label, href]) => <li key={href}><a href={href}>{label}</a></li>)}</ul>
            </section>

            <section className="article-section reveal">
              <h2>Reference materials</h2>
              <p>These sources explain the scope of the referenced test methods and environmental-claim framework. They do not replace local code review or a project-specific compliance decision.</p>
              <ul className="article-links">{references.map(([label, href]) => <li key={href}><a href={href} target="_blank" rel="noreferrer">{label}</a></li>)}</ul>
            </section>

            <section className="article-cta">
              <p className="eyebrow">Project material review</p>
              <h2>Specify the felt body and lighting system as one product</h2>
              <p>Send your room type, quantity, PET felt colour, drawing, cleaning environment, lighting requirement, destination country and required project documents. We will help structure a material-and-lighting brief for quotation review.</p>
              <div className="hero-actions"><a className="btn primary" href={mailtoHref("PET Felt Acoustic Lighting Project Review")} data-contact-popup>Request Project Review</a><a className="btn ghost" href="/contact">Contact Us</a></div>
            </section>
          </article>

          <aside className="article-sidebar">
            <ArticleBrandCard />
            <RelatedArticles currentPath={pathname} />
          </aside>
        </div>
      </main>
      <SiteFooter content={content} />
    </>
  );
}
