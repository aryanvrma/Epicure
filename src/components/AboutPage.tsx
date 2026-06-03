import React from 'react';
import { motion } from 'motion/react';
import { Award, Compass, History, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { CornerOrnament, LotusDivider, TempleBorder } from './VaranasiMotif';
import { TimelineEvent } from '../types';

const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: '1998',
    title: 'The Ancestral Botanical Search',
    description: 'Our founders embarked on a comprehensive gourmet research pilgrimage across northern India, recovering lost recipe texts of Awadhi royal court kitchens and seeking ancient wild spice strains.',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&q=80&w=600'
  },
  {
    year: '2009',
    title: 'Vedic Organic Farm Cultivation',
    description: 'Established our private botanical estate in the fertile suburban valleys of Varanasi, focusing strictly on heirloom saffron propagation, pure wood-press oils, and organic dairy milking.',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a45f1d2?auto=format&fit=crop&q=80&w=600'
  },
  {
    year: '2018',
    title: 'The Bronze Sanctum Workshop',
    description: 'We designed the physical structure of Epicure near Dashashwamedh Ghat. Stone carvers and brass beaters spent four years crafting the immersive glassmorphic sanctuary.',
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=600'
  },
  {
    year: '2024',
    title: 'Epicure Opens its Veranda',
    description: 'Unveiled the dining veranda to critical acclaim, combining ancient culinary offering models with high-precision international gastronomic sciences.',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=600'
  }
];

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="pt-28 pb-20 px-4 md:px-8 max-w-7xl mx-auto"
    >
      {/* Editorial Header */}
      <div className="text-center space-y-4 mb-20 max-w-2xl mx-auto">
        <span className="font-mono text-[10px] tracking-[0.3em] text-gold uppercase flex items-center justify-center gap-1.5 animate-pulse">
          <History size={11} /> OUR HISTORICAL FABRIC //
        </span>
        <h1 className="font-serif text-4xl md:text-6xl text-white font-medium tracking-wide">
          The Legacy of <br />
          <span className="text-gold italic font-light text-glow">Epicure’s Culinary Guard</span>
        </h1>
        <LotusDivider />
        <p className="font-sans text-xs md:text-sm text-white/50 leading-relaxed font-light">
          A narrative written in river mist, ancestral clay vessels, and a lifetime’s devotion to absolute luxury refinement.
        </p>
      </div>

      {/* Asymmetrical Master-Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24">
        
        {/* Story Text Column */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <span className="font-mono text-[10px] tracking-[0.25em] text-gold block">// CRAFT PATRONAGE</span>
          <h2 className="font-serif text-2xl md:text-3xl text-white font-medium leading-tight">
            How Epicure Transformed Sacred Spices Into Global Prestige Icons
          </h2>
          <p className="font-sans text-white/70 text-sm leading-relaxed font-light">
             Varanasi represents a physical convergence of absolute constants: the perpetual holy waters, the continuous fire logs, and the deep herbal history that flows in the spice alleyways.
          </p>
          <p className="font-sans text-white/70 text-sm leading-relaxed font-light">
             Epicure was established on a radical thesis—that the age-old, pure ingredient worship code of India deserved a culinary presentation matching the most complex molecular kitchens of Paris and Kyoto. We work with small heritage farms to custom propagate traditional red rices, wild-flowers of single valley origins, and clean Himalayan river rock salts.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="flex items-start gap-2 text-xs font-sans text-white/60">
              <CheckCircle2 size={14} className="text-gold flex-shrink-0 mt-0.5" />
              <span>Carbon-neutral single-origin spice tracing paths.</span>
            </div>
            <div className="flex items-start gap-2 text-xs font-sans text-white/60">
              <CheckCircle2 size={14} className="text-gold flex-shrink-0 mt-0.5" />
              <span>Restored bronze beating craft support structures.</span>
            </div>
            <div className="flex items-start gap-2 text-xs font-sans text-white/60">
              <CheckCircle2 size={14} className="text-gold flex-shrink-0 mt-0.5" />
              <span>Direct-to-grower fair trading payouts.</span>
            </div>
            <div className="flex items-start gap-2 text-xs font-sans text-white/60">
              <CheckCircle2 size={14} className="text-gold flex-shrink-0 mt-0.5" />
              <span>Calibrated organic waste bio-fuel recycle paths.</span>
            </div>
          </div>
        </div>

        {/* Highlight Image Framed with Custom Brass Border details */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[340px] aspect-[4/5] p-4 border border-gold/15 glass-card rounded shadow-2xl">
            <CornerOrnament position="top-right" />
            <CornerOrnament position="bottom-left" />

            <div className="w-full h-full rounded-sm overflow-hidden bg-black/50 relative">
              <img
                src="https://images.unsplash.com/photo-1561361513-2d000a45f1d2?auto=format&fit=crop&q=80&w=800"
                alt="Heritage Varanasi holy rituals Ganges"
                className="w-full h-full object-cover grayscale brightness-90 filter sepia-[20%]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-5 left-5">
                <span className="font-mono text-[9px] tracking-widest text-gold block">FOUNDATION SPIRIT</span>
                <span className="font-serif text-lg text-white">Varanasi dusk reflections</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Interactive Chronicles Timeline of Milestones */}
      <div className="space-y-12">
        <div className="text-center space-y-2">
          <span className="font-mono text-[10px] tracking-[0.25em] text-gold uppercase">// CHRONOLOGY</span>
          <h2 className="font-serif text-2xl md:text-3xl text-white font-medium">Historical Milestones</h2>
          <LotusDivider />
        </div>

        {/* Detailed Horizontal/Vertical Timeline Lists */}
        <div className="relative mt-12 py-4">
          
          {/* Central spine line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-gold/5 via-gold/30 to-gold/5 hidden md:block" />

          <div className="space-y-16 md:space-y-20">
            {TIMELINE_EVENTS.map((evt, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={evt.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 relative ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  
                  {/* Timeline gold orbit dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border border-gold/40 bg-charcoal hidden md:flex items-center justify-center z-10 shadow-[0_0_10px_rgba(203,162,51,0.2)]">
                    <span className="w-2.5 h-2.5 rounded-full bg-gold shadow-[0_0_5px_#CBA233]" />
                  </div>

                  {/* Narrative Block (Left or Right side depending on parity) */}
                  <div className="w-full md:w-1/2 flex flex-col justify-center text-left space-y-3 px-4 md:px-8">
                    <span className="font-mono text-xs font-bold text-gold tracking-widest text-glow flex items-center gap-2">
                      <Sparkles size={11} className="animate-spin-slow" /> {evt.year} // THE ATELIER ERA
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl text-white font-medium">
                      {evt.title}
                    </h3>
                    <p className="font-sans text-white/60 text-xs md:text-sm leading-relaxed font-light">
                      {evt.description}
                    </p>
                  </div>

                  {/* Visual block accompanying (Opposite side) */}
                  <div className="w-full md:w-1/2 px-4 md:px-8 flex items-center justify-center">
                    <div className="relative w-full max-w-[340px] aspect-[16/10] overflow-hidden rounded border border-gold/10 hover:border-gold/30 shadow-lg group pointer-events-auto bg-black/40">
                      <img
                        src={evt.image}
                        alt={evt.title}
                        className="w-full h-full object-cover grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>
      </div>

    </motion.div>
  );
}
