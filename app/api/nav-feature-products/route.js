import { NextResponse } from "next/server";
import { productDetails } from "../../../content/productDetails";

const DAY_MS = 24 * 60 * 60 * 1000;
const PRODUCT_LABELS = {
  "/products/acoustic-pendant-lights": "Acoustic Pendant Light",
  "/products/acoustic-linear-lights": "Acoustic Linear Light",
  "/products/acoustic-ceiling-wall-lighting": "Acoustic Ceiling / Wall Light",
  "/products/acoustic-floor-lamps": "Acoustic Floor Lamp",
  "/products/non-lighting-products": "PET Felt Acoustic Product"
};

export const dynamic = "force-dynamic";

function shanghaiDateParts(now = new Date()) {
  return Object.fromEntries(
    new Intl.DateTimeFormat("en-CA", {
      timeZone: "Asia/Shanghai",
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    })
      .formatToParts(now)
      .filter((part) => part.type !== "literal")
      .map((part) => [part.type, part.value])
  );
}

function shanghaiDayIndex(now = new Date()) {
  const { year, month, day } = shanghaiDateParts(now);
  return Math.floor(Date.UTC(Number(year), Number(month) - 1, Number(day)) / DAY_MS);
}

function navProductTitle(product) {
  const title = product.title?.replace(/\s+Detail$/, "").trim();
  const model = product.model || product.code?.split("/")?.[0]?.trim();
  const label = PRODUCT_LABELS[product.routeBase] || product.productFamily || "Product";

  if (title && (!model || title.includes(model))) {
    return title;
  }

  return [model, label].filter(Boolean).join(" ");
}

function navProductImage(product) {
  return product.heroImage || product.image || product.scenes?.images?.[0]?.src || "";
}

function buildProductLinks() {
  return Object.entries(productDetails)
    .map(([routeSlug, product]) => {
      const href = product.routeBase ? `${product.routeBase}/${routeSlug}` : "";
      const title = navProductTitle(product);
      const image = navProductImage(product);

      return {
        href,
        title,
        model: product.model || product.code?.split("/")?.[0]?.trim() || title,
        family: product.productFamily || product.breadcrumb || "",
        image,
        imageAlt: product.heroImageAlt || `${title} product image`
      };
    })
    .filter((item) => item.href && item.title)
    .sort((first, second) =>
      `${first.model} ${first.title}`.localeCompare(`${second.model} ${second.title}`, "en", {
        numeric: true
      })
    );
}

function pickDailyProducts(products, now = new Date()) {
  if (products.length <= 3) {
    return products;
  }

  const start = (shanghaiDayIndex(now) * 3) % products.length;

  return Array.from({ length: 3 }, (_, index) => products[(start + index) % products.length]);
}

export function GET() {
  const products = buildProductLinks();
  const selectedProducts = pickDailyProducts(products);
  const dateParts = shanghaiDateParts();

  return NextResponse.json(
    {
      rotationDate: `${dateParts.year}-${dateParts.month}-${dateParts.day}`,
      productCount: products.length,
      products: selectedProducts
    },
    {
      headers: {
        "Cache-Control": "no-store"
      }
    }
  );
}
