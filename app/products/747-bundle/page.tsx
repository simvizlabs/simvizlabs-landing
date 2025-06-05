import React from 'react';
import Head from "next/head";
import NavbarDemo from "@/components/resizable-navbar-demo";

import Footer from "@/components/footer";
import HeroSection from '@/components/HeroSection';
import Pricing from '@/components/pricing';

const SeventyFourSevenBundlePage = () => {
  return (
    <>
      <Head>
        <title>B747 FMS Trainer for iPad | Realistic Pilot Training App | SimvizLabs</title>
        <meta name="description" content="Train like a pro on Boeing’s iconic 747 with SimvizLabs' detailed, instructor-developed FMS and ACARS simulation for iPad." />
        <meta name="keywords" content="B747 FMS trainer, B747 CDU trainer, iPad pilot training, flight simulator app, Boeing 747, pilot training, aviation training, SimvizLabs" />
      </Head>
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
