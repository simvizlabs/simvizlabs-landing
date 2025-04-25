import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Feature108 from "@/components/Feature108";
import NavbarDemo from "@/components/resizable-navbar-demo";
import VerticalEventTimeline from "@/components/timeline";
import FeaturesSectionDemo from "@/components/Benefits";
import BentoGrid from "@/components/BentoGrid";
import { FaqSectionDemo } from "@/components/FaqSectionDemo";
import { MarqueeDemo } from "@/components/MarqueeDemo";
import { RetroGridDemo } from "@/components/RetroGridDemo";
import Head from 'next/head';

export default function Home() {

  return (
    <>
        <Head>
          <title>SimvizLabs - Next-Gen Pilot Training</title>
          <meta name="description" content="Experience cutting-edge aviation training with SimvizLabs. Our interactive, data-driven solutions enhance pilot performance and operational safety." />
          <meta name="keywords" content="pilot training, aviation, flight simulation, distance learning, pilot performance, operational safety, SimvizLabs" />
        </Head>
      <NavbarDemo />
      <Hero />
      <Feature108 />
      <VerticalEventTimeline />
      <BentoGrid />
      <FeaturesSectionDemo />
      <FaqSectionDemo />
      <MarqueeDemo />
      <RetroGridDemo />
      <Footer />
    </>
  );
}
