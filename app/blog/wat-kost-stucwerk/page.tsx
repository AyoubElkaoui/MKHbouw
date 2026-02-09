"use client";

import { motion } from "framer-motion";
import {
  Star,
  ArrowRight,
  CheckCircle,
  Calculator,
  TrendingUp,
  AlertCircle,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function WatKostStucwerk() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=2670&auto=format&fit=crop"
              alt="Stucwerk kosten en prijzen"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
          </div>
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
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
                  prijsgids 2026
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]"
              >
                wat kost stucwerk{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">in 2026?</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-accent/30 rounded-full" />
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed max-w-2xl"
              >
                ben je van plan om stucwerk te laten doen en wil je weten wat de
                kosten zijn? de prijs van stucwerk hangt af van verschillende
                factoren. in deze gids leggen we uit wat de prijs beinvloedt en
                waarom maatwerk zo belangrijk is.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30"
                >
                  <Phone size={18} />
                  vraag vrijblijvende offerte aan
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Belangrijk om te weten */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                {...fadeUp}
                className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl border border-primary/10"
              >
                <p className="text-gray-800 font-semibold mb-2 text-lg">
                  belangrijk om te weten
                </p>
                <p className="text-gray-700 mb-4">
                  elke stucwerkklus is uniek. de prijs hangt af van het type
                  stucwerk, oppervlakte, staat van de ondergrond, locatie en
                  gewenste afwerking. daarom werken wij alleen met
                  projectgebonden offertes.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-full font-semibold hover:bg-accent/90 transition-colors shadow-lg shadow-accent/25"
                >
                  <Phone size={18} />
                  vraag vrijblijvende offerte aan
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Types stucwerk */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div {...fadeUp} className="text-center mb-16">
                <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-5 py-2.5 rounded-full text-sm font-medium mb-4">
                  <Star size={14} className="fill-accent text-accent" />
                  soorten stucwerk
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  welke soorten stucwerk zijn er?
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {/* Spackspuiten */}
                <motion.div
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl hover:border-accent/30 transition-all group"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    spackspuiten
                  </h3>
                  <p className="text-gray-600 mb-6">
                    moderne techniek waarbij stucwerk machinaal wordt
                    aangebracht. ideaal voor grotere oppervlakken.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        className="text-accent flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-700">
                        perfect egaal oppervlak
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        className="text-accent flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-700">snellere uitvoering</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        className="text-accent flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-700">
                        geschikt voor grote oppervlakken
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        className="text-accent flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-700">direct sausklaar</span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-600 mb-4">
                    ideaal voor: nieuwbouw, grote ruimtes, plafonds
                  </p>
                  <Link
                    href="/diensten/spackspuiten"
                    className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
                  >
                    meer over spackspuiten <ArrowRight size={18} />
                  </Link>
                </motion.div>

                {/* Traditioneel stucwerk */}
                <motion.div
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl hover:border-accent/30 transition-all group"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    traditioneel stucwerk
                  </h3>
                  <p className="text-gray-600 mb-6">
                    vakmanschap waarbij stuc met de hand wordt aangebracht.
                    perfect voor renovatie en maatwerk.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        className="text-accent flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-700">
                        ambachtelijk vakwerk
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        className="text-accent flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-700">
                        saus- of behangklaar
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        className="text-accent flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-700">duurzaam resultaat</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        className="text-accent flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-700">
                        geschikt voor renovatie
                      </span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-600 mb-4">
                    ideaal voor: renovatie, oudere woningen, kleinere ruimtes
                  </p>
                  <Link
                    href="/diensten/stucwerk"
                    className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
                  >
                    meer over traditioneel stucwerk <ArrowRight size={18} />
                  </Link>
                </motion.div>

                {/* Sierpleister */}
                <motion.div
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl hover:border-accent/30 transition-all group"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    sierpleister
                  </h3>
                  <p className="text-gray-600 mb-6">
                    decoratieve afwerking met unieke structuren en texturen.
                    voor een luxe uitstraling.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        className="text-accent flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-700">
                        decoratieve afwerking
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        className="text-accent flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-700">unieke structuren</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        className="text-accent flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-700">
                        verschillende afwerkingen mogelijk
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        className="text-accent flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-700">luxe uitstraling</span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-600 mb-4">
                    ideaal voor: accent muren, woonkamers, ontvangsthallen
                  </p>
                  <Link
                    href="/diensten/sierpleister"
                    className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
                  >
                    bekijk sierpleister <ArrowRight size={18} />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Factoren die prijs beinvloeden */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div {...fadeUp} className="text-center mb-16">
                <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-5 py-2.5 rounded-full text-sm font-medium mb-4">
                  <Star size={14} className="fill-accent text-accent" />
                  prijsfactoren
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  welke factoren bepalen de prijs?
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-primary/10"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <TrendingUp className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        oppervlakte
                      </h3>
                      <p className="text-gray-700 mb-2">
                        hoe groter het oppervlak, hoe lager de prijs per m2
                        meestal uitvalt. bij grotere projecten kunnen we
                        schaalvoordelen doorberekenen.
                      </p>
                      <p className="text-sm text-gray-600">
                        tip: combineer meerdere ruimtes in een project voor het
                        beste tarief
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-primary/10"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <AlertCircle className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        staat van de ondergrond
                      </h3>
                      <p className="text-gray-700 mb-2">
                        een slechte, ongelijke of beschadigde ondergrond vraagt
                        meer voorbereidend werk. scheuren moeten gerepareerd
                        worden en het oppervlak moet vlak zijn.
                      </p>
                      <p className="text-sm text-gray-600">
                        bij een bezichtiging beoordelen we de staat en geven we
                        advies
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-primary/10"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <CheckCircle className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        type ruimte en hoogte
                      </h3>
                      <p className="text-gray-700 mb-4">
                        de moeilijkheidsgraad verschilt per ruimte. plafonds,
                        trappenhuizen en hoge ruimten vragen meer tijd en
                        materieel.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>&#8226; wanden: standaard</li>
                        <li>&#8226; plafonds: meer tijd nodig</li>
                        <li>&#8226; trappenhuizen: complex</li>
                        <li>&#8226; hoge ruimten: extra materieel vereist</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-primary/10"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Calculator className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        gewenste afwerking
                      </h3>
                      <p className="text-gray-700 mb-4">
                        de kwaliteit van de afwerking bepaalt ook de prijs.
                        hogere kwaliteit vraagt meer tijd en vakmanschap.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>&#8226; standaard sausklaar</li>
                        <li>&#8226; extra glad afgewerkt</li>
                        <li>&#8226; hoogste kwaliteit afwerking</li>
                        <li>&#8226; sierpleister met structuur</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Extra werkzaamheden */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div {...fadeUp} className="text-center mb-16">
                <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-5 py-2.5 rounded-full text-sm font-medium mb-4">
                  <Star size={14} className="fill-accent text-accent" />
                  extra services
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  mogelijke extra werkzaamheden
                </h2>
              </motion.div>

              <motion.div
                {...fadeUp}
                className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl border border-primary/10"
              >
                <p className="text-gray-700 mb-6">
                  naast het stucwerk zelf zijn er vaak extra werkzaamheden
                  nodig. deze nemen we mee in de offerte:
                </p>

                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      className="text-accent flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span>
                      <strong>schuurwerk:</strong> voorbewerking van wanden en
                      plafonds
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      className="text-accent flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span>
                      <strong>afplakken:</strong> bescherming van kozijnen,
                      vloeren en meubels
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      className="text-accent flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span>
                      <strong>grondlaag:</strong> voor betere hechting
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      className="text-accent flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span>
                      <strong>verwijderen behang:</strong> oude afwerking
                      verwijderen
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      className="text-accent flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span>
                      <strong>reparaties:</strong> scheuren en gaten dichten
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      className="text-accent flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span>
                      <strong>steigers:</strong> bij hoge ruimtes of gevels
                    </span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Hoe bespaar je */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div {...fadeUp} className="text-center mb-16">
                <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-5 py-2.5 rounded-full text-sm font-medium mb-4">
                  <Star size={14} className="fill-accent text-accent" />
                  bespaartips
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  slimme tips om kosten te besparen
                </h2>
              </motion.div>

              <div className="space-y-6">
                <motion.div
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-primary/10"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    1. voorbereiding zelf doen
                  </h3>
                  <p className="text-gray-700">
                    door zelf meubels te verhuizen, behang te verwijderen en te
                    schuren kun je op arbeidskosten besparen.
                  </p>
                </motion.div>

                <motion.div
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-primary/10"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    2. meerdere ruimtes combineren
                  </h3>
                  <p className="text-gray-700">
                    hoe meer m2 we in een keer kunnen doen, hoe voordeliger het
                    wordt. overweeg om meerdere kamers tegelijk te laten stucen.
                  </p>
                </motion.div>

                <motion.div
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-primary/10"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    3. kies het juiste seizoen
                  </h3>
                  <p className="text-gray-700">
                    in rustigere periodes hebben we soms meer flexibiliteit in
                    planning en tarieven. vraag ernaar bij je offerte.
                  </p>
                </motion.div>

                <motion.div
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-primary/10"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    4. wacht niet te lang met onderhoud
                  </h3>
                  <p className="text-gray-700">
                    kleine scheuren worden grote scheuren. door op tijd te
                    onderhouden voorkom je grotere en duurdere reparaties.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Waarom mkhbouw */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div {...fadeUp} className="text-center mb-16">
                <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-5 py-2.5 rounded-full text-sm font-medium mb-4">
                  <Star size={14} className="fill-accent text-accent" />
                  waarom mkhbouw
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  waarom kiezen voor mkhbouw?
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <motion.div
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle
                    className="text-accent flex-shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      eerlijke prijzen
                    </h3>
                    <p className="text-gray-600">
                      transparante offertes zonder verborgen kosten. wat we
                      afspreken, dat voeren we uit.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle
                    className="text-accent flex-shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      vakmanschap
                    </h3>
                    <p className="text-gray-600">
                      jarenlange ervaring in stucwerk. van nieuwbouw tot
                      renovatie, wij leveren kwaliteit.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle
                    className="text-accent flex-shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      snel en netjes
                    </h3>
                    <p className="text-gray-600">
                      we werken efficient en houden de werkplek netjes. overlast
                      houden we tot een minimum.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle
                    className="text-accent flex-shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      persoonlijk advies
                    </h3>
                    <p className="text-gray-600">
                      we denken graag met je mee over de beste oplossing voor
                      jouw situatie.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary/90" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div {...fadeUp}>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  klaar voor een offerte op maat?
                </h2>
                <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                  vertel ons over je project en ontvang binnen 24 uur een
                  vrijblijvende offerte. of bel ons direct voor advies.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg shadow-accent/25"
                  >
                    <Calculator size={20} />
                    offerte aanvragen
                  </Link>
                  <a
                    href="tel:0612345678"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors border border-white/20"
                  >
                    <Phone size={20} />
                    direct bellen
                  </a>
                </div>
                <div className="flex items-center justify-center gap-8 mt-8 text-white/60 text-sm">
                  <span className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-accent" />
                    vrijblijvend
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-accent" />
                    binnen 24 uur reactie
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-accent" />
                    gratis advies
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div {...fadeUp} className="text-center mb-16">
                <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-5 py-2.5 rounded-full text-sm font-medium mb-4">
                  <Star size={14} className="fill-accent text-accent" />
                  veelgestelde vragen
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  veelgestelde vragen over stucwerk prijzen
                </h2>
              </motion.div>

              <div className="space-y-6">
                <motion.div
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-primary/10"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    waarom krijg ik geen vaste prijs per m2?
                  </h3>
                  <p className="text-gray-700">
                    elke klus is anders. de staat van je muren, de hoogte van je
                    plafonds, de bereikbaarheid, het type stucwerk en de
                    gewenste afwerking maken allemaal verschil. daarom werken we
                    met projectgebonden offertes die rekening houden met jouw
                    specifieke situatie.
                  </p>
                </motion.div>

                <motion.div
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-primary/10"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    is een offerte vrijblijvend?
                  </h3>
                  <p className="text-gray-700">
                    ja, onze offertes zijn altijd vrijblijvend. je zit nergens
                    aan vast en kunt rustig verschillende aanbiedingen
                    vergelijken.
                  </p>
                </motion.div>

                <motion.div
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-primary/10"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    hoe snel kan ik een offerte verwachten?
                  </h3>
                  <p className="text-gray-700">
                    na je aanvraag nemen we binnen 24 uur contact op om een
                    afspraak voor een bezichtiging te maken. na de bezichtiging
                    ontvang je meestal binnen enkele dagen een uitgebreide
                    offerte.
                  </p>
                </motion.div>

                <motion.div
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-primary/10"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    zit btw bij de prijs inbegrepen?
                  </h3>
                  <p className="text-gray-700">
                    in onze offertes geven we altijd duidelijk aan of prijzen
                    inclusief of exclusief btw zijn. voor particulieren werken
                    we meestal inclusief btw.
                  </p>
                </motion.div>

                <motion.div
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-primary/10"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    wat is goedkoper: spackspuiten of traditioneel stucwerk?
                  </h3>
                  <p className="text-gray-700">
                    spackspuiten is meestal voordeliger bij grote oppervlakken
                    omdat het sneller gaat. voor kleine ruimtes of renovatie kan
                    traditioneel stucwerk echter de betere keuze zijn. we
                    adviseren je graag over wat het beste bij jouw project past.
                  </p>
                </motion.div>

                <motion.div
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-primary/10"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    komen er nog verborgen kosten bij?
                  </h3>
                  <p className="text-gray-700">
                    nee, bij mkhbouw werk je met transparante offertes. alle
                    werkzaamheden en kosten staan duidelijk vermeld. alleen als
                    er tijdens het werk onverwachte zaken naar voren komen
                    (bijvoorbeeld verborgen schade) overleggen we dit eerst met
                    je.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Related articles */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.h2
                {...fadeUp}
                className="text-2xl font-bold text-gray-900 mb-8"
              >
                lees ook
              </motion.h2>
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Link
                    href="/diensten/spackspuiten"
                    className="group bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-2xl hover:shadow-lg transition-all block border border-primary/10"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-accent transition-colors">
                      alles over spackspuiten
                    </h3>
                    <p className="text-gray-600 mb-4">
                      ontdek de voordelen van spackspuiten en wanneer deze
                      techniek de beste keuze is.
                    </p>
                    <span className="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                      lees meer <ArrowRight size={18} />
                    </span>
                  </Link>
                </motion.div>

                <motion.div
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Link
                    href="/diensten/sierpleister"
                    className="group bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-2xl hover:shadow-lg transition-all block border border-primary/10"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-accent transition-colors">
                      sierpleister voor een unieke uitstraling
                    </h3>
                    <p className="text-gray-600 mb-4">
                      decoratieve afwerking met structuur en karakter voor je
                      interieur.
                    </p>
                    <span className="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                      lees meer <ArrowRight size={18} />
                    </span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
