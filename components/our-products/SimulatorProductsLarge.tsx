"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ProductButton from "./ProductButton";
import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";

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
            icon?: React.ReactNode;
        }[];
        subtitle: string;
        subscriptionContentIncluded: boolean;
        rotateImage?: string;
    };
    onClose?: () => void;
    layoutId?: string;
}

const SimulatorProductsLarge = ({ featureCards, headImage, content, onClose, layoutId }: SimulatorProductsLargeProps) => {
    return (
        <motion.div
            layoutId={layoutId}
            className="flex-grow mx-auto relative bg-white rounded-3xl overflow-hidden"
        >
            <section
                className="px-4 md:px-8 mx-auto text-center space-y-12 pb-16 md:pb-24 rounded-3xl overflow-hidden"
                style={{ background: "linear-gradient(180deg, #F5F5F7 50%, #1381E5 471.65%)" }}
            >
                <div className="relative w-full aspect-[16/10] max-w-4xl mx-auto mb-8 mt-16">
                    <motion.div
                        layoutId={`image-${layoutId}`}
                        className="relative w-full h-full"
                    >
                        <Image
                            src={content.headImage}
                            alt={content.title}
                            fill
                            className="object-contain drop-shadow-2xl"
                            style={{ transform: content.rotateImage ? `rotate(${content.rotateImage}deg)` : undefined }}
                            priority
                        />
                    </motion.div>
                </div>

                <div className="space-y-6 max-w-4xl mx-auto px-4">
                    <motion.h1
                        layoutId={`title-${layoutId}`}
                        className="text-5xl md:text-5xl font-bold tracking-tight text-black leading-[1.1]"
                    >
                        {content.title}
                    </motion.h1>
                    <motion.p
                        layoutId={`desc-${layoutId}`}
                        className="text-xl md:text-2xl text-black/60 max-w-3xl mx-auto leading-relaxed font-medium"
                    >
                        {content.description}
                    </motion.p>
                </div>

                <div className="flex flex-wrap gap-5 justify-center mt-4">
                    {content.buttons.map((button, index) => (
                        <ProductButton
                            key={index}
                            variant={button.variant}
                            className={button.class}
                            onClick={button.onClick}
                        >
                            {button.text} {button.icon}
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
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-lg font-bold text-black/40 uppercase tracking-widest">FMS Simulator</p>
                        </div>

                        <div className="group space-y-8">
                            <div className="relative aspect-[4/3] w-full max-w-[600px] transition-transform duration-500">
                                <Image
                                    src="/assets/our-products/a320/cpdlc.png"
                                    alt="CPDLC"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-lg font-bold text-black/40 uppercase tracking-widest">CPDLC</p>
                        </div>
                    </div>
                </section>}
            </section>

            {/* Features Section */}


        </motion.div>
    );
};

export default SimulatorProductsLarge;