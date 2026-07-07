import { ProductDetailPage } from "../../../../components/pages/ProductDetailPage";
import content from "../../../../content/siteContent.json";
import { createPageMetadata } from "../../../../lib/metadata";

const pathname = "/products/acoustic-pendant-lights/ko-xym-0137-ring-family";

export function generateMetadata() {
  return createPageMetadata({
    pathname,
    title: content.pages.productDetail.seo.title,
    description: content.pages.productDetail.seo.description,
    images: [{ url: "/assets/img/products/ko-xym-0137/ko-xym-0137-hero-showcase-v2.webp" }]
  });
}

export default function Page() {
  return <ProductDetailPage content={content} />;
}
