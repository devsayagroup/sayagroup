import Headline from "@/components/ui/Headline";

import type { Metadata } from "next";
import AboutClient from "@/components/pages/About";
export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Saya Group, a hospitality and lifestyle group crafting meaningful spaces across dining, culture, and design.",
  openGraph: {
    title: "About Saya Group",
    description:
      "Discover the vision, values, and portfolio behind Saya Group.",
    url: "https://sayagroup.id/about",
  },
};

export default function AboutPage() {
  return (
    <>
        <Headline
            title="About Us"
            breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "About" },
            ]}
        />
       <AboutClient/>
    </>
  );
}
