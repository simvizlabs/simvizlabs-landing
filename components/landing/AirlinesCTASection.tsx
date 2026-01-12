"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
const AirlinesCTASection = ({ content }: { content: any }) => {
    const { benefits, subtitle, title, imageSrc } = content;
    return (
        <section className="bg-[#0a0a0a] py-16 md:py-24 lg:py-32 px-4 sm:px-8 md:px-12 w-full text-white">
            <div className="max-w-7xl mx-auto flex flex-col items-center gap-24 md:gap-32 lg:gap-48">

                {/* Benefit Statements */}
                <div className="flex flex-col gap-12 md:gap-20 lg:gap-24 w-full max-w-4xl text-center">
                    {benefits.map((benefit: any, index: number) => (
                        <motion.h2
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-semibold leading-tight tracking-tight text-neutral-300"
                        >
                            {benefit}
                        </motion.h2>
                    ))}
                </div>

                {/* Hero CTA */}
                <div className="flex flex-col items-center gap-8 md:gap-12 w-full max-w-5xl text-center">
                    <div className="flex flex-col gap-2 md:gap-4">
                        <span className="text-sm md:text-base font-semibold text-neutral-500 uppercase tracking-widest">
                            {subtitle}
                        </span>
                        <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold leading-tight">
                            {title}
                        </h3>
                    </div>

                    <div className="w-full max-w-4xl flex justify-center items-center overflow-visible px-4">
                        <div className="w-full transform transition-all duration-1000">
                            <Image
                                src={imageSrc}
                                alt="FMS Simulator"
                                width={1200}
                                height={900}
                                className="w-full h-auto scale-110 md:scale-125"
                                priority
                            />
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-8 md:gap-10 mt-4">
                        <Link
                            href="/contact"
                            className="px-8 py-4 rounded-full bg-[#1381e5] hover:bg-[#1381e5]/90 text-white font-semibold text-base md:text-lg transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-[#1381e5]/20"
                        >
                            Request a Demo
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AirlinesCTASection;
