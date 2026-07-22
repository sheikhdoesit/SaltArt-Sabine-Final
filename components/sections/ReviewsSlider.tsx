"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Review {
  id: string;
  initials: string;
  name: string;
  role: string;
  company: string;
  logoSrc: string;
  logoAlt: string;
  stars: number;
  quote: string;
  paintingTitle?: string;
  imageSrc?: string;
}

const reviews: Review[] = [
  {
    id: "ackermann",
    initials: "JA",
    name: "Dr. Josef Ackermann",
    role: "ehem. CEO Deutsche Bank",
    company: "Deutsche Bank, Frankfurt a.M.",
    logoSrc: "/companies/deutsche bank transparent.png",
    logoAlt: "Deutsche Bank",
    stars: 5,
    quote:
      "Ich möchte es nicht versäumen, Ihnen für das speziell für mich geschaffene Kunstwerk zu danken! Ihr vor Energie sprühendes Bild hat bereits einen sehr schönen Platz in meinem Büro gefunden.",
    paintingTitle: "universelle Reinigung",
    imageSrc: "/Dr.Joseph Ackermann.png",
  },
  {
    id: "corvin-tolle",
    initials: "CT",
    name: "Corvin Tolle",
    role: "GGF Tolle Immobilien GmbH",
    company: "Tolle Immobilien GmbH, Berlin",
    logoSrc: "/companies/Tolle Immobilien Logo.png",
    logoAlt: "Tolle Immobilien",
    stars: 5,
    quote:
      "Kein Arbeitstag ohne mein Wirkungs-Bild™: Ich wurde den schädlichen Geschäftspartner los und konnte das finanzielle Desaster abwenden. Das Bild hat seitdem für immer einen Ehrenplatz in meinem Büro.",
    paintingTitle: "sorglos geborgen",
    imageSrc: "/Corvin Tolle neu - Edited.png",
  },
  {
    id: "barbara-engel",
    initials: "BE",
    name: "Barbara Engel",
    role: "Steuerberaterin für Pferdebetriebe",
    company: "Winsheim",
    logoSrc: "/companies/Steuerengel-frei.png",
    logoAlt: "Steuerengel",
    stars: 5,
    quote:
      "Ich habe dem Tod ins Auge geblickt. Durch Sabine und mein Wirkungs-Bild™ habe ich hingesehen, tief in mein Inneres. Kein leichter Weg, aber befreiend. Rückbildung von Metastasen schon mehr als 40% in 2 Monaten!",
    imageSrc: "/Barbara Engel - Edited.png",
  },
  {
    id: "francesco-illuminati",
    initials: "FI",
    name: "Francesco Illuminati",
    role: "Managing Director",
    company: "Illuminati Frutta, Toskana/Italien",
    logoSrc: "/companies/illuminati-logo-2016.png",
    logoAlt: "Illuminati Frutta",
    stars: 5,
    quote:
      'Ob das wirklich funktioniert?, fragte ich mich nach meiner spontanen Bestellung, aber dann erinnerte ich mich mein Bild sofort an "the circle of life". Im Außen war alles schon da — nun bin ich auch bei mir innen angekommen. Friedlich. Eine super Investition!',
    imageSrc: "/Francesco Illuminati - Edited.png",
  },
  {
    id: "grit-kriegel",
    initials: "GK",
    name: "Grit Kriegel",
    role: "Inhaberin Zentrum für Osteopathie",
    company: "Physiotherapie & Hypnose, Bitterfeld",
    logoSrc: "/companies/Grit Kriegel.jpg",
    logoAlt: "Grit Kriegel",
    stars: 5,
    quote:
      "Mein Wirkungs-Bild™ hilft mir, mich abzugrenzen und meine eigene Kraft zu spüren. Ich gehe offensiver mit geschäftlichen Herausforderungen um und habe eine strategische Entscheidung getroffen, die die Mitarbeitergewinnung erleichtert.",
    imageSrc: "/Grit Kriegel weiß - Edited.png",
  },
  {
    id: "holm-von-egidy",
    initials: "HE",
    name: "Dr. phil. Holm von Egidy",
    role: "Systemischer Berater und Coach",
    company: "München",
    logoSrc: "/companies/Constellaris Logo.png",
    logoAlt: "Constellaris",
    stars: 5,
    quote:
      "Es ist ein sehr faszinierender Spiegel, dieses Bild. Magisch. Tief. Vielschichtig. Nicht auslotbar. Schon etwas sehr Kostbares, was Du da machst, oder Dich als Aufgabe ergriffen hat!",
    imageSrc: "/Holm von Egidy Foto - Edited.png",
  },
  {
    id: "louise-van-loon",
    initials: "LL",
    name: "Louise van Loon",
    role: "Expertin für gesunde Schönheit",
    company: "Praxis in Göppingen",
    logoSrc: "/companies/Northwind.png",
    logoAlt: "Northwind",
    stars: 5,
    quote:
      "Danke, liebe Sabine, für mein persönliches Wirkungs-Bild, das für mich eine schöne Leichtigkeit ausstrahlt! Der ganze Raum wirkte gleich größer — das passt schon gut zu meinen neuen Plänen!",
  },
  {
    id: "martin-lerchner",
    initials: "ML",
    name: "Dr. Martin F. Lerchner",
    role: "CEO Synedrion Global Group",
    company: "Berlin, Dubai & Singapur",
    logoSrc: "/companies/wayv_logo.png",
    logoAlt: "wayv",
    stars: 5,
    quote:
      "Das Gemälde ist einfach großartig! Es schafft eine Atmosphäre, die den Geist beruhigt und gleichzeitig die Sinne belebt. Ich bin sehr dankbar, dieses besondere Kunstwerk bei mir zu haben!",
    imageSrc: "/Dr.Martin F. Lerchner.png",
  },
  {
    id: "sabine-schwierzke",
    initials: "SS",
    name: "Sabine Schwierzke",
    role: "Dentalhygienikerin",
    company: "Berlin",
    logoSrc: "/companies/InnerWise.png",
    logoAlt: "InnerWise",
    stars: 5,
    quote:
      "Das Wirkungs-Bild™ sprach mich sofort an und kam direkt an die Wand vor meinen Zahnarztstuhl. Seit 2 Jahren begleitet mich nun jeden Tag die Energie durch meinen Arbeitsalltag, die ich mir gewünscht habe.",
  },
  {
    id: "daniel-ledesma",
    initials: "DL",
    name: "Daniel Ledesma",
    role: "Generalmajor und Militärpilot",
    company: "Quito, Ecuador",
    logoSrc: "/companies/Bundeswehr.png",
    logoAlt: "Bundeswehr",
    stars: 5,
    quote:
      "Eine schwierige Entscheidung: Vielfaches Einkommen oder sichere Pension? Ich weiß nicht wie, aber durch mein Bild änderte ich die Frage und orientierte ich an meinen Werten. Dann fiel die Entscheidung leicht. Großen Dank, Sabine!",
    imageSrc: "/Daniel Ledesma - Foto 2016 - Edited.png",
  },
  {
    id: "petra-koeck",
    initials: "PK",
    name: "Petra Köck",
    role: "Inhaberin Atlas-Zentrum",
    company: "Hettenshausen",
    logoSrc: "/companies/Atlas_Logo.svg",
    logoAlt: "Atlas",
    stars: 5,
    quote:
      "Ständige Sorgen wegen schlechten Nachrichten aus der Schule meines Sohnes lähmten mich. Doch sein Wirkungs-Bild™ änderte die Dynamik. Seine Lehrerin meinte, ich hätte gezaubert. Wir sind glücklich und ich habe wieder Konzentration.",
  },
  {
    id: "alexander-christiani",
    initials: "AC",
    name: "Alexander Christiani",
    role: "GF Christiani Consulting AG",
    company: "Engelberg",
    logoSrc: "/companies/christiani_storymarketing_black_72dpi.png",
    logoAlt: "Christiani",
    stars: 5,
    quote:
      "Ich kann meine Begeisterung nur so zusammenfassen: Für mich strahlt dieses Bild warmen, beschützenden Sonnenschein aus, der die weitere Entfaltung vorantreibt. Noch einmal ganz herzlich danke!",
    imageSrc: "/Alexander Christiani.png",
  },
  {
    id: "daniela-ankenbrand",
    initials: "DA",
    name: "Daniela Thekla Ankenbrand",
    role: "Designerin & Geomantin",
    company: "Potsdam",
    logoSrc: "/companies/PER Medien.png",
    logoAlt: "PER Medien",
    stars: 5,
    quote:
      "Die Energie traf mich sofort. Und die Farben repräsentieren mein Lebensziel. Jetzt arbeite ich in einem Beruf, der mein Herz höher schlagen lässt und in dem ich wirklich glücklich bin.",
  },
  {
    id: "thorsten-schmidt-bader",
    initials: "TS",
    name: "Dr. Thorsten Schmidt-Bader",
    role: "Inhaber movepro TEC",
    company: "Bad Homburg",
    logoSrc: "/companies/Logo HiQ breit.png",
    logoAlt: "HiQ",
    stars: 5,
    quote:
      "WOW - ästhetisch! Noch viel beeindruckender ist für mich die Wirkung. Ich fühle mich beschwingter, energetischer, getragen. Und geschäftlich wird gerade alles, was ich anfasse, zu Gold.",
    imageSrc: "/Dr.Torsten Schmidt-Bader - Edited.png",
  },
];

function useIsMd() {
  const [isMd, setIsMd] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const apply = () => setIsMd(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return isMd;
}

function ReviewCard({
  review,
  isActive,
  onClick,
}: {
  review: Review;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        relative flex flex-col md:flex-row shrink-0 bg-[#222] text-left
        transition-all duration-700 ease-out rounded-sm overflow-hidden border
        ${isActive
          ? "z-10 w-[90vw] md:w-[850px] scale-100 cursor-default opacity-100 border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          : "z-0 w-[85vw] md:w-[750px] scale-[0.93] cursor-pointer border-transparent opacity-60 blur-[2px]"
        }
      `}
    >
      {/* Left side (Image) */}
      {review.imageSrc && (
        <div className="relative w-full h-[220px] md:h-auto md:w-[40%] shrink-0 bg-[#1c1c1c] overflow-hidden">
           <Image
             src={review.imageSrc}
             alt={review.name}
             fill
             className="object-cover md:object-cover md:object-top drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] pointer-events-none"
             sizes="(max-width: 768px) 100vw, 400px"
             priority={isActive}
           />
        </div>
      )}
      
      {/* Right side (Text) */}
      <div className={`flex flex-col justify-center p-6 md:px-10 md:py-8 ${review.imageSrc ? 'md:w-[60%]' : 'w-full'} z-10 bg-[#222]`}>
        <div className="text-salt-crimson font-sans text-5xl leading-[0.8] mb-2 font-bold">„</div>
        
        <h3 className="font-sans text-base md:text-lg font-bold leading-[1.5] text-white mb-4">
          {review.quote}
        </h3>

        <p className="font-sans text-sm font-bold text-white mb-4">
          — {review.name}
        </p>

        <div className="flex flex-col gap-1 border-t border-white/10 pt-4">
          <p className="font-sans text-xs text-white/50 leading-relaxed">
            <span className="font-bold text-white/70">Rolle:</span> {review.role}
          </p>
          <p className="font-sans text-xs text-white/50 leading-relaxed">
            <span className="font-bold text-white/70">Unternehmen:</span> {review.company}
          </p>
        </div>
      </div>
    </button>
  );
}

export default function ReviewsSlider() {
  useScrollReveal();

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const isMd = useIsMd();

  const goTo = useCallback((index: number) => {
    setActiveIndex(((index % reviews.length) + reviews.length) % reviews.length);
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i + 1) % reviews.length);
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + reviews.length) % reviews.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(goNext, 5000);
    return () => clearInterval(id);
  }, [activeIndex, isPaused, goNext]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goPrev();
      } else if (e.key === "ArrowRight") {
        goNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev]);

  return (
    <section className="overflow-hidden bg-[#141414] py-16 md:py-24 relative">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-salt-violet/5 blur-[100px] pointer-events-none" />
      
      <div className="mx-auto mb-12 max-w-[800px] px-6 text-center relative z-10">
        <div
          className="reveal-on-scroll mb-8 flex items-center justify-center gap-4"
          style={{ transitionDelay: "0ms" }}
        >
          <span className="inline-block h-px w-10 shrink-0 bg-salt-crimson" />
          <p className="font-sans text-[0.65rem] font-bold tracking-[0.35em] text-salt-crimson uppercase">
            Echte Kundenstimmen
          </p>
          <span className="inline-block h-px w-10 shrink-0 bg-salt-crimson" />
        </div>

        <h2
          className="reveal-on-scroll mb-6 font-sans font-extrabold tracking-[-0.03em] text-white leading-[1.05]"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            transitionDelay: "100ms",
          }}
        >
          Was meine Kunden sagen
        </h2>

        <div
          className="reveal-on-scroll mx-auto h-0.5 w-14 bg-salt-crimson"
          style={{ transitionDelay: "160ms" }}
        />
      </div>

      {/* Slider Track Area */}
      <div
        className="relative z-10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Soft edge masks */}
        <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-20 w-32 bg-gradient-to-r from-[#141414] to-transparent hidden xl:block" />
        <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-20 w-32 bg-gradient-to-l from-[#141414] to-transparent hidden xl:block" />

        <div className="relative flex items-center h-[520px] md:h-[450px]">
          <motion.div 
            className="flex gap-6 md:gap-10 px-[10vw] md:px-[25vw]"
            animate={{ 
              x: isMd 
                ? -(activeIndex * (750 + 40)) // card width + gap
                : -(activeIndex * (300 + 24)) // mobile width + gap (approx)
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {reviews.map((review, index) => (
              <ReviewCard
                key={`${review.name}-${index}`}
                review={review}
                isActive={index === activeIndex}
                onClick={() => goTo(index)}
              />
            ))}
          </motion.div>
        </div>
      </div>

      <div className="mt-8 md:mt-10 flex items-center justify-center gap-6 px-6 relative z-10">
        <button
          type="button"
          onClick={goPrev}
          className="flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 font-sans text-lg text-white backdrop-blur-md transition-all duration-300 hover:bg-salt-crimson hover:border-salt-crimson"
          aria-label="Vorherige Bewertung"
        >
          ←
        </button>

        <div className="flex min-w-[5rem] items-center justify-center gap-3">
          <span className="font-sans text-xs tracking-[0.1em] text-white/40 md:hidden font-bold">
            {activeIndex + 1} / {reviews.length}
          </span>
          <div className="hidden items-center gap-3 md:flex">
            {reviews.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goTo(index)}
                className={`
                h-1.5 cursor-pointer rounded-full transition-all duration-500
                ${index === activeIndex
                  ? "w-10 bg-white"
                  : "w-1.5 bg-white/10 hover:bg-white/30"
                }
              `}
                aria-label={`Gehe zu Bewertung ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={goNext}
          className="flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 font-sans text-lg text-white backdrop-blur-md transition-all duration-300 hover:bg-salt-crimson hover:border-salt-crimson"
          aria-label="Nächste Bewertung"
        >
          →
        </button>
      </div>
    </section>
  );
}
