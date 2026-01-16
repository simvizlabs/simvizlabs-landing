"use client";

import React from "react";
import { Metadata } from "next";
import NavbarDemo from "@/components/resizable-navbar-demo";
import Footer from "@/components/footer";
import AirlinesLandingPage from "@/components/landing/AirlinesLandingPage";
// import Hero from "@/components/hero";A
import WhySimVizSection from "@/components/landing/WhySimVizSection";
import TrainingManagementSection from "@/components/landing/TrainingManagementSection";
import AirlinesOverviewSection from "@/components/landing/AirlinesOverviewSection";
import AirlinesCTASection from "@/components/landing/AirlinesCTASection";
import { TrainingManagementSectionFeatures2 } from "@/constants/TrainingManagementSectionFeatures";
import TailoredSolutionsSection from "@/components/landing/TailoredSolutionsSection";
import ImplementationSection from "@/components/landing/ImplementationSection";
import Image from "next/image";

const img = "/assets/new-airlines/airlines-header.png";

export const metadata: Metadata = {
  title: "Airline Pilot Training Solutions | Reduce Simulator Costs",
  description: "Optimize your training budget with scalable, tablet-based FMS simulators. A320 & B737 solutions for ease of deployment and lower operational costs.",
};


const content = {
  id: "airlines",
  title: <>Move FMS fundamentals <br /> out of expensive simulators.</>,
  description: <><p className="font-medium">SimViz Labs delivers airline scale FMS training system on iPads:
    <br />
    high-fidelity simulator, integrated LMS,  AI-guided practice, and analytics that improve crew readiness. <br />Your pilots master procedures before simulator sessions. The instructors get objective proficiency data. <br />Airline's training department gains consistent standards across fleets and bases.
  </p>
    <p className="mt-10 font-medium">Airline gets a regulatory complaint and bespoke SOPs built into the system.</p></>,
  button: [
    {
      heading: "Schedule a Demo",
      redirect: "/contact",
      class: "px-4 py-3 sm:px-6 sm:py-4 md:px-7 md:py-6 rounded-xl md:rounded-2xl lg:rounded-3xl bg-[#1381e5] hover:bg-[#1381e5]/90 hover:text-white text-white font-sans font-semibold leading-[normal] not-italic text-sm sm:text-base md:text-lg text-nowrap"
    }
  ],
  // whySimvizSection: {
  //   heading: <>Why <span className="text-[#5ea2ef]">SimViz Labs</span>?</>
  // },
  simvizEnables: {
    heading: <>What <span className="text-[#5ea2ef]">SimViz Labs</span> Enables?</>
  }
}


// const features = [
//   {
//     number: "1.",
//     title: "Safety & Procedural Compliance",
//     description:
//       "Address dynamic hot topics and emerging issues with our machine learning recommender system, ensuring robust safety practices and procedural consistency.",
//   },
//   {
//     number: "2.",
//     title: "Enhanced Simulator Preparedness",
//     description:
//       "Prepare your pilots for live simulator sessions effectively utilizing our advanced iPad-based training applications & LMS for optimal simulator readiness.",
//   },
//   {
//     number: "3.",
//     title: "Improved Decision-Making",
//     description:
//       "Reinforce fundamental knowledge of FMS, FCU, MCP and FMA to improve decision-making and automation management during critical flight phases.",
//   },
//   {
//     number: "4.",
//     title: "Reduce Training Costs & Time",
//     description: "Conserve valuable simulator time and significantly reduce training costs through the efficient use of our comprehensive and effective training tools."
//   },
// ];

const features = [
  {
    id: 1,
    description: "Reduces cost by moving FMS training outside the full flight simulator."
  },
  {
    id: 2,
    description: "Inbuilt LMS solution allows for tailored lesson plans and scenarios for company specific routes."
  },
  {
    id: 3,
    description: "Unlimited self-paced familiarization without cost anxiety."
  },
  {
    id: 4,
    description: "Distance learning capability."
  },
]

const enablesFeatures = [
  {
    number: "1.",
    title: "Cost Efficiency",
    description: "Significantly reduce simulator hours and operational costs by shifting early-stage training to high-fidelity desktop and tablet solutions.",
  },
  {
    number: "2.",
    title: "Standardized Proficiency",
    description: "Ensure every pilot reaches a consistent level of proficiency with automated tracking and performance analytics before they enter the simulator.",
  },
  {
    number: "3.",
    title: "Global Scalability",
    description: "Deploy training across your entire fleet instantly with our worldwide ARINC 424 navigation database and cloud-integrated LMS.",
  },
  {
    number: "4.",
    title: "Real-World Readiness",
    description: "Train with authentic FMS logic and CPDLC workflows, not just static screen captures, preparing pilots for real operational challenges.",
  },
];

const customizations = [
  "FMS and auto-flight training with repeatable, procedure-aligned practice.",
  "Inbuilt LMS solution allows for tailored lesson plans and scenarios for company specific routes.",
  "Unlimited self-paced familiarization without simulator pressure or cost anxiety.",
  "Objective readiness evidence through analytics (gap detection, pattern recognition, targeted remediation).",
  "Distance learning capability.",
  "Instructor tooling: scenario delivery, progress visibility, and data-backed briefing/debrief.",
];

const AirlinesCTASectionContent = {
  benefits: [
    "Your crews master procedures before simulator sessions.",
    "Your instructors get objective proficiency data.",
    "Your training department gains consistent standards across fleets and bases."
  ],
  subtitle: "iPad Based",
  title: <><span className="text-[#5ea2ef]">FMS</span> Simulator</>,
  imageSrc: "/landing/a320/a320_fms_simulator.png"
}

const ImplementationSectionHeading: any[] = [
  <>SimViz Labs runs on modern, cloud-native infrastructure <br /> and is accessible from an iPad, includes an integrated LMS.</>,
  <>Our implementation team works directly with your <br /> airline IT team to align deployment and customization to your environment.</>
];


const AirlinesPage = () => {
  return (
    <div className="bg-[#f5f5f7] text-[#191716] dark:bg-neutral-900 dark:text-white font-sans min-h-screen flex flex-col">
      <NavbarDemo />
      <main className="flex-grow">
        <AirlinesLandingPage ImageBackground={img} content={content} />
        <section className="px-4 bg-[#f5f5f7] sm:px-6 md:px-8 lg:px-16 xl:px-32 mx-auto text-center">
          <div className="max-w-7xl mx-auto flex flex-col items-center gap-6 md:gap-8 lg:gap-10">
            <div className="space-y-3 md:space-y-4">
              <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#191716] tracking-tight font-medium leading-[1.36] font-sans">
                iPad Based
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#191716] tracking-tight max-w-2xl mx-auto leading-[normal] font-sans">
                FMS Simulator & LMS
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 w-full">
              {/* FMS Simulator iPad */}
              <div className="relative group">
                <div className="relative text-left w-full aspect-[4/3] rotate-90 transform transition-all duration-700 hover:scale-[1.02]">
                  <Image
                    src="/assets/new-airlines/fms_simulator.png"
                    alt="FMS Simulator"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>

              {/* LMS iPad */}
              <div className="relative group">
                <div className="relative w-full aspect-[4/3] transform rotate-90 transition-all duration-700 hover:scale-[1.02]">
                  <Image
                    src="/assets/new-airlines/lms.png"
                    alt="LMS"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <WhySimVizSection features={features} content={content} /> */}
        <TrainingManagementSection features={TrainingManagementSectionFeatures2} />
        <TailoredSolutionsSection customizations={customizations} heading="What does my airline get?" imageSrc="/assets/new-airlines/plane_strip.png" />
        <ImplementationSection heading={ImplementationSectionHeading} bgColor="bg-[#f5f5f7]" />
        {/* <AirlinesOverviewSection /> */}
        {/* <AirlinesCTASection content={AirlinesCTASectionContent} /> */}
      </main>
      <Footer bgColor="bg-[#F5F5F7]" />
    </div>
  );
};

export default AirlinesPage;
