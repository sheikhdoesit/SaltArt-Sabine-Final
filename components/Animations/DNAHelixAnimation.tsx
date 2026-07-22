'use client';

/**
 * DNAHelixAnimation — SALT Section 02
 * ────────────────────────────────────
 * DNA double helix rotating representing blueprint/Blaupause
 * Icon: DNA helix from uploaded image
 * 
 * Colors: Red #D40000 · Violet #6A0BCF · White #F7F5F3
 */

import { motion } from 'framer-motion';

const VIOLET = '#6A0BCF';
const RED    = '#D40000';
const WHITE  = '#F7F5F3';

interface DNAHelixAnimationProps {
  className?: string;
}

export default function DNAHelixAnimation({ className = '' }: DNAHelixAnimationProps) {
  return (
    <div className={`relative w-full h-64 flex items-center justify-center ${className}`}>
      <svg width="120" height="220" viewBox="0 0 120 220">
        {/* DNA double helix structure */}
        {/* Left strand - violet */}
        <motion.path
          d="M 35 20 Q 50 40 35 60 Q 20 80 35 100 Q 50 120 35 140 Q 20 160 35 180 Q 50 200 35 200"
          fill="none"
          stroke={VIOLET}
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />

        {/* Right strand - red */}
        <motion.path
          d="M 85 20 Q 70 40 85 60 Q 100 80 85 100 Q 70 120 85 140 Q 100 160 85 180 Q 70 200 85 200"
          fill="none"
          stroke={RED}
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.15, ease: 'easeInOut' }}
        />

        {/* Base pairs connecting the strands */}
        {[30, 50, 70, 90, 110, 130, 150, 170, 190].map((y, i) => {
          const isLeft = y % 40 === 10 || y % 40 === 30;
          return (
            <motion.line
              key={i}
              x1={isLeft ? 35 : 85}
              y1={y}
              x2={isLeft ? 85 : 35}
              y2={y}
              stroke={WHITE}
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.5"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.4, delay: 1.8 + i * 0.08 }}
              style={{ transformOrigin: 'center' }}
            />
          );
        })}

        {/* Nucleotide dots on strands */}
        {[25, 45, 65, 85, 105, 125, 145, 165, 185].map((y, i) => (
          <motion.g key={i}>
            <motion.circle
              cx={y % 40 === 5 || y % 40 === 25 ? 35 : 85}
              cy={y}
              r="4"
              fill={VIOLET}
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 0.3, delay: 2.2 + i * 0.06 }}
            />
            <motion.circle
              cx={y % 40 === 5 || y % 40 === 25 ? 85 : 35}
              cy={y}
              r="4"
              fill={RED}
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 0.3, delay: 2.2 + i * 0.06 }}
            />
          </motion.g>
        ))}

        {/* Rotating glow effect */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '60px 110px' }}
        >
          <ellipse
            cx="60"
            cy="110"
            rx="50"
            ry="100"
            fill="none"
            stroke={VIOLET}
            strokeWidth="0.5"
            opacity="0.2"
            strokeDasharray="4 6"
          />
        </motion.g>

        {/* Pulse background */}
        <motion.ellipse
          cx="60"
          cy="110"
          rx="40"
          ry="90"
          fill={VIOLET}
          opacity="0.05"
          animate={{
            opacity: [0.05, 0.12, 0.05],
            rx: [40, 45, 40],
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
