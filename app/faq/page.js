import { FaqPage } from "../../components/pages/FaqPage";
import content from "../../content/siteContent.json";
import { createPageMetadata } from "../../lib/metadata";

const pathname = "/faq";

export function generateMetadata() {
  return createPageMetadata({
    pathname,
    title: "Acoustic Lighting FAQ | MOQ, Payment, Lead Time, Samples and Project Support | FLOSEEK",
    description: "FAQ for acoustic lighting buyers covering MOQ from 1 piece, 7-day regular samples, 15-20 day custom samples, 30-day bulk lead time, payment, warranty and packaging.",
    images: [{ url: "/assets/img/home/solution-office-acoustic-lighting.webp" }]
  });
}

export default function Page() {
  return <FaqPage content={content} />;
}
