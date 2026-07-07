import content from "../../../content/siteContent.json";
import { EducationSpacesPage } from "../../../components/pages/EducationSpacesPage";

const pathname = "/applications/education-spaces";
const page = content.pages.educationSpaces;

export const metadata = {
  title: page.seo.title,
  description: page.seo.description,
  alternates: {
    canonical: pathname
  },
  openGraph: {
    title: page.seo.title,
    description: page.seo.description,
    url: pathname,
    images: [{ url: "/assets/img/applications/education-spaces/classroom-ko-xym-0164.png" }]
  }
};

export default function Page() {
  return <EducationSpacesPage content={content} />;
}
