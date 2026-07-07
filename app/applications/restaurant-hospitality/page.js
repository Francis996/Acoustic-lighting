import { ApplicationCasesPage } from "../../../components/pages/ApplicationCasesPage";
import content from "../../../content/siteContent.json";
import { createPageMetadata } from "../../../lib/metadata";

const pathname = "/applications/restaurant-hospitality";
const page = content.pages.restaurantHospitality;

export function generateMetadata() {
  return createPageMetadata({
    pathname,
    title: page.seo.title,
    description: page.seo.description,
    images: [{ url: "/assets/img/applications/restaurant-hospitality/harbor-view-restaurant-ko-xym-0185-corrected.png" }]
  });
}

export default function Page() {
  return (
    <ApplicationCasesPage
      content={content}
      pageKey="restaurantHospitality"
      casesId="hospitality-cases"
      supportId="hospitality-project-support"
      inquirySubject="Restaurant & Hospitality Acoustic Lighting Inquiry"
      proofAriaLabel="Restaurant and hospitality acoustic lighting spaces"
      specAriaLabel="Restaurant and hospitality acoustic lighting specification notes"
    />
  );
}
