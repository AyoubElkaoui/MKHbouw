"use client";

import Link from "next/link";
import { Phone, ArrowRight, CheckCircle, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Dark blue gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-zinc-900" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute top-20 right-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-60 h-60 bg-white/[0.02] rounded-full blur-3xl" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='1'%3E%3Cpath d='M0 0h1v40H0zM40 0v1H0V0z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-6 py-2.5 rounded-full text-sm font-semibold border border-white/15">
              <Zap className="w-4 h-4 text-primary-300" fill="currentColor" />
              Gratis & Vrijblijvend
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Start Vandaag Nog
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10"
          >
            Ontvang binnen{" "}
            <span className="font-bold text-white">24 uur</span> een
            persoonlijke offerte. Ervaren vakmanschap, eerlijke prijzen.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center bg-white text-primary-800 px-10 py-5 rounded-xl font-bold text-lg hover:bg-primary-50 transition-all shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-black/30 hover:-translate-y-0.5"
            >
              Vraag Offerte Aan
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="tel:+31684794108"
              className="group inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/20 hover:border-white/30 transition-all"
            >
              <Phone className="mr-3 w-5 h-5 group-hover:rotate-12 transition-transform" />
              <div className="text-left">
                <div className="text-xs text-white/60 font-normal -mb-0.5">
                  Of bel direct
                </div>
                <div>06 84794108</div>
              </div>
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 md:gap-10"
          >
            {[
              "24 uur reactie gegarandeerd",
              "Transparante vaste prijzen",
              "15+ jaar ervaring",
            ].map((text) => (
              <div
                key={text}
                className="flex items-center gap-2 text-white/70 text-sm"
              >
                <CheckCircle className="w-4 h-4 text-primary-300 flex-shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
