"use client";

import Link from "next/link";
import { Phone, ArrowRight, CheckCircle, Zap } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-20 bg-slate-900 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Accent shapes */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Highlighted badge */}
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-lg">
              <Zap className="w-4 h-4" fill="currentColor" />
              GRATIS OFFERTE OP MAAT
            </span>
          </div>

          {/* Main card with glow */}
          <div className="relative">
            <div className="absolute -inset-0.5 bg-primary rounded-2xl opacity-75 blur"></div>
            <div className="relative bg-white rounded-2xl p-10 md:p-12 shadow-2xl">
              {/* Header */}
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                  Start Vandaag Nog
                </h2>
                <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                  Ontvang binnen{" "}
                  <span className="font-bold text-primary">24 uur</span> een
                  persoonlijke offerte. Ervaren vakmanschap, eerlijke prijzen.
                </p>
              </div>

              {/* Buttons with enhanced styling */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center bg-primary text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Vraag Offerte Aan
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>

                <a
                  href="tel:+31684794108"
                  className="group inline-flex items-center justify-center bg-slate-100 text-gray-900 border-2 border-slate-200 px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:border-primary transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  <Phone className="mr-3 w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <div className="text-left">
                    <div className="text-xs text-gray-500 font-normal -mb-0.5">
                      Of bel direct
                    </div>
                    <div>06 84794108</div>
                  </div>
                </a>
              </div>

              {/* Enhanced trust indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t-2 border-gray-100">
                <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">
                      24u reactie
                    </div>
                    <div className="text-xs text-gray-600">Gegarandeerd</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">
                      Transparant
                    </div>
                    <div className="text-xs text-gray-600">Vaste prijzen</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">
                      15+ jaar
                    </div>
                    <div className="text-xs text-gray-600">Ervaring</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
