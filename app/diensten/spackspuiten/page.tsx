'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, ArrowLeft, Phone } from 'lucide-react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function SpackspuitenPage() {
  const benefits = [
    'Snelle en efficiënte toepassing',
    'Glad en uniform oppervlak',
    'Geschikt voor grote oppervlakten',
    'Ideaal voor nieuwbouw en renovatie',
    'Professionele afwerking',
    'Kosteneffectieve oplossing'
  ];

  const applications = [
    'Wanden en plafonds in nieuwbouw',
    'Renovatieprojecten',
    'Kantoorpanden en bedrijfsruimtes',
    'Particuliere woningen',
    'Scholen en zorginstellingen',
    'Winkelruimtes'
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=2670&auto=format&fit=crop"
          alt="Professioneel spackspuiten door MKH Bouw"
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
              Professioneel Spackspuiten
            </h1>
            <p className="text-xl text-slate-200 mb-8">
              Snelle, efficiënte wandafwerking voor nieuwbouw en renovatie. Ideaal voor zakelijke en particuliere projecten.
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
                Wat is spackspuiten?
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Spackspuiten, ook wel spuitpleisteren genoemd, is een moderne techniek voor het afwerken van wanden en plafonds. Met gespecialiseerde apparatuur wordt een fijne spuitlaag aangebracht die zorgt voor een perfect glad en uniform oppervlak.
              </p>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Deze techniek is bijzonder geschikt voor grote oppervlakten en levert een professioneel resultaat op in korte tijd. MKH Bouw heeft ruime ervaring met spackspuiten in zowel nieuwbouw als renovatieprojecten.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Voor zakelijke opdrachtgevers bieden wij ook contractuele afspraken voor onderhoudswerkzaamheden en projectmatige opdrachten. Wij werken volgens vaste afspraken en binnen budget.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Voordelen van spackspuiten
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

          {/* Applications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-50 rounded-2xl p-8 md:p-12 mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Toepassingsmogelijkheden
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {applications.map((app, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <CheckCircle className="w-8 h-8 text-blue-600 mb-3" />
                  <p className="text-slate-700 font-medium">{app}</p>
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
              Ons werkproces
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Intake', desc: 'Vrijblijvend gesprek over uw wensen' },
                { step: '2', title: 'Offerte', desc: 'Duidelijke prijsopgave zonder verrassingen' },
                { step: '3', title: 'Planning', desc: 'Afspraken die bij u passen' },
                { step: '4', title: 'Uitvoering', desc: 'Vakkundig en netjes uitgevoerd' }
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
              Interesse in professioneel spackspuiten?
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Neem vrijblijvend contact op voor een offerte op maat
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
