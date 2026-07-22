"use client";

import { useEffect, useRef, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const questions = [
  "Vielleicht wünschst Du Dir mehr Klarheit in schwierigen Entscheidungen?",
  "Vielleicht vermisst Du ein tiefes Gefühl von Ruhe und Sicherheit?",
  "Vielleicht spürst Du, dass Dein volles Potential noch ungenutzt ist?",
  "Vielleicht suchst Du nach einem Weg, der keine weitere Zeit kostet?",
];

export default function DiFrage() {
  useScrollReveal();
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % questions.length);
        setVisible(true);
      }, 400);
    }, 3200);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section id="die-frage" className="bg-[#141414] px-6 min-h-screen flex flex-col justify-center py-20 overflow-hidden relative">
      {/* Subtle glow */}
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-salt-violet/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto flex max-w-[840px] flex-col items-center text-center relative z-10">

        {/* Label-Badge style */}
        <div className="reveal-on-scroll mb-8 flex items-center gap-3" style={{ transitionDelay: "0ms" }}>
          <span className="inline-block h-px w-8 shrink-0 bg-salt-crimson" />
          <p className="font-sans text-[0.65rem] font-bold uppercase tracking-[0.35em] text-salt-crimson">
            DU BIST HIER, WEIL...
          </p>
          <span className="inline-block h-px w-8 shrink-0 bg-salt-crimson" />
        </div>

        {/* Heading Focal Style */}
        <h2
          className="reveal-on-scroll mb-8 font-sans font-extrabold leading-[1.05] tracking-[-0.03em] text-white text-[clamp(2rem,5vw,3.8rem)]"
          style={{ transitionDelay: "100ms" }}
        >
          Du hast alles erreicht.
          <br />
          Und spürst dennoch —
          <br />
          <em className="italic text-salt-violet not-underline">da ist noch etwas.</em>
        </h2>

        {/* Sub-copy Stories style */}
        <p
          className="reveal-on-scroll mb-10 max-w-[560px] font-sans text-base md:text-lg font-medium leading-[1.8] text-white/60"
          style={{ transitionDelay: "200ms" }}
        >
          Erfolg, Ansehen, Ergebnisse. Von außen stimmt alles.
          Doch ein leises Gefühl lässt sich nicht wegdenken.
          Dein Verstand hat dich weit gebracht — aber hier kommt er nicht weiter.
        </p>

        {/* Animated rotating question cards - Dark Glass */}
        <div
          className="reveal-on-scroll w-full max-w-[620px] mb-12"
          style={{ transitionDelay: "300ms" }}
        >
          {/* Dot indicators Premium */}
          <div className="flex justify-center gap-2.5 mb-8">
            {questions.map((_, i) => (
              <button
                key={i}
                onClick={() => { setVisible(false); setTimeout(() => { setActiveIndex(i); setVisible(true); }, 300); }}
                className={`h-1.5 rounded-full transition-all duration-500 ${i === activeIndex ? "w-10 bg-white" : "w-2 bg-white/10"}`}
              />
            ))}
          </div>

          {/* Question display - Dark Glass */}
          <div className="relative overflow-hidden rounded-sm border border-white/10 bg-white/5 px-10 py-10 shadow-2xl backdrop-blur-md">
            {/* Decorative animated ring in background */}
            <svg
              className="absolute right-6 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none"
              width="140" height="140" viewBox="0 0 72 72"
              style={{ overflow: "visible" }}
            >
              <circle cx="36" cy="36" r="20" fill="none" stroke="#6A0BCF" strokeWidth="1">
                <animate attributeName="r" values="20;28;20" dur="3s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1" keyTimes="0;0.5;1" />
                <animate attributeName="opacity" values="1;0.3;1" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="36" cy="36" r="30" fill="none" stroke="#D40000" strokeWidth="0.6">
                <animate attributeName="r" values="30;36;30" dur="4s" begin="0.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1" keyTimes="0;0.5;1" />
                <animate attributeName="opacity" values="0.6;0.1;0.6" dur="4s" begin="0.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="36" cy="36" r="4" fill="#D40000">
                <animate attributeName="r" values="4;5.5;4" dur="2s" repeatCount="indefinite" />
              </circle>
            </svg>

            <p
              className="relative font-sans text-xl md:text-2xl font-bold italic leading-[1.45] text-white transition-all duration-400 tracking-tight"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 0.4s ease, transform 0.4s ease",
              }}
            >
              „{questions[activeIndex]}"
            </p>
          </div>
        </div>

        {/* Blockquote Stories style */}
        <blockquote
          className="reveal-on-scroll mb-10 max-w-[500px] font-sans text-lg md:text-xl font-medium italic leading-[1.65] text-white/70"
          style={{ transitionDelay: "450ms" }}
        >
          „An der Spitze ist es einsam.
          <br />
          Vielleicht ist es Zeit,
          <br />
          Rat aus Deinem Innern anzunehmen."
        </blockquote>

        <div className="reveal-on-scroll h-0.5 w-14 bg-salt-crimson" style={{ transitionDelay: "550ms" }} />
      </div>
    </section>
  );
}
