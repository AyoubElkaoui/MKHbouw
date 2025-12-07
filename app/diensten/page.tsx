import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Hammer, PaintBucket, Sparkles, Home, Brush, Wallpaper, Trash2, Wrench } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Diensten - MKH Bouw | Stucwerk, Schilderwerk & Renovaties Amsterdam',
  description: 'MKH Bouw biedt professionele diensten in Amsterdam: spackspuiten, stucwerk, sierpleister, schilderwerk, behangen, renovaties en meer. Vraag een offerte aan!',
  keywords: ['spackspuiten Amsterdam', 'stucwerk Amsterdam', 'schilderwerk Amsterdam', 'renovatie Amsterdam', 'klussenbedrijf diensten'],
};

const services = [
  {
    icon: Sparkles,
    title: 'Spackspuiten',
    slug: 'spackspuiten',
    description: 'Professioneel spackspuiten voor een glad en egaal oppervlak',
    fullDescription: 'Wij bieden professioneel spackspuitwerk voor zowel plafonds als wanden. Met moderne apparatuur zorgen we voor een perfect egaal eindresultaat.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2670&auto=format&fit=crop',
  },
  {
    icon: Hammer,
    title: 'Stucwerk',
    slug: 'stucwerk',
    description: 'Sausklaar of behangklaar stucwerk volgens uw wensen',
    fullDescription: 'Vakkundig stucwerk dat direct sausklaar of behangklaar wordt opgeleverd. Wij werken met hoogwaardige materialen voor duurzaam resultaat.',
    image: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=2670&auto=format&fit=crop',
  },
  {
    icon: PaintBucket,
    title: 'Sierpleister',
    slug: 'sierpleister',
    description: 'Decoratieve afwerking voor een unieke uitstraling',
    fullDescription: 'Geef uw woning een luxe uitstraling met sierpleister. Verkrijgbaar in diverse structuren en kleuren voor een uniek effect.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop',
  },
  {
    icon: Brush,
    title: 'Schuurwerk',
    slug: 'schuurwerk',
    description: 'Zorgvuldig schuren voor optimale voorbereiding',
    fullDescription: 'Professioneel schuurwerk als voorbereiding voor schilderwerk of stucwerk. Wij zorgen voor een perfect glad oppervlak.',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=2669&auto=format&fit=crop',
  },
  {
    icon: PaintBucket,
    title: 'Schilderwerk',
    slug: 'schilderwerk',
    description: 'Vakkundig binnen- en buitenschilderwerk',
    fullDescription: 'Complete schilderwerken voor binnen en buiten. Van kozijnen tot complete woningen, wij leveren vakwerk met oog voor detail.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2670&auto=format&fit=crop',
  },
  {
    icon: Wallpaper,
    title: 'Behangen',
    slug: 'behangen',
    description: 'Professioneel behangen met oog voor detail',
    fullDescription: 'Deskundig behangwerk met perfecte naadaansluiting. Wij werken met alle soorten behang van klassiek tot modern.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2669&auto=format&fit=crop',
  },
  {
    icon: Trash2,
    title: 'Sloopwerk',
    slug: 'sloopwerk',
    description: 'Veilig en efficiënt sloopwerk uitgevoerd',
    fullDescription: 'Professioneel sloopwerk met oog voor veiligheid. Wij verzorgen ook de afvoer van sloopafval conform regelgeving.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2574&auto=format&fit=crop',
  },
  {
    icon: Home,
    title: 'Renovatie',
    slug: 'renovatie',
    description: 'Complete renovatieprojecten van A tot Z',
    fullDescription: 'Totaalrenovaties voor uw woning of bedrijfspand. Van ontwerp tot oplevering, wij begeleiden u door het hele proces.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2531&auto=format&fit=crop',
  },
];

export default function Diensten() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <img 
              src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2670&auto=format&fit=crop" 
              alt="Construction tools background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <span className="inline-block bg-blue-50 text-blue-600 px-6 py-2 rounded-full font-semibold text-sm uppercase tracking-wide mb-6">
                Wat Wij Doen
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6">
                Onze <span className="bg-gradient-to-r from-blue-600 to-slate-700 bg-clip-text text-transparent">Diensten</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-12">
                Van klein tot groot, wij verzorgen alle klussen in en om uw huis in Amsterdam
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-left max-w-3xl mx-auto">
                <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                  <span className="text-blue-600 font-bold text-xl">✓</span>
                  <span className="text-gray-700 font-medium">8+ Specialisaties</span>
                </div>
                <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                  <span className="text-blue-600 font-bold text-xl">✓</span>
                  <span className="text-gray-700 font-medium">Vakkundig Team</span>
                </div>
                <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                  <span className="text-blue-600 font-bold text-xl">✓</span>
                  <span className="text-gray-700 font-medium">Eerlijke Prijzen</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-gradient-to-br from-white to-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 overflow-hidden"
                  >
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div>
                      
                      {/* Icon on Image */}
                      <div className="absolute bottom-4 left-4">
                        <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                          <Icon className="text-blue-600" size={32} />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {service.fullDescription}
                      </p>
                      <Link
                        href={`/diensten/${service.slug}`}
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                      >
                        Meer informatie →
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Waarom MKH Bouw voor uw klus?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="text-blue-600 text-3xl font-bold">01</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Vakmanschap</h3>
                    <p className="text-gray-600">Ervaren professionals met oog voor detail en kwaliteit</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-blue-600 text-3xl font-bold">02</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Transparantie</h3>
                    <p className="text-gray-600">Duidelijke offertes zonder verborgen kosten</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-blue-600 text-3xl font-bold">03</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Flexibiliteit</h3>
                    <p className="text-gray-600">We denken graag met u mee over de beste oplossing</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-blue-600 text-3xl font-bold">04</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Garantie</h3>
                    <p className="text-gray-600">Wij staan achter ons werk met garantie op alle werkzaamheden</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Heeft u een klus voor ons?
            </h2>
            <p className="text-xl text-slate-100 mb-8 max-w-2xl mx-auto">
              Vraag vandaag nog een vrijblijvende offerte aan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all font-semibold text-lg shadow-lg"
              >
                Vraag Offerte Aan
              </Link>
              <a
                href="tel:+31684794108"
                className="bg-blue-700 text-white px-8 py-4 rounded-full hover:bg-blue-800 transition-all font-semibold text-lg"
              >
                Bel: +31 6 84794108
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
