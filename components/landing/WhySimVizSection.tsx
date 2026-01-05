"use client";

import React from "react";

const FeatureCard = ({ number, title, description }: { number: string; title: string; description: string }) => {
    return (
        <div className="bg-white rounded-[24px] p-8 flex flex-col gap-6 h-full shadow-sm hover:shadow-md transition-shadow">
            <span className="text-[24px] font-bold text-[#191716]">{number}</span>
            <div className="flex flex-col gap-4">
                <h3 className="text-[24px] font-bold leading-tight text-[#191716] max-w-[80%]">
                    {title}
                </h3>
                <p className="text-[16px] leading-relaxed text-[#191716]">
                    {description}
                </p>
            </div>
        </div>
    );
};

const WhySimVizSection = ({ features }) => {
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);


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
            const target = scrollContainerRef.current.scrollLeft - 400;
            smoothScroll(scrollContainerRef.current, target, 800); // 800ms duration
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            const target = scrollContainerRef.current.scrollLeft + 400;
            smoothScroll(scrollContainerRef.current, target, 800); // 800ms duration
        }
    };

    return (
        <section className="bg-[#f5f5f7] py-16 md:py-24 px-4 sm:px-8 md:px-12 w-full">
            <div className="max-w-[1440px] mx-auto flex flex-col gap-8 md:gap-16">
                {/* Header */}
                <h2 className="text-[36px] md:text-[56px] font-semibold text-[#191716] leading-tight text-center md:text-left">
                    Why <span className="text-[#5ea2ef]">SimViz Labs</span>?
                </h2>

                {/* Carousel Container */}
                <div
                    ref={scrollContainerRef}
                    className="flex gap-4 md:gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {features.map((feature, index) => (
                        <div key={index} className="min-w-[100%] sm:min-w-[calc(50%-8px)] lg:min-w-[calc(33.333%-16px)] snap-start">
                            <FeatureCard
                                number={feature.number}
                                title={feature.title}
                                description={feature.description}
                            />
                        </div>
                    ))}
                </div>

                {/* Pagination Dots & Controls */}
                <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 mt-4">
                    {/* Dots - Just visual placeholders from design */}
                    <div className="flex gap-2 bg-[#e5e5e5] px-4 py-2 rounded-full">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#525252]"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#a3a3a3]"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#a3a3a3]"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#a3a3a3]"></div>
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

            <style jsx global>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
};

export default WhySimVizSection;
