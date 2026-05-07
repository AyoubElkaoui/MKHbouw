import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Zap, CheckCircle, X, Phone, ArrowRight, Clock, Target, Star, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Spackspuiten vs Traditioneel Stucwerk: Wat is het Verschil? | MKH Bouw",
  description: "Wat is het verschil tussen spackspuiten en traditioneel stucwerk? Ontdek de voor- en nadelen en welke techniek het beste bij jouw project past.",
  keywords: ["spackspuiten vs traditioneel", "verschil spackspuiten stucwerk", "wat is spackspuiten", "welk stucwerk kiezen", "stucwerk technieken vergelijking"],
  alternates: { canonical: "https://mkhbouw.nl/blog/verschil-spackspuiten-traditioneel" },
};

export default function VerschilSpackspuitenTraditioneel() {
  return (
    <>
      <Navigation />
      <main className="bg-zinc-950">

        {/* Hero */}
        <section className="relative min-h-[55vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1761986757577-140af8859587?q=80&w=2670&auto=format&fit=crop" alt="Spackspuiten vs traditioneel stucwerk" fill className="object-cover opacity-35" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/75 to-zinc-950/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
          </div>
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32">
            <Link href="/blog" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white mb-8 transition-colors text-sm">
              <ArrowLeft size={16} /> Terug naar blog
            </Link>
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary-300 px-5 py-2.5 rounded-full text-sm font-medium border border-primary/20 mb-6">
                <Star size={14} className="fill-primary-400 text-primary-400" /> Techniek vergelijking 2026
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Spackspuiten vs <span className="text-primary-400">Traditioneel Stucwerk</span>
              </h1>
              <p className="text-lg text-zinc-300 mb-8 leading-relaxed max-w-2xl">
                Twee beproefde technieken voor wandafwerking — maar welke past het beste bij jouw project? Wij leggen de voor- en nadelen eerlijk uit.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-primary/25 hover:-translate-y-0.5">
                <Phone size={18} /> Vraag gratis advies aan
              </Link>
            </div>
          </div>
        </section>

        {/* Uitleg */}
        <section className="py-20 bg-zinc-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary-400 px-5 py-2 rounded-full text-sm font-semibold mb-4 border border-primary/20">De twee technieken</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Wat is het verschil?</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-zinc-950/50 border border-white/5 hover:border-primary/30 rounded-2xl p-8 transition-all group">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 group-hover:bg-primary group-hover:border-primary transition-all">
                      <Zap size={22} className="text-primary-400 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary-300 transition-colors">Spackspuiten</h3>
                  </div>
                  <p className="text-zinc-400 mb-6 leading-relaxed text-sm">Moderne techniek waarbij een dunne laag spachtelpoeder machinaal via een spuitmachine wordt aangebracht op wanden en plafonds. Het resultaat is een egaal, glad oppervlak dat direct sausklaar is.</p>
                  <ul className="space-y-2">
                    {["Machinaal aangebracht — snel en efficiënt", "Perfect egaal oppervlak", "Direct sausklaar na drogen", "Ideaal voor grote oppervlakten", "Minder stofontwikkeling dan schuurwerk"].map(item => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle className="text-primary-400 flex-shrink-0 mt-0.5" size={16} />
                        <span className="text-zinc-400 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-zinc-950/50 border border-white/5 hover:border-primary/30 rounded-2xl p-8 transition-all group">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 group-hover:bg-primary group-hover:border-primary transition-all">
                      <Target size={22} className="text-primary-400 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary-300 transition-colors">Traditioneel Stucwerk</h3>
                  </div>
                  <p className="text-zinc-400 mb-6 leading-relaxed text-sm">Ambachtelijk stucwerk dat met de hand wordt aangebracht door een ervaren stukadoor. Geschikt voor renovaties, decoratieve afwerkingen en ongelijkmatige ondergronden.</p>
                  <ul className="space-y-2">
                    {["Handmatig aangebracht — maximale controle", "Geschikt voor elke ondergrond", "Decoratieve technieken mogelijk", "Ideaal voor renovatie en herstelwerk", "Sierpleister en betonlook mogelijk"].map(item => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle className="text-primary-400 flex-shrink-0 mt-0.5" size={16} />
                        <span className="text-zinc-400 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Voor- en nadelen vergelijking */}
        <section className="py-20 bg-zinc-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary-400 px-5 py-2 rounded-full text-sm font-semibold mb-4 border border-primary/20">Vergelijking</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Voor- en nadelen op een rij</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Spackspuiten */}
                <div className="bg-zinc-900 border border-white/5 rounded-2xl p-7">
                  <h3 className="text-xl font-bold text-white mb-6 pb-4 border-b border-white/5">Spackspuiten</h3>
                  <div className="mb-6">
                    <p className="text-primary-400 font-semibold text-sm mb-3 uppercase tracking-wide">Voordelen</p>
                    <ul className="space-y-2">
                      {["Snel uitgevoerd — ideaal bij tijdsdruk", "Kostenefficiënt bij grote oppervlakten", "Consistent egaal resultaat", "Minder vochtig dan traditioneel stuc", "Weinig overlast en stof"].map(item => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle className="text-primary-400 flex-shrink-0 mt-0.5" size={16} />
                          <span className="text-zinc-400 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-zinc-500 font-semibold text-sm mb-3 uppercase tracking-wide">Nadelen</p>
                    <ul className="space-y-2">
                      {["Minder geschikt voor zeer ongelijke wanden", "Decoratieve technieken niet mogelijk", "Vereist goede ondergrond"].map(item => (
                        <li key={item} className="flex items-start gap-2">
                          <X className="text-zinc-600 flex-shrink-0 mt-0.5" size={16} />
                          <span className="text-zinc-500 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Traditioneel */}
                <div className="bg-zinc-900 border border-white/5 rounded-2xl p-7">
                  <h3 className="text-xl font-bold text-white mb-6 pb-4 border-b border-white/5">Traditioneel Stucwerk</h3>
                  <div className="mb-6">
                    <p className="text-primary-400 font-semibold text-sm mb-3 uppercase tracking-wide">Voordelen</p>
                    <ul className="space-y-2">
                      {["Geschikt voor elke ondergrond en situatie", "Decoratieve afwerkingen mogelijk", "Ideaal voor renovatie en oude woningen", "Maximale controle over eindresultaat", "Sierpleister en betonlook mogelijk"].map(item => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle className="text-primary-400 flex-shrink-0 mt-0.5" size={16} />
                          <span className="text-zinc-400 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-zinc-500 font-semibold text-sm mb-3 uppercase tracking-wide">Nadelen</p>
                    <ul className="space-y-2">
                      {["Meer tijdsintensief dan spackspuiten", "Langere droogtijd nodig", "Hogere arbeidskosten bij grote projecten"].map(item => (
                        <li key={item} className="flex items-start gap-2">
                          <X className="text-zinc-600 flex-shrink-0 mt-0.5" size={16} />
                          <span className="text-zinc-500 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wanneer kiezen */}
        <section className="py-20 bg-zinc-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary-400 px-5 py-2 rounded-full text-sm font-semibold mb-4 border border-primary/20">Advies</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Wanneer kies je welke techniek?</h2>
              </div>
              <div className="space-y-4">
                {[
                  { icon: Zap, title: "Kies spackspuiten als...", items: ["Je een nieuwbouwwoning of nieuw appartement hebt", "Je grote oppervlakten snel en betaalbaar wilt afwerken", "De ondergrond vlak en goed is", "Je weinig overlast wilt tijdens de werkzaamheden"] },
                  { icon: Target, title: "Kies traditioneel stucwerk als...", items: ["Je een renovatie of verbouwing doet aan een oudere woning", "Je decoratieve afwerkingen wilt zoals sierpleister of betonlook", "De ondergrond ongelijk of beschadigd is", "Je specifieke eisen hebt aan de eindafwerking"] },
                ].map((item) => (
                  <div key={item.title} className="bg-zinc-950/50 border border-white/5 hover:border-primary/20 rounded-2xl p-7 transition-all group">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-primary/20 group-hover:bg-primary group-hover:border-primary transition-all">
                        <item.icon size={20} className="text-primary-400 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary-300 transition-colors">{item.title}</h3>
                        <ul className="space-y-2">
                          {item.items.map(i => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle className="text-primary-400 flex-shrink-0 mt-0.5" size={15} />
                              <span className="text-zinc-400 text-sm">{i}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tijdsvergelijking */}
        <section className="py-20 bg-zinc-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary-400 px-5 py-2 rounded-full text-sm font-semibold mb-4 border border-primary/20">Planning</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Tijdsduur vergelijking</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: Clock, title: "Spackspuiten — sneller", items: ["Woonkamer (40 m²): 1 dag", "Complete woning: 2-3 dagen", "Droogtijd: 24-48 uur", "Direct daarna schilderbaar"] },
                  { icon: Clock, title: "Traditioneel — meer tijd", items: ["Woonkamer (40 m²): 1-2 dagen", "Complete woning: 3-5 dagen", "Droogtijd: 48-72 uur", "Meerdere lagen mogelijk"] },
                ].map((item) => (
                  <div key={item.title} className="bg-zinc-900 border border-white/5 hover:border-primary/20 rounded-2xl p-7 transition-all group">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
                        <item.icon size={18} className="text-primary-400" />
                      </div>
                      <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {item.items.map(i => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="text-primary-400 flex-shrink-0 mt-0.5" size={15} />
                          <span className="text-zinc-400 text-sm">{i}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-zinc-900" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Welke techniek past bij jouw project?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">Wij adviseren u eerlijk en gratis over de beste keuze voor uw situatie. Neem contact op voor een vrijblijvend gesprek.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-primary-800 px-8 py-4 rounded-xl font-bold hover:bg-primary-50 transition-all shadow-xl shadow-black/20 hover:-translate-y-0.5">
                Gratis advies aanvragen <ArrowRight size={18} />
              </Link>
              <a href="tel:+31684794108" className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all">
                <Phone size={18} /> Direct bellen
              </a>
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="py-16 bg-zinc-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8">Lees ook</h2>
              <div className="grid md:grid-cols-2 gap-5">
                {[
                  { href: "/blog/wat-kost-stucwerk", title: "Wat kost stucwerk in 2026?", desc: "Ontdek welke factoren de prijs van stucwerk bepalen." },
                  { href: "/diensten/stucwerk", title: "Onze stucwerkdiensten", desc: "Bekijk alle soorten stucwerk die wij aanbieden." },
                ].map((a) => (
                  <Link key={a.href} href={a.href} className="group bg-zinc-950/50 border border-white/5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 p-6 rounded-2xl transition-all block hover:-translate-y-0.5">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">{a.title}</h3>
                    <p className="text-zinc-500 mb-4 text-sm leading-relaxed">{a.desc}</p>
                    <span className="inline-flex items-center gap-2 text-primary-400 font-semibold text-sm group-hover:gap-3 transition-all">Lees meer <ArrowRight size={16} /></span>
                  </Link>
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
