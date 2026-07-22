"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const sizes = [
  {
    title: "Standard",
    dimensions: "90 x 130 cm",
    description: "Standard-Größe für transformierende Wirkung",
    image: "/paintings/Größe_Salt malt WB auf Terrasse.jpg",
    delay: "100ms",
  },
  {
    title: "Individuell",
    dimensions: "z.B. 90 x 90 cm",
    description: "auf Kundenwunsch individuelle Größen z.B. Diptychon",
    image: "/paintings/Größe_Infinit I + II - Diptychon.jpg",
    delay: "200ms",
  },
  {
    title: "Ganz Groß",
    dimensions: "130 x 200 cm",
    description: "Maximale Präsenz für große Räume",
    image: "/paintings/Größe_Sabine vor Wirkungs-Bild.jpg",
    delay: "300ms",
  },
];

export default function DieGroesse() {
  useScrollReveal();

  return (
    <section id="groesse" className="bg-[#141414] px-6 min-h-screen flex flex-col justify-center py-20 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-salt-crimson/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-[1140px] w-full relative z-10">
        {/* Header */}
        <div className="mb-12 md:mb-20">
          <div
            className="reveal-on-scroll mb-6 flex items-center gap-4"
            style={{ transitionDelay: "0ms" }}
          >
            <span className="inline-block h-px w-10 shrink-0 bg-salt-crimson" />
            <p className="font-sans text-[0.65rem] font-bold tracking-[0.35em] text-salt-crimson uppercase">
              Formate & Wirkung
            </p>
          </div>

          <h2
            className="reveal-on-scroll mb-8 font-sans font-extrabold leading-[1.1] tracking-[-0.03em] text-white"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              transitionDelay: "80ms",
            }}
          >
            Wie groß sind Wirkungs-Bilder™?
          </h2>

          <div
            className="reveal-on-scroll h-0.5 w-14 bg-salt-crimson"
            style={{ transitionDelay: "140ms" }}
          />
        </div>

        {/* Sizes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-end">
          {sizes.map((item, index) => {
            //Determine height based on index for a clear sizing hierarchy
            const heights = [
              "h-[220px] md:h-[280px]", // Smallest
              "h-[260px] md:h-[330px]", // Medium
              "h-[300px] md:h-[390px]"  // Biggest
            ];

            return (
              <div 
                key={item.title} 
                className="reveal-on-scroll group"
                style={{ transitionDelay: item.delay }}
              >
                <div className={`relative ${heights[index]} overflow-hidden mb-6 transition-transform duration-700 hover:scale-[1.02]`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                
                <div className="px-1 border-l border-white/5 pl-6">
                  <p className="font-sans text-[0.6rem] font-bold text-salt-crimson uppercase tracking-[0.35em] mb-2">
                    {item.title}
                  </p>
                  <h3 className="font-sans text-xl md:text-2xl font-extrabold text-white mb-1 tracking-tighter">
                    {item.dimensions}
                  </h3>
                  <p className="font-sans text-xs font-medium leading-relaxed text-white/30 max-w-[200px]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Text Focal Style */}
        <div 
          className="reveal-on-scroll mt-16 md:mt-24 pt-10 md:pt-12 border-t border-white/10 max-w-[1000px]"
          style={{ transitionDelay: "450ms" }}
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[580px]">
              <p className="font-sans text-xl md:text-2xl font-bold text-white leading-[1.3] mb-4 tracking-tight">
                Lass Dein Unterbewusstsein die Lösung finden!
              </p>
              <p className="font-sans text-base md:text-lg font-bold text-salt-crimson tracking-[0.05em] uppercase">
                Und spare wertvolle Lebenszeit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
