"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const defaultCustomizations = [
    "SOP-aligned procedures and flows.",
    "Fleet and avionics configuration (options, variants, training constraints).",
    "Syllabus mapping and lesson gating (phases, competencies, proficiency standards).",
    "Instructor dashboards and reporting (KPIs, exports, cohort analytics).",
    "Integrations (SSO, LMS connectivity, MDM requirements).",
    "Scenario packs (tailored scenario for your company routes).",
];

const TailoredSolutionsSection = () => {
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
                    src="/assets/new-airlines/1.png"
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
                    <h3 className="text-[20px] md:text-[24px] font-bold text-black font-geist">
                        Typical airline customizations include:
                    </h3>

                    <div className="">
                        {defaultCustomizations.map((item, index) => (
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
