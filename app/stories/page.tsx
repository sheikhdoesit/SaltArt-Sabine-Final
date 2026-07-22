"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";
import { paintings, type Painting } from "@/data/paintings";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const storyPaintings = paintings.filter((p) => p.story);
const COUNT = storyPaintings.length;
const VH_PER_SLIDE = 350;

// Words to highlight in crimson
const POWER_WORDS = new Set([
  "Millionenverlust","Insolvenz","Krebs","Metastasen","Ehe","Scheidung",
  "Trennung","Leidenschaft","Erfolg","Klarheit","Ruhe","Freiheit",
  "Lebensfreude","Liebe","glücklich","gerettet","abgewendet","Mut",
  "Veränderung","Entscheidung","Lebenstraum","70%","Partnerschaft",
  "Energie","Sponsoren","Wirkung","Transformation","Inneren","erfüllt",
]);

function clean(w: string) {
  return w.replace(/[„"!.,\-:;()'"?]/g, "");
}

// ─── Single animated word ─────────────────────────────────────────────────────
function Word({
  word,
  progress,
  start,
  end,
  isPower,
}: {
  word: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
  isPower: boolean;
}) {
  const opacity = useTransform(progress, [start, end], [0, 1]);
  const y = useTransform(progress, [start, end], [10, 0]);
  return (
    <motion.span
      style={{
        opacity,
        y,
        color: isPower ? "#D40000" : "inherit",
        display: "inline-block",
        marginRight: "0.28em",
        willChange: "opacity, transform",
        fontWeight: isPower ? 700 : "inherit",
      }}
    >
      {word}
    </motion.span>
  );
}

// ─── Word-by-word animated paragraph ─────────────────────────────────────────
function AnimatedWords({
  text,
  progress,
  phaseStart,
  phaseEnd,
}: {
  text: string;
  progress: MotionValue<number>;
  phaseStart: number;
  phaseEnd: number;
}) {
  const words = text.split(" ");
  return (
    <span style={{ lineHeight: 1.8 }}>
      {words.map((word, i) => {
        const frac = i / words.length;
        const nextFrac = (i + 1) / words.length;
        const wordStart = phaseStart + frac * (phaseEnd - phaseStart);
        const wordEnd = phaseStart + nextFrac * (phaseEnd - phaseStart);
        const isPower = POWER_WORDS.has(clean(word));
        return (
          <Word
            key={i}
            word={word}
            progress={progress}
            start={wordStart}
            end={wordEnd}
            isPower={isPower}
          />
        );
      })}
    </span>
  );
}

// ─── Right-side text panel for one story (fixed position, fades in/out) ──────
function StoryTextPanel({
  painting,
  index,
  globalProgress,
}: {
  painting: Painting;
  index: number;
  globalProgress: MotionValue<number>;
}) {
  const slideStart = index / COUNT;
  const slideEnd = (index + 1) / COUNT;

  // Local 0→1 across this slide's scroll zone
  const local = useTransform(globalProgress, [slideStart, slideEnd], [0, 1]);

  // Whole panel fades in then out
  const panelOpacity = useTransform(local, [0, 0.08, 0.88, 1], [0, 1, 1, 0]);
  const panelY = useTransform(local, [0, 0.08], [30, 0]);

  // Individual element entrances
  const labelOpacity = useTransform(local, [0.04, 0.13], [0, 1]);
  const titleOpacity = useTransform(local, [0.10, 0.20], [0, 1]);
  const titleY = useTransform(local, [0.10, 0.20], [16, 0]);
  const hlOpacity = useTransform(local, [0.18, 0.27], [0, 1]);
  const hlY = useTransform(local, [0.18, 0.27], [12, 0]);
  const divOpacity = useTransform(local, [0.25, 0.32], [0, 1]);
  const plabelOpacity = useTransform(local, [0.29, 0.36], [0, 1]);
  const rlabelOpacity = useTransform(local, [0.57, 0.62], [0, 1]);

  return (
    <motion.div
      style={{ opacity: panelOpacity, y: panelY }}
      className="absolute inset-0 flex flex-col justify-center px-10 md:px-14 xl:px-20 py-16"
    >
      {/* Story counter label */}
      <motion.div style={{ opacity: labelOpacity }} className="flex items-center gap-3 mb-5">
        <span className="h-px w-6 bg-salt-crimson shrink-0" />
        <p className="text-[0.6rem] font-bold tracking-[0.3em] text-salt-crimson uppercase">
          Geschichte {index + 1} von {COUNT}
        </p>
      </motion.div>

      {/* Painting title */}
      <motion.div style={{ opacity: titleOpacity, y: titleY }} className="mb-1">
        <p className="text-white/25 text-[0.55rem] uppercase tracking-widest font-bold mb-1">
          Wirkungs-Bild™
        </p>
        <h2 className="font-sans text-2xl md:text-3xl xl:text-4xl font-extrabold tracking-tighter leading-tight text-white">
          „{painting.title}"
        </h2>
      </motion.div>

      {/* Headline */}
      <motion.p
        style={{ opacity: hlOpacity, y: hlY }}
        className="font-sans text-base md:text-lg font-bold text-salt-violet leading-snug mt-3 mb-4"
      >
        {painting.story!.headline}
      </motion.p>

      {/* Divider */}
      <motion.div style={{ opacity: divOpacity }} className="h-px w-14 bg-white/10 mb-5" />

      {/* Problem */}
      <div className="mb-5">
        <motion.p
          style={{ opacity: plabelOpacity }}
          className="text-[0.55rem] font-bold uppercase tracking-[0.22em] text-white/30 mb-2"
        >
          Problem · Ausgangslage
        </motion.p>
        <p className="text-sm md:text-base text-white/50 italic leading-relaxed">
          <AnimatedWords
            text={painting.story!.problem}
            progress={local}
            phaseStart={0.33}
            phaseEnd={0.56}
          />
        </p>
      </div>

      {/* Result */}
      <div className="border-l-2 border-salt-crimson pl-4">
        <motion.p
          style={{ opacity: rlabelOpacity }}
          className="text-[0.55rem] font-bold uppercase tracking-[0.22em] text-salt-crimson mb-2"
        >
          Ergebnis · Wirkung
        </motion.p>
        <p className="text-sm md:text-base text-white font-medium leading-relaxed">
          <AnimatedWords
            text={painting.story!.result}
            progress={local}
            phaseStart={0.60}
            phaseEnd={0.83}
          />
        </p>
      </div>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function StoriesPage() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: trackRef });

  // Create a stepped transform for X so the image stays locked while text is being read
  const scrollPoints: number[] = [];
  const xValues: string[] = [];

  for (let i = 0; i < COUNT; i++) {
    const start = i / COUNT;
    const end = (i + 1) / COUNT;
    
    // Initial point for the slide
    scrollPoints.push(start);
    xValues.push(`-${i * 50}vw`);
    
    // Hold point - keep image locked for most of the slide
    scrollPoints.push(end - (0.1 / COUNT)); 
    xValues.push(`-${i * 50}vw`);
  }

  const x = useTransform(scrollYProgress, scrollPoints, xValues);

  const sectionHeight = `${COUNT * VH_PER_SLIDE}vh`;

  return (
    <main className="bg-[#141414] text-white">
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Progress bar */}
      <motion.div
        className="fixed bottom-0 left-0 h-[3px] bg-salt-crimson origin-left z-50 w-full"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Page Header */}
      <div className="relative z-10 pt-32 pb-6 px-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="h-px w-8 bg-salt-crimson" />
          <p className="text-[0.65rem] font-bold tracking-[0.3em] text-salt-crimson uppercase">
            Wirkungs-Bilder™
          </p>
          <span className="h-px w-8 bg-salt-crimson" />
        </div>
        <h1 className="font-sans text-5xl md:text-7xl font-extrabold tracking-tighter leading-none text-white mb-3">
          Echte Geschichten.
        </h1>
        <p className="text-white/30 text-sm">Scroll langsam — die Worte kommen zu Dir.</p>
      </div>

      {/* Scroll section */}
      <div ref={trackRef} style={{ height: sectionHeight }}>
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="grid grid-cols-2 h-full">

            {/* LEFT col: images move horizontally */}
            <div className="relative overflow-hidden h-full flex items-center">
              <motion.div style={{ x }} className="flex will-change-transform">
                {storyPaintings.map((painting, index) => (
                  <div
                    key={painting.filename}
                    className="flex-shrink-0 w-[50vw] h-screen flex items-center justify-center px-6 md:px-10"
                  >
                    <div className="relative w-full max-w-[340px] aspect-[3/4] shadow-[0_40px_100px_rgba(0,0,0,0.8)] rounded overflow-hidden">
                      <Image
                        src={painting.src}
                        alt={painting.title}
                        fill
                        className="object-contain p-2 rounded"
                        sizes="40vw"
                        priority={index < 2}
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT col: text stays fixed, each story panel fades in/out */}
            <div className="relative h-full overflow-hidden border-l border-white/5">
              {storyPaintings.map((painting, index) => (
                <StoryTextPanel
                  key={painting.filename}
                  painting={painting}
                  index={index}
                  globalProgress={scrollYProgress}
                />
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="bg-salt-white text-salt-black py-28 px-6">
        <div className="max-w-[700px] mx-auto text-center flex flex-col items-center gap-8">
          <div className="h-px w-12 bg-salt-crimson" />
          <h2 className="font-sans text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight">
            Bereit für Deine <br />
            <span className="text-salt-violet">eigene Geschichte?</span>
          </h2>
          <p className="text-lg text-salt-muted leading-relaxed max-w-md">
            Ein Wirkungs-Bild™ ist mehr als Kunst. Es ist Dein persönlicher
            Schlüssel zu Klarheit, Ruhe und Erfolg.
          </p>
          <Link
            href="/#kontakt"
            className="inline-flex items-center gap-3 bg-salt-black text-white px-8 py-4 font-bold text-sm tracking-wider uppercase hover:bg-salt-violet transition-colors duration-300"
          >
            Analyse-Gespräch buchen <span>→</span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
