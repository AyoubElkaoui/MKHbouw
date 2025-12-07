'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, ArrowLeft, Phone } from 'lucide-react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function RenovatiePage() {
  const benefits = [
    'Complete projectbegeleiding van A tot Z',
    'Ervaren vakmensen onder één dak',
    'Heldere planning en communicatie',
    'Vaste aanspreekpunt tijdens renovatie',
    'Garantie op uitgevoerd werk',
    'Ook voor zakelijke projecten'
  ];

  const services = [
    {
      title: 'Badkamerrenovatie',
      desc: 'Complete vernieuwing van uw badkamer inclusief tegels, sanitair en leidingwerk'
    },
    {
      title: 'Keukenrenovatie',
      desc: 'Van plaatsing tot aansluitingen, wij verzorgen uw complete keuken'
    },
    {
      title: 'Woonhuisrenovatie',
      desc: 'Algehele renovatie van woningen en appartementen'
    },
    {
      title: 'Bedrijfsrenovatie',
      desc: 'Verbouwing van kantoren, winkels en bedrijfsruimtes'
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2670&auto=format&fit=crop"
          alt="Professionele renovatie door MKH Bouw"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link 
              href="/diensten"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Terug naar diensten
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Totale Renovatie
            </h1>
            <p className="text-xl text-slate-200 mb-8">
              Van badkamer tot complete woning. Wij begeleiden uw renovatieproject van begin tot eind met één aanspreekpunt.
            </p>
            <a
              href="tel:+31684794108"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Direct contact: 06 84794108
            </a>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Uw renovatiepartner in Amsterdam
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Een renovatie is een grote stap. Bij MKH Bouw begrijpen wij dat en zorgen wij ervoor dat uw project soepel verloopt. Van het eerste gesprek tot de oplevering: wij begeleiden u door het hele proces.
              </p>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Omdat wij alle vakgebieden in huis hebben - van sloopwerk tot stucwerk en van schilderwerk tot tegelwerk - hoeft u maar met één partij te communiceren. Dit scheelt u tijd, geld en zorgen.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Voor zakelijke opdrachtgevers bieden wij renovatieprojecten op basis van vaste afspraken en planning. Wij hebben ervaring met kantoren, winkels, horecagelegenheden en zorginstellingen.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Voordelen van MKH Bouw
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Renovatie diensten
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-slate-50 p-8 rounded-xl hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600">{service.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* What We Do */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-50 rounded-2xl p-8 md:p-12 mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Wat omvat onze renovatie?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                'Sloopwerk en ontruiming',
                'Elektra en leidingwerk',
                'Stucwerk en afbouw',
                'Tegelwerk',
                'Schilderwerk en behangen',
                'Keuken en badkamer installatie',
                'Vloeren leggen',
                'Timmerwerk',
                'Afvoer van bouw- en sloopafval'
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <CheckCircle className="w-8 h-8 text-blue-600 mb-3" />
                  <p className="text-slate-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Process */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Hoe werkt het?
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Intakegesprek', desc: 'Bespreking van uw wensen en budget' },
                { step: '2', title: 'Plan & Offerte', desc: 'Gedetailleerd plan met vaste prijsopgave' },
                { step: '3', title: 'Uitvoering', desc: 'Gefaseerde uitvoering volgens planning' },
                { step: '4', title: 'Oplevering', desc: 'Nette oplevering met garantie' }
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">
              Start uw renovatieproject
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Neem contact op voor een vrijblijvend gesprek over de mogelijkheden
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+31684794108"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-slate-50 transition-colors"
              >
                <Phone className="w-5 h-5" />
                06 84794108
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-900 transition-colors"
              >
                Contactformulier
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
}
