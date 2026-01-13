"use client";

import React, { useState } from "react";
import { Check, ChevronDown, Loader2 } from "lucide-react";
import NavbarDemo from "@/components/resizable-navbar-demo";
import Footer from "@/components/footer";
import { CountrySelector } from "@/components/ui/CountrySelector";

const BENEFITS = [
    {
        title: "Enhance pilot training",
        description: "Improve procedural understanding and systems knowledge through high-fidelity, interactive simulations.",
    },
    {
        title: "Accelerate learning outcomes",
        description: "Reduce training time and increase retention with visual, scenario-based learning.",
    },
    {
        title: "Standardize training quality",
        description: "Deliver consistent, repeatable training experiences across instructors, fleets, and locations.",
    },
    {
        title: "Train with confidence",
        description: "Make data-driven training decisions using accurate system logic and real-world operational scenarios.",
    },
];

const ORG_TYPES = [
    "Airline",
    "Flying School",
    "Approved Training Organisation",
    "Individuals",

];

const SOLUTIONS = ["A320", "B737", "B747", "ATR 72-600", "LMS"];

export default function ContactUsPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState<"idle" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        orgType: "",
        // region: "",
        country: "",
        solutions: [] as string[],
        additionalInfo: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        if (name === "phone") {
            const numericValue = value.replace(/[^0-9]/g, "");
            setFormData((prev) => ({ ...prev, [name]: numericValue }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSelection = (field: "orgType" | "solutions", value: string) => {
        if (field === "solutions") {
            setFormData((prev) => {
                const currentSolutions = prev.solutions;
                const newSolutions = currentSolutions.includes(value)
                    ? currentSolutions.filter((s) => s !== value)
                    : [...currentSolutions, value];
                return { ...prev, solutions: newSolutions };
            });
        } else {
            setFormData((prev) => ({ ...prev, [field]: value }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmissionStatus("idle");

        try {
            // Basic email validation regex
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                setSubmissionStatus("error");
                setIsSubmitting(false);
                return;
            }

            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (result.success) {
                setSubmissionStatus("success");
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    orgType: "",
                    // region: "",
                    country: "",
                    solutions: [],
                    additionalInfo: "",
                });
            } else {
                setSubmissionStatus("error");
            }
        } catch (error) {
            console.error("Submission error:", error);
            setSubmissionStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-white font-sans text-[#191716]">
            <NavbarDemo />

            <main className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24 py-24 lg:py-32 grid lg:grid-cols-2 gap-16 lg:gap-32">
                {/* Left Side: Content */}
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-6">
                        <h2 className="text-5xl sm:text-7xl font-bold tracking-tight bg-gradient-to-r from-[#1381e5] to-[#5ea2ef] bg-clip-text text-transparent leading-[1.1]">
                            Connect <br /> with SimViz Labs
                        </h2>
                        <p className="text-xl text-neutral-600 leading-relaxed max-w-xl">
                            Learn how SimViz Labs helps airlines, flying schools, and approved training organizations train smarter, faster, and with confidence.
                        </p>
                    </div>

                    <div className="flex flex-col gap-8">
                        {BENEFITS.map((benefit, idx) => (
                            <div key={idx} className="flex gap-4 group">
                                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full border border-neutral-300 flex items-center justify-center group-hover:border-[#1381e5] group-hover:bg-[#1381e5]/5 transition-colors">
                                    <Check className="w-3.5 h-3.5 text-neutral-600 group-hover:text-[#1381e5]" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h3 className="font-bold text-lg">{benefit.title}</h3>
                                    <p className="text-neutral-500 leading-relaxed max-w-md">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold opacity-70">First Name*</label>
                            <input
                                required
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                className="w-full h-14 rounded-2xl border border-neutral-200 px-6 focus:outline-none focus:ring-2 focus:ring-[#1381e5]/20 focus:border-[#1381e5] transition-all bg-neutral-50/30"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold opacity-70">Last Name*</label>
                            <input
                                required
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                className="w-full h-14 rounded-2xl border border-neutral-200 px-6 focus:outline-none focus:ring-2 focus:ring-[#1381e5]/20 focus:border-[#1381e5] transition-all bg-neutral-50/30"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold opacity-70">Email*</label>
                        <input
                            required
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full h-14 rounded-2xl border border-neutral-200 px-6 focus:outline-none focus:ring-2 focus:ring-[#1381e5]/20 focus:border-[#1381e5] transition-all bg-neutral-50/30"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold opacity-70">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full h-14 rounded-2xl border border-neutral-200 px-6 focus:outline-none focus:ring-2 focus:ring-[#1381e5]/20 focus:border-[#1381e5] transition-all bg-neutral-50/30"
                        />
                    </div>

                    <div className="flex flex-col gap-4">
                        <label className="text-sm font-semibold opacity-70">Who are you inquiring on behalf of?*</label>
                        <div className="grid sm:grid-cols-2 gap-3">
                            {ORG_TYPES.map((type) => (
                                <button
                                    key={type}
                                    type="button"
                                    onClick={() => handleSelection("orgType", type)}
                                    className={`h-14 rounded-2xl border  text-left transition-all ${formData.orgType === type
                                        ? "border-[#1381e5] bg-[#1381e5]/5 font-semibold px-3 text-[#1381e5] text-nowrap"
                                        : "border-neutral-200 hover:border-neutral-300 px-4 bg-white  text-nowrap"
                                        }`}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold opacity-70">Country*</label>
                        <CountrySelector
                            value={formData.country}
                            onChange={(val: string) => setFormData((prev) => ({ ...prev, country: val }))}
                        />
                    </div>

                    <div className="flex flex-col gap-4">
                        <label className="text-sm font-semibold opacity-70">Which pilot training solution are you interested in?*</label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                            {SOLUTIONS.map((sol) => (
                                <button
                                    key={sol}
                                    type="button"
                                    onClick={() => handleSelection("solutions", sol)}
                                    className={`h-14 rounded-2xl border flex items-center justify-center transition-all ${formData.solutions.includes(sol)
                                        ? "border-[#1381e5] bg-[#1381e5]/5 font-semibold text-[#1381e5]"
                                        : "border-neutral-200 hover:border-neutral-300 bg-white"
                                        }`}
                                >
                                    {sol}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold opacity-70">Additional Information</label>
                        <textarea
                            name="additionalInfo"
                            value={formData.additionalInfo}
                            onChange={handleInputChange}
                            rows={4}
                            className="w-full rounded-2xl border border-neutral-200 p-6 focus:outline-none focus:ring-2 focus:ring-[#1381e5]/20 focus:border-[#1381e5] transition-all bg-neutral-50/30 resize-none"
                        />
                    </div>

                    <div className="flex flex-col gap-4 mt-6">
                        <button
                            disabled={isSubmitting}
                            type="submit"
                            className="h-16 rounded-full bg-[#1381e5] text-white font-bold text-xl hover:bg-[#106bc0] disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-500/10 active:scale-[0.98]"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                "Submit"
                            )}
                        </button>
                        <p className="text-xs text-neutral-400 text-center px-8">
                            Make sure you've completed all required fields marked with * before submitting.
                        </p>
                    </div>

                    {submissionStatus === "success" && (
                        <div className="p-6 rounded-2xl bg-green-50 border border-green-100 text-green-700 text-center font-semibold">
                            Thank you! Your inquiry has been sent successfully. We'll be in touch soon.
                        </div>
                    )}
                    {submissionStatus === "error" && (
                        <div className="p-6 rounded-2xl bg-red-50 border border-red-100 text-red-700 text-center font-semibold">
                            Oops! Something went wrong. Please try again or contact us directly.
                        </div>
                    )}
                </form>
            </main>
            <Footer theme="light" />
        </div>
    );
}
