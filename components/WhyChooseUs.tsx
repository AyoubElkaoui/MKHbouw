"use client";

import { Shield, Users, Award, Clock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Garantie op kwaliteit",
    description:
      "Wij staan achter ons werk met volledige garantie op al onze werkzaamheden voor uw gemoedsrust.",
  },
  {
    icon: Users,
    title: "Ervaren vakmensen",
    description:
      "Gecertificeerde professionals met jarenlange ervaring die regelmatig bijscholing volgen.",
  },
  {
    icon: Award,
    title: "Erkend bedrijf",
    description:
      "Volledig KVK-geregistreerd en verzekerd voor uw veiligheid en vertrouwen.",
  },
  {
    icon: Clock,
    title: "Binnen planning",
    description:
      "Duidelijke afspraken, geen verrassingen achteraf. Wij houden ons aan planningen en budgetten.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Waarom MKH Bouw
          </h2>
          <p className="text-xl text-gray-600">
            Sinds 2008 uw betrouwbare partner voor stucwerk en schilderwerk.
            Meer dan 500 projecten succesvol afgerond. Wij combineren ervaring
            met moderne technieken voor optimale resultaten.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title}>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
