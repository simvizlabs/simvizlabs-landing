import React from 'react';
import NavbarDemo from "@/components/resizable-navbar-demo";

import Footer from "@/components/footer";
import HeroSection from '@/components/HeroSection';
import Pricing from '@/components/pricing';

const SeventyThreeSevenBundlePage = () => {
  return (
    <div>
      <NavbarDemo />
      <div className="container mx-auto ">
       
         
      
       <div className="flex justify-center">
          
        </div>
        <HeroSection
          heroText="B737 CDU Trainer"
          heroImage="/images/737.png"
          heroDescription="Master Boeing's FMC and ACARS systems with this realistic, instructor-designed training app."
        />
      </div>
      <Pricing />
      <Footer />
    </div>
  );
};

export default SeventyThreeSevenBundlePage;
