import Headline from "@/components/ui/Headline";

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
