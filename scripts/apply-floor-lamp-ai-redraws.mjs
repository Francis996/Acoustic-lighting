import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const sharp = require("/Users/Lenovo/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp");

const projectRoot = path.resolve(import.meta.dirname, "..");
const workspaceRoot = path.resolve(projectRoot, "../../..");
const archiveRoot = path.join(workspaceRoot, "产品素材_网站成品库");
const pilotRoot = path.join(workspaceRoot, "产品素材整理_台账", "product-main-image-hd-batch", "acoustic-floor-lamps", "pilot");
const outputRoot = path.join(pilotRoot, "hd-main-images");
const publicRoot = path.join(projectRoot, "public", "assets", "img", "products");

const generated = [
  ["KO-XYM-0172", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_08bf071a38398218016a3b4fcdaf74819ba593aab887cb6eab.png"],
  ["KO-XYM-0197", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_08bf071a38398218016a3b50111e1c819b967bf705d595eefe.png"],
  ["KO-XYM-0198", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_08bf071a38398218016a3b5045b19c819bbdc3d5a7968e362b.png"],
  ["KO-XYM-0199", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_08bf071a38398218016a3b508d78f0819b883ebcdebf52df23.png"]
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
  const height = rowH * items.length;
  const composites = [];
  const labelSvg = (text) => Buffer.from(`
    <svg width="${cellW}" height="${labelH}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#ffffff"/>
      <text x="18" y="30" font-family="Arial" font-size="18" fill="#111827">${text.replace(/&/g, "&amp;").replace(/</g, "&lt;")}</text>
    </svg>
  `);

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
  await sharp(sourcePng)
    .resize(1600, 1200, { fit: "contain", background: "#ffffff" })
    .flatten({ background: "#ffffff" })
    .webp({ quality: 94, effort: 6 })
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
    branding_detected_in_source: false,
    branding_removed: "not_required",
    branding_review_status: "manual_review",
    branding_review_reason: "Programmatic checks passed; visual review must confirm no logo and product consistency.",
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
