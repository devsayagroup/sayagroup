// // import { MetadataRoute } from "next";

// // export default function sitemap(): MetadataRoute.Sitemap {
// //   return [
// //     { url: "https://sayagroup.id", priority: 1 },
// //     { url: "https://sayagroup.id/about", priority: 0.9 },
// //     { url: "https://sayagroup.id/brands", priority: 0.9 },
// //     { url: "https://sayagroup.id/career", priority: 0.9 },
// //     { url: "https://sayagroup.id/media", priority: 0.8 },
// //     { url: "https://sayagroup.id/contact", priority: 0.8 },
// //   ];
// // }

// import type { MetadataRoute } from "next";
// import { SITE } from "@/lib/seo/site";

// export default function sitemap(): MetadataRoute.Sitemap {
//   const now = new Date();

//   const routes: MetadataRoute.Sitemap = [
//     { url: `${SITE.url}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
//     { url: `${SITE.url}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
//     { url: `${SITE.url}/brands`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
//     { url: `${SITE.url}/brands/goasaya`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
//     { url: `${SITE.url}/brands/aromabiji`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
//     { url: `${SITE.url}/brands/one-percent-lounge`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
//     { url: `${SITE.url}/brands/nemusaya`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
//     { url: `${SITE.url}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
//   ];

//   return routes;
// }

import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sayagroup.id'
  
  const brands = ['goasaya', 'onepercent', 'aromabiji', 'nemusaya']
  
  const brandUrls = brands.map((slug) => ({
    url: `${baseUrl}/brands/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8, // High priority for child brands
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/brands`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9, // The parent "Brands" page is very important for sitelinks
    },
    {
      url: `${baseUrl}/career`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    ...brandUrls,
  ]
}