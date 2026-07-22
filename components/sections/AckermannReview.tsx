"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const REVIEWS = [
  {
    id: "ackermann",
    name: "Dr. Josef Ackermann",
    role: "Ehem. Vorstandsvorsitzender · Deutsche Bank",
    label: "Referenz · Deutsche Bank",
    headline: "Vor Energie sprühendes Kunstwerk",
    quote: "Ich möchte es nicht versäumen, Ihnen für das speziell für mich geschaffene Kunstwerk zu danken! Ihr vor Energie sprühendes Bild hat bereits einen sehr schönen Platz in meinem Büro gefunden.",
    context: "Das Bild \u201euniverselle Reinigung\u201c wurde für Dr. Josef Ackermann angefertigt. Das persönliche Dankschreiben drückt höchste Anerkennung für Sabines Arbeit aus.",
    paintingSrc: "/paintings/6 universelle Reinigung.jpg",
    paintingTitle: "universelle Reinigung",
    avatarSrc: "/Joseph.png",
  },
  {
    id: "tolle",
    name: "Corvin Tolle",
    role: "GGF Tolle Immobilien GmbH und Tolle Hausverwaltung GmbH, Berlin",
    label: "Tolle Immobilien",
    headline: "Verlust in Millionenhöhe abgewendet",
    quote: "Kein Arbeitstag ohne mein Wirkungs-Bild™: Sommer 2010 - als Unternehmer war ich erfolgreich, doch privat hatte ich mich in eine heikle Situation manövriert. Ich hatte einem Geschäftspartner vertraut und stand kurz vor einem Verlust in Millionenhöhe. Die Situation schien auswegslos, bis ich von Sabine mein persönliches Wirkungs-Bild™ \"sorglos geborgen\" erhielt. Ich kann nicht sagen, was dieses Bild in mir und mit mir gemacht hat. Jedenfalls sah ich innerhalb weniger Wochen plötzlich Wege, die vorher nicht da zu sein schienen. Ich wurde den schädlichen Geschäftspartner los und konnte das finanzielle Desaster abwenden. Das Bild hat seitdem für immer einen Ehrenplatz in meinem Büro.",
    context: "Corvin Tolle nutzt die Kraft der Energie-Bilder seit über einem Jahrzehnt, um auch in kritischen Momenten Klarheit und Erfolg zu sichern.",
    paintingSrc: "/paintings/sorglos geborgen.jpg",
    paintingTitle: "sorglos geborgen",
    avatarSrc: "/Corvin Tolle neu - Edited.png",
  },
];

const COUNT = REVIEWS.length;
const VH_PER_REVIEW = 350;

// ─── Left Portrait panel ──────────────────────────────────────────────────────
function PaintingPanel({
  review,
  index,
  globalProgress,
}: {
  review: (typeof REVIEWS)[0];
  index: number;
  globalProgress: MotionValue<number>;
}) {
  const start = index / COUNT;
  const end = (index + 1) / COUNT;
  const local = useTransform(globalProgress, [start, end], [0, 1]);
  const opacity = useTransform(local, [0, 0.12, 0.85, 1], [0, 1, 1, 0]);
  const scale = useTransform(local, [0, 0.12], [1.05, 1]); // Subtle zoom in
  const grayscale = useTransform(local, [0, 0.2], [100, 0]); // Fade grayscale

  return (
    <motion.div
      style={{ opacity }}
      className="absolute inset-0 flex items-center justify-center bg-[#141414]"
    >
      <motion.div 
        style={{ scale, filter: `grayscale(${grayscale}%)` }}
        className="relative w-full h-full overflow-hidden"
      >
        <Image
          src={review.avatarSrc}
          alt={review.name}
          fill
          className="object-cover object-top opacity-50 transition-opacity duration-1000 group-hover:opacity-100"
          sizes="50vw"
          priority={index === 0}
        />
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-[#141414]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-transparent to-transparent" />
      </motion.div>

      {/* Profile label */}
      <div className="absolute bottom-12 left-12 border-l-2 border-salt-crimson bg-black/60 backdrop-blur-sm px-6 py-4">
        <p className="mb-1 font-sans text-[0.6rem] font-bold tracking-[0.3em] text-salt-crimson uppercase">
          Transformation
        </p>
        <p className="font-sans text-xl font-extrabold text-white tracking-tight">
          {review.name}
        </p>
      </div>
    </motion.div>
  );
}

// ─── Right text panel ─────────────────────────────────────────────────────────
function ReviewTextPanel({
  review,
  index,
  globalProgress,
}: {
  review: (typeof REVIEWS)[0];
  index: number;
  globalProgress: MotionValue<number>;
}) {
  const start = index / COUNT;
  const end = (index + 1) / COUNT;
  const local = useTransform(globalProgress, [start, end], [0, 1]);

  const panelOp = useTransform(local, [0, 0.12, 0.85, 1], [0, 1, 1, 0]);
  const panelY = useTransform(local, [0, 0.12], [30, 0]);

  const badgeOp = useTransform(local, [0.05, 0.16], [0, 1]);
  const nameOp = useTransform(local, [0.14, 0.25], [0, 1]);
  const nameY = useTransform(local, [0.14, 0.25], [14, 0]);
  const divOp = useTransform(local, [0.22, 0.30], [0, 1]);
  const quoteOp = useTransform(local, [0.28, 0.45], [0, 1]);
  const quoteY = useTransform(local, [0.28, 0.45], [12, 0]);
  const contextOp = useTransform(local, [0.44, 0.56], [0, 1]);
  const avatarOp = useTransform(local, [0.52, 0.62], [0, 1]);
  const avatarY = useTransform(local, [0.52, 0.62], [10, 0]);
  const paintingLinkOp = useTransform(local, [0.65, 0.75], [0, 1]);

  return (
    <motion.div
      style={{ opacity: panelOp, y: panelY }}
      className="absolute inset-0 flex flex-col justify-center px-8 md:px-12 lg:px-16 py-8 md:py-12"
    >
      {/* Badge */}
      <motion.div
        style={{ opacity: badgeOp }}
        className="inline-flex w-fit items-center gap-2 rounded-sm bg-salt-crimson px-3 py-1 mb-4 shadow-lg"
      >
        <div className="h-1 w-1 shrink-0 rounded-full bg-white animate-pulse" />
        <p className="font-sans text-[0.55rem] font-bold tracking-[0.2em] text-white uppercase">
          {review.label}
        </p>
      </motion.div>

      {/* Name + role */}
      <motion.div style={{ opacity: nameOp, y: nameY }} className="flex flex-col gap-1 mb-4">
        <h3 className="font-sans text-2xl lg:text-3xl xl:text-4xl font-extrabold tracking-tighter text-white leading-tight">
          {review.name}
        </h3>
        <p className="font-sans text-xs md:text-sm font-medium tracking-wide text-white/40">
          {review.role}
        </p>
      </motion.div>

      {/* Quote */}
      <motion.div style={{ opacity: quoteOp, y: quoteY }} className="relative mb-6 group">
        <span className="absolute -top-10 -left-6 font-serif text-[7rem] text-salt-crimson/10 select-none leading-none group-hover:text-salt-crimson/20 transition-colors duration-700">„</span>
        <blockquote className="relative z-10 font-sans text-base md:text-lg leading-[1.6] italic text-white font-medium max-h-[220px] overflow-y-auto pr-4 custom-scrollbar">
          {review.quote}
        </blockquote>
      </motion.div>

      {/* Context area + Link */}
      <motion.div 
        style={{ opacity: avatarOp, y: avatarY }}
        className="flex flex-col gap-4 mt-2"
      >
        <p className="font-sans text-xs md:text-sm leading-[1.6] text-white/50 border-l border-salt-crimson/30 pl-4 italic">
          {review.context}
        </p>

        {/* Compressed Painting Link */}
        <motion.div 
          style={{ opacity: paintingLinkOp }}
          className="group relative flex items-center gap-4 rounded-sm bg-white/5 border border-white/10 p-3 backdrop-blur-md hover:bg-white/10 transition-all duration-500 cursor-pointer overflow-hidden"
        >
          <div className="absolute top-0 left-0 h-full w-0.5 bg-salt-crimson transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
          
          <div className="relative h-14 w-12 shrink-0 shadow-xl overflow-hidden rounded-sm border border-white/10">
            <Image
              src={review.paintingSrc}
              alt={review.paintingTitle}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-1000"
              sizes="60px"
            />
          </div>
          <div className="flex flex-col">
            <p className="font-sans text-[0.5rem] font-bold tracking-[0.2em] text-salt-crimson uppercase">
              Das Resultat
            </p>
            <p className="font-sans text-base font-extrabold text-white tracking-tight leading-tight mb-0.5">
              „{review.paintingTitle}“
            </p>
            <p className="font-sans text-[0.6rem] font-medium text-white/30 group-hover:text-white transition-colors">
              Werk ansehen →
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Pagination dots */}
      <div className="absolute bottom-10 right-10 md:right-14 flex items-center gap-3">
        {REVIEWS.map((_, i) => (
          <div
            key={i}
            className={`h-1 mx-0.5 rounded-full transition-all duration-700 ${
              i === index ? "w-10 bg-salt-crimson shadow-[0_0_10px_rgba(212,0,0,0.5)]" : "w-2 bg-white/10"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────
export default function AckermannReview() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: trackRef });
  const sectionHeight = `${COUNT * VH_PER_REVIEW}vh`;

  return (
    <section id="transformationen" className="bg-[#141414]">
      {/* Heading above sticky area */}
      <div className="bg-[#141414] py-20 px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="inline-block h-px w-8 shrink-0 bg-salt-crimson" />
          <p className="font-sans text-[0.65rem] font-bold tracking-[0.35em] text-salt-crimson uppercase">
            Echte Erlebnisse
          </p>
          <span className="inline-block h-px w-8 shrink-0 bg-salt-crimson" />
        </div>
        <h2
          className="mb-6 font-sans font-extrabold tracking-[-0.03em] text-white leading-[1.05]"
          style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
        >
          Transformationen
        </h2>
        <div className="mx-auto h-0.5 w-14 bg-salt-crimson" />
      </div>

      {/* Sticky split-screen scroll */}
      <div ref={trackRef} style={{ height: sectionHeight }}>
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="grid h-full grid-cols-1 md:grid-cols-2">

            {/* LEFT: Painting images */}
            <div className="relative overflow-hidden bg-[#141414]">
              {REVIEWS.map((review, index) => (
                <PaintingPanel
                  key={review.id}
                  review={review}
                  index={index}
                  globalProgress={scrollYProgress}
                />
              ))}
            </div>

            {/* RIGHT: Review text panel (Dark Glass) */}
            <div className="relative bg-[#141414] border-l border-white/5 overflow-hidden">
              {REVIEWS.map((review, index) => (
                <ReviewTextPanel
                  key={review.id}
                  review={review}
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
