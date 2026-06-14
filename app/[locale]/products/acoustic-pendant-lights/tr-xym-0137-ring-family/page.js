import { notFound } from "next/navigation";
import { ProductDetailPage } from "../../../../../components/pages/ProductDetailPage";
import { locales } from "../../../../../i18n/config";
import { getMessages } from "../../../../../i18n/messages";
import { createMetadata } from "../../../../../i18n/routing";

const pathname = "/products/acoustic-pendant-lights/tr-xym-0137-ring-family";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!locales.includes(locale)) {
    return {};
  }

  const messages = await getMessages(locale);
  return createMetadata({
    locale,
    pathname,
    title: messages.pages.productDetail.seo.title,
    description: messages.pages.productDetail.seo.description,
    images: [{ url: "https://www.kingornan.com/assets/img/products/tr-xym-0137/image304.jpeg" }]
  });
}

export default async function Page({ params }) {
  const { locale } = await params;
  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages(locale);
  return <ProductDetailPage locale={locale} messages={messages} currentPath={pathname} />;
}
