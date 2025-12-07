'use client';

import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Jan de Vries',
    location: 'Amsterdam West',
    rating: 5,
    text: 'MKH Bouw heeft onze woonkamer perfect gestuckt en geschilderd. Vakwerk van hoge kwaliteit en netjes afgewerkt. Zeer tevreden!',
    service: 'Stucwerk & Schilderwerk',
  },
  {
    name: 'Sophie Bakker',
    location: 'Amsterdam Zuid',
    rating: 5,
    text: 'Professioneel bedrijf dat doet wat het belooft. Onze complete renovatie is binnen tijd en budget opgeleverd. Aanrader!',
    service: 'Complete Renovatie',
  },
  {
    name: 'Mohammed El Amrani',
    location: 'Amsterdam Oost',
    rating: 5,
    text: 'Uitstekende service! Het spackspuiten van ons plafond ziet er perfect uit. Vriendelijk personeel en eerlijke prijzen.',
    service: 'Spackspuiten',
  },
  {
    name: 'Lisa van Dijk',
    location: 'Amsterdam Noord',
    rating: 5,
    text: 'MKH Bouw heeft ons geholpen met sierpleister in de hal. Het resultaat is prachtig en ze hebben netjes gewerkt.',
    service: 'Sierpleister',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
            Wat Klanten Zeggen
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Reviews van Onze Klanten
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ontdek waarom klanten in Amsterdam kiezen voor MKH Bouw
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-slate-100 overflow-hidden group"
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
              
              {/* Quote mark */}
              <div className="absolute top-4 right-4 text-6xl text-slate-100 group-hover:text-slate-200 transition-colors font-serif">"</div>
              
              {/* Stars */}
              <div className="flex gap-1 mb-4 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + i * 0.05 }}
                  >
                    <Star
                      className="text-blue-500 fill-blue-500"
                      size={20}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Service */}
              <div className="text-sm font-semibold text-blue-600 mb-3 relative z-10">
                {testimonial.service}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-4 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author with Avatar */}
              <div className="border-t border-slate-100 pt-4 relative z-10 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-slate-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap justify-center items-center gap-12"
        >
          {[
            { number: '100+', label: 'Tevreden Klanten' },
            { number: '15+', label: 'Jaar Ervaring' },
            { number: '500+', label: 'Projecten Voltooid' },
            { number: '5★', label: 'Gemiddelde Beoordeling' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
