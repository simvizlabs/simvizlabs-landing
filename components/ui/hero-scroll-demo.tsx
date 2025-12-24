"use client";

import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import Link from "next/link";

import { PulsatingButton } from "@/components/magicui/pulsating-button";

interface HeroScrollDemoProps {
  id?: string; // Add optional id prop
  imageSrc: string;
  title: string;
  buttonLink: string;
  bundleLink: string;
  tutorialLink: string;
}

export function HeroScrollDemo({ id, imageSrc, title, buttonLink, bundleLink, tutorialLink }: HeroScrollDemoProps) {
  return (
    <div id={id} className="flex flex-col pb-[10px] sm:mt-[5rem] md:mt-[2rem] md:pb-[10px] flex justify-center">
      <ContainerScroll
        titleComponent={
          <>
            <h2 className="text-3xl md:text-4xl font-semibold text-black dark:text-white lg:mt-12">
               
              <span className="text-3xl md:text-[4rem] font-bold mt-1 leading-none">
                {title}
              </span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center items-center w-full gap-4 mt-4">
              <a href={buttonLink} target="_blank" rel="noopener noreferrer">
                <button type="button" className="flex items-center justify-center w-40 md:w-48 mt-3 mb-6 text-black bg-transparent border border-black h-12 md:h-14 rounded-xl">
                  <div className="mr-3">
                    <svg viewBox="0 0 384 512" width="24" className="md:w-[30px]">
                      <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z">
                      </path>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs">
                      Download on the
                    </div>
                    <div className="-mt-1 text-xl md:text-2xl font-semibold">
                      App Store
                    </div>
                  </div>
                </button>
              </a>
              {/* <Link href={bundleLink} passHref>
                <PulsatingButton className="h-12 md:h-14 mb-3 rounded-xl" pulseColor="#D4D4D8">Get our Bundle <span className="font-bold text-emerald-400">(20% off)</span></PulsatingButton>
              </Link> */}
            </div>
            <Link href={tutorialLink} className=" md:text-lg text-blue-600 dark:text-blue-400 mt-2 font-semibold font-geist hover:font-bold hover:text-blue-800">View our Tutorials → </Link>
          </>
        }
      >
        <Image
          src={imageSrc}
          alt="hero"
          height={1024}
          width={1024}
          className="mx-auto object-contain  w-full h-auto xs:max-h-[400px] sm:max-h-[500px] md:max-h-[800px] lg:max-h-[800px] flex justify-center"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
