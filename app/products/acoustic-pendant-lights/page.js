import { CollectionPage } from "../../../components/pages/CollectionPage";
import { getMessages } from "../../../i18n/messages";
import { createMetadata } from "../../../i18n/routing";

const pathname = "/products/acoustic-pendant-lights";

export async function generateMetadata() {
  const messages = await getMessages("en");
  return createMetadata({
    locale: "en",
    pathname,
    title: messages.pages.collection.seo.title,
    description: messages.pages.collection.seo.description,
    images: [{ url: "https://www.kingornan.com/assets/img/pendant/image533.jpeg" }]
  });
}

export default async function Page() {
  const messages = await getMessages("en");
  return <CollectionPage locale="en" messages={messages} currentPath={pathname} />;
}
