"use client";

import Footer from "@/components/footer";
import NavbarDemo from "@/components/resizable-navbar-demo";
import React from "react";
import { ProductHighlightCard } from "@/components/our-products/ProductHighlightCard";
import SimulatorProductsLarge from "@/components/our-products/SimulatorProductsLarge";

const b737Image = "/assets/our-products/eda6f0f09e9c208ab7cefc56ddfa2662695ae550.png";
const appStoreBadge = "/app_store_badge.png";

const featureCards = [
    {
        title: "Realistic FMC and MCP Training",
        description: "Precise LNAV/VNAV logic, CDU workflows, and line-operations realism.",
    },
    {
        title: "Realistic FMC and MCP Training",
        description: "Precise LNAV/VNAV logic, CDU workflows, and line-operations realism.",
    },
    {
        title: "Realistic FMC and MCP Training",
        description: "Precise LNAV/VNAV logic, CDU workflows, and line-operations realism.",
    },
    {
        title: "Realistic FMC and MCP Training",
        description: "Precise LNAV/VNAV logic, CDU workflows, and line-operations realism.",
    },
    {
        title: "Realistic FMC and MCP Training",
        description: "Precise LNAV/VNAV logic, CDU workflows, and line-operations realism.",
    },
    {
        title: "Realistic FMC and MCP Training",
        description: "Precise LNAV/VNAV logic, CDU workflows, and line-operations realism.",
    },
]

const content = {
    headImage: b737Image,
    title: "B737 FMS Simulator",
    description: "Realistic B737 FMC and MCP training focused on precise LNAV/VNAV logic, CDU workflows, and line-operations realism.",
    buttons: [
        {
            text: "Learn More",
            class: "bg-[#3b82f6]/30 hover:bg-[#3b82f6]/50 text-[#3b82f6] hover:text-white transition-colors duration-300",
            variant: "default",
            onClick: () => { }
        },
        {
            text: "Watch Demo",
            class: "bg-[#3b82f6]/30 hover:bg-[#3b82f6]/50 text-[#3b82f6] hover:text-white transition-colors duration-300",
            variant: "default",
            onClick: () => { }
        }
    ],
    subtitle: "B737 FMS Simulator",
    subscriptionContentIncluded: false,
}

const B737Page = () => {
    return (
        <div className="bg-white text-black min-h-screen flex flex-col font-sans selection:bg-[#3b82f6]/30">
            <NavbarDemo />
            <SimulatorProductsLarge featureCards={featureCards} headImage={b737Image} content={content} />
            <Footer theme="light" />
        </div>
    )
}

export default B737Page
