import { CeilingWallLightingPage } from "../../../components/pages/CeilingWallLightingPage";
import content from "../../../content/siteContent.json";
import { createPageMetadata } from "../../../lib/metadata";

const pathname = "/products/acoustic-ceiling-wall-lighting";

export function generateMetadata() {
  return createPageMetadata({
    pathname,
    title: "Acoustic Ceiling & Wall Lighting Manufacturer | PET Felt Ceiling and Wall Lights | FLOSEEK",
    description: "Source FLOSEEK Acoustic Ceiling & Wall Lighting models KO-XYM-0170, KO-XYM-0167 and KO-XYM-0215 for commercial interiors, with PET felt colors and OEM/ODM customization.",
    images: [{ url: "/assets/img/ceiling-wall-ko-xym-0170-catalog-scene.jpeg" }]
  });
}

export default function Page() {
  return <CeilingWallLightingPage content={content} />;
}
