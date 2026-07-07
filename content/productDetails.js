import { generatedProductDetails } from "./generatedProductDetails.js";
import { archivedTechnicalOverrides } from "./archivedTechnicalOverrides.js";

const basePath = "/assets/img/products";

const relatedPendantProducts = [
  {
    href: "/products/acoustic-pendant-lights/ko-xym-0024-ring-family",
    image: `${basePath}/ko-xym-0024/ko-xym-0024-product-main-1600x1200.webp`,
    name: "KO-XYM-0024 Ring Pendant",
    text: "Ribbed PET felt ring pendant for lounges, meeting rooms and hospitality spaces."
  },
  {
    href: "/products/acoustic-pendant-lights/ko-xym-0185-drum-pendant",
    image: `${basePath}/ko-xym-0185/ko-xym-0185-product-main-1600x1200.webp`,
    name: "KO-XYM-0185 Drum Pendant",
    text: "Slatted drum pendant with vertical PET felt ribs for collaborative interiors."
  },
  {
    href: "/products/acoustic-pendant-lights/ko-xym-0121-disc-felt-pendant",
    image: `${basePath}/ko-xym-0121/ko-xym-0121-product-main-1600x1200.webp`,
    name: "KO-XYM-0121 Disc Felt Pendant",
    text: "Layered circular acoustic pendant for offices, libraries and hospitality zones."
  }
];

const relatedLinearProducts = [
  {
    href: "/products/acoustic-linear-lights/ko-xym-0006-acoustic-linear-light",
    image: `${basePath}/ko-xym-0006/ko-xym-0006-product-main-ai-redraw-1600x1200.webp`,
    name: "KO-XYM-0006 Linear Light",
    text: "Related PET felt acoustic linear light for workstation and meeting layouts."
  },
  {
    href: "/products/acoustic-linear-lights/ko-xym-0007-acoustic-linear-light",
    image: `${basePath}/ko-xym-0007/ko-xym-0007-product-main-ai-redraw-1600x1200.webp`,
    name: "KO-XYM-0007 Linear Light",
    text: "Alternative acoustic linear light option for suspended commercial projects."
  },
  {
    href: "/products/acoustic-linear-lights/ko-xym-0009-acoustic-linear-light",
    image: `${basePath}/ko-xym-0009/ko-xym-0009-product-main-ai-redraw-1600x1200.webp`,
    name: "KO-XYM-0009 Linear Light",
    text: "Same-series linear acoustic lighting reference for project comparison."
  }
];

const pendantDefaults = {
  breadcrumb: "Acoustic Pendant Lights",
  breadcrumbHref: "/products/acoustic-pendant-lights",
  productFamily: "Acoustic Pendant Lights",
  routeBase: "/products/acoustic-pendant-lights",
  primaryCta: "Request Quote",
  secondaryCta: "Technical Data",
  quickSpecsAriaLabel: "Key specifications",
  related: {
    title: "Other Acoustic Pendant Styles",
    text: "Use these pendant families as comparison options for acoustic lighting projects."
  },
  quote: {
    title: "Request Product Details",
    text: "Send size, quantity, color, CCT, dimming and destination market. Our team will confirm configuration and quotation details.",
    primaryCta: "Email Sales",
    secondaryCta: "WhatsApp: +86 15888067484"
  }
};

function buildProduct({
  slug,
  code,
  family,
  title,
  summary,
  overview,
  sceneText,
  quickSpecs,
  technicalRows,
  options,
  materials,
  breadcrumb,
  breadcrumbHref,
  productFamily,
  routeBase,
  productType = "PET felt acoustic pendant light",
  altProductName = "acoustic pendant light",
  heroImage,
  sceneCount = 1,
  sceneLabels = ["Project scene application"],
  related,
  relatedProducts = relatedPendantProducts
}) {
  const assetRoot = `${basePath}/${slug}`;
  return {
    ...pendantDefaults,
    slug,
    breadcrumb: breadcrumb || pendantDefaults.breadcrumb,
    breadcrumbHref: breadcrumbHref || pendantDefaults.breadcrumbHref,
    productFamily: productFamily || pendantDefaults.productFamily,
    routeBase: routeBase || pendantDefaults.routeBase,
    code: `${code} / ${family}`,
    model: code,
    family,
    title,
    text: summary,
    heroImage: heroImage || `${assetRoot}/${slug}-hero-showcase.webp`,
    heroImageAlt: `${code} ${altProductName}`,
    lineDrawing: `${assetRoot}/${slug}-line-drawing-updated.webp`,
    lineDrawingAlt: `${code} ${altProductName} line drawing`,
    quickSpecs,
    overview: {
      title: "Product Overview",
      paragraphs: overview
    },
    scenes: {
      title: "Scene Application",
      text: sceneText,
      images: Array.from({ length: sceneCount }, (_, index) => ({
        src: `${assetRoot}/${slug}-scene-${String(index + 1).padStart(2, "0")}-enhanced.webp`,
        alt: `${code} ${altProductName} in a commercial interior scene`,
        label: sceneLabels[index] || `Scene ${index + 1}`
      }))
    },
    technical: {
      title: "Technical Information",
      text: `Core page data is based on exact-model local materials for ${code}. Unverified electrical and size values should be confirmed against project drawings before quotation.`,
      rows: [
        { label: "Model", value: `${code} / ${family}` },
        { label: "Product type", value: productType },
        ...technicalRows,
        { label: "Material", value: "Acoustic PET felt with lighting hardware" },
        { label: "Customization", value: "Felt color, suspension, CCT, dimming, logo and packaging by project confirmation" }
      ]
    },
    options: {
      title: "Options",
      items: options
    },
    materials: { text: materials },
    related: related || pendantDefaults.related,
    relatedProducts,
    inquiry: {
      eyebrow: "Product Inquiry",
      title: `Confirm ${code} for your project.`,
      text: "Share quantity, room type, size preference, felt color, CCT, dimming method, ceiling height and destination market. The sales team can confirm the quotation configuration and supporting documents."
    },
    seo: {
      title: `${code} ${title} | PET Felt Acoustic Lighting Supplier`,
      description: `Review ${code} ${title} details from FLOSEEK, including PET felt acoustic lighting options, OEM/ODM customization and B2B quotation support.`
    }
  };
}

function withImageOverrides(product, overrides) {
  return {
    ...product,
    ...overrides
  };
}

const correctedSceneOverrides = {
  "ko-xym-0024-ring-family": {
    images: [
      {
        src: "/assets/img/applications/restaurant-hospitality/arcade-hotel-lobby-ko-xym-0024-corrected.png",
        alt: "KO-XYM-0024 red ribbed acoustic ring pendant lights in a boutique hotel lobby lounge",
        label: "Hotel lobby lounge"
      }
    ]
  },
  "ko-xym-0185-drum-pendant": {
    images: [
      {
        src: "/assets/img/applications/restaurant-hospitality/harbor-view-restaurant-ko-xym-0185-corrected.png",
        alt: "KO-XYM-0185 gray slatted drum acoustic pendant lights in a hotel restaurant dining room",
        label: "Hotel restaurant dining"
      }
    ]
  },
  "ko-xym-0127-canopy-felt-pendant": {
    images: [
      {
        src: "/assets/img/applications/restaurant-hospitality/garden-cafe-ko-xym-0127-corrected.png",
        alt: "KO-XYM-0127 black three-segment canopy acoustic pendant lights in a cafe breakfast bar",
        label: "Cafe and breakfast bar"
      }
    ]
  },
  "ko-xym-0139-acoustic-pendant-light": {
    images: [
      {
        src: "/assets/img/applications/commercial-interiors/gallery-retail-ko-xym-0139-corrected.png",
        alt: "KO-XYM-0139 charcoal closed square ribbed acoustic pendant lights in a retail showroom",
        label: "Retail showroom display"
      }
    ]
  }
};

const baseProductDetails = {
  "ko-xym-0001-ribbed-linear-light": buildProduct({
    slug: "ko-xym-0001",
    code: "KO-XYM-0001",
    family: "Linear Family",
    breadcrumb: "Acoustic Linear Lights",
    breadcrumbHref: "/products/acoustic-linear-lights",
    productFamily: "Acoustic Linear Lights",
    routeBase: "/products/acoustic-linear-lights",
    productType: "PET felt acoustic linear light",
    altProductName: "acoustic linear light",
    title: "Ribbed Acoustic Linear Light",
    summary: "Rectangular ribbed PET felt linear pendant for office workstations, meeting areas and commercial interiors that need suspended acoustic surface with integrated linear lighting.",
    heroImage: `${basePath}/ko-xym-0001/ko-xym-0001-product-main-1600x1200.webp`,
    quickSpecs: [
      { label: "Form", value: "Ribbed rectangular linear pendant" },
      { label: "Body", value: "PET felt acoustic body" },
      { label: "Source", value: "Exact-model KO-XYM-0001 local materials" },
      { label: "Use", value: "Office, meeting and workstation areas" }
    ],
    technicalRows: [
      { label: "Structure", value: "Ribbed rectangular suspended acoustic light" },
      { label: "Installation", value: "Suspended linear pendant layout" },
      { label: "Source note", value: "Local exact-model source does not verify size, wattage or CCT values" }
    ],
    overview: [
      "KO-XYM-0001 uses a long rectangular PET felt body with a ribbed acoustic surface and a linear light element below the fixture. The product image shows a dark felt body with slim suspension cables and a clean underside light line.",
      "The exact-model scene image shows this family installed above office workstations in a multi-fixture layout. The page keeps the source-supported shape, suspension style and commercial office use without adding unverified electrical or dimensional values.",
      "Use this model where a straight acoustic lighting element is needed above desk rows, meeting tables or focused work zones."
    ],
    sceneText: "Use KO-XYM-0001 in open offices, meeting areas and workstation zones where repeated linear acoustic pendants can add light and acoustic surface near occupied work areas.",
    sceneLabels: ["Office workstation installation"],
    related: {
      title: "Other Acoustic Linear Light Options",
      text: "Use these linear-light families as adjacent options for workstation, meeting and office lighting projects."
    },
    options: [
      "PET felt color confirmation by project",
      "Suspension length and ceiling canopy confirmation",
      "CCT, dimming and driver configuration by quotation",
      "OEM label and packaging support"
    ],
    materials: "KO-XYM-0001 uses a PET felt acoustic body with linear lighting hardware. Final felt color, CCT, dimming, driver and suspension details should be confirmed before quotation because the local source does not verify those technical values.",
    relatedProducts: relatedLinearProducts
  }),
  "ko-xym-0024-ring-family": buildProduct({
    slug: "ko-xym-0024",
    code: "KO-XYM-0024",
    family: "Ring Family",
    title: "Ribbed Acoustic Ring Pendant",
    summary: "Sculptural PET felt ring pendant for lounges, meeting rooms and hospitality spaces that need lighting and acoustic surface in one suspended fixture.",
    quickSpecs: [
      { label: "Sizes", value: "560 x 280 mm / 800 x 240 mm" },
      { label: "Power", value: "30W / 50W options" },
      { label: "Optics", value: "Diffuser or microprismatic diffuser" },
      { label: "Use", value: "Lounges, meeting rooms, hospitality spaces" }
    ],
    technicalRows: [
      { label: "Size", value: "560 x 280 mm / 800 x 240 mm" },
      { label: "Power", value: "30W / 50W options" },
      { label: "Optics", value: "Diffuser or microprismatic diffuser" }
    ],
    overview: [
      "KO-XYM-0024 uses a ribbed circular PET felt body around an integrated pendant light. The ring form gives project spaces a clear visual anchor while adding acoustic material near occupied tables and lounge seating.",
      "The local source materials show two ring proportions for project selection. The page keeps the product-first image and exact-model line drawing together so buyers can compare visual form before requesting a quote.",
      "Use this family where the design intent calls for a softer circular pendant instead of a flat panel or linear acoustic light."
    ],
    sceneText: "Use KO-XYM-0024 above shared tables, reception seating, hospitality lounges and meeting zones where a decorative ring pendant can define the area.",
    sceneLabels: ["Lounge and meeting zone"],
    options: [
      "560 x 280 mm or 800 x 240 mm catalog proportions",
      "30W or 50W project configuration",
      "Diffuser or microprismatic diffuser",
      "PET felt color, suspension and packaging confirmation"
    ],
    materials: "KO-XYM-0024 uses a PET felt acoustic body with lighting hardware. Final felt color, CCT, dimming and ceiling suspension details should be confirmed before sample or mass production."
  }),
  "ko-xym-0185-drum-pendant": withImageOverrides(buildProduct({
    slug: "ko-xym-0185",
    code: "KO-XYM-0185",
    family: "Drum Family",
    title: "Slatted Drum Acoustic Pendant",
    summary: "Cylindrical acoustic pendant with vertical felt ribs for office, retail, hospitality and collaborative table areas.",
    quickSpecs: [
      { label: "Form", value: "Felt rib drum structure" },
      { label: "CCT", value: "3000K / 4000K / 6000K" },
      { label: "Color", value: "Custom color options" },
      { label: "Use", value: "Office, retail and hospitality areas" }
    ],
    technicalRows: [
      { label: "Structure", value: "Vertical PET felt rib drum body" },
      { label: "Color temperature", value: "3000K / 4000K / 6000K" },
      { label: "Color option", value: "Custom color options" }
    ],
    overview: [
      "KO-XYM-0185 is a slatted drum acoustic pendant with vertical PET felt ribs around the light body. The cylindrical form works above dining tables, collaboration settings and hospitality interiors where a warmer decorative acoustic object is useful.",
      "The vertical rib layout gives the pendant depth while keeping the silhouette compact. Local exact-model assets include a product image, line drawing and scene image for a complete first product detail page.",
      "For project supply, confirm color, CCT, suspension height, dimming and packaging details against the target installation."
    ],
    sceneText: "Use KO-XYM-0185 where a drum-shaped acoustic pendant can soften glare and add visual warmth above tables and commercial seating areas.",
    sceneLabels: ["Hospitality and table lighting"],
    options: [
      "Custom PET felt color selection",
      "3000K, 4000K or 6000K project CCT",
      "Suspension height and ceiling canopy options",
      "OEM label and packaging support"
    ],
    materials: "KO-XYM-0185 uses vertical PET felt ribs with lighting hardware. Final color, CCT, dimming and installation accessories should be confirmed during quotation."
  }), {
    heroImage: `${basePath}/ko-xym-0185/ko-xym-0185-hero-showcase-1600.webp`
  }),
  "ko-xym-0127-canopy-felt-pendant": buildProduct({
    slug: "ko-xym-0127",
    code: "KO-XYM-0127",
    family: "Canopy Family",
    title: "Canopy Felt Pendant Lamp",
    summary: "Soft canopy-form acoustic pendant for restaurants, cafes, reception zones and relaxed commercial interiors.",
    sceneCount: 2,
    sceneLabels: ["Restaurant and lounge application", "Linear table arrangement"],
    quickSpecs: [
      { label: "Light", value: "E27 or LED versions" },
      { label: "Body", value: "Acoustic felt body" },
      { label: "Options", value: "Custom diameter and color" },
      { label: "Use", value: "Restaurant, cafe and reception zones" }
    ],
    technicalRows: [
      { label: "Light version", value: "E27 or LED versions" },
      { label: "Body", value: "Acoustic felt body" },
      { label: "Customization", value: "Custom diameter and color by project confirmation" }
    ],
    overview: [
      "KO-XYM-0127 is a canopy-form felt pendant designed for softer commercial interiors. The shade-like acoustic body suits restaurants, cafes, reception areas and informal meeting spaces.",
      "The exact-model source set includes two scene images, a product image and a line drawing, allowing the page to show both the standalone form and installed use.",
      "Specify the preferred light version, diameter, felt color and suspension length before sample or project quotation."
    ],
    sceneText: "Use KO-XYM-0127 in hospitality, reception and table-focused interiors where pendant lighting should feel softer than a conventional hard shade.",
    options: [
      "E27 or integrated LED project version",
      "Custom diameter and PET felt color",
      "Suspension height and ceiling canopy options",
      "Project packaging and labeling support"
    ],
    materials: "KO-XYM-0127 uses an acoustic felt body with pendant lighting hardware. Diameter, color and lighting configuration should be confirmed against project drawings."
  }),
  "ko-xym-0155-petal-pendant": buildProduct({
    slug: "ko-xym-0155",
    code: "KO-XYM-0155",
    family: "Petal Family",
    title: "Petal Acoustic Pendant",
    summary: "Layered petal-form PET felt pendant for dining, breakout, education and informal meeting interiors.",
    quickSpecs: [
      { label: "Form", value: "Layered petal acoustic pendant" },
      { label: "Dimming", value: "Non-dim / 1-10V / DALI" },
      { label: "Finish", value: "PET felt or fabric finish" },
      { label: "Use", value: "Dining, breakout and learning spaces" }
    ],
    technicalRows: [
      { label: "Shade form", value: "Layered petal acoustic pendant" },
      { label: "Dimming", value: "Non-dim / 1-10V / DALI" },
      { label: "Finish", value: "PET felt or fabric finish" }
    ],
    overview: [
      "KO-XYM-0155 uses layered PET felt petals to create a decorative acoustic pendant. The form works well in dining areas, breakout spaces, reading corners and informal meeting interiors.",
      "The petal layers add acoustic surface while giving the light a softer, warmer appearance than a plain pendant shade. Exact-model local assets are used for the hero, drawing and scene sections.",
      "For ordering, confirm finish type, felt or fabric color, CCT, dimming and suspension details."
    ],
    sceneText: "Use KO-XYM-0155 where the interior needs a more decorative acoustic pendant above informal seating, reading or dining zones.",
    sceneLabels: ["Education and reading area"],
    options: [
      "PET felt or fabric finish",
      "Non-dim, 1-10V or DALI dimming",
      "Project color and suspension confirmation",
      "OEM label and packaging support"
    ],
    materials: "KO-XYM-0155 can be specified with PET felt or fabric finish according to local source notes. Final finish, color, CCT and dimming should be confirmed before quotation."
  }),
  "ko-xym-0085-linear-pendant": buildProduct({
    slug: "ko-xym-0085",
    code: "KO-XYM-0085",
    family: "Linear Family",
    breadcrumb: "Acoustic Linear Lights",
    breadcrumbHref: "/products/acoustic-linear-lights",
    productFamily: "Acoustic Linear Lights",
    routeBase: "/products/acoustic-linear-lights",
    productType: "PET felt acoustic linear light",
    altProductName: "acoustic linear light",
    title: "Linear Acoustic Light",
    summary: "Long-form acoustic linear light for conference tables, open offices and classroom work zones.",
    quickSpecs: [
      { label: "Lengths", value: "1000-3000 mm lengths" },
      { label: "Power", value: "30-60W options" },
      { label: "Optics", value: "Lens, diffuser or honeycomb optics" },
      { label: "Use", value: "Conference tables, offices and classrooms" }
    ],
    technicalRows: [
      { label: "Length range", value: "1000-3000 mm lengths" },
      { label: "Power", value: "30-60W options" },
      { label: "Optics", value: "Lens, diffuser or honeycomb optics" }
    ],
    overview: [
      "KO-XYM-0085 is a long-form acoustic linear light for work zones that need continuous lighting above desks, conference tables or classroom layouts.",
      "The slim felt body and linear light output make it easier to align the fixture with furniture plans than a decorative round pendant. Exact-model product, scene and drawing assets are used on this page.",
      "Confirm length, optic type, power, CCT, dimming and suspension layout before quotation."
    ],
    sceneText: "Use KO-XYM-0085 above conference tables, bench desks and classroom work zones where a linear acoustic lighting element fits the plan.",
    sceneLabels: ["Open office linear layout"],
    options: [
      "1000-3000 mm project lengths",
      "30-60W power options",
      "Lens, diffuser or honeycomb optics",
      "Felt color, suspension and dimming confirmation"
    ],
    materials: "KO-XYM-0085 uses a PET felt acoustic body with linear lighting hardware. Length, optic, felt color, CCT and dimming should be confirmed against the furniture and ceiling plan."
  }),
  "ko-xym-0121-disc-felt-pendant": buildProduct({
    slug: "ko-xym-0121",
    code: "KO-XYM-0121",
    family: "Disc Family",
    title: "Disc Felt Pendant Light",
    summary: "Layered disc acoustic pendant for offices, libraries and hospitality interiors needing soft light and sound comfort.",
    quickSpecs: [
      { label: "Light", value: "E27 or integrated LED" },
      { label: "Rating", value: "IP20 indoor use" },
      { label: "Color", value: "Project color matching" },
      { label: "Use", value: "Offices, libraries and hospitality interiors" }
    ],
    technicalRows: [
      { label: "Light version", value: "E27 or integrated LED" },
      { label: "Indoor rating", value: "IP20 indoor use" },
      { label: "Color option", value: "Project color matching" }
    ],
    overview: [
      "KO-XYM-0121 is a layered disc felt pendant with a soft circular profile. It suits offices, libraries, hospitality spaces and education interiors that need a calm acoustic lighting feature.",
      "The local source set includes exact-model product, line drawing and scene images. The detail page uses these assets directly and avoids unsupported dimensions where source text did not provide values.",
      "Confirm the preferred light version, felt color, suspension height and dimming requirement before project quotation."
    ],
    sceneText: "Use KO-XYM-0121 in libraries, study areas, office lounges and hospitality interiors where a soft disc pendant can support a quieter ceiling composition.",
    sceneLabels: ["Library and study space"],
    options: [
      "E27 or integrated LED project version",
      "IP20 indoor-use configuration",
      "Project color matching",
      "Suspension height, CCT and dimming confirmation"
    ],
    materials: "KO-XYM-0121 uses PET felt acoustic material with pendant lighting hardware. Final color, light version, CCT and suspension details should be confirmed before quotation."
  }),
  ...generatedProductDetails
};

function mergeProductOverride(slug, product, override = {}) {
  const relatedProducts = product.relatedProducts?.map((relatedProduct) => {
    const slugMatch = relatedProduct.image?.match(/\/assets\/img\/products\/([^/]+)\//);
    if (!slugMatch) return relatedProduct;

    const slug = slugMatch[1];
    return {
      ...relatedProduct,
      image: `${basePath}/${slug}/${slug}-product-main-ai-redraw-1600x1200.webp`
    };
  });

  const sceneOverride = correctedSceneOverrides[slug];

  return {
    ...product,
    ...override,
    ...(relatedProducts ? { relatedProducts } : {}),
    scenes: {
      ...product.scenes,
      ...override.scenes,
      ...(sceneOverride ? { images: sceneOverride.images } : {})
    },
    technical: {
      ...product.technical,
      ...override.technical
    },
    options: {
      ...product.options,
      ...override.options
    },
    materials: {
      ...product.materials,
      ...override.materials
    },
    seo: {
      ...product.seo,
      ...override.seo
    }
  };
}

export const productDetails = Object.fromEntries(
  Object.entries(baseProductDetails).map(([slug, product]) => [
    slug,
    mergeProductOverride(slug, product, archivedTechnicalOverrides[slug])
  ])
);

export function getProductDetail(slug) {
  return productDetails[slug];
}

export function getProductDetailsByRoute(routeBase) {
  return Object.fromEntries(
    Object.entries(productDetails).filter(([, product]) => product.routeBase === routeBase)
  );
}
