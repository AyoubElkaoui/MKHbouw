'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, ArrowLeft, Phone } from 'lucide-react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function BehangenPage() {
  const benefits = [
    'Vakkundig behangwerk zonder luchtbellen',
    'Groot assortiment behangsoorten',
    'Advies over patronen en kleuren',
    'Verwijdering van oud behang',
    'Vliesbehang, vinyl en textiel',
    'Ook voor zakelijke ruimtes'
  ];

  const types = [
    {
      title: 'Vliesbehang',
      desc: 'Modern en gemakkelijk aan te brengen, ideaal voor wanden'
    },
    {
      title: 'Vinyl behang',
      desc: 'Wasbaar en duurzaam, perfect voor keukens en badkamers'
    },
    {
      title: 'Textiel behang',
      desc: 'Luxe uitstraling met verfijnde textuur en karakter'
    },
    {
      title: 'Fotobehang',
      desc: 'Persoonlijke touch met eigen afbeeldingen of designs'
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=2670&auto=format&fit=crop"
          alt="Professioneel behangwerk door MKH Bouw"
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
              Professioneel Behangen
            </h1>
            <p className="text-xl text-slate-200 mb-8">
              Transformeer uw ruimte met vakkundig aangebracht behang. Van klassiek tot modern, voor woning en bedrijf.
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
                Vakkundig behangwerk
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Behang is terug van weggeweest en populairder dan ooit. Met modern behang creëert u eenvoudig een nieuwe sfeer in uw woning of bedrijfspand. MKH Bouw is gespecialiseerd in het aanbrengen van alle soorten behang.
              </p>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Wij zorgen voor een strakke afwerking zonder luchtbellen, met perfect op elkaar aansluitende patronen. Ook verwijderen wij vakkundig oud behang en maken wij de wand gereed voor nieuw behang.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Voor zakelijke opdrachtgevers voeren wij behangwerk uit in kantoren, hotels, winkels en horecagelegenheden. Wij werken efficiënt en netjes, met minimale overlast voor uw bedrijfsvoering.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Waarom kiezen voor MKH Bouw?
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

          {/* Types */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Behangsoorten
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {types.map((type, index) => (
                <div
                  key={index}
                  className="bg-slate-50 p-8 rounded-xl hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{type.title}</h3>
                  <p className="text-slate-600">{type.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Applications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-50 rounded-2xl p-8 md:p-12 mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Toepassingen
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                'Woonkamers en slaapkamers',
                'Kantoorruimtes',
                'Hotelkamers en lobbies',
                'Winkels en showrooms',
                'Restaurants en cafés',
                'Kinderkamers en speelruimtes'
              ].map((app, index) => (
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
                { step: '1', title: 'Advies', desc: 'Keuzehulp voor behangsoort en patroon' },
                { step: '2', title: 'Voorbereiding', desc: 'Verwijderen oud behang en egaliseren' },
                { step: '3', title: 'Aanbrengen', desc: 'Vakkundig plakken zonder luchtbellen' },
                { step: '4', title: 'Afwerking', desc: 'Nauwkeurige afwerking van hoeken en randen' }
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
              Nieuwe uitstraling met behang?
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Neem contact op voor een vrijblijvende offerte
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
