"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Stucwerk",
    description:
      "Professioneel stucwerk voor nieuwbouw en renovatie. Van glad sausklaar tot decoratieve afwerking met sierpleister en betonlook. Ons team gebruikt moderne technieken voor perfect gladde oppervlakken.",
    image:
      "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=2670&auto=format&fit=crop",
    slug: "stucwerk",
  },
  {
    title: "Schilderwerk",
    description:
      "Vakkundig binnen- en buitenschilderwerk. Wij werken met hoogwaardige verven voor een duurzaam en mooi resultaat. Met aandacht voor kleuradvies en bescherming tegen weersinvloeden.",
    image:
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2670&auto=format&fit=crop",
    slug: "schilderwerk",
  },
  {
    title: "Complete Renovatie",
    description:
      "Van ontwerp tot oplevering verzorgen wij uw complete renovatieproject. Ideaal voor bedrijfspanden en woningen. Van keuken tot badkamer, wij coördineren alles voor een stressvrije ervaring.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2531&auto=format&fit=crop",
    slug: "renovatie",
  },
];

export default function Services() {
  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Onze diensten
          </h2>
          <p className="text-xl text-gray-600">
            Van stucwerk tot complete renovaties - wij leveren kwaliteit die
            blijft. Ontdek onze belangrijkste diensten hieronder, elk uitgevoerd
            met vakmanschap en aandacht voor detail.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link key={service.slug} href={`/diensten/${service.slug}`}>
              <div className="group bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                    Meer informatie
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/diensten"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Bekijk al onze diensten
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
