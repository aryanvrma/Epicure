import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, User, Clock, Compass, HelpCircle, Check, MapPin, Sparkles, AlertCircle } from 'lucide-react';
import { LotusDivider, CornerOrnament } from './VaranasiMotif';

interface TableZone {
  id: string;
  name: string;
  description: string;
  premiumFee: number;
  capacityMax: number;
  availableTables: number;
}

const DINING_ZONES: TableZone[] = [
  { id: 'zone-1', name: 'Ganga Aarti Terrace', description: 'Facing directly toward the floating lanterns of Dashashwamedh Ghat.', premiumFee: 1500, capacityMax: 4, availableTables: 2 },
  { id: 'zone-2', name: 'Chef’s Interactive Table', description: 'At the heart of Num Raj Bista’s open wood-fire roasting pits.', premiumFee: 2000, capacityMax: 2, availableTables: 1 },
  { id: 'zone-3', name: 'Royal Chamber Private Lounge', description: 'A cozy corner draped in hand-woven Banarasi silk tapestries.', premiumFee: 2500, capacityMax: 8, availableTables: 1 },
  { id: 'zone-4', name: 'The Central Glass Courtyard', description: 'Surrounded by candlelit columns and delicate botanical water troughs.', premiumFee: 0, capacityMax: 6, availableTables: 5 }
];

export default function ReservationSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '2026-05-29',
    time: '20:00',
    guests: '2',
    zone: 'zone-1',
    dietaryNotes: '',
    specialRequest: ''
  });

  const [bookingRef, setBookingRef] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const selectZone = (zoneId: string) => {
    setFormData((prev) => ({ ...prev, zone: zoneId }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    // Fine validation rules
    if (!formData.name.trim()) {
      setFormError('Please provide your full noble name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setFormError('Please provide a valid electronic mail address.');
      return;
    }
    if (!formData.phone.trim()) {
      setFormError('Please include a verification contact telephone number.');
      return;
    }

    setLoading(true);

    // Simulated luxury request processing
    setTimeout(() => {
      setLoading(false);
      // Generate prestige reference codes
      const prestigePrefixes = ['EPC', 'ATH', 'SRN', 'VNS'];
      const randomPrefix = prestigePrefixes[Math.floor(Math.random() * prestigePrefixes.length)];
      const randomValue = Math.floor(1000 + Math.random() * 9000);
      setBookingRef(`${randomPrefix}-${randomValue}`);
    }, 1800);
  };

  const activeZoneInfo = DINING_ZONES.find((z) => z.id === formData.zone) || DINING_ZONES[0];

  return (
    <section className="py-24 md:py-32 bg-[#040806] relative overflow-hidden border-b border-gold/10">
      
      {/* Background glowing particles, gold light sweeps */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(27,58,43,0.15)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-16">
          <span className="font-mono text-[10px] tracking-[0.3em] text-gold uppercase">// ATELIER VISITS</span>
          <h2 className="font-serif text-3xl md:text-5xl text-white font-medium tracking-wide">
            Secure Your <span className="text-gold italic font-light text-glow">Prestige Placement</span>
          </h2>
          <LotusDivider />
          <p className="font-sans text-xs md:text-sm text-white/50 max-w-xl mx-auto font-light">
             Note: Advance reservations are strictly mandate to ensure absolute sourcing and bespoke kitchen preparations.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {!bookingRef ? (
            <motion.form
              key="reservation-form"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              onSubmit={handleSubmit}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12"
            >
              
              {/* Left Column: Form Fields */}
              <div className="lg:col-span-7 space-y-6 bg-charcoal/45 p-6 md:p-8 rounded-md border border-white/5 backdrop-blur-md relative">
                <CornerOrnament position="top-left" />
                <CornerOrnament position="bottom-right" stroke-dasharray="2 2" />

                <h3 className="font-serif text-xl text-white tracking-wider border-b border-white/5 pb-4 mb-2 flex items-center gap-2">
                  <Sparkles size={16} className="text-gold" /> Noble Registration
                </h3>

                {formError && (
                  <div className="flex items-center gap-2.5 p-3 rounded bg-red-950/40 border border-red-500/30 text-red-300 text-xs font-sans">
                    <AlertCircle size={14} className="flex-shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-1.5 text-left">
                    <label className="font-mono text-[10px] text-white/45 tracking-[0.1em] uppercase block">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gold/60" size={13} />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Maharaja Scindia"
                        className="w-full pl-10 pr-4 py-3 bg-[#0c120f] border border-gold/20 hover:border-gold/45 focus:border-gold rounded-sm font-sans text-white text-xs tracking-wide focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email address */}
                  <div className="space-y-1.5 text-left">
                    <label className="font-mono text-[10px] text-white/45 tracking-[0.1em] uppercase block">Electronic Mail (Email)</label>
                    <div className="relative">
                      <Compass className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gold/60" size={13} />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. luxury@heritage.in"
                        className="w-full pl-10 pr-4 py-3 bg-[#0c120f] border border-gold/20 hover:border-gold/45 focus:border-gold rounded-sm font-sans text-white text-xs tracking-wide focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone register */}
                  <div className="space-y-1.5 text-left">
                    <label className="font-mono text-[10px] text-white/45 tracking-[0.1em] uppercase block">Contact Telephone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +91 9880 12345"
                      className="w-full px-4 py-3 bg-[#0c120f] border border-gold/20 hover:border-gold/45 focus:border-gold rounded-sm font-sans text-white text-xs tracking-wide focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
                    />
                  </div>

                  {/* Guests Register */}
                  <div className="space-y-1.5 text-left">
                    <label className="font-mono text-[10px] text-white/45 tracking-[0.1em] uppercase block">Guest Registry Count</label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#0c120f] border border-gold/20 hover:border-gold/45 focus:border-gold rounded-sm font-sans text-white text-xs tracking-wide focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <option key={num} value={num} className="bg-charcoal text-white">
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Calendar Date selector */}
                  <div className="space-y-1.5 text-left">
                    <label className="font-mono text-[10px] text-white/45 tracking-[0.1em] uppercase block">Calendar Date</label>
                    <div className="relative">
                      <Calendar className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gold/60" size={13} />
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-[#0c120f] border border-gold/20 hover:border-gold/45 focus:border-gold rounded-sm font-sans text-white text-xs tracking-wide focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
                      />
                    </div>
                  </div>

                  {/* Session hour selector */}
                  <div className="space-y-1.5 text-left">
                    <label className="font-mono text-[10px] text-white/45 tracking-[0.1em] uppercase block">Session Hour</label>
                    <div className="relative">
                      <Clock className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gold/60" size={13} />
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-[#0c120f] border border-gold/20 hover:border-gold/45 focus:border-gold rounded-sm font-sans text-white text-xs tracking-wide focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
                      >
                        {['12:00', '13:30', '18:00', '19:30', '20:00', '21:30', '22:00'].map((t) => (
                          <option key={t} value={t} className="bg-charcoal text-white">
                            {t} {Number(t.substring(0, 2)) < 16 ? 'PM - Lunch' : 'PM - Dinner Session'}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Dietary constraints */}
                <div className="space-y-1.5 text-left">
                  <label className="font-mono text-[10px] text-white/45 tracking-[0.1em] uppercase block">Dietary Alignments (Vegetarian, Gluten Free, Spices, Allergies)</label>
                  <input
                    type="text"
                    name="dietaryNotes"
                    value={formData.dietaryNotes}
                    onChange={handleInputChange}
                    placeholder="e.g. Vegetarian preference, low chili spice grade"
                    className="w-full px-4 py-3 bg-[#0c120f] border border-gold/20 hover:border-gold/45 focus:border-gold rounded-sm font-sans text-white text-xs tracking-wide focus:outline-none transition-colors"
                  />
                </div>

                {/* Special noble wishes */}
                <div className="space-y-1.5 text-left">
                  <label className="font-mono text-[10px] text-white/45 tracking-[0.1em] uppercase block">Bespoke Ritual/Request</label>
                  <textarea
                    name="specialRequest"
                    value={formData.specialRequest}
                    onChange={handleInputChange}
                    rows={2}
                    placeholder="e.g. Seeking high visual line table overview of Dashashwamedh Ghat lights"
                    className="w-full px-4 py-3 bg-[#0c120f] border border-gold/20 hover:border-gold/45 focus:border-gold rounded-sm font-sans text-white text-xs tracking-wide focus:outline-none transition-colors resize-none"
                  />
                </div>

              </div>

              {/* Right Column: Interactive Zones Grid Selector */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                
                <div className="space-y-4">
                  <h3 className="font-mono text-xs tracking-[0.2em] text-white/40 uppercase block text-left">
                    SELECT EXCLUSIVE SEATING PLACEMENT ZONE
                  </h3>

                  <div className="grid grid-cols-1 gap-4">
                    {DINING_ZONES.map((zone) => {
                      const isSelected = formData.zone === zone.id;
                      return (
                        <div
                          key={zone.id}
                          onClick={() => selectZone(zone.id)}
                          className={`group cursor-pointer p-4 rounded bg-gradient-to-br from-charcoal/40 to-[#0e1713]/40 border glass-card text-left flex justify-between items-center transition-all duration-300 ${
                            isSelected
                              ? 'border-gold shadow-[0_5px_20px_rgba(203,162,51,0.15)] bg-forest/35'
                              : 'border-white/5 hover:border-gold/30 hover:bg-[#0d1c14]'
                          }`}
                        >
                          <div className="space-y-1 max-w-[80%]">
                            <span className={`font-serif text-base block transition-colors ${
                              isSelected ? 'text-gold text-glow' : 'text-white group-hover:text-gold'
                            }`}>
                              {zone.name}
                            </span>
                            <p className="font-sans text-[11px] text-white/50 leading-relaxed font-light">
                              {zone.description}
                            </p>
                          </div>

                          <div className="text-right flex flex-col items-end gap-1 font-mono">
                            <span className="text-glow-light text-[10px] text-white font-semibold">
                              {zone.premiumFee > 0 ? `+ ₹${zone.premiumFee.toLocaleString()}` : 'Standard'}
                            </span>
                            <span className="text-[8px] text-gold-light opacity-65">
                              {zone.availableTables} left
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Billing Summary Box */}
                <div className="p-5 border border-gold/15 bg-forest/20 backdrop-blur-md rounded-md space-y-4 text-left">
                  <div className="flex justify-between items-center font-mono text-[10px] text-white/40 uppercase tracking-widest pb-3 border-b border-white/5">
                    <span>SEATING DETAIL CARD</span>
                    <span className="text-gold">EPICURE RITUAL</span>
                  </div>

                  <div className="space-y-2 text-xs font-sans text-white/70 font-light">
                    <div className="flex justify-between">
                      <span>Assigned Zone:</span>
                      <span className="font-serif text-white italic">{activeZoneInfo.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Reserve Date/Time:</span>
                      <span className="font-mono text-gold">{formData.date} at {formData.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Placement Access Fee:</span>
                      <span className="font-mono text-white">
                        {activeZoneInfo.premiumFee > 0 ? `₹${activeZoneInfo.premiumFee.toLocaleString()}` : 'Complimentary'}
                      </span>
                    </div>
                  </div>

                  {/* Submission CTA Trigger */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-gradient-to-r from-gold to-gold-dark text-black font-mono text-[11px] tracking-[0.25em] font-semibold rounded-sm hover:shadow-[0_8px_20px_#CBA23340] cursor-pointer active:translate-y-px transition-all flex items-center justify-center gap-2 group focus:outline-none"
                  >
                    {loading ? (
                      <span className="inline-block animate-pulse">TRANSMITTING REQUEST...</span>
                    ) : (
                      <>
                        TRANSMIT NOBLE BOOKING
                        <Check size={13} className="group-hover:scale-125 transition-transform" />
                      </>
                    )}
                  </button>
                </div>

              </div>

            </motion.form>
          ) : (
            /* Prestige Confirmation Gold Ticket Overlay block */
            <motion.div
              key="prestige-ticket"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', damping: 25 }}
              className="max-w-2xl mx-auto glass-card rounded-md border-2 border-gold p-8 md:p-12 relative text-center space-y-6 shadow-2xl overflow-hidden"
            >
              {/* Confetti-like ambient radial fire beams */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(203,162,51,0.15)_0%,transparent_70%)] pointer-events-none" />
              
              <CornerOrnament position="top-left" />
              <CornerOrnament position="top-right" />
              <CornerOrnament position="bottom-left" />
              <CornerOrnament position="bottom-right" />

              <div className="flex justify-center flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-full bg-gold/15 border border-gold flex items-center justify-center text-gold shadow-[0_0_15px_#CBA233]">
                  <Check size={24} className="animate-pulse" />
                </div>
                <span className="font-mono text-[10px] tracking-[0.3em] text-gold uppercase mt-2">PRESTIGE CONFIRMATOIN SEAT</span>
              </div>

              <div className="space-y-4">
                <h3 className="font-serif text-3xl md:text-4xl text-white font-medium tracking-wide">
                  Welcome to Epicure, <br />
                  <span className="text-gold italic font-light text-glow">{formData.name}</span>
                </h3>
                <p className="font-sans text-xs md:text-sm text-white/70 max-w-md mx-auto leading-relaxed font-light">
                  Your prestige seat has been securely registered in our noble system. A culinary concierge coordinator will reach out to your telephone number (<span className="font-mono text-white font-medium">{formData.phone}</span>) shortly.
                </p>
              </div>

              {/* Physical ticket detailing card splits */}
              <div className="py-6 border-y border-dashed border-gold/30 my-6 bg-forest/20 rounded font-mono text-left space-y-3 px-6 md:px-12 relative">
                
                {/* Left/Right ticket punch circles */}
                <div className="absolute top-1/2 -translate-y-1/2 -left-4 w-8 h-8 rounded-full bg-[#040806] border-r border-[#CBA233]" />
                <div className="absolute top-1/2 -translate-y-1/2 -right-4 w-8 h-8 rounded-full bg-[#040806] border-l border-[#CBA233]" />

                <div className="grid grid-cols-2 gap-4 text-[10px] tracking-wider font-light">
                  <div>
                    <span className="text-white/45 block mb-0.5">REFERENCE NUMBER</span>
                    <span className="text-gold text-glow text-xs font-semibold font-mono">{bookingRef}</span>
                  </div>
                  <div>
                    <span className="text-white/45 block mb-0.5">GUEST COUNT</span>
                    <span className="text-white font-medium block">{formData.guests} Guests Registered</span>
                  </div>
                  <div>
                    <span className="text-white/45 block mb-0.5">SESSION SCHEDULE</span>
                    <span className="text-white font-medium block">{formData.date} at {formData.time} PM</span>
                  </div>
                  <div>
                    <span className="text-white/45 block mb-0.5">ASSIGNED LOCATION</span>
                    <span className="text-white font-medium block">{activeZoneInfo.name}</span>
                  </div>
                </div>

                {formData.dietaryNotes && (
                  <div className="pt-2 border-t border-white/5 text-[9px] tracking-widest text-white/50">
                    <span className="text-gold uppercase block font-semibold">CUSTOM KITCHEN CODE:</span>
                    <span>{formData.dietaryNotes.toUpperCase()}</span>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setBookingRef(null)}
                  className="px-6 py-3 border border-gold/40 text-gold hover:text-white font-mono text-[10px] tracking-[0.25em] rounded-sm bg-transparent hover:bg-gold/10 transition-all cursor-pointer focus:outline-none"
                >
                  SCHEDULE ANOTHER VISIT
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
