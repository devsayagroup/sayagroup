import Headline from "@/components/ui/Headline";
import Career from "@/components/pages/Career";
import { careers } from "@/lib/data-career";
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
