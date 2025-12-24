"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, ArrowLeft, Phone, ArrowRight } from "lucide-react";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function SchilderwerkPage() {
  const benefits = [
    "Hoogwaardige verven en materialen van gerenommeerde merken",
    "Binnen- en buitenschilderwerk voor particulier en zakelijk",
    "Gratis kleuradvies en voorbeeldstalen op locatie",
    "Zorgvuldige voorbereiding voor langdurig resultaat",
    "Nette en snelle uitvoering door ervaren vakmensen",
    "Garantie op uitgevoerd werk en materialen",
  ];

  const services = [
    {
      title: "Binnenschilderwerk",
      desc: "Wanden, plafonds, deuren en kozijnen in woon- en werkruimtes voor een frisse nieuwe uitstraling",
    },
    {
      title: "Buitenschilderwerk",
      desc: "Gevels, kozijnen, deuren en hekwerk weerbestendig gemaakt met hoogwaardige buitenverf",
    },
    {
      title: "Houtrot herstel",
      desc: "Professionele reparatie en behandeling van aangetast houtwerk voor duurzaam resultaat",
    },
    {
      title: "Lakwerk",
      desc: "Hoogglans afwerking voor deuren, trappen en meubilair met perfecte afwerking",
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
                Professioneel <span className="text-primary">Schilderwerk</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Van binnen- tot buitenschilderwerk door heel Nederland.
                Hoogwaardige afwerking voor woning en bedrijf met persoonlijk
                kleuradvies en jarenlange garantie.
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
                    Schilderwerk door heel Nederland
                  </span>
                  <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6 text-gray-900">
                    Uw betrouwbare schilderpartner
                  </h2>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    MKH Bouw is uw betrouwbare partner voor alle schilderwerk
                    door heel Nederland. Of het nu gaat om binnenschilderwerk in
                    uw woning, het schilderen van uw bedrijfspand, of
                    onderhoudsschilderwerk aan de buitenkant, wij zorgen voor
                    een vakkundig en netjes eindresultaat.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Wij werken alleen met hoogwaardige verven en materialen van
                    gerenommeerde merken zoals Sigma, Sikkens en Flexa. Onze
                    schilders hebben ruime ervaring en zorgen voor een
                    zorgvuldige voorbereiding en afwerking die jaren meegaat.
                    Van schuren tot plamuren, van gronden tot lakken - wij
                    verzorgen het complete proces.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Voor bedrijven bieden wij onderhoudscontracten en facility
                    services. Gevestigd in Amsterdam, actief landelijk. Wij
                    plannen het schilderwerk buiten kantooruren indien gewenst,
                    zodat uw bedrijfsvoering niet wordt verstoord. Ideaal voor
                    kantoorpanden, winkels, hotels en zorginstellingen.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    <Image
                      src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=2670&auto=format&fit=crop"
                      alt="Professioneel schilderwerk MKH Bouw Amsterdam"
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
                    Onze Voordelen
                  </span>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-4">
                    Waarom kiezen voor MKH Bouw?
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

              {/* Services */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-24"
              >
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                    Onze schilderdiensten
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Van klein tot groot, wij verzorgen alle soorten schilderwerk
                    met dezelfde toewijding en kwaliteit
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-slate-100 hover:border-primary relative overflow-hidden"
                    >
                      <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 transition-colors leading-relaxed">
                          {service.desc}
                        </p>
                      </div>
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
                className="bg-blue-50 rounded-3xl p-8 md:p-12 mb-24 border border-blue-100"
              >
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
                    Gratis professioneel kleuradvies
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Twijfelt u over de juiste kleurkeuze? Onze adviseurs helpen
                    u graag met het kiezen van de perfecte kleuren die passen
                    bij uw interieur of huisstijl. Wij brengen voorbeeldstalen
                    mee zodat u de kleur in uw eigen ruimte kunt beoordelen bij
                    natuurlijk licht.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Voor zakelijke klanten adviseren wij over duurzame
                    verfsoorten en kleuren die passen bij uw merkidentiteit en
                    zorgen voor een professionele uitstraling.
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
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                    Ons werkproces
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Van intake tot oplevering, wij begeleiden u door het hele
                    proces
                  </p>
                </div>
                <div className="grid md:grid-cols-4 gap-8">
                  {[
                    {
                      step: "1",
                      title: "Intake",
                      desc: "Bespreking van uw wensen en kleurkeuze",
                    },
                    {
                      step: "2",
                      title: "Offerte",
                      desc: "Heldere prijsopgave inclusief materialen",
                    },
                    {
                      step: "3",
                      title: "Voorbereiding",
                      desc: "Schuren, plamuren en afplakken",
                    },
                    {
                      step: "4",
                      title: "Schilderen",
                      desc: "Zorgvuldige uitvoering en nette oplevering",
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

        {/* CTA Section */}
        <section className="relative py-20 bg-slate-900 overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>

          {/* Accent shapes */}
          <div className="absolute top-10 right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              {/* Highlighted badge */}
              <div className="text-center mb-6">
                <span className="inline-flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-lg">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                  </svg>
                  GRATIS OFFERTE OP MAAT
                </span>
              </div>

              {/* Main card with glow */}
              <div className="relative">
                <div className="absolute -inset-0.5 bg-primary rounded-2xl opacity-75 blur"></div>
                <div className="relative bg-white rounded-2xl p-10 md:p-12 shadow-2xl">
                  {/* Header */}
                  <div className="text-center mb-10">
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                      Start Vandaag Nog
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                      Ontvang binnen{" "}
                      <span className="font-bold text-primary">24 uur</span> een
                      persoonlijke offerte. Ervaren vakmanschap, eerlijke
                      prijzen.
                    </p>
                  </div>

                  {/* Buttons with enhanced styling */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                    <a
                      href="/contact"
                      className="group relative inline-flex items-center justify-center bg-primary text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center">
                        Vraag Offerte Aan
                        <svg
                          className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
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
                      </span>
                    </a>

                    <a
                      href="tel:+31684794108"
                      className="group inline-flex items-center justify-center bg-slate-100 text-gray-900 border-2 border-slate-200 px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:border-primary transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    >
                      <svg
                        className="mr-3 w-5 h-5 group-hover:rotate-12 transition-transform"
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
                      <div className="text-left">
                        <div className="text-xs text-gray-500 font-normal -mb-0.5">
                          Of bel direct
                        </div>
                        <div>06 84794108</div>
                      </div>
                    </a>
                  </div>

                  {/* Enhanced trust indicators */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t-2 border-gray-100">
                    <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-sm">
                          24u reactie
                        </div>
                        <div className="text-xs text-gray-600">
                          Gegarandeerd
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-sm">
                          Transparant
                        </div>
                        <div className="text-xs text-gray-600">
                          Vaste prijzen
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-sm">
                          15+ jaar
                        </div>
                        <div className="text-xs text-gray-600">Ervaring</div>
                      </div>
                    </div>
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
