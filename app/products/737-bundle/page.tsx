import React from 'react';
import Head from "next/head";
import NavbarDemo from "@/components/resizable-navbar-demo";

import Footer from "@/components/footer";
import HeroSection from '@/components/HeroSection';
import Pricing from '@/components/pricing';

const SeventyThreeSevenBundlePage = () => {
  return (
    <>
      <Head>
        <title>B737 CDU Trainer for iPad | Realistic Pilot Training App | SimvizLabs</title>
        <meta name="description" content="Master the Boeing 737 CDU and FMC with SimvizLabs' realistic iPad training app. Designed for pilots to practice procedures and workflows." />
        <meta name="keywords" content="B737 CDU trainer, B737 FMS trainer, iPad pilot training, flight simulator app, Boeing 737, pilot training, aviation training, SimvizLabs" />
      </Head>
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
