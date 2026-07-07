const applicationSources = [
  {
    key: "officeMeetingRooms",
    title: "Office & Meeting Rooms",
    href: "/applications/office-meeting-rooms",
    type: "Workplace"
  },
  {
    key: "educationSpaces",
    title: "Education Spaces",
    href: "/applications/education-spaces",
    type: "Education"
  },
  {
    key: "restaurantHospitality",
    title: "Restaurant & Hospitality",
    href: "/applications/restaurant-hospitality",
    type: "Hospitality"
  },
  {
    key: "commercialInteriors",
    title: "Commercial Interiors",
    href: "/applications/commercial-interiors",
    type: "Commercial"
  }
];

export function slugifyProjectName(name) {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function buildProject(source, project, index) {
  const slug = slugifyProjectName(project.name);
  const locationParts = project.location.split(",").map((item) => item.trim());
  const city = locationParts[0] || project.location;
  const country = locationParts.slice(1).join(", ") || "Project market";
  const modelCodes = project.models.map((model) => model.code).join(" + ");

  return {
    ...project,
    slug,
    href: `/projects/${slug}`,
    index,
    categoryKey: source.key,
    categoryTitle: source.title,
    categoryHref: source.href,
    projectType: source.type,
    city,
    country,
    modelCodes,
    seoTitle: `${project.name} | ${project.sector} Acoustic Lighting Project`,
    seoDescription: `${project.brief} Explore the FLOSEEK acoustic lighting project approach, product models and specification notes for ${project.location}.`,
    overview: [
      project.brief,
      `The project was developed for ${project.sector.toLowerCase()}, where lighting, material tone and acoustic comfort needed to work together rather than as separate ceiling elements.`,
      `FLOSEEK matched the application with ${project.product.toLowerCase()} so the visual feature, LED output and PET Felt acoustic surface could support the room's daily use.`
    ],
    facts: [
      { label: "Location", value: project.location },
      { label: "Application", value: source.title },
      { label: "Sector", value: project.sector },
      { label: "Project team", value: project.designRole },
      { label: "Lighting scope", value: project.product },
      { label: "Products used", value: modelCodes }
    ],
    specificationNotes: [
      `Primary product selection: ${modelCodes}.`,
      "PET Felt color, fixture size, suspension height and dimming method can be confirmed around the reflected ceiling plan.",
      "Final wattage, CCT, packaging marks and documentation are coordinated during quotation and sample approval."
    ]
  };
}

export function buildProjects(content) {
  return applicationSources.flatMap((source) => {
  const items = content.pages[source.key]?.cases?.items || [];
  return items.map((project, index) => buildProject(source, project, index));
  });
}

export function buildProjectCategories(content) {
  const projects = buildProjects(content);
  return applicationSources.map((source) => ({
    ...source,
    count: projects.filter((project) => project.categoryKey === source.key).length
  }));
}

export function getProjectBySlug(projects, slug) {
  return projects.find((project) => project.slug === slug);
}

export function getRelatedProjects(projects, project, limit = 3) {
  const sameCategory = projects.filter(
    (item) => item.slug !== project.slug && item.categoryKey === project.categoryKey
  );
  const fallback = projects.filter((item) => item.slug !== project.slug && item.categoryKey !== project.categoryKey);
  return [...sameCategory, ...fallback].slice(0, limit);
}
