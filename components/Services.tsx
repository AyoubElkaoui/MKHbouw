'use client';

import { Hammer, PaintBucket, Sparkles, Home, Brush, Wallpaper, Trash2, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Sparkles,
    title: 'Spackspuiten',
    description: 'Professioneel spackspuiten voor een glad en egaal oppervlak',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2670&auto=format&fit=crop',
  },
  {
    icon: Hammer,
    title: 'Stucwerk',
    description: 'Sausklaar of behangklaar stucwerk volgens uw wensen',
    image: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=2670&auto=format&fit=crop',
  },
  {
    icon: PaintBucket,
    title: 'Sierpleister',
    description: 'Decoratieve afwerking voor een unieke uitstraling',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop',
  },
  {
    icon: Brush,
    title: 'Schuurwerk',
    description: 'Zorgvuldig schuren voor optimale voorbereiding',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=2669&auto=format&fit=crop',
  },
  {
    icon: PaintBucket,
    title: 'Schilderwerk',
    description: 'Vakkundig binnen- en buitenschilderwerk',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2670&auto=format&fit=crop',
  },
  {
    icon: Wallpaper,
    title: 'Behangen',
    description: 'Professioneel behangen met oog voor detail',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2669&auto=format&fit=crop',
  },
  {
    icon: Trash2,
    title: 'Sloopwerk',
    description: 'Veilig en efficiënt sloopwerk uitgevoerd',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2574&auto=format&fit=crop',
  },
  {
    icon: Home,
    title: 'Renovatie',
    description: 'Complete renovatieprojecten van A tot Z',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2531&auto=format&fit=crop',
  },
];

export default function Services() {
  return (
    <section id="diensten" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
            Onze Specialisaties
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Professionele Diensten in Amsterdam
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Van stucwerk tot complete renovaties - MKH Bouw is uw specialist voor alle klussen in en om uw huis
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200/50 overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div>
                  
                  {/* Icon on Image */}
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="absolute bottom-4 left-4 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl"
                  >
                    <Icon className="text-blue-600" size={28} />
                  </motion.div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Bekijk al onze diensten en vraag direct een offerte aan
          </p>
          <a
            href="/diensten"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 font-semibold text-lg shadow-lg"
          >
            Bekijk Alle Diensten
          </a>
        </div>
      </div>
    </section>
  );
}
