"use client";
import React from "react";
import { useRouter } from "next/navigation";
import NavbarDemo from "@/components/resizable-navbar-demo";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";

const CheckoutPage = () => {
  const router = useRouter();

  return (
    <div className="bg-white text-black dark:bg-neutral-900 dark:text-white font-geist min-h-screen">
      <NavbarDemo />
      
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl font-geist">
              Checkout
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 font-geist">
              Complete your purchase to get started with our training solutions.
            </p>
          </div>

          <div className="mt-12 rounded-3xl bg-white dark:bg-neutral-800 p-8 ring-1 ring-gray-200 dark:ring-gray-700 shadow-lg">
            <div className="space-y-6">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white font-geist">
                  Order Summary
                </h2>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-300 font-geist">Professional Plan</span>
                <span className="text-lg font-semibold text-gray-900 dark:text-white font-geist">₹9,999 INR</span>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-900 dark:text-white font-geist">Total</span>
                  <span className="text-2xl font-bold text-gray-900 dark:text-white font-geist">₹9,999 INR</span>
                </div>
              </div>

              <div className="pt-6">
                <p className="text-sm text-gray-500 dark:text-gray-400 font-geist mb-4">
                  Please contact us to complete your purchase or integrate with your payment gateway.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => window.open('https://calendly.com/simvizlabs_demo/30min', '_blank')}
                    className="flex-1 font-geist"
                  >
                    Schedule a Call
                  </Button>
                  <Button
                    onClick={() => router.push('/contact')}
                    variant="outline"
                    className="flex-1 font-geist"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CheckoutPage;

