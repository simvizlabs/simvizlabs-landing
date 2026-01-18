import { BenefitsSection } from "@/components/landing/BenefitsSection";
import Footer from "@/components/footer";
import { HeroSection } from "@/components/landing/HeroSection";
import { LandingNavbar } from "@/components/landing/LandingNavbar";
import { MultiPlatformSection } from "@/components/landing/MultiPlatformSection";
import { StickyProductFlow } from "@/components/landing/StickyProductFlow";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SimViz Labs - Train Smarter, Fly Safer",
  description: "Boost pilot readiness and elevate operational confidence with SimViz Labs simulators.",
};

export default function NewLandingPage() {
  return (
    <main className="min-h-screen bg-white">
      <LandingNavbar />
      <HeroSection />


      {/* Sticky Product Flow */}
      <StickyProductFlow
        products={[
          {
            title: "A320 FMS Simulator",
            subtitle: "iPad Based",
            image: "/landing/a320/a320_fms_simulator.png",
            orientation: "left"
          },
          {
            title: "B737 FMS Simulator",
            subtitle: "iPad Based",
            image: "/landing/b737/b737_fms_simulator.png",
            orientation: "right"
          },
          {
            title: "B747 FMS Simulator",
            subtitle: "iPad Based",
            image: "/landing/b747/b747_fms_simulator.png",
            orientation: "left"
          },
          {
            title: "A new way to train like a pro.",
            subtitle: "ATR 72-600",
            image: "/landing/atr/atr.png",
            orientation: "right",
            isComingSoon: true
          }
        ]}
      />
      <MultiPlatformSection />
      <BenefitsSection />
      {/* <Footer theme="light" className="bg-[#F5F5F7] border-black/5" /> */}
      <Footer theme="light" />
    </main>
  );
}
