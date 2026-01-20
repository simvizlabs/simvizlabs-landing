import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL('https://simvizlabs.com'),
  title: "SimViz Labs - FMS Simulator & Aviation Training | A320, B737, B747 FMS Trainer",
  description:
    "Professional FMS simulators and aviation training solutions. High-fidelity A320 FMS simulator, B737 FMS training, B747 FMS, ACARS simulator, CPDLC simulator, and pilot training for type rating. Aviation distance learning platform.",
  keywords: [
    "FMS Simulator",
    "FMS Trainer",
    "A320 FMS simulator",
    "B737 FMS training",
    "B737 FMS",
    "Aviation training",
    "Aviation distance learning",
    "Flight simulator",
    "Type rating",
    "Pilot training",
    "ACARS simulator",
    "CPDLC simulator",
    "ACARS trainer",
    "A320 FMS",
    "B737 FMS",
    "B747 FMS",
    "B777 FMS",
    "A330 FMS",
    "ATR FMS",
    "B787 FMS",
    "pilot training",
    "aviation",
    "distance learning",
    "pilot performance",
    "operational safety",
    "SimvizLabs",
    "FMC trainer",
    "CDU simulator",
    "flight management system",
  ],
  openGraph: {
    type: "website",
    siteName: "SimViz Labs",
    locale: "en_US",
    url: "https://simvizlabs.com",
    title: "SimViz Labs - FMS Simulator & Aviation Training Solutions",
    description:
      "Professional FMS simulators for A320, B737, B747. ACARS and CPDLC training. Aviation distance learning and pilot training solutions for type rating.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SimViz Labs - FMS Simulator & Aviation Training",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SimViz Labs - FMS Simulator & Aviation Training",
    description: "Professional FMS simulators for A320, B737, B747. ACARS and CPDLC training solutions.",
  },
  authors: [
    {
      name: "SimViz Labs Dev",
      url: "https://simvizlabs.com",
    },
  ],
  creator: "SimViz Labs Dev",
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon-32x32.png",
      sizes: "32x32",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon-16x16.png",
      sizes: "16x16",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/android-chrome-192x192.png",
      sizes: "192x192",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/android-chrome-512x512.png",
      sizes: "512x512",
    },
  ],
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/site.webmanifest",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SimViz Labs",
    "url": "https://simvizlabs.com",
    "logo": "https://simvizlabs.com/logo.png",
    "description": "Professional FMS simulators and aviation training solutions. High-fidelity A320 FMS simulator, B737 FMS training, B747 FMS, ACARS simulator, CPDLC simulator, and pilot training for type rating.",
    "sameAs": [],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "url": "https://simvizlabs.com/contact"
    },
    "offers": {
      "@type": "AggregateOffer",
      "offerCount": "3",
      "offers": [
        {
          "@type": "Offer",
          "name": "A320 FMS Simulator",
          "description": "High-fidelity A320 FMS simulator with ACARS and CPDLC capabilities"
        },
        {
          "@type": "Offer",
          "name": "B737 FMS Simulator",
          "description": "Professional B737 FMS training software with realistic VNAV/LNAV simulation"
        },
        {
          "@type": "Offer",
          "name": "B747 FMS Simulator",
          "description": "High-fidelity B747 FMS simulator for long-range navigation and wide-body operations"
        }
      ]
    }
  };

  const softwareApplicationData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "SimViz Labs FMS Simulators",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "iOS, iPadOS",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5"
    },
    "description": "Professional FMS simulators for aviation training including A320 FMS, B737 FMS, and B747 FMS trainers with ACARS and CPDLC capabilities."
  };

  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`antialiased ${inter.variable} font-sans`}>
          <Script
            id="organization-structured-data"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
          <Script
            id="software-application-structured-data"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationData) }}
          />
          <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light">
            <SmoothScrollProvider>
              {children}
              <Toaster />
            </SmoothScrollProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
