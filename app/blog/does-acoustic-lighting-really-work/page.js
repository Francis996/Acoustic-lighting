import content from "../../../content/siteContent.json";
import { SiteFooter } from "../../../components/SiteFooter";
import { SiteHeader } from "../../../components/SiteHeader";
import { ArticleBrandCard } from "../../../components/ArticleBrandCard";
import { RelatedArticles } from "../../../components/RelatedArticles";
import { mailtoHref } from "../../../components/inquiryConfig";
import { absoluteUrl, createPageMetadata } from "../../../lib/metadata";

const pathname = "/blog/does-acoustic-lighting-really-work";
const title = "Does Acoustic Lighting Really Work? Surface Area, Frequency and Honest Limits";
const seoTitle = "Does Acoustic Lighting Really Work? An Honest Guide";
const description =
  "Does acoustic lighting really work? Learn how PET felt area, thickness, shape, frequency, quantity and room conditions determine the real result.";
const heroImage = "/assets/img/products/ko-xym-0184/ko-xym-0184-scene-01-enhanced.webp";

const quickAnswers = [
  ["Can acoustic lighting reduce echo?", "Yes, when the product exposes enough suitable absorptive material and the room receives enough units in useful locations."],
  ["Does every felt-covered light work?", "No. A thin decorative sleeve with little exposed area may add almost no meaningful absorption."],
  ["Will one pendant change a large room?", "Usually not by much. One teaspoon of salt changes a bowl of soup, not a swimming pool."],
  ["Does it soundproof a room?", "No. It treats reflections inside the room; it does not block sound through walls, doors or ceilings."],
  ["What is the strongest product evidence?", "A report for the complete object, with the test method, sample, mounting and frequency-band results identified."],
  ["What still decides the room result?", "Room volume, existing finishes, placement, installed quantity and the frequencies causing the complaint."]
];

const factorRows = [
  ["Exposed felt area", "Usually the first reality check. More accessible porous surface gives sound more material to interact with.", "Request dimensions and estimate the area that is open to the room, not hidden behind metal or plastic."],
  ["Thickness and airflow", "A hand towel and a theatre curtain are both fabric, but they do not behave alike. Thin or sealed material may absorb less.", "Ask for felt thickness, density or mass where available, and whether coatings or liners close the pores."],
  ["Three-dimensional shape", "Folds, fins and deep edges can expose more surface than a flat silhouette, like unfolding a road map.", "Review the complete geometry. Do not judge only from the plan-view diameter."],
  ["Air around the felt", "Suspended forms can present several faces to the sound field. The air space and mounting condition affect measured behaviour.", "Compare the proposed suspension and spacing with the tested condition."],
  ["Frequency", "Porous felt often helps speech-range reflections more readily than deep bass. A single headline number can hide that difference.", "Request octave-band or one-third-octave data when the project needs acoustic evidence."],
  ["Quantity and distribution", "Ten useful objects spread through a room behave differently from one object in a corner.", "Put quantity, coordinates and mounting height on the reflected ceiling plan."],
  ["Room baseline", "A hard glass-and-concrete room has more reflections to tame than a carpeted, furnished room.", "Record volume, finishes, occupancy and the actual complaint before selecting a product."]
];

const evidenceRows = [
  ["Product photo or rendering", "Shows appearance and possible placement.", "No acoustic performance proof."],
  ["PET felt datasheet", "Describes the material, thickness and sometimes flat-sheet test data.", "Useful material evidence, but not automatically evidence for the finished light."],
  ["Flat material or system test", "Shows how a defined sample behaved under a stated method and mounting.", "Compare the tested thickness, backing and air space with the proposed construction."],
  ["Complete-object reverberation-room test", "Measures the suspended product as an object under defined laboratory conditions.", "Stronger product evidence; still not a guaranteed result for every room."],
  ["Room calculation or acoustic model", "Combines the product data with room volume, finishes, quantity and placement.", "More useful for design, but depends on accurate inputs and assumptions."],
  ["Post-installation room measurement", "Checks what happened in the completed space.", "Best project verification when a target has been agreed in advance."]
];

const frequencyRows = [
  ["Low frequency", "HVAC rumble, music bass, building-services noise", "Thin PET felt objects are rarely the main solution. Deeper absorbers, isolation or source control may be needed."],
  ["Mid frequency", "Much of speech energy and the busy sound of offices or restaurants", "Often the most relevant range for porous acoustic lighting, subject to area, form and test data."],
  ["High frequency", "Clatter, sharp reflections and sibilance", "Porous felt can help, but a room already rich in soft finishes may not need much more high-frequency absorption."]
];

const roomRows = [
  ["Room A: small meeting room", "Low ceiling, carpet, upholstered chairs and one felt pendant", "The pendant may provide a useful local contribution, but the room may already have substantial absorption."],
  ["Room B: large hard cafe", "High ceiling, glass, tile, concrete and the same one pendant", "The same object becomes a small drop in a large bucket. A distributed layout or separate panels may be needed."],
  ["Room C: open office", "Repeated fixtures above team zones plus other soft finishes", "A coordinated system can contribute across the occupied area while also providing task or ambient light."],
  ["Room D: adjacent rooms leak speech", "Voices pass through a wall, door gap or ceiling void", "Acoustic lighting is the wrong tool. The problem is sound isolation, not room absorption."]
];

const workflowSteps = [
  "Name the problem in ordinary words: echo, poor speech clarity, general noise build-up, bass rumble or sound passing between rooms.",
  "Record the room dimensions, ceiling height, major finishes, occupancy and furniture. Photos alone do not show room volume or hidden surfaces.",
  "Set separate lighting and acoustic goals. A fixture can meet the lumen target and still provide too little absorptive area, or the reverse.",
  "Shortlist products by exposed felt area, geometry, dimensions, mounting, service access and photometric requirements.",
  "Check the evidence: tested item, test method, sample quantity, mounting condition, frequency-band results and report scope.",
  "Coordinate quantity and placement with the reflected ceiling plan. For critical rooms, have an acoustician calculate or model the complete treatment and verify the result after installation."
];

const redFlags = [
  "The supplier says only that the material is acoustic, without identifying the tested sample.",
  "A flat-sheet NRC is presented as the guaranteed performance of every finished pendant shape.",
  "The page promises soundproofing, noise cancellation or a fixed percentage improvement for any room.",
  "No frequency-band data, mounting condition or report scope is available for a performance claim.",
  "The recommended quantity comes only from floor area and ignores room height, finishes and the target.",
  "A decorative felt strip is treated as equivalent to a deep, high-area three-dimensional object."
];

const faqs = [
  {
    question: "Does acoustic lighting really reduce noise?",
    answer:
      "It can reduce reflected sound and reverberant build-up inside a room. The audible change depends on exposed absorptive area, product construction, frequency, quantity, placement and the room's existing finishes. It does not remove the sound source."
  },
  {
    question: "Is acoustic lighting a gimmick?",
    answer:
      "The category is not a gimmick, but some products are mostly decorative. Treat a felt-covered light as unproven until its geometry, material information and relevant test evidence show that it contributes useful absorption."
  },
  {
    question: "Can acoustic pendant lights soundproof a meeting room?",
    answer:
      "No. They may reduce reflections within the meeting room, but they do not stop speech travelling through walls, doors, glazing or ceiling paths. Sound isolation needs a building-construction solution."
  },
  {
    question: "How many acoustic lights does a room need?",
    answer:
      "There is no responsible universal number. Quantity depends on room volume, existing absorption, the performance of each object, placement and the target reverberation time. A large hard room normally needs more total absorption than a small furnished room."
  },
  {
    question: "Does thicker PET felt always absorb more sound?",
    answer:
      "Not always. Thickness can help, especially at lower frequencies, but density, porosity, backing, air space and complete-object geometry also matter. Compare test data for a construction close to the one being specified."
  },
  {
    question: "Is an NRC rating enough to specify an acoustic pendant?",
    answer:
      "Not by itself. NRC is a compact material or assembly rating across selected mid frequencies. For a discrete suspended light, ask whether the rating came from a flat sample or the complete object and review the frequency-band data and mounting condition."
  },
  {
    question: "What proof should I request from an acoustic lighting supplier?",
    answer:
      "Request the report or data page that identifies the laboratory, method, complete tested sample, dimensions, quantity, mounting condition and frequency results. Then confirm whether the quoted product matches that tested configuration."
  },
  {
    question: "When should acoustic panels be used with acoustic lighting?",
    answer:
      "Use both when the lighting layout cannot provide enough total absorption, when walls or ceilings offer useful treatment area, or when low-frequency and high-performance targets need a deeper acoustic system."
  }
];

const relatedLinks = [
  ["What Is Acoustic Pendant Lighting?", "/blog/what-is-acoustic-pendant-lighting"],
  ["Acoustic Lighting vs Acoustic Panels", "/blog/acoustic-lighting-vs-acoustic-panels"],
  ["PET Felt Acoustic Material Lighting Guide", "/blog/pet-felt-acoustic-material-lighting-guide"],
  ["LED Acoustic Pendant Light Specification Guide", "/blog/led-acoustic-pendant-light-specification-guide"],
  ["How to Choose PET Felt Acoustic Pendant Lights", "/blog/how-to-choose-pet-felt-acoustic-pendant-lights"],
  ["PET Felt Acoustic Lighting Cost Guide", "/blog/pet-felt-acoustic-lighting-cost"],
  ["Acoustic Pendant Lights", "/products/acoustic-pendant-lights"],
  ["Acoustic Linear Lights", "/products/acoustic-linear-lights"],
  ["Office and Meeting Room Applications", "/applications/office-meeting-rooms"],
  ["Restaurant and Hospitality Applications", "/applications/restaurant-hospitality"]
];

const references = [
  ["ISO 354:2003: sound absorption measurement in a reverberation room", "https://www.iso.org/standard/34545.html"],
  ["ISO 20189:2018: rating sound absorption of interior objects", "https://www.iso.org/standard/67230.html"],
  ["ASTM C423: sound absorption and coefficients by the reverberation-room method", "https://store.astm.org/standards/c423"],
  ["National Research Council Canada: reverberant noise control using sound-absorbing materials", "https://nrc-publications.canada.ca/eng/view/ft/?id=1856e4bb-5a91-4a0b-8589-0115fe305032"]
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
    headline: title,
    description,
    image: absoluteUrl(heroImage),
    datePublished: "2026-07-21",
    dateModified: "2026-07-21",
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

  return (
    <>
      <SiteHeader content={content} ctaHref="#quote" />
      <main id="top" className="blog-article-page">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

        <section className="article-hero section-dark">
          <div className="wrap article-hero-grid">
            <div className="article-hero-copy reveal">
              <p className="eyebrow">Acoustic Performance Guide</p>
              <h1>{title}</h1>
              <p>Yes, acoustic lighting can work. The honest answer is that the result comes from exposed absorptive area, tested construction, frequency, quantity and room conditions, not from the word "acoustic" in a product name.</p>
              <div className="hero-actions">
                <a className="btn primary" href="#quick-answer">Read the Quick Answer</a>
                <a className="btn glass" href="/products/acoustic-pendant-lights">View Acoustic Pendant Lights</a>
              </div>
            </div>
            <figure className="article-hero-media reveal delay-1">
              <img src={heroImage} alt="Multiple purple PET felt acoustic pendant lights with deep folded surfaces in a hard-finished interior" width="1914" height="1920" loading="eager" />
              <figcaption>Application image showing repeated fixtures and exposed felt folds. It illustrates form and coverage, not a measured room result.</figcaption>
            </figure>
          </div>
        </section>

        <div className="article-content-layout wrap">
          <article className="article-body">
            <div className="article-meta reveal">
              <span>Does acoustic lighting work?</span>
              <span>Approx. 16 min read</span>
              <span>For designers, acousticians, contractors and buyers</span>
            </div>

            <section className="article-section reveal">
              <h2>The short answer is yes, with conditions</h2>
              <p>A well-designed acoustic light can reduce reflected sound inside a room while providing useful illumination. But a light does not become an effective absorber simply because PET felt has been wrapped around it. The material needs enough exposed area, a suitable construction and a place in a room-wide treatment plan.</p>
              <p>Think of a hand towel and a theatre curtain. Both are fabric. Only one has the depth and area to change how a room feels. Acoustic lighting works by the same basic rule: the label matters less than the amount and arrangement of material that sound can reach.</p>
              <p>If this product category is new to you, start with <a href="/blog/what-is-acoustic-pendant-lighting">what acoustic pendant lighting is</a>. This guide focuses on the harder question: how to tell a useful acoustic product from a decorative felt light.</p>
            </section>

            <section className="article-section reveal" id="quick-answer">
              <h2>Quick answers before you compare products</h2>
              <ArticleTable columns={["Question", "Practical answer"]} rows={quickAnswers} />
              <blockquote className="article-quote">The most useful buying question is not "Is this acoustic?" It is "How much tested absorption will this exact product add, at which frequencies, and how many will be installed in this room?"</blockquote>
            </section>

            <section className="article-section reveal">
              <h2>What acoustic lighting changes, and what it does not</h2>
              <p>Sound leaving a person, loudspeaker or machine reaches listeners directly and also reflects from ceilings, walls, glazing, tables and floors. Those later reflections can blur speech and make a busy room feel louder. Hard surfaces act a little like a concrete wall struck by a ball: much of the energy comes back. A porous felt surface behaves more like a hedge, letting some energy enter and lose strength inside the fibres.</p>
              <p>This process is sound absorption. It is not sound isolation. Absorption controls reflections and decay within one space. Isolation limits sound travelling from one space to another. If voices are leaking through a meeting-room door, adding pendants is like putting a rug beside an open window: it may soften the room, but it does not close the gap.</p>
              <p>The <a href="/blog/pet-felt-acoustic-material-lighting-guide">PET felt material guide</a> explains porosity, material claims and report scope in more detail. For a treatment choice, see <a href="/blog/acoustic-lighting-vs-acoustic-panels">acoustic lighting versus acoustic panels</a>.</p>
            </section>

            <section className="article-section reveal">
              <h2>Seven factors decide whether the effect is meaningful</h2>
              <ArticleTable columns={["Factor", "Why it matters", "What to verify"]} rows={factorRows} />
              <p>Surface area is usually the fastest screening tool. A folded or finned form can expose much more felt than its footprint suggests, just as an unfolded road map is far larger than the rectangle in your hand. However, more geometric area is not automatically more absorption: spacing, blocked surfaces, material construction and frequency still matter.</p>
              <ArticleImage
                src="/assets/img/products/ko-xym-0185/ko-xym-0185-scene-01-enhanced.webp"
                alt="Large grey sculptural PET felt pendant light with deep vertical folds in a lounge"
                width="1920"
                height="1920"
                caption="Deep folds can create more exposed surface than a smooth shade of the same diameter. This application image explains geometry; it is not a substitute for complete-object test data."
              />
            </section>

            <section className="article-section reveal">
              <h2>Use an evidence ladder, not one acoustic badge</h2>
              <p>Product evidence has levels. A photo can show a convincing shape, while a material report can show that a defined sheet absorbs sound under a defined condition. Neither alone proves the room result. Move up the ladder until the strength of evidence matches the project's risk.</p>
              <ArticleTable columns={["Evidence", "What it tells you", "Main limit"]} rows={evidenceRows} />
              <p><a href="https://www.iso.org/standard/34545.html" target="_blank" rel="noreferrer">ISO 354</a> covers reverberation-room measurement for absorptive materials and objects. <a href="https://www.iso.org/standard/67230.html" target="_blank" rel="noreferrer">ISO 20189</a> addresses how single interior objects are classified and rated from this type of measurement. <a href="https://store.astm.org/standards/c423" target="_blank" rel="noreferrer">ASTM C423</a> is another reverberation-room method and explicitly cautions that laboratory coefficients should be applied carefully because real rooms rarely reproduce an ideal diffuse sound field.</p>
              <p>The practical rule is simple: the tested thing should resemble the quoted thing. Check model, dimensions, felt construction, sample quantity, suspension and mounting. If a report covers only a flat sheet, describe it as material evidence, not a complete pendant performance certificate.</p>
            </section>

            <section className="article-section reveal">
              <h2>Frequency explains why one number can mislead</h2>
              <p>Sound is not one ingredient. It is more like a recipe containing bass, speech and sharp high-frequency energy. An absorber can work well for one part and poorly for another. That is why frequency-band data is more useful than a single slogan.</p>
              <ArticleTable columns={["Range", "Typical examples", "What acoustic lighting may do"]} rows={frequencyRows} />
              <p>NRC is a compact summary across selected mid-frequency bands. It is useful for broad comparison, but it can hide where a product is strong or weak. For a suspended three-dimensional object, equivalent absorption area per object and its frequency-band results may be more meaningful than applying a flat-panel rating to the silhouette of the light.</p>
            </section>

            <section className="article-section reveal">
              <h2>The same pendant can behave differently in two rooms</h2>
              <ArticleTable columns={["Example", "Room conditions", "Likely interpretation"]} rows={roomRows} />
              <p>This is why fixed claims such as "reduces noise by 50%" are not credible without a defined room, baseline, quantity, metric and measurement method. A product can make a useful contribution without carrying the whole acoustic design.</p>
            </section>

            <section className="article-section reveal">
              <h2>A simple reverberation estimate, without false precision</h2>
              <p>Acousticians often use reverberation time, or RT60, to describe how long sound takes to decay by 60 dB. In a simplified diffuse-field estimate using SI units, the Sabine relationship is:</p>
              <blockquote className="article-quote">RT60 approximately equals 0.161 times room volume divided by total equivalent absorption area: RT60 ≈ 0.161 × V / A.</blockquote>
              <p>The equation is useful because it shows direction. If the room stays the same and total equivalent absorption increases by 25%, the simplified RT estimate becomes 1 / 1.25, or about 80% of the original value. That is roughly a 20% reduction, not a promise that every listener will report exactly 20% less noise.</p>
              <p>Real rooms are not perfect diffuse fields. Geometry, scattering, occupancy, open ceilings and uneven placement matter. The <a href="https://nrc-publications.canada.ca/eng/view/ft/?id=1856e4bb-5a91-4a0b-8589-0115fe305032" target="_blank" rel="noreferrer">National Research Council Canada guide to reverberant noise control</a> explains the relationship between room absorption, frequency and reverberation in practical terms.</p>
            </section>

            <section className="article-section reveal">
              <h2>Where acoustic lighting is most useful</h2>
              <p>Acoustic lighting earns its place when the ceiling needs both light and distributed absorption, especially where wall space is glazed, branded, shelved or unavailable. Common applications include:</p>
              <BulletList items={[
                "meeting tables where lighting and local speech comfort share the same ceiling zone;",
                "open offices that need repeated treatment above team areas without filling every wall with panels;",
                "restaurants and cafes with hard finishes, where several fixtures can spread absorption through the dining area;",
                "reception spaces, libraries and education interiors where a sculptural ceiling element can do more than one job;",
                "renovations where adding separate ceiling rafts would compete with the lighting, sprinkler and services layout."
              ]} />
              <p>Explore <a href="/applications/office-meeting-rooms">office and meeting-room applications</a>, <a href="/applications/restaurant-hospitality">restaurant and hospitality applications</a>, <a href="/products/acoustic-pendant-lights">acoustic pendant lights</a> and <a href="/products/acoustic-linear-lights">acoustic linear lights</a> for format options. Lighting still needs its own lumen, glare, colour-quality, driver and control checks; the <a href="/blog/led-acoustic-pendant-light-specification-guide">LED specification guide</a> covers that side.</p>
            </section>

            <section className="article-section reveal">
              <h2>When acoustic lighting is not enough</h2>
              <p>Use panels, baffles, rafts or specialist construction as well when the lighting layout cannot provide enough total area, the room target is demanding, low-frequency control is important, or the problem is sound transmission. Acoustic lighting should not force a bad lighting plan just to create more absorption.</p>
              <p>A combined scheme is often the practical answer: lights handle the zones that need illumination, while wall or ceiling treatments fill the remaining acoustic gap. Our <a href="/blog/acoustic-lighting-vs-acoustic-panels">lighting-versus-panels guide</a> explains what each system replaces and what it leaves unsolved.</p>
            </section>

            <section className="article-section reveal">
              <h2>A six-step specification workflow</h2>
              <ol className="article-numbered-list">{workflowSteps.map((step) => <li key={step}>{step}</li>)}</ol>
              <p>For product-level checks, continue with <a href="/blog/how-to-choose-pet-felt-acoustic-pendant-lights">how to choose PET felt acoustic pendant lights</a>. For budgeting, the <a href="/blog/pet-felt-acoustic-lighting-cost">cost guide</a> explains why size, tooling, lighting, documentation and packing need to be quoted on the same scope.</p>
            </section>

            <section className="article-section reveal">
              <h2>Six red flags in an acoustic lighting claim</h2>
              <BulletList items={redFlags} />
              <p>None of these automatically makes a supplier unreliable. They show where the buyer should pause and ask for a narrower, verifiable statement before the claim enters a specification or client presentation.</p>
              <div className="article-inline-cta" id="quote">
                <span>Room suitability review</span>
                <h3>Need to check whether an acoustic light is the right tool?</h3>
                <p>Send the room dimensions, ceiling height, photos, major finishes, quantity, preferred product and the problem you want to solve. We can help structure the product and document questions for review; critical acoustic targets should be confirmed by the project acoustician.</p>
                <div className="hero-actions">
                  <a className="btn primary" href={mailtoHref("Acoustic Lighting Room Suitability Review")} data-contact-popup>Request a Suitability Review</a>
                  <a className="btn ghost" href="/contact">Send Project Details</a>
                </div>
              </div>
            </section>

            <section className="article-section article-faq reveal">
              <h2>Frequently asked questions</h2>
              {faqs.map((faq) => (
                <div className="article-subsection" key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </section>

            <section className="article-section reveal">
              <h2>Related guides and product pages</h2>
              <ul className="article-links">{relatedLinks.map(([label, href]) => <li key={href}><a href={href}>{label}</a></li>)}</ul>
            </section>

            <section className="article-section reveal">
              <h2>Technical references</h2>
              <p>These sources explain the measurement methods and room-acoustics principles discussed above. They do not replace a project-specific acoustic calculation, local code review or confirmation that a quoted product matches the tested sample.</p>
              <ul className="article-links">{references.map(([label, href]) => <li key={href}><a href={href} target="_blank" rel="noreferrer">{label}</a></li>)}</ul>
            </section>

            <section className="article-cta">
              <p className="eyebrow">Honest acoustic specification</p>
              <h2>Start with the room problem, then choose the light</h2>
              <p>Share the room, layout, quantity, target, lighting brief and required document set. We will help turn a broad request for an "acoustic light" into a product brief that designers, buyers and suppliers can compare.</p>
              <div className="hero-actions">
                <a className="btn primary" href={mailtoHref("Acoustic Lighting Project Brief")} data-contact-popup>Request Project Review</a>
                <a className="btn ghost" href="/contact">Contact Us</a>
              </div>
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
