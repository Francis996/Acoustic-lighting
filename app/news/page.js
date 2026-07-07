import content from "../../content/siteContent.json";
import { createPageMetadata } from "../../lib/metadata";
import { NewsPage } from "../../components/pages/NewsPage";

const pathname = "/news";

export function generateMetadata() {
  return createPageMetadata({
    pathname,
    title: "Acoustic Lighting Industry News | FLOSEEK",
    description: "Read current lighting, acoustics and interior design industry news summarized for PET felt acoustic lighting buyers and B2B project teams.",
    images: [{ url: "/assets/img/home/solution-office-acoustic-lighting.webp" }]
  });
}

export default function Page() {
  return <NewsPage content={content} />;
}
