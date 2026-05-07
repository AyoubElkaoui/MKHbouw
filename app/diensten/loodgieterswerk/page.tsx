import type { Metadata } from "next";
import { CheckCircle, ArrowLeft, Phone, ArrowRight, Droplets, Star, Shield, Clock, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Loodgieterswerk - Loodgieter Amsterdam | MKH Bouw",
  description: "Professioneel loodgieterswerk door MKH Bouw Amsterdam. Lekkage reparatie, badkamermontage, waterleiding, cv-ketel en sanitair. Snel en betrouwbaar. Gratis offerte.",
  keywords: ["loodgieter Amsterdam", "lekkage reparatie", "badkamer installatie", "waterleiding aanleggen", "cv ketel", "sanitair plaatsen", "MKH Bouw"],
  alternates: { canonical: "https://mkhbouw.nl/diensten/loodgieterswerk" },
};

const steps = [
  { num: "01", title: "Inspectie & diagnose", desc: "Wij inspecteren de situatie ter plaatse. Bij lekkages zoeken wij de oorzaak — geen symptoombestrijding maar een permanente oplossing." },
  { num: "02", title: "Offerte & planning", desc: "U ontvangt een heldere offerte inclusief materiaalkosten. Wij plannen de werkzaamheden zo dat overlast minimaal is." },
  { num: "03", title: "Vakkundige uitvoering", desc: "Onze loodgieters werken nauwkeurig en netjes — bestaande leidingen worden zorgvuldig behandeld en nieuwe worden correct aangesloten." },
  { num: "04", title: "Test & oplevering", desc: "Na de werkzaamheden testen wij alles uitgebreid op druk en lekkage. U ontvangt de ruimte schoon en gebruiksklaar." },
];

const specializations = [
  { title: "Lekkage opsporing & reparatie", desc: "Snel en vakkundig lekkages opsporen en verhelpen — van een druppelende kraan tot een gebarsten leiding in de muur. Permanente oplossing, geen lapmiddelen." },
  { title: "Badkamer installatie", desc: "Complete sanitaire installatie voor nieuwe of gerenoveerde badkamer. Douche, bad, wastafel, toilet en alle bijbehorende leidingen." },
  { title: "Waterleiding aanleggen & verzetten", desc: "Nieuwe waterleidingen aanleggen of bestaande leidingen verzetten bij verbouw of renovatie. Inclusief aftakkingen en aansluitingen." },
  { title: "Afvoerleidingen", desc: "Afvoerproblemen verhelpen, nieuwe afvoerleidingen aanleggen of bestaande afvoeren doorspuiten — snel en effectief." },
  { title: "CV-ketel & verwarming", desc: "CV-ketel plaatsen, onderhoud of storing verhelpen. Radiatoren plaatsen, thermostaatafsluiters vervangen en systeem ontluchten." },
  { title: "Buitenkranen & tuinirrigatie", desc: "Buitenwaterkraan aansluiten, tuinirrigatiesystemen aanleggen of een buitendouche installeren voor terras of zwembad." },
];

const faqs = [
  { q: "Wat doe ik bij een acute lekkage?", a: "Sluit direct de hoofdwaterkraan af (meestal naast of bij de watermeter). Bel ons daarna — wij reageren snel op lekkage-spoedreparaties en zoeken de oorzaak voor een permanente oplossing." },
  { q: "Hoe lang duurt een volledige badkamermontage?", a: "Een complete badkamerinstallatie duurt gemiddeld 2 tot 4 werkdagen, afhankelijk van de grootte en de hoeveelheid aansluitingen. De tegels en stucwerk worden daarna afzonderlijk uitgevoerd." },
  { q: "Kunnen jullie ook bij bestaande vloerverwarming werken?", a: "Ja, wij werken ook aan vloerverwarmingssystemen — ontluchten, aansluiten of uitbreiden. Altijd in overleg met de situatie ter plaatse." },
  { q: "Is mijn cv-ketel toe aan vervanging?", a: "Een cv-ketel gaat gemiddeld 15-20 jaar mee. Tekenen van slijtage zijn hogere gasrekening, frequente storingen, roestwater of vreemd geluid. Wij inspecteren uw ketel gratis en geven eerlijk advies." },
  { q: "Werken jullie ook voor VvE's en verhuurders?", a: "Ja, wij werken regelmatig voor VvE's, vastgoedbeheerders en verhuurders. Wij zijn gewend aan coördinatie met huurders en werken discreet en efficiënt." },
];

export default function LoodgieterwerkPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-zinc-950">

        {/* Hero */}
        <section className="relative min-h-[75vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1523413555809-0fb1d4da238d?q=80&w=2670&auto=format&fit=crop" alt="Loodgieterswerk MKH Bouw Amsterdam" fill className="object-cover opacity-40" priority />
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
                <Droplets size={28} className="text-primary-300" />
              </div>
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary-400 px-4 py-1.5 rounded-full text-sm font-semibold border border-primary/20">
                <Star size={12} className="fill-primary-400" /> Sanitaire Installaties
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-3xl">
              Betrouwbaar <span className="text-primary-400">Loodgieterswerk</span>
            </h1>
            <p className="text-xl text-zinc-300 max-w-2xl mb-10 leading-relaxed">
              Van lekkage reparatie tot complete badkamerrenovaties. Waterleiding, afvoer, cv-ketel en sanitair — snel, vakkundig en permanent opgelost.
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
                {[{ number: "15+", label: "Jaar ervaring" }, { number: "Snel", label: "Spoedreparaties" }, { number: "Alle", label: "Installaties" }, { number: "24u", label: "Reactietijd" }].map((s) => (
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
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-primary/20">Betrouwbaar loodgieterswerk</span>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Snel, permanent en netjes</h2>
                <p className="text-zinc-400 leading-relaxed mb-5">
                  MKH Bouw heeft ervaren loodgieters in huis voor alle sanitaire en installatietechnische werkzaamheden. Van een kleine lekkage tot een complete badkamerrenovatie — wij reageren snel en lossen het permanent op.
                </p>
                <p className="text-zinc-500 leading-relaxed mb-5">
                  Wij geloven niet in tijdelijke lapmiddelen. Elke reparatie pakken wij grondig aan: de oorzaak wordt gevonden en opgelost. Zo voorkomt u herhaald gedoe en schade aan uw interieur of constructie.
                </p>
                <p className="text-zinc-500 leading-relaxed mb-10">
                  Zowel voor particulieren als voor VvE's, verhuurders en bedrijven — wij werken discreet, efficiënt en met minimale overlast voor bewoners of gebruikers.
                </p>
                <ul className="space-y-3">
                  {[
                    "Snelle reactie bij lekkages en spoedklussen",
                    "Permanente oplossing — geen tijdelijke lapmiddelen",
                    "Complete badkamer- en toiletinstallaties",
                    "Waterleiding aanleggen, verzetten of vervangen",
                    "CV-ketel plaatsen, onderhoud en storing verhelpen",
                    "Sanitair plaatsen: douche, bad, wastafel, toilet",
                    "Afvoerleidingen reinigen en aanleggen",
                    "Geschikt voor particulieren, VvE's en verhuurders",
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
                  { icon: Shield, title: "Garantie op reparaties", desc: "Wij staan achter elk uitgevoerd stuk loodgieterswerk. Terugkerende problemen op dezelfde plek lossen wij kosteloos op." },
                  { icon: Users, title: "Ervaren loodgieters", desc: "Onze loodgieters hebben jarenlange ervaring met alle soorten leidingwerk, sanitair en verwarmingssystemen." },
                  { icon: Clock, title: "Snelle responstijd", desc: "Een lekkage kan snel grote schade veroorzaken. Wij reageren snel en plannen spoedklussen zo snel mogelijk in." },
                  { icon: Star, title: "Netjes & opgeruimd", desc: "Na het loodgieterswerk ruimen wij alles op. Wanden en vloeren worden zo min mogelijk beschadigd en netjes hersteld." },
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
                <h2 className="text-3xl lg:text-4xl font-bold text-white">Van melding tot permanente oplossing</h2>
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
                <h2 className="text-3xl lg:text-4xl font-bold text-white">Onze loodgietersdiensten</h2>
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
                <h2 className="text-3xl lg:text-4xl font-bold text-white">Veelgestelde vragen over loodgieterswerk</h2>
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
                  { href: "/diensten/electra", label: "Electra" },
                  { href: "/diensten/totaal-afbouw", label: "Totaal Afbouw" },
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Loodgieter nodig?</h2>
            <p className="text-zinc-300 max-w-xl mx-auto mb-8 leading-relaxed">Vraag vandaag nog een gratis en vrijblijvende offerte aan. Wij reageren binnen 24 uur — bij spoed zo snel mogelijk.</p>
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
