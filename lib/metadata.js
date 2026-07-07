export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://floseek.com";

export function absoluteUrl(pathname = "/") {
  if (pathname.startsWith("http://") || pathname.startsWith("https://")) {
    return pathname;
  }

  return new URL(pathname, siteUrl).toString();
}

export function createPageMetadata({ pathname, title, description, images = [] }) {
  const canonical = absoluteUrl(pathname);
  const normalizedImages = images.map((image) => ({
    ...image,
    url: absoluteUrl(image.url)
  }));

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "FLOSEEK Acoustic Lighting",
      type: "website",
      images: normalizedImages,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: normalizedImages.map((image) => image.url),
    },
  };
}
