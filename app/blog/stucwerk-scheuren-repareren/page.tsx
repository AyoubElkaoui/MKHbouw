import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Wrench, CheckCircle, AlertCircle, Phone, ArrowRight, Shield, Clock, TrendingUp, Star, ArrowLeft, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Stucwerk Scheuren Repareren: Complete Gids | MKH Bouw Amsterdam",
  description: "Last van scheuren in je stucwerk? Ontdek de oorzaken, oplossingen en wanneer je een professional moet inschakelen. Expert advies van MKH Bouw.",
  keywords: ["stucwerk scheuren repareren", "scheuren in muur", "stucwerk reparatie", "scheuren dichten", "haarscheuren stucwerk", "scheurvorming wand"],
  alternates: { canonical: "https://mkhbouw.nl/blog/stucwerk-scheuren-repareren" },
};

export default function StucwerkScheurenRepareren() {
  return (
    <>
      <Navigation />
      <main className="bg-zinc-950">

        {/* Hero */}
        <section className="relative min-h-[55vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1761986757577-140af8859587?q=80&w=2670&auto=format&fit=crop" alt="Stucwerk scheuren repareren" fill className="object-cover opacity-35" priority />
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
                <Star size={14} className="fill-primary-400 text-primary-400" /> Reparatie gids 2026
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Stucwerk scheuren <span className="text-primary-400">repareren</span>
              </h1>
              <p className="text-lg text-zinc-300 mb-8 leading-relaxed max-w-2xl">
                Scheuren in je stucwerk zijn vervelend, maar hoeven niet te betekenen dat er grote problemen zijn. In deze gids leggen we uit wat de oorzaken zijn en wanneer je een professional nodig hebt.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-primary/25 hover:-translate-y-0.5">
                <Phone size={18} /> Vraag gratis advies aan
              </Link>
            </div>
          </div>
        </section>

        {/* Soorten scheuren */}
        <section className="py-20 bg-zinc-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary-400 px-5 py-2 rounded-full text-sm font-semibold mb-4 border border-primary/20">Soorten scheuren</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Welk type scheur heeft u?</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: CheckCircle, color: "text-primary-400", title: "Haarscheurtjes", label: "Niet verontrustend", desc: "Dunne, oppervlakkige scheurtjes die ontstaan door krimp tijdens het drogen of kleine temperatuurwisselingen. Normaal en eenvoudig te herstellen.", urgent: false },
                  { icon: AlertCircle, color: "text-yellow-400", title: "Scheurpatronen", label: "Let op", desc: "Netwerk van scheuren over een groter oppervlak. Kan duiden op te snelle droging of slechte ondergrond. Repareerbaar maar vraagt vakmanschap.", urgent: false },
                  { icon: X, color: "text-red-400", title: "Structuurscheuren", label: "Professionele hulp", desc: "Brede, diepe scheuren die regelmatig terugkomen of groter worden. Kunnen duiden op constructieve problemen — direct onderzoek vereist.", urgent: true },
                ].map((item) => (
                  <div key={item.title} className={`bg-zinc-950/50 border rounded-2xl p-7 ${item.urgent ? "border-red-900/30" : "border-white/5"}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <item.icon size={22} className={item.color} />
                      <div>
                        <h3 className="font-bold text-white">{item.title}</h3>
                        <span className={`text-xs font-semibold ${item.color}`}>{item.label}</span>
                      </div>
                    </div>
                    <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Oorzaken */}
        <section className="py-20 bg-zinc-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary-400 px-5 py-2 rounded-full text-sm font-semibold mb-4 border border-primary/20">Oorzaken</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Waarom ontstaan scheuren?</h2>
              </div>
              <div className="space-y-4">
                {[
                  { icon: Clock, title: "Krimp tijdens het drogen", desc: "De meest voorkomende oorzaak. Stucwerk krimpt licht bij het drogen. Haarscheurtjes zijn daardoor volkomen normaal en geen teken van een probleem." },
                  { icon: TrendingUp, title: "Temperatuurwisselingen", desc: "Grote temperatuurverschillen tussen seizoenen zorgen voor kleine uitzettingen en krimpen van het materiaal. Dit kan tot scheurtjes leiden in kwetsbare plekken." },
                  { icon: AlertCircle, title: "Vochtige ondergrond", desc: "Als de ondergrond te veel vocht bevat bij het stucken, kunnen scheuren ontstaan bij het drogen. Een vochtmeting vooraf voorkomt dit." },
                  { icon: Shield, title: "Constructieve beweging", desc: "Gebouwen bewegen licht door belasting, grondbeweging of krimp van nieuwe constructies. Dit kan scheuren veroorzaken, met name rondom kozijnen en balken." },
                  { icon: Wrench, title: "Slechte uitvoering", desc: "Onvoldoende voorbereiding, verkeerde mengverhouding of te dik aangebracht stucwerk in één laag kan leiden tot scheuren. Kies altijd een ervaren stukadoor." },
                ].map((item) => (
                  <div key={item.title} className="bg-zinc-900 border border-white/5 hover:border-primary/20 rounded-2xl p-6 transition-all group">
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

        {/* Oplossingen */}
        <section className="py-20 bg-zinc-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary-400 px-5 py-2 rounded-full text-sm font-semibold mb-4 border border-primary/20">Oplossingen</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Hoe worden scheuren gerepareerd?</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-6 pb-4 border-b border-white/5">Kleine haarscheurtjes</h3>
                  <div className="space-y-4">
                    {[
                      { num: "1", title: "Scheur uitslijpen", desc: "De scheur wordt iets breder uitgespleten voor een betere hechting van het reparatiemateriaal." },
                      { num: "2", title: "Primer aanbrengen", desc: "Hechtprimer wordt aangebracht zodat het reparatiegips goed hecht op de ondergrond." },
                      { num: "3", title: "Opvullen met stucgips", desc: "De scheur wordt gevuld met stucgips of acrylaatkit, afhankelijk van de scheurgrootte." },
                      { num: "4", title: "Afwerken", desc: "Na het drogen wordt bijgeschuurd en bijgestuc zodat de reparatie onzichtbaar is." },
                    ].map((step) => (
                      <div key={step.num} className="bg-zinc-950/50 border border-white/5 rounded-xl p-5">
                        <div className="flex items-start gap-3">
                          <span className="text-2xl font-black text-primary/25 leading-none flex-shrink-0">{step.num}</span>
                          <div>
                            <h4 className="font-bold text-white mb-1 text-sm">{step.title}</h4>
                            <p className="text-zinc-500 text-xs leading-relaxed">{step.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-6 pb-4 border-b border-white/5">Grotere scheuren</h3>
                  <div className="space-y-4">
                    {[
                      { num: "1", title: "Oorzaak onderzoeken", desc: "Eerst wordt de oorzaak bepaald. Is het structureel of oppervlakkig? Dit bepaalt de juiste aanpak." },
                      { num: "2", title: "Ondergrond aanpakken", desc: "Bij vochtproblemen of constructieve beweging moet eerst de oorzaak worden opgelost." },
                      { num: "3", title: "Wapeningsgaas aanbrengen", desc: "Bij grote scheuren wordt glasvezelgaas aangebracht om terugkerende scheuren te voorkomen." },
                      { num: "4", title: "Nieuw stucwerk", desc: "Het betreffende gedeelte wordt volledig opnieuw gestucwerk voor een duurzaam resultaat." },
                    ].map((step) => (
                      <div key={step.num} className="bg-zinc-950/50 border border-white/5 rounded-xl p-5">
                        <div className="flex items-start gap-3">
                          <span className="text-2xl font-black text-primary/25 leading-none flex-shrink-0">{step.num}</span>
                          <div>
                            <h4 className="font-bold text-white mb-1 text-sm">{step.title}</h4>
                            <p className="text-zinc-500 text-xs leading-relaxed">{step.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wanneer professionele hulp */}
        <section className="py-20 bg-zinc-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary-400 px-5 py-2 rounded-full text-sm font-semibold mb-4 border border-primary/20">Advies</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Zelf doen of professional inschakelen?</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-zinc-900 border border-white/5 rounded-2xl p-7">
                  <h3 className="text-lg font-bold text-white mb-5 pb-3 border-b border-white/5">Zelf te doen</h3>
                  <ul className="space-y-3">
                    {["Enkele kleine haarscheurtjes", "Oppervlakkige scheurtjes zonder patroon", "Scheurtjes rondom schilderwerk of kitvoegen", "Cosmetische reparaties in niet-zichtbare plaatsen"].map(item => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle className="text-primary-400 flex-shrink-0 mt-0.5" size={16} />
                        <span className="text-zinc-400 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-950/20 border border-red-900/30 rounded-2xl p-7">
                  <h3 className="text-lg font-bold text-white mb-5 pb-3 border-b border-red-900/30">Professionele hulp nodig</h3>
                  <ul className="space-y-3">
                    {["Scheuren breder dan 3 mm", "Scheuren die steeds terugkomen", "Scheuren die groeien of verlengen", "Scheuren in combinatie met vochtplekken", "Scheuren rondom draagconstructies (balken, kolommen)"].map(item => (
                      <li key={item} className="flex items-start gap-2">
                        <AlertCircle className="text-red-400 flex-shrink-0 mt-0.5" size={16} />
                        <span className="text-zinc-400 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-zinc-900" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Scheuren in uw stucwerk?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">Wij inspecteren de scheuren gratis en geven u eerlijk advies over de beste aanpak. Neem vandaag nog contact op.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-primary-800 px-8 py-4 rounded-xl font-bold hover:bg-primary-50 transition-all shadow-xl shadow-black/20 hover:-translate-y-0.5">
                Gratis inspectie aanvragen <ArrowRight size={18} />
              </Link>
              <a href="tel:+31684794108" className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all">
                <Phone size={18} /> Direct bellen
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-white/60 text-sm">
              {["Gratis inspectie", "Eerlijk advies", "Vakkundige reparatie"].map(t => (
                <span key={t} className="flex items-center gap-2"><CheckCircle size={14} className="text-primary-300" /> {t}</span>
              ))}
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
                  { href: "/diensten/stucwerk", title: "Onze stucwerkdiensten", desc: "Bekijk alle soorten stucwerk die wij aanbieden — van glad tot decoratief." },
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
