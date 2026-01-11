import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, CheckCircle, Clock, Award, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "stucwerk amsterdam - professioneel stucadoor | mkhbouw",
  description:
    "op zoek naar een betrouwbare stucadoor in Amsterdam? mkhbouw levert vakkundig stucwerk, spackspuiten en sierpleister in Amsterdam en omstreken. bel voor offerte: 06 84794108",
  keywords: [
    "stucwerk amsterdam",
    "stucadoor amsterdam",
    "spackspuiten amsterdam",
    "sierpleister amsterdam",
    "stucwerk amsterdam noord",
    "stucwerk amsterdam west",
    "stucwerk amsterdam oost",
    "stucwerk amsterdam zuid",
    "klussenbedrijf amsterdam",
    "mkhbouw amsterdam",
  ],
  openGraph: {
    title: "stucwerk amsterdam - professioneel stucadoor | mkhbouw",
    description: "vakkundig stucwerk in Amsterdam. offerte binnen 24 uur. 15+ jaar ervaring.",
    url: "https://mkhbouw.nl/locaties/stucwerk-amsterdam",
  },
};

export default function StucwerkAmsterdam() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section - Lokaal gericht */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full font-semibold text-sm mb-6">
                <MapPin className="inline-block w-4 h-4 mr-2" />
                stucwerk amsterdam
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                professioneel stucwerk in amsterdam
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                zoek je een betrouwbare stucadoor in Amsterdam? mkhbouw levert al 15+ jaar
                vakkundig stucwerk, spackspuiten en sierpleister in heel Amsterdam en omstreken.
                offerte binnen 24 uur gegarandeerd.
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

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span>15+ jaar ervaring</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span>250+ klanten in Amsterdam</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span>offerte binnen 24u</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wat we doen - Amsterdam specifiek */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                stucwerk diensten in amsterdam
              </h2>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">spackspuiten</h3>
                  <p className="text-gray-600 mb-4">
                    professioneel spackspuiten voor plafonds en wanden in Amsterdam.
                    perfect egaal oppervlak, direct sausklaar.
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
                    vakkundig handmatig stucwerk voor nieuwbouw en renovatie in Amsterdam.
                    sausklaar of behangklaar opgeleverd.
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
                    decoratieve sierpleister in diverse structuren en kleuren.
                    unieke uitstraling voor uw woning of bedrijf in Amsterdam.
                  </p>
                  <Link href="/diensten/sierpleister" className="text-primary font-semibold hover:underline">
                    meer info →
                  </Link>
                </div>
              </div>

              {/* Stadsdelen */}
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  actief in heel amsterdam
                </h3>
                <p className="text-center text-gray-700 mb-6">
                  wij werken in alle stadsdelen van Amsterdam en directe omgeving:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="bg-white p-3 rounded-lg">amsterdam centrum</div>
                  <div className="bg-white p-3 rounded-lg">amsterdam noord</div>
                  <div className="bg-white p-3 rounded-lg">amsterdam west</div>
                  <div className="bg-white p-3 rounded-lg">amsterdam oost</div>
                  <div className="bg-white p-3 rounded-lg">amsterdam zuid</div>
                  <div className="bg-white p-3 rounded-lg">amsterdam zuidoost</div>
                  <div className="bg-white p-3 rounded-lg">nieuw-west</div>
                  <div className="bg-white p-3 rounded-lg">amstelveen</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Waarom ons - Amsterdam focus */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                waarom mkhbouw voor stucwerk in amsterdam?
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
                      lokale kennis amsterdam
                    </h3>
                    <p className="text-gray-600">
                      gevestigd in Amsterdam, kennen wij de stad door en door. van monumentale
                      grachtenpanden tot moderne nieuwbouw in Noord - wij hebben overal ervaring mee.
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
                      snel ter plaatse
                    </h3>
                    <p className="text-gray-600">
                      omdat wij lokaal gevestigd zijn, kunnen wij snel bij u ter plaatse komen
                      voor een offerte of om aan de slag te gaan. geen lange wachttijden.
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
                      ervaring met amsterdamse panden
                    </h3>
                    <p className="text-gray-600">
                      van oude grachtenpanden tot moderne appartementen - wij kennen de uitdagingen
                      van bouwen in Amsterdam. geen verrassing is te groot.
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
                      persoonlijk contact
                    </h3>
                    <p className="text-gray-600">
                      geen callcenters, maar direct contact met de vakman. heldere communicatie
                      en transparante prijsafspraken.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prijsindicatie */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                wat kost stucwerk in amsterdam?
              </h2>

              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border-2 border-blue-100">
                <p className="text-lg text-gray-700 mb-6">
                  de prijs van stucwerk in Amsterdam hangt af van verschillende factoren zoals
                  het type werk, de grootte van het project en de staat van de ondergrond.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-3">spackspuiten</h3>
                    <p className="text-2xl font-bold text-primary mb-2">vanaf €8,- per m²</p>
                    <p className="text-sm text-gray-600">plafond of wanden, exclusief voorbereiding</p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-3">traditioneel stucwerk</h3>
                    <p className="text-2xl font-bold text-primary mb-2">vanaf €15,- per m²</p>
                    <p className="text-sm text-gray-600">handmatig aangebracht, sausklaar</p>
                  </div>
                </div>

                <div className="bg-primary/10 p-6 rounded-lg">
                  <p className="text-gray-800 font-semibold mb-2">
                    💡 wilt u weten wat het voor uw project kost?
                  </p>
                  <p className="text-gray-700">
                    vraag een vrijblijvende offerte aan. wij komen langs in Amsterdam voor een
                    gratis opname en geven u binnen 24 uur een scherpe prijsopgave.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent werk in Amsterdam */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
                recent stucwerk projecten in amsterdam
              </h2>
              <p className="text-center text-gray-600 mb-12">
                voorbeelden van ons werk in Amsterdam en omstreken
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                  <div className="relative h-64">
                    <Image
                      src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=2670&auto=format&fit=crop"
                      alt="stucwerk project amsterdam"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2">grachtenpand amsterdam centrum</h3>
                    <p className="text-gray-600 text-sm">
                      complete stucwerk renovatie van monumentaal pand
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                  <div className="relative h-64">
                    <Image
                      src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2670&auto=format&fit=crop"
                      alt="spackspuiten amsterdam"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2">nieuwbouw amsterdam noord</h3>
                    <p className="text-gray-600 text-sm">
                      spackspuiten 15 appartementen, nieuwbouwproject
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                  <div className="relative h-64">
                    <Image
                      src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop"
                      alt="sierpleister amsterdam"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2">woonhuis amsterdam zuid</h3>
                    <p className="text-gray-600 text-sm">
                      sierpleister in woonkamer en hal, luxe afwerking
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Amsterdam specifiek */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                veelgestelde vragen over stucwerk in amsterdam
              </h2>

              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6 py-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    hoe snel kunnen jullie beginnen in amsterdam?
                  </h3>
                  <p className="text-gray-600">
                    omdat wij lokaal gevestigd zijn in Amsterdam, kunnen wij vaak binnen
                    1-2 weken starten. voor spoedklussen kunnen wij soms nog sneller
                    beginnen. bel ons voor beschikbaarheid.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6 py-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    werken jullie ook aan monumentale panden in amsterdam?
                  </h3>
                  <p className="text-gray-600">
                    ja, wij hebben veel ervaring met monumentale grachtenpanden in Amsterdam.
                    wij werken volgens de richtlijnen en eisen die gelden voor monumenten
                    en werken nauw samen met monumentenzorg.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6 py-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    wat zijn de parkeerkosten bij een klus in amsterdam?
                  </h3>
                  <p className="text-gray-600">
                    wij werken dit vooraf met u af. vaak is het mogelijk om een
                    tijdelijke parkeervergunning aan te vragen. de kosten hiervan
                    worden transparant in de offerte vermeld.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6 py-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    hoelang duurt een gemiddelde stucklus in amsterdam?
                  </h3>
                  <p className="text-gray-600">
                    dit hangt af van de grootte van het project. een gemiddelde woning
                    (3 kamers) is meestal binnen 3-5 werkdagen klaar. grotere projecten
                    of complete renovaties duren uiteraard langer.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6 py-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    leveren jullie ook materialen voor stucwerk in amsterdam?
                  </h3>
                  <p className="text-gray-600">
                    ja, wij verzorgen alle materialen. wij werken met hoogwaardige A-merken
                    en bestellen alles vers voor uw project. dit is inclusief in onze prijzen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA - Offerte aanvragen */}
        <section id="offerte" className="py-20 bg-gradient-to-br from-primary to-blue-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                vraag vandaag nog een offerte aan
              </h2>
              <p className="text-xl mb-8 opacity-90">
                gratis opname in Amsterdam binnen 48 uur. offerte binnen 24 uur na opname.
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
                  <span>lokaal in Amsterdam</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Schema.org data voor lokale SEO */}
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
                "email": "info@mkhbouw.nl",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Amsterdam",
                  "addressCountry": "NL"
                }
              },
              "areaServed": {
                "@type": "City",
                "name": "Amsterdam"
              },
              "offers": {
                "@type": "Offer",
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "price": "8.00",
                  "priceCurrency": "EUR",
                  "unitText": "per vierkante meter"
                }
              }
            })
          }}
        />
      </main>
      <Footer />
    </>
  );
}
