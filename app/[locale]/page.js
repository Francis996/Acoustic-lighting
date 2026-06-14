import { notFound } from "next/navigation";
import { HomePage } from "../../components/pages/HomePage";
import { locales } from "../../i18n/config";
import { getMessages } from "../../i18n/messages";
import { createMetadata } from "../../i18n/routing";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!locales.includes(locale)) {
    return {};
  }

  const messages = await getMessages(locale);
  return createMetadata({
    locale,
    pathname: "/",
    title: messages.pages.home.seo.title,
    description: messages.pages.home.seo.description,
    images: [{ url: "https://www.kingornan.com/assets/img/home/banner.webp" }]
  });
}

export default async function Page({ params }) {
  const { locale } = await params;
  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages(locale);
  return <HomePage locale={locale} messages={messages} currentPath="/" />;
}
