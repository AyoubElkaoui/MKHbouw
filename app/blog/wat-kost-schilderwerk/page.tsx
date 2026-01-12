import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Paintbrush,
  CheckCircle,
  Calculator,
  AlertCircle,
  Phone,
  ArrowRight,
  Home,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "wat kost schilderwerk in 2026? offerte aanvragen | mkhbouw",
  description:
    "benieuwd naar de kosten van schilderwerk in 2026? ontdek welke factoren de prijs bepalen en vraag een vrijblijvende offerte aan bij mkhbouw.",
  keywords: [
    "wat kost schilderwerk",
    "schilderwerk prijs",
    "schilder kosten",
    "schilderen prijzen 2026",
    "hoeveel kost schilderen",
    "offerte schilderwerk",
    "schilder tarief",
  ],
  openGraph: {
    title: "wat kost schilderwerk in 2026? offerte aanvragen",
    description:
      "ontdek welke factoren de prijs van schilderwerk bepalen en vraag een vrijblijvende offerte aan.",
    url: "https://mkhbouw.nl/blog/wat-kost-schilderwerk",
  },
};

export default function WatKostSchilderwerk() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full font-semibold text-sm mb-6">
                <Paintbrush className="inline-block w-4 h-4 mr-2" />
                prijsgids 2026
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                wat kost schilderwerk in 2026?
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                ben je van plan om schilderwerk te laten doen en wil je weten
                wat de kosten zijn? de prijs van schilderwerk hangt af van
                verschillende factoren zoals oppervlakte, type verf, voorbereiding
                en de staat van het houtwerk.
              </p>

              <div className="bg-blue-100 border-l-4 border-primary p-6 rounded-r-lg">
                <p className="text-gray-800 font-semibold mb-2">
                  💡 belangrijk om te weten
                </p>
                <p className="text-gray-700 mb-4">
                  elke schilderklus is uniek. de prijs hangt af van het type
                  werk (binnen/buiten), het aantal verflagen, de staat van het
                  houtwerk, hoogte en bereikbaarheid. daarom werken wij alleen
                  met projectgebonden offertes op maat.
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

        {/* Types schilderwerk */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                welke soorten schilderwerk zijn er?
              </h2>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {/* Binnenschilderwerk */}
                <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-blue-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    binnenschilderwerk
                  </h3>
                  <p className="text-gray-600 mb-6">
                    muren, plafonds, deuren en kozijnen in huis schilderen.
                    meestal minder complex dan buitenwerk.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        className="text-green-500 flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-700">wanden en plafonds</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        className="text-green-500 flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-700">deuren en kozijnen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        className="text-green-500 flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-700">plinten en lijstwerk</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        className="text-green-500 flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-700">radiatoren</span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-600 mb-4">
                    ideaal voor: renovatie, opfrissen, nieuwe uitstraling
                  </p>
                  <Link
                    href="/diensten/schilderwerk"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  >
                    meer over binnenschilderen <ArrowRight size={18} />
                  </Link>
                </div>

                {/* Buitenschilderwerk */}
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    buitenschilderwerk
                  </h3>
                  <p className="text-gray-600 mb-6">
                    bescherming en onderhoud van buitenkozijnen, deuren, gevels
                    en houtwerk tegen weersinvloeden.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        className="text-green-500 flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-700">kozijnen en ramen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        className="text-green-500 flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-700">deuren en dorpels</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        className="text-green-500 flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-700">gevels en dakgoten</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        className="text-green-500 flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-700">schuttingen en tuinhuizen</span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-600 mb-4">
                    ideaal voor: onderhoud, bescherming, waardebehoud
                  </p>
                  <Link
                    href="/diensten/schilderwerk"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  >
                    meer over buitenschilderen <ArrowRight size={18} />
                  </Link>
                </div>

                {/* Specialistisch werk */}
                <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl border-2 border-amber-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    specialistisch werk
                  </h3>
                  <p className="text-gray-600 mb-6">
                    verfijnd schilderwerk zoals spuitwerk, lakwerk en decoratieve
                    technieken voor een premium resultaat.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        className="text-green-500 flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-700">spuitwerk voor deuren</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        className="text-green-500 flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-700">lakwerk hoogglans</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        className="text-green-500 flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-700">decoratieve technieken</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        className="text-green-500 flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-700">restauratie oud houtwerk</span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-600 mb-4">
                    ideaal voor: luxe afwerking, monumenten, high-end projecten
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  >
                    vraag advies aan <ArrowRight size={18} />
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
                      <Home className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        oppervlakte en aantal ruimtes
                      </h3>
                      <p className="text-gray-700 mb-2">
                        hoe meer m² we kunnen schilderen, hoe efficiënter we
                        kunnen werken. bij grotere projecten kunnen we vaak
                        schaalvoordelen doorberekenen.
                      </p>
                      <p className="text-sm text-gray-600">
                        tip: laat meerdere kamers in één keer doen voor het beste
                        tarief
                      </p>
                    </div>
                  </div>
                </div>

                {/* Voorbereiding */}
                <div className="bg-white p-8 rounded-2xl shadow-sm">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <AlertCircle className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        staat van het houtwerk
                      </h3>
                      <p className="text-gray-700 mb-2">
                        rot hout, loszittende verf en scheuren moeten eerst
                        gerepareerd worden. hoe slechter de staat, hoe meer
                        voorbereidend werk nodig is.
                      </p>
                      <p className="text-sm text-gray-600">
                        goed onderhouden houtwerk bespaart uiteindelijk geld
                      </p>
                    </div>
                  </div>
                </div>

                {/* Type verf */}
                <div className="bg-white p-8 rounded-2xl shadow-sm">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Paintbrush className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        type verf en aantal lagen
                      </h3>
                      <p className="text-gray-700 mb-4">
                        kwaliteitsverf kost meer maar dekt beter en gaat langer
                        mee. het aantal lagen dat nodig is hangt af van het
                        kleurverschil en de ondergrond.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• standaard latex: goede prijs-kwaliteit</li>
                        <li>• premium verf: betere dekking en duurzaamheid</li>
                        <li>• buitenverf: speciale bescherming</li>
                        <li>• lakverf: voor hoogglans resultaat</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Hoogte en bereikbaarheid */}
                <div className="bg-white p-8 rounded-2xl shadow-sm">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <TrendingUp className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        hoogte en bereikbaarheid
                      </h3>
                      <p className="text-gray-700 mb-4">
                        hoge plafonds, trappenhuizen en buitenwerk op hoogte
                        vragen extra materieel zoals steigers of hoogwerkers.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• standaard hoogte: geen extra kosten</li>
                        <li>• hoge ruimtes: steiger nodig</li>
                        <li>• buitenwerk 2e verdieping: steigers of lift</li>
                        <li>• moeilijk bereikbare plekken: meer tijd</li>
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
                wat zit er nog meer bij?
              </h2>

              <div className="bg-blue-50 p-8 rounded-2xl">
                <p className="text-gray-700 mb-6">
                  naast het schilderen zelf zijn er vaak extra werkzaamheden
                  nodig. deze nemen we mee in de offerte:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3">
                      voorbereidend werk
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle
                          className="text-primary flex-shrink-0 mt-1"
                          size={18}
                        />
                        <span>oude verf afkrabben</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle
                          className="text-primary flex-shrink-0 mt-1"
                          size={18}
                        />
                        <span>schuren van houtwerk</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle
                          className="text-primary flex-shrink-0 mt-1"
                          size={18}
                        />
                        <span>gaten en scheuren repareren</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle
                          className="text-primary flex-shrink-0 mt-1"
                          size={18}
                        />
                        <span>afdekken en afplakken</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle
                          className="text-primary flex-shrink-0 mt-1"
                          size={18}
                        />
                        <span>grondverf aanbrengen</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 mb-3">
                      extra services
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle
                          className="text-primary flex-shrink-0 mt-1"
                          size={18}
                        />
                        <span>verwijderen behang</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle
                          className="text-primary flex-shrink-0 mt-1"
                          size={18}
                        />
                        <span>reparatie rot hout</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle
                          className="text-primary flex-shrink-0 mt-1"
                          size={18}
                        />
                        <span>kitwerk en afwerking</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle
                          className="text-primary flex-shrink-0 mt-1"
                          size={18}
                        />
                        <span>opruimen en afvoer</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle
                          className="text-primary flex-shrink-0 mt-1"
                          size={18}
                        />
                        <span>kleuradvies</span>
                      </li>
                    </ul>
                  </div>
                </div>
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
                    1. regelmatig onderhoud voorkomt groot onderhoud
                  </h3>
                  <p className="text-gray-700">
                    buitenwerk elke 5-7 jaar overschilderen bespaart veel geld.
                    wacht niet tot het hout rot is, dan wordt het echt duur.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    2. voorbereiding zelf doen
                  </h3>
                  <p className="text-gray-700">
                    meubels verhuizen, oude spijkers verwijderen en afplakken
                    kun je zelf doen. dit scheelt arbeidsuren.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    3. meerdere werkzaamheden combineren
                  </h3>
                  <p className="text-gray-700">
                    laat schilderwerk combineren met stucwerk of andere
                    werkzaamheden. we zijn dan toch al bezig en dat scheelt in
                    de totaalprijs.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    4. kies het juiste seizoen
                  </h3>
                  <p className="text-gray-700">
                    buiten het hoogseizoen (voorjaar/zomer) hebben we soms meer
                    flexibiliteit in planning en kunnen we scherpere tarieven
                    aanbieden.
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
                      vakmanschap en ervaring
                    </h3>
                    <p className="text-gray-600">
                      jarenlange ervaring in binnen- en buitenschilderwerk. van
                      nieuwbouw tot monumentaal vastgoed.
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
                      kwaliteitsverf en materialen
                    </h3>
                    <p className="text-gray-600">
                      we werken alleen met hoogwaardige verven die lang mooi
                      blijven en goed beschermen.
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
                      netjes en betrouwbaar
                    </h3>
                    <p className="text-gray-600">
                      we werken netjes, komen afspraken na en laten de boel
                      schoon achter. overlast houden we tot een minimum.
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
                      scherpe prijzen
                    </h3>
                    <p className="text-gray-600">
                      eerlijke prijzen zonder verborgen kosten. wat we
                      afspreken, dat voeren we uit.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary to-primary/90 text-white p-8 rounded-2xl text-center">
                <h3 className="text-2xl font-bold mb-4">
                  klaar voor een offerte op maat?
                </h3>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  vertel ons over je schilderproject en ontvang binnen 24 uur
                  een vrijblijvende offerte. of bel ons direct voor advies.
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
                veelgestelde vragen over schilderwerk prijzen
              </h2>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    waarom kan ik geen vaste prijs per m² krijgen?
                  </h3>
                  <p className="text-gray-700">
                    schilderwerk is maatwerk. de staat van het houtwerk, het type
                    verf, het aantal lagen en de bereikbaarheid maken allemaal
                    verschil. daarom kijken we eerst naar jouw specifieke
                    situatie voor een eerlijke prijs.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    hoe lang duurt gemiddeld een schilderklus?
                  </h3>
                  <p className="text-gray-700">
                    een gemiddelde woonkamer is in 1-2 dagen klaar. een heel huis
                    binnen schilderen duurt meestal 3-7 dagen, afhankelijk van de
                    grootte en het voorbereidend werk.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    leveren jullie de verf of moet ik dat zelf doen?
                  </h3>
                  <p className="text-gray-700">
                    wij verzorgen alle materialen inclusief verf. we werken met
                    kwaliteitsmerken die we kennen en vertrouwen. natuurlijk
                    kunnen we ook met door jou geleverde verf werken.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    kan ik tijdens het schilderen in huis blijven?
                  </h3>
                  <p className="text-gray-700">
                    ja, dat kan meestal wel. we werken per ruimte en zorgen dat
                    de overlast beperkt blijft. bij buitenwerk kun je gewoon
                    thuis blijven.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    krijg ik garantie op het schilderwerk?
                  </h3>
                  <p className="text-gray-700">
                    ja, we geven garantie op ons werk. de duur hangt af van het
                    type werk en de omstandigheden. dit staat altijd duidelijk in
                    de offerte vermeld.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    wanneer is het beste seizoen voor buitenschilderwerk?
                  </h3>
                  <p className="text-gray-700">
                    het liefst in droge periodes tussen maart en oktober. maar
                    met moderne verven kunnen we ook buiten het seizoen werken,
                    als het maar droog en niet te koud is.
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
                  href="/blog/wat-kost-stucwerk"
                  className="group bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    wat kost stucwerk in 2026?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    benieuwd naar de kosten van stucwerk? ontdek welke factoren
                    de prijs bepalen.
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
                    ontdek alle mogelijkheden voor binnen- en buitenschilderwerk
                    bij mkhbouw.
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
