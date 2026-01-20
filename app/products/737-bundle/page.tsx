import { Metadata } from 'next';
import NavbarDemo from "@/components/resizable-navbar-demo";

import Footer from "@/components/footer";
import HeroSection from '@/components/HeroSection';
import Pricing from '@/components/pricing';

export const metadata: Metadata = {
  title: 'B737 FMS Simulator & FMS Trainer | Boeing 737 FMS Training | SimViz Labs',
  description: 'Professional B737 FMS simulator and FMS trainer. High-fidelity Boeing 737 FMS training software with ACARS simulator and CPDLC simulator. Realistic VNAV/LNAV simulation for aviation training, type rating, and pilot training.',
  keywords: [
    'B737 FMS',
    'B737 FMS Simulator',
    'B737 FMS training',
    'FMS Trainer',
    'FMS Simulator',
    'B737 Simulator',
    'FMC Trainer',
    'Boeing Training',
    'CPDLC simulator',
    'ACARS simulator',
    'ACARS trainer',
    'MCP Training',
    'Flight Simulation',
    'Pilot Training',
    'Aviation training',
    'Type rating',
    'Aviation distance learning',
  ],
  openGraph: {
    title: 'B737 FMS Simulator & FMS Trainer | Boeing 737 FMS Training',
    description: 'High-fidelity B737 FMS simulator with ACARS and CPDLC capabilities. Professional aviation training solution for pilot training and type rating.',
    type: 'website',
    url: 'https://simvizlabs.com/products/737-bundle',
  },
  alternates: {
    canonical: 'https://simvizlabs.com/products/737-bundle',
  },
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
