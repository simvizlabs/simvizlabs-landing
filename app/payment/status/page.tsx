"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  CheckCircle2, 
  XCircle, 
  Clock, 
  AlertCircle, 
  RefreshCw,
  ArrowLeft,
  Loader2
} from "lucide-react";
import { formatAmount, paiseToRupees } from "@/lib/payments";
import Link from "next/link";

const PAYMENT_API_BASE_URL = process.env.NEXT_PUBLIC_PAYMENTS_API_URL || 'http://localhost:3000';

const getStatusIcon = (status: string) => {
  switch (status?.toUpperCase()) {
    case "COMPLETED":
    case "PAYMENT_SUCCESS":
    case "SUCCESS":
      return <CheckCircle2 className="h-12 w-12 text-green-500" />;
    case "FAILED":
    case "PAYMENT_ERROR":
    case "PAYMENT_DECLINED":
    case "FAILURE":
      return <XCircle className="h-12 w-12 text-red-500" />;
    case "PENDING":
    case "PAYMENT_PENDING":
      return <Clock className="h-12 w-12 text-yellow-500" />;
    case "REFUNDED":
      return <RefreshCw className="h-12 w-12 text-blue-500" />;
    default:
      return <AlertCircle className="h-12 w-12 text-gray-500" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status?.toUpperCase()) {
    case "COMPLETED":
    case "PAYMENT_SUCCESS":
    case "SUCCESS":
      return "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800";
    case "FAILED":
    case "PAYMENT_ERROR":
    case "PAYMENT_DECLINED":
    case "FAILURE":
      return "bg-red-100 text-red-800 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800";
    case "PENDING":
    case "PAYMENT_PENDING":
      return "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400 dark:border-yellow-800";
    case "REFUNDED":
      return "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700";
  }
};

const getStatusMessage = (status: string) => {
  switch (status?.toUpperCase()) {
    case "COMPLETED":
    case "PAYMENT_SUCCESS":
    case "SUCCESS":
      return "Payment Successful";
    case "FAILED":
    case "PAYMENT_ERROR":
    case "PAYMENT_DECLINED":
    case "FAILURE":
      return "Payment Failed";
    case "PENDING":
    case "PAYMENT_PENDING":
      return "Payment Pending";
    case "REFUNDED":
      return "Payment Refunded";
    default:
      return "Payment Status Unknown";
  }
};

const formatDate = (dateString: string | undefined) => {
  if (!dateString) return "N/A";
  try {
    const date = new Date(dateString);
    return date.toLocaleString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return dateString;
  }
};

function PaymentStatusContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { user, isLoaded } = useUser();
  
  const [paymentData, setPaymentData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Get query parameters
  const merchantOrderId = searchParams.get("merchantOrderId");
  const transactionId = searchParams.get("transactionId");
  const status = searchParams.get("status");
  const message = searchParams.get("message");

  useEffect(() => {
    if (!isLoaded) return;

    if (!user) {
      router.push("/sign-in");
      return;
    }

    const fetchPaymentStatus = async () => {
      if (!merchantOrderId) {
        setLoading(false);
        setError("No order ID found in the URL");
        return;
      }

      try {
        setLoading(true);
        setError(null);
        
        // Fetch detailed payment status from API
        const apiUrl = `/api/payments/status/${merchantOrderId}`;
        
        try {
          const response = await fetch(apiUrl);
          const data = await response.json();
          
          if (data.success && data.data) {
            setPaymentData(data.data);
          } else if (data.data) {
            setPaymentData(data.data);
          } else {
            // Fallback to query parameters
            setPaymentData({
              merchantOrderId,
              state: status || "UNKNOWN",
              message: message || "",
              transactionId,
            });
          }
        } catch (apiError: any) {
          // If API call fails, use query parameters
          console.warn("Failed to fetch payment details from API:", apiError);
          setPaymentData({
            merchantOrderId,
            state: status || "UNKNOWN",
            message: message || "",
            transactionId,
          });
        }
      } catch (err: any) {
        console.error("Error fetching payment status:", err);
        setError(err.message || "Failed to fetch payment status");
        // Fallback to query parameters
        setPaymentData({
          merchantOrderId,
          state: status || "UNKNOWN",
          message: message || "",
          transactionId,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchPaymentStatus();
  }, [merchantOrderId, status, message, transactionId, user, isLoaded, router]);

  const currentStatus = paymentData?.state || paymentData?.status || status || "UNKNOWN";
  const currentMessage = paymentData?.message || message || "";

  if (!isLoaded) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    );
  }

  return (
    <div className="bg-white text-black dark:bg-neutral-900 dark:text-white font-geist min-h-screen">
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {/* Header */}
          <header className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 p-8 text-white shadow-2xl mb-8">
            <div className="absolute -right-10 top-6 h-40 w-40 rounded-full bg-white/20 blur-3xl" />
            <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-blue-300/30 blur-3xl" />
            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => router.push("/dashboard")}
                  className="text-white hover:bg-white/10 font-geist"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Dashboard
                </Button>
              </div>
              <h1 className="text-3xl font-semibold md:text-4xl font-geist">
                Payment Status
              </h1>
              <p className="max-w-2xl text-sm text-white/80 font-geist">
                View the status of your payment transaction
              </p>
            </div>
          </header>

          {loading ? (
            <div className="rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-neutral-800 p-12 shadow-lg">
              <div className="flex flex-col items-center justify-center space-y-4">
                <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
                <p className="text-sm text-gray-600 dark:text-gray-300 font-geist">Loading payment status...</p>
              </div>
            </div>
          ) : error && !paymentData ? (
            <div className="rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-neutral-800 p-12 shadow-lg">
              <div className="flex flex-col items-center justify-center space-y-4">
                <AlertCircle className="h-12 w-12 text-red-500" />
                <p className="text-base font-semibold text-gray-900 dark:text-white font-geist">Error</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 font-geist">{error}</p>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Status Card */}
              <div className="rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-neutral-800 p-8 shadow-lg">
                <div className="flex flex-col items-center justify-center space-y-6 text-center">
                  {getStatusIcon(currentStatus)}
                  <div className="space-y-2">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white font-geist">
                      {getStatusMessage(currentStatus)}
                    </h2>
                    <Badge
                      className={`${getStatusColor(currentStatus)} border px-4 py-1.5 text-sm font-semibold font-geist`}
                    >
                      {currentStatus}
                    </Badge>
                  </div>
                  {currentMessage && (
                    <p className="max-w-md text-sm text-gray-600 dark:text-gray-300 font-geist">
                      {currentMessage}
                    </p>
                  )}
                </div>
              </div>

              {/* Payment Details Card */}
              <div className="rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-neutral-800 shadow-lg">
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white font-geist">
                    Payment Details
                  </h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-1">
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 font-geist">
                        Merchant Order ID
                      </p>
                      <p className="text-sm font-medium text-gray-900 dark:text-white font-geist font-mono">
                        {paymentData?.merchantOrderId || merchantOrderId || "N/A"}
                      </p>
                    </div>
                    {paymentData?.transactionId && (
                      <div className="space-y-1">
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 font-geist">
                          Transaction ID
                        </p>
                        <p className="text-sm font-medium text-gray-900 dark:text-white font-geist font-mono">
                          {paymentData.transactionId}
                        </p>
                      </div>
                    )}
                    {transactionId && !paymentData?.transactionId && (
                      <div className="space-y-1">
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 font-geist">
                          Transaction ID
                        </p>
                        <p className="text-sm font-medium text-gray-900 dark:text-white font-geist font-mono">
                          {transactionId}
                        </p>
                      </div>
                    )}
                    <div className="space-y-1">
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 font-geist">
                        Amount
                      </p>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white font-geist">
                        {formatAmount(paymentData?.amount || 0)}
                      </p>
                    </div>
                    {paymentData?.state && (
                      <div className="space-y-1">
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 font-geist">
                          State
                        </p>
                        <p className="text-sm font-medium text-gray-900 dark:text-white font-geist">
                          {paymentData.state}
                        </p>
                      </div>
                    )}
                    {paymentData?.responseCode && (
                      <div className="space-y-1">
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 font-geist">
                          Response Code
                        </p>
                        <p className="text-sm font-medium text-gray-900 dark:text-white font-geist">
                          {paymentData.responseCode}
                        </p>
                      </div>
                    )}
                    {paymentData?.paymentInstrument && (
                      <div className="space-y-1">
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 font-geist">
                          Payment Method
                        </p>
                        <p className="text-sm font-medium text-gray-900 dark:text-white font-geist">
                          {paymentData.paymentInstrument.type || "N/A"}
                        </p>
                      </div>
                    )}
                  </div>

                  {paymentData?.paymentInstrument?.utr && (
                    <>
                      <Separator className="my-4" />
                      <div className="space-y-1">
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 font-geist">
                          UTR (Unique Transaction Reference)
                        </p>
                        <p className="text-sm font-medium text-gray-900 dark:text-white font-geist font-mono">
                          {paymentData.paymentInstrument.utr}
                        </p>
                      </div>
                    </>
                  )}

                  {paymentData?.errorCode && (
                    <>
                      <Separator className="my-4" />
                      <div className="space-y-1">
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 font-geist">
                          Error Code
                        </p>
                        <p className="text-sm font-medium text-red-600 dark:text-red-400 font-geist">
                          {paymentData.errorCode}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button
                  onClick={() => router.push("/dashboard")}
                  className="rounded-lg bg-blue-600 hover:bg-blue-700 px-6 py-2 text-sm font-semibold text-white shadow-lg font-geist"
                >
                  Go to Dashboard
                </Button>
                {merchantOrderId && (
                  <Button
                    variant="outline"
                    onClick={() => {
                      setLoading(true);
                      window.location.reload();
                    }}
                    className="rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-neutral-800 px-6 py-2 text-sm font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-neutral-700 font-geist"
                  >
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Refresh Status
                  </Button>
                )}
                <Button
                  variant="outline"
                  onClick={() => router.push("/")}
                  className="rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-neutral-800 px-6 py-2 text-sm font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-neutral-700 font-geist"
                >
                  Back to Home
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function PaymentStatusPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-white dark:bg-neutral-900">
          <div className="flex flex-col items-center justify-center space-y-4">
            <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
            <p className="text-sm text-gray-600 dark:text-gray-300 font-geist">Loading payment status...</p>
          </div>
        </div>
      }
    >
      <PaymentStatusContent />
    </Suspense>
  );
}

