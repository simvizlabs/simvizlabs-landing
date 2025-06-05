import React from 'react';
import Head from "next/head";
import NavbarDemo from "@/components/resizable-navbar-demo";

import Footer from "@/components/footer";
import HeroSection from '@/components/HeroSection';
import Pricing from '@/components/pricing';

const A320BundlePage = () => {
  return (
    <>
      <Head>
        <title>A320 MCDU Trainer for iPad | Realistic Pilot Training App | SimvizLabs</title>
        <meta name="description" content="Master the Airbus A320 MCDU and ATSU systems with SimvizLabs' immersive, instructor-crafted training app for iPad." />
        <meta name="keywords" content="A320 MCDU trainer, A320 ATSU trainer, iPad pilot training, flight simulator app, Airbus A320, pilot training, aviation training, SimvizLabs" />
      </Head>
      <div>
        <NavbarDemo />
        <div className="container mx-auto ">
          <HeroSection
            heroText="A320 CDU Trainer"
            heroImage="/images/a320.png"
            heroDescription="Master Airbus’s MCDU and ATSU systems with this immersive, instructor-crafted training app"
          />
        </div>
        <Pricing />
        <Footer />
      </div>
    </>
  );
};

export default A320BundlePage;
