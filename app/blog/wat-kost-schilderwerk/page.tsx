import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle, Calculator, AlertCircle, Phone, ArrowRight, Home, TrendingUp, ArrowLeft, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Wat Kost Schilderwerk in 2026? | MKH Bouw Amsterdam",
  description: "Benieuwd naar de kosten van schilderwerk in 2026? Ontdek welke factoren de prijs bepalen en vraag een vrijblijvende offerte aan bij MKH Bouw.",
  keywords: ["wat kost schilderwerk", "schilderwerk prijs", "schilder kosten 2026", "offerte schilderwerk", "schilder tarief"],
  alternates: { canonical: "https://mkhbouw.nl/blog/wat-kost-schilderwerk" },
};

export default function WatKostSchilderwerk() {
  return (
    <>
      <Navigation />
      <main className="bg-zinc-950">

        {/* Hero */}
        <section className="relative min-h-[55vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1742900280861-32bed068938b?q=80&w=2670&auto=format&fit=crop" alt="Schilderwerk kosten 2026" fill className="object-cover opacity-35" priority />
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
                <Star size={14} className="fill-primary-400 text-primary-400" /> Prijsgids 2026
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Wat kost schilderwerk <span className="text-primary-400">in 2026?</span>
              </h1>
              <p className="text-lg text-zinc-300 mb-8 leading-relaxed max-w-2xl">
                De prijs van schilderwerk hangt af van vele factoren: oppervlakte, type verf, voorbereiding en de staat van het houtwerk. In deze gids leggen we alles uit.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-primary/25 hover:-translate-y-0.5">
                <Phone size={18} /> Vraag vrijblijvende offerte aan
              </Link>
            </div>
          </div>
        </section>

        {/* Info banner */}
        <section className="py-12 bg-zinc-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-primary/10 border border-primary/20 p-8 rounded-2xl">
                <p className="text-white font-semibold mb-2 text-lg">Belangrijk om te weten</p>
                <p className="text-zinc-400 mb-5 leading-relaxed">Elke schilderklus is uniek. De prijs hangt af van het type werk (binnen/buiten), het aantal verflagen, de staat van het houtwerk, hoogte en bereikbaarheid. Wij werken altijd met projectgebonden offertes op maat.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-all shadow-lg shadow-primary/25 text-sm">
                  <Phone size={16} /> Vraag vrijblijvende offerte aan
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Types */}
        <section className="py-20 bg-zinc-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary-400 px-5 py-2 rounded-full text-sm font-semibold mb-4 border border-primary/20">Soorten schilderwerk</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Welke soorten schilderwerk zijn er?</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-7">
                {[
                  { title: "Binnenschilderwerk", desc: "Muren, plafonds, deuren en kozijnen in huis schilderen. Meestal minder complex dan buitenwerk.", items: ["Wanden en plafonds", "Deuren en kozijnen", "Plinten en lijstwerk", "Radiatoren"], note: "Ideaal voor: renovatie, opfrissen, nieuwe uitstraling", href: "/diensten/schilderwerk" },
                  { title: "Buitenschilderwerk", desc: "Bescherming en onderhoud van buitenkozijnen, deuren, gevels en houtwerk.", items: ["Kozijnen en ramen", "Deuren en dorpels", "Gevels en dakgoten", "Schuttingen en tuinhuizen"], note: "Ideaal voor: onderhoud, bescherming, waardebehoud", href: "/diensten/schilderwerk" },
                  { title: "Specialistisch werk", desc: "Verfijnd schilderwerk zoals spuitwerk, lakwerk en decoratieve technieken.", items: ["Spuitwerk voor deuren", "Lakwerk hoogglans", "Decoratieve technieken", "Restauratie oud houtwerk"], note: "Ideaal voor: luxe afwerking, monumenten, high-end projecten", href: "/contact" },
                ].map((card, i) => (
                  <div key={card.title} className="bg-zinc-900 p-7 rounded-2xl border border-white/5 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all hover:-translate-y-1 group">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors">{card.title}</h3>
                    <p className="text-zinc-400 mb-5 text-sm leading-relaxed">{card.desc}</p>
                    <ul className="space-y-2 mb-5">
                      {card.items.map(item => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle className="text-primary-400 flex-shrink-0 mt-0.5" size={16} />
                          <span className="text-zinc-400 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-zinc-600 mb-4">{card.note}</p>
                    <Link href={card.href} className="inline-flex items-center gap-2 text-primary-400 font-semibold hover:gap-3 transition-all text-sm">
                      Meer informatie <ArrowRight size={16} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Factoren */}
        <section className="py-20 bg-zinc-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary-400 px-5 py-2 rounded-full text-sm font-semibold mb-4 border border-primary/20">Prijsfactoren</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Welke factoren bepalen de prijs?</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: Home, title: "Oppervlakte en aantal ruimtes", body: "Hoe meer m² we kunnen schilderen, hoe efficiënter we werken. Bij grotere projecten kunnen we schaalvoordelen doorberekenen.", tip: "Tip: laat meerdere kamers in één keer doen voor het beste tarief" },
                  { icon: AlertCircle, title: "Staat van het houtwerk", body: "Rot hout, loszittende verf en scheuren moeten eerst gerepareerd worden. Hoe slechter de staat, hoe meer voorbereidend werk nodig is.", tip: "Goed onderhouden houtwerk bespaart uiteindelijk geld" },
                  { icon: TrendingUp, title: "Type verf en aantal lagen", body: "Kwaliteitsverf kost meer maar dekt beter en gaat langer mee. Het aantal lagen hangt af van het kleurverschil en de ondergrond.", tip: "Wij adviseren altijd de beste verf voor uw situatie" },
                  { icon: Calculator, title: "Hoogte en bereikbaarheid", body: "Hoge plafonds, trappenhuizen en buitenwerk op hoogte vragen extra materieel zoals steigers of hoogwerkers.", tip: "Moeilijk bereikbaar werk kost meer tijd en materieel" },
                ].map((item) => (
                  <div key={item.title} className="bg-zinc-950/50 p-7 rounded-2xl border border-white/5 hover:border-primary/20 hover:shadow-lg transition-all group">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-primary/20 group-hover:bg-primary group-hover:border-primary transition-all">
                        <item.icon className="text-primary-400 group-hover:text-white transition-colors" size={20} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-zinc-400 mb-3 text-sm leading-relaxed">{item.body}</p>
                        <p className="text-xs text-zinc-600 italic">{item.tip}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Extra werkzaamheden */}
        <section className="py-20 bg-zinc-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary-400 px-5 py-2 rounded-full text-sm font-semibold mb-4 border border-primary/20">Extra services</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Wat zit er nog meer bij?</h2>
              </div>
              <div className="bg-zinc-900 border border-white/5 p-8 rounded-2xl">
                <p className="text-zinc-400 mb-6 leading-relaxed">Naast het schilderen zelf zijn er vaak extra werkzaamheden nodig. Deze nemen we mee in de offerte:</p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold text-white mb-4">Voorbereidend werk</h3>
                    <ul className="space-y-3">
                      {["Oude verf afkrabben", "Schuren van houtwerk", "Gaten en scheuren repareren", "Afdekken en afplakken", "Grondverf aanbrengen"].map(item => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle className="text-primary-400 flex-shrink-0 mt-0.5" size={16} />
                          <span className="text-zinc-400 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-4">Extra services</h3>
                    <ul className="space-y-3">
                      {["Verwijderen behang", "Reparatie rot hout", "Kitwerk en afwerking", "Opruimen en afvoer", "Kleuradvies"].map(item => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle className="text-primary-400 flex-shrink-0 mt-0.5" size={16} />
                          <span className="text-zinc-400 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bespaartips */}
        <section className="py-20 bg-zinc-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary-400 px-5 py-2 rounded-full text-sm font-semibold mb-4 border border-primary/20">Bespaartips</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Slimme tips om kosten te besparen</h2>
              </div>
              <div className="space-y-4">
                {[
                  { num: "1", title: "Regelmatig onderhoud voorkomt groot onderhoud", desc: "Buitenwerk elke 5-7 jaar overschilderen bespaart veel geld. Wacht niet tot het hout rot is." },
                  { num: "2", title: "Voorbereiding zelf doen", desc: "Meubels verhuizen, oude spijkers verwijderen en afplakken kun je zelf doen. Dit scheelt arbeidsuren." },
                  { num: "3", title: "Meerdere werkzaamheden combineren", desc: "Laat schilderwerk combineren met stucwerk of andere werkzaamheden voor een beter totaaltarief." },
                  { num: "4", title: "Kies het juiste seizoen", desc: "Buiten het hoogseizoen (voorjaar/zomer) hebben we soms meer flexibiliteit in planning en tarieven." },
                ].map((tip) => (
                  <div key={tip.num} className="bg-zinc-950/50 border border-white/5 hover:border-primary/20 p-6 rounded-2xl transition-all group">
                    <div className="flex items-start gap-4">
                      <span className="text-3xl font-black text-primary/20 leading-none flex-shrink-0">{tip.num}</span>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">{tip.title}</h3>
                        <p className="text-zinc-500 text-sm leading-relaxed">{tip.desc}</p>
                      </div>
                    </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Klaar voor een offerte op maat?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">Vertel ons over je schilderproject en ontvang binnen 24 uur een vrijblijvende offerte.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-primary-800 px-8 py-4 rounded-xl font-bold hover:bg-primary-50 transition-all shadow-xl shadow-black/20 hover:-translate-y-0.5">
                <Calculator size={18} /> Offerte aanvragen
              </Link>
              <a href="tel:+31684794108" className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all">
                <Phone size={18} /> Direct bellen
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-white/60 text-sm">
              {["Vrijblijvend", "Binnen 24 uur reactie", "Gratis advies"].map(t => (
                <span key={t} className="flex items-center gap-2"><CheckCircle size={14} className="text-primary-300" /> {t}</span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-zinc-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary-400 px-5 py-2 rounded-full text-sm font-semibold mb-4 border border-primary/20">FAQ</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Veelgestelde vragen over schilderwerk</h2>
              </div>
              <div className="space-y-4">
                {[
                  { q: "Waarom kan ik geen vaste prijs per m² krijgen?", a: "Schilderwerk is maatwerk. De staat van het houtwerk, het type verf, het aantal lagen en de bereikbaarheid maken allemaal verschil. Daarom kijken we eerst naar jouw specifieke situatie." },
                  { q: "Hoe lang duurt gemiddeld een schilderklus?", a: "Een gemiddelde woonkamer is in 1-2 dagen klaar. Een heel huis binnen schilderen duurt meestal 3-7 dagen, afhankelijk van de grootte en het voorbereidend werk." },
                  { q: "Leveren jullie de verf of moet ik dat zelf doen?", a: "Wij verzorgen alle materialen inclusief verf. We werken met kwaliteitsmerken als Sikkens en Dulux. Natuurlijk kunnen we ook met door jou geleverde verf werken." },
                  { q: "Kan ik tijdens het schilderen in huis blijven?", a: "Ja, dat kan. We werken per ruimte en zorgen dat de overlast beperkt blijft. Bij buitenwerk kun je gewoon thuis blijven." },
                  { q: "Krijg ik garantie op het schilderwerk?", a: "Ja, we geven garantie op ons werk. De duur hangt af van het type werk en de omstandigheden. Dit staat altijd duidelijk in de offerte vermeld." },
                  { q: "Wanneer is het beste seizoen voor buitenschilderwerk?", a: "Het liefst in droge periodes tussen maart en oktober. Met moderne verven kunnen we ook buiten het seizoen werken, als het maar droog en niet te koud is." },
                ].map((faq, i) => (
                  <div key={i} className="bg-zinc-950/50 border border-white/5 hover:border-primary/20 p-6 rounded-2xl transition-all group">
                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-primary-300 transition-colors flex items-start gap-3">
                      <span className="text-primary-400 font-black flex-shrink-0">Q.</span>{faq.q}
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed pl-6">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="py-16 bg-zinc-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8">Lees ook</h2>
              <div className="grid md:grid-cols-2 gap-5">
                {[
                  { href: "/blog/wat-kost-stucwerk", title: "Wat kost stucwerk in 2026?", desc: "Benieuwd naar de kosten van stucwerk? Ontdek welke factoren de prijs bepalen." },
                  { href: "/diensten/schilderwerk", title: "Onze schilderwerk diensten", desc: "Ontdek alle mogelijkheden voor binnen- en buitenschilderwerk bij MKH Bouw." },
                ].map((a) => (
                  <Link key={a.href} href={a.href} className="group bg-zinc-900 border border-white/5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 p-6 rounded-2xl transition-all block hover:-translate-y-0.5">
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
