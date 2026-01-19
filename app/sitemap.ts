import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://sayagroup.id", priority: 1 },
    { url: "https://sayagroup.id/about", priority: 0.9 },
    { url: "https://sayagroup.id/brands", priority: 0.9 },
    { url: "https://sayagroup.id/career", priority: 0.9 },
    { url: "https://sayagroup.id/media", priority: 0.8 },
    { url: "https://sayagroup.id/contact", priority: 0.8 },
  ];
}
