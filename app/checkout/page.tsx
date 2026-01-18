"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import NavbarDemo from "@/components/resizable-navbar-demo";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Loader2,
  ArrowLeft,
  CreditCard,
  Shield,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { rupeesToPaise } from "@/lib/payments";

const formatAmountDisplay = (amount: number | string) => {
  if (!amount) return "N/A";
  // Amount is in paise, convert to rupees
  const rupees = typeof amount === "number" ? amount / 100 : parseFloat(amount) / 100;
  return `₹${rupees.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};

function CheckoutContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { getToken, userId, isLoaded } = useAuth();
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Get metadata from query params
  const productName = searchParams.get("product") || "A320 FMS Simulator";
  const productAmount = searchParams.get("amount") || "9000"; // Amount in rupees
  const productId = searchParams.get("productId") || "a320-bundle";
  
  // Convert to paise for API
  const amountInPaise = typeof productAmount === "string" 
    ? rupeesToPaise(parseFloat(productAmount)) 
    : rupeesToPaise(productAmount);

  useEffect(() => {
    // Redirect to sign-in if not authenticated
    if (isLoaded && !userId) {
      const currentUrl = window.location.href;
      const signInUrl = new URL("/sign-in", window.location.origin);
      signInUrl.searchParams.set("redirect_url", currentUrl);
      router.push(signInUrl.toString());
    }
  }, [isLoaded, userId, router]);

  const handlePayment = async () => {
    if (!userId || !isLoaded) {
      setError("Please sign in to continue");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const token = await getToken();
      
      // Create payment order with userId and required metadata
      const paymentData = {
        amount: amountInPaise,
        metadata: {
          userId: userId,
          productId: productId,
          productName: productName,
          plan: productId,
          planName: productName,
          subscriptionType: productName,
          subscriptionEndDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(), // 1 year from now
          amount: amountInPaise,
          currency: "INR",
        },
      };

      const response = await fetch("/api/payments/initiate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token && { Authorization: `Bearer ${token}` }),
        },
        body: JSON.stringify(paymentData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to initiate payment");
      }

      // Handle response - redirect to payment gateway checkout URL
      if (data.success && data.data) {
        const paymentResponse = data.data;
        
        // Priority: checkoutUrl (PhonePe payment gateway)
        if (paymentResponse.checkoutUrl) {
          window.location.href = paymentResponse.checkoutUrl;
        } 
        // Fallback: paymentUrl or url
        else if (paymentResponse.paymentUrl || paymentResponse.url) {
          window.location.href = paymentResponse.paymentUrl || paymentResponse.url;
        } 
        // If only order ID is provided, redirect to payment status page
        else if (paymentResponse.merchantOrderId) {
          const statusUrl = new URL("/payment/status", window.location.origin);
          statusUrl.searchParams.set("merchantOrderId", paymentResponse.merchantOrderId);
          router.push(statusUrl.toString());
        } 
        // Fallback: show error
        else {
          setError("Failed to get payment URL. Please try again.");
        }
      } else {
        setError("Failed to create payment order. Please try again.");
      }
    } catch (err: any) {
      console.error("Error creating payment:", err);
      setError(
        err.message || 
        "Failed to initiate payment. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (!isLoaded) {
    return (
      <div className="bg-white text-black dark:bg-neutral-900 dark:text-white font-geist min-h-screen">
        <NavbarDemo />
        <div className="flex items-center justify-center h-screen">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
        </div>
        <Footer bgColor="bg-[#F5F5F7]" />
      </div>
    );
  }

  if (!userId) {
    return null; // Will redirect in useEffect
  }

  const features = [
    "Complete A320 FMS and auto flight simulator",
    "All learning and training modules",
    "Airline interview preparation content",
    "Unlimited practice with no usage limits",
  ];

  return (
    <div className="bg-white text-black dark:bg-neutral-900 dark:text-white font-geist min-h-screen">
      <NavbarDemo />
      
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <header className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 p-8 text-white shadow-2xl mb-8">
            <div className="absolute -right-10 top-6 h-40 w-40 rounded-full bg-white/20 blur-3xl" />
            <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-blue-300/30 blur-3xl" />
            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => router.push("/")}
                  className="text-white hover:bg-white/10 font-geist"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
              </div>
              <h1 className="text-3xl font-semibold md:text-4xl font-geist">
                Checkout
              </h1>
              <p className="max-w-2xl text-sm text-white/80 font-geist">
                Complete your purchase to get started with our training solutions
              </p>
            </div>
          </header>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Order Summary */}
            <div className="lg:col-span-2">
              <div className="rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-neutral-800 shadow-lg">
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white font-geist">
                    Order Summary
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-geist mt-1">
                    Review your order details before proceeding to payment
                  </p>
                </div>
                <div className="p-6 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-neutral-700 p-4">
                      <div className="space-y-1">
                        <p className="font-semibold text-gray-900 dark:text-white font-geist">{productName}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 font-geist">
                          Complete access to all training solutions and features
                        </p>
                      </div>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white font-geist">
                        {formatAmountDisplay(amountInPaise)}
                      </p>
                    </div>
                  </div>

                  <Separator className="my-4" />

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400 font-geist">Subtotal</span>
                      <span className="font-medium text-gray-900 dark:text-white font-geist">{formatAmountDisplay(amountInPaise)}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400 font-geist">Tax</span>
                      <span className="font-medium text-gray-900 dark:text-white font-geist">Included</span>
                    </div>
                    <Separator className="my-4" />
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-gray-900 dark:text-white font-geist">Total</span>
                      <span className="text-2xl font-bold text-gray-900 dark:text-white font-geist">{formatAmountDisplay(amountInPaise)}</span>
                    </div>
                  </div>

                  {error && (
                    <div className="rounded-lg border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 p-4">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                        <p className="text-sm text-red-800 dark:text-red-200 font-geist">{error}</p>
                      </div>
                    </div>
                  )}

                  <Button
                    onClick={handlePayment}
                    disabled={loading}
                    className="w-full rounded-lg bg-blue-600 hover:bg-blue-700 px-6 py-6 text-base font-semibold text-white shadow-lg disabled:opacity-50 font-geist"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <CreditCard className="mr-2 h-5 w-5" />
                        Proceed to Payment
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>

            {/* What's Included */}
            <div className="lg:col-span-1">
              <div className="rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-neutral-800 shadow-lg">
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white font-geist">
                    What's Included
                  </h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="space-y-3">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 flex-none text-green-600 dark:text-green-400 mt-0.5" />
                        <span className="text-sm text-gray-700 dark:text-gray-300 font-geist">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Separator className="my-4" />

                  <div className="flex items-center gap-2 rounded-lg bg-gray-50 dark:bg-neutral-700 p-3">
                    <Shield className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                    <p className="text-xs text-gray-600 dark:text-gray-400 font-geist">
                      Secure payment processing. Your information is safe and encrypted.
                    </p>
                  </div>
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

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <div className="bg-white text-black dark:bg-neutral-900 dark:text-white font-geist min-h-screen">
          <NavbarDemo />
          <div className="flex items-center justify-center min-h-screen">
            <div className="flex flex-col items-center justify-center space-y-4">
              <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
              <p className="text-sm text-gray-600 dark:text-gray-300 font-geist">Loading checkout...</p>
            </div>
          </div>
          <Footer bgColor="bg-[#F5F5F7]" />
        </div>
      }
    >
      <CheckoutContent />
    </Suspense>
  );
}

