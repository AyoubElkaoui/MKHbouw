"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import {
  Hammer,
  PaintBucket,
  Sparkles,
  Home,
  Brush,
  Wallpaper,
  Trash2,
  Wrench,
  ArrowRight,
  CheckCircle,
  Star,
  Shield,
  Clock,
  Phone,
} from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Spackspuiten",
    slug: "spackspuiten",
    fullDescription:
      "Wij bieden professioneel spackspuitwerk voor zowel plafonds als wanden. Met moderne apparatuur zorgen we voor een perfect egaal eindresultaat dat direct sausklaar is.",
    image:
      "https://images.unsplash.com/photo-1745092707630-c00ef0a006c4?q=80&w=2670&auto=format&fit=crop",
  },
  {
    icon: Hammer,
    title: "Stucwerk",
    slug: "stucwerk",
    fullDescription:
      "Vakkundig stucwerk dat direct sausklaar of behangklaar wordt opgeleverd. Wij werken met hoogwaardige materialen voor duurzaam resultaat, geschikt voor binnen en buiten.",
    image:
      "https://plus.unsplash.com/premium_photo-1661308315740-8fb4a111215a?q=80&w=2670&auto=format&fit=crop",
  },
  {
    icon: PaintBucket,
    title: "Sierpleister",
    slug: "sierpleister",
    fullDescription:
      "Geef uw woning of bedrijfspand een luxe uitstraling met sierpleister. Verkrijgbaar in diverse structuren en kleuren voor een uniek effect dat jarenlang mooi blijft.",
    image:
      "https://images.unsplash.com/photo-1534162057773-55bd4a4b5ae1?q=80&w=2670&auto=format&fit=crop",
  },
  {
    icon: Brush,
    title: "Schuurwerk",
    slug: "schuurwerk",
    fullDescription:
      "Professioneel schuurwerk als voorbereiding voor schilderwerk of stucwerk. Wij zorgen voor een perfect glad oppervlak met moderne schuurapparatuur.",
    image:
      "https://plus.unsplash.com/premium_photo-1682597001129-42e04d67253f?q=80&w=2670&auto=format&fit=crop",
  },
  {
    icon: PaintBucket,
    title: "Schilderwerk",
    slug: "schilderwerk",
    fullDescription:
      "Complete schilderwerken voor binnen en buiten. Van kozijnen tot complete woningen en bedrijfspanden, wij leveren vakwerk met oog voor detail en duurzame kwaliteit.",
    image:
      "https://images.unsplash.com/photo-1679018179962-06922435f6bc?q=80&w=2670&auto=format&fit=crop",
  },
  {
    icon: Wallpaper,
    title: "Behangen",
    slug: "behangen",
    fullDescription:
      "Deskundig behangwerk met perfecte naadaansluiting. Wij werken met alle soorten behang van klassiek tot modern, inclusief glasvezelbehang en vliesbehang.",
    image:
      "https://plus.unsplash.com/premium_photo-1661963369563-1e00af9d8b35?q=80&w=2670&auto=format&fit=crop",
  },
  {
    icon: Trash2,
    title: "Sloopwerk",
    slug: "sloopwerk",
    fullDescription:
      "Professioneel sloopwerk met oog voor veiligheid. Wij verzorgen ook de afvoer van sloopafval conform regelgeving, geschikt voor woningen en bedrijfspanden.",
    image:
      "https://plus.unsplash.com/premium_photo-1678454428455-25e6dd839efb?q=80&w=2670&auto=format&fit=crop",
  },
  {
    icon: Home,
    title: "Renovatie",
    slug: "renovatie",
    fullDescription:
      "Totaalrenovaties voor uw woning of bedrijfspand. Van ontwerp tot oplevering, wij begeleiden u door het hele proces met persoonlijk advies en transparante communicatie.",
    image:
      "https://plus.unsplash.com/premium_photo-1675601690595-41b44f3cacd7?q=80&w=2670&auto=format&fit=crop",
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
        <section className="relative min-h-[60vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://plus.unsplash.com/premium_photo-1675601690595-41b44f3cacd7?q=80&w=2670&auto=format&fit=crop"
              alt="MKH Bouw diensten"
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
                  Wat Wij Doen
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
                  <span className="relative z-10">Diensten</span>
                  <span className="absolute bottom-2 left-0 right-0 h-3 bg-accent/30 -z-0 rounded" />
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg sm:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl"
              >
                Van klein tot groot, wij verzorgen alle klussen in en om uw huis
                of bedrijfspand door heel Nederland. Met vakmanschap en moderne
                technieken zorgen wij voor duurzame resultaten.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-3"
              >
                {[
                  { icon: Shield, text: "8+ Specialisaties" },
                  { icon: Clock, text: "Vakkundig Team" },
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
                  { number: "8+", label: "Diensten" },
                  { number: "500+", label: "Projecten" },
                  { number: "15+", label: "Jaar Ervaring" },
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

        {/* Introduction */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div {...fadeUp} className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Compleet dienstenpakket voor particulier en zakelijk
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                MKH Bouw is gevestigd in Amsterdam en biedt een breed scala aan
                diensten door heel Nederland. Of u nu een particuliere klant
                bent die zijn woning wil opknappen, of een bedrijf dat op zoek
                is naar een betrouwbare onderhoudspartner - wij staan voor u
                klaar.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ons ervaren team werkt met de nieuwste technieken en
                hoogwaardige materialen. Transparantie, kwaliteit en stiptheid
                staan bij ons altijd voorop.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden hover:-translate-y-2"
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />

                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={`${service.title} door MKH Bouw Amsterdam`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <div className="w-14 h-14 bg-white/95 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                          <Icon className="text-primary" size={28} />
                        </div>
                      </div>
                    </div>

                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {service.fullDescription}
                      </p>
                      <Link
                        href={`/diensten/${service.slug}`}
                        className="inline-flex items-center gap-2 text-accent hover:text-accent-600 font-semibold transition-colors group/link"
                      >
                        Meer informatie
                        <ArrowRight
                          className="group-hover/link:translate-x-1 transition-transform"
                          size={18}
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
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div {...fadeUp} className="text-center mb-16">
                <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                  Onze Kracht
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-4">
                  Waarom MKH Bouw voor uw klus?
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Ervaring, betrouwbaarheid en vakmanschap - dat is waar MKH
                  Bouw voor staat.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    num: "01",
                    title: "Vakmanschap & Ervaring",
                    desc: "Sinds 2008 leveren wij hoogwaardig werk met ervaren professionals die hun vak verstaan. Ons team volgt regelmatig bijscholing voor de nieuwste technieken.",
                  },
                  {
                    num: "02",
                    title: "Transparantie & Eerlijkheid",
                    desc: "Duidelijke offertes zonder verborgen kosten. Wij leggen alles transparant uit. Wat we afspreken leveren we, binnen de afgesproken tijd en het budget.",
                  },
                  {
                    num: "03",
                    title: "Flexibiliteit & Service",
                    desc: "We denken graag met u mee over de beste oplossing. Voor bedrijven werken we graag buiten kantooruren om uw bedrijfsvoering niet te verstoren.",
                  },
                  {
                    num: "04",
                    title: "Garantie & Nazorg",
                    desc: "Wij staan achter ons werk met garantie op alle werkzaamheden. Ook na oplevering blijven we bereikbaar voor eventuele vragen of nazorg.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.num}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-6 bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-3xl border border-primary/10 hover:shadow-xl transition-all group"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 text-white rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg group-hover:shadow-primary/25 group-hover:scale-110 transition-all">
                        {item.num}
                      </div>
                    </div>
                    <div>
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
