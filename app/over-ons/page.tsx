import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  CheckCircle,
  Shield,
  Users,
  Award,
  Clock,
  ThumbsUp,
  Target,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Over Ons - MKH Bouw | Ervaren Klussenbedrijf Amsterdam",
  description:
    "MKH Bouw is een ervaren klussenbedrijf in Amsterdam gespecialiseerd in B2B en B2C projecten. Jarenlange expertise in stucwerk, schilderwerk, renovaties en facility services. Uw betrouwbare onderhoudspartner.",
  keywords: [
    "klussenbedrijf Amsterdam",
    "ervaren aannemer",
    "betrouwbaar klussenbedrijf",
    "MKH Bouw",
    "zakelijke bouwpartner",
    "facility service Amsterdam",
    "onderhoudscontract bouw",
  ],
};

export default function OverOns() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-slate-50 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block bg-blue-100 text-primary px-6 py-2 rounded-full font-semibold text-sm uppercase tracking-wide mb-6">
                Kennismaken met MKH Bouw
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
                Over <span className="text-primary">MKH Bouw</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Uw betrouwbare partner voor alle klussen in en om het huis in
                Amsterdam en heel Nederland. Met vakmanschap en aandacht voor
                detail leveren wij kwaliteit die blijft, voor particulieren en
                bedrijven.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content - Story Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                {/* Text Content */}
                <div>
                  <span className="text-primary font-semibold text-sm uppercase tracking-wide">
                    Wie Zijn Wij
                  </span>
                  <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6 text-gray-900">
                    Professioneel Klussenbedrijf sinds 2008
                  </h2>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    MKH Bouw is een professioneel klussenbedrijf gevestigd in
                    het hart van Amsterdam. Met jarenlange ervaring in de
                    bouwsector hebben wij ons gespecialiseerd in het leveren van
                    kwalitatieve kluswerken voor zowel particulieren als
                    bedrijven. Sinds 2008 helpen wij klanten met stucwerk,
                    schilderwerk, renovaties en onderhoudswerkzaamheden door
                    heel Nederland.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Wat ons onderscheidt is onze persoonlijke aanpak en
                    betrokkenheid bij elk project. Of het nu gaat om een klein
                    schilderklus of een complete renovatie van een bedrijfspand,
                    wij behandelen elke opdracht met dezelfde zorgvuldigheid en
                    aandacht voor detail. Transparantie en kwaliteit staan bij
                    ons voorop.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Voor zakelijke klanten zijn wij een betrouwbare partner voor
                    onderhoudscontracten, facility services en grotere
                    renovatieprojecten. Wij werken graag buiten kantooruren om
                    uw bedrijfsvoering niet te verstoren en leveren altijd
                    binnen budget en planning.
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6">
                    <div className="bg-blue-50 p-4 rounded-2xl text-center">
                      <div className="text-3xl font-bold text-primary mb-1">
                        15+
                      </div>
                      <div className="text-sm text-gray-600">Jaar ervaring</div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-2xl text-center">
                      <div className="text-3xl font-bold text-primary mb-1">
                        500+
                      </div>
                      <div className="text-sm text-gray-600">Projecten</div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-2xl text-center">
                      <div className="text-3xl font-bold text-primary mb-1">
                        100%
                      </div>
                      <div className="text-sm text-gray-600">Tevreden</div>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary to-blue-700 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=2670&auto=format&fit=crop"
                      alt="Professional construction team MKH Bouw Amsterdam"
                      className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 text-white">
                      <p className="text-sm font-semibold mb-1">
                        Gevestigd in Amsterdam
                      </p>
                      <p className="text-2xl font-bold">
                        Actief door heel Nederland
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Image */}
                <div className="relative group order-2 lg:order-1">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-700 to-primary rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2670&auto=format&fit=crop"
                      alt="Quality construction work Amsterdam"
                      className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 text-white">
                      <p className="text-sm font-semibold mb-1">Onze missie</p>
                      <p className="text-2xl font-bold">Kwaliteit die blijft</p>
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="order-1 lg:order-2">
                  <span className="text-primary font-semibold text-sm uppercase tracking-wide">
                    Onze Werkwijze
                  </span>
                  <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6 text-gray-900">
                    Kwaliteit Gegarandeerd
                  </h2>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Bij MKH Bouw werken we volgens een vaste werkwijze die
                    garantie biedt voor een succesvol eindresultaat. We beginnen
                    altijd met een vrijblijvend gesprek waarin we uw wensen en
                    eisen in kaart brengen. Ons team luistert aandachtig en
                    geeft deskundig advies over de beste aanpak.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Tijdens de uitvoering houden we u op de hoogte van de
                    voortgang en zijn we altijd bereikbaar voor vragen of
                    aanpassingen. Wij werken netjes, houden de werkplek schoon
                    en zorgen ervoor dat het project binnen de afgesproken tijd
                    wordt opgeleverd. Uw tevredenheid is onze hoogste
                    prioriteit.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Voor bedrijven bieden wij flexibele planning en kunnen we
                    werken volgens uw voorkeuren - 's avonds, in het weekend of
                    tijdens reguliere werkuren. Wij leveren altijd duidelijke
                    rapportages en facturatie voor uw administratie.
                  </p>
                  <div className="inline-flex items-center gap-2 bg-blue-50 px-6 py-3 rounded-full">
                    <CheckCircle className="text-primary" size={20} />
                    <span className="text-slate-700 font-semibold">
                      Afspraak is afspraak
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-slate-50 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-primary font-semibold text-sm uppercase tracking-wide">
                  Onze Kracht
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-4">
                  Waarom kiezen voor MKH Bouw?
                </h2>
                <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Met meer dan 15 jaar ervaring weten wij wat er nodig is voor
                  kwalitatief werk in Amsterdam en heel Nederland. Ontdek waarom
                  klanten voor ons kiezen.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-slate-100 relative overflow-hidden hover:border-primary">
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-blue-500/50 transform group-hover:scale-110 transition-all">
                      <Award className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors">
                      Jarenlange Ervaring
                    </h3>
                    <p className="text-gray-600 transition-colors leading-relaxed">
                      Sinds 2008 hebben wij uitgebreide ervaring opgebouwd in
                      diverse bouwprojecten door heel Amsterdam en Nederland.
                      Van particuliere woningen tot grote bedrijfspanden.
                    </p>
                  </div>
                </div>

                <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-slate-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-blue-500/50 transform group-hover:scale-110 transition-all">
                      <Shield className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors">
                      Betrouwbaar & Eerlijk
                    </h3>
                    <p className="text-gray-600 group-hover:text-white/90 transition-colors leading-relaxed">
                      Bij ons is afspraak afspraak. We staan voor transparante
                      communicatie en eerlijke prijzen zonder verrassingen. Wat
                      we afspreken, dat leveren we.
                    </p>
                  </div>
                </div>

                <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-slate-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-blue-500/50 transform group-hover:scale-110 transition-all">
                      <CheckCircle className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors">
                      Vakmanschap
                    </h3>
                    <p className="text-gray-600 group-hover:text-white/90 transition-colors leading-relaxed">
                      Ons team bestaat uit ervaren vakmensen die hun vak
                      verstaan en trots zijn op hun werk. Wij gebruiken alleen
                      hoogwaardige materialen voor duurzame resultaten.
                    </p>
                  </div>
                </div>

                <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-slate-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-blue-500/50 transform group-hover:scale-110 transition-all">
                      <Users className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors">
                      Persoonlijke Aanpak
                    </h3>
                    <p className="text-gray-600 group-hover:text-white/90 transition-colors leading-relaxed">
                      We denken actief met u mee en bieden advies op maat voor
                      uw specifieke situatie en wensen. Elk project krijgt
                      persoonlijke aandacht van begin tot eind.
                    </p>
                  </div>
                </div>

                <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-slate-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-blue-500/50 transform group-hover:scale-110 transition-all">
                      <Clock className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors">
                      Op Tijd Klaar
                    </h3>
                    <p className="text-gray-600 group-hover:text-white/90 transition-colors leading-relaxed">
                      We houden ons aan afspraken en zorgen dat uw project
                      binnen de planning wordt opgeleverd. Planning en deadlines
                      zijn voor ons heilig.
                    </p>
                  </div>
                </div>

                <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-slate-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-blue-500/50 transform group-hover:scale-110 transition-all">
                      <ThumbsUp className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors">
                      Tevreden Klanten
                    </h3>
                    <p className="text-gray-600 group-hover:text-white/90 transition-colors leading-relaxed">
                      Onze klanten waarderen onze service en kwaliteit, wat
                      resulteert in veel terugkerende klanten en positieve
                      aanbevelingen. Uw tevredenheid is ons visitekaartje.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-primary font-semibold text-sm uppercase tracking-wide">
                  Onze Aanpak
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-4">
                  Hoe wij werken
                </h2>
                <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
                  <Target className="text-primary mb-4" size={40} />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Voor Particulieren
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Of het nu gaat om het opknappen van uw woning, schilderwerk
                    of stucwerk - wij bieden persoonlijk advies en een heldere
                    offerte. U weet van tevoren exact wat het gaat kosten en hoe
                    lang het duurt.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Wij werken netjes, ruimen dagelijks op en zorgen dat u zo
                    min mogelijk last heeft van de werkzaamheden. Uw comfort
                    staat voorop.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-8 rounded-3xl border border-blue-100">
                  <TrendingUp className="text-primary mb-4" size={40} />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Voor Bedrijven (B2B)
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Als zakelijke partner begrijpen wij het belang van
                    continuïteit. Wij bieden onderhoudscontracten, facility
                    services en kunnen werken volgens uw planning - ook buiten
                    kantooruren.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Van kleine onderhoudswerkzaamheden tot complete renovaties
                    van kantoorpanden, winkels of zorginstellingen. Wij leveren
                    op tijd, binnen budget en met minimale verstoring van uw
                    bedrijfsvoering.
                  </p>
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
