export type BrandEvent = {
  id: string;
  brandId: string; // Links to Brand.id (e.g., "goasaya")
  title: string;
  slug: string;
  date: string;
  description: string;
  image: string;
  ctaLink: string;
  category: string;
  isFeatured: boolean;
};

export const events: BrandEvent[] = [
  /* ============================
      GOASAYA EVENTS
  ============================ */
  {
    id: "may-madness-goasaya",
    brandId: "goasaya",
    title: "MAY MADNESS: Premium AYCE Lunch",
    slug: "may-madness-goasaya",
    date: "May 1 - May 31, 2026",
    description: "Experience the madness at GoaSaya this May. Enjoy exclusive seasonal pairings and limited-time 'Cave Signature' cocktails.",
    image: "/brands/goasaya/events/MM.webp",
    category: "Experiences",
    isFeatured: true,
    ctaLink: "https://goasaya.com/experiences/may-madness" 
  },
//   /* ============================
//       ONE PERCENT EVENTS
//   ============================ */
//   {
//     id: "op-midnight-circle",
//     brandId: "onepercent",
//     title: "MIDNIGHT INNER CIRCLE",
//     slug: "midnight-inner-circle",
//     date: "Every Friday Night",
//     description: "An exclusive late-night lounge experience featuring curated soundscapes and artisanal mixology for the select few.",
//     image: "/brands/onepercent/events/midnight.jpg",
//     category: "Music",
//     isFeatured: false,
//   },
//   /* ============================
//       NEMU SAYA EVENTS
//   ============================ */
//   {
//     id: "nemu-wellness-retreat",
//     brandId: "nemusaya",
//     title: "ZEN RETREAT WEEKEND",
//     slug: "zen-retreat-weekend",
//     date: "June 12 - 14, 2026",
//     description: "Reconnect with nature at Nemu Saya Villa. A curated weekend of yoga, organic dining, and private pool meditation.",
//     image: "/brands/nemusaya/events/wellness.jpg",
//     category: "Lifestyle",
//     isFeatured: true,
//   },
//   /* ============================
//       AROMA BIJI EVENTS
//   ============================ */
//   {
//     id: "ab-origin-series",
//     brandId: "aromabiji",
//     title: "ARCHIPELAGO ORIGIN SERIES",
//     slug: "archipelago-origin-series",
//     date: "Ongoing",
//     description: "Discover the unique profiles of Indonesian single-origin beans through our monthly rotating tasting flight.",
//     image: "/brands/aromabiji/events/tasting.jpg",
//     category: "Dining",
//     isFeatured: false,
//   }
];