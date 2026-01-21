"use client";

import React, { useEffect, useState, Suspense } from "react";
import { Loader2, CheckCircle2, XCircle, Download, Key } from "lucide-react";
import NavbarDemo from "@/components/resizable-navbar-demo";
import Footer from "@/components/footer";
import { useParams } from "next/navigation";

function ActivateContent() {
    const params = useParams();
    const licenseKey = params?.key as string;
    const [isValidating, setIsValidating] = useState(true);
    const [isValid, setIsValid] = useState<boolean | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!licenseKey) {
            setIsValidating(false);
            setIsValid(false);
            setError("No license key provided");
            return;
        }

        // Validate license key using backend API
        const validateLicense = async () => {
            try {
                const response = await fetch('/api/license/validate', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        licenseKey: licenseKey,
                    }),
                });

                const result = await response.json();

                if (result.success) {
                    setIsValid(true);
                } else {
                    setIsValid(false);
                    setError(result.message || "Invalid license key");
                }
            } catch (error) {
                console.error("Validation error:", error);
                setIsValid(false);
                setError("Failed to validate license key");
            } finally {
                setIsValidating(false);
            }
        };

        validateLicense();
    }, [licenseKey]);

    return (
        <div className="min-h-screen bg-white font-sans text-[#191716]">
            <NavbarDemo />

            <main className="max-w-4xl mx-auto px-6 sm:px-12 lg:px-24 py-24 lg:py-32">
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-6 text-center">
                        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight bg-gradient-to-r from-[#1381e5] to-[#5ea2ef] bg-clip-text text-transparent leading-[1.1]">
                            Activate License
                        </h1>
                        <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto">
                            {isValidating 
                                ? "Validating your license key..." 
                                : isValid 
                                    ? "Your license key is valid and ready to use!" 
                                    : "We couldn't validate your license key."}
                        </p>
                    </div>

                    <div className="bg-neutral-50/50 rounded-2xl p-8 border border-neutral-200 min-h-[400px] flex items-center justify-center">
                        {isValidating ? (
                            <div className="flex flex-col items-center gap-6">
                                <Loader2 className="w-16 h-16 text-[#1381e5] animate-spin" />
                                <p className="text-lg font-semibold text-neutral-700">
                                    Validating license key...
                                </p>
                                {licenseKey && (
                                    <p className="text-sm text-neutral-500 font-mono">
                                        {licenseKey}
                                    </p>
                                )}
                            </div>
                        ) : isValid ? (
                            <div className="w-full flex flex-col items-center gap-8">
                                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                                </div>
                                <div className="text-center">
                                    <h2 className="text-3xl font-bold text-green-600 mb-4">
                                        License Activated Successfully!
                                    </h2>
                                    <p className="text-neutral-600 mb-6">
                                        Your license key has been validated and is ready to use.
                                    </p>
                                    {licenseKey && (
                                        <div className="bg-white rounded-xl p-6 border border-neutral-200 mb-6">
                                            <p className="text-sm font-semibold text-neutral-600 mb-2">
                                                License Key:
                                            </p>
                                            <p className="text-xl font-mono font-bold text-[#1381e5] break-all">
                                                {licenseKey}
                                            </p>
                                        </div>
                                    )}
                                </div>
                                
                                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 max-w-md">
                                    <div className="flex items-start gap-4">
                                        <Download className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-bold text-blue-900 mb-2">
                                                Don't have the app installed?
                                            </h3>
                                            <p className="text-sm text-blue-800 mb-4">
                                                Download the SimViz Labs app from the App Store to start using your license.
                                            </p>
                                            <a
                                                href="https://apps.apple.com/app/idYOUR_APP_ID"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-block px-6 py-3 bg-[#1381e5] text-white font-bold rounded-xl hover:bg-[#106bc0] transition-all"
                                            >
                                                Download from App Store
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="w-full flex flex-col items-center gap-6">
                                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
                                    <XCircle className="w-10 h-10 text-red-600" />
                                </div>
                                <div className="text-center">
                                    <h2 className="text-3xl font-bold text-red-600 mb-4">
                                        Invalid License Key
                                    </h2>
                                    <p className="text-neutral-600 mb-4">
                                        {error || "The license key you provided is not valid or has expired."}
                                    </p>
                                    {licenseKey && (
                                        <p className="text-sm text-neutral-500 font-mono mb-6">
                                            Key: {licenseKey}
                                        </p>
                                    )}
                                    <p className="text-sm text-neutral-500">
                                        Please contact support if you believe this is an error.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            <Footer bgColor="bg-[#F5F5F7]" />
        </div>
    );
}

export default function ActivatePage() {
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
            <ActivateContent />
        </Suspense>
    );
}
