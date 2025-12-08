// export type Brand = {
//   id: string;
//   name: string;
//   slug: string;
//   shortDescription: string;
//   description: string;
//   image: string; // main image
//   logo: string; // brand logo
//   location?: string;
//   website?: string;
// };

// export const brands: Brand[] = [
//   {
//     id: "goasaya",
//     name: "GoaSaya",
//     slug: "goasaya",
//     shortDescription: "Cave-inspired fine dining restaurant in Jakarta.",
//     description:
//       "GoaSaya is an immersive fine dining destination designed to resemble a sculpted cave. Located in Jakarta, it blends dramatic architecture with curated tasting menus, handcrafted cocktails and sensory storytelling.",
//     image: "/onepercent.jpg",
//     logo: "/brands/logo-goasaya.png",
//     location: "Jakarta, Indonesia",
//     website: "https://goasaya.com"
//   },
//   {
//     id: "onepercent",
//     name: "One Percent",
//     slug: "one-percent",
//     shortDescription: "Private club and boutique rooms above GoaSaya.",
//     description:
//       "One Percent is a private club concept featuring exclusive lounges, curated musical ambience and boutique rooms. A modern lifestyle destination built for connection, privacy and elevated nightlife.",
//     image: "/onepercent.jpg",
//     logo: "/brands/logo-onepercent.png",
//     location: "Jakarta, Indonesia",
//     website: "https://onepercent.com"
//   },
//   {
//     id: "nemu-saya-villa",
//     name: "Nemu Saya Villa",
//     slug: "nemu-saya-villa",
//     shortDescription: "A luxury villa retreat surrounded by the beauty of Bali.",
//     description:
//       "Nemu Saya Villa is a serene luxury villa in Bali offering spacious suites, private pools and curated services. It is crafted for travelers seeking privacy, comfort and a natural escape.",
//     image: "/onepercent.jpg",
//     logo: "/brands/logo-nemu.png",
//     location: "Bali, Indonesia",
//     website: "https://nemusaya.com"
//   },
//   {
//     id: "aroma-biji",
//     name: "Aroma Biji",
//     slug: "aroma-biji",
//     shortDescription: "Modern artisan coffee brand celebrating Indonesian coffee.",
//     description:
//       "Aroma Biji brings a contemporary approach to Indonesian coffee culture. With artisanal brews, signature blends and warm hospitality, the brand celebrates craftsmanship through every cup.",
//     image: "/onepercent.jpg",
//     logo: "/brands/logo-aromabiji.png",
//     location: "Indonesia",
//     website: "https://aromabiji.com"
//   }
// ];

export type BrandEvent = {
  id: string;
  title: string;
  date?: string;
  description?: string;
  image?: string;
};

export type BrandContact = {
  address?: string;
  contactPerson?: string;
  socials?: {
    instagram?: string;
    tiktok?: string;
    website?: string;
  };
  rsvp?: string;
};

export type Brand = {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  image: string;
  logo: string;
  location?: string;
  website?: string;
  whatsHappening?: BrandEvent[];
  gallery?: string[];
  contact?: BrandContact;
};

export const brands: Brand[] = [
  {
    id: "goasaya",
    name: "GoaSaya",
    slug: "goasaya",
    shortDescription: "Cave-inspired fine dining restaurant in Jakarta.",
    description:
      "GoaSaya is an immersive fine dining destination designed to resemble a sculpted cave. Located in Jakarta, it blends dramatic architecture with curated tasting menus, handcrafted cocktails and sensory storytelling.",
    image: "/brands/goasaya/goa6.JPG",
    logo: "/brands/goasaya/logo-white.png",
    location: "Jakarta, Indonesia",
    website: "https://goasaya.com",

    // NEW
    whatsHappening: [
      {
        id: "goa-01",
        title: "Exclusive Tasting Menu Release",
        date: "2025-03-14",
        description:
          "GoaSaya introduces a new seasonal tasting menu inspired by natural elements and modern techniques.",
        image: "/brands/goasaya/goa1.jpg",
      },
    ],

    gallery: [
      "/brands/goasaya/goa1.jpg",
      "/brands/goasaya/goa2.jpg",
      "/brands/goasaya/goa3.jpg",
    ],

    contact: {
      address: "Jl. Senopati, South Jakarta",
      contactPerson: "+62 812 3456 7890",
      socials: {
        instagram: "https://instagram.com/goasaya",
        website: "https://goasaya.com",
      },
      rsvp: "https://goasaya.com/reservations",
    },
  },

  {
    id: "onepercent",
    name: "One Percent",
    slug: "onepercent",
    shortDescription: "Private club and boutique rooms above GoaSaya.",
    description:
      "One Percent is a private club concept featuring exclusive lounges, curated musical ambience and boutique rooms. A modern lifestyle destination built for connection, privacy and elevated nightlife.",
    image: "/brands/onepercent/op1.jpg",
    logo: "/brands/onepercent/logo-white.png",
    location: "Jakarta, Indonesia",
    website: "https://onepercent.com",

    whatsHappening: [
      {
        id: "op-01",
        title: "New DJ Residency",
        description:
          "Weekly curated soundscapes with international and local DJs.",
        image: "/brands/onepercent/events/dj.jpg",
      },
    ],

    gallery: [
      "/brands/onepercent/op1.jpg",
      "/brands/onepercent/op2.jpg",
      "/brands/onepercent/op3.jpg",
    ],

    contact: {
      address: "Above GoaSaya, Senopati, Jakarta",
      contactPerson: "+62 811 9988 2211",
      socials: {
        instagram: "https://instagram.com/onepercent_jkt",
      },
      rsvp: "https://onepercent.com/reservations",
    },
  },

  {
    id: "nemusaya",
    name: "Nemu Saya Villa",
    slug: "nemusaya",
    shortDescription: "A luxury villa retreat surrounded by the beauty of Bali.",
    description:
      "Nemu Saya Villa is a serene luxury villa in Bali offering spacious suites, private pools and curated services. It is crafted for travelers seeking privacy, comfort and a natural escape.",
    image: "/brands/nemusaya/villa1.jpg",
    logo: "/brands/nemusaya/nemusaya.webp",
    location: "Bali, Indonesia",
    website: "https://nemusaya.com",

    whatsHappening: [
      {
        id: "nemu-01",
        title: "Villa Reopening",
        description:
          "Newly renovated suites with improved wellness features and private pool enhancements.",
        image: "/brands/nemusaya/events/reopening.jpg",
      },
    ],

    gallery: [
      "/brands/nemusaya/villa1.jpg",
      "/brands/nemusaya/villa2.jpg",
      "/brands/nemusaya/villa3.jpg",
    ],

    contact: {
      address: "Ubud, Bali",
      contactPerson: "+62 877 5566 8899",
      socials: {
        instagram: "https://instagram.com/nemusaya",
        website: "https://nemusaya.com",
      },
      rsvp: "https://nemusaya.com/booking",
    },
  },

  {
    id: "aromabiji",
    name: "Aroma Biji",
    slug: "aromabiji",
    shortDescription: "Modern artisan coffee brand celebrating Indonesian coffee.",
    description:
      "Aroma Biji brings a contemporary approach to Indonesian coffee culture. With artisanal brews, signature blends and warm hospitality, the brand celebrates craftsmanship through every cup.",
    image: "/brands/aromabiji/full-product.jpeg",
    logo: "/brands/aromabiji/logo.png",
    location: "Indonesia",
    website: "https://aromabiji.com",

    whatsHappening: [
      {
        id: "abij-01",
        title: "New Signature Blend Release",
        description: "Aroma Biji launches a new Indonesian single-origin blend.",
        image: "/brands/aromabiji/events/blend.jpg",
      },
    ],

    gallery: [
      "/brands/aromabiji/foto-product-1.jpg",
      "/brands/aromabiji/foto-product-2.jpg",
      "/brands/aromabiji/foto-product-3.jpg",
    ],

    contact: {
      address: "Available across multiple cities",
      contactPerson: "+62 878 3322 4455",
      socials: {
        instagram: "https://instagram.com/aromabiji.id",
        tiktok: "https://tiktok.com/@aromabiji",
        website: "https://aromabiji.com",
      },
      rsvp: "",
    },
  },
];

