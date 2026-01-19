import Headline from "@/components/ui/Headline";
import Career from "@/components/pages/Career";
import { careers } from "@/lib/data-career";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Saya Group and grow your career in hospitality, lifestyle, and luxury experiences.",
  openGraph: {
    title: "Careers at Saya Group",
    description:
      "Explore job opportunities at Saya Group across hospitality and lifestyle brands.",
    url: "https://sayagroup.id/careers",
  },
};

export default function CareerPage() {
  return (
    <>
      <Headline
        title="Career"
        breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Career" },
        ]}
      />
      
      <Career careers={careers} />
    </>
  );
}
