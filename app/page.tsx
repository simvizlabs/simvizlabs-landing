import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Feature108 from "@/components/Feature108";
import NavbarDemo from "@/components/resizable-navbar-demo";
import Pricing from "@/components/pricing";
import Testimonial from "@/components/testimonial";
import VerticalEventTimeline from "@/components/timeline";
import FeaturesSection from "@/components/FeaturesSection";
import FeaturesSectionDemo from "@/components/Benefits";

export default function Home() {
  return (
    <>
      <NavbarDemo />
      <Hero />
      <Feature108 />
      <VerticalEventTimeline />
      <FeaturesSection />
      <FeaturesSectionDemo />
      <FAQ />
      <Testimonial />
      <Pricing />
      <Footer />
    </>
  );
}
