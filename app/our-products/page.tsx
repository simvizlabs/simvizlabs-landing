"use client";

import { LandingNavbar } from "@/components/landing/LandingNavbar";
import Footer from "@/components/footer";
import { OurProductsSection } from "@/components/landing/OurProductsSection";
import NavbarDemo from "@/components/resizable-navbar-demo";



export default function OurProductsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <NavbarDemo />
      <main className="flex-grow pt-24">
        <OurProductsSection />
      </main>
      <Footer theme="light" />
    </div>
  );
}
