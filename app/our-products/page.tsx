"use client";

import { LandingNavbar } from "@/components/landing/LandingNavbar";
import { Footer } from "@/components/landing/Footer";
import { OurProductsSection } from "@/components/landing/OurProductsSection";

export default function OurProductsPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col font-sans">
      <LandingNavbar />
      <main className="flex-grow pt-24">
        <OurProductsSection />
      </main>
      <Footer />
    </div>
  );
}
