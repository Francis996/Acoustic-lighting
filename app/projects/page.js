import content from "../../content/siteContent.json";
import { ProjectsPage } from "../../components/pages/ProjectsPage";
import { createPageMetadata } from "../../lib/metadata";

const pathname = "/projects";

export function generateMetadata() {
  return createPageMetadata({
    pathname,
    title: "Acoustic Lighting Projects | FLOSEEK Case References",
    description: "Browse FLOSEEK acoustic lighting project references across offices, education spaces, hospitality interiors and commercial applications.",
    images: [{ url: "/assets/img/applications/commercial-interiors/gallery-retail-ko-xym-0139-corrected.png" }]
  });
}

export default function Page() {
  return <ProjectsPage content={content} />;
}
