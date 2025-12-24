"use client";

import { Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Professioneel stucwerk en schilderwerk
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              MKH Bouw is gevestigd in Amsterdam en actief door heel Nederland.
              Specialist in stucwerk, schilderwerk en complete renovaties voor
              particulieren en bedrijven.
            </p>

            {/* USPs */}
            <div className="space-y-3 mb-10">
              {[
                "Meer dan 15 jaar ervaring",
                "Vaste prijsafspraak, geen verrassingen",
                "Landelijk actief, snel ter plaatse",
              ].map((text) => (
                <div key={text} className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-primary flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">{text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Gratis offerte aanvragen
                <ArrowRight size={20} />
              </a>
              <a
                href="tel:+31684794108"
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:border-primary hover:text-primary transition-colors"
              >
                <Phone size={20} />
                06 84794108
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative hidden lg:block">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2531&auto=format&fit=crop"
                alt="Professional stucwerk en schilderwerk"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
