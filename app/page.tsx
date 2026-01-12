
import NavbarDemo from "@/components/resizable-navbar-demo";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import Footer from "@/components/footer";
import { HeroSection } from "@/components/landing/HeroSection";
import { LandingNavbar } from "@/components/landing/LandingNavbar";
import { MultiPlatformSection } from "@/components/landing/MultiPlatformSection";
import { StickyProductFlow } from "@/components/landing/StickyProductFlow";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SimViz Labs | Aviation Training Software & FMS Simulators",
  description: "Reduce training costs with iPad-based FMS simulators for A320, B737, and B747. CBTA compliant pilot training solutions for airlines and ATOs.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <NavbarDemo />
      <HeroSection />


      {/* Sticky Product Flow */}
      <StickyProductFlow
        products={[
          {
            id: "a320",
            title: "A320 FMS Simulator",
            subtitle: "iPad Based",
            image: "/landing/a320/a320_fms_simulator.png",
            orientation: "left"
          },
          {
            id: "b737",
            title: "B737 FMS Simulator",
            subtitle: "iPad Based",
            image: "/landing/b737/b737_fms_simulator.png",
            orientation: "right"
          },
          {
            id: "b747",
            title: "B747 FMS Simulator",
            subtitle: "iPad Based",
            image: "/landing/b747/b747_fms_simulator.png",
            orientation: "left"
          },
          {
            id: "atr72",
            title: "ATR 72-600 FMS Simulator",
            subtitle: "iPad Based",
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
