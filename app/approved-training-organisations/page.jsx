import React from "react";
import NavbarDemo from "@/components/resizable-navbar-demo";
import Footer from "@/components/footer";
import AirlinesLandingPage from "@/components/landing/AirlinesLandingPage";
// import Hero from "@/components/hero";A
import WhySimVizSection from "@/components/landing/WhySimVizSection";
import TrainingManagementSection from "@/components/landing/TrainingManagementSection";
import TrainingManagementSectionFeatures from "@/constants/TrainingManagementSectionFeatures";

const imgGeminiGeneratedImageWlhaq0Wlhaq0Wlha11 = "/assets/ato/ato-header.png";


const content = {
    title: "Elevate your training programs.",
    description: "All-in-one platform for managing type rating content, assessments, and performance.",
    button: [
        {
            heading: "Schedule a Demo",
            redirect: "/contact",
            class: "px-9 py-7 rounded-[24px] border-[#1381e5] hover:border-[#1381e5] hover:text-[#1381e5] font-sans font-semibold leading-[normal] not-italic text-[17px] text-[#1381e5] text-nowrap"
        }
    ]
}

const features = [
    {
        number: "1.",
        title: "Single Solution for Multiple Variants",
        description: "Bridge the gap between older and newer FMS variants with customizable training tools built to support mixed-fleet environments."
    },
    {
        number: "2.",
        title: "Enhanced Simulator Preparedness",
        description: "Strengthen pilot readiness using our immersive iPad-based training app. Reinforce core knowledge of the FMS, FCU, MCP, and FMA, improving automation management and decision-making during critical flight phases."
    },
    {
        number: "3.",
        title: "Empowered Students and Instructors",
        description: "Equip both learners and instructors with next-generation iPad-based FMS training designed to boost confidence, retention, and real-world readiness."
    },
    {
        number: "4.",
        title: "LMS with Integrated Free Playground",
        description: "Track progress, assign modules, and monitor performance through seamless LMS integration."
    },
];




const ATOPage = () => {
    return (
        <div className="bg-white text-black dark:bg-neutral-900 dark:text-white font-geist min-h-screen flex flex-col">
            <NavbarDemo />
            <main className="flex-grow">
                <AirlinesLandingPage ImageBackground={imgGeminiGeneratedImageWlhaq0Wlhaq0Wlha11} content={content} />
                <WhySimVizSection features={features} />
                <TrainingManagementSection features={TrainingManagementSectionFeatures} />
            </main>
            <Footer theme="light" />
        </div>
    );
};

export const metadata = {
    title: "ATO Training Software | CBTA Compliant FMS Tools",
    description: "Enhance your Approved Training Organisation's curriculum with modern, EASA/ICAO compliant FMS simulators. Improve student pass rates today.",
};

export default ATOPage;
