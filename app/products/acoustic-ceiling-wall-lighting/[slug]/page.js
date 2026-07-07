import { notFound } from "next/navigation";
import { ProductDetailPage } from "../../../../components/pages/ProductDetailPage";
import content from "../../../../content/siteContent.json";
import { getProductDetail, getProductDetailsByRoute } from "../../../../content/productDetails";
import { createPageMetadata } from "../../../../lib/metadata";

const basePath = "/products/acoustic-ceiling-wall-lighting";
const routeProducts = getProductDetailsByRoute(basePath);

export function generateStaticParams() {
  return Object.keys(routeProducts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = routeProducts[slug];

  if (!product) {
    return {};
  }

  return createPageMetadata({
    pathname: `${basePath}/${slug}`,
    title: product.seo.title,
    description: product.seo.description,
    images: [{ url: product.heroImage }]
  });
}

export default async function Page({ params }) {
  const { slug } = await params;
  const product = getProductDetail(slug);

  if (!product || product.routeBase !== basePath) {
    notFound();
  }

  return <ProductDetailPage content={content} product={product} />;
}
