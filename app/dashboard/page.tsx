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

interface Payment {
  merchantOrderId: string;
  amount: number;
  state: string;
  transactionId?: string;
  createdAt?: string;
}

const DashboardPage = () => {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const [isKeyVisible, setIsKeyVisible] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [payments, setPayments] = useState<Payment[]>([]);
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
        // Handle both array and object with data property
        const paymentsArray = Array.isArray(data.data) ? data.data : (data.data.data || []);
        setPayments(paymentsArray);
        // Set activation key from the first successful payment if available
        const successfulPayment = paymentsArray.find(
          (p: Payment) => p.state === "PAYMENT_SUCCESS"
        );
        if (successfulPayment) {
          // Generate or retrieve activation key based on payment
          setActivationKey(generateActivationKey(successfulPayment.merchantOrderId));
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

  const activePayment = payments.find(
    (p) => p.state === "PAYMENT_SUCCESS"
  );
  const userFullName = user.fullName || `${user.firstName || ""} ${user.lastName || ""}`.trim() || "User";
  const userEmail = user.primaryEmailAddress?.emailAddress || "";
  const userPhone = user.primaryPhoneNumber?.phoneNumber || "";

  return (
    <div className="min-h-screen mt-24 bg-white dark:bg-neutral-900 font-geist">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Active Subscription Section */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Hi, {userFullName}
          </h2>
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
            {activePayment ? "Active Subscription" : "No Active Subscription"}
          </h3>

          {activePayment ? (
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
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                      A320 FMS Simulator
                    </h4>
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
                      <span className="font-semibold">{formatAmount(activePayment.amount)}/year</span>
                    </div>
                    {activePayment.transactionId && (
                      <div className="text-gray-700 dark:text-gray-300">
                        <span className="font-semibold">Transaction ID: {activePayment.transactionId}</span>
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

