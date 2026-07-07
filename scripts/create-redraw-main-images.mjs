import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const sharp = require("/Users/Lenovo/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp");

const projectRoot = path.resolve(import.meta.dirname, "..");
const workspaceRoot = path.resolve(projectRoot, "../../..");
const archiveRoot = path.join(workspaceRoot, "产品素材_网站成品库");
const publicRoot = path.join(projectRoot, "public", "assets", "img", "products");
const reportPath = path.join(workspaceRoot, "产品素材整理_台账", "main_image_redraw_1600x1200_report.json");

function listModels() {
  return fs
    .readdirSync(archiveRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && /^KO-XYM-/i.test(entry.name))
    .map((entry) => entry.name)
    .sort();
}

async function hasAlpha(file) {
  const metadata = await sharp(file).metadata();
  return Boolean(metadata.hasAlpha);
}

async function createRedraw(model) {
  const slug = model.toLowerCase();
  const archiveProductDir = path.join(archiveRoot, model, "product_images");
  const publicProductDir = path.join(publicRoot, slug);
  const source = path.join(archiveProductDir, `${slug}-product-main-1600x1200.webp`);
  const archiveOutput = path.join(archiveProductDir, `${slug}-product-main-redraw-1600x1200.webp`);
  const publicOutput = path.join(publicProductDir, `${slug}-product-main-redraw-1600x1200.webp`);

  if (!fs.existsSync(source)) {
    return { model, status: "missing source", source };
  }

  fs.mkdirSync(archiveProductDir, { recursive: true });
  fs.mkdirSync(publicProductDir, { recursive: true });

  const sourceMetadata = await sharp(source).metadata();
  const pipeline = sharp(source, { failOn: "none" })
    .rotate()
    .resize(1600, 1200, {
      fit: "contain",
      background: { r: 246, g: 244, b: 240, alpha: 1 },
      withoutEnlargement: false
    })
    .modulate({ brightness: 1.015, saturation: 1.02 })
    .sharpen({ sigma: 0.85, m1: 0.9, m2: 1.8, x1: 1.6, y2: 9, y3: 16 })
    .webp({ quality: 94, effort: 6, smartSubsample: true });

  if (await hasAlpha(source)) {
    pipeline.flatten({ background: { r: 246, g: 244, b: 240 } });
  }

  await pipeline.toFile(archiveOutput);
  fs.copyFileSync(archiveOutput, publicOutput);
  const outputMetadata = await sharp(publicOutput).metadata();

  return {
    model,
    source,
    sourceSize: `${sourceMetadata.width}x${sourceMetadata.height}`,
    archiveOutput,
    publicOutput,
    outputSize: `${outputMetadata.width}x${outputMetadata.height}`,
    status: "redraw-created"
  };
}

const report = [];
for (const model of listModels()) {
  report.push(await createRedraw(model));
}

fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify({
  total: report.length,
  created: report.filter((item) => item.status === "redraw-created").length,
  missing: report.filter((item) => item.status !== "redraw-created")
}, null, 2));
