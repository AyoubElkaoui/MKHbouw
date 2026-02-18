"use client";

import { Phone, ArrowRight, Star, Shield, Clock } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://plus.unsplash.com/premium_photo-1675601690595-41b44f3cacd7?q=80&w=2670&auto=format&fit=crop"
          alt="Professioneel bouwwerk"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-sm font-medium border border-white/20">
              <span className="flex items-center gap-1">
                <Star size={14} className="fill-accent text-accent" />
                <Star size={14} className="fill-accent text-accent" />
                <Star size={14} className="fill-accent text-accent" />
                <Star size={14} className="fill-accent text-accent" />
                <Star size={14} className="fill-accent text-accent" />
              </span>
              Vakmanschap met garantie
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]"
          >
            Professioneel{" "}
            <span className="relative">
              <span className="relative z-10">Stucwerk</span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-accent/30 -z-0 rounded" />
            </span>{" "}
            &{" "}
            <span className="relative">
              <span className="relative z-10">Schilderwerk</span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-accent/30 -z-0 rounded" />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl"
          >
            MKH Bouw is gevestigd in Amsterdam en actief door heel Nederland.
            Specialist in stucwerk, schilderwerk en complete renovaties met meer
            dan 15 jaar ervaring.
          </motion.p>

          {/* USP Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            {[
              { icon: Shield, text: "15+ jaar ervaring" },
              { icon: Clock, text: "Binnen 24u reactie" },
              { icon: Star, text: "Vaste prijsafspraak" },
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

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4.5 rounded-xl font-bold text-lg hover:bg-accent-600 transition-all shadow-xl shadow-accent/25 hover:shadow-2xl hover:shadow-accent/30 hover:-translate-y-0.5"
            >
              Gratis Offerte Aanvragen
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
          </motion.div>
        </div>
      </div>

      {/* Stats bar at bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-xl border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { number: "15+", label: "Jaar Ervaring" },
              { number: "500+", label: "Projecten" },
              { number: "100%", label: "Klanttevredenheid" },
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
  );
}
