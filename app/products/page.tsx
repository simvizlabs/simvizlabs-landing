"use client";

import React from "react";
import { HovermeButtonDemo } from '@/components/eldoraui/hoverme';
import Head from "next/head"; // Import Head
import NavbarDemo from "@/components/resizable-navbar-demo";
import Footer from "@/components/footer";
import { IconArrowDown } from "@tabler/icons-react"; // Import App Store Icon
import { ThreeDPhotoCarouselDemo } from "@/components/ui/demo"; // Import the 3D carousel demo component
import { HeroScrollDemo } from "@/components/ui/hero-scroll-demo";
import { AuroraText } from "@/components/magicui/aurora-text";

function AuroraTextDemo() {
  return (
    <h1 className="pt-16 text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
      Explore Our  <AuroraText colors={["#0070F3", "#FF8C00"]}>Products</AuroraText>
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
        <title>Realistic iPad CDU/FMS Simulators for Pilot Training | B737, B747, A320 | SimvizLabs</title>
        <meta name="description" content="Explore SimvizLabs' range of realistic iPad CDU/FMS flight simulators for B737, B747, and A320 pilot training. Master complex workflows with our free and pro versions." />
        <meta name="keywords" content="iPad flight simulator, CDU simulator, FMS simulator, pilot training app, B737 training, B747 training, A320 training, SimvizLabs, flight sim, aviation training" />
      </Head>
      <NavbarDemo />
      <main className="space-y-8 px-6 py-16 max-w-7xl mx-auto">
      
      <section className="pt-16 text-center">
        <AuroraTextDemo />
      </section>
<div className="flex justify-center ">
        <HovermeButtonDemo text="View All" onClick={() => {
            document.getElementById('b737-trainer-section')?.scrollIntoView({ behavior: 'smooth' });
          }} icon={<IconArrowDown className="ml-2 h-4 w-4" />} />

      </div>
      <section>
        <ThreeDPhotoCarouselDemo />
 <HeroScrollDemo
          id="b737-trainer-section" // Add an ID for scrolling
          imageSrc="/images/737.png"
          title="B737 CDU Trainer"
          description="Master the 737 CDU."
          buttonLink={appStoreUrls.b737}
          bundleLink="/products/737-bundle"
        />
        <HeroScrollDemo
          imageSrc="/images/747.png"
          title="B747 Simulator"
          description="Experience the Queen of the Skies."
          buttonLink={appStoreUrls.b747}
          bundleLink="/products/747-bundle"
        />
        <HeroScrollDemo
          imageSrc="/images/a320.png"
          title="A320 Simulator"
          description="Explore the A320 MCDU."
          buttonLink={appStoreUrls.a320}
          bundleLink="/products/a320-bundle"
        />
      </section>
</main>

      {/* Add the 3D Carousel Demo here */}
{/* Add the Aurora Text Demo here */}
     
      <Footer />
    </div>
  );
};

export default OurProductsPage;