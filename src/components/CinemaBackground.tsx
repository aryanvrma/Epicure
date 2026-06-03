import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function CinemaBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate beautiful floating ember particles
    const items: Particle[] = Array.from({ length: 28 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage x
      y: Math.random() * 100, // percentage y
      size: Math.random() * 4 + 1.5, // 1.5px to 5.5px
      duration: Math.random() * 15 + 10, // 10s to 25s
      delay: Math.random() * -20 // negative delay so they starts pre-rendered
    }));
    setParticles(items);
  }, []);

  return (
    <div 
      className="fixed inset-0 w-full h-full -z-50 overflow-hidden pointer-events-none select-none"
      style={{ background: 'radial-gradient(circle at 70% 30%, #2A5A43 0%, #050A08 70%)' }}
    >
      {/* Circle decorations from the theme */}
      <div className="pattern-bg" style={{ pointerEvents: 'none' }} />

      {/* Cinematic Deep Ambient Lighting Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#1B3A2B] opacity-[0.25] blur-[140px] animate-light-drift" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#CBA233] opacity-[0.12] blur-[160px] animate-light-drift" style={{ animationDelay: '-12s' }} />
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] rounded-full bg-[#0C1E16] opacity-[0.4] blur-[120px]" />

      {/* Subtle Grain Overlay */}
      <div className="absolute inset-0 w-full h-full grain-overlay pointer-events-none" />

      {/* Floating Sparkles & Diya Embers */}
      <div className="absolute inset-0 w-full h-full">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-tr from-gold to-gold-light"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              boxShadow: '0 0 10px rgba(203, 162, 51, 0.8), 0 0 4px rgba(255, 223, 79, 0.5)',
            }}
            animate={{
              y: ['0vh', '-110vh'],
              x: [`0vw`, `${Math.sin(particle.id) * 4}vw`],
              opacity: [0, 0.6, 0.8, 0.3, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Majestic golden mist beam from top center */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[400px] opacity-[0.07] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at top, #CBA233 0%, rgba(203, 162, 51, 0) 70%)',
        }}
      />
    </div>
  );
}
