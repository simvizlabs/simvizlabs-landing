import FAQ from "@/components/faq";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Feature108 from "@/components/Feature108";
import NavbarDemo from "@/components/resizable-navbar-demo";
import Pricing from "@/components/pricing";
import Testimonial from "@/components/testimonial";
import VerticalEventTimeline from "@/components/timeline";

export default function Home() {
  return (
    <>
      <NavbarDemo />
      <Hero />
      <Feature108 />
      <VerticalEventTimeline />
      <Features />
      <FAQ />
      <Testimonial />
      <Pricing />
      <Footer />
    </>
  );
}
