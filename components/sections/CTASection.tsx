"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const pillsMobile = [
  "30 Min · kostenlos",
  "Telefon oder Video",
  "Kein Verkauf",
] as const;

const pillsDesktop = [
  "30 Minuten · kostenlos",
  "Per Telefon oder Video",
  "Kein Verkaufsgespräch",
] as const;

export default function CTASection() {
  useScrollReveal();

  return (
    <section
      id="kontakt"
      className="relative overflow-hidden bg-[#141414] px-6 min-h-screen flex flex-col justify-center py-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-12 left-12 h-32 w-32 hidden md:block"
        style={{
          borderTop: "1px solid rgba(212, 0, 0, 0.2)",
          borderLeft: "1px solid rgba(212, 0, 0, 0.2)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-12 bottom-12 h-32 w-32 hidden md:block"
        style={{
          borderRight: "1px solid rgba(255, 255, 255, 0.1)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      />

      {/* Atmospheric center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-salt-crimson/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto flex max-w-[800px] flex-col items-center gap-10 text-center">
        <div
          className="reveal-on-scroll flex items-center gap-4"
          style={{ transitionDelay: "0ms" }}
        >
          <span className="inline-block h-px w-10 shrink-0 bg-salt-crimson" />
          <p className="font-sans text-[0.7rem] font-bold tracking-[0.3em] text-salt-crimson uppercase">
            Bereit?
          </p>
          <span className="inline-block h-px w-10 shrink-0 bg-salt-crimson" />
        </div>

        <h2
          className="reveal-on-scroll font-sans font-extrabold leading-[1.05] tracking-[-0.03em] text-white"
          style={{
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            transitionDelay: "100ms",
          }}
        >
          Dein Bild wartet
          <br />
          auf <span className="text-salt-crimson">Dich.</span>
        </h2>

        <p
          className="reveal-on-scroll max-w-[500px] font-sans text-lg md:text-xl leading-[1.8] font-medium text-white/50"
          style={{ transitionDelay: "180ms" }}
        >
          Beginne mit einem 30-minütigen Gespräch. Ich brauche nur Deinen Namen
          und Dein Geburtsdatum.
        </p>

        <div
          className="reveal-on-scroll flex flex-row flex-wrap items-center justify-center gap-3"
          style={{ transitionDelay: "240ms" }}
        >
          {pillsMobile.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 rounded-sm bg-white/5 border border-white/10 px-4 py-2 md:hidden backdrop-blur-md"
            >
              <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-salt-crimson shadow-[0_0_8px_rgba(212,0,0,0.4)]" />
              <p className="font-sans text-[0.65rem] font-bold whitespace-nowrap tracking-[0.1em] text-white/70 uppercase">
                {item}
              </p>
            </div>
          ))}
          {pillsDesktop.map((item) => (
            <div
              key={item}
              className="hidden items-center gap-2.5 rounded-sm bg-white/5 border border-white/10 px-5 py-2.5 md:flex backdrop-blur-md"
            >
              <div className="h-2 w-2 shrink-0 rounded-full bg-salt-crimson shadow-[0_0_10px_rgba(212,0,0,0.5)]" />
              <p className="font-sans text-xs font-bold tracking-[0.1em] text-white uppercase">
                {item}
              </p>
            </div>
          ))}
        </div>

        <div className="reveal-on-scroll mt-4" style={{ transitionDelay: "320ms" }}>
          <a
            href="https://calendly.com/salt-art/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block cursor-pointer rounded-sm bg-salt-crimson px-14 py-6 font-sans text-sm font-bold tracking-[0.2em] text-white uppercase transition-all duration-300 hover:bg-[#b8002a] hover:scale-105 shadow-[0_20px_50px_rgba(212,0,0,0.3)]"
          >
            Termin vereinbaren
          </a>
        </div>

        <div
          className="reveal-on-scroll flex flex-col items-center gap-4 mt-6"
          style={{ transitionDelay: "400ms" }}
        >
          <p className="font-sans text-[0.7rem] font-bold tracking-[0.15em] text-white/30 uppercase">
            Oder schreibe direkt:
          </p>
          <a
            href="mailto:salt@artwithenergy.com"
            className="border-b border-white/10 pb-1 font-sans text-base font-bold text-white transition-all duration-300 hover:border-salt-crimson hover:text-salt-crimson tracking-tight"
          >
            salt@artwithenergy.com
          </a>
        </div>
      </div>
    </section>
  );
}
