'use client';

import { Phone, ArrowDown, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2531&auto=format&fit=crop" 
          alt="Professional construction work"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/90 to-slate-800/85"></div>
      </div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-slate-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>
      
      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-white/20 rounded-2xl backdrop-blur-sm"
        ></motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 right-1/4 w-24 h-24 border-2 border-white/20 rounded-full backdrop-blur-sm"
        ></motion.div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6 inline-block"
          >
            <span className="bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full text-sm font-semibold border border-white/30 inline-flex items-center gap-2 shadow-lg">
              <Sparkles size={18} />
              Welkom bij MKH Bouw
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-2xl"
          >
            Klussenbedrijf in Amsterdam voor{' '}
            <span className="bg-gradient-to-r from-blue-400 to-slate-300 bg-clip-text text-transparent">
              Stucwerk & Schilderwerk
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-lg"
          >
            MKH Bouw is uw professionele bouwpartner voor bedrijven en particulieren in Amsterdam. 
            Gespecialiseerd in stucwerk, schilderwerk, renovaties en projectmatig onderhoud.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center mb-10"
          >
            {['15+ Jaar Ervaring', 'Zakelijke Contracten', 'Erkend Bedrijf'].map((text, i) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-3 rounded-full shadow-xl border border-white/20"
              >
                <span className="text-blue-400 font-bold text-lg">✓</span>
                <span className="text-white font-semibold">{text}</span>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#contact"
              className="group bg-blue-600 text-white px-10 py-5 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 font-bold text-lg shadow-2xl relative overflow-hidden"
            >
              <span className="relative z-10">Vraag Offerte Aan</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            <a
              href="tel:+31684794108"
              className="group bg-white/10 backdrop-blur-md text-white px-10 py-5 rounded-full hover:bg-white/20 transition-all transform hover:scale-105 font-bold text-lg shadow-2xl border-2 border-white/30 flex items-center gap-3"
            >
              <Phone size={24} className="group-hover:animate-bounce" />
              +31 6 84794108
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/30">
          <ArrowDown size={28} className="text-white" />
        </div>
      </motion.div>
    </section>
  );
}
