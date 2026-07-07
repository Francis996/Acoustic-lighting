import { ContactPage } from "../../components/pages/ContactPage";
import content from "../../content/siteContent.json";
import { createPageMetadata } from "../../lib/metadata";

export function generateMetadata() {
  return createPageMetadata({
    pathname: "/contact",
    title: content.pages.contact.seo.title,
    description: content.pages.contact.seo.description,
    images: [{ url: "/assets/img/home/banner.webp" }]
  });
}

export default function Page() {
  return <ContactPage content={content} />;
}
