import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  CheckCircle,
  Calculator,
  TrendingUp,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "wat kost stucwerk in 2024? prijzen per m² | mkhbouw",
  description:
    "ontdek wat stucwerk kost in 2024. complete prijsoverzicht voor spackspuiten, traditioneel stucwerk en sierpleister. gratis offerte aanvragen bij mkhbouw.",
  keywords: [
    "wat kost stucwerk",
    "stucwerk prijs per m2",
    "spackspuiten kosten",
    "sierpleister prijs",
    "stucadoor kosten",
    "stucwerk prijzen 2024",
    "hoeveel kost stucwerk",
    "prijs stucwerk per vierkante meter",
  ],
  openGraph: {
    title: "wat kost stucwerk in 2024? complete prijsoverzicht",
    description:
      "alle stucwerk prijzen op een rij. van spackspuiten tot sierpleister.",
    url: "https://mkhbouw.nl/blog/wat-kost-stucwerk",
  },
};

export default function WatKostStucwerk() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full font-semibold text-sm mb-6">
                <Calculator className="inline-block w-4 h-4 mr-2" />
                prijsgids 2024
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                wat kost stucwerk in 2024?
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                ben je van plan om stucwerk te laten doen en wil je weten wat de
                kosten zijn? in deze uitgebreide gids leggen we uit wat stucwerk
                kost, welke factoren de prijs beïnvloeden en hoe je kunt
                besparen zonder in te leveren op kwaliteit.
              </p>

              <div className="bg-blue-100 border-l-4 border-primary p-6 rounded-r-lg">
                <p className="text-gray-800 font-semibold mb-2">
                  💡 snel antwoord: gemiddelde prijzen
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    • spackspuiten: <strong>€8 - €15 per m²</strong>
                  </li>
                  <li>
                    • traditioneel stucwerk: <strong>€15 - €25 per m²</strong>
                  </li>
                  <li>
                    • sierpleister: <strong>€25 - €50 per m²</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Prijsoverzicht */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                stucwerk prijzen per m² overzicht
              </h2>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {/* Spackspuiten */}
                <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-blue-100 hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    spackspuiten
                  </h3>
                  <div className="text-4xl font-bold text-primary mb-6">
                    €8 - €15<span className="text-xl text-gray-600">/m²</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        className="text-green-500 flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-700">
                        perfect egaal oppervlak
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        className="text-green-500 flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-700">snellere uitvoering</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        className="text-green-500 flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-700">
                        geschikt voor grote oppervlakken
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        className="text-green-500 flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-700">direct sausklaar</span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-600 mb-4">
                    ideaal voor: nieuwbouw, grote ruimtes, plafonds
                  </p>
                  <Link
                    href="/locaties/stucwerk-amsterdam"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  >
                    vraag offerte aan <ArrowRight size={18} />
                  </Link>
                </div>

                {/* Traditioneel stucwerk */}
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-200 hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    traditioneel stucwerk
                  </h3>
                  <div className="text-4xl font-bold text-primary mb-6">
                    €15 - €25<span className="text-xl text-gray-600">/m²</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        className="text-green-500 flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-700">vakmanschap</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        className="text-green-500 flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-700">
                        saus- of behangklaar
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        className="text-green-500 flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-700">duurzaam resultaat</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        className="text-green-500 flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-700">
                        geschikt voor renovatie
                      </span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-600 mb-4">
                    ideaal voor: renovatie, oudere woningen, kleinere ruimtes
                  </p>
                  <Link
                    href="/diensten/stucwerk"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  >
                    meer info <ArrowRight size={18} />
                  </Link>
                </div>

                {/* Sierpleister */}
                <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl border-2 border-amber-200 hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    sierpleister
                  </h3>
                  <div className="text-4xl font-bold text-primary mb-6">
                    €25 - €50<span className="text-xl text-gray-600">/m²</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        className="text-green-500 flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-700">
                        decoratieve afwerking
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        className="text-green-500 flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-700">unieke structuren</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        className="text-green-500 flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-700">diverse kleuren</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        className="text-green-500 flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-700">luxe uitstraling</span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-600 mb-4">
                    ideaal voor: accent muren, woonkamers, ontvangsthallen
                  </p>
                  <Link
                    href="/diensten/sierpleister"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  >
                    bekijk voorbeelden <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Factoren die prijs beïnvloeden */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                welke factoren beïnvloeden de prijs van stucwerk?
              </h2>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-primary">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <TrendingUp className="text-primary" size={24} />
                    oppervlakte
                  </h3>
                  <p className="text-gray-700 mb-2">
                    hoe groter het oppervlak, hoe lager de prijs per m². bij
                    grote projecten (100m² of meer) kun je vaak rekenen op
                    10-20% korting op de m²-prijs.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>voorbeeld:</strong> 50m² = €12/m² | 150m² = €9/m²
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-primary">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <AlertCircle className="text-primary" size={24} />
                    staat van de ondergrond
                  </h3>
                  <p className="text-gray-700 mb-2">
                    een slechte, ongelijke of beschadigde ondergrond vraagt meer
                    voorbereidend werk. dit kan de prijs met €5-10 per m²
                    verhogen.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>tip:</strong> laat altijd eerst een opname doen voor
                    een juiste prijsinschatting
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-primary">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    type ruimte
                  </h3>
                  <p className="text-gray-700 mb-2">
                    plafonds zijn vaak duurder dan wanden vanwege de lastigere
                    werkhoogte. trappenhuizen en ruimtes met veel hoeken kosten
                    ook meer.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 mt-3">
                    <li>• wanden: standaard tarief</li>
                    <li>• plafonds: +€2-3 per m²</li>
                    <li>• trappenhuizen: +€3-5 per m²</li>
                    <li>• hoge ruimtes (&gt;3m): +€2-4 per m²</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-primary">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    afwerking niveau
                  </h3>
                  <p className="text-gray-700 mb-2">
                    de mate van afwerking bepaalt ook de prijs:
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 mt-3">
                    <li>• basis sausklaar: standaard tarief</li>
                    <li>• extra glad afgewerkt: +€2-3 per m²</li>
                    <li>• Q4 afwerking (hoogste kwaliteit): +€5-8 per m²</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-primary">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    locatie
                  </h3>
                  <p className="text-gray-700 mb-2">
                    prijzen kunnen per regio verschillen. in grote steden zoals
                    Amsterdam, Rotterdam en Utrecht zijn de prijzen vaak 10-15%
                    hoger door hogere parkeerkosten en reistijd.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Extra kosten */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                let op deze extra kosten
              </h2>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-8">
                <h3 className="font-bold text-gray-900 mb-3">
                  ⚠️ kosten die vaak vergeten worden:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    • <strong>schuurwerk:</strong> €3-5 per m² (voorbereiding)
                  </li>
                  <li>
                    • <strong>afplakken:</strong> €1-2 per m²
                  </li>
                  <li>
                    • <strong>grondlaag:</strong> €2-3 per m²
                  </li>
                  <li>
                    • <strong>verwijderen behang:</strong> €3-4 per m²
                  </li>
                  <li>
                    • <strong>reparaties:</strong> vanaf €50 per uur
                  </li>
                  <li>
                    • <strong>parkeerkosten:</strong> €5-25 per dag (steden)
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl">
                <h3 className="font-bold text-gray-900 mb-3">
                  💡 vaak wél inclusief:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• materialen (stuc, primer, etc.)</li>
                  <li>• gereedschap en apparatuur</li>
                  <li>• opruimen en afvoer van afval</li>
                  <li>• garantie op het werk</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Besparen tips */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                hoe bespaar je op stucwerk zonder in te leveren op kwaliteit?
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3">
                    ✅ doe het voorbereiding zelf
                  </h3>
                  <p className="text-gray-700">
                    door zelf meubels te verhuizen, behang te verwijderen en te
                    schuren kun je €200-500 besparen op een gemiddeld project.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3">
                    ✅ kies het juiste moment
                  </h3>
                  <p className="text-gray-700">
                    buiten het hoogseizoen (nov-feb) zijn stucadoors vaak
                    flexibeler met prijzen. vraag naar seizoenskortingen.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3">
                    ✅ combineer werkzaamheden
                  </h3>
                  <p className="text-gray-700">
                    laat meerdere kamers of meerdere werkzaamheden (stucwerk +
                    schilderwerk) tegelijk doen voor een beter totaalpakket.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3">
                    ✅ vergelijk meerdere offertes
                  </h3>
                  <p className="text-gray-700">
                    vraag 3-4 offertes aan en vergelijk niet alleen op prijs
                    maar ook op ervaring, reviews en garanties.
                  </p>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mt-8">
                <h3 className="font-bold text-gray-900 mb-3">
                  ❌ bespaar hier NIET op:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    • kwaliteit van materialen (goedkope stuc scheurt sneller)
                  </li>
                  <li>
                    • ervaren stucadoor (fouten herstellen kost meer dan goed
                    werk)
                  </li>
                  <li>
                    • goede voorbereiding (slecht voorbereid = slecht
                    eindresultaat)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Voorbeeld berekening */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                voorbeeldberekening: wat kost stucwerk voor een gemiddelde
                woning?
              </h2>

              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-blue-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  scenario: 3-kamer appartement (90m² stucwerk)
                </h3>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-gray-700">
                      spackspuiten plafonds (60m²)
                    </span>
                    <span className="font-semibold">60 × €10 = €600</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-gray-700">
                      traditioneel stucwerk wanden (30m²)
                    </span>
                    <span className="font-semibold">30 × €18 = €540</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-gray-700">
                      schuurwerk voorbereiding
                    </span>
                    <span className="font-semibold">€300</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-gray-700">
                      afplakken en beschermen
                    </span>
                    <span className="font-semibold">€150</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-400">
                    <span className="text-gray-700">materialen</span>
                    <span className="font-semibold">inclusief</span>
                  </div>

                  <div className="flex justify-between items-center pt-4">
                    <span className="text-xl font-bold text-gray-900">
                      totaal
                    </span>
                    <span className="text-3xl font-bold text-primary">
                      €1.590
                    </span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>oplevering:</strong> binnen 3-4 werkdagen
                    <br />
                    <strong>garantie:</strong> 2 jaar op materiaal en uitvoering
                    <br />
                    <strong>inclusief:</strong> alle materialen, opruimen,
                    afvoer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA naar lokale pages */}
        <section className="py-20 bg-gradient-to-br from-primary to-blue-700 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                wil je weten wat het voor jouw project kost?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                vraag een gratis, vrijblijvende offerte aan. wij komen graag bij
                je langs voor een nauwkeurige opname en geven binnen 24 uur een
                scherpe prijs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  href="/locaties/stucwerk-amsterdam"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-xl"
                >
                  offerte aanvragen amsterdam
                  <ArrowRight size={20} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all"
                >
                  andere locatie
                  <ArrowRight size={20} />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <CheckCircle className="mx-auto mb-2" size={32} />
                  <p className="font-semibold">gratis opname & offerte</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <CheckCircle className="mx-auto mb-2" size={32} />
                  <p className="font-semibold">binnen 24u antwoord</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <CheckCircle className="mx-auto mb-2" size={32} />
                  <p className="font-semibold">15+ jaar ervaring</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related links */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                lees ook:
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  href="/diensten/stucwerk"
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group"
                >
                  <h4 className="font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    alles over stucwerk →
                  </h4>
                  <p className="text-gray-600 text-sm">
                    ontdek welke soorten stucwerk er zijn en wat het beste bij
                    jouw project past
                  </p>
                </Link>
                <Link
                  href="/diensten/spackspuiten"
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group"
                >
                  <h4 className="font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    wat is spackspuiten? →
                  </h4>
                  <p className="text-gray-600 text-sm">
                    leer meer over deze moderne stucwerk techniek en de
                    voordelen
                  </p>
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
