"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marco de Vries",
    role: "Eigenaar Horecagelegenheid",
    location: "Amsterdam",
    text: "MKH Bouw heeft onze complete zaak gerenoveerd. Van stucwerk tot schilderwerk, alles binnen tijd en budget. Het team werkte netjes en professioneel, met minimale overlast voor onze gasten. Zeer tevreden met het eindresultaat!",
  },
  {
    name: "Linda Bakker",
    role: "Particulier",
    location: "Utrecht",
    text: "Fantastisch werk geleverd bij onze woningrenovatie. De communicatie was helder, de planning klopte precies en het resultaat overtrof onze verwachtingen. Het team was vriendelijk en zorgvuldig.",
  },
  {
    name: "Peter Janssen",
    role: "Facility Manager",
    location: "Rotterdam",
    text: "Al meerdere kantoorpanden laten renoveren door MKH Bouw. Altijd snel, netjes en met minimale overlast voor onze medewerkers. Een betrouwbare partner voor al onze facility behoeften.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Wat klanten zeggen
          </h2>
          <p className="text-xl text-gray-600">
            Meer dan 250 tevreden klanten gingen u voor. Lees hun ervaringen met
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
