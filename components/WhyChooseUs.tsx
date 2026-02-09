"use client";

import { Shield, Users, Award, Clock } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Shield,
    title: "Garantie op Kwaliteit",
    description:
      "Wij staan achter ons werk met volledige garantie op al onze werkzaamheden voor uw gemoedsrust.",
    accent: "from-primary to-blue-600",
  },
  {
    icon: Users,
    title: "Ervaren Vakmensen",
    description:
      "Gecertificeerde professionals met jarenlange ervaring die regelmatig bijscholing volgen.",
    accent: "from-primary to-indigo-600",
  },
  {
    icon: Award,
    title: "Erkend Bedrijf",
    description:
      "Volledig KVK-geregistreerd en verzekerd voor uw veiligheid en vertrouwen.",
    accent: "from-primary to-violet-600",
  },
  {
    icon: Clock,
    title: "Binnen Planning",
    description:
      "Duidelijke afspraken, geen verrassingen achteraf. Wij houden ons aan planningen en budgetten.",
    accent: "from-primary to-cyan-600",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-primary/5 text-primary px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-accent" />
            Onze Beloften
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-5">
            Waarom <span className="text-primary">MKH Bouw</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Sinds 2008 uw betrouwbare partner voor stucwerk en schilderwerk.
            Meer dan 500 projecten succesvol afgerond.
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
                className="group relative bg-white rounded-2xl p-7 border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all duration-500"
              >
                {/* Subtle top border accent */}
                <div
                  className={`absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r ${feature.accent} rounded-full opacity-0 group-hover:opacity-100 transition-opacity`}
                />

                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300">
                  <Icon
                    size={26}
                    className="text-primary group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
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
