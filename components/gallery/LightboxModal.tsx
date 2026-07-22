"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Painting } from "@/data/paintings";

interface LightboxModalProps {
  painting: Painting;
  currentIndex: number;
  total: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function LightboxModal({
  painting,
  currentIndex,
  total,
  onClose,
  onNext,
  onPrev,
}: LightboxModalProps) {
  const [zoom, setZoom] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [showStory, setShowStory] = useState(true);

  const zoomIn = () => setZoom((z) => Math.min(z + 0.5, 3));
  const zoomOut = () => setZoom((z) => Math.max(z - 0.5, 1));

  useEffect(() => {
    if (zoom === 1) setPosition({ x: 0, y: 0 });
  }, [zoom]);

  const resetZoom = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleNext = () => {
    resetZoom();
    onNext();
  };

  const handlePrev = () => {
    resetZoom();
    onPrev();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      else if (e.key === "ArrowRight") handleNext();
      else if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onNext, onPrev, onClose]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom <= 1) return;
    e.preventDefault();
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={painting.title}
      className="fixed inset-0 z-50 flex flex-col bg-black/95 text-white"
    >
      {/* Top Header */}
      <div className="z-10 flex shrink-0 items-center justify-between px-6 py-4 border-b border-white/10">
        <div className="flex flex-col gap-0.5">
          <p className="font-sans text-sm font-semibold">
            {painting.title}
          </p>
          <p className="font-sans text-xs font-normal tracking-[0.06em] text-white/40">
            {currentIndex + 1} / {total}
          </p>
        </div>

        <div className="flex items-center gap-2">
           {painting.story && (
             <button
                onClick={() => setShowStory(!showStory)}
                className={`flex h-9 items-center gap-2 rounded-[4px] px-4 font-sans text-xs font-bold uppercase tracking-widest transition-all ${showStory ? "bg-salt-violet text-white" : "bg-white/10 text-white/60 hover:bg-white/20"}`}
             >
                Die Story {showStory ? "ausblenden" : "lesen"}
             </button>
           )}
          
          <div className="mx-2 h-6 w-px bg-white/20 hidden md:block" />

          <button
            type="button"
            onClick={zoomOut}
            disabled={zoom <= 1}
            className="flex h-9 w-9 items-center justify-center rounded-[4px] border border-white/20 bg-white/5 disabled:opacity-30"
            aria-label="Verkleinern"
          >
            −
          </button>

          <button
            type="button"
            onClick={resetZoom}
            className="flex h-9 min-w-[48px] items-center justify-center rounded-[4px] border border-white/20 bg-white/5 px-3 font-sans text-xs font-medium text-white/70"
          >
            {Math.round(zoom * 100)}%
          </button>

          <button
            type="button"
            onClick={zoomIn}
            disabled={zoom >= 3}
            className="flex h-9 w-9 items-center justify-center rounded-[4px] border border-white/20 bg-white/5 disabled:opacity-30"
          >
            +
          </button>

          <div className="mx-1 h-6 w-px bg-white/20" />

          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-[4px] border border-white/20 bg-white/5 transition-all hover:bg-salt-crimson hover:border-salt-crimson"
          >
            ✕
          </button>
        </div>
      </div>

      <div className="relative flex flex-1 flex-col lg:flex-row overflow-hidden">
        {/* Main Content Area: Image */}
        <div
          className={`relative flex flex-1 items-center justify-center overflow-hidden transition-all duration-500 ${painting.story && showStory ? "lg:mr-80" : ""}`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          style={{ cursor: zoom > 1 ? (isDragging ? "grabbing" : "grab") : "default" }}
        >
          <div
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
              transition: isDragging ? "none" : "transform 0.3s ease",
            }}
          >
            <Image
              src={painting.src}
              alt={painting.title}
              width={1200}
              height={900}
              className="max-h-[70vh] md:max-h-[80vh] max-w-[90vw] md:max-w-none object-contain select-none shadow-2xl"
              draggable={false}
              priority
            />
          </div>
        </div>

        {/* Side/Bottom Panel: Story */}
        {painting.story && showStory && (
          <div className="w-full lg:w-80 lg:absolute lg:right-0 lg:top-0 lg:bottom-0 bg-black/60 lg:bg-white/5 backdrop-blur-xl border-t lg:border-t-0 lg:border-l border-white/10 overflow-y-auto animate-in slide-in-from-right-full duration-500 z-10">
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                 <span className="h-px w-6 bg-salt-crimson" />
                 <p className="font-sans text-[0.65rem] font-extrabold uppercase tracking-widest text-salt-crimson">Case Study</p>
              </div>
              
              <h3 className="font-sans text-2xl font-extrabold leading-tight mb-8">
                {painting.story.headline || painting.title}
              </h3>

              <div className="space-y-8">
                <div>
                  <h4 className="font-sans text-[0.65rem] font-bold uppercase tracking-[0.14em] text-white/40 mb-3 text-salt-violet">
                    Problem / Situation
                  </h4>
                  <p className="font-sans text-sm leading-relaxed font-light text-white/90 italic">
                    „{painting.story.problem}“
                  </p>
                </div>

                <div className="h-px w-full bg-white/10" />

                <div>
                  <h4 className="font-sans text-[0.65rem] font-bold uppercase tracking-[0.14em] text-white/40 mb-3 text-salt-violet">
                    Ergebnis / Transformation
                  </h4>
                  <p className="font-sans text-sm leading-relaxed font-normal text-white">
                    {painting.story.result}
                  </p>
                </div>
              </div>

              <div className="mt-12 p-4 bg-salt-violet/10 border border-salt-violet/20 rounded-md">
                 <p className="font-sans text-xs leading-relaxed text-white/70">
                   Jedes Wirkungs-Bild™ ist ein energetisches Unikat, das ausschließlich für den Empfänger erschaffen wurde.
                 </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="z-10 flex shrink-0 items-center justify-between px-6 py-4 border-t border-white/10 bg-black/40">
        <button onClick={handlePrev} className="flex items-center gap-2 rounded-[4px] border border-white/10 px-4 py-2 font-sans text-sm font-medium text-white/60 hover:text-white hover:border-white/30">
          ← Vorheriges
        </button>

        <div className="flex flex-1 justify-center px-2">
          <div className="hidden items-center gap-1.5 md:flex">
            {Array.from({ length: total }, (_, i) => (
              <div key={i} className={`rounded-full transition-all duration-200 ${i === currentIndex ? "h-[3px] w-4 bg-salt-violet" : "h-[3px] w-[3px] bg-white/20"}`} />
            ))}
          </div>
          <span className="font-sans text-xs text-white/40 md:hidden">{currentIndex + 1} / {total}</span>
        </div>

        <button onClick={handleNext} className="flex items-center gap-2 rounded-[4px] border border-white/10 px-4 py-2 font-sans text-sm font-medium text-white/60 hover:text-white hover:border-white/30">
          Nächstes →
        </button>
      </div>
    </div>
  );
}
