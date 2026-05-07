import type { Metadata } from "next";
import { CheckCircle, ArrowLeft, Phone, ArrowRight, PaintBucket, Star, Shield, Clock, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Schilderwerk Binnen & Buiten | MKH Bouw Amsterdam",
  description: "Professioneel schilderwerk binnen en buiten door MKH Bouw Amsterdam. Woningen, kozijnen en bedrijfspanden. Hoogwaardige verf, strak en duurzaam resultaat. Gratis offerte.",
  keywords: ["schilder Amsterdam", "schilderwerk binnen buiten", "buitenschilder Amsterdam", "kozijnen schilderen", "binnenschilderwerk", "MKH Bouw"],
  alternates: { canonical: "https://mkhbouw.nl/diensten/schilderwerk" },
};

const steps = [
  { num: "01", title: "Inspectie & offerte", desc: "Wij beoordelen het te schilderen oppervlak, adviseren de juiste verfsoort en maken een offerte op maat." },
  { num: "02", title: "Voorbereiding", desc: "Schuren, plamuren, reinigen en afplakken. Een goede voorbereiding is het halve werk voor een strak eindresultaat." },
  { num: "03", title: "Grond- en eindlaag", desc: "We brengen grondverf aan voor hechting en duurzaamheid, gevolgd door een of meerdere kwalitatieve eindlagen." },
  { num: "04", title: "Oplevering", desc: "Na het schilderwerk controleren we samen het resultaat. Alle plakband verwijderd, alles netjes opgeruimd." },
];

const specializations = [
  { title: "Binnenschilderwerk", desc: "Muren, plafonds, deuren en kozijnen binnen — strak geschilderd met laaglucht- en reukvrije hoogwaardige verven." },
  { title: "Buitenschilderwerk", desc: "Kozijnen, deuren, boeidelen, dakkapellen en gevels buiten — weerbestendig en duurzaam met UV-bestendige buitenverf." },
  { title: "Bedrijfspanden", desc: "Kantoren, winkels, horeca en bedrijfsruimten. Wij werken ook buiten kantooruren om uw bedrijfsvoering niet te storen." },
  { title: "Houtrot & herstelwerk", desc: "Verrot hout repareren of vervangen voor een perfecte basis. Inclusief grondlaag en eindafwerking voor langdurig resultaat." },
  { title: "Behang verwijderen", desc: "Oud behang vakkundig verwijderen inclusief kleeflaag verwijdering en wandvoorbereiding voor schilderen." },
  { title: "Onderhoud & periodiek werk", desc: "Periodiek schilderonderhoud voor VvE's en vastgoedbeheerders — alles gepland en uitgevoerd zonder overlast." },
];

const faqs = [
  { q: "Welke verf gebruiken jullie?", a: "Wij werken met A-merken als Sikkens, Dulux en Sigma. De keuze hangt af van het oppervlak en de toepassing — wij adviseren u welke verf het beste past bij uw situatie." },
  { q: "Hoe lang duurt schilderwerk?", a: "Een gemiddelde kamer duurt 1-2 dagen. Een complete woning 1-2 weken. Buiten schilderwerk is weersafhankelijk. Wij geven altijd een realistische planning vooraf." },
  { q: "Moet ik zelf de verf kiezen?", a: "Dat mag, maar het hoeft niet. Wij adviseren u over kleur en verfsoort op basis van uw wensen en de ondergrond. Op verzoek brengen wij ook kleurproeven aan." },
  { q: "Schilderen jullie ook buiten de werkuren?", a: "Voor bedrijfspanden werken wij indien gewenst in de avond of het weekend, zodat uw bedrijfsactiviteiten geen hinder ondervinden." },
  { q: "Wat kost schilderwerk per m²?", a: "Dit hangt sterk af van de ondergrond, het aantal lagen en het type verf. Gemiddeld ligt binnenschilderwerk tussen €5-€15 per m². Wij maken altijd een concrete offerte op maat." },
];

export default function SchilderwerkPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-zinc-950">

        {/* Hero */}
        <section className="relative min-h-[75vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1742900280861-32bed068938b?q=80&w=2670&auto=format&fit=crop" alt="Schilderwerk MKH Bouw Amsterdam" fill className="object-cover opacity-40" priority />
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
                <PaintBucket size={28} className="text-primary-300" />
              </div>
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary-400 px-4 py-1.5 rounded-full text-sm font-semibold border border-primary/20">
                <Star size={12} className="fill-primary-400" /> Schilderwerk
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-3xl">
              <span className="text-primary-400">Schilderwerk</span> Binnen & Buiten
            </h1>
            <p className="text-xl text-zinc-300 max-w-2xl mb-10 leading-relaxed">
              Vakkundig schilderwerk voor woningen en bedrijfspanden. Van kozijnen en deuren tot complete panden — strak, duurzaam en met de beste materialen.
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
                {[{ number: "15+", label: "Jaar ervaring" }, { number: "500+", label: "Projecten" }, { number: "A-merk", label: "Verfkwaliteit" }, { number: "24u", label: "Reactietijd" }].map((s) => (
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
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-primary/20">Vakkundig schilderwerk</span>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Mooi en duurzaam resultaat</h2>
                <p className="text-zinc-400 leading-relaxed mb-5">
                  MKH Bouw verzorgt alle schilderwerken voor woningen en bedrijfspanden, zowel binnen als buiten. De voorbereiding is bij ons net zo belangrijk als het schilderwerk zelf — dat is hoe wij een resultaat leveren dat jarenlang meegaat.
                </p>
                <p className="text-zinc-500 leading-relaxed mb-5">
                  Wij werken uitsluitend met A-merk verven (Sikkens, Dulux, Sigma) die weerbestendig, kleurbestendig en milieuvriendelijk zijn. Voor binnenwerk kiezen wij laaglucht-, laagReuk-opties zodat u snel weer van uw ruimte kunt genieten.
                </p>
                <p className="text-zinc-500 leading-relaxed mb-10">
                  Of het nu gaat om het schilderen van één kamer, een complete woning of een bedrijfspand van 5.000 m² — ons team pakt het professioneel aan en levert op tijd en binnen budget.
                </p>
                <ul className="space-y-3">
                  {[
                    "Hoogwaardige A-merk verf (Sikkens, Dulux, Sigma)",
                    "Zorgvuldige voorbereiding: schuren, plamuren, afplakken",
                    "Binnen en buiten schilderwerk",
                    "Kozijnen, deuren, muren, plafonds en gevels",
                    "Kleuradvies en kleurproeven op aanvraag",
                    "Nette werkwijze — dagelijks opgeruimd",
                    "Werken buiten kantooruren voor bedrijven",
                    "Garantie op het uitgevoerde schilderwerk",
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
                  { icon: Shield, title: "Duurzame verfkwaliteit", desc: "Wij gebruiken alleen A-merken met bewezen kwaliteit. De juiste verf voor elk oppervlak en elke toepassing." },
                  { icon: Users, title: "Ervaren schilders", desc: "Ons schildersteam heeft jarenlange ervaring in binnen- en buitenschilderwerk en werkt met precisie en aandacht voor detail." },
                  { icon: Clock, title: "Op tijd en binnen budget", desc: "Wij werken met duidelijke planningen. U weet van tevoren wat het kost en wanneer het klaar is." },
                  { icon: Star, title: "Kleuradvies inbegrepen", desc: "Weet u nog niet welke kleur? Wij adviseren u op basis van uw interieur en brengen op aanvraag kleurproeven aan." },
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
                <h2 className="text-3xl lg:text-4xl font-bold text-white">Zo werken wij</h2>
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
                <h2 className="text-3xl lg:text-4xl font-bold text-white">Onze schilderspecialisaties</h2>
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
                <h2 className="text-3xl lg:text-4xl font-bold text-white">Veelgestelde vragen over schilderwerk</h2>
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
                  { href: "/diensten/stucwerk", label: "Stucwerk & Gevelwerk" },
                  { href: "/diensten/behangen", label: "Behangen" },
                  { href: "/diensten/totaal-afbouw", label: "Totaal Afbouw" },
                  { href: "/diensten/timmerwerk", label: "Timmerwerk" },
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Schilderwerk laten uitvoeren?</h2>
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
