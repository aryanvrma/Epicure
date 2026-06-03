import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Clock, HelpCircle, Compass, Instagram, Facebook, MessageSquare, Sparkles } from 'lucide-react';
import { CornerOrnament, LotusDivider } from './VaranasiMotif';
import ReservationSection from './ReservationSection';

interface MapPoint {
  id: string;
  name: string;
  description: string;
  x: number; // percent overlay
  y: number; // percent overlay
  isEpicure?: boolean;
  googleMapsUrl?: string;
}

const MAP_POINTS: MapPoint[] = [
  { 
    id: 'pt-1', 
    name: 'Epicure Sanctuary', 
    description: 'Our luxurious fine-dining sanctuary located on the 3rd floor above Zudio in Shivpur, Varanasi.', 
    x: 35, 
    y: 18, 
    isEpicure: true,
    googleMapsUrl: 'https://maps.app.goo.gl/ey5nVFiq3KoeEtYD9'
  },
  { id: 'pt-2', name: 'Dashashwamedh Ghat', description: 'The grand ritual site where the seven priests conduct Ganga Aarti.', x: 55, y: 55 },
  { id: 'pt-3', name: 'Kashi Vishwanath Golden Temple', description: 'The historical spiritual core spire dedicated to Lord Shiva.', x: 42, y: 25 },
  { id: 'pt-4', name: 'Assi River Confluence', description: 'Ancient spiritual bathing banks at the southern extreme of Varanasi.', x: 25, y: 80 }
];

export default function ContactPage() {
  const [selectedPoint, setSelectedPoint] = useState<MapPoint | null>(MAP_POINTS[0]);

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
        <span className="font-mono text-[10px] tracking-[0.3em] text-gold uppercase flex items-center justify-center gap-1.5 animate-pulse">
          <Compass size={11} /> ATELIER PLACEMENTS & DIRECTION //
        </span>
        <h1 className="font-serif text-4xl md:text-6xl text-white font-medium tracking-wide">
          Connect with <br />
          <span className="text-gold italic font-light text-glow">The Sanctuary</span>
        </h1>
        <LotusDivider />
        <p className="font-sans text-xs md:text-sm text-white/50 leading-relaxed font-light">
          Located prominently along the historic stone banks of the Ganges. Find geographic placement details and reservation schedules below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
        
        {/* Left Hand Column: Direct contact info files */}
        <div className="lg:col-span-4 flex flex-col gap-6 text-left">
          
          {/* Coordinates Block */}
          <div className="glass-card rounded p-6 border-gold/15 relative">
            <CornerOrnament position="top-left" />
            <span className="font-mono text-[9px] tracking-widest text-gold block mb-2">// GEOGRAPHIC VERIFICATION</span>
            <span className="font-serif text-lg text-white block font-medium">Epicure Varanasi</span>
            <p className="font-sans text-xs text-white/60 leading-relaxed mt-2 font-light">
              3rd Floor, Above Zudio, Bharlai, <br />
              Shivpur, Varanasi - 221003, <br />
              Uttar Pradesh, India.
            </p>
            
            <div className="border-t border-white/5 pt-4 mt-4 flex items-center justify-between text-[10px] font-mono tracking-widest text-white/40">
              <span>LATITUDE: 25.3562° N</span>
              <span>LONGITUDE: 82.9734° E</span>
            </div>
          </div>

          {/* Contact Numbers block */}
          <div className="glass-card rounded p-6 border-gold/15 relative">
            <CornerOrnament position="top-right" />
            <span className="font-mono text-[9px] tracking-widest text-gold block mb-2">// VIP CHANNELS</span>
            
            <div className="space-y-4 pt-1">
              <div className="flex items-center gap-3">
                <div className="p-2 border border-gold/20 rounded bg-gold/5 text-gold">
                  <Phone size={13} />
                </div>
                <div>
                  <span className="font-mono text-[8px] text-white/45 uppercase block">Noble Telephones</span>
                  <span className="font-serif text-sm text-white tracking-wide font-medium">+91 96517 79773</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 border border-gold/20 rounded bg-gold/5 text-gold">
                  <Mail size={13} />
                </div>
                <div>
                  <span className="font-mono text-[8px] text-white/45 uppercase block">Electronic Mail Addresses</span>
                  <span className="font-sans text-xs text-white tracking-wide font-light">epicureanhospitalitysolutions@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Opening and Sittings schedule slots */}
          <div className="glass-card rounded p-6 border-gold/15 relative">
            <CornerOrnament position="bottom-left" />
            <span className="font-mono text-[9px] tracking-widest text-gold block mb-2">// SITTING SCHEDULES</span>
            
            <div className="space-y-3 pt-2 text-xs font-sans text-white/70 font-light">
              <div className="flex justify-between pb-1 border-b border-white/5">
                <span>Lunch Session sittings</span>
                <span className="font-mono text-gold">12:00 PM – 3:30 PM</span>
              </div>
              <div className="flex justify-between pb-1 border-b border-white/5">
                <span>Sunset Elixir Hour</span>
                <span className="font-mono text-gold">5:00 PM – 7:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Grand Candlelit Dinners</span>
                <span className="font-mono text-gold">7:30 PM – 11:30 PM</span>
              </div>
            </div>
            
            <span className="font-serif italic text-[10px] text-white/40 block mt-4 leading-relaxed">
               - Saffron Welcome ritual commences strictly at the turn of every evening.
            </span>
          </div>

          {/* Social media connections logs */}
          <div className="flex gap-4 items-center pl-2 pt-2 text-white/55">
            <span className="font-mono text-[9px] tracking-widest">CONNECT CONCIERGE:</span>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/epicurevns/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors" aria-label="Instagram handle link"><Instagram size={14} /></a>
              <a href="https://www.facebook.com/epicurevns/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors" aria-label="Facebook handle link"><Facebook size={14} /></a>
            </div>
          </div>

        </div>

        {/* Right Hand Column: Fully Interactive Handcrafted map coordinates drawing */}
        <div className="lg:col-span-8 flex flex-col gap-6 relative">
          
          <div className="flex items-center justify-between text-xs font-mono text-white/40 tracking-wider">
            <span>INTERACTIVE GEOGRAPHIC LANDMARKS RADAR</span>
            <span className="text-gold flex items-center gap-1">
              <Sparkles size={11} className="animate-spin-slow" /> HOVER MAP NODES FOR INSTRUCTIONS
            </span>
          </div>

          {/* Handcarved vector map layout */}
          <div className="relative w-full aspect-[16/10] rounded border border-gold/20 overflow-hidden bg-gradient-to-tr from-charcoal via-[#0a1811] to-black shadow-[inset_0_0_40px_rgba(0,0,0,0.8),0_20px_40px_rgba(0,0,0,0.65)]">
            
            {/* Soft Ganges River flow graphics vector path */}
            <svg className="absolute inset-0 w-full h-full opacity-25" viewBox="0 0 100 100" preserveAspectRatio="none">
              {/* Ganges flows diagonally across from bottom-left to top-right */}
              <motion.path
                d="M -10 110 C 20 80, 30 70, 50 50 C 70 30, 80 20, 110 -10 L 110 110 Z"
                className="fill-[#1A3F2C] opacity-40 stroke-[#CBA233]/20 stroke-[0.4]"
                animate={{
                  d: [
                    "M -10 110 C 18 82, 28 68, 50 50 C 72 32, 82 18, 110 -10 L 110 110 Z",
                    "M -10 110 C 22 78, 32 72, 50 50 C 68 28, 78 22, 110 -10 L 110 110 Z",
                    "M -10 110 C 18 82, 28 68, 50 50 C 72 32, 82 18, 110 -10 L 110 110 Z"
                  ]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
              {/* River current ripple details */}
              <line x1="5" y1="95" x2="105" y2="-5" stroke="#CBA233" strokeWidth="0.1" strokeDasharray="3 3" opacity="0.3" />
              <line x1="15" y1="99" x2="115" y2="-1" stroke="#CBA233" strokeWidth="0.1" strokeDasharray="2 2" opacity="0.1" />
            </svg>

            {/* Ghats steps vector grids drawn along the river bank */}
            <div className="absolute top-[40%] left-[45%] w-[100%] h-[120%] border-t-2 border-l-2 border-gold/10 -rotate-[30deg] pointer-events-none opacity-40">
              <div className="w-full h-2 border-b border-gold/5" />
              <div className="w-full h-2 border-b border-gold/5" />
              <div className="w-full h-2 border-b border-gold/5" />
            </div>

            {/* Varanasi North-South river compass stamp */}
            <div className="absolute bottom-6 right-6 pointer-events-none opacity-20">
              <Compass size={80} className="text-gold animate-spin-slow" style={{ animationDuration: '40s' }} />
            </div>

            <div className="absolute left-[8%] bottom-[12%] pointer-events-none text-left select-none bg-charcoal/45 p-2 rounded border border-white/5 text-[8px] font-mono tracking-widest text-white/40">
              <span>RIVER: GANGES // पवित्र भागीरथी</span>
            </div>

            {/* Glowing Map Point nodes */}
            {MAP_POINTS.map((point) => {
              const isActive = selectedPoint?.id === point.id;
              return (
                <div
                  key={point.id}
                  style={{ left: `${point.x}%`, top: `${point.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group z-20"
                  onMouseEnter={() => setSelectedPoint(point)}
                  onClick={() => setSelectedPoint(point)}
                >
                  
                  {/* Glowing halo concentric ripples */}
                  <div className={`absolute -inset-4 rounded-full border pointer-events-none transition-all duration-500 scale-[2] opacity-0 ${
                    point.isEpicure 
                      ? 'border-gold/30 group-hover:opacity-100 group-hover:scale-100 shadow-[0_0_10px_#CBA233]' 
                      : 'border-white/10 group-hover:opacity-100 group-hover:scale-100'
                  }`} />

                  {/* Pulsing ring */}
                  <div className={`absolute -inset-1.5 rounded-full border animate-ping opacity-35 ${
                    point.isEpicure ? 'border-gold bg-gold/10' : 'border-white bg-white/5'
                  }`} />

                  {/* Core dot marker */}
                  <button
                    className={`w-3.5 h-3.5 rounded-full border-2 cursor-pointer transition-all focus:outline-none ${
                      point.isEpicure
                        ? 'bg-gold border-white shadow-[0_0_10px_rgba(203,162,51,0.8)] scale-110'
                        : 'bg-[#000] border-gold/75 hover:bg-gold/45'
                    }`}
                    aria-label={`Select landmark ${point.name}`}
                  />

                  {/* Tiny tag title attached to nodule */}
                  <div className="absolute top-1/2 left-5 -translate-y-1/2 ml-1 px-2.5 py-1.5 rounded bg-charcoal/90 border border-gold/25 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-left z-30">
                    <span className={`font-serif text-[11px] block ${point.isEpicure ? 'text-gold font-bold' : 'text-white'}`}>
                      {point.name}
                    </span>
                    <span className="font-mono text-[6px] tracking-wider text-white/50 uppercase">
                      {point.isEpicure ? '★ EPICURE ATELIER' : 'LANDMARK'}
                    </span>
                  </div>

                </div>
              );
            })}

            {/* Static landmark detail display focus overlay card */}
            <AnimatePresence mode="wait">
              {selectedPoint && (
                <motion.div
                  key={selectedPoint.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: 0.4 }}
                  className="absolute bottom-4 left-4 max-w-[280px] p-4 bg-charcoal/90 border border-gold/40 rounded shadow-2xl text-left glass-card z-30"
                >
                  <span className="font-mono text-[8px] tracking-widest text-gold block mb-1">
                    {selectedPoint.isEpicure ? '★ EPICURE SANCTUARY PLACEMENT' : 'REGIONAL CONTEXT'}
                  </span>
                  <h3 className="font-serif text-base text-white tracking-wide font-medium">
                    {selectedPoint.name}
                  </h3>
                  <p className="font-sans text-[11px] text-white/60 leading-relaxed mt-1.5 font-light">
                    {selectedPoint.description}
                  </p>
                  
                  {selectedPoint.googleMapsUrl && (
                    <div className="mt-3 pt-3 border-t border-white/5 flex">
                      <a
                        href={selectedPoint.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-1.5 font-mono text-[9px] tracking-widest font-semibold text-gold hover:text-white transition-colors bg-gold/15 hover:bg-gold/30 px-3 py-1.5 rounded border border-gold/35"
                      >
                        <MapPin size={10} /> OPEN IN GOOGLE MAPS
                      </a>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>

      {/* Reservation Section Integrated for seamless user booking experience on the Contact portal */}
      <div className="border-t border-gold/15 pt-12">
        <ReservationSection />
      </div>

    </motion.div>
  );
}
