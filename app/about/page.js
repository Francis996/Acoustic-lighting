import { AboutPage } from "../../components/pages/AboutPage";
import { getMessages } from "../../i18n/messages";
import { createMetadata } from "../../i18n/routing";

const pathname = "/about";

export async function generateMetadata() {
  const messages = await getMessages("en");
  return createMetadata({
    locale: "en",
    pathname,
    title: messages.pages.about.seo.title,
    description: messages.pages.about.seo.description,
    images: [{ url: "https://www.kingornan.com/assets/img/company/alinna.png" }]
  });
}

export default async function Page() {
  const messages = await getMessages("en");
  return <AboutPage locale="en" messages={messages} currentPath={pathname} />;
}
