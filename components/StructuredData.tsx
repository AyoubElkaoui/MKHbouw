export default function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'MKH Bouw',
    image: 'https://mkhbouw.nl/logo.png',
    '@id': 'https://mkhbouw.nl',
    url: 'https://mkhbouw.nl',
    telephone: '+31684794108',
    email: 'info@mkhbouw.nl',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Johan Kernstraat 17',
      addressLocality: 'Amsterdam',
      postalCode: '1065 VC',
      addressCountry: 'NL',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 52.345744,
      longitude: 4.826746,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    priceRange: '$$',
    description:
      'MKH Bouw is een ervaren klussenbedrijf uit Amsterdam, gespecialiseerd in stucwerk, schilderwerk, renovaties en meer. Betrouwbaar en professioneel.',
    areaServed: {
      '@type': 'City',
      name: 'Amsterdam',
    },
    serviceType: [
      'Spackspuiten',
      'Stucwerk',
      'Sierpleister',
      'Schuurwerk',
      'Schilderwerk',
      'Behangen',
      'Sloopwerk',
      'Renovatie',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
