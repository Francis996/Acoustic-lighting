import { notFound } from "next/navigation";
import { CollectionPage } from "../../../../components/pages/CollectionPage";
import { locales } from "../../../../i18n/config";
import { getMessages } from "../../../../i18n/messages";
import { createMetadata } from "../../../../i18n/routing";

const pathname = "/products/acoustic-pendant-lights";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!locales.includes(locale)) {
    return {};
  }

  const messages = await getMessages(locale);
  return createMetadata({
    locale,
    pathname,
    title: messages.pages.collection.seo.title,
    description: messages.pages.collection.seo.description,
    images: [{ url: "https://www.kingornan.com/assets/img/pendant/image533.jpeg" }]
  });
}

export default async function Page({ params }) {
  const { locale } = await params;
  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages(locale);
  return <CollectionPage locale={locale} messages={messages} currentPath={pathname} />;
}
