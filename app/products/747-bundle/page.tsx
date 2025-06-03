import React from 'react';
import NavbarDemo from "@/components/resizable-navbar-demo";

import Footer from "@/components/footer";
import HeroSection from '@/components/HeroSection';
import Pricing from '@/components/pricing';

const SeventyFourSevenBundlePage = () => {
  return (
    <div>
      <NavbarDemo />
      <div className="container mx-auto ">
       
         
      
       <div className="flex justify-center">
          
        </div>
        <HeroSection
          heroText="B747 CDU Trainer"
          heroImage="/images/747.png"
          heroDescription="Train like a pro on Boeing’s iconic 747 with this detailed, instructor-developed FMS and ACARS simulation."
        />
      </div>
      <Pricing />
      <Footer />
    </div>
  );
};

export default SeventyFourSevenBundlePage;
