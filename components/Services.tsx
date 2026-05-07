"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Totaal Afbouw",
    description:
      "Complete afbouw van uw woning of bedrijfspand. Van ruwbouw tot perfecte afwerking — wij ontzorgen u volledig.",
    image:
      "https://images.unsplash.com/photo-1770838773417-08b18661c62f?q=80&w=2670&auto=format&fit=crop",
    slug: "totaal-afbouw",
  },
  {
    title: "Stucwerk & Gevelwerk",
    description:
      "Professioneel stucwerk binnen en gevelstucwerk buiten. Glad, decoratief of sierpleister — vakkundig uitgevoerd.",
    image:
      "https://images.unsplash.com/photo-1761986757577-140af8859587?q=80&w=2670&auto=format&fit=crop",
    slug: "stucwerk",
  },
  {
    title: "Schilderwerk",
    description:
      "Vakkundig binnen- en buitenschilderwerk met hoogwaardige verven voor een duurzaam en strak resultaat.",
    image:
      "https://images.unsplash.com/photo-1742900280861-32bed068938b?q=80&w=2670&auto=format&fit=crop",
    slug: "schilderwerk",
  },
  {
    title: "Tegelen",
    description:
      "Badkamer, keuken of vloer — wij tegelen nauwkeurig en strak. Binnen én buiten, alle formaten en stijlen.",
    image:
      "https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?q=80&w=2670&auto=format&fit=crop",
    slug: "tegelen",
  },
];

export default function Services() {
  return (
    <section className="py-24 lg:py-32 bg-zinc-950 relative overflow-hidden">
      {/* Subtle blue glow */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary-400 px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary-400" />
              Onze Expertise
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3">
              Onze Diensten
            </h2>
          </div>
          <Link
            href="/diensten"
            className="group inline-flex items-center gap-2 text-primary-400 font-semibold hover:gap-3 transition-all self-start md:self-auto hover:text-primary-300"
          >
            Bekijk alle diensten
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={`/diensten/${service.slug}`} className="group block">
                <div className="relative bg-zinc-900 rounded-2xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-70 group-hover:opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/20 to-transparent" />
                    {/* Floating arrow */}
                    <div className="absolute top-4 right-4 w-9 h-9 bg-primary/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-primary/30 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <ArrowUpRight size={16} className="text-white" />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-zinc-500 leading-relaxed mb-4 text-sm">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary-400 font-semibold text-sm">
                      <span>Meer informatie</span>
                      <ArrowRight
                        size={15}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* All services CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/diensten"
            className="inline-flex items-center gap-2 bg-zinc-900 text-white border border-white/10 hover:border-primary/40 px-8 py-4 rounded-xl font-semibold hover:bg-zinc-800 transition-all hover:-translate-y-0.5"
          >
            Alle 10 diensten bekijken
            <ArrowRight size={18} className="text-primary-400" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
