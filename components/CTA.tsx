'use client';

import Link from 'next/link';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-blue-600"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-400/30 via-transparent to-transparent"></div>
      
      {/* Animated Shapes */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"
      ></motion.div>
      <motion.div
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0]
        }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute bottom-10 left-10 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"
      ></motion.div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 drop-shadow-2xl"
          >
            Klaar om te Starten met Uw Klus?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/95 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-lg"
          >
            Vraag vandaag nog een vrijblijvende offerte aan voor uw stucwerk, 
            schilderwerk of renovatieproject in Amsterdam. Wij helpen u graag!
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link
              href="/contact"
              className="group relative bg-white text-blue-600 px-10 py-5 rounded-full hover:bg-slate-50 transition-all transform hover:scale-105 font-bold text-lg shadow-2xl min-w-[280px] overflow-hidden"
            >
              <span className="relative z-10">Vraag Gratis Offerte</span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-200 to-slate-200"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              ></motion.div>
            </Link>
            <a
              href="tel:+31684794108"
              className="group bg-white/10 backdrop-blur-lg text-white px-10 py-5 rounded-full hover:bg-white/20 transition-all transform hover:scale-105 font-bold text-lg shadow-2xl flex items-center gap-3 min-w-[280px] justify-center border-2 border-white/30"
            >
              <Phone size={24} className="group-hover:rotate-12 transition-transform" />
              +31 6 84794108
            </a>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-10 text-white/90 text-base flex flex-wrap justify-center gap-6"
          >
            <span className="flex items-center gap-2">
              <span className="text-blue-300 text-xl">✓</span> Binnen 24 uur reactie
            </span>
            <span className="flex items-center gap-2">
              <span className="text-blue-300 text-xl">✓</span> Vrijblijvende offerte
            </span>
            <span className="flex items-center gap-2">
              <span className="text-blue-300 text-xl">✓</span> Persoonlijk advies
            </span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
