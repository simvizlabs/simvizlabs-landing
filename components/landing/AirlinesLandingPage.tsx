"use client";

import React from "react";
import Image from "next/image";
import WhySimVizSection from "@/components/landing/WhySimVizSection";
import TrainingManagementSection from "@/components/landing/TrainingManagementSection";
import { Button } from "../ui/button";
import ScheduleDemoButton from "../MajorComponnts/ScheduleDemoButton";


const AirlinesLandingPage = ({ ImageBackground, content }) => {
    return (
        <section className="relative bg-[#f5f5f7] w-full flex flex-col">
            <div className="relative w-full top-6 sm:top-8 md:top-10 h-64 sm:h-64 md:h-72 lg:h-[500px] xl:h-[650px] shrink-0">
                <Image
                    src={ImageBackground}
                    alt="Cockpit background"
                    fill
                    className="object-cover"
                    priority
                    quality={100}
                />
            </div>

            <div className="flex mx-auto flex-col items-center gap-4 md:gap-6 lg:gap-8 py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 w-full">
                <p className="font-sans font-semibold leading-[normal] not-italic text-[#191716] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center max-w-[1641px]">
                    {content.title}
                </p>
                <div className="font-sans font-medium leading-[1.36] not-italic text-[#191716] text-sm sm:text-md md:text-xl lg:text-2xl xl:text-3xl text-center max-w-[1641px]">
                    <div>
                        {content.description}
                    </div>
                </div>
                <div className="flex items-start mt-4">
                    <ScheduleDemoButton />
                    {/* {content.button.map((button) => <Button variant="outline" className={button.class}>
                        {button.heading}
                    </Button>)} */}
                </div>
            </div>
        </section>
    );
};



export default AirlinesLandingPage;
