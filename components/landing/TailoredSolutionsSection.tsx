"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const defaultCustomizations = [
    "FMS and auto-flight training with repeatable, procedure-aligned practice.",
    "Inbuilt LMS solution allows for tailored lesson plans and scenarios for company specific routes.",
    "Unlimited self-paced familiarization without simulator pressure or cost anxiety.",
    "Objective readiness evidence through analytics (gap detection, pattern recognition, targeted remediation).",
    "Distance learning capability.",
    "Instructor tooling: scenario delivery, progress visibility, and data-backed briefing/debrief."
];

const TailoredSolutionsSection = ({ customizations, heading, imageSrc }: { customizations: string[], heading: string, imageSrc: string }) => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <section ref={sectionRef} className="relative w-full overflow-visible bg-white">
            {/* Top Part: Clear Engine (Sticky) */}
            <div className="sticky top-0 z-0 w-full border-b border-black/5 bg-white">
                <Image
                    src={imageSrc}
                    alt="Tailored Solutions Hero"
                    width={1920}
                    height={1080}
                    className="w-full h-auto object-contain"
                    priority
                />
            </div>

            {/* Bottom Part: Parallax Engine (Scrolling Overlay) */}
            <div className="relative z-10 w-full py-12 md:py-16 lg:py-20 xl:py-32 min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex items-center bg-white shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <motion.div
                        style={{ y }}
                        className="absolute inset-0 scale-110"
                    >
                        <Image
                            src="/assets/new-airlines/blur_engine.png"
                            alt="Tailored Solutions Background"
                            fill
                            className="object-cover object-center"
                        />
                    </motion.div>
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#F5F5F7CC] backdrop-blur-md md:backdrop-blur-lg" />

                <div className="relative z-10 max-w-[1440px] mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 flex flex-col gap-4 md:gap-5 lg:gap-6">
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#191716] leading-[normal] font-sans">
                        {heading}
                    </h3>

                    <div className="flex flex-col gap-2 lg:gap-4">
                        {customizations.map((item, index) => (
                            <div key={item} className="flex items-start gap-3 sm:gap-3 lg:gap-3 group">
                                <p className="font-medium leading-[1.36] text-[#191716] text-base sm:text-md md:text-md lg:text-lg shrink-0 font-sans">•</p>
                                <p className="text-base sm:text-md md:text-md lg:text-lg text-[#191716] leading-[1.36] font-normal font-sans">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TailoredSolutionsSection;
