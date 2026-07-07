import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { productDetails } from "../content/productDetails.js";

const require = createRequire(import.meta.url);
const sharp = require("/Users/Lenovo/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp");

const projectRoot = path.resolve(import.meta.dirname, "..");
const workspaceRoot = path.resolve(projectRoot, "../../..");
const archiveRoot = path.join(workspaceRoot, "产品素材_网站成品库");
const pilotRoot = path.join(workspaceRoot, "产品素材整理_台账", "product-main-image-hd-batch", "all-other-models", "pilot");

function csvEscape(value) {
  const text = String(value ?? "");
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

const products = Object.values(productDetails)
  .filter((product) => product.model)
  .map((product) => {
    const model = product.model;
    const slug = model.toLowerCase();
    const aiPath = path.join(archiveRoot, model, "product_images", `${slug}-product-main-ai-redraw-1600x1200.webp`);
    const sourcePath = path.join(archiveRoot, model, "product_images", `${slug}-product-main-1600x1200.webp`);
    return {
      model_id: model,
      model_relative_path: model,
      route_base: product.routeBase,
      title: product.title,
      source_filename: `${slug}-product-main-1600x1200.webp`,
      source_path: sourcePath,
      has_ai_redraw: fs.existsSync(aiPath),
      source_exists: fs.existsSync(sourcePath)
    };
  })
  .filter((row) => !row.has_ai_redraw && row.source_exists)
  .sort((a, b) => a.model_id.localeCompare(b.model_id));

const pilot = products.slice(0, 20).map((row) => ({
  ...row,
  output_path: "",
  output_format: "",
  output_width: "",
  output_height: "",
  branding_detected_in_source: "unknown",
  branding_removed: "not_started",
  branding_review_status: "manual_review",
  branding_review_reason: "Pilot source selected. AI redraw not generated yet.",
  logo_residue_suspected: "unknown",
  functional_text_preserved: "not_verified",
  visual_consistency_status: "manual_review",
  manual_review_required: true,
  processing_status: "pilot_source_selected"
}));

fs.mkdirSync(pilotRoot, { recursive: true });
fs.writeFileSync(path.join(pilotRoot, "pilot-source-manifest.jsonl"), pilot.map((row) => JSON.stringify(row)).join("\n") + "\n");
const columns = Object.keys(pilot[0]);
fs.writeFileSync(
  path.join(pilotRoot, "pilot-source-report.csv"),
  [columns.join(","), ...pilot.map((row) => columns.map((column) => csvEscape(row[column])).join(","))].join("\n") + "\n"
);

async function sourceContactSheet(items) {
  const cellW = 360;
  const cellH = 270;
  const labelH = 82;
  const cols = 4;
  const rows = Math.ceil(items.length / cols);
  const width = cellW * cols;
  const height = rows * (cellH + labelH);
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
    .toFile(path.join(pilotRoot, "pilot-source-contact-sheet.webp"));
}

await sourceContactSheet(pilot);

console.log(JSON.stringify({
  total_remaining_with_sources: products.length,
  pilot_count: pilot.length,
  pilot_models: pilot.map((row) => row.model_id),
  pilotRoot,
  source_contact_sheet: path.join(pilotRoot, "pilot-source-contact-sheet.webp"),
  source_manifest: path.join(pilotRoot, "pilot-source-manifest.jsonl"),
  source_report: path.join(pilotRoot, "pilot-source-report.csv")
}, null, 2));
