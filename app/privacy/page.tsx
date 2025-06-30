"use client";
import React from "react";
import Link from "next/link";
import NavbarDemo from "@/components/resizable-navbar-demo";
import { ArrowLeft } from "lucide-react";

// Placeholder Footer component – replace with your actual footer
const Footer = () => (
  <footer className="bg-gray-200 dark:bg-neutral-800 text-center py-4">
    <p className="text-sm text-gray-500 dark:text-gray-400">
      &copy; {new Date().getFullYear()} Simviz Labs. All rights reserved.
    </p>
  </footer>
);

const PrivacyPolicyPage = () => {
  return (
    <div className="relative isolate bg-white dark:bg-neutral-900">
      {/* Container */}
      <div className="mx-auto max-w-5xl px-6 lg:px-8 pt-20 pb-32 sm:pb-40">
        {/* Back Button */}
        <div className="flex items-center pt-12 mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1 rounded-md bg-gray-100 px-3 py-2 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-neutral-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Back&nbsp;to&nbsp;Home
          </Link>
        </div>

        {/* Header */}
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
          Privacy&nbsp;Policy
        </h1>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Last updated: 30&nbsp;Jun&nbsp;2025
        </p>

        {/* Content */}
        <div className="mt-8 space-y-12 text-gray-800 dark:text-gray-300">
          {/* Intro */}
          <div>
            <p className="text-lg">
              This Privacy Policy describes how <strong>Simviz&nbsp;Labs</strong>{" "}
              (“we”, “our”, “us”) collects, uses, and protects the information
              you provide when you use the <strong>FMC-ACARS Preflight&nbsp;Trainer</strong>{" "}
              mobile application (the “App”). Your continued use of the App
              signifies acceptance of this Policy.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {/* 1. Data We Collect */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                1.&nbsp;Data&nbsp;We&nbsp;Collect
              </h2>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li>
                  <strong>Account & Identity Data:</strong> Apple ID display
                  name and email (if you sign in with Apple or contact support).
                </li>
                <li>
                  <strong>Device Data:</strong> Device model, OS version,
                  language, and settings — used strictly for diagnostics and UX
                  optimisation.
                </li>
                <li>
                  <strong>Purchase Data:</strong> Subscription status and
                  transaction identifiers returned by Apple’s StoreKit to unlock
                  premium features.
                </li>
                <li>
                  <strong>Usage Data&nbsp;(anonymous):</strong> In-app screen
                  events and crash logs stored locally; no third-party analytics
                  SDKs are integrated.
                </li>
              </ul>
            </section>

            {/* 2. How We Use Your Data */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                2.&nbsp;How&nbsp;We&nbsp;Use&nbsp;Your&nbsp;Data
              </h2>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li>Deliver core flight-training functionality.</li>
                <li>Validate and manage in-app purchases and Subscriptions.</li>
                <li>Diagnose bugs and improve performance.</li>
                <li>Respond to support requests you initiate.</li>
              </ul>
            </section>

            {/* 3. Analytics & Tracking */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                3.&nbsp;Analytics&nbsp;& Tracking
              </h2>
              <p className="mt-4">
                The App does <strong>not</strong> use third-party advertising,
                tracking, or analytics SDKs, nor does it share data for
                cross-app tracking. Crash diagnostics are processed locally and
                sent to us only if you choose to email a log via the built-in
                support screen.
              </p>
            </section>

            {/* 4. Data Sharing */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                4.&nbsp;Data&nbsp;Sharing
              </h2>
              <p className="mt-4">
                We do <strong>not</strong> sell or rent personal data. Limited
                information is shared with:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>
                  <strong>Apple Inc.</strong> – to process payments, manage
                  Subscriptions, and restore purchases.
                </li>
                <li>
                  <strong>Service Providers</strong> (e.g., cloud backup) bound
                  by confidentiality and used solely to provide core services.
                </li>
                <li>
                  Authorities when legally required (e.g., court order).
                </li>
              </ul>
            </section>

            {/* 5. Data Retention & Deletion */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                5.&nbsp;Data&nbsp;Retention&nbsp;& Deletion
              </h2>
              <p className="mt-4">
                We retain account and purchase data for as long as your
                Subscription remains active and for a maximum of 12 months
                thereafter, unless a longer period is required by law. You may
                request deletion at any time from the in-app “Delete Account”
                button or by emailing us.
              </p>
            </section>

            {/* 6. Your Rights */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                6.&nbsp;Your&nbsp;Rights
              </h2>
              <p className="mt-4">
                Depending on where you live, you may have rights to access,
                correct, delete, restrict, or port your personal data:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li><strong>GDPR&nbsp;(EEA/UK)</strong> – Articles 15-21.</li>
                <li><strong>CCPA&nbsp;/ CPRA&nbsp;(California)</strong> – Civil Code §1798.</li>
              </ul>
              <p className="mt-2">
                To exercise any right, email{" "}
                <a
                  href="mailto:info@simvizlabs.com"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  info@simvizlabs.com
                </a>
                .
              </p>
            </section>

            {/* 7. Children’s Privacy */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                7.&nbsp;Children’s&nbsp;Privacy
              </h2>
              <p className="mt-4">
                The App is intended for users aged 16 and above. We do not
                knowingly collect personal data from children under 13. If you
                believe such data has been collected, contact us so we can
                delete it promptly.
              </p>
            </section>

            {/* 8. International Transfers */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                8.&nbsp;International&nbsp;Transfers
              </h2>
              <p className="mt-4">
                We are based in Switzerland. If you access the App from outside
                Switzerland, your information may be transferred, stored, and
                processed there. Where required, we rely on adequacy decisions
                or Standard Contractual Clauses to safeguard transfers.
              </p>
            </section>

            {/* 9. Security */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                9.&nbsp;Security
              </h2>
              <p className="mt-4">
                We employ industry-standard encryption in transit and at rest
                and restrict access to personal data on a need-to-know basis.
                However, no system is 100 % secure; use the App at your own
                risk.
              </p>
            </section>

            {/* 10. Changes */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                10.&nbsp;Changes&nbsp;to&nbsp;This&nbsp;Policy
              </h2>
              <p className="mt-4">
                We may update this Policy from time to time. Material changes
                are announced in-app. Continued use after the effective date
                constitutes acceptance of the revised Policy.
              </p>
            </section>

            {/* 11. Contact */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                11.&nbsp;Contact&nbsp;Us
              </h2>
              <p className="mt-4">
                Questions about privacy? Email&nbsp;
                <a
                  href="mailto:info@simvizlabs.com"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  info@simvizlabs.com
                </a>
                &nbsp;or visit&nbsp;
                <a
                  href="https://simvizlabs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  simvizlabs.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-600 dark:text-gray-400">
            Need help?{" "}
            <Link
              href="/contact"
              className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
            >
              Contact&nbsp;Us
            </Link>
          </p>
        </div>
      </div>

      <NavbarDemo />
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
