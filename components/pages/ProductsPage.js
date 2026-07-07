import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import { ProductsPageClient } from "./ProductsPageClient";
import { productDetails } from "../../content/productDetails";

const categoryConfig = [
  {
    title: "Acoustic Pendant Lights",
    route: "/products/acoustic-pendant-lights",
    text: "Suspended PET felt acoustic lighting for offices, meeting rooms, hospitality and commercial interiors.",
    image: "/assets/img/products/ko-xym-0186/ko-xym-0186-product-main-ai-redraw-1600x1200.webp",
    filterImage: "/assets/img/products/ko-xym-0048/ko-xym-0048-product-main-ai-redraw-1600x1200.webp"
  },
  {
    title: "Acoustic Linear Lights",
    route: "/products/acoustic-linear-lights",
    text: "Linear acoustic luminaires for workstation rows, classrooms, boardrooms and focused work zones.",
    image: "/assets/img/products/ko-xym-0162/ko-xym-0162-product-main-ai-redraw-1600x1200.webp",
    filterImage: "/assets/img/products/ko-xym-0090/ko-xym-0090-product-main-ai-redraw-1600x1200.webp"
  },
  {
    title: "Acoustic Ceiling & Wall Lighting",
    route: "/products/acoustic-ceiling-wall-lighting",
    text: "Ceiling and wall mounted acoustic lights for reception areas, feature zones and commercial rooms.",
    image: "/assets/img/products/ko-xym-0170/ko-xym-0170-product-main-ai-redraw-1600x1200.webp",
    filterImage: "/assets/img/products/ko-xym-0167/ko-xym-0167-product-main-ai-redraw-1600x1200.webp"
  },
  {
    title: "Acoustic Floor Lamps",
    route: "/products/acoustic-floor-lamps",
    text: "Freestanding acoustic lamps for lounges, breakout areas and interiors where ceiling work is limited.",
    image: "/assets/img/products/ko-xym-0197/ko-xym-0197-product-main-ai-redraw-1600x1200.webp",
    filterImage: "/assets/img/products/ko-xym-0199/ko-xym-0199-product-main-ai-redraw-1600x1200.webp"
  },
  {
    title: "Non-lighting Products",
    route: "/products/non-lighting-products",
    text: "PET felt acoustic product models that support non-lighting acoustic treatment and project comparison.",
    image: "/assets/img/linear/felt-material-stack.webp",
    filterImage: "/assets/img/products/ko-xym-0202/ko-xym-0202-product-main-ai-redraw-1600x1200.webp"
  }
];

function productHref(slug, product) {
  return `${product.routeBase}/${slug}`;
}

function sortProducts(entries) {
  return entries.sort(([, first], [, second]) => {
    const firstKey = first.model || first.title;
    const secondKey = second.model || second.title;
    return firstKey.localeCompare(secondKey, "en", { numeric: true });
  });
}

function getCategoryProducts(route) {
  return sortProducts(
    Object.entries(productDetails).filter(([, product]) => product.routeBase === route)
  );
}

export function ProductsPage({ content }) {
  const categories = categoryConfig.map((category) => ({
    ...category,
    productCount: getCategoryProducts(category.route).length
  }));
  const allProducts = categoryConfig.flatMap((category) =>
    getCategoryProducts(category.route).map(([slug, product]) => ({
      slug,
      href: productHref(slug, product),
      model: product.model || product.title,
      title: product.title,
      heroImage: product.heroImage,
      heroImageAlt: product.heroImageAlt || product.title,
      categoryTitle: category.title,
      categoryRoute: category.route
    }))
  );

  return (
    <>
      <SiteHeader content={content} ctaHref="/contact" />
      <ProductsPageClient categories={categories} allProducts={allProducts} />
      <SiteFooter content={content} />
    </>
  );
}
