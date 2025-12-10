import Headline from "@/components/ui/Headline";

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
        <div className="flex justify-center py-32">
        </div>
    </>
     
  );
}
