"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { primaryCtaClasses } from "@/lib/ctaClasses";

const navLinks = [
  { label: "Galerie", href: "/galerie", type: "page" as const },
  { label: "Stories", href: "/stories", type: "page" as const },
  {
    label: "Transformationen",
    href: "/#transformationen",
    type: "anchor" as const,
  },
  { label: "Prozess", href: "/#prozess", type: "anchor" as const },
  { label: "Über Sabine", href: "/#sabine", type: "anchor" as const },
  { label: "Kontakt", href: "/#kontakt", type: "anchor" as const },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [brandLogoBroken, setBrandLogoBroken] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isInTransformationSection, setIsInTransformationSection] = useState(false);
  const [isMouseAtTop, setIsMouseAtTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Only show header when near the very top — stays hidden rest of the time
      setScrolled(currentScrollY < 150);

      // Check for transformation section exclusion
      const transSection = document.getElementById("transformationen");
      if (transSection) {
        const rect = transSection.getBoundingClientRect();
        const isActive = rect.top <= 100 && rect.bottom >= 50;
        setIsInTransformationSection(isActive);
      }

      setLastScrollY(currentScrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Show header if mouse is in the top 80px of the screen
      setIsMouseAtTop(e.clientY < 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [lastScrollY]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 right-0 left-0 z-50 h-[80px] border-b transition-all duration-700 ease-in-out ${
          isInTransformationSection || (!scrolled && !isMouseAtTop)
            ? "opacity-0 -translate-y-full border-transparent bg-transparent pointer-events-none"
            : "border-white/5 bg-transparent"
        }`}
      >
        <div className="grid h-full grid-cols-3 items-center px-6 md:px-16 max-w-[1400px] mx-auto">
          <div className={`flex justify-start transition-all duration-700 ease-in-out ${(!scrolled && !isMouseAtTop) || isInTransformationSection ? "opacity-0 invisible -translate-x-4" : "opacity-100 visible translate-x-0"}`}>
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="group flex cursor-pointer flex-col gap-2 border-none bg-transparent p-2 outline-none"
              aria-label="Menü öffnen"
            >
              <span className="block h-[1.5px] w-7 bg-white transition-all duration-300 group-hover:w-10 group-hover:bg-salt-crimson" />
              <span className="block h-[1.5px] w-5 bg-white/70 transition-all duration-300 group-hover:w-8 group-hover:bg-salt-crimson" />
              <span className="block h-[1.5px] w-7 bg-white transition-all duration-300 group-hover:w-6 group-hover:bg-salt-crimson" />
            </button>
          </div>

          <div className={`flex justify-center transition-all duration-700 ease-in-out ${(!scrolled && !isMouseAtTop) || isInTransformationSection ? "opacity-0 invisible -translate-y-4" : "opacity-100 visible translate-y-0"}`}>
            <Link href="/" className="flex shrink-0 items-center group">
              {brandLogoBroken ? (
                <span className="font-sans text-2xl font-extrabold tracking-[0.2em] text-white">
                  S<span className="text-salt-crimson">A</span>LT
                </span>
              ) : (
                <Image
                  src="/Logo1.png"
                  alt="SALT — art with energy"
                  width={220}
                  height={80}
                  className="h-[46px] md:h-[55px] w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-all duration-500 hover:scale-105"
                  priority
                  onError={() => setBrandLogoBroken(true)}
                />
              )}
            </Link>
          </div>

          <div className={`flex items-center justify-end transition-all duration-700 ease-in-out ${(!scrolled && !isMouseAtTop) || isInTransformationSection ? "opacity-0 invisible translate-x-4" : "opacity-100 visible translate-x-0"}`}>
            <a
              href="/#kontakt"
              className="hidden items-center justify-center sm:inline-flex rounded-sm bg-salt-crimson px-8 py-3 font-sans text-[0.65rem] font-bold tracking-[0.2em] text-white uppercase transition-all duration-300 hover:bg-[#b8002a] hover:scale-105 shadow-2xl"
            >
              KONTAKT
            </a>
          </div>
        </div>
      </nav>

      {/* Split-Screen Menu Drawer (Left Side) */}
      <div 
        className={`fixed inset-0 z-[60] transition-all duration-700 pointer-events-none ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
      >
        {/* Backdrop (Right Half) */}
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-700 delay-100 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0"}`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Content Drawer (Left Half) */}
        <div 
          className={`absolute top-0 left-0 h-full bg-[#111] shadow-[20px_0_60px_rgba(0,0,0,0.5)] border-r border-white/5 transition-transform duration-700 ease-out pointer-events-auto w-[100vw] md:w-[60vw] lg:w-[50vw] flex flex-col overflow-y-auto overflow-x-hidden custom-scrollbar ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          {/* Header area in drawer */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-8 md:px-16 py-8 border-b border-white/5 bg-[#111]/95 backdrop-blur-md">
            <span className="font-sans text-[0.7rem] font-bold tracking-[0.4em] text-salt-crimson uppercase">
              Navigation
            </span>
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="cursor-pointer border-none bg-white/5 rounded-full p-3 text-white hover:bg-salt-crimson transition-all duration-300 transform hover:rotate-90"
              aria-label="Menü schließen"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Links Area */}
          <nav className="flex-1 flex flex-col justify-center px-8 md:px-16 gap-4 md:gap-5">
            {navLinks.map(({ label, href, type }, index) => {
              const Tag = type === "page" ? Link : "a";
              return (
                <Tag
                  key={label}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-sans font-extrabold text-white no-underline transition-all duration-500 hover:text-salt-crimson hover:translate-x-3 tracking-[-0.04em] w-fit whitespace-nowrap ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ 
                    fontSize: "clamp(1.5rem, 3.8vw, 4rem)",
                    transitionDelay: isMenuOpen ? `${index * 60 + 150}ms` : "0ms",
                    transitionProperty: "opacity, transform, color"
                  }}
                >
                  {label}<span className="text-salt-crimson opacity-0 hover:opacity-100 transition-opacity ml-2">.</span>
                </Tag>
              );
            })}
          </nav>

          {/* Business Footer in drawer */}
          <div className={`p-8 md:p-16 border-t border-white/5 bg-black/20 transition-all duration-700 delay-500 ${isMenuOpen ? "opacity-100" : "opacity-0"}`}>
            <p className="font-sans text-[0.6rem] font-bold text-white/30 uppercase tracking-[0.2em] mb-5">
              Möchtest Du Klarheit?
            </p>
            <a
              href="https://calendly.com/salt-art/30min"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="inline-flex rounded-sm bg-salt-crimson px-8 py-4 font-sans text-[0.7rem] font-bold tracking-[0.25em] text-white transition-all duration-300 hover:bg-[#b8002a] hover:scale-105 shadow-2xl uppercase"
            >
              Gespräch vereinbaren
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
