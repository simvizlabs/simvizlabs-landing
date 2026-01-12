"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const AirlinesCTASection = () => {
    return (
        <section className="bg-[#0a0a0a] py-32 px-4 sm:px-8 md:px-12 w-full text-white">
            <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-48 md:gap-64">

                {/* Benefit Statements */}
                <div className="flex flex-col gap-24 md:gap-32 w-full max-w-4xl text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-[28px] md:text-[42px] font-semibold leading-tight tracking-tight text-neutral-300"
                    >
                        Your crews master procedures <br /> before simulator sessions.
                    </motion.h2>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-[28px] md:text-[42px] font-semibold leading-tight tracking-tight text-neutral-300"
                    >
                        Your instructors get <br /> objective proficiency data.
                    </motion.h2>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-[28px] md:text-[42px] font-semibold leading-tight tracking-tight text-neutral-300"
                    >
                        Your training department gains consistent <br className="hidden md:block" /> standards across fleets and bases.
                    </motion.h2>
                </div>

                {/* Hero CTA */}
                <div className="flex flex-col items-center gap-12 w-full max-w-5xl text-center">
                    <div className="flex flex-col gap-4">
                        <span className="text-[14px] md:text-[16px] font-semibold text-neutral-500 uppercase tracking-[0.2em]">
                            iPad Based
                        </span>
                        <h3 className="text-[44px] md:text-[72px] font-bold leading-tight">
                            <span className="text-[#5ea2ef]">FMS</span> Simulator
                        </h3>
                    </div>

                    <div className="w-full max-w-[900px] flex justify-center items-center overflow-visible">
                        <div className="w-full transform transition-all duration-1000">
                            <Image
                                src="/landing/a320/a320_fms_simulator.png"
                                alt="A320 FMS Simulator on iPad"
                                width={1200}
                                height={900}
                                className="w-full h-auto scale-110 md:scale-125"
                                priority
                            />
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-10 mt-4">
                        {/* <p className="text-[16px] md:text-[20px] text-neutral-400 font-medium">
                            A320 FMS Simulator
                        </p> */}

                        <Link
                            href="/contact"
                            className="px-8 py-4 rounded-full bg-[#1381e5] hover:bg-[#1381e5]/90 text-white font-semibold text-[17px] transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-[#1381e5]/20"
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
