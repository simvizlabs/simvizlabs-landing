import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  metadataBase: new URL('https://simvizlabs.com'),
  title: "SimvizLabs - Next-Gen Pilot Training for Safer Operations",
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
    siteName: "Shadcn Landing Page",
    locale: "en_US",
    url: "https://shadcn-landing-page.vercel.app",
    title: "Shadcn Landing Page",
    description:
      "A beautiful landing page built with Shadcn UI, Next.js 15, Tailwind CSS, and Shadcn UI Blocks.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shadcn UI Landing Page Preview",
      },
    ],
  },
  authors: [
    {
      name: "Sayudh Mukherjee",
      url: "https://simvizlabs.com",
    },
  ],
  creator: "Sayudh Mukherjee",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased font-geist`}>
        <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
