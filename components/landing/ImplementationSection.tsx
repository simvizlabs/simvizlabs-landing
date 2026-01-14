"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ImplementationSection = () => {
    return (
        <section className="relative w-full py-24 px-4 sm:px-8 md:px-12 bg-white overflow-hidden">
            <div className="max-w-[1440px] mx-auto flex flex-col items-center text-center gap-12">
                {/* Text Content */}
                <div className="flex flex-col gap-6 max-w-4xl mx-auto">
                    <h2 className="text-[24px] md:text-[36px] font-semibold text-black leading-tight">
                        SimViz runs on modern, cloud-native infrastructure
                        and is accessible from an iPad, includes an integrated LMS.
                    </h2>
                    <p className="text-[20px] md:text-[28px] font-semibold text-black/80 leading-snug">
                        Our implementation team works directly with your
                        airline IT team to align deployment and customization to your environment.
                    </p>
                </div>

                {/* Overlapping iPads Container */}
                <div className="relative w-full max-w-[1000px] aspect-[16/9] mt-8 flex justify-center items-center">
                    {/* Left iPad (B737) */}
                    <div className="absolute left-[0%] z-0 w-[45%] aspect-square transform -translate-x-1/4">
                        <div className="relative w-full h-full drop-shadow-2xl rotate-90 opacity-90 transition-transform duration-500 hover:scale-105">
                            <Image
                                src="/assets/our-products/b747/b747_simulator_landscape.png"
                                alt="B737 Simulator"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Middle iPad (A320) - Elevated */}
                    <div className="relative z-10 w-[55%] aspect-square">
                        <div className="relative w-full top-20 h-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] transform transition-transform duration-500 hover:scale-[1.02]">
                            <Image
                                src="/assets/our-products/a320/a320_simualtor_landscape.png"
                                alt="A320 Simulator"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Right iPad (B747) */}
                    <div className="absolute right-[0%] z-0 w-[45%] aspect-square transform translate-x-1/4">
                        <div className="relative w-full h-full drop-shadow-2xl rotate-90 opacity-90 transition-transform duration-500 hover:scale-105">
                            <Image
                                src="/assets/our-products/b737/b737_simulator_landscape.png"
                                alt="B747 Simulator"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* CTA Button */}
                <Link
                    href="/contact"
                    className="mt-8 px-10 py-4 bg-[#3b82f6] text-white rounded-full font-semibold text-[17px] hover:bg-[#2563eb] transition-all transform active:scale-95 shadow-lg"
                >
                    Request a Demo
                </Link>
            </div>
        </section>
    );
};

export default ImplementationSection;
