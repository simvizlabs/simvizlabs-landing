"use client";


import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import NavbarDemo from "@/components/resizable-navbar-demo";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { CircleCheck, Info } from "lucide-react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { motion, useScroll, useTransform } from "motion/react";
import { OrderSummaryModal } from "@/components/OrderSummaryModal";

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
    <section ref={containerRef} className="relative min-h-[400vh] bg-white dark:bg-neutral-900 pt-16 sm:pt-20 md:pt-24">
      <div className="sticky top-0 min-h-screen flex items-center justify-center overflow-hidden py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col items-center gap-6 md:gap-8 lg:gap-10">
            {/* Text content - centered */}
            <div className="w-full max-w-4xl space-y-2 md:space-y-4 text-center px-4">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-8xl font-bold tracking-tight text-gray-900 dark:text-white font-geist">
                  Master The FMS
                </h2>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-8xl font-bold tracking-tight text-gray-900 dark:text-white font-geist">
                  Before Your Jet Transition
                </h2>
              </div>
              
              {/* Single paragraph container - paragraphs replace each other */}
              <div className="relative h-32 md:h-40 flex items-center justify-center">
                {paragraphs.map((text, index) => (
                  <motion.div
                    key={index}
                    style={{
                      opacity: paragraphStyles[index].opacity,
                      y: paragraphStyles[index].y,
                      position: 'absolute',
                    }}
                    className="flex items-start gap-2 md:gap-4 w-full max-w-xl px-2 md:px-4"
                  >
                    {/* Vertical line with circular bubble */}
                    <div className="flex flex-col items-center flex-shrink-0 pt-1">
                      {/* Circular bubble */}
                      <motion.div
                        style={{
                          opacity: paragraphStyles[index].opacity,
                        }}
                        className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-blue-600 dark:bg-blue-400 border-2 border-white dark:border-gray-900 shadow-lg"
                      />
                      {/* Vertical line */}
                      <div 
                        className="w-0.5 h-full min-h-[60px] md:min-h-[80px]" 
                        style={{
                          background: 'linear-gradient(to bottom, rgba(19, 129, 229, 1), rgba(217, 217, 217, 1))'
                        }}
                      />
                    </div>
                    {/* Paragraph text */}
                    <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg leading-6 md:leading-8 font-medium text-black dark:text-gray-300 font-geist flex-1 pt-1">
                      {text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Image below content - Fixed */}
            <div className="relative w-full max-w-4xl px-4">
              <div className="relative w-full">
                <Image
                  src="/images/in/a320/1.png"
                  alt="A320 FMS Simulator Interface"
                  width={1256}
                  height={800}
                  className="w-full h-auto"
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
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const attributes = [
    {
      title: "Trainability",
      description: "Mastery of complex systems such as FMS and autoflight demonstrates a pilot's ability to understand, apply, and retain advanced technical concepts."
    },
    {
      title: "Reduced Simulator and Training Load",
      description: "Pilots proficient in FMS logic require fewer simulator hours for basic system familiarisation, allowing instructors to focus on aircraft handling and procedures. "
    },
    {
      title: "Lower Risk of Remedial Training",
      description: "Airlines significantly reduce simulator overruns and remedial training costs by selecting pilots with strong automation knowledge. "
    },
    {
      title: "Improved Operational Readiness",
      description: "Proficiency in automation management reflects stronger situational awareness, decision-making, and flight path control. "
    },
  ];

  // Adjust transform for wider cards (50% width each, show 2 at a time)
  // To show all 4 cards, move by approximately 100% (2 card widths)
  const x = useTransform(scrollYProgress, [0.15, 1], ["1%", "-115%"]);

  return (
    <section 
      ref={targetRef} 
      className="relative h-auto md:h-[300vh] pt-16 sm:pt-20 md:pt-24 pb-12 md:pb-0"
      style={{
        background: 'linear-gradient(to bottom, #191716, #2B3344)'
      }}
    >
      <div className="md:sticky md:top-0 flex min-h-0 md:min-h-screen items-start md:items-center overflow-hidden py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl m-auto overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12  2xl:px-24">
          <div className="relative">
            {/* Heading */}
            <div className="mb-20 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tight text-white font-geist">
                <span className="inline-block">D</span>
                <span className="inline-block">emonstrated FMS Competence</span>
              </h2>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tight text-white font-geist">
                Signals Four Critical Attributes:
              </h2>
            </div>

            {/* Desktop: Horizontal Scroll Cards */}
            <div className="hidden md:block lg:mt-24 relative">
              <motion.div style={{ x }} className="flex gap-4 md:gap-6 lg:gap-8">
                {attributes.map((attr, index) => (
                  <Card key={index} attr={attr} />
                ))}
              </motion.div>
            </div>

            {/* Mobile: Vertical Stack Cards */}
            <div className="md:hidden flex flex-col gap-6 pl-[0.5em]">
              {attributes.map((attr, index) => (
                <Card key={index} attr={attr} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Card = ({ attr }: { attr: { title: string; description: string } }) => {
  return (
    <div className="flex-shrink-0 w-full md:w-[calc(55%-1rem)] lg:w-[calc(55%-1.5rem)] xl:w-[calc(55%-2rem)]">
      <div className="rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 h-full">
        <h3 className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl font-bold text-white mb-3 md:mb-4 font-geist">
          {attr.title}
        </h3>
        <hr className="border-gray-400 mb-3 md:mb-4" />
        <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-2xl text-gray-300 dark:text-gray-400 font-geist leading-relaxed">
          {attr.description}
        </p>
      </div>
    </div>
  );
};

const PilotCard = ({ pilot }: { pilot: { image: string; alt: string; title: string; description: string } }) => {
  return (
    <div className="text-center sm:text-left">
      <div className="mb-3 sm:mb-4">
        <Image
          src={pilot.image}
          alt={pilot.alt}
          width={300}
          height={300}
          className="rounded-xl mx-auto w-full max-w-[200px] sm:max-w-[250px] lg:max-w-[300px] h-auto"
        />
      </div>
      <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white font-geist">
        {pilot.title}
      </h3>
      <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 font-geist">
        {pilot.description}
      </p>
    </div>
  );
};


import { useAuth } from "@clerk/nextjs";

// ...

const A320FMSLandingContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const { userId, isLoaded } = useAuth();

  useEffect(() => {
    if (searchParams.get("openOrderModal") === "true") {
      setIsOrderModalOpen(true);
    }
  }, [searchParams]);

  const [planDetails, setPlanDetails] = useState<any>(null);

  useEffect(() => {
    const fetchPlan = async () => {
      try {
        const res = await fetch('/api/plans/1');
        if (res.ok) {
          const data = await res.json();
          if (data.success && data.data) {
              setPlanDetails({
                  id: data.data.planId,
                  name: data.data.name,
                  amount: data.data.amount,
                  interval: data.data.interval,
                  currency: data.data.currency
              });
          }
        }
      } catch (e) {
        console.error("Failed to fetch plan", e);
      }
    };
    fetchPlan();
  }, []);

  const handleStartTraining = async () => {
    if (isLoaded && !userId) {
      // Redirect to sign-in
      const currentUrl = new URL(window.location.href);
      currentUrl.searchParams.set("openOrderModal", "true");
      const signInUrl = new URL("/sign-in", window.location.origin);
      signInUrl.searchParams.set("redirect_url", currentUrl.toString());
      router.push(signInUrl.toString());
    } else {
      // Check for active subscription
      try {
        const res = await fetch(`/api/payments/user/${userId}`);
        if (res.ok) {
           const data = await res.json();
           if (data.success && data.data && data.data.user && data.data.user.activeSubscriptions) {
               const hasActiveSubscription = data.data.user.activeSubscriptions.some(
                   (sub: any) => sub.productId === 'a320-bundle' || sub.planId === (planDetails?.id || '1') || sub.productId === (planDetails?.id || '1')
               );

               if (hasActiveSubscription) {
                   router.push('/dashboard');
                   return;
               }
           }
        }
      } catch (error) {
          console.error("Error checking subscription:", error);
          // Fall through to open modal on error
      }
      setIsOrderModalOpen(true);
    }
  };

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
      info:true,
      infoDetails: [{
        id: 1,
        name: "Minimum Requirements",
        designation: "iPadOS 16.0+ \n MacOs Ventura 13.0 (Apple Silicon Only)",
        icon: Info  
      }],
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
      info:false,
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

  // Pilot cards data
  const pilotCards = [
    {
      image: "/images/in/a320/pilot/pilot1.png",
      alt: "CPL Holders",
      title: "CPL Holders",
      description: "Preparing for airline interviews",
    },
    {
      image: "/images/in/a320/pilot/pilot2.png",
      alt: "Pilots",
      title: "Pilots",
      description: "Planning A320 type ratings",
    },
    {
      image: "/images/in/a320/pilot/pilot3.png",
      alt: "Airline Pilots",
      title: "Airline Pilots",
      description: "Transitioning to Airbus",
    },
    {
      image: "/images/in/a320/pilot/pilot4.png",
      alt: "Flight Instructors",
      title: "Flight Instructors",
      description: "Upgrading System Knowledge",
    },
  ];

  return (
    <div className="bg-white text-black dark:bg-neutral-900 dark:text-white font-geist min-h-screen">
      <NavbarDemo />
      
      <main>
        {/* Hero Section - Fullscreen with Background Video */}
        <section className="relative h-[95vh] w-full overflow-hidden">
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
          <div className="relative z-10 flex h-full items-end justify-center pb-8 sm:pb-12 md:pb-16 lg:pb-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
              <div className="mx-auto text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-8xl font-bold tracking-tight text-[#252121] font-geist drop-shadow-lg">
                  A320 FMS Simulator
                </h1>
                <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-4xl leading-6 sm:leading-7 md:leading-8 text-[#252121] font-geist drop-shadow-md px-4">
                  Land Your Dream Airline Job with Complete FMS and Automation Mastery
                </p>
                <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6 px-4">
                  <Button
                    size="lg"
                    className="bg-[#1381E5] hover:bg-blue-700 rounded-[24px] font-semibold text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-geist w-full sm:w-auto"
                    onClick={() => handleStartTraining()}
                  >
                    Start Training
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[1px] border-[#1381E5] bg-white/10 rounded-[24px] backdrop-blur-sm text-[#1381E5] hover:bg-white/20 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-geist w-full sm:w-auto"
                  >
                    {/* <Play className="mr-2 h-5 w-5" /> */}
                    Watch Demo
                  </Button>
                </div>
                <p className="mt-2 text-sm sm:text-base text-[#252121] font-bold font-geist px-4">
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
        <section className="py-12 sm:py-16 md:py-20 lg:py-24" style={{ background: 'linear-gradient(to bottom, rgba(34, 33, 33, 1), rgba(25, 23, 22, 1))' }}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
              <div className="">       
                <Image
                  src="/images/in/a320/fms_simulator.png"
                  alt="A320 FMS Control Display Unit"
                  width={1256}
                  height={900}
                  className="rounded-xl w-full max-w-[759px] h-auto shadow-2xl"
                />
              </div>
            </div>
            <div className="max-w-7xl mx-auto text-center my-12 sm:my-16 md:my-20 lg:my-24">
              <h2 className="sm:text-2xltext-center md:text-4xl lg:text-7xl 2xl:text-8xl font-bold tracking-tight text-white font-geist">
                A320 FMS Simulator Advantage
              </h2>
            </div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                {advantageCards.map((card, index) => (
                  <div
                    key={index}
                    className="bg-[#222121] rounded-xl relative"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      padding: '16px 24px',
                      minHeight: '250px',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-bold text-white font-geist block mb-3 sm:mb-4">
                      {card.number}.
                    </span>
                    <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl text-white font-geist leading-relaxed">
                      {card.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Training Platform Overview - Dark Grey Background */}
        <section className="bg-[#222121] dark:bg-neutral-950 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl text-left mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-8xl font-bold tracking-tight text-white font-geist">
                Training Platform Overview
              </h2>
            </div>
            <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {trainingPlatformCards.map((card, index) => (
                <div key={index} className="bg-[#272727] dark:bg-neutral-900 rounded-2xl sm:rounded-[36px] p-4 sm:p-6 md:p-8">
                    <div className="mb-4 sm:mb-6">
                    <Image
                      src={card.image}
                      alt={card.imageAlt}
                      width={600}
                      height={400}
                      className="rounded-lg w-full h-auto"
                    />
                  </div>
                  <div className="flex items-center gap-2 mb-3 sm:mb-4">
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-bold text-white font-geist">{card.title}</h3>
                    {card.info && card.infoDetails ? <AnimatedTooltip items={card.infoDetails} /> : null}
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg dark:text-gray-400 mb-4 sm:mb-6 font-geist leading-relaxed">
                    {card.description}
                  </p>

                  <div>
                    <p className="text-white font-semibold mb-2 sm:mb-3 text-xs sm:text-sm md:text-base font-geist">{card.featuresLabel}</p>
                  <hr className="border-gray-400 mb-1" />
                    <ul className="space-y-2 text-gray-300 dark:text-gray-400 font-geist">
                      {card.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex text-xs sm:text-sm md:text-base lg:text-base xl:text-base text-[#FFFFFFB2] opacity-70 font-normal items-center gap-2 leading-relaxed">
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
        <section className="bg-[#F5F5F7] dark:bg-neutral-900 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl bg-white grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center p-6 sm:p-8 md:p-12 lg:p-16  2xl:p-28 rounded-xl sm:rounded-2xl lg:rounded-[24px]">
              <div>
                <Image
                  src="/images/in/a320/candidate_screening.png"
                  alt="Pilot Interview Training"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold tracking-tight text-gray-900 dark:text-white font-geist mb-4 sm:mb-6">
                  Train for Real-World Airline Interviews
                </h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg leading-6 sm:leading-7 md:leading-8 font-medium text-gray-700 dark:text-gray-300 font-geist mb-4 sm:mb-6">
                  The platform prepares pilots for common airline technical interview questions, including:
                </p>
                <ul className="space-y-2 sm:space-y-3 text-gray-700 dark:text-gray-300 font-geist">
                  {interviewTopics.map((topic, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm sm:text-base md:text-lg font-medium">
                      <CircleCheck className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 flex-shrink-0" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* A320 FMS Simulator Is Built For - White Background */}
        <section className="bg-[#F5F5F7] dark:bg-neutral-900 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-7xl font-bold tracking-tight text-gray-900 dark:text-white font-geist">
                A320 FMS Simulator Is Built For
              </h2>
            </div>
            <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {pilotCards.map((pilot, index) => (
                <PilotCard key={index} pilot={pilot} />
              ))}
            </div>
          </div>
        </section>

        {/* Turn Expensive Simulator Time Into Effective Training - White Background */}
        <section className="bg-[#F5F5F7] dark:bg-neutral-900 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex flex-col items-center justify-center">
              <div className="mx-auto max-w-4xl text-center mb-8 sm:mb-10 md:mb-12 px-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-xl 2xl:text-7xl font-bold tracking-tight text-gray-900 dark:text-white font-geist mb-4 sm:mb-6">
                  Turn Expensive Simulator Time Into Effective Training
                </h2>
                <div className="space-y-1 sm:space-y-2 text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-3xl font-normal text-gray-700 dark:text-gray-300 font-geist">
                  <p>Traditional type rating cost ~₹3,000,000. </p>
                  <p>Add  ₹800,000 – ₹1,200,000 for additional simulator session.</p>
                </div>
              </div>
              <div className="rounded-2xl w-full max-w-4xl px-4 sm:px-8 md:px-12 lg:px-16  2xl:px-24">
                <div className="border-2 border-[#1381E5] bg-white rounded-xl sm:rounded-2xl lg:rounded-[24px] px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-24 py-6 sm:py-8 md:py-12 lg:py-16">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-bold text-[#1381E5] dark:text-white mb-2 font-geist text-center">
                  For individuals
                  </h3>
                  <div className="text-center mb-4 sm:mb-6">
                    <span className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-8xl font-bold text-gray-900 dark:text-white font-geist">
                      {planDetails ? `₹${(planDetails.amount / 100).toLocaleString("en-IN")}` : "₹9,000"}
                    </span>
                    <br/>
                    <span className="text-xs sm:text-sm md:text-base lg:text-base xl:text-base text-gray-600 dark:text-gray-400 font-geist ml-2">per year</span>
                  </div>
                  <div className="text-center w-full">
                  <Button
                    size="lg"
                    className="w-full sm:max-w-64 rounded-xl sm:rounded-2xl lg:rounded-[24px] bg-[#1381E5] hover:bg-blue-700 text-white mb-4 sm:mb-6 font-geist"
                    onClick={() => handleStartTraining()}
                  >
                    Get Started
                  </Button>
                  </div>
                  <hr className="border-gray-400 my-4 sm:my-6" />
                  <ul className="space-y-2 sm:space-y-3 text-gray-700 dark:text-gray-300 font-geist">
                    <li className="flex text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg items-start gap-2 leading-relaxed">
                      <CircleCheck className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                      <span>Complete A320 FMS and auto flight simulator</span>
                    </li>
                    <li className="flex text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg items-start gap-2 leading-relaxed">
                      <CircleCheck className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                      <span>All learning and training modules</span>
                    </li>
                    <li className="flex text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg items-start gap-2 leading-relaxed">
                      <CircleCheck className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                      <span>Airline interview preparation content</span>
                    </li>
                    <li className="flex text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg items-start gap-2 leading-relaxed">
                      <CircleCheck className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 dark:text-blue-400 flex-shrink-0 mt-0.5" />
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
                    className="w-full h-auto"
                />
           <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           
            <div className="mx-auto max-w-5xl text-center bg-black py-12 sm:py-16 md:py-24 lg:py-32  2xl:py-52 px-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-6xl font-bold tracking-tight text-white font-geist mb-4 sm:mb-6">
                About SimvizLabs
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg leading-6 sm:leading-7 md:leading-8 text-gray-300 dark:text-gray-400 font-geist">
              Our mission is to democratize professional aviation training by enabling pilots to maximize the value of expensive simulator time through early system mastery.              </p>
            </div>
          </div>
        </section>
      </main>

    <div className="-m-[1px]" >
      <Footer />
      </div>
      
      {/* Order Summary Modal */}
      <OrderSummaryModal
        open={isOrderModalOpen}
        onOpenChange={setIsOrderModalOpen}
        planDetails={planDetails}
      />
    </div>
  );
};

export default A320FMSLandingContent;

