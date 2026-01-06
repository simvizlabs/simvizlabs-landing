"use client";

import React from "react";
import AircraftCardList from "@/components/AircraftCardList";

import Head from "next/head"; // Import Head
import NavbarDemo from "@/components/resizable-navbar-demo";
import Footer from "@/components/footer";

import { HeroScrollDemo } from "@/components/ui/hero-scroll-demo";
import { AuroraText } from "@/components/magicui/aurora-text";

function AuroraTextDemo() {
  return (
    <h1 className="pt-16 text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
      Explore   <AuroraText colors={["#36A5E5", "#1C2180"]}>Our Products</AuroraText>
    </h1>

  );
}

const OurProductsPage = () => {
  // Example App Store URLs - Replace with actual links
  const appStoreUrls = {
    b747: "https://apps.apple.com/us/app/fms-trainer-b747/id6464125512",
    b737: "https://apps.apple.com/us/app/fms-trainer-b737/id6740346553",
    a320: "https://apps.apple.com/us/app/airbus-a320-fms/id6743235055",
  };

  return (
    <div className="bg-white text-black dark:bg-neutral-900 dark:text-white font-geist">
      <Head>
        <title>Realistic iPad CDU/FMS Simulators for Pilot Training | B737, B747, A320 | SimViz Labs</title>
        <meta name="description" content="Explore SimViz Labs' range of realistic iPad CDU/FMS flight simulators for B737, B747, and A320 pilot training. Master complex workflows with our free and pro versions." />
        <meta name="keywords" content="iPad flight simulator, CDU simulator, FMS simulator, pilot training app, B737 training, B747 training, A320 training, SimViz Labs, flight sim, aviation training" />
      </Head>
      <NavbarDemo />
      <main className="space-y-8 px-4 sm:px-6 md:px-8 py-8 md:py-16 max-w-7xl mx-auto">

        <section className="pt-8 md:pt-16 text-center">
          <AuroraTextDemo />
        </section>

        <div className="flex justify-center">
          {/* <HovermeButtonDemo text="View All" onClick={() => {
            document.getElementById('b737-trainer-section')?.scrollIntoView({ behavior: 'smooth' });
          }} icon={<IconArrowDown className="ml-2 h-4 w-4" />} /> */}
        </div>
        <section className="flex flex-col space-y-8 md:space-y-12 w-full">
          <div className="mx-auto max-w-3xl pt-6 mb-16">
            <AircraftCardList />
          </div>
        </section>

        <section className="flex flex-col space-y-8 md:space-y-12 w-full">
          <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 flex justify-center">
            <HeroScrollDemo
              id="b737-trainer-section"
              imageSrc="/images/737.png"
              title="FMS Trainer:B737"
              buttonLink={appStoreUrls.b737}
              bundleLink="/products/737-bundle"
              tutorialLink="/tutorials/737"
            />
          </div>
          <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 flex justify-center">
            <HeroScrollDemo
              id="B747-Simulator"
              imageSrc="/images/747.png"
              title="FMS Trainer:B747"
              buttonLink={appStoreUrls.b747}
              bundleLink="/products/747-bundle"
              tutorialLink="/tutorials/747"
            />
          </div>
          <div className="w-full mx-auto lg:px-4 sm:px-6 flex justify-center">
            <HeroScrollDemo
              id="A320-Simulator"
              imageSrc="/images/a320.png"
              title="Airbus A320 FMS"
              buttonLink={appStoreUrls.a320}
              bundleLink="/products/a320-bundle"
              tutorialLink="/tutorials"
            />
          </div>

        </section>

      </main>

      {/* Add the 3D Carousel Demo here */}
      {/* Add the Aurora Text Demo here */}

      <Footer />
    </div>
  );
};

export default OurProductsPage;