"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";
import {
  CheckCircle,
  Shield,
  Users,
  Award,
  Clock,
  ThumbsUp,
  Target,
  TrendingUp,
  ArrowRight,
  Phone,
  Star,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const stagger = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function OverOns() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=2670&auto=format&fit=crop"
              alt="MKH Bouw team"
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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-sm font-medium border border-white/20">
                  <Star size={14} className="fill-accent text-accent" />
                  Kennismaken met MKH Bouw
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]"
              >
                Over{" "}
                <span className="relative">
                  <span className="relative z-10">MKH Bouw</span>
                  <span className="absolute bottom-2 left-0 right-0 h-3 bg-accent/30 -z-0 rounded" />
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg sm:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl"
              >
                Uw betrouwbare partner voor alle klussen in en om het huis in
                Amsterdam en heel Nederland. Met vakmanschap en aandacht voor
                detail leveren wij kwaliteit die blijft.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-3"
              >
                {[
                  { icon: Shield, text: "15+ jaar ervaring" },
                  { icon: Clock, text: "Binnen 24u reactie" },
                  { icon: Star, text: "B2B & B2C" },
                ].map((usp) => (
                  <div
                    key={usp.text}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2.5 rounded-xl border border-white/10 text-sm font-medium"
                  >
                    <usp.icon size={16} className="text-accent" />
                    {usp.text}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Stats bar */}
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

        {/* Story Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                <motion.div {...fadeUp}>
                  <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                    Wie Zijn Wij
                  </span>
                  <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6 text-gray-900">
                    Professioneel Klussenbedrijf sinds{" "}
                    <span className="text-primary">2008</span>
                  </h2>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    MKH Bouw is een professioneel klussenbedrijf gevestigd in
                    het hart van Amsterdam. Met jarenlange ervaring in de
                    bouwsector hebben wij ons gespecialiseerd in het leveren van
                    kwalitatieve kluswerken voor zowel particulieren als
                    bedrijven.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Wat ons onderscheidt is onze persoonlijke aanpak en
                    betrokkenheid bij elk project. Of het nu gaat om een klein
                    schilderklus of een complete renovatie van een bedrijfspand,
                    wij behandelen elke opdracht met dezelfde zorgvuldigheid en
                    aandacht voor detail.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Voor zakelijke klanten zijn wij een betrouwbare partner voor
                    onderhoudscontracten, facility services en grotere
                    renovatieprojecten. Wij werken graag buiten kantooruren om
                    uw bedrijfsvoering niet te verstoren.
                  </p>

                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { number: "15+", label: "Jaar ervaring" },
                      { number: "500+", label: "Projecten" },
                      { number: "100%", label: "Tevreden" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="bg-gradient-to-br from-primary/5 to-accent/5 p-4 rounded-2xl text-center border border-primary/10"
                      >
                        <div className="text-3xl font-bold text-primary mb-1">
                          {stat.number}
                        </div>
                        <div className="text-sm text-gray-600">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    <Image
                      src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=2670&auto=format&fit=crop"
                      alt="Professional construction team MKH Bouw Amsterdam"
                      width={600}
                      height={500}
                      className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                    <div className="absolute bottom-8 left-8 text-white">
                      <p className="text-sm font-semibold mb-1 text-accent">
                        Gevestigd in Amsterdam
                      </p>
                      <p className="text-2xl font-bold">
                        Actief door heel Nederland
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative group order-2 lg:order-1"
                >
                  <div className="absolute -inset-4 bg-gradient-to-r from-accent to-primary rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    <Image
                      src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2670&auto=format&fit=crop"
                      alt="Quality construction work Amsterdam"
                      width={600}
                      height={500}
                      className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                    <div className="absolute bottom-8 left-8 text-white">
                      <p className="text-sm font-semibold mb-1 text-accent">
                        Onze missie
                      </p>
                      <p className="text-2xl font-bold">Kwaliteit die blijft</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div {...fadeUp} className="order-1 lg:order-2">
                  <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                    Onze Werkwijze
                  </span>
                  <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6 text-gray-900">
                    Kwaliteit <span className="text-primary">Gegarandeerd</span>
                  </h2>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Bij MKH Bouw werken we volgens een vaste werkwijze die
                    garantie biedt voor een succesvol eindresultaat. We beginnen
                    altijd met een vrijblijvend gesprek waarin we uw wensen en
                    eisen in kaart brengen.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Tijdens de uitvoering houden we u op de hoogte van de
                    voortgang en zijn we altijd bereikbaar voor vragen of
                    aanpassingen. Wij werken netjes, houden de werkplek schoon
                    en zorgen ervoor dat het project binnen de afgesproken tijd
                    wordt opgeleverd.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Voor bedrijven bieden wij flexibele planning en kunnen we
                    werken volgens uw voorkeuren - 's avonds, in het weekend of
                    tijdens reguliere werkuren.
                  </p>
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 px-6 py-3 rounded-full border border-primary/20">
                    <CheckCircle className="text-accent" size={20} />
                    <span className="text-gray-800 font-semibold">
                      Afspraak is afspraak
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-gray-50 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <motion.div {...fadeUp} className="text-center mb-16">
                <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                  Onze Kracht
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-4">
                  Waarom kiezen voor MKH Bouw?
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Met meer dan 15 jaar ervaring weten wij wat er nodig is voor
                  kwalitatief werk in Amsterdam en heel Nederland.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Award,
                    title: "Jarenlange Ervaring",
                    desc: "Sinds 2008 hebben wij uitgebreide ervaring opgebouwd in diverse bouwprojecten door heel Amsterdam en Nederland.",
                  },
                  {
                    icon: Shield,
                    title: "Betrouwbaar & Eerlijk",
                    desc: "Bij ons is afspraak afspraak. We staan voor transparante communicatie en eerlijke prijzen zonder verrassingen.",
                  },
                  {
                    icon: CheckCircle,
                    title: "Vakmanschap",
                    desc: "Ons team bestaat uit ervaren vakmensen die hun vak verstaan en trots zijn op hun werk met hoogwaardige materialen.",
                  },
                  {
                    icon: Users,
                    title: "Persoonlijke Aanpak",
                    desc: "We denken actief met u mee en bieden advies op maat voor uw specifieke situatie en wensen.",
                  },
                  {
                    icon: Clock,
                    title: "Op Tijd Klaar",
                    desc: "We houden ons aan afspraken en zorgen dat uw project binnen de planning wordt opgeleverd.",
                  },
                  {
                    icon: ThumbsUp,
                    title: "Tevreden Klanten",
                    desc: "Onze klanten waarderen onze service en kwaliteit, wat resulteert in veel terugkerende klanten.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 relative overflow-hidden hover:-translate-y-1"
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-primary/25 transform group-hover:scale-110 transition-all">
                        <item.icon className="text-white" size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div {...fadeUp} className="text-center mb-16">
                <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                  Onze Aanpak
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-4">
                  Hoe wij werken
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="group bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-3xl border border-primary/10 hover:shadow-xl transition-all"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <Target className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Voor Particulieren
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Of het nu gaat om het opknappen van uw woning, schilderwerk
                    of stucwerk - wij bieden persoonlijk advies en een heldere
                    offerte. U weet van tevoren exact wat het gaat kosten.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Wij werken netjes, ruimen dagelijks op en zorgen dat u zo
                    min mogelijk last heeft van de werkzaamheden.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="group bg-gradient-to-br from-accent/5 to-primary/5 p-8 rounded-3xl border border-accent/10 hover:shadow-xl transition-all"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <TrendingUp className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Voor Bedrijven (B2B)
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Als zakelijke partner begrijpen wij het belang van
                    continuiteit. Wij bieden onderhoudscontracten, facility
                    services en kunnen werken volgens uw planning.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Van kleine onderhoudswerkzaamheden tot complete renovaties
                    van kantoorpanden, winkels of zorginstellingen.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary/90" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div {...fadeUp} className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-sm font-medium border border-white/20 mb-8">
                Gratis Offerte Op Maat
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Start Vandaag Nog
              </h2>
              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                Ontvang binnen{" "}
                <span className="font-bold text-accent">24 uur</span> een
                persoonlijke offerte. Ervaren vakmanschap, eerlijke prijzen.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <a
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4.5 rounded-xl font-bold text-lg hover:bg-accent-600 transition-all shadow-xl shadow-accent/25 hover:shadow-2xl hover:shadow-accent/30 hover:-translate-y-0.5"
                >
                  Vraag Offerte Aan
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
      </main>
      <Footer />
    </>
  );
}
