export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-blue-600 mb-4">MKH Bouw</h3>
            <p className="text-gray-400 leading-relaxed">
              Uw betrouwbare klussenbedrijf in Amsterdam. Wij staan voor kwaliteit, betrouwbaarheid en persoonlijke service.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Diensten</h4>
            <ul className="space-y-2">
              <li>
                <a href="#diensten" className="text-gray-400 hover:text-blue-600 transition-colors">
                  Spackspuiten
                </a>
              </li>
              <li>
                <a href="#diensten" className="text-gray-400 hover:text-blue-600 transition-colors">
                  Stucwerk
                </a>
              </li>
              <li>
                <a href="#diensten" className="text-gray-400 hover:text-blue-600 transition-colors">
                  Schilderwerk
                </a>
              </li>
              <li>
                <a href="#diensten" className="text-gray-400 hover:text-blue-600 transition-colors">
                  Renovatie
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Johan Kernstraat 17</li>
              <li>1065 VC Amsterdam</li>
              <li>
                <a href="tel:+31684794108" className="hover:text-blue-600 transition-colors">
                  +31 6 84794108
                </a>
              </li>
              <li>
                <a href="mailto:info@mkhbouw.nl" className="hover:text-blue-600 transition-colors">
                  info@mkhbouw.nl
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MKH Bouw. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
}
