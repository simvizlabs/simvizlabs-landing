import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Feature108 from "@/components/Feature108";
import NavbarDemo from "@/components/resizable-navbar-demo";
import VerticalEventTimeline from "@/components/timeline";
import FeaturesSectionDemo from "@/components/Benefits";
import BentoGrid from "@/components/BentoGrid";
import { FaqSectionDemo } from "@/components/FaqSectionDemo";
import { MarqueeDemo } from "@/components/MarqueeDemo";
import { RetroGridDemo } from "@/components/RetroGridDemo";

export default function Home() {
  return (
    <>
      <NavbarDemo />
      <Hero />
      <Feature108 />
      <VerticalEventTimeline />
      <BentoGrid />
      <FeaturesSectionDemo />
      <FaqSectionDemo />
      <MarqueeDemo />
      <RetroGridDemo />
      <Footer />
    </>
  );
}
