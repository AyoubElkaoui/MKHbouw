import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Clock, CheckCircle, Calendar, AlertCircle, Home, Phone, ArrowRight, Star, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Hoe Lang Duurt Stucwerk? Planning & Tijdsduur | MKH Bouw",
  description: "Benieuwd hoe lang stucwerk duurt? Ontdek wat de doorlooptijd bepaalt en plan je verbouwing slim. Expert advies van MKH Bouw Amsterdam.",
  keywords: ["hoe lang duurt stucwerk", "stucwerk tijdsduur", "stucwerk planning", "doorlooptijd stucwerk", "hoeveel dagen stucwerk"],
  alternates: { canonical: "https://mkhbouw.nl/blog/hoe-lang-duurt-stucwerk" },
};

export default function HoeLangDuurtStucwerk() {
  return (
    <>
      <Navigation />
      <main className="bg-zinc-950">

        {/* Hero */}
        <section className="relative min-h-[55vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1770838773417-08b18661c62f?q=80&w=2670&auto=format&fit=crop" alt="Stucwerk planning tijdsduur" fill className="object-cover opacity-35" priority />
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
                <Star size={14} className="fill-primary-400 text-primary-400" /> Planning & Tijdsduur
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Hoe lang duurt <span className="text-primary-400">stucwerk?</span>
              </h1>
              <p className="text-lg text-zinc-300 mb-8 leading-relaxed max-w-2xl">
                Goed plannen is het halve werk. In deze gids vertellen wij je precies wat de doorlooptijd van stucwerk bepaalt, zodat jij je verbouwing slim kunt plannen.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-primary/25 hover:-translate-y-0.5">
                <Phone size={18} /> Vraag vrijblijvende offerte aan
              </Link>
            </div>
          </div>
        </section>

        {/* Snel antwoord */}
        <section className="py-12 bg-zinc-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-primary/10 border border-primary/20 p-8 rounded-2xl">
                <p className="text-white font-semibold mb-4 text-lg flex items-center gap-2">
                  <Clock size={20} className="text-primary-400" /> Snel antwoord
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { ruimte: "1 kamer (25-35 m²)", tijd: "1 dag" },
                    { ruimte: "Woning (5-8 kamers)", tijd: "3-5 dagen" },
                    { ruimte: "Droogtijd stuc", tijd: "24-48 uur" },
                  ].map((item) => (
                    <div key={item.ruimte} className="text-center">
                      <div className="text-3xl font-black text-primary-400 mb-1">{item.tijd}</div>
                      <div className="text-zinc-400 text-sm">{item.ruimte}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tijdsduur per ruimte */}
        <section className="py-20 bg-zinc-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary-400 px-5 py-2 rounded-full text-sm font-semibold mb-4 border border-primary/20">Tijdsduur per ruimte</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Hoe lang duurt het per ruimte?</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: Home, ruimte: "Slaapkamer", oppervlak: "20-30 m²", tijd: "0,5 - 1 dag", extra: "Inclusief schuurwerk en prep" },
                  { icon: Home, ruimte: "Woonkamer", oppervlak: "35-50 m²", tijd: "1 - 1,5 dag", extra: "Afhankelijk van hoogte en obstakels" },
                  { icon: Home, ruimte: "Keuken", oppervlak: "15-25 m²", tijd: "0,5 dag", extra: "Rondom apparatuur meer werk" },
                  { icon: Home, ruimte: "Badkamer", oppervlak: "5-12 m²", tijd: "0,5 dag", extra: "Vochtige ruimte = speciale behandeling" },
                  { icon: Home, ruimte: "Plafond (woonkamer)", oppervlak: "30-40 m²", tijd: "1 dag", extra: "Zwaarder dan wanden — meer tijd" },
                  { icon: Home, ruimte: "Complete woning", oppervlak: "150-250 m²", tijd: "3-7 dagen", extra: "Afhankelijk van kamers en type stuc" },
                ].map((item) => (
                  <div key={item.ruimte} className="bg-zinc-900 border border-white/5 hover:border-primary/30 rounded-2xl p-6 transition-all group hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 group-hover:bg-primary group-hover:border-primary transition-all">
                        <item.icon size={18} className="text-primary-400 group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="font-bold text-white">{item.ruimte}</h3>
                    </div>
                    <div className="text-2xl font-black text-primary-400 mb-1">{item.tijd}</div>
                    <div className="text-zinc-500 text-xs mb-3">{item.oppervlak}</div>
                    <p className="text-zinc-600 text-xs leading-relaxed">{item.extra}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Factoren */}
        <section className="py-20 bg-zinc-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary-400 px-5 py-2 rounded-full text-sm font-semibold mb-4 border border-primary/20">Bepalende factoren</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Wat bepaalt de tijdsduur?</h2>
              </div>
              <div className="space-y-4">
                {[
                  { icon: AlertCircle, title: "Staat van de ondergrond", desc: "Een slechte, beschadigde of ongelijke ondergrond vraagt meer voorbereidend werk. Scheuren, gaten en losse stukken moeten eerst worden aangepakt. Dit kan flink wat extra tijd kosten." },
                  { icon: Calendar, title: "Type stucwerk", desc: "Spackspuiten gaat sneller dan traditioneel handmatig stucwerk. Decoratieve technieken als sierpleister en betonlook zijn bewerkelijker en vragen meer tijd per m²." },
                  { icon: Clock, title: "Droogtijd", desc: "Na het aanbrengen van stuc is droogtijd essentieel. Gemiddeld 24-48 uur voor sausklaar stucwerk. Bij hoge luchtvochtigheid of dikke lagen kan dit oplopen tot 72 uur." },
                  { icon: Home, title: "Omvang en bereikbaarheid", desc: "Plafonds kosten meer tijd dan wanden vanwege de werkhouding. Hoge ruimten, smalle trappenhuizen of slecht bereikbare plekken vragen extra materieel en tijd." },
                ].map((item) => (
                  <div key={item.title} className="bg-zinc-950/50 border border-white/5 hover:border-primary/20 rounded-2xl p-6 transition-all group">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-primary/20 group-hover:bg-primary group-hover:border-primary transition-all">
                        <item.icon size={20} className="text-primary-400 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">{item.title}</h3>
                        <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Planningtips */}
        <section className="py-20 bg-zinc-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary-400 px-5 py-2 rounded-full text-sm font-semibold mb-4 border border-primary/20">Planningtips</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Slim plannen: onze tips</h2>
              </div>
              <div className="space-y-4">
                {[
                  { num: "1", title: "Plan stucwerk vóór het schilderwerk", desc: "Stuc altijd eerst, dan schilderen. Zo voorkom je dat vers schilderwerk beschadigt door stucplekken of schuurstof." },
                  { num: "2", title: "Houd rekening met droogtijd", desc: "Plan minimaal 48-72 uur droogtijd na het stucken voordat de kamer weer in gebruik genomen wordt of geschilderd wordt." },
                  { num: "3", title: "Combineer kamers slim", desc: "Laat aansluitende kamers tegelijk stucken. Zo werkt het team efficiënter en kunt u snel de volgende fase plannen." },
                  { num: "4", title: "Informeer uw omgeving", desc: "Buren informeren over mogelijke geluidsoverlast wordt altijd gewaardeerd. Wij werken zo stil en netjes mogelijk." },
                ].map((tip) => (
                  <div key={tip.num} className="bg-zinc-900 border border-white/5 hover:border-primary/20 p-6 rounded-2xl transition-all group">
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Klaar om uw project te plannen?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">Vraag vandaag een gratis offerte aan en wij geven u een realistische planning voor uw stucwerkproject.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-primary-800 px-8 py-4 rounded-xl font-bold hover:bg-primary-50 transition-all shadow-xl shadow-black/20 hover:-translate-y-0.5">
                Offerte & planning aanvragen <ArrowRight size={18} />
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
                  { href: "/blog/stucwerk-scheuren-repareren", title: "Stucwerk scheuren repareren", desc: "Alles over het herkennen en oplossen van scheuren in stucwerk." },
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
