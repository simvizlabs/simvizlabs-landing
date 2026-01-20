import { Metadata } from 'next';
import NavbarDemo from "@/components/resizable-navbar-demo";

import Footer from "@/components/footer";
import HeroSection from '@/components/HeroSection';
import Pricing from '@/components/pricing';

export const metadata: Metadata = {
  title: 'B747 FMS Simulator & FMS Trainer | Boeing 747 FMS Training | SimViz Labs',
  description: 'Professional B747 FMS simulator and FMS trainer. Master the B747 FMS with aircraft-level accuracy, ACARS simulator, CPDLC simulator for aviation training, type rating, and pilot training.',
  keywords: [
    'B747 FMS',
    'B747 FMS Simulator',
    'B747 FMS training',
    'FMS Trainer',
    'FMS Simulator',
    'B747 Simulator',
    'FMC Trainer',
    'Boeing Wide-body',
    'CPDLC simulator',
    'ACARS simulator',
    'ACARS trainer',
    'Pilot Training',
    'Aviation training',
    'Aviation',
    'Type rating',
    'Long-range Navigation',
    'Aviation distance learning',
  ],
  openGraph: {
    title: 'B747 FMS Simulator & FMS Trainer | Boeing 747 FMS Training',
    description: 'High-fidelity B747 FMS simulator with ACARS and CPDLC capabilities. Professional aviation training solution for pilot training and type rating.',
    type: 'website',
    url: 'https://simvizlabs.com/products/747-bundle',
  },
  alternates: {
    canonical: 'https://simvizlabs.com/products/747-bundle',
  },
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
