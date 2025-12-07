import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CheckCircle, Shield, Users, Award, Clock, ThumbsUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Over Ons - MKH Bouw | Ervaren Klussenbedrijf Amsterdam',
  description: 'MKH Bouw is een ervaren klussenbedrijf in Amsterdam gespecialiseerd in B2B en B2C projecten. Jarenlange expertise in stucwerk, schilderwerk, renovaties en facility services. Uw betrouwbare onderhoudspartner.',
  keywords: ['klussenbedrijf Amsterdam', 'ervaren aannemer', 'betrouwbaar klussenbedrijf', 'MKH Bouw', 'zakelijke bouwpartner', 'facility service Amsterdam', 'onderhoudscontract bouw'],
};

export default function OverOns() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <img 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop" 
              alt="Construction background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Over <span className="text-blue-600">MKH Bouw</span>
              </h1>
              <p className="text-xl text-gray-600">
                Uw betrouwbare partner voor alle klussen in en om het huis in Amsterdam
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute top-20 left-0 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-0 w-96 h-96 bg-slate-200/20 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                {/* Text Content */}
                <div>
                  <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                    Wie Zijn Wij
                  </span>
                  <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6">
                    <span className="bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
                      Professioneel Klussenbedrijf
                    </span>
                  </h2>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    MKH Bouw is een professioneel klussenbedrijf gevestigd in het hart van Amsterdam. Met jarenlange ervaring in de bouwsector hebben wij ons gespecialiseerd in het leveren van kwalitatieve kluswerken voor zowel particulieren als bedrijven.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Wat ons onderscheidt is onze persoonlijke aanpak en betrokkenheid bij elk project. Of het nu gaat om een klein schilderklus of een complete renovatie, wij behandelen elke opdracht met dezelfde zorgvuldigheid en aandacht voor detail.
                  </p>
                </div>

                {/* Image */}
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=2670&auto=format&fit=crop" 
                      alt="Professional construction team"
                      className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-16 items-center">
                {/* Image */}
                <div className="relative group order-2 md:order-1">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2670&auto=format&fit=crop" 
                      alt="Quality construction work"
                      className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="order-1 md:order-2">
                  <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                    Onze Werkwijze
                  </span>
                  <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6">
                    <span className="bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
                      Kwaliteit Gegarandeerd
                    </span>
                  </h2>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Bij MKH Bouw werken we volgens een vaste werkwijze die garantie biedt voor een succesvol eindresultaat. We beginnen altijd met een vrijblijvend gesprek waarin we uw wensen en eisen in kaart brengen.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Tijdens de uitvoering houden we u op de hoogte van de voortgang en zijn we altijd bereikbaar voor vragen of aanpassingen. Wij werken netjes, houden de werkplek schoon en zorgen ervoor dat het project binnen de afgesproken tijd wordt opgeleverd.
                  </p>
                  <div className="inline-flex items-center gap-2 bg-blue-50 px-6 py-3 rounded-full">
                    <span className="text-blue-600 font-bold text-lg">✓</span>
                    <span className="text-slate-700 font-semibold">Afspraak is afspraak</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-500/5 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                  Onze Kracht
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
                  Waarom kiezen voor MKH Bouw?
                </h2>
                <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-slate-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-blue-500/50 transform group-hover:scale-110 transition-all">
                      <Award className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors">
                      Jarenlange Ervaring
                    </h3>
                    <p className="text-gray-600 group-hover:text-white/90 transition-colors leading-relaxed">
                      Wij hebben uitgebreide ervaring opgebouwd in diverse bouwprojecten door heel Amsterdam en omstreken.
                    </p>
                  </div>
                </div>

                <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-slate-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-blue-500/50 transform group-hover:scale-110 transition-all">
                      <Shield className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors">
                      Betrouwbaar & Eerlijk
                    </h3>
                    <p className="text-gray-600 group-hover:text-white/90 transition-colors leading-relaxed">
                      Bij ons is afspraak afspraak. We staan voor transparante communicatie en eerlijke prijzen zonder verrassingen.
                    </p>
                  </div>
                </div>

                <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-slate-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-blue-500/50 transform group-hover:scale-110 transition-all">
                      <CheckCircle className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors">
                      Vakmanschap
                    </h3>
                    <p className="text-gray-600 group-hover:text-white/90 transition-colors leading-relaxed">
                      Ons team bestaat uit ervaren vakmensen die hun vak verstaan en trots zijn op hun werk.
                    </p>
                  </div>
                </div>

                <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-slate-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-blue-500/50 transform group-hover:scale-110 transition-all">
                      <Users className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors">
                      Persoonlijke Aanpak
                    </h3>
                    <p className="text-gray-600 group-hover:text-white/90 transition-colors leading-relaxed">
                      We denken actief met u mee en bieden advies op maat voor uw specifieke situatie en wensen.
                    </p>
                  </div>
                </div>

                <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-slate-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-blue-500/50 transform group-hover:scale-110 transition-all">
                      <Clock className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors">
                      Op Tijd Klaar
                    </h3>
                    <p className="text-gray-600 group-hover:text-white/90 transition-colors leading-relaxed">
                      We houden ons aan afspraken en zorgen dat uw project binnen de planning wordt opgeleverd.
                    </p>
                  </div>
                </div>

                <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-slate-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-blue-500/50 transform group-hover:scale-110 transition-all">
                      <ThumbsUp className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors">
                      Tevreden Klanten
                    </h3>
                    <p className="text-gray-600 group-hover:text-white/90 transition-colors leading-relaxed">
                      Onze klanten waarderen onze service en kwaliteit, wat resulteert in veel terugkerende klanten.
                    </p>
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
              Klaar om te starten met uw project?
            </h2>
            <p className="text-xl text-slate-100 mb-8 max-w-2xl mx-auto">
              Neem vandaag nog contact met ons op voor een vrijblijvende offerte
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all font-semibold text-lg shadow-lg"
              >
                Vraag Offerte Aan
              </a>
              <a
                href="tel:+31684794108"
                className="bg-blue-700 text-white px-8 py-4 rounded-full hover:bg-blue-800 transition-all font-semibold text-lg"
              >
                Bel Direct: +31 6 84794108
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
