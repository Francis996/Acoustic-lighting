import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { productDetails } from "../content/productDetails.js";

const require = createRequire(import.meta.url);
const sharp = require("/Users/Lenovo/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp");

const projectRoot = path.resolve(import.meta.dirname, "..");
const workspaceRoot = path.resolve(projectRoot, "../../..");
const archiveRoot = path.join(workspaceRoot, "产品素材_网站成品库");
const batchRoot = path.join(workspaceRoot, "产品素材整理_台账", "product-main-image-hd-batch", "full-remaining-models");

function csvEscape(value) {
  const text = String(value ?? "");
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

const rows = Object.values(productDetails)
  .filter((product) => product.model)
  .map((product) => {
    const model = product.model;
    const slug = model.toLowerCase();
    const sourcePath = path.join(archiveRoot, model, "product_images", `${slug}-product-main-1600x1200.webp`);
    const outputPath = path.join(archiveRoot, model, "product_images", `${slug}-product-main-ai-redraw-1600x1200.webp`);
    return {
      model_id: model,
      model_relative_path: model,
      route_base: product.routeBase,
      route_slug: product.routeSlug,
      title: product.title,
      source_filename: `${slug}-product-main-1600x1200.webp`,
      source_path: sourcePath,
      output_path: outputPath,
      source_exists: fs.existsSync(sourcePath),
      ai_exists: fs.existsSync(outputPath)
    };
  })
  .filter((row) => row.source_exists && !row.ai_exists)
  .sort((a, b) => a.model_id.localeCompare(b.model_id));

fs.mkdirSync(batchRoot, { recursive: true });
fs.writeFileSync(path.join(batchRoot, "remaining-manifest.jsonl"), rows.map((row) => JSON.stringify(row)).join("\n") + "\n");
const columns = Object.keys(rows[0] ?? {});
fs.writeFileSync(path.join(batchRoot, "remaining-report.csv"), [columns.join(","), ...rows.map((row) => columns.map((column) => csvEscape(row[column])).join(","))].join("\n") + "\n");

async function sourceContactSheet(items, filename) {
  const cellW = 360;
  const cellH = 270;
  const labelH = 82;
  const cols = 4;
  const gridRows = Math.ceil(items.length / cols);
  const width = cellW * cols;
  const height = Math.max(gridRows * (cellH + labelH), 220);
  const composites = [];
  const labelSvg = (text) => Buffer.from(`
    <svg width="${cellW}" height="${labelH}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#ffffff"/>
      <text x="12" y="26" font-family="Arial" font-size="17" fill="#111827">${text.replace(/&/g, "&amp;").replace(/</g, "&lt;")}</text>
    </svg>
  `);

  for (let i = 0; i < items.length; i += 1) {
    const item = items[i];
    const x = (i % cols) * cellW;
    const y = Math.floor(i / cols) * (cellH + labelH);
    const image = await sharp(item.source_path).resize(cellW, cellH, { fit: "contain", background: "#ffffff" }).webp().toBuffer();
    composites.push({ input: image, left: x, top: y });
    composites.push({ input: labelSvg(`${item.model_id} | ${item.route_base.split("/").pop()}`), left: x, top: y + cellH });
  }

  await sharp({ create: { width, height, channels: 3, background: "#ffffff" } })
    .composite(composites)
    .webp({ quality: 92 })
    .toFile(path.join(batchRoot, filename));
}

for (let offset = 0; offset < rows.length; offset += 20) {
  const chunk = rows.slice(offset, offset + 20);
  await sourceContactSheet(chunk, `source-contact-sheet-${String(offset / 20 + 1).padStart(2, "0")}.webp`);
}

console.log(JSON.stringify({
  remaining: rows.length,
  batchRoot,
  chunks: Math.ceil(rows.length / 20),
  first_chunk: rows.slice(0, 20).map((row) => row.model_id)
}, null, 2));
