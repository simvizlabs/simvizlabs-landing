"use client";

import React, { useEffect, useState, Suspense } from "react";
import { Loader2, CheckCircle2, XCircle, Key } from "lucide-react";
import NavbarDemo from "@/components/resizable-navbar-demo";
import Footer from "@/components/footer";
import { useSearchParams } from "next/navigation";

interface LicenseData {
    licenseKey?: string;
    email: string;
    firstName: string;
    lastName: string;
    userId?: string;
    userType?: string;
    createdAt: string;
}

function LicenseKeyContent() {
    const searchParams = useSearchParams();
    const licenseKey = searchParams.get("query");
    const [isValidating, setIsValidating] = useState(true);
    const [isValid, setIsValid] = useState<boolean | null>(null);
    const [licenseData, setLicenseData] = useState<LicenseData | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const validateLicense = async () => {
            if (!licenseKey) {
                setIsValidating(false);
                setIsValid(false);
                setError("No license key provided");
                return;
            }

            try {
                const response = await fetch(`/api/generate-license?key=${encodeURIComponent(licenseKey)}`);
                const result = await response.json();

                if (result.success && result.valid) {
                    setIsValid(true);
                    setLicenseData(result.licenseData);
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
                            License Key Validation
                        </h1>
                        <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto">
                            Checking license key validity...
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
                            <div className="w-full flex flex-col gap-8">
                                <div className="flex items-center justify-center gap-4">
                                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                                        <CheckCircle2 className="w-10 h-10 text-green-600" />
                                    </div>
                                    <div className="text-center">
                                        <h2 className="text-3xl font-bold text-green-600">
                                            License Key Valid
                                        </h2>
                                        <p className="text-neutral-600 mt-2">
                                            Your license key has been successfully validated
                                        </p>
                                    </div>
                                </div>

                                {licenseData && (
                                    <div className="bg-white rounded-xl p-8 border border-neutral-200">
                                        <div className="flex items-center gap-3 mb-6">
                                            <Key className="w-6 h-6 text-[#1381e5]" />
                                            <h3 className="text-xl font-bold text-[#1381e5]">
                                                License Information
                                            </h3>
                                        </div>

                                        <div className="grid sm:grid-cols-2 gap-6">
                                            <div>
                                                <p className="text-sm font-semibold text-neutral-600 mb-2">
                                                    License Key
                                                </p>
                                                <p className="text-lg font-mono font-bold text-[#1381e5] break-all">
                                                    {licenseKey}
                                                </p>
                                            </div>

                                            <div>
                                                <p className="text-sm font-semibold text-neutral-600 mb-2">
                                                    Email
                                                </p>
                                                <p className="text-lg text-neutral-800">
                                                    {licenseData.email}
                                                </p>
                                            </div>

                                            <div>
                                                <p className="text-sm font-semibold text-neutral-600 mb-2">
                                                    First Name
                                                </p>
                                                <p className="text-lg text-neutral-800">
                                                    {licenseData.firstName}
                                                </p>
                                            </div>

                                            <div>
                                                <p className="text-sm font-semibold text-neutral-600 mb-2">
                                                    Last Name
                                                </p>
                                                <p className="text-lg text-neutral-800">
                                                    {licenseData.lastName}
                                                </p>
                                            </div>

                                            {licenseData.userId && (
                                                <div>
                                                    <p className="text-sm font-semibold text-neutral-600 mb-2">
                                                        User ID
                                                    </p>
                                                    <p className="text-lg text-neutral-800 font-mono text-sm break-all">
                                                        {licenseData.userId}
                                                    </p>
                                                </div>
                                            )}

                                            {licenseData.userType && (
                                                <div>
                                                    <p className="text-sm font-semibold text-neutral-600 mb-2">
                                                        User Type
                                                    </p>
                                                    <p className="text-lg text-neutral-800">
                                                        {licenseData.userType}
                                                    </p>
                                                </div>
                                            )}

                                            <div className="sm:col-span-2">
                                                <p className="text-sm font-semibold text-neutral-600 mb-2">
                                                    Created At
                                                </p>
                                                <p className="text-lg text-neutral-800">
                                                    {new Date(licenseData.createdAt).toLocaleString()}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="w-full flex flex-col items-center gap-6">
                                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
                                    <XCircle className="w-10 h-10 text-red-600" />
                                </div>
                                <div className="text-center">
                                    <h2 className="text-3xl font-bold text-red-600">
                                        Invalid License Key
                                    </h2>
                                    <p className="text-neutral-600 mt-2">
                                        {error || "The license key you provided is not valid or has expired."}
                                    </p>
                                    {licenseKey && (
                                        <p className="text-sm text-neutral-500 font-mono mt-4">
                                            Key: {licenseKey}
                                        </p>
                                    )}
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
