import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo/site"; // Assuming this exports { url: "https://sayagroup.id" }

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Standard Search Engines (Google, Bing)
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        // Explicitly welcome AI/Answer Engines for GEO dominance
        userAgent: ["GPTBot", "ChatGPT-User", "PerplexityBot", "Claude-Web", "anthropic-ai"],
        allow: "/",
      }
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}