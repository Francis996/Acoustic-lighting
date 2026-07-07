import { ApplicationCasesPage } from "../../../components/pages/ApplicationCasesPage";
import content from "../../../content/siteContent.json";
import { createPageMetadata } from "../../../lib/metadata";

const pathname = "/applications/commercial-interiors";
const page = content.pages.commercialInteriors;

export function generateMetadata() {
  return createPageMetadata({
    pathname,
    title: page.seo.title,
    description: page.seo.description,
    images: [{ url: "/assets/img/applications/commercial-interiors/gallery-retail-ko-xym-0139-corrected.png" }]
  });
}

export default function Page() {
  return (
    <ApplicationCasesPage
      content={content}
      pageKey="commercialInteriors"
      casesId="commercial-cases"
      supportId="commercial-project-support"
      inquirySubject="Commercial Interiors Acoustic Lighting Inquiry"
      proofAriaLabel="Commercial interiors acoustic lighting spaces"
      specAriaLabel="Commercial interiors acoustic lighting specification notes"
    />
  );
}
