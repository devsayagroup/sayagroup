import Headline from "@/components/ui/Headline";

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
        <div className="flex justify-center py-32">
        </div>
    </>
  );
}
