import type { Metadata } from "next";
import { CheckCircle, ArrowLeft, Phone, ArrowRight, HardHat, Star, Shield, Clock, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Totaal Afbouw - Complete Afbouw Woning & Bedrijf | MKH Bouw Amsterdam",
  description: "Complete totaal afbouw van uw woning of bedrijfspand door MKH Bouw Amsterdam. Van ruwbouw tot sleutelklare oplevering — alle disciplines onder één dak. 15+ jaar ervaring. Gratis offerte.",
  keywords: ["totaal afbouw", "complete afbouw", "afbouw woning Amsterdam", "aannemer afbouw", "totaaloplossing bouw", "MKH Bouw"],
  alternates: { canonical: "https://mkhbouw.nl/diensten/totaal-afbouw" },
};

const steps = [
  { num: "01", title: "Gratis gesprek & offerte", desc: "Wij komen langs, bespreken uw wensen en maken een gedetailleerde offerte op maat — geheel vrijblijvend." },
  { num: "02", title: "Planning & voorbereiding", desc: "Samen stellen wij een duidelijke planning op. Welke disciplines, welke volgorde, wanneer start en oplevering." },
  { num: "03", title: "Vakkundige uitvoering", desc: "Ons team voert alle werkzaamheden zelf uit of coördineert gecertificeerde partners. U heeft één aanspreekpunt." },
  { num: "04", title: "Oplevering & garantie", desc: "Na oplevering loopt u het pand met ons door. Alles klopt, alles zit goed — wij geven garantie op ons werk." },
];

const specializations = [
  { title: "Nieuwbouw afbouw", desc: "Complete afbouw van nieuwbouwwoningen en bedrijfspanden. Van het plaatsen van kozijnen en deuren tot stucwerk, schilderwerk en vloerafwerking." },
  { title: "Renovatie & verbouw", desc: "Totale verbouw van bestaande panden — inclusief sloopwerk, elektra, loodgieterswerk en alle afwerkingsdisciplines." },
  { title: "Bedrijfspanden & kantoren", desc: "Kantoor, winkel, horecagelegenheid of zorginstelling — wij bouwen uw professionele werkplek af op maat en binnen budget." },
  { title: "Particuliere woningen", desc: "Nieuwbouwwoning of verbouwing van een bestaande woning — wij werken met u samen voor het perfecte eindresultaat." },
  { title: "VvE & appartementencomplexen", desc: "Groot onderhoud of renovatie van meerdere woningen tegelijk. Wij plannen efficiënt zodat bewoners minimale overlast ervaren." },
  { title: "Spoed & projectbeheer", desc: "Strakke deadlines? Wij kunnen ook in korte tijd grote projecten coördineren en opleveren — met dezelfde kwaliteitsstandaard." },
];

const faqs = [
  { q: "Wat kost een totale afbouw?", a: "De kosten hangen af van de omvang van het project, de gebruikte materialen en de disciplines die nodig zijn. Wij maken altijd een gedetailleerde offerte op maat — volledig transparant, zonder verborgen kosten." },
  { q: "Hoe lang duurt een totaal afbouw project?", a: "Dit varieert sterk. Een kleine verbouwing kan in 1-2 weken, een complete afbouw van een woning duurt gemiddeld 4-10 weken afhankelijk van de omvang en planning." },
  { q: "Welke disciplines vallen onder totaal afbouw?", a: "Stucwerk, schilderwerk, tegelen, vloerlegging, timmerwerk, elektra, loodgieterswerk, dakwerk en behangen. Wij coördineren alles — u heeft één aanspreekpunt." },
  { q: "Werken jullie ook buiten Amsterdam?", a: "Ja, MKH Bouw is actief door heel Nederland. Wij nemen projecten aan in Amsterdam en omgeving, maar ook landelijk voor grotere opdrachten." },
  { q: "Kan ik ook een deel van de afbouw zelf doen?", a: "Absoluut. Wij passen de offerte en planning aan op basis van wat u zelf wilt doen en wat u aan ons uitbesteedt. Flexibiliteit staat bij ons centraal." },
];

export default function TotaalAfbouwPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-zinc-950">

        {/* Hero */}
        <section className="relative min-h-[75vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1770838773417-08b18661c62f?q=80&w=2670&auto=format&fit=crop" alt="Totaal afbouw MKH Bouw" fill className="object-cover opacity-40" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/70 to-zinc-950/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
          </div>
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32">
            <Link href="/diensten" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white mb-8 transition-colors text-sm">
              <ArrowLeft size={16} /> Terug naar diensten
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center border border-primary/30">
                <HardHat size={28} className="text-primary-300" />
              </div>
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary-400 px-4 py-1.5 rounded-full text-sm font-semibold border border-primary/20">
                <Star size={12} className="fill-primary-400" /> Complete Afbouw
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-3xl">
              Totaal <span className="text-primary-400">Afbouw</span> van A tot Z
            </h1>
            <p className="text-xl text-zinc-300 max-w-2xl mb-10 leading-relaxed">
              Complete afbouw van uw woning of bedrijfspand. Van ruwbouw tot sleutelklare oplevering — alle disciplines, één aanspreekpunt, één prijs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-700 transition-all shadow-xl shadow-primary/25 hover:-translate-y-0.5">
                Gratis Offerte Aanvragen <ArrowRight size={20} />
              </Link>
              <a href="tel:+31684794108" className="inline-flex items-center justify-center gap-3 bg-white/5 text-white border border-white/15 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all">
                <Phone size={18} /> 06 84794108
              </a>
            </div>
          </div>

          {/* Stats bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-white/[0.03] backdrop-blur-xl border-t border-white/5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
                {[
                  { number: "15+", label: "Jaar ervaring" },
                  { number: "500+", label: "Projecten afgerond" },
                  { number: "10+", label: "Disciplines" },
                  { number: "24u", label: "Reactietijd" },
                ].map((s) => (
                  <div key={s.label} className="py-5 px-6 text-center">
                    <div className="text-2xl md:text-3xl font-bold text-white">{s.number}</div>
                    <div className="text-sm text-zinc-500 font-medium">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Intro + Benefits */}
        <section className="py-24 bg-zinc-900 relative overflow-hidden">
          <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          <div className="absolute right-0 top-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-start">
              <div>
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-primary/20">Wat is totaal afbouw?</span>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Eén aannemer voor alles</h2>
                <p className="text-zinc-400 leading-relaxed mb-5">
                  Totaal afbouw betekent dat MKH Bouw uw complete bouwproject van begin tot eind verzorgt. Wij coördineren alle vakdisciplines — stucwerk, schilderwerk, tegelen, vloerlegging, elektra, loodgieterswerk en meer. U heeft één aanspreekpunt en één vaste prijs.
                </p>
                <p className="text-zinc-500 leading-relaxed mb-5">
                  Veel opdrachtgevers hebben het liever bij één betrouwbare partner dan bij vijf verschillende aannemers. Dat bespaart tijd, stress en vaak ook geld. Wij plannen de disciplines slim op elkaar zodat er geen onnodige wachttijden zijn.
                </p>
                <p className="text-zinc-500 leading-relaxed mb-10">
                  Of het nu gaat om een nieuwbouwwoning, een complete verbouwing of de renovatie van een bedrijfspand — wij zorgen voor een strakke, tijdige en hoogwaardige oplevering.
                </p>
                <h3 className="text-xl font-bold text-white mb-5">Wat u van ons mag verwachten</h3>
                <ul className="space-y-3">
                  {[
                    "Één aanspreekpunt voor alle bouwdisciplines",
                    "Van ruwbouw tot sleutelklare oplevering",
                    "Transparante offerte — geen verborgen kosten",
                    "Realistische planning met strakke deadlines",
                    "Alle materialen en onderaannemers via ons geregeld",
                    "Garantie op alle uitgevoerde werkzaamheden",
                    "Schone werkplek, dagelijks opgeruimd",
                    "Geschikt voor particulieren en zakelijke opdrachtgevers",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-primary-400 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-400 text-sm">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-5">
                <h3 className="text-xl font-bold text-white mb-2">Waarom kiezen voor MKH Bouw?</h3>
                {[
                  { icon: Shield, title: "Betrouwbaar & transparant", desc: "Vaste prijzen, duidelijke afspraken en eerlijke communicatie. Wat we beloven, leveren we." },
                  { icon: Users, title: "Ervaren vakteam", desc: "Meer dan 15 jaar ervaring in de bouw. Ons team beheerst alle relevante disciplines en werkt met hoogwaardige materialen." },
                  { icon: Clock, title: "Binnen planning", desc: "Wij hanteren strakke planningen en houden u wekelijks op de hoogte van de voortgang. Geen onaangename verrassingen." },
                  { icon: Star, title: "Garantie op ons werk", desc: "Na oplevering loopt u het pand met ons door. Wij staan achter elk onderdeel van onze werkzaamheden." },
                ].map((item) => (
                  <div key={item.title} className="bg-zinc-950/50 border border-white/5 hover:border-primary/20 rounded-2xl p-5 transition-all group">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-primary/20 group-hover:bg-primary group-hover:border-primary transition-all">
                        <item.icon size={18} className="text-primary-400 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold mb-1 text-sm">{item.title}</h4>
                        <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 bg-zinc-950 relative overflow-hidden">
          <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          <div className="absolute left-10 top-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 border border-primary/20">Onze Werkwijze</span>
                <h2 className="text-3xl lg:text-4xl font-bold text-white">Hoe werkt het?</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {steps.map((step, i) => (
                  <div key={step.num} className="relative group">
                    {i < steps.length - 1 && <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-primary/30 to-transparent z-10" />}
                    <div className="bg-zinc-900 border border-white/5 group-hover:border-primary/30 rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
                      <div className="text-4xl font-black text-primary/20 mb-4 leading-none">{step.num}</div>
                      <h3 className="text-white font-bold mb-3">{step.title}</h3>
                      <p className="text-zinc-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Specializations */}
        <section className="py-24 bg-zinc-900 relative overflow-hidden">
          <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 border border-primary/20">Wat wij doen</span>
                <h2 className="text-3xl lg:text-4xl font-bold text-white">Onze afbouwspecialisaties</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {specializations.map((s, i) => (
                  <div key={s.title} className="bg-zinc-950/50 border border-white/5 hover:border-primary/30 rounded-2xl p-7 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 group">
                    <div className="text-3xl font-black text-primary/20 mb-3 leading-none">0{i + 1}</div>
                    <h3 className="text-white font-bold mb-3 group-hover:text-primary-300 transition-colors">{s.title}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-zinc-950 relative overflow-hidden">
          <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-14">
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 border border-primary/20">FAQ</span>
                <h2 className="text-3xl lg:text-4xl font-bold text-white">Veelgestelde vragen</h2>
              </div>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="bg-zinc-900 border border-white/5 hover:border-primary/20 rounded-2xl p-7 transition-all group">
                    <h3 className="text-white font-bold mb-3 group-hover:text-primary-300 transition-colors flex items-start gap-3">
                      <span className="text-primary-400 font-black flex-shrink-0">Q.</span>{faq.q}
                    </h3>
                    <p className="text-zinc-500 leading-relaxed text-sm pl-6">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 bg-zinc-900 relative overflow-hidden">
          <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8">Gerelateerde diensten</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { href: "/diensten/stucwerk", label: "Stucwerk & Gevelwerk" },
                  { href: "/diensten/schilderwerk", label: "Schilderwerk" },
                  { href: "/diensten/tegelen", label: "Tegelen" },
                  { href: "/diensten/electra", label: "Electra" },
                  { href: "/diensten/loodgieterswerk", label: "Loodgieterswerk" },
                  { href: "/diensten/timmerwerk", label: "Timmerwerk" },
                  { href: "/diensten/laminaat", label: "Laminaat & PVC" },
                  { href: "/diensten/dakleggen", label: "Dakleggen" },
                ].map((link) => (
                  <Link key={link.href} href={link.href} className="group bg-zinc-950/50 border border-white/5 hover:border-primary/30 rounded-xl p-4 text-sm text-zinc-400 hover:text-white transition-all flex items-center justify-between">
                    {link.label} <ArrowRight size={14} className="text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-zinc-900 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Klaar voor uw afbouwproject?</h2>
            <p className="text-zinc-300 max-w-xl mx-auto mb-8 leading-relaxed">Vraag vandaag nog een gratis en vrijblijvende offerte aan. Wij reageren binnen 24 uur met een persoonlijk voorstel.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-primary-800 px-8 py-4 rounded-xl font-bold hover:bg-primary-50 transition-all shadow-xl shadow-black/20 hover:-translate-y-0.5">
                Offerte Aanvragen <ArrowRight size={18} />
              </Link>
              <a href="tel:+31684794108" className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all">
                <Phone size={18} /> 06 84794108
              </a>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}
