import { AboutPage } from "../../components/pages/AboutPage";
import content from "../../content/siteContent.json";
import { createPageMetadata } from "../../lib/metadata";

const pathname = "/about";

export function generateMetadata() {
  return createPageMetadata({
    pathname,
    title: content.pages.about.seo.title,
    description: content.pages.about.seo.description,
    images: [{ url: "/assets/img/company/alinna.png" }]
  });
}

export default function Page() {
  return <AboutPage content={content} />;
}
