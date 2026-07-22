"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { paintings } from "@/data/paintings";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { primaryCtaClasses } from "@/lib/ctaClasses";
import LightboxModal from "@/components/gallery/LightboxModal";

export default function DieGalerie() {
  useScrollReveal();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoomScale, setZoomScale] = useState(1);
  const sliderRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const scaleRef = useRef(1);

  // We'll use 12 paintings for the slider
  const displayedPaintings = paintings.slice(0, 12);

  useEffect(() => {
    if (isPaused || isLightboxOpen) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % displayedPaintings.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, isLightboxOpen, displayedPaintings.length]);

  // Reset zoom when active image changes
  useEffect(() => {
    scaleRef.current = 1;
    setZoomScale(1);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  }, [activeIndex]);

  const startZoom = () => {
    const tick = () => {
      scaleRef.current = scaleRef.current + 0.0024; // additional 15% slower continuous zoom-in
      setZoomScale(scaleRef.current);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
  };

  const stopZoom = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    scaleRef.current = 1;
    setZoomScale(1);
  };

  const handleNext = useCallback(() => setActiveIndex((prev) => (prev + 1) % displayedPaintings.length), [displayedPaintings.length]);
  const handlePrev = useCallback(() => setActiveIndex((prev) => (prev - 1 + displayedPaintings.length) % displayedPaintings.length), [displayedPaintings.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isLightboxOpen) return; // Lightbox handles its own keyboard navigation
      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, handleNext, handlePrev]);

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setIsLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <section id="galerie" className="bg-[#141414] min-h-screen flex flex-col justify-center px-6 py-20 overflow-hidden relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-salt-violet/10 blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-[1240px] w-full relative z-10 px-0 md:px-10">
        {/* Header Section */}
        <div className="animate-fade-slide-up opacity-0 mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block h-px w-8 shrink-0 bg-salt-crimson" />
            <p className="font-sans text-[0.65rem] font-bold tracking-[0.35em] text-salt-crimson uppercase">
              Innere Schätze
            </p>
          </div>

          <h2 className="font-sans text-3xl md:text-5xl lg:text-7xl font-extrabold leading-[1.05] tracking-[-0.03em] text-white mb-10">
            Die Wahrheit ist: Alles, was Du brauchst, ist bereits in Dir!
          </h2>

          <div className="h-0.5 w-14 bg-salt-crimson mb-10" />

          <div className="flex flex-col gap-8 text-white/50 mb-12">
            <p className="max-w-[700px] font-sans text-lg md:text-xl leading-[1.8] font-medium">
              Oft ist dieser Reichtum nur tief im Unterbewusstsein vergraben und wartet darauf, ans Licht geholt zu werden. Und genau dafür ist ein persönliches Wirkungs-Bild™ da. Schon kurze Blicke genügen, um Deine inneren Kraftquellen zu aktivieren und blockierende Muster Stück für Stück aufzulösen.
            </p>
            
            <p className="max-w-[700px] font-sans text-lg md:text-xl leading-[1.8] font-medium">
              Im Prinzip beseitigt dann Dein Unterbewusstsein von ganz allein alle Hindernisse. So kannst Du bewusst Dein ganzes Potential nutzen und Deinen Erfolg & Deine Erfüllung erleben.
            </p>
          </div>

          <p className="font-sans text-2xl md:text-3xl font-extrabold text-white tracking-tight border-l-2 border-salt-crimson pl-8 py-2">
            Bist Du bereit, die Veränderung in Dir zu <span className="text-salt-crimson">aktivieren?</span>
          </p>
        </div>

        {/* Gallery Slider Container */}
        <div 
          className="relative mt-8 md:mt-12 h-[350px] md:h-[500px] w-full flex items-center justify-center animate-fade-slide-up opacity-0"
          style={{ animationDelay: "200ms" }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 md:left-4 z-30 h-10 w-10 md:h-14 md:w-14 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white shadow-2xl backdrop-blur-md transition-all hover:bg-salt-crimson"
          >
            ←
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-0 md:right-4 z-30 h-10 w-10 md:h-14 md:w-14 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white shadow-2xl backdrop-blur-md transition-all hover:bg-salt-crimson"
          >
            →
          </button>

          {/* Slider Rail */}
          <div className="relative w-full h-full flex items-center justify-center">
            {displayedPaintings.map((painting, index) => {
              // Calculate relative position for focus effect
              let position = index - activeIndex;
              if (position < -Math.floor(displayedPaintings.length / 2)) position += displayedPaintings.length;
              if (position > Math.floor(displayedPaintings.length / 2)) position -= displayedPaintings.length;

              const isActive = position === 0;
              const isSibling = Math.abs(position) === 1;
              const isVisible = Math.abs(position) <= 2;

              return (
                <div
                  key={painting.filename}
                  className={`absolute transition-all duration-700 ease-in-out cursor-pointer ${
                    isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                  style={{
                    transform: `translateX(${position * (isActive ? 0 : position > 0 ? 120 : -120)}%) 
                                scale(${isActive ? 1.14 : isSibling ? 0.76 : 0.57}) 
                                translateZ(${isActive ? 0 : -100}px)`,
                    zIndex: 20 - Math.abs(position),
                    filter: position > 0 ? "blur(12px) brightness(0.7)" : position < 0 ? "blur(4px) brightness(0.9)" : "none",
                  }}
                  onClick={() => {
                    if (isActive) {
                      openLightbox(index);
                    } else {
                      setActiveIndex(index);
                    }
                  }}
                >
                  <div
                    className={`relative aspect-[3/4] w-[190px] md:w-[304px] overflow-hidden shadow-2xl bg-[#1a1a1a] ${isActive ? "ring-2 ring-salt-crimson/30" : ""}`}
                    onMouseEnter={() => isActive && startZoom()}
                    onMouseLeave={() => isActive && stopZoom()}
                  >
                    <div
                      className="absolute inset-0"
                      style={{
                        transform: isActive ? `scale(${zoomScale})` : "scale(1)",
                        transformOrigin: "center center",
                        willChange: "transform",
                      }}
                    >
                      <Image
                        src={painting.src}
                        alt={painting.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 200px, 320px"
                        priority={isActive}
                      />
                    </div>


                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="animate-fade-slide-up opacity-0 mt-16 flex flex-col items-center" style={{ animationDelay: "400ms" }}>
           <Link
            href="/galerie"
            className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 text-[0.7rem] font-bold uppercase tracking-[0.2em] hover:bg-salt-crimson hover:text-white transition-all duration-300"
          >
            Vollständige Galerie ansehen (38+) →
          </Link>
          <div className="mt-10 flex justify-center gap-2">
            {displayedPaintings.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-1.5 transition-all duration-500 rounded-full ${idx === activeIndex ? "w-10 bg-salt-crimson" : "w-2 bg-white/10"}`}
              />
            ))}
          </div>
        </div>
      </div>

      {isLightboxOpen && (
        <LightboxModal
          painting={displayedPaintings[activeIndex]}
          currentIndex={activeIndex}
          total={displayedPaintings.length}
          onClose={closeLightbox}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </section>
  );
}
