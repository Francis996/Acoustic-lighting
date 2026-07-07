import { absoluteUrl } from "../lib/metadata";
import { productDetails } from "../content/productDetails";
import content from "../content/siteContent.json";
import { buildProjects } from "../lib/projectsData";
import { newsArticles } from "../lib/newsData";

const productPaths = Object.entries(productDetails).map(
  ([slug, product]) => `${product.routeBase}/${slug}`
);
const projectPaths = buildProjects(content).map((project) => project.href);
const newsPaths = newsArticles.map((article) => article.href);

const paths = [
  "/",
  "/about",
  "/applications/office-meeting-rooms",
  "/applications/education-spaces",
  "/applications/restaurant-hospitality",
  "/applications/commercial-interiors",
  "/blog",
  "/blog/pet-felt-acoustic-lighting-cost",
  "/blog/acoustic-lighting-vs-acoustic-panels",
  "/blog/what-is-acoustic-pendant-lighting",
  "/blog/how-to-choose-pet-felt-acoustic-pendant-lights",
  "/blog/best-acoustic-pendant-lighting-open-offices-meeting-rooms",
  "/blog/how-to-compare-pet-felt-acoustic-lighting-manufacturers",
  "/contact",
  "/custom-acoustic-lighting-solutions",
  "/faq",
  "/news",
  ...newsPaths,
  "/projects",
  ...projectPaths,
  "/products",
  "/products/acoustic-ceiling-wall-lighting",
  "/products/acoustic-floor-lamps",
  "/products/acoustic-linear-lights",
  "/products/non-lighting-products",
  "/products/acoustic-pendant-lights",
  "/products/acoustic-pendant-lights/ko-xym-0137-ring-family",
  ...productPaths
];

export default function sitemap() {
  const now = new Date();

  return paths.map((pathname) => ({
    url: absoluteUrl(pathname),
    lastModified: now,
  }));
}
