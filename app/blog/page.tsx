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
  CheckCircle,
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
    image:
      "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: "Wat Kost Schilderwerk in 2026?",
    excerpt:
      "Benieuwd naar de kosten van schilderwerk? Ontdek welke factoren de prijs bepalen en vraag een vrijblijvende offerte aan.",
    slug: "wat-kost-schilderwerk",
    category: "Prijzen",
    readTime: "7 min",
    date: "2026",
    image:
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: "Spackspuiten vs Traditioneel Stucwerk",
    excerpt:
      "Wat is het verschil tussen spackspuiten en traditioneel stucwerk? Ontdek de voor- en nadelen en welke techniek het beste bij jouw project past.",
    slug: "verschil-spackspuiten-traditioneel",
    category: "Technieken",
    readTime: "6 min",
    date: "2026",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: "Hoe Lang Duurt Stucwerk?",
    excerpt:
      "Benieuwd hoe lang stucwerk duurt? Ontdek wat de doorlooptijd bepaalt en plan je verbouwing slim. Expert advies van MKH Bouw.",
    slug: "hoe-lang-duurt-stucwerk",
    category: "Planning",
    readTime: "6 min",
    date: "2026",
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=2669&auto=format&fit=crop",
  },
  {
    title: "Stucwerk Scheuren Repareren: Complete Gids",
    excerpt:
      "Last van scheuren in je stucwerk? Ontdek de oorzaken, oplossingen en wanneer je een professional moet inschakelen.",
    slug: "stucwerk-scheuren-repareren",
    category: "Onderhoud",
    readTime: "8 min",
    date: "2026",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop",
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
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop"
              alt="MKH Bouw blog"
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
                <span className="relative">
                  <span className="relative z-10">Gidsen</span>
                  <span className="absolute bottom-2 left-0 right-0 h-3 bg-accent/30 -z-0 rounded" />
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl"
              >
                Praktische tips, prijsinformatie en vakkundig advies over
                stucwerk, schilderwerk en renovatie. Al onze kennis en ervaring
                gebundeld in uitgebreide artikelen.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white border-b border-gray-100 sticky top-[72px] z-30 backdrop-blur-lg bg-white/90">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.slug}
                    className={`px-6 py-2.5 rounded-full font-semibold transition-all text-sm ${
                      category.slug === "alle"
                        ? "bg-primary text-white shadow-lg shadow-primary/25"
                        : "bg-gray-100 text-gray-700 hover:bg-primary/10 hover:text-primary"
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
        <section className="py-20 bg-gray-50 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group block bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2"
                    >
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left z-10" />
                      <div className="relative h-52 overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <span className="inline-block bg-accent text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                          <div className="flex items-center gap-1.5">
                            <Calendar size={14} />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock size={14} />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>

                        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                          Lees meer
                          <ArrowRight size={18} />
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
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary/90" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div {...fadeUp} className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Hulp Nodig Bij Je Project?
              </h2>
              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                Na het lezen van onze gidsen nog vragen? Wij helpen je graag
                persoonlijk verder met professioneel advies op maat.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4.5 rounded-xl font-bold text-lg hover:bg-accent-600 transition-all shadow-xl shadow-accent/25 hover:shadow-2xl hover:shadow-accent/30 hover:-translate-y-0.5"
                >
                  Gratis Offerte Aanvragen
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
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
            </motion.div>
          </div>
        </section>

        {/* Popular Topics */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                  Meer Lezen
                </span>
                <h2 className="text-3xl font-bold text-gray-900">
                  Populaire Onderwerpen
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
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
                    href: "/diensten/renovatie",
                    title: "Renovatie planning",
                    desc: "Complete gids voor het plannen van je renovatieproject",
                  },
                  {
                    href: "/locaties/stucwerk-amsterdam",
                    title: "Lokale info",
                    desc: "Specifieke informatie en prijzen voor jouw regio",
                  },
                ].map((topic) => (
                  <Link
                    key={topic.href}
                    href={topic.href}
                    className="group bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all"
                  >
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                      {topic.title}
                      <ArrowRight size={16} className="text-accent" />
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {topic.desc}
                    </p>
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
