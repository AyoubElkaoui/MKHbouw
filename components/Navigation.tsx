"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronRight } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/over-ons", label: "Over Ons" },
  { href: "/diensten", label: "Diensten" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:block bg-primary text-white text-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10">
            <div className="flex items-center gap-6">
              <a
                href="tel:+31684794108"
                className="flex items-center gap-1.5 hover:text-primary-300 transition-colors"
              >
                <Phone size={13} />
                <span>06 84794108</span>
              </a>
              <span className="text-white/30">|</span>
              <a
                href="mailto:info@mkhbouw.nl"
                className="hover:text-primary-300 transition-colors"
              >
                info@mkhbouw.nl
              </a>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <span>Amsterdam &bull; Landelijk actief</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-zinc-950/95 backdrop-blur-xl shadow-lg shadow-black/40 border-b border-white/5"
            : "bg-zinc-950 border-b border-white/5"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="relative flex items-center">
              <Image
                src="/white-logo.png"
                alt="MKH Bouw"
                width={320}
                height={320}
                className="h-16 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-zinc-400 font-medium hover:text-white transition-colors group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full group-hover:w-6 transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:+31684794108"
                className="group inline-flex items-center gap-2.5 bg-primary text-white pl-5 pr-6 py-3 rounded-xl hover:bg-primary-700 transition-all font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
              >
                <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors">
                  <Phone size={15} />
                </div>
                Bel Direct
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative w-11 h-11 flex items-center justify-center rounded-xl bg-zinc-800 hover:bg-zinc-700 transition-colors text-white"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-zinc-900 z-50 md:hidden shadow-2xl border-l border-white/5">
              <div className="flex items-center justify-between p-5 border-b border-white/5">
                <Image
                  src="/white-logo.png"
                  alt="MKH Bouw"
                  width={160}
                  height={160}
                  className="h-10 w-auto"
                />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-zinc-800 hover:bg-zinc-700 transition-colors text-white"
                  aria-label="Sluiten"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-5 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between py-3.5 px-4 rounded-xl text-zinc-300 font-medium hover:bg-white/5 hover:text-white transition-all"
                  >
                    {link.label}
                    <ChevronRight size={16} className="text-zinc-600" />
                  </Link>
                ))}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-white/5 bg-zinc-900">
                <a
                  href="tel:+31684794108"
                  className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-4 rounded-xl font-semibold shadow-lg shadow-primary/25"
                >
                  <Phone size={18} />
                  06 84794108
                </a>
              </div>
            </div>
          </>
        )}
      </nav>
    </>
  );
}
