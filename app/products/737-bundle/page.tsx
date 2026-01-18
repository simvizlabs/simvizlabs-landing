import { Metadata } from 'next';
import NavbarDemo from "@/components/resizable-navbar-demo";

import Footer from "@/components/footer";
import HeroSection from '@/components/HeroSection';
import Pricing from '@/components/pricing';

export const metadata: Metadata = {
  title: 'B737 FMS Simulator & FMC Trainer | SimViz Labs',
  description: 'High-fidelity Boeing 737 FMS training software. Realistic VNAV/LNAV simulation for professional pilot training and airline proficiency.',
  keywords: ['B737 Simulator', 'FMC Trainer', 'Boeing Training', 'CPDLC', 'ACARS', 'MCP Training', 'Flight Simulation', 'Pilot Training'],
  openGraph: {
    title: 'B737 FMS Simulator & FMC Trainer | SimViz Labs',
    description: 'High-fidelity Boeing 737 FMS training software. Realistic VNAV/LNAV simulation for professional pilot training and airline proficiency.',
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
