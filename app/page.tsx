import HeroSection from "@/components/section/HeroSection";
import AboutSection from "@/components/section/AboutSection";
import BrandSection from "@/components/section/BrandSection";
import MediaSection from "@/components/section/MediaSection";
import BrandHeroCarousel from "@/components/ui/BrandHeroCarousel";

export default function Home() {
  return (
    // <div className="flex flex-col min-h-screen items-center justify-center">
    //   <img src="sayagroup.png" alt="SAYAGROUP" width={300} height={300} />
    // </div>
    <>
      <HeroSection/>
      {/* <BrandHeroCarousel/> */}
      <AboutSection/>
      <BrandSection/>
      <MediaSection/>
    </>
  );
}
