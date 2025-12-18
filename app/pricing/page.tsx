"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import NavbarDemo from "@/components/resizable-navbar-demo";
import Footer from "@/components/footer";
import { Check } from "lucide-react";
import { HovermeButtonDemo } from '@/components/eldoraui/hoverme';

const PricingPage = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    // Redirect to checkout flow
    router.push("/checkout");
  };

  const features = [
    "Access to all training modules",
    "LMS integration",
    "Mobile solutions (iPad FMS, ACARS Trainer)",
    "Quiz Generation System",
    "Electronic Training Records System",
    "Advanced Analytics",
    "Curriculum Management",
    "24/7 Support",
  ];

  return (
    <div className="bg-white text-black dark:bg-neutral-900 dark:text-white font-geist min-h-screen">
      <NavbarDemo />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl mt-16 font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl font-geist">
              Simple, Transparent Pricing
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 font-geist">
              Choose the plan that works best for your training needs. All plans include our comprehensive suite of aviation training solutions.
            </p>
          </div>
        </div>

        {/* Pricing Card */}
        <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <div className="isolate grid grid-cols-1 gap-8 lg:grid-cols-1">
              {/* Main Pricing Card */}
              <div className="rounded-3xl bg-white dark:bg-neutral-800 p-8 ring-1 ring-gray-200 dark:ring-gray-700 xl:p-10 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-lg font-semibold leading-8 text-gray-900 dark:text-white font-geist">
                    Professional Plan
                  </h3>
                  <p className="rounded-full bg-blue-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-blue-600 dark:text-blue-400 font-geist">
                    Most Popular
                  </p>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300 font-geist">
                  Complete access to all our training solutions and features.
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white font-geist">
                    ₹9,999
                  </span>
                  <span className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-300 font-geist">
                    INR
                  </span>
                </p>
                
                <button
                  onClick={handleGetStarted}
                  className="mt-6 block w-full rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors font-geist"
                >
                  Get Started
                </button>
                
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-300 font-geist">
                  {features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-blue-600 dark:text-blue-400" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl font-geist">
              Everything you need to get started
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300 font-geist">
              Our comprehensive platform includes all the tools and features you need to enhance your aviation training programs.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl rounded-3xl bg-gray-900 dark:bg-neutral-800 px-6 py-16 sm:px-12 sm:py-20 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-geist">
              Ready to get started?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300 font-geist">
              Join leading aviation training organizations using our platform.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button
                onClick={handleGetStarted}
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors font-geist"
              >
                Get Started
              </button>
              <a
                href="https://calendly.com/simvizlabs_demo/30min"
                className="text-sm font-semibold leading-6 text-white hover:text-gray-300 font-geist"
              >
                Schedule a Demo <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PricingPage;

