"use client";

import React from "react";
import Image from "next/image";
import WhySimVizSection from "@/components/landing/WhySimVizSection";
import TrainingManagementSection from "@/components/landing/TrainingManagementSection";
import { Button } from "../ui/button";


const AirlinesLandingPage = ({ ImageBackground, content }) => {
    return (
        <section className="relative w-full flex flex-col">
            <div className="relative w-full top-10 h-[650px] shrink-0">
                <Image
                    src={ImageBackground}
                    alt="Cockpit background"
                    fill
                    className="object-cover"
                    priority
                    quality={100}
                />
            </div>

            <div className="flex flex-col items-center gap-[24px] py-[60px] px-4 w-full">
                <p className="font-sans font-semibold leading-[normal] not-italic text-[#191716] text-[32px] md:text-[56px] text-center max-w-[1000px]">
                    {content.title}
                </p>
                <div className="font-sans font-medium leading-[1.36] not-italic text-[#191716] text-[20px] md:text-[32px] text-center max-w-[900px]">
                    <p>
                        {content.description}
                    </p>
                </div>
                <div className="flex items-start mt-4">
                    {content.button.map((button) => <Button variant="outline" className={button.class}>
                        {button.heading}
                    </Button>)}
                </div>
            </div>
        </section>
    );
};



export default AirlinesLandingPage;
