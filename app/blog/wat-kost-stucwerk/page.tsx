import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  CheckCircle,
  Calculator,
  TrendingUp,
  AlertCircle,
  Phone,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "wat kost stucwerk in 2026? offerte aanvragen | mkhbouw",
  description:
    "benieuwd naar de kosten van stucwerk in 2026? ontdek welke factoren de prijs bepalen en vraag een vrijblijvende offerte aan bij mkhbouw.",
  keywords: [
    "wat kost stucwerk",
    "stucwerk prijs",
    "spackspuiten kosten",
    "sierpleister prijs",
    "stucadoor kosten",
    "stucwerk prijzen 2026",
    "hoeveel kost stucwerk",
    "offerte stucwerk",
  ],
  openGraph: {
    title: "wat kost stucwerk in 2026? offerte aanvragen",
    description:
      "ontdek welke factoren de prijs van stucwerk bepalen en vraag een vrijblijvende offerte aan.",
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
                prijsgids 2026
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                wat kost stucwerk in 2026?
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                ben je van plan om stucwerk te laten doen en wil je weten wat de
                kosten zijn? de prijs van stucwerk hangt af van verschillende
                factoren. in deze gids leggen we uit wat de prijs beïnvloedt en
                waarom maatwerk zo belangrijk is.
              </p>

              <div className="bg-blue-100 border-l-4 border-primary p-6 rounded-r-lg">
                <p className="text-gray-800 font-semibold mb-2">
                  💡 belangrijk om te weten
                </p>
                <p className="text-gray-700 mb-4">
                  elke stucwerkklus is uniek. de prijs hangt af van het type
                  stucwerk, oppervlakte, staat van de ondergrond, locatie en
                  gewenste afwerking. daarom werken wij alleen met
                  projectgebonden offertes.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  <Phone size={18} />
                  vraag vrijblijvende offerte aan
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Types stucwerk */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                welke soorten stucwerk zijn er?
              </h2>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {/* Spackspuiten */}
                <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-blue-100 hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    spackspuiten
                  </h3>
                  <p className="text-gray-600 mb-6">
                    moderne techniek waarbij stucwerk machinaal wordt
                    aangebracht. ideaal voor grotere oppervlakken.
                  </p>
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
                    href="/diensten/spackspuiten"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  >
                    meer over spackspuiten <ArrowRight size={18} />
                  </Link>
                </div>

                {/* Traditioneel stucwerk */}
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-200 hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    traditioneel stucwerk
                  </h3>
                  <p className="text-gray-600 mb-6">
                    vakmanschap waarbij stuc met de hand wordt aangebracht.
                    perfect voor renovatie en maatwerk.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        className="text-green-500 flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-700">
                        ambachtelijk vakwerk
                      </span>
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
                    meer over traditioneel stucwerk <ArrowRight size={18} />
                  </Link>
                </div>

                {/* Sierpleister */}
                <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl border-2 border-amber-200 hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    sierpleister
                  </h3>
                  <p className="text-gray-600 mb-6">
                    decoratieve afwerking met unieke structuren en texturen.
                    voor een luxe uitstraling.
                  </p>
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
                      <span className="text-gray-700">
                        verschillende afwerkingen mogelijk
                      </span>
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
                    bekijk sierpleister <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Factoren die prijs beïnvloeden */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                welke factoren bepalen de prijs?
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Oppervlakte */}
                <div className="bg-white p-8 rounded-2xl shadow-sm">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <TrendingUp className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        oppervlakte
                      </h3>
                      <p className="text-gray-700 mb-2">
                        hoe groter het oppervlak, hoe lager de prijs per m²
                        meestal uitvalt. bij grotere projecten kunnen we
                        schaalvoordelen doorberekenen.
                      </p>
                      <p className="text-sm text-gray-600">
                        tip: combineer meerdere ruimtes in één project voor het
                        beste tarief
                      </p>
                    </div>
                  </div>
                </div>

                {/* Staat ondergrond */}
                <div className="bg-white p-8 rounded-2xl shadow-sm">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <AlertCircle className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        staat van de ondergrond
                      </h3>
                      <p className="text-gray-700 mb-2">
                        een slechte, ongelijke of beschadigde ondergrond vraagt
                        meer voorbereidend werk. scheuren moeten gerepareerd
                        worden en het oppervlak moet vlak zijn.
                      </p>
                      <p className="text-sm text-gray-600">
                        bij een bezichtiging beoordelen we de staat en geven we
                        advies
                      </p>
                    </div>
                  </div>
                </div>

                {/* Type ruimte */}
                <div className="bg-white p-8 rounded-2xl shadow-sm">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <CheckCircle className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        type ruimte en hoogte
                      </h3>
                      <p className="text-gray-700 mb-4">
                        de moeilijkheidsgraad verschilt per ruimte. plafonds,
                        trappenhuizen en hoge ruimten vragen meer tijd en
                        materieel.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• wanden: standaard</li>
                        <li>• plafonds: meer tijd nodig</li>
                        <li>• trappenhuizen: complex</li>
                        <li>• hoge ruimten: extra materieel vereist</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Gewenste afwerking */}
                <div className="bg-white p-8 rounded-2xl shadow-sm">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Calculator className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        gewenste afwerking
                      </h3>
                      <p className="text-gray-700 mb-4">
                        de kwaliteit van de afwerking bepaalt ook de prijs.
                        hogere kwaliteit vraagt meer tijd en vakmanschap.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• standaard sausklaar</li>
                        <li>• extra glad afgewerkt</li>
                        <li>• hoogste kwaliteit afwerking</li>
                        <li>• sierpleister met structuur</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Extra werkzaamheden */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                mogelijke extra werkzaamheden
              </h2>

              <div className="bg-blue-50 p-8 rounded-2xl">
                <p className="text-gray-700 mb-6">
                  naast het stucwerk zelf zijn er vaak extra werkzaamheden
                  nodig. deze nemen we mee in de offerte:
                </p>

                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      className="text-primary flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span>
                      <strong>schuurwerk:</strong> voorbewerking van wanden en
                      plafonds
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      className="text-primary flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span>
                      <strong>afplakken:</strong> bescherming van kozijnen,
                      vloeren en meubels
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      className="text-primary flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span>
                      <strong>grondlaag:</strong> voor betere hechting
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      className="text-primary flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span>
                      <strong>verwijderen behang:</strong> oude afwerking
                      verwijderen
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      className="text-primary flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span>
                      <strong>reparaties:</strong> scheuren en gaten dichten
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      className="text-primary flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span>
                      <strong>steigers:</strong> bij hoge ruimtes of gevels
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Hoe bespaar je */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                slimme tips om kosten te besparen
              </h2>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    1. voorbereiding zelf doen
                  </h3>
                  <p className="text-gray-700">
                    door zelf meubels te verhuizen, behang te verwijderen en te
                    schuren kun je op arbeidskosten besparen.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    2. meerdere ruimtes combineren
                  </h3>
                  <p className="text-gray-700">
                    hoe meer m² we in één keer kunnen doen, hoe voordeliger het
                    wordt. overweeg om meerdere kamers tegelijk te laten stucen.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    3. kies het juiste seizoen
                  </h3>
                  <p className="text-gray-700">
                    in rustigere periodes hebben we soms meer flexibiliteit in
                    planning en tarieven. vraag ernaar bij je offerte.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    4. wacht niet te lang met onderhoud
                  </h3>
                  <p className="text-gray-700">
                    kleine scheuren worden grote scheuren. door op tijd te
                    onderhouden voorkom je grotere en duurdere reparaties.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Waarom mkhbouw */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                waarom kiezen voor mkhbouw?
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="flex items-start gap-4">
                  <CheckCircle
                    className="text-green-500 flex-shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      eerlijke prijzen
                    </h3>
                    <p className="text-gray-600">
                      transparante offertes zonder verborgen kosten. wat we
                      afspreken, dat voeren we uit.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle
                    className="text-green-500 flex-shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      vakmanschap
                    </h3>
                    <p className="text-gray-600">
                      jarenlange ervaring in stucwerk. van nieuwbouw tot
                      renovatie, wij leveren kwaliteit.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle
                    className="text-green-500 flex-shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      snel en netjes
                    </h3>
                    <p className="text-gray-600">
                      we werken efficiënt en houden de werkplek netjes. overlast
                      houden we tot een minimum.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle
                    className="text-green-500 flex-shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      persoonlijk advies
                    </h3>
                    <p className="text-gray-600">
                      we denken graag met je mee over de beste oplossing voor
                      jouw situatie.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary to-primary/90 text-white p-8 rounded-2xl text-center">
                <h3 className="text-2xl font-bold mb-4">
                  klaar voor een offerte op maat?
                </h3>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  vertel ons over je project en ontvang binnen 24 uur een
                  vrijblijvende offerte. of bel ons direct voor advies.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                  >
                    <Calculator size={20} />
                    offerte aanvragen
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
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                veelgestelde vragen over stucwerk prijzen
              </h2>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    waarom krijg ik geen vaste prijs per m²?
                  </h3>
                  <p className="text-gray-700">
                    elke klus is anders. de staat van je muren, de hoogte van je
                    plafonds, de bereikbaarheid, het type stucwerk en de
                    gewenste afwerking maken allemaal verschil. daarom werken we
                    met projectgebonden offertes die rekening houden met jouw
                    specifieke situatie.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    is een offerte vrijblijvend?
                  </h3>
                  <p className="text-gray-700">
                    ja, onze offertes zijn altijd vrijblijvend. je zit nergens
                    aan vast en kunt rustig verschillende aanbiedingen
                    vergelijken.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    hoe snel kan ik een offerte verwachten?
                  </h3>
                  <p className="text-gray-700">
                    na je aanvraag nemen we binnen 24 uur contact op om een
                    afspraak voor een bezichtiging te maken. na de bezichtiging
                    ontvang je meestal binnen enkele dagen een uitgebreide
                    offerte.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    zit btw bij de prijs inbegrepen?
                  </h3>
                  <p className="text-gray-700">
                    in onze offertes geven we altijd duidelijk aan of prijzen
                    inclusief of exclusief btw zijn. voor particulieren werken
                    we meestal inclusief btw.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    wat is goedkoper: spackspuiten of traditioneel stucwerk?
                  </h3>
                  <p className="text-gray-700">
                    spackspuiten is meestal voordeliger bij grote oppervlakken
                    omdat het sneller gaat. voor kleine ruimtes of renovatie kan
                    traditioneel stucwerk echter de betere keuze zijn. we
                    adviseren je graag over wat het beste bij jouw project past.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    komen er nog verborgen kosten bij?
                  </h3>
                  <p className="text-gray-700">
                    nee, bij mkhbouw werk je met transparante offertes. alle
                    werkzaamheden en kosten staan duidelijk vermeld. alleen als
                    er tijdens het werk onverwachte zaken naar voren komen
                    (bijvoorbeeld verborgen schade) overleggen we dit eerst met
                    je.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related articles */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                lees ook
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link
                  href="/diensten/spackspuiten"
                  className="group bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    alles over spackspuiten
                  </h3>
                  <p className="text-gray-600 mb-4">
                    ontdek de voordelen van spackspuiten en wanneer deze
                    techniek de beste keuze is.
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                    lees meer <ArrowRight size={18} />
                  </span>
                </Link>

                <Link
                  href="/diensten/sierpleister"
                  className="group bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    sierpleister voor een unieke uitstraling
                  </h3>
                  <p className="text-gray-600 mb-4">
                    decoratieve afwerking met structuur en karakter voor je
                    interieur.
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
