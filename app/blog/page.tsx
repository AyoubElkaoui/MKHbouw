"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Calendar,
  Clock,
  Star,
  Phone,
} from "lucide-react";

const blogPosts = [
  {
    title: "Wat Kost Stucwerk in 2026?",
    excerpt:
      "Ontdek welke factoren de prijs van stucwerk bepalen en vraag een vrijblijvende offerte aan. Geen vaste prijzen maar wel transparant advies.",
    slug: "wat-kost-stucwerk",
    category: "Prijzen",
    readTime: "8 min",
    date: "2026",
    image: "https://images.unsplash.com/photo-1761986757577-140af8859587?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: "Wat Kost Schilderwerk in 2026?",
    excerpt:
      "Benieuwd naar de kosten van schilderwerk? Ontdek welke factoren de prijs bepalen en vraag een vrijblijvende offerte aan.",
    slug: "wat-kost-schilderwerk",
    category: "Prijzen",
    readTime: "7 min",
    date: "2026",
    image: "https://images.unsplash.com/photo-1742900280861-32bed068938b?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: "Spackspuiten vs Traditioneel Stucwerk",
    excerpt:
      "Wat is het verschil tussen spackspuiten en traditioneel stucwerk? Ontdek de voor- en nadelen en welke techniek het beste bij jouw project past.",
    slug: "verschil-spackspuiten-traditioneel",
    category: "Technieken",
    readTime: "6 min",
    date: "2026",
    image: "https://images.unsplash.com/photo-1770838773417-08b18661c62f?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: "Hoe Lang Duurt Stucwerk?",
    excerpt:
      "Benieuwd hoe lang stucwerk duurt? Ontdek wat de doorlooptijd bepaalt en plan je verbouwing slim. Expert advies van MKH Bouw.",
    slug: "hoe-lang-duurt-stucwerk",
    category: "Planning",
    readTime: "6 min",
    date: "2026",
    image: "https://images.unsplash.com/photo-1761986757577-140af8859587?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: "Stucwerk Scheuren Repareren: Complete Gids",
    excerpt:
      "Last van scheuren in je stucwerk? Ontdek de oorzaken, oplossingen en wanneer je een professional moet inschakelen.",
    slug: "stucwerk-scheuren-repareren",
    category: "Onderhoud",
    readTime: "8 min",
    date: "2026",
    image: "https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?q=80&w=2670&auto=format&fit=crop",
  },
];

const categories = [
  { name: "Alle Artikelen", slug: "alle" },
  { name: "Prijzen", slug: "prijzen" },
  { name: "Technieken", slug: "technieken" },
  { name: "Planning", slug: "planning" },
  { name: "Onderhoud", slug: "onderhoud" },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function Blog() {
  return (
    <>
      <Navigation />
      <main className="bg-zinc-950">
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1770838773417-08b18661c62f?q=80&w=2670&auto=format&fit=crop"
              alt="MKH Bouw blog kennis"
              fill
              className="object-cover opacity-35"
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
                  Kennis & Inspiratie
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]"
              >
                Blog &{" "}
                <span className="text-primary-400">Gidsen</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg sm:text-xl text-zinc-300 leading-relaxed max-w-2xl"
              >
                Praktische tips, prijsinformatie en vakkundig advies over stucwerk, schilderwerk en renovatie. Al onze kennis gebundeld in uitgebreide artikelen.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-6 bg-zinc-900 border-b border-white/5 sticky top-[72px] z-30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.slug}
                    className={`px-5 py-2 rounded-full font-semibold transition-all text-sm ${
                      category.slug === "alle"
                        ? "bg-primary text-white shadow-lg shadow-primary/25"
                        : "bg-zinc-800 text-zinc-400 hover:bg-primary/10 hover:text-primary-300 border border-white/5 hover:border-primary/20"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-zinc-950 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                {blogPosts.map((post, index) => (
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group block bg-zinc-900 rounded-3xl overflow-hidden border border-white/5 hover:border-primary/30 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 relative"
                    >
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left z-10" />
                      <div className="relative h-52 overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-70 group-hover:opacity-90"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/30 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <span className="inline-block bg-primary/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold border border-primary/50">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center gap-4 text-xs text-zinc-500 mb-3">
                          <div className="flex items-center gap-1.5">
                            <Calendar size={12} />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock size={12} />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary-300 transition-colors leading-snug">
                          {post.title}
                        </h3>

                        <p className="text-zinc-500 mb-4 line-clamp-3 leading-relaxed text-sm">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center gap-2 text-primary-400 font-semibold text-sm group-hover:gap-3 transition-all">
                          Lees meer
                          <ArrowRight size={16} />
                        </div>
                      </div>
                    </Link>
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Hulp Nodig Bij Je Project?
              </h2>
              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                Na het lezen van onze gidsen nog vragen? Wij helpen je graag persoonlijk verder met professioneel advies op maat.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 bg-white text-primary-800 px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-50 transition-all shadow-xl shadow-black/20 hover:-translate-y-0.5"
                >
                  Gratis Offerte Aanvragen
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
            </motion.div>
          </div>
        </section>

        {/* Popular Topics */}
        <section className="py-20 bg-zinc-950 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 border border-primary/20">
                  Meer Lezen
                </span>
                <h2 className="text-3xl font-bold text-white">Populaire Onderwerpen</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                {[
                  {
                    href: "/diensten/stucwerk",
                    title: "Alles over stucwerk",
                    desc: "Ontdek welke soorten stucwerk er zijn en wat het beste bij jouw project past",
                  },
                  {
                    href: "/diensten/schilderwerk",
                    title: "Schilderwerk info",
                    desc: "Binnen- en buitenschilderwerk uitgelegd met tips en tricks",
                  },
                  {
                    href: "/diensten/totaal-afbouw",
                    title: "Totale afbouw",
                    desc: "Complete gids voor het plannen van je afbouw- of renovatieproject",
                  },
                  {
                    href: "/diensten/tegelen",
                    title: "Tegelen & tiling",
                    desc: "Badkamer, keuken of vloer — alles over tegelwerk",
                  },
                ].map((topic) => (
                  <Link
                    key={topic.href}
                    href={topic.href}
                    className="group bg-zinc-900 p-6 rounded-2xl border border-white/5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all hover:-translate-y-0.5"
                  >
                    <h3 className="font-bold text-white mb-2 group-hover:text-primary-300 transition-colors flex items-center gap-2 text-sm">
                      {topic.title}
                      <ArrowRight size={14} className="text-primary-400" />
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">{topic.desc}</p>
                  </Link>
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
