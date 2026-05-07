import type { Metadata } from "next";
import { CheckCircle, ArrowLeft, Phone, ArrowRight, Hammer, Star, Shield, Clock, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Stucwerk Binnen & Gevelstucwerk Buiten | MKH Bouw Amsterdam",
  description: "Professioneel stucwerk binnen en gevelstucwerk buiten door MKH Bouw Amsterdam. Glad stucwerk, sierpleister, betonlook en gevelwerk. 15+ jaar ervaring. Gratis offerte.",
  keywords: ["stucwerk Amsterdam", "stukadoor Amsterdam", "gevelstucwerk", "sierpleister", "glad stucwerk sausklaar", "betonlook stucwerk", "MKH Bouw"],
  alternates: { canonical: "https://mkhbouw.nl/diensten/stucwerk" },
};

const steps = [
  { num: "01", title: "Inspectie & offerte", desc: "Wij beoordelen de ondergrond, bespreken uw wensen en maken een gedetailleerde offerte — gratis en vrijblijvend." },
  { num: "02", title: "Voorbereiding", desc: "De wand of gevel wordt grondig gereinigd, eventuele beschadigingen gerepareerd en indien nodig voorbehandeld." },
  { num: "03", title: "Aanbrengen stucwerk", desc: "Onze stukadoors brengen het stucwerk laag voor laag aan — strak, egaal en met oog voor detail." },
  { num: "04", title: "Afwerking & oplevering", desc: "Na het drogen controleren wij samen het resultaat. U ontvangt een sausklare, behangklare of decoratieve wand." },
];

const specializations = [
  { title: "Glad stucwerk (sausklaar)", desc: "De meest gevraagde afwerking — een strak, egaal oppervlak dat direct klaar is om te schilderen of behangen. Ideaal voor nieuwbouw en renovatie." },
  { title: "Sierpleister", desc: "Decoratieve stucafwerking in tientallen structuren en kleuren. Van korrelig tot glad, van ingetogen tot opvallend — volledig op maat." },
  { title: "Betonlook stucwerk", desc: "Industrieel en tijdloos effect. Betonlook stucwerk geeft elke ruimte een moderne, exclusieve uitstraling zonder beton te gebruiken." },
  { title: "Gevelstucwerk (buiten)", desc: "Weerbestendige, waterdichte gevelstuc voor een frisse en duurzame buitengevel. Beschermt tegen vocht, wind en temperatuurwisselingen." },
  { title: "Spackspuiten", desc: "Snelle en efficiënte wandafwerking via spuitmachine. Ideaal voor grote oppervlakten zoals kantoren, scholen en appartementen." },
  { title: "Schade & reparatie", desc: "Scheuren, beschadigingen of losgelaten stuc repareren wij nauwkeurig zodat de wand of gevel er als nieuw uitziet." },
];

const faqs = [
  { q: "Wat kost stucwerk per m²?", a: "De prijs hangt af van het type stucwerk, de ondergrond en de omvang. Glad stucwerk kost gemiddeld €15-€30 per m², sierpleister en decoratieve afwerkingen zijn duurder. Wij maken altijd een offerte op maat." },
  { q: "Hoe lang duurt stucwerk drogen?", a: "Stucwerk droogt gemiddeld 24-48 uur voordat u eroverheen kunt schilderen. Bij hoge luchtvochtigheid of dikke lagen kan dit langer duren. Wij adviseren u over de exacte droogtijd." },
  { q: "Kan stucwerk aangebracht worden op elk oppervlak?", a: "Op de meeste ondergronden kan stucwerk aangebracht worden. Sommige oppervlakken vereisen een hechtprimer. Wij inspecteren de ondergrond vooraf en adviseren de beste aanpak." },
  { q: "Wat is het verschil tussen stucwerk en spackspuiten?", a: "Traditioneel stucwerk wordt met de hand aangebracht en is ideaal voor kleine tot middelgrote ruimten. Spackspuiten gaat sneller via een spuitmachine en is kostenefficiënter voor grote oppervlakten." },
  { q: "Werken jullie ook buiten Amsterdam?", a: "Ja, MKH Bouw is actief door heel Nederland. Wij voeren stucwerkprojecten uit in Amsterdam en ver daarbuiten — altijd met dezelfde kwaliteitsstandaard." },
];

export default function StucwerkPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-zinc-950">

        {/* Hero */}
        <section className="relative min-h-[75vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1761986757577-140af8859587?q=80&w=2670&auto=format&fit=crop" alt="Stucwerk MKH Bouw Amsterdam" fill className="object-cover opacity-40" priority />
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
                <Hammer size={28} className="text-primary-300" />
              </div>
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary-400 px-4 py-1.5 rounded-full text-sm font-semibold border border-primary/20">
                <Star size={12} className="fill-primary-400" /> Stucwerk & Gevelwerk
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-3xl">
              Stucwerk Binnen &{" "}<span className="text-primary-400">Gevelwerk Buiten</span>
            </h1>
            <p className="text-xl text-zinc-300 max-w-2xl mb-10 leading-relaxed">
              Van glad sausklaar stucwerk tot decoratieve sierpleister en weerbestendig gevelstucwerk — vakkundig aangebracht door ervaren stukadoors van MKH Bouw.
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
                {[{ number: "15+", label: "Jaar stucervaring" }, { number: "500+", label: "Projecten" }, { number: "6", label: "Technieken" }, { number: "24u", label: "Reactietijd" }].map((s) => (
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
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-primary/20">Vakkundig stucwerk</span>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Strak, duurzaam en op maat</h2>
                <p className="text-zinc-400 leading-relaxed mb-5">
                  MKH Bouw is specialist in alle soorten stucwerk voor wanden, plafonds en gevels. Of het nu gaat om glad sausklaar stucwerk in een nieuwbouwwoning of decoratieve sierpleister voor een luxe interieur — onze stukadoors leveren topkwaliteit.
                </p>
                <p className="text-zinc-500 leading-relaxed mb-5">
                  Voor buitenwerk verzorgen wij gevelstucwerk dat bestand is tegen het Nederlandse klimaat. Weerbestendig, waterdicht en jarenlang mooi van uitstraling — geen afbladderende verf of vochtproblemen.
                </p>
                <p className="text-zinc-500 leading-relaxed mb-10">
                  Wij werken altijd met beschermende folie over uw vloeren en meubels. Na het stucwerk laten wij de ruimte schoon achter — klaar voor de volgende fase van uw verbouwing.
                </p>
                <h3 className="text-xl font-bold text-white mb-5">Voordelen stucwerk MKH Bouw</h3>
                <ul className="space-y-3">
                  {[
                    "Strakke gladde afwerking, direct saus- of behangklaar",
                    "Decoratieve technieken: sierpleister, betonlook, spachtelputz",
                    "Gevelstucwerk buiten: weerbestendig en duurzaam",
                    "Zowel nieuwbouw als renovatie en herstelwerk",
                    "Schadevrij werken met beschermende folie",
                    "Vakkundig stucadoorsteam met 15+ jaar ervaring",
                    "Droogtijdadvies en nabehandeling inbegrepen",
                    "Geschikt voor particulier en zakelijk gebruik",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-primary-400 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-400 text-sm">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-5">
                <h3 className="text-xl font-bold text-white mb-2">Onze garanties</h3>
                {[
                  { icon: Shield, title: "Kwaliteitsgarantie", desc: "Wij staan achter ons stucwerk. Mochten er na oplevering problemen zijn, lossen wij dit kosteloos op." },
                  { icon: Users, title: "Gecertificeerde stukadoors", desc: "Ons team bestaat uit vakkundige stukadoors met jarenlange ervaring in alle stucwerktechnieken." },
                  { icon: Clock, title: "Tijdige oplevering", desc: "Wij werken volgens een duidelijke planning en leveren op de afgesproken datum op." },
                  { icon: Star, title: "Schone oplevering", desc: "Na het stucwerk ruimen wij alle materialen en beschermfolie op. U treft een schone ruimte aan." },
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
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 border border-primary/20">Onze Werkwijze</span>
                <h2 className="text-3xl lg:text-4xl font-bold text-white">Van aanvraag tot oplevering</h2>
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
                <h2 className="text-3xl lg:text-4xl font-bold text-white">Alle stucwerktechnieken</h2>
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
                <h2 className="text-3xl lg:text-4xl font-bold text-white">Veelgestelde vragen over stucwerk</h2>
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
                  { href: "/diensten/schilderwerk", label: "Schilderwerk" },
                  { href: "/diensten/behangen", label: "Behangen" },
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Stucwerk laten uitvoeren?</h2>
            <p className="text-zinc-300 max-w-xl mx-auto mb-8 leading-relaxed">Vraag vandaag nog een gratis en vrijblijvende offerte aan. Onze stukadoors reageren binnen 24 uur.</p>
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
