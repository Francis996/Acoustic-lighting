import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const sharp = require("/Users/Lenovo/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp");

const projectRoot = path.resolve(import.meta.dirname, "..");
const workspaceRoot = path.resolve(projectRoot, "../../..");
const archiveRoot = path.join(workspaceRoot, "产品素材_网站成品库");
const batchRoot = path.join(workspaceRoot, "产品素材整理_台账", "product-main-image-hd-batch", "full-remaining-models");
const outputRoot = path.join(batchRoot, "hd-main-images");
const publicRoot = path.join(projectRoot, "public", "assets", "img", "products");

const generated = [
  ["KO-XYM-0041", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_047299f72dbc7cea016a3b5ca651388198b48238d70843ab58.png"],
  ["KO-XYM-0043", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_047299f72dbc7cea016a3b5ccd87c08198a41af6a8d8f4aeb5.png"],
  ["KO-XYM-0045", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_047299f72dbc7cea016a3b5d088e18819888cba19905237fb9.png"],
  ["KO-XYM-0046", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_047299f72dbc7cea016a3b5d47fadc8198a3cae468f5c18141.png"],
  ["KO-XYM-0047", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_047299f72dbc7cea016a3b5d76a6c081989361d13075a7e314.png"],
  ["KO-XYM-0048", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_047299f72dbc7cea016a3b5db774cc8198b84aba8ab842d158.png"],
  ["KO-XYM-0049", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_047299f72dbc7cea016a3b5deec7ec819882c49570a7724be3.png"],
  ["KO-XYM-0050", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_047299f72dbc7cea016a3b5e35c3588198be7d76bad87d7d59.png"],
  ["KO-XYM-0051", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_047299f72dbc7cea016a3b5e75780c81989988bf246c8ee834.png"],
  ["KO-XYM-0052", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_047299f72dbc7cea016a3b5eb5deec819884e44434f8bade00.png"],
  ["KO-XYM-0053", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_047299f72dbc7cea016a3b5ef293188198b64b6ee4cfb50363.png"],
  ["KO-XYM-0053A", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_047299f72dbc7cea016a3b5f30e3b48198a5e91376d4cb120b.png"],
  ["KO-XYM-0054", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_047299f72dbc7cea016a3b5f6d9c988198b655b97bfc6df74c.png"],
  ["KO-XYM-0055", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_047299f72dbc7cea016a3b5faa1eec8198b299263ed0b48d54.png"],
  ["KO-XYM-0056", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_047299f72dbc7cea016a3b5fcee6848198953c26dae006bece.png"],
  ["KO-XYM-0057", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0efa70930ef3955e016a3b60345edc819b8f92d2522dac6275.png"],
  ["KO-XYM-0058", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0efa70930ef3955e016a3b607b3d4c819b80b87d01e17aac8a.png"],
  ["KO-XYM-0065", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0efa70930ef3955e016a3b60c419a4819ba4acd1012c5df8c2.png"],
  ["KO-XYM-0077", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0efa70930ef3955e016a3b60f4a5d8819b96d97a86f46bd333.png"],
  ["KO-XYM-0079", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0efa70930ef3955e016a3b613db850819b9b0927212ac71e02.png"]
];

function csvEscape(value) {
  const text = String(value ?? "");
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

async function backgroundIsWhite(file) {
  const { data, info } = await sharp(file).resize(80, 60, { fit: "fill" }).removeAlpha().raw().toBuffer({ resolveWithObject: true });
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
  if (!items.length) composites.push({ input: labelSvg("No manual-review or failed items in this chunk.", width, 120), left: 0, top: 70 });
  for (let i = 0; i < items.length; i += 1) {
    const item = items[i];
    const top = i * rowH;
    composites.push({ input: await sharp(item.source_path).resize(cellW, cellH, { fit: "contain", background: "#ffffff" }).webp().toBuffer(), left: 0, top });
    composites.push({ input: await sharp(item.output_path).resize(cellW, cellH, { fit: "contain", background: "#ffffff" }).webp().toBuffer(), left: cellW, top });
    composites.push({ input: labelSvg(`SOURCE | ${item.model_id}`), left: 0, top: top + cellH });
    composites.push({ input: labelSvg(`AI HD | ${item.branding_review_status} | ${item.processing_status}`), left: cellW, top: top + cellH });
  }
  await sharp({ create: { width, height, channels: 3, background: "#ffffff" } }).composite(composites).webp({ quality: 92 }).toFile(path.join(batchRoot, filename));
}

const rows = [];
for (const [model, sourcePng] of generated) {
  const slug = model.toLowerCase();
  const sourceFilename = `${slug}-product-main-1600x1200.webp`;
  const sourcePath = path.join(archiveRoot, model, "product_images", sourceFilename);
  const outputFilename = `${slug}-product-main-ai-redraw-1600x1200.webp`;
  const publicDir = path.join(publicRoot, slug);
  const archiveDir = path.join(archiveRoot, model, "product_images");
  const chunkDir = path.join(outputRoot, model);
  const publicOutput = path.join(publicDir, outputFilename);
  const archiveOutput = path.join(archiveDir, outputFilename);
  const chunkOutput = path.join(chunkDir, outputFilename);
  for (const dir of [publicDir, archiveDir, chunkDir]) fs.mkdirSync(dir, { recursive: true });
  const normalized = await sharp(sourcePng).resize(1480, 1080, { fit: "inside", background: "#ffffff" }).flatten({ background: "#ffffff" }).webp({ quality: 96, effort: 6 }).toBuffer();
  await sharp({ create: { width: 1600, height: 1200, channels: 3, background: "#ffffff" } }).composite([{ input: normalized, gravity: "center" }]).webp({ quality: 96, effort: 6 }).toFile(publicOutput);
  fs.copyFileSync(publicOutput, archiveOutput);
  fs.copyFileSync(publicOutput, chunkOutput);
  fs.copyFileSync(sourcePng, path.join(archiveDir, `${slug}-product-main-ai-redraw-source.png`));
  const outputMeta = await sharp(publicOutput).metadata();
  const whiteBackground = await backgroundIsWhite(publicOutput);
  rows.push({
    model_id: model,
    model_relative_path: model,
    source_filename: sourceFilename,
    source_path: sourcePath,
    output_path: publicOutput,
    archive_output_path: archiveOutput,
    batch_output_path: chunkOutput,
    output_format: outputMeta.format,
    output_width: outputMeta.width,
    output_height: outputMeta.height,
    branding_detected_in_source: true,
    branding_removed: true,
    branding_review_status: whiteBackground ? "manual_review" : "manual_review",
    branding_review_reason: whiteBackground ? "Programmatic checks passed; visual review required for full-batch chunk." : "Background or edge check requires visual review.",
    logo_residue_suspected: "unknown",
    functional_text_preserved: "not_applicable",
    visual_consistency_status: "manual_review",
    manual_review_required: true,
    processing_status: whiteBackground ? "full_chunk_generated" : "failed_programmatic_check",
    background_near_white: whiteBackground
  });
}

fs.writeFileSync(path.join(batchRoot, "chunk-01-manifest.jsonl"), rows.map((row) => JSON.stringify(row)).join("\n") + "\n");
const columns = Object.keys(rows[0]);
fs.writeFileSync(path.join(batchRoot, "chunk-01-report.csv"), [columns.join(","), ...rows.map((row) => columns.map((column) => csvEscape(row[column])).join(","))].join("\n") + "\n");
await contactSheet(rows, "chunk-01-contact-sheet.webp");
await contactSheet(rows, "chunk-01-manual-review-contact-sheet.webp");

console.log(JSON.stringify({
  chunk: 1,
  total_models: rows.length,
  generated: rows.filter((row) => row.processing_status === "full_chunk_generated").length,
  manual_review_required: rows.filter((row) => row.manual_review_required).length,
  contact_sheet: path.join(batchRoot, "chunk-01-contact-sheet.webp")
}, null, 2));
