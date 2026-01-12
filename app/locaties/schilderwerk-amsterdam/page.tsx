import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, CheckCircle, Clock, Award, ArrowRight, Paintbrush } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "schilderwerk amsterdam - professionele schilder | mkhbouw",
  description:
    "op zoek naar een betrouwbare schilder in amsterdam? mkhbouw levert vakkundig binnen- en buitenschilderwerk in amsterdam en omstreken. vraag vrijblijvende offerte aan.",
  keywords: [
    "schilderwerk amsterdam",
    "schilder amsterdam",
    "binnenschilderwerk amsterdam",
    "buitenschilderwerk amsterdam",
    "huis schilderen amsterdam",
    "schilderwerk amsterdam noord",
    "schilderwerk amsterdam west",
    "schilderwerk amsterdam oost",
    "schilderwerk amsterdam zuid",
    "klussenbedrijf amsterdam",
    "mkhbouw amsterdam",
  ],
  openGraph: {
    title: "schilderwerk amsterdam - professionele schilder | mkhbouw",
    description: "vakkundig schilderwerk in amsterdam. offerte binnen 24 uur. 15+ jaar ervaring.",
    url: "https://mkhbouw.nl/locaties/schilderwerk-amsterdam",
  },
};

export default function SchilderwerkAmsterdam() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full font-semibold text-sm mb-6">
                <Paintbrush className="inline-block w-4 h-4 mr-2" />
                schilderwerk amsterdam
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                professioneel schilderwerk in amsterdam
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                zoek je een betrouwbare schilder in amsterdam? mkhbouw levert al 15+ jaar
                vakkundig binnen- en buitenschilderwerk in heel amsterdam en omstreken.
                van grachtenhuizen tot moderne appartementen.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="tel:+31684794108"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
                >
                  <Phone size={20} />
                  bel direct: 06 84794108
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
                  <span>300+ tevreden klanten</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span>offerte binnen 24u</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Diensten in Amsterdam */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                schilderwerk diensten in amsterdam
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    binnenschilderwerk
                  </h3>
                  <p className="text-gray-700 mb-4">
                    vakkundig schilderen van wanden, plafonds, deuren en kozijnen.
                    van één kamer tot je hele woning in amsterdam.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={16} />
                      wanden en plafonds
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={16} />
                      deuren en kozijnen
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={16} />
                      plinten en lijstwerk
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={16} />
                      radiatoren
                    </li>
                  </ul>
                  <Link
                    href="/diensten/schilderwerk"
                    className="text-primary font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    meer info <ArrowRight size={16} />
                  </Link>
                </div>

                <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    buitenschilderwerk
                  </h3>
                  <p className="text-gray-700 mb-4">
                    bescherming en onderhoud van buitenkozijnen, deuren en gevels.
                    ook ervaring met monumentale amsterdamse panden.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={16} />
                      kozijnen en ramen
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={16} />
                      deuren en dorpels
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={16} />
                      gevels en houtwerk
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={16} />
                      dakgoten
                    </li>
                  </ul>
                  <Link
                    href="/diensten/schilderwerk"
                    className="text-primary font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    meer info <ArrowRight size={16} />
                  </Link>
                </div>

                <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    specialistisch werk
                  </h3>
                  <p className="text-gray-700 mb-4">
                    spuitwerk, lakwerk en andere specialistische schildertechnieken
                    voor een premium resultaat.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={16} />
                      spuitwerk deuren
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={16} />
                      lakwerk hoogglans
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={16} />
                      behangen
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={16} />
                      restauratie
                    </li>
                  </ul>
                  <Link
                    href="/diensten/behangen"
                    className="text-primary font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    meer info <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Werkgebied Amsterdam */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                actief in heel amsterdam
              </h2>
              <p className="text-gray-700 text-center mb-8">
                wij werken in alle stadsdelen en wijken van amsterdam
              </p>

              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="bg-white p-4 rounded-lg">
                  <MapPin className="text-primary mx-auto mb-2" size={24} />
                  <p className="font-semibold text-gray-900">amsterdam centrum</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <MapPin className="text-primary mx-auto mb-2" size={24} />
                  <p className="font-semibold text-gray-900">amsterdam noord</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <MapPin className="text-primary mx-auto mb-2" size={24} />
                  <p className="font-semibold text-gray-900">amsterdam west</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <MapPin className="text-primary mx-auto mb-2" size={24} />
                  <p className="font-semibold text-gray-900">amsterdam oost</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <MapPin className="text-primary mx-auto mb-2" size={24} />
                  <p className="font-semibold text-gray-900">amsterdam zuid</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <MapPin className="text-primary mx-auto mb-2" size={24} />
                  <p className="font-semibold text-gray-900">amsterdam nieuw-west</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <MapPin className="text-primary mx-auto mb-2" size={24} />
                  <p className="font-semibold text-gray-900">amsterdam zuidoost</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <MapPin className="text-primary mx-auto mb-2" size={24} />
                  <p className="font-semibold text-gray-900">de pijp</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <MapPin className="text-primary mx-auto mb-2" size={24} />
                  <p className="font-semibold text-gray-900">oud-west</p>
                </div>
              </div>

              <p className="text-sm text-gray-600 text-center mt-6">
                ook actief in amstelveen, diemen, zaandam, purmerend en andere plaatsen in de regio amsterdam
              </p>
            </div>
          </div>
        </section>

        {/* Waarom kiezen voor ons */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                waarom mkhbouw voor schilderwerk in amsterdam?
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
                      ervaring met amsterdamse woningen
                    </h3>
                    <p className="text-gray-700">
                      van historische grachtenhuizen tot moderne nieuwbouw. we
                      kennen de specifieke uitdagingen van schilderwerk in amsterdam.
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
                      flexibele planning
                    </h3>
                    <p className="text-gray-700">
                      we snappen dat je niet altijd dagen thuis kunt blijven. we
                      plannen flexibel en werken efficiënt.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Paintbrush className="text-primary" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      kwaliteitsverf en materialen
                    </h3>
                    <p className="text-gray-700">
                      we werken alleen met hoogwaardige verven die lang mooi blijven.
                      goed voor je woning en het milieu.
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
                      netjes en betrouwbaar
                    </h3>
                    <p className="text-gray-700">
                      we werken netjes, beschermen je interieur goed en laten alles
                      schoon achter. zoals het hoort.
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
                je huis laten schilderen in amsterdam?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                vraag vandaag nog een vrijblijvende offerte aan. we komen graag
                bij je langs om je wensen te bespreken en een eerlijke prijs te
                maken.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="tel:+31684794108"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-xl"
                >
                  <Phone size={20} />
                  bel: 06 84794108
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
                  <span>transparante prijzen</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Amsterdam specifiek */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                veelgestelde vragen over schilderwerk in amsterdam
              </h2>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    hoe gaan jullie om met parkeren in amsterdam?
                  </h3>
                  <p className="text-gray-700">
                    we kennen amsterdam goed en plannen parkeertijd mee in. we
                    proberen dit zo efficiënt mogelijk te organiseren en de kosten
                    laag te houden. dit staat altijd duidelijk in de offerte.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    kunnen jullie ook in een appartement met smalle trappen werken?
                  </h3>
                  <p className="text-gray-700">
                    jazeker, we hebben veel ervaring met amsterdamse appartementen
                    en smalle trappenhuizen. we nemen compact materiaal mee en
                    werken netjes.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    werken jullie ook aan monumentale panden?
                  </h3>
                  <p className="text-gray-700">
                    ja, we hebben veel ervaring met monumentale grachtenhuizen en
                    andere beschermde panden in amsterdam. we werken volgens de
                    juiste richtlijnen.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    hoe lang duurt het schilderen van een amsterdams appartement?
                  </h3>
                  <p className="text-gray-700">
                    een standaard 2-3 kamer appartement is meestal binnen 3-5 dagen
                    klaar, afhankelijk van de staat van het houtwerk en het gewenste
                    werk. we geven bij de offerte een planning.
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
                  href="/blog/wat-kost-schilderwerk"
                  className="group bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    wat kost schilderwerk in 2026?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    lees alles over de factoren die de prijs van schilderwerk bepalen
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                    lees meer <ArrowRight size={18} />
                  </span>
                </Link>

                <Link
                  href="/diensten/schilderwerk"
                  className="group bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    onze schilderwerk diensten
                  </h3>
                  <p className="text-gray-600 mb-4">
                    ontdek alle mogelijkheden voor schilderwerk bij mkhbouw
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
