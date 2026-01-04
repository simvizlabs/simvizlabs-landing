import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { Footer } from "@/components/landing/Footer";
import { HeroSection } from "@/components/landing/HeroSection";
import { LandingNavbar } from "@/components/landing/LandingNavbar";
import { MultiPlatformSection } from "@/components/landing/MultiPlatformSection";
import { StickyProductFlow } from "@/components/landing/StickyProductFlow";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SimvizLabs - Train Smarter, Fly Safer",
  description: "Boost pilot readiness and elevate operational confidence with SimvizLabs simulators.",
};

export default function NewLandingPage() {
  return (
    <main className="min-h-screen bg-black">
      <LandingNavbar />
      <HeroSection />
      {/* <MultiPlatformSection /> */}
      {/* <BenefitsSection /> */}
      
      {/* Sticky Product Flow */}
      <StickyProductFlow 
        products={[
            {
                title: "A320 FMS Simulator",
                subtitle: "iPad Based",
                image: "/landing/a320/1890c6df4b54d4d98717fb87c7278d2633435e82.png",
                orientation: "left"
            },
            {
                title: "B737 FMS Simulator",
                subtitle: "iPad Based",
                image: "/landing/b737/863bb38c26e04d20ee5193e6bdbff9b4f5ddd989.png",
                orientation: "right"
            },
            {
                title: "B747 FMS Simulator",
                subtitle: "iPad Based",
                image: "/landing/b747/98b5c88454d687043b8dddced11867ccd8a0aa32.png",
                orientation: "left"
            },
            {
                title: "A new way to train like a pro.",
                subtitle: "ATR 72-600",
                image: "/landing/atr/263c850f1f4f0d5a27c33443a99eebac98cf3450.png",
                orientation: "right",
                isComingSoon: true
            }
        ]}
      />
      
      <Footer />
    </main>
  );
}
