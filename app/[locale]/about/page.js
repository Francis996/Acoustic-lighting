import { notFound } from "next/navigation";
import { AboutPage } from "../../../components/pages/AboutPage";
import { locales } from "../../../i18n/config";
import { getMessages } from "../../../i18n/messages";
import { createMetadata } from "../../../i18n/routing";

const pathname = "/about";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!locales.includes(locale)) {
    return {};
  }

  const messages = await getMessages(locale);
  return createMetadata({
    locale,
    pathname,
    title: messages.pages.about.seo.title,
    description: messages.pages.about.seo.description,
    images: [{ url: "https://www.kingornan.com/assets/img/company/alinna.png" }]
  });
}

export default async function Page({ params }) {
  const { locale } = await params;
  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages(locale);
  return <AboutPage locale={locale} messages={messages} currentPath={pathname} />;
}
