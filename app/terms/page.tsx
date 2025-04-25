"use client";
import React from 'react';
import Link from 'next/link';
import NavbarDemo from '@/components/resizable-navbar-demo';
import { ArrowLeft } from "lucide-react";

// Placeholder Footer component - replace with your actual footer
const Footer = () => (
  <footer className="bg-gray-200 dark:bg-neutral-800 text-center py-4">
    <p className="text-sm text-gray-500 dark:text-gray-400">
      &copy; {new Date().getFullYear()} Simviz Labs. All rights reserved.
    </p>
  </footer>
);

const TermsAndConditionsPage = () => {
  // const router = useRouter();

  return (
    <div className="relative isolate bg-white dark:bg-neutral-900">
      {/* Container */}
      <div className="mx-auto max-w-5xl px-6 lg:px-8 pt-20 pb-32 sm:pb-40">
        {/* Back Button */}
        <div className="flex items-center mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1 rounded-md bg-gray-100 px-3 py-2 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-neutral-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>

        {/* Header */}
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
          Terms and Conditions
        </h1>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Last updated: 05.01.2025</p>

        {/* Content */}
        <div className="mt-8 space-y-12 text-gray-800 dark:text-gray-300">
          <div>
            <p className="text-lg">
              Thank you for choosing FMC-ACARS Preflight Trainer. Please read these Terms and Conditions (&quot;Terms&quot;, &quot;Terms and Conditions&quot;) carefully before using the FMC-ACARS Preflight Trainer application (the &quot;Application&quot;) operated by SimvizLabs (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;).
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                Interpretation and Definitions
              </h2>
              <p className="mt-4">
                <strong>Interpretation:</strong> Words with initial capital letters have specific meanings defined under the following conditions.
              </p>
              <p className="mt-4">
                <strong>Definitions:</strong> For the purposes of these Terms and Conditions:
              </p>
              <ul className="list-disc pl-5 mt-2">
                <li><strong>Application:</strong> Refers to the FMC-ACARS Preflight Trainer, available on the Apple App Store and Google Play Store.</li>
                <li><strong>Account:</strong> A unique account created for you to access our Service or parts of our Service.</li>
                <li><strong>Content:</strong> Text, images, or other information that can be posted, uploaded, or otherwise made available by you, regardless of its form.</li>
                <li><strong>Device:</strong> Any device that can access the Service, such as a computer, cellphone, or digital tablet.</li>
                <li><strong>Feedback:</strong> Feedback, innovations, or suggestions sent by you regarding the attributes, performance, or features of our Service.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                User Accounts
              </h2>
              <p className="mt-4">
                You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account and password.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                In-App Purchases and Subscriptions
              </h2>
              <p className="mt-4">
                By subscribing to our services or making in-app purchases, you agree to the terms related to auto-renewals and subscription management. Details can be found in the app&apos;s purchase section.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                Termination
              </h2>
              <p className="mt-4">
                We reserve the right to terminate or suspend your account at any time without prior notice or liability, particularly if you breach these Terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                Changes to These Terms
              </h2>
              <p className="mt-4">
                We may update these Terms at our sole discretion. Significant changes will be communicated to you, and your continued use of the Application implies acceptance of these changes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                Contact Information
              </h2>
              <p className="mt-4">
                If you have questions about these Terms, please reach out to us at{" "}
                <a
                  href="mailto:info@simvizlabs.com"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  info@simvizlabs.com
                </a>
                . For more details, visit our website at Simvizlabs.com.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Call-to-Action */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-600 dark:text-gray-400">
            Have any issues?{" "}
            <Link
              href="/contact"
              className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
            >
              Contact Us
            </Link>
          </p>
        </div>
      </div>
      <NavbarDemo />
      <Footer />
    </div>
  );
};

export default TermsAndConditionsPage;
