import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Landmark, Compass, CalendarRange, Sparkles } from 'lucide-react';
import { ActivePage } from './types';

interface NavbarProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
}

export default function Navbar({ activePage, setActivePage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: ActivePage; label: string; shortcut?: string }[] = [
    { id: 'home', label: 'THE EXPERIENCE' },
    { id: 'about', label: 'OUR HERITAGE' },
    { id: 'menu', label: 'CURATED MENU' },
    { id: 'gallery', label: 'THE GALLERY' },
    { id: 'contact', label: 'RESERVATIONS' },
  ];

  const handleNavClick = (page: ActivePage) => {
    setActivePage(page);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        id="navbar"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-charcoal/80 backdrop-blur-xl border-b border-gold/15'
            : 'py-6 bg-transparent border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          
          {/* Logo / Brand */}
          <button
            onClick={() => handleNavClick('home')}
            className="group flex flex-col items-start gap-0.5 cursor-pointer text-left focus:outline-none"
          >
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl tracking-[0.2em] text-gold font-semibold transition-all duration-500 group-hover:text-gold-light group-hover:tracking-[0.25em] text-glow">
                EPICURE
              </span>
            </div>
            <span className="font-mono text-[9px] tracking-[0.4em] text-white/55 font-light">
              VARANASI
            </span>
          </button>

          {/* Nav Links - Desktop */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="group relative py-2 text-[11px] font-mono tracking-[0.2em] text-white/70 hover:text-gold cursor-pointer transition-colors duration-300 focus:outline-none"
              >
                <span className={`${activePage === item.id ? 'text-gold' : ''}`}>
                  {item.label}
                </span>
                
                {/* Decorative golden strike indicator */}
                <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent origin-left transition-transform duration-500 ${
                  activePage === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
                
                {/* Active dot */}
                {activePage === item.id && (
                  <motion.span
                    layoutId="navbar-active-dot"
                    className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold shadow-[0_0_6px_#CBA233]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Quick Booking CTA & Menu Toggles */}
          <div className="flex items-center gap-4">
            
            <button
              onClick={() => handleNavClick('contact')}
              className="hidden md:flex items-center gap-2 relative px-5 py-2 overflow-hidden rounded-sm border border-gold/40 group bg-forest/40 backdrop-blur-md cursor-pointer transition-colors focus:outline-none"
            >
              {/* Shimmer overlay on hover */}
              <div className="absolute inset-0 w-full h-full shimmer-bg opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <CalendarRange size={13} className="text-gold group-hover:scale-110 transition-transform duration-300" />
              <span className="font-mono text-[10px] tracking-[0.2em] text-white font-medium group-hover:text-gold transition-colors duration-300">
                RESERVE A TABLE
              </span>
            </button>

            {/* Mobile Nav Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white/80 hover:text-gold transition-colors block lg:hidden cursor-pointer focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-charcoal/95 backdrop-blur-2xl flex flex-col justify-center items-center pointer-events-auto lg:hidden"
          >
            {/* Fine Varanasi Background motif in mobile menu */}
            <div className="absolute top-[10%] opacity-[0.03] scale-[1.5] flex justify-center w-full pointer-events-none">
              <Compass size={240} className="text-gold animate-spin-slow" style={{ animationDuration: '60s' }} />
            </div>

            {/* Close trigger boundary */}
            <div className="absolute top-24 flex flex-col items-center gap-1">
              <span className="font-serif text-3xl tracking-[0.25em] text-gold font-light">EPICURE</span>
              <span className="font-mono text-[9px] tracking-[0.4em] text-white/40">VARANASI</span>
            </div>

            {/* Navigation options */}
            <div className="flex flex-col items-center gap-8 z-10 w-full px-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  onClick={() => handleNavClick(item.id)}
                  className="group flex flex-col items-center gap-1 focus:outline-none cursor-pointer"
                >
                  <span className={`font-serif text-2xl tracking-widest transition-colors ${
                    activePage === item.id ? 'text-gold font-medium' : 'text-white/60 hover:text-white'
                  }`}>
                    {item.label}
                  </span>
                  <span className="font-mono text-[9px] tracking-[0.3em] opacity-40 group-hover:opacity-85 text-gold-light transition-opacity">
                    // VIEW {item.id.toUpperCase()}
                  </span>
                </motion.button>
              ))}

              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                onClick={() => handleNavClick('contact')}
                className="mt-6 flex items-center justify-center w-full max-w-[280px] py-3.5 px-6 border border-gold rounded-sm bg-forest text-gold font-mono text-[11px] tracking-[0.25em] hover:bg-gold hover:text-black transition-all shadow-[0_0_15px_rgba(203,162,51,0.2)] focus:outline-none"
              >
                RESERVE YOUR EXPERIENCE
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
