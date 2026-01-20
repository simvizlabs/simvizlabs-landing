import { BenefitsSection } from "@/components/landing/BenefitsSection";
import Footer from "@/components/footer";
import { HeroSection } from "@/components/landing/HeroSection";
import { LandingNavbar } from "@/components/landing/LandingNavbar";
import { MultiPlatformSection } from "@/components/landing/MultiPlatformSection";
import { StickyProductFlow } from "@/components/landing/StickyProductFlow";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FMS Simulator & Aviation Training | Train Smarter, Fly Safer | SimViz Labs",
  description: "Professional FMS simulators for aviation training. A320 FMS simulator, B737 FMS training, B747 FMS, ACARS simulator, and CPDLC simulator. Boost pilot readiness and elevate operational confidence with SimViz Labs simulators.",
  keywords: [
    "FMS Simulator",
    "FMS Trainer",
    "A320 FMS simulator",
    "B737 FMS training",
    "B737 FMS",
    "B747 FMS",
    "Aviation training",
    "Aviation distance learning",
    "Flight simulator",
    "Type rating",
    "Pilot training",
    "ACARS simulator",
    "CPDLC simulator",
    "ACARS trainer",
  ],
  openGraph: {
    title: "FMS Simulator & Aviation Training | Train Smarter, Fly Safer",
    description: "Professional FMS simulators for A320, B737, B747. Boost pilot readiness with aviation training solutions.",
    type: "website",
    url: "https://simvizlabs.com/newlanding",
  },
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
