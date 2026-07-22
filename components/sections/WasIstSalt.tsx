"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import DasBildAnimation from "@/components/Animations/DasBildAnimation";
import DieEnergieAnimation from "@/components/Animations/DieEnergieAnimation";
import DieWirkungAnimation from "@/components/Animations/DieWirkungAnimation";

export default function WasIstSalt() {
  useScrollReveal();

  const cards = [
    {
      number: "01",
      title: "Das Bild",
      body: "Mehr als ein Quadratmeter. Handgemalt. Nur für Dich. Entstanden aus Deiner Energie — mit nur Deinem Namen und Geburtsdatum.",
      link: "Mehr erfahren",
      animation: (size: number) => <DasBildAnimation size={size} />,
    },
    {
      number: "02",
      title: "Die Energie",
      body: "Morphogenetisches Feld. Quantenphysik. Keine Mystik — Physik. Wissenschaftlich erklärbar, spirituell erfahrbar.",
      link: "Mehr erfahren",
      animation: (size: number) => <DieEnergieAnimation size={size} />,
    },
    {
      number: "03",
      title: "Die Wirkung",
      body: "Täglich auf Dein Unterbewusstsein. Wie tiefgreifendes Coaching — ohne Coach. Du gewinnst Klarheit, Sicherheit, Flow.",
      link: "Mehr erfahren",
      animation: (size: number) => <DieWirkungAnimation size={size} />,
    },
  ];

  return (
    <section id="was-ist-salt" className="bg-[#141414] px-6 min-h-screen flex flex-col justify-center py-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-salt-violet/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto flex max-w-[1140px] flex-col relative z-10 w-full">
        <div
          className="reveal-on-scroll mb-8 flex items-center gap-3"
          style={{ transitionDelay: "0ms" }}
        >
          <span className="inline-block h-px w-8 shrink-0 bg-salt-crimson" />
          <p className="font-sans text-[0.65rem] font-bold uppercase tracking-[0.35em] text-salt-crimson">
            Was SALT ist
          </p>
        </div>

        <h2
          className="reveal-on-scroll mb-6 font-sans text-3xl md:text-5xl lg:text-7xl font-extrabold leading-[1.05] tracking-[-0.03em] text-white"
          style={{ transitionDelay: "80ms" }}
        >
          Das Energie-Bild
        </h2>

        <div
          className="reveal-on-scroll mb-8 h-0.5 w-14 bg-salt-crimson"
          style={{ transitionDelay: "140ms" }}
        />

        <p
          className="reveal-on-scroll mb-12 max-w-[620px] font-sans text-lg md:text-xl font-medium leading-[1.8] text-white/50"
          style={{ transitionDelay: "200ms" }}
        >
          Ein einzigartiges, handgemaltes Kunstwerk — ausschließlich auf Deine
          Energie abgestimmt.
        </p>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={card.number}
              className="salt-card reveal-on-scroll group relative flex flex-col gap-6 bg-white/5 border border-white/10 p-8 rounded-sm backdrop-blur-md"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="card-top-bar absolute top-0 right-0 left-0 h-[2px] bg-salt-crimson opacity-60" />

              <div className="flex flex-col gap-8">
                <div className="flex items-start justify-between">
                  <span className="font-sans text-[0.65rem] font-bold uppercase tracking-[0.3em] text-salt-crimson">
                    {card.number}
                  </span>
                </div>
                
                {/* Custom Animated Graphic */}
                <div className="h-20 flex items-start justify-start transition-transform duration-500 group-hover:scale-105 origin-left">
                   {card.animation(80)}
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="font-sans text-xl md:text-2xl font-extrabold leading-tight text-white tracking-tight">
                    {card.title}
                  </h3>
                  <p className="font-sans text-sm md:text-base font-medium leading-[1.7] text-white/50">
                    {card.body}
                  </p>
                </div>
              </div>

              <div className="mt-auto pt-6 flex flex-col gap-5">
                <div className="h-px w-full bg-white/5" />
                <Link
                  href="/galerie"
                  className="flex items-center gap-2 font-sans text-[0.7rem] font-bold uppercase tracking-[0.2em] text-salt-crimson transition-all duration-300 no-underline hover:tracking-[0.25em]"
                >
                  {card.link} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
