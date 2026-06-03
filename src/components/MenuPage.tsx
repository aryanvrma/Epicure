import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Flame, Leaf, Sparkles, Award, Wine, RefreshCw } from 'lucide-react';
import { MenuItem } from '../types';
import { CornerOrnament, LotusDivider } from './VaranasiMotif';

const MENU_DATA: MenuItem[] = [
  // STARTERS
  {
    id: 'start-1',
    name: 'Sacred Lotus Stem Carpaccio',
    description: 'Crisply micro-shaved sacred lotus stems marinated in cold-pressed mustard oil, high-slope wild honey, and sweet coriander dust.',
    price: 1250,
    category: 'starters',
    tags: ['GLUTEN-FREE', 'VEGAN'],
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600',
    isVegetarian: true,
  },
  {
    id: 'start-2',
    name: 'Charred Cardamom Almond Chaman',
    description: 'Fragrant cottage-cheese cubes layered with dry roasted sweet almond paste, slow-charred over green mango wood embers.',
    price: 1450,
    category: 'starters',
    tags: ['VEGETARIAN', 'CONTAINS NUTS'],
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=600',
    isVegetarian: true,
  },
  {
    id: 'start-3',
    name: 'Kashmiri Saffron Almond Consommé',
    description: 'Thin clarified broth distilled from single-village Kashmiri saffron threads, sweet almond meal, topped with wild silver-mesh gilding.',
    price: 1155,
    category: 'starters',
    tags: ['GLUTEN-FREE', 'PRESTIGE'],
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&q=80&w=600',
    isVegetarian: true,
  },

  // MAINS
  {
    id: 'main-1',
    name: 'Banarasi Silk Truffle Dosa',
    description: 'Lace thin organic rice-lentil crepe rolled with Périgord winter black truffle shavings, gold butter potato mash, served with clean riverfront mint foam.',
    price: 1950,
    category: 'mains',
    tags: ['VEGETARIAN', 'SIGNATURE'],
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=600',
    isVegetarian: true,
  },
  {
    id: 'main-2',
    name: 'Kashi Gold Paneer Terrine',
    description: 'Layered organic house-churned paneer, wrapped in delicate 24-karat gold foil, baked under hot clay coals, topped with fresh pistachio crust.',
    price: 2150,
    category: 'mains',
    tags: ['VEGETARIAN', 'ROYAL SELECTION'],
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=600',
    isVegetarian: true,
  },
  {
    id: 'main-3',
    name: 'Smoked Ganges Reef Cod',
    description: 'Catch of Ganges reef, smoked slowly under hot silver ash and dried mango wood, served on a thick bed of wild ginger and yellow mustard emulsion.',
    price: 2605,
    category: 'mains',
    tags: ['NON-VEG', 'SPICY'],
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=600',
    isVegetarian: false,
    isSpicy: true,
  },
  {
    id: 'main-4',
    name: 'Mughlai Almond Lamb Shank',
    description: 'Double-cooked organic spring lamb shank, slow-simmered for 24 hours in a luxurious sauce of stone-beaten almonds, cardamom pods, and royal sandalwood powder.',
    price: 2950,
    category: 'mains',
    tags: ['NON-VEG', 'CONTAINS NUTS'],
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600',
    isVegetarian: false,
  },

  // DESSERTS
  {
    id: 'dess-1',
    name: 'Varanasi Saffron Rabri Dome',
    description: 'Slow-reduced caramelized local milk pudding solidified into a hand-blown sugar crystal sphere, shattered tableside, infused with Kashmiri saffron threads.',
    price: 1100,
    category: 'desserts',
    tags: ['VEGETARIAN', 'MUST TRY'],
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&q=80&w=600',
    isVegetarian: true,
  },
  {
    id: 'dess-2',
    name: 'Crystallized Rose & Gold Gulab Dome',
    description: 'Luxe sweet milk cheese dumplings centered with organic wild rose compote, wrapped in pure silver leaf, suspended inside a transparent saffron fluid.',
    price: 900,
    category: 'desserts',
    tags: ['VEGETARIAN'],
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&q=80&w=600',
    isVegetarian: true,
  },

  // COCKTAILS
  {
    id: 'cock-1',
    name: 'Sacred Sandalwood Sour',
    description: 'Single-malt Scotch whiskey sour redistilled with real organic white sandalwood scrapings, local cold honey, fresh egg whites, and smoked with sweet applewood flakes.',
    price: 1200,
    category: 'cocktails',
    tags: ['ALCOHOLIC', 'HOUSE SMOKED'],
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=600',
    isVegetarian: true,
  },
  {
    id: 'cock-2',
    name: 'Ganga Dusk Hibiscus Elixir',
    description: 'Botanical dry gin shaken with fresh concentrated wild hibiscus herbal steep, rose blossom hydrosol, and layered with 24k sparkling golden star dust.',
    price: 1100,
    category: 'cocktails',
    tags: ['ALCOHOLIC', 'VISUAL MARVEL'],
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=600',
    isVegetarian: true,
  },

  // SPECIALS
  {
    id: 'spec-1',
    name: 'The Sacred Ganga Aarti Platter',
    description: 'Our ultimate multi-course signature dynamic flight: contains gold-leaf cardamom paneer terrine, smoked reef cod bites, saffron consommé cup, and a mini rabri dome.',
    price: 4800,
    category: 'specials',
    tags: ['PRESTIGE ONLY', 'MULTI-COURSE'],
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=600',
    isVegetarian: false,
  },
  {
    id: 'spec-2',
    name: '48-Hour Clay-Coaled Black Dal',
    description: 'Organic whole black lentils simmered for exactly 48 hours inside traditional clay pots fueled under slow-burning sweet mango-wood coals, layered with hand-churned white butter.',
    price: 1800,
    category: 'specials',
    tags: ['VEGETARIAN', 'SACRED LINEAGE'],
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=600',
    isVegetarian: true,
  }
];

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState<'starters' | 'mains' | 'desserts' | 'cocktails' | 'specials'>('starters');
  const [searchQuery, setSearchQuery] = useState('');
  const [vegetarianOnly, setVegetarianOnly] = useState(false);

  const tabs: { id: typeof activeTab; label: string }[] = [
    { id: 'starters', label: 'STARTERS // प्रारम्भिक' },
    { id: 'mains', label: 'MAIN COURSES // प्रधान' },
    { id: 'desserts', label: 'DESSERTS // मिष्ठान' },
    { id: 'cocktails', label: 'SIGNATURE COCKTAILS // पेय' },
    { id: 'specials', label: 'CHEF’S SPECIALS // उपहार' }
  ];

  const filteredItems = MENU_DATA.filter((item) => {
    const matchesCategory = item.category === activeTab;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesVeg = vegetarianOnly ? item.isVegetarian === true : true;
    return matchesCategory && matchesSearch && matchesVeg;
  });

  const clearFilters = () => {
    setSearchQuery('');
    setVegetarianOnly(false);
  };

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
          <Award size={11} className="animate-pulse" /> THE COMPLETE GASTRO-CHRONICLE //
        </span>
        <h1 className="font-serif text-4xl md:text-6xl text-white font-medium tracking-wide">
          Curated <span className="text-gold italic font-light text-glow">Atelier Menu</span>
        </h1>
        <LotusDivider />
        <p className="font-sans text-xs md:text-sm text-white/50 leading-relaxed font-light">
          An elite selection of dishes built in ancestral rituals, using sustainable crops sourced exclusively from regional families.
        </p>
      </div>

      {/* Inputs Filter Bar: Search, Vegetable Filter checkbox */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-charcoal/45 p-4 rounded border border-white/5 backdrop-blur-md mb-12 relative z-10 w-full">
        
        {/* Search text filter input */}
        <div className="relative w-full md:max-w-md">
          <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gold/60" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search our culinary library..."
            className="w-full pl-10 pr-4 py-2.5 bg-[#0c120f] border border-gold/20 hover:border-gold/45 focus:border-gold rounded-sm font-sans text-white text-xs tracking-wide focus:outline-none transition-colors"
          />
        </div>

        {/* Veg-only checkbox filter */}
        <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
          <button
            onClick={() => setVegetarianOnly(!vegetarianOnly)}
            className={`flex items-center gap-2 px-4 py-2 rounded-sm border cursor-pointer select-none transition-all duration-300 ${
              vegetarianOnly 
                ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-400 font-medium' 
                : 'bg-transparent border-white/10 text-white/60 hover:text-white'
            }`}
          >
            <Leaf size={11} />
            <span className="font-mono text-[9px] tracking-[0.15em] uppercase">Vegetarian Purely Only</span>
          </button>

          {(searchQuery || vegetarianOnly) && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-1.5 text-[9px] font-mono tracking-widest text-gold hover:text-white hover:underline uppercase cursor-pointer"
            >
              <RefreshCw size={10} className="animate-spin-slow" /> Clear Filter Options
            </button>
          )}
        </div>
      </div>

      {/* Luxe Horizontal Tabs List */}
      <div className="border-b border-gold/15 mb-16 overflow-x-auto scrollbar-none flex justify-center w-full">
        <div className="flex gap-2 md:gap-4 pb-0.5 justify-start lg:justify-center min-w-max">
          {tabs.map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  clearFilters(); // Reset search/filters when jumping categories to provide neat flow
                }}
                className={`relative px-4 py-4 text-[10px] md:text-[11px] font-mono tracking-[0.2em] font-medium transition-all duration-500 cursor-pointer focus:outline-none ${
                  isSelected ? 'text-gold font-bold' : 'text-white/50 hover:text-white'
                }`}
              >
                <span>{tab.label}</span>
                {isSelected && (
                  <motion.span
                    layoutId="menu-active-tab-underline"
                    className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Filtered Menu items */}
      <AnimatePresence mode="wait">
        <motion.div
           key={`${activeTab}-${vegetarianOnly}-${searchQuery}`}
           initial={{ opacity: 0, y: 15 }}
           animate={{ opacity: 1, y: 0 }}
           exit={{ opacity: 0, y: -15 }}
           transition={{ duration: 0.5 }}
           className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative"
        >
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative p-6 bg-charcoal/40 border border-white/5 hover:border-gold/30 rounded-md backdrop-blur-md flex flex-col sm:flex-row gap-6 shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                {/* Visual image element side of menu items */}
                <div className="relative w-full sm:w-[150px] aspect-square rounded overflow-hidden flex-shrink-0 bg-black/40 border border-white/5 group-hover:border-gold/20 transition-all duration-500">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[1.5s] ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent pointer-events-none" />
                </div>

                {/* Content description side */}
                <div className="flex-1 flex flex-col justify-between text-left space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="font-serif text-lg md:text-xl text-white font-medium group-hover:text-gold transition-colors duration-300">
                        {item.name}
                      </h3>
                      <span className="font-mono text-xs text-gold font-semibold tracking-wider whitespace-nowrap text-glow">
                        ₹{item.price.toLocaleString('en-IN')}
                      </span>
                    </div>

                    <p className="font-sans text-white/60 text-xs md:text-[13px] leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>

                  {/* Badges/Tags indicating details */}
                  <div className="pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 font-mono text-[9px] tracking-widest text-white/40">
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 bg-white/5 border border-white/5 rounded text-[8px] text-white/50">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <span className="text-[9px] tracking-[0.1em] text-white/30 flex items-center gap-1">
                      {item.isVegetarian ? (
                        <>
                          <Leaf size={10} className="text-emerald-400" />
                          <span className="text-emerald-400/90 font-semibold font-mono">VEG</span>
                        </>
                      ) : (
                        <>
                          <Flame size={10} className="text-red-400" />
                          <span className="text-red-400/90 font-semibold font-mono">NON-VEG</span>
                        </>
                      )}
                      {item.isSpicy && (
                        <span className="px-1.5 py-0.5 bg-red-950/20 rounded border border-red-500/20 text-red-400 font-bold ml-1 flex items-center">
                          SPICY
                        </span>
                      )}
                    </span>
                  </div>

                </div>
              </div>
            ))
          ) : (
            /* Empty Search outcome message box */
            <div className="col-span-2 text-center py-20 bg-charcoal/20 border border-dashed border-gold/15 rounded-md p-10 space-y-4">
              <span className="font-serif italic text-white/40 text-lg block">
                “No dishes matching your sacred criteria were found in our current seasonal atlas.”
              </span>
              <button
                onClick={clearFilters}
                className="px-6 py-2.5 border border-gold text-gold font-mono text-[10px] tracking-widest rounded-sm bg-transparent hover:bg-gold/10 transition-all cursor-pointer focus:outline-none"
              >
                RESTORE COMPLETE MENU
              </button>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="mt-20 text-center space-y-2 p-6 rounded border border-gold/15 bg-forest/20 max-w-xl mx-auto">
        <span className="font-mono text-[9px] tracking-[0.25em] text-gold uppercase block">SOMMELIER’S NOTICE</span>
        <p className="font-serif italic text-xs text-white/70 leading-relaxed font-light">
          "Pairing choices can be customized down to the level of herbal incense. Speak with your assigned floor sommelier upon seat allocation."
        </p>
      </div>

    </motion.div>
  );
}
