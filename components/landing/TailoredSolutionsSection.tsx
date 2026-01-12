"use client";

import React from "react";
import Image from "next/image";
import { CircleCheck } from "lucide-react";

const defaultCustomizations = [
    "SOP-aligned procedures and flows.",
    "Fleet and avionics configuration (options, variants, training constraints).",
    "Syllabus mapping and lesson gating (phases, competencies, proficiency standards).",
    "Instructor dashboards and reporting (KPIs, exports, cohort analytics).",
    "Integrations (SSO, LMS connectivity, MDM requirements).",
    "Scenario packs (tailored scenario for your company routes).",
];

const TailoredSolutionsSection = ({ customizations = defaultCustomizations }: { customizations?: string[] }) => {
    return (
        <section className="w-full flex flex-col bg-white max-w-7xl mx-auto">
            {/* Part 1: Hero Section (Node 2175:858) */}
            <div className="sticky top-0 z-0 relative w-full h-[917px] sm:h-[600px] md:h-[800px] lg:h-[917px] flex flex-col justify-end items-end px-6 md:px-[136px] py-12 md:py-[88px] overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 pointer-events-none">
                     <Image
                        src="/assets/new-airlines/1.png"
                        alt="Tailored Solutions Hero Background"
                        fill
                        className="object-cover "
                        priority
                    />
                </div>

                {/* Content */}
                {/* <div className="relative z-10 flex flex-col gap-6 md:gap-[41px] text-[#191716] max-w-[674px] w-full text-left md:text-right">
                    <div className="flex flex-col text-[32px] md:text-[64px] font-semibold leading-tight font-['Inter',sans-serif]">
                        <span>Tailored solutions</span>
                        <span>for your airline</span>
                    </div>
                    <p className="text-[20px] md:text-[32px] font-semibold leading-tight font-['Inter',sans-serif]">
                        The system is positioned for growth alongside your fleet plan and training strategy.
                    </p>
                </div> */}
            </div>

            {/* Part 2: Customizations List (Node 2175:934) */}
            <div className="relative z-10 w-full min-h-[950px] flex flex-col justify-center py-20 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 pointer-events-none">
                     <Image
                        src="/assets/new-airlines/blur_engine.png"
                        alt="Tailored Solutions List Background"
                        fill
                        className="object-cover"
                    />
                </div>
                {/* Overlay */}
                 <div className="absolute inset-0 bg-white/10 backdrop-blur-[16.4px]" />

                {/* Content */}
                <div className="relative z-10 w-full max-w-[1920px] mx-auto px-6 md:px-[280px]">
                    <h3 className="text-[24px] md:text-[32px] font-semibold text-[#191716] mb-[20px] md:mb-[50px] font-['Inter',sans-serif]">
                        Typical airline customizations include:
                    </h3>

                    <div className="flex gap-[21px] items-start text-[#191716] text-[16px] md:text-[24px]">
                        {/* Text Column */}
                        <div className="flex flex-col gap-0 font-['Inter',sans-serif] font-medium leading-[1.36]">
                            {customizations.map((item, index) => (
                                <span key={index} className="mb-0 flex-row flex align-center items-center">   
                                <CircleCheck/>
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TailoredSolutionsSection;
