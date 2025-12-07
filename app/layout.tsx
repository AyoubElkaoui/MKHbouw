import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "MKH Bouw - Professioneel Klussenbedrijf Amsterdam | Zakelijk & Particulier",
  description: "MKH Bouw is uw betrouwbare bouwpartner in Amsterdam voor bedrijven en particulieren. Professioneel stucwerk, schilderwerk, renovaties en onderhoud. ✓ 15+ jaar ervaring ✓ Zakelijke contracten ✓ Eerlijke prijzen ✓ Bel +31 6 84794108",
  keywords: ["klussenbedrijf Amsterdam", "zakelijk klussenbedrijf", "bedrijven aannemer Amsterdam", "stucwerk Amsterdam", "schilderwerk Amsterdam", "renovatie Amsterdam", "facility service", "onderhoudspartner", "spackspuiten Amsterdam", "MKH Bouw", "B2B bouw Amsterdam"],
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
