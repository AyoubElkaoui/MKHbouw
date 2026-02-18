"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  CheckCircle,
  ArrowLeft,
  Phone,
  ArrowRight,
  Star,
  Zap,
} from "lucide-react";
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
        <section className="relative min-h-[60vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1679018179962-06922435f6bc?q=80&w=2670&auto=format&fit=crop"
              alt="Professioneel schilderwerk MKH Bouw"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
          </div>

          {/* Decorative elements */}
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <Link
                href="/diensten"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-6 font-semibold"
              >
                <ArrowLeft className="w-4 h-4" />
                Terug naar diensten
              </Link>

              {/* Badge */}
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-sm font-medium border border-white/20">
                  <span className="flex items-center gap-1">
                    <Star size={14} className="fill-accent text-accent" />
                    <Star size={14} className="fill-accent text-accent" />
                    <Star size={14} className="fill-accent text-accent" />
                    <Star size={14} className="fill-accent text-accent" />
                    <Star size={14} className="fill-accent text-accent" />
                  </span>
                  Vakmanschap met garantie
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
                Professioneel{" "}
                <span className="relative">
                  <span className="relative z-10">Schilderwerk</span>
                  <span className="absolute bottom-2 left-0 right-0 h-3 bg-accent/30 -z-0 rounded" />
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed max-w-3xl mx-auto">
                Van binnen- tot buitenschilderwerk door heel Nederland.
                Hoogwaardige afwerking voor woning en bedrijf met persoonlijk
                kleuradvies en jarenlange garantie.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+31684794108"
                  className="group inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4.5 rounded-xl font-bold text-lg hover:bg-accent-600 transition-all shadow-xl shadow-accent/25 hover:shadow-2xl hover:shadow-accent/30 hover:-translate-y-0.5"
                >
                  <Phone className="w-5 h-5" />
                  Direct contact: 06 84794108
                </a>
                <a
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white/25 px-8 py-4.5 rounded-xl font-bold text-lg hover:bg-white/20 hover:border-white/40 transition-all"
                >
                  Gratis Offerte
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>
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
                  <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
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
                  <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                    <Star size={14} className="fill-accent text-accent" />
                    Onze Voordelen
                  </span>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-4">
                    Waarom kiezen voor MKH Bouw?
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="group relative flex items-start gap-4 bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-2xl border border-primary/10 hover:shadow-xl transition-all transform hover:-translate-y-1 overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
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
                  <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                    Onze schilderdiensten
                  </span>
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
                      className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-primary/10 hover:border-accent/30 relative overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
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
                className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12 mb-24 border border-primary/10"
              >
                <div className="max-w-3xl mx-auto text-center">
                  <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                    Kleuradvies
                  </span>
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
                  <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                    Werkwijze
                  </span>
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
                      <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4 shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all">
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
        <section className="relative py-24 overflow-hidden">
          {/* Full background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary/90" />

          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-60 h-60 bg-white/5 rounded-full blur-3xl" />

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='1'%3E%3Cpath d='M0 0h1v40H0zM40 0v1H0V0z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-6 py-2.5 rounded-full text-sm font-semibold border border-white/15">
                  <Zap className="w-4 h-4 text-accent" fill="currentColor" />
                  Gratis & Vrijblijvend
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              >
                Start Vandaag Nog
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10"
              >
                Ontvang binnen{" "}
                <span className="font-bold text-white">24 uur</span> een
                persoonlijke offerte. Ervaren vakmanschap, eerlijke prijzen.
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
              >
                <a
                  href="/contact"
                  className="group inline-flex items-center justify-center bg-accent text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-accent-600 transition-all shadow-xl shadow-accent/25 hover:shadow-2xl hover:shadow-accent/30 hover:-translate-y-0.5"
                >
                  Vraag Offerte Aan
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="tel:+31684794108"
                  className="group inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/20 hover:border-white/30 transition-all"
                >
                  <Phone className="mr-3 w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <div className="text-left">
                    <div className="text-xs text-white/60 font-normal -mb-0.5">
                      Of bel direct
                    </div>
                    <div>06 84794108</div>
                  </div>
                </a>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap justify-center gap-6 md:gap-10"
              >
                {[
                  "24 uur reactie gegarandeerd",
                  "Transparante vaste prijzen",
                  "15+ jaar ervaring",
                ].map((text) => (
                  <div
                    key={text}
                    className="flex items-center gap-2 text-white/70 text-sm"
                  >
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>{text}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
