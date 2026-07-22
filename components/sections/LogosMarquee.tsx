"use client";

import { useState } from "react";
import Image from "next/image";

const COMPANY_LOGOS = [
  { src: "/companies/Logo-HiQ-breit.png", alt: "HiQ" },
  { src: "/companies/Bundeswehr.png", alt: "Bundeswehr" },
  { src: "/companies/YNS.png", alt: "YNS" },
  { src: "/companies/PER Medien.png", alt: "PER Medien" },
  { src: "/companies/Tolle Immobilien Logo.png", alt: "Tolle Immobilien" },
  { src: "/companies/Northwind.png", alt: "Northwind" },
  { src: "/companies/illuminati-logo-2016.png", alt: "Illuminati" },
  { src: "/companies/christiani_storymarketing_black_72dpi.png", alt: "Christiani" },
  { src: "/companies/Constellaris Logo.png", alt: "Constellaris" },
  { src: "/companies/Logo_REWE.svg_.png", alt: "REWE" },
  { src: "/companies/TÜV Rheinland.png", alt: "TÜV Rheinland" },
  { src: "/companies/Steuerengel-frei.png", alt: "Steuerengel" },
  { src: "/companies/InnerWise.png", alt: "InnerWise" },
  { src: "/companies/Kundengewinnungslabor_logo_web_400.png", alt: "Kundengewinnungslabor" },
  { src: "/companies/Grit Kriegel.jpg", alt: "Grit Kriegel" },
  { src: "/companies/deutsche bank transparent.png", alt: "Deutsche Bank" },
  { src: "/companies/wayv_logo.png", alt: "wayv" },
  { src: "/companies/Atlas_Logo.svg", alt: "Atlas" },
] as const;

function LogoStripCell({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const [broken, setBroken] = useState(false);

  if (broken) {
    return (
      <div
        className="relative h-12 w-[100px] shrink-0 rounded-sm bg-salt-greige-bg/70 opacity-60 md:w-[120px]"
        aria-hidden
      />
    );
  }

  return (
    <div className="relative h-12 w-[100px] shrink-0 transition-all duration-500 group md:w-[120px]">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain object-center drop-shadow-md grayscale opacity-40 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
        sizes="(max-width: 767px) 100px, 120px"
        onError={() => setBroken(true)}
      />
    </div>
  );
}

export default function LogosMarquee() {
  return (
    <div className="py-8 md:py-12 overflow-hidden relative z-10 bg-salt-black">
      <div
        className="relative flex w-full max-w-full overflow-hidden"
        style={{ "--logo-marquee-duration": "60s" } as React.CSSProperties}
      >
        <div className="company-logo-marquee-track">
          {COMPANY_LOGOS.map((logo) => (
            <LogoStripCell key={logo.src} src={logo.src} alt={logo.alt} />
          ))}
          {COMPANY_LOGOS.map((logo) => (
            <LogoStripCell key={logo.src + "-dup"} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </div>
    </div>
  );
}
