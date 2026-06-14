import { ContactPage } from "../../components/pages/ContactPage";
import { getMessages } from "../../i18n/messages";
import { createMetadata } from "../../i18n/routing";

export async function generateMetadata() {
  const messages = await getMessages("en");
  return createMetadata({
    locale: "en",
    pathname: "/contact",
    title: messages.pages.contact.seo.title,
    description: messages.pages.contact.seo.description,
    images: [{ url: "https://www.kingornan.com/assets/img/home/banner.webp" }]
  });
}

export default async function Page() {
  const messages = await getMessages("en");
  return <ContactPage locale="en" messages={messages} currentPath="/contact" />;
}
