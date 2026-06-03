import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { LotusDivider, CornerOrnament } from './VaranasiMotif';
import TiltCard from './TiltCard';

export default function ChefPhilosophy() {
  const [imgIndex, setImgIndex] = useState(0);
  const fallbacks = [
    '/chef_num_raj.png',
    '/chef_num_raj.jpeg',
    '/assets/chef_num_raj.png',
    '/assets/chef_num_raj.jpg',
    ];

  const handleImgError = () => {
    if (imgIndex < fallbacks.length - 1) {
      setImgIndex(prev => prev + 1);
    }
  };

  return (
    <section className="py-24 md:py-32 bg-[#040806] relative overflow-hidden border-b border-gold/10">
      
      {/* Decorative text watermark */}
      <div className="absolute right-[-10%] bottom-5 font-serif text-[18vh] italic text-white/[0.01] pointer-events-none select-none tracking-widest uppercase">
        PHILOSOPHY
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Executive Chef Editorial Portrait Frame with 3D Interaction */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-start">
            <TiltCard className="w-full max-w-[340px]" maxTilt={12}>
              <div className="relative w-full aspect-[3/4] border border-gold/20 rounded-md p-4 class-card shadow-2xl">
                <CornerOrnament position="top-right" />
                <CornerOrnament position="bottom-left" />

                <div className="w-full h-full overflow-hidden rounded-sm relative group bg-black/50">
                  <img
                    src={fallbacks[imgIndex]}
                    alt="Executive Chef Num Raj Bista Epicure"
                    className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={handleImgError}
                  />
                  {/* Visual vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-80 pointer-events-none" />
                  
                  <div className="absolute bottom-5 left-5 right-5 text-left z-10">
                    <span className="font-mono text-[9px] tracking-[0.2em] text-gold uppercase block">EXECUTIVE CHEF</span>
                    <span className="font-serif text-lg tracking-wide text-white block">Num Raj Bista</span>
                    <span className="font-mono text-[8px] text-white/40 tracking-wider">Master of Fine Indian Gastronomy</span>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Narrative Chef Philosophical Text block */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 text-left">
            <div className="space-y-4">
              <span className="font-mono text-[10px] tracking-[0.3em] text-gold uppercase block">// SECRETS OF THE AGES</span>
              <h2 className="font-serif text-3xl md:text-5xl text-white font-medium tracking-wide leading-tight">
                Aligning <span className="text-gold italic font-light text-glow">Spiritual Purity</span> with Culinary Fire
              </h2>
              <LotusDivider className="self-start opacity-60" />
            </div>

            <div className="relative">
              <Quote className="absolute -top-6 -left-6 w-12 h-12 text-gold/10 pointer-events-none" />
              <p className="font-serif text-xl md:text-2xl italic text-white/90 leading-relaxed font-light">
                “In Varanasi, we do not simply cook; we make a sensory offering. Every flavor profiles, every charcoal flame alignment, and every gold trim leaf represents a cosmic respect for heritage and pure agricultural devotion.”
              </p>
            </div>

            <div className="space-y-4 font-sans text-white/70 text-sm leading-relaxed font-light">
              <p>
                My kitchen philosophy was built across three decades in European fine-dining capitals, but has found its absolute resolution on the sacred steps of Varanasi. When we combine slow-fermented organic grains, hand-crushed saffron pistils, and wild river-valley mustard oils, we are honoring a lineage of culinary worship.
              </p>
              <p>
                Our team at Epicure avoids processed commercial shortcuts entirely. We make our own cultured gold butter, hand-smelt and blend our spice ratios in bronze mortars, and source our wood directly from designated sweet-spice orchards in northern India to fuel our royal roasting pits.
              </p>
            </div>

            {/* Chef Signature Representation design elements */}
            <div className="pt-6 border-t border-white/5 flex items-center gap-4">
              <div className="h-[1px] w-12 bg-gold/35" />
              <div>
                <span className="font-serif text-sm tracking-widest text-white/90 uppercase block">Chef Num Raj Bista</span>
                <span className="font-mono text-[9px] tracking-[0.2em] text-gold uppercase">// CUSTODIAN OF EPICURE SIGNS</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
