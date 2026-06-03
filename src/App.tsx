import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Compass, MessageSquare, Award, ArrowUp, Calendar } from 'lucide-react';
import { ActivePage } from './types';
import CinemaBackground from './components/CinemaBackground';
import Navbar from './Navbar';
import HeroSection from './components/HeroSection';
import SignatureDining from './components/SignatureDining';
import CulinaryShowcase from './components/CulinaryShowcase';
import VaranasiHeritage from './components/VaranasiHeritage';
import ChefPhilosophy from './components/ChefPhilosophy';
import Testimonials from './components/Testimonials';
import AboutPage from './components/AboutPage';
import MenuPage from './components/MenuPage';
import GalleryPage from './components/GalleryPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import { LotusDivider, CornerOrnament } from './components/VaranasiMotif';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen text-[#E2E8F0] overflow-x-hidden selection:bg-gold selection:text-black">
      
      {/* Global Constant Ambient Cinema Layer */}
      <CinemaBackground />

      {/* Floating Header Navigation */}
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      {/* Primary Transition Router Panel */}
      <main className="relative z-10 w-full">
        <AnimatePresence mode="wait">
          {activePage === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* IMMERSIVE HOME SECTIONS */}
              <HeroSection onNavigate={(page) => setActivePage(page)} />
              
              <SignatureDining />
              
              <CulinaryShowcase />
              
              <VaranasiHeritage />
              
              <ChefPhilosophy />
              
              <Testimonials />

              {/* SECTION 6: RESERVATION CTA BANNER
                  A dramatic fullscreen cinematic call-to-action section with moving background textures, 
                  gold glow accents, elegant typography animation, immersive button interactions */}
              <section className="relative min-h-[70vh] flex flex-col justify-center items-center overflow-hidden py-24 px-4 md:px-8 border-b border-gold/15 bg-[#030605]">
                {/* Background lighting flare */}
                <div className="absolute inset-0 bg-radial-gradient(circle at center, rgba(203,162,51,0.1) 0%, transparent 80%) pointer-events-none" />
                <div className="absolute bottom-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/15 to-transparent pointer-events-none" />
                
                <div className="max-w-4xl mx-auto text-center space-y-8 z-10 relative">
                  
                  <div className="flex justify-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/10 border border-gold/20 rounded-full">
                      <Sparkles size={11} className="text-gold animate-pulse" />
                      <span className="font-mono text-[9px] tracking-[0.3em] text-white/80 uppercase">EXCLUSIVE RESERVATION GATEWAY</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h2 className="font-serif text-4xl md:text-6xl text-white font-medium tracking-wide leading-tight">
                      Experience <br />
                      <span className="text-gold italic font-light text-glow">The Transcendence’s Dinner</span>
                    </h2>
                    
                    <LotusDivider />

                    <p className="font-sans text-xs md:text-sm text-white/60 max-w-lg mx-auto font-light leading-relaxed">
                      Saffron mist welcomes, silver alignments, and absolute river-facing candlelit seats. Reserve your royal placement key and let Chef Num Raj Bista prepare your sensory flight.
                    </p>
                  </div>

                  {/* Cinematic RSVP action trigger */}
                  <div className="pt-4 flex justify-center">
                    <button
                      onClick={() => {
                        setActivePage('contact');
                        window.scrollTo({ top: 300, behavior: 'smooth' }); // Slide down straight to booking panel
                      }}
                      className="relative px-10 py-5 bg-gradient-to-r from-gold to-gold-dark text-black font-mono text-[11px] tracking-[0.25em] font-semibold rounded-sm hover:-translate-y-1 hover:shadow-[0_15px_30px_-5px_#CBA23370] cursor-pointer active:translate-y-px transition-all duration-300 flex items-center gap-2 group focus:outline-none"
                    >
                      SECURE YOUR SEATING KEYS
                      <Calendar size={13} className="group-hover:rotate-45 transition-transform duration-500" />
                    </button>
                  </div>

                  <div className="flex justify-center gap-10 pt-6 text-[10px] font-mono tracking-widest text-white/40 uppercase">
                    <span>★ DINNER SITTING SENSORY SYNC</span>
                    <span>★ VERANDA ACCESS STANDARD</span>
                  </div>

                </div>
              </section>
            </motion.div>
          )}

          {activePage === 'about' && (
            <AboutPage key="about" />
          )}

          {activePage === 'menu' && (
            <MenuPage key="menu" />
          )}

          {activePage === 'gallery' && (
            <GalleryPage key="gallery" />
          )}

          {activePage === 'contact' && (
            <ContactPage key="contact" />
          )}
        </AnimatePresence>
      </main>

      {/* Universal Footer Component */}
      <Footer setActivePage={setActivePage} />

      {/* Floating back-to-top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-30 p-3 bg-charcoal/80 backdrop-blur-xl border border-gold/30 hover:border-gold hover:text-gold text-white/90 rounded-full transition-all cursor-pointer shadow-[0_10px_30px_-5px_rgba(0,0,0,0.8)] hover:scale-105"
            aria-label="Scroll back to top"
          >
            <ArrowUp size={16} />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
