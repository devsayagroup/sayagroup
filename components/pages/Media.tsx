"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

type Post = {
  slug: string;
  frontmatter: {
    title: string;
    description: string;
    date: string;
    author: string;
    spokeTarget?: string;
    heroImage?: string;
    heroAlt?: string;
  };
};

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function MediaGrid({ posts }: { posts: Post[] }) {
  if (!posts || posts.length === 0) {
    return (
      <div className="text-center text-neutral-500 py-12 font-light">
        No media releases available at this time.
      </div>
    );
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 w-full max-w-7xl mx-auto px-6"
    >
      {posts.map((post) => (
        <motion.div key={post.slug} variants={item} className="group h-full">
          <a 
            href={`/media/${post.slug}`} 
            className="flex flex-col h-full cursor-pointer"
          >
            {/* Image Container with Hover Scale */}
            {post.frontmatter.heroImage ? (
              <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden bg-neutral-100">
                <Image
                  src={post.frontmatter.heroImage}
                  alt={post.frontmatter.heroAlt || post.frontmatter.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>
            ) : (
              <div className="w-full aspect-[4/3] mb-6 bg-neutral-100 flex items-center justify-center">
                 <span className="text-neutral-300 text-sm uppercase tracking-widest">No Image</span>
              </div>
            )}

            {/* Content Container */}
            <div className="flex flex-col flex-grow">
              {post.frontmatter.spokeTarget && (
                <span className="text-xs font-medium uppercase tracking-widest text-neutral-500 mb-3 block">
                  {post.frontmatter.spokeTarget}
                </span>
              )}
              
              <h3 className="text-2xl md:text-3xl font-light tracking-tight text-black mb-3 group-hover:text-neutral-500 transition-colors duration-300 leading-snug">
                {post.frontmatter.title}
              </h3>
              
              <p className="text-neutral-600 text-base font-light leading-relaxed mb-6 flex-grow">
                {post.frontmatter.description}
              </p>
            </div>

            {/* Footer Metadata */}
            <div className="text-xs uppercase tracking-widest text-neutral-400 mt-4 border-t border-neutral-200 pt-4">
              {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
            </div>
          </a>
        </motion.div>
      ))}
    </motion.div>
  );
}