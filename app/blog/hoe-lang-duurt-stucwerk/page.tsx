import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Clock,
  CheckCircle,
  Calendar,
  AlertCircle,
  Home,
  Phone,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "hoe lang duurt stucwerk in 2026? planning en tijdsduur | mkhbouw",
  description:
    "benieuwd hoe lang stucwerk duurt? ontdek wat de doorlooptijd bepaalt en plan je verbouwing slim. expert advies van mkhbouw.",
  keywords: [
    "hoe lang duurt stucwerk",
    "stucwerk tijdsduur",
    "stucwerk planning",
    "doorlooptijd stucwerk",
    "stucwerk duur",
    "hoeveel dagen stucwerk",
    "stucadoor planning",
  ],
  openGraph: {
    title: "hoe lang duurt stucwerk in 2026? planning en tijdsduur",
    description:
      "ontdek wat de doorlooptijd van stucwerk bepaalt en hoe je je verbouwing het beste kunt plannen.",
    url: "https://mkhbouw.nl/blog/hoe-lang-duurt-stucwerk",
  },
};

export default function HoeLangDuurtStucwerk() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full font-semibold text-sm mb-6">
                <Clock className="inline-block w-4 h-4 mr-2" />
                planning & tijdsduur
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                hoe lang duurt stucwerk?
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                ben je van plan om stucwerk te laten doen en wil je weten hoe
                lang dit duurt? de doorlooptijd hangt af van verschillende
                factoren. in deze gids leggen we uit wat je kunt verwachten en
                hoe je je verbouwing slim plant.
              </p>

              <div className="bg-blue-100 border-l-4 border-primary p-6 rounded-r-lg">
                <p className="text-gray-800 font-semibold mb-2">
                  ⏱️ snel overzicht
                </p>
                <p className="text-gray-700 mb-4">
                  de duur van stucwerk varieert van enkele dagen tot een week of
                  langer, afhankelijk van de oppervlakte, het type stucwerk, de
                  staat van de ondergrond en droogtijden.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  <Phone size={18} />
                  vraag planning aan
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Gemiddelde tijdsduur per type */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                gemiddelde doorlooptijd per type stucwerk
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Spackspuiten */}
                <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-blue-100">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="text-primary" size={32} />
                    <h3 className="text-2xl font-bold text-gray-900">
                      spackspuiten
                    </h3>
                  </div>
                  <div className="text-4xl font-bold text-primary mb-4">
                    1-2 dagen
                  </div>
                  <p className="text-gray-700 mb-4">
                    voor een gemiddelde woning (80-100m²)
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• snelste methode</li>
                    <li>• machinaal aangebracht</li>
                    <li>• korte droogtijd</li>
                    <li>• snel bewoonbaar</li>
                  </ul>
                </div>

                {/* Traditioneel */}
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="text-primary" size={32} />
                    <h3 className="text-2xl font-bold text-gray-900">
                      traditioneel
                    </h3>
                  </div>
                  <div className="text-4xl font-bold text-primary mb-4">
                    3-5 dagen
                  </div>
                  <p className="text-gray-700 mb-4">
                    voor een gemiddelde woning (80-100m²)
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• ambachtelijk werk</li>
                    <li>• meerdere lagen mogelijk</li>
                    <li>• droogtijd tussen lagen</li>
                    <li>• zorgvuldig afgewerkt</li>
                  </ul>
                </div>

                {/* Sierpleister */}
                <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl border-2 border-amber-200">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="text-primary" size={32} />
                    <h3 className="text-2xl font-bold text-gray-900">
                      sierpleister
                    </h3>
                  </div>
                  <div className="text-4xl font-bold text-primary mb-4">
                    2-4 dagen
                  </div>
                  <p className="text-gray-700 mb-4">
                    voor een accent muur (15-25m²)
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• decoratief werk</li>
                    <li>• vaak meerdere lagen</li>
                    <li>• structuur aanbrengen</li>
                    <li>• vakmanschap vereist</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Factoren die duur beïnvloeden */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                wat bepaalt de duur van stucwerk?
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Oppervlakte */}
                <div className="bg-white p-8 rounded-2xl shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Home className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        oppervlakte en aantal ruimtes
                      </h3>
                      <p className="text-gray-700 mb-4">
                        logischerwijs duurt een groter oppervlak langer. maar
                        één grote ruimte is vaak sneller klaar dan meerdere
                        kleine kamers met hoeken en obstakels.
                      </p>
                      <div className="text-sm text-gray-600 space-y-2">
                        <p>• kleine kamer (15-20m²): halve dag</p>
                        <p>• woonkamer (30-40m²): 1-2 dagen</p>
                        <p>• hele woning (80-100m²): 2-5 dagen</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Voorbereiding */}
                <div className="bg-white p-8 rounded-2xl shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <AlertCircle className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        voorbereidend werk
                      </h3>
                      <p className="text-gray-700 mb-4">
                        de staat van de muren is cruciaal. scheuren moeten
                        gerepareerd, behang moet verwijderd en het oppervlak
                        moet geschuurd worden.
                      </p>
                      <div className="text-sm text-gray-600 space-y-2">
                        <p>• schone muren: minimale voorbereiding</p>
                        <p>• behang verwijderen: +0.5-1 dag</p>
                        <p>• schuren en repareren: +1-2 dagen</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Droogtijd */}
                <div className="bg-white p-8 rounded-2xl shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Calendar className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        droog- en uithardtijd
                      </h3>
                      <p className="text-gray-700 mb-4">
                        tussen verschillende lagen en voor het verven moet het
                        stucwerk goed drogen. dit is geen actieve werktijd maar
                        verlengt wel de totale doorlooptijd.
                      </p>
                      <div className="text-sm text-gray-600 space-y-2">
                        <p>• tussen lagen: 4-24 uur</p>
                        <p>• voor verven: 1-3 dagen</p>
                        <p>• volledig uitgehard: 2-4 weken</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Type ruimte */}
                <div className="bg-white p-8 rounded-2xl shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <CheckCircle className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        complexiteit van de ruimte
                      </h3>
                      <p className="text-gray-700 mb-4">
                        trappenhuizen, schuin daken, hoge plafonds en veel
                        hoeken maken het werk complexer en tijdrovender.
                      </p>
                      <div className="text-sm text-gray-600 space-y-2">
                        <p>• rechte wanden: standaard tempo</p>
                        <p>• plafonds: meer tijd nodig</p>
                        <p>• trappenhuizen: significant langer</p>
                        <p>• hoge ruimten: extra tijd voor steigers</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stappenplan tijdlijn */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                typische tijdlijn van een stucwerkproject
              </h2>

              <div className="space-y-6">
                {/* Dag 0 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                      0
                    </div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      voorbereiding (optioneel)
                    </h3>
                    <p className="text-gray-700 mb-2">
                      meubels verhuizen, afdekken van vloeren en kozijnen,
                      behang verwijderen indien nodig.
                    </p>
                    <p className="text-sm text-gray-600">
                      💡 tip: dit kun je zelf doen om tijd en kosten te besparen
                    </p>
                  </div>
                </div>

                {/* Dag 1 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      schuren en repareren
                    </h3>
                    <p className="text-gray-700">
                      alle oppervlakken worden geschuurd, scheuren gerepareerd
                      en een grondlaag aangebracht voor betere hechting.
                    </p>
                  </div>
                </div>

                {/* Dag 2-3 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                      2-3
                    </div>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      stucwerk aanbrengen
                    </h3>
                    <p className="text-gray-700 mb-2">
                      het eigenlijke stucwerk wordt aangebracht. bij traditioneel
                      stucwerk vaak in meerdere lagen met droogtijd ertussen.
                    </p>
                    <p className="text-sm text-gray-600">
                      bij spackspuiten vaak in één dag klaar
                    </p>
                  </div>
                </div>

                {/* Dag 4-5 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                      4-5
                    </div>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      afwerken en schoonmaken
                    </h3>
                    <p className="text-gray-700">
                      laatste laag, afwerking van details, schoonmaken en
                      oplevering. de ruimte is sausklaar.
                    </p>
                  </div>
                </div>

                {/* Dag 6+ */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                      ✓
                    </div>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      drogen en verven
                    </h3>
                    <p className="text-gray-700">
                      laat het stucwerk 1-3 dagen goed drogen voordat je gaat
                      verven. voor optimaal resultaat zelfs 1 week wachten.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tips voor snellere doorlooptijd */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                zo versnél je het proces
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">
                        voorbereiding zelf doen
                      </h3>
                      <p className="text-gray-700 text-sm">
                        verhuizen van meubels, verwijderen van behang en
                        gordijnen scheelt een halve tot hele dag.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">
                        goede planning
                      </h3>
                      <p className="text-gray-700 text-sm">
                        plan het werk in één aaneengesloten periode. onderbrekingen
                        verlengen de totale doorlooptijd.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">
                        kies voor spackspuiten
                      </h3>
                      <p className="text-gray-700 text-sm">
                        als snelheid belangrijk is, is spackspuiten vaak de
                        snelste optie voor grote oppervlakken.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">
                        vrije toegang
                      </h3>
                      <p className="text-gray-700 text-sm">
                        zorg dat de stucadoor vrij kan werken zonder
                        onderbrekingen. dit voorkomt vertraging.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                veelgestelde vragen over stucwerk tijdsduur
              </h2>

              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    kan ik tijdens het stucwerk in huis blijven?
                  </h3>
                  <p className="text-gray-700">
                    ja, dat kan meestal wel. we werken per ruimte en zorgen
                    ervoor dat de overlast beperkt blijft. er is wel wat stof en
                    je moet rekening houden met droogtijden voordat je de ruimte
                    weer volledig kunt gebruiken.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    wanneer kan ik verven na het stucwerk?
                  </h3>
                  <p className="text-gray-700">
                    voor het beste resultaat wacht je 3-7 dagen voordat je gaat
                    verven. het stucwerk moet goed droog en uitgehard zijn. we
                    geven bij oplevering altijd aan wanneer je kunt verven.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    kan het sneller dan de gemiddelde tijd?
                  </h3>
                  <p className="text-gray-700">
                    soms wel, soms niet. de droogtijd tussen lagen en voor het
                    verven is vaak de beperkende factor. met meer mensen werken
                    versnelt het aanbrengen, maar niet het drogen.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    wat als er meer tijd nodig is dan gepland?
                  </h3>
                  <p className="text-gray-700">
                    bij een goede voorbezichtiging komt dit zelden voor. mocht er
                    onverwachte schade of extra werk nodig zijn, dan bespreken we
                    dit altijd eerst met je voordat we doorgaan.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    werken jullie ook in het weekend?
                  </h3>
                  <p className="text-gray-700">
                    in overleg is dat mogelijk. voor projecten met een strakke
                    planning kunnen we soms weekendwerk inplannen. vraag ernaar
                    bij je offerte.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-primary to-primary/90 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                wil je weten wanneer we kunnen starten?
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                vraag een vrijblijvende offerte aan en we plannen samen de
                meest geschikte periode voor jouw stucwerkproject.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  <Calendar size={20} />
                  plan je project
                </Link>
                <a
                  href="tel:0612345678"
                  className="inline-flex items-center justify-center gap-2 bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark/90 transition-colors border-2 border-white/20"
                >
                  <Phone size={20} />
                  direct bellen
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Related articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                lees ook
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link
                  href="/blog/wat-kost-stucwerk"
                  className="group bg-white p-6 rounded-xl hover:shadow-lg transition-all"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    wat kost stucwerk in 2026?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    ontdek welke factoren de prijs van stucwerk bepalen en
                    vraag een offerte aan.
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                    lees meer <ArrowRight size={18} />
                  </span>
                </Link>

                <Link
                  href="/diensten/stucwerk"
                  className="group bg-white p-6 rounded-xl hover:shadow-lg transition-all"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    alles over stucwerk
                  </h3>
                  <p className="text-gray-600 mb-4">
                    ontdek alle mogelijkheden en technieken voor stucwerk in
                    jouw woning.
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
