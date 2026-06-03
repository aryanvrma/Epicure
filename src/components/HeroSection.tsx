import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Sparkles, Compass, MousePointerClick, ChevronDown } from 'lucide-react';
import { LotusDivider, Mandala } from './VaranasiMotif';
import TiltCard from './TiltCard';

interface HeroSectionProps {
  onNavigate: (page: 'menu' | 'contact') => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  const { scrollY } = useScroll();
  
  // High-performance scroll offsets for true 3D spatial depth feel
  const mandalaY = useTransform(scrollY, [0, 1000], [0, 180]);
  const textTranslateY = useTransform(scrollY, [0, 1000], [0, 70]);
  const cardTranslateY = useTransform(scrollY, [0, 1000], [0, -40]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-4 md:px-8 py-20 pb-24 border-b border-gold/10">
      
      {/* Absolute Cinematic Underlayer elements */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        
        {/* Parallaxing Background Mandala */}
        <motion.div 
          style={{ y: mandalaY }}
          className="absolute top-[25%] left-1/2 -translate-x-1/2 opacity-[0.08] pointer-events-none"
        >
          <Mandala size={380} className="text-gold animate-spin-slow" style={{ animationDuration: '120s' }} />
        </motion.div>
        
        {/* Soft atmospheric backlight that fades down */}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent pointer-events-none"
        />
      </div>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center z-10 relative mt-12 md:mt-20">
        
        {/* Left Side: Elegant Editorial Headlines & Narrative CTAs */}
        <motion.div 
          style={{ y: textTranslateY }}
          className="lg:col-span-7 flex flex-col items-start text-left space-y-8"
        >
          
          <div className="flex items-center gap-2 px-3 py-1 bg-gold/10 border border-gold/20 rounded-full">
            <Sparkles size={11} className="text-gold animate-pulse" />
            <span className="font-mono text-[9px] tracking-[0.3em] text-white/80 uppercase">
              VARANASI’S FINEST MICHELIN-INSPIRED ATELIER
            </span>
          </div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-5xl md:text-7xl xl:text-8xl tracking-wider text-white leading-[1.05]"
            >
              The Essence of <br />
              <span className="text-gold font-light italic text-glow">Varanasi</span> Luxury
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-sm md:text-base text-white/70 max-w-lg font-light leading-relaxed"
            >
              Where sacred traditions, golden sunset views on the holy Ganges, and Michelin-caliber sensory gastronomy meet. Embark on a dramatic gourmet pilgrimage designed for the world’s most refined palates.
            </motion.p>
          </div>

          <LotusDivider className="self-start opacity-75" />

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => onNavigate('contact')}
              className="relative px-8 py-4 bg-gradient-to-r from-gold to-gold-dark text-black font-mono text-[11px] tracking-[0.25em] font-semibold rounded-sm hover:-translate-y-1 hover:shadow-[0_12px_24px_-8px_#CBA233] cursor-pointer transition-all duration-300 flex items-center justify-center gap-2 group focus:outline-none"
            >
              RESERVE A TABLE
              <Compass size={14} className="group-hover:rotate-45 transition-transform duration-500" />
            </button>

            <button
              onClick={() => onNavigate('menu')}
              className="relative px-8 py-4 border border-gold/30 text-gold hover:text-white font-mono text-[11px] tracking-[0.25em] rounded-sm hover:border-gold hover:-translate-y-1 bg-charcoal/50 backdrop-blur-md cursor-pointer transition-all duration-300 flex items-center justify-center gap-2 group focus:outline-none"
            >
              EXPLORE CURATED MENU
              <span className="inline-block transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
            </button>
          </motion.div>

          {/* Mini info badge */}
          <div className="flex items-center gap-6 pt-4 text-white/50 font-mono text-[10px] tracking-[0.15em] border-t border-white/5 w-full max-w-md">
            <div>
              <span className="text-gold block font-semibold mb-0.5">OPEN SESSIONS</span>
              <span>12:00 PM – 11:30 PM</span>
            </div>
            <div className="w-[1px] h-6 bg-white/10" />
            <div>
              <span className="text-gold block font-semibold mb-0.5">TERRACE DINING</span>
              <span>Facing Dashashwamedh Ghat</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Handcrafted 3D Reactive Centerpiece Frame */}
        <motion.div 
          style={{ y: cardTranslateY }}
          className="lg:col-span-5 flex justify-center items-center"
        >
          <TiltCard className="w-full max-w-[360px] aspect-[4/5]" maxTilt={15}>
            <div className="relative w-full h-full h-[450px] md:h-[480px] glass-card rounded-md p-5 flex flex-col justify-between group overflow-hidden border border-gold/15">
              
              {/* Shimmer overlay */}
              <div className="absolute inset-0 shimmer-bg opacity-15 rounded-md pointer-events-none" />

              {/* Corner ornaments for vintage editorial detailing */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-gold/40" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-gold/40" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-gold/40" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-gold/40" />

              {/* Plated Culinary image with gold luxury framing */}
              <div className="relative w-full aspect-square overflow-hidden rounded-sm border border-gold/10 group-hover:border-gold/30 transition-all duration-700 bg-black/40">
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800"
                  alt="Gourmet Plating Epicure"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[10%] group-hover:grayscale-0 brightness-[95%]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-100" />
                
                {/* Floating interactive element title */}
                <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                  <span className="font-serif text-lg text-white font-medium">Shahi Saffron Salmon</span>
                  <span className="font-mono text-[10px] text-gold uppercase tracking-[0.1em]">Signature</span>
                </div>
              </div>

              {/* Card Footer detailing */}
              <div className="space-y-2 mt-4 z-10">
                <div className="flex justify-between items-center text-[10px] font-mono tracking-[0.2em] text-white/50">
                  <span>01 // PRESTIGE SELECTION</span>
                  <span className="text-gold">₹2,850</span>
                </div>
                <p className="font-serif text-[11px] text-white/70 italic text-center font-light leading-relaxed">
                  “Infused with Kashmiri saffron broth, topped with golden microgreens & slow smoked with aromatic applewood.”
                </p>
              </div>
              
              {/* Interactive hint */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-1 opacity-40 group-hover:opacity-80 transition-opacity whitespace-nowrap">
                <MousePointerClick size={12} className="text-gold animate-bounce" />
                <span className="font-mono text-[9px] tracking-[0.15em] text-white/50 uppercase">REAL-TIME 3D PERSPECTIVE active</span>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>

      {/* Down arrow indicator to prompt scrolling */}
      <div 
        onClick={() => window.scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' })}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 hover:text-gold cursor-pointer transition-all duration-300"
      >
        <span className="font-mono text-[8px] tracking-[0.4em] text-white/60">DESCEND TO DISCOVER</span>
        <ChevronDown size={14} className="text-gold animate-bounce" />
      </div>
    </section>
  );
}
