import { Metadata } from 'next';
import NavbarDemo from "@/components/resizable-navbar-demo";

import Footer from "@/components/footer";
import HeroSection from '@/components/HeroSection';
import Pricing from '@/components/pricing';

export const metadata: Metadata = {
  title: 'B737 Simulator | High-Fidelity FMC Trainer | SimViz Labs',
  description: 'Master the B737 FMC and automation with our aircraft-level accuracy simulator. Features precise LNAV/VNAV, AI CPDLC, customizable ACARS, and MCP/FMA training.',
  keywords: ['B737 Simulator', 'FMC Trainer', 'Boeing Training', 'CPDLC', 'ACARS', 'MCP Training', 'Flight Simulation', 'Pilot Training'],
  openGraph: {
    title: 'B737 Simulator | High-Fidelity FMC Trainer',
    description: 'Precise FMC simulation, AI-powered CPDLC, and integrated Boeing systems training.',
    type: 'website',
  }
};

const SeventyThreeSevenBundlePage = () => {
  return (
    <>
      <div>
        <NavbarDemo />
        <div className="container mx-auto ">
          <HeroSection
            heroText="B737 CDU Trainer"
            heroImage="/images/737.png"
            heroDescription="Master Boeing's FMC and ACARS systems with this realistic, instructor-designed training app."
          />
        </div>
        <Pricing />
        <Footer />
      </div>
    </>
  );
};

export default SeventyThreeSevenBundlePage;
