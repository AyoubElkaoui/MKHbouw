"use client";

import { motion } from "framer-motion";
import { Star, ArrowRight, CheckCircle, Calculator, TrendingUp, AlertCircle, Phone, ArrowLeft } from "lucide-react";
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
      <main className="bg-zinc-950">

        {/* Hero */}
        <section className="relative min-h-[55vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1761986757577-140af8859587?q=80&w=2670&auto=format&fit=crop"
              alt="Stucwerk kosten en prijzen"
              fill
              className="object-cover opacity-35"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/75 to-zinc-950/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
          </div>
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32">
            <Link href="/blog" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white mb-8 transition-colors text-sm">
              <ArrowLeft size={16} /> Terug naar blog
            </Link>
            <div className="max-w-3xl">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-6">
                <span className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-md text-primary-300 px-5 py-2.5 rounded-full text-sm font-medium border border-primary/20">
                  <Star size={14} className="fill-primary-400 text-primary-400" />
                  Prijsgids 2026
                </span>
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Wat kost stucwerk{" "}
                <span className="text-primary-400">in 2026?</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-lg text-zinc-300 mb-8 leading-relaxed max-w-2xl">
                Ben je van plan om stucwerk te laten doen en wil je weten wat de kosten zijn? De prijs hangt af van verschillende factoren. In deze gids leggen we uit wat de prijs beïnvloedt.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-primary/25 hover:-translate-y-0.5">
                  <Phone size={18} />
                  Vraag vrijblijvende offerte aan
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Belangrijk om te weten */}
        <section className="py-12 bg-zinc-900">
          <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div {...fadeUp} className="bg-primary/10 border border-primary/20 p-8 rounded-2xl">
                <p className="text-white font-semibold mb-2 text-lg">Belangrijk om te weten</p>
                <p className="text-zinc-400 mb-5 leading-relaxed">
                  Elke stucwerkklus is uniek. De prijs hangt af van het type stucwerk, oppervlakte, staat van de ondergrond, locatie en gewenste afwerking. Daarom werken wij alleen met projectgebonden offertes.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-all shadow-lg shadow-primary/25 text-sm">
                  <Phone size={16} />
                  Vraag vrijblijvende offerte aan
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Types stucwerk */}
        <section className="py-20 bg-zinc-950">
          <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div {...fadeUp} className="text-center mb-16">
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary-400 px-5 py-2 rounded-full text-sm font-semibold mb-4 border border-primary/20">
                  <Star size={14} className="fill-primary-400 text-primary-400" />
                  Soorten stucwerk
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Welke soorten stucwerk zijn er?</h2>
              </motion.div>
              <div className="grid md:grid-cols-3 gap-7 mb-12">
                {[
                  { title: "Spackspuiten", desc: "Moderne techniek waarbij stucwerk machinaal wordt aangebracht. Ideaal voor grotere oppervlakken.", items: ["Perfect egaal oppervlak", "Snellere uitvoering", "Geschikt voor grote oppervlakken", "Direct sausklaar"], note: "Ideaal voor: nieuwbouw, grote ruimtes, plafonds", href: "/diensten/stucwerk" },
                  { title: "Traditioneel stucwerk", desc: "Vakmanschap waarbij stuc met de hand wordt aangebracht. Perfect voor renovatie en maatwerk.", items: ["Ambachtelijk vakwerk", "Saus- of behangklaar", "Duurzaam resultaat", "Geschikt voor renovatie"], note: "Ideaal voor: renovatie, oudere woningen, kleinere ruimtes", href: "/diensten/stucwerk" },
                  { title: "Sierpleister", desc: "Decoratieve afwerking met unieke structuren en texturen voor een luxe uitstraling.", items: ["Decoratieve afwerking", "Unieke structuren", "Diverse afwerkingen mogelijk", "Luxe uitstraling"], note: "Ideaal voor: accent muren, woonkamers, ontvangsthallen", href: "/diensten/stucwerk" },
                ].map((card, i) => (
                  <motion.div key={card.title} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-zinc-900 p-7 rounded-2xl border border-white/5 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all hover:-translate-y-1 group">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors">{card.title}</h3>
                    <p className="text-zinc-400 mb-5 text-sm leading-relaxed">{card.desc}</p>
                    <ul className="space-y-2 mb-5">
                      {card.items.map(item => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle className="text-primary-400 flex-shrink-0 mt-0.5" size={16} />
                          <span className="text-zinc-400 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-zinc-600 mb-4">{card.note}</p>
                    <Link href={card.href} className="inline-flex items-center gap-2 text-primary-400 font-semibold hover:gap-3 transition-all text-sm">
                      Meer informatie <ArrowRight size={16} />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Factoren die prijs beïnvloeden */}
        <section className="py-20 bg-zinc-900">
          <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div {...fadeUp} className="text-center mb-16">
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary-400 px-5 py-2 rounded-full text-sm font-semibold mb-4 border border-primary/20">Prijsfactoren</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Welke factoren bepalen de prijs?</h2>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: TrendingUp, title: "Oppervlakte", body: "Hoe groter het oppervlak, hoe lager de prijs per m² meestal uitvalt. Bij grotere projecten kunnen we schaalvoordelen doorberekenen.", tip: "Tip: combineer meerdere ruimtes in een project voor het beste tarief" },
                  { icon: AlertCircle, title: "Staat van de ondergrond", body: "Een slechte, ongelijke of beschadigde ondergrond vraagt meer voorbereidend werk. Scheuren moeten gerepareerd worden en het oppervlak moet vlak zijn.", tip: "Bij een bezichtiging beoordelen we de staat en geven we advies" },
                  { icon: CheckCircle, title: "Type ruimte en hoogte", body: "Plafonds, trappenhuizen en hoge ruimten vragen meer tijd en materieel dan standaard wanden.", tip: "Plafonds en hoge ruimten zijn complexer en tijdsintensiever" },
                  { icon: Calculator, title: "Gewenste afwerking", body: "De kwaliteit van de afwerking bepaalt ook de prijs. Hogere kwaliteit vraagt meer tijd en vakmanschap.", tip: "Sierpleister en betonlook zijn bewerkelijker dan glad stucwerk" },
                ].map((item, i) => (
                  <motion.div key={item.title} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-zinc-950/50 p-7 rounded-2xl border border-white/5 hover:border-primary/20 hover:shadow-lg transition-all group">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-primary/20 group-hover:bg-primary group-hover:border-primary transition-all">
                        <item.icon className="text-primary-400 group-hover:text-white transition-colors" size={20} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-zinc-400 mb-3 text-sm leading-relaxed">{item.body}</p>
                        <p className="text-xs text-zinc-600 italic">{item.tip}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Extra werkzaamheden */}
        <section className="py-20 bg-zinc-950">
          <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div {...fadeUp} className="text-center mb-12">
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary-400 px-5 py-2 rounded-full text-sm font-semibold mb-4 border border-primary/20">Extra services</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Mogelijke extra werkzaamheden</h2>
              </motion.div>
              <motion.div {...fadeUp} className="bg-zinc-900 border border-white/5 p-8 rounded-2xl">
                <p className="text-zinc-400 mb-6 leading-relaxed">Naast het stucwerk zelf zijn er vaak extra werkzaamheden nodig. Deze nemen we mee in de offerte:</p>
                <ul className="space-y-4">
                  {[
                    { label: "Schuurwerk", desc: "Voorbewerking van wanden en plafonds" },
                    { label: "Afplakken", desc: "Bescherming van kozijnen, vloeren en meubels" },
                    { label: "Grondlaag", desc: "Voor betere hechting van het stucwerk" },
                    { label: "Behang verwijderen", desc: "Oude afwerking vakkundig verwijderen" },
                    { label: "Reparaties", desc: "Scheuren en gaten dichten voor een strakke basis" },
                    { label: "Steigers", desc: "Bij hoge ruimtes of gevels" },
                  ].map(item => (
                    <li key={item.label} className="flex items-start gap-3">
                      <CheckCircle className="text-primary-400 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-zinc-400 text-sm"><strong className="text-white">{item.label}:</strong> {item.desc}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Bespaartips */}
        <section className="py-20 bg-zinc-900">
          <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div {...fadeUp} className="text-center mb-12">
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary-400 px-5 py-2 rounded-full text-sm font-semibold mb-4 border border-primary/20">Bespaartips</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Slimme tips om kosten te besparen</h2>
              </motion.div>
              <div className="space-y-4">
                {[
                  { num: "1", title: "Voorbereiding zelf doen", desc: "Door zelf meubels te verhuizen, behang te verwijderen en te schuren kun je op arbeidskosten besparen." },
                  { num: "2", title: "Meerdere ruimtes combineren", desc: "Hoe meer m² we in één keer kunnen doen, hoe voordeliger het wordt. Overweeg om meerdere kamers tegelijk te laten stucken." },
                  { num: "3", title: "Kies het juiste seizoen", desc: "In rustigere periodes hebben we soms meer flexibiliteit in planning en tarieven. Vraag ernaar bij je offerte." },
                  { num: "4", title: "Wacht niet te lang met onderhoud", desc: "Kleine scheuren worden grote scheuren. Door op tijd te onderhouden voorkom je grotere en duurdere reparaties." },
                ].map((tip, i) => (
                  <motion.div key={tip.num} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.08 }} className="bg-zinc-950/50 border border-white/5 hover:border-primary/20 p-6 rounded-2xl transition-all group">
                    <div className="flex items-start gap-4">
                      <span className="text-3xl font-black text-primary/20 leading-none flex-shrink-0">{tip.num}</span>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">{tip.title}</h3>
                        <p className="text-zinc-500 text-sm leading-relaxed">{tip.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Waarom MKH Bouw */}
        <section className="py-20 bg-zinc-950">
          <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div {...fadeUp} className="text-center mb-12">
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary-400 px-5 py-2 rounded-full text-sm font-semibold mb-4 border border-primary/20">Waarom MKH Bouw</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Waarom kiezen voor MKH Bouw?</h2>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-5 mb-12">
                {[
                  { title: "Eerlijke prijzen", desc: "Transparante offertes zonder verborgen kosten. Wat we afspreken, dat voeren we uit." },
                  { title: "Vakmanschap", desc: "Jarenlange ervaring in stucwerk. Van nieuwbouw tot renovatie, wij leveren kwaliteit." },
                  { title: "Snel en netjes", desc: "We werken efficiënt en houden de werkplek netjes. Overlast houden we tot een minimum." },
                  { title: "Persoonlijk advies", desc: "We denken graag met je mee over de beste oplossing voor jouw situatie." },
                ].map((item, i) => (
                  <motion.div key={item.title} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.08 }} className="flex items-start gap-4 bg-zinc-900 border border-white/5 hover:border-primary/20 rounded-2xl p-5 transition-all group">
                    <CheckCircle className="text-primary-400 flex-shrink-0 mt-0.5" size={20} />
                    <div>
                      <h3 className="font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-zinc-900" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div {...fadeUp}>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Klaar voor een offerte op maat?</h2>
                <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">Vertel ons over je project en ontvang binnen 24 uur een vrijblijvende offerte.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-primary-800 px-8 py-4 rounded-xl font-bold hover:bg-primary-50 transition-all shadow-xl shadow-black/20 hover:-translate-y-0.5">
                    <Calculator size={18} /> Offerte aanvragen
                  </Link>
                  <a href="tel:+31684794108" className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all">
                    <Phone size={18} /> Direct bellen
                  </a>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-6 text-white/60 text-sm">
                  {["Vrijblijvend", "Binnen 24 uur reactie", "Gratis advies"].map(t => (
                    <span key={t} className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-primary-300" /> {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-zinc-900">
          <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div {...fadeUp} className="text-center mb-12">
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary-400 px-5 py-2 rounded-full text-sm font-semibold mb-4 border border-primary/20">Veelgestelde vragen</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Veelgestelde vragen over stucwerk prijzen</h2>
              </motion.div>
              <div className="space-y-4">
                {[
                  { q: "Waarom krijg ik geen vaste prijs per m²?", a: "Elke klus is anders. De staat van je muren, de hoogte van je plafonds, de bereikbaarheid, het type stucwerk en de gewenste afwerking maken allemaal verschil. Daarom werken we met projectgebonden offertes." },
                  { q: "Is een offerte vrijblijvend?", a: "Ja, onze offertes zijn altijd vrijblijvend. Je zit nergens aan vast en kunt rustig verschillende aanbiedingen vergelijken." },
                  { q: "Hoe snel kan ik een offerte verwachten?", a: "Na je aanvraag nemen we binnen 24 uur contact op. Na de bezichtiging ontvang je meestal binnen enkele dagen een uitgebreide offerte." },
                  { q: "Zit btw bij de prijs inbegrepen?", a: "In onze offertes geven we altijd duidelijk aan of prijzen inclusief of exclusief btw zijn. Voor particulieren werken we meestal inclusief btw." },
                  { q: "Wat is goedkoper: spackspuiten of traditioneel stucwerk?", a: "Spackspuiten is meestal voordeliger bij grote oppervlakken omdat het sneller gaat. Voor kleine ruimtes of renovatie kan traditioneel stucwerk de betere keuze zijn." },
                  { q: "Komen er nog verborgen kosten bij?", a: "Nee, bij MKH Bouw werk je met transparante offertes. Alle werkzaamheden en kosten staan duidelijk vermeld. Alleen als er onverwachte zaken naar voren komen overleggen we dit eerst." },
                ].map((faq, i) => (
                  <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.06 }} className="bg-zinc-950/50 border border-white/5 hover:border-primary/20 p-6 rounded-2xl transition-all group">
                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-primary-300 transition-colors flex items-start gap-3">
                      <span className="text-primary-400 font-black flex-shrink-0">Q.</span>{faq.q}
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed pl-6">{faq.a}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Gerelateerde artikelen */}
        <section className="py-16 bg-zinc-950">
          <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.h2 {...fadeUp} className="text-2xl font-bold text-white mb-8">Lees ook</motion.h2>
              <div className="grid md:grid-cols-2 gap-5">
                {[
                  { href: "/diensten/stucwerk", title: "Alles over stucwerk", desc: "Ontdek welke soorten stucwerk er zijn en wat het beste bij jouw project past." },
                  { href: "/blog/hoe-lang-duurt-stucwerk", title: "Hoe lang duurt stucwerk?", desc: "Ontdek wat de doorlooptijd bepaalt en plan je verbouwing slim." },
                ].map((article, i) => (
                  <motion.div key={article.href} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}>
                    <Link href={article.href} className="group bg-zinc-900 border border-white/5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 p-6 rounded-2xl transition-all block hover:-translate-y-0.5">
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">{article.title}</h3>
                      <p className="text-zinc-500 mb-4 text-sm leading-relaxed">{article.desc}</p>
                      <span className="inline-flex items-center gap-2 text-primary-400 font-semibold text-sm group-hover:gap-3 transition-all">
                        Lees meer <ArrowRight size={16} />
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
