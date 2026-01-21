import Headline from "@/components/ui/Headline";
import type { Metadata } from "next";
import ContactPage from "@/components/pages/Contact";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Saya Group for partnerships, media inquiries, or career opportunities.",
  openGraph: {
    title: "Contact Saya Group",
    description:
      "Reach Saya Group headquarters in Jakarta for inquiries and collaborations.",
    url: "https://sayagroup.id/contact",
  },
};

export default function Contact() {
  return (
    <>
        <Headline
            title="Contact"
            breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Contact" },
            ]}
        />
        <ContactPage/>
    </>
     
  );
}
