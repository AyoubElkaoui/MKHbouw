'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, ArrowLeft, Phone } from 'lucide-react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function SloopwerkPage() {
  const benefits = [
    'Veilige en gecontroleerde sloop',
    'Gescheiden afvoer van materialen',
    'Minimale overlast voor omgeving',
    'Professionele apparatuur',
    'Ervaren sloopspecialisten',
    'Nette oplevering'
  ];

  const services = [
    {
      title: 'Binnensloop',
      desc: 'Verwijderen van wanden, plafonds en vloeren in woningen en bedrijven'
    },
    {
      title: 'Sanitair sloop',
      desc: 'Uitbreken van badkamers, toiletten en keukens'
    },
    {
      title: 'Tegelsloop',
      desc: 'Verwijderen van tegels van wanden en vloeren'
    },
    {
      title: 'Sloopafvoer',
      desc: 'Gescheiden inzameling en afvoer van bouw- en sloopafval'
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2670&auto=format&fit=crop"
          alt="Professioneel sloopwerk door MKH Bouw"
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
              Professioneel Sloopwerk
            </h1>
            <p className="text-xl text-slate-200 mb-8">
              Veilig en gecontroleerd sloopwerk voor renovaties. Inclusief afvoer van puin en materialen.
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
                Sloopwerk in Amsterdam
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Sloopwerk is vaak de eerste stap bij renovatieprojecten. MKH Bouw voert sloopwerkzaamheden professioneel en veilig uit, met respect voor de omgeving en volgens alle geldende regelgeving.
              </p>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Wij verzorgen zowel kleine sloopklussen zoals het verwijderen van een tussenwand, als grotere projecten waarbij complete interieurs worden gesloopt. Het vrijgekomen materiaal wordt gescheiden afgevoerd en waar mogelijk gerecycled.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Voor bedrijven voeren wij sloopwerk uit aan kantoorpanden, winkels en bedrijfsruimtes. Wij plannen het werk zo dat overlast minimaal is en kunnen indien nodig buiten kantooruren werken.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Onze werkwijze
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
              Sloopwerkzaamheden
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

          {/* Safety */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-50 rounded-2xl p-8 md:p-12 mb-16"
          >
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
                Veiligheid voorop
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed text-center">
                Bij sloopwerk is veiligheid van groot belang. Wij werken volgens strikte veiligheidsnormen en beschikken over de juiste certificaten en verzekeringen. Onze medewerkers zijn opgeleid en ervaren in slooptechnieken.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {[
                  'VCA gecertificeerd',
                  'Volledige aansprakelijkheidsverzekering',
                  'Asbestbewust werken'
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl text-center"
                  >
                    <CheckCircle className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                    <p className="text-slate-700 font-medium">{item}</p>
                  </div>
                ))}
              </div>
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
              Ons werkproces
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Inspectie', desc: 'Beoordeling van de sloopwerkzaamheden' },
                { step: '2', title: 'Planning', desc: 'Afspraken over uitvoering en afvoer' },
                { step: '3', title: 'Sloop', desc: 'Gecontroleerde uitvoering van sloopwerk' },
                { step: '4', title: 'Afvoer', desc: 'Gescheiden afvoer en recycling van materiaal' }
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
              Sloopwerk nodig voor uw renovatie?
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Vraag een vrijblijvende offerte aan
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
