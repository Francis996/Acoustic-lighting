import { HomePage } from "../components/pages/HomePage";
import { getMessages } from "../i18n/messages";
import { createMetadata } from "../i18n/routing";

export async function generateMetadata() {
  const messages = await getMessages("en");
  return createMetadata({
    locale: "en",
    pathname: "/",
    title: messages.pages.home.seo.title,
    description: messages.pages.home.seo.description,
    images: [{ url: "https://www.kingornan.com/assets/img/home/banner.webp" }]
  });
}

export default async function Page() {
  const messages = await getMessages("en");
  return <HomePage locale="en" messages={messages} currentPath="/" />;
}
