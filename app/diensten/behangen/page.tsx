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

export default function BehangenPage() {
  const benefits = [
    "Vakkundig behangwerk zonder luchtbellen en perfect naadaansluiting",
    "Groot assortiment behangsoorten van klassiek tot modern",
    "Professioneel advies over patronen en kleuren",
    "Verwijdering van oud behang inclusief voorbehandeling",
    "Vliesbehang, vinyl, textiel en fotobehang",
    "Ook voor zakelijke ruimtes zoals kantoren en hotels",
  ];

  const types = [
    {
      title: "Vliesbehang",
      desc: "Modern en gemakkelijk aan te brengen, ideaal voor wanden met perfecte afwerking",
    },
    {
      title: "Vinyl behang",
      desc: "Wasbaar en duurzaam, perfect voor keukens en badkamers met vochtbestendigheid",
    },
    {
      title: "Textiel behang",
      desc: "Luxe uitstraling met verfijnde textuur en karakter voor exclusieve interieurs",
    },
    {
      title: "Fotobehang",
      desc: "Persoonlijke touch met eigen afbeeldingen of designs voor unieke wanden",
    },
  ];

  const applications = [
    "Woonkamers en slaapkamers",
    "Kantoorruimtes en vergaderruimten",
    "Hotelkamers en lobbies",
    "Winkels en showrooms",
    "Restaurants en cafés",
    "Kinderkamers en speelruimtes",
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white">
        {/* Hero Section - Full image with gradient overlay */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2669&auto=format&fit=crop"
              alt="Professioneel behangwerk MKH Bouw"
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

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl pt-32 lg:pt-40 pb-20 lg:pb-32">
              {/* Back link */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <Link
                  href="/diensten"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors font-semibold text-sm"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Terug naar diensten
                </Link>
              </motion.div>

              {/* Glasmorphism Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-8"
              >
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
              </motion.div>

              {/* Title with accent underline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]"
              >
                Professioneel{" "}
                <span className="relative">
                  <span className="relative z-10">Behangen</span>
                  <span className="absolute bottom-2 left-0 right-0 h-3 bg-accent/30 -z-0 rounded" />
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg sm:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl"
              >
                Transformeer uw ruimte met vakkundig aangebracht behang door
                heel Nederland. Van klassiek tot modern, voor woning en bedrijf.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="#contact-cta"
                  className="group inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4.5 rounded-xl font-bold text-lg hover:bg-accent-600 transition-all shadow-xl shadow-accent/25 hover:shadow-2xl hover:shadow-accent/30 hover:-translate-y-0.5"
                >
                  Gratis Offerte Aanvragen
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
                <a
                  href="tel:+31684794108"
                  className="group inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white border-2 border-white/25 px-8 py-4.5 rounded-xl font-bold text-lg hover:bg-white/20 hover:border-white/40 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors">
                    <Phone size={18} />
                  </div>
                  06 84794108
                </a>
              </motion.div>
            </div>
          </div>

          {/* Stats bar at bottom */}
          <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-xl border-t border-white/10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
                {[
                  { number: "15+", label: "Jaar Ervaring" },
                  { number: "500+", label: "Projecten" },
                  { number: "100%", label: "Klanttevredenheid" },
                  { number: "24u", label: "Reactietijd" },
                ].map((stat) => (
                  <div key={stat.label} className="py-5 px-6 text-center">
                    <div className="text-2xl md:text-3xl font-bold text-white">
                      {stat.number}
                    </div>
                    <div className="text-sm text-white/60 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
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
                  <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    Vakkundig behangwerk
                  </span>
                  <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6 text-gray-900">
                    Perfecte afwerking voor elke ruimte
                  </h2>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Behang is terug van weggeweest en populairder dan ooit. Met
                    modern behang creëert u eenvoudig een nieuwe sfeer in uw
                    woning of bedrijfspand. MKH Bouw is gespecialiseerd in het
                    aanbrengen van alle soorten behang met jarenlange ervaring.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Wij zorgen voor een strakke afwerking zonder luchtbellen,
                    met perfect op elkaar aansluitende patronen. Ook verwijderen
                    wij vakkundig oud behang en maken wij de wand gereed voor
                    nieuw behang. Van voorbereiding tot eindresultaat, alles uit
                    één hand.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Voor zakelijke opdrachtgevers voeren wij behangwerk uit in
                    kantoren, hotels, winkels en horecagelegenheden door heel
                    Nederland. Gevestigd in Amsterdam, actief landelijk. Wij
                    werken efficiënt en netjes, met minimale overlast voor uw
                    bedrijfsvoering.
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
                      src="https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=2670&auto=format&fit=crop"
                      alt="Professioneel behangwerk MKH Bouw Amsterdam"
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
                  <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    Voordelen
                  </span>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-4">
                    Waarom kiezen voor MKH Bouw?
                  </h2>
                  <div className="w-24 h-1 bg-accent mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-2xl border border-primary/10 hover:shadow-xl transition-all transform hover:-translate-y-1"
                    >
                      <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
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
                  <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    Behangsoorten
                  </span>
                  <h2 className="text-4xl font-extrabold text-gray-900 mt-3 mb-4">
                    Voor elke ruimte en stijl het juiste behang
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Wij werken met alle behangsoorten voor een perfect resultaat
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  {types.map((type, index) => (
                    <div
                      key={index}
                      className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-slate-100 hover:border-accent/30 relative overflow-hidden"
                    >
                      {/* Subtle top border accent */}
                      <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 transition-colors">
                          {type.title}
                        </h3>
                        <p className="text-gray-600 transition-colors leading-relaxed">
                          {type.desc}
                        </p>
                      </div>
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
                  <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    Toepassingen
                  </span>
                  <h2 className="text-4xl font-extrabold text-gray-900 mt-3 mb-4">
                    Behang voor elke ruimte en bestemming
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Van woonkamer tot kantoor, wij behangen het allemaal
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {applications.map((app, index) => (
                    <div
                      key={index}
                      className="group bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-2xl border border-primary/10 hover:shadow-xl transition-all transform hover:-translate-y-1 relative overflow-hidden"
                    >
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
                  <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    Werkproces
                  </span>
                  <h2 className="text-4xl font-extrabold text-gray-900 mt-3 mb-4">
                    Ons werkproces
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Van advies tot perfecte afwerking
                  </p>
                </div>
                <div className="grid md:grid-cols-4 gap-8">
                  {[
                    {
                      step: "1",
                      title: "Advies",
                      desc: "Keuzehulp voor behangsoort en patroon",
                    },
                    {
                      step: "2",
                      title: "Voorbereiding",
                      desc: "Verwijderen oud behang en egaliseren",
                    },
                    {
                      step: "3",
                      title: "Aanbrengen",
                      desc: "Vakkundig plakken zonder luchtbellen",
                    },
                    {
                      step: "4",
                      title: "Afwerking",
                      desc: "Nauwkeurige afwerking van hoeken en randen",
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

        {/* CTA - Gradient primary bg with accent buttons */}
        <section id="contact-cta" className="relative py-24 overflow-hidden">
          {/* Full background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-700 to-primary-900" />

          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
          <div className="absolute top-20 right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
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
                Nieuwe uitstraling met behang?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10"
              >
                Vraag vandaag nog een{" "}
                <span className="font-bold text-white">
                  vrijblijvende offerte
                </span>{" "}
                aan en ontvang advies op maat
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center bg-accent text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-accent-600 transition-all shadow-xl shadow-accent/25 hover:shadow-2xl hover:shadow-accent/30 hover:-translate-y-0.5"
                >
                  Vraag Offerte Aan
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

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
                  "Binnen 24 uur reactie",
                  "Geen verborgen kosten",
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
