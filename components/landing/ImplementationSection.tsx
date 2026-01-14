"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const imgShadow = "https://www.figma.com/api/mcp/asset/0fba6f50-586c-47ee-a29c-5d6b53442c35";
const imgIMockupIPadPro = "https://www.figma.com/api/mcp/asset/81544db8-d6c1-4135-9eea-170dfac7eae8";
const imgIMockupIPadPro1 = "https://www.figma.com/api/mcp/asset/9eb90854-af0f-450e-af4d-790a7d5f8762";
const imgIMockupIPadPro2 = "https://www.figma.com/api/mcp/asset/240faa01-eff0-4088-8402-294abc6b8020";

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
                <div className="relative w-full h-[500px] sm:h-[550px] md:h-[600px] lg:h-[683px] flex justify-center items-center overflow-visible">
                    {/* Shadow layers - Hidden on mobile, visible on larger screens */}
                    <div className="hidden md:flex absolute inset-[-40%_0_-55%_2%] items-center justify-center mix-blend-multiply pointer-events-none">
                        <div className="h-[1005px] rotate-[14.767deg] w-[1402px] relative">
                            <Image
                                src={imgShadow}
                                alt="Shadow"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                    <div className="hidden md:flex absolute inset-[-53%_23%_-41%_-21%] items-center justify-center mix-blend-multiply pointer-events-none">
                        <div className="h-[1005px] rotate-[14.767deg] w-[1402px] relative">
                            <Image
                                src={imgShadow}
                                alt="Shadow"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                    <div className="hidden md:flex absolute inset-[-52%_-26%_-43%_28%] items-center justify-center mix-blend-multiply pointer-events-none">
                        <div className="h-[1005px] rotate-[14.767deg] w-[1402px] relative">
                            <Image
                                src={imgShadow}
                                alt="Shadow"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Left iPad */}
                    <div className="absolute left-0 sm:left-[2%] md:left-[5%] lg:left-[166px] top-[12%] sm:top-[10%] md:top-[8%] lg:top-[66px] z-0">
                        <div className="h-[140px] sm:h-[180px] md:h-[280px] lg:h-[351px] w-[105px] sm:w-[135px] md:w-[200px] lg:w-[458px] relative">
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

                    {/* Middle iPad - Elevated */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-[8%] sm:top-[6%] md:top-[6%] lg:top-[106px] z-10">
                        <div className="h-[180px] sm:h-[220px] md:h-[320px] lg:h-[406px] w-[135px] sm:w-[165px] md:w-[240px] lg:w-[530px] relative">
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

                    {/* Right iPad */}
                    <div className="absolute right-0 sm:right-[2%] md:right-[5%] lg:right-[166px] top-[12%] sm:top-[10%] md:top-[8%] lg:top-[66px] z-0">
                        <div className="h-[140px] sm:h-[180px] md:h-[280px] lg:h-[351px] w-[105px] sm:w-[135px] md:w-[200px] lg:w-[458px] relative">
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

                    {/* CTA Button */}
                    <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-0 left-1/2 -translate-x-1/2 z-20">
                        <Link
                            href="/contact"
                            className="px-6 sm:px-7 md:px-[28px] py-2.5 sm:py-3 md:py-[15px] bg-[#1381e5] hover:bg-[#1381e5]/90 text-white rounded-[20px] sm:rounded-[24px] font-semibold text-[14px] sm:text-[15px] md:text-[17px] leading-normal transition-all shadow-lg whitespace-nowrap"
                        >
                            Request a Demo
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImplementationSection;
