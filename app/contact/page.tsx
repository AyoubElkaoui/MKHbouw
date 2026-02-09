"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Star,
  Shield,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function Contact() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[55vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2574&auto=format&fit=crop"
              alt="Contact MKH Bouw"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
          </div>

          <div className="absolute top-20 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-sm font-medium border border-white/20">
                  <Star size={14} className="fill-accent text-accent" />
                  Contact
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]"
              >
                Neem{" "}
                <span className="relative">
                  <span className="relative z-10">Contact</span>
                  <span className="absolute bottom-2 left-0 right-0 h-3 bg-accent/30 -z-0 rounded" />
                </span>{" "}
                Op
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg sm:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl"
              >
                Wij staan klaar om uw vragen te beantwoorden en uw project te
                bespreken. Neem vrijblijvend contact op voor advies over
                stucwerk, schilderwerk of renovaties.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="tel:+31684794108"
                  className="group inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-accent-600 transition-all shadow-xl shadow-accent/25 hover:shadow-2xl hover:-translate-y-0.5"
                >
                  <Phone size={20} />
                  +31 6 84794108
                </a>
                <a
                  href="mailto:info@mkhbouw.nl"
                  className="group inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white/25 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 hover:border-white/40 transition-all"
                >
                  <Mail size={20} />
                  info@mkhbouw.nl
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-5 gap-12">
                {/* Contact Information */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="lg:col-span-2 space-y-8"
                >
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Contactgegevens
                    </h2>
                    <p className="text-gray-600 mb-8">
                      Heeft u vragen over onze diensten of wilt u een
                      vrijblijvende offerte aanvragen? Neem gerust contact met
                      ons op. Ons team reageert altijd binnen 24 uur.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-lg border border-gray-100 space-y-6">
                    {[
                      {
                        icon: MapPin,
                        title: "Adres",
                        lines: ["Johan Kernstraat 17", "1065 VC Amsterdam"],
                      },
                      {
                        icon: Phone,
                        title: "Telefoon",
                        lines: ["+31 6 84794108"],
                        link: "tel:+31684794108",
                        sub: "Bereikbaar op werkdagen van 08:00 - 18:00",
                      },
                      {
                        icon: Mail,
                        title: "Email",
                        lines: ["info@mkhbouw.nl"],
                        link: "mailto:info@mkhbouw.nl",
                        sub: "We reageren binnen 24 uur",
                      },
                      {
                        icon: Clock,
                        title: "Openingstijden",
                        lines: [
                          "Maandag - Vrijdag: 08:00 - 18:00",
                          "Zaterdag: op afspraak",
                          "Zondag: gesloten",
                        ],
                      },
                    ].map((item) => (
                      <div key={item.title} className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                          <item.icon className="text-white" size={20} />
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-gray-900 mb-1">
                            {item.title}
                          </h3>
                          {item.lines.map((line) =>
                            item.link ? (
                              <a
                                key={line}
                                href={item.link}
                                className="text-primary hover:text-accent font-semibold transition-colors block"
                              >
                                {line}
                              </a>
                            ) : (
                              <p key={line} className="text-gray-600 text-sm">
                                {line}
                              </p>
                            ),
                          )}
                          {item.sub && (
                            <p className="text-gray-500 text-xs mt-1">
                              {item.sub}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-8 rounded-3xl border border-accent/20 shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Spoedklus?
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Voor spoedklussen kunt u ons altijd bellen. We doen ons
                      best om zo snel mogelijk te reageren.
                    </p>
                    <a
                      href="tel:+31684794108"
                      className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-xl hover:bg-accent-600 transition-all font-semibold shadow-lg shadow-accent/25"
                    >
                      <Phone size={18} />
                      Bel nu: +31 6 84794108
                    </a>
                  </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="lg:col-span-3"
                >
                  <div className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Vraag een Offerte Aan
                    </h2>
                    <p className="text-gray-600 mb-8">
                      Vul onderstaand formulier in en we nemen zo snel mogelijk
                      contact met u op.
                    </p>
                    <ContactForm />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Onze Locatie
              </h2>
              <div
                className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100"
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
                />
              </div>
              <p className="mt-6 text-center text-gray-600">
                <strong>Werkgebied:</strong> Wij werken voornamelijk in
                Amsterdam en directe omgeving. Voor projecten buiten Amsterdam,
                neem gerust contact met ons op.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div {...fadeUp} className="text-center mb-12">
                <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                  FAQ
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Veelgestelde Vragen
                </h2>
              </motion.div>

              <div className="space-y-6">
                {[
                  {
                    q: "Hoe snel kan ik een offerte verwachten?",
                    a: "Wij streven ernaar om binnen 24-48 uur te reageren op uw aanvraag. Voor spoedklussen kunt u ons direct bellen voor snellere service.",
                  },
                  {
                    q: "Zijn de offertes vrijblijvend?",
                    a: "Ja, al onze offertes zijn geheel vrijblijvend. U zit nergens aan vast en kunt rustig verschillende opties overwegen.",
                  },
                  {
                    q: "Werken jullie ook in het weekend?",
                    a: "Op zaterdag werken wij op afspraak. Zondag zijn wij gesloten. Neem contact met ons op om de mogelijkheden te bespreken.",
                  },
                  {
                    q: "Wat is het werkgebied van MKH Bouw?",
                    a: "Wij zijn gevestigd in Amsterdam en werken voornamelijk in Amsterdam en directe omgeving. Voor projecten daarbuiten kunnen we in overleg kijken naar de mogelijkheden.",
                  },
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all"
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {faq.q}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
