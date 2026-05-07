import type { Metadata } from "next";
import { CheckCircle, ArrowLeft, Phone, ArrowRight, Wrench, Star, Shield, Clock, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Timmerwerk & PVC Tegel | MKH Bouw Amsterdam",
  description: "Maatwerk timmerwerk voor deuren, kozijnen, trappen en kasten door MKH Bouw Amsterdam. Tevens specialist in PVC tegelvloeren. Op maat en vakkundig. Gratis offerte.",
  keywords: ["timmerman Amsterdam", "timmerwerk", "kozijnen plaatsen", "deuren vervangen", "PVC tegelvloer", "maatwerk kasten", "MKH Bouw"],
  alternates: { canonical: "https://mkhbouw.nl/diensten/timmerwerk" },
};

const steps = [
  { num: "01", title: "Opmeting & advies", desc: "Wij meten nauwkeurig op en adviseren over de beste materialen en constructiemethode voor uw situatie." },
  { num: "02", title: "Maatwerk fabricage", desc: "Elementen zoals kasten en treden worden op maat gezaagd en voorbereid — precies passend voor uw ruimte." },
  { num: "03", title: "Vakkundige plaatsing", desc: "Onze timmerlieden plaatsen alles waterpas, haaks en strak — inclusief afkitting en afwerking." },
  { num: "04", title: "Oplevering", desc: "Alle timmerwerkzaamheden worden samen met u doorgenomen. Alles zit goed en de ruimte is netjes opgeleverd." },
];

const specializations = [
  { title: "Deuren plaatsen & vervangen", desc: "Binnendeur, voordeur of sectionaalpoort — wij plaatsen en hangen nieuwe deuren compleet met kozijn, hang- en sluitwerk." },
  { title: "Kozijnen vervangen", desc: "Houten of kunststof kozijnen vervangen inclusief afdichting, kit en afwerking binnen en buiten. Energiebesparend en koudebrug-vrij." },
  { title: "Trappen & overzettreden", desc: "Nieuwe trap plaatsen, overzettreden leggen of een trapleuning vernieuwen. Wij werken veilig en op maat voor uw trapgat." },
  { title: "Maatwerk kasten & inbouwkasten", desc: "Inbouwkast, garderobekast of wandkast volledig op maat — inclusief schuifdeuren, legplanken en lade-indeling." },
  { title: "PVC tegelvloer plaatsen", desc: "PVC tegelvloer is waterbestendig, krasbestendig en heeft een realistische tegel- of houtlook. Ideaal voor keuken, badkamer, hal of kantoor." },
  { title: "Wandpanelen & lambrisering", desc: "Sierlijsten, lambrisering en wandpanelen voor een klassieke of moderne interieurbeleving — op maat gezaagd en aangebracht." },
];

const faqs = [
  { q: "Wat kost een nieuwe binnendeur inclusief plaatsing?", a: "De totale kosten voor een nieuwe binnendeur inclusief kozijn en plaatsing liggen doorgaans tussen €300-€800 afhankelijk van het type deur en kozijn. Wij maken altijd een offerte op maat." },
  { q: "Wat is het voordeel van een PVC tegelvloer?", a: "PVC tegelvloer is volledig waterbestendig, extreem duurzaam en makkelijk schoon te maken. Bovendien voelt het warmer aan dan echte tegels en is het eenvoudiger te leggen en te vervangen." },
  { q: "Kan een PVC tegelvloer op vloerverwarming?", a: "Ja, de meeste PVC tegelvloeren zijn geschikt voor gebruik op vloerverwarming. Wij adviseren u over de juiste variant en maximale watertemperatuur voor uw vloerverwarming." },
  { q: "Kunnen jullie ook kozijnen vervangen zonder schade aan het schilderwerk?", a: "Wij werken zorgvuldig en beschermen het omliggende schilderwerk en stucwerk. Na plaatsing kitten en schilderen wij de aansluitingen bij zodat het eindresultaat strak en afgewerkt is." },
  { q: "Leveren jullie ook het hout en de materialen?", a: "Ja, wij leveren alle benodigde materialen inclusief hout, plaatmateriaal, hang- en sluitwerk. U kunt ook zelf materialen aanleveren — wij passen de offerte hierop aan." },
];

export default function TimmerwerkPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-zinc-950">

        {/* Hero */}
        <section className="relative min-h-[75vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1547609434-b732edfee020?q=80&w=2670&auto=format&fit=crop" alt="Timmerwerk MKH Bouw Amsterdam" fill className="object-cover opacity-40" priority />
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
                <Wrench size={28} className="text-primary-300" />
              </div>
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary-400 px-4 py-1.5 rounded-full text-sm font-semibold border border-primary/20">
                <Star size={12} className="fill-primary-400" /> Timmerwerk & PVC
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-3xl">
              Timmerwerk & <span className="text-primary-400">PVC Tegel</span>
            </h1>
            <p className="text-xl text-zinc-300 max-w-2xl mb-10 leading-relaxed">
              Maatwerk timmerwerk voor deuren, kozijnen, trappen en kasten — plus specialist in PVC tegelvloeren. Vakkundig, op maat en strak afgewerkt.
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
                {[{ number: "15+", label: "Jaar ervaring" }, { number: "Op maat", label: "Altijd maatwerk" }, { number: "PVC", label: "Tegelvloer specialist" }, { number: "24u", label: "Reactietijd" }].map((s) => (
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
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-primary/20">Vakkundig timmerwerk</span>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Precisie in elk detail</h2>
                <p className="text-zinc-400 leading-relaxed mb-5">
                  MKH Bouw is uw timmerman voor alle houtwerk in en om uw woning of bedrijfspand. Van het plaatsen van deuren en kozijnen tot maatwerk kasten en trappen — wij werken precies, netjes en met oog voor detail.
                </p>
                <p className="text-zinc-500 leading-relaxed mb-5">
                  Naast traditioneel timmerwerk zijn wij ook specialist in PVC tegelvloeren — een moderne, duurzame vloerafwerking die eruitziet als echte tegels maar warmer aanvoelt en makkelijker te leggen is. Ideaal voor keuken, badkamer, hal of kantoor.
                </p>
                <p className="text-zinc-500 leading-relaxed mb-10">
                  Wij leveren en verwerken alle materialen. Van standaard bouwmarktproducten tot exclusief maatwerkhout — wij adviseren u wat het beste past bij uw budget en wensen.
                </p>
                <ul className="space-y-3">
                  {[
                    "Deuren en kozijnen plaatsen of vervangen",
                    "Trappen, overzettreden en balustrades",
                    "Maatwerk kasten en inbouwkasten",
                    "Wandpanelen, sierlijsten en lambrisering",
                    "PVC tegelvloer: waterbestendig en krasbestendig",
                    "Geschikt voor vloerverwarming",
                    "Alle materialen geleverd inclusief hang- en sluitwerk",
                    "Inclusief afkitting en strakke afwerking",
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
                  { icon: Shield, title: "Maatwerk kwaliteit", desc: "Alle houtwerk wordt op maat gezaagd en afgewerkt voor een perfecte passing — geen standaard oplossingen maar altijd op maat." },
                  { icon: Users, title: "Ervaren timmerlieden", desc: "Onze timmerlieden werken met precisie en vakmanschap. Van eenvoudige deurplaatsing tot complexe trapconstructies." },
                  { icon: Clock, title: "Schone oplevering", desc: "Na het timmerwerk ruimen wij zaagsel, verpakkingen en restmateriaal op. U ontvangt een schone, gebruiksklare ruimte." },
                  { icon: Star, title: "PVC tegel expertise", desc: "Wij zijn specialist in PVC tegelvloeren in alle hout- en steenlooks. Wij adviseren u over de beste variant voor uw ruimte." },
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
                <h2 className="text-3xl lg:text-4xl font-bold text-white">Van opmeting tot perfecte afwerking</h2>
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
                <h2 className="text-3xl lg:text-4xl font-bold text-white">Onze timmerspecialisaties</h2>
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
                <h2 className="text-3xl lg:text-4xl font-bold text-white">Veelgestelde vragen over timmerwerk</h2>
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
                  { href: "/diensten/laminaat", label: "Laminaat & PVC" },
                  { href: "/diensten/schilderwerk", label: "Schilderwerk" },
                  { href: "/diensten/totaal-afbouw", label: "Totaal Afbouw" },
                  { href: "/diensten/tegelen", label: "Tegelen" },
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Timmerwerk laten uitvoeren?</h2>
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
