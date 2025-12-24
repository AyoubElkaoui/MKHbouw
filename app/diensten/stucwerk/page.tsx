"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, ArrowLeft, Phone, ArrowRight } from "lucide-react";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function StucwerkPage() {
  const benefits = [
    "Duurzame en sterke wandafwerking die jarenlang meegaat",
    "Diverse finish opties (glad, structuur, sierpleister)",
    "Geschikt voor binnen en buiten toepassing",
    "Langdurige bescherming tegen vocht en weersinvloeden",
    "Professionele strakke afwerking door ervaren stukadoors",
    "Geschikt voor B2B onderhoudscontracten en facility services",
  ];

  const types = [
    {
      title: "Traditioneel stucwerk",
      desc: "Klassieke kalkstuc voor authentieke uitstraling en duurzaam resultaat in monumentale panden",
    },
    {
      title: "Glad stucwerk",
      desc: "Strakke moderne afwerking voor wanden en plafonds, direct sausklaar of behangklaar",
    },
    {
      title: "Structuurstuc",
      desc: "Decoratieve stuc met relief en textuur voor een unieke uitstraling en karakter",
    },
    {
      title: "Buitenstucwerk",
      desc: "Weerbestendige stuc voor gevels die beschermt tegen Nederlandse weersomstandigheden",
    },
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-slate-50 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <Link
                href="/diensten"
                className="inline-flex items-center gap-2 text-primary hover:text-blue-700 transition-colors mb-6 font-semibold"
              >
                <ArrowLeft className="w-4 h-4" />
                Terug naar diensten
              </Link>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
                Vakkundig <span className="text-primary">Stucwerk</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Van klassiek tot modern stucwerk door heel Nederland. Duurzame
                wandafwerking voor binnen en buiten, geschikt voor zakelijke en
                particuliere projecten.
              </p>
              <a
                href="tel:+31684794108"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all transform hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                Direct contact: 06 84794108
              </a>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <span className="text-primary font-semibold text-sm uppercase tracking-wide">
                    Stucwerk door heel Nederland
                  </span>
                  <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6 text-gray-900">
                    Professioneel stucwerk voor elk project
                  </h2>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Stucwerk is een veelzijdige wandafwerking die al eeuwen
                    wordt toegepast. Bij MKH Bouw combineren we traditionele
                    vakmanschap met moderne technieken voor een perfect
                    resultaat dat jarenlang mooi blijft.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Of u nu kiest voor glad stucwerk, sierpleister of
                    traditionele kalkstuc, wij leveren maatwerk dat past bij uw
                    wensen. Onze ervaring met zowel renovatie als nieuwbouw
                    garandeert een duurzaam en mooi eindresultaat. Wij werken
                    met hoogwaardige materialen van bekende merken voor optimale
                    kwaliteit.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Voor bedrijven bieden wij onderhoudscontracten en facility
                    services. Gevestigd in Amsterdam, actief door heel
                    Nederland. Wij werken volgens planning en binnen afgesproken
                    budget, ideaal voor kantoorpanden, winkels en
                    zorginstellingen die een betrouwbare onderhoudspartner
                    zoeken.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute -inset-4 bg-primary rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    <Image
                      src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2670&auto=format&fit=crop"
                      alt="Professioneel stucwerk MKH Bouw Amsterdam"
                      width={600}
                      height={500}
                      className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  </div>
                </motion.div>
              </div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-24"
              >
                <div className="text-center mb-12">
                  <span className="text-primary font-semibold text-sm uppercase tracking-wide">
                    Voordelen
                  </span>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-4">
                    Waarom kiezen voor stucwerk?
                  </h2>
                  <div className="w-24 h-1 bg-primary mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 bg-blue-50 p-6 rounded-2xl border border-blue-100 hover:shadow-xl transition-all transform hover:-translate-y-1"
                    >
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <span className="text-gray-700 leading-relaxed">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Types */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-24"
              >
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                    Soorten stucwerk
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Voor elke situatie en stijl hebben wij de juiste
                    stucoplossing
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  {types.map((type, index) => (
                    <div
                      key={index}
                      className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-slate-100 hover:border-primary relative overflow-hidden"
                    >
                      <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-gray-900  mb-3 transition-colors">
                          {type.title}
                        </h3>
                        <p className="text-gray-600 /90 transition-colors leading-relaxed">
                          {type.desc}
                        </p>
                      </div>
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
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                    Ons werkproces
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Van advies tot oplevering, wij verzorgen het complete proces
                  </p>
                </div>
                <div className="grid md:grid-cols-4 gap-8">
                  {[
                    {
                      step: "1",
                      title: "Advies",
                      desc: "Persoonlijk advies over de beste oplossing",
                    },
                    {
                      step: "2",
                      title: "Offerte",
                      desc: "Transparante prijsopgave zonder verborgen kosten",
                    },
                    {
                      step: "3",
                      title: "Voorbereiding",
                      desc: "Zorgvuldige voorbereiding van het oppervlak",
                    },
                    {
                      step: "4",
                      title: "Uitvoering",
                      desc: "Vakkundige uitvoering met oog voor detail",
                    },
                  ].map((item, index) => (
                    <div key={index} className="text-center group">
                      <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4 shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all">
                        {item.step}
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2 text-lg">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-primary relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-3xl p-12 md:p-16 shadow-2xl border-4 border-white">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
                    Advies nodig over stucwerk?
                  </h2>
                  <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Vraag vandaag nog een{" "}
                    <span className="text-primary font-bold">
                      vrijblijvende offerte
                    </span>{" "}
                    aan en ontvang persoonlijk advies
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center bg-primary text-white px-10 py-5 rounded-xl hover:bg-blue-700 transition-all font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transform"
                  >
                    <span>Vraag Offerte Aan</span>
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                  <a
                    href="tel:+31684794108"
                    className="group inline-flex items-center justify-center bg-white text-primary border-3 border-primary px-10 py-5 rounded-xl hover:bg-primary hover:text-white transition-all font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transform"
                  >
                    <svg
                      className="w-6 h-6 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span>06 84794108</span>
                  </a>
                </div>

                <div className="flex flex-wrap justify-center gap-8 pt-8 border-t-2 border-gray-100">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700 font-semibold">
                      Binnen 24 uur reactie
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700 font-semibold">
                      Geen verborgen kosten
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700 font-semibold">
                      15+ jaar ervaring
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
