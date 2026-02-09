"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, ArrowLeft, Phone, ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function SpackspuitenPage() {
  const benefits = [
    "Snelle en efficiënte toepassing met moderne apparatuur",
    "Glad en uniform oppervlak zonder oneffenheden",
    "Geschikt voor grote oppervlakten in korte tijd",
    "Ideaal voor nieuwbouw en renovatieprojecten",
    "Professionele afwerking direct sausklaar",
    "Kosteneffectieve oplossing voor zakelijke opdrachten",
  ];

  const applications = [
    "Wanden en plafonds in nieuwbouwprojecten",
    "Renovaties van woningen en appartementen",
    "Kantoorpanden en bedrijfsruimtes",
    "Particuliere woningen en villa's",
    "Scholen en zorginstellingen",
    "Winkelruimtes en showrooms",
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2670&auto=format&fit=crop"
              alt="Professioneel spackspuiten MKH Bouw"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
          </div>
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32">
            <div className="max-w-3xl">
              {/* Back link */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link
                  href="/diensten"
                  className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-6 font-medium"
                >
                  <ArrowLeft className="w-4 h-4" /> Terug naar diensten
                </Link>
              </motion.div>

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="mb-6"
              >
                <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-sm font-medium border border-white/20">
                  <Star size={14} className="fill-accent text-accent" />{" "}
                  Specialist in Wandafwerking
                </span>
              </motion.div>

              {/* Title with accent underline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]"
              >
                Professioneel{" "}
                <span className="relative">
                  <span className="relative z-10">Spackspuiten</span>
                  <span className="absolute bottom-2 left-0 right-0 h-3 bg-accent/30 -z-0 rounded" />
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg sm:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl"
              >
                Snelle, efficiënte wandafwerking voor nieuwbouw en renovatie
                door heel Nederland. Ideaal voor zakelijke en particuliere
                projecten.
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="#contact-cta"
                  className="group inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-accent-600 transition-all shadow-xl shadow-accent/25"
                >
                  Gratis Offerte{" "}
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
                <a
                  href="tel:+31684794108"
                  className="group inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white border-2 border-white/25 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 hover:border-white/40 transition-all"
                >
                  <Phone size={18} /> 06 84794108
                </a>
              </motion.div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="absolute bottom-0 left-0 right-0 z-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-t-2xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6"
              >
                {[
                  { value: "500+", label: "Projecten voltooid" },
                  { value: "15+", label: "Jaar ervaring" },
                  { value: "100%", label: "Klanttevredenheid" },
                  { value: "24u", label: "Reactietijd" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-accent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/70">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
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
                    Wat is spackspuiten?
                  </span>
                  <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6 text-gray-900">
                    Moderne{" "}
                    <span className="relative">
                      <span className="relative z-10">wandafwerking</span>
                      <span className="absolute bottom-1 left-0 right-0 h-3 bg-accent/20 -z-0 rounded" />
                    </span>{" "}
                    technieken
                  </h2>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Spackspuiten, ook wel spuitpleisteren genoemd, is een
                    moderne techniek voor het afwerken van wanden en plafonds.
                    Met gespecialiseerde apparatuur wordt een fijne spuitlaag
                    aangebracht die zorgt voor een perfect glad en uniform
                    oppervlak.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Deze techniek is bijzonder geschikt voor grote oppervlakten
                    en levert een professioneel resultaat op in korte tijd. MKH
                    Bouw heeft ruime ervaring met spackspuiten in zowel
                    nieuwbouw als renovatieprojecten door heel Nederland. Wij
                    werken met hoogwaardige materialen voor een duurzaam
                    resultaat.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Voor zakelijke opdrachtgevers bieden wij ook contractuele
                    afspraken voor onderhoudswerkzaamheden en projectmatige
                    opdrachten. Gevestigd in Amsterdam, actief landelijk. Wij
                    werken volgens vaste afspraken en binnen budget, ideaal voor
                    bouwprojecten met strakke planning.
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
                      src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=2670&auto=format&fit=crop"
                      alt="Professioneel spackspuiten MKH Bouw Amsterdam"
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
                    Voordelen
                  </span>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-4">
                    Waarom kiezen voor{" "}
                    <span className="relative">
                      <span className="relative z-10">spackspuiten</span>
                      <span className="absolute bottom-1 left-0 right-0 h-3 bg-accent/20 -z-0 rounded" />
                    </span>
                    ?
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="group relative flex items-start gap-4 bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-2xl border border-primary/10 hover:shadow-xl transition-all transform hover:-translate-y-1 overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                      <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <span className="text-gray-700 leading-relaxed">
                        {benefit}
                      </span>
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
                className="mb-24"
              >
                <div className="text-center mb-12">
                  <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                    Toepassingen
                  </span>
                  <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                    Toepassingsmogelijkheden
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Spackspuiten is geschikt voor uiteenlopende projecten
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {applications.map((app, index) => (
                    <div
                      key={index}
                      className="group relative bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-2xl border border-primary/10 hover:shadow-xl transition-all overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                      <div className="relative z-10 flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1 transition-colors" />
                        <p className="text-gray-700 font-medium transition-colors">
                          {app}
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
                  <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                    Werkwijze
                  </span>
                  <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                    Ons werkproces
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Van intake tot oplevering, gestructureerd en professioneel
                  </p>
                </div>
                <div className="grid md:grid-cols-4 gap-8">
                  {[
                    {
                      step: "1",
                      title: "Intake",
                      desc: "Vrijblijvend gesprek over uw wensen",
                    },
                    {
                      step: "2",
                      title: "Offerte",
                      desc: "Duidelijke prijsopgave zonder verrassingen",
                    },
                    {
                      step: "3",
                      title: "Planning",
                      desc: "Afspraken die bij u passen",
                    },
                    {
                      step: "4",
                      title: "Uitvoering",
                      desc: "Vakkundig en netjes uitgevoerd",
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

        {/* CTA */}
        <section id="contact-cta" className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary/90" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Interesse in professioneel spackspuiten?
              </h2>
              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                Vraag vandaag nog een vrijblijvende offerte aan op maat
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4.5 rounded-xl font-bold text-lg hover:bg-accent-600 transition-all shadow-xl shadow-accent/25 hover:shadow-2xl hover:shadow-accent/30 hover:-translate-y-0.5"
                >
                  Vraag Offerte Aan{" "}
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <a
                  href="tel:+31684794108"
                  className="group inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white border-2 border-white/25 px-8 py-4.5 rounded-xl font-bold text-lg hover:bg-white/20 hover:border-white/40 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center">
                    <Phone size={18} />
                  </div>
                  06 84794108
                </a>
              </div>
              <div className="flex flex-wrap justify-center gap-6">
                {[
                  "Binnen 24 uur reactie",
                  "Geen verborgen kosten",
                  "15+ jaar ervaring",
                ].map((text) => (
                  <div
                    key={text}
                    className="flex items-center gap-2 text-white/80"
                  >
                    <CheckCircle size={16} className="text-accent" />
                    <span className="text-sm font-medium">{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
