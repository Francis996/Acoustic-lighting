import { ProductsPage } from "../../components/pages/ProductsPage";
import content from "../../content/siteContent.json";
import { createPageMetadata } from "../../lib/metadata";

const pathname = "/products";

export function generateMetadata() {
  return createPageMetadata({
    pathname,
    title: "Products | PET Felt Acoustic Lighting and Acoustic Products | FLOSEEK",
    description: "Browse FLOSEEK acoustic pendant lights, acoustic linear lights, acoustic ceiling and wall lighting, acoustic floor lamps and PET felt acoustic product models.",
    images: [{ url: "/assets/img/products/ko-xym-0137/ko-xym-0137-product-main-ai-redraw-1600x1200.webp" }]
  });
}

export default function Page() {
  return <ProductsPage content={content} />;
}
