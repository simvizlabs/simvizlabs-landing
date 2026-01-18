"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import NavbarDemo from "@/components/resizable-navbar-demo";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Check, ArrowLeft, Shield, FileText } from "lucide-react";
import { HovermeButtonDemo } from '@/components/eldoraui/hoverme';

const A320BundleContent = () => {
  const router = useRouter();

  const features = [
    "Realistic A320 MCDU (Multipurpose Control Display Unit) simulation",
    "Complete ATSU (Air Traffic Services Unit) functionality",
    "PLAN mode with global navigation database",
    "Touch-optimized controls matching real aircraft systems",
    "Real airline workflows and procedures",
    "Route validation and performance initialization",
    "Offline functionality - no internet required",
    "Regular updates with latest navigation databases",
    "Instructor-designed training scenarios",
    "Comprehensive tutorials and documentation",
  ];

  const useCases = [
    {
      title: "Pilot Training",
      description: "Perfect for pilots preparing for A320 type rating or recurrent training. Practice real-world procedures and workflows.",
    },
    {
      title: "Flight Schools",
      description: "Integrate into your training curriculum to provide students with hands-on experience before simulator sessions.",
    },
    {
      title: "Airlines",
      description: "Use for pilot onboarding, recurrent training, and procedure standardization across your fleet.",
    },
  ];

  return (
    <div className="bg-white text-black dark:bg-neutral-900 dark:text-white font-geist min-h-screen">
      <NavbarDemo />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-1 rounded-md bg-gray-50 dark:bg-neutral-800 px-3 py-2 text-sm font-regular text-gray-800 dark:text-gray-400 hover:underline hover:underline-offset-2 mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>

          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl font-geist">
              A320 CDU Trainer
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 font-geist max-w-3xl mx-auto">
              Master Airbus&apos;s MCDU and ATSU systems with this immersive, instructor-crafted training app. 
              Practice real airline workflows, route validation, and performance initialization to build confidence and proficiency.
            </p>
          </div>

          {/* Hero Image */}
          <div className="mt-12 relative overflow-hidden rounded-3xl bg-black/10">
            <div className="relative m-4 sm:m-8 md:m-12">
              <Image
                src="/images/a320.png"
                alt="A320 CDU Trainer"
                width={2880}
                height={1842}
                className="rounded-xl w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mx-auto mt-24 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl font-geist">
              Everything You Need to Master the A320
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300 font-geist">
              Our comprehensive A320 training solution includes all the tools and features you need for effective pilot training.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white font-geist flex items-start">
                    <Check className="h-6 w-5 flex-none text-blue-600 dark:text-blue-400 mr-3 mt-0.5" aria-hidden="true" />
                    <span>{feature}</span>
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="mx-auto mt-24 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl font-geist">
              Perfect For
            </h2>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {useCases.map((useCase, index) => (
              <div key={index} className="flex flex-col rounded-2xl bg-gray-50 dark:bg-neutral-800 p-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white font-geist">
                  {useCase.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300 font-geist">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mx-auto mt-24 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl font-geist">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300 font-geist">
              Choose the plan that works best for your training needs.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl lg:max-w-4xl">
            <div className="rounded-3xl bg-white dark:bg-neutral-800 p-8 ring-1 ring-gray-200 dark:ring-gray-700 xl:p-10 shadow-lg">
              <div className="flex items-center justify-between gap-x-4">
                <h3 className="text-lg font-semibold leading-8 text-gray-900 dark:text-white font-geist">
                  A320 Bundle
                </h3>
                <p className="rounded-full bg-blue-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-blue-600 dark:text-blue-400 font-geist">
                  Most Popular
                </p>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300 font-geist">
                Complete access to A320 MCDU and ATSU training modules.
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white font-geist">
                  ₹9,999
                </span>
                <span className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-300 font-geist">
                  INR
                </span>
              </p>
              
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <HovermeButtonDemo 
                  text="Get Started" 
                  onClick={() => router.push("/checkout")}
                  className="flex-1"
                />
                <Button
                  onClick={() => window.open('https://calendly.com/simvizlabs_demo/30min', '_blank')}
                  variant="outline"
                  className="flex-1 font-geist"
                >
                  Schedule a Demo
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links Section */}
        <div className="mx-auto mt-24 max-w-7xl px-6 lg:px-8">
          <div className="rounded-2xl bg-gray-50 dark:bg-neutral-800 px-6 py-12 sm:px-12 sm:py-16">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl font-geist">
                Legal Information
              </h2>
              <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300 font-geist">
                Please review our terms and conditions and privacy policy before purchasing.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/products/a320-bundle/terms"
                  className="inline-flex items-center gap-2 rounded-md bg-white dark:bg-neutral-900 px-4 py-2 text-sm font-semibold text-gray-900 dark:text-white shadow-sm hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors font-geist"
                >
                  <FileText className="h-4 w-4" />
                  Terms & Conditions
                </Link>
                <Link
                  href="/products/a320-bundle/privacy"
                  className="inline-flex items-center gap-2 rounded-md bg-white dark:bg-neutral-900 px-4 py-2 text-sm font-semibold text-gray-900 dark:text-white shadow-sm hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors font-geist"
                >
                  <Shield className="h-4 w-4" />
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mx-auto mt-24 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl rounded-3xl bg-gray-900 dark:bg-neutral-800 px-6 py-16 sm:px-12 sm:py-20 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-geist">
              Ready to get started?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300 font-geist">
              Join leading aviation training organizations using our A320 training platform.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <HovermeButtonDemo 
                text="Get Started" 
                onClick={() => router.push("/checkout")}
              />
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

export default A320BundleContent;
