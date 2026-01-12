import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Zap,
  CheckCircle,
  X,
  Phone,
  ArrowRight,
  Clock,
  DollarSign,
  Target,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "spackspuiten vs traditioneel stucwerk in 2026? verschil | mkhbouw",
  description:
    "wat is het verschil tussen spackspuiten en traditioneel stucwerk? ontdek de voor- en nadelen en welke techniek het beste bij jouw project past.",
  keywords: [
    "spackspuiten vs traditioneel",
    "verschil spackspuiten stucwerk",
    "wat is spackspuiten",
    "stucwerk technieken",
    "welk stucwerk kiezen",
    "spackspuit of hand",
    "vergelijking stucwerk",
  ],
  openGraph: {
    title: "spackspuiten vs traditioneel stucwerk: wat is het verschil?",
    description:
      "ontdek het verschil tussen spackspuiten en traditioneel stucwerk en welke techniek het beste bij jouw project past.",
    url: "https://mkhbouw.nl/blog/verschil-spackspuiten-traditioneel",
  },
};

export default function VerschilSpackspuitenTraditioneel() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full font-semibold text-sm mb-6">
                <Zap className="inline-block w-4 h-4 mr-2" />
                techniek vergelijking 2026
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                spackspuiten vs traditioneel stucwerk: wat is het verschil?
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                aan het twijfelen tussen spackspuiten en traditioneel stucwerk?
                beide technieken hebben hun eigen voor- en nadelen. in deze gids
                leggen we het verschil uit zodat je een weloverwogen keuze kunt
                maken.
              </p>

              <div className="bg-blue-100 border-l-4 border-primary p-6 rounded-r-lg">
                <p className="text-gray-800 font-semibold mb-2">
                  💡 kort samengevat
                </p>
                <p className="text-gray-700 mb-4">
                  spackspuiten is sneller en ideaal voor grote oppervlakken.
                  traditioneel stucwerk is ambachtelijk en perfect voor
                  renovatie en maatwerk. de beste keuze hangt af van jouw
                  specifieke situatie.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  <Phone size={18} />
                  vraag persoonlijk advies aan
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Wat is wat */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                wat is het verschil?
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Spackspuiten */}
                <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-blue-200">
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="text-primary" size={32} />
                    <h3 className="text-2xl font-bold text-gray-900">
                      spackspuiten
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-6">
                    bij spackspuiten wordt het stucwerk machinaal aangebracht
                    met een speciale spuitpistool. de spack (dunne stuclaag)
                    wordt onder druk gespoten en zorgt voor een snel en egaal
                    resultaat.
                  </p>
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">
                      hoe werkt het?
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• machine spuit dunne laag stucwerk</li>
                      <li>• onder hoge druk aangebracht</li>
                      <li>• direct glad resultaat</li>
                      <li>• na drogen sausklaar</li>
                    </ul>
                  </div>
                </div>

                {/* Traditioneel */}
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-300">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="text-primary" size={32} />
                    <h3 className="text-2xl font-bold text-gray-900">
                      traditioneel stucwerk
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-6">
                    traditioneel stucwerk wordt met de hand aangebracht met een
                    pleisterspaan. de stucadoor brengt het materiaal in één of
                    meerdere lagen aan en werkt het handmatig glad.
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">
                      hoe werkt het?
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• handmatig aangebracht met spaan</li>
                      <li>• vaak in meerdere lagen</li>
                      <li>• ambachtelijk vakmanschap</li>
                      <li>• zeer nauwkeurige afwerking</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Directe vergelijking */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                directe vergelijking
              </h2>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-primary text-white">
                      <tr>
                        <th className="px-6 py-4 text-left font-bold">aspect</th>
                        <th className="px-6 py-4 text-left font-bold">
                          spackspuiten
                        </th>
                        <th className="px-6 py-4 text-left font-bold">
                          traditioneel
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 font-semibold text-gray-900">
                          snelheid
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          <CheckCircle className="inline text-green-500 mr-2" size={18} />
                          zeer snel (1-2 dagen)
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          langzamer (3-5 dagen)
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">
                          resultaat
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          zeer egaal en glad
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          <CheckCircle className="inline text-green-500 mr-2" size={18} />
                          zeer glad, maatwerk mogelijk
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-semibold text-gray-900">
                          beste voor
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          grote oppervlakken, nieuwbouw
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          renovatie, kleine ruimtes
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">
                          flexibiliteit
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          standaard afwerking
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          <CheckCircle className="inline text-green-500 mr-2" size={18} />
                          zeer flexibel, maatwerk
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-semibold text-gray-900">
                          geschikt voor
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          rechte wanden, grote vlakken
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          <CheckCircle className="inline text-green-500 mr-2" size={18} />
                          alle situaties, ook complex
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">
                          duurzaamheid
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          zeer goed
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          zeer goed
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Voordelen en nadelen */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                voor- en nadelen op een rij
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Spackspuiten voordelen */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    spackspuiten
                  </h3>

                  <div className="bg-green-50 p-6 rounded-xl mb-6">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={20} />
                      voordelen
                    </h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={18} />
                        <span>zeer snel klaar, ideaal bij tijdsdruk</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={18} />
                        <span>perfect egaal resultaat</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={18} />
                        <span>efficiënt bij grote oppervlakken</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={18} />
                        <span>direct sausklaar na drogen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={18} />
                        <span>minder stof tijdens het werk</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={18} />
                        <span>geen penseelstreken of spatels zichtbaar</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-red-50 p-6 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <X className="text-red-500" size={20} />
                      nadelen
                    </h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <X className="text-red-500 flex-shrink-0 mt-1" size={18} />
                        <span>niet geschikt voor kleine ruimtes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="text-red-500 flex-shrink-0 mt-1" size={18} />
                        <span>lastig bij veel hoeken en obstakels</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="text-red-500 flex-shrink-0 mt-1" size={18} />
                        <span>vereist speciale apparatuur</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="text-red-500 flex-shrink-0 mt-1" size={18} />
                        <span>minder flexibel in afwerking</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="text-red-500 flex-shrink-0 mt-1" size={18} />
                        <span>alles moet zorgvuldig afgedekt worden</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Traditioneel voordelen */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    traditioneel stucwerk
                  </h3>

                  <div className="bg-green-50 p-6 rounded-xl mb-6">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={20} />
                      voordelen
                    </h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={18} />
                        <span>perfect voor renovatie en herstel</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={18} />
                        <span>zeer geschikt voor kleine ruimtes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={18} />
                        <span>ambachtelijk vakmanschap</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={18} />
                        <span>zeer flexibel, ook bij moeilijke hoeken</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={18} />
                        <span>maatwerk en speciale afwerkingen mogelijk</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={18} />
                        <span>geschikt voor alle situaties</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-red-50 p-6 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <X className="text-red-500" size={20} />
                      nadelen
                    </h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <X className="text-red-500 flex-shrink-0 mt-1" size={18} />
                        <span>kost meer tijd dan spackspuiten</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="text-red-500 flex-shrink-0 mt-1" size={18} />
                        <span>arbeidsintensief bij grote oppervlakken</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="text-red-500 flex-shrink-0 mt-1" size={18} />
                        <span>vereist veel ervaring voor top resultaat</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="text-red-500 flex-shrink-0 mt-1" size={18} />
                        <span>resultaat afhankelijk van vakman</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wanneer welke kiezen */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                welke techniek past bij jouw situatie?
              </h2>

              <div className="space-y-8">
                {/* Kies spackspuiten */}
                <div className="bg-blue-50 p-8 rounded-2xl border-2 border-blue-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <Zap className="text-primary" size={28} />
                    kies voor spackspuiten als:
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span>je nieuwbouw hebt met grote rechte oppervlakken</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span>snelheid belangrijk is (bijvoorbeeld bij oplevering)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span>je hele woning of meerdere kamers wilt laten doen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span>je plafonds wilt laten stucen (gaat zeer snel)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span>je een strak modern resultaat wilt</span>
                    </li>
                  </ul>
                </div>

                {/* Kies traditioneel */}
                <div className="bg-gray-100 p-8 rounded-2xl border-2 border-gray-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <Target className="text-primary" size={28} />
                    kies voor traditioneel stucwerk als:
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span>je een renovatie of herstelwerk hebt</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span>je één of enkele kleine ruimtes wilt laten doen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span>je ruimte veel hoeken en obstakels heeft</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span>je speciale afwerking of maatwerk wilt</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span>je monumentaal vastgoed hebt</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span>je scheuren moet repareren of herstellen</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Combinatie */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-primary/10 to-blue-50 p-8 rounded-2xl border-2 border-primary/20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  💡 tip: combineer beide technieken
                </h2>
                <p className="text-gray-700 mb-4">
                  vaak is een combinatie van beide technieken de slimste keuze.
                  bijvoorbeeld spackspuiten voor grote wanden en plafonds, en
                  traditioneel stucwerk voor hoeken, trappenhuizen of lastige
                  plekken.
                </p>
                <p className="text-gray-700">
                  wij adviseren je graag welke aanpak het beste bij jouw
                  project past. geen enkele situatie is hetzelfde!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                veelgestelde vragen
              </h2>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    is spackspuiten beter dan traditioneel stucwerk?
                  </h3>
                  <p className="text-gray-700">
                    niet per se beter, maar wel anders. spackspuiten is sneller
                    en ideaal voor grote oppervlakken. traditioneel stucwerk is
                    flexibeler en beter voor renovatie en maatwerk. het hangt af
                    van je situatie.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    zie je verschil in het eindresultaat?
                  </h3>
                  <p className="text-gray-700">
                    beide technieken leveren een prachtig glad resultaat als ze
                    goed worden uitgevoerd. spackspuiten geeft vaak een iets
                    egaler oppervlak, maar traditioneel stucwerk kan net zo mooi
                    zijn bij een ervaren vakman.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    kan ik spackspuiten ook in een oude woning?
                  </h3>
                  <p className="text-gray-700">
                    ja dat kan, mits de ondergrond goed is. bij renovatie moeten
                    oude lagen stucwerk vaak eerst verwijderd of gerepareerd
                    worden. we beoordelen dit graag tijdens een opname.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    is het prijsverschil groot?
                  </h3>
                  <p className="text-gray-700">
                    de prijs hangt af van veel factoren. bij grote oppervlakken
                    is spackspuiten vaak voordeliger door de snelheid. bij
                    kleine ruimtes of renovatie kan traditioneel stucwerk juist
                    efficiënter zijn. we maken graag een offerte op maat.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    welke techniek is duurzamer?
                  </h3>
                  <p className="text-gray-700">
                    beide technieken zijn zeer duurzaam als ze goed worden
                    uitgevoerd. de levensduur hangt meer af van de kwaliteit van
                    de ondergrond, materialen en vakmanschap dan van de techniek
                    zelf.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    kan ik zelf kiezen welke techniek jullie gebruiken?
                  </h3>
                  <p className="text-gray-700">
                    natuurlijk! we adviseren wel wat volgens ons het beste
                    resultaat geeft voor jouw situatie, maar uiteindelijk kies
                    jij. we leggen graag uit wat de voor- en nadelen zijn voor
                    jouw specifieke project.
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
                nog twijfels over de beste techniek?
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                geen probleem! we komen graag bij je langs om je situatie te
                bekijken en je persoonlijk advies te geven. vrijblijvend en
                zonder kosten.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  <Target size={20} />
                  vraag advies aan
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
                  href="/diensten/spackspuiten"
                  className="group bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    alles over spackspuiten
                  </h3>
                  <p className="text-gray-600 mb-4">
                    ontdek alle voordelen van spackspuiten en wanneer deze
                    techniek de beste keuze is.
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
                    traditioneel stucwerk
                  </h3>
                  <p className="text-gray-600 mb-4">
                    lees alles over traditionele stucwerktechnieken en de
                    mogelijkheden.
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
