import { notFound } from "next/navigation";
import content from "../../../content/siteContent.json";
import { ProjectDetailPage } from "../../../components/pages/ProjectDetailPage";
import { absoluteUrl, createPageMetadata } from "../../../lib/metadata";
import { buildProjects, getProjectBySlug } from "../../../lib/projectsData";

const projects = buildProjects(content);

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(projects, slug);

  if (!project) {
    return {};
  }

  return createPageMetadata({
    pathname: project.href,
    title: project.seoTitle,
    description: project.seoDescription,
    images: [{ url: absoluteUrl(project.image) }]
  });
}

export default async function Page({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(projects, slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailPage content={content} project={project} />;
}
