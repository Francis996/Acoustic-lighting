import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const sharp = require("/Users/Lenovo/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp");

const projectRoot = path.resolve(import.meta.dirname, "..");
const workspaceRoot = path.resolve(projectRoot, "../../..");
const archiveRoot = path.join(workspaceRoot, "产品素材_网站成品库");
const pilotRoot = path.join(workspaceRoot, "产品素材整理_台账", "product-main-image-hd-batch", "all-other-models", "pilot");
const outputRoot = path.join(pilotRoot, "hd-main-images");
const publicRoot = path.join(projectRoot, "public", "assets", "img", "products");

const generated = [
  ["KO-XYM-0001", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0a6dd74444aec23c016a3b5239f3f8819aaa9c3f32b6b8b34c.png"],
  ["KO-XYM-0006", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0a6dd74444aec23c016a3b527450ec819aa9ab99045cc860a2.png"],
  ["KO-XYM-0007", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0a6dd74444aec23c016a3b52b44d6c819ab7da96256bf443c9.png"],
  ["KO-XYM-0009", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0a6dd74444aec23c016a3b52ed75fc819a8f93de9dba52623a.png"],
  ["KO-XYM-0013", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0a6dd74444aec23c016a3b5326d580819a84acfd50fee1265f.png"],
  ["KO-XYM-0014", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0a6dd74444aec23c016a3b5368a960819a83837a6e117ed37b.png"],
  ["KO-XYM-0015", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0b5f51c073d33bd5016a3b540dc1a8819aa2424a820dbe1095.png"],
  ["KO-XYM-0017", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0b5f51c073d33bd5016a3b546158e8819aa4ef3b06a8cfeb33.png"],
  ["KO-XYM-0019", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0b5f51c073d33bd5016a3b54a3916c819a9dfff96166a3004f.png"],
  ["KO-XYM-0022", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0b5f51c073d33bd5016a3b54df79b8819a854129432e4a26c3.png"],
  ["KO-XYM-0024", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0b5f51c073d33bd5016a3b55235568819ab173113b614b9937.png"],
  ["KO-XYM-0025", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0b5f51c073d33bd5016a3b5569ab94819a825786e81421aa29.png"],
  ["KO-XYM-0026", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_057df703a6460350016a3b5a4908d8819bb87a620aca2ac20f.png"],
  ["KO-XYM-0028", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_057df703a6460350016a3b5a7ffd68819bbc16dfaebe72e5d1.png"],
  ["KO-XYM-0029", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0b5f51c073d33bd5016a3b560274e0819ab60dd28ebccff3cc.png"],
  ["KO-XYM-0030", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0b5f51c073d33bd5016a3b56372c68819a9eb85339c90d35fb.png"],
  ["KO-XYM-0031", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0b5f51c073d33bd5016a3b568c1cb8819a9250e61b2b9ef535.png"],
  ["KO-XYM-0032", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0b5f51c073d33bd5016a3b56b50f3c819a804800b5cc4a4acc.png"],
  ["KO-XYM-0033", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0b5f51c073d33bd5016a3b56ed2990819ab52ac083fd3b78fd.png"],
  ["KO-XYM-0037", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0b5f51c073d33bd5016a3b572dbde4819aad182b9672855906.png"]
];

function csvEscape(value) {
  const text = String(value ?? "");
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

async function backgroundIsWhite(file) {
  const { data, info } = await sharp(file)
    .resize(80, 60, { fit: "fill" })
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const points = [[0, 0], [79, 0], [0, 59], [79, 59], [40, 0], [40, 59]];
  return points.every(([x, y]) => {
    const index = (y * info.width + x) * info.channels;
    return data[index] >= 245 && data[index + 1] >= 245 && data[index + 2] >= 245;
  });
}

async function contactSheet(items, filename) {
  const cellW = 520;
  const cellH = 390;
  const labelH = 96;
  const rowH = cellH + labelH;
  const width = cellW * 2;
  const height = Math.max(rowH * Math.max(items.length, 1), 260);
  const composites = [];
  const labelSvg = (text, w = cellW, h = labelH) => Buffer.from(`
    <svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#ffffff"/>
      <text x="18" y="30" font-family="Arial" font-size="18" fill="#111827">${text.replace(/&/g, "&amp;").replace(/</g, "&lt;")}</text>
    </svg>
  `);

  if (!items.length) {
    composites.push({ input: labelSvg("No manual-review or failed items in this pilot.", width, 120), left: 0, top: 70 });
  }

  for (let i = 0; i < items.length; i += 1) {
    const item = items[i];
    const top = i * rowH;
    const sourceBuffer = await sharp(item.source_path).resize(cellW, cellH, { fit: "contain", background: "#ffffff" }).webp().toBuffer();
    const outputBuffer = await sharp(item.output_path).resize(cellW, cellH, { fit: "contain", background: "#ffffff" }).webp().toBuffer();
    composites.push({ input: sourceBuffer, left: 0, top });
    composites.push({ input: outputBuffer, left: cellW, top });
    composites.push({ input: labelSvg(`SOURCE | ${item.model_id} | ${item.source_filename}`), left: 0, top: top + cellH });
    composites.push({ input: labelSvg(`AI HD | ${item.branding_review_status} | ${item.processing_status}`), left: cellW, top: top + cellH });
  }

  await sharp({ create: { width, height, channels: 3, background: "#ffffff" } })
    .composite(composites)
    .webp({ quality: 92 })
    .toFile(path.join(pilotRoot, filename));
}

const rows = [];
fs.mkdirSync(outputRoot, { recursive: true });

for (const [model, sourcePng] of generated) {
  const slug = model.toLowerCase();
  const sourceFilename = `${slug}-product-main-1600x1200.webp`;
  const sourcePath = path.join(archiveRoot, model, "product_images", sourceFilename);
  const outputFilename = `${slug}-product-main-ai-redraw-1600x1200.webp`;
  const sourceCopyName = `${slug}-product-main-ai-redraw-source.png`;
  const publicDir = path.join(publicRoot, slug);
  const archiveDir = path.join(archiveRoot, model, "product_images");
  const pilotDir = path.join(outputRoot, model);
  const publicOutput = path.join(publicDir, outputFilename);
  const archiveOutput = path.join(archiveDir, outputFilename);
  const pilotOutput = path.join(pilotDir, outputFilename);

  for (const dir of [publicDir, archiveDir, pilotDir]) fs.mkdirSync(dir, { recursive: true });

  const sourceMeta = await sharp(sourcePath).metadata();
  const normalized = await sharp(sourcePng)
    .resize(1480, 1080, { fit: "inside", background: "#ffffff", withoutEnlargement: false })
    .flatten({ background: "#ffffff" })
    .webp({ quality: 96, effort: 6 })
    .toBuffer();
  await sharp({ create: { width: 1600, height: 1200, channels: 3, background: "#ffffff" } })
    .composite([{ input: normalized, gravity: "center" }])
    .webp({ quality: 96, effort: 6 })
    .toFile(publicOutput);
  fs.copyFileSync(publicOutput, archiveOutput);
  fs.copyFileSync(publicOutput, pilotOutput);
  fs.copyFileSync(sourcePng, path.join(archiveDir, sourceCopyName));

  const outputMeta = await sharp(publicOutput).metadata();
  const whiteBackground = await backgroundIsWhite(publicOutput);

  rows.push({
    model_id: model,
    model_relative_path: model,
    source_filename: sourceFilename,
    source_path: sourcePath,
    output_path: publicOutput,
    archive_output_path: archiveOutput,
    pilot_output_path: pilotOutput,
    output_format: outputMeta.format,
    output_width: outputMeta.width,
    output_height: outputMeta.height,
    source_width: sourceMeta.width,
    source_height: sourceMeta.height,
    branding_detected_in_source: true,
    branding_removed: "generated_no_logo_candidate",
    branding_review_status: "manual_review",
    branding_review_reason: "Programmatic checks passed; visual review must confirm no logo, no residue, and product consistency.",
    logo_residue_suspected: "unknown",
    functional_text_preserved: "not_applicable",
    visual_consistency_status: "manual_review",
    manual_review_required: true,
    processing_status: outputMeta.width === 1600 && outputMeta.height === 1200 && outputMeta.format === "webp" && whiteBackground
      ? "pilot_generated"
      : "failed_programmatic_check",
    background_near_white: whiteBackground
  });
}

fs.writeFileSync(path.join(pilotRoot, "manifest.jsonl"), rows.map((row) => JSON.stringify(row)).join("\n") + "\n");
const columns = Object.keys(rows[0]);
fs.writeFileSync(
  path.join(pilotRoot, "report.csv"),
  [columns.join(","), ...rows.map((row) => columns.map((column) => csvEscape(row[column])).join(","))].join("\n") + "\n"
);
await contactSheet(rows, "contact-sheet.webp");
await contactSheet(rows, "manual-review-contact-sheet.webp");

console.log(JSON.stringify({
  total_models: rows.length,
  generated: rows.filter((row) => row.processing_status === "pilot_generated").length,
  manual_review_required: rows.filter((row) => row.manual_review_required).length,
  pilotRoot,
  contact_sheet: path.join(pilotRoot, "contact-sheet.webp"),
  report: path.join(pilotRoot, "report.csv")
}, null, 2));
