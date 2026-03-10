import { useEffect } from "react";

type SeoProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
};

const SITE_NAME = "Chacko Restaurant";
const SITE_URL = "https://www.chacko.my";

function upsertMeta(
  selector: string,
  create: () => HTMLMetaElement,
  content: string
) {
  let el = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!el) {
    el = create();
    document.head.appendChild(el);
  }

  el.setAttribute("content", content);
}

function upsertLink(
  selector: string,
  create: () => HTMLLinkElement,
  href: string
) {
  let el = document.head.querySelector(selector) as HTMLLinkElement | null;

  if (!el) {
    el = create();
    document.head.appendChild(el);
  }

  el.setAttribute("href", href);
}

export default function Seo({
  title,
  description,
  path = "/",
  image = "/og-image.jpg",
  noIndex = false,
}: SeoProps) {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`;
    const canonicalUrl = `${SITE_URL}${path}`;
    const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

    document.title = fullTitle;

    upsertMeta(
      'meta[name="description"]',
      () => {
        const meta = document.createElement("meta");
        meta.name = "description";
        return meta;
      },
      description
    );

    upsertMeta(
      'meta[name="robots"]',
      () => {
        const meta = document.createElement("meta");
        meta.name = "robots";
        return meta;
      },
      noIndex ? "noindex, nofollow" : "index, follow"
    );

    upsertMeta(
      'meta[property="og:title"]',
      () => {
        const meta = document.createElement("meta");
        meta.setAttribute("property", "og:title");
        return meta;
      },
      fullTitle
    );

    upsertMeta(
      'meta[property="og:description"]',
      () => {
        const meta = document.createElement("meta");
        meta.setAttribute("property", "og:description");
        return meta;
      },
      description
    );

    upsertMeta(
      'meta[property="og:type"]',
      () => {
        const meta = document.createElement("meta");
        meta.setAttribute("property", "og:type");
        return meta;
      },
      "website"
    );

    upsertMeta(
      'meta[property="og:url"]',
      () => {
        const meta = document.createElement("meta");
        meta.setAttribute("property", "og:url");
        return meta;
      },
      canonicalUrl
    );

    upsertMeta(
      'meta[property="og:image"]',
      () => {
        const meta = document.createElement("meta");
        meta.setAttribute("property", "og:image");
        return meta;
      },
      imageUrl
    );

    upsertMeta(
      'meta[name="twitter:card"]',
      () => {
        const meta = document.createElement("meta");
        meta.name = "twitter:card";
        return meta;
      },
      "summary_large_image"
    );

    upsertMeta(
      'meta[name="twitter:title"]',
      () => {
        const meta = document.createElement("meta");
        meta.name = "twitter:title";
        return meta;
      },
      fullTitle
    );

    upsertMeta(
      'meta[name="twitter:description"]',
      () => {
        const meta = document.createElement("meta");
        meta.name = "twitter:description";
        return meta;
      },
      description
    );

    upsertMeta(
      'meta[name="twitter:image"]',
      () => {
        const meta = document.createElement("meta");
        meta.name = "twitter:image";
        return meta;
      },
      imageUrl
    );

    upsertLink(
      'link[rel="canonical"]',
      () => {
        const link = document.createElement("link");
        link.rel = "canonical";
        return link;
      },
      canonicalUrl
    );
  }, [title, description, path, image, noIndex]);

  return null;
}