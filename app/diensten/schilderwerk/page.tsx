'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, ArrowLeft, Phone } from 'lucide-react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function SchilderwerkPage() {
  const benefits = [
    'Hoogwaardige verven en materialen',
    'Binnen- en buitenschilderwerk',
    'Kleuradvies en voorbeeldstalen',
    'Zorgvuldige voorbereiding',
    'Nette en snelle uitvoering',
    'Garantie op uitgevoerd werk'
  ];

  const services = [
    {
      title: 'Binnenschilderwerk',
      desc: 'Wanden, plafonds, deuren en kozijnen in woon- en werkruimtes'
    },
    {
      title: 'Buitenschilderwerk',
      desc: 'Gevels, kozijnen, deuren en hekwerk weerbestendig gemaakt'
    },
    {
      title: 'Houtrot herstel',
      desc: 'Reparatie en behandeling van aangetast houtwerk'
    },
    {
      title: 'Lakwerk',
      desc: 'Hoogglans afwerking voor deuren, trappen en meubilair'
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=2670&auto=format&fit=crop"
          alt="Professioneel schilderwerk door MKH Bouw"
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
              Professioneel Schilderwerk
            </h1>
            <p className="text-xl text-slate-200 mb-8">
              Van binnen- tot buitenschilderwerk. Hoogwaardige afwerking voor woning en bedrijf met persoonlijk kleuradvies.
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
                Schilderwerk in Amsterdam
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                MKH Bouw is uw betrouwbare partner voor alle schilderwerk in en rondom Amsterdam. Of het nu gaat om binnenschilderwerk in uw woning, het schilderen van uw bedrijfspand, of onderhoudsschilderwerk aan de buitenkant, wij zorgen voor een vakkundig en netjes eindresultaat.
              </p>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Wij werken alleen met hoogwaardige verven en materialen van gerenommeerde merken. Onze schilders hebben ruime ervaring en zorgen voor een zorgvuldige voorbereiding en afwerking die jaren meegaat.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Voor bedrijven bieden wij onderhoudscontracten en facility services. Wij plannen het schilderwerk buiten kantooruren indien gewenst, zodat uw bedrijfsvoering niet wordt verstoord.
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
              Onze schilderdiensten
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

          {/* Color Advice */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-50 rounded-2xl p-8 md:p-12 mb-16"
          >
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Gratis kleuradvies
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Twijfelt u over de juiste kleurkeuze? Onze adviseurs helpen u graag met het kiezen van de perfecte kleuren die passen bij uw interieur of huisstijl. Wij brengen voorbeeldstalen mee zodat u de kleur in uw eigen ruimte kunt beoordelen.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Voor zakelijke klanten adviseren wij over duurzame verfsoorten en kleuren die passen bij uw merkidentiteit.
              </p>
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
                { step: '1', title: 'Intake', desc: 'Bespreking van uw wensen en kleurkeuze' },
                { step: '2', title: 'Offerte', desc: 'Heldere prijsopgave inclusief materialen' },
                { step: '3', title: 'Voorbereiding', desc: 'Schuren, plamuren en afplakken' },
                { step: '4', title: 'Schilderen', desc: 'Zorgvuldige uitvoering en nette oplevering' }
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
              Wilt u uw pand laten schilderen?
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Vraag een vrijblijvende offerte aan met gratis kleuradvies
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
