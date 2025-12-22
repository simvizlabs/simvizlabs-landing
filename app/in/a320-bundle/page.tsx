"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import NavbarDemo from "@/components/resizable-navbar-demo";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Check, Play, CheckCircle, CircleCheck, Info } from "lucide-react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "motion/react";
import ScrollStack, { ScrollStackItem } from '@/components/ScrollStack'
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
 
 
const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Running out of content
      </div>
    ),
  },
];

const StickyScrollRevealSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const paragraphs = [
    "A320 FMS Simulator is a comprehensive Airbus A320 Flight Management System (FMS) and autopilot training platform.",
    "Master the complex systems and procedures before your jet transition, saving valuable simulator time and reducing training costs.",
    "Our platform provides realistic FMS simulation with interactive instructions, helping you build confidence and proficiency.",
    "Join over 10,000+ pilots who have successfully completed their training and landed their dream airline jobs.",
  ];

  // Create transforms for each paragraph - fade in then fade out as next appears
  // Each paragraph is visible for 25% of scroll, with overlap transitions
  const p0Opacity = useTransform(scrollYProgress, [0, 0.2, 0.25], [0, 1, 0]);
  const p0Y = useTransform(scrollYProgress, [0, 0.25], [50, 0]);
  
  const p1Opacity = useTransform(scrollYProgress, [0.2, 0.45, 0.5], [0, 1, 0]);
  const p1Y = useTransform(scrollYProgress, [0.25, 0.5], [50, 0]);
  
  const p2Opacity = useTransform(scrollYProgress, [0.45, 0.7, 0.75], [0, 1, 0]);
  const p2Y = useTransform(scrollYProgress, [0.5, 0.75], [50, 0]);
  
  const p3Opacity = useTransform(scrollYProgress, [0.7, 1], [0, 1]);
  const p3Y = useTransform(scrollYProgress, [0.75, 1], [50, 0]);

  const paragraphStyles = [
    { opacity: p0Opacity, y: p0Y },
    { opacity: p1Opacity, y: p1Y },
    { opacity: p2Opacity, y: p2Y },
    { opacity: p3Opacity, y: p3Y },
  ];

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-white dark:bg-neutral-900">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="flex flex-col items-center gap-10">
            {/* Text content - centered */}
            <div className="w-full max-w-4xl space-y-4 text-center">
              <div>
                <h2 className="text-[64px] font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl font-geist">
                  Master The FMS
                </h2>
                <h2 className="text-[64px] font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl font-geist">
                  Before Your Jet Transition
                </h2>
              </div>
              
              {/* Single paragraph container - paragraphs replace each other */}
              <div className="relative h-40 flex items-center justify-center">
                {paragraphs.map((text, index) => (
                  <motion.div
                    key={index}
                    style={{
                      opacity: paragraphStyles[index].opacity,
                      y: paragraphStyles[index].y,
                      position: 'absolute',
                    }}
                    className="flex items-start gap-4 w-full max-w-xl px-4"
                  >
                    {/* Vertical line with circular bubble */}
                    <div className="flex flex-col items-center flex-shrink-0 pt-1">
                      {/* Circular bubble */}
                      <motion.div
                        style={{
                          opacity: paragraphStyles[index].opacity,
                        }}
                        className="w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400 border-2 border-white dark:border-gray-900 shadow-lg"
                      />
                      {/* Vertical line */}
                      <div 
                        className="w-0.5 h-full min-h-[80px]" 
                        style={{
                          background: 'linear-gradient(to bottom, rgba(19, 129, 229, 1), rgba(217, 217, 217, 1))'
                        }}
                      />
                    </div>
                    {/* Paragraph text */}
                    <p className="text-base lg:text-xl leading-8 font-normal text-black font-medium dark:text-gray-300 font-geist flex-1 pt-1">
                      {text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Image below content - Fixed */}
            <div className="relative w-full max-w-4xl">
              <div className="relative w-full">
                <Image
                  src="/images/in/a320/1.png"
                  alt="A320 FMS Simulator Interface"
                  width={1256}
                  height={800}
                  className=" w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HorizontalScrollRevealSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const attributes = [
    {
      title: "Timeliness",
      description: "Mastery of core FMS systems and automation will save significant FMS and automation training time, usually allocated to new type pilots."
    },
    {
      title: "Reduced Simulator and Training Load",
      description: "Once a trainee is FMS-competent, the simulator instructor can focus on other critical areas, leading to faster overall training progression."
    },
    {
      title: "Lower Risk of Remedial Training",
      description: "A trainee significantly reduces the risk of needing remedial training, saving both time and money for the airline."
    },
    {
      title: "Enhanced Decision-Making",
      description: "FMS proficiency enables better situational awareness and more effective decision-making during flight operations."
    },
  ];

  // Calculate container translateX - slides left to reveal next cards
  // We have 4 cards, show 3 at a time, so we need to slide by 1 card width
  // Slide by calc(-100% / 3) which is one card width
  const containerX = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', 'calc(-100% / 3)']
  );

  // Calculate opacity for each card - fade in as it comes into view
  const getCardOpacity = (index: number) => {
    const totalCards = attributes.length;
    const scrollPerCard = 1 / totalCards;
    const startScroll = index * scrollPerCard;
    const endScroll = Math.min((index + 1) * scrollPerCard, 1);
    
    // First 3 cards are visible from start
    if (index < 3) {
      return useTransform(
        scrollYProgress,
        [0, startScroll + 0.1],
        [1, 1]
      );
    }
    
    // Last card fades in as we scroll
    return useTransform(
      scrollYProgress,
      [startScroll - 0.1, startScroll, endScroll],
      [0, 1, 1]
    );
  };

  const card0Opacity = getCardOpacity(0);
  const card1Opacity = getCardOpacity(1);
  const card2Opacity = getCardOpacity(2);
  const card3Opacity = getCardOpacity(3);

  const cardOpacities = [
    card0Opacity,
    card1Opacity,
    card2Opacity,
    card3Opacity,
  ];

  return (
    <section 
      ref={containerRef} 
      className="relative h-[400vh]"
      style={{
        background: 'linear-gradient(to bottom, rgba(25, 23, 22, 1), rgba(43, 51, 68, 1))'
      }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="flex flex-col items-center gap-12">
            {/* Heading */}
            <div className="text-center">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl font-geist">
                Demonstrated FMS Competence Signals Four Critical Attributes:
              </h2>
            </div>

            {/* Cards Container - Horizontal Scroll */}
            <div className="relative w-full overflow-hidden">
              <motion.div 
                className="flex gap-8 justify-center md:justify-start"
                style={{ x: containerX }}
              >
                {attributes.map((attr, index) => (
                  <motion.div
                    key={index}
                    style={{
                      opacity: cardOpacities[index],
                    }}
                    className="flex-shrink-0 w-full md:w-[calc(33.333%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] min-w-[280px] max-w-[400px]"
                  >
                    <div className="bg-gray-800 dark:bg-neutral-900 rounded-xl p-6 h-full">
                      <h3 className="text-xl font-bold text-white mb-4 font-geist">
                        {attr.title}
                      </h3>
                      <p className="text-gray-300 dark:text-gray-400 font-geist">
                        {attr.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const A320FMSLandingPage = () => {
  const router = useRouter();

  // Interview preparation topics
  const interviewTopics = [
    "Managed vs selected modes",
    "VNAV behaviour and descent planning",
    "STAR constraints and revisions",
    "Holding entry programming",
    "PERF page calculations",
    "FCU mode logic",
  ];

  // A320 FMS Simulator Advantage cards
  const advantageCards = [
    {
      number: 1,
      text: "Type rating proficient in FMS and autopilot operations.",
      hasBorder: true,
    },
    {
      number: 2,
      text: "Simulator session that dedicated for aircraft handling, SOPs, and real world decision making.",
      hasBorder: false,
    },
    {
      number: 3,
      text: "Convert ₹40,000 of simulator time into effective flying training.",
      hasBorder: false,
    },
  ];

  // Training platform cards data
  const trainingPlatformCards = [
    {
      title: "FMS Simulator",
      description: "A highly realistic A320 FMS and auto flight trainer developed by airline simulator instructors.",
      image: "/images/in/a320/fms_mock.png",
      imageAlt: "FMS Simulator Interface",
      featuresLabel: "Key Features:",
      features: [
        "Full MCDU functionality",
        "Complete preflight programming (DIFRIPPS)",
        "SID/STAR programming",
        "LNAV/VNAV logic",
        "ND, EFIS, and FCU integration",
        "Managed and selected mode operations",
        "Auto flight mode transitions",
      ],
    },
    {
      title: "Structured LMS",
      description: "IInstructor‑led modules aligned with airline SOPs and interview expectations. ",
      image: "/images/in/a320/lms_mock.png",
      imageAlt: "Structured LMS Interface",
      featuresLabel: "Training modules:",
      features: [
        "FMS fundamentals and phases of flight",
        "Pre‑flight setup and performance planning",
        "VNAV logic and descent planning",
        "Managed vs selected philosophy",
        "Route changes, holds, and diversions",
        "Approach setup and missed approaches",
      ],
    },
  ];

  return (
    <div className="bg-white text-black dark:bg-neutral-900 dark:text-white font-geist min-h-screen">
      <NavbarDemo />
      
      <main>
        {/* Hero Section - Fullscreen with Background Video */}
        <section className="relative h-screen w-full overflow-hidden">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
            <source src="/videos/hero-video.webm" type="video/webm" />
            {/* Fallback image if video doesn't load */}
            <div className="absolute inset-0 bg-purple-100 dark:bg-purple-950/30" />
          </video>
          
          {/* Overlay for better text readability */}
          {/* <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 via-purple-800/30 to-purple-900/50" /> */}
          <div className="absolute inset-0 bg-[#E7E7FF]"/>
          {/* Content */}
          <div className="relative z-10 flex h-full items-end justify-center pb-16 md:pb-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
              <div className="mx-auto text-center">
                <h1 className="text-5xl font-bold tracking-tight text-[#252121] sm:text-6xl lg:text-[96px] font-geist drop-shadow-lg">
                  A320 FMS Simulator
                </h1>
                <p className="mt-6 text-[32px] leading-8 text-[#252121] font-geist drop-shadow-md">
                  Land Your Dream Airline Job with Complete FMS and Automation Mastery
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Button
                    size="lg"
                    className="bg-[#1381E5] hover:bg-blue-700 rounded-[24px] font-semibold text-white px-8 py-6 text-lg font-geist "
                    onClick={() => router.push("/checkout")}
                  >
                    Start Training
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[1px] border-[#1381E5] bg-white/10 rounded-[24px] backdrop-blur-sm text-[#1381E5] hover:bg-white/20 px-8 py-6 text-lg font-geist"
                  >
                    {/* <Play className="mr-2 h-5 w-5" /> */}
                    Watch Demo
                  </Button>
                </div>
                <p className="mt-2 text-[16px] text-[#252121] font-bold font-geist drop-shadow-md">
                One plan. Full access. ₹9,000/year.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Master The FMS Section - Sticky Scroll Reveal */}
        <StickyScrollRevealSection />

        {/* FMS Competence Attributes - Horizontal Scroll Reveal */}
        <HorizontalScrollRevealSection />

       

        {/* A320 FMS Simulator Advantage - Dark Grey Background */}
        <section className="py-24" style={{ background: 'linear-gradient(to bottom, rgba(34, 33, 33, 1), rgba(25, 23, 22, 1))' }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex justify-center">
              <div className="relative w-full text-center max-w-5xl">       
                <Image
                  src="/images/in/a320/fms_simulator.png"
                  alt="A320 FMS Control Display Unit"
                  width={1256}
                  height={900}
                  className="rounded-xl max-w-[759px] max-h-[990px] shadow-2xl"
                />
              </div>
            </div>
            <div className="max-w-3xl my-24">
              <h2 className="text-7xl font-bold tracking-tight text-white sm:text-5xl font-geist">
                A320 FMS Simulator Advantage
              </h2>
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {advantageCards.map((card, index) => (
                  <div
                    key={index}
                    className="bg-[#222121] rounded-xl relative"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      padding: '20px 36px',
                      height: '313px',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span className="text-3xl font-bold text-white font-geist block mb-4">
                      {card.number}.
                    </span>
                    <p className="text-2xl text-white font-geist">
                      {card.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Training Platform Overview - Dark Grey Background */}
        <section className="bg-[#222121] dark:bg-neutral-950 h-screen flex items-center justify-center">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
            <div className="max-w-3xl text-left mb-16">
              <h2 className="text-6xl font-bold tracking-tight text-white sm:text-5xl font-geist">
                Training Platform Overview
              </h2>
            </div>
            <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8">
              {trainingPlatformCards.map((card, index) => (
                <div key={index} className="bg-[#272727] dark:bg-neutral-900 rounded-[36px] p-8">
                    <div className="mb-6">
                    <Image
                      src={card.image}
                      alt={card.imageAlt}
                      width={600}
                      height={400}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="text-3xl font-bold text-white font-geist">{card.title}</h3>
                    <Info className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-gray-300 text-lg dark:text-gray-400 mb-6 font-geist">
                    {card.description}
                  </p>

                  <div>
                    <p className="text-white font-semibold mb-3 font-geist">{card.featuresLabel}</p>
                  <hr className="border-gray-400 mb-1" />
                    <ul className="space-y-2 text-gray-300 dark:text-gray-400 font-geist">
                      {card.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex text-lg text-[#FFFFFFB2] opacity-70 font-normal items-center gap-2">
                           {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Train for Real-World Airline Interviews - White Background */}
        <section className="bg-[#F5F5F7] dark:bg-neutral-900 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-7xl bg-white grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:p-28 rounded-[24px]">
              <div>
                <Image
                  src="/images/in/a320/candidate_screening.png"
                  alt="Pilot Interview Training"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
              </div>
              <div >
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl font-geist mb-6">
                  Train for Real-World Airline Interviews
                </h2>
                <p className="text-lg leading-8 font-medium text-gray-700 dark:text-gray-300 font-geist mb-6">
                  The platform prepares pilots for common airline technical interview questions, including:
                </p>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300 font-geist">
                  {interviewTopics.map((topic, index) => (
                    <li key={index} className="flex items-center gap-2 text-lg font-medium">
                      <CircleCheck className="h-5 w-5 flex-shrink-0" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* A320 FMS Simulator Is Built For - White Background */}
        <section className="bg-[#F5F5F7] dark:bg-neutral-900 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl font-geist">
                A320 FMS Simulator Is Built For
              </h2>
            </div>
            <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="mb-4">
                  <Image
                    src="/images/airline.png"
                    alt="CPL Holders"
                    width={300}
                    height={300}
                    className="rounded-xl mx-auto"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 font-geist">
                  CPL Holders
                </h3>
                <p className="text-gray-600 dark:text-gray-400 font-geist">
                  Looking for their first airline job.
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4">
                  <Image
                    src="/images/airline.png"
                    alt="Pilots"
                    width={300}
                    height={300}
                    className="rounded-xl mx-auto"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 font-geist">
                  Pilots
                </h3>
                <p className="text-gray-600 dark:text-gray-400 font-geist">
                  Seeking type rating preparation.
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4">
                  <Image
                    src="/images/airline.png"
                    alt="Airline Pilots"
                    width={300}
                    height={300}
                    className="rounded-xl mx-auto"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 font-geist">
                  Airline Pilots
                </h3>
                <p className="text-gray-600 dark:text-gray-400 font-geist">
                  Looking for recurrent training.
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4">
                  <Image
                    src="/images/airline.png"
                    alt="Aviation Professionals"
                    width={300}
                    height={300}
                    className="rounded-xl mx-auto"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 font-geist">
                  Aviation Professionals
                </h3>
                <p className="text-gray-600 dark:text-gray-400 font-geist">
                  Enhancing their skills and knowledge.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Turn Expensive Simulator Time Into Effective Training - White Background */}
        <section className="bg-[#F5F5F7] dark:bg-neutral-900 h-screen flex items-center justify-center">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
            <div className="flex flex-col items-center justify-center">
              <div className="mx-auto max-w-4xl text-center mb-12">
                <h2 className="lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl font-geist mb-6">
                  Turn Expensive Simulator Time Into Effective Training
                </h2>
                <div className="space-y-2 text-2xl font-normal text-gray-700 dark:text-gray-300 font-geist">
                  <p>Traditional type rating cost ~₹3,000,000. </p>
                  <p>Add  ₹800,000 – ₹1,200,000 for additional simulator session.</p>
                </div>
              </div>
              <div className="rounded-2xl px-20 mx-24 ">
                <div className=" border-2 border-[#1381E5] bg-white rounded-[24px] px-48 py-16">
                  <h3 className="text-2xl font-bold text-[#1381E5] dark:text-white mb-2 font-geist text-center">
                  For individuals
                  </h3>
                  <div className="text-center mb-6">
                    <span className="lg:text-7xl font-bold text-gray-900 dark:text-white font-geist">₹9,000</span>
                    <br/>
                    <span className="text-gray-600 dark:text-gray-400 font-geist ml-2">per year</span>
                  </div>
                  <div className="text-center w-full">
                  <Button
                    size="lg"
                    className="max-w-64 rounded-[24px] bg-[#1381E5] hover:bg-blue-700 text-white mb-6 font-geist"
                    onClick={() => router.push("/checkout")}
                  >
                    Get Started
                  </Button>
                  </div>
                  <hr className="border-gray-400 my-6" />
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300 font-geist">
                    <li className="flex lg:text-xl items-start gap-2">
                      <CircleCheck className="h-5 w-5 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                      <span>Complete A320 FMS and auto flight simulator</span>
                    </li>
                    <li className="flex lg:text-xl items-start gap-2">
                      <CircleCheck className="h-5 w-5 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                      <span>All learning and training modules</span>
                    </li>
                    <li className="flex lg:text-xl items-start gap-2">
                      <CircleCheck className="h-5 w-5 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                      <span>Airline interview preparation content</span>
                    </li>
                    <li className="flex lg:text-xl items-start gap-2">
                      <CircleCheck className="h-5 w-5 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                      <span>Unlimited practice with no usage limits</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Group Training Image - Black and White */}
        {/* <section className="bg-gray-100 dark:bg-neutral-800 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex justify-center">
              <Image
                src="/images/schools.png"
                alt="Group Training Session"
                width={1200}
                height={600}
                className="rounded-xl shadow-lg grayscale"
              />
            </div>
          </div>
        </section> */}

        {/* About SimvizLabs - Dark Grey Background */}
        <section className="bg-black">
                 <Image
                    src="/images/in/a320/aviation_academy_meeting.png"
                    alt="About SimvizLabs"
                    width={1200}
                    height={600}
                    className="w-full"
                />
           <div className="mx-auto max-w-7xl px-6 lg:px-8">
           
            <div className="mx-auto max-w-5xl text-center bg-black py-52">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl font-geist mb-6">
                About SimvizLabs
              </h2>
              <p className="text-xl leading-8 text-gray-300 dark:text-gray-400 font-geist">
              Our mission is to democratize professional aviation training by enabling pilots to maximize the value of expensive simulator time through early system mastery.              </p>
            </div>
          </div>
        </section>
      </main>

    <div className="-m-[1px]" >
      <Footer />
      </div>
    </div>
  );
};

export default A320FMSLandingPage;

