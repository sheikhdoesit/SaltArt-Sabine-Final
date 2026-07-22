'use client';

/**
 * SaturnOrbitAnimation — SALT Section 01
 * ───────────────────────────────────────
 * Saturn planet with rotating orbit ring representing 4D space-time + higher dimensions
 * Icon: Saturn/planet with ring from uploaded image
 * 
 * Colors: Red #D40000 · Violet #6A0BCF · White #F7F5F3
 */

import { motion } from 'framer-motion';

const VIOLET = '#6A0BCF';
const RED    = '#D40000';
const WHITE  = '#F7F5F3';

interface SaturnOrbitAnimationProps {
  className?: string;
}

export default function SaturnOrbitAnimation({ className = '' }: SaturnOrbitAnimationProps) {
  return (
    <div className={`relative w-full h-64 flex items-center justify-center ${className}`}>
      <svg width="180" height="180" viewBox="0 0 180 180">
        {/* Outer rotating orbit rings representing dimensions */}
        <motion.ellipse
          cx="90"
          cy="90"
          rx="70"
          ry="25"
          fill="none"
          stroke={VIOLET}
          strokeWidth="1.5"
          strokeDasharray="4 2"
          opacity="0.4"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '90px 90px' }}
        />

        <motion.ellipse
          cx="90"
          cy="90"
          rx="60"
          ry="20"
          fill="none"
          stroke={RED}
          strokeWidth="1.2"
          strokeDasharray="3 2"
          opacity="0.35"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '90px 90px' }}
        />

        {/* Saturn planet core */}
        <motion.circle
          cx="90"
          cy="90"
          r="28"
          fill={VIOLET}
          opacity="0.15"
          animate={{
            opacity: [0.15, 0.25, 0.15],
            r: [28, 30, 28],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <circle
          cx="90"
          cy="90"
          r="24"
          fill="none"
          stroke={VIOLET}
          strokeWidth="2"
        />

        <circle
          cx="90"
          cy="90"
          r="20"
          fill={VIOLET}
          opacity="0.3"
        />

        {/* Main Saturn ring */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '90px 90px' }}
        >
          <ellipse
            cx="90"
            cy="90"
            rx="50"
            ry="16"
            fill="none"
            stroke={VIOLET}
            strokeWidth="3"
            opacity="0.7"
          />
          <ellipse
            cx="90"
            cy="90"
            rx="50"
            ry="16"
            fill={VIOLET}
            opacity="0.08"
          />
        </motion.g>

        {/* Dimension markers orbiting */}
        {[0, 1, 2, 3].map((i) => {
          const angle = (i / 4) * Math.PI * 2;
          const radius = 65;
          return (
            <motion.circle
              key={i}
              cx={90 + Math.cos(angle) * radius}
              cy={90 + Math.sin(angle) * radius}
              r="3"
              fill={i === 3 ? RED : VIOLET}
              animate={{
                cx: 90 + Math.cos(angle + (Date.now() / 5000)) * radius,
                cy: 90 + Math.sin(angle + (Date.now() / 5000)) * radius,
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          );
        })}

        {/* Subtle stars/sparkles in background */}
        {[...Array(8)].map((_, i) => (
          <motion.circle
            key={i}
            cx={20 + (i % 4) * 45}
            cy={20 + Math.floor(i / 4) * 140}
            r="1"
            fill={WHITE}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 2 + i * 0.3,
              delay: i * 0.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </svg>
    </div>
  );
}
