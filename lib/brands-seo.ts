// lib/brands-seo.ts
import { brands } from "@/lib/data-brands";

export function getBrandBySlug(slug: string) {
  return brands.find((b) => b.slug === slug);
}
