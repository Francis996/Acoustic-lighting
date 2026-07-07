import content from "../../content/siteContent.json";
import { createPageMetadata } from "../../lib/metadata";
import { BlogPage } from "../../components/pages/BlogPage";

const pathname = "/blog";

export function generateMetadata() {
  return createPageMetadata({
    pathname,
    title: "Acoustic Lighting Blog | PET Felt Pendant Light Guides",
    description: "Read practical B2B guides for choosing PET felt acoustic pendant lights, acoustic lighting applications, sizes, colors, materials and project specifications.",
    images: [{ url: "/assets/img/home/hero-acoustic-pendant.webp" }]
  });
}

export default function Page() {
  return <BlogPage content={content} />;
}
