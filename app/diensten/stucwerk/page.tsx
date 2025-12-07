'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, ArrowLeft, Phone } from 'lucide-react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function StucwerkPage() {
  const benefits = [
    'Duurzame en sterke wandafwerking',
    'Diverse finish opties (glad, structuur)',
    'Geschikt voor binnen en buiten',
    'Langdurige bescherming tegen vocht',
    'Professionele strakke afwerking',
    'Geschikt voor B2B contracten'
  ];

  const types = [
    {
      title: 'Traditioneel stucwerk',
      desc: 'Klassieke kalkstuc voor authentieke uitstraling'
    },
    {
      title: 'Glad stucwerk',
      desc: 'Strakke moderne afwerking voor wanden en plafonds'
    },
    {
      title: 'Structuurstuc',
      desc: 'Decoratieve stuc met relief en textuur'
    },
    {
      title: 'Buitenstucwerk',
      desc: 'Weerbestendige stuc voor gevels'
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2670&auto=format&fit=crop"
          alt="Professioneel stucwerk door MKH Bouw"
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
              Vakkundig Stucwerk
            </h1>
            <p className="text-xl text-slate-200 mb-8">
              Van klassiek tot modern stucwerk. Duurzame wandafwerking voor binnen en buiten, geschikt voor zakelijke en particuliere projecten.
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
                Professioneel stucwerk in Amsterdam
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Stucwerk is een veelzijdige wandafwerking die al eeuwen wordt toegepast. Bij MKH Bouw combineren we traditionele vakmanschap met moderne technieken voor een perfect resultaat.
              </p>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Of u nu kiest voor glad stucwerk, sierpleister of traditionele kalkstuc, wij leveren maatwerk dat past bij uw wensen. Onze ervaring met zowel renovatie als nieuwbouw garandeert een duurzaam en mooi eindresultaat.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Voor bedrijven bieden wij onderhoudscontracten en facility services. Wij werken volgens planning en binnen afgesproken budget, ideaal voor kantoorpanden, winkels en zorginstellingen.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Voordelen van stucwerk
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
              Soorten stucwerk
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
                { step: '1', title: 'Advies', desc: 'Persoonlijk advies over de beste oplossing' },
                { step: '2', title: 'Offerte', desc: 'Transparante prijsopgave zonder verborgen kosten' },
                { step: '3', title: 'Voorbereiding', desc: 'Zorgvuldige voorbereiding van het oppervlak' },
                { step: '4', title: 'Uitvoering', desc: 'Vakkundige uitvoering met oog voor detail' }
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
              Advies nodig over stucwerk?
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Wij helpen u graag met een vrijblijvende offerte
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
