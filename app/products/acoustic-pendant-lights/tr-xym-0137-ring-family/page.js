import { ProductDetailPage } from "../../../../components/pages/ProductDetailPage";
import { getMessages } from "../../../../i18n/messages";
import { createMetadata } from "../../../../i18n/routing";

const pathname = "/products/acoustic-pendant-lights/tr-xym-0137-ring-family";

export async function generateMetadata() {
  const messages = await getMessages("en");
  return createMetadata({
    locale: "en",
    pathname,
    title: messages.pages.productDetail.seo.title,
    description: messages.pages.productDetail.seo.description,
    images: [{ url: "https://www.kingornan.com/assets/img/products/tr-xym-0137/image304.jpeg" }]
  });
}

export default async function Page() {
  const messages = await getMessages("en");
  return <ProductDetailPage locale="en" messages={messages} currentPath={pathname} />;
}
