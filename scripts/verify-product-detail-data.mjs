import fs from "node:fs";
import path from "node:path";
import { productDetails } from "../content/productDetails.js";

const projectRoot = path.resolve(import.meta.dirname, "..");
const missingImages = [];
const weakQuickSpecs = [];
const missingTechnical = [];
const oldMainRefs = [];

for (const [routeSlug, product] of Object.entries(productDetails)) {
  if (!product.heroImage?.endsWith("product-main-redraw-1600x1200.webp")) {
    oldMainRefs.push({ routeSlug, heroImage: product.heroImage });
  }

  const imagePath = path.join(projectRoot, "public", product.heroImage || "");
  if (!fs.existsSync(imagePath)) {
    missingImages.push({ routeSlug, heroImage: product.heroImage });
  }

  const quickSpecText = (product.quickSpecs || []).map((item) => `${item.label}: ${item.value}`).join(" | ");
  if (!product.quickSpecs?.length || /Exact-model local finished assets|Source|Use:/.test(quickSpecText)) {
    weakQuickSpecs.push({ routeSlug, quickSpecs: product.quickSpecs });
  }

  const rows = product.technical?.rows || [];
  const hasPowerOrLightSource = rows.some((row) => row.label === "Power") || rows.some((row) => row.label === "Light source");
  if (rows.length < 8 || !rows.some((row) => row.label === "Size") || !hasPowerOrLightSource) {
    missingTechnical.push({ routeSlug, rows });
  }
}

const report = {
  products: Object.keys(productDetails).length,
  missingImages,
  oldMainRefs,
  weakQuickSpecs,
  missingTechnical
};

console.log(JSON.stringify(report, null, 2));

if (missingImages.length || oldMainRefs.length || weakQuickSpecs.length || missingTechnical.length) {
  process.exitCode = 1;
}
