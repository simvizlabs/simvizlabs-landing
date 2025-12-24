"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle2, XCircle, AlertCircle } from "lucide-react";
import { formatAmount } from "@/lib/payments";
import Link from "next/link";

type PaymentStatus = "checking" | "success" | "failed" | "pending" | "error";

const PaymentRedirectPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user, isLoaded } = useUser();
  const [status, setStatus] = useState<PaymentStatus>("checking");
  const [paymentData, setPaymentData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const merchantOrderId = searchParams.get("merchantOrderId");

  useEffect(() => {
    if (!isLoaded) return;

    if (!user) {
      router.push("/sign-in");
      return;
    }

    if (!merchantOrderId) {
      setStatus("error");
      setError("No order ID found in the URL");
      return;
    }

    // Check payment status
    checkPaymentStatus();
  }, [merchantOrderId, user, isLoaded, router]);

  const checkPaymentStatus = async () => {
    if (!merchantOrderId) return;

    try {
      // Poll for payment status
      const maxAttempts = 10;
      let attempts = 0;

      const pollStatus = async () => {
        attempts++;
        
        const response = await fetch(`/api/payments/status/${merchantOrderId}`);
        const data = await response.json();

        if (data.success && data.data) {
          const paymentState = data.data.state;

          if (paymentState === "PAYMENT_SUCCESS") {
            setStatus("success");
            setPaymentData(data.data);
            return;
          } else if (paymentState === "PAYMENT_ERROR" || paymentState === "PAYMENT_DECLINED") {
            setStatus("failed");
            setPaymentData(data.data);
            return;
          } else if (paymentState === "PAYMENT_PENDING") {
            if (attempts < maxAttempts) {
              // Continue polling
              setTimeout(pollStatus, 2000);
            } else {
              setStatus("pending");
              setPaymentData(data.data);
            }
          }
        } else {
          if (attempts < maxAttempts) {
            setTimeout(pollStatus, 2000);
          } else {
            setStatus("error");
            setError(data.message || "Failed to check payment status");
          }
        }
      };

      // Start polling after initial delay
      setTimeout(pollStatus, 1000);
    } catch (err: any) {
      console.error("Error checking payment status:", err);
      setStatus("error");
      setError(err.message || "An error occurred while checking payment status");
    }
  };

  if (!isLoaded || status === "checking") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white dark:bg-neutral-900">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-300 font-geist">
            Verifying your payment...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white text-black dark:bg-neutral-900 dark:text-white font-geist min-h-screen">
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl">
            <div className="rounded-3xl bg-white dark:bg-neutral-800 p-8 ring-1 ring-gray-200 dark:ring-gray-700 shadow-lg text-center">
              {status === "success" && (
                <>
                  <div className="mb-6">
                    <CheckCircle2 className="h-16 w-16 text-green-600 mx-auto" />
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white font-geist mb-4">
                    Payment Successful!
                  </h1>
                  <p className="text-gray-600 dark:text-gray-300 font-geist mb-6">
                    Your payment has been processed successfully.
                  </p>
                  {paymentData && (
                    <div className="bg-gray-50 dark:bg-neutral-700 rounded-lg p-4 mb-6 text-left">
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">Order ID:</span>
                          <span className="font-mono text-gray-900 dark:text-white">
                            {paymentData.merchantOrderId}
                          </span>
                        </div>
                        {paymentData.transactionId && (
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Transaction ID:</span>
                            <span className="font-mono text-gray-900 dark:text-white">
                              {paymentData.transactionId}
                            </span>
                          </div>
                        )}
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">Amount:</span>
                          <span className="font-semibold text-gray-900 dark:text-white">
                            {formatAmount(paymentData.amount)}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      onClick={() => router.push("/dashboard")}
                      className="flex-1 font-geist bg-blue-600 hover:bg-blue-700"
                    >
                      Go to Dashboard
                    </Button>
                    {merchantOrderId && (
                      <Button
                        onClick={() => router.push(`/payment/status?merchantOrderId=${merchantOrderId}`)}
                        variant="outline"
                        className="flex-1 font-geist"
                      >
                        View Details
                      </Button>
                    )}
                    <Button
                      onClick={() => router.push("/")}
                      variant="outline"
                      className="flex-1 font-geist"
                    >
                      Back to Home
                    </Button>
                  </div>
                </>
              )}

              {status === "failed" && (
                <>
                  <div className="mb-6">
                    <XCircle className="h-16 w-16 text-red-600 mx-auto" />
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white font-geist mb-4">
                    Payment Failed
                  </h1>
                  <p className="text-gray-600 dark:text-gray-300 font-geist mb-6">
                    Your payment could not be processed. Please try again.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      onClick={() => router.push("/checkout")}
                      className="flex-1 font-geist bg-blue-600 hover:bg-blue-700"
                    >
                      Try Again
                    </Button>
                    <Button
                      onClick={() => router.push("/")}
                      variant="outline"
                      className="flex-1 font-geist"
                    >
                      Back to Home
                    </Button>
                  </div>
                </>
              )}

              {status === "pending" && (
                <>
                  <div className="mb-6">
                    <AlertCircle className="h-16 w-16 text-yellow-600 mx-auto" />
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white font-geist mb-4">
                    Payment Pending
                  </h1>
                  <p className="text-gray-600 dark:text-gray-300 font-geist mb-6">
                    Your payment is being processed. Please check your dashboard later or contact support if the issue persists.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      onClick={() => router.push("/dashboard")}
                      className="flex-1 font-geist bg-blue-600 hover:bg-blue-700"
                    >
                      Go to Dashboard
                    </Button>
                    <Link
                      href="/contact"
                      className="flex-1"
                    >
                      <Button
                        variant="outline"
                        className="w-full font-geist"
                      >
                        Contact Support
                      </Button>
                    </Link>
                  </div>
                </>
              )}

              {status === "error" && (
                <>
                  <div className="mb-6">
                    <AlertCircle className="h-16 w-16 text-red-600 mx-auto" />
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white font-geist mb-4">
                    Error
                  </h1>
                  <p className="text-gray-600 dark:text-gray-300 font-geist mb-6">
                    {error || "An error occurred while processing your payment."}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      onClick={() => router.push("/checkout")}
                      className="flex-1 font-geist bg-blue-600 hover:bg-blue-700"
                    >
                      Try Again
                    </Button>
                    <Button
                      onClick={() => router.push("/")}
                      variant="outline"
                      className="flex-1 font-geist"
                    >
                      Back to Home
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PaymentRedirectPage;

