'use client';

import { CheckCircle, Shield, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="over-ons" className="py-24 bg-gradient-to-b from-white via-slate-50/30 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-slate-200/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
            Kennismaking
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Waarom Kiezen voor MKH Bouw?
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-slate-700 to-blue-600 bg-clip-text text-transparent">
              Uw Betrouwbare Klussenbedrijf in Amsterdam
            </h3>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              MKH Bouw is een professioneel klussenbedrijf gevestigd in Amsterdam, gespecialiseerd in stucwerk, schilderwerk en complete renovaties. Met jarenlange ervaring in de bouwsector leveren wij hoogwaardige kluswerken voor zowel particulieren als bedrijven in heel Amsterdam en omstreken.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Wat ons onderscheidt? Wij doen wat we beloven - afspraak is afspraak. Onze ervaren vakmensen werken met precisie en aandacht voor detail, of het nu gaat om spackspuiten, sierpleister of een complete woningrenovatie. Bij MKH Bouw staat kwaliteit voorop en is een tevreden klant ons beste visitekaartje.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Wij werken uitsluitend met hoogwaardige materialen en moderne technieken. Dankzij onze jarenlange ervaring in Amsterdam kennen wij de specifieke uitdagingen van woningen in de stad, van monumentale panden tot moderne appartementen.
            </p>
            {/* Features */}
            <div className="space-y-6">
              {[
                { icon: CheckCircle, title: 'Jarenlange Ervaring', desc: 'Professionele service met bewezen expertise' },
                { icon: Shield, title: 'Betrouwbaar', desc: 'Afspraak is afspraak, altijd' },
                { icon: Users, title: 'Persoonlijk Advies', desc: 'Wij denken actief met u mee' }
              ].map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 group-hover:scale-110 transition-all">
                    <feature.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group"
          >
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2574&auto=format&fit=crop" 
              alt="MKH Bouw professional construction work"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 z-10">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-white text-4xl font-extrabold mb-2">15+</div>
                <div className="text-slate-200 text-lg">Jaar Ervaring in Amsterdam</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}