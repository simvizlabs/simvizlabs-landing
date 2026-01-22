"use client";

import React, { useEffect, Suspense } from "react";
import { Loader2, CheckCircle2, XCircle, Key } from "lucide-react";
import NavbarDemo from "@/components/resizable-navbar-demo";
import Footer from "@/components/footer";
import { useSearchParams } from "next/navigation";

function LicenseKeyContent() {
    const searchParams = useSearchParams();
    const licenseKey = searchParams.get("query");

    // useEffect(() => {
    //     if (licenseKey) {
    //         // Attempt automatic redirection
    //         const timer = setTimeout(() => {
    //             window.location.href = `simvizlabs://activate?key=${encodeURIComponent(licenseKey)}`;
    //         }, 1000);
    //         return () => clearTimeout(timer);
    //     }
    // }, [licenseKey]);

    if (!licenseKey) {
        return (
            <div className="min-h-screen bg-white font-sans text-[#191716]">
                <NavbarDemo />
                <main className="max-w-4xl mx-auto px-6 sm:px-12 lg:px-24 py-24 lg:py-32">
                    <div className="flex flex-col items-center gap-6">
                        <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
                            <XCircle className="w-10 h-10 text-red-600" />
                        </div>
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-red-600">
                                Invalid License Key
                            </h2>
                            <p className="text-neutral-600 mt-2">
                                No license key provided.
                            </p>
                        </div>
                    </div>
                </main>
                <Footer bgColor="bg-[#F5F5F7]" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white font-sans text-[#191716]">
            <NavbarDemo />

            <main className="max-w-4xl mx-auto px-6 sm:px-12 lg:px-24 py-24 lg:py-32">
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-6 text-center">
                        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight bg-gradient-to-r from-[#1381e5] to-[#5ea2ef] bg-clip-text text-transparent leading-[1.1]">
                            License Key Validation
                        </h1>
                        <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto">
                            Redirecting to application...
                        </p>
                    </div>

                    <div className="bg-neutral-50/50 rounded-2xl p-8 border border-neutral-200 min-h-[400px] flex items-center justify-center">
                        <div className="w-full flex flex-col gap-8 items-center">
                            <div className="flex items-center justify-center gap-4">
                                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center relative">
                                    <div className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin" />
                                    <div className="w-3 h-3 bg-blue-500 rounded-full" />
                                </div>
                                <div className="text-center">
                                    <h2 className="text-3xl font-bold text-[#1381e5]">
                                        Launching Application
                                    </h2>
                                    <p className="text-neutral-600 mt-2">
                                        Please wait while we open the SimViz Labs app...
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col items-center gap-4">
                                <p className="text-sm text-neutral-500">
                                    If the app doesn't open automatically:
                                </p>
                                <a
                                    href={`simvizlabs://activate?key=${encodeURIComponent(licenseKey)}`}
                                    className="bg-[#1381e5] hover:bg-[#0f6cbd] text-white px-8 py-3 rounded-full font-semibold transition-colors flex items-center gap-2"
                                >
                                    Open Application
                                </a>
                            </div>

                            <div className="w-full mt-8 bg-white rounded-xl p-6 border border-neutral-200 opacity-60 hover:opacity-100 transition-opacity">
                                <div className="flex items-center gap-2 mb-4">
                                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                                    <span className="text-sm font-semibold text-green-600">Ready to Activate</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Key className="w-5 h-5 text-neutral-400" />
                                    <code className="text-sm font-mono text-neutral-600 bg-neutral-100 px-2 py-1 rounded">
                                        {licenseKey}
                                    </code>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer bgColor="bg-[#F5F5F7]" />
        </div>
    );
}

export default function LicenseKeyPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-white font-sans text-[#191716]">
                <NavbarDemo />
                <main className="max-w-4xl mx-auto px-6 sm:px-12 lg:px-24 py-24 lg:py-32">
                    <div className="flex flex-col items-center justify-center gap-6 min-h-[400px]">
                        <Loader2 className="w-16 h-16 text-[#1381e5] animate-spin" />
                        <p className="text-lg font-semibold text-neutral-700">
                            Loading...
                        </p>
                    </div>
                </main>
                <Footer bgColor="bg-[#F5F5F7]" />
            </div>
        }>
            <LicenseKeyContent />
        </Suspense>
    );
}
