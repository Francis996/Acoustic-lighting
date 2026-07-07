import { LinearLightsPage } from "../../../components/pages/LinearLightsPage";
import content from "../../../content/siteContent.json";
import { createPageMetadata } from "../../../lib/metadata";

const pathname = "/products/acoustic-linear-lights";

export function generateMetadata() {
  return createPageMetadata({
    pathname,
    title: "Acoustic Linear Lights Manufacturer | PET Felt Linear Office Lighting | FLOSEEK",
    description: "Source FLOSEEK Acoustic Linear Lights for offices, meeting rooms and education interiors, with KO model options, PET felt colors, LED optics and OEM/ODM customization.",
    images: [{ url: "/assets/img/linear/ko-xym-0164-office-scene.jpeg" }]
  });
}

export default function Page() {
  return <LinearLightsPage content={content} />;
}
