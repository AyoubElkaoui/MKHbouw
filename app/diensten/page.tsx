import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Hammer,
  PaintBucket,
  Sparkles,
  Home,
  Brush,
  Wallpaper,
  Trash2,
  Wrench,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Diensten - MKH Bouw | Stucwerk, Schilderwerk & Renovaties Nederland",
  description:
    "MKH Bouw biedt professionele diensten door heel Nederland: spackspuiten, stucwerk, sierpleister, schilderwerk, behangen, renovaties en meer. Gevestigd in Amsterdam. Vraag een offerte aan!",
  keywords: [
    "spackspuiten",
    "stucwerk",
    "schilderwerk",
    "renovatie",
    "klussenbedrijf diensten",
    "MKH Bouw",
    "klussenbedrijf Nederland",
  ],
};

const services = [
  {
    icon: Sparkles,
    title: "Spackspuiten",
    slug: "spackspuiten",
    description: "Professioneel spackspuiten voor een glad en egaal oppervlak",
    fullDescription:
      "Wij bieden professioneel spackspuitwerk voor zowel plafonds als wanden. Met moderne apparatuur zorgen we voor een perfect egaal eindresultaat dat direct sausklaar is.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2670&auto=format&fit=crop",
  },
  {
    icon: Hammer,
    title: "Stucwerk",
    slug: "stucwerk",
    description: "Sausklaar of behangklaar stucwerk volgens uw wensen",
    fullDescription:
      "Vakkundig stucwerk dat direct sausklaar of behangklaar wordt opgeleverd. Wij werken met hoogwaardige materialen voor duurzaam resultaat, geschikt voor binnen en buiten.",
    image:
      "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=2670&auto=format&fit=crop",
  },
  {
    icon: PaintBucket,
    title: "Sierpleister",
    slug: "sierpleister",
    description: "Decoratieve afwerking voor een unieke uitstraling",
    fullDescription:
      "Geef uw woning of bedrijfspand een luxe uitstraling met sierpleister. Verkrijgbaar in diverse structuren en kleuren voor een uniek effect dat jarenlang mooi blijft.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop",
  },
  {
    icon: Brush,
    title: "Schuurwerk",
    slug: "schuurwerk",
    description: "Zorgvuldig schuren voor optimale voorbereiding",
    fullDescription:
      "Professioneel schuurwerk als voorbereiding voor schilderwerk of stucwerk. Wij zorgen voor een perfect glad oppervlak met moderne schuurapparatuur.",
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=2669&auto=format&fit=crop",
  },
  {
    icon: PaintBucket,
    title: "Schilderwerk",
    slug: "schilderwerk",
    description: "Vakkundig binnen- en buitenschilderwerk",
    fullDescription:
      "Complete schilderwerken voor binnen en buiten. Van kozijnen tot complete woningen en bedrijfspanden, wij leveren vakwerk met oog voor detail en duurzame kwaliteit.",
    image:
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2670&auto=format&fit=crop",
  },
  {
    icon: Wallpaper,
    title: "Behangen",
    slug: "behangen",
    description: "Professioneel behangen met oog voor detail",
    fullDescription:
      "Deskundig behangwerk met perfecte naadaansluiting. Wij werken met alle soorten behang van klassiek tot modern, inclusief glasvezelbehang en vliesbehang.",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2669&auto=format&fit=crop",
  },
  {
    icon: Trash2,
    title: "Sloopwerk",
    slug: "sloopwerk",
    description: "Veilig en efficiënt sloopwerk uitgevoerd",
    fullDescription:
      "Professioneel sloopwerk met oog voor veiligheid. Wij verzorgen ook de afvoer van sloopafval conform regelgeving, geschikt voor woningen en bedrijfspanden.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2574&auto=format&fit=crop",
  },
  {
    icon: Home,
    title: "Renovatie",
    slug: "renovatie",
    description: "Complete renovatieprojecten van A tot Z",
    fullDescription:
      "Totaalrenovaties voor uw woning of bedrijfspand. Van ontwerp tot oplevering, wij begeleiden u door het hele proces met persoonlijk advies en transparante communicatie.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2531&auto=format&fit=crop",
  },
];

export default function Diensten() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-slate-50 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <span className="inline-block bg-blue-100 text-primary px-6 py-2 rounded-full font-semibold text-sm uppercase tracking-wide mb-6">
                Wat Wij Doen
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
                Onze <span className="text-primary">Diensten</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-12 max-w-4xl mx-auto">
                Van klein tot groot, wij verzorgen alle klussen in en om uw huis
                of bedrijfspand door heel Nederland. Met vakmanschap en moderne
                technieken zorgen wij voor duurzame resultaten die jaren
                meegaan.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-left max-w-3xl mx-auto">
                <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow">
                  <CheckCircle
                    className="text-primary flex-shrink-0"
                    size={20}
                  />
                  <span className="text-gray-700 font-medium">
                    8+ Specialisaties
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow">
                  <CheckCircle
                    className="text-primary flex-shrink-0"
                    size={20}
                  />
                  <span className="text-gray-700 font-medium">
                    Vakkundig Team
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow">
                  <CheckCircle
                    className="text-primary flex-shrink-0"
                    size={20}
                  />
                  <span className="text-gray-700 font-medium">
                    Eerlijke Prijzen
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow">
                  <CheckCircle
                    className="text-primary flex-shrink-0"
                    size={20}
                  />
                  <span className="text-gray-700 font-medium">B2B & B2C</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Compleet dienstenpakket voor particulier en zakelijk
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                MKH Bouw is gevestigd in Amsterdam en biedt een breed scala aan
                diensten door heel Nederland. Of u nu een particuliere klant
                bent die zijn woning wil opknappen, of een bedrijf dat op zoek
                is naar een betrouwbare onderhoudspartner - wij staan voor u
                klaar.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ons ervaren team werkt met de nieuwste technieken en
                hoogwaardige materialen. Voor zakelijke klanten bieden wij
                onderhoudscontracten, facility services en flexibele planning
                buiten kantooruren. Transparantie, kwaliteit en stiptheid staan
                bij ons altijd voorop.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 overflow-hidden transform hover:-translate-y-2"
                  >
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={service.image}
                        alt={`${service.title} door MKH Bouw Amsterdam`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div>

                      {/* Icon on Image */}
                      <div className="absolute bottom-4 left-4">
                        <div className="w-16 h-16 bg-white/95 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                          <Icon className="text-primary" size={32} />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {service.fullDescription}
                      </p>
                      <Link
                        href={`/diensten/${service.slug}`}
                        className="inline-flex items-center gap-2 text-primary hover:text-blue-700 font-semibold transition-colors group/link"
                      >
                        Meer informatie
                        <ArrowRight
                          className="group-hover/link:translate-x-1 transition-transform"
                          size={18}
                        />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-primary font-semibold text-sm uppercase tracking-wide">
                  Onze Kracht
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-4">
                  Waarom MKH Bouw voor uw klus?
                </h2>
                <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Ervaring, betrouwbaarheid en vakmanschap - dat is waar MKH
                  Bouw voor staat. Ontdek waarom klanten voor ons kiezen.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="flex gap-6 bg-blue-50 p-8 rounded-3xl border border-blue-100 hover:shadow-xl transition-shadow">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center text-3xl font-bold shadow-lg">
                      01
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Vakmanschap & Ervaring
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Sinds 2008 leveren wij hoogwaardig werk met ervaren
                      professionals die hun vak verstaan. Ons team volgt
                      regelmatig bijscholing voor de nieuwste technieken en we
                      gebruiken alleen de beste materialen voor duurzame
                      resultaten.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 bg-blue-50 p-8 rounded-3xl border border-blue-100 hover:shadow-xl transition-shadow">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center text-3xl font-bold shadow-lg">
                      02
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Transparantie & Eerlijkheid
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Duidelijke offertes zonder verborgen kosten. Wij leggen
                      alles transparant uit voor uw gemoedsrust. Wat we
                      afspreken leveren we, binnen de afgesproken tijd en het
                      budget. Bij ons is afspraak afspraak.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 bg-blue-50 p-8 rounded-3xl border border-blue-100 hover:shadow-xl transition-shadow">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center text-3xl font-bold shadow-lg">
                      03
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Flexibiliteit & Service
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      We denken graag met u mee over de beste oplossing. Van
                      advies tot uitvoering, wij begeleiden u door het hele
                      proces. Voor bedrijven werken we graag buiten kantooruren
                      om uw bedrijfsvoering niet te verstoren.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 bg-blue-50 p-8 rounded-3xl border border-blue-100 hover:shadow-xl transition-shadow">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center text-3xl font-bold shadow-lg">
                      04
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Garantie & Nazorg
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Wij staan achter ons werk met garantie op alle
                      werkzaamheden. Uw tevredenheid is onze hoogste prioriteit.
                      Ook na oplevering blijven we bereikbaar voor eventuele
                      vragen of nazorg.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 bg-slate-900 overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>

          {/* Accent shapes */}
          <div className="absolute top-10 right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              {/* Highlighted badge */}
              <div className="text-center mb-6">
                <span className="inline-flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-lg">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                  </svg>
                  GRATIS OFFERTE OP MAAT
                </span>
              </div>

              {/* Main card with glow */}
              <div className="relative">
                <div className="absolute -inset-0.5 bg-primary rounded-2xl opacity-75 blur"></div>
                <div className="relative bg-white rounded-2xl p-10 md:p-12 shadow-2xl">
                  {/* Header */}
                  <div className="text-center mb-10">
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                      Start Vandaag Nog
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                      Ontvang binnen{" "}
                      <span className="font-bold text-primary">24 uur</span> een
                      persoonlijke offerte. Ervaren vakmanschap, eerlijke
                      prijzen.
                    </p>
                  </div>

                  {/* Buttons with enhanced styling */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                    <a
                      href="/contact"
                      className="group relative inline-flex items-center justify-center bg-primary text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center">
                        Vraag Offerte Aan
                        <svg
                          className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </a>

                    <a
                      href="tel:+31684794108"
                      className="group inline-flex items-center justify-center bg-slate-100 text-gray-900 border-2 border-slate-200 px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:border-primary transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    >
                      <svg
                        className="mr-3 w-5 h-5 group-hover:rotate-12 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <div className="text-left">
                        <div className="text-xs text-gray-500 font-normal -mb-0.5">
                          Of bel direct
                        </div>
                        <div>06 84794108</div>
                      </div>
                    </a>
                  </div>

                  {/* Enhanced trust indicators */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t-2 border-gray-100">
                    <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-sm">
                          24u reactie
                        </div>
                        <div className="text-xs text-gray-600">
                          Gegarandeerd
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-sm">
                          Transparant
                        </div>
                        <div className="text-xs text-gray-600">
                          Vaste prijzen
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-sm">
                          15+ jaar
                        </div>
                        <div className="text-xs text-gray-600">Ervaring</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
