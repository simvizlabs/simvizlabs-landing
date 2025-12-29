"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Loader2, AlertCircle } from "lucide-react";
import { rupeesToPaise } from "@/lib/payments";

interface OrderSummaryModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const formatAmountDisplay = (amount: number) => {
  return `₹${amount.toLocaleString("en-IN", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
};

export const OrderSummaryModal: React.FC<OrderSummaryModalProps> = ({
  open,
  onOpenChange,
}) => {
  const { getToken, userId, isLoaded } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const productName = "A320 FMS Simulator";
  const productAmount = 9000; // Amount in rupees
  const productId = "a320-bundle";
  const amountInPaise = rupeesToPaise(productAmount);

  const handlePayment = async () => {
    if (!userId || !isLoaded) {
      setError("Please sign in to continue");
      // Redirect to sign-in
      const currentUrl = window.location.href;
      const signInUrl = new URL("/sign-in", window.location.origin);
      signInUrl.searchParams.set("redirect_url", currentUrl);
      router.push(signInUrl.toString());
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
          subscriptionEndDate: new Date(
            Date.now() + 365 * 24 * 60 * 60 * 1000
          ).toISOString(), // 1 year from now
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
        err.message || "Failed to initiate payment. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-[85vw] sm:max-w-lg flex flex-col h-full p-6">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-2xl font-bold text-gray-900 dark:text-white font-geist">
            Order Summary
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto space-y-6 min-h-0">
          {/* Product Details */}
          <div className="space-y-4">
            {/* A320 FMS Simulator */}
            <div className="flex gap-4">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <Image
                  src="/images/in/a320/1.png"
                  alt="A320 FMS Simulator"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-gray-900 dark:text-white font-geist text-base">
                  A320 FMS Simulator
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-geist mt-1">
                  Complete access to all training solutions and features.
                </p>
              </div>
            </div>

            {/* A320 LMS */}
            <div className="flex gap-4">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <Image
                  src="/images/in/a320/lms_mock.png"
                  alt="A320 LMS"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-gray-900 dark:text-white font-geist text-base">
                  A320 LMS
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-geist mt-1">
                  Complete access to learning and training modules.
                </p>
              </div>
            </div>

            {/* Pricing Info */}
            <div className="flex items-center justify-between pt-2">
              <span className="text-sm text-gray-600 dark:text-gray-400 font-geist">
                Annual, prepaid
              </span>
              <span className="text-base font-semibold text-[#1381E5] font-geist">
                {formatAmountDisplay(productAmount)}/year
              </span>
            </div>
          </div>

          <Separator />

          {/* Cost Breakdown */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400 font-geist">
                Subtotal
              </span>
              <span className="font-medium text-gray-900 dark:text-white font-geist">
                {formatAmountDisplay(productAmount)}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400 font-geist">
                Tax
              </span>
              <span className="font-medium text-gray-900 dark:text-white font-geist">
                Included
              </span>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-gray-900 dark:text-white font-geist">
                Order Total
              </span>
              <span className="text-xl font-bold text-[#1381E5] font-geist">
                {formatAmountDisplay(productAmount)}
              </span>
            </div>
          </div>

          </div>
          <div className="pt-6 mt-auto">
          {/* Error Message */}
          {error && (
            <div className="rounded-lg border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 p-4">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0" />
                <p className="text-sm text-red-800 dark:text-red-200 font-geist">
                  {error}
                </p>
              </div>
            </div>
          )}

          {/* Proceed to Payment Button */}
          <div className="pt-4">
            <Button
              onClick={handlePayment}
              disabled={loading || !isLoaded}
              className="w-full rounded-lg bg-[#1381E5] hover:bg-blue-700 px-6 py-6 text-base font-semibold text-white shadow-lg disabled:opacity-50 font-geist"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Processing...
                </>
              ) : (
                "Proceed to Payment"
              )}
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

