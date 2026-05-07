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
import Link from "next/link";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function OverOns() {
  return (
    <>
      <Navigation />
      <main className="bg-zinc-950">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1761986757577-140af8859587?q=80&w=2670&auto=format&fit=crop"
              alt="MKH Bouw team vakmanschap"
              fill
              className="object-cover opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/75 to-zinc-950/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent" />
          </div>

          <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <span className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-md text-primary-300 px-5 py-2.5 rounded-full text-sm font-medium border border-primary/20">
                  <Star size={14} className="fill-primary-400 text-primary-400" />
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
                <span className="text-primary-400">MKH Bouw</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg sm:text-xl text-zinc-300 mb-10 leading-relaxed max-w-2xl"
              >
                Uw betrouwbare totaalpartner voor afbouw en renovatie in Amsterdam en heel Nederland. Met vakmanschap en aandacht voor detail leveren wij kwaliteit die blijft.
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
                    className="flex items-center gap-2 bg-white/5 backdrop-blur-sm text-white px-4 py-2.5 rounded-xl border border-white/10 text-sm font-medium"
                  >
                    <usp.icon size={16} className="text-primary-400" />
                    {usp.text}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-white/[0.03] backdrop-blur-xl border-t border-white/5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
                {[
                  { number: "15+", label: "Jaar Ervaring" },
                  { number: "500+", label: "Projecten" },
                  { number: "10+", label: "Specialisaties" },
                  { number: "24u", label: "Reactietijd" },
                ].map((stat) => (
                  <div key={stat.label} className="py-5 px-6 text-center">
                    <div className="text-2xl md:text-3xl font-bold text-white">{stat.number}</div>
                    <div className="text-sm text-zinc-500 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 bg-zinc-900 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                <motion.div {...fadeUp}>
                  <span className="inline-flex items-center gap-2 bg-primary/10 text-primary-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 border border-primary/20">
                    Wie Zijn Wij
                  </span>
                  <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6 text-white">
                    Professioneel bouwbedrijf sinds{" "}
                    <span className="text-primary-400">2008</span>
                  </h2>
                  <p className="text-lg text-zinc-400 leading-relaxed mb-6">
                    MKH Bouw is een professioneel bouwbedrijf gevestigd in Amsterdam, gespecialiseerd in totale afbouw en renovatie. Met jarenlange ervaring leveren wij hoogwaardige bouwdiensten voor zowel particulieren als bedrijven door heel Nederland.
                  </p>
                  <p className="text-zinc-500 leading-relaxed mb-6">
                    Wat ons onderscheidt is onze persoonlijke aanpak en betrokkenheid bij elk project. Of het nu gaat om stucwerk, schilderwerk, tegelen, elektra of loodgieterswerk — wij behandelen elke opdracht met dezelfde zorgvuldigheid en aandacht voor detail.
                  </p>
                  <p className="text-zinc-500 leading-relaxed mb-8">
                    Eén aanspreekpunt voor alle disciplines. Geen gedoe met meerdere aannemers — MKH Bouw coördineert alles van A tot Z.
                  </p>

                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { number: "15+", label: "Jaar ervaring" },
                      { number: "500+", label: "Projecten" },
                      { number: "10+", label: "Specialisaties" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="bg-zinc-950/50 p-4 rounded-2xl text-center border border-white/5"
                      >
                        <div className="text-3xl font-bold text-primary-400 mb-1">{stat.number}</div>
                        <div className="text-sm text-zinc-500">{stat.label}</div>
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
                  <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
                  <div className="relative overflow-hidden rounded-3xl">
                    <Image
                      src="https://images.unsplash.com/photo-1761986757577-140af8859587?q=80&w=2670&auto=format&fit=crop"
                      alt="MKH Bouw vakmanschap"
                      width={600}
                      height={500}
                      className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 to-transparent" />
                    <div className="absolute bottom-8 left-8 text-white">
                      <p className="text-sm font-semibold mb-1 text-primary-400">Gevestigd in Amsterdam</p>
                      <p className="text-2xl font-bold">Actief door heel Nederland</p>
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
                  <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
                  <div className="relative overflow-hidden rounded-3xl">
                    <Image
                      src="https://images.unsplash.com/photo-1770838773417-08b18661c62f?q=80&w=2670&auto=format&fit=crop"
                      alt="MKH Bouw renovatie Amsterdam"
                      width={600}
                      height={500}
                      className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 to-transparent" />
                    <div className="absolute bottom-8 left-8 text-white">
                      <p className="text-sm font-semibold mb-1 text-primary-400">Onze missie</p>
                      <p className="text-2xl font-bold">Kwaliteit die blijft</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div {...fadeUp} className="order-1 lg:order-2">
                  <span className="inline-flex items-center gap-2 bg-primary/10 text-primary-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 border border-primary/20">
                    Onze Werkwijze
                  </span>
                  <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6 text-white">
                    Kwaliteit <span className="text-primary-400">Gegarandeerd</span>
                  </h2>
                  <p className="text-lg text-zinc-400 leading-relaxed mb-6">
                    Bij MKH Bouw werken we volgens een vaste werkwijze die garantie biedt voor een succesvol eindresultaat. We beginnen altijd met een vrijblijvend gesprek waarin we uw wensen in kaart brengen.
                  </p>
                  <p className="text-zinc-500 leading-relaxed mb-6">
                    Tijdens de uitvoering houden we u op de hoogte van de voortgang en zijn we altijd bereikbaar voor vragen. Wij werken netjes, houden de werkplek schoon en leveren binnen de afgesproken tijd op.
                  </p>
                  <p className="text-zinc-500 leading-relaxed mb-8">
                    Voor bedrijven bieden wij flexibele planning — ook buiten kantooruren, in het weekend of tijdens reguliere werkuren.
                  </p>
                  <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full border border-primary/20">
                    <CheckCircle className="text-primary-400" size={20} />
                    <span className="text-white font-semibold">Afspraak is afspraak</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-zinc-950 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <motion.div {...fadeUp} className="text-center mb-16">
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 border border-primary/20">
                  Onze Kracht
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-4">
                  Waarom kiezen voor MKH Bouw?
                </h2>
                <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                  Met meer dan 15 jaar ervaring weten wij wat er nodig is voor kwalitatief werk in Amsterdam en heel Nederland.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: Award,
                    title: "Jarenlange Ervaring",
                    desc: "Sinds 2008 hebben wij uitgebreide ervaring opgebouwd in diverse bouwprojecten door heel Nederland.",
                  },
                  {
                    icon: Shield,
                    title: "Betrouwbaar & Eerlijk",
                    desc: "Bij ons is afspraak afspraak. Transparante communicatie en eerlijke prijzen zonder verrassingen.",
                  },
                  {
                    icon: CheckCircle,
                    title: "Vakmanschap",
                    desc: "Ons team bestaat uit ervaren vakmensen die trots zijn op hun werk met hoogwaardige materialen.",
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
                    desc: "Onze klanten waarderen onze service en kwaliteit — meer dan 250 tevreden opdrachtgevers.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="group bg-zinc-900 p-8 rounded-3xl border border-white/5 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all hover:-translate-y-1 relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5 border border-primary/20 group-hover:bg-primary group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300">
                      <item.icon className="text-primary-400 group-hover:text-white transition-colors" size={26} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-zinc-500 leading-relaxed text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-24 bg-zinc-900 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div {...fadeUp} className="text-center mb-16">
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 border border-primary/20">
                  Onze Aanpak
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-4">
                  Hoe wij werken
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="group bg-zinc-950/50 p-8 rounded-3xl border border-white/5 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 border border-primary/20 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                    <Target className="text-primary-400 group-hover:text-white transition-colors" size={26} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Voor Particulieren</h3>
                  <p className="text-zinc-400 leading-relaxed mb-4">
                    Of het nu gaat om het opknappen van uw woning, stucwerk, schilderwerk of een complete renovatie — wij bieden persoonlijk advies en een heldere offerte. U weet van tevoren exact wat het gaat kosten.
                  </p>
                  <p className="text-zinc-500 leading-relaxed">
                    Wij werken netjes, ruimen dagelijks op en zorgen dat u zo min mogelijk last heeft van de werkzaamheden.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="group bg-zinc-950/50 p-8 rounded-3xl border border-white/5 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 border border-primary/20 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                    <TrendingUp className="text-primary-400 group-hover:text-white transition-colors" size={26} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Voor Bedrijven (B2B)</h3>
                  <p className="text-zinc-400 leading-relaxed mb-4">
                    Als zakelijke partner begrijpen wij het belang van continuiteit. Wij bieden onderhoudscontracten en kunnen werken buiten kantooruren om uw bedrijfsvoering niet te verstoren.
                  </p>
                  <p className="text-zinc-500 leading-relaxed">
                    Van kleine onderhoudswerkzaamheden tot complete renovaties van kantoorpanden, winkels of zorginstellingen.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-zinc-900" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/[0.02] rounded-full blur-3xl" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div {...fadeUp} className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-sm font-medium border border-white/20 mb-8">
                Gratis Offerte Op Maat
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Start Vandaag Nog
              </h2>
              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                Ontvang binnen <span className="font-bold text-white">24 uur</span> een persoonlijke offerte. Ervaren vakmanschap, eerlijke prijzen.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 bg-white text-primary-800 px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-50 transition-all shadow-xl shadow-black/20 hover:-translate-y-0.5"
                >
                  Vraag Offerte Aan
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:+31684794108"
                  className="group inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white border-2 border-white/25 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 hover:border-white/40 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors">
                    <Phone size={18} />
                  </div>
                  06 84794108
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-6">
                {["Binnen 24 uur reactie", "Geen verborgen kosten", "15+ jaar ervaring"].map((text) => (
                  <div key={text} className="flex items-center gap-2 text-white/80">
                    <CheckCircle size={16} className="text-primary-300" />
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
