import content from "../../../content/siteContent.json";
import { SiteFooter } from "../../../components/SiteFooter";
import { SiteHeader } from "../../../components/SiteHeader";
import { ArticleBrandCard } from "../../../components/ArticleBrandCard";
import { RelatedArticles } from "../../../components/RelatedArticles";
import { mailtoHref } from "../../../components/inquiryConfig";
import { absoluteUrl, createPageMetadata } from "../../../lib/metadata";

const pathname = "/blog/acoustic-pendant-light-placement-guide";
const title = "Acoustic Pendant Light Placement Guide: Height, Spacing and Coverage";
const seoTitle = "Acoustic Pendant Light Placement: Height, Spacing & Coverage";
const description = "Learn how to place acoustic pendant lights by suspension height, fixture spacing, sightlines, lighting coverage and sound-absorption distribution.";
const heroImage = "/assets/img/blog/acoustic-pendant-light-placement-hero.png";

const quickAnswerRows = [
  ["Above a fixed table", "Start a mock-up around 750–900 mm from tabletop to pendant bottom.", "Fixture depth, table size, faces, screens, glare and the lighting calculation."],
  ["Above workstations", "Set the light plane from the desk plane—not from a dining-room rule.", "Standing clearance, screen reflections, optic and uniformity."],
  ["Pendant spacing", "Use the fixture's photometric data and mounting height as the first check.", "IES/LDT file, optic, orientation, furniture and room geometry."],
  ["Acoustic placement", "Spread absorptive objects through the occupied, noisy zones.", "Fixture-level absorption data, total quantity and room target."],
  ["Ceiling services", "Coordinate before production, not during installation.", "Sprinklers, HVAC, sensors, structure, access and local rules."]
];

const layoutPatterns = [
  ["Single centred pendant", "A small fixed table or reception point", "Too little light or absorption for the rest of the room"],
  ["Linear row", "Conference tables, workstation islands and counters", "Uneven light at the ends or across the width"],
  ["Regular grid", "Open offices, classrooms and larger dining rooms", "Following ceiling symmetry instead of furniture"],
  ["Decorative cluster", "A reception, lounge or bar feature", "Concentrating the acoustic benefit in one place"],
  ["Mixed system", "When the lighting and acoustic quantities differ", "More coordination between lit and unlit treatment"]
];

const faqs = [
  { question: "How high should acoustic pendant lights hang above a table?", answer: "Around 750–900 mm from the tabletop to the bottom of a pendant is a useful starting range for a fixed table. The final position depends on the fixture depth, table size, sightlines, glare, cameras and lighting calculation." },
  { question: "How far apart should acoustic pendant lights be?", answer: "There is no universal distance. Use the exact fixture's photometric data, mounting height and spacing criterion where available, then verify illuminance, uniformity and glare in lighting software. Check acoustic distribution separately." },
  { question: "Can acoustic pendant lights hang over walkways?", answer: "They can, provided the lowest point complies with locally applicable headroom, accessibility and safety requirements. Lower pendants are usually easier to control over permanently fixed furniture than over flexible circulation space." },
  { question: "Is lighting coverage the same as acoustic coverage?", answer: "No. Lighting coverage describes illuminance across a defined work plane. Acoustic absorption adds equivalent absorbing area to a room; it does not create a silent circle underneath each pendant." },
  { question: "Should a pendant be centred over a meeting table?", answer: "Usually that is a good first move, particularly along a long table's axis. Then adjust for screens, cameras, ceiling services, the actual light calculation and where people need to see one another." },
  { question: "Does hanging a pendant lower make it more acoustic?", answer: "Not automatically. Suspension height and air space may affect a product's behaviour, but lower is not a universal acoustic improvement. Compare the planned configuration with complete-fixture test data instead of making percentage claims." }
];

const relatedLinks = [
  ["NRC, αw and Sabins Explained for Acoustic Lighting Buyers", "/blog/nrc-alpha-w-sabins-acoustic-lighting"],
  ["LED Acoustic Pendant Light Specification Guide", "/blog/led-acoustic-pendant-light-specification-guide"],
  ["Acoustic Pendant Lighting for Open Offices and Meeting Rooms", "/blog/best-acoustic-pendant-lighting-open-offices-meeting-rooms"],
  ["Does Acoustic Lighting Really Work?", "/blog/does-acoustic-lighting-really-work"],
  ["Acoustic Pendant Lights", "/products/acoustic-pendant-lights"],
  ["Acoustic Linear Lights", "/products/acoustic-linear-lights"],
  ["Custom Acoustic Lighting Solutions", "/custom-acoustic-lighting-solutions"]
];

const references = [
  ["IES: interior mounting-height definition", "https://ies.org/definitions/mounting-height-mh-interior/"],
  ["IES: luminaire spacing criterion definition", "https://ies.org/definitions/luminaire-spacing-criterion-sc/"],
  ["IES: learn about photometric (IES) files", "https://ies.org/education/learn-about-ies-files/"],
  ["U.S. Access Board: circulation-path headroom example", "https://www.access-board.gov/ada/guides/chapter-3-protruding-objects/"],
  ["ISO 20189: rating sound absorption of single interior objects", "https://www.iso.org/standard/67230.html"]
];

function ArticleTable({ columns, rows }) {
  return <div className="article-table-wrap"><table className="article-table"><thead><tr>{columns.map((column) => <th key={column}>{column}</th>)}</tr></thead><tbody>{rows.map((row) => <tr key={row[0]}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}</tbody></table></div>;
}

function ArticleImage({ src, alt, caption, eager = false }) {
  return <figure className="article-image"><img src={src} alt={alt} width="1400" height="788" loading={eager ? "eager" : "lazy"} /><figcaption>{caption}</figcaption></figure>;
}

export function generateMetadata() {
  return createPageMetadata({ pathname, title: seoTitle, description, images: [{ url: absoluteUrl(heroImage) }] });
}

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org", "@type": "Article", headline: title, description, image: absoluteUrl(heroImage),
    datePublished: "2026-08-25", dateModified: "2026-08-25",
    author: { "@type": "Organization", name: "FLOSEEK Acoustic Lighting" },
    publisher: { "@type": "Organization", name: "FLOSEEK Acoustic Lighting", logo: { "@type": "ImageObject", url: absoluteUrl("/assets/img/brand/floseek-logo-header.png") } },
    mainEntityOfPage: absoluteUrl(pathname)
  };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) };
  const howToSchema = {
    "@context": "https://schema.org", "@type": "HowTo", name: "How to plan acoustic pendant light placement", description,
    step: ["Map the furniture, activity and circulation zones.", "Check the provisional lighting and acoustic fixture quantities.", "Set and label the first installed-height dimensions.", "Run a photometric calculation using the actual fixture data.", "Overlay sprinklers, HVAC, sensors, structure and maintenance access.", "Review elevations or a physical mock-up before issuing the installation schedule."].map((text, position) => ({ "@type": "HowToStep", position: position + 1, text }))
  };

  return <>
    <SiteHeader content={content} ctaHref="#quote" />
    <main id="top" className="blog-article-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <section className="article-hero section-dark"><div className="wrap article-hero-grid">
        <div className="article-hero-copy reveal"><p className="eyebrow">Project Planning Guide</p><h1>{title}</h1><p>A practical guide to deciding where acoustic pendants belong, how low they should hang, and why a tidy ceiling grid is never the full answer.</p><div className="hero-actions"><a className="btn primary" href="#quote" data-contact-popup>Request a Placement Review</a><a className="btn glass" href="/products/acoustic-pendant-lights">View Acoustic Pendant Lights</a></div></div>
        <ArticleImage src={heroImage} alt="Two slim PET felt acoustic pendant lights proportionately suspended above a conference table in a modern meeting room" caption="A fixed table gives a clear visual reference for testing pendant height, sightlines and the initial lighting layout." eager />
      </div></section>
      <div className="article-content-layout wrap"><article className="article-body">
        <div className="article-meta reveal"><span>Acoustic pendant placement</span><span>Approx. 12 min read</span><span>For architects, consultants, contractors and project buyers</span></div>

        <section className="article-section reveal"><h2>Quick answer: place the pendant around the room&apos;s real activity</h2><p>An acoustic pendant can have the right PET felt, lumen output and test data—and still feel wrong after installation. Too low, it interrupts faces, screens or circulation. Too high, it can look disconnected and spread its light too thinly.</p><p>The useful order is simple: <strong>people and furniture first; lighting and absorption next; the ceiling grid last.</strong> A reflected ceiling plan is graph paper. People do not work, eat or talk according to graph-paper lines.</p><ArticleTable columns={["Decision", "Good early-stage direction", "What sets the final value"]} rows={quickAnswerRows} /><blockquote className="article-quote">For a fixed table, 750–900 mm above the tabletop is a good place to begin a mock-up—not a rule to copy into every room.</blockquote></section>

        <section className="article-section reveal"><h2>Start with four maps, not one ceiling plan</h2><p>A placement that works brings four maps into agreement: the furniture and activity plan, the lighting plan, the acoustic-treatment plan and the ceiling-services plan. If a proposed pendant only works on one of those maps, it is not ready to release.</p><div className="article-subsection"><h3>Fixed meeting and dining tables</h3><p>These are the easiest places for a lower pendant: the activity is predictable and people are not normally walking under the fixture. Align a linear system with the long table axis, then check seated eye contact, camera views, screens, serving space and direct view of the diffuser. A deep felt form often needs more visual breathing room than a slim linear light.</p></div><div className="article-subsection"><h3>Workstation rows</h3><p>In an open office, follow the desk islands rather than the empty corridors. The pendant then has two jobs in the place that needs them: light the desk plane and distribute absorptive surface through the work area. Review standing head clearance and monitor reflections, especially where furniture may change.</p></div><div className="article-subsection"><h3>Flexible rooms and high ceilings</h3><p>A pendant that is safely above a table today can become an obstacle when that table moves. In training rooms and flexible dining areas, a higher grid, broader optic or a mix of acoustic lighting with separate baffles is often safer. With high ceilings, do not simply pin the fixture to the structure: use a suspension length that connects the light to the occupied zone, then verify cable stability, maintenance and the lighting calculation.</p></div></section>

        <section className="article-section reveal"><h2>How high should an acoustic pendant light hang?</h2><p>Write down the height that matters. “1.2 m suspension” is incomplete because it might mean cable length, a ceiling-to-fixture distance or a work-plane height.</p><ArticleTable columns={["Record on the drawing", "Why it matters"]} rows={[["Lowest point above finished floor", "Headroom, accessibility and circulation safety"], ["Lowest point above the table or furniture", "Sightlines, scale and physical clearance"], ["Luminous plane above the work plane", "Illuminance, spacing and glare calculation"], ["Top of acoustic body below the ceiling", "Indirect light, air space and comparison with tested configuration"]]} /><p>The <a href="https://ies.org/definitions/mounting-height-mh-interior/" target="_blank" rel="noreferrer">IES definition of interior mounting height</a> makes the same point: state both the reference plane and the luminaire reference point.</p><h3>Use the fixed-table range as a visual test</h3><p>For a fixed meeting or dining table, start around <strong>750–900 mm</strong> from the tabletop to the pendant bottom. Raise it if the felt body blocks faces, a display or a camera; if the LED source is too visible; or if standing activity becomes likely. Lowering can work when the table is fixed, the fixture stays within its footprint and the optic remains comfortable from seated positions.</p><p>Above a circulation path, local requirements take precedence. The U.S. Access Board, for example, uses an 80-inch (about 2030 mm) minimum headroom condition for relevant circulation-path hazards; it is an example, not an international default. Confirm the locally adopted requirements with the project team.</p></section>

        <section className="article-section reveal"><h2>How mounting height changes light—and why it changes spacing</h2><p>Move a torch away from a tabletop and the circle becomes wider but weaker. A pendant behaves in the same broad way: a lower fixture tends to make a smaller, stronger pool of direct light; a higher one tends to spread light further with less intensity at the work plane. The actual result depends on the optic, diffuser and direct/indirect split.</p><ArticleTable columns={["Change", "Likely result", "Check before approving"]} rows={[["Lower the pendant", "More local light, smaller pool", "Glare, bright spots, faces and screens"], ["Raise the pendant", "Broader distribution and more clearance", "Task illuminance, uniformity and visual scale"], ["Use a deep felt shade", "More shielding from some viewpoints", "Useful output, optic and dark edges"], ["Increase the ceiling gap", "Different indirect-light distribution", "Ceiling brightness and suspension stability"]]} /><p>Request the IES or LDT file for the exact fixture size, LED package, optic and diffuser. The <a href="https://ies.org/education/learn-about-ies-files/" target="_blank" rel="noreferrer">IES overview of photometric files</a> explains why this angular light data belongs in the calculation—not only a catalogue photo.</p><h3>A safe way to start the spacing calculation</h3><p>For a regular array, the fixture&apos;s spacing criterion (SC) can give an early check: <strong>preliminary spacing ≤ SC × mounting height above the work plane.</strong> IES defines SC as an estimated maximum spacing-to-mounting-height ratio for acceptable direct-light uniformity. It may differ in the two main directions for a linear or asymmetric luminaire.</p><p>Example: if the luminous plane is 1.50 m above a 0.75 m desk and the fixture SC is 1.2, the first spacing check is 1.80 m. That is a starting point, not an installation instruction. Re-run the model for the actual room, orientation, walls, desks, glare and daylight.</p></section>

        <section className="article-section reveal"><h2>Lighting coverage is not acoustic coverage</h2><p>This is the distinction that prevents many specification mistakes. Light has a measurable pattern on a work plane. An absorber does not make a silent circle directly below it.</p><ArticleTable columns={["Coverage", "What it means", "What verifies it"]} rows={[["Lighting", "Illuminance and uniformity across a defined plane", "IES/LDT file and lighting calculation"], ["Acoustic contribution", "Equivalent absorption added to the room", "Complete-fixture test data and acoustic calculation"], ["Acoustic distribution", "Where absorptive objects sit relative to active zones", "Ceiling plan and, when needed, acoustic modelling"], ["Service clearance", "Space around building systems", "Coordinated drawings and local requirements"]]} /><blockquote className="article-quote">A light pool is like the visible circle from a torch. Acoustic treatment is more like placing sponges around a room: each one helps with energy that reaches it, but none creates a hard boundary.</blockquote><p>Ask for equivalent absorption area of the <em>complete fixture</em>, not just the NRC of a flat felt sheet. The <a href="/blog/nrc-alpha-w-sabins-acoustic-lighting">NRC, αw and sabins guide</a> explains why a suspended object needs its own evidence. If the light calculation needs eight fixtures but the room needs more absorption, adding eight more bright lights is rarely the right answer; consider larger acoustic bodies, separately dimmed units, unlit baffles or wall treatment.</p></section>

        <section className="article-section reveal"><h2>Choose a layout pattern that matches the room</h2><ArticleTable columns={["Pattern", "Good fit", "Watch for"]} rows={layoutPatterns} /><h3>Meeting room</h3><p>Mark the table, display wall, camera and seated eye lines. Centre the fixture or linear run on the table, begin the elevation study at the table range, then check faces and screens before running the final lighting and acoustic review. A pendant should support the meeting, not sit in the middle of it like a curtain.</p><h3>Open office</h3><p>Use the desk plane as the photometric reference; calculate spacing both along and across the workstation islands; and distribute the felt bodies through the occupied floor. Read our <a href="/blog/best-acoustic-pendant-lighting-open-offices-meeting-rooms">open-office and meeting-room planning guide</a> for the room-by-room checklist.</p><h3>Restaurant</h3><p>Low decorative pendants can create intimacy over fixed tables. If layouts move, use a higher flexible grid. A beautiful cluster over the bar will not automatically control noise across the dining room; spread the absorption where diners actually sit.</p></section>

        <section className="article-section reveal"><h2>Coordinate ceiling services before production</h2><p>Acoustic pendants take up more volume than a standard downlight. Freeze their positions only after the reflected ceiling plan has been overlaid with sprinklers, diffusers, detectors, sensors, AV, emergency lighting, access panels and structure.</p><ArticleTable columns={["Coordinate with", "What can go wrong", "What to confirm"]} rows={[["Sprinklers", "The felt body can affect intended spray coverage", "Fire-protection design and local authority review"], ["HVAC", "Air throw can make a light pendant sway or twist", "Diffuser throw, clearance and cable stability"], ["Sensors and AV", "The fixture can block a detector, sensor, projector or camera", "Coverage diagrams and eye-level views"], ["Structure and access", "Fixings or drivers can be inaccessible or overloaded", "Fixture weight, fixing method, driver location and service route"]]} /><p>Do not use a universal sprinkler or HVAC clearance from a blog. The correct detail depends on the product geometry, ceiling height, local code and the responsible consultant&apos;s design.</p></section>

        <section className="article-section reveal"><h2>A practical placement workflow</h2><ol className="article-list"><li>Mark fixed furniture, flexible furniture, circulation and the real activity zones.</li><li>Compare the provisional lighting quantity with the acoustic quantity; they may not match.</li><li>Select a round, linear, canopy or decorative structure for the zone—not only for appearance.</li><li>Record the first installed-height dimensions, including the pendant bottom and luminous plane.</li><li>Run the lighting calculation with the actual product data and orientation.</li><li>Distribute the required absorption across useful zones; add separate treatment where the lighting layout leaves a gap.</li><li>Overlay ceiling services, then review elevations or build a mock-up.</li><li>Issue an installation schedule with room code, coordinates, orientation, bottom height, cable length, CCT, dimming, driver location and fixing method.</li></ol></section>

        <section className="article-section reveal"><h2>Common mistakes to avoid</h2><div className="article-subsection"><h3>Measuring cable length instead of installed height</h3><p>Cable length excludes the canopy, gripper, fixture depth and site adjustment. Schedule the final bottom height above finished floor.</p></div><div className="article-subsection"><h3>Copying one table rule into every room</h3><p>A residential dining rule is not automatically suitable for an office, lobby or flexible restaurant.</p></div><div className="article-subsection"><h3>Treating a light beam as an acoustic boundary</h3><p>Lighting and sound absorption need different calculations. A decorative cluster does not automatically treat an entire open room.</p></div><div className="article-subsection"><h3>Changing height without rerunning the calculation</h3><p>Moving the fixture changes illuminance, uniformity, glare and indirect-light behaviour. It may also move the project away from the tested acoustic configuration.</p></div></section>

        <section className="article-section article-faq reveal"><h2>FAQ</h2>{faqs.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</section>
        <section className="article-section reveal" id="quote"><div className="article-inline-cta"><div><span>Placement review support</span><h3>Need a second pair of eyes on a ceiling plan?</h3><p>Send the floor plan or reflected ceiling plan, room dimensions, furniture layout, desired models, lighting target, acoustic requirement and known sprinkler or HVAC positions. We can help compare pendant structures, suspension options and document requirements.</p></div><a className="btn primary" href={mailtoHref("Acoustic Pendant Placement Review")} data-contact-popup>Send Your Ceiling Plan</a></div></section>
        <section className="article-section reveal"><h2>Related reading and product pages</h2><ul className="article-link-list">{relatedLinks.map(([label, href]) => <li key={href}><a href={href}>{label}</a></li>)}</ul></section>
        <RelatedArticles currentPath={pathname} />
        <section className="article-final-cta reveal"><p className="eyebrow">Plan the complete ceiling system</p><h2>Planning acoustic pendant lighting for a commercial project?</h2><p>Share the room type, ceiling height, drawings, lighting requirements and acoustic target. We can help identify a fixture structure, suspension approach and technical-document set that fit the project.</p><div className="hero-actions"><a className="btn primary" href={mailtoHref("Acoustic Pendant Lighting Project Review")} data-contact-popup>Request Project Review</a><a className="btn glass" href="/custom-acoustic-lighting-solutions">View Custom Solutions</a></div></section>
        <section className="article-section reveal"><h2>Technical references</h2><ul className="article-reference-list">{references.map(([label, href]) => <li key={href}><a href={href} target="_blank" rel="noreferrer">{label}</a></li>)}</ul></section>
      </article><ArticleBrandCard /></div>
    </main>
    <SiteFooter content={content} />
  </>;
}
