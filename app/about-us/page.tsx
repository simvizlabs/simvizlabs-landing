import React from "react";
import { Metadata } from "next";
import NavbarDemo from "@/components/resizable-navbar-demo";
import Footer from "@/components/footer";
import Image from "next/image";

const imgGeminiGeneratedImageWlhaq0Wlhaq0Wlha11 = "/assets/about-us/header-image.png";
const imgIMockupIPadPro = "/assets/about-us/ipad-mockup.png";
const imgImage = "/assets/about-us/image-1.png";
const imgImage1 = "/assets/about-us/image-2.png";
const imgLine19 = "/assets/about-us/line-19.png";

export const metadata: Metadata = {
  title: "About Us | SimViz Labs",
  description: "Learn more about SimViz Labs and our mission to revolutionize pilot training through innovative aviation solutions.",
};

const AboutUsPage = () => {
  return (
    <div className="bg-white text-black dark:bg-neutral-900 dark:text-white font-geist min-h-screen flex flex-col">
      <NavbarDemo />
      <main className="flex-grow">
        {/* Hero Image */}
        <div className="relative w-full" data-name="Gemini_Generated_Image_wlhaq0wlhaq0wlha (1) 1" data-node-id="2293:13218">
          <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
            <Image
              src={imgGeminiGeneratedImageWlhaq0Wlhaq0Wlha11}
              alt="Aircraft Autopilot Control Panel"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>

        {/* About SimViz Labs Section */}
        <section className="py-16 md:py-24 px-4 md:px-8 max-w-6xl mx-auto">
          <div className="flex flex-col gap-6 items-center text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#191716] leading-[1.36]">
              About SimViz Labs
            </h2>
            <div className="text-lg md:text-2xl font-normal text-[#191716] leading-[1.45] max-w-4xl space-y-4">
              <p>
                SimViz Labs is an aviation technology company delivering modern training and operational software for the aviation industry.
              </p>
              <p>
                Our solutions are designed around real cockpit workflows, airline SOPs, <br/> and aircraft specific operations. We provide scalable, secure, and customizable platforms <br/>that integrate seamlessly into airline training ecosystems and support long term operational excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Image Gallery Section */}
        <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* High fidelity system training */}
            <div className="flex flex-col gap-5 items-center">
              <div className="bg-[#e8e8ec] h-[273px] w-full overflow-hidden relative rounded-lg flex items-center justify-center">
                <div className="relative w-[320px] h-[246px] ">
                  <Image
                    src={imgIMockupIPadPro}
                    alt="iPad Pro Mockup"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="text-lg md:text-2xl font-normal text-black text-center leading-[1.45]">
                High fidelity system training
              </p>
            </div>

            {/* Automation proficiency */}
            <div className="flex flex-col gap-5 items-center">
              <div className="h-[273px] w-full overflow-hidden relative rounded-lg">
                <Image
                  src={imgImage}
                  alt="Automation proficiency"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-lg md:text-2xl font-normal text-black text-center leading-[1.45]">
                Automation proficiency
              </p>
            </div>

            {/* Airline configurable pilot training */}
            <div className="flex flex-col gap-5 items-center">
              <div className="h-[273px] w-full overflow-hidden relative rounded-lg">
                <Image
                  src={imgImage1}
                  alt="Airline configurable pilot training"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-lg md:text-2xl font-normal text-[#191716] text-center leading-[1.45]">
                Airline configurable pilot training
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-16 md:py-24 px-4 md:px-8 max-w-6xl mx-auto">
          <div className="flex flex-col gap-6 items-center text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#191716] leading-[1.36]">
              Our Mission
            </h2>
            <div className="text-lg md:text-2xl font-normal text-[#191716] leading-[1.45] max-w-4xl">
              <p>
                SimViz Labs mission is to redefine aviation training systems <br/> by delivering scalable, regulatory compliant solutions, addressing complex operational challenges, and implementing <br/> best of breed technologies and services that enhance training effectiveness, efficiency, and safety.
              </p>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section className="py-16 md:py-24 px-4 md:px-8 max-w-6xl mx-auto">
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#191716] text-center leading-[1.36]">
              Locations
            </h2>
            
            <div className="space-y-0">
              {/* Chandler, AZ */}
              <div className="flex flex-row justify-between md:items-center gap-4 py-6 border-b border-[#191716]/20">
                <p className="text-lg md:text-2xl font-normal text-[#191716] leading-[1.45]">
                  Chandler, AZ, USA
                </p>
                <p className="text-lg md:text-2xl font-normal text-[#191716] text-center md:text-left leading-[1.45]">
                  Headquarters
                </p>
              </div>

              {/* New Delhi, India */}
              <div className="flex flex-row justify-between md:items-center gap-4 py-6 border-b border-[#191716]/20">
                <p className="text-lg md:text-2xl font-normal text-[#191716] leading-[1.45]">
                  New Delhi, India
                </p>
                <p className="text-lg md:text-2xl font-normal text-[#191716] text-center md:text-left leading-[1.45]">
                  Development Center
                </p>
              </div>

              {/* Singapore */}
              <div className="flex flex-row justify-between md:items-center gap-4 py-6">
                <p className="text-lg md:text-2xl font-normal text-[#191716] leading-[1.45]">
                  Singapore
                </p>
                <p className="text-lg md:text-2xl font-normal text-[#191716] text-center md:text-left leading-[1.45]">
                  Regional Office
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer bgColor="bg-[#F5F5F7]" />
    </div>
  );
};

export default AboutUsPage;
