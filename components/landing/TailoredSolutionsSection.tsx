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
            <div className="relative z-10 w-full py-20 md:py-32 min-h-[600px] flex items-center bg-white shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
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
                <div className="absolute inset-0 bg-white/10 backdrop-blur-[16.4px]" />

                <div className="relative z-10 max-w-[1440px] mx-auto w-full px-4 sm:px-8 md:px-12 flex flex-col gap-12">
                    <h3 className="text-xl md:text-4xl font-bold text-black font-geist">
                        {heading}
                    </h3>

                    <div className="flex flex-col gap-6">
                        {customizations.map((item, index) => (
                            <div key={item} className="flex items-start gap-4 group">
                                <div className="mt-[10px] w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                                <p className="text-[17px] md:text-[20px] text-black leading-relaxed font-medium font-geist">
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
