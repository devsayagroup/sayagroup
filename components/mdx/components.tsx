import Link from 'next/link'
import Image from 'next/image'

export const components = {
  h2: (props: any) => (
    <h2 className="text-3xl md:text-4xl font-light tracking-tight mt-20 mb-8 text-black border-b border-neutral-200 pb-4" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="text-2xl font-medium tracking-wide mt-12 mb-4 text-black uppercase text-sm" {...props} />
  ),
  p: (props: any) => (
    <p className="text-neutral-800 leading-relaxed mb-8 text-lg md:text-xl font-light" {...props} />
  ),
  ul: (props: any) => (
    <ul className="list-none mb-12 space-y-4 text-neutral-800 text-lg md:text-xl font-light" {...props} />
  ),
  li: (props: any) => (
    <li className="relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-neutral-400" {...props} />
  ),
  strong: (props: any) => (
    <strong className="font-semibold text-black" {...props} />
  ),
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-black pl-8 md:pl-12 py-4 my-16 italic text-2xl md:text-3xl font-light text-neutral-600 leading-snug" {...props} />
  ),
  a: ({ href, children, ...props }: any) => {
    const isInternal = href && href.startsWith('/')
    const classes = "font-semibold text-black underline decoration-1 underline-offset-4 hover:text-neutral-500 transition-colors duration-300"
    
    if (isInternal) {
      return <Link href={href} className={classes} {...props}>{children}</Link>
    }
    return <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...props}>{children}</a>
  },
  img: ({ src, alt, ...props }: any) => (
    <figure className="my-16 w-full">
      <Image 
        src={src} 
        alt={alt || "Saya Group Media"} 
        width={1200} 
        height={675} 
        className="w-full object-cover aspect-video bg-neutral-100" 
        {...props} 
      />
      {alt && (
        <figcaption className="text-center text-xs text-neutral-500 mt-4 tracking-widest uppercase font-medium">
          {alt}
        </figcaption>
      )}
    </figure>
  ),
}