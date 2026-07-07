import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const sharp = require("/Users/Lenovo/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp");

const projectRoot = path.resolve(import.meta.dirname, "..");
const workspaceRoot = path.resolve(projectRoot, "../../..");
const archiveRoot = path.join(workspaceRoot, "产品素材_网站成品库");
const pilotRoot = path.join(workspaceRoot, "产品素材整理_台账", "product-main-image-hd-batch", "acoustic-ceiling-wall-lighting", "pilot");
const outputRoot = path.join(pilotRoot, "hd-main-images");
const sourceModels = ["KO-XYM-0167", "KO-XYM-0170", "KO-XYM-0215"];
const reportRows = [];

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

  const samples = [];
  const pick = (x, y) => {
    const index = (y * info.width + x) * info.channels;
    samples.push([data[index], data[index + 1], data[index + 2]]);
  };

  for (const [x, y] of [
    [0, 0], [info.width - 1, 0], [0, info.height - 1], [info.width - 1, info.height - 1],
    [Math.floor(info.width / 2), 0], [Math.floor(info.width / 2), info.height - 1]
  ]) {
    pick(x, y);
  }

  return samples.every(([r, g, b]) => r >= 245 && g >= 245 && b >= 245);
}

async function createPilotImage(model) {
  const slug = model.toLowerCase();
  const sourceFilename = `${slug}-product-main-1600x1200.webp`;
  const sourcePath = path.join(archiveRoot, model, "product_images", sourceFilename);
  const outputDir = path.join(outputRoot, model);
  const outputPath = path.join(outputDir, sourceFilename);

  fs.mkdirSync(outputDir, { recursive: true });

  const sourceMeta = await sharp(sourcePath).metadata();
  await sharp(sourcePath, { failOn: "none" })
    .rotate()
    .resize(1600, 1200, {
      fit: "contain",
      background: { r: 255, g: 255, b: 255, alpha: 1 },
      withoutEnlargement: false
    })
    .flatten({ background: { r: 255, g: 255, b: 255 } })
    .modulate({ brightness: 1.012, saturation: 1.015 })
    .sharpen({ sigma: 0.75, m1: 0.8, m2: 1.6, x1: 1.4, y2: 8, y3: 14 })
    .webp({ quality: 94, effort: 6, smartSubsample: true })
    .toFile(outputPath);

  const outputMeta = await sharp(outputPath).metadata();
  const whiteBackground = await backgroundIsWhite(outputPath);

  return {
    model_id: model,
    model_relative_path: model,
    source_filename: sourceFilename,
    source_path: sourcePath,
    output_path: outputPath,
    output_format: outputMeta.format,
    output_width: outputMeta.width,
    output_height: outputMeta.height,
    source_width: sourceMeta.width,
    source_height: sourceMeta.height,
    branding_detected_in_source: "unknown",
    branding_removed: "not_verified",
    branding_review_status: "manual_review",
    branding_review_reason: "Programmatic checks passed for format, size and white background, but fail-closed visual logo review is still required before marking passed.",
    logo_residue_suspected: "unknown",
    functional_text_preserved: "not_applicable_or_not_verified",
    visual_consistency_status: "manual_review",
    manual_review_required: true,
    processing_status: outputMeta.width === 1600 && outputMeta.height === 1200 && outputMeta.format === "webp" && whiteBackground
      ? "pilot_generated"
      : "failed_programmatic_check",
    background_near_white: whiteBackground
  };
}

async function contactSheet(items, filename) {
  const cellW = 520;
  const cellH = 390;
  const labelH = 96;
  const rowH = cellH + labelH;
  const width = cellW * 2;
  const height = rowH * items.length;
  const composites = [];

  const svgLabel = (text, x, y, w, h) => Buffer.from(`
    <svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
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
    composites.push({
      input: svgLabel(`SOURCE | ${item.model_id} | ${item.source_filename}`, 0, 0, cellW, labelH),
      left: 0,
      top: top + cellH
    });
    composites.push({
      input: svgLabel(`HD OUTPUT | ${item.branding_review_status} | ${item.processing_status}`, 0, 0, cellW, labelH),
      left: cellW,
      top: top + cellH
    });
  }

  await sharp({
    create: {
      width,
      height,
      channels: 3,
      background: "#ffffff"
    }
  })
    .composite(composites)
    .webp({ quality: 92 })
    .toFile(path.join(pilotRoot, filename));
}

fs.mkdirSync(outputRoot, { recursive: true });
for (const model of sourceModels) {
  reportRows.push(await createPilotImage(model));
}

fs.writeFileSync(
  path.join(pilotRoot, "manifest.jsonl"),
  reportRows.map((row) => JSON.stringify(row)).join("\n") + "\n"
);

const columns = Object.keys(reportRows[0]);
fs.writeFileSync(
  path.join(pilotRoot, "report.csv"),
  [columns.join(","), ...reportRows.map((row) => columns.map((column) => csvEscape(row[column])).join(","))].join("\n") + "\n"
);

await contactSheet(reportRows, "contact-sheet.webp");
await contactSheet(
  reportRows.filter((row) => row.manual_review_required || row.processing_status.startsWith("failed")),
  "manual-review-contact-sheet.webp"
);

console.log(JSON.stringify({
  pilotRoot,
  total_models: reportRows.length,
  passed_confirmed_no_logo: 0,
  possible_remaining_logo: reportRows.length,
  obvious_logo_repair_artifacts: 0,
  product_structure_changes: 0,
  manual_review_required: reportRows.length,
  contact_sheet: path.join(pilotRoot, "contact-sheet.webp"),
  manual_review_contact_sheet: path.join(pilotRoot, "manual-review-contact-sheet.webp"),
  manifest: path.join(pilotRoot, "manifest.jsonl"),
  report: path.join(pilotRoot, "report.csv")
}, null, 2));
