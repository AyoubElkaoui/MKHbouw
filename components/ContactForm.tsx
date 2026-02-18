"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
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

      if (!response.ok) {
        throw new Error(data.error || "Er is iets misgegaan");
      }

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Er is iets misgegaan. Probeer het later opnieuw."
      );
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
          <CheckCircle className="text-green-600" size={32} />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          Bericht verzonden!
        </h3>
        <p className="text-gray-600 mb-6">
          Bedankt voor uw bericht. We nemen binnen 24 uur contact met u op.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-primary font-semibold hover:underline"
        >
          Nog een bericht versturen
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === "error" && (
        <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          <AlertCircle size={20} className="flex-shrink-0" />
          <p className="text-sm">{errorMessage}</p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-gray-700 font-semibold mb-2"
          >
            Naam *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-slate-200 outline-none transition-all"
            placeholder="Uw naam"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-gray-700 font-semibold mb-2"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-slate-200 outline-none transition-all"
            placeholder="uw@email.nl"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="phone"
            className="block text-gray-700 font-semibold mb-2"
          >
            Telefoon
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-slate-200 outline-none transition-all"
            placeholder="06 12345678"
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block text-gray-700 font-semibold mb-2"
          >
            Onderwerp *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-slate-200 outline-none transition-all"
            placeholder="Waarover gaat het?"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-gray-700 font-semibold mb-2"
        >
          Bericht *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-slate-200 outline-none transition-all resize-none"
          placeholder="Vertel ons over uw project..."
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-primary text-white px-8 py-4 rounded-full hover:bg-primary/90 transition-all transform hover:scale-105 font-semibold text-lg shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:scale-100"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            Versturen...
          </>
        ) : (
          <>
            <Send size={20} />
            Verstuur Bericht
          </>
        )}
      </button>
    </form>
  );
}
