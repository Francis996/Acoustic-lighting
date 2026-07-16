import content from "../../../content/siteContent.json";
import { SiteFooter } from "../../../components/SiteFooter";
import { SiteHeader } from "../../../components/SiteHeader";
import { ArticleBrandCard } from "../../../components/ArticleBrandCard";
import { RelatedArticles } from "../../../components/RelatedArticles";
import { mailtoHref } from "../../../components/inquiryConfig";
import { absoluteUrl, createPageMetadata } from "../../../lib/metadata";

const pathname = "/blog/top-pet-felt-acoustic-lighting-manufacturers";
const title = "15 PET Felt Acoustic Lighting Manufacturers and Brands to Compare in 2026";
const seoTitle = "15 PET Felt Acoustic Lighting Manufacturers to Compare (2026)";
const description =
  "Compare 15 PET felt acoustic lighting manufacturers and brands by supplier type, project fit, documents, customization and RFQ readiness in 2026.";
const heroImage = "/assets/img/products/ko-xym-0186/ko-xym-0186-scene-01-enhanced.webp";

const supplierGroups = [
  {
    id: "custom-oem",
    title: "Route 1: custom and OEM-oriented suppliers",
    introduction:
      "Start here when the drawing, colour, label or packing needs to become your product rather than a standard catalogue purchase. This route works more like a tailor than a clothing rack: it gives you more control, but only when dimensions, approvals and responsibilities are written down.",
    suppliers: [
      {
        name: "FLOSEEK",
        region: "China",
        type: "OEM/ODM and project supplier",
        bestFor: "Custom pendant and linear concepts, private-label work and export project coordination.",
        why:
          "FLOSEEK presents a focused acoustic-lighting catalogue together with PET felt colour, size, LED, dimming, label and packing customization. It is a practical starting point for buyers who want one supplier to coordinate the felt body and lighting package.",
        verify:
          "Ask which drawings, material statements, lighting files and market-specific documents exist for the exact model. Lock the approved sample, colour and driver before bulk production.",
        source: "/custom-acoustic-lighting-solutions",
        sourceLabel: "FLOSEEK custom solutions",
        disclosure: true
      },
      {
        name: "Feltlite / SignliteLED",
        region: "China-based supply platform",
        type: "OEM/ODM acoustic lighting supplier",
        bestFor: "Custom PET solutions and buyers looking for an OEM development route.",
        why:
          "Feltlite describes itself as an acoustic-lighting specialist and a SignliteLED division, with OEM/ODM support and custom PET solutions. That makes it relevant when lighting production and felt fabrication need to be discussed together.",
        verify:
          "Confirm the legal supplier entity, production location, project references and the exact test or compliance files available for the selected configuration.",
        source: "https://feltlite.com/",
        sourceLabel: "Feltlite official site"
      },
      {
        name: "ROOAOO",
        region: "China",
        type: "PET acoustic product supplier",
        bestFor: "Broad PET forms, colour options and customized acoustic-lighting enquiries.",
        why:
          "ROOAOO maintains a dedicated acoustic-lighting category and emphasizes PET-based products and customization. Buyers already sourcing acoustic panels may find the wider PET product scope useful.",
        verify:
          "Treat marketing words such as soundproof as a prompt for questions, not as a specification. Request the tested sample, mounting condition, LED data, driver details and finished-product document scope.",
        source: "https://www.rooaooacoustics.com/acoustic-lighting.html",
        sourceLabel: "ROOAOO acoustic lighting"
      },
      {
        name: "Brandon Lighting",
        region: "China",
        type: "Commercial lighting manufacturer",
        bestFor: "Buyers who begin with luminaire specifications and also need acoustic product options.",
        why:
          "Brandon Lighting has a dedicated acoustic-lighting range within a broader commercial-lighting offer. It may suit sourcing teams that want to discuss linear systems, drivers and project lighting alongside felt products.",
        verify:
          "Check whether each acoustic claim refers to the felt material or the finished luminaire, and request model-specific photometric, electrical, installation and packing information.",
        source: "https://brandon-lighting.com/acoustic-lighting/",
        sourceLabel: "Brandon acoustic lighting"
      }
    ]
  },
  {
    id: "design-led",
    title: "Route 2: design-led acoustic brands",
    introduction:
      "This route is strongest when the fixture is part of the interior identity, not just a line on the lighting schedule. It is closer to selecting a finished piece of furniture: the design language and support network matter, while deep OEM changes may be less central.",
    suppliers: [
      {
        name: "BuzziSpace",
        region: "Belgium / international",
        type: "Design-led acoustic brand",
        bestFor: "Architect-led offices, hospitality spaces and expressive acoustic lighting.",
        why:
          "BuzziSpace offers an established acoustic-lighting collection within a wider acoustic-furniture system. The range is relevant when lighting, colour, furniture and spatial character need to read as one design family.",
        verify:
          "Confirm local availability, lead time, electrical version, replacement parts, project pricing and the acoustic data for the product under consideration.",
        source: "https://www.buzzi.space/acoustic-solutions/types/acoustic-lighting",
        sourceLabel: "BuzziSpace acoustic lighting"
      },
      {
        name: "Luxxbox",
        region: "Australia / North America",
        type: "Commercial acoustic-lighting brand",
        bestFor: "Workplace and hospitality projects needing a broad decorative acoustic range.",
        why:
          "Luxxbox maintains a substantial acoustic-lighting category with integrated LED and PET-based forms. It gives designers several scales and silhouettes without starting from a blank custom drawing.",
        verify:
          "Check the regional electrical version, dimming protocol, lumen package, suspension options, felt composition statement and distributor lead time.",
        source: "https://www.luxxbox.com/categories/acoustic-lighting/",
        sourceLabel: "Luxxbox acoustic lighting"
      },
      {
        name: "Abstracta",
        region: "Sweden",
        type: "Scandinavian acoustic brand",
        bestFor: "Projects pairing restrained Scandinavian design with room-acoustic products.",
        why:
          "Abstracta groups acoustic lighting with a mature portfolio of workplace acoustic products. It is a useful reference when the project team wants pendant lighting to sit inside a broader acoustic interior scheme.",
        verify:
          "Review local dealer support, electrical approvals, available photometric files, acoustic documentation and whether the chosen colour and size are standard or made to order.",
        source: "https://abstracta.se/products/product-category/acoustic-lighting/",
        sourceLabel: "Abstracta acoustic lighting"
      },
      {
        name: "De Vorm",
        region: "Netherlands",
        type: "Interior product and PET felt brand",
        bestFor: "Design-conscious interiors that value a recognizable recycled-PET material language.",
        why:
          "De Vorm's Fost PET Felt Acoustic Lamp connects lighting with the company's wider PET felt product system. The product page provides a clear place to begin a specification conversation.",
        verify:
          "Check whether one standard product meets the room's lumen, glare and acoustic needs. Confirm local supply, spare parts, colour sample and installation information.",
        source: "https://www.devorm.nl/products/fost-pet-felt-acoustic-lamp",
        sourceLabel: "De Vorm Fost lamp"
      },
      {
        name: "Flexxica",
        region: "Poland / Europe",
        type: "Architectural acoustic-lighting brand",
        bestFor: "Contemporary office and contract projects using ecoPET forms.",
        why:
          "Flexxica presents a dedicated ecoPET acoustic-lighting portfolio for commercial interiors. Its range can be useful when the brief calls for coordinated colour, geometry and integrated light.",
        verify:
          "Confirm the exact LED package, driver access, dimming, acoustic test basis, regional representation and lead time for the selected form.",
        source: "https://flexxica.com/en/products/acoustic-lighting-ecopet",
        sourceLabel: "Flexxica ecoPET lighting"
      }
    ]
  },
  {
    id: "material-platform",
    title: "Route 3: acoustic-material and system specialists",
    introduction:
      "Choose this route when material transparency, acoustic context and a coordinated surface system carry more weight than the lowest fixture cost. These suppliers can help a designer treat the ceiling as a family of surfaces rather than a collection of unrelated objects.",
    suppliers: [
      {
        name: "LightArt",
        region: "United States",
        type: "Acoustic and decorative lighting brand",
        bestFor: "North American commercial projects needing design options and material documentation.",
        why:
          "LightArt has a broad acoustic collection and publishes material and testing resources for products such as its Sola felt range. Its official pages make it easier to begin document review before specification.",
        verify:
          "Match every environmental or acoustic claim to the selected material, product and mounting condition. Check the project-specific lumen, control and certification package.",
        source: "https://lightart.com/products/families/acoustic",
        sourceLabel: "LightArt acoustic collection"
      },
      {
        name: "Impact Acoustic",
        region: "Switzerland / international",
        type: "Acoustic material and product platform",
        bestFor: "Projects coordinating lighting with a wider architectural acoustic palette.",
        why:
          "Impact Acoustic includes lighting within its broader ARCHISONIC material and acoustic-product ecosystem. It is a relevant comparison point when colour and material coordination extend beyond the luminaires.",
        verify:
          "Confirm the lighting partner or component responsibility, regional electrical version, test scope, colour sample, installation route and replacement strategy.",
        source: "https://impactacoustic.com/collections/lighting",
        sourceLabel: "Impact Acoustic lighting"
      },
      {
        name: "Zilenzio",
        region: "Sweden",
        type: "Acoustic product specialist",
        bestFor: "Specification-led interiors where declared acoustic methods and dealer support matter.",
        why:
          "Zilenzio's Hikari ceiling product combines light with a PET-based acoustic body, and the product page identifies acoustic test routes including ISO 354 and ISO 20189. That clarity is useful during consultant review.",
        verify:
          "Read the report, not only the test-method name. Check the tested object, quantity, suspension condition, electrical version and product availability through the local dealer.",
        source: "https://zilenzio.com/product/hikari-ceiling/",
        sourceLabel: "Zilenzio Hikari"
      }
    ]
  },
  {
    id: "lighting-first",
    title: "Route 4: specification and lighting-first manufacturers",
    introduction:
      "Start here when the lighting schedule, controls, photometry and local commercial support lead the decision. Think of this as choosing the engine before the upholstery: acoustic material still matters, but electrical performance and specification workflow come first.",
    suppliers: [
      {
        name: "Focal Point",
        region: "United States",
        type: "Architectural lighting manufacturer",
        bestFor: "North American projects with formal lighting schedules and acoustic ceiling coordination.",
        why:
          "Focal Point positions its acoustic solutions as luminaire-first products and provides specification-oriented resources. It is especially relevant where Division 26 lighting requirements must coordinate with Division 9 acoustic intent.",
        verify:
          "Check the selected luminaire's photometry, controls, acoustic contribution, ceiling coordination, submittal package and local representative support.",
        source: "https://www.focalpointlights.com/AcousticSolutions",
        sourceLabel: "Focal Point acoustic solutions"
      },
      {
        name: "Lumenear",
        region: "Netherlands",
        type: "Architectural acoustic-lighting brand",
        bestFor: "European offices needing both technical and decorative acoustic-lighting routes.",
        why:
          "Lumenear separates technical and decorative acoustic-lighting choices on its official page. That distinction helps buyers begin with the job the luminaire must do rather than the shape alone.",
        verify:
          "Do not treat general soundproofing language as proof of room isolation. Request product-specific acoustic, photometric, electrical and installation information.",
        source: "https://lumenear.com/acoustic-lighting/",
        sourceLabel: "Lumenear acoustic lighting"
      },
      {
        name: "Elite Lighting",
        region: "United States",
        type: "Commercial lighting manufacturer",
        bestFor: "Commercial projects that need acoustic forms inside a larger lighting package.",
        why:
          "Elite Lighting's SoftSense acoustic range spans several commercial luminaire categories. It can be useful for teams seeking acoustic products from a broader lighting manufacturer with specification data.",
        verify:
          "Compare the exact SoftSense model, felt options, lumen package, controls, acoustic information, submittal documents and regional lead time.",
        source: "https://iuseelite.com/acoustic-light/",
        sourceLabel: "Elite SoftSense acoustic lighting"
      }
    ]
  }
];

const suppliers = supplierGroups.flatMap((group) => group.suppliers);

const overviewRows = suppliers.map((supplier) => [
  supplier.name,
  supplier.region,
  supplier.type,
  supplier.bestFor
]);

const routeRows = [
  ["Custom product or private label", "Custom / OEM-oriented", "Drawing control, sample-to-bulk record, MOQ, packing and document scope", "FLOSEEK, Feltlite, ROOAOO, Brandon"],
  ["Signature interior or design-led scheme", "Design-led brand", "Design fit, local dealer, standard options, lead time and replacement parts", "BuzziSpace, Luxxbox, Abstracta, De Vorm, Flexxica"],
  ["Coordinated acoustic material system", "Material / acoustic platform", "Material evidence, acoustic test scope, colour system and installation", "LightArt, Impact Acoustic, Zilenzio"],
  ["Formal lighting schedule and controls", "Lighting-first manufacturer", "Photometry, driver, dimming, submittals and local technical support", "Focal Point, Lumenear, Elite Lighting"]
];

const scorecardRows = [
  ["Product fit", "Does the range suit the room, ceiling, quantity and visual brief?", "10"],
  ["Lighting package", "Are lumen output, CCT, CRI, driver, voltage, dimming and photometry clear?", "20"],
  ["Acoustic evidence", "Does the supplier identify the tested sample, method and mounting condition?", "15"],
  ["Material control", "Are PET felt composition, thickness, colour and batch controls documented?", "15"],
  ["Project documents", "Can the supplier provide the required model-specific submittal set?", "15"],
  ["Sample-to-bulk control", "Will the approved sample become a recorded production reference?", "10"],
  ["Packing and logistics", "Are carton dimensions, deformation protection, labels and spares defined?", "10"],
  ["Communication", "Does the supplier identify limits and ask useful questions before quoting?", "5"]
];

const documentSet = [
  "Product datasheet with model, dimensions, weight, electrical values and installation method.",
  "LED and driver data: lumen output, wattage, CCT, CRI, voltage, dimming and expected service route.",
  "Photometric file or report where the lighting design requires one.",
  "PET felt description covering composition, thickness, colour system and recycled-content claim where relevant.",
  "Acoustic report or data with the test method, tested sample and mounting condition identified.",
  "Fire-related material or product documents requested by the project, checked against the actual scope.",
  "Drawing, colour sample, sample-approval record, installation instructions and accessory list.",
  "QC checklist, packing specification, carton labels, warranty terms and replacement-parts route."
];

const redFlags = [
  "A final price arrives before the supplier asks about quantity, destination market, colour, LED package, controls or packing.",
  "The same certificate is presented as covering every model, thickness, colour and country without a scope check.",
  "The supplier uses soundproof, fireproof or eco-friendly as complete technical claims.",
  "A dimmable fixture is offered without naming the driver and control protocol.",
  "There is no physical colour sample, approved drawing or sample-to-bulk record.",
  "The quotation omits driver, canopy, suspension, packing, tooling, spare parts or project documents.",
  "Factory, brand, seller and warranty-provider identities are unclear.",
  "The supplier will not discuss carton dimensions, deformation risk or pre-shipment inspection."
];

const faqs = [
  {
    question: "Which PET felt acoustic lighting manufacturer is best?",
    answer:
      "There is no universal best supplier. An OEM buyer may value customization and packing control, while an architect may need a design-led brand with local specification support. Choose the supplier route first, then compare model-specific evidence and total project scope."
  },
  {
    question: "Is this a ranking of the 15 companies?",
    answer:
      "No. The companies are grouped by buyer route, not ranked from best to worst. Inclusion means an active official acoustic-lighting offer was found during the July 2026 review; it is not an endorsement or a guarantee of current capability."
  },
  {
    question: "What is the difference between a manufacturer and an acoustic lighting brand?",
    answer:
      "A manufacturer may control production directly, while a brand may combine in-house design, partner production and a dealer network. Buyers should verify who makes the product, who signs the contract, who owns the technical files and who supports the warranty."
  },
  {
    question: "Should I choose a China OEM supplier or a local specification brand?",
    answer:
      "Choose a China OEM route when customization, private label and factory pricing are central and your team can manage verification and logistics. Choose a local specification brand when regional approvals, representative support, short communication paths and formal submittals carry more weight."
  },
  {
    question: "How do I verify an acoustic performance claim?",
    answer:
      "Ask for the report and identify the test method, sample, thickness, product geometry, quantity and mounting condition. A flat PET sheet result is not automatically the result of a finished suspended luminaire, and neither result alone predicts the final room."
  },
  {
    question: "How many suppliers should I send an RFQ to?",
    answer:
      "Three to five well-matched suppliers usually produce a more useful comparison than sending a vague request to fifteen companies. Give each supplier the same specification basket so price, documents, lead time and exclusions can be compared fairly."
  }
];

const relatedLinks = [
  ["How to Compare PET Felt Acoustic Lighting Manufacturers", "/blog/how-to-compare-pet-felt-acoustic-lighting-manufacturers"],
  ["PET Felt Acoustic Lighting Cost Guide", "/blog/pet-felt-acoustic-lighting-cost"],
  ["PET Felt Acoustic Material Lighting Guide", "/blog/pet-felt-acoustic-material-lighting-guide"],
  ["LED Acoustic Pendant Light Specification Guide", "/blog/led-acoustic-pendant-light-specification-guide"],
  ["How to Choose PET Felt Acoustic Pendant Lights", "/blog/how-to-choose-pet-felt-acoustic-pendant-lights"],
  ["Acoustic Pendant Lights", "/products/acoustic-pendant-lights"],
  ["Acoustic Linear Lights", "/products/acoustic-linear-lights"],
  ["Custom Acoustic Lighting Solutions", "/custom-acoustic-lighting-solutions"]
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

function SupplierProfile({ supplier }) {
  return (
    <div className="article-subsection">
      <h3>{supplier.name}</h3>
      {supplier.disclosure ? (
        <p><strong>Publisher disclosure:</strong> FLOSEEK publishes this guide and is included because its current site offers acoustic-lighting products and OEM/ODM support. Treat this profile as a self-description and verify it independently, just as you should verify every supplier below.</p>
      ) : null}
      <p><strong>Supplier type:</strong> {supplier.type} · <strong>Region:</strong> {supplier.region}</p>
      <p><strong>Good starting point for:</strong> {supplier.bestFor}</p>
      <p>{supplier.why}</p>
      <p><strong>Verify before RFQ:</strong> {supplier.verify}</p>
      <p><a href={supplier.source} target={supplier.source.startsWith("http") ? "_blank" : undefined} rel={supplier.source.startsWith("http") ? "noreferrer" : undefined}>Check {supplier.sourceLabel}</a></p>
    </div>
  );
}

export function generateMetadata() {
  return createPageMetadata({
    pathname,
    title: seoTitle,
    description,
    images: [{ url: absoluteUrl(heroImage) }]
  });
}

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: absoluteUrl(heroImage),
    datePublished: "2026-07-15",
    dateModified: "2026-07-15",
    author: { "@type": "Organization", name: "FLOSEEK Acoustic Lighting" },
    publisher: {
      "@type": "Organization",
      name: "FLOSEEK Acoustic Lighting",
      logo: { "@type": "ImageObject", url: absoluteUrl("/assets/img/brand/floseek-logo-header.png") }
    },
    mainEntityOfPage: absoluteUrl(pathname)
  };
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "PET felt acoustic lighting manufacturers and brands to compare in 2026",
    itemListOrder: "https://schema.org/ItemListUnordered",
    numberOfItems: suppliers.length,
    itemListElement: suppliers.map((supplier, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Organization",
        name: supplier.name,
        url: supplier.source.startsWith("http") ? supplier.source : absoluteUrl(supplier.source)
      }
    }))
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

        <section className="article-hero section-dark">
          <div className="wrap article-hero-grid">
            <div className="article-hero-copy reveal">
              <p className="eyebrow">2026 Supplier Shortlist</p>
              <h1>{title}</h1>
              <p>Use this unranked shortlist to find the right supplier route, then compare documents, lighting performance, acoustic evidence and total project scope.</p>
              <div className="hero-actions">
                <a className="btn primary" href="#supplier-list">Compare the 15 Suppliers</a>
                <a className="btn glass" href="#quote">Build an RFQ</a>
              </div>
            </div>
            <figure className="article-hero-media reveal delay-1">
              <img src={heroImage} alt="Large yellow PET felt acoustic pendant lights in an open commercial office" width="1914" height="1920" loading="eager" />
              <figcaption>FLOSEEK product application image used to illustrate the category; it is not presented as a project by any other company in this guide.</figcaption>
            </figure>
          </div>
        </section>

        <div className="article-content-layout wrap">
          <article className="article-body">
            <div className="article-meta reveal">
              <span>Unranked market shortlist</span>
              <span>Reviewed 15 July 2026</span>
              <span>Approx. 18 min read</span>
            </div>

            <section className="article-section reveal">
              <h2>Quick answer: use this list as a map, not a podium</h2>
              <p>The 15 companies below are not ranked from best to worst. They serve different buying routes. Some are strong starting points for custom OEM work; others are design brands, acoustic-material specialists or lighting-first manufacturers with formal specification support.</p>
              <p>If you are buying a private-label pendant, a famous design brand may be the wrong fit. If you are specifying a public project with a local representative and a fixed submittal process, a flexible overseas factory may create extra work. The useful question is not "Who is number one?" It is "Which supplier type removes the most risk from this project?"</p>
              <ArticleTable columns={["Your main need", "Start with", "Compare first", "Companies in this guide"]} rows={routeRows} />
              <p>Once you choose a route, use the companion <a href="/blog/how-to-compare-pet-felt-acoustic-lighting-manufacturers">manufacturer evaluation guide</a> for deeper due diligence and the <a href="/blog/pet-felt-acoustic-lighting-cost">2026 cost guide</a> for quotation comparison.</p>
            </section>

            <section className="article-section reveal">
              <h2>How companies were selected</h2>
              <p>We checked official company and product pages available on 15 July 2026. A company was included when its current site showed an identifiable acoustic-lighting offer relevant to PET felt or closely related fibrous acoustic products, plus a plausible route for a commercial buyer to request product information.</p>
              <BulletList items={[
                "This is an editorial shortlist, not a laboratory comparison or sales-volume ranking.",
                "The order follows supplier routes and reading flow; list position does not indicate quality.",
                "Company descriptions are based on current official pages, then rewritten in buyer-focused language.",
                "A live product page does not prove factory ownership, capacity, certification or suitability for your market.",
                "Buyers should verify the contracting entity, product configuration, documents, lead time and warranty before order."
              ]} />
              <blockquote className="article-quote">FLOSEEK publishes this article and appears in the shortlist. That commercial relationship is disclosed here so readers can separate our self-description from an independent third-party review.</blockquote>
            </section>

            <section className="article-section reveal">
              <h2>First, decide which supplier type you need</h2>
              <p>Searching for a manufacturer before defining the buying route is like calling every kind of vehicle a truck. They all move things, but a delivery van, a crane and a long-haul tractor solve different problems.</p>
              <p>For a custom project, control over drawings, colour and sample-to-bulk production can matter most. For a design specification, local representation and a finished collection may matter more. For an acoustic-led brief, the material and test framework deserves extra weight. For a lighting-led package, photometry, controls and submittals often lead the decision.</p>
              <ArticleImage
                src="/assets/img/linear/ko-xym-0162-meeting-scene.webp"
                alt="Large PET felt acoustic pendant centered above a meeting-room table"
                width="1342"
                height="1444"
                caption="A supplier should be chosen for the whole room brief: scale, light, acoustic surface, installation and service. FLOSEEK application image; not a competitor project reference."
              />
            </section>

            <section className="article-section reveal" id="supplier-list">
              <h2>2026 overview: 15 manufacturers and brands to compare</h2>
              <ArticleTable columns={["Company", "Region", "Supplier route", "Good starting point for"]} rows={overviewRows} />
              <p>Region describes the brand or main market position shown in official information; it does not prove where every component is manufactured. Ask directly when country of origin, factory audit or local-content rules matter.</p>
            </section>

            {supplierGroups.map((group, groupIndex) => (
              <section className="article-section reveal" id={group.id} key={group.id}>
                <h2>{group.title}</h2>
                <p>{group.introduction}</p>
                {group.suppliers.map((supplier) => <SupplierProfile supplier={supplier} key={supplier.name} />)}
                {groupIndex === 0 ? (
                  <div className="article-inline-cta">
                    <span>Custom supplier route</span>
                    <h3>Need to turn a concept into a comparable factory RFQ?</h3>
                    <p>Send the drawing, quantity, destination country, felt colour, LED requirement, controls, document list and packing needs. The goal is a quote with fewer hidden assumptions.</p>
                    <a className="btn primary" href={mailtoHref("Custom PET Felt Acoustic Lighting RFQ Review")} data-contact-popup>Request RFQ Review</a>
                  </div>
                ) : null}
                {groupIndex === 1 ? (
                  <ArticleImage
                    src="/assets/img/products/ko-xym-0189/ko-xym-0189-scene-03-hd.webp"
                    alt="Magenta acoustic ceiling feature with integrated linear light in a dark hospitality lounge"
                    width="1357"
                    height="1159"
                    caption="Design-led acoustic lighting can become part of the room identity, but the visual idea still needs a buildable lighting and installation package. FLOSEEK product scene; not a competitor project reference."
                  />
                ) : null}
              </section>
            ))}

            <section className="article-section reveal">
              <h2>Score the model and project package, not the logo</h2>
              <p>A recognized company name can reduce some uncertainty, but it cannot replace a model-specific review. The same supplier may have one well-documented product and another that needs extra engineering. Score the actual quotation and submittal package.</p>
              <p>The weighting below is a practical starting point for B2B sourcing. Adjust it before sending the RFQ. A distributor may increase the customization score; a consultant-led office project may increase photometry and document readiness.</p>
              <ArticleTable columns={["Area", "Question", "Example weight"]} rows={scorecardRows} />
              <p>A supplier that scores 78 with clear evidence may be safer than one that scores 92 because the salesperson marked every field yes. Record the file, drawing, report or sample behind each score.</p>
            </section>

            <section className="article-section reveal">
              <h2>Request a document set that matches the exact product</h2>
              <p>A certificate is not a magic passport. It is closer to an ID card: it belongs to a named sample, method and scope. Before relying on a fire, acoustic, electrical or environmental claim, check whether the document describes the material or finished luminaire you intend to buy.</p>
              <BulletList items={documentSet} />
              <p>For the material side, read the <a href="/blog/pet-felt-acoustic-material-lighting-guide">PET felt material guide</a>. For lumen, wattage, glare, CCT, CRI and drivers, use the <a href="/blog/led-acoustic-pendant-light-specification-guide">LED specification guide</a>. ISO 354 is one recognized method for measuring sound absorption in a reverberation room, but the test sample and mounting still determine what the result means. See the <a href="https://www.iso.org/standard/34545.html" target="_blank" rel="noreferrer">official ISO 354 overview</a>.</p>
            </section>

            <section className="article-section reveal">
              <h2>Compare quotations using the same basket</h2>
              <p>Two unit prices are comparable only when they contain the same product. Think of each quotation as a shopping basket. If one includes the driver, dimming, suspension, canopy, reinforced carton and project documents while another leaves them blank, the cheaper basket is simply missing items.</p>
              <BulletList items={[
                "same model, dimensions, quantity and PET felt colour;",
                "same lumen target, wattage, CCT, CRI, driver and dimming protocol;",
                "same suspension length, canopy, voltage and installation accessories;",
                "same acoustic, fire-related, electrical and material document request;",
                "same sample, tooling, private-label, packing and spare-parts scope;",
                "same Incoterm, destination, lead-time definition, warranty and payment basis."
              ]} />
              <p>The <a href="/blog/pet-felt-acoustic-lighting-cost">PET felt acoustic lighting cost guide</a> explains the main cost drivers. Use it before rejecting a higher quotation that may include a more complete project package.</p>
            </section>

            <section className="article-section reveal">
              <h2>Red flags that deserve a second question</h2>
              <BulletList items={redFlags} />
              <p>One red flag does not automatically disqualify a supplier. It tells you where to slow down. A useful supplier will usually answer with a document, a limitation or a clear next step rather than another broad promise.</p>
            </section>

            <section className="article-section reveal" id="quote">
              <h2>RFQ template for a fair supplier comparison</h2>
              <p>Send the same brief to three to five suppliers from the route that fits your project. A short but specific request will produce better answers than a long message filled with undefined claims.</p>
              <blockquote className="article-quote">Please quote PET felt acoustic pendant lights for a 60-seat office project in [country]. Quantity: [x]. Size and drawing: [attached]. Felt colour: [reference; physical sample required]. Lighting: [target lumens], [CCT], [CRI], [voltage], [control protocol]. Suspension: [length]. Please state the driver, included accessories, document set, sample time, bulk lead time, carton dimensions, warranty, Incoterm and exclusions.</blockquote>
              <p>Add the room plan, reflected ceiling plan or reference image when available. For shape and application ideas, review the <a href="/products/acoustic-pendant-lights">acoustic pendant range</a>, <a href="/products/acoustic-linear-lights">acoustic linear lights</a> and <a href="/applications/office-meeting-rooms">office and meeting-room applications</a>.</p>
              <div className="article-inline-cta">
                <span>Structured quotation</span>
                <h3>Send one brief that engineering and purchasing can both read</h3>
                <p>FLOSEEK can review the missing inputs before a custom sample or project quotation is prepared. Document availability remains model- and market-specific.</p>
                <div className="hero-actions">
                  <a className="btn primary" href={mailtoHref("PET Felt Acoustic Lighting Supplier Comparison RFQ")} data-contact-popup>Send Your RFQ</a>
                  <a className="btn ghost" href="/custom-acoustic-lighting-solutions">Review Custom Options</a>
                </div>
              </div>
            </section>

            <section className="article-section article-faq reveal">
              <h2>FAQ</h2>
              {faqs.map((faq) => (
                <div className="article-subsection" key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </section>

            <section className="article-section reveal">
              <h2>Related buyer guides and product routes</h2>
              <ul className="article-links">
                {relatedLinks.map(([label, href]) => <li key={href}><a href={href}>{label}</a></li>)}
              </ul>
            </section>

            <section className="article-cta">
              <p className="eyebrow">Supplier selection</p>
              <h2>Shortlist by project fit, then verify the details</h2>
              <p>A good shortlist should get smaller as your specification becomes clearer. Define the room, product, lighting, material, document and logistics requirements, then compare suppliers using the same evidence-based scorecard.</p>
              <div className="hero-actions">
                <a className="btn primary" href={mailtoHref("Acoustic Lighting Project and Supplier Review")} data-contact-popup>Request Project Review</a>
                <a className="btn ghost" href="/contact">Contact FLOSEEK</a>
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
