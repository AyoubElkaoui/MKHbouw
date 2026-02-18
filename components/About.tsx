"use client";

import { CheckCircle, Shield, Users } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="over-ons"
      className="py-24 lg:py-32 bg-white relative overflow-hidden"
    >
      {/* Subtle background accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/[0.02] to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 bg-primary/5 text-primary px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-accent" />
            Over MKH Bouw
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-5">
            Waarom Kiezen voor <span className="text-primary">MKH Bouw</span>?
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Uw betrouwbare partner voor stucwerk, schilderwerk en renovaties
            door heel Nederland.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 leading-snug">
              Uw betrouwbare klussenbedrijf{" "}
              <span className="text-primary">door heel Nederland</span>
            </h3>
            <p className="text-gray-600 mb-5 leading-relaxed">
              MKH Bouw is een professioneel klussenbedrijf gevestigd in
              Amsterdam, gespecialiseerd in stucwerk, schilderwerk en complete
              renovaties. Met jarenlange ervaring in de bouwsector leveren wij
              hoogwaardige kluswerken voor zowel particulieren als bedrijven
              door heel Nederland.
            </p>
            <p className="text-gray-500 mb-5 leading-relaxed">
              Wat ons onderscheidt? Wij doen wat we beloven &mdash; afspraak is
              afspraak. Onze ervaren vakmensen werken met precisie en aandacht
              voor detail, of het nu gaat om spackspuiten, sierpleister of een
              complete woningrenovatie.
            </p>
            <p className="text-gray-500 mb-10 leading-relaxed">
              Wij werken uitsluitend met hoogwaardige materialen en moderne
              technieken. Duurzaamheid is een kernwaarde, daarom kiezen wij waar
              mogelijk voor milieuvriendelijke producten.
            </p>

            {/* Features */}
            <div className="space-y-5">
              {[
                {
                  icon: CheckCircle,
                  title: "Jarenlange Ervaring",
                  desc: "Professionele service met bewezen expertise sinds 2008",
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
                  className="flex gap-4 group p-4 -mx-4 rounded-2xl hover:bg-primary/[0.03] transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/30 transition-shadow">
                    <feature.icon className="text-white" size={22} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-0.5">
                      {feature.title}
                    </h4>
                    <p className="text-gray-500 text-sm">{feature.desc}</p>
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
                  src="https://plus.unsplash.com/premium_photo-1678454428455-25e6dd839efb?q=80&w=2670&auto=format&fit=crop"
                  alt="MKH Bouw professioneel bouwwerk"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-xl rounded-xl p-5 border border-white/20">
                    <div className="text-white text-3xl font-bold">15+</div>
                    <div className="text-white/80 text-sm font-medium">
                      Jaar ervaring landelijk
                    </div>
                  </div>
                </div>
              </div>
              {/* Two smaller images */}
              <div className="relative h-[200px] rounded-2xl overflow-hidden group">
                <Image
                  src="https://plus.unsplash.com/premium_photo-1661308315740-8fb4a111215a?q=80&w=2670&auto=format&fit=crop"
                  alt="Stucwerk detail"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors" />
              </div>
              <div className="relative h-[200px] rounded-2xl overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1679018179962-06922435f6bc?q=80&w=2670&auto=format&fit=crop"
                  alt="Schilderwerk detail"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors" />
              </div>
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-4 border-accent/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-primary/10 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
