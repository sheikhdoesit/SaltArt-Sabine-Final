'use client';

/**
 * VioletSymbolRain — SALT Animation
 * ──────────────────────────────────
 * Sacred geometry matrix-style rain — for hero section
 * Single column falling vertically, violet/red sacred symbols
 * 
 * Colors: Red #D40000 · Violet #6A0BCF · White #F7F5F3
 */

import { useEffect, useRef } from 'react';

const VIOLET = '#6A0BCF';
const RED    = '#D40000';
const WHITE  = '#F7F5F3';

interface VioletSymbolRainProps {
  className?: string;
  columnCount?: number; // How many columns (default: auto-calculated)
  speed?: 'slow' | 'medium' | 'fast'; // Animation speed
}

export default function VioletSymbolRain({ 
  className = '',
  columnCount,
  speed = 'medium'
}: VioletSymbolRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateSize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    updateSize();

    // Sacred geometry symbols (same as showcase image)
    const symbols = '◆◇✦✧⬡⬢△▽○◉✺◈∞⊕✴❋∮⊗◍⊛✵❂⟁✶⬟⬠'.split('');
    
    const fontSize = 14;
    const cols = columnCount || Math.floor(canvas.width / fontSize);
    
    // Speed multipliers
    const speedMap = {
      slow: 0.15,
      medium: 0.3,
      fast: 0.5
    };
    const baseSpeed = speedMap[speed];

    // Initialize drops with stagger
    const drops: Array<{
      y: number;
      speed: number;
      isHead: boolean;
    }> = [];
    
    for (let i = 0; i < cols; i++) {
      drops[i] = {
        y: Math.random() * -100, // Start above screen
        speed: baseSpeed + Math.random() * 0.2,
        isHead: Math.random() > 0.5 // 50% chance of bright head
      };
    }

    // Draw function
    function draw() {
      if (!canvas || !ctx) return;
      
      // Semi-transparent black for trail fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw each column
      drops.forEach((drop, i) => {
        const x = i * fontSize;
        const y = drop.y * fontSize;
        
        // Trail length
        const trailLength = 15 + Math.random() * 8;
        
        // Draw trail symbols from head to tail
        for (let j = 0; j < trailLength; j++) {
          const trailY = y - j * fontSize;
          if (trailY < -fontSize) continue;
          
          const symbol = symbols[Math.floor(Math.random() * symbols.length)];
          const progress = j / trailLength;
          
          // Head (brightest)
          if (j === 0 && drop.isHead) {
            ctx.shadowBlur = 25;
            ctx.shadowColor = VIOLET;
            ctx.fillStyle = WHITE;
            ctx.font = `bold ${fontSize + 2}px serif`;
          }
          // Upper bright violet symbols
          else if (j < 3) {
            ctx.shadowBlur = 18;
            ctx.shadowColor = VIOLET;
            const alpha = 1 - (j / 3) * 0.2;
            ctx.fillStyle = `rgba(106, 11, 207, ${alpha})`;
            ctx.font = `${fontSize}px serif`;
          }
          // Occasional red spark
          else if (Math.random() > 0.94) {
            ctx.shadowBlur = 12;
            ctx.shadowColor = RED;
            ctx.fillStyle = `rgba(212, 0, 0, ${1 - progress})`;
            ctx.font = `${fontSize}px serif`;
          }
          // Fade to dark violet
          else {
            ctx.shadowBlur = 0;
            const alpha = (1 - progress) * 0.4;
            ctx.fillStyle = `rgba(106, 11, 207, ${alpha})`;
            ctx.font = `${fontSize - 1}px serif`;
          }
          
          ctx.fillText(symbol, x, trailY);
        }
        
        // Reset shadow
        ctx.shadowBlur = 0;
        
        // Move drop down
        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drop.y = 0;
          drop.isHead = Math.random() > 0.5;
          drop.speed = baseSpeed + Math.random() * 0.2;
        } else {
          drop.y += drop.speed;
        }
      });
      
      requestAnimationFrame(draw);
    }

    // Start animation
    const animationId = requestAnimationFrame(draw);

    // Handle resize
    const resizeObserver = new ResizeObserver(() => {
      updateSize();
    });
    resizeObserver.observe(canvas);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
    };
  }, [columnCount, speed]);

  return (
    <div className={`relative w-full h-full ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ display: 'block' }}
      />
    </div>
  );
}
