import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Image, X, ChevronLeft, ChevronRight, Eye, Sparkles } from 'lucide-react';
import { GalleryItem } from '../types';
import { CornerOrnament, LotusDivider } from './VaranasiMotif';

const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'The Golden River Veranda',
    category: 'ambiance',
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800',
    description: 'Our luxurious outdoor seating lit with historical brass oil lamps, overlooking the Ganges riverfront.'
  },
  {
    id: 'gal-2',
    title: 'Shahi Saffron Plating',
    category: 'dishes',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
    description: 'An aerial look at the delicate geometry of our signature Saffron-scented salmon filet.'
  },
  {
    id: 'gal-3',
    title: 'Ganga Dusk Glow',
    category: 'heritage',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a45f1d2?auto=format&fit=crop&q=80&w=800',
    description: 'An atmospheric dusk landscape capturing the majestic lamps glowing on Varanasi’s holy stone ghat steps.'
  },
  {
    id: 'gal-4',
    title: 'Sandalwood Cocktail Smokes',
    category: 'ambiance',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800',
    description: 'Our chief mixologist sealing sandalwood-perfumed clouds inside double-walled crystal glassware.'
  },
  {
    id: 'gal-5',
    title: 'Edible Gold Paneer Terrine',
    category: 'dishes',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800',
    description: 'A spectacular perspective showcasing 24k gold leaf wrapped around wood-fired spiced cottage cheese terrine.'
  },
  {
    id: 'gal-6',
    title: 'Floating Ganga Diya Lights',
    category: 'heritage',
    image: 'https://images.unsplash.com/photo-1605152276897-4f618f831968?auto=format&fit=crop&q=80&w=800',
    description: 'Spiritual offerings of candles and local marigold flowers floating gently down the holy Ganges river currents.'
  },
  {
    id: 'gal-7',
    title: 'The Gilded Glass Sanctuary',
    category: 'ambiance',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800',
    description: 'Looking into Epicure’s climate-controlled central glass dome during a candlelit dinner reservation.'
  },
  {
    id: 'gal-8',
    title: 'Hand Grinding Spices Ritual',
    category: 'heritage',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&q=80&w=800',
    description: 'The ancient stone mortar preparation used twice daily to grind our organic heirloom cardamom seeds.'
  }
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ambiance' | 'dishes' | 'heritage'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filterTags: { id: typeof activeFilter; label: string }[] = [
    { id: 'all', label: 'THE TOTAL SPECTRUM' },
    { id: 'ambiance', label: 'THE ATELIER AMBIANCE' },
    { id: 'dishes', label: 'THE FINE GASTRONOMY' },
    { id: 'heritage', label: 'THE SACRED HERITAGE' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? GALLERY_DATA 
    : GALLERY_DATA.filter(item => item.category === activeFilter);

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  const activeLightboxItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="pt-28 pb-20 px-4 md:px-8 max-w-7xl mx-auto"
    >
      
      {/* Page Header */}
      <div className="text-center space-y-4 mb-16 max-w-2xl mx-auto">
        <span className="font-mono text-[10px] tracking-[0.3em] text-gold uppercase flex items-center justify-center gap-1.5">
          <Image size={11} className="animate-pulse" /> VISUAL WATERMARK CHRONICLES //
        </span>
        <h1 className="font-serif text-4xl md:text-6xl text-white font-medium tracking-wide">
          The Epicurean <span className="text-gold italic font-light text-glow">Visual Canvas</span>
        </h1>
        <LotusDivider />
        <p className="font-sans text-xs md:text-sm text-white/50 leading-relaxed font-light">
          A physical gaze into the luxurious atmosphere, high-end plating designs, and deep spiritual heritage that envelops Epicure.
        </p>
      </div>

      {/* Grid Filtering Tabs Selection */}
      <div className="flex justify-center gap-3 md:gap-6 flex-wrap mb-16 border-b border-white/5 pb-6">
        {filterTags.map((tag) => {
          const isSelected = activeFilter === tag.id;
          return (
            <button
              key={tag.id}
              onClick={() => {
                setActiveFilter(tag.id);
                setLightboxIndex(null); // Clear lightbox state when filtering to prevent indexing drift
              }}
              className={`px-5 py-2.5 font-mono text-[10px] tracking-widest transition-all duration-500 rounded-sm cursor-pointer border ${
                isSelected
                  ? 'bg-gold/15 text-gold border-gold/45 shadow-[0_4px_12px_rgba(203,162,51,0.1)]'
                  : 'bg-transparent text-white/50 border-white/10 hover:border-gold/30 hover:text-white'
              }`}
            >
              {tag.label}
            </button>
          );
        })}
      </div>

      {/* Masonry-style dynamic image layout gallery */}
      <motion.div 
        layout
        className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
      >
        {filteredItems.map((item, index) => {
          return (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8 }}
              onClick={() => setLightboxIndex(index)}
              className="break-inside-avoid relative glass-card p-2 group cursor-zoom-in overflow-hidden hover:border-gold/50 transition-all duration-500 rounded shadow-xl"
            >
              <div className="relative w-full overflow-hidden rounded bg-black/40 aspect-[4/3] sm:aspect-auto">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual hover lens with eye icon */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-center items-center gap-2">
                  <div className="w-10 h-10 rounded-full border border-gold flex items-center justify-center text-gold bg-charcoal shadow-[0_0_10px_#CBA233]">
                    <Eye size={16} />
                  </div>
                  <span className="font-mono text-[9px] text-white/80 tracking-[0.2em] uppercase mt-1">ENLARGE VISUAL</span>
                </div>
              </div>

              {/* Minimal caption display underneath card block */}
              <div className="p-4 text-left space-y-1 bg-gradient-to-t from-charcoal/30 to-transparent">
                <span className="font-mono text-[8px] text-gold uppercase tracking-[0.2em] font-bold">
                  // {item.category.toUpperCase()} SELECTION
                </span>
                <h3 className="font-serif text-lg text-white font-medium tracking-wide">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Interactive Motion Lightbox slider for maximum luxury presentation */}
      <AnimatePresence>
        {activeLightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-50 bg-[#040806]/98 backdrop-blur-2xl flex flex-col justify-center items-center p-4 md:p-8"
          >
            {/* Close Lightbox */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 z-10 p-3 bg-white/5 border border-white/10 hover:border-gold hover:text-gold text-white/90 rounded-full transition-colors cursor-pointer"
              aria-label="Close lightbox"
            >
              <X size={18} />
            </button>

            {/* Slider container with stopPropagation constraints */}
            <div 
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-6 md:gap-10 p-4 md:p-8 bg-charcoal/60 border border-gold/20 rounded-md shadow-2xl glass-card text-left"
            >
              <CornerOrnament position="top-left" />
              <CornerOrnament position="bottom-right" />

              {/* Large Image Showcase panel */}
              <div className="w-full md:w-3/5 h-[280px] md:h-[450px] relative overflow-hidden rounded border border-white/5 flex items-center justify-center bg-black/40">
                <img
                  src={activeLightboxItem.image}
                  alt={activeLightboxItem.title}
                  className="max-w-full max-h-full object-contain"
                  referrerPolicy="no-referrer"
                />

                {/* Direct action controller buttons inside picture frame */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 p-2.5 bg-black/60 border border-white/10 text-white rounded-full hover:border-gold hover:text-gold cursor-pointer transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={16} />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 p-2.5 bg-black/60 border border-white/10 text-white rounded-full hover:border-gold hover:text-gold cursor-pointer transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight size={16} />
                </button>
              </div>

              {/* Narrative Content explaining the light box visual context */}
              <div className="w-full md:w-2/5 flex flex-col justify-between py-2 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-1.5">
                    <Sparkles size={11} className="text-gold animate-pulse" />
                    <span className="font-mono text-[9px] tracking-widest text-gold uppercase font-bold">
                      {activeLightboxItem.category.toUpperCase()} CHRONOLOGY
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl md:text-3xl text-white font-medium leading-tight">
                    {activeLightboxItem.title}
                  </h3>

                  <LotusDivider className="self-start opacity-50" />

                  <p className="font-sans text-white/70 text-xs md:text-sm leading-relaxed font-light">
                    {activeLightboxItem.description}
                  </p>
                </div>

                {/* Position tracker */}
                <div className="pt-6 border-t border-white/5 flex justify-between items-center text-[10px] font-mono tracking-widest text-white/40">
                  <span>EPICURE GALLERY JOURNAL</span>
                  <span>IMAGE {lightboxIndex !== null ? lightboxIndex + 1 : 0} OF {filteredItems.length}</span>
                </div>
              </div>

            </div>

            {/* Quick-hint down-arrow or escape helper overlay */}
            <span className="font-mono text-[8px] tracking-[0.25em] text-white/30 block mt-6 uppercase select-none">
              TAP OUTSIDE TO RETURN TO CANVAS • CLICK OVERLAY ARROWS TO DISCOVER
            </span>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}
