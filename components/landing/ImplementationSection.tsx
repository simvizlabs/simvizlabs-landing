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

const ImplementationSection = ({ heading }: { heading: string[] }) => {
    return (
        <section className="relative w-full py-16 md:py-24 px-4 sm:px-8 md:px-12 lg:px-[137px] bg-white overflow-hidden">
            <div className="max-w-[1440px] mx-auto flex flex-col items-center text-center gap-10 md:gap-[39px]">
                {/* Text Content */}
                <div className="flex flex-col gap-6 max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-3xl lg:text-[32px] font-semibold leading-[1.36] text-[#191716]">
                        {heading && heading.length > 0 
                            ? heading[0] 
                            : "SimViz runs on modern, cloud-native infrastructure and is accessible from an iPad, includes an integrated LMS."}
                    </h2>
                </div>

                {/* Overlapping iPads Container */}
                <div className="relative w-full h-[300px] sm:h-[350px] md:h-[600px] lg:h-[683px] flex justify-center items-center overflow-visible">
                    {/* Mobile Version - Portrait orientation */}
                    <div className="md:hidden relative w-full h-full max-w-[340px] mx-auto">
                        {/* Left iPad (748) - Mobile */}
                        <div className="absolute left-[-4.66px] top-[16.59px] h-[190.516px] w-[147.417px] z-0">
                            <Image
                                src={img748Mobile}
                                alt="748 iPad"
                                fill
                                className="object-contain"
                            />
                        </div>

                        {/* Center iPad - Mobile */}
                        <div className="absolute left-[87.34px] top-[39.59px] h-[211.429px] w-[162px] z-10">
                            <Image
                                src={imgIPadCenterMobile}
                                alt="iPad Pro Mockup"
                                fill
                                className="object-contain"
                            />
                        </div>

                        {/* Right iPad (737) - Mobile */}
                        <div className="absolute left-[193.34px] top-[16.59px] h-[190.516px] w-[147.417px] z-0">
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
                                className="px-6 py-2.5 bg-[#1381e5] hover:bg-[#1381e5]/90 text-white rounded-[20px] font-semibold text-[14px] leading-normal transition-all shadow-lg whitespace-nowrap"
                            >
                                Request a Demo
                            </Link>
                        </div>
                    </div>

                    {/* Desktop Version - Landscape orientation */}
                    <div className="hidden md:block relative w-full h-full">
                        {/* Left iPad - Desktop */}
                        <div className="absolute left-[5%] lg:left-[166px] top-[8%] lg:top-[66px] z-0">
                            <div className="h-[280px] lg:h-[351px] w-[200px] lg:w-[458px] relative">
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
                        <div className="absolute left-1/2 -translate-x-1/2 top-[6%] lg:top-[106px] z-10">
                            <div className="h-[320px] lg:h-[406px] w-[240px] lg:w-[530px] relative">
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
                        <div className="absolute right-[5%] lg:right-[166px] top-[8%] lg:top-[66px] z-0">
                            <div className="h-[280px] lg:h-[351px] w-[200px] lg:w-[458px] relative">
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
                        <div className="absolute bottom-8 lg:bottom-0 left-1/2 -translate-x-1/2 z-20">
                            <Link
                                href="/contact"
                                className="px-[28px] py-[15px] bg-[#1381e5] hover:bg-[#1381e5]/90 text-white rounded-[24px] font-semibold text-[17px] leading-normal transition-all shadow-lg whitespace-nowrap"
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
