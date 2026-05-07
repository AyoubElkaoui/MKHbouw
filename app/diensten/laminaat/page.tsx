import type { Metadata } from "next";
import { CheckCircle, ArrowLeft, Phone, ArrowRight, Layers, Star, Shield, Clock, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Laminaat & PVC Laminaat Vloer Leggen | MKH Bouw Amsterdam",
  description: "Vakkundige plaatsing van laminaat en PVC-laminaatvloeren door MKH Bouw Amsterdam. Inclusief ondervloer, plinten en drempels. Geschikt voor vloerverwarming. Gratis offerte.",
  keywords: ["laminaat leggen Amsterdam", "PVC laminaat vloer", "vloer leggen", "laminaatvloer plaatsen", "vloerafwerking", "vloerverwarming laminaat", "MKH Bouw"],
  alternates: { canonical: "https://mkhbouw.nl/diensten/laminaat" },
};

const steps = [
  { num: "01", title: "Vloer beoordelen", desc: "Wij controleren de ondervloer op vlakheid, vochtgehalte en conditie — en adviseren welk laminaat of PVC het beste past." },
  { num: "02", title: "Ondervloer leggen", desc: "De juiste ondervloer (isolerend, geluidsdempend of vochtwerend) wordt zorgvuldig gelegd als basis voor de vloer." },
  { num: "03", title: "Laminaat of PVC leggen", desc: "De planken worden nauwkeurig gelegd met de juiste expansievoeg rondom de wanden — strak en zonder kiepende planken." },
  { num: "04", title: "Afwerking & oplevering", desc: "Plinten en drempelprofielen worden aangebracht. De vloer wordt schoongemaakt en klaar opgeleverd voor gebruik." },
];

const specializations = [
  { title: "Laminaatvloer", desc: "Laminaat is verkrijgbaar in tientallen hout- en steenlooks — van klassiek eiken tot modern betonlook. Slijtvast, betaalbaar en eenvoudig te onderhouden." },
  { title: "PVC-laminaat (LVT)", desc: "PVC-laminaat (Luxury Vinyl Tiles) is volledig waterbestendig en krasbestendig. Ideaal voor keukens, badkamers, hallen en commerciële ruimten." },
  { title: "Vloerverwarming compatibel", desc: "Wij leggen laminaat en PVC vloeren die volledig geschikt zijn voor vloerverwarming. Advies over maximale watertemperatuur inbegrepen." },
  { title: "Click- en lijmsystemen", desc: "Afhankelijk van de ondergrond en het gebruik adviseren wij een click-systeem (zwevend) of lijmsysteem voor optimale hechting." },
  { title: "Ondervloer & geluidsdemping", desc: "De juiste ondervloer isoleert geluid, vocht en kou. Wij adviseren de beste ondervloer op basis van uw situatie en verdieping." },
  { title: "Herleggen & vervanging", desc: "Bestaande vloer verwijderen en herleggen? Wij verwijderen de oude vloer, controleren de ondervloer en leggen een nieuwe vloer." },
];

const faqs = [
  { q: "Wat is het verschil tussen laminaat en PVC-laminaat?", a: "Laminaat bestaat uit houtvezelplaten met een fotolaag en is niet waterbestendig. PVC-laminaat (LVT) is volledig van kunststof, volledig waterbestendig en ideaal voor natte ruimten. PVC voelt iets zachter aan en dempt geluid beter." },
  { q: "Kan laminaat op vloerverwarming gelegd worden?", a: "Ja, mits het laminaat geschikt is voor vloerverwarming (dit staat vermeld op de verpakking). De watertemperatuur mag niet hoger zijn dan 28-30°C. Wij adviseren u over de juiste keuze." },
  { q: "Moet ik zelf de vloer aanschaffen?", a: "Dat kan, maar wij adviseren u over de juiste hoeveelheid en kwaliteit. Wij kunnen de vloer ook voor u aanschaffen bij onze leveranciers — often met voordelige inkoopprijzen." },
  { q: "Hoe lang duurt het leggen van een laminaatvloer?", a: "Een gemiddelde woonkamer (30 m²) is in één werkdag gelegd inclusief ondervloer en plinten. Grotere ruimten of complexe legpatronen duren langer." },
  { q: "Kunnen jullie ook de bestaande vloer verwijderen?", a: "Ja, wij verwijderen en voeren oud tapijt, tegels of laminaat af. Dit wordt apart geoffreerd. Na verwijdering controleren wij de ondervloer en starten met het leggen van de nieuwe vloer." },
];

export default function LaminaatPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-zinc-950">

        {/* Hero */}
        <section className="relative min-h-[75vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1624574470112-46944be68409?q=80&w=2670&auto=format&fit=crop" alt="Laminaat leggen MKH Bouw Amsterdam" fill className="object-cover opacity-40" priority />
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
                <Star size={12} className="fill-primary-400" /> Vloerafwerking
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-3xl">
              Laminaat & <span className="text-primary-400">PVC Laminaat</span>
            </h1>
            <p className="text-xl text-zinc-300 max-w-2xl mb-10 leading-relaxed">
              Vakkundige plaatsing van laminaat en PVC-laminaatvloeren inclusief ondervloer, plinten en drempels. Warm, stijlvol en duurzaam voor woning of bedrijf.
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
                {[{ number: "15+", label: "Jaar ervaring" }, { number: "VV", label: "Vloerverwarming OK" }, { number: "Alles", label: "Incl. plinten" }, { number: "24u", label: "Reactietijd" }].map((s) => (
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
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-primary/20">Professionele vloerafwerking</span>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Compleet gelegd, compleet klaar</h2>
                <p className="text-zinc-400 leading-relaxed mb-5">
                  MKH Bouw is specialist in het leggen van laminaat en PVC-laminaatvloeren voor woningen en bedrijfspanden. Wij leveren en leggen de vloer vakkundig — inclusief ondervloer, plinten en drempelprofielen. U hoeft niets zelf te regelen.
                </p>
                <p className="text-zinc-500 leading-relaxed mb-5">
                  PVC-laminaat (ook wel LVT of luxe vinyl vloer) is een uitstekend alternatief voor hout of tegels — volledig waterbestendig, krasbestendig en verkrijgbaar in prachtige hout- en steenlooks. Geschikt voor elke ruimte, ook keukens en badkamers.
                </p>
                <p className="text-zinc-500 leading-relaxed mb-10">
                  Laminaat biedt dezelfde uitstraling voor een lagere prijs en is ideaal voor woonkamers, slaapkamers en kantoren. Wij adviseren u welke keuze het beste past bij uw situatie en budget.
                </p>
                <ul className="space-y-3">
                  {[
                    "Laminaat en PVC-laminaat in alle kleuren en looks",
                    "Inclusief ondervloer (geluidsdempend of vochtwerend)",
                    "Inclusief plinten en drempelprofielen",
                    "Geschikt voor vloerverwarming",
                    "Volledig waterbestendig PVC-laminaat voor natte ruimten",
                    "Bestaande vloer verwijderen op aanvraag",
                    "Snelle levering en directe plaatsing",
                    "Voor woning, kantoor en bedrijfsruimte",
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
                  { icon: Shield, title: "Inclusief garantie", desc: "Wij geven garantie op het legwerk. Kiepende planken, ongelijke naden of loslatende plinten lossen wij kosteloos op." },
                  { icon: Users, title: "Ervaren vloerenleggers", desc: "Onze vloerenleggers hebben jarenlange ervaring met alle soorten laminaat en PVC — inclusief complexe legpatronen." },
                  { icon: Clock, title: "Één dag klaar", desc: "Een gemiddelde woonkamer is in één werkdag volledig klaar — inclusief ondervloer, vloer en plinten." },
                  { icon: Star, title: "Gratis vloeradvies", desc: "Weet u nog niet welke vloer u wilt? Wij adviseren u op basis van uw ruimte, gebruik en budget." },
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
                <h2 className="text-3xl lg:text-4xl font-bold text-white">Van beoordeling tot gebruiksklare vloer</h2>
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
                <h2 className="text-3xl lg:text-4xl font-bold text-white">Onze vloeropties</h2>
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
                <h2 className="text-3xl lg:text-4xl font-bold text-white">Veelgestelde vragen over laminaat</h2>
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
                  { href: "/diensten/tegelen", label: "Tegelen" },
                  { href: "/diensten/timmerwerk", label: "Timmerwerk & PVC tegel" },
                  { href: "/diensten/totaal-afbouw", label: "Totaal Afbouw" },
                  { href: "/diensten/schilderwerk", label: "Schilderwerk" },
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Nieuwe vloer laten leggen?</h2>
            <p className="text-zinc-300 max-w-xl mx-auto mb-8 leading-relaxed">Vraag vandaag nog een gratis en vrijblijvende offerte aan. Wij reageren binnen 24 uur.</p>
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
