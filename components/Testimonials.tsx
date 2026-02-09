"use client";

import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Marco de Vries",
    role: "Eigenaar horecagelegenheid",
    location: "Amsterdam",
    text: "MKH Bouw heeft onze complete zaak gerenoveerd. Van stucwerk tot schilderwerk, alles binnen tijd en budget. Het team werkte netjes en professioneel, met minimale overlast voor onze gasten. Zeer tevreden met het eindresultaat!",
    initials: "MV",
  },
  {
    name: "Linda Bakker",
    role: "Particulier",
    location: "Utrecht",
    text: "Fantastisch werk geleverd bij onze woningrenovatie. De communicatie was helder, de planning klopte precies en het resultaat overtrof onze verwachtingen. Het team was vriendelijk en zorgvuldig.",
    initials: "LB",
  },
  {
    name: "Peter Janssen",
    role: "Facility Manager",
    location: "Rotterdam",
    text: "Al meerdere kantoorpanden laten renoveren door MKH Bouw. Altijd snel, netjes en met minimale overlast voor onze medewerkers. Een betrouwbare partner voor al onze facility behoeften.",
    initials: "PJ",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-gray-50 relative overflow-hidden">
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
            Klantervaringen
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-5">
            Wat Klanten <span className="text-primary">Zeggen</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Meer dan 250 tevreden klanten gingen u voor. Lees hun ervaringen met
            onze diensten.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-white p-8 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all duration-500"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6">
                <Quote
                  size={32}
                  className="text-primary/10 group-hover:text-primary/20 transition-colors fill-current"
                />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="fill-accent text-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 mb-8 leading-relaxed text-sm">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {testimonial.role} &bull; {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
