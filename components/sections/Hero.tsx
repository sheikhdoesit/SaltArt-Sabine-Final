"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] lg:min-h-[90vh] w-full overflow-hidden bg-salt-black pt-[100px] pb-12"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Ambiente"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 mx-auto flex min-h-[calc(85vh-100px)] max-w-[1400px] items-center px-6 md:px-16 lg:px-24">
        <div className="max-w-[620px] z-20 py-6">
          
          {/* Red Subtitle */}
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-3 text-[11px] font-bold text-[#ff0000] uppercase tracking-wide md:text-[12px]"
          >
            ENERGETISCHE KUNSTWERKE MIT WIRKUNG
          </motion.p>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-5 font-sans text-[2.8rem] font-normal leading-[1.08] tracking-tight text-white md:text-[4rem] lg:text-[4.5rem]"
          >
            Probleme lösen <br />
            leicht gemacht
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-5 max-w-[520px] text-[14px] leading-relaxed text-white/90 md:text-[16px]"
          >
            Ich bringe spirituell offene Unternehmer, die es leid sind, mit
            herkömmlichen Methoden nicht weiterzukommen, in ihre Kraft.
          </motion.p>

          {/* Extra Line with Arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-6 flex items-center gap-3"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-80 flex-shrink-0"
            >
              <path d="M4 8c0 5 4 9 10 9" />
              <path d="M10 13l4 4-4 4" />
            </svg>
            <span className="text-[14px] font-medium text-white md:text-[15px]">
              Energetische Kunst wirkt. Ohne Zeitaufwand.
            </span>
          </motion.div>

          {/* Trust Indicator / Quote with Red Bar */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-8 border-l-[3px] border-[#ff0000] py-1 pl-4"
          >
            <p className="text-[16px] font-bold text-white md:text-[18px]">
              Millionenverluste abgewendet in 4 Wochen
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <Link
              href="/#kontakt"
              className="inline-flex items-center justify-center rounded-full bg-[#6200ea] px-8 py-3.5 text-[15px] font-medium text-white shadow-lg transition-all hover:bg-[#5200cc] hover:scale-105"
            >
              Lerne mich kennen
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Sabine's Image */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="pointer-events-none absolute bottom-0 right-0 z-10 h-[88%] w-[55%] max-w-[700px] lg:w-[48%]"
      >
        <div className="relative h-full w-full">
          <Image
            src="/sabine.png"
            alt="Sabine Alter"
            fill
            className="object-contain object-bottom-right"
            priority
          />
        </div>
      </motion.div>

      {/* Bottom Right Text */}
      <div className="absolute bottom-0 right-0 z-30 bg-black/60 px-6 py-2.5 backdrop-blur-xs">
        <p className="text-[12px] font-medium text-white/90 md:text-[13px]">
          Sabine Alter, Transformations-Coach & Medium
        </p>
      </div>
    </section>
  );
}
