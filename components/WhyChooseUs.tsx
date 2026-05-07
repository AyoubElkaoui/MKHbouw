"use client";

import { Shield, Users, Award, Clock } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Shield,
    title: "Garantie op Kwaliteit",
    description:
      "Wij staan achter ons werk met volledige garantie op al onze werkzaamheden voor uw gemoedsrust.",
    gradient: "from-primary-700 to-primary-500",
  },
  {
    icon: Users,
    title: "Ervaren Vakmensen",
    description:
      "Gecertificeerde professionals met jarenlange ervaring in alle bouwdisciplines.",
    gradient: "from-primary-800 to-primary-600",
  },
  {
    icon: Award,
    title: "Erkend Bedrijf",
    description:
      "Volledig KVK-geregistreerd en verzekerd voor uw veiligheid en vertrouwen.",
    gradient: "from-primary-700 to-blue-500",
  },
  {
    icon: Clock,
    title: "Binnen Planning",
    description:
      "Duidelijke afspraken, geen verrassingen achteraf. Wij houden ons aan planningen en budgetten.",
    gradient: "from-blue-700 to-primary-500",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 bg-zinc-950 relative overflow-hidden">
      {/* Top line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute top-20 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary-400 px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4 border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary-400" />
            Onze Beloften
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5">
            Waarom <span className="text-primary-400">MKH Bouw</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Meer dan 500 projecten succesvol afgerond in heel Nederland. Kwaliteit en betrouwbaarheid staan voorop.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-zinc-900 rounded-2xl p-7 border border-white/5 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-1"
              >
                {/* Top border glow on hover */}
                <div
                  className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r ${feature.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity`}
                />

                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300 border border-primary/20 group-hover:border-primary">
                  <Icon
                    size={26}
                    className="text-primary-400 group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-zinc-500 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
