'use client';

import Link from 'next/link';

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
              Onze Werkwijze
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
              Hoe Werken Wij?
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Van eerste contact tot oplevering, wij begeleiden u door het hele proces
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="relative">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Kennismakingsgesprek
              </h3>
              <p className="text-gray-600 text-center">
                Wij bespreken uw wensen en bekijken de klus ter plaatse in Amsterdam
              </p>
            </div>

            <div className="relative">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Offerte op Maat
              </h3>
              <p className="text-gray-600 text-center">
                U ontvangt een heldere offerte zonder verborgen kosten
              </p>
            </div>

            <div className="relative">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Professionele Uitvoering
              </h3>
              <p className="text-gray-600 text-center">
                Onze vakmannen gaan aan de slag met uw project
              </p>
            </div>

            <div className="relative">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Oplevering & Garantie
              </h3>
              <p className="text-gray-600 text-center">
                We leveren netjes op en bieden garantie op ons werk
              </p>
            </div>
          </div>

          {/* USPs */}
          <div className="bg-gradient-to-br from-slate-50 to-white p-12 rounded-3xl shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Waarom MKH Bouw uw Klussenbedrijf in Amsterdam?
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Lokaal in Amsterdam</h4>
                  <p className="text-gray-600">
                    Wij zijn gevestigd in Amsterdam en kennen de stad door en door. Snel ter plaatse voor klussen in alle wijken.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Ervaren Vakmannen</h4>
                  <p className="text-gray-600">
                    Ons team bestaat uit ervaren stukadoors en schilders met jarenlange ervaring in het vak.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Transparante Prijzen</h4>
                  <p className="text-gray-600">
                    Geen verrassingen achteraf. U krijgt vooraf een duidelijke offerte met vaste prijzen.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Garantie op Kwaliteit</h4>
                  <p className="text-gray-600">
                    Wij staan volledig achter ons werk en bieden garantie op alle uitgevoerde werkzaamheden.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Netjes & Snel</h4>
                  <p className="text-gray-600">
                    We werken netjes, houden de boel schoon en houden ons aan de afgesproken planning.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Persoonlijk Contact</h4>
                  <p className="text-gray-600">
                    Bij MKH Bouw bent u geen nummer. We zijn altijd bereikbaar en denken actief met u mee.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/over-ons"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all font-semibold text-lg shadow-lg hover:shadow-xl"
              >
                Lees Meer Over Ons
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
