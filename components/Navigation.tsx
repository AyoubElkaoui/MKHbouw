"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        isScrolled ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="MKH Bouw"
              width={320}
              height={160}
              className="h-28 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/over-ons"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Over Ons
            </Link>
            <Link
              href="/diensten"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Diensten
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <a
              href="tel:+31684794108"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-lg hover:bg-primary-700 transition-colors font-semibold"
            >
              <Phone size={18} />
              Bel direct
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-6 space-y-4">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-gray-700 py-2"
            >
              Home
            </Link>
            <Link
              href="/over-ons"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-gray-700 py-2"
            >
              Over Ons
            </Link>
            <Link
              href="/diensten"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-gray-700 py-2"
            >
              Diensten
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-gray-700 py-2"
            >
              Contact
            </Link>
            <a
              href="tel:+31684794108"
              className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold"
            >
              <Phone size={18} />
              06 84794108
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
