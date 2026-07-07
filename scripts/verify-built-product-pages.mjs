import fs from "node:fs";
import path from "node:path";
import { productDetails } from "../content/productDetails.js";

const projectRoot = path.resolve(import.meta.dirname, "..");
const checks = [
  "ko-xym-0215-acoustic-ceiling-wall-light",
  "ko-xym-0137-acoustic-pendant-light",
  "ko-xym-0185-drum-pendant",
  "ko-xym-0085-linear-pendant",
  "ko-xym-0201-pet-felt-acoustic-product"
];

function htmlPath(slug, product) {
  const route = `${product.routeBase}/${product.routeSlug || slug}`.replace(/^\//, "");
  return path.join(projectRoot, ".next", "server", "app", `${route}.html`);
}

const result = [];

for (const slug of checks) {
  const product = productDetails[slug];
  const file = htmlPath(slug, product);
  const html = fs.readFileSync(file, "utf8");
  const required = [
    product.model,
    product.heroImage.split("/").pop(),
    "Technical Information",
    product.quickSpecs[0]?.value,
    product.technical.rows.find((row) => row.label === "Material")?.value
  ].filter(Boolean);

  result.push({
    slug,
    path: file,
    missing: required.filter((text) => !html.includes(text))
  });
}

console.log(JSON.stringify(result, null, 2));

if (result.some((entry) => entry.missing.length)) {
  process.exitCode = 1;
}
