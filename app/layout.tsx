import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL('https://simvizlabs.com'),
  title: "SimViz Labs- NextGen Pilot Training",
  description:
    "Experience aviation distance learning powered by interactive data-driven training. Enhance pilot performance and operational safety with SimvizLabs' innovative solutions.",
  keywords: [
    "pilot training",
    "aviation",
    "distance learning",
    "pilot performance",
    "operational safety",
    "SimvizLabs",
  ],
  openGraph: {
    type: "website",
    siteName: "SimViz Labs",
    locale: "en_US",
    url: "https://simvizlabs.com",
    title: "SimViz Labs",
    description:
      "Next Gen Aviation solutions , Digital Pilot Training And Operational Solution",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SimViz Labs Landing page",
      },
    ],
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
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`antialiased ${inter.variable} font-sans`}>
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
