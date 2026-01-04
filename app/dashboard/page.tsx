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
      <main className="">
        {/* Active Subscription Section */}
        
        <section className="bg-gray-100 py-20 px-4 md:px-10 lg:px-20 xl:px-32">
          <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">Profile</h2>
          </div>
          <hr className="mb-10"/>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Hi, {userFullName}
          </h2>
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
            {hasActiveSubscription ? "Active Subscription" : "No Active Subscription"}
          </h3>

          {hasActiveSubscription ? (
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Column 1: Plan Details */}
              <div className="bg-white dark:bg-neutral-800 dark:border-blue-600 p-6 flex flex-col justify-between">
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {subscriptionProductName}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Included in The Plan
                  </p>
                  <ul className="space-y-2 mb-6 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                       <Check className="h-4 w-4 text-gray-900 dark:text-white mt-0.5 shrink-0" />
                       <span>Complete A320 FMS and auto flight simulator</span>
                    </li>
                    <li className="flex items-start gap-2">
                       <Check className="h-4 w-4 text-gray-900 dark:text-white mt-0.5 shrink-0" />
                       <span>All learning and training modules</span>
                    </li>
                    <li className="flex items-start gap-2">
                       <Check className="h-4 w-4 text-gray-900 dark:text-white mt-0.5 shrink-0" />
                       <span>Airline interview preparation</span>
                    </li>
                    <li className="flex items-start gap-2">
                       <Check className="h-4 w-4 text-gray-900 dark:text-white mt-0.5 shrink-0" />
                       <span>Unlimited practice with no usage limits</span>
                    </li>
                  </ul>
                </div>

                <div>
                   {/* Activation Key */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Share Activation Key
                      </span>
                      <button
                        onClick={toggleKeyVisibility}
                        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                        aria-label="Toggle key visibility"
                      >
                         {isKeyVisible ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="flex-1 font-mono text-sm text-gray-900 dark:text-white break-all">
                        {isKeyVisible ? activationKey : "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX"}
                      </span>
                       <button
                        onClick={copyToClipboard}
                        className="p-1 hover:bg-gray-100 dark:hover:bg-neutral-700 rounded transition-colors"
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

                  <div className="flex items-center justify-between text-sm pt-4 border-t border-gray-100 dark:border-gray-700">
                    <span className="text-blue-600 dark:text-blue-400 font-medium">
                        {formatAmount(subscriptionAmount)}/year
                    </span>
                    {subscriptionEndDate && (
                         <span className="text-gray-500 dark:text-gray-400">
                           Active until {subscriptionEndDate}
                         </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Column 2: FMS Simulator */}
              <div className="bg-white dark:bg-neutral-800dark:border-gray-700  p-6 flex flex-col">
                <div className="mb-6 flex-grow flex items-center justify-center dark:bg-neutral-900 rounded-lg p-4">
                   <Image
                    src="/images/in/a320/fms_mock.png"
                    alt="A320 FMS Simulator"
                    width={400}
                    height={300}
                    className="rounded-lg w-full h-auto object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  FMS Simulator
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 font-medium">
                  Complete access to all training solutions and features.
                </p>
                 <Button
                    className=" bg-blue-600 hover:bg-blue-700 text-white rounded-[24px] py-2"
                  >
                  Access Simulator
                </Button>
              </div>

               {/* Column 3: LMS */}
              <div className="bg-white dark:bg-neutral-800  dark:border-gray-700  p-6 flex flex-col">
                 <div className="mb-6 flex-grow flex items-center justify-center dark:bg-neutral-900 rounded-lg p-4">
                   <Image
                    src="/images/in/a320/lms_mock.png"
                    alt="LMS"
                    width={400}
                    height={300}
                    className="rounded-lg w-full h-auto object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  LMS
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 font-medium">
                  Complete access to learning and training modules.
                </p>
                 <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-[24px] py-2"
                    onClick={() => router.push("https://lms.simvizlabs.com")}
                  >
                  Access LMS+P
                </Button>
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
          <section className="px-4 md:px-10 lg:px-20 xl:px-32 py-10">
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
          <section className="px-4 md:px-10 lg:px-20 xl:px-32 py-10">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Transaction History ({payments.length})
            </h3>
            <div className="bg-white dark:bg-neutral-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
              <div className="overflow-x-auto overflow-y-auto max-h-[500px]">
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
        <section className="px-4 md:px-10 lg:px-20 xl:px-32 py-10">
          <h3 className="text-3xl sm:text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Profile Settings
          </h3>

          <div className="space-y-8">
            {/* User Information */}
            {/* User Information */}
            <div className="flex flex-col md:flex-row md:gap-8 w-full">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white md:w-48 shrink-0">
                User Information
              </h4>
              <div className="flex-1 bg-white dark:bg-neutral-800 p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">
                      First Name
                    </label>
                    <p className="text-gray-900 dark:text-white font-normal">{user.firstName || "N/A"}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">
                      Last Name
                    </label>
                    <p className="text-gray-900 dark:text-white font-normal">{user.lastName || "N/A"}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="flex flex-col md:flex-row md:gap-8 w-full">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white md:w-48 shrink-0">
                Payment
              </h4>
              <div className="flex-1 bg-white dark:bg-neutral-800 p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Billing Contact */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                      Billing Contact
                    </label>
                    <div className="space-y-1 text-sm text-gray-900 dark:text-white font-normal">
                      <p>{userFullName}</p>
                      <p>{userEmail || "N/A"}</p>
                      <p>{userPhone || "N/A"}</p>
                    </div>
                  </div>

                  {/* Billing Address */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                      Billing Address
                    </label>
                    <div className="space-y-1 text-sm text-gray-900 dark:text-white font-normal">
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
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                      Payment Method
                    </label>
                    <div className="space-y-1 text-sm text-gray-900 dark:text-white font-normal">
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

