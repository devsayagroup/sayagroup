import Headline from "@/components/ui/Headline";

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
        <div className="flex justify-center py-32">
        </div>
    
    </>
  );
}
