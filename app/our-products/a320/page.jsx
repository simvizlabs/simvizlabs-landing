"use client";

import React from "react";
import { useRouter } from "next/navigation";
import NavbarDemo from "@/components/resizable-navbar-demo";
import Footer from "@/components/footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SimulatorProductsLarge from "@/components/our-products/SimulatorProductsLarge";
import { ProductCard } from "@/components/our-products/ProductCard";
const headImage = "/assets/our-products/a320/a320_simualtor_landscape.png"
const b737Image = "/assets/our-products/eda6f0f09e9c208ab7cefc56ddfa2662695ae550.png";
const b747Image = "/assets/our-products/b0738e33683cda336533d7d62466166f6fa760af.png";
const appStoreBadge = "/app_store_badge.png";

const A320ProductPage = () => {
    const router = useRouter();
    const featureCards = [
        {
            title: "Precise FMGC simulation",
            description: "Performance calculations, flight planning, and automation logic that matches the real A320 FMGC, including LNAV/VNAV modes and managed/selected guidance."
        },
        {
            title: "AI-powered CPDLC",
            description: "Master datalink clearances, route amendments, and controller communications with intelligent guidance through the MCDU interface."
        },
        {
            title: "Customizable ACARS module",
            description: "Configurable AOC menus tailored to your airline's specific dispatch procedures, message formats, and operational workflows via MCDU."
        },
        {
            title: "FCU and FMA training",
            description: "Master Flight Control Unit operations and Flight Mode Annunciator interpretation for precise auto-flight understanding in complex terminal environments and for each phase of flight."
        },
        {
            title: "Integrated airbus systems",
            description: "Integrated Airbus Systems Learn how FMGC, FCU, datalink, flight guidance (AP/FD/A-THR)."
        }
    ];

    const content = {
        headImage: headImage,
        title: "A320 FMS Simulator",
        description: "Aircraft-level A320 FMGC training with accurate managed/selected automation, CPDLC, and airline-specific ACARS workflows.",
        buttons: [
            {
                text: "Watch Demo",
                class: "rounded-full px-10 py-7 text-lg font-semibold border-black/10 text-black hover:bg-black/5 transition-all bg-white/50 backdrop-blur-sm shadow-sm",
                variant: "outline",
                onClick: () => {
                    router.push("/demo");
                }

            },
            {
                text: "Contact Us",
                onClick: () => {
                    router.push("/contact");
                },
                class: "rounded-full px-10 py-7 text-lg font-semibold bg-[#3b82f6] hover:bg-[#2563eb] text-white flex items-center gap-2 transition-all shadow-lg shadow-blue-500/20",
                variant: "default"

            }
        ],
        subtitle: "High-fidelity A320 FMS Simulator built to aircraft-level accuracy:",
        subscriptionContentIncluded: true,
        subscriptionContent: ""
    }

    return (
        <div className="bg-white text-black min-h-screen flex flex-col font-sans selection:bg-[#3b82f6]/30">
            <SimulatorProductsLarge featureCards={featureCards} headImage={headImage} content={content} />
        </div>
    );
};

export default A320ProductPage;
