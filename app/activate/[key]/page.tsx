"use client";

import React, { useEffect, useState, Suspense } from "react";
import { Loader2, CheckCircle2, XCircle, Download, Key, ExternalLink } from "lucide-react";
import NavbarDemo from "@/components/resizable-navbar-demo";
import Footer from "@/components/footer";
import { useParams } from "next/navigation";

function ActivateContent() {
    const params = useParams();
    const licenseKey = params?.key as string;
    const [isValidating, setIsValidating] = useState(true);
    const [isValid, setIsValid] = useState<boolean | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [appOpened, setAppOpened] = useState(false);
    const [showFallback, setShowFallback] = useState(false);

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
                    // Mark license as verified in database (if needed)
                    // You can add an API call here to mark it as verified
                    
                    // Attempt to open app automatically
                    attemptAppOpen();
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

    const attemptAppOpen = () => {
        if (!licenseKey) return;

        const deeplink = `simviz://activate?license_key=${encodeURIComponent(licenseKey)}`;
        
        // Track if page becomes hidden (app opened)
        let pageHidden = false;
        const handleVisibilityChange = () => {
            if (document.hidden) {
                pageHidden = true;
                setAppOpened(true);
            }
        };
        
        document.addEventListener('visibilitychange', handleVisibilityChange);
        
        // Try to open the app via deeplink
        const startTime = Date.now();
        
        // Use iframe method for better compatibility
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.src = deeplink;
        document.body.appendChild(iframe);
        
        // Also try direct location change as fallback
        setTimeout(() => {
            window.location.href = deeplink;
        }, 100);
        
        // Show fallback button after delay if app doesn't open
        setTimeout(() => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            if (!pageHidden && document.visibilityState === 'visible') {
                // Page is still visible, app didn't open
                setShowFallback(true);
            }
            // Clean up iframe
            if (iframe.parentNode) {
                iframe.parentNode.removeChild(iframe);
            }
        }, 2500);
    };

    const handleManualActivate = () => {
        if (!licenseKey) return;
        const deeplink = `simviz://activate?license_key=${encodeURIComponent(licenseKey)}`;
        window.location.href = deeplink;
    };

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
                                        License Verified Successfully!
                                    </h2>
                                    <p className="text-neutral-600 mb-6">
                                        {appOpened 
                                            ? "Opening the SimViz Labs app..." 
                                            : showFallback 
                                                ? "The app didn't open automatically. Use the button below to open it manually."
                                                : "Attempting to open the app..."}
                                    </p>
                                </div>

                                {showFallback && (
                                    <div className="w-full max-w-md space-y-4">
                                        <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                                            <div className="flex items-start gap-4">
                                                <ExternalLink className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                                <div className="flex-1">
                                                    <h3 className="font-bold text-blue-900 mb-2">
                                                        Open App to Complete Activation
                                                    </h3>
                                                    <p className="text-sm text-blue-800 mb-4">
                                                        The app didn't open automatically. Click the button below to open the SimViz Labs app and complete activation.
                                                    </p>
                                                    <button
                                                        onClick={handleManualActivate}
                                                        className="w-full px-6 py-3 bg-[#1381e5] text-white font-bold rounded-xl hover:bg-[#106bc0] transition-all"
                                                    >
                                                        Open App to Complete Activation
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                
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
                                                href="https://apps.apple.com/in/app/airbus-a320-fms/id6743235055"
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
