import HeroSection from "@/components/section/HeroSection";
import AboutSection from "@/components/section/AboutSection";
import BrandSection from "@/components/section/BrandSection";
import CtaSection from "@/components/section/CtaSection";
import MediaSection from "@/components/section/MediaSection";
import BrandHeroCarousel from "@/components/ui/BrandHeroCarousel";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <AboutSection/>
      <BrandSection/>
      {/* <MediaSection/> */}
      <CtaSection/>
    </>
  );
}
