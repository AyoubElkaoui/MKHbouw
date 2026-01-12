import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, CheckCircle, Clock, Award, ArrowRight, Hammer } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "renovatie amsterdam - compleet verbouwen | mkhbouw",
  description:
    "op zoek naar een betrouwbaar renovatiebedrijf in amsterdam? mkhbouw verzorgt complete renovaties en verbouwingen in amsterdam en omstreken. vraag vrijblijvende offerte aan.",
  keywords: [
    "renovatie amsterdam",
    "verbouwen amsterdam",
    "renovatiebedrijf amsterdam",
    "badkamer renovatie amsterdam",
    "keuken renovatie amsterdam",
    "huis verbouwen amsterdam",
    "appartement renoveren amsterdam",
    "renovatie amsterdam noord",
    "renovatie amsterdam west",
    "renovatie amsterdam zuid",
    "klussenbedrijf amsterdam",
    "mkhbouw amsterdam",
  ],
  openGraph: {
    title: "renovatie amsterdam - compleet verbouwen | mkhbouw",
    description: "complete renovaties en verbouwingen in amsterdam. offerte binnen 24 uur. 15+ jaar ervaring.",
    url: "https://mkhbouw.nl/locaties/renovatie-amsterdam",
  },
};

export default function RenovatieAmsterdam() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full font-semibold text-sm mb-6">
                <Hammer className="inline-block w-4 h-4 mr-2" />
                renovatie amsterdam
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                complete renovatie in amsterdam
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                zoek je een betrouwbaar renovatiebedrijf in amsterdam? mkhbouw verzorgt
                al 15+ jaar complete renovaties en verbouwingen in heel amsterdam en
                omstreken. van badkamer tot complete woning.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="tel:+31684794108"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
                >
                  <Phone size={20} />
                  bel direct: 06 84794108
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all"
                >
                  gratis offerte aanvragen
                  <ArrowRight size={20} />
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span>15+ jaar ervaring</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span>200+ renovaties</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span>alles onder één dak</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Diensten in Amsterdam */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                renovatie diensten in amsterdam
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    complete woningrenovatie
                  </h3>
                  <p className="text-gray-700 mb-4">
                    van het eerste ontwerp tot de laatste verfstreek. wij verzorgen
                    je complete woningrenovatie in amsterdam.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={16} />
                      complete planning
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={16} />
                      alle disciplines
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={16} />
                      één aanspreekpunt
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={16} />
                      vaste prijs mogelijk
                    </li>
                  </ul>
                  <Link
                    href="/diensten/renovatie"
                    className="text-primary font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    meer info <ArrowRight size={16} />
                  </Link>
                </div>

                <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    badkamer renovatie
                  </h3>
                  <p className="text-gray-700 mb-4">
                    nieuwe badkamer nodig? van tegelen tot loodgieterswerk, wij
                    verzorgen je complete badkamerrenovatie.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={16} />
                      tegelwerk
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={16} />
                      loodgieterswerk
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={16} />
                      sanitair plaatsen
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={16} />
                      vloerverwarming
                    </li>
                  </ul>
                  <Link
                    href="/diensten/renovatie"
                    className="text-primary font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    meer info <ArrowRight size={16} />
                  </Link>
                </div>

                <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    keuken renovatie
                  </h3>
                  <p className="text-gray-700 mb-4">
                    oude keuken aan vervanging toe? wij slopen, verbouwen en
                    installeren je nieuwe keuken vakkundig.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={16} />
                      slopen oude keuken
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={16} />
                      elektra en leidingen
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={16} />
                      plaatsen nieuwe keuken
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={16} />
                      afwerking wanden
                    </li>
                  </ul>
                  <Link
                    href="/diensten/sloopwerk"
                    className="text-primary font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    meer info <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Onze aanpak */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                zo werken wij
              </h2>

              <div className="space-y-6">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                      1
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-xl flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      gratis intake en advies
                    </h3>
                    <p className="text-gray-700">
                      we komen bij je langs in amsterdam om je wensen te bespreken
                      en de situatie op te nemen. we denken mee over de beste
                      oplossingen voor jouw situatie.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                      2
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-xl flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      duidelijke offerte
                    </h3>
                    <p className="text-gray-700">
                      binnen een week ontvang je een heldere offerte met alle
                      werkzaamheden, materialen en planning. geen verborgen kosten,
                      alles staat duidelijk vermeld.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                      3
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-xl flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      planning en voorbereiding
                    </h3>
                    <p className="text-gray-700">
                      zodra je akkoord geeft plannen we het project in. we bestellen
                      materialen en zorgen voor alle benodigde voorbereidingen zoals
                      vergunningen indien nodig.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                      4
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-xl flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      uitvoering door vakmensen
                    </h3>
                    <p className="text-gray-700">
                      onze ervaren vakmensen voeren het werk netjes en volgens
                      planning uit. je wordt dagelijks op de hoogte gehouden van de
                      voortgang en eventuele wijzigingen.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      ✓
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-xl flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      oplevering en garantie
                    </h3>
                    <p className="text-gray-700">
                      na oplevering krijg je garantie op het uitgevoerde werk.
                      mocht er iets zijn, dan komen we het graag oplossen. je
                      tevredenheid is belangrijk voor ons.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Werkgebied Amsterdam */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                renoveren in heel amsterdam
              </h2>
              <p className="text-gray-700 text-center mb-8">
                wij renoveren in alle stadsdelen en wijken van amsterdam
              </p>

              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <MapPin className="text-primary mx-auto mb-2" size={24} />
                  <p className="font-semibold text-gray-900">amsterdam centrum</p>
                  <p className="text-xs text-gray-600">grachten en binnenstad</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <MapPin className="text-primary mx-auto mb-2" size={24} />
                  <p className="font-semibold text-gray-900">amsterdam noord</p>
                  <p className="text-xs text-gray-600">ook noordelijke IJ-oevers</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <MapPin className="text-primary mx-auto mb-2" size={24} />
                  <p className="font-semibold text-gray-900">amsterdam west</p>
                  <p className="text-xs text-gray-600">oud-west en bos en lommer</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <MapPin className="text-primary mx-auto mb-2" size={24} />
                  <p className="font-semibold text-gray-900">amsterdam oost</p>
                  <p className="text-xs text-gray-600">indische buurt en zeeburg</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <MapPin className="text-primary mx-auto mb-2" size={24} />
                  <p className="font-semibold text-gray-900">amsterdam zuid</p>
                  <p className="text-xs text-gray-600">de pijp en rivierenbuurt</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <MapPin className="text-primary mx-auto mb-2" size={24} />
                  <p className="font-semibold text-gray-900">amsterdam zuidoost</p>
                  <p className="text-xs text-gray-600">bijlmer en gaasperdam</p>
                </div>
              </div>

              <p className="text-sm text-gray-600 text-center mt-6">
                ook actief in amstelveen, diemen, landsmeer en andere plaatsen in de regio amsterdam
              </p>
            </div>
          </div>
        </section>

        {/* Waarom kiezen voor ons */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                waarom mkhbouw voor renovatie in amsterdam?
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Award className="text-primary" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      alles onder één dak
                    </h3>
                    <p className="text-gray-700">
                      van slopen tot schilderen, wij hebben alle disciplines in
                      huis. geen gedoe met verschillende aannemers, wij regelen
                      alles voor je.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Clock className="text-primary" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      ervaring met amsterdamse panden
                    </h3>
                    <p className="text-gray-700">
                      van monumentale grachtenhuizen tot moderne appartementen. we
                      kennen de uitdagingen van renoveren in amsterdam en de lokale
                      regelgeving.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <CheckCircle className="text-primary" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      transparante communicatie
                    </h3>
                    <p className="text-gray-700">
                      je wordt op de hoogte gehouden van de voortgang. geen
                      verrassingen achteraf, alles staat duidelijk in de offerte en
                      planning.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Hammer className="text-primary" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      vakmanschap en kwaliteit
                    </h3>
                    <p className="text-gray-700">
                      we werken alleen met ervaren vakmensen en hoogwaardige
                      materialen. ons werk mag gezien worden en dat blijkt uit de
                      vele tevreden klanten.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-blue-700 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                plannen voor een renovatie in amsterdam?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                vraag vandaag nog een vrijblijvende offerte aan. we komen graag
                bij je langs om je project te bespreken en een scherpe prijs te
                maken.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="tel:+31684794108"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-xl"
                >
                  <Phone size={20} />
                  bel: 06 84794108
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all"
                >
                  <Mail size={20} />
                  vraag offerte aan
                </Link>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} />
                  <span>gratis advies en offerte</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} />
                  <span>binnen 1 week offerte</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} />
                  <span>vaste prijs mogelijk</span>
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
                veelgestelde vragen over renovatie in amsterdam
              </h2>

              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    hoe lang duurt een gemiddelde renovatie in amsterdam?
                  </h3>
                  <p className="text-gray-700">
                    dat hangt sterk af van de omvang. een badkamerrenovatie duurt
                    meestal 1-2 weken. een complete woningrenovatie kan 4-8 weken
                    duren. we geven bij de offerte een realistische planning.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    moet ik uit huis tijdens de renovatie?
                  </h3>
                  <p className="text-gray-700">
                    niet altijd. bij een badkamer- of keukenrenovatie kun je vaak
                    in huis blijven. bij een complete woningrenovatie is dat
                    lastiger. we bespreken dit vooraf met je.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    regelen jullie ook vergunningen in amsterdam?
                  </h3>
                  <p className="text-gray-700">
                    ja, we kunnen je helpen met het aanvragen van vergunningen bij
                    de gemeente amsterdam. we weten wat er nodig is en kunnen dit
                    voor je regelen of je daarbij adviseren.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    werken jullie ook in monumentale panden?
                  </h3>
                  <p className="text-gray-700">
                    zeker! we hebben veel ervaring met monumentale grachtenhuizen
                    en andere beschermde panden in amsterdam. we werken volgens de
                    juiste richtlijnen en kunnen adviseren over wat wel en niet mag.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    hoe gaan jullie om met parkeren en materiaal aanvoer?
                  </h3>
                  <p className="text-gray-700">
                    we kennen amsterdam goed en plannen dit vooraf in. soms is een
                    ontheffing nodig voor parkeren of een container. dit regelen we
                    voor je en houden we rekening mee in de planning en offerte.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related links */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                meer informatie
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link
                  href="/diensten/renovatie"
                  className="group bg-white p-6 rounded-xl hover:shadow-lg transition-all"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    onze renovatie diensten
                  </h3>
                  <p className="text-gray-600 mb-4">
                    ontdek alle mogelijkheden voor renovatie en verbouwing bij
                    mkhbouw
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                    lees meer <ArrowRight size={18} />
                  </span>
                </Link>

                <Link
                  href="/locaties/stucwerk-amsterdam"
                  className="group bg-white p-6 rounded-xl hover:shadow-lg transition-all"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    stucwerk in amsterdam
                  </h3>
                  <p className="text-gray-600 mb-4">
                    ook stucwerk nodig na je renovatie? bekijk onze stucwerk
                    diensten in amsterdam
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
