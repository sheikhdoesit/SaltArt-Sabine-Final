"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function InnereFuehrung() {
  useScrollReveal();

  return (
    <section id="innere-fuehrung" className="bg-[#141414] px-6 py-20 overflow-hidden relative text-white">
      <div className="absolute top-0 left-0 w-full h-[500px] bg-salt-violet/5 blur-[120px] pointer-events-none" />
      
      <div className="mx-auto max-w-[1200px] w-full relative z-10">
        
        {/* TOP: Left-aligned Intro */}
        <div className="mb-16 md:mb-20 w-full">
          <h3 
            className="animate-fade-slide-up font-sans text-[0.8rem] md:text-[0.95rem] font-bold text-salt-crimson uppercase tracking-[0.15em] mb-4 leading-relaxed max-w-[900px]"
          >
            Innere Führung für stressgeplagte Unternehmer mit Personalverantwortung und Entscheidungsdruck
          </h3>
          
          <h2 
            className="animate-fade-slide-up font-sans font-extrabold leading-[1.1] tracking-[-0.02em] text-white"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.8rem)", animationDelay: "100ms" }}
          >
            Aktiviere Deine intuitive Power ganz ohne Stress durch ein individuelles <span className="text-salt-violet italic font-serif">Wirkungs-Bild™!</span>
          </h2>
        </div>

        {/* MIDDLE: Two columns, strongly aligned */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          
          {/* Left Column: Structured Editorial Text */}
          <div className="lg:col-span-6 animate-fade-slide-up flex flex-col justify-center" style={{ animationDelay: "200ms" }}>
            <div className="flex flex-col gap-8 pr-0 lg:pr-8">
              
              <div>
                <h3 className="font-sans text-2xl md:text-3xl font-extrabold text-salt-crimson mb-5">Wie?</h3>
                <p className="font-sans text-lg md:text-xl leading-[1.6] text-white font-bold mb-4">
                  Stell Dir vor, Du schaust jeden Tag <span className="text-salt-crimson">ganz nebenbei</span> auf ein Kunstwerk, das tief in Dir eine verborgene Kraft weckt!
                </p>
                <p className="font-sans text-base md:text-lg leading-[1.8] text-white/50 font-medium">
                  Eine Kraft, die Zweifel und Ängste löst und Dich sanft aber bestimmt zu Deinem Erfolg und innerer Erfüllung führt.
                </p>
              </div>

              <div className="border-l-2 border-salt-crimson pl-6 py-2">
                <ul className="flex flex-col gap-4 list-none p-0 mb-6">
                  <li className="flex items-start gap-4 text-base md:text-lg font-medium text-white/90 leading-relaxed">
                    <span className="w-1.5 h-1.5 bg-salt-crimson rounded-full mt-2.5 shrink-0" />
                    Es wirkt, ohne dass Du aktiv etwas dafür tun musst.
                  </li>
                  <li className="flex items-start gap-4 text-base md:text-lg font-medium text-white/90 leading-relaxed">
                    <span className="w-1.5 h-1.5 bg-salt-crimson rounded-full mt-2.5 shrink-0" />
                    Es wirkt, ohne Deine Zeit zu beanspruchen.
                  </li>
                </ul>
                <p className="font-sans text-lg md:text-xl font-bold text-white tracking-wide">
                  Deshalb ist es ein Wirkungs-Bild™.
                </p>
              </div>
              
              <div className="flex items-center gap-2 text-white/50 font-bold text-sm tracking-widest uppercase">
                Mehr im Video <span className="text-salt-crimson text-2xl leading-none">»</span>
              </div>
            </div>
          </div>

          {/* Right Column: Video Container */}
          <div className="lg:col-span-6 animate-fade-slide-up" style={{ animationDelay: "300ms" }}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-salt-violet/10 rounded-3xl blur-2xl group-hover:bg-salt-violet/20 transition-all duration-700" />
              <div className="relative aspect-video w-full overflow-hidden rounded-md shadow-2xl border border-white/10 bg-black">
                <video
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                >
                  <source src="/willkommen-video.mp4" type="video/mp4" />
                  Dein Browser unterstützt das Video-Tag nicht.
                </video>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM: Footer Question */}
        <div className="pt-10 border-t border-white/5 animate-fade-slide-up text-center" style={{ animationDelay: "400ms" }}>
          <p className="font-sans text-xl md:text-2xl xl:text-3xl font-extrabold text-salt-crimson tracking-tight">
            Willst Du Klarheit, innere Ruhe und nachts gut schlafen können?
          </p>
        </div>

      </div>
    </section>
  );
}
