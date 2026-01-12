import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Wrench,
  CheckCircle,
  AlertCircle,
  Phone,
  ArrowRight,
  Shield,
  Clock,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "stucwerk scheuren repareren in 2026? gids | mkhbouw",
  description:
    "last van scheuren in je stucwerk? ontdek de oorzaken, oplossingen en wanneer je een professional moet inschakelen. expert advies van mkhbouw.",
  keywords: [
    "stucwerk scheuren repareren",
    "scheuren in muur",
    "stucwerk reparatie",
    "scheuren dichten",
    "haarscheuren stucwerk",
    "scheurvorming wand",
    "muur repareren",
  ],
  openGraph: {
    title: "stucwerk scheuren repareren in 2026? complete gids",
    description:
      "ontdek hoe je scheuren in stucwerk herkent, wat de oorzaken zijn en hoe je ze repareert.",
    url: "https://mkhbouw.nl/blog/stucwerk-scheuren-repareren",
  },
};

export default function StucwerkScheurenRepareren() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full font-semibold text-sm mb-6">
                <Wrench className="inline-block w-4 h-4 mr-2" />
                reparatie gids 2026
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                stucwerk scheuren repareren: complete gids
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                scheuren in je stucwerk? dat is vervelend en kan verschillende
                oorzaken hebben. in deze gids leggen we uit welke soorten
                scheuren er zijn, wat de oorzaken zijn en hoe je ze het beste
                kunt repareren.
              </p>

              <div className="bg-amber-100 border-l-4 border-amber-500 p-6 rounded-r-lg">
                <p className="text-gray-800 font-semibold mb-2">
                  ⚠️ belangrijk
                </p>
                <p className="text-gray-700 mb-4">
                  niet alle scheuren zijn hetzelfde. kleine haarscheurtjes kun
                  je vaak zelf repareren, maar grotere of terugkerende scheuren
                  vragen om professionele hulp. wij helpen je graag met advies
                  op maat.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
                >
                  <Phone size={18} />
                  vraag gratis advies aan
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Types scheuren */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                soorten scheuren in stucwerk
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Haarscheuren */}
                <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border-2 border-green-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    haarscheuren
                  </h3>
                  <p className="text-gray-600 mb-6">
                    zeer dunne oppervlakkige scheurtjes, meestal niet dieper
                    dan de bovenste laag stucwerk.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        className="text-green-500 flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-700 text-sm">
                        &lt; 0,5 mm breed
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        className="text-green-500 flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-700 text-sm">
                        meestal cosmetisch
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        className="text-green-500 flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-700 text-sm">
                        vaak in nieuwbouw
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        className="text-green-500 flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-700 text-sm">
                        eenvoudig te repareren
                      </span>
                    </li>
                  </ul>
                  <div className="bg-green-100 p-3 rounded-lg text-sm text-gray-700">
                    <strong>actie:</strong> zelf repareren mogelijk
                  </div>
                </div>

                {/* Grotere scheuren */}
                <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl border-2 border-amber-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    grotere scheuren
                  </h3>
                  <p className="text-gray-600 mb-6">
                    duidelijk zichtbare scheuren die dieper gaan dan alleen het
                    oppervlak.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <AlertCircle
                        className="text-amber-500 flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-700 text-sm">
                        0,5 - 2 mm breed
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle
                        className="text-amber-500 flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-700 text-sm">
                        structureel probleem
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle
                        className="text-amber-500 flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-700 text-sm">
                        kunnen verergeren
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle
                        className="text-amber-500 flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-700 text-sm">
                        reparatie nodig
                      </span>
                    </li>
                  </ul>
                  <div className="bg-amber-100 p-3 rounded-lg text-sm text-gray-700">
                    <strong>actie:</strong> professioneel advies aanbevolen
                  </div>
                </div>

                {/* Ernstige scheuren */}
                <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl border-2 border-red-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    ernstige scheuren
                  </h3>
                  <p className="text-gray-600 mb-6">
                    brede, diepe scheuren die mogelijk op structurele problemen
                    wijzen.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <AlertCircle
                        className="text-red-500 flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-700 text-sm">
                        &gt; 2 mm breed
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle
                        className="text-red-500 flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-700 text-sm">
                        structurele schade
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle
                        className="text-red-500 flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-700 text-sm">
                        blijven terugkomen
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle
                        className="text-red-500 flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-700 text-sm">
                        directe actie vereist
                      </span>
                    </li>
                  </ul>
                  <div className="bg-red-100 p-3 rounded-lg text-sm text-gray-700">
                    <strong>actie:</strong> direct professional inschakelen
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Oorzaken */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                wat veroorzaakt scheuren in stucwerk?
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Droogkrimp */}
                <div className="bg-white p-8 rounded-2xl shadow-sm">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Clock className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        droogkrimp (nieuwbouw)
                      </h3>
                      <p className="text-gray-700 mb-3">
                        in nieuwbouw ontstaan vaak kleine haarscheurtjes door
                        het drogen en zetten van materialen. dit is normaal en
                        meestal onschuldig.
                      </p>
                      <p className="text-sm text-gray-600">
                        verschijnt meestal in het eerste jaar na oplevering
                      </p>
                    </div>
                  </div>
                </div>

                {/* Beweging gebouw */}
                <div className="bg-white p-8 rounded-2xl shadow-sm">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <TrendingUp className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        beweging in het gebouw
                      </h3>
                      <p className="text-gray-700 mb-3">
                        gebouwen bewegen door temperatuurwisselingen, vocht en
                        verzakking van de fundering. dit kan scheuren
                        veroorzaken.
                      </p>
                      <p className="text-sm text-gray-600">
                        vooral bij hoeken van ramen en deuren
                      </p>
                    </div>
                  </div>
                </div>

                {/* Verkeerde techniek */}
                <div className="bg-white p-8 rounded-2xl shadow-sm">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <AlertCircle className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        verkeerde toepassing
                      </h3>
                      <p className="text-gray-700 mb-3">
                        te snel gewerkt, verkeerde ondergrond, te dikke lagen
                        of geen wapening gebruikt kan leiden tot scheuren.
                      </p>
                      <p className="text-sm text-gray-600">
                        vaak voorkomen bij doe-het-zelf werk
                      </p>
                    </div>
                  </div>
                </div>

                {/* Vochtproblemen */}
                <div className="bg-white p-8 rounded-2xl shadow-sm">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Shield className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        vochtproblemen
                      </h3>
                      <p className="text-gray-700 mb-3">
                        lekkages, opstijgend vocht of condensatie kunnen het
                        stucwerk verzwakken en scheuren veroorzaken.
                      </p>
                      <p className="text-sm text-gray-600">
                        los eerst het vochtprobleem op voordat je repareert
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hoe repareren */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                hoe repareer je scheuren in stucwerk?
              </h2>

              <div className="space-y-8">
                {/* Kleine scheuren zelf */}
                <div className="bg-blue-50 p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    kleine haarscheuren (zelf doen)
                  </h3>
                  <p className="text-gray-700 mb-6">
                    kleine haarscheurtjes kun je vaak zelf repareren. je hebt
                    nodig: acrylaatkit of vulmiddel, vulspatels, schuurpapier
                    en eventueel muurverf.
                  </p>

                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">
                          maak de scheur schoon
                        </h4>
                        <p className="text-gray-700 text-sm">
                          verwijder los stucwerk en stof met een kwast of
                          stofzuiger. de scheur moet schoon en droog zijn.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">
                          vul de scheur
                        </h4>
                        <p className="text-gray-700 text-sm">
                          breng acrylaatkit of vulmiddel aan in de scheur. werk
                          van boven naar beneden en druk goed aan.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                        3
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">
                          strijk glad
                        </h4>
                        <p className="text-gray-700 text-sm">
                          haal overtollig materiaal weg met een spatel en maak
                          het oppervlak glad. laat goed drogen.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                        4
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">
                          schuur en schilder
                        </h4>
                        <p className="text-gray-700 text-sm">
                          schuur licht na met fijn schuurpapier en schilder de
                          muur voor een egaal resultaat.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Grotere scheuren professional */}
                <div className="bg-amber-50 p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    grotere scheuren (professioneel)
                  </h3>
                  <p className="text-gray-700 mb-6">
                    bij grotere of terugkerende scheuren is professionele hulp
                    aan te raden. wij gebruiken speciale technieken en
                    materialen voor een duurzaam resultaat.
                  </p>

                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle
                        className="text-primary flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-700">
                        <strong>uitfrezen en wapenen:</strong> de scheur wordt
                        uitgefreesd, voorzien van wapeningsgaas en professioneel
                        dichtgemaakt
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle
                        className="text-primary flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-700">
                        <strong>oorzaak aanpakken:</strong> we onderzoeken
                        waarom de scheur is ontstaan en pakken dit bij de bron
                        aan
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle
                        className="text-primary flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-700">
                        <strong>meerdere lagen:</strong> we werken in
                        verschillende lagen voor optimale hechting en afwerking
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle
                        className="text-primary flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-700">
                        <strong>garantie:</strong> je krijgt garantie op het
                        uitgevoerde werk
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wanneer professional */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                wanneer moet je een professional inschakelen?
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-start gap-3 mb-3">
                    <AlertCircle className="text-red-500 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">
                        scheuren breder dan 2mm
                      </h3>
                      <p className="text-gray-700 text-sm">
                        wijzen vaak op structurele problemen die professioneel
                        moeten worden onderzocht en gerepareerd.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-start gap-3 mb-3">
                    <AlertCircle className="text-red-500 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">
                        terugkerende scheuren
                      </h3>
                      <p className="text-gray-700 text-sm">
                        als scheuren blijven terugkomen na reparatie, ligt het
                        probleem dieper en is expertise nodig.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-start gap-3 mb-3">
                    <AlertCircle className="text-red-500 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">
                        scheuren bij ramen/deuren
                      </h3>
                      <p className="text-gray-700 text-sm">
                        diagonale scheuren vanaf hoeken kunnen op verzakking of
                        beweging wijzen. laat dit altijd checken.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-start gap-3 mb-3">
                    <AlertCircle className="text-red-500 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">
                        veel scheuren tegelijk
                      </h3>
                      <p className="text-gray-700 text-sm">
                        meerdere scheuren in hetzelfde gebied wijzen vaak op een
                        onderliggend probleem dat aangepakt moet worden.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Preventie tips */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                hoe voorkom je scheuren in stucwerk?
              </h2>

              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    1. gebruik wapeningsgaas
                  </h3>
                  <p className="text-gray-700">
                    bij nieuw stucwerk altijd wapeningsgaas gebruiken, vooral op
                    overgangen tussen verschillende materialen en bij naden.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    2. goede voorbereiding
                  </h3>
                  <p className="text-gray-700">
                    zorg voor een schone, droge en stabiele ondergrond. gebruik
                    indien nodig een primer voor betere hechting.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    3. droogtijd respecteren
                  </h3>
                  <p className="text-gray-700">
                    laat elke laag goed drogen voordat je de volgende aanbrengt.
                    haast maakt dat scheuren sneller ontstaan.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    4. regelmatig onderhoud
                  </h3>
                  <p className="text-gray-700">
                    kleine scheurtjes direct repareren voorkomt dat ze groter
                    worden en water kan binnendringen.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    5. professioneel laten doen
                  </h3>
                  <p className="text-gray-700">
                    een ervaren stucadoor kent de juiste technieken en
                    materialen om scheuren te voorkomen en gebruikt altijd de
                    juiste methodes.
                  </p>
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
                veelgestelde vragen over scheuren in stucwerk
              </h2>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    zijn scheuren in nieuwbouw normaal?
                  </h3>
                  <p className="text-gray-700">
                    ja, kleine haarscheurtjes in het eerste jaar na oplevering
                    zijn normaal. dit komt door het drogen en zetten van
                    materialen. grotere scheuren moeten wel onderzocht worden.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    kunnen scheuren gevaarlijk zijn?
                  </h3>
                  <p className="text-gray-700">
                    scheuren zelf zijn meestal niet gevaarlijk, maar ze kunnen
                    wijzen op structurele problemen zoals verzakking of
                    vochtproblemen die wel ernstig kunnen zijn.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    waarom komen scheuren terug na reparatie?
                  </h3>
                  <p className="text-gray-700">
                    als de oorzaak niet is aangepakt, komen scheuren terug. denk
                    aan beweging in het gebouw, vochtproblemen of verkeerd
                    toegepast stucwerk. een professional kan de oorzaak
                    onderzoeken.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    hoe lang duurt het repareren van scheuren?
                  </h3>
                  <p className="text-gray-700">
                    kleine scheuren zijn in een paar uur gerepareerd. grotere
                    scheuren met wapening vragen meer tijd door droogtijd tussen
                    lagen. meestal 1-2 dagen inclusief droogtijd.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    moet ik overschilderen na reparatie?
                  </h3>
                  <p className="text-gray-700">
                    voor het beste resultaat is overschilderen van de hele wand
                    aan te raden. anders blijft de reparatie zichtbaar,
                    especially bij kleurverschillen.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    vallen scheuren onder garantie?
                  </h3>
                  <p className="text-gray-700">
                    dat hangt af van de oorzaak en wanneer het stucwerk is
                    aangebracht. bij nieuwbouw geldt meestal garantie, maar
                    normale droogkrimp valt vaak niet onder garantie. neem
                    contact op met de aannemer.
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
                last van scheuren in je stucwerk?
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                laat ons kijken naar de oorzaak en krijg direct advies. we
                helpen je graag met een duurzame oplossing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  <Wrench size={20} />
                  vraag reparatie aan
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
                  href="/diensten/stucwerk"
                  className="group bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    professioneel stucwerk
                  </h3>
                  <p className="text-gray-600 mb-4">
                    ontdek alle mogelijkheden voor stucwerk in je woning met
                    mkhbouw.
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
