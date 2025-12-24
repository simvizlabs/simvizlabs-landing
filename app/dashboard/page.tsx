"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, Copy, Check, Loader2 } from "lucide-react";
import Footer from "@/components/footer";
import { formatAmount } from "@/lib/payments";
import NavbarDemo from "@/components/resizable-navbar-demo";

interface Payment {
  merchantOrderId: string;
  amount: number;
  state: string;
  transactionId?: string;
  createdAt?: string;
  status?: string;
}

interface Subscription {
  productId: string;
  productName: string;
  status: string;
  startDate: string | Date;
  endDate: string | Date;
  paymentId: string;
  amount: number;
  currency: string;
  isActive: boolean;
  isExpired: boolean;
}

interface UserData {
  userId: string;
  subscriptions: Subscription[];
  activeSubscriptions: Subscription[];
  totalSubscriptions: number;
}

const DashboardPage = () => {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const [isKeyVisible, setIsKeyVisible] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [payments, setPayments] = useState<Payment[]>([]);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [activationKey, setActivationKey] = useState("ABCD1234EFGH5678IJKL9012MNOP3456");

  useEffect(() => {
    if (!isLoaded) return;

    if (!user) {
      router.push("/sign-in");
      return;
    }

    // Fetch user payments
    fetchUserPayments();
  }, [user, isLoaded, router]);

  const fetchUserPayments = async () => {
    if (!user?.id) return;

    try {
      setLoading(true);
      const response = await fetch(`/api/payments/user/${user.id}`);
      const data = await response.json();

      if (data.success && data.data) {
        // New structure: { user: {...}, transactions: {...} }
        if (data.data.user && data.data.transactions) {
          // Set user data with subscriptions
          setUserData(data.data.user);
          
          // Set transactions
          const transactionsData = data.data.transactions.data || [];
          setPayments(transactionsData);
          
          // Set activation key from the first active subscription or successful payment
          const activeSubscription = data.data.user.activeSubscriptions?.[0];
          if (activeSubscription) {
            setActivationKey(generateActivationKey(activeSubscription.paymentId || activeSubscription.productId));
          } else {
            const successfulPayment = transactionsData.find(
              (p: Payment) => p.state === "PAYMENT_SUCCESS" || p.status === "COMPLETED"
            );
            if (successfulPayment) {
              setActivationKey(generateActivationKey(successfulPayment.merchantOrderId));
            }
          }
        } else {
          // Fallback: Handle old structure for backward compatibility
          const paymentsArray = Array.isArray(data.data) ? data.data : (data.data.data || []);
          setPayments(paymentsArray);
          const successfulPayment = paymentsArray.find(
            (p: Payment) => p.state === "PAYMENT_SUCCESS" || p.status === "COMPLETED"
          );
          if (successfulPayment) {
            setActivationKey(generateActivationKey(successfulPayment.merchantOrderId));
          }
        }
      }
    } catch (error) {
      console.error("Error fetching payments:", error);
    } finally {
      setLoading(false);
    }
  };

  const generateActivationKey = (orderId: string): string => {
    // Generate a consistent activation key based on order ID
    // In production, this should come from your backend
    const hash = orderId.split("").reduce((acc, char) => {
      return ((acc << 5) - acc) + char.charCodeAt(0);
    }, 0);
    return `SIMVIZ${Math.abs(hash).toString(16).toUpperCase().padStart(8, '0')}${orderId.substring(0, 8).toUpperCase()}`;
  };

  const toggleKeyVisibility = () => {
    setIsKeyVisible(!isKeyVisible);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(activationKey);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  if (!isLoaded || loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect in useEffect
  }

  // Get active subscription or active payment
  const activeSubscription = userData?.activeSubscriptions?.[0];
  const activePayment = payments.find(
    (p) => p.state === "PAYMENT_SUCCESS" || p.status === "COMPLETED"
  );
  
  // Use subscription data if available, otherwise fall back to payment data
  const hasActiveSubscription = !!activeSubscription || !!activePayment;
  const subscriptionProductName = activeSubscription?.productName || "A320 FMS Simulator";
  const subscriptionAmount = activeSubscription?.amount || activePayment?.amount || 0;
  const subscriptionEndDate = activeSubscription?.endDate 
    ? new Date(activeSubscription.endDate).toLocaleDateString()
    : null;
  
  const userFullName = user.fullName || `${user.firstName || ""} ${user.lastName || ""}`.trim() || "User";
  const userEmail = user.primaryEmailAddress?.emailAddress || "";
  const userPhone = user.primaryPhoneNumber?.phoneNumber || "";

  return (
    <div className="min-h-screen mt-24 bg-white dark:bg-neutral-900 font-geist">
      <NavbarDemo />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Active Subscription Section */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Hi, {userFullName}
          </h2>
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
            {hasActiveSubscription ? "Active Subscription" : "No Active Subscription"}
          </h3>

          {hasActiveSubscription ? (
            <div className="bg-white dark:bg-neutral-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start lg:items-center">
                {/* Product Image */}
                <div className="flex-shrink-0">
                  <Image
                    src="/images/in/a320/fms_simulator.png"
                    alt="A320 FMS Simulator"
                    width={400}
                    height={300}
                    className="rounded-lg w-full max-w-[400px] h-auto"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                    <div>
                      <h4 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                        {subscriptionProductName}
                      </h4>
                      {activeSubscription && (
                        <div className="mt-2 flex flex-wrap gap-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            activeSubscription.isActive 
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                              : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                          }`}>
                            {activeSubscription.status.toUpperCase()}
                          </span>
                          {subscriptionEndDate && (
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                              Expires: {subscriptionEndDate}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                    <Button
                      className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 py-2 w-full sm:w-auto"
                    >
                      Go To LMS
                    </Button>
                  </div>

                  {/* Activation Key */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Share Activation Key
                      </span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 dark:bg-neutral-700 rounded-lg p-3">
                      <span className="flex-1 font-mono text-sm text-gray-900 dark:text-white">
                        {isKeyVisible ? activationKey : "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX"}
                      </span>
                      <button
                        onClick={toggleKeyVisibility}
                        className="p-2 hover:bg-gray-200 dark:hover:bg-neutral-600 rounded transition-colors"
                        aria-label="Toggle key visibility"
                      >
                        {isKeyVisible ? (
                          <EyeOff className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                        )}
                      </button>
                      <button
                        onClick={copyToClipboard}
                        className="p-2 hover:bg-gray-200 dark:hover:bg-neutral-600 rounded transition-colors"
                        aria-label="Copy activation key"
                      >
                        {isCopied ? (
                          <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                        ) : (
                          <Copy className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Subscription Details */}
                  <div className="space-y-2 text-sm sm:text-base">
                    <div className="text-gray-700 dark:text-gray-300">
                      <span className="font-semibold">{formatAmount(subscriptionAmount)}/year</span>
                    </div>
                    {activeSubscription?.paymentId && (
                      <div className="text-gray-700 dark:text-gray-300">
                        <span className="font-semibold">Payment ID: {activeSubscription.paymentId}</span>
                      </div>
                    )}
                    {activePayment?.transactionId && (
                      <div className="text-gray-700 dark:text-gray-300">
                        <span className="font-semibold">Transaction ID: {activePayment.transactionId}</span>
                      </div>
                    )}
                    {activeSubscription?.startDate && (
                      <div className="text-gray-700 dark:text-gray-300">
                        <span className="font-semibold">Start Date: {new Date(activeSubscription.startDate).toLocaleDateString()}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white dark:bg-neutral-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 sm:p-8 shadow-sm text-center">
              <p className="text-gray-600 dark:text-gray-300 mb-4 font-geist">
                You don't have an active subscription yet.
              </p>
              <Button
                onClick={() => router.push("/in/a320-bundle")}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 py-2 font-geist"
              >
                Get Started
              </Button>
            </div>
          )}
        </section>

        {/* All Subscriptions Section */}
        {userData && userData.subscriptions.length > 0 && (
          <section className="mb-12">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              All Subscriptions ({userData.totalSubscriptions})
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {userData.subscriptions.map((subscription, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-neutral-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {subscription.productName}
                    </h4>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      subscription.isActive
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : subscription.status === 'refunded'
                        ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                        : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                    }`}>
                      {subscription.status.toUpperCase()}
                    </span>
                  </div>
                  <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <div>
                      <span className="font-semibold">Amount: </span>
                      {formatAmount(subscription.amount)}
                    </div>
                    <div>
                      <span className="font-semibold">Start: </span>
                      {new Date(subscription.startDate).toLocaleDateString()}
                    </div>
                    <div>
                      <span className="font-semibold">End: </span>
                      {new Date(subscription.endDate).toLocaleDateString()}
                    </div>
                    {subscription.paymentId && (
                      <div className="text-xs text-gray-500">
                        Payment: {subscription.paymentId.substring(0, 8)}...
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Transaction History Section */}
        {payments.length > 0 && (
          <section className="mb-12">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Transaction History ({payments.length})
            </h3>
            <div className="bg-white dark:bg-neutral-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 dark:bg-neutral-700">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Order ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {payments.map((payment, index) => (
                      <tr key={index} className="hover:bg-gray-50 dark:hover:bg-neutral-700">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                          {payment.merchantOrderId.substring(0, 12)}...
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                          {formatAmount(payment.amount)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${
                            payment.status === 'COMPLETED' || payment.state === 'PAYMENT_SUCCESS'
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                              : payment.status === 'FAILED' || payment.state === 'PAYMENT_ERROR'
                              ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                              : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                          }`}>
                            {payment.status || payment.state}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                          {payment.createdAt ? new Date(payment.createdAt).toLocaleDateString() : 'N/A'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* Profile Setting Section */}
        <section>
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Profile Setting
          </h3>

          <div className="space-y-8">
            {/* User Information */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                User Information
              </h4>
              <div className="bg-white dark:bg-neutral-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      First Name
                    </label>
                    <p className="text-gray-900 dark:text-white">{user.firstName || "N/A"}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Last Name
                    </label>
                    <p className="text-gray-900 dark:text-white">{user.lastName || "N/A"}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Payment
              </h4>
              <div className="bg-white dark:bg-neutral-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Billing Contact */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Billing Contact
                    </label>
                    <div className="space-y-1 text-sm text-gray-900 dark:text-white">
                      <p>{userFullName}</p>
                      <p>{userEmail || "N/A"}</p>
                      <p>{userPhone || "N/A"}</p>
                    </div>
                  </div>

                  {/* Billing Address */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Billing Address
                    </label>
                    <div className="space-y-1 text-sm text-gray-900 dark:text-white">
                      {activePayment ? (
                        <>
                          <p>{userFullName}</p>
                          <p>PhonePe Payment Gateway</p>
                        </>
                      ) : (
                        <p className="text-gray-500">No billing address on file</p>
                      )}
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Payment Method
                    </label>
                    <div className="space-y-1 text-sm text-gray-900 dark:text-white">
                      {activePayment ? (
                        <>
                          <p>PhonePe</p>
                          {activePayment.transactionId && (
                            <p className="text-xs text-gray-500">TXN: {activePayment.transactionId.substring(0, 8)}...</p>
                          )}
                        </>
                      ) : (
                        <p className="text-gray-500">No payment method on file</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
};

export default DashboardPage;

