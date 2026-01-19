import Headline from "@/components/ui/Headline";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media & Press",
  description:
    "Latest news, media coverage, and updates from Saya Group and its portfolio brands.",
  openGraph: {
    title: "Saya Group Media",
    description:
      "Press, announcements, and brand stories from Saya Group.",
    url: "https://sayagroup.id/media",
  },
};
export default function MediaPage() {
  return (
    <>
        <Headline
            title="Media"
            breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Media" },
            ]}
        />
        <div className="flex justify-center py-32">
        </div>
    
    </>
  );
}
