import ScrollToTop from "@/components/ui/ScrollToTop";

export default function BrandLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollToTop />
      {children}
    </>
  );
}
