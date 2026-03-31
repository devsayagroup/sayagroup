// lib/seo/site.ts
export const SITE = {
  name: "SAYA Group",
  url: "https://sayagroup.id",
  defaultOgImage: "/og/sayagroup-og.jpg", 
  locale: "en_US",
} as const;

export const BRANDS = [
  {
    name: "GoaSaya",
    url: "https://goasaya.com",
    instagram: "https://www.instagram.com/goasaya.jkt", 
  },
  {
    name: "Aroma Biji",
    url: "https://aromabiji.co",
    instagram: "https://www.instagram.com/aromabiji",
  },
  {
    name: "One Percent Lounge",
    url: "https://onepercentlounge.com",
    instagram: "https://www.instagram.com/onepercentlounge", 
  },
  {
    name: "NemuSaya",
    url: "https://nemusaya.com",
    instagram: "https://www.instagram.com/nemusaya", 
  },
] as const;