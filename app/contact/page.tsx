import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "contact - mkhbouw | klussenbedrijf Amsterdam | +31 6 84794108",
  description:
    "neem contact op met mkhbouw voor een vrijblijvende offerte. bel +31 6 84794108 of stuur een email naar info@mkhbouw.nl. wij zijn gevestigd in Amsterdam.",
  keywords: [
    "contact mkhbouw",
    "offerte aanvragen",
    "klussenbedrijf Amsterdam contact",
    "mkhbouw telefoon",
  ],
};

export default function Contact() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-slate-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <img
              src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2574&auto=format&fit=crop"
              alt="Contact background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <span className="inline-block bg-blue-50 text-primary px-6 py-2 rounded-full font-semibold text-sm uppercase tracking-wide mb-6">
                contact
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6">
                neem <span className="text-gray-900">contact</span> op
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
                wij staan klaar om uw vragen te beantwoorden en uw project te
                bespreken. neem vrijblijvend contact op voor advies over
                stucwerk, schilderwerk of renovaties in Amsterdam.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href="tel:+31684794108"
                  className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full hover:bg-primary-700 transition-all transform hover:scale-105 font-bold text-lg shadow-xl"
                >
                  <Phone size={24} />
                  +31 6 84794108
                </a>
                <a
                  href="mailto:info@mkhbouw.nl"
                  className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-full hover:bg-slate-50 transition-all transform hover:scale-105 font-bold text-lg shadow-xl border-2 border-primary"
                >
                  <Mail size={24} />
                  info@mkhbouw.nl
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-5 gap-12">
                {/* Contact Information */}
                <div className="lg:col-span-2 space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      contactgegevens
                    </h2>
                    <p className="text-gray-600 mb-8">
                      heeft u vragen over onze diensten of wilt u een
                      vrijblijvende offerte aanvragen? neem gerust contact met
                      ons op via onderstaande gegevens of vul het
                      contactformulier in. ons team reageert altijd binnen 24
                      uur met persoonlijk advies voor uw specifieke project.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-8 rounded-3xl shadow-lg border border-slate-100">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <MapPin className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">
                          adres
                        </h3>
                        <p className="text-gray-600">Johan Kernstraat 17</p>
                        <p className="text-gray-600">1065 VC Amsterdam</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Phone className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">
                          telefoon
                        </h3>
                        <a
                          href="tel:+31684794108"
                          className="text-primary hover:text-blue-700 font-semibold text-lg"
                        >
                          +31 6 84794108
                        </a>
                        <p className="text-gray-600 text-sm mt-1">
                          bereikbaar op werkdagen van 08:00 - 18:00
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Mail className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">
                          email
                        </h3>
                        <a
                          href="mailto:info@mkhbouw.nl"
                          className="text-primary hover:text-blue-700 font-semibold"
                        >
                          info@mkhbouw.nl
                        </a>
                        <p className="text-gray-600 text-sm mt-1">
                          we reageren binnen 24 uur
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Clock className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">
                          openingstijden
                        </h3>
                        <p className="text-gray-600">
                          maandag - vrijdag: 08:00 - 18:00
                        </p>
                        <p className="text-gray-600">zaterdag: op afspraak</p>
                        <p className="text-gray-600">zondag: gesloten</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-8 rounded-3xl border-2 border-blue-100 shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      spoedklus?
                    </h3>
                    <p className="text-gray-700 mb-4">
                      voor spoedklussen kunt u ons altijd bellen. we doen ons
                      best om zo snel mogelijk te reageren.
                    </p>
                    <a
                      href="tel:+31684794108"
                      className="inline-block bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-700 transition-all font-semibold"
                    >
                      bel nu: +31 6 84794108
                    </a>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-3">
                  <div className="bg-gray-50 p-8 md:p-10 rounded-2xl shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      vraag een offerte aan
                    </h2>
                    <p className="text-gray-600 mb-8">
                      vul onderstaand formulier in en we nemen zo snel mogelijk
                      contact met u op.
                    </p>
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                onze locatie
              </h2>
              <div
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
                style={{ height: "450px" }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.7449845469847!2d4.826746!3d52.345744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5e2b7a8f8f8f9%3A0x8f8f8f8f8f8f8f8!2sJohan%20Kernstraat%2017%2C%201065%20VC%20Amsterdam!5e0!3m2!1sen!2snl!4v1234567890"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MKH Bouw Locatie"
                ></iframe>
              </div>
              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  <strong>werkgebied:</strong> wij werken voornamelijk in
                  Amsterdam en directe omgeving. voor projecten buiten
                  Amsterdam, neem gerust contact met ons op om de mogelijkheden
                  te bespreken.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                veelgestelde vragen
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6 py-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    hoe snel kan ik een offerte verwachten?
                  </h3>
                  <p className="text-gray-600">
                    wij streven ernaar om binnen 24-48 uur te reageren op uw
                    aanvraag. voor spoedklussen kunt u ons direct bellen voor
                    snellere service.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-6 py-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    zijn de offertes vrijblijvend?
                  </h3>
                  <p className="text-gray-600">
                    ja, al onze offertes zijn geheel vrijblijvend. u zit nergens
                    aan vast en kunt rustig verschillende opties overwegen.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-6 py-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    werken jullie ook in het weekend?
                  </h3>
                  <p className="text-gray-600">
                    op zaterdag werken wij op afspraak. zondag zijn wij
                    gesloten. neem contact met ons op om de mogelijkheden te
                    bespreken.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-6 py-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    wat is het werkgebied van mkhbouw?
                  </h3>
                  <p className="text-gray-600">
                    wij zijn gevestigd in Amsterdam en werken voornamelijk in
                    Amsterdam en directe omgeving. voor projecten daarbuiten
                    kunnen we in overleg kijken naar de mogelijkheden.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
