import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// Pointing to the correct 'media' folder
const rootDirectory = path.join(process.cwd(), 'content', 'media')

// 1. Define the strict TypeScript interfaces to fix the assignability error
export interface MediaFrontmatter {
  title: string;
  slug?: string;
  metaTitle?: string;
  metaDescription?: string;
  description: string; // Fallback
  date: string; // Mapping your publishedAt to date
  author: string;
  heroImage?: string;
  heroAlt?: string;
  spokeTarget?: string;
}

export interface MediaPost {
  slug: string;
  frontmatter: MediaFrontmatter;
  content?: string;
}

// 2. Restored getPostBySlug for the individual /media/[slug]/page.tsx route
export const getPostBySlug = async (slug: string): Promise<MediaPost> => {
  const realSlug = slug.replace(/\.mdx$/, '')
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`)
  
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContent)

  return { 
    frontmatter: data as MediaFrontmatter, 
    content, 
    slug: realSlug 
  }
}

// 3. Typed getAllPosts for the main /media index grid
export const getAllPosts = (): MediaPost[] => {
  // Ensure the directory exists to prevent build crashes if no posts exist yet
  if (!fs.existsSync(rootDirectory)) {
    return []
  }

  const files = fs.readdirSync(rootDirectory)
  
  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, '')
    const filePath = path.join(rootDirectory, file)
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContent)
    
    return {
      slug,
      frontmatter: data as MediaFrontmatter, // Force TypeScript to recognize the structure
    }
  })

  // Sort by newest first
  return posts.sort((a, b) => 
    new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  )
}

// 4. Helper for generating static paths later if needed
export const getAllPostSlugs = () => {
  if (!fs.existsSync(rootDirectory)) return []
  const files = fs.readdirSync(rootDirectory)
  return files.map((file) => file.replace(/\.mdx$/, ''))
}