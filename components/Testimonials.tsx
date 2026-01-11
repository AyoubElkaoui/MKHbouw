"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marco de Vries",
    role: "eigenaar horecagelegenheid",
    location: "Amsterdam",
    text: "mkhbouw heeft onze complete zaak gerenoveerd. van stucwerk tot schilderwerk, alles binnen tijd en budget. het team werkte netjes en professioneel, met minimale overlast voor onze gasten. zeer tevreden met het eindresultaat!",
  },
  {
    name: "Linda Bakker",
    role: "particulier",
    location: "Utrecht",
    text: "fantastisch werk geleverd bij onze woningrenovatie. de communicatie was helder, de planning klopte precies en het resultaat overtrof onze verwachtingen. het team was vriendelijk en zorgvuldig.",
  },
  {
    name: "Peter Janssen",
    role: "facility manager",
    location: "Rotterdam",
    text: "al meerdere kantoorpanden laten renoveren door mkhbouw. altijd snel, netjes en met minimale overlast voor onze medewerkers. een betrouwbare partner voor al onze facility behoeften.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            wat klanten zeggen
          </h2>
          <p className="text-xl text-gray-600">
            meer dan 250 tevreden klanten gingen u voor. lees hun ervaringen met
            onze diensten in Amsterdam en daarbuiten.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white p-8 rounded-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">
                  {testimonial.role} • {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
