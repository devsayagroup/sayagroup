import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/mdx'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sayagroup.id'
  
  // 1. Core Static Routes
  const staticRoutes = [
    { route: '', priority: 1, changeFrequency: 'weekly' },
    { route: '/brands', priority: 0.9, changeFrequency: 'weekly' },
    { route: '/media', priority: 0.9, changeFrequency: 'daily' }, // High frequency for active news hub
    { route: '/about', priority: 0.8, changeFrequency: 'monthly' },
    { route: '/career', priority: 0.5, changeFrequency: 'monthly' },
    { route: '/contact', priority: 0.5, changeFrequency: 'yearly' },
  ].map(({ route, priority, changeFrequency }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: changeFrequency as any,
    priority,
  }))
  
  // 2. SAYA GROUP Brand Pages (The Spokes)
  const brands = ['goasaya', 'onepercent', 'aromabiji', 'nemusaya', 'maha-karya-marmer-jakarta']
  const brandUrls = brands.map((slug) => ({
    url: `${baseUrl}/brands/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // 3. Dynamic MDX Media Articles (The Hub Content)
  const posts = getAllPosts()
  const mediaUrls = posts.map((post) => ({
    url: `${baseUrl}/media/${post.slug}`,
    // Tie the lastModified directly to your MDX frontmatter date
    lastModified: new Date(post.frontmatter.date), 
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...brandUrls, ...mediaUrls]
}