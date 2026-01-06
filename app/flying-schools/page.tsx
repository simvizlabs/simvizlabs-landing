import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head"; // Import Head

import { Button } from "../../components/ui/button";
import NavbarDemo from "../../components/resizable-navbar-demo";
import Footer from "../../components/footer";
import { IconSchool, IconRocket, IconBriefcase, IconUsers, IconNotebook, IconLayoutDashboard, IconDeviceLaptop, IconChartHistogram, IconDeviceAudioTape, IconDeviceTabletQuestion } from "@tabler/icons-react";
import TrainingManagementSectionFeatures from "@/constants/TrainingManagementSectionFeatures";
import AirlinesLandingPage from "@/components/landing/AirlinesLandingPage";
import WhySimVizSection from "@/components/landing/WhySimVizSection";
import TrainingManagementSection from "@/components/landing/TrainingManagementSection";


const content = {
  title: "Boost your students career success.",
  description: "Give your students a competitive edge in airline interviews with our self-paced LMS course with an integrated FMS trainer.",
  button: [
    {
      heading: "Schedule a Demo",
      redirect: "/contact-us",
      class: "px-9 py-7 rounded-[24px] bg-[#1381e5] border-[#1381e5] hover:border-[#1381e5] hover:text-[#1381e5] font-sans font-semibold leading-[normal] not-italic text-[17px] text-[#fff] text-nowrap"
    }
  ]
}

const features = [
  {
    number: "1.",
    title: 'Modernize your Training Programs ',
    description:
      'Boost graduate success by embedding industry-relevant automation skills — without the cost of full simulators. Providing students with hands-on experience in transport category aircraft systems that are otherwise inaccessible.',
  },
  {
    number: "2.",
    title: 'Enhanced Employability & Curriculum Value',
    description:
      'Equip students with practical experience in FMS, FCU/MCP, and FMA operations — key competencies evaluated in airline training and simulator checks.',
  },
  {
    number: "3.",
    title: 'Empower Instructors',
    description:
      'Track student progress, efficiently assign modules, and monitor performance effectively through seamless LMS integration.',
  },
  {
    number: "4.",
    title: 'Harness Cutting-Edge Technology',
    description:
      'Enhance your training program and optimize resources with realistic, state-of-the-art virtual simulations, an integrated LMS with content management system, and interactive playground.',
  },
]

const img = "/assets/flying-school/flying-school-header.png"



const AeronauticalsPage = () => {
  return (
    <div className="bg-white text-black dark:bg-neutral-900 dark:text-white font-geist">

      <Head>
        <title className="font-geist">Aeronautical Schools Training Solutions | EBAT & FMC Emulators | SimViz Labs</title>
        <meta name="description" content="Specialized training solutions for aeronautical schools, featuring SimViz Labs' tablet FMC emulators, EBAT dashboards, CPDLC/Non-Normal packs, and data-driven refresher solutions." className="font-geist" />
        <meta name="keywords" content="aeronautical school training, pilot training solutions, EBAT system, FMC emulator, CPDLC training, non-normal procedures, flight operations, SimViz Labs" className="font-geist" />
      </Head>
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

export default AeronauticalsPage;