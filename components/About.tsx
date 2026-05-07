"use client";

import { CheckCircle, Shield, Users } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="over-ons"
      className="py-24 lg:py-32 bg-zinc-900 relative overflow-hidden"
    >
      {/* Subtle top line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/[0.03] to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary-400 px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4 border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary-400" />
            Over MKH Bouw
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5">
            Waarom Kiezen voor{" "}
            <span className="text-primary-400">MKH Bouw</span>?
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Uw betrouwbare partner voor totale afbouw en renovatie door heel Nederland.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 leading-snug">
              Uw complete bouwpartner{" "}
              <span className="text-primary-400">door heel Nederland</span>
            </h3>
            <p className="text-zinc-400 mb-5 leading-relaxed">
              MKH Bouw is een professioneel bouwbedrijf gevestigd in Amsterdam, gespecialiseerd in totale afbouw en renovatie. Met meer dan 15 jaar ervaring leveren wij hoogwaardige bouwdiensten voor zowel particulieren als bedrijven — van stucwerk en schilderwerk tot elektra, dakleggen en loodgieterswerk.
            </p>
            <p className="text-zinc-500 mb-5 leading-relaxed">
              Wat ons onderscheidt? Wij doen wat we beloven — afspraak is afspraak. Onze ervaren vakmensen werken met precisie en aandacht voor detail, of het nu gaat om een kleine klus of een complete renovatie.
            </p>
            <p className="text-zinc-500 mb-10 leading-relaxed">
              Wij werken uitsluitend met hoogwaardige materialen en moderne technieken. Eén aanspreekpunt voor alle bouwkundige werkzaamheden — dat is het gemak van MKH Bouw.
            </p>

            {/* Features */}
            <div className="space-y-5">
              {[
                {
                  icon: CheckCircle,
                  title: "Jarenlange Ervaring",
                  desc: "Professionele service met bewezen expertise in alle bouwdisciplines",
                },
                {
                  icon: Shield,
                  title: "Betrouwbaar & Eerlijk",
                  desc: "Transparante werkwijze, vaste prijzen zonder verrassingen",
                },
                {
                  icon: Users,
                  title: "Persoonlijk Advies",
                  desc: "Wij denken actief met u mee voor het beste resultaat",
                },
              ].map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 group p-4 -mx-4 rounded-2xl hover:bg-white/[0.03] transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/30 transition-shadow">
                    <feature.icon className="text-white" size={22} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-0.5">
                      {feature.title}
                    </h4>
                    <p className="text-zinc-500 text-sm">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Main large image */}
              <div className="col-span-2 relative h-[320px] rounded-2xl overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1770838773417-08b18661c62f?q=80&w=2670&auto=format&fit=crop"
                  alt="MKH Bouw professioneel bouwwerk"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/5 backdrop-blur-xl rounded-xl p-5 border border-white/10">
                    <div className="text-white text-3xl font-bold">15+</div>
                    <div className="text-zinc-400 text-sm font-medium">
                      Jaar ervaring landelijk
                    </div>
                  </div>
                </div>
              </div>
              {/* Two smaller images */}
              <div className="relative h-[200px] rounded-2xl overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1761986757577-140af8859587?q=80&w=2670&auto=format&fit=crop"
                  alt="Stucwerk detail"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/5 transition-colors" />
              </div>
              <div className="relative h-[200px] rounded-2xl overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1742900280861-32bed068938b?q=80&w=2670&auto=format&fit=crop"
                  alt="Schilderwerk detail"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/5 transition-colors" />
              </div>
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-4 border-primary/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-white/5 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
