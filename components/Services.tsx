"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Stucwerk",
    description:
      "Professioneel stucwerk voor nieuwbouw en renovatie. Van glad sausklaar tot decoratieve afwerking met sierpleister en betonlook.",
    image:
      "https://plus.unsplash.com/premium_photo-1661308315740-8fb4a111215a?q=80&w=2670&auto=format&fit=crop",
    slug: "stucwerk",
  },
  {
    title: "Schilderwerk",
    description:
      "Vakkundig binnen- en buitenschilderwerk met hoogwaardige verven voor een duurzaam en mooi resultaat.",
    image:
      "https://images.unsplash.com/photo-1679018179962-06922435f6bc?q=80&w=2670&auto=format&fit=crop",
    slug: "schilderwerk",
  },
  {
    title: "Complete Renovatie",
    description:
      "Van ontwerp tot oplevering verzorgen wij uw complete renovatieproject. Ideaal voor bedrijfspanden en woningen.",
    image:
      "https://plus.unsplash.com/premium_photo-1675601690595-41b44f3cacd7?q=80&w=2670&auto=format&fit=crop",
    slug: "renovatie",
  },
];

export default function Services() {
  return (
    <section className="py-24 lg:py-32 bg-gray-50 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <span className="inline-flex items-center gap-2 bg-primary/5 text-primary px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Onze Expertise
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
              Onze Diensten
            </h2>
          </div>
          <Link
            href="/diensten"
            className="group inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all self-start md:self-auto"
          >
            Bekijk alle diensten
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={`/diensten/${service.slug}`} className="group block">
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-primary/20">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/0 to-transparent" />
                    {/* Floating arrow */}
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <ArrowUpRight size={18} className="text-white" />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-7">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed mb-4 text-sm">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-semibold text-sm">
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
      </div>
    </section>
  );
}
