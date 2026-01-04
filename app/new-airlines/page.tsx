"use client";

import React from "react";
import NavbarDemo from "@/components/resizable-navbar-demo";
import Footer from "@/components/footer";

const imgImage21 = "/assets/new-airlines/7fa0d1949c5c8c4107a3c2fab7cd56e8acd26322.png";
const imgGeminiGeneratedImageWlhaq0Wlhaq0Wlha11 = "/assets/new-airlines/0405ef7ef781aee2424caa7e8b47e1295c72a1b6.png";

function Hero() {
  return (
    <div className="bg-[var(--white-01,#f5f5f7)] relative w-full h-[1200px] overflow-hidden mx-auto" data-name="Hero" data-node-id="719:16393">
      <div className="absolute content-stretch flex flex-col gap-[24px] items-center left-1/2 -translate-x-1/2 top-[100px] w-full max-w-[1445px]" data-node-id="770:765">
        {/* Adjusted top position and centering for responsiveness */}
        <div className="absolute inset-0 top-[783px] flex flex-col items-center gap-[24px]">
             <p className="font-sans font-semibold leading-[normal] min-w-full not-italic relative shrink-0 text-[#191716] text-[64px] text-center w-[min-content]" data-node-id="719:16409">
            Enhance your training ecosystem.
            </p>
            <div className="font-sans font-medium leading-[1.36] min-w-full not-italic relative shrink-0 text-[#191716] text-[32px] text-center w-[min-content]" data-node-id="719:16410">
            <p className="mb-0">{`SimViz Labs offers a flexible training management system with access to experts `}</p>
            <p>in aviation course development, software development, and learning analytics.</p>
            </div>
            <div className="content-stretch flex items-start relative shrink-0" data-node-id="734:395">
                <div className="border border-[#1381e5] border-solid content-stretch flex items-center justify-center px-[28px] py-[15px] relative rounded-[24px] shrink-0 cursor-pointer hover:bg-blue-50 transition-colors" data-name="Button" data-node-id="734:392">
                    <p className="font-sans font-semibold leading-[normal] not-italic relative shrink-0 text-[17px] text-[#1381e5] text-nowrap" data-node-id="I734:392;33:16">
                    Schedule a Demo
                    </p>
                </div>
            </div>
        </div>
      </div>
      
      {/* Background/Header Image Section */}
       <div className="absolute top-[19px] left-1/2 -translate-x-1/2 w-full max-w-[1644px] h-[68px] hidden md:flex items-center justify-between px-4" data-node-id="782:1792">
         {/* Replaced Header content with NavbarDemo which acts as the header in this project */}
      </div>

       <div className="absolute left-[calc(50%_-_1136.5px)] top-[94px] w-[2273px] h-[789px]" data-node-id="797:2248">
        <div className="inset-0 absolute" data-node-id="719:16395">
          <div className="bg-[#b3b3b3] inset-0 absolute rounded-[24px]" data-node-id="719:16396" />
          <div className="inset-0 absolute rounded-[24px] overflow-hidden pointer-events-none">
            <img alt="" className="absolute left-0 max-w-none size-full top-0 object-cover" src={imgGeminiGeneratedImageWlhaq0Wlhaq0Wlha11} />
          </div>
        </div>
      </div>
    </div>
  );
}

const AirlinesPage = () => {
  return (
    <div className="bg-white text-black dark:bg-neutral-900 dark:text-white font-geist min-h-screen flex flex-col">
      <NavbarDemo />
      <main className="flex-grow">
        <Hero />
        {/* Placeholder for missing Figma sections */}
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-4">Comprehensive Airline Solutions</h2>
                <p className="text-lg text-gray-600">SimViz Labs provides end-to-end training and operational software tailored for modern airlines.</p>
                {/* We can reproduce the features list from the original page here if needed, 
                    but the Figma design likely has specific layout for these. 
                    Since we couldn't fetch the middle section code, we leave this placeholder. 
                */}
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AirlinesPage;
