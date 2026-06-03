import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, HelpCircle, Activity, Heart, Landmark } from 'lucide-react';
import { Mandala, LotusDivider } from './VaranasiMotif';

interface FloatingDiya {
  id: number;
  x: number;
  y: number;
  size: number;
  rippleScale: number;
}

export default function VaranasiHeritage() {
  const [diyas, setDiyas] = useState<FloatingDiya[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(0);

  const spawnDiya = (clientX: number, clientY: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100; // percent 0 to 100
    const y = ((clientY - rect.top) / rect.height) * 100; // percent 0 to 100

    const newDiya: FloatingDiya = {
      id: nextId.current++,
      x,
      y,
      size: Math.random() * 12 + 16, // 16 to 28px
      rippleScale: 0
    };

    setDiyas((prev) => [...prev.slice(-30), newDiya]); // Cap at 30 diyas to maintain supreme performance
  };

  const handleWaterClick = (e: React.MouseEvent<HTMLDivElement>) => {
    spawnDiya(e.clientX, e.clientY);
  };

  // Hydrate with some initial floating diyas pre-drifting down the Ganges
  useEffect(() => {
    const initial: FloatingDiya[] = Array.from({ length: 6 }).map(() => ({
      id: nextId.current++,
      x: Math.random() * 80 + 10,
      y: Math.random() * 60 + 20,
      size: Math.random() * 10 + 15,
      rippleScale: 0
    }));
    setDiyas(initial);
  }, []);

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-charcoal to-forest-dark relative overflow-hidden border-b border-gold/10">
      
      {/* Background Mandala Geometry */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 opacity-[0.03] rotate-45 pointer-events-none">
        <Mandala size={600} />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-20">
          <span className="font-mono text-[10px] tracking-[0.3em] text-gold uppercase">// SPIRITUAL GEOMETRIES</span>
          <h2 className="font-serif text-3xl md:text-5xl text-white font-medium tracking-wide">
            The <span className="text-gold italic font-light text-glow">Varanasi Heritage</span> Experience
          </h2>
          <LotusDivider />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Narrative Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <span className="h-[1px] w-8 bg-gold opacity-50" />
              <span className="font-mono text-[10px] tracking-[0.15em] text-gold uppercase font-semibold">DIVINE MAJESTY</span>
            </div>

            <h3 className="font-serif text-2xl md:text-3xl text-white font-medium leading-tight">
              An Ethos Painted in Burning Gold & Sacred Water
            </h3>

            <p className="font-sans text-white/70 text-sm leading-relaxed font-light">
              We stand strategically next to the historically charged waters of the Ganges. Varanasi offers a sensory heritage that cannot be isolated—the scent of burning sandalwood, the dynamic ringing of temple bells, and the spectacular crimson reflection of thousands of flower lights float across the river at dusk.
            </p>

            <p className="font-sans text-white/70 text-sm leading-relaxed font-light">
              Epicure channels this spiritual geography directly. We capture the royal heritage of ancient temples and ghat steps, reflecting them within our hand-carved stone pillars, bronze lanterns of complex patterns, and locally sourced ingredients that celebrate the legendary agrarian history of the region.
            </p>

            {/* Ghats structure icon representation or statistics metrics */}
            <div className="pt-6 border-t border-white/5 space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 border border-gold/20 rounded bg-gold/5 text-gold mt-1">
                  <Landmark size={15} />
                </div>
                <div>
                  <span className="font-mono text-[9px] tracking-[0.1em] text-white/40 uppercase block">Ganga Aarti Sync</span>
                  <p className="font-sans text-[11px] text-white/50 leading-relaxed mt-0.5">
                    Our luxury terrace seating is specifically calibrated to sync visually with the iconic Dashashwamedh Ganga Aarti ceremonies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Interactive Column - Floating Diya virtual Ganges water */}
          <div className="lg:col-span-7">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-white/40 tracking-wider">
                <span>VIRTUAL GANGES RIVER RITUAL</span>
                <span className="text-gold text-glow flex items-center gap-1">
                  <Sparkles size={11} className="animate-spin-slow" /> CLICK WATER TO FLOAT A DIYA
                </span>
              </div>
              
              {/* Ganges Interactive Water Canvas Box */}
              <div
                ref={containerRef}
                onClick={handleWaterClick}
                className="relative w-full aspect-[16/10] rounded-md border border-gold/20 overflow-hidden cursor-crosshair bg-gradient-to-b from-[#030806] via-[#091711] to-[#040c08] shadow-[inset_0_0_50px_rgba(0,0,0,0.9),0_20px_40px_rgba(0,0,0,0.7)]"
              >
                {/* Horizontal Varanasi Ghat Steps Illustration Lines (Very thin, gorgeous subtle vector aesthetics) */}
                <div className="absolute top-0 left-0 w-full h-[30%] opacity-15 pointer-events-none select-none flex flex-col justify-between border-b border-gold/10">
                  <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-gold to-transparent" />
                  <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gold to-transparent opacity-80" />
                  <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />
                  <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gold to-transparent opacity-30" />
                </div>

                {/* Subtile background labels */}
                <div className="absolute top-[18%] left-1/2 -translate-x-1/2 pointer-events-none opacity-40 text-center select-none">
                  <span className="font-serif text-[10px] tracking-[0.4em] text-gold uppercase block">Dashashwamedh Ghat Steps</span>
                  <span className="font-mono text-[6px] tracking-[0.2em] text-white/20 block mt-1">// STAGE OF THE SEVEN PRIESTS</span>
                </div>

                {/* Sparkling river current */}
                <div className="absolute inset-0 bg-radial-gradient(ellipse at center, rgba(27,58,43,0.1) 0%, transparent 80%) pointer-events-none" />

                {/* Floating Diyas with independent motion/drift styles */}
                <AnimatePresence>
                  {diyas.map((diya) => {
                    return (
                      <motion.div
                        key={diya.id}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        style={{
                          left: `${diya.x}%`,
                          top: `${diya.y}%`,
                          transform: 'translate(-50%, -50%)',
                        }}
                        className="absolute pointer-events-none select-none"
                      >
                        {/* Golden Expanding Water Ripple (Awwwards design) */}
                        <motion.div
                          initial={{ scale: 0, opacity: 0.8 }}
                          animate={{ scale: 8, opacity: 0 }}
                          transition={{ duration: 4, ease: 'easeOut', repeat: Infinity, repeatDelay: 1 }}
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border border-gold/30 pointer-events-none"
                        />

                        <motion.div
                          initial={{ scale: 0, opacity: 0.5 }}
                          animate={{ scale: 14, opacity: 0 }}
                          transition={{ duration: 6, ease: 'easeOut', repeat: Infinity, repeatDelay: 2 }}
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full border border-gold/15 pointer-events-none"
                        />

                        {/* Floating Drifting motion */}
                        <motion.div
                          animate={{
                            x: [0, -15, 20, 0],
                            y: [0, -10, -25, -45],
                            scale: [1, 0.9, 0.85, 0.75],
                          }}
                          transition={{
                            duration: 16,
                            ease: 'easeInOut',
                            repeat: Infinity,
                          }}
                          className="relative flex flex-col items-center"
                        >
                          {/* Saffron fire glow light core */}
                          <div
                            style={{
                              width: `${diya.size}px`,
                              height: `${diya.size}px`,
                              background: 'radial-gradient(circle, #FFF 0%, #F4DF4F 40%, #CBA233 80%, rgba(203,162,51,0) 100%)',
                              filter: 'drop-shadow(0 0 10px #CBA233) drop-shadow(0 0 18px rgba(244,223,79, 0.6))',
                            }}
                            className="rounded-full flex items-center justify-center animate-pulse"
                          >
                            {/* Inner fire flame tip */}
                            <div className="w-[4px] h-[7px] bg-red-400 rounded-full blur-[0.2px] translate-y-[-1px]" />
                          </div>

                          {/* Flower petal border representation */}
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border-2 border-red-500/20 rounded-full stroke-dasharray-2 opacity-50" />
                          <span className="font-serif italic text-[7px] text-white/50 tracking-wider block mt-1 select-none">
                            diya // {diya.id}
                          </span>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>

                {/* Static interactive instruction indicator overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white/30 font-mono text-[8px] tracking-[0.2em] pointer-events-none select-none">
                  <span>SACRED RIVER DRIFT VELOCITY: 0.12 KTS</span>
                  <span>TAP WATER TO RELEASE OFFERS</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
