import React from 'react';
import NavbarDemo from "@/components/resizable-navbar-demo";

import Footer from "@/components/footer";
import HeroSection from '@/components/HeroSection';
import Pricing from '@/components/pricing';

const A320BundlePage = () => {
  return (
    <div>
      <NavbarDemo />
      <div className="container mx-auto ">
       
         
      
       <div className="flex justify-center">
          
        </div>
        <HeroSection
          heroText="A320 CDU Trainer"
          heroImage="/images/a320.png"
          heroDescription="Master Airbus’s MCDU and ATSU systems with this immersive, instructor-crafted training app"
        />
      </div>
      <Pricing />
      <Footer />
    </div>
  );
};

export default A320BundlePage;
