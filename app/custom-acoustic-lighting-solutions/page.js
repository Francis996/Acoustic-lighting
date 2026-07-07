import { CustomAcousticLightingSolutionsPage } from "../../components/pages/CustomAcousticLightingSolutionsPage";
import content from "../../content/siteContent.json";
import { createPageMetadata } from "../../lib/metadata";

const pathname = "/custom-acoustic-lighting-solutions";

export function generateMetadata() {
  return createPageMetadata({
    pathname,
    title: "Custom Acoustic Lighting Solutions | OEM ODM PET Felt Lighting | FLOSEEK",
    description: "Develop custom PET felt acoustic lighting with FLOSEEK, including product form, felt color, LED specification, dimming, samples, packaging and bulk production support.",
    images: [{ url: "/assets/img/home/banner.webp" }]
  });
}

export default function Page() {
  return <CustomAcousticLightingSolutionsPage content={content} />;
}
