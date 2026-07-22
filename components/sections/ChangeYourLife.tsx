"use client";

import type { CSSProperties } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ghostTextStyle: CSSProperties = {
  color: "transparent",
  WebkitTextStroke: "1px rgba(106, 11, 207, 0.03)",
  fontSize: "clamp(120px, 22vw, 220px)",
};

const headlineTransition: CSSProperties = {
  transitionDelay: "100ms",
};

export default function ChangeYourLife() {
  useScrollReveal();

  return (
    <section
      id="change-your-life"
      className="relative overflow-hidden bg-[#141414] px-6 min-h-screen flex flex-col justify-center py-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex select-none items-center justify-center overflow-hidden"
      >
        <span
          className="whitespace-nowrap font-sans font-extrabold leading-none tracking-[-0.04em]"
          style={{
            ...ghostTextStyle,
            WebkitTextStroke: "1px rgba(255, 255, 255, 0.05)",
          }}
        >
          SALT
        </span>
      </div>

      <div className="relative z-10 mx-auto flex max-w-[800px] flex-col items-center text-center">
        <div
          className="reveal-on-scroll mb-10 flex items-center gap-3"
          style={{ transitionDelay: "0ms" }}
        >
          <span className="inline-block h-px w-8 shrink-0 bg-salt-crimson" />
          <p className="font-sans text-[0.7rem] font-bold uppercase tracking-[0.3em] text-salt-crimson">
            Sabine Alter · SALT
          </p>
          <span className="inline-block h-px w-8 shrink-0 bg-salt-crimson" />
        </div>

        <h2
          className="reveal-on-scroll mb-10 text-center font-sans text-[clamp(2rem,7vw,4.5rem)] leading-[1.0] font-extrabold tracking-[-0.03em]"
          style={headlineTransition}
        >
          <span className="block text-white">Sie sieht,</span>
          <span className="block text-salt-crimson mt-2">was Du nicht siehst.</span>
          <span className="block text-white mt-2">Verändere Dein Leben.</span>
        </h2>

        <p
          className="reveal-on-scroll mb-12 max-w-[500px] font-sans text-lg md:text-xl font-medium leading-[1.8] text-white/60"
          style={{ transitionDelay: "200ms" }}
        >
          Erfolgreiche Menschen spüren es — da ist noch mehr. Sabine erschafft ein
          Bild, das Dein Unterbewusstsein aktiviert und Transformation in Gang setzt.
        </p>

        <div
          className="reveal-on-scroll mb-14 md:mb-20"
          style={{ transitionDelay: "300ms" }}
        >
          <a
            href="https://calendly.com/salt-art/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block cursor-pointer rounded-[4px] bg-salt-crimson px-12 py-5 font-sans text-sm font-bold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:bg-[#b8002a] hover:scale-105 shadow-2xl"
          >
            Gespräch vereinbaren
          </a>
        </div>

        <div
          className="reveal-on-scroll mb-12 flex flex-wrap items-center justify-center gap-8 md:mb-20 md:gap-16"
          style={{ transitionDelay: "400ms" }}
        >
          <div className="flex flex-col items-center gap-2">
            <p className="font-sans text-3xl leading-none font-extrabold text-white md:text-5xl">
              38<span className="text-salt-crimson">+</span>
            </p>
            <p className="font-sans text-[0.6rem] font-bold uppercase tracking-[0.2em] text-white/40 md:text-[0.7rem]">
              Energie-Bilder
            </p>
          </div>

          <div className="hidden h-12 w-px shrink-0 bg-white/10 md:block" />

          <div className="flex flex-col items-center gap-2">
            <p className="font-sans text-3xl leading-none font-extrabold text-white md:text-5xl">
              16<span className="text-salt-crimson">+</span>
            </p>
            <p className="font-sans text-[0.6rem] font-bold uppercase tracking-[0.2em] text-white/40 md:text-[0.7rem]">
              Transformationen
            </p>
          </div>

          <div className="hidden h-12 w-px shrink-0 bg-white/10 md:block" />

          <div className="flex flex-col items-center gap-2">
            <p className="font-sans text-3xl leading-none font-extrabold text-white md:text-5xl">
              21<span className="text-salt-crimson">+</span>
            </p>
            <p className="font-sans text-[0.6rem] font-bold uppercase tracking-[0.2em] text-white/40 md:text-[0.7rem]">
              Unternehmen
            </p>
          </div>
        </div>

        <div
          className="reveal-on-scroll w-full max-w-[560px] border-t border-white/10 pt-10"
          style={{ transitionDelay: "500ms" }}
        >
          <p className="text-center font-sans text-base md:text-lg font-medium italic leading-[1.8] text-white/40">
            „Das Wertvollste im Leben ist die Entfaltung der Persönlichkeit und
            ihrer schöpferischen Kräfte.“
          </p>
          <p className="mt-4 text-center font-sans text-[0.65rem] font-bold uppercase tracking-[0.3em] text-salt-crimson">
            — Albert Einstein
          </p>
        </div>
      </div>
    </section>
  );
}
