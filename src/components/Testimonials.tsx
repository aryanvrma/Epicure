import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote, Award } from 'lucide-react';
import { Testimonial } from '../types';
import { LotusDivider, CornerOrnament } from './VaranasiMotif';
import TiltCard from './TiltCard';

const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Francois Laurent',
    role: 'Lead Gastronomy Critic',
    text: '“Dining on Epicure’s sacred veranda while the evening oil lanterns illuminate the Ganges is a profound spiritual experience. The Saffron Salmon is an absolute masterpiece of textural symmetry and pure flavor depth.”',
    rating: 5,
    location: 'Le Figaro, Paris'
  },
  {
    id: 'test-2',
    name: 'Rajkumari Gayatri Devi',
    role: 'Patron of Heritage Preservation',
    text: '“Epicure has achieved the impossible: reviving the ancient, sacred royal banquet spice codes of Varanasi and presenting them inside a modern canvas of exquisite global elegance. Truly magnificent.”',
    rating: 5,
    location: 'Banaras Royal Dynasty'
  },
  {
    id: 'test-3',
    name: 'Melissa Vance',
    role: 'Chief Editor & Culinary Scout',
    text: '“Nothing prepares you for the sheer atmospheric majesty of this atelier. Num Raj Bista’s techniques are meticulous. The hand-crushed saffron dome desserts alone define a new pinnacle of fine-dining.”',
    rating: 5,
    location: 'The New York Times Dining'
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? TESTIMONIALS.length - 1 : prevIndex - 1));
  };

  const next = () => {
    setIndex((prevIndex) => (prevIndex === TESTIMONIALS.length - 1 ? 0 : prevIndex + 1));
  };

  const current = TESTIMONIALS[index];

  return (
    <section className="py-24 bg-gradient-to-b from-forest-dark to-charcoal relative overflow-hidden border-b border-gold/10">
      
      {/* Background flare glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-gold/5 blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: '10s' }} />

      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center relative z-10">
        
        {/* Header */}
        <div className="space-y-4 mb-16">
          <span className="font-mono text-[10px] tracking-[0.3em] text-gold uppercase">// WORLD CRITIQUES</span>
          <h2 className="font-serif text-3xl md:text-5xl text-white font-medium tracking-wide">
            The Voice of <span className="text-gold italic font-light text-glow">The Connoisseur</span>
          </h2>
          <LotusDivider />
        </div>

        {/* Cinematic Review Shell with 3D Tilt */}
        <TiltCard className="w-full max-w-4xl mx-auto" maxTilt={6}>
          <div className="relative glass-card rounded-md p-8 md:p-14 border border-gold/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)] min-h-[340px] flex flex-col justify-between select-none">
            <CornerOrnament position="top-left" />
            <CornerOrnament position="bottom-right" />
            
            <Quote className="absolute top-6 left-6 w-16 h-16 text-gold/5 pointer-events-none" />

            {/* Golden Stars */}
            <div className="flex justify-center gap-1.5 mb-6 text-gold">
              {Array.from({ length: current.rating }).map((_, i) => (
                <Star key={i} size={15} className="fill-gold shadow-[0_0_5px_#CBA233]" />
              ))}
            </div>

            {/* Testimonial texts */}
            <div className="relative overflow-hidden flex-1 py-4 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="space-y-6"
                >
                  <blockquote className="font-serif text-lg md:text-xl md:leading-relaxed text-white/90 italic font-light">
                    {current.text}
                  </blockquote>
                  
                  <div className="space-y-1">
                    <span className="font-sans text-sm font-semibold tracking-widest text-gold block uppercase">
                      {current.name}
                    </span>
                    <span className="font-mono text-[9px] text-white/45 tracking-[0.2em] block uppercase">
                      {current.role} • {current.location}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Control Navigation keys */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-white/5 z-10">
              <button
                onClick={prev}
                className="p-2.5 rounded-full border border-gold/20 hover:border-gold hover:text-gold text-white/70 hover:scale-105 active:scale-95 transition-all cursor-pointer focus:outline-none"
                aria-label="Previous critique"
              >
                <ChevronLeft size={16} />
              </button>

              {/* Slide Index circles */}
              <div className="flex gap-2.5">
                {TESTIMONIALS.map((t, idx) => (
                  <button
                    key={t.id}
                    onClick={() => setIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${
                      index === idx ? 'bg-gold w-6 shadow-[0_0_6px_#CBA233]' : 'bg-white/10 hover:bg-white/30'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-2.5 rounded-full border border-gold/20 hover:border-gold hover:text-gold text-white/70 hover:scale-105 active:scale-95 transition-all cursor-pointer focus:outline-none"
                aria-label="Next critique"
              >
                <ChevronRight size={16} />
              </button>
            </div>

          </div>
        </TiltCard>

        {/* Global recognition footer */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-12 opacity-35 filter invert-[30%] select-none pointer-events-none">
          <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-white font-semibold">
            <Award size={13} className="text-gold" /> MICHELIN STARS SELECTIONS
          </div>
          <div className="font-serif tracking-widest text-sm text-white font-semibold italic">Condé Nast Traveler</div>
          <div className="font-mono text-[10px] tracking-widest text-white font-bold">L’ORÉAL GOURMET AWARD</div>
        </div>

      </div>
    </section>
  );
}
