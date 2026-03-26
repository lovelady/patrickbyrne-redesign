export const SITE_URL = "https://patrickbyrne.com";
export const SITE_NAME = "Official Patrick M. Byrne Website";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/hero.webp`;

interface BuildMetaOptions {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: string;
}

export function buildMeta({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = "website",
}: BuildMetaOptions) {
  const url = `${SITE_URL}${path}`;

  return [
    { title },
    { name: "description", content: description },
    { tagName: "link", rel: "canonical", href: url },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:image", content: image },
    { property: "og:type", content: type },
    { property: "og:site_name", content: SITE_NAME },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
  ];
}
