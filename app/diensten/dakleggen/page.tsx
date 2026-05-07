import type { Metadata } from "next";
import { CheckCircle, ArrowLeft, Phone, ArrowRight, Home, Star, Shield, Clock, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dakleggen - Dakbedekking & Dakwerk | MKH Bouw Amsterdam",
  description: "Professioneel dakleggen door MKH Bouw Amsterdam. Plat dak, schuin dak, dakisolatie, goten en reparaties. Waterdicht gegarandeerd. 15+ jaar ervaring. Gratis offerte.",
  keywords: ["dakleggen Amsterdam", "dakbedekking", "dakdekker Amsterdam", "plat dak", "schuin dak", "dakisolatie", "MKH Bouw"],
  alternates: { canonical: "https://mkhbouw.nl/diensten/dakleggen" },
};

const steps = [
  { num: "01", title: "Dakinsectie & advies", desc: "Wij inspecteren uw dak en geven eerlijk advies — reparatie, gedeeltelijke vervanging of volledig nieuw dak." },
  { num: "02", title: "Offerte op maat", desc: "U ontvangt een gedetailleerde offerte inclusief materiaal, arbeidskosten en planning. Geen verborgen kosten." },
  { num: "03", title: "Veilig uitvoeren", desc: "Ons dakteam werkt met de juiste veiligheidsuitrusting en hoogwaardige dakbedekking materialen." },
  { num: "04", title: "Waterdichte oplevering", desc: "Wij leveren uw dak waterdicht op en geven garantie op de uitgevoerde werkzaamheden." },
];

const specializations = [
  { title: "Plat dak (bitumen)", desc: "Bitumen dakbedekking is de meest toegepaste oplossing voor platte daken — duurzaam, waterdicht en kostenefficiënt voor woningen en bedrijfspanden." },
  { title: "Plat dak (EPDM rubber)", desc: "EPDM is een rubber dakbedekking die 50+ jaar meegaat. Lichtgewicht, volledig naadloos en uitstekend bestand tegen temperatuurwisselingen." },
  { title: "Schuin dak (pannen)", desc: "Dakpannen verwijderen en vernieuwen, inclusief nokken, goten en onderdakfolie. Wij werken met alle gangbare pannentypes." },
  { title: "Dakisolatie", desc: "Isoleren van dak verlaagt uw energierekening aanzienlijk. Wij brengen de isolatie aan of adviseren de beste aanpak voor uw daksituatie." },
  { title: "Goten & hemelwaterafvoer", desc: "Nieuwe goten plaatsen, goten reinigen of herstellen. Aluminium, zink of kunststof — wij leveren en monteren alles." },
  { title: "Dakreparatie & lekkage", desc: "Heeft u een lekkend dak? Wij reageren snel, zoeken de oorzaak en lossen het permanent op — geen tijdelijke lapmiddelen." },
];

const faqs = [
  { q: "Wanneer moet ik mijn dak vervangen?", a: "Gemiddeld gaat een plat dak 20-30 jaar mee, een schuin pannendak 50+ jaar. Tekenen van veroudering zijn lekkages, barsten, bobbels of grote slijtageplekken. Wij inspecteren uw dak gratis." },
  { q: "Wat is het verschil tussen bitumen en EPDM?", a: "Bitumen is een bewezen materiaal dat 20-25 jaar meegaat en eenvoudig te repareren is. EPDM (rubber) gaat 50+ jaar mee, is naadloos en lichtgewicht maar duurder in aanschaf. Wij adviseren de beste keuze voor uw situatie." },
  { q: "Kan ik ook gedeeltelijk het dak laten vervangen?", a: "Ja, als de beschadiging beperkt is kan gedeeltelijke vervanging voldoende zijn. Wij beoordelen eerlijk of reparatie of volledig vernieuwen de beste oplossing is." },
  { q: "Hoe lang duurt een nieuw dak leggen?", a: "Een gemiddeld plat dak (30-50 m²) is in 1-3 dagen klaar. Een volledig schuin dak duurt langer afhankelijk van de omvang. Wij plannen de werkzaamheden zo in dat het huis beschermd blijft." },
  { q: "Geeft MKH Bouw garantie op dakwerk?", a: "Ja, wij geven garantie op onze dakwerkzaamheden. De garantieperiode hangt af van het gebruikte materiaal en type dakbedekking — wij bespreken dit altijd vooraf." },
];

export default function DakleggenPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-zinc-950">

        {/* Hero */}
        <section className="relative min-h-[75vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1635424824849-1b09bdcc55b1?q=80&w=2670&auto=format&fit=crop" alt="Dakleggen MKH Bouw Amsterdam" fill className="object-cover opacity-40" priority />
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
                <Home size={28} className="text-primary-300" />
              </div>
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary-400 px-4 py-1.5 rounded-full text-sm font-semibold border border-primary/20">
                <Star size={12} className="fill-primary-400" /> Dakwerk
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-3xl">
              Professioneel <span className="text-primary-400">Dakleggen</span>
            </h1>
            <p className="text-xl text-zinc-300 max-w-2xl mb-10 leading-relaxed">
              Nieuw dak leggen, repareren of isoleren — MKH Bouw verzorgt al uw dakwerkzaamheden veilig en waterdicht. Plat dak, schuin dak, goten en isolatie.
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
                {[{ number: "15+", label: "Jaar ervaring" }, { number: "10j", label: "Garantie" }, { number: "Alle", label: "Daktypen" }, { number: "24u", label: "Reactietijd" }].map((s) => (
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
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-primary/20">Betrouwbaar dakwerk</span>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Waterdicht en duurzaam</h2>
                <p className="text-zinc-400 leading-relaxed mb-5">
                  Een goed dak is de basis van elk gebouw. MKH Bouw verzorgt alle soorten dakwerkzaamheden — van een kleine lekkagereparatie tot het volledig vernieuwen van een plat of schuin dak. Altijd veilig, altijd waterdicht.
                </p>
                <p className="text-zinc-500 leading-relaxed mb-5">
                  Wij werken met hoogwaardige dakbedekkingsmaterialen van bewezen kwaliteit: bitumen, EPDM rubber en traditionele dakpannen. De keuze hangt af van uw daksituatie, budget en gewenste levensduur — wij adviseren u eerlijk.
                </p>
                <p className="text-zinc-500 leading-relaxed mb-10">
                  Naast dakbedekking verzorgen wij ook dakisolatie, goten, zinken elementen en loodwerk. Alles onder één dak — zonder gedoe met meerdere aannemers.
                </p>
                <ul className="space-y-3">
                  {[
                    "Plat dak: bitumen en EPDM rubber dakbedekking",
                    "Schuin dak: dakpannen, leien en dakshingles",
                    "Dakisolatie voor energiebesparing",
                    "Goten en hemelwaterafvoer vervangen of reinigen",
                    "Snelle lekkagereparatie — ook spoedreparaties",
                    "Veilig werken met goedgekeurde steigers",
                    "Gratis dakinspectie en eerlijk advies",
                    "Garantie op alle dakwerkzaamheden",
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
                  { icon: Shield, title: "Waterdichte garantie", desc: "Wij leveren uw dak altijd waterdicht op. Heeft u daarna toch een probleem? Wij lossen het op binnen de garantieperiode." },
                  { icon: Users, title: "Gecertificeerde dakdekkers", desc: "Ons dakteam heeft de juiste certificeringen en werkt altijd met goedgekeurde veiligheidsuitrusting op hoogte." },
                  { icon: Clock, title: "Snel en efficiënt", desc: "Een lekkend dak kan snel grote schade veroorzaken. Wij reageren snel op spoedmeldingen en plannen dakwerk zo snel mogelijk in." },
                  { icon: Star, title: "Eerlijk dakadvies", desc: "Geen onnodige vervanging als reparatie volstaat. Wij geven u eerlijk advies over de beste en meest kostenefficiënte oplossing." },
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
                <h2 className="text-3xl lg:text-4xl font-bold text-white">Van inspectie tot waterdichte oplevering</h2>
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
                <h2 className="text-3xl lg:text-4xl font-bold text-white">Alle soorten dakwerk</h2>
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
                <h2 className="text-3xl lg:text-4xl font-bold text-white">Veelgestelde vragen over dakleggen</h2>
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
                  { href: "/diensten/totaal-afbouw", label: "Totaal Afbouw" },
                  { href: "/diensten/electra", label: "Electra" },
                  { href: "/diensten/loodgieterswerk", label: "Loodgieterswerk" },
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Dak laten leggen of repareren?</h2>
            <p className="text-zinc-300 max-w-xl mx-auto mb-8 leading-relaxed">Vraag vandaag nog een gratis dakinspectie en offerte aan. Wij reageren binnen 24 uur.</p>
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
