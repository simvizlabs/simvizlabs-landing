
import NavbarDemo from "@/components/resizable-navbar-demo";
import TailoredSolutionsSection from "@/components/landing/TailoredSolutionsSection";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import Footer from "@/components/footer";
import { HeroSection } from "@/components/landing/HeroSection";
import { LandingNavbar } from "@/components/landing/LandingNavbar";
import { MultiPlatformSection } from "@/components/landing/MultiPlatformSection";
import { StickyProductFlow2 } from "@/components/landing/StickyProductFlow2";
import { Metadata } from "next";
import { StickyProductFlow } from "@/components/landing/StickyProductFlow";
import MediaChromePlayer from "@/components/MajorComponnts/MediaChromePlayer";

export const metadata: Metadata = {
  title: "FMS Simulator & Trainer | A320 FMS, B737 FMS, B747 FMS Training | SimViz Labs",
  description: "Professional FMS simulator and trainer solutions. High-fidelity A320 FMS simulator, B737 FMS training, B747 FMS, ACARS simulator, CPDLC simulator for aviation training and type rating. Aviation distance learning platform.",
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
  ],
  openGraph: {
    title: "FMS Simulator & Trainer | A320, B737, B747 FMS Training",
    description: "Professional FMS simulator solutions for aviation training. A320 FMS, B737 FMS, B747 FMS trainers with ACARS and CPDLC capabilities.",
    type: "website",
    url: "https://simvizlabs.com",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-[1920px] mx-auto w-full">
        <NavbarDemo />
        <HeroSection />
        <MediaChromePlayer/>

        {/* Sticky Product Flow */}
        {/* Sticky Product Flow */}
        <StickyProductFlow
        products={[
          {
            id: "a320",
            title: "A320 FMS Simulator",
            subtitle: "iPad Based",
            image: "/landing/a320/a320.png",
            orientation: "left",
            bottomText: "A320 FMS Simulator"
          },
          {
            id: "b737",
            title: "B737NG FMS Simulator",
            subtitle: "Launching Soon",
            image: "/landing/b737/b737.png",
            orientation: "right",
            isComingSoon: true,
            bottomText: "A new way to train like a pro."
          },
          {
            id: "b747",
            title: "B747-400 FMS Simulator",
            subtitle: "Launching Soon",
            image: "/landing/b747/b747.png",
            orientation: "left",
            isComingSoon: true,
            bottomText: "A new way to train like a pro."
          },
          {
            id: "atr",
            title: "ATR 72-600",
            subtitle: "Launching Soon",
            image: "/landing/atr/atr72.png",
            orientation: "right",
            isComingSoon: true,
            bottomText: "A new way to train like a pro."
          }
        ]}
      />
        <MultiPlatformSection />
        <BenefitsSection />
        {/* <Footer theme="light" className="bg-[#F5F5F7] border-black/5" /> */}
        <Footer bgColor="bg-[#F5F5F7]" />
      </div>
    </main>
  );
}
