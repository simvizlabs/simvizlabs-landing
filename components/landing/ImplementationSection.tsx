"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const imgIMockupIPadPro = "/assets/implementation-section/ipad-left.png";
const imgIMockupIPadPro1 = "/assets/implementation-section/ipad-right.png";
const imgIMockupIPadPro2 = "/assets/implementation-section/ipad-center.png";

// Mobile images
const img748Mobile = "/assets/implementation-section/ipad-748-mobile.png";
const img737Mobile = "/assets/implementation-section/ipad-737-mobile.png";
const imgIPadCenterMobile = "/assets/implementation-section/ipad-center-mobile.png";

interface ImplementationSectionProps {
    heading: string[];
    bgColor?: string;
}

const ImplementationSection = ({ heading, bgColor = "bg-white" }: ImplementationSectionProps) => {
    return (
        <section className={`relative w-full py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 overflow-hidden ${bgColor}`}>
            <div className="max-w-[1440px] mx-auto flex flex-col items-center text-center gap-6 md:gap-8 lg:gap-10">
                {/* Text Content */}
                <div className="flex flex-col gap-4 md:gap-6 max-w-4xl mx-auto">
                  {heading && heading.map((item, index) => (
                    <h2 key={index} className="text-md sm:text-md md:text-lg  lg:text-xl font-semibold leading-[1.36] text-[#191716] font-sans">
                        {item}
                    </h2>
                  ))}
                </div>

                {/* Overlapping iPads Container */}
                <div className="relative w-full h-64 sm:h-96 md:h-[400px] lg:h-[500px] xl:h-[550px] 2xl:h-[683px] flex justify-center items-center overflow-visible">
                    {/* Mobile Version - Portrait orientation - Only for very small screens (< 640px) */}
                    <div className="sm:hidden relative w-full h-full max-w-[280px] mx-auto">
                        {/* Left iPad (748) - Mobile */}
                        <div className="absolute left-[-2px] top-2 h-40 w-32 z-0">
                            <Image
                                src={img748Mobile}
                                alt="748 iPad"
                                fill
                                className="object-contain"
                            />
                        </div>

                        {/* Center iPad - Mobile */}
                        <div className="absolute left-16 top-6 h-44 w-36 z-10">
                            <Image
                                src={imgIPadCenterMobile}
                                alt="iPad Pro Mockup"
                                fill
                                className="object-contain"
                            />
                        </div>

                        {/* Right iPad (737) - Mobile */}
                        <div className="absolute left-36 top-2 h-40 w-32 z-0">
                            <Image
                                src={img737Mobile}
                                alt="737 iPad"
                                fill
                                className="object-contain"
                            />
                        </div>

                        {/* CTA Button - Mobile */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
                            <Link
                                href="/contact"
                                className="px-4 py-2 bg-[#1381e5] hover:bg-[#1381e5]/90 text-white rounded-xl font-semibold text-xs leading-normal transition-all shadow-lg whitespace-nowrap font-sans"
                            >
                                Request a Demo
                            </Link>
                        </div>
                    </div>

                    {/* Desktop Version - Landscape orientation - Show for >= 640px (sm) */}
                    <div className="hidden sm:block relative w-full h-full">
                        {/* Left iPad - Desktop */}
                        <div className="absolute left-[15%] sm:left-[12%] md:left-[10%] lg:left-[8%] xl:left-[15%] 2xl:left-[166px] top-[8%] sm:top-[10%] md:top-[10%] lg:top-[8%] xl:top-[66px] z-0">
                            <div className="h-40 sm:h-48 md:h-56 lg:h-64 xl:h-80 2xl:h-[351px] w-28 sm:w-36 md:w-40 lg:w-48 xl:w-72 2xl:w-[458px] relative">
                                <div className="rotate-90 h-full w-full">
                                    <Image
                                        src={imgIMockupIPadPro}
                                        alt="iPad Pro Mockup"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Middle iPad - Elevated - Desktop */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-[6%] sm:top-[8%] md:top-[8%] lg:top-[7%] xl:top-[10%] 2xl:top-[106px] z-10">
                            <div className="h-44 sm:h-52 md:h-64 lg:h-72 xl:h-96 2xl:h-[406px] w-32 sm:w-40 md:w-48 lg:w-56 xl:w-80 2xl:w-[530px] relative">
                                <div className="rotate-90 h-full w-full">
                                    <Image
                                        src={imgIMockupIPadPro2}
                                        alt="iPad Pro Mockup"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right iPad - Desktop */}
                        <div className="absolute right-[15%] sm:right-[12%] md:right-[10%] lg:right-[8%] xl:right-[15%] 2xl:right-[166px] top-[8%] sm:top-[10%] md:top-[10%] lg:top-[8%] xl:top-[66px] z-0">
                            <div className="h-40 sm:h-48 md:h-56 lg:h-64 xl:h-80 2xl:h-[351px] w-28 sm:w-36 md:w-40 lg:w-48 xl:w-72 2xl:w-[458px] relative">
                                <div className="rotate-90 h-full w-full">
                                    <Image
                                        src={imgIMockupIPadPro1}
                                        alt="iPad Pro Mockup"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* CTA Button - Desktop */}
                        <div className="absolute bottom-8 sm:bottom-10 md:bottom-12 lg:bottom-8 xl:bottom-0 left-1/2 -translate-x-1/2 z-20">
                            <Link
                                href="/contact"
                                className="px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4 lg:px-7 lg:py-4 bg-[#1381e5] hover:bg-[#1381e5]/90 text-white rounded-xl sm:rounded-2xl lg:rounded-3xl font-semibold text-xs sm:text-sm md:text-base lg:text-lg leading-normal transition-all shadow-lg whitespace-nowrap font-sans"
                            >
                                Request a Demo
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImplementationSection;
