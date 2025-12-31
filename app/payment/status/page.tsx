"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useUser, useAuth } from "@clerk/nextjs";
import Footer from "@/components/footer";
import NavbarDemo from "@/components/resizable-navbar-demo";
import { Button } from "@/components/ui/button";
import { Check, X, Loader2, Clock7Icon } from "lucide-react";
import { rupeesToPaise } from "@/lib/payments";
import { toast } from "sonner";

function PaymentStatusContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { user, isLoaded } = useUser();
  const { getToken, userId } = useAuth();

  const [loading, setLoading] = useState(true);
  const [retryLoading, setRetryLoading] = useState(false);
  const [statusState, setStatusState] = useState<"SUCCESS" | "PENDING" | "FAILURE">("PENDING");
  const [orderId, setOrderId] = useState<string>("N/A");
  const [orderDate, setOrderDate] = useState<string>("");
  const [subscriptionActive, setSubscriptionActive] = useState(false);

  // Get queries
  const merchantOrderId = searchParams.get("merchantOrderId");
  const statusParam = searchParams.get("status");

  useEffect(() => {
    if (!isLoaded) return;
    
    const checkPaymentStatus = async () => {
      setLoading(true);
      
      try {
        if (!merchantOrderId) {
            console.error("No merchant order ID found");
            setStatusState("FAILURE");
            setLoading(false);
            return;
        }

        setOrderId(merchantOrderId);
        setOrderDate(new Date().toLocaleDateString("en-GB"));

        // Get token for authenticated request if available
        const token = await getToken();
        
        const response = await fetch(`/api/payments/status/${merchantOrderId}`, {
            headers: {
                "Content-Type": "application/json",
                ...(token && { Authorization: `Bearer ${token}` }),
            }
        });

        const data = await response.json();
        console.log("Payment status response:", data);

        if (data.success && data.data) {
            const paymentState = data.data.state;
            const statusUpper = paymentState ? paymentState.toUpperCase() : "";
            
            if (statusUpper === "PAYMENT_SUCCESS" || statusUpper === "COMPLETED") {
                setStatusState("SUCCESS");
            } else if (statusUpper === "PAYMENT_PENDING" || statusUpper === "PENDING") {
                setStatusState("PENDING");
            } else {
                // Covers PAYMENT_ERROR, PAYMENT_DECLINED, FAILED, etc.
                setStatusState("FAILURE");
            }
        } else {
             // Fallback if API fails or returns error
             console.error("Payment status check failed:", data.message);
             // If we have a status param from URL as fallback, use it cautiously?
             // Ideally we trust the API. If API fails, it's likely a failure or pending.
             setStatusState("PENDING"); 
        }

      } catch (error) {
          console.error("Error checking payment status:", error);
          setStatusState("PENDING");
      } finally {
          setLoading(false);
      }
    };

    checkPaymentStatus();

  }, [isLoaded, merchantOrderId, getToken]);


  const renderStatusIcon = () => {
    if (statusState === "SUCCESS") {
      return (
        <div className="h-16 w-16 rounded-full border-4 border-green-500 flex items-center justify-center mb-6">
          <Check className="h-8 w-8 text-[#53BA39]" strokeWidth={3} />
        </div>
      );
    }
    if (statusState === "FAILURE") {
      return (
        <div className="h-16 w-16 rounded-full border-4 border-red-500 flex items-center justify-center mb-6">
            <X className="h-8 w-8 text-red-500" strokeWidth={3} />
        </div>
      );
    }
    return (
        <div className="h-16 w-16 flex items-center justify-center mb-6">
            <Clock7Icon className="h-12 w-12 text-[#EAB002] " />
        </div>
    );
  };

  const renderStatusMessage = () => {
      if (statusState === "SUCCESS") return "Payment Success";
      if (statusState === "FAILURE") return "Payment Failed";
      return "Payment Pending";
  }

  const handleBackToProfile = () => {
    router.push("/dashboard");
  };

  const handleRetryPayment = async () => {
     if (!userId || !isLoaded) {
         // Redirect to sign-in if somehow not logged in
        const currentUrl = new URL(window.location.href);
        const signInUrl = new URL("/sign-in", window.location.origin);
        signInUrl.searchParams.set("redirect_url", currentUrl.toString());
        router.push(signInUrl.toString());
        return;
     }

     try {
         setRetryLoading(true);
         const token = await getToken();
         
         // Hardcoded product details for retry
         const productName = "A320 FMS Simulator";
         const productAmount = 9000;
         const productId = "a320-bundle";
         const amountInPaise = rupeesToPaise(productAmount);

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
            // Check for duplicate subscription error
            if (data.errors && data.errors.code === "DUPLICATE_SUBSCRIPTION") {
                toast.error("Subscription exists");
                setSubscriptionActive(true);
                return;
            }
            throw new Error(data.message || "Failed to initiate payment");
          }

          if (data.success && data.data) {
             const paymentResponse = data.data;

            if (paymentResponse.checkoutUrl) {
                window.location.href = paymentResponse.checkoutUrl;
            } else if (paymentResponse.paymentUrl || paymentResponse.url) {
                window.location.href = paymentResponse.paymentUrl || paymentResponse.url;
            } else if (paymentResponse.merchantOrderId) {
                 const statusUrl = new URL("/payment/status", window.location.origin);
                 statusUrl.searchParams.set("merchantOrderId", paymentResponse.merchantOrderId);
                 router.push(statusUrl.toString());
            } else {
                 console.error("Failed to get payment URL");
            }
          }

     } catch (err: any) {
         console.error("Error creating payment:", err);
         toast.error(err.message || "Failed to initiate payment");
     } finally {
         setRetryLoading(false);
     }
  };

  const handleRefreshStatus = () => {
      window.location.reload();
  };

  if (!isLoaded || loading) {
     return (
        <div className="flex min-h-screen items-center justify-center bg-white dark:bg-neutral-900">
           <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
        </div>
     );
  }

  return (
    <div className="bg-gray-50 dark:bg-neutral-900 min-h-screen flex flex-col font-geist">
      <NavbarDemo />
      
      <main className="mt-20 flex-grow flex flex-col items-center justify-center">
        
        {/* Status Section */}
        <div className="flex flex-col items-center text-center mb-16 py-20">
            {renderStatusIcon()}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {renderStatusMessage()}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                Order No. {orderId}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
                Order Date {orderDate}
            </p>
        </div>

        {/* Subscription Details */}
        <div className="w-full bg-white md:p-32 p-20">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-100 dark:border-gray-700 pb-4">
                Subscription Detail
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Col 1 */}
                <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">A320</h3>
                </div>

                {/* Col 2 */}
                <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">FMS Simulator</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Complete access to all training solutions and features.
                    </p>
                </div>

                {/* Col 3 */}
                <div>
                     <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">LMS</h3>
                     <p className="text-sm text-gray-600 dark:text-gray-400">
                        Complete access to learning and training modules.
                    </p>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                {statusState === "PENDING" && (
                     <Button 
                        onClick={handleRefreshStatus}
                        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-2"
                     >
                        Refresh Status
                     </Button>
                )}

                {statusState === "FAILURE" && (
                    <Button 
                        onClick={handleRetryPayment}
                        disabled={retryLoading || subscriptionActive}
                        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-2 disabled:bg-blue-400 disabled:cursor-not-allowed"
                    >
                        {subscriptionActive ? (
                            "Subscription Active"
                        ) : retryLoading ? (
                             <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Please wait...
                             </>
                        ) : "Retry Payment"}
                    </Button>
                )}
                
                <Button 
                    onClick={handleBackToProfile}
                    className={`${statusState === "SUCCESS" ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-white'} rounded-full px-8 py-2`}
                >
                    Back to Profile
                </Button>
            </div>
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
          <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
        </div>
      }
    >
      <PaymentStatusContent />
    </Suspense>
  );
}
