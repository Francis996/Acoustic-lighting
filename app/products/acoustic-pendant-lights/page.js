import { CollectionPage } from "../../../components/pages/CollectionPage";
import content from "../../../content/siteContent.json";
import { createPageMetadata } from "../../../lib/metadata";

const pathname = "/products/acoustic-pendant-lights";

export function generateMetadata() {
  return createPageMetadata({
    pathname,
    title: content.pages.collection.seo.title,
    description: content.pages.collection.seo.description,
    images: [{ url: "/assets/img/pendant/image533.jpeg" }]
  });
}

export default function Page() {
  return <CollectionPage content={content} />;
}
