import React from "react";
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

const imgGeminiGeneratedImageWlhaq0Wlhaq0Wlha11 = "/assets/ato/ato-header.png";


const AirlinesCTASectionContent = {
    benefits: [
        "Move FMS training to SimViz Labs Solution and use simulator time for high-value training.",
        "Optimize your FFS availability with value added training.",
    ],
    subtitle: "iPad Based",
    title: <><span className="text-[#5ea2ef]">FMS</span> Simulator</>,
    imageSrc: "/landing/a320/a320_fms_simulator.png"
}


const content = {
    id: "ato",
    title: "Smarter training, beyond simulator.",
    description: "SimViz Labs delivers an iPad-based FMS Simulator with an integrated LMS that helps you standardize a baseline while tailoring curriculum and scenarios to the requirements of a specific airline.",
    button: [
        {
            heading: "Schedule a Demo",
            redirect: "/contact",
            class: "px-9 py-7 rounded-[24px] bg-[#1381e5] hover:bg-[#1381e5]/90 hover:text-white font-sans font-semibold leading-[normal] not-italic text-[17px] text-white text-nowrap"
        }
    ],
    simvizEnables: {
        heading: <>Why ATOs use <span className="text-[#5ea2ef]">SimViz Labs ?</span> </>
    }
}

// const features = [
//     {
//         number: "1.",
//         title: "Single Solution for Multiple Variants",
//         description: "Bridge the gap between older and newer FMS variants with customizable training tools built to support mixed-fleet environments."
//     },
//     {
//         number: "2.",
//         title: "Enhanced Simulator Preparedness",
//         description: "Strengthen pilot readiness using our immersive iPad-based training app. Reinforce core knowledge of the FMS, FCU, MCP, and FMA, improving automation management and decision-making during critical flight phases."
//     },
//     {
//         number: "3.",
//         title: "Empowered Students and Instructors",
//         description: "Equip both learners and instructors with next-generation iPad-based FMS training designed to boost confidence, retention, and real-world readiness."
//     },
//     {
//         number: "4.",
//         title: "LMS with Integrated Free Playground",
//         description: "Track progress, assign modules, and monitor performance through seamless LMS integration."
//     },
// ];

const features = [
    {
        id: 1,
        description: "Conserve simulator time for hand flying, decision-making, CRM, emergencies, and non-normal scenarios."
    },
    {
        id: 2,
        description: "Standardize student preparation across all cohorts with structured, measurable iPad training."
    },
    {
        id: 3,
        description: "Overcome instructor and facility capacity constraints by extending training beyond physical simulator availability."
    },
]

const customizations = [
    "Configurable FMS simulator to target airline SOPs and training tracks.",
    "Integrated LMS in the same iPad app: lessons, assignments, progress tracking, and proficiency gates.", "Unlimited self - paced practice anywhere, anytime, repeat until proficient without facility scheduling.",
    "Instructor web dashboard to provide actionable insights, assign scenarios, monitor, and review sessions for brief & debrief.",
    "AI guided scenarios to reduce dependence on instructor availability for fundamentals."
]



const ATOPage = () => {
    return (
        <div className="bg-white text-black dark:bg-neutral-900 dark:text-white font-geist min-h-screen flex flex-col">
            <NavbarDemo />
            <main className="flex-grow">
                <AirlinesLandingPage ImageBackground={imgGeminiGeneratedImageWlhaq0Wlhaq0Wlha11} content={content} />
                <WhySimVizSection features={features} content={content} />
                <TrainingManagementSection features={TrainingManagementSectionFeatures2} />
                <TailoredSolutionsSection customizations={customizations} />
                <AirlinesOverviewSection />
                <AirlinesCTASection content={AirlinesCTASectionContent} />
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
