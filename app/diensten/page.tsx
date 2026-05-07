"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import {
  Hammer,
  PaintBucket,
  Home,
  Wallpaper,
  Wrench,
  Zap,
  Layers,
  Droplets,
  ArrowRight,
  CheckCircle,
  Star,
  Shield,
  Clock,
  Phone,
  HardHat,
} from "lucide-react";

const services = [
  {
    icon: HardHat,
    title: "Totaal Afbouw",
    slug: "totaal-afbouw",
    fullDescription:
      "Complete afbouw van uw woning of bedrijfspand. Van ruwbouw tot perfecte afwerking — wij ontzorgen u volledig en coördineren alle disciplines onder één dak.",
    image:
      "https://images.unsplash.com/photo-1770838773417-08b18661c62f?q=80&w=2670&auto=format&fit=crop",
  },
  {
    icon: Hammer,
    title: "Stucwerk & Gevelwerk",
    slug: "stucwerk",
    fullDescription:
      "Vakkundig stucwerk binnen en gevelstucwerk buiten. Glad sausklaar, decoratief, sierpleister of betonlook — wij leveren een perfecte afwerking voor elk project.",
    image:
      "https://images.unsplash.com/photo-1761986757577-140af8859587?q=80&w=2670&auto=format&fit=crop",
  },
  {
    icon: PaintBucket,
    title: "Schilderwerk",
    slug: "schilderwerk",
    fullDescription:
      "Complete schilderwerken binnen en buiten. Van kozijnen en deuren tot complete panden — wij leveren vakwerk met duurzame verf en oog voor detail.",
    image:
      "https://images.unsplash.com/photo-1742900280861-32bed068938b?q=80&w=2670&auto=format&fit=crop",
  },
  {
    icon: Wallpaper,
    title: "Behangen",
    slug: "behangen",
    fullDescription:
      "Deskundig behangwerk met perfecte naadaansluiting. Klassiek behang, vliesbehang, glasvezelbehang of structuurbehang — vakkundig aangebracht.",
    image:
      "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=2670&auto=format&fit=crop",
  },
  {
    icon: Layers,
    title: "Tegelen",
    slug: "tegelen",
    fullDescription:
      "Badkamer, keuken, vloer of gevel — wij tegelen nauwkeurig en strak. Alle formaten, stijlen en materialen, binnen én buiten.",
    image:
      "https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?q=80&w=2670&auto=format&fit=crop",
  },
  {
    icon: Home,
    title: "Dakleggen",
    slug: "dakleggen",
    fullDescription:
      "Professioneel dakwerk voor woningen en bedrijfspanden. Nieuwe dakbedekking, reparaties, dakisolatie en gootwerk — veilig en waterdicht uitgevoerd.",
    image:
      "https://images.unsplash.com/photo-1635424824849-1b09bdcc55b1?q=80&w=2670&auto=format&fit=crop",
  },
  {
    icon: Zap,
    title: "Electra",
    slug: "electra",
    fullDescription:
      "Elektra-installaties voor wonen en werken. Groepenkast vernieuwen, stopcontacten, verlichting, domotica en meer — veilig en volgens NEN-normen.",
    image:
      "https://images.unsplash.com/photo-1615774925655-a0e97fc85c14?q=80&w=2670&auto=format&fit=crop",
  },
  {
    icon: Wrench,
    title: "Timmerwerk & PVC tegel",
    slug: "timmerwerk",
    fullDescription:
      "Maatwerk timmerwerk voor deuren, kozijnen, trappen en kasten. Tevens specialist in PVC tegelvloeren — onderhoudsvriendelijk en modern.",
    image:
      "https://images.unsplash.com/photo-1547609434-b732edfee020?q=80&w=2670&auto=format&fit=crop",
  },
  {
    icon: Layers,
    title: "Laminaat & PVC Laminaat",
    slug: "laminaat",
    fullDescription:
      "Vakkundige plaatsing van laminaat en PVC-laminaatvloeren. Warm, stijlvol en duurzaam — voor woonkamers, kantoren en bedrijfspanden.",
    image:
      "https://images.unsplash.com/photo-1624574470112-46944be68409?q=80&w=2670&auto=format&fit=crop",
  },
  {
    icon: Droplets,
    title: "Loodgieterswerk",
    slug: "loodgieterswerk",
    fullDescription:
      "Van lekkage reparatie tot complete badkamerinstallaties. Waterleiding, afvoer, radiator, sanitair en cv-ketel — snel en betrouwbaar.",
    image:
      "https://images.unsplash.com/photo-1523413555809-0fb1d4da238d?q=80&w=2670&auto=format&fit=crop",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function Diensten() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-zinc-950">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1770838773417-08b18661c62f?q=80&w=2670&auto=format&fit=crop"
              alt="MKH Bouw diensten"
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
                  10 Specialisaties
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]"
              >
                Onze{" "}
                <span className="relative">
                  <span className="relative z-10 text-primary-400">Diensten</span>
                  <span className="absolute bottom-1 left-0 right-0 h-2 bg-primary/20 -z-0 rounded" />
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg sm:text-xl text-zinc-400 mb-10 leading-relaxed max-w-2xl"
              >
                Van totale afbouw en stucwerk tot elektra, dakleggen en loodgieterswerk — MKH Bouw is uw complete bouwpartner door heel Nederland.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-3"
              >
                {[
                  { icon: Shield, text: "10 Specialisaties" },
                  { icon: Clock, text: "Vakkundig Team" },
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
                  { number: "10+", label: "Diensten" },
                  { number: "500+", label: "Projecten" },
                  { number: "15+", label: "Jaar Ervaring" },
                  { number: "24u", label: "Reactietijd" },
                ].map((stat) => (
                  <div key={stat.label} className="py-5 px-6 text-center">
                    <div className="text-2xl md:text-3xl font-bold text-white">
                      {stat.number}
                    </div>
                    <div className="text-sm text-zinc-500 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20 bg-zinc-900 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div {...fadeUp} className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Compleet dienstenpakket voor particulier en zakelijk
              </h2>
              <p className="text-lg text-zinc-400 leading-relaxed mb-4">
                MKH Bouw is gevestigd in Amsterdam en biedt een breed scala aan bouwdiensten door heel Nederland. Of u nu een particuliere klant bent die zijn woning volledig wil laten afbouwen of renoveren, of een bedrijf dat op zoek is naar een betrouwbare totaalpartner — wij staan voor u klaar.
              </p>
              <p className="text-lg text-zinc-500 leading-relaxed">
                Eén aanspreekpunt voor alle disciplines. Geen gedoe met meerdere aannemers — MKH Bouw regelt het van A tot Z.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-zinc-950 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-7xl mx-auto">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.06 }}
                    viewport={{ once: true }}
                    className="group relative bg-zinc-900 rounded-3xl border border-white/5 overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
                  >
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />

                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={`${service.title} door MKH Bouw`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <div className="w-12 h-12 bg-primary/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-primary/30 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                          <Icon className="text-primary-300 group-hover:text-white transition-colors" size={24} />
                        </div>
                      </div>
                    </div>

                    <div className="p-7">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-zinc-500 leading-relaxed mb-5 text-sm">
                        {service.fullDescription}
                      </p>
                      <Link
                        href={`/diensten/${service.slug}`}
                        className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-semibold transition-colors group/link text-sm"
                      >
                        Meer informatie
                        <ArrowRight
                          className="group-hover/link:translate-x-1 transition-transform"
                          size={16}
                        />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-zinc-900 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div {...fadeUp} className="text-center mb-16">
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 border border-primary/20">
                  Onze Kracht
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-4">
                  Waarom MKH Bouw voor uw klus?
                </h2>
                <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                  Ervaring, betrouwbaarheid en vakmanschap — dat is waar MKH Bouw voor staat.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    num: "01",
                    title: "Vakmanschap & Ervaring",
                    desc: "Sinds 2008 leveren wij hoogwaardig werk met ervaren professionals die hun vak verstaan. Ons team beheerst alle bouwdisciplines.",
                  },
                  {
                    num: "02",
                    title: "Transparantie & Eerlijkheid",
                    desc: "Duidelijke offertes zonder verborgen kosten. Wat we afspreken leveren we, binnen de afgesproken tijd en het budget.",
                  },
                  {
                    num: "03",
                    title: "Totaaloplossing",
                    desc: "Eén aannemer voor alle disciplines. Geen gedoe met meerdere partijen — MKH Bouw coördineert alles onder één dak.",
                  },
                  {
                    num: "04",
                    title: "Garantie & Nazorg",
                    desc: "Wij staan achter ons werk met garantie op alle werkzaamheden. Ook na oplevering blijven we bereikbaar.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.num}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-6 bg-zinc-950/50 p-8 rounded-3xl border border-white/5 hover:border-primary/20 hover:shadow-xl transition-all group"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg group-hover:shadow-primary/25 group-hover:scale-110 transition-all">
                        {item.num}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        {item.title}
                      </h3>
                      <p className="text-zinc-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
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
                Ontvang binnen{" "}
                <span className="font-bold text-white">24 uur</span> een
                persoonlijke offerte. Ervaren vakmanschap, eerlijke prijzen.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <a
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 bg-white text-primary-800 px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-50 transition-all shadow-xl shadow-black/20 hover:shadow-2xl hover:-translate-y-0.5"
                >
                  Vraag Offerte Aan
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
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
                {[
                  "Binnen 24 uur reactie",
                  "Geen verborgen kosten",
                  "15+ jaar ervaring",
                ].map((text) => (
                  <div
                    key={text}
                    className="flex items-center gap-2 text-white/80"
                  >
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
