import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title:
    "MKH Bouw - Professioneel Klussenbedrijf Nederland | Zakelijk & Particulier",
  description:
    "MKH Bouw is uw betrouwbare bouwpartner door heel Nederland voor bedrijven en particulieren. Gevestigd in Amsterdam, actief landelijk. Professioneel stucwerk, schilderwerk, renovaties en onderhoud. 15+ jaar ervaring • Zakelijke contracten • Eerlijke prijzen • Bel +31 6 84794108",
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
    "MKH Bouw",
    "B2B bouw",
    "klussenbedrijf Amsterdam",
  ],
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
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
