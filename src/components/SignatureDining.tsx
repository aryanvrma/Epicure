import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Utensils, Star, Eye } from 'lucide-react';
import { CornerOrnament, LotusDivider } from './VaranasiMotif';
import TiltCard from './TiltCard';

export default function SignatureDining() {
  // Stagger configurations for our list entries as they scroll in
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
  };

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-charcoal to-forest-dark relative overflow-hidden border-b border-gold/10">
      <div className="absolute inset-0 bg-[#000]/20 pointer-events-none" />
      
      {/* Decorative vertical texts with smooth scroll transform or static pulsing */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 font-mono text-[9px] text-white/10 tracking-[0.6em] rotate-90 origin-left hidden xl:block uppercase select-none">
        EPICURE • SENSORY CHRONICLES
      </div>
      <div className="absolute right-6 top-1/2 -translate-y-1/2 font-mono text-[9px] text-gold/15 tracking-[0.6em] -rotate-90 origin-right hidden xl:block uppercase select-none">
        VARANASI • EXCLUSIVITY GUARANTEED
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Editorial Heading */}
        <div className="text-center space-y-4 mb-20">
          <span className="font-mono text-[10px] tracking-[0.3em] text-gold uppercase">// THE ATELIER</span>
          <h2 className="font-serif text-3xl md:text-5xl tracking-wide text-white leading-tight">
            An Unparalleled <span className="text-gold italic font-light text-glow">Gastronomic Odyssey</span>
          </h2>
          <LotusDivider />
        </div>

        {/* Asymmetrical Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Image Block wrapped in 3D tilt */}
          <div className="lg:col-span-6 relative">
            <TiltCard className="w-full h-full relative aspect-[4/3]" maxTilt={10}>
              <div
                className="relative w-full h-full rounded-md overflow-hidden border border-gold/20 shadow-[0_20px_40px_rgba(0,0,0,0.8)] class-card group"
              >
                {/* Corner detailing */}
                <CornerOrnament position="top-left" />
                <CornerOrnament position="bottom-right" />

                <img
                  src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=1200"
                  alt="Epicure luxury courtyard atmosphere"
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 brightness-95 filter sepia-[15%]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-80 pointer-events-none" />

                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between z-10">
                  <div>
                    <span className="font-serif text-white text-xl font-light tracking-wide block">The Royal Courtyard</span>
                    <span className="font-mono text-[9px] text-gold uppercase tracking-[0.2em]">Candlelit Sanctum</span>
                  </div>
                  <div className="flex gap-1 text-gold">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={11} className="fill-gold" />
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>

            {/* Float-offset subcard expressing luxury depth */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 40 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 1.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-10 -right-6 z-10 hidden sm:block p-4 max-w-[240px] glass-card rounded-md shadow-2xl"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-gold/10 rounded-full text-gold">
                  <Utensils size={14} className="animate-pulse" />
                </div>
                <div>
                  <span className="font-mono text-[9px] tracking-[0.1em] text-white/50 block">MICHELIN DIRECTION</span>
                  <p className="font-serif text-[12px] text-white/80 italic mt-1 leading-snug">
                    “The culinary curation marries deep sacred traditions with absolute gourmet modernism.”
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Narrative / Content Details Block */}
          <div className="lg:col-span-6 space-y-8 lg:pl-4">
            <div className="space-y-4">
              <span className="font-mono text-[10px] tracking-[0.25em] text-gold block">// MULTI-SENSORY SESSIONS</span>
              <h3 className="font-serif text-2xl md:text-3xl tracking-wide text-white font-medium">
                Saffron, Silver Plates & A Sacred Sunset
              </h3>
              <p className="font-sans text-white/70 text-sm leading-relaxed font-light">
                Dining at Epicure is not a simple meal — it is an active spiritual sensory experience. Every evening commences with our custom Saffron Elixir ritual, presented in physical silver ware handcrafted by the traditional metal-beaters of Varanasi. 
              </p>
              <p className="font-sans text-white/70 text-sm leading-relaxed font-light">
                As the night progress, guests dine facing the iconic Ganga, accompanied by the distant meditative chants and the slow-burning aromas of customized incense matchings selected based on your chosen menu flight.
              </p>
            </div>

            {/* List of distinct highlights using staggered entry animations on scroll */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/5"
            >
              <motion.div variants={itemVariants} className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_6px_#CBA233]" />
                  <span className="font-serif text-sm text-gold tracking-wider">Heritage Infused Recipes</span>
                </div>
                <p className="font-sans text-white/50 text-[11px] leading-relaxed">
                  Decades-old family secrets elevated via contemporary culinary-science strategies.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_6px_#CBA233]" />
                  <span className="font-serif text-sm text-gold tracking-wider">Pure Himalayan Spices</span>
                </div>
                <p className="font-sans text-white/50 text-[11px] leading-relaxed">
                  Sourced from pristine boutique family orchards on high Himalayan slopes.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_6px_#CBA233]" />
                  <span className="font-serif text-sm text-gold tracking-wider">Riverfront Balconies</span>
                </div>
                <p className="font-sans text-white/50 text-[11px] leading-relaxed">
                   Private luxury deck tables offering absolute visual command over Ganga Aarti.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_6px_#CBA233]" />
                  <span className="font-serif text-sm text-gold tracking-wider">Vedic Wine Cellar</span>
                </div>
                <p className="font-sans text-white/50 text-[11px] leading-relaxed">
                  Sommelier-curated global organic vintages paired symmetrically with Vedic notes.
                </p>
              </motion.div>
            </motion.div>

            {/* Beautiful visual signature */}
            <div className="pt-4 flex items-center gap-4">
              <div className="h-0.5 w-12 bg-gold/20" />
              <div className="font-serif italic text-white/60 text-sm tracking-widest">
                “Created for absolute immersion, presented with absolute perfection.”
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
