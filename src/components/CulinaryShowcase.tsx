import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Leaf, Award, X, Wine, Flame, Sparkles } from 'lucide-react';
import { LotusDivider, CornerOrnament, Mandala } from './VaranasiMotif';
import TiltCard from './TiltCard';

interface ShowcaseDish {
  id: string;
  name: string;
  translation?: string;
  description: string;
  history: string;
  price: number;
  image: string;
  isVegetarian: boolean;
  pairing: string;
  chefSecret: string;
  heritageRating: string;
}

const SIGNATURE_DISHES: ShowcaseDish[] = [
  {
    id: 'dish-1',
    name: 'Kashi Gold Paneer Terrine',
    translation: 'काशी स्वर्ण पनीरे',
    description: 'Slow-pressed organic paneer layers infused with fresh sweet almond meal, mountain pistachio crumble, and sealed under custom 24-karat edible gold leaf.',
    history: 'Directly inspired by the opulent metal-gilding textures of Varanasi temples, representing wealthy royal banquets of ancient Awadh kings.',
    price: 2150,
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800',
    isVegetarian: true,
    pairing: 'Chilled Organic Saffron Sula Vineyards Chenin Blanc',
    chefSecret: 'The pistachio paste is cold-churned at sunrise with small drops of divine edible rose-water to maintain maximum herbal fragrance.',
    heritageRating: 'GOLD STANDARD CLASSIC'
  },
  {
    id: 'dish-2',
    name: 'Smoked Ganges Reef Cod',
    translation: 'गंगा तट धूम्र मत्स्य',
    description: 'Fresh local river reef cod, smoked slowly under hot silver ashes and dried mango-wood logs, served in rich wild ginger and raw mustard oil emulsion.',
    history: 'A culinary homage to Varanasi’s ancient river fisherman communities, capturing the distinct smoking techniques used on the quiet southern riverbanks.',
    price: 2600,
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800',
    isVegetarian: false,
    pairing: 'Oak-aged Reserve Chardonnay, cold-poured',
    chefSecret: 'To give a perfect texture we envelop the cod in edible banana leaves layered with dynamic Kashmiri spices for exactly three hours before heat-smoking.',
    heritageRating: 'LEGENDARY WATERWAY PLATTER'
  },
  {
    id: 'dish-3',
    name: 'Varanasi Saffron Rabri Dome',
    translation: 'केसर रबरी गुंबद',
    description: 'Slow-reduced milk pudding solidified into an elegant sugar crystal dome, fractured at the guest table, highlighting wild hand-plucked organic saffron.',
    history: 'A luxurious variation of the sweet Rabri desserts served in clay pots around Vishwanath Lane for the last five centuries.',
    price: 1100,
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&q=80&w=800',
    isVegetarian: true,
    pairing: 'Hot Saffron Cardamom Infusion or Royal Late Harvest Dessert Wine',
    chefSecret: 'The Dome is hand-blown at precisely 125 degrees Celsius, using clear caramelized stevia to ensure a fragile crisp glass resonance.',
    heritageRating: 'PREMIUM CONFECTION'
  },
];

export default function CulinaryShowcase() {
  const [selectedDish, setSelectedDish] = useState<ShowcaseDish | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [radius, setRadius] = useState(150);

  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 480) {
        setRadius(95);
      } else if (window.innerWidth < 768) {
        setRadius(120);
      } else {
        setRadius(160);
      }
    };
    
    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  const activeDish = SIGNATURE_DISHES[activeIndex];
  const baseAngles = [270, 30, 150]; // top-center, bottom-right, bottom-left

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % SIGNATURE_DISHES.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + SIGNATURE_DISHES.length) % SIGNATURE_DISHES.length);
  };

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-forest-dark to-charcoal relative overflow-hidden border-b border-gold/10">
      
      {/* Dynamic Background Light Rays */}
      <div className="absolute top-[30%] right-[10%] w-[350px] h-[350px] rounded-full bg-gold/5 blur-[100px] pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] rounded-full bg-forest/20 blur-[130px] pointer-events-none animate-pulse" style={{ animationDuration: '12s' }} />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-20">
          <span className="font-mono text-[10px] tracking-[0.3em] text-gold uppercase">// PRESTIGE SENSORY JOURNEY</span>
          <h2 className="font-serif text-3xl md:text-5xl text-white font-medium tracking-wide">
            Signature <span className="text-gold italic font-light text-glow">Culinary Masterpieces</span>
          </h2>
          <LotusDivider />
          <p className="font-sans text-xs md:text-sm text-white/50 max-w-xl mx-auto font-light leading-relaxed">
            Take command of our circular celestial selector disk. Rotate or select any masterpiece to illuminate ancient chef secrets and traditional pairings.
          </p>
        </div>

        {/* Masterpiece Showcase: Rotating Mechanical Disc and Details Board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center px-2 py-4">
          
          {/* Left Column: Prestigious Circular Rotating Dial */}
          <div className="lg:col-span-6 flex items-center justify-center relative min-h-[380px] md:min-h-[460px] w-full overflow-visible">
            
            {/* Background Atmosphere Aura */}
            <div className="absolute w-[260px] md:w-[340px] h-[260px] md:h-[340px] rounded-full bg-gold/5 opacity-40 filter blur-[90px] pointer-events-none" />
            <div className="absolute w-[220px] md:w-[280px] h-[220px] md:h-[280px] rounded-full bg-forest/10 opacity-30 filter blur-[60px] pointer-events-none" />

            {/* Glowing active spotlight overlay behind top crown */}
            <div className="absolute top-0 w-28 h-28 bg-gold/10 rounded-full blur-2xl opacity-60 pointer-events-none -translate-y-8" />

            {/* Invariant Circular Track with notches */}
            <div 
              style={{ width: radius * 2, height: radius * 2 }}
              className="absolute rounded-full border border-dashed border-gold/25 pointer-events-none flex items-center justify-center select-none"
            >
              {/* Inner design layers representing ancient astronomical tools */}
              <div className="w-[85%] h-[85%] rounded-full border border-dashed border-gold/15 flex items-center justify-center">
                <div className="w-[72%] h-[72%] rounded-full border border-gold/10 flex items-center justify-center">
                  <div className="w-[85%] h-[85%] rounded-full border border-emerald-500/5" />
                </div>
              </div>
            </div>

            {/* Central Sacred Varanasi Mandala (Spinning Invariantly) */}
            <div className="absolute pointer-events-none select-none opacity-[0.14]">
              <Mandala size={150} className="text-gold animate-spin-slow" style={{ animationDuration: '100s' }} />
            </div>

            {/* Active Spotlight Pointer Crown */}
            <div className="absolute top-0 -translate-y-[calc(100%-8px)] z-20 flex flex-col items-center pointer-events-none">
              <Sparkles size={13} className="text-gold animate-pulse mb-1" />
              <span className="font-mono text-[7px] tracking-[0.25em] text-gold uppercase bg-[#0d1612] px-2.5 py-0.5 border border-gold/30 rounded-full shadow-lg">ACTIVE RITUAL</span>
              <div className="w-px h-6 bg-gradient-to-b from-gold to-transparent mt-0.5" />
            </div>

            {/* Dynamic ROTATING Carousel Core */}
            <motion.div
              animate={{ rotate: -activeIndex * 120 }}
              transition={{ type: 'spring', damping: 28, stiffness: 85, mass: 1 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              {SIGNATURE_DISHES.map((dish, i) => {
                const angle = baseAngles[i];
                const angleRad = (angle * Math.PI) / 180;
                const x = radius * Math.cos(angleRad);
                const y = radius * Math.sin(angleRad);
                const isActive = activeIndex === i;

                return (
                  <div
                    key={dish.id}
                    style={{
                      position: 'absolute',
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                    }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto z-10"
                  >
                    {/* Dish Orbit Sphere Frame, perfectly counter-rotated to stay upright */}
                    <motion.div
                      animate={{ rotate: activeIndex * 120 }}
                      transition={{ type: 'spring', damping: 28, stiffness: 85 }}
                      whileHover={{ scale: 1.08 }}
                      onClick={() => setActiveIndex(i)}
                      className="relative cursor-pointer focus:outline-none select-none group"
                    >
                      {/* Outer pulse indicator for selected item */}
                      {isActive && (
                        <div className="absolute -inset-2.5 rounded-full border border-gold/40 animate-ping opacity-35 pointer-events-none" />
                      )}

                      {/* Concentric rotating glowing gold border frame */}
                      <div className={`absolute -inset-2 rounded-full border-2 transition-all duration-700 pointer-events-none ${
                        isActive 
                          ? 'border-gold shadow-[0_0_25px_rgba(203,162,51,0.55)] scale-102' 
                          : 'border-white/10 group-hover:border-gold/50'
                      }`} />

                      {/* Main masked sphere */}
                      <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden bg-black/60 border border-gold/20 relative shadow-[0_15px_30px_rgba(0,0,0,0.8)]">
                        <img
                          src={dish.image}
                          alt={dish.name}
                          className={`w-full h-full object-cover transition-all duration-1000 ${
                            isActive 
                              ? 'scale-110 brightness-105 filter grayscale-0' 
                              : 'grayscale group-hover:grayscale-0 brightness-[65%] group-hover:brightness-95'
                          }`}
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent opacity-60" />

                        {/* Central magical icon overlay for state feedback */}
                        {isActive && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                            <div className="bg-gold/10 backdrop-blur-xs p-1.5 rounded-full border border-gold/40">
                              <Sparkles size={12} className="text-gold animate-spin-slow" />
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Floating marker tag representing dish sequence */}
                      <div className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full font-mono text-[8px] tracking-widest border transition-all duration-300 pointer-events-none shadow-lg ${
                        isActive 
                          ? 'bg-gold text-black border-gold shadow-[0_0_10px_#CBA233]' 
                          : 'bg-charcoal text-white/50 border-white/10 group-hover:border-gold group-hover:text-gold'
                      }`}>
                        0{i + 1}
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column: Editorial Details Panel with Cross-fades */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 lg:space-y-8 p-2 md:p-4 text-left border-t lg:border-t-0 lg:border-l border-white/5 lg:pl-12">
            
            {/* Meta indicator */}
            <div className="flex items-center gap-2">
              <span className="font-mono text-[9px] tracking-[0.3em] text-gold uppercase">// MASTERPIECE SPECIFICATION // 0{activeIndex + 1}</span>
              <div className="w-12 h-px bg-gold/25" />
            </div>

            {/* Symmetrical Text Container with rigid heights for layout safety */}
            <div className="space-y-4 min-h-[140px] md:min-h-[155px] flex flex-col justify-start">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDish.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-3"
                >
                  <div className="flex flex-wrap items-baseline gap-3">
                    <h3 className="font-serif text-3xl md:text-4xl text-white font-medium tracking-wide">
                      {activeDish.name}
                    </h3>
                    <span className="font-serif italic text-gold text-lg md:text-xl font-light text-glow">
                      {activeDish.translation}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono pt-1 text-white/50">
                    <span className="text-gold font-semibold tracking-wider text-sm">₹{activeDish.price.toLocaleString('en-IN')}</span>
                    <div className="w-px h-3 bg-white/15" />
                    <span className="tracking-[0.15em] uppercase text-[9px]">{activeDish.heritageRating}</span>
                    <div className="w-px h-3 bg-white/15" />
                    <span className={`px-2.5 py-0.5 rounded-full border border-current text-[8px] tracking-widest ${
                      activeDish.isVegetarian ? 'text-emerald-400 border-emerald-400/20 bg-emerald-950/10' : 'text-red-400 border-red-400/20 bg-red-950/10'
                    }`}>
                      {activeDish.isVegetarian ? 'VEGETARIAN' : 'NON-VEGETARIAN'}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Description Paragraph with elegant fading */}
            <div className="min-h-[90px] md:min-h-[105px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeDish.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="font-sans text-white/70 text-xs md:text-sm font-light leading-relaxed text-left"
                >
                  {activeDish.description}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Sommelier Highlight Infobox */}
            <div className="min-h-[85px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDish.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="p-4 bg-forest/20 border-l-2 border-gold/40 rounded-r-md flex items-start gap-3"
                >
                  <Wine size={16} className="text-gold mt-0.5 shrink-0" />
                  <div>
                    <span className="font-mono text-[8px] tracking-[0.2em] text-gold uppercase block font-semibold mb-1">Sommelier Wine Accompagnement</span>
                    <p className="font-serif text-[11px] italic text-white/65 font-light leading-relaxed">
                      "{activeDish.pairing}"
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls Button Row */}
            <div className="flex flex-wrap items-center justify-between gap-6 pt-5 border-t border-white/5">
              
              {/* Stepper controls */}
              <div className="flex items-center gap-3 select-none">
                <button
                  onClick={handlePrev}
                  className="p-2 border border-gold/25 text-white/75 hover:border-gold hover:text-gold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer focus:outline-none bg-black/20 hover:bg-gold/5"
                  aria-label="Previous masterpiece"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>

                <span className="font-mono text-[11px] text-white/50 tracking-wider">
                  <span className="text-gold font-semibold">0{activeIndex + 1}</span> / 03
                </span>

                <button
                  onClick={handleNext}
                  className="p-2 border border-gold/25 text-white/75 hover:border-gold hover:text-gold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer focus:outline-none bg-black/20 hover:bg-gold/5"
                  aria-label="Next masterpiece"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>

              {/* Secret Ritual modal opener */}
              <button
                onClick={() => setSelectedDish(activeDish)}
                className="relative px-6 py-3 bg-gradient-to-r from-gold/10 to-gold/5 border border-gold/30 hover:border-gold text-gold hover:text-white font-mono text-[10px] tracking-[0.2em] rounded-sm transition-all duration-300 flex items-center gap-2 group cursor-pointer focus:outline-none"
              >
                <Sparkles size={11} className="text-gold group-hover:rotate-45 transition-transform duration-500 animate-pulse" />
                EXPLORE CHEF RITUALS
              </button>

            </div>

          </div>
        </div>

      </div>

      {/* Cinematic Modal For Detail Breakdown */}
      <AnimatePresence>
        {selectedDish && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#040806]/95 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.93, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.93, opacity: 0, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="relative w-full max-w-4xl bg-charcoal/90 border border-gold/40 rounded-sm overflow-hidden shadow-2xl glass-card text-left my-8"
            >
              {/* Corner Ornaments */}
              <CornerOrnament position="top-left" />
              <CornerOrnament position="top-right" />
              <CornerOrnament position="bottom-left" />
              <CornerOrnament position="bottom-right" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedDish(null)}
                className="absolute top-5 right-5 z-10 p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-gold hover:text-gold transition-colors duration-300 text-white cursor-pointer"
                aria-label="Close detailed view"
              >
                <X size={16} />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12">
                
                {/* Visual Display side */}
                <div className="lg:col-span-5 h-[280px] lg:h-full min-h-[350px] relative bg-black/60 border-b lg:border-b-0 lg:border-r border-gold/15">
                  <img
                    src={selectedDish.image}
                    alt={selectedDish.name}
                    className="w-full h-full object-cover grayscale-[5%] brightness-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-charcoal via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating traditional stamp stamp */}
                  <div className="absolute top-4 left-4 p-3 bg-forest/80 backdrop-blur-md rounded border border-gold/20 flex flex-col items-center">
                    <Sparkles size={16} className="text-gold animate-pulse mb-1" />
                    <span className="font-mono text-[7px] text-white/50 uppercase tracking-[0.2em]">Epicure Ritual</span>
                    <span className="font-serif text-[11px] text-gold font-semibold tracking-wider">Aarti Grade</span>
                  </div>
                </div>

                {/* Information side */}
                <div className="lg:col-span-7 p-8 md:p-10 space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-baseline gap-3">
                      <span className="font-serif text-3xl font-medium text-white">{selectedDish.name}</span>
                      <span className="font-serif italic text-gold text-lg">{selectedDish.translation}</span>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-mono">
                      <span className="text-gold font-semibold">₹{selectedDish.price.toLocaleString('en-IN')}</span>
                      <div className="w-[1.5px] h-3 bg-white/15" />
                      <span className="text-white/60 tracking-wider uppercase">{selectedDish.heritageRating}</span>
                      <div className="w-[1.5px] h-3 bg-white/15" />
                      <span className={`px-2 py-0.5 rounded-full border border-current text-[10px] ${
                        selectedDish.isVegetarian ? 'text-emerald-400 border-emerald-400/20' : 'text-red-400 border-red-400/20'
                      }`}>
                        {selectedDish.isVegetarian ? 'VEGETARIAN' : 'NON-VEG'}
                      </span>
                    </div>

                    <p className="font-sans text-white/80 text-sm leading-relaxed font-light">
                      {selectedDish.description}
                    </p>

                    {/* Historical storytelling context */}
                    <div className="p-4 bg-forest/30 border-l-2 border-gold rounded-r">
                      <span className="font-mono text-[9px] tracking-[0.15em] text-gold block uppercase font-semibold mb-1">Historical Legacy</span>
                      <p className="font-serif text-[12px] italic text-white/70 leading-relaxed font-light">
                        "{selectedDish.history}"
                      </p>
                    </div>

                    {/* Secret Culinary specifications */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                      <div className="space-y-1">
                        <span className="font-mono text-[9px] tracking-[0.1em] text-gold uppercase block">THE CHEF’S RITUAL</span>
                        <p className="font-sans text-white/60 text-[11px] leading-relaxed">
                          {selectedDish.chefSecret}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <span className="font-mono text-[9px] tracking-[0.1em] text-gold uppercase block flex items-center gap-1">
                          <Wine size={10} /> SOMMELIER PAIRING
                        </span>
                        <p className="font-sans text-white/60 text-[11px] leading-relaxed">
                          {selectedDish.pairing}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                    <span className="font-mono text-[9px] tracking-[0.15em] text-white/40">EPICURE VARANASI SELECTIONS</span>
                    <button
                      onClick={() => setSelectedDish(null)}
                      className="px-6 py-2 border border-gold text-gold font-mono text-[10px] tracking-[0.2em] rounded-sm bg-gold/5 hover:bg-gold hover:text-black transition-all cursor-pointer focus:outline-none"
                    >
                      RETURN TO COLLECTION
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
