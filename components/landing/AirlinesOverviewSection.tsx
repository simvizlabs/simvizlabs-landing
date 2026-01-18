"use client";

import React from "react";
import Image from "next/image";

const AirlinesOverviewSection = () => {
    return (
        <section className="bg-[#f5f5f7] py-16 md:py-24 px-4 sm:px-8 md:px-12 w-full">
            <div className="max-w-[1440px] mx-auto flex flex-col gap-12">
                {/* Image Container with Blue Border */}
                <div className="w-full rounded-sm overflow-hidden bg-white">
                    <div className="relative w-full aspect-[21/9] md:aspect-[2.4/1]">
                        <Image
                            src="/assets/new-airlines/flying_airline.jpg"
                            alt="Airline Overview"
                            fill
                            className="object-cover object-center"
                            priority
                        />
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex flex-col gap-6">
                    <h2 className="text-[32px] md:text-[48px] font-bold leading-tight text-[#191716]">
                    What  is <span className="text-[#5ea2ef]">SimViz Labs</span>?
                    </h2>

                    <p className="text-[16px] md:text-[20px] leading-relaxed text-[#191716] font-medium opacity-90">
                        SimViz Labs is designed to integrate into existing training environments with flexibility for instructor-led
                        delivery and self-paced learning. It bridges the gap between theoretical knowledge and real-world
                        application by enabling repeatable, authentic practice with analytics that quantify readiness—helping
                        airlines streamline training processes while standardizing outcomes across cohorts.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AirlinesOverviewSection;
