import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import Analytics from "@/components/Analytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mkhbouw.nl"),
  title: {
    default:
      "mkhbouw - professioneel klussenbedrijf Nederland | zakelijk & particulier",
    template: "%s | mkhbouw",
  },
  description:
    "mkhbouw is uw betrouwbare bouwpartner door heel Nederland voor bedrijven en particulieren. Gevestigd in Amsterdam, actief landelijk. Professioneel stucwerk, schilderwerk, renovaties en onderhoud. 15+ jaar ervaring • zakelijke contracten • eerlijke prijzen • bel +31 6 84794108",
  keywords: [
    "klussenbedrijf Nederland",
    "zakelijk klussenbedrijf",
    "bedrijven aannemer",
    "stucwerk",
    "schilderwerk",
    "renovatie",
    "facility service",
    "onderhoudspartner",
    "spackspuiten",
    "mkhbouw",
    "B2B bouw",
    "klussenbedrijf Amsterdam",
  ],
  authors: [{ name: "mkhbouw" }],
  creator: "mkhbouw",
  publisher: "mkhbouw",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://mkhbouw.nl",
    siteName: "mkhbouw",
    title: "mkhbouw - professioneel klussenbedrijf Nederland",
    description:
      "mkhbouw is uw betrouwbare bouwpartner door heel Nederland. Specialist in stucwerk, schilderwerk en complete renovaties.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "mkhbouw logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "mkhbouw - professioneel klussenbedrijf Nederland",
    description:
      "mkhbouw is uw betrouwbare bouwpartner door heel Nederland. Specialist in stucwerk, schilderwerk en complete renovaties.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "", // Voeg Google Search Console verification code toe
  },
  alternates: {
    canonical: "https://mkhbouw.nl",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="scroll-smooth">
      <head>
        <StructuredData />
        <meta name="theme-color" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="canonical" href="https://mkhbouw.nl" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
