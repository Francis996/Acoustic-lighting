import content from "../../../content/siteContent.json";
import { SiteFooter } from "../../../components/SiteFooter";
import { SiteHeader } from "../../../components/SiteHeader";
import { ArticleBrandCard } from "../../../components/ArticleBrandCard";
import { RelatedArticles } from "../../../components/RelatedArticles";
import { mailtoHref } from "../../../components/inquiryConfig";
import { absoluteUrl, createPageMetadata } from "../../../lib/metadata";

const pathname = "/blog/nrc-alpha-w-sabins-acoustic-lighting";
const title = "NRC, αw and Sabins Explained for Acoustic Lighting Buyers";
const seoTitle = "NRC, αw and Sabins Explained for Acoustic Lighting Buyers";
const description =
  "Learn the difference between NRC, αw and sabins when specifying PET felt acoustic pendant lights—and why complete-fixture test data matters more than a material claim.";
const heroImage = "/assets/img/blog/nrc-alpha-w-sabins-acoustic-lighting-hero.png";

const quickAnswerRows = [
  ["NRC", "A single-number rating commonly used for a tested material or panel system.", "A quick first comparison of similar material systems."],
  ["αw", "A weighted single-number rating used in ISO-based documentation.", "Comparing tested building materials with their stated mounting conditions."],
  ["Sabins / equivalent absorption area", "The sound-absorption contribution of an object or system.", "Estimating what a complete pendant fixture adds to a room."],
  ["Frequency-band data", "Performance at individual frequencies.", "Checking whether the data is relevant to speech, activity noise or a lower-frequency concern."]
];

const reportChecks = [
  "Is the report for a flat PET felt sample, a panel or the complete pendant?",
  "Does it identify the model, size and construction actually being quoted?",
  "What felt thickness, density, finish and exposed area were tested?",
  "Was the pendant tested as a suspended object? At what height and spacing?",
  "Does the tested version include the same LED body, diffuser and internal frame?",
  "Are results shown by frequency band as well as by one headline figure?",
  "Is the result stated per fixture, per linear metre or for a group of fixtures?",
  "Which laboratory and method are named, and is the report traceable?"
];

const frequencySources = [
  "speech and video-call voices;",
  "keyboards, chairs, tableware and normal activity noise;",
  "music, traffic and mechanical equipment;",
  "low-frequency rumble and structure-borne vibration."
];

const notFor = [
  "strong bass build-up;",
  "machinery rumble or structure-borne vibration;",
  "sound travelling through walls, doors or glazing;",
  "a room-to-room confidentiality requirement."
];

const rfqChecks = [
  "room length, width, ceiling height, drawings or photographs;",
  "floor, wall and ceiling finishes, plus expected occupancy and use;",
  "the actual complaint or target: echo, speech clarity, dining noise or a stated RT60 target;",
  "preferred fixture size, style, suspension height and layout;",
  "required lighting level, CCT, CRI, dimming and controls;",
  "whether you need material data, complete-fixture data or both;",
  "required acoustic, fire and electrical documents for the destination market."
];

const faqs = [
  { question: "Is a higher NRC always better for acoustic pendant lights?", answer: "Not necessarily. A higher material NRC can be useful, but it does not automatically mean a finished pendant adds more absorption to a room. Review the complete fixture’s exposed area, shape, test data and equivalent absorption area." },
  { question: "Is αw the same as NRC?", answer: "No. Both reduce a frequency curve to one number, but they use different rating methods. Treat them as useful summaries, then check the underlying test data and mounting conditions." },
  { question: "What acoustic figure should I request for a suspended pendant?", answer: "Request equivalent sound absorption area per complete fixture, with frequency-band data and the stated test configuration. That is more useful for a room calculation than a material-only claim." },
  { question: "Can an absorption coefficient be above 1.0?", answer: "It can appear above 1.0 in reverberation-room test results because edge effects can make the apparent absorbing area greater than the specimen’s face area. It does not mean a material captures more than all incoming energy." },
  { question: "Can I calculate pendant quantity from NRC?", answer: "Not reliably. NRC generally describes a material system. Estimate a pendant layout using complete-fixture absorption area together with room volume, existing finishes, target reverberation and planned distribution." },
  { question: "Can PET felt acoustic lighting solve bass problems?", answer: "Usually not by itself. Thin porous felt is generally more relevant to mid- and high-frequency reflections than serious low-frequency control." }
];

const relatedLinks = [
  ["Does Acoustic Lighting Really Work?", "/blog/does-acoustic-lighting-really-work"],
  ["What Is Acoustic Pendant Lighting?", "/blog/what-is-acoustic-pendant-lighting"],
  ["Acoustic Lighting vs Soundproofing", "/blog/acoustic-lighting-vs-soundproofing"],
  ["PET Felt Acoustic Material Lighting Guide", "/blog/pet-felt-acoustic-material-lighting-guide"],
  ["LED Acoustic Pendant Light Specification Guide", "/blog/led-acoustic-pendant-light-specification-guide"],
  ["How to Choose PET Felt Acoustic Pendant Lights", "/blog/how-to-choose-pet-felt-acoustic-pendant-lights"],
  ["Acoustic Pendant Lights", "/products/acoustic-pendant-lights"],
  ["Acoustic Linear Lights", "/products/acoustic-linear-lights"],
  ["Custom Acoustic Lighting Solutions", "/custom-acoustic-lighting-solutions"]
];

const references = [
  ["ASTM C423 — Sound Absorption and Sound Absorption Coefficients by the Reverberation Room Method", "https://store.astm.org/standards/c423"],
  ["ISO 354:2003 — Measurement of sound absorption in a reverberation room", "https://www.iso.org/standard/34545.html"],
  ["ISO 20189:2018 — Rating of sound absorption for single interior objects", "https://www.iso.org/standard/67230.html"]
];

function BulletList({ items }) {
  return <ul className="article-list">{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

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

function ArticleImage({ src, alt, caption, eager = false }) {
  return (
    <figure className="article-image">
      <img src={src} alt={alt} width="1400" height="788" loading={eager ? "eager" : "lazy"} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export function generateMetadata() {
  return createPageMetadata({ pathname, title: seoTitle, description, images: [{ url: absoluteUrl(heroImage) }] });
}

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org", "@type": "Article", headline: title, description, image: absoluteUrl(heroImage),
    datePublished: "2026-08-05", dateModified: "2026-08-05",
    author: { "@type": "Organization", name: "FLOSEEK Acoustic Lighting" },
    publisher: { "@type": "Organization", name: "FLOSEEK Acoustic Lighting", logo: { "@type": "ImageObject", url: absoluteUrl("/assets/img/brand/floseek-logo-header.png") } },
    mainEntityOfPage: absoluteUrl(pathname)
  };
  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
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
              <p className="eyebrow">Technical Buyer Guide</p>
              <h1>{title}</h1>
              <p>NRC, αw and sabins do not describe the same thing. Learn which number belongs to a material, which belongs to a complete pendant, and what to ask for before you specify.</p>
              <div className="hero-actions">
                <a className="btn primary" href="#quote" data-contact-popup>Request a Specification Review</a>
                <a className="btn glass" href="/products/acoustic-pendant-lights">View Acoustic Pendant Lights</a>
              </div>
            </div>
            <ArticleImage src={heroImage} alt="Technical illustration of a PET felt panel, a pendant light and a complete acoustic lighting fixture showing different ways sound absorption data is used" caption="Material ratings, weighted ratings and complete-fixture absorption area answer different specification questions." eager />
          </div>
        </section>

        <div className="article-content-layout wrap">
          <article className="article-body">
            <div className="article-meta reveal"><span>NRC vs αw vs sabins</span><span>Approx. 13 min read</span><span>For architects, consultants, contractors and project buyers</span></div>

            <section className="article-section reveal">
              <h2>Quick answer</h2>
              <p>A supplier says a PET felt pendant has an NRC of 0.85. Another quotation says αw 0.80. A third says one pendant adds 1.2 m² of equivalent absorption area.</p>
              <p>All three sound like “this product absorbs sound.” They are not the same message.</p>
              <ArticleTable columns={["Term", "What it usually describes", "Best use"]} rows={quickAnswerRows} />
              <blockquote className="article-quote">NRC and αw are often like a report card for a tested surface. Sabins are closer to knowing how much useful “soft surface” one finished object brings into the room.</blockquote>
              <p>A suspended acoustic pendant is an object, not simply a flat sheet of felt. For the finished light, the practical question is usually: <strong>what is the tested equivalent absorption area of this exact fixture, in this configuration, at the frequencies that matter in this room?</strong></p>
            </section>

            <section className="article-section reveal">
              <h2>Why the labels cause confusion</h2>
              <p>PET felt is popular in acoustic lighting because it can be cut, folded, layered and turned into decorative suspended forms. But making a pendant from a felt sheet changes the exposed area, geometry, air around the object, LED body, internal frame, suspension height and spacing between fixtures.</p>
              <p>It is like comparing fabric by the metre with a finished curtain. The fabric matters—but the curtain’s folds, size, position and distance from the wall change what it does in a real room.</p>
              <p>That is why a flat felt sample and a finished pendant should not inherit exactly the same acoustic claim without fixture-level evidence.</p>
            </section>

            <section className="article-section reveal">
              <h2>First: what is a sound absorption coefficient?</h2>
              <p>A sound absorption coefficient expresses how much incident sound energy a tested surface absorbs rather than reflects. In simplified terms, 0.00 means very little absorption and 1.00 means absorption equivalent to all incident energy under the stated test conditions.</p>
              <p>The last phrase matters: the result depends on the tested construction, thickness, density, mounting method, air gap and shape. It is not a permanent label that can be detached from the product.</p>
              <p>Laboratory results can sometimes exceed 1.00. This is not a physics miracle: in reverberation-room measurements, edge effects can make a specimen’s apparent absorbing area larger than its physical face area. ASTM C423 explicitly cautions readers about this effect and about applying laboratory coefficients directly to real rooms.</p>
            </section>

            <section className="article-section reveal">
              <h2>What NRC means</h2>
              <p><strong>NRC means Noise Reduction Coefficient.</strong> It is a single-number summary commonly used in North America for measured absorption at selected mid-frequency bands.</p>
              <p>It is useful as a first comparison. But it is an average, not the whole acoustic story. Two products can both say NRC 0.80 while behaving differently across the frequency range.</p>
              <blockquote className="article-quote">An NRC number is like an average grade. It is useful for a quick view, but it does not show which subjects the product is strong in.</blockquote>
              <p>For speech-focused interiors, mid-frequency absorption is often important. But a high NRC does not make thin felt a reliable fix for bass, machinery rumble or sound leaking through a wall. For that distinction, see <a href="/blog/acoustic-lighting-vs-soundproofing">acoustic lighting vs soundproofing</a>.</p>
              <p>Most importantly, NRC normally belongs to the <em>tested material system</em>. A flat PET felt panel’s NRC is material information; it is not automatic proof that a decorative pendant made from the same felt has the same fixture-level performance.</p>
            </section>

            <section className="article-section reveal">
              <h2>What αw means</h2>
              <p><strong>αw is the weighted sound absorption coefficient</strong> used under ISO 11654. It is common in European and international documentation for tested wall panels, ceiling systems and other building materials.</p>
              <p>Like NRC, αw turns a frequency curve into one easier number. It is not calculated in exactly the same way as NRC, and it can be accompanied by shape indicators that reveal whether absorption is especially strong at low, medium or high frequencies.</p>
              <p>Do not treat NRC 0.80 and αw 0.80 as automatic proof of identical performance. First confirm the method, tested construction, thickness, mounting method and frequency-band data. A number without conditions is like a lighting quotation that says only “high brightness” without lumens, beam angle or mounting height.</p>
            </section>

            <section className="article-section reveal">
              <h2>What sabins mean for acoustic pendant lighting</h2>
              <p>A <strong>sabin</strong> is a unit of equivalent sound absorption area. In metric documents you may see square metres of equivalent absorption area, metric sabins, absorption area per object or equivalent absorption area per fixture.</p>
              <p>This is often the most practical figure for an acoustic pendant because it helps estimate how much absorption one complete fixture adds to the room. ISO 354 covers reverberation-room measurement for material coefficients and for the equivalent absorption area of objects; ISO 20189 specifically addresses single interior objects such as space absorbers.</p>
              <ArticleImage src="/assets/img/products/ko-xym-0182/ko-xym-0182-scene-01-enhanced.webp" alt="Folded PET felt acoustic pendant light suspended in a commercial lounge" caption="A folded pendant is a three-dimensional object: its exposed surface, edges and geometry are part of its acoustic contribution, not just the felt material name." />
              <p>Imagine two pendants using the same felt. One is a simple flat shade around a small light engine. The other has many folded fins around a larger suspended body. The material may be similar, but the second object may expose much more absorptive surface to the room. That is why a room calculation should ideally use the complete fixture’s equivalent absorption area, not only an NRC claim for flat felt.</p>
            </section>

            <section className="article-section reveal">
              <h2>A fast way to read a supplier claim</h2>
              <ArticleTable columns={["Claim", "What it tells you", "What it does not tell you"]} rows={[
                ["PET felt, NRC 0.85", "The tested material system may absorb sound well under stated conditions.", "How much one complete pendant contributes."],
                ["αw 0.80, mounted with air gap", "A tested panel or material system has a weighted rating.", "Whether a pendant body has the same geometry or mounting."],
                ["1.0 m² equivalent absorption area per pendant", "A complete fixture may add about that much absorption under stated conditions.", "Whether it applies to a different size, light engine or suspension arrangement."],
                ["Acoustic pendant light", "The fixture contains absorptive material or is intended for acoustic use.", "Whether its installed quantity can meet the room’s acoustic target."]
              ]} />
              <p>The headline should never replace the report.</p>
            </section>

            <section className="article-section reveal">
              <h2>Why complete-fixture testing matters</h2>
              <p>A useful report lets a buyer, consultant or contractor answer one simple question: <strong>does this report belong to the exact product we are considering?</strong></p>
              <BulletList items={reportChecks} />
              <p>If a report is only for a flat felt board, keep it as material information. Do not use it as proof of the final pendant’s absorption area.</p>
            </section>

            <section className="article-section reveal">
              <h2>Frequency data matters more than one headline number</h2>
              <p>Sound is not one thing. A room contains:</p>
              <BulletList items={frequencySources} />
              <p>PET felt acoustic lighting is often most relevant for reflected mid- and high-frequency sound associated with speech and normal activity. It is not automatically a solution for:</p>
              <BulletList items={notFor} />
              <p>A responsible supplier should provide frequency-band data and explain what the fixture is realistically designed to address. For a broader explanation of how products contribute to a room, see <a href="/blog/does-acoustic-lighting-really-work">Does Acoustic Lighting Really Work?</a>.</p>
            </section>

            <section className="article-section reveal">
              <h2>Using sabins to make an early quantity estimate</h2>
              <p>Once the complete fixture’s equivalent absorption area is known, it can support an early room-acoustic estimate. A commonly used simplified relationship is:</p>
              <blockquote className="article-quote">RT60 ≈ 0.161 × room volume ÷ total equivalent absorption area</blockquote>
              <p>In that relationship, RT60 is the time it takes for sound to decay, room volume is in cubic metres, and total equivalent absorption area is in metric sabins. More absorption generally means a shorter reverberation time.</p>
              <p>If an early calculation suggests the room needs 12 m² of added equivalent absorption area and the tested pendant contributes 1.0 m² per fixture, the first estimate is 12 fixtures. That is still not a final design: room shape, furniture, occupancy, existing finishes and layout all change the result.</p>
              <p>It is nevertheless far more useful than saying, “The felt is NRC 0.85, so six lights should be enough.”</p>
            </section>

            <section className="article-section reveal">
              <h2>Acoustic data and lighting data must work together</h2>
              <p>An acoustic pendant is still a luminaire. A fixture can be visually attractive and acoustically useful yet fail the lighting design because the output, distribution or glare control is wrong.</p>
              <ArticleTable columns={["Acoustic checks", "Lighting checks"]} rows={[
                ["Test method, report scope and frequency-band data", "Delivered lumens and light distribution"],
                ["Equivalent absorption area per complete fixture", "UGR or glare-control approach"],
                ["Felt thickness, exposed area and suspension arrangement", "CCT, CRI, dimming and control protocol"],
                ["Required fixture quantity and spacing", "Driver location and future maintenance access"]
              ]} />
              <p>The right choice works as a complete ceiling system—not simply as a decorative pendant. For the lighting-side checklist, read the <a href="/blog/led-acoustic-pendant-light-specification-guide">LED acoustic pendant light specification guide</a>.</p>
            </section>

            <section className="article-section reveal">
              <h2>Six mistakes to avoid</h2>
              {[
                ["Treating NRC as a room result", "NRC does not tell you whether a selected quantity will reduce reverberation enough in one specific room."],
                ["Assuming all PET felt performs the same", "Thickness, density, porosity, backing, air space, shape and exposed area all matter. PET felt is a material category, not a completed specification."],
                ["Comparing a flat panel with a suspended pendant", "A flat board and a three-dimensional suspended object interact with sound differently. Compare like with like."],
                ["Ignoring the test configuration", "A report is not transferable simply because the colour or material name looks similar. The supplied construction must match the tested construction."],
                ["Buying only the quantity needed for light", "The lux calculation and acoustic calculation can lead to different quantities. The answer may be larger fixtures, more pendants, baffles or wall treatment."],
                ["Promising soundproofing from an absorption rating", "NRC, αw and sabins relate to absorption, not room-to-room sound insulation."]
              ].map(([heading, body]) => <div className="article-subsection" key={heading}><h3>{heading}</h3><p>{body}</p></div>)}
            </section>

            <section className="article-section reveal">
              <h2>What to include in an RFQ</h2>
              <p>Send enough information for a supplier to recommend a relevant structure, rather than simply returning the highest NRC number in a catalogue:</p>
              <BulletList items={rfqChecks} />
              <p>For broader material claims, documents and cleaning considerations, see the <a href="/blog/pet-felt-acoustic-material-lighting-guide">PET felt acoustic material lighting guide</a>. For choosing a project-ready pendant, see <a href="/blog/how-to-choose-pet-felt-acoustic-pendant-lights">how to choose PET felt acoustic pendant lights</a>.</p>
            </section>

            <section className="article-section reveal">
              <h2>The honest conclusion</h2>
              <p>NRC, αw and sabins are all useful. They simply answer different questions.</p>
              <BulletList items={["Use NRC or αw to understand a tested material or panel system.", "Use frequency-band data to understand which part of the sound spectrum is being addressed.", "Use equivalent absorption area per complete fixture to estimate what acoustic lighting can contribute to a room."]} />
              <p>For a commercial project, a material claim is a starting point. The real decision is whether the selected pendant, in the planned quantity and layout, provides enough tested absorption while also meeting the lighting, glare, control and installation requirements of the room.</p>
            </section>

            <section className="article-section article-faq reveal"><h2>FAQ</h2>{faqs.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</section>

            <section className="article-section reveal" id="quote">
              <div className="article-inline-cta"><div><span>Specification review support</span><h3>Need fixture-level acoustic data for a project?</h3><p>Send your reflected ceiling plan, room dimensions, finishes, lighting target and acoustic concern. We can help compare suitable PET felt pendant structures and prepare the relevant technical document set.</p></div><a className="btn primary" href={mailtoHref("Acoustic Fixture Data Specification Review")} data-contact-popup>Request Specification Review</a></div>
            </section>

            <section className="article-section reveal"><h2>Related reading and product pages</h2><ul className="article-link-list">{relatedLinks.map(([label, href]) => <li key={href}><a href={href}>{label}</a></li>)}</ul></section>
            <RelatedArticles currentPath={pathname} />
            <section className="article-final-cta reveal"><p className="eyebrow">Specify the complete system</p><h2>Planning PET felt acoustic lighting for a commercial project?</h2><p>Share the room type, ceiling height, drawings, lighting requirements and acoustic target. We can help you identify the data that is relevant to the finished fixture and the planned layout.</p><div className="hero-actions"><a className="btn primary" href={mailtoHref("PET Felt Acoustic Lighting Project Review")} data-contact-popup>Request Project Review</a><a className="btn glass" href="/custom-acoustic-lighting-solutions">View Custom Solutions</a></div></section>
            <section className="article-section reveal"><h2>References</h2><ul className="article-reference-list">{references.map(([label, href]) => <li key={href}><a href={href} target="_blank" rel="noreferrer">{label}</a></li>)}</ul></section>
          </article>
          <ArticleBrandCard />
        </div>
      </main>
      <SiteFooter content={content} />
    </>
  );
}
