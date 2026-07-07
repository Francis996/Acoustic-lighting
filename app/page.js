import { HomePage } from "../components/pages/HomePage";
import content from "../content/siteContent.json";
import { createPageMetadata } from "../lib/metadata";

export function generateMetadata() {
  return createPageMetadata({
    pathname: "/",
    title: content.pages.home.seo.title,
    description: content.pages.home.seo.description,
    images: [{ url: "/assets/img/home/banner.webp" }]
  });
}

export default function Page() {
  return <HomePage content={content} />;
}
