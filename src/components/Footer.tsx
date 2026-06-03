import React from 'react';
import { Compass, Landmark, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { LotusDivider, TempleBorder } from './VaranasiMotif';
import { ActivePage } from '../types';

interface FooterProps {
  setActivePage: (page: ActivePage) => void;
}

export default function Footer({ setActivePage }: FooterProps) {
  const handleNavClick = (page: ActivePage) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030605] border-t border-gold/15 pt-20 pb-12 relative overflow-hidden text-center">
      
      {/* Background radial soft light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12 relative z-10">
        
        {/* Varanasi temple border aesthetic banner across top of footer */}
        <div className="w-full max-w-4xl mx-auto opacity-35 scale-[0.98]">
          <TempleBorder />
        </div>

        {/* Brand Logomark */}
        <div className="flex flex-col items-center gap-1.5 pt-4">
          <span className="font-serif text-3xl tracking-[0.25em] text-gold font-light text-glow">EPICURE</span>
          <span className="font-mono text-[9px] tracking-[0.4em] text-white/45">VARANASI // SENSORY GANGA SANCTUARY</span>
        </div>

        <LotusDivider />

        {/* Global sitemap indices */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-5xl mx-auto pt-4 border-t border-white/5">
          
          <div className="space-y-4">
            <span className="font-mono text-[10px] tracking-widest text-gold block uppercase">// ADDRESS CODES</span>
            <p className="font-serif italic text-sm text-white/70 leading-relaxed font-light">
              “3rd Floor, Above Zudio, Bharlai, Shivpur, Varanasi - 221003, Uttar Pradesh, India.”
            </p>
          </div>

          <div className="space-y-4 md:text-center flex flex-col md:items-center">
            <span className="font-mono text-[10px] tracking-widest text-gold block uppercase">// QUIC TRANSITIONS</span>
            
            <div className="flex flex-col gap-2.5 font-mono text-[11px] text-white/50 tracking-wider">
              <button onClick={() => handleNavClick('home')} className="hover:text-gold cursor-pointer transition-colors focus:outline-none">THE EXPERIENCE</button>
              <button onClick={() => handleNavClick('about')} className="hover:text-gold cursor-pointer transition-colors focus:outline-none">OUR HERITAGE</button>
              <button onClick={() => handleNavClick('menu')} className="hover:text-gold cursor-pointer transition-colors focus:outline-none">CURATED MENU</button>
              <button onClick={() => handleNavClick('gallery')} className="hover:text-gold cursor-pointer transition-colors focus:outline-none">VISUAL CANVAS</button>
              <button onClick={() => handleNavClick('contact')} className="hover:text-gold cursor-pointer transition-colors focus:outline-none">VIP RESERVATIONS</button>
            </div>
          </div>

          <div className="space-y-4 md:text-right">
            <span className="font-mono text-[10px] tracking-widest text-gold block uppercase md:block">// PROTECTION CREDITS</span>
            
            <p className="font-sans text-xs text-white/50 leading-relaxed font-light">
               All culinary preparations are carbon-neutral, free from heavy industrial processing, and ethically hand-sourced with regional growers.
            </p>
            
            <span className="font-mono text-[9px] text-gold/45 block mt-2">
              ESTD. VARANASI 2024 • ROYAL PATRONAGE
            </span>
          </div>

        </div>

        {/* Decorative Indian Sanskrit/Vedic blessing in subtle glow font */}
        <div className="pt-8 border-t border-white/5 flex flex-col items-center gap-2">
          <span className="font-serif italic text-sm text-gold/65 tracking-[0.2em] text-glow">
            “अतिथिदेवो भव // Guests Are Manifestations of The Divine”
          </span>
          
          {/* Subtle copyright logs */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-white/35 font-mono text-[9px] tracking-widest">
            <span>© {new Date().getFullYear()} EPICURE VARANASI. ALL CODES RESTRICTED SECURELY.</span>
            <div className="flex items-center gap-1 text-gold/45">
              <Sparkles size={10} className="animate-pulse" /> DESIGNED FOR CONNOISSEURS WWH
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
