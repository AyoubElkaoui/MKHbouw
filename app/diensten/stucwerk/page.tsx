"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, ArrowLeft, Phone, ArrowRight, Star } from "lucide-react";
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
        {/* Hero Section - Full Image with Gradient Overlay */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=2670&auto=format&fit=crop"
              alt="Professioneel stucwerk MKH Bouw"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-32">
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
                  Vakkundig Stucwerk
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
                Vakkundig{" "}
                <span className="relative">
                  <span className="relative z-10">Stucwerk</span>
                  <span className="absolute bottom-2 left-0 right-0 h-3 bg-accent/30 -z-0 rounded" />
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed max-w-3xl mx-auto">
                Van klassiek tot modern stucwerk door heel Nederland. Duurzame
                wandafwerking voor binnen en buiten, geschikt voor zakelijke en
                particuliere projecten.
              </p>
              <a
                href="tel:+31684794108"
                className="group inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-semibold hover:bg-accent-600 transition-all shadow-xl shadow-accent/25 hover:shadow-2xl hover:shadow-accent/30 hover:-translate-y-0.5"
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
                  <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
                    <span className="w-2 h-2 rounded-full bg-accent" />
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
                  <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    Voordelen
                  </span>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-4">
                    Waarom kiezen voor stucwerk?
                  </h2>
                  <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="group relative flex items-start gap-4 bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 overflow-hidden"
                    >
                      {/* Hover gradient top border */}
                      <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
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
                    Soorten
                  </span>
                  <h2 className="text-4xl font-extrabold text-gray-900 mt-3 mb-4">
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
                      className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-slate-100 hover:border-primary/20 relative overflow-hidden"
                    >
                      {/* Hover gradient top border */}
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
                    Werkwijze
                  </span>
                  <h2 className="text-4xl font-extrabold text-gray-900 mt-3 mb-4">
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

        {/* CTA - Full Gradient with Accent Buttons and Blur Decorative Elements */}
        <section className="relative py-24 overflow-hidden">
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
                  <Star size={14} className="fill-accent text-accent" />
                  Gratis & Vrijblijvend
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6"
              >
                Advies nodig over stucwerk?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed"
              >
                Vraag vandaag nog een{" "}
                <span className="text-white font-bold">
                  vrijblijvende offerte
                </span>{" "}
                aan en ontvang persoonlijk advies
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
                  <span>Vraag Offerte Aan</span>
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
