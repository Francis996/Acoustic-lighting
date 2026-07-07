import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const workspaceRoot = path.resolve(projectRoot, "../../..");
const archiveRoot = path.join(workspaceRoot, "产品素材归档_完整");
const websiteArchiveRoot = path.join(workspaceRoot, "产品素材_网站成品库");
const outputPath = path.join(projectRoot, "content", "archivedTechnicalOverrides.js");

const { productDetails } = await import(pathToFileURL(path.join(projectRoot, "content", "productDetails.js")).href);

function parseTechnicalMarkdown(markdown) {
  const rows = [];
  const lines = markdown.split(/\r?\n/);

  for (let index = 0; index < lines.length; index += 1) {
    const labelMatch = lines[index].trim().match(/^\*\*(.+?)\*\*$/);
    if (!labelMatch) continue;

    const valueLines = [];
    for (let cursor = index + 1; cursor < lines.length; cursor += 1) {
      const line = lines[cursor].trim();
      if (/^\*\*(.+?)\*\*$/.test(line)) break;
      if (line && !line.startsWith("#")) valueLines.push(line);
      index = cursor - 1;
    }

    rows.push({
      label: labelMatch[1].trim(),
      value: valueLines.join(" ").trim()
    });
  }

  return rows.filter((row) => row.label && row.value);
}

function formatDimensionValue(value) {
  return value
    .replace(/Ø/g, "Ø")
    .replace(/(\d)x(\d)/g, "$1 x $2")
    .replace(/(\d)xØ/g, "$1 x Ø")
    .replace(/mm/g, " mm")
    .replace(/\s+mm/g, " mm")
    .replace(/\s+\/\s+/g, " / ")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizedRows(rows) {
  return rows.map((row) => {
    if (/^(size|diameter|length)$/i.test(row.label)) {
      return { ...row, value: formatDimensionValue(row.value) };
    }

    if (/^color chart$/i.test(row.label)) {
      return { ...row, value: row.value.replace(/\s+on page\s+\d+/i, "").trim() };
    }

    return row;
  });
}

function getRow(rows, label) {
  return rows.find((row) => row.label.toLowerCase() === label.toLowerCase())?.value;
}

function productTitleFromType(productType, fallbackTitle) {
  if (!productType) return fallbackTitle;
  return productType
    .replace(/^PET felt acoustic\s+/i, "Acoustic ")
    .replace(/\blight$/i, "Light")
    .replace(/\bpendant\b/i, "Pendant")
    .replace(/\blinear\b/i, "Linear")
    .replace(/\bceiling\/wall\b/i, "Ceiling & Wall")
    .replace(/\bfloor\b/i, "Floor")
    .replace(/\bdecorative\b/i, "Decorative")
    .replace(/\bacoustic\b/i, "Acoustic");
}

function modelSlug(model) {
  return model.toLowerCase();
}

function mainImagePath(model) {
  const slug = modelSlug(model);
  const aiRedrawPath = `/assets/img/products/${slug}/${slug}-product-main-ai-redraw-1600x1200.webp`;
  const aiRedrawFilePath = path.join(projectRoot, "public", aiRedrawPath);
  if (fs.existsSync(aiRedrawFilePath)) return aiRedrawPath;

  const redrawPath = `/assets/img/products/${slug}/${slug}-product-main-redraw-1600x1200.webp`;
  const redrawFilePath = path.join(projectRoot, "public", redrawPath);
  if (fs.existsSync(redrawFilePath)) return redrawPath;

  const publicPath = `/assets/img/products/${slug}/${slug}-product-main-1600x1200.webp`;
  const filePath = path.join(projectRoot, "public", publicPath);
  return fs.existsSync(filePath) ? publicPath : null;
}

function buildOptions(rows) {
  const colorChart = getRow(rows, "Color chart");
  const size = getRow(rows, "Size");
  const lightSource = getRow(rows, "Light source");
  const cct = getRow(rows, "Color temperature");
  const dimming = getRow(rows, "Dimming");
  const options = [];

  if (colorChart) options.push(`${colorChart} PET felt selection`);
  if (size) options.push(`${size} size selection`);
  if (lightSource && lightSource !== "TBC") options.push(`${lightSource} light source option`);
  if (cct) options.push(`${cct} CCT options`);
  if (dimming) options.push(`${dimming} dimming options`);
  options.push("OEM label and packaging support");

  return [...new Set(options)];
}

function buildQuickSpecs(rows) {
  const specs = [];
  const size = getRow(rows, "Size");
  const power = getRow(rows, "Power");
  const lightSource = getRow(rows, "Light source");
  const cct = getRow(rows, "Color temperature");
  const dimming = getRow(rows, "Dimming");

  if (size) specs.push({ label: "Sizes", value: size });
  if (power) specs.push({ label: "Power", value: power });
  else if (lightSource && lightSource !== "TBC") specs.push({ label: "Light source", value: lightSource });
  if (cct && cct !== "TBC") specs.push({ label: "CCT", value: cct });
  if (dimming && dimming !== "TBC") specs.push({ label: "Dimming", value: dimming });

  return specs.slice(0, 4);
}

function buildText(product, rows) {
  const type = getRow(rows, "Product type") || product.title;
  const material = getRow(rows, "Material");
  const size = getRow(rows, "Size");
  const power = getRow(rows, "Power") || getRow(rows, "Light source");
  const cct = getRow(rows, "Color temperature");
  const dimming = getRow(rows, "Dimming");
  const applications = product.productFamily?.toLowerCase().includes("linear")
    ? "offices, workstations, meeting rooms and commercial project layouts"
    : product.productFamily?.toLowerCase().includes("ceiling")
      ? "offices, reception areas, corridors and commercial ceiling or wall zones"
      : product.productFamily?.toLowerCase().includes("floor")
        ? "lounges, offices, hospitality interiors and flexible acoustic areas"
        : "offices, meeting areas, hospitality interiors and commercial project supply";

  const specs = [size, power, cct !== "TBC" ? cct : null, dimming !== "TBC" ? dimming : null].filter(Boolean).join("; ");
  return `${type} with ${material || "acoustic PET felt material"} for ${applications}.${specs ? ` Key options: ${specs}.` : ""}`;
}

const overrides = {};
const report = {
  products: 0,
  withTechnicalFiles: 0,
  missingTechnicalFiles: [],
  missingMainImages: [],
  archiveRoot,
  websiteArchiveRoot
};

for (const [routeSlug, product] of Object.entries(productDetails)) {
  const model = product.model;
  if (!model) continue;

  report.products += 1;
  const technicalPath = path.join(archiveRoot, model, "parameters", `${model}_technical_information.md`);
  if (!fs.existsSync(technicalPath)) {
    report.missingTechnicalFiles.push(model);
    continue;
  }

  const rows = normalizedRows(parseTechnicalMarkdown(fs.readFileSync(technicalPath, "utf8")));
  report.withTechnicalFiles += 1;

  const heroImage = mainImagePath(model);
  if (!heroImage) report.missingMainImages.push(model);

  const productType = getRow(rows, "Product type");
  const material = getRow(rows, "Material");
  const title = productTitleFromType(productType, product.title);
  const text = buildText(product, rows);

  overrides[routeSlug] = {
    title,
    text,
    ...(heroImage ? { heroImage } : {}),
    heroImageAlt: `${model} ${productType || product.heroImageAlt || "product main image"}`,
    quickSpecs: buildQuickSpecs(rows),
    technical: {
      title: "Technical Information",
      text: "",
      rows
    },
    options: {
      title: "Options",
      items: buildOptions(rows)
    },
    materials: {
      text: `${model} uses ${material || "acoustic PET felt material"} according to the exact-model archived technical information. Felt color, size, wattage, CCT, dimming, logo and packaging can be confirmed by project quotation.`
    },
    seo: {
      title: `${model} ${title} | KingOrnan Acoustic Lighting Supplier`,
      description: `Review ${model} ${title} technical information, product image, PET felt material options and B2B project customization support.`
    },
    archivedTechnicalSource: `/产品素材归档_完整/${model}/parameters/${model}_technical_information.md`
  };
}

const header = `// Generated by scripts/generate-archived-product-overrides.mjs.\n// Source: 产品素材归档_完整/<MODEL>/parameters/<MODEL>_technical_information.md\n\n`;
const js = `${header}export const archivedTechnicalOverrides = ${JSON.stringify(overrides, null, 2)};\n`;
fs.writeFileSync(outputPath, js);
fs.writeFileSync(
  path.join(workspaceRoot, "产品素材整理_台账", "archived_product_detail_overrides_report.json"),
  `${JSON.stringify(report, null, 2)}\n`
);

console.log(JSON.stringify(report, null, 2));
