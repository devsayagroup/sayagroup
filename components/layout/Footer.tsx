import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-black/10 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-10">
        
        <div>
          {/* <h3 className="text-xl font-semibold">SAYA GROUP</h3> */}
          <Image src="/sayagroup.png" alt="Saya Group" width={140} height={140} className="mb-8" />
          <p className="text-sm opacity-60 mt-1">
            Hospitality. Culture. Experiences.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm opacity-70">
          <a href="/brands">Brands</a>
          <a href="/media">Media</a>
          <a href="/contact">Contact</a>
        </div>
      </div>

      <p className="text-center text-xs opacity-60 mt-10">
        © {new Date().getFullYear()} Saya Group. All Rights Reserved.
      </p>
    </footer>
  );
}
