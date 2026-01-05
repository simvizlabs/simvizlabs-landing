"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ProductButton from "./ProductButton";

interface SimulatorProductsLargeProps {
    featureCards: {
        title: string;
        description: string;
    }[];
    headImage: string;
    content: {
        headImage: string;
        title: string;
        description: string;
        buttons: {
            text: string;
            class: string;
            variant: any;
            onClick: () => void;
        }[];
        subtitle: string;
        subscriptionContentIncluded: boolean;
    };
}

const SimulatorProductsLarge = ({ featureCards, headImage, content }: SimulatorProductsLargeProps) => {
    return (
        <main className="flex-grow max-w-7xl mx-auto pt-24 md:pt-32">
            <h2 className="text-lg mb-2 md:text-xl font-bold tracking-tight text-black leading-[1.1]">Our Products</h2>
            <hr className="mb-4" />
            <section
                className="px-4 md:px-8 max-w-7xl mx-auto text-center space-y-12 pb-16 md:pb-24 rounded-3xl overflow-hidden"
                style={{ background: "linear-gradient(180deg, #F5F5F7 50%, #1381E5 471.65%)" }}
            >
                <div className="relative w-full aspect-[16/10] max-w-4xl mx-auto mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 mt-16">
                    <Image
                        src={content.headImage}
                        alt="A320 FMS Simulator"
                        fill
                        className="object-contain drop-shadow-2xl"
                        priority
                    />
                </div>

                <div className="space-y-6 max-w-4xl mx-auto px-4">
                    <h1 className="text-5xl md:text-5xl font-bold tracking-tight text-black leading-[1.1]">
                        {content.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-black/60 max-w-3xl mx-auto leading-relaxed font-medium">
                        {content.description}
                    </p>
                </div>

                <div className="flex flex-wrap gap-5 justify-center mt-4">
                    {content.buttons.map((button, index) => (
                        <ProductButton
                            key={index}
                            variant={button.variant}
                            className={button.class}
                            onClick={button.onClick}
                        >
                            {button.text}
                        </ProductButton>
                    ))}
                </div>

                <section className="pt-24 border-y border-white/20">
                    <div className="max-w-7xl">
                        <h2 className="text-lg md:text-2xl font-bold mb-16 text-black text-left tracking-tight pl-2">
                            {content.subtitle}
                        </h2>

                        <div className="flex flex-wrap justify-center gap-6">
                            {featureCards.map((card, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-6 md:p-8 rounded-3xl flex flex-col hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex-grow basis-full md:basis-[calc(50%-1.5rem)] lg:basis-[calc(33.333%-1.5rem)]"
                                >
                                    <h3 className="text-lg md:text-xl font-bold mb-4 leading-tight text-black text-left">
                                        {card.title}
                                    </h3>
                                    <p className="text-sm md:text-base text-black/60 leading-relaxed font-medium text-left">
                                        {card.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Subscription Section */}
                {content.subscriptionContentIncluded && <section className="pb-16 px-4 md:px-8 max-w-7xl mx-auto text-center space-y-16">
                    <h2 className="text-xl md:text-3xl font-bold text-black/40 tracking-tight">
                        Included in this subscription
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-xl mx-auto">
                        <div className="group space-y-8">
                            <div className="relative aspect-[4/3] w-full max-w-[500px] overflow-hidden p-8  transition-transform duration-500">
                                <Image
                                    src="/assets/our-products/a320/a320_simualtor_landscape.png"
                                    alt="FMS Simulator"
                                    fill
                                    className="object-contain p-4"
                                />
                            </div>
                            <p className="text-lg font-bold text-black/40 uppercase tracking-widest">FMS Simulator</p>
                        </div>

                        <div className="group space-y-8">
                            <div className="relative aspect-[4/3] w-full max-w-[500px] transition-transform duration-500">
                                <Image
                                    src="/assets/our-products/a320/cpdlc.png"
                                    alt="CPDLC"
                                    fill
                                    className="object-contain p-4"
                                />
                            </div>
                            <p className="text-lg font-bold text-black/40 uppercase tracking-widest">CPDLC</p>
                        </div>
                    </div>
                </section>}
            </section>

            {/* Features Section */}


        </main>
    );
};

export default SimulatorProductsLarge;