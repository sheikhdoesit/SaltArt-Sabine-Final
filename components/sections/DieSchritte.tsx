"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    number: "01",
    title: "Das Gespräch",
    description:
      "Ein persönliches 30-minütiges Telefonat. Du schilderst Deine Situation und Dein Ziel. Sabine hört zu — ohne Verkaufsdruck.",
    detail: "30 Minuten · kostenlos · per Telefon oder Video",
    cta: "Termin vereinbaren →",
    href: "https://calendly.com/salt-art/30min",
  },
  {
    number: "02",
    title: "Die Erschaffung",
    description:
      "Sabine stimmt sich auf Deine Energie ein — mit nur Deinem Namen und Geburtsdatum. Sie malt Dein persönliches Energie-Bild in Handarbeit.",
    detail: "Lieferzeit nach Absprache · mehr als 1 Quadratmeter",
    cta: null,
    href: null,
  },
  {
    number: "03",
    title: "Die Wirkung",
    description:
      "Dein Bild kommt an. Du findest seinen Platz — am besten dort, wo Du es täglich siehst. Du lässt es wirken. Flow beginnt.",
    detail: "Täglich auf Dein Unterbewusstsein · wie Coaching ohne Coach",
    cta: null,
    href: null,
  },
] as const;

export default function DieSchritte() {
  useScrollReveal();

  return (
    <section id="prozess" className="bg-[#141414] px-6 min-h-screen flex flex-col justify-center py-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-salt-violet/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-[1140px] relative z-10">
        <div className="mb-20 flex flex-col items-center text-center">
          <div
            className="reveal-on-scroll mb-8 flex items-center gap-4"
            style={{ transitionDelay: "0ms" }}
          >
            <span className="inline-block h-px w-10 shrink-0 bg-salt-crimson" />
            <p className="font-sans text-[0.65rem] font-bold tracking-[0.35em] text-salt-crimson uppercase">
              Der Prozess
            </p>
            <span className="inline-block h-px w-10 shrink-0 bg-salt-crimson" />
          </div>

          <h2
            className="reveal-on-scroll mb-8 font-sans font-extrabold leading-[1.05] tracking-[-0.03em] text-white"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.8rem)",
              transitionDelay: "100ms",
            }}
          >
            Dein Weg zum Energie-Bild
          </h2>

          <div
            className="reveal-on-scroll h-0.5 w-14 bg-salt-crimson"
            style={{ transitionDelay: "160ms" }}
          />
        </div>

        <div className="relative grid grid-cols-1 gap-0 md:grid-cols-3 md:gap-0">
          {/* Connector lines Premium */}
          <div className="absolute top-[5.5rem] bottom-[5.5rem] left-[2.75rem] z-0 w-px bg-white/5 md:hidden" />
          <div className="absolute top-[2.75rem] right-[16.67%] left-[16.67%] z-0 hidden h-px bg-white/5 md:block" />

          {steps.map((step, index) => (
            <div
              key={step.number}
              className="reveal-on-scroll relative flex flex-col items-start py-10 pl-24 pr-6 text-left md:items-center md:px-10 md:py-0 md:text-center group"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="absolute top-8 left-0 z-10 flex h-[3.5rem] w-[3.5rem] shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 group-hover:border-salt-crimson/50 md:relative md:top-auto md:mb-8 md:h-[6rem] md:w-[6rem]">
                <span className="font-sans text-xl leading-none font-extrabold text-white md:text-3xl tracking-tighter">
                  {step.number}
                </span>
              </div>

              <h3 className="font-sans text-xl md:text-2xl font-extrabold text-white md:mb-4 tracking-tight">
                {step.title}
              </h3>

              <div className="mb-6 h-0.5 w-10 bg-salt-crimson md:mx-auto" />

              <p className="mb-6 max-w-[280px] font-sans text-base leading-[1.75] font-medium text-white/50">
                {step.description}
              </p>

              <p className="mb-8 font-sans text-[0.65rem] font-bold tracking-[0.15em] text-salt-crimson uppercase">
                {step.detail}
              </p>

              {step.cta && step.href ? (
                <a
                  href={step.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-sm bg-salt-crimson px-8 py-4 font-sans text-[0.65rem] font-bold tracking-[0.2em] text-white uppercase transition-all duration-300 hover:bg-[#b8002a] hover:scale-105 shadow-2xl"
                >
                  {step.cta}
                </a>
              ) : null}
            </div>
          ))}
        </div>

        <div
          className="reveal-on-scroll mt-24 border-t border-white/10 pt-16 text-center"
          style={{ transitionDelay: "500ms" }}
        >
          <p className="font-sans text-lg md:text-xl font-medium italic leading-[1.8] text-white/40">
            „Ich brauche nur Deinen Namen und Dein Geburtsdatum —
            <br className="hidden md:block" /> den Rest übernimmt die Energie.“
          </p>
          <p className="mt-4 font-sans text-[0.65rem] font-bold tracking-[0.25em] text-salt-crimson uppercase">
            — Sabine Alter
          </p>
        </div>
      </div>
    </section>
  );
}
