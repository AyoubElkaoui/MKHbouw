'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-lg shadow-lg border-b border-slate-200' 
          : 'bg-white/70 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-extrabold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent hover:scale-105 transition-transform">
            MKH Bouw
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/over-ons"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Over Ons
            </Link>
            <Link
              href="/diensten"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Diensten
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Contact
            </Link>
            <a
              href="tel:+31684794108"
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 hover:shadow-lg hover:scale-105 transition-all font-medium"
            >
              <Phone size={18} />
              Bel Nu
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-slate-100 shadow-xl">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
            >
              Home
            </Link>
            <Link
              href="/over-ons"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
            >
              Over Ons
            </Link>
            <Link
              href="/diensten"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
            >
              Diensten
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
            >
              Contact
            </Link>
            <a
              href="tel:+31684794108"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all font-medium"
            >
              <Phone size={18} />
              +31 6 84794108
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
