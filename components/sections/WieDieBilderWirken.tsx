"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { SaturnOrbitAnimation, DNAHelixAnimation, KeyEnergyAnimation, PersonEnergyMirrorAnimation, VioletSymbolRain } from "@/components/Animations";

// ─── Animations mapping ───────────────────────────────────────────────────────

const STEPS = [
  {
    label: "01",
    heading: ["4 Dimensionen +", "Bewusstseinsfelder"],
    body: "In unserer Welt kennen wir 4 Dimensionen von Raum und Zeit. Bekannte Physiker gehen aber davon aus, dass es darüber hinaus noch weitere Dimensionen gibt: Bewusstseins- und Informationsfelder, in denen bereits ALLE Lösungen und Möglichkeiten für Deinen Erfolg- und Deine Erfüllung gespeichert sind.",
    bgLeft: "#111",
    Animation: SaturnOrbitAnimation,
  },
  {
    label: "02",
    heading: ["Blaupause für", "Dein Leben"],
    body: "Diese Felder sind wie eine Blaupause für Dein Leben, ähnlich wie die DNA der Bauplan für Deinen Körper ist. Während klassische Coachings mit dem Unterbewusstsein arbeiten - zum Beispiel durch Mindset-Arbeit, Glaubenssätze, NLP oder Hypnose - gibt es noch eine viel kraftvollere Möglichkeit Dein volles Potenzial zu entfalten.",
    bgLeft: "#111",
    Animation: DNAHelixAnimation,
  },
  {
    label: "03",
    heading: ["Der Schlüssel =", "Dein Zugang"],
    body: "Der Schlüssel = Dein Zugang zu diesen höheren Dimensionen. Mit Deinem persönlichen Wirkungs-Bild™ erhälst Du Dein eigenes Tor zu diesen Informationsdimensionen. Dieses Bild ist nicht nur Kunst - es wird speziell für Dich gestaltet und energetisch abgestimmt. Es arbeitet subtil im Hintergrund, fast wie ein Spiegelbild, in dem Du Dich erkennst. Jedes Mal, wenn Du es siehst, schenkt es Dir mehr Klarheit, Fokus und Energie!",
    bgLeft: "#111",
    Animation: KeyEnergyAnimation,
  },
  {
    label: "04",
    heading: ["Kraftvoller", "Begleiter"],
    body: "Dein persönliches Wirkungs-Bild™ unterstützt Dich dabei, energetische Blockaden zu lösen, intuitive Lösungen zu entdecken und Entscheidungen mit Klarheit und Selbstvertrauen zu treffen. Es hilft Dir, Erfolg und Erfüllung in Deinem Geschäfts- und Privatleben zu erreichen - ganz mühelos, jedes Mal, wenn Dein Blick darauf fällt. Diese einzigartige Werkzeug ist ein kraftvoller Begleiter für Dein Leben.",
    bgLeft: "#111",
    Animation: PersonEnergyMirrorAnimation,
  },
];

const COUNT = STEPS.length;
const VH_PER_STEP = 300;

// ─── Per-step text panel ──────────────────────────────────────────────────────
function StepTextPanel({
  step,
  index,
  globalProgress,
}: {
  step: (typeof STEPS)[0];
  index: number;
  globalProgress: MotionValue<number>;
}) {
  const start = index / COUNT;
  const end = (index + 1) / COUNT;
  const local = useTransform(globalProgress, [start, end], [0, 1]);

  const opacity = useTransform(local, [0, 0.12, 0.85, 1], [0, 1, 1, 0]);
  const y = useTransform(local, [0, 0.12], [28, 0]);

  const labelOp = useTransform(local, [0.05, 0.15], [0, 1]);
  const h1Op = useTransform(local, [0.12, 0.24], [0, 1]);
  const h1Y = useTransform(local, [0.12, 0.24], [16, 0]);
  const divOp = useTransform(local, [0.22, 0.30], [0, 1]);
  const bodyOp = useTransform(local, [0.28, 0.45], [0, 1]);
  const bodyY = useTransform(local, [0.28, 0.45], [10, 0]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex flex-col justify-center px-10 md:px-16 xl:px-20 py-16"
    >
      <motion.p
        style={{ opacity: labelOp }}
        className="mb-5 text-[0.65rem] font-bold tracking-[0.28em] text-salt-crimson uppercase"
      >
        {step.label}
      </motion.p>

      <motion.h3
        style={{ opacity: h1Op, y: h1Y }}
        className="font-sans text-3xl md:text-4xl xl:text-5xl font-extrabold tracking-tighter leading-tight text-white mb-4"
      >
        {step.heading[0]}
        <br />
        {step.heading[1]}
      </motion.h3>

      <motion.div style={{ opacity: divOp }} className="h-0.5 w-12 bg-salt-violet mb-6" />

      <motion.p
        style={{ opacity: bodyOp, y: bodyY }}
        className="font-sans text-base leading-[1.85] text-white/70 max-w-[440px]"
      >
        {step.body}
      </motion.p>

      {/* Step indicator dots */}
      <div className="absolute bottom-10 left-10 md:left-16 xl:left-20 flex gap-2">
        {STEPS.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === index ? "w-8 bg-salt-violet" : "w-1.5 bg-salt-greige"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
}

// ─── Left animation panel: bg + animation fade between steps ─────────────────
function AnimationPanel({
  globalProgress,
}: {
  globalProgress: MotionValue<number>;
}) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      {STEPS.map(({ Animation, bgLeft }, index) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const start = index / COUNT;
        const end = (index + 1) / COUNT;
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const local = useTransform(globalProgress, [start, end], [0, 1]);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const opacity = useTransform(local, [0, 0.12, 0.85, 1], [0, 1, 1, 0]);

        return (
          <motion.div
            key={index}
            style={{ opacity, backgroundColor: bgLeft }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Animation />
          </motion.div>
        );
      })}
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────
export default function WieDieBilderWirken() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: trackRef });
  const sectionHeight = `${COUNT * VH_PER_STEP}vh`;

  return (
    <section id="wie-es-wirkt" className="bg-[#141414]">
      {/* Section heading — above the sticky area */}
      <div className="bg-[#141414] pt-32 pb-24 px-6 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Scientific Narrative */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block h-px w-8 shrink-0 bg-salt-violet" />
              <p className="font-sans text-[0.7rem] font-bold tracking-[0.3em] text-salt-violet uppercase">
                Die Wissenschaft
              </p>
            </div>
            
            <h2
              className="mb-8 font-sans font-extrabold tracking-[-0.03em] text-white leading-[1.05]"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
            >
              Wusstest Du <span className="text-salt-violet italic">... ?</span>
            </h2>

            <div className="h-0.5 w-14 bg-salt-crimson mb-10" />

            <div className="flex flex-col gap-6 text-white/50">
              <p className="font-sans text-xl md:text-2xl font-extrabold text-white leading-[1.4] tracking-tight">
                Quantenphysiker haben entdeckt: <br />
                <span className="text-salt-violet">Unsere Beobachtung beeinflusst die Realität!</span>
              </p>
              
              <p className="font-sans text-lg md:text-xl leading-[1.8] font-medium italic">
                Das ist nicht nur ein faszinierender Fakt ...
              </p>

              <p className="font-sans text-lg md:text-xl leading-[1.8] font-medium text-white/70">
                Es bedeutet: <span className="text-white font-bold">Dein Bewusstsein spielt eine entscheidende Rolle</span>, wenn es darum geht, Dein Leben aktiv zu gestalten.
              </p>
            </div>
          </div>

          {/* Right: Symbol Rain Animation (Digital Field Visualization) */}
          <div className="relative h-[340px] lg:h-[510px] w-full lg:max-w-[540px] lg:ml-auto rounded-2xl overflow-hidden border border-salt-violet/20 bg-[#05000f]/40 shadow-[0_0_50px_rgba(106,11,207,0.1)]">
             <VioletSymbolRain speed="medium" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
          </div>

        </div>
      </div>

      {/* Sticky split-screen scroll section */}
      <div ref={trackRef} style={{ height: sectionHeight }}>
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="grid h-full grid-cols-2">

            {/* LEFT: Dark panel, animation cycles */}
            <div className="bg-[#141414]">
              <AnimationPanel globalProgress={scrollYProgress} />
            </div>

            {/* RIGHT: Dark panel, text fades per step */}
            <div className="relative bg-[#141414] border-l border-white/5 overflow-hidden">
              {STEPS.map((step, index) => (
                <StepTextPanel
                  key={index}
                  step={step}
                  index={index}
                  globalProgress={scrollYProgress}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
