import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "blog & gidsen 2026 - tips over stucwerk en schilderwerk | mkhbouw",
  description:
    "lees onze uitgebreide gidsen over stucwerk, schilderwerk en renovatie in 2026. praktische tips, prijsinformatie en vakkundige adviezen van mkhbouw.",
  keywords: [
    "stucwerk blog",
    "schilderwerk tips",
    "renovatie gids",
    "stucwerk kosten",
    "doe het zelf stucwerk",
    "bouw blog nederland",
  ],
};

const blogPosts = [
  {
    title: "wat kost stucwerk in 2026?",
    excerpt:
      "ontdek welke factoren de prijs van stucwerk bepalen en vraag een vrijblijvende offerte aan. geen vaste prijzen maar wel transparant advies.",
    slug: "wat-kost-stucwerk",
    category: "prijzen",
    readTime: "8 min",
    date: "2026",
    image:
      "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: "wat kost schilderwerk in 2026?",
    excerpt:
      "benieuwd naar de kosten van schilderwerk? ontdek welke factoren de prijs bepalen en vraag een vrijblijvende offerte aan.",
    slug: "wat-kost-schilderwerk",
    category: "prijzen",
    readTime: "7 min",
    date: "2026",
    image:
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: "spackspuiten vs traditioneel stucwerk",
    excerpt:
      "wat is het verschil tussen spackspuiten en traditioneel stucwerk? ontdek de voor- en nadelen en welke techniek het beste bij jouw project past.",
    slug: "verschil-spackspuiten-traditioneel",
    category: "technieken",
    readTime: "6 min",
    date: "2026",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: "hoe lang duurt stucwerk?",
    excerpt:
      "benieuwd hoe lang stucwerk duurt? ontdek wat de doorlooptijd bepaalt en plan je verbouwing slim. expert advies van mkhbouw.",
    slug: "hoe-lang-duurt-stucwerk",
    category: "planning",
    readTime: "6 min",
    date: "2026",
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=2669&auto=format&fit=crop",
  },
  {
    title: "stucwerk scheuren repareren: complete gids",
    excerpt:
      "last van scheuren in je stucwerk? ontdek de oorzaken, oplossingen en wanneer je een professional moet inschakelen.",
    slug: "stucwerk-scheuren-repareren",
    category: "onderhoud",
    readTime: "8 min",
    date: "2026",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop",
  },
];

const categories = [
  { name: "alle artikelen", slug: "alle" },
  { name: "prijzen", slug: "prijzen" },
  { name: "technieken", slug: "technieken" },
  { name: "planning", slug: "planning" },
  { name: "onderhoud", slug: "onderhoud" },
];

export default function Blog() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                blog & gidsen
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                praktische tips, prijsinformatie en vakkundig advies over
                stucwerk, schilderwerk en renovatie. al onze kennis en ervaring
                gebundeld in uitgebreide artikelen.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.slug}
                    className={`px-6 py-2 rounded-full font-semibold transition-all ${
                      category.slug === "alle"
                        ? "bg-primary text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
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
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={16} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                        lees meer
                        <ArrowRight size={18} />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-primary to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  hulp nodig bij je project?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  na het lezen van onze gidsen nog vragen? wij helpen je graag
                  persoonlijk verder met professioneel advies op maat.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-xl"
                  >
                    gratis offerte aanvragen
                    <ArrowRight size={20} />
                  </Link>
                  <a
                    href="tel:+31684794108"
                    className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all"
                  >
                    bel: 06 84794108
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Topics */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                populaire onderwerpen
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Link
                  href="/diensten/stucwerk"
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group"
                >
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    alles over stucwerk →
                  </h3>
                  <p className="text-gray-600 text-sm">
                    ontdek welke soorten stucwerk er zijn en wat het beste bij
                    jouw project past
                  </p>
                </Link>

                <Link
                  href="/diensten/schilderwerk"
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group"
                >
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    schilderwerk info →
                  </h3>
                  <p className="text-gray-600 text-sm">
                    binnen- en buitenschilderwerk uitgelegd met tips en tricks
                  </p>
                </Link>

                <Link
                  href="/diensten/renovatie"
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group"
                >
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    renovatie planning →
                  </h3>
                  <p className="text-gray-600 text-sm">
                    complete gids voor het plannen van je renovatieproject
                  </p>
                </Link>

                <Link
                  href="/locaties/stucwerk-amsterdam"
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group"
                >
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    lokale info →
                  </h3>
                  <p className="text-gray-600 text-sm">
                    specifieke informatie en prijzen voor jouw regio
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
