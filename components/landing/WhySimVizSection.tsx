"use client";

import React from "react";

const FeatureCard = ({ number, title, description }: { number: string; title: React.ReactNode; description: React.ReactNode }) => {
    return (
        <div className="bg-white rounded-[24px] p-8 flex flex-col gap-6  w-full shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col gap-4 justify-start flex-1">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight text-[#191716]">
                    {title}
                </h3>
                <p className="text-xl md:text-xl lg:text-2xl font-normal leading-relaxed text-[#191716]">
                    {description}
                </p>
            </div>
        </div>
    );
};

const FeatureCard2 = ({ description }: { description: React.ReactNode }) => {
    return (
        <div className="bg-white rounded-[24px] p-12 sm:pr-20 md:p-12 flex flex-col justify-start items-start text-left w-full shadow-sm hover:shadow-md transition-all duration-300 mb-8">
            <span className="font-semibold text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl leading-snug text-[#191716]">
                {description}
            </span>
        </div>
    );
};

interface WhySimVizSectionProps {
    features: any[];
    content?: any;
    heading?: React.ReactNode;
    reducedTopPadding?: boolean;
}

const WhySimVizSection = ({ features, content, heading, reducedTopPadding }: WhySimVizSectionProps) => {
    const displayHeading = heading || content?.whySimvizSection?.heading || content?.simvizEnables?.heading || content?.heading || (
        <>Why <span className="text-[#1381E5] ">SimViz Labs?</span></>
    );

    console.log(displayHeading, "displayHeading", content?.simvizEnables?.heading)
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [itemsPerView, setItemsPerView] = React.useState(1);

    React.useEffect(() => {
        const updateItemsPerView = () => {
            if (window.innerWidth >= 1524) {
                setItemsPerView(3);
            } else if (window.innerWidth >= 800) {
                setItemsPerView(2);
            } else {
                setItemsPerView(1);
            }
        };

        updateItemsPerView();
        window.addEventListener('resize', updateItemsPerView);
        return () => window.removeEventListener('resize', updateItemsPerView);
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
            container.addEventListener('scroll', handleScroll);
            return () => container.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const scrollTo = (index: number) => {
        if (scrollContainerRef.current) {
            const { scrollWidth } = scrollContainerRef.current;
            const itemWidth = scrollWidth / features.length;
            scrollContainerRef.current.scrollTo({
                left: index * itemWidth,
                behavior: 'smooth'
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

    const canScrollLeft = activeIndex > 0;
    const canScrollRight = activeIndex < numDots - 1;

    return (
        <section className={`bg-[#f5f5f7] py-4 md:py-8 lg:py-12 xl:py-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32`}>
            <div className="md:mx-auto flex-col gap-4 md:gap-8">
                {/* Header */}
                <h2 className="text-4xl mb-10 items-start text-start md:text-5xl lg:text-6xl font-semibold text-[#191716] leading-tight text-center md:text-left">
                    {displayHeading}
                </h2>

                {/* Mobile: Column Layout, Desktop: Carousel */}
                <div className="md:hidden flex flex-col gap-4">
                    {features.map((feature, index) => (
                        <div key={index}>
                            {content?.id === "airlines" || content?.id === "ato" ? (
                                <FeatureCard2 description={feature.description} />
                            ) : (
                                <FeatureCard
                                    number={feature.number}
                                    title={feature.title}
                                    description={feature.description}
                                />
                            )}
                        </div>
                    ))}
                </div>

                {/* Desktop: Carousel Container */}
                <div
                    ref={scrollContainerRef}
                    className="hidden md:flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide scroll-smooth items-stretch"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {features.map((feature, index) => (
                        <div key={index} className="w-full min-[800px]:w-[calc(50%-12px)] min-[1524px]:w-[calc(33.333%-16px)] flex-shrink-0 snap-start flex">
                            {content?.id === "airlines" || content?.id === "ato" ? (
                                <FeatureCard2 description={feature.description} />
                            ) : (
                                <FeatureCard
                                    number={feature.number}
                                    title={feature.title}
                                    description={feature.description}
                                />
                            )}
                        </div>
                    ))}
                </div>

                {numDots > 1 && (
                    <div className="hidden md:flex flex-row items-center justify-end gap-4">
                        <div className="flex gap-2">
                            <button
                                onClick={scrollLeft}
                                disabled={!canScrollLeft}
                                className="w-10 h-10 rounded-full bg-[#e5e5e5] flex items-center justify-center hover:bg-[#d4d4d4] transition-colors active:scale-95 disabled:bg-[#f0f0f0] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-[#f0f0f0] disabled:active:scale-100"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 18L9 12L15 6" stroke={canScrollLeft ? "#525252" : "#b0b0b0"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <button
                                onClick={scrollRight}
                                disabled={!canScrollRight}
                                className="w-10 h-10 rounded-full bg-[#e5e5e5] flex items-center justify-center hover:bg-[#d4d4d4] transition-colors active:scale-95 disabled:bg-[#f0f0f0] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-[#f0f0f0] disabled:active:scale-100"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 18L15 12L9 6" stroke={canScrollRight ? "#525252" : "#b0b0b0"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <style jsx global>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section >
    );
};

export default WhySimVizSection;
