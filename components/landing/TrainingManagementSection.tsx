"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const FeatureCard = ({ title, description, imageSrc, direction }: { title: string; description: string; imageSrc: string; direction: 'left' | 'right' }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: direction === 'right' ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ amount: 0.2 }}
            className="bg-white rounded-[24px] p-8 flex flex-col gap-6 h-full shadow-sm hover:shadow-md transition-shadow min-h-[400px]"
        >
            <div className="flex flex-col gap-4">
                <h3 className="text-[20px] font-bold leading-tight text-[#191716] max-w-[90%]">
                    {title}
                </h3>
                <p className="text-[14px] leading-relaxed text-[#191716]">
                    {description}
                </p>
            </div>
            <div className="relative w-full h-full min-h-[200px] mt-auto rounded-xl overflow-hidden">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-contain"
                />
            </div>
        </motion.div>
    );
};

const TrainingManagementSection = ({ features }: { features: { title: string; description: string; imageSrc: string }[] }) => {
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [direction, setDirection] = React.useState<'left' | 'right'>('right');

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, clientWidth } = scrollContainerRef.current;
            const index = Math.round(scrollLeft / clientWidth);
            setActiveIndex(index);
        }
    };

    React.useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
            return () => container.removeEventListener('scroll', handleScroll);
        }
    }, []);



    const smoothScroll = (element: HTMLElement, target: number, duration: number) => {
        const start = element.scrollLeft;
        const change = target - start;
        const startTime = performance.now();

        const animateScroll = (currentTime: number) => {
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);

            // Ease-in-out quadratic function
            const ease = progress < 0.5
                ? 2 * progress * progress
                : -1 + (4 - 2 * progress) * progress;

            element.scrollLeft = start + change * ease;

            if (timeElapsed < duration) {
                requestAnimationFrame(animateScroll);
            }
        };

        requestAnimationFrame(animateScroll);
    };

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            setDirection('left');
            const target = scrollContainerRef.current.scrollLeft - 400;
            smoothScroll(scrollContainerRef.current, target, 800);
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            setDirection('right');
            const target = scrollContainerRef.current.scrollLeft + 400;
            smoothScroll(scrollContainerRef.current, target, 800);
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
                    className="flex gap-4 md:gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
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
                                direction={direction}
                            />
                        </div>
                    ))}
                </div>

                {/* Pagination Dots & Controls */}
                <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 mt-4">
                    <div className="flex gap-2 bg-[#e5e5e5] px-4 py-2 rounded-full">
                        {features.map((_: any, idx: number) => (
                            <div
                                key={idx}
                                className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${activeIndex === idx ? "bg-[#525252]" : "bg-[#a3a3a3]"
                                    }`}
                            />
                        ))}
                    </div>

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
            </div>
        </section>
    );
};

export default TrainingManagementSection;
