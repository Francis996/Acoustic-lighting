import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const sharp = require("/Users/Lenovo/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp");

const chunks = {
  "02": [
    ["KO-XYM-0085", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0e6853bfecac6f5d016a3b623653f4819a9faa1dbe9da0f5ec.png"],
    ["KO-XYM-0087", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0e6853bfecac6f5d016a3b627df4c0819a8290cdfd8f6e37eb.png"],
    ["KO-XYM-0088", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0e6853bfecac6f5d016a3b62b2b54c819ab9e1ad8102294703.png"],
    ["KO-XYM-0090", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0e6853bfecac6f5d016a3b62e41250819a9f93275d62832b85.png"],
    ["KO-XYM-0093", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0e6853bfecac6f5d016a3b6327fcf0819a958fa62de6a379c7.png"],
    ["KO-XYM-0099", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0e6853bfecac6f5d016a3b636f1b1c819a967808ef39d29b1b.png"],
    ["KO-XYM-0102", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0e6853bfecac6f5d016a3b63b798e0819ab53b2696f7f3844c.png"],
    ["KO-XYM-0107", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0e6853bfecac6f5d016a3b63eb8c38819ab4587a3e08ed1610.png"],
    ["KO-XYM-0112", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0e6853bfecac6f5d016a3b6438795c819a8193798c1d1ce535.png"],
    ["KO-XYM-0118", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0e6853bfecac6f5d016a3b647cba78819a8b03fe391e4d3669.png"],
    ["KO-XYM-0121", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0e6853bfecac6f5d016a3b64c69f60819aa9f486f24073069e.png"],
    ["KO-XYM-0122", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0e6853bfecac6f5d016a3b6524d11c819aab007c02a3a7e157.png"],
    ["KO-XYM-0123", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_062b3c74a7f81c21016a3b65c56df8819abb1ab423d0ba0e74.png"],
    ["KO-XYM-0125", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_062b3c74a7f81c21016a3b65ff0b08819aafdb10af83ea34c1.png"],
    ["KO-XYM-0126", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0edbc5af6c0c181e016a3b7c3d531c819bba927bc2788dd7e6.png"],
    ["KO-XYM-0127", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0edbc5af6c0c181e016a3b7c772cb0819b8040a09d185c24d0.png"],
    ["KO-XYM-0128", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0edbc5af6c0c181e016a3b7cbef924819b93c4e022726184c2.png"],
    ["KO-XYM-0129", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0edbc5af6c0c181e016a3b7d1ad74c819b8639ac2b2e724891.png"],
    ["KO-XYM-0130", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0edbc5af6c0c181e016a3b7d66a668819b815a8f4b6bd86f6e.png"],
    ["KO-XYM-0131", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0edbc5af6c0c181e016a3b7da4ce04819bafac83a2a25b3a74.png"]
  ],
  "03": [
    ["KO-XYM-0132", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_03f76b4246da2ae1016a3b7f1e20b881999d778ec605ee4d39.png"],
    ["KO-XYM-0133", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_03f76b4246da2ae1016a3b7f8212d0819994ff568ae6e32497.png"],
    ["KO-XYM-0134", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_03f76b4246da2ae1016a3b7fe38a808199a1107f2ea7869f64.png"],
    ["KO-XYM-0135", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_03f76b4246da2ae1016a3b803ba3388199bd07ee43b7828377.png"],
    ["KO-XYM-0136", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_03f76b4246da2ae1016a3b808c046c8199b7ca06f54a396f6e.png"],
    ["KO-XYM-0137", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_03f76b4246da2ae1016a3b80dff16881998e7c3249283b5d9b.png"],
    ["KO-XYM-0138", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_03f76b4246da2ae1016a3b813e71e08199a85d125b2e1c5150.png"],
    ["KO-XYM-0139", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_03f76b4246da2ae1016a3b819c06d48199b2d4657119eb8e04.png"],
    ["KO-XYM-0140", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_03f76b4246da2ae1016a3b81fa517c8199ad9bef5f5d4e1387.png"],
    ["KO-XYM-0141", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_01bfd76afdbd105a016a3b82b2e6a8819895ad5e08029a7cc9.png"],
    ["KO-XYM-0142", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_01bfd76afdbd105a016a3b8303b5148198b7748dc03ec25542.png"],
    ["KO-XYM-0143", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_01bfd76afdbd105a016a3b83611f848198ad77a45fcd593147.png"],
    ["KO-XYM-0144", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_01bfd76afdbd105a016a3b83c4d46c819883cfc87bf8af6466.png"],
    ["KO-XYM-0145", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_01bfd76afdbd105a016a3b84190f148198a1e5a88dc5207521.png"],
    ["KO-XYM-0146", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_01bfd76afdbd105a016a3b84551d18819897584d64988d2614.png"],
    ["KO-XYM-0147", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_01bfd76afdbd105a016a3b84cb37a88198a07261a8b2ab60d3.png"],
    ["KO-XYM-0148", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_01bfd76afdbd105a016a3b8526f4b081988d98ba8e0601d905.png"],
    ["KO-XYM-0150", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_01bfd76afdbd105a016a3b858510f48198b8cf874f988ace0d.png"],
    ["KO-XYM-0154", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_086bc944d99e0d97016a3b8642a768819abfe88a073c92abe6.png"],
    ["KO-XYM-0155", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_086bc944d99e0d97016a3b86b37718819a860456be91a9039f.png"]
  ],
  "04": [
    ["KO-XYM-0156", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0a6bd956cedd64a4016a3b891ae588819a93a8c1ce1100da72.png"],
    ["KO-XYM-0158", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0a6bd956cedd64a4016a3b89809c3c819a88542bff0bb26575.png"],
    ["KO-XYM-0159", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0a6bd956cedd64a4016a3b89ee9dec819abcadc3d28d60e6f8.png"],
    ["KO-XYM-0161", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0a6bd956cedd64a4016a3b8a546f28819a8952a10b2f09d15d.png"],
    ["KO-XYM-0162", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0a6bd956cedd64a4016a3b8ad118b8819abb81320d7c73142c.png"],
    ["KO-XYM-0164", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0a6bd956cedd64a4016a3b8b319178819a8674250caed85573.png"],
    ["KO-XYM-0165", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0a6bd956cedd64a4016a3b8b88406c819a83a0fe09e77f20b9.png"],
    ["KO-XYM-0166", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0a6bd956cedd64a4016a3b8bcab3d4819a8d01f07296772ca0.png"],
    ["KO-XYM-0169", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0084d73755644fd5016a3b8cbfa0cc819ba4697af12afa41e0.png"],
    ["KO-XYM-0170", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0084d73755644fd5016a3b8d0ad2f4819ba7aa2eda53c08edf.png"],
    ["KO-XYM-0178", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0084d73755644fd5016a3b8d887be0819ba94d868fd5e5ae57.png"],
    ["KO-XYM-0180", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0084d73755644fd5016a3b8de943bc819b9f57a73c38cddf2f.png"],
    ["KO-XYM-0182", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0084d73755644fd5016a3b8e51b5d0819ba4b652fd56b50e56.png"],
    ["KO-XYM-0184", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0084d73755644fd5016a3b8ea8fed0819ba11b48e2b003b2c4.png"],
    ["KO-XYM-0185", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0084d73755644fd5016a3b8f1f49f0819bb2eb3f117f0f7da0.png"],
    ["KO-XYM-0186", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_07aae6a714a0b878016a3b904414d88198b8966b9a169f16a2.png"],
    ["KO-XYM-0187", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_07aae6a714a0b878016a3b90a690b0819880520c7de998637c.png"],
    ["KO-XYM-0188", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_07aae6a714a0b878016a3b911f495881988ca8134da1d7c55d.png"],
    ["KO-XYM-0189", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_07aae6a714a0b878016a3b919a15c081989ae2776d031c9380.png"],
    ["KO-XYM-0190", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_07aae6a714a0b878016a3b920104848198affc3b2b843ed398.png"]
  ],
  "05": [
    ["KO-XYM-0192", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0512d368851d7bc7016a3b94dea0d0819a88da652b49315473.png"],
    ["KO-XYM-0193", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0512d368851d7bc7016a3b95267d4c819a8142150972aa8dff.png"],
    ["KO-XYM-0194", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0512d368851d7bc7016a3b958fe524819ab7c8da78ef2db5b7.png"],
    ["KO-XYM-0195", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0512d368851d7bc7016a3b95ee3b80819ab9a0485118246e69.png"],
    ["KO-XYM-0196", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0512d368851d7bc7016a3b96591e74819aaea233b9610b4ab9.png"],
    ["KO-XYM-0200", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0512d368851d7bc7016a3b96b62178819aabf50ad0056b25b9.png"],
    ["KO-XYM-0201", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0512d368851d7bc7016a3b970d32a8819a80336fdae2a0bf71.png"],
    ["KO-XYM-0202", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_0512d368851d7bc7016a3b977a2c94819ab5437ce217cf65b6.png"],
    ["KO-XYM-0203", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_06143471ad2de160016a3b98899388819a92d082090cd9552a.png"],
    ["KO-XYM-0205", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_06143471ad2de160016a3b98d72234819a9dd5a3b52954b6b4.png"],
    ["KO-XYM-0206", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_06143471ad2de160016a3b995767fc819ab1522b9f5780ba2d.png"],
    ["KO-XYM-0209", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_06143471ad2de160016a3b99a8f958819a9d189a639463c11a.png"],
    ["KO-XYM-0210", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_06143471ad2de160016a3b9a150a38819a9547175019c51055.png"],
    ["KO-XYM-0210B", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_06143471ad2de160016a3b9a720380819abfb9f96be0b19780.png"],
    ["KO-XYM-0211", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_06143471ad2de160016a3b9ad9fdfc819a88406db2edeb6f2d.png"],
    ["KO-XYM-0212", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_091dd3dc35a1287d016a3b9cb0b9b48193be3afe197525d01e.png"],
    ["KO-XYM-0213", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_091dd3dc35a1287d016a3b9d28b8688193bfc82afd001fb4cd.png"],
    ["KO-XYM-0215", "/Users/Lenovo/.codex/generated_images/019ef569-948e-7aa1-851a-753b974ee659/ig_091dd3dc35a1287d016a3b9d790e588193a7408ff2a1a85b2f.png"]
  ]
};

const chunkId = process.argv[2];
const generated = chunks[chunkId];
if (!generated) throw new Error(`Unknown chunk ${chunkId}`);

const projectRoot = path.resolve(import.meta.dirname, "..");
const workspaceRoot = path.resolve(projectRoot, "../../..");
const archiveRoot = path.join(workspaceRoot, "产品素材_网站成品库");
const batchRoot = path.join(workspaceRoot, "产品素材整理_台账", "product-main-image-hd-batch", "full-remaining-models");
const outputRoot = path.join(batchRoot, "hd-main-images");
const publicRoot = path.join(projectRoot, "public", "assets", "img", "products");

function csvEscape(value) {
  const text = String(value ?? "");
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

async function backgroundIsWhite(file) {
  const { data, info } = await sharp(file).resize(80, 60, { fit: "fill" }).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  return [[0, 0], [79, 0], [0, 59], [79, 59], [40, 0], [40, 59]].every(([x, y]) => {
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
    branding_review_status: "manual_review",
    branding_review_reason: whiteBackground ? "Programmatic checks passed; visual review required for full-batch chunk." : "Background or edge check requires visual review.",
    logo_residue_suspected: "unknown",
    functional_text_preserved: "not_applicable",
    visual_consistency_status: "manual_review",
    manual_review_required: true,
    processing_status: whiteBackground ? "full_chunk_generated" : "failed_programmatic_check",
    background_near_white: whiteBackground
  });
}

fs.writeFileSync(path.join(batchRoot, `chunk-${chunkId}-manifest.jsonl`), rows.map((row) => JSON.stringify(row)).join("\n") + "\n");
const columns = Object.keys(rows[0]);
fs.writeFileSync(path.join(batchRoot, `chunk-${chunkId}-report.csv`), [columns.join(","), ...rows.map((row) => columns.map((column) => csvEscape(row[column])).join(","))].join("\n") + "\n");
await contactSheet(rows, `chunk-${chunkId}-contact-sheet.webp`);
await contactSheet(rows, `chunk-${chunkId}-manual-review-contact-sheet.webp`);

console.log(JSON.stringify({
  chunk: chunkId,
  total_models: rows.length,
  generated: rows.filter((row) => row.processing_status === "full_chunk_generated").length,
  manual_review_required: rows.filter((row) => row.manual_review_required).length,
  contact_sheet: path.join(batchRoot, `chunk-${chunkId}-contact-sheet.webp`)
}, null, 2));
