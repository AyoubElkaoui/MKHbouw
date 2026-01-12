import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, CheckCircle, Clock, Award, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "stucwerk utrecht - professioneel stucadoor | mkhbouw",
  description:
    "op zoek naar een betrouwbare stucadoor in utrecht? mkhbouw levert vakkundig stucwerk, spackspuiten en sierpleister in utrecht en omstreken. vraag vrijblijvende offerte aan.",
  keywords: [
    "stucwerk utrecht",
    "stucadoor utrecht",
    "spackspuiten utrecht",
    "sierpleister utrecht",
    "stucwerk utrecht centrum",
    "stucwerk utrecht west",
    "stucwerk utrecht oost",
    "stucwerk utrecht zuid",
    "klussenbedrijf utrecht",
    "mkhbouw utrecht",
  ],
  openGraph: {
    title: "stucwerk utrecht - professioneel stucadoor | mkhbouw",
    description: "vakkundig stucwerk in utrecht. offerte binnen 24 uur. 15+ jaar ervaring.",
    url: "https://mkhbouw.nl/locaties/stucwerk-utrecht",
  },
};

export default function StucwerkUtrecht() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full font-semibold text-sm mb-6">
                <MapPin className="inline-block w-4 h-4 mr-2" />
                stucwerk utrecht
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                professioneel stucwerk in utrecht
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                zoek je een betrouwbare stucadoor in utrecht? mkhbouw levert al jaren
                vakkundig stucwerk, spackspuiten en sierpleister in heel utrecht en omstreken.
                van nieuwbouw tot monumentaal vastgoed.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="tel:+31612345678"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
                >
                  <Phone size={20} />
                  bel direct
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all"
                >
                  gratis offerte aanvragen
                  <ArrowRight size={20} />
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span>15+ jaar ervaring</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span>ook in utrecht centrum</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span>offerte binnen 24u</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Diensten in Utrecht */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                stucwerk diensten in utrecht
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    spackspuiten utrecht
                  </h3>
                  <p className="text-gray-700 mb-4">
                    snel en professioneel spackspuiten voor nieuwbouw en renovatie
                    in heel utrecht. perfect egaal resultaat gegarandeerd.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={16} />
                      nieuwbouwprojecten
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={16} />
                      wanden en plafonds
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={16} />
                      snel klaar
                    </li>
                  </ul>
                  <Link
                    href="/diensten/spackspuiten"
                    className="text-primary font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    meer info <ArrowRight size={16} />
                  </Link>
                </div>

                <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    traditioneel stucwerk
                  </h3>
                  <p className="text-gray-700 mb-4">
                    ambachtelijk stucwerk met de hand. ideaal voor karakteristieke
                    utrechtse panden en monumenten.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={16} />
                      renovatie projecten
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={16} />
                      monumentaal vastgoed
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={16} />
                      herstelwerk
                    </li>
                  </ul>
                  <Link
                    href="/diensten/stucwerk"
                    className="text-primary font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    meer info <ArrowRight size={16} />
                  </Link>
                </div>

                <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    sierpleister
                  </h3>
                  <p className="text-gray-700 mb-4">
                    decoratieve sierpleister voor een unieke uitstraling. diverse
                    structuren en afwerkingen mogelijk.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={16} />
                      accent muren
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={16} />
                      luxe afwerking
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={16} />
                      diverse stijlen
                    </li>
                  </ul>
                  <Link
                    href="/diensten/sierpleister"
                    className="text-primary font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    meer info <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Werkgebied Utrecht */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                actief in heel utrecht
              </h2>
              <p className="text-gray-700 text-center mb-8">
                wij werken in alle wijken en dorpen in en rondom utrecht
              </p>

              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="bg-white p-4 rounded-lg">
                  <MapPin className="text-primary mx-auto mb-2" size={24} />
                  <p className="font-semibold text-gray-900">utrecht centrum</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <MapPin className="text-primary mx-auto mb-2" size={24} />
                  <p className="font-semibold text-gray-900">utrecht west</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <MapPin className="text-primary mx-auto mb-2" size={24} />
                  <p className="font-semibold text-gray-900">utrecht oost</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <MapPin className="text-primary mx-auto mb-2" size={24} />
                  <p className="font-semibold text-gray-900">utrecht zuid</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <MapPin className="text-primary mx-auto mb-2" size={24} />
                  <p className="font-semibold text-gray-900">leidsche rijn</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <MapPin className="text-primary mx-auto mb-2" size={24} />
                  <p className="font-semibold text-gray-900">vleuten-de meern</p>
                </div>
              </div>

              <p className="text-sm text-gray-600 text-center mt-6">
                ook actief in de omliggende plaatsen zoals nieuwegein, houten, zeist, maarssen en bunnik
              </p>
            </div>
          </div>
        </section>

        {/* Waarom kiezen voor ons */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                waarom mkhbouw in utrecht?
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Award className="text-primary" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      ervaring met utrechtse panden
                    </h3>
                    <p className="text-gray-700">
                      we kennen de specifieke uitdagingen van oudere utrechtse
                      woningen en monumentale panden. van grachtenhuizen tot
                      nieuwbouw in leidsche rijn.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Clock className="text-primary" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      snelle service
                    </h3>
                    <p className="text-gray-700">
                      we zijn snel ter plaatse in utrecht en omgeving. offerte
                      binnen 24 uur en vaak binnen een week kunnen starten.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <CheckCircle className="text-primary" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      vakmanschap
                    </h3>
                    <p className="text-gray-700">
                      we werken alleen met ervaren vakmensen en hoogwaardige
                      materialen. het resultaat mag er zijn.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="text-primary" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      persoonlijk contact
                    </h3>
                    <p className="text-gray-700">
                      geen callcenters maar direct contact met de vakman. we
                      denken mee en adviseren eerlijk.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-blue-700 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                stucwerk nodig in utrecht?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                vraag vandaag nog een vrijblijvende offerte aan. we komen graag
                bij je langs om je project te bespreken en een scherpe prijs te
                maken.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="tel:+31612345678"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-xl"
                >
                  <Phone size={20} />
                  bel direct
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all"
                >
                  <Mail size={20} />
                  vraag offerte aan
                </Link>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} />
                  <span>gratis offerte</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} />
                  <span>binnen 24 uur reactie</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} />
                  <span>geen verborgen kosten</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Utrecht specifiek */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                veelgestelde vragen over stucwerk in utrecht
              </h2>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    doen jullie ook stucwerk in het centrum van utrecht?
                  </h3>
                  <p className="text-gray-700">
                    ja zeker! we werken regelmatig in het centrum. we kennen de
                    uitdagingen van beperkte parkeergelegenheid en smalle
                    straten. dat plannen we mee in.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    hoe lang duurt een gemiddelde stucwerkklus in utrecht?
                  </h3>
                  <p className="text-gray-700">
                    dat hangt af van de grootte en het type werk. een gemiddelde
                    woning in utrecht (jaren 30 portiekflat bijvoorbeeld) is
                    meestal binnen 3-5 dagen klaar. moderne nieuwbouw met
                    spackspuiten vaak sneller.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    werken jullie ook in monumentale panden?
                  </h3>
                  <p className="text-gray-700">
                    jazeker, we hebben veel ervaring met monumentale panden in
                    utrecht. we werken volgens de juiste richtlijnen en kunnen
                    ook advies geven over welke technieken wel en niet zijn
                    toegestaan.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    zijn de kosten in utrecht hoger dan elders?
                  </h3>
                  <p className="text-gray-700">
                    we hanteren eerlijke prijzen voor heel utrecht en omgeving.
                    parkeerkosten in het centrum nemen we wel mee in de offerte,
                    maar we proberen dit zo beperkt mogelijk te houden.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related links */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                meer informatie
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link
                  href="/blog/wat-kost-stucwerk"
                  className="group bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    wat kost stucwerk in 2026?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    lees alles over de factoren die de prijs van stucwerk bepalen
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                    lees meer <ArrowRight size={18} />
                  </span>
                </Link>

                <Link
                  href="/diensten/stucwerk"
                  className="group bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    onze stucwerk diensten
                  </h3>
                  <p className="text-gray-600 mb-4">
                    ontdek alle mogelijkheden voor stucwerk bij mkhbouw
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                    lees meer <ArrowRight size={18} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
