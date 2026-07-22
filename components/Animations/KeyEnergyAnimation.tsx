'use client';

/**
 * KeyEnergyAnimation — SALT Section 03
 * ─────────────────────────────────────
 * Glowing key representing access/Zugang to higher dimensions
 * Icon: Key from uploaded image
 * 
 * Colors: Red #D40000 · Violet #6A0BCF · White #F7F5F3
 */

import { motion } from 'framer-motion';

const VIOLET = '#6A0BCF';
const RED    = '#D40000';
const WHITE  = '#F7F5F3';

interface KeyEnergyAnimationProps {
  className?: string;
}

export default function KeyEnergyAnimation({ className = '' }: KeyEnergyAnimationProps) {
  return (
    <div className={`relative w-full h-64 flex items-center justify-center ${className}`}>
      <svg width="200" height="200" viewBox="0 0 200 200">
        {/* Glowing aura behind key */}
        <motion.circle
          cx="100"
          cy="100"
          r="60"
          fill={VIOLET}
          opacity="0.1"
          animate={{
            opacity: [0.1, 0.25, 0.1],
            r: [60, 70, 60],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Energy particles orbiting the key */}
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const angle = (i / 6) * Math.PI * 2;
          const radius = 55;
          return (
            <motion.circle
              key={i}
              cx={100 + Math.cos(angle) * radius}
              cy={100 + Math.sin(angle) * radius}
              r="2.5"
              fill={i % 2 === 0 ? VIOLET : RED}
              animate={{
                cx: 100 + Math.cos(angle + (Date.now() / 2000)) * radius,
                cy: 100 + Math.sin(angle + (Date.now() / 2000)) * radius,
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                cx: { duration: 6, repeat: Infinity, ease: 'linear' },
                cy: { duration: 6, repeat: Infinity, ease: 'linear' },
                opacity: { duration: 1.5, delay: i * 0.25, repeat: Infinity, ease: 'easeInOut' },
              }}
            />
          );
        })}

        {/* Key structure */}
        <motion.g
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
        >
          {/* Key head (circle) */}
          <circle
            cx="75"
            cy="100"
            r="16"
            fill="none"
            stroke={VIOLET}
            strokeWidth="4"
          />
          <circle
            cx="75"
            cy="100"
            r="10"
            fill="none"
            stroke={VIOLET}
            strokeWidth="2"
          />

          {/* Key shaft */}
          <rect
            x="91"
            y="96"
            width="45"
            height="8"
            fill="none"
            stroke={VIOLET}
            strokeWidth="4"
            rx="2"
          />

          {/* Key teeth */}
          <rect x="128" y="90" width="3" height="8" fill={VIOLET} />
          <rect x="133" y="96" width="3" height="8" fill={VIOLET} />
          <rect x="138" y="92" width="3" height="6" fill={VIOLET} />

          {/* Inner glow on key */}
          <motion.circle
            cx="75"
            cy="100"
            r="12"
            fill={VIOLET}
            opacity="0.2"
            animate={{
              opacity: [0.2, 0.4, 0.2],
              r: [12, 14, 12],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.g>

        {/* Light rays emanating from key */}
        {[0, 1, 2, 3].map((i) => {
          const angle = (i / 4) * Math.PI * 2 - Math.PI / 4;
          return (
            <motion.line
              key={i}
              x1="75"
              y1="100"
              x2={75 + Math.cos(angle) * 35}
              y2={100 + Math.sin(angle) * 35}
              stroke={i % 2 === 0 ? VIOLET : RED}
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0"
              animate={{
                opacity: [0, 0.6, 0],
                x2: 75 + Math.cos(angle) * 45,
                y2: 100 + Math.sin(angle) * 45,
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
                repeatDelay: 1,
                ease: 'easeOut',
              }}
            />
          );
        })}

        {/* Subtle unlock indication - expanding ring */}
        <motion.circle
          cx="75"
          cy="100"
          r="20"
          fill="none"
          stroke={VIOLET}
          strokeWidth="1.5"
          opacity="0"
          animate={{
            r: [20, 40, 45],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatDelay: 1,
            ease: 'easeOut',
          }}
        />
      </svg>
    </div>
  );
}
