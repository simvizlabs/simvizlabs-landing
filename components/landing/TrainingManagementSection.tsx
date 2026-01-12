"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const FeatureCard = ({ title, description, imageSrc, rotate }: { title: string; description: string; imageSrc: string; rotate?: string }) => {
    const [isLoaded, setIsLoaded] = React.useState(false);
    const imgRef = React.useRef<HTMLImageElement>(null);

    React.useEffect(() => {
        if (imgRef.current?.complete) {
            setIsLoaded(true);
        }
    }, []);

    return (
        <div className="bg-white rounded-[24px] p-8 flex flex-col gap-6 h-full shadow-sm hover:shadow-md transition-shadow min-h-[400px]">
            <div className="flex flex-col gap-4">
                <h3 className="text-[20px] font-bold leading-tight text-[#191716] max-w-[90%]">
                    {title}
                </h3>
                <p className="text-[14px] leading-relaxed text-[#191716]">
                    {description}
                </p>
            </div>
            <div className="relative w-full h-full min-h-[200px] mt-auto rounded-xl overflow-hidden">
                {!isLoaded && (
                    <div className="absolute inset-0 bg-neutral-100 animate-pulse" />
                )}
                <Image
                    ref={imgRef}
                    src={imageSrc}
                    alt={title}
                    fill
                    onLoad={() => setIsLoaded(true)}
                    className={`object-contain transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                    style={rotate ? { transform: `rotate(${rotate}deg)` } : {}}
                />
            </div>
        </div>
    );
};

const TrainingManagementSection = ({ features }: { features: { title: string; description: string; imageSrc: string; rotate?: string }[] }) => {
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [itemsPerView, setItemsPerView] = React.useState(1);

    React.useEffect(() => {
        const updateItemsPerView = () => {
            if (window.innerWidth >= 1024) {
                setItemsPerView(3);
            } else if (window.innerWidth >= 640) {
                setItemsPerView(2);
            } else {
                setItemsPerView(1);
            }
        };

        updateItemsPerView();
        window.addEventListener("resize", updateItemsPerView);
        return () => window.removeEventListener("resize", updateItemsPerView);
    }, []);

    const numDots = Math.max(1, features.length - itemsPerView + 1);

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth } = scrollContainerRef.current;
            const itemWidth = scrollWidth / features.length;
            const index = Math.round(scrollLeft / itemWidth);
            setActiveIndex(Math.min(index, numDots - 1));
        }
    };

    React.useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener("scroll", handleScroll);
            return () => container.removeEventListener("scroll", handleScroll);
        }
    }, []);

    const scrollTo = (index: number) => {
        if (scrollContainerRef.current) {
            const { scrollWidth } = scrollContainerRef.current;
            const itemWidth = scrollWidth / features.length;
            scrollContainerRef.current.scrollTo({
                left: index * itemWidth,
                behavior: "smooth"
            });
        }
    };

    const scrollLeft = () => {
        if (activeIndex > 0) {
            scrollTo(activeIndex - 1);
        }
    };

    const scrollRight = () => {
        if (activeIndex < numDots - 1) {
            scrollTo(activeIndex + 1);
        }
    };

    return (
        <section className="bg-[#f5f5f7] py-16 md:py-24 px-4 sm:px-8 md:px-12 w-full">
            <div className="max-w-[1440px] mx-auto flex flex-col gap-8 md:gap-16">
                {/* Header */}
                <h2 className="text-[36px] md:text-[56px] font-semibold text-[#191716] leading-tight text-center md:text-left">
                    Our <span className="text-[#5ea2ef]">Training Management System</span>
                </h2>

                {/* Carousel Container */}
                <div
                    ref={scrollContainerRef}
                    className="flex gap-4 md:gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide scroll-smooth"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="min-w-[100%] sm:min-w-[calc(50%-8px)] lg:min-w-[calc(33.333%-16px)] snap-start"
                        >
                            <FeatureCard
                                title={feature.title}
                                description={feature.description}
                                imageSrc={feature.imageSrc}
                                rotate={feature.rotate}
                            />
                        </div>
                    ))}
                </div>

                {numDots > 1 && (
                    <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 mt-4">
                        {/* <div className="flex gap-2 bg-[#e5e5e5] px-4 py-2 rounded-full">
                            {Array.from({ length: numDots }).map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => scrollTo(idx)}
                                    className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${activeIndex === idx ? "bg-[#525252]" : "bg-[#a3a3a3]"
                                        }`}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}
                        </div> */}

                        <div className="flex gap-2">
                            <button
                                onClick={scrollLeft}
                                className="w-10 h-10 rounded-full bg-[#e5e5e5] flex items-center justify-center hover:bg-[#d4d4d4] transition-colors active:scale-95"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 18L9 12L15 6" stroke="#525252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <button
                                onClick={scrollRight}
                                className="w-10 h-10 rounded-full bg-[#e5e5e5] flex items-center justify-center hover:bg-[#d4d4d4] transition-colors active:scale-95"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 18L15 12L9 6" stroke="#525252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default TrainingManagementSection;
