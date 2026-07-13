import content from "../../../content/siteContent.json";
import { SiteFooter } from "../../../components/SiteFooter";
import { SiteHeader } from "../../../components/SiteHeader";
import { ArticleBrandCard } from "../../../components/ArticleBrandCard";
import { RelatedArticles } from "../../../components/RelatedArticles";
import { mailtoHref } from "../../../components/inquiryConfig";
import { absoluteUrl, createPageMetadata } from "../../../lib/metadata";

const pathname = "/blog/led-acoustic-pendant-light-specification-guide";
const title = "LED Acoustic Pendant Light Specification Guide";
const seoTitle = "LED Acoustic Pendant Light Specification Guide: Lumen, UGR, CCT & Dimming";
const description =
  "Specify LED acoustic pendant lights with confidence. Learn lumen, wattage, UGR, CCT, CRI, beam angle, LED drivers, dimming and the documents to request for commercial projects.";
const heroImage = "/assets/img/blog/led-spec-ring-office-hd.webp";

const quickSpecRows = [
  ["Lumen", "Visible light output.", "Water coming out of a tap.", "Ask for complete-fixture delivered lumens."],
  ["Wattage", "Electrical power used.", "The energy used by the pump.", "Confirm finished-fixture input wattage."],
  ["Efficacy", "Lumens delivered per watt.", "Fuel economy for a light.", "Compare the whole luminaire, not only the LED board."],
  ["UGR", "An estimate of discomfort glare.", "Whether a nearby headlight bothers your eyes.", "Ask whether it is layout-specific."],
  ["CCT", "Warm or cool appearance of white light.", "The mood of white light, not its brightness.", "Choose it by room use and interior concept."],
  ["CRI", "How naturally colours appear.", "Whether a fabric swatch looks like itself.", "Use CRI 90 where material and skin colour matter."],
  ["Beam and distribution", "Where light is sent.", "A torch on spot or flood setting.", "Request an IES or LDT file when layout matters."],
  ["Dimming", "How light level is controlled.", "A valve that must fit the correct pipe.", "State the protocol, not only 'dimmable'."]
];

const spaceRows = [
  ["Open office", "Balanced desk light and screen comfort.", "Delivered lumen, diffuser, mounting height, CCT, layout data."],
  ["Meeting room", "Faces, table comfort, presentations and video calls.", "Glare control, dimming protocol, CRI, camera-friendly driver."],
  ["Restaurant or cafe", "Warm atmosphere without dark tables.", "2700K or 3000K, CRI, smooth dimming, beam direction."],
  ["Hotel lobby", "Visual feature plus reliable light over a large volume.", "Fixture scale, lumen package, driver access, photometric file."],
  ["Retail or showroom", "Products and finishes should look true to colour.", "CRI 90+, CCT, beam distribution, colour-rendition data if needed."],
  ["Classroom or library", "Comfort over long reading and learning periods.", "Glare review, durable finish, CCT, consistent layout and documents."]
];

const dimmingRows = [
  ["Non-dimming", "Simple areas and budget-led projects.", "No flexibility after installation."],
  ["TRIAC / phase-cut", "Some hospitality, residential and retrofit work.", "Driver and site dimmer must be compatible."],
  ["0-10V", "Many commercial office projects.", "Correct control wiring and driver are required."],
  ["DALI / DALI-2", "Hotels, offices and scene-control projects.", "Specify early so the driver and controls match."],
  ["Wireless / other controls", "Retrofits and flexible zones.", "Confirm commissioning, compatibility and maintenance." ]
];

const documentSet = [
  "Product datasheet with model, dimensions, material, weight and installation method.",
  "Delivered lumen output and complete-fixture wattage.",
  "CCT, CRI and any requested colour-consistency information.",
  "Beam or distribution description, plus IES/LDT file when needed.",
  "LED driver data sheet and dimming protocol confirmation.",
  "Input voltage, wiring diagram and installation manual.",
  "PET felt material and colour information.",
  "Project-required fire, acoustic or electrical documents only after confirming the exact requirement.",
  "Approved-sample record, packing list, accessory list and warranty terms."
];

const rfqItems = [
  "room type, dimensions, ceiling height and installation points;",
  "drawings, renderings or a reflected ceiling plan if available;",
  "quantity by area and preferred fixture shape or size;",
  "whether the fixture is task, ambient, decorative or mixed lighting;",
  "target CCT, CRI and delivered lumen or lux requirement if known;",
  "glare, IES/LDT and layout-calculation requirements;",
  "dimming protocol, input voltage, control-system and driver requirements;",
  "PET felt colour, suspension length, canopy preference and maintenance limits;",
  "destination country, required project documents, sample deadline and delivery date."
];

const commonMistakes = [
  ["Choosing by wattage alone", "Wattage tells you power use, not whether the desks, tables or walls will receive the right light."],
  ["Treating a UGR claim as a universal product label", "Glare changes with the room, mounting height, surface reflectance, layout and viewing direction."],
  ["Writing only 'dimmable'", "A dimmable driver can still fail with the wrong dimmer or control system."],
  ["Approving a custom fixture without photometric confirmation", "A good-looking shade can redirect or block light in ways a product photo cannot show."],
  ["Locking only the felt sample", "For bulk work, LED specification, driver model, CCT and diffuser need approval too."],
  ["Using one CCT everywhere", "A 4000K workstation zone and a 3000K hospitality lounge may need different lighting intent."]
];

const faqs = [
  {
    question: "What is the most important LED acoustic pendant light specification?",
    answer:
      "There is no single number. Start with the room result, then check delivered lumen, wattage, glare control, CCT, CRI, distribution, dimming, driver and installation height together."
  },
  {
    question: "What is the difference between lumen and wattage?",
    answer:
      "Lumen is visible light output. Wattage is electrical power consumption. Two fixtures with the same wattage can deliver different amounts and distributions of light."
  },
  {
    question: "Is UGR a product value or a room value?",
    answer:
      "UGR is influenced by both the luminaire and the application. A product can support low-glare design, but the actual result depends on mounting height, spacing, room surfaces, layout and viewing direction."
  },
  {
    question: "Which CCT should I specify for acoustic pendant lighting?",
    answer:
      "3000K is common in restaurants, hotels and warm interiors. 4000K is common in offices, meeting rooms and workspaces. The final choice should follow the room function and lighting concept."
  },
  {
    question: "Is CRI 80 enough for a commercial project?",
    answer:
      "CRI 80 is often suitable for general commercial areas. CRI 90 is commonly preferred where food, fabrics, merchandise, skin tones or premium interior finishes matter."
  },
  {
    question: "Do I need an IES or LDT file?",
    answer:
      "For commercial layouts, custom fixtures and multi-fixture rooms, yes. It lets a lighting designer review distribution, spacing and illuminance instead of relying only on a catalog image."
  },
  {
    question: "What dimming type is best for an acoustic pendant light?",
    answer:
      "It depends on the project controls. TRIAC may suit some hospitality or retrofit work; 0-10V is common in commercial lighting; DALI is common where addressable controls and scenes are needed. The driver and control system must be specified together."
  }
];

const relatedLinks = [
  ["What Is Acoustic Pendant Lighting?", "/blog/what-is-acoustic-pendant-lighting"],
  ["How to Choose PET Felt Acoustic Pendant Lights", "/blog/how-to-choose-pet-felt-acoustic-pendant-lights"],
  ["Acoustic Lighting vs Acoustic Panels", "/blog/acoustic-lighting-vs-acoustic-panels"],
  ["PET Felt Acoustic Lighting Cost Guide", "/blog/pet-felt-acoustic-lighting-cost"],
  ["Acoustic Pendant Lights", "/products/acoustic-pendant-lights"],
  ["Acoustic Linear Lights", "/products/acoustic-linear-lights"],
  ["Office and Meeting Room Applications", "/applications/office-meeting-rooms"],
  ["Restaurant and Hospitality Applications", "/applications/restaurant-hospitality"]
];

const references = [
  ["IES LM-79: optical and electrical measurement of solid-state lighting products", "https://store.ies.org/product/optical-and-electrical-measurements-of-solid-state-lighting-products/"],
  ["CIE: discomfort glare in interior lighting", "https://www.cie.co.at/publications/discomfort-glare-interior-lighting"],
  ["IES: TM-30 colour-rendition method", "https://ies.org/lda/color-specify-and-conquer-2/"],
  ["DALI Alliance: DALI and IEC 62386", "https://www.dali-alliance.org/dali/"]
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
              <p className="eyebrow">Commercial Lighting Specification Guide</p>
              <h1>{title}: Lumen, UGR, CCT, CRI and Dimming</h1>
              <p>Choose acoustic pendant lights by the result the room needs, then confirm the lighting details that make that result repeatable on site.</p>
              <div className="hero-actions">
                <a className="btn primary" href="#quote" data-contact-popup>Request Specification Review</a>
                <a className="btn glass" href="/products/acoustic-pendant-lights">View Acoustic Pendant Lights</a>
              </div>
            </div>
            <figure className="article-hero-media reveal delay-1">
              <img src={heroImage} alt="Acoustic ring pendant lighting above a commercial workspace" width="1542" height="1020" loading="eager" />
              <figcaption>For a commercial pendant, the acoustic body and the lighting system must be specified as one product.</figcaption>
            </figure>
          </div>
        </section>

        <div className="article-content-layout wrap">
          <article className="article-body">
            <div className="article-meta reveal"><span>LED acoustic pendant light specification</span><span>Approx. 15 min read</span><span>For architects, lighting teams, contractors and buyers</span></div>

            <section className="article-section reveal">
              <h2>A beautiful acoustic pendant can still be wrong for the room</h2>
              <p>A PET felt acoustic pendant may look right in a rendering, match the interior palette and arrive on budget. It can still disappoint once installed: desks feel dim, a meeting table has glare, a restaurant feels cold, or the lights flicker when the control system is used.</p>
              <p>That is not always a product-quality problem. Often it is a specification problem. The felt body helps soften reflections, while the LED system provides light. Specifying only the felt is like choosing a jacket for a car and forgetting to check the engine.</p>
              <p>This guide translates the main lighting terms into practical questions. It helps a first-time buyer understand the basics, while giving project teams enough detail to prepare a cleaner RFQ. For the acoustic side, start with <a href="/blog/what-is-acoustic-pendant-lighting">what acoustic pendant lighting is</a>; for the balance between lighting and larger absorptive surfaces, see <a href="/blog/acoustic-lighting-vs-acoustic-panels">acoustic lighting versus acoustic panels</a>.</p>
            </section>

            <section className="article-section reveal">
              <h2>Quick answer: start with the room, not the wattage</h2>
              <p>Asking for a 40W acoustic pendant is understandable, but it is not yet a specification. Wattage is like an engine size: it says how much energy is used, not whether the journey will be comfortable or suitable for the road.</p>
              <p>Start with room function, ceiling height, table or desk layout, other light sources, visual comfort, atmosphere and controls. Then choose the fixture specification that can deliver that result.</p>
              <ArticleTable columns={["Term", "Plain meaning", "Simple comparison", "What to confirm"]} rows={quickSpecRows} />
            </section>

            <section className="article-section reveal">
              <h2>Which details matter most in each space?</h2>
              <ArticleTable columns={["Space", "Lighting priority", "Define early"]} rows={spaceRows} />
              <p>A single product may be adapted for several rooms, but it should not be blindly copied across them. An open office, a restaurant and a hotel lobby do not ask the light to do the same job.</p>
            </section>

            <section className="article-section reveal">
              <h2>Lumen: how much light comes out?</h2>
              <p>Lumen is visible light output. If wattage is the energy going into the system, lumen is the light coming out. A useful comparison is a water tap: the pump uses energy, but the water flow is what reaches the bucket.</p>
              <p>For a pendant, ask for <strong>delivered lumen from the complete fixture</strong>, not only the LED chip or board output. A diffuser, lens, recess and PET felt shade can absorb or redirect part of the light. The finished fixture is what the room receives.</p>
              <blockquote className="article-quote">A catalog number can describe the LED engine. A photometric file describes the completed fixture.</blockquote>
              <p>Where design calculations are required, an IES or LDT file lets the lighting team model spacing, workplane light and distribution. The IES LM-79 method covers optical and electrical measurements for solid-state lighting products, which is why measured luminaire data carries more weight than an unsupported catalog claim.</p>
              <ArticleImage src="/assets/img/blog/led-spec-magenta-cloud-hd.webp" alt="LED acoustic pendant lights illuminating a commercial lounge" width="1357" height="1159" caption="Light output only becomes useful when it reaches the desks, tables or circulation areas that need it." />
            </section>

            <section className="article-section reveal">
              <h2>Wattage and efficacy: power use is not brightness</h2>
              <p>Wattage tells you electrical power consumption. With LED lighting, two fixtures with the same wattage can have different output because the LEDs, driver, thermal design, diffuser and housing are different.</p>
              <p>Efficacy, expressed in lumens per watt, is the fuel-economy figure. It helps compare how efficiently a completed luminaire turns power into useful light. But it is not the whole story. A highly efficient fixture can still be unpleasant if it creates glare or shows colours poorly.</p>
              <p>Confirm complete-fixture input wattage, voltage, any selectable output settings and whether a different light package needs a different driver. For projects comparing product cost, the related <a href="/blog/pet-felt-acoustic-lighting-cost">acoustic lighting cost guide</a> explains why a cheaper LED line item can create a more expensive site problem later.</p>
            </section>

            <section className="article-section reveal">
              <h2>UGR and glare: why bright can still feel bad</h2>
              <p>UGR is a method for estimating discomfort glare in interior lighting. In everyday terms, it answers a different question from lumen: not “how much light is there?”, but “does the light near my eyes feel uncomfortable?”</p>
              <p>A narrow bright strip above a meeting table may produce enough light but still make people squint. A larger, softer luminous surface can make the same room feel calmer. The PET felt shell can support visual comfort through shade depth and concealment, but felt alone does not guarantee a low-glare result.</p>
              <p>UGR should not be treated as a sticker that follows a fixture everywhere. The established CIE method considers luminaire characteristics as well as observer position and direction of view. In practice, mounting height, spacing, room reflectance, screen position and viewing angle matter.</p>
              <p>For office projects, ask whether the proposed product can be reviewed in the actual layout, rather than accepting a generic “low glare” statement. This is especially important for linear fixtures above workstation rows and pendants above meeting tables.</p>
            </section>

            <section className="article-section reveal">
              <h2>CCT: the mood of white light</h2>
              <p>CCT, or correlated colour temperature, describes whether white light feels warm or cool. It does not describe brightness. Think of it as the mood of the white light: candle-warm, neutral or crisp.</p>
              <ArticleTable columns={["CCT", "Typical feel", "Common use"]} rows={[["2700K", "Warm and intimate", "Restaurants, lounges and hospitality corners"], ["3000K", "Warm but practical", "Restaurants, hotel rooms and reception areas"], ["3500K", "Balanced warm-neutral", "Coworking and mixed-use interiors"], ["4000K", "Neutral and work-focused", "Offices, meeting rooms, classrooms and libraries"]]} />
              <p>CCT is also a consistency question. One small difference may be hard to see in a sample. Across a ceiling full of pendants, it can look like different batches of paint. Confirm the requested CCT and use an approved sample when colour consistency matters.</p>
            </section>

            <section className="article-section reveal">
              <h2>CRI: whether colours look honest</h2>
              <p>CRI describes how naturally colours appear under a light source. It affects whether wood, fabric, food, merchandise, skin tone and the PET felt itself look close to their intended colour.</p>
              <p>CRI 80 is often acceptable for general commercial spaces. CRI 90 is often worth considering in hospitality, retail, showrooms and premium meeting environments, where colours are part of the experience. If a project needs a deeper colour-rendition review, ask whether TM-30 information is available. It offers a more detailed framework than a single CRI number.</p>
              <ArticleImage src="/assets/img/blog/led-spec-woven-pendant-hd.webp" alt="Decorative woven acoustic pendant lighting in a hospitality interior" width="1023" height="1537" caption="In hospitality and retail, the lighting specification affects how people, finishes and products are perceived." />
            </section>

            <section className="article-section reveal">
              <h2>Beam angle and distribution: where the light goes</h2>
              <p>Beam angle is the spread of the light. Like a garden-hose nozzle, a narrow setting creates a focused stream and a wide setting creates a broad spray. A pendant can have enough lumens and still perform poorly if those lumens land in the wrong place.</p>
              <p>A deep felt shade may direct more light downward. A shallow shade may spread more light outward. Direct, indirect and mixed-light fixtures each have different effects on task surfaces, walls, ceilings and the sense of brightness in a room.</p>
              <p>Ask for an IES or LDT file when the project needs calculation. A product photo is a portrait; the photometric file is the map that tells the designer where the light goes.</p>
            </section>

            <section className="article-section reveal">
              <h2>Dimming and drivers: define the language of control</h2>
              <p>“Dimmable” is not a finished instruction. It is like saying a vehicle can drive without stating whether it uses the correct fuel or fits the road. The driver and control system must speak the same language.</p>
              <ArticleTable columns={["Control type", "Where it is common", "What can go wrong"]} rows={dimmingRows} />
              <p>The driver is the part that feeds and controls the LED system. It is usually hidden in the canopy, fixture or ceiling space, yet it strongly affects dimming behaviour, flicker, serviceability and warranty risk. Confirm its model, location, input voltage, dimming range and whether the exact configuration has been tested.</p>
              <p>DALI is an IEC 62386-based lighting-control protocol. For DALI or DALI-2 projects, confirm the required driver and control-system compatibility before the sample is approved. Meeting rooms, restaurants and video-call spaces also benefit from asking about low-level dimming and flicker behaviour early.</p>
              <ArticleImage src="/assets/img/blog/led-spec-faceted-meeting-hd.webp" alt="Faceted acoustic pendant lighting above an office meeting table" width="1222" height="1287" caption="Meeting rooms need more than a decorative pendant: glare, face visibility, dimming and camera comfort should be considered together." />
            </section>

            <section className="article-section reveal">
              <h2>The project document set to request before bulk order</h2>
              <p>For a commercial acoustic pendant, a complete document set works like a shared recipe. It gives design, procurement, factory and installation teams the same reference point, so a correct sample can become consistent bulk production.</p>
              <BulletList items={documentSet} />
              <p>Ask only for documents the project truly requires. Requirements vary by country and application. Clear, project-specific wording is better than a broad certification request that no supplier can verify.</p>
            </section>

            <section className="article-section reveal">
              <h2>RFQ checklist: what to send before asking for a quote</h2>
              <p>A weak RFQ says: “Please quote a 40W acoustic pendant.” A useful RFQ says what room needs to happen after installation. For example: “We need linear pendants above 3.2 m office workstations, 4000K, 0-10V control, the supplied layout file and suspension lengths coordinated with the reflected ceiling plan.”</p>
              <BulletList items={rfqItems} />
              <p>For a manufacturer comparison, use these details together with the supplier-review points in <a href="/blog/how-to-compare-pet-felt-acoustic-lighting-manufacturers">how to compare PET felt acoustic lighting manufacturers</a>. A clear RFQ reduces both quotation time and expensive assumptions.</p>
            </section>

            <section className="article-section reveal">
              <h2>Six mistakes that make a specification fail on site</h2>
              <ArticleTable columns={["Mistake", "Why it causes trouble"]} rows={commonMistakes} />
            </section>

            <section className="article-section reveal">
              <h2>FAQ</h2>
              {faqs.map((faq) => <div className="article-subsection" key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></div>)}
            </section>

            <section className="article-section reveal">
              <h2>Related reading and product pages</h2>
              <ul className="article-links">{relatedLinks.map(([label, href]) => <li key={href}><a href={href}>{label}</a></li>)}</ul>
            </section>

            <section className="article-section reveal">
              <h2>Reference materials</h2>
              <ul className="article-links">{references.map(([label, href]) => <li key={href}><a href={href} target="_blank" rel="noreferrer">{label}</a></li>)}</ul>
            </section>

            <section className="article-cta" id="quote">
              <p className="eyebrow">Specification review</p>
              <h2>Need help turning a room brief into a lighting specification?</h2>
              <p>Send the room type, ceiling height, plan, quantity, target CCT, CRI, control requirement and destination country. We can help identify the missing decisions before quotation or sample production.</p>
              <div className="hero-actions"><a className="btn primary" href={mailtoHref("LED Acoustic Pendant Light Specification Review")} data-contact-popup>Request Lighting Specification Review</a><a className="btn ghost" href="/contact">Send Project Requirements</a></div>
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
