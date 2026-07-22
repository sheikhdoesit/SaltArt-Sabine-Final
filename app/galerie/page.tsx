"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState, useRef } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import LightboxModal from "@/components/gallery/LightboxModal";
import { paintings } from "@/data/paintings";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function PaintingCard({
  painting,
  onClick,
}: {
  painting: (typeof paintings)[number];
  onClick: () => void;
}) {
  const [zoomScale, setZoomScale] = useState(1);
  const scaleRef = useRef(1);
  const rafRef = useRef<number | null>(null);

  const startZoom = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const tick = () => {
      scaleRef.current = scaleRef.current + 0.0024;
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

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      role="button"
      tabIndex={0}
      className="group relative mb-4 cursor-pointer break-inside-avoid overflow-hidden rounded-sm border border-white/5 bg-white/5 transition-all duration-700 hover:border-white/20"
      onClick={onClick}
      onMouseEnter={startZoom}
      onMouseLeave={stopZoom}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <div className="relative overflow-hidden w-full h-auto">
        <div
          style={{
            transform: `scale(${zoomScale})`,
            transformOrigin: "center center",
            willChange: "transform",
          }}
        >
          <Image
            src={painting.src}
            alt={painting.title}
            width={1000}
            height={800}
            className="block h-auto w-full object-contain"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </div>
      </div>

      <div
        className="
          absolute inset-0 flex flex-col justify-end p-6
          transition-all duration-700 ease-in-out bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100
        "
      >
        <div
          className="
            translate-y-4 transform transition-all duration-700 ease-out
          "
        >
          <div className="mb-2 h-0.5 w-10 bg-salt-crimson" />
          <p className="mb-0.5 font-sans text-lg font-extrabold text-white tracking-tight leading-tight">
            {painting.title}
          </p>
          <p className="font-sans text-[0.55rem] font-bold tracking-[0.2em] text-white/60 uppercase">
            Story entdecken
          </p>
        </div>
      </div>
    </div>
  );
}

export default function GaleriePage() {
  useScrollReveal();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = "";
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i + 1) % paintings.length,
    );
  }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i - 1 + paintings.length) % paintings.length,
    );
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") {
        closeLightbox();
        return;
      }
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#141414] relative overflow-hidden">
        {/* Decorative background glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-salt-violet/5 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-salt-crimson/5 blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-[1140px] px-6 pt-20 pb-12 relative z-10">
          <div className="mb-8 flex items-center gap-4 animate-fade-slide-up" style={{ animationDelay: "100ms" }}>
            <span className="inline-block h-px w-10 shrink-0 bg-salt-crimson" />
          <p className="font-sans text-[0.65rem] font-bold tracking-[0.35em] text-salt-crimson uppercase">
              {paintings.length} Originale
            </p>
          </div>

          <h1
            className="mb-4 font-sans font-extrabold leading-[1.0] tracking-[-0.03em] text-white animate-fade-slide-up"
            style={{ fontSize: "clamp(2.5rem, 8vw, 4.5rem)", animationDelay: "200ms" }}
          >
            Die Galerie
          </h1>

          <div className="mb-8 h-0.5 w-14 bg-salt-crimson animate-fade-slide-up" style={{ animationDelay: "300ms" }} />

          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between animate-fade-slide-up" style={{ animationDelay: "400ms" }}>
            <p className="max-w-[560px] font-sans text-base md:text-lg font-medium leading-[1.7] text-white/50">
              Jedes Werk ist einmalig — entstanden aus der Energie des Empfängers.
              Kein Bild gleicht dem anderen. Klicke auf ein Bild, um es vollständig zu
              sehen.
            </p>
            <Link
              href="/"
              className="shrink-0 whitespace-nowrap border-b border-white/10 pb-1 font-sans text-sm font-bold text-white transition-all duration-300 hover:text-salt-crimson hover:border-salt-crimson tracking-tight"
            >
              ← Zur Startseite
            </Link>
          </div>
        </div>

        <div className="mx-auto max-w-[1240px] px-6 pb-32 relative z-10">
          <div className="columns-1 gap-4 sm:columns-2 md:columns-3 lg:columns-4">
            {paintings.map((painting, index) => (
              <PaintingCard
                key={painting.filename}
                painting={painting}
                onClick={() => openLightbox(index)}
              />
            ))}
          </div>
        </div>

        {/* Contact CTA Section */}
        <div className="border-t border-white/5 bg-white/5 backdrop-blur-md px-6 py-24 text-center relative z-10">
          <p className="mb-4 font-sans text-base md:text-lg font-medium text-white/40 uppercase tracking-[0.1em]">
            Möchtest Du ein eigenes Energie-Bild?
          </p>
          <h2
            className="mb-10 font-sans font-extrabold tracking-[-0.03em] text-white"
            style={{ fontSize: "clamp(1.8rem, 5vw, 3.5rem)" }}
          >
            Jedes Bild entsteht nur einmal —{" "}
            <span className="text-salt-crimson">für Dich.</span>
          </h2>
          <a
            href="https://calendly.com/salt-art/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-sm bg-salt-crimson px-12 py-5 font-sans text-[0.7rem] font-bold tracking-[0.25em] text-white uppercase transition-all duration-300 hover:bg-[#b8002a] hover:scale-105 shadow-2xl"
          >
            Gespräch vereinbaren
          </a>
        </div>
      </main>

      <Footer />

      {lightboxIndex !== null ? (
        <LightboxModal
          painting={paintings[lightboxIndex]}
          currentIndex={lightboxIndex}
          total={paintings.length}
          onClose={closeLightbox}
          onNext={goNext}
          onPrev={goPrev}
        />
      ) : null}
    </>
  );
}
