"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Clock,
  Award,
  ArrowRight,
  Shield,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true },
};

export default function StucwerkAmsterdam() {
  return (
    <>
      <Navigation />
      <main>
        {/* Premium Hero Section */}
        <section className="relative min-h-[55vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1534351590666-13e3e96b5571?q=80&w=2670&auto=format&fit=crop"
              alt="Stucwerk Amsterdam grachten"
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
              {/* Glasmorphism Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-sm font-medium border border-white/20">
                  <MapPin size={14} className="text-accent" />
                  stucwerk amsterdam
                  <span className="flex items-center gap-1 ml-1">
                    <Star size={12} className="fill-accent text-accent" />
                    <Star size={12} className="fill-accent text-accent" />
                    <Star size={12} className="fill-accent text-accent" />
                    <Star size={12} className="fill-accent text-accent" />
                    <Star size={12} className="fill-accent text-accent" />
                  </span>
                </span>
              </motion.div>

              {/* Animated Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]"
              >
                professioneel{" "}
                <span className="relative">
                  <span className="relative z-10">stucwerk</span>
                  <span className="absolute bottom-2 left-0 right-0 h-3 bg-accent/30 -z-0 rounded" />
                </span>{" "}
                in amsterdam
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg sm:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl"
              >
                zoek je een betrouwbare stucadoor in Amsterdam? mkhbouw levert
                al 15+ jaar vakkundig stucwerk, spackspuiten en sierpleister in
                heel Amsterdam en omstreken. offerte binnen 24 uur gegarandeerd.
              </motion.p>

              {/* USP Pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-3 mb-10"
              >
                {[
                  { icon: Shield, text: "15+ jaar ervaring" },
                  { icon: Star, text: "250+ klanten in Amsterdam" },
                  { icon: Clock, text: "Offerte binnen 24u" },
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

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="tel:+31684794108"
                  className="group inline-flex items-center justify-center gap-3 bg-accent text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-accent-600 transition-all shadow-xl shadow-accent/25 hover:shadow-2xl hover:shadow-accent/30 hover:-translate-y-0.5"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors">
                    <Phone size={18} />
                  </div>
                  bel direct: 06 84794108
                </a>
                <a
                  href="#offerte"
                  className="group inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white/25 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 hover:border-white/40 transition-all"
                >
                  gratis offerte aanvragen
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Wat we doen - Amsterdam specifiek */}
        <motion.section {...fadeInUp} className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                  onze diensten
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  stucwerk diensten in amsterdam
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {[
                  {
                    title: "spackspuiten",
                    desc: "professioneel spackspuiten voor plafonds en wanden in Amsterdam. perfect egaal oppervlak, direct sausklaar.",
                    link: "/diensten/spackspuiten",
                  },
                  {
                    title: "traditioneel stucwerk",
                    desc: "vakkundig handmatig stucwerk voor nieuwbouw en renovatie in Amsterdam. sausklaar of behangklaar opgeleverd.",
                    link: "/diensten/stucwerk",
                  },
                  {
                    title: "sierpleister",
                    desc: "decoratieve sierpleister in diverse structuren en kleuren. unieke uitstraling voor uw woning of bedrijf in Amsterdam.",
                    link: "/diensten/sierpleister",
                  },
                ].map((service, i) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <CheckCircle className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-5">{service.desc}</p>
                    <Link
                      href={service.link}
                      className="inline-flex items-center gap-1 text-accent font-semibold hover:gap-2 transition-all"
                    >
                      meer info <ArrowRight size={16} />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Stadsdelen */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-primary/5 to-accent/5 p-10 rounded-2xl border border-primary/10"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  actief in heel amsterdam
                </h3>
                <p className="text-center text-gray-700 mb-8">
                  wij werken in alle stadsdelen van Amsterdam en directe
                  omgeving:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  {[
                    "amsterdam centrum",
                    "amsterdam noord",
                    "amsterdam west",
                    "amsterdam oost",
                    "amsterdam zuid",
                    "amsterdam zuidoost",
                    "nieuw-west",
                    "amstelveen",
                  ].map((area, i) => (
                    <motion.div
                      key={area}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className="bg-white p-4 rounded-xl border border-gray-100 hover:border-accent/30 hover:shadow-md transition-all"
                    >
                      <MapPin className="text-accent mx-auto mb-1" size={18} />
                      <span className="text-sm font-medium text-gray-800">
                        {area}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Waarom ons - Amsterdam focus */}
        <motion.section
          {...fadeInUp}
          className="py-20 bg-gradient-to-br from-gray-50 to-white"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                  waarom mkhbouw
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  waarom mkhbouw voor stucwerk in amsterdam?
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Award,
                    title: "lokale kennis amsterdam",
                    desc: "gevestigd in Amsterdam, kennen wij de stad door en door. van monumentale grachtenpanden tot moderne nieuwbouw in Noord - wij hebben overal ervaring mee.",
                  },
                  {
                    icon: Clock,
                    title: "snel ter plaatse",
                    desc: "omdat wij lokaal gevestigd zijn, kunnen wij snel bij u ter plaatse komen voor een offerte of om aan de slag te gaan. geen lange wachttijden.",
                  },
                  {
                    icon: CheckCircle,
                    title: "ervaring met amsterdamse panden",
                    desc: "van oude grachtenpanden tot moderne appartementen - wij kennen de uitdagingen van bouwen in Amsterdam. geen verrassing is te groot.",
                  },
                  {
                    icon: Phone,
                    title: "persoonlijk contact",
                    desc: "geen callcenters, maar direct contact met de vakman. heldere communicatie en transparante prijsafspraken.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex gap-5 bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg hover:border-accent/20 transition-all"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-600 rounded-xl flex items-center justify-center">
                        <item.icon className="text-white" size={24} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Prijsindicatie */}
        <motion.section {...fadeInUp} className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                  prijzen
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  wat kost stucwerk in amsterdam?
                </h2>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-10 rounded-2xl border border-primary/10">
                <p className="text-lg text-gray-700 mb-8">
                  de prijs van stucwerk in Amsterdam hangt af van verschillende
                  factoren zoals het type werk, de grootte van het project en de
                  staat van de ondergrond.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-10">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-accent/20 transition-all"
                  >
                    <h3 className="font-bold text-gray-900 mb-3">
                      spackspuiten
                    </h3>
                    <p className="text-3xl font-bold text-accent mb-2">
                      vanaf &euro;8,- per m&sup2;
                    </p>
                    <p className="text-sm text-gray-600">
                      plafond of wanden, exclusief voorbereiding
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-accent/20 transition-all"
                  >
                    <h3 className="font-bold text-gray-900 mb-3">
                      traditioneel stucwerk
                    </h3>
                    <p className="text-3xl font-bold text-accent mb-2">
                      vanaf &euro;15,- per m&sup2;
                    </p>
                    <p className="text-sm text-gray-600">
                      handmatig aangebracht, sausklaar
                    </p>
                  </motion.div>
                </div>

                <div className="bg-accent/10 p-6 rounded-xl border border-accent/20">
                  <p className="text-gray-800 font-semibold mb-2">
                    wilt u weten wat het voor uw project kost?
                  </p>
                  <p className="text-gray-700">
                    vraag een vrijblijvende offerte aan. wij komen langs in
                    Amsterdam voor een gratis opname en geven u binnen 24 uur
                    een scherpe prijsopgave.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Recent werk in Amsterdam */}
        <motion.section
          {...fadeInUp}
          className="py-20 bg-gradient-to-br from-gray-50 to-white"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                  ons werk
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  recent stucwerk projecten in amsterdam
                </h2>
                <p className="text-gray-600">
                  voorbeelden van ons werk in Amsterdam en omstreken
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    src: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=2670&auto=format&fit=crop",
                    alt: "stucwerk project amsterdam",
                    title: "grachtenpand amsterdam centrum",
                    desc: "complete stucwerk renovatie van monumentaal pand",
                  },
                  {
                    src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2670&auto=format&fit=crop",
                    alt: "spackspuiten amsterdam",
                    title: "nieuwbouw amsterdam noord",
                    desc: "spackspuiten 15 appartementen, nieuwbouwproject",
                  },
                  {
                    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop",
                    alt: "sierpleister amsterdam",
                    title: "woonhuis amsterdam zuid",
                    desc: "sierpleister in woonkamer en hal, luxe afwerking",
                  },
                ].map((project, i) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={project.src}
                        alt={project.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-gray-900 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{project.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* FAQ Amsterdam specifiek */}
        <motion.section {...fadeInUp} className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                  veelgestelde vragen
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  veelgestelde vragen over stucwerk in amsterdam
                </h2>
              </div>

              <div className="space-y-4">
                {[
                  {
                    q: "hoe snel kunnen jullie beginnen in amsterdam?",
                    a: "omdat wij lokaal gevestigd zijn in Amsterdam, kunnen wij vaak binnen 1-2 weken starten. voor spoedklussen kunnen wij soms nog sneller beginnen. bel ons voor beschikbaarheid.",
                  },
                  {
                    q: "werken jullie ook aan monumentale panden in amsterdam?",
                    a: "ja, wij hebben veel ervaring met monumentale grachtenpanden in Amsterdam. wij werken volgens de richtlijnen en eisen die gelden voor monumenten en werken nauw samen met monumentenzorg.",
                  },
                  {
                    q: "wat zijn de parkeerkosten bij een klus in amsterdam?",
                    a: "wij werken dit vooraf met u af. vaak is het mogelijk om een tijdelijke parkeervergunning aan te vragen. de kosten hiervan worden transparant in de offerte vermeld.",
                  },
                  {
                    q: "hoelang duurt een gemiddelde stucklus in amsterdam?",
                    a: "dit hangt af van de grootte van het project. een gemiddelde woning (3 kamers) is meestal binnen 3-5 werkdagen klaar. grotere projecten of complete renovaties duren uiteraard langer.",
                  },
                  {
                    q: "leveren jullie ook materialen voor stucwerk in amsterdam?",
                    a: "ja, wij verzorgen alle materialen. wij werken met hoogwaardige A-merken en bestellen alles vers voor uw project. dit is inclusief in onze prijzen.",
                  },
                ].map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-100 hover:border-accent/20 hover:shadow-md transition-all"
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {faq.q}
                    </h3>
                    <p className="text-gray-600">{faq.a}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Premium CTA */}
        <section id="offerte" className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-800" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center text-white"
            >
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm font-medium border border-white/20 mb-8">
                <Star size={14} className="fill-accent text-accent" />
                offerte aanvragen
              </span>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                vraag vandaag nog een offerte aan
              </h2>
              <p className="text-xl mb-10 text-white/80 max-w-2xl mx-auto">
                gratis opname in Amsterdam binnen 48 uur. offerte binnen 24 uur
                na opname.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <a
                  href="tel:+31684794108"
                  className="group inline-flex items-center justify-center gap-3 bg-accent text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-accent-600 transition-all shadow-xl shadow-accent/25 hover:shadow-2xl hover:-translate-y-0.5"
                >
                  <Phone size={22} />
                  06 84794108
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white/25 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 hover:border-white/40 transition-all"
                >
                  <Mail size={22} />
                  stuur een bericht
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-8 text-sm">
                {[
                  "gratis offerte",
                  "15+ jaar ervaring",
                  "lokaal in Amsterdam",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-white/80"
                  >
                    <CheckCircle size={18} className="text-accent" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Schema.org data voor lokale SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "stucwerk",
              provider: {
                "@type": "LocalBusiness",
                name: "mkhbouw",
                telephone: "+31684794108",
                email: "info@mkhbouw.nl",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Amsterdam",
                  addressCountry: "NL",
                },
              },
              areaServed: {
                "@type": "City",
                name: "Amsterdam",
              },
              offers: {
                "@type": "Offer",
                priceSpecification: {
                  "@type": "PriceSpecification",
                  price: "8.00",
                  priceCurrency: "EUR",
                  unitText: "per vierkante meter",
                },
              },
            }),
          }}
        />
      </main>
      <Footer />
    </>
  );
}
