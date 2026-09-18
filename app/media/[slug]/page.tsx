import { getPostBySlug } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import { components } from '@/components/mdx/components'
import Image from 'next/image'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  try {
    const resolvedParams = await params;
    const { frontmatter } = await getPostBySlug(resolvedParams.slug)
    
    return {
      title: frontmatter.metaTitle || `${frontmatter.title} | SAYA GROUP Media`,
      description: frontmatter.metaDescription || frontmatter.description,
      openGraph: {
        title: frontmatter.metaTitle || frontmatter.title,
        description: frontmatter.metaDescription || frontmatter.description,
        type: 'article',
        publishedTime: frontmatter.date,
        authors: [frontmatter.author],
        images: frontmatter.heroImage ? [frontmatter.heroImage] : [],
      }
    }
  } catch (e) {
    return {}
  }
}

export default async function MediaPostPage({ params }: { params: Promise<{ slug: string }> }) {
  let post;
  let resolvedParams;
  try {
    resolvedParams = await params;
    post = await getPostBySlug(resolvedParams.slug)
  } catch (e) {
    notFound()
  }

  // 1. Article Schema (AEO/GEO Optimization)
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.frontmatter.metaTitle || post.frontmatter.title,
    "description": post.frontmatter.metaDescription || post.frontmatter.description,
    "image": post.frontmatter.heroImage ? [post.frontmatter.heroImage] : [],
    "author": {
      "@type": "Organization",
      "name": post.frontmatter.author,
      "url": "https://sayagroup.id"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SAYA GROUP",
      "logo": {
        "@type": "ImageObject",
        "url": "https://sayagroup.id/logo.png"
      }
    },
    "datePublished": post.frontmatter.date,
    "mentions": post.frontmatter.spokeTarget ? [
      {
        "@type": "LocalBusiness",
        "name": post.frontmatter.spokeTarget
      }
    ] : []
  };

  // 2. Breadcrumb Schema (Site Structure SEO)
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://sayagroup.id"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Media",
        "item": "https://sayagroup.id/media"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.frontmatter.title,
        "item": `https://sayagroup.id/media/${resolvedParams.slug}`
      }
    ]
  };

  return (
    <>
      {/* Inject both schemas into the DOM */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema]) }}
      />
      
      <article className="w-full pb-32">
        {/* Header Section (Narrower for centered elegance) */}
        <header className="max-w-3xl mx-auto pt-24 px-6 md:px-0 text-center">
          
          {/* Visual Breadcrumbs */}
          <nav className="mb-10 text-xs font-medium uppercase tracking-widest text-neutral-400 flex justify-center items-center space-x-3">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <span>/</span>
            <Link href="/media" className="hover:text-black transition-colors">Media</Link>
            <span>/</span>
            <span className="text-black truncate max-w-[150px] md:max-w-xs">{post.frontmatter.title}</span>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter text-black leading-tight mb-8">
            {post.frontmatter.title}
          </h1>
          
          <div className="flex items-center justify-center space-x-4 mb-12">
            <p className="text-neutral-500 uppercase tracking-widest text-xs font-medium">
              {post.frontmatter.author}
            </p>
            <span className="w-1 h-1 rounded-full bg-neutral-300"></span>
            <p className="text-neutral-500 uppercase tracking-widest text-xs font-medium">
              {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                month: 'long', day: 'numeric', year: 'numeric'
              })}
            </p>
          </div>
        </header>

        {/* Dynamic Hero Image Injection (Wider for visual impact) */}
        {post.frontmatter.heroImage && (
          <div className="max-w-5xl mx-auto w-full px-4 md:px-6 mb-16">
            <Image 
              src={post.frontmatter.heroImage} 
              alt={post.frontmatter.heroAlt || post.frontmatter.title}
              width={1200}
              height={675}
              className="w-full object-cover aspect-video md:aspect-[21/9] rounded-none md:rounded-xl bg-neutral-100"
              priority
            />
          </div>
        )}
        
        {/* Reading Content Container (Narrow for optimal readability) */}
        <div className="max-w-3xl mx-auto px-6 md:px-0 font-sans">
          <MDXRemote source={post.content || ""} components={components} />
          
          {/* Editorial End Mark */}
          <div className="mt-20 flex justify-center">
            <span className="w-2 h-2 rounded-full bg-black"></span>
          </div>
        </div>
      </article>
    </>
  )
}