// lib/seo/jsonld.ts
import { SITE, BRANDS } from "./site";

export function sayagroupOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/logo/logo.png`, // ✅ put in /public/logo/logo.png
    description:
      "SAYA Group is a holding company for hospitality and lifestyle brands including GoaSaya, Aroma Biji, One Percent Lounge, and NemuSaya.",
    sameAs: [
      "https://www.instagram.com/sayagroup", // ✅ your IG (update)
    ],
    subOrganization: BRANDS.map((b) => ({
      "@type": "Organization",
      name: b.name,
      url: b.url,
      sameAs: b.instagram ? [b.instagram] : [],
      parentOrganization: {
        "@type": "Organization",
        "@id": `${SITE.url}/#organization`,
      },
    })),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    publisher: { "@id": `${SITE.url}/#organization` },
  };
}

export function brandsItemListJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "SAYA Group Brands",
    itemListElement: BRANDS.map((b, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: b.name,
      url: b.url,
    })),
  };
}