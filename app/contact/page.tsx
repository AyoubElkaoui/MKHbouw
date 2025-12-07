import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact - MKH Bouw | Klussenbedrijf Amsterdam | +31 6 84794108',
  description: 'Neem contact op met MKH Bouw voor een vrijblijvende offerte. Bel +31 6 84794108 of stuur een email naar info@mkhbouw.nl. Wij zijn gevestigd in Amsterdam.',
  keywords: ['contact MKH Bouw', 'offerte aanvragen', 'klussenbedrijf Amsterdam contact', 'MKH Bouw telefoon'],
};

export default function Contact() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <img 
              src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2574&auto=format&fit=crop" 
              alt="Contact background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <span className="inline-block bg-blue-50 text-blue-600 px-6 py-2 rounded-full font-semibold text-sm uppercase tracking-wide mb-6">
                Contact
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6">
                Neem <span className="bg-gradient-to-r from-blue-600 to-slate-700 bg-clip-text text-transparent">Contact</span> Op
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
                Wij staan klaar om uw vragen te beantwoorden en uw project te bespreken
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href="tel:+31684794108"
                  className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 font-bold text-lg shadow-xl"
                >
                  <Phone size={24} />
                  +31 6 84794108
                </a>
                <a
                  href="mailto:info@mkhbouw.nl"
                  className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-slate-50 transition-all transform hover:scale-105 font-bold text-lg shadow-xl border-2 border-blue-600"
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
                      Contactgegevens
                    </h2>
                    <p className="text-gray-600 mb-8">
                      Heeft u vragen over onze diensten of wilt u een vrijblijvende offerte aanvragen? 
                      Neem gerust contact met ons op via onderstaande gegevens of vul het contactformulier in.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-3xl shadow-lg border border-slate-100">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <MapPin className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Adres</h3>
                        <p className="text-gray-600">Johan Kernstraat 17</p>
                        <p className="text-gray-600">1065 VC Amsterdam</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Phone className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Telefoon</h3>
                        <a
                          href="tel:+31684794108"
                          className="text-blue-600 hover:text-blue-700 font-semibold text-lg"
                        >
                          +31 6 84794108
                        </a>
                        <p className="text-gray-600 text-sm mt-1">
                          Bereikbaar op werkdagen van 08:00 - 18:00
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Mail className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Email</h3>
                        <a
                          href="mailto:info@mkhbouw.nl"
                          className="text-blue-600 hover:text-blue-700 font-semibold"
                        >
                          info@mkhbouw.nl
                        </a>
                        <p className="text-gray-600 text-sm mt-1">
                          We reageren binnen 24 uur
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Clock className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Openingstijden</h3>
                        <p className="text-gray-600">Maandag - Vrijdag: 08:00 - 18:00</p>
                        <p className="text-gray-600">Zaterdag: Op afspraak</p>
                        <p className="text-gray-600">Zondag: Gesloten</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-8 rounded-3xl border-2 border-blue-100 shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Spoedklus?
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Voor spoedklussen kunt u ons altijd bellen. We doen ons best om zo snel mogelijk te reageren.
                    </p>
                    <a
                      href="tel:+31684794108"
                      className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all font-semibold"
                    >
                      Bel Nu: +31 6 84794108
                    </a>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-3">
                  <div className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-10 rounded-2xl shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Vraag een offerte aan
                    </h2>
                    <p className="text-gray-600 mb-8">
                      Vul onderstaand formulier in en we nemen zo snel mogelijk contact met u op.
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
                Onze Locatie
              </h2>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden" style={{ height: '450px' }}>
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
                  <strong>Werkgebied:</strong> Wij werken voornamelijk in Amsterdam en directe omgeving. 
                  Voor projecten buiten Amsterdam, neem gerust contact met ons op om de mogelijkheden te bespreken.
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
                Veelgestelde Vragen
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6 py-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Hoe snel kan ik een offerte verwachten?
                  </h3>
                  <p className="text-gray-600">
                    Wij streven ernaar om binnen 24-48 uur te reageren op uw aanvraag. Voor spoedklussen 
                    kunt u ons direct bellen voor snellere service.
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-6 py-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Zijn de offertes vrijblijvend?
                  </h3>
                  <p className="text-gray-600">
                    Ja, al onze offertes zijn geheel vrijblijvend. U zit nergens aan vast en kunt rustig 
                    verschillende opties overwegen.
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-6 py-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Werken jullie ook in het weekend?
                  </h3>
                  <p className="text-gray-600">
                    Op zaterdag werken wij op afspraak. Zondag zijn wij gesloten. Neem contact met ons op 
                    om de mogelijkheden te bespreken.
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-6 py-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Wat is het werkgebied van MKH Bouw?
                  </h3>
                  <p className="text-gray-600">
                    Wij zijn gevestigd in Amsterdam en werken voornamelijk in Amsterdam en directe omgeving. 
                    Voor projecten daarbuiten kunnen we in overleg kijken naar de mogelijkheden.
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
