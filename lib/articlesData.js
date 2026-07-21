import { newsArticles } from "./newsData";

export const blogArticles = [
  {
    title: "Does Acoustic Lighting Really Work? Surface Area, Frequency and Honest Limits",
    excerpt:
      "Learn when acoustic lighting makes a real difference, what controls the result and how to separate complete-object evidence from decorative claims.",
    href: "/blog/does-acoustic-lighting-really-work",
    image: "/assets/img/products/ko-xym-0184/ko-xym-0184-scene-01-enhanced.webp",
    label: "Performance Guide",
    readTime: "16 min read",
    date: "Honest Guide",
    publishedAt: "2026-07-21"
  },
  {
    title: "15 PET Felt Acoustic Lighting Manufacturers to Compare in 2026",
    excerpt:
      "Compare 15 acoustic lighting manufacturers and brands by supplier type, project fit, documents, customization and RFQ readiness.",
    href: "/blog/top-pet-felt-acoustic-lighting-manufacturers",
    image: "/assets/img/products/ko-xym-0186/ko-xym-0186-scene-01-enhanced.webp",
    label: "Supplier Shortlist",
    readTime: "18 min read",
    date: "2026 Market Guide",
    publishedAt: "2026-07-15"
  },
  {
    title: "PET Felt Acoustic Material Lighting Guide",
    excerpt:
      "A practical commercial guide to PET felt material, recycled-content claims, sound absorption, fire-related documents, cleaning and bulk-order control.",
    href: "/blog/pet-felt-acoustic-material-lighting-guide",
    image: "/assets/img/products/ko-xym-0128/ko-xym-0128-scene-01-hd.webp",
    label: "Material Guide",
    readTime: "14 min read",
    date: "Material Guide",
    publishedAt: "2026-07-13"
  },
  {
    title: "LED Acoustic Pendant Light Specification Guide",
    excerpt:
      "A plain-English commercial guide to lumen, wattage, UGR, CCT, CRI, beam distribution, dimming, drivers and project documents.",
    href: "/blog/led-acoustic-pendant-light-specification-guide",
    image: "/assets/img/blog/led-spec-ring-office-hd.webp",
    label: "Lighting Specification",
    readTime: "15 min read",
    date: "Project Guide",
    publishedAt: "2026-07-13"
  },
  {
    title: "PET Felt Acoustic Lighting Cost: 2026 B2B Project Budget Guide",
    excerpt:
      "Understand the real cost drivers behind PET felt acoustic lighting quotations, from size and material to LED specs, MOQ, packing and freight.",
    href: "/blog/pet-felt-acoustic-lighting-cost",
    image: "/assets/img/blog/pet-felt-cost-shape-size.jpg",
    label: "Cost Guide",
    readTime: "17 min read",
    date: "B2B Budget Guide",
    publishedAt: "2026-07-07"
  },
  {
    title: "Acoustic Lighting vs Acoustic Panels: Which Should You Use?",
    excerpt:
      "Compare acoustic panels, PET felt acoustic lighting and hybrid routes for offices, restaurants and hotels before RFQ.",
    href: "/blog/acoustic-lighting-vs-acoustic-panels",
    image: "/assets/img/blog/acoustic-lighting-vs-panels-ceiling-feature.jpg",
    label: "Specification Guide",
    readTime: "16 min read",
    date: "Decision Guide",
    publishedAt: "2026-07-07"
  },
  {
    title: "What Is Acoustic Pendant Lighting? PET Felt Lights Explained",
    excerpt:
      "Understand how PET felt acoustic pendant lights combine sound absorption and illumination, and what buyers should check before RFQ.",
    href: "/blog/what-is-acoustic-pendant-lighting",
    image: "/assets/img/home/product-acoustic-pendant.webp",
    label: "Acoustic Basics",
    readTime: "14 min read",
    date: "Product Guide",
    publishedAt: "2026-07-06"
  },
  {
    title: "Compare PET Felt Acoustic Lighting Manufacturers",
    excerpt:
      "Review supplier fit, customization, documents, sample-to-bulk control, QC, packaging and quotation scope.",
    href: "/blog/how-to-compare-pet-felt-acoustic-lighting-manufacturers",
    image: "/assets/img/company/kingornan-factory-cutting.webp",
    label: "Supplier Comparison",
    readTime: "12 min read",
    date: "OEM/ODM Guide",
    publishedAt: "2026-06-18"
  },
  {
    title: "Acoustic Pendant Lighting for Open Offices and Meeting Rooms",
    excerpt:
      "Plan acoustic pendant lighting by office zone, glare control, meeting-room comfort, layout and RFQ needs.",
    href: "/blog/best-acoustic-pendant-lighting-open-offices-meeting-rooms",
    image: "/assets/img/blog/office-training-project-room.jpg",
    label: "Office Applications",
    readTime: "12 min read",
    date: "Project Guide",
    publishedAt: "2026-06-11"
  },
  {
    title: "How to Choose PET Felt Acoustic Pendant Lights for Commercial Projects",
    excerpt:
      "Compare acoustic goals, LED specs, PET felt material, installation details, document needs and RFQ scope.",
    href: "/blog/how-to-choose-pet-felt-acoustic-pendant-lights",
    image: "/assets/img/pendant/ko-xym-0127-canopy.jpeg",
    label: "Selection Guide",
    readTime: "12 min read",
    date: "B2B Buying Guide",
    publishedAt: "2026-06-04"
  }
];

export const siteArticles = [
  ...newsArticles,
  ...blogArticles
];

export function getLatestArticles(limit = 4) {
  return [...siteArticles]
    .sort((first, second) => second.publishedAt.localeCompare(first.publishedAt))
    .slice(0, limit);
}

export function getRelatedArticles(currentPath, limit = 2) {
  return blogArticles
    .filter((article) => article.href !== currentPath)
    .sort((first, second) => second.publishedAt.localeCompare(first.publishedAt))
    .slice(0, limit);
}
