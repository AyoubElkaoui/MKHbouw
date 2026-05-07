import type { Metadata } from "next";
import { CheckCircle, ArrowLeft, Phone, ArrowRight, Layers, Star, Shield, Clock, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tegelen - Badkamer, Keuken & Vloer | MKH Bouw Amsterdam",
  description: "Professioneel tegelwerk voor badkamer, keuken, vloer en gevel door MKH Bouw Amsterdam. Alle formaten en stijlen, nauwkeurig en strak. 15+ jaar ervaring. Gratis offerte.",
  keywords: ["tegelzetter Amsterdam", "badkamer tegelen", "keuken tegels", "vloertegels leggen", "tegelwerk Amsterdam", "tegelen buiten", "MKH Bouw"],
  alternates: { canonical: "https://mkhbouw.nl/diensten/tegelen" },
};

const steps = [
  { num: "01", title: "Advies & offerte", desc: "Wij bespreken het gewenste formaat, dessin en legpatroon. U ontvangt een offerte inclusief materiaal- en arbeidskosten." },
  { num: "02", title: "Ondergrond controleren", desc: "De vloer of wand wordt gecontroleerd op vlakheid en sterkte. Eventuele onregelmatigheden worden gecorrigeerd." },
  { num: "03", title: "Tegels leggen", desc: "Onze tegelzetters leggen de tegels nauwkeurig op lijn, met gelijke voegbreedte en strak aansluitend op alle randen." },
  { num: "04", title: "Voegen & afwerken", desc: "Na het harden van de tegellijm worden de voegen aangebracht in de gewenste kleur. Alles wordt schoongemaakt en opgeleverd." },
];

const specializations = [
  { title: "Badkamer betegeling", desc: "Complete betegeling van wanden en vloer in uw badkamer of toilet. Van klassiek wit tot modern groot formaat — wij realiseren uw badkamerdroom." },
  { title: "Keukenwand & spatwand", desc: "Achterwand of spatwand in uw keuken nauwkeurig betegeld. Inclusief nette afwerking rondom het fornuis en stopcontacten." },
  { title: "Vloertegels woonkamer & hal", desc: "Tegelvloer voor hal, woonkamer of kantoor — slijtvast, makkelijk schoon te houden en in talloze kleuren en formaten." },
  { title: "Buitentegels & terras", desc: "Vorstbestendige buitentegels voor terras, oprit of gevel. Antislip en bestand tegen alle Nederlandse weersomstandigheden." },
  { title: "Mozaïek & decoratieve tegels", desc: "Mozaïektegels, geglazuurde handvormtegels en decoratieve panelen — voor wie iets bijzonders wil in hun interieur of exterieur." },
  { title: "Grote formaat tegels", desc: "Tegels van 60x60 tot 120x240 cm voor een strak en modern effect. Wij hebben de expertise en gereedschap voor perfect legwerk." },
];

const faqs = [
  { q: "Wat kost tegelen per m²?", a: "De arbeidskosten voor tegelen liggen doorgaans tussen €25-€50 per m², afhankelijk van het formaat, legpatroon en ondergrond. Materiaalkosten zijn hierop extra. Wij maken een offerte op maat inclusief alles." },
  { q: "Hoe lang duurt een badkamer betegelen?", a: "Een gemiddelde badkamer (5-8 m²) duurt 2 tot 4 werkdagen, inclusief voegen en oplevering. Grotere ruimten of complexe patronen vragen meer tijd." },
  { q: "Kunnen jullie ook oude tegels verwijderen?", a: "Ja, wij verzorgen ook het sloopwerk van oude tegels. Dit wordt apart geoffreerd. Wij kunnen de afvoer van puin ook regelen." },
  { q: "Welk formaat tegel adviseren jullie voor een kleine badkamer?", a: "Grote tegels (60x60 of groter) geven optisch meer ruimte omdat er minder voegen zijn. Kleine tegels of mozaïek geven juist een detailrijke uitstraling. Wij adviseren u op basis van uw badkamer." },
  { q: "Leggen jullie ook vloerverwarming onder tegels?", a: "Wij leggen de tegels op bestaande vloerverwarming of coördineren samen met een installateur voor nieuwe vloerverwarming. Tegels zijn uitstekend geschikt voor vloerverwarming." },
];

export default function TegerenPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-zinc-950">

        {/* Hero */}
        <section className="relative min-h-[75vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?q=80&w=2670&auto=format&fit=crop" alt="Tegelen MKH Bouw Amsterdam" fill className="object-cover opacity-40" priority />
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
                <Layers size={28} className="text-primary-300" />
              </div>
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary-400 px-4 py-1.5 rounded-full text-sm font-semibold border border-primary/20">
                <Star size={12} className="fill-primary-400" /> Tegelwerk
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-3xl">
              Professioneel <span className="text-primary-400">Tegelen</span>
            </h1>
            <p className="text-xl text-zinc-300 max-w-2xl mb-10 leading-relaxed">
              Badkamer, keuken, vloer of terras — wij tegelen nauwkeurig en strak. Alle formaten, stijlen en materialen. Binnen én buiten, particulier én zakelijk.
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

          <div className="absolute bottom-0 left-0 right-0 bg-white/[0.03] backdrop-blur-xl border-t border-white/5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
                {[{ number: "15+", label: "Jaar ervaring" }, { number: "500+", label: "Projecten" }, { number: "Alle", label: "Formaten & stijlen" }, { number: "24u", label: "Reactietijd" }].map((s) => (
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
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-start">
              <div>
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-primary/20">Vakkundig tegelwerk</span>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Nauwkeurig en strak</h2>
                <p className="text-zinc-400 leading-relaxed mb-5">
                  MKH Bouw is specialist in tegelwerk voor badkamers, keukens, woonkamers, hallen en buitenruimten. Onze tegelzetters werken nauwkeurig — rechte lijnen, gelijke voegen en strakke aansluitingen op elk oppervlak.
                </p>
                <p className="text-zinc-500 leading-relaxed mb-5">
                  Wij verwerken alle soorten tegels: van kleine mozaïektegels tot grote formaatplaten van 120x240 cm. Van klassiek tot modern, van naturel steen look tot gepolijst porselein — wij hebben de expertise en het juiste gereedschap.
                </p>
                <p className="text-zinc-500 leading-relaxed mb-10">
                  Voor buiten gebruiken wij altijd vorstbestendige en antislip varianten. Zo bent u verzekerd van een duurzaam en veilig resultaat voor terras, oprit of gevel.
                </p>
                <ul className="space-y-3">
                  {[
                    "Nauwkeurige en strakke tegellijn, binnen én buiten",
                    "Alle formaten: van 10x10 cm tot 120x240 cm",
                    "Badkamer, keuken, vloer, wand en gevel",
                    "Vorstbestendige buitentegels voor terras en oprit",
                    "Voegen in elke gewenste kleur",
                    "Inclusief ondergrondvoorbereiding en waterdichting",
                    "Mozaïek en decoratieve patronen mogelijk",
                    "Oude tegels verwijderen en afvoeren op aanvraag",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-primary-400 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-400 text-sm">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-5">
                {[
                  { icon: Shield, title: "Waterdichte afwerking", desc: "Badkamers en natte ruimten worden altijd waterdicht afgewerkt. Wij gebruiken de juiste kit en waterdichting voor een lekkagevrij resultaat." },
                  { icon: Users, title: "Ervaren tegelzetters", desc: "Onze tegelzetters hebben jarenlange ervaring met alle soorten tegels en ondergronden — ook in complexe ruimten." },
                  { icon: Clock, title: "Nette & snelle uitvoering", desc: "Wij werken planmatig en opgeruimd. Een badkamer is gemiddeld in 2-4 dagen betegeld en klaar voor gebruik." },
                  { icon: Star, title: "Deskundig tegeladvies", desc: "Welk formaat, welk legpatroon, welke voegkleur? Wij adviseren u zodat u een eindresultaat krijgt waar u jaren plezier van heeft." },
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
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 border border-primary/20">Werkwijze</span>
                <h2 className="text-3xl lg:text-4xl font-bold text-white">Van offerte tot oplevering</h2>
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
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 border border-primary/20">Specialisaties</span>
                <h2 className="text-3xl lg:text-4xl font-bold text-white">Waar wij tegelen</h2>
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
                <h2 className="text-3xl lg:text-4xl font-bold text-white">Veelgestelde vragen over tegelen</h2>
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

        {/* Related */}
        <section className="py-16 bg-zinc-900 relative overflow-hidden">
          <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8">Gerelateerde diensten</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { href: "/diensten/loodgieterswerk", label: "Loodgieterswerk" },
                  { href: "/diensten/stucwerk", label: "Stucwerk" },
                  { href: "/diensten/totaal-afbouw", label: "Totaal Afbouw" },
                  { href: "/diensten/laminaat", label: "Laminaat & PVC" },
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Uw tegelproject starten?</h2>
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
