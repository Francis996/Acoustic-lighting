import { FloorLampsPage } from "../../../components/pages/FloorLampsPage";
import content from "../../../content/siteContent.json";
import { createPageMetadata } from "../../../lib/metadata";

const pathname = "/products/acoustic-floor-lamps";

export function generateMetadata() {
  return createPageMetadata({
    pathname,
    title: "Acoustic Floor Lamps Manufacturer | PET Felt and Fabric Floor Lighting | FLOSEEK",
    description: "Source FLOSEEK Acoustic Floor Lamps for lounges, offices, hospitality and flexible interiors, including KO-XYM-0198, KO-XYM-0172, KO-XYM-0199 and KO-XYM-0197.",
    images: [{ url: "/assets/img/floor/ko-xym-0198-lounge-scene.png" }]
  });
}

export default function Page() {
  return <FloorLampsPage content={content} />;
}
