import { Metadata } from 'next';
import NavbarDemo from "@/components/resizable-navbar-demo";

import Footer from "@/components/footer";
import HeroSection from '@/components/HeroSection';
import Pricing from '@/components/pricing';

export const metadata: Metadata = {
  title: 'B747 Simulator | High-Fidelity FMC Trainer | SimViz Labs',
  description: 'Master the B747 FMC and automation. Features aircraft-level accuracy for long-range nav, AI CPDLC, customizable ACARS, and complex MCP/FMA operations.',
  keywords: ['B747 Simulator', 'FMC Trainer', 'Boeing Wide-body', 'CPDLC', 'ACARS', 'Pilot Training', 'Aviation', 'Long-range Navigation'],
  openGraph: {
    title: 'B747 Simulator | High-Fidelity FMC Trainer',
    description: 'Precise FMC simulation, AI-powered CPDLC, and integrated Boeing systems training for wide-body operations.',
    type: 'website',
  }
};

const SeventyFourSevenBundlePage = () => {
  return (
    <>
      <div>
        <NavbarDemo />
        <div className="container mx-auto ">
          <HeroSection
            heroText="B747 CDU Trainer"
            heroImage="/images/747.png"
            heroDescription="Train like a pro on Boeing’s iconic 747 with this detailed, instructor-developed FMS and ACARS simulation."
          />
        </div>
        <Pricing />
        <Footer />
      </div>
    </>
  );
};

export default SeventyFourSevenBundlePage;
