import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const sharp = require("/Users/Lenovo/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp");

const projectRoot = path.resolve(import.meta.dirname, "..");
const workspaceRoot = path.resolve(projectRoot, "../../..");
const archiveRoot = path.join(workspaceRoot, "产品素材_网站成品库");
const publicRoot = path.join(projectRoot, "public", "assets", "img", "products");
const models = ["KO-XYM-0024", "KO-XYM-0185", "KO-XYM-0127", "KO-XYM-0155", "KO-XYM-0085", "KO-XYM-0121"];

function existing(paths) {
  return paths.find((file) => fs.existsSync(file));
}

const report = [];

for (const model of models) {
  const slug = model.toLowerCase();
  const archiveProductDir = path.join(archiveRoot, model, "product_images");
  const publicProductDir = path.join(publicRoot, slug);
  const outputName = `${slug}-product-main-1600x1200.webp`;
  const archiveOutput = path.join(archiveProductDir, outputName);
  const publicOutput = path.join(publicProductDir, outputName);
  const source = existing([
    path.join(archiveProductDir, `${model}_product-main_01_web-ready.webp`),
    path.join(archiveProductDir, `${slug}-product-main-enhanced.webp`),
    path.join(archiveProductDir, `${slug}-product-main-1600.webp`)
  ]);

  if (!source) {
    report.push({ model, status: "missing source" });
    continue;
  }

  fs.mkdirSync(archiveProductDir, { recursive: true });
  fs.mkdirSync(publicProductDir, { recursive: true });

  const sourceMetadata = await sharp(source).metadata();
  await sharp(source)
    .resize(1600, 1200, {
      fit: "contain",
      background: { r: 246, g: 244, b: 240, alpha: 1 },
      withoutEnlargement: false
    })
    .webp({ quality: 92, effort: 6 })
    .toFile(archiveOutput);

  fs.copyFileSync(archiveOutput, publicOutput);
  const outputMetadata = await sharp(publicOutput).metadata();

  report.push({
    model,
    source,
    sourceSize: `${sourceMetadata.width}x${sourceMetadata.height}`,
    archiveOutput,
    publicOutput,
    outputSize: `${outputMetadata.width}x${outputMetadata.height}`,
    status: "created"
  });
}

const reportPath = path.join(workspaceRoot, "产品素材整理_台账", "missing_main_images_1600x1200_report.json");
fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify(report, null, 2));
