"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ImplementationSection = ({ heading }: { heading: string[] }) => {
    return (
        <section className="relative w-full py-24 px-4 sm:px-8 md:px-12 bg-white overflow-hidden">
            <div className="max-w-[1440px] mx-auto flex flex-col items-center text-center gap-12">
                {/* Text Content */}
                <div className="flex flex-col gap-6 max-w-4xl mx-auto">
                    {heading.map((heading, index) => (
                        <h2 key={index} className="text-xl md:text-2xl font-bold leading-tight text-[#191716]">
                            {heading}
                        </h2>
                    ))}
                </div>

                {/* Overlapping iPads Container */}
                <div className="relative mx-auto w-full max-w-[1200px] aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] mt-8 flex justify-center items-center">
                    {/* Left iPad (B747) */}
                    <div className="absolute left-[2%] md:left-[5%] lg:left-[10%] z-0 w-[50%] md:w-[45%] aspect-square transform">
                        <div className="relative w-full h-full drop-shadow-2xl opacity-90 transition-transform duration-500 hover:scale-105">
                            {/* Desktop Image */}
                            <Image
                                src="/assets/our-products/b747/b747_simulator_landscape.png"
                                alt="B747 Simulator Desktop"
                                width={1080}
                                height={1920}
                                className="hidden md:block object-contain rotate-90 -translate-x-1/3 h-[24rem] hover:scale-105"
                            />
                            {/* Mobile Image */}
                            <Image
                                src="/assets/our-products/b0738e33683cda336533d7d62466166f6fa760af.png"
                                alt="B747 Simulator Mobile"
                                fill
                                className="block md:hidden object-contain rotate-[0deg]"
                            />
                        </div>
                    </div>

                    {/* Middle iPad (A320) - Elevated */}
                    <div className="absolute z-10 w-[60%] md:w-[55%] aspect-square">
                        <div className="relative w-full top-8 md:top-20 h-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] transform transition-transform duration-500 hover:scale-[1.02]">
                            {/* Desktop Image */}
                            <Image
                                src="/assets/our-products/a320/a320_simualtor_landscape.png"
                                alt="A320 Simulator Desktop"
                                width={1080}
                                height={1920}
                                className="hidden md:block object-contain  h-[24rem] translate-y-12"
                            />
                            {/* Mobile Image */}
                            <Image
                                src="/assets/our-products/a320-simulator.png"
                                alt="A320 Simulator Mobile"
                                fill
                                className="block md:hidden object-contain"
                            />
                        </div>
                    </div>

                    {/* Right iPad (B737) */}
                    <div className="absolute right-[2%] md:right-[5%] lg:right-[10%] z-0 w-[50%] md:w-[45%] aspect-square transform translate-x-1/4">
                        <div className="relative w-full h-full drop-shadow-2xl opacity-90 transition-transform duration-500 hover:scale-105">
                            {/* Desktop Image */}
                            <Image
                                src="/assets/our-products/b737/b737_simulator_landscape.png"
                                alt="B737 Simulator Desktop"
                                width={1080}
                                height={1920}
                                className="hidden md:block object-contain rotate-90 h-[24rem] hover:scale-105"

                            />
                            {/* Mobile Image */}
                            <Image
                                src="/assets/our-products/eda6f0f09e9c208ab7cefc56ddfa2662695ae550.png"
                                alt="B737 Simulator Mobile"
                                fill
                                className="block md:hidden object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* CTA Button */}
                <Link
                    href="/contact"
                    className=" px-10 py-4 mt-24 bg-[#3b82f6] text-white rounded-full font-semibold text-[17px] hover:bg-[#2563eb] transition-all transform active:scale-95 shadow-lg"
                >
                    Request a Demo
                </Link>
            </div>
        </section>
    );
};

export default ImplementationSection;
