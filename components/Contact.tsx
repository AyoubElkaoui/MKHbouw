"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  Clock,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/config";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Er is iets misgegaan");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Er is een fout opgetreden. Probeer het later opnieuw.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adres",
      content: ["Johan Kernstraat 17", "1065 VC Amsterdam"],
    },
    {
      icon: Phone,
      title: "Telefoon",
      content: siteConfig.contact.phone,
      link: `tel:${siteConfig.contact.phone}`,
    },
    {
      icon: Mail,
      title: "Email",
      content: siteConfig.contact.email,
      link: `mailto:${siteConfig.contact.email}`,
    },
    {
      icon: Clock,
      title: "Reactietijd",
      content: "Binnen 24 uur",
    },
  ];

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-white/10 bg-zinc-800/50 focus:bg-zinc-800 focus:border-primary/50 focus:ring-4 focus:ring-primary/10 focus:outline-none transition-all disabled:opacity-50 text-sm text-white placeholder-zinc-500";

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 bg-zinc-950 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary-400 px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4 border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary-400" />
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5">
            Wij Helpen U <span className="text-primary-400">Graag</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Heeft u vragen of wilt u een vrijblijvende offerte? Neem gerust
            contact met ons op. Wij reageren altijd binnen 24 uur.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Info Cards */}
          <div className="space-y-4">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const content = Array.isArray(info.content)
                ? info.content
                : [info.content];

              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-zinc-900 p-6 rounded-2xl border border-white/5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-primary/20 group-hover:bg-primary group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                      <Icon
                        className="text-primary-400 group-hover:text-white transition-colors duration-300"
                        size={20}
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1 text-sm">
                        {info.title}
                      </h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-primary-400 hover:text-primary-300 font-medium transition-colors text-sm"
                        >
                          {content[0]}
                        </a>
                      ) : (
                        content.map((line, i) => (
                          <p key={i} className="text-zinc-500 text-sm">
                            {line}
                          </p>
                        ))
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-zinc-900 p-8 md:p-10 rounded-2xl border border-white/5">
              <h3 className="text-xl font-bold text-white mb-6">
                Stuur ons een bericht
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-zinc-400 font-medium mb-2 text-sm">
                      Naam *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      disabled={status === "loading"}
                      className={inputClass}
                      placeholder="Uw naam"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-zinc-400 font-medium mb-2 text-sm">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      disabled={status === "loading"}
                      className={inputClass}
                      placeholder="uw@email.nl"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-zinc-400 font-medium mb-2 text-sm">
                      Telefoon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={status === "loading"}
                      className={inputClass}
                      placeholder="06 12345678"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-zinc-400 font-medium mb-2 text-sm">
                      Onderwerp *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      disabled={status === "loading"}
                      className={inputClass}
                      placeholder="Waarover gaat het?"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-zinc-400 font-medium mb-2 text-sm">
                    Bericht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={status === "loading"}
                    className={`${inputClass} resize-none`}
                    placeholder="Vertel ons over uw project..."
                  ></textarea>
                </div>

                <AnimatePresence mode="wait">
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-3 bg-green-950/50 border border-green-800/50 text-green-400 px-4 py-3 rounded-xl"
                    >
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      <p className="text-sm font-medium">
                        Bedankt voor uw bericht! We nemen binnen 24 uur contact met u op.
                      </p>
                    </motion.div>
                  )}

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-3 bg-red-950/50 border border-red-800/50 text-red-400 px-4 py-3 rounded-xl"
                    >
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <p className="text-sm font-medium">{errorMessage}</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-700 transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Versturen...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Verstuur Bericht
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
