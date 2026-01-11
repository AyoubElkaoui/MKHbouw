import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, CheckCircle, Clock, Award, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "stucwerk rotterdam - professioneel stucadoor | mkhbouw",
  description:
    "op zoek naar een betrouwbare stucadoor in Rotterdam? mkhbouw levert vakkundig stucwerk, spackspuiten en sierpleister in Rotterdam en omstreken. bel voor offerte: 06 84794108",
  keywords: [
    "stucwerk rotterdam",
    "stucadoor rotterdam",
    "spackspuiten rotterdam",
    "sierpleister rotterdam",
    "stucwerk rotterdam noord",
    "stucwerk rotterdam zuid",
    "stucwerk kralingen",
    "klussenbedrijf rotterdam",
    "mkhbouw rotterdam",
  ],
  openGraph: {
    title: "stucwerk rotterdam - professioneel stucadoor | mkhbouw",
    description: "vakkundig stucwerk in Rotterdam. offerte binnen 24 uur. 15+ jaar ervaring.",
    url: "https://mkhbouw.nl/locaties/stucwerk-rotterdam",
  },
};

export default function StucwerkRotterdam() {
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
                stucwerk rotterdam
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                professioneel stucwerk in rotterdam
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                zoek je een betrouwbare stucadoor in Rotterdam? mkhbouw levert vakkundig
                stucwerk voor moderne nieuwbouw en klassieke rotterdamse woningen. van
                kralingen tot charlois - wij werken door heel rotterdam en omstreken.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="tel:+31684794108"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
                >
                  <Phone size={20} />
                  bel direct: 06 84794108
                </a>
                <a
                  href="#offerte"
                  className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all"
                >
                  gratis offerte aanvragen
                  <ArrowRight size={20} />
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span>15+ jaar ervaring</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span>180+ klanten in rotterdam</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span>offerte binnen 24u</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Diensten in Rotterdam */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                stucwerk diensten in rotterdam
              </h2>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">spackspuiten</h3>
                  <p className="text-gray-600 mb-4">
                    ideaal voor nieuwbouwprojecten in rotterdam. perfect egaal oppervlak
                    voor moderne appartementen en kantoorpanden.
                  </p>
                  <Link href="/diensten/spackspuiten" className="text-primary font-semibold hover:underline">
                    meer info →
                  </Link>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">traditioneel stucwerk</h3>
                  <p className="text-gray-600 mb-4">
                    perfect voor renovatie van klassieke rotterdamse woningen. vakmanschap
                    voor duurzaam resultaat.
                  </p>
                  <Link href="/diensten/stucwerk" className="text-primary font-semibold hover:underline">
                    meer info →
                  </Link>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">sierpleister</h3>
                  <p className="text-gray-600 mb-4">
                    luxe afwerking voor moderne interieurs. populair in rotterdam centrum
                    en kralingen.
                  </p>
                  <Link href="/diensten/sierpleister" className="text-primary font-semibold hover:underline">
                    meer info →
                  </Link>
                </div>
              </div>

              {/* Wijken Rotterdam */}
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  actief in heel rotterdam
                </h3>
                <p className="text-center text-gray-700 mb-6">
                  wij werken in alle wijken en deelgemeenten van rotterdam:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="bg-white p-3 rounded-lg">centrum</div>
                  <div className="bg-white p-3 rounded-lg">kralingen-crooswijk</div>
                  <div className="bg-white p-3 rounded-lg">noord</div>
                  <div className="bg-white p-3 rounded-lg">hillegersberg-schiebroek</div>
                  <div className="bg-white p-3 rounded-lg">delfshaven</div>
                  <div className="bg-white p-3 rounded-lg">charlois</div>
                  <div className="bg-white p-3 rounded-lg">feijenoord</div>
                  <div className="bg-white p-3 rounded-lg">ijsselmonde</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Waarom ons Rotterdam */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                waarom mkhbouw voor stucwerk in rotterdam?
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <Award className="text-white" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      ervaring met rotterdamse bouw
                    </h3>
                    <p className="text-gray-600">
                      van vooroorlogse woningen tot moderne nieuwbouw in rotterdam noord -
                      wij kennen de rotterdamse bouw door en door.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <Clock className="text-white" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      snel beschikbaar in rotterdam
                    </h3>
                    <p className="text-gray-600">
                      doordat wij regelmatig in rotterdam werken, kunnen wij vaak binnen
                      enkele dagen bij u langskomen voor een offerte.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <CheckCircle className="text-white" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      erkend in de regio
                    </h3>
                    <p className="text-gray-600">
                      al jaren actief in rotterdam met vele tevreden klanten. van particulieren
                      tot grote bedrijfspanden in de kop van zuid.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <Phone className="text-white" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      persoonlijk & betrouwbaar
                    </h3>
                    <p className="text-gray-600">
                      direct contact met de vakman. duidelijke prijsafspraken en planning.
                      afspraak is afspraak.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prijsindicatie Rotterdam */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                wat kost stucwerk in rotterdam?
              </h2>

              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border-2 border-blue-100">
                <p className="text-lg text-gray-700 mb-6">
                  de prijs van stucwerk in rotterdam is vergelijkbaar met andere grote steden.
                  wel houden wij rekening met parkeerkosten en bereikbaarheid van uw locatie.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-3">spackspuiten</h3>
                    <p className="text-2xl font-bold text-primary mb-2">vanaf €8,- per m²</p>
                    <p className="text-sm text-gray-600">plafond of wanden, exclusief voorbereiding</p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-3">traditioneel stucwerk</h3>
                    <p className="text-2xl font-bold text-primary mb-2">vanaf €16,- per m²</p>
                    <p className="text-sm text-gray-600">handmatig aangebracht, sausklaar</p>
                  </div>
                </div>

                <div className="bg-primary/10 p-6 rounded-lg">
                  <p className="text-gray-800 font-semibold mb-2">
                    💡 wilt u weten wat het voor uw project kost?
                  </p>
                  <p className="text-gray-700">
                    bel ons of vraag een vrijblijvende offerte aan. wij komen graag langs in
                    rotterdam voor een gratis opname.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Rotterdam */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                veelgestelde vragen over stucwerk in rotterdam
              </h2>

              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6 py-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    zijn parkeerkosten inclusief in rotterdam?
                  </h3>
                  <p className="text-gray-600">
                    parkeerkosten zijn meestal niet inclusief. in veel rotterdamse wijken
                    zijn vergunningen nodig. wij vermelden deze kosten altijd duidelijk in
                    de offerte.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6 py-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    werken jullie ook aan hoogbouw in rotterdam?
                  </h3>
                  <p className="text-gray-600">
                    ja, wij hebben ervaring met hoogbouw projecten in rotterdam. van de
                    kop van zuid tot de nieuwe wolkenkrabbers in centrum.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6 py-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    hoe snel kunnen jullie starten in rotterdam?
                  </h3>
                  <p className="text-gray-600">
                    omdat wij regelmatig projecten in rotterdam hebben, kunnen wij vaak
                    binnen 1-2 weken starten. bel voor actuele beschikbaarheid.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6 py-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    werken jullie ook voor bedrijven in rotterdam?
                  </h3>
                  <p className="text-gray-600">
                    absoluut! wij werken voor zowel particulieren als bedrijven. van kantoren
                    in de maastoren tot winkelpanden op de lijnbaan.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6 py-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    is er garantie op het stucwerk?
                  </h3>
                  <p className="text-gray-600">
                    ja, wij geven standaard 2 jaar garantie op ons stucwerk. bij problemen
                    binnen deze periode komen wij het kosteloos herstellen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="offerte" className="py-20 bg-gradient-to-br from-primary to-blue-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                vraag vandaag nog een offerte aan
              </h2>
              <p className="text-xl mb-8 opacity-90">
                gratis opname in rotterdam binnen 48 uur. offerte binnen 24 uur na opname.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="tel:+31684794108"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-xl text-lg"
                >
                  <Phone size={24} />
                  06 84794108
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all text-lg"
                >
                  <Mail size={24} />
                  stuur een bericht
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} />
                  <span>gratis offerte</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} />
                  <span>15+ jaar ervaring</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} />
                  <span>actief in rotterdam</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "stucwerk",
              "provider": {
                "@type": "LocalBusiness",
                "name": "mkhbouw",
                "telephone": "+31684794108",
                "email": "info@mkhbouw.nl"
              },
              "areaServed": {
                "@type": "City",
                "name": "Rotterdam"
              }
            })
          }}
        />
      </main>
      <Footer />
    </>
  );
}
