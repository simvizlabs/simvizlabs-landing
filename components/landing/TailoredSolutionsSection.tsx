"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const customizations = [
    "SOP-aligned procedures and flows.",
    "Fleet and avionics configuration (options, variants, training constraints).",
    "Syllabus mapping and lesson gating (phases, competencies, proficiency standards).",
    "Instructor dashboards and reporting (KPIs, exports, cohort analytics).",
    "Integrations (SSO, LMS connectivity, MDM requirements).",
    "Scenario packs (tailored scenario for your company routes).",
];

const TailoredSolutionsSection = () => {
    return (
        <section className="relative w-full flex flex-col overflow-hidden bg-white">
            {/* Top Part: Clear Engine */}
            <div className="relative w-full">
                <Image
                    src="/assets/new-airlines/clear_engine.png"
                    alt="Tailored Solutions Hero"
                    width={1920}
                    height={1080}
                    className="w-full h-auto object-contain"
                    priority
                />
            </div>

            {/* Bottom Part: Blur Engine */}
            <div className="relative w-full py-20 md:py-32">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/new-airlines/blur_engine.png"
                        alt="Tailored Solutions Background"
                        fill
                        className="object-cover object-center scale-110 md:scale-125"
                    />
                </div>

                <div className="relative z-10 max-w-[1440px] mx-auto w-full flex flex-col gap-12">
                    <h3 className="text-[20px] md:text-[24px] font-bold text-black font-geist">
                        Typical airline customizations include:
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                        {customizations.map((item, index) => (
                            <div key={index} className="flex items-start gap-4 group">
                                <div className="mt-1 p-1 rounded-full border border-black/10 transition-colors">
                                    <CheckCircle2 className="w-5 h-5 text-black" />
                                </div>
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
