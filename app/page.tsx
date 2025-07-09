"use client"; // Add "use client" directive for useEffect

import { useEffect } from 'react'; // Import useEffect
import HeroSection from "@/components/hero-section";
import Footer from "@/components/footer";
import NavbarDemo from "@/components/resizable-navbar-demo";
import FeatureSection from "@/components/FeatureSection";
import FeaturesSectionDemo from "@/components/Benefits";



export default function Home() {

  useEffect(() => {
    // Check if there's a ha
    //  in the URL after the component mounts
    if (typeof window !== 'undefined' && window.location.hash) {
      const id = window.location.hash; // e.g., "#timeline"
      const element = document.querySelector(id);
      if (element) {
        // Wait a brief moment for the layout to settle, then scroll
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100); // Adjust delay if needed
      }
    }
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <>
        
      
      <NavbarDemo />
      <HeroSection />
      
    
      <FeatureSection id="feature-section" />
    
      <FeaturesSectionDemo />
      
      <Footer />
    </>
  );
}
