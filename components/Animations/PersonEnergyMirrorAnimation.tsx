'use client';

/**
 * PersonEnergyMirrorAnimation — SALT Section 04
 * ──────────────────────────────────────────────
 * Person figure with expanding energy field and mirror/reflection effect
 * Icon: Person with raised arms + mirror from uploaded image
 * 
 * Colors: Red #D40000 · Violet #6A0BCF · White #F7F5F3
 */

import { motion } from 'framer-motion';

const VIOLET = '#6A0BCF';
const RED    = '#D40000';
const WHITE  = '#F7F5F3';

interface PersonEnergyMirrorAnimationProps {
  className?: string;
}

export default function PersonEnergyMirrorAnimation({ className = '' }: PersonEnergyMirrorAnimationProps) {
  return (
    <div className={`relative w-full h-64 flex items-center justify-center ${className}`}>
      <svg width="220" height="220" viewBox="0 0 220 220">
        {/* Background energy field - expanding circles */}
        {[0, 1, 2, 3].map((i) => (
          <motion.circle
            key={i}
            cx="110"
            cy="110"
            r="40"
            fill="none"
            stroke={i % 2 === 0 ? VIOLET : RED}
            strokeWidth="1.2"
            opacity="0"
            animate={{
              r: [40, 70 + i * 15, 85 + i * 15],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 3,
              delay: i * 0.4,
              repeat: Infinity,
              ease: 'easeOut',
            }}
          />
        ))}

        {/* Person figure */}
        <motion.g
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Head */}
          <circle
            cx="110"
            cy="75"
            r="12"
            fill="none"
            stroke={VIOLET}
            strokeWidth="3"
          />
          <circle
            cx="110"
            cy="75"
            r="8"
            fill={VIOLET}
            opacity="0.2"
          />

          {/* Body */}
          <line
            x1="110"
            y1="87"
            x2="110"
            y2="130"
            stroke={VIOLET}
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Arms raised (energy receiving position) */}
          <motion.line
            x1="110"
            y1="95"
            x2="85"
            y2="75"
            stroke={VIOLET}
            strokeWidth="3"
            strokeLinecap="round"
            animate={{
              x2: [85, 83, 85],
              y2: [75, 72, 75],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.line
            x1="110"
            y1="95"
            x2="135"
            y2="75"
            stroke={VIOLET}
            strokeWidth="3"
            strokeLinecap="round"
            animate={{
              x2: [135, 137, 135],
              y2: [75, 72, 75],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Legs */}
          <line
            x1="110"
            y1="130"
            x2="95"
            y2="155"
            stroke={VIOLET}
            strokeWidth="3"
            strokeLinecap="round"
          />
          <line
            x1="110"
            y1="130"
            x2="125"
            y2="155"
            stroke={VIOLET}
            strokeWidth="3"
            strokeLinecap="round"
          />
        </motion.g>

        {/* Energy particles flowing upward */}
        {[...Array(8)].map((_, i) => (
          <motion.circle
            key={i}
            cx={95 + (i % 4) * 10}
            cy={160}
            r="2"
            fill={i % 2 === 0 ? VIOLET : RED}
            opacity="0"
            animate={{
              cy: [160, 60, 50],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2.5,
              delay: i * 0.3,
              repeat: Infinity,
              ease: 'easeOut',
            }}
          />
        ))}

        {/* Mirror/reflection effect below */}
        <motion.g
          opacity="0.3"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.3, 0.25] }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          {/* Mirrored person (flipped vertically) */}
          <g transform="scale(1, -1) translate(0, -220)">
            <circle cx="110" cy="75" r="12" fill="none" stroke={VIOLET} strokeWidth="2" opacity="0.4" />
            <line x1="110" y1="87" x2="110" y2="130" stroke={VIOLET} strokeWidth="2" strokeLinecap="round" opacity="0.4" />
            <line x1="110" y1="95" x2="85" y2="75" stroke={VIOLET} strokeWidth="2" strokeLinecap="round" opacity="0.4" />
            <line x1="110" y1="95" x2="135" y2="75" stroke={VIOLET} strokeWidth="2" strokeLinecap="round" opacity="0.4" />
          </g>
        </motion.g>

        {/* Horizontal mirror line */}
        <motion.line
          x1="60"
          y1="165"
          x2="160"
          y2="165"
          stroke={VIOLET}
          strokeWidth="0.8"
          strokeDasharray="4 4"
          opacity="0.3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1, delay: 0.8 }}
        />

        {/* Clarity/insight sparkles around head */}
        {[0, 1, 2, 3, 4].map((i) => {
          const angle = (i / 5) * Math.PI * 2;
          const radius = 22;
          return (
            <motion.circle
              key={i}
              cx={110 + Math.cos(angle) * radius}
              cy={75 + Math.sin(angle) * radius}
              r="1.5"
              fill={i % 2 === 0 ? WHITE : RED}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 1.5,
                delay: 1 + i * 0.2,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            />
          );
        })}

        {/* Central energy glow */}
        <motion.ellipse
          cx="110"
          cy="110"
          rx="30"
          ry="50"
          fill={VIOLET}
          opacity="0.08"
          animate={{
            opacity: [0.08, 0.15, 0.08],
            rx: [30, 35, 30],
            ry: [50, 55, 50],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </svg>
    </div>
  );
}
