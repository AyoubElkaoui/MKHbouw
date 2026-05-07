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
      "MKH Bouw - Totaal Afbouw & Renovatie Amsterdam | Landelijk Actief",
    template: "%s | MKH Bouw",
  },
  description:
    "MKH Bouw is uw complete bouwpartner in Amsterdam en landelijk actief. Specialist in totaal afbouw, stucwerk, schilderwerk, tegelen, dakleggen, electra en loodgieterswerk. 15+ jaar ervaring • eerlijke prijzen • gratis offerte • bel +31 6 84794108",
  keywords: [
    "totaal afbouw Amsterdam",
    "aannemer Amsterdam",
    "stucwerk",
    "schilderwerk",
    "tegelen",
    "dakleggen",
    "electra installatie",
    "loodgieterswerk",
    "timmerwerk",
    "laminaat leggen",
    "MKH Bouw",
    "bouwbedrijf Amsterdam",
    "renovatie Amsterdam",
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
    title: "MKH Bouw - Totaal Afbouw & Renovatie Amsterdam",
    description:
      "MKH Bouw is uw complete bouwpartner door heel Nederland. Specialist in totaal afbouw, stucwerk, schilderwerk, tegelen, dakleggen, electra en loodgieterswerk.",
    images: [
      {
        url: "/white-logo.png",
        width: 1200,
        height: 630,
        alt: "MKH Bouw logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MKH Bouw - Totaal Afbouw & Renovatie Amsterdam",
    description:
      "MKH Bouw is uw complete bouwpartner door heel Nederland. Specialist in totaal afbouw, stucwerk, schilderwerk, tegelen, dakleggen, electra en loodgieterswerk.",
    images: ["/white-logo.png"],
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
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/favicon/apple-touch-icon.png",
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
        <meta name="theme-color" content="#09090b" />
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
