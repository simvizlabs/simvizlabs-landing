import React from "react";
import NavbarDemo from "@/components/resizable-navbar-demo";
import Footer from "@/components/footer";
import AirlinesLandingPage from "@/components/landing/AirlinesLandingPage";
// import Hero from "@/components/hero";A
import WhySimVizSection from "@/components/landing/WhySimVizSection";
import TrainingManagementSection from "@/components/landing/TrainingManagementSection";
import TrainingManagementSectionFeatures from "@/constants/TrainingManagementSectionFeatures";

const img = "/assets/new-airlines/0405ef7ef781aee2424caa7e8b47e1295c72a1b6.png";

const content = {
  title: "Enhance your training ecosystem.",
  description: "SimViz Labs offers a flexible training management system with access to experts in aviation course development, software development, and learning analytics.",
  button: [
    {
      heading: "Schedule a Demo",
      redirect: "/contact-us",
      class: "px-9 py-7 rounded-[24px] border-[#1381e5] hover:border-[#1381e5] hover:text-[#1381e5] font-sans font-semibold leading-[normal] not-italic text-[17px] text-[#1381e5] text-nowrap"
    }
  ]
}

const features = [
  {
    number: "1.",
    title: "Safety & Procedural Compliance",
    description:
      "Address dynamic hot topics and emerging issues with our machine learning recommender system, ensuring robust safety practices and procedural consistency.",
  },
  {
    number: "2.",
    title: "Enhanced Simulator Preparedness",
    description:
      "Prepare your pilots for live simulator sessions effectively utilizing our advanced iPad-based training applications & LMS for optimal simulator readiness.",
  },
  {
    number: "3.",
    title: "Improved Decision-Making",
    description:
      "Reinforce fundamental knowledge of FMS, FCU, MCP and FMA to improve decision-making and automation management during critical flight phases.",
  },
  {
    number: "4.",
    title: "DReduce Training Costs & Time",
    description: "Conserve valuable simulator time and significantly reduce training costs through the efficient use of our comprehensive and effective training tools."
  },
];




const AirlinesPage = () => {
  return (
    <div className="bg-white text-black dark:bg-neutral-900 dark:text-white font-geist min-h-screen flex flex-col">
      <NavbarDemo />
      <main className="flex-grow">
        <AirlinesLandingPage ImageBackground={img} content={content} />
        <WhySimVizSection features={features} />
        <TrainingManagementSection features={TrainingManagementSectionFeatures} />
      </main>
      <Footer theme="light" />
    </div>
  );
};

export default AirlinesPage;
