"use client";
import React from "react";
import Link from "next/link";
import NavbarDemo from "@/components/resizable-navbar-demo";
import Footer from "@/components/footer";
import { ArrowLeft } from "lucide-react";

const A320BundlePrivacyPage = () => {
  return (
    <div className="relative isolate bg-white dark:bg-neutral-900 font-geist min-h-screen">
      <NavbarDemo />

      {/* Container */}
      <div className="mx-auto max-w-5xl px-6 lg:px-8 pt-32 pb-32 sm:pb-40">
        {/* Back Button */}
        <div className="flex items-center pt-12 mb-6">
          <Link
            href="/products/a320-bundle"
            className="inline-flex items-center gap-1 rounded-md bg-gray-100 dark:bg-neutral-800 px-3 py-2 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-neutral-700 font-geist"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to A320 Bundle
          </Link>
        </div>

        {/* Header */}
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl font-geist">
          Privacy&nbsp;Policy&nbsp;—&nbsp;A320&nbsp;Bundle
        </h1>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 font-geist">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        {/* Content */}
        <div className="mt-8 space-y-12 text-gray-800 dark:text-gray-300 font-geist">
          {/* Intro */}
          <div>
            <p className="text-lg">
              This Privacy Policy describes how <strong>Simviz&nbsp;Labs</strong>{" "}
              (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) collects, uses, and protects the information
              you provide when you use the <strong>A320 CDU Trainer Bundle</strong>{" "}
              mobile application (the &quot;App&quot;). Your continued use of the App
              signifies acceptance of this Policy.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {/* 1. Data We Collect */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 font-geist">
                1.&nbsp;Data&nbsp;We&nbsp;Collect
              </h2>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li>
                  <strong>Account & Identity Data:</strong> Apple ID display
                  name and email (if you sign in with Apple or contact support).
                  Google account information if using Android version.
                </li>
                <li>
                  <strong>Device Data:</strong> Device model, OS version,
                  language, and settings — used strictly for diagnostics and UX
                  optimisation. iPad-specific features are optimized based on
                  device capabilities.
                </li>
                <li>
                  <strong>Purchase Data:</strong> Subscription status and
                  transaction identifiers returned by Apple&apos;s StoreKit or Google
                  Play Billing to unlock premium A320 Bundle features including
                  MCDU simulation, ATSU functionality, and tutorials.
                </li>
                <li>
                  <strong>Usage Data&nbsp;(anonymous):</strong> In-app screen
                  events, training progress, and crash logs stored locally; no
                  third-party analytics SDKs are integrated. Training session
                  data may be stored locally on your device.
                </li>
                <li>
                  <strong>Training Progress:</strong> Your progress through
                  A320 training modules, completed tutorials, and practice
                  scenarios are stored locally on your device. This data is not
                  transmitted to our servers unless you explicitly choose to
                  sync or backup.
                </li>
              </ul>
            </section>

            {/* 2. How We Use Your Data */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 font-geist">
                2.&nbsp;How&nbsp;We&nbsp;Use&nbsp;Your&nbsp;Data
              </h2>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li>Deliver core A320 flight-training functionality including MCDU and ATSU simulation.</li>
                <li>Validate and manage in-app purchases and Subscriptions for the A320 Bundle.</li>
                <li>Provide navigation database updates and feature enhancements.</li>
                <li>Diagnose bugs and improve performance of the A320 training modules.</li>
                <li>Respond to support requests you initiate regarding A320 training features.</li>
                <li>Personalize your training experience based on your progress and preferences.</li>
              </ul>
            </section>

            {/* 3. Analytics & Tracking */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 font-geist">
                3.&nbsp;Analytics&nbsp;& Tracking
              </h2>
              <p className="mt-4">
                The A320 Bundle App does <strong>not</strong> use third-party advertising,
                tracking, or analytics SDKs, nor does it share data for
                cross-app tracking. Crash diagnostics are processed locally and
                sent to us only if you choose to email a log via the built-in
                support screen. We do not track your individual training sessions
                or performance metrics.
              </p>
            </section>

            {/* 4. Data Sharing */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 font-geist">
                4.&nbsp;Data&nbsp;Sharing
              </h2>
              <p className="mt-4">
                We do <strong>not</strong> sell or rent personal data. Limited
                information is shared with:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>
                  <strong>Apple Inc.</strong> – to process payments, manage
                  Subscriptions, and restore purchases for iOS users.
                </li>
                <li>
                  <strong>Google LLC</strong> – to process payments, manage
                  Subscriptions, and restore purchases for Android users.
                </li>
                <li>
                  <strong>Service Providers</strong> (e.g., cloud backup) bound
                  by confidentiality and used solely to provide core services.
                  Navigation database updates may be delivered through secure
                  content delivery networks.
                </li>
                <li>
                  Authorities when legally required (e.g., court order).
                </li>
              </ul>
            </section>

            {/* 5. Data Retention & Deletion */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 font-geist">
                5.&nbsp;Data&nbsp;Retention&nbsp;& Deletion
              </h2>
              <p className="mt-4">
                We retain account and purchase data for as long as your
                A320 Bundle Subscription remains active and for a maximum of 12 months
                thereafter, unless a longer period is required by law. Training
                progress data stored locally on your device remains until you
                uninstall the App or manually delete it. You may request deletion
                of account data at any time from the in-app &quot;Delete Account&quot;
                button or by emailing us.
              </p>
            </section>

            {/* 6. Your Rights */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 font-geist">
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

            {/* 7. Children's Privacy */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 font-geist">
                7.&nbsp;Children&apos;s&nbsp;Privacy
              </h2>
              <p className="mt-4">
                The A320 Bundle App is intended for users aged 16 and above,
                particularly those pursuing aviation training or careers. We do not
                knowingly collect personal data from children under 13. If you
                believe such data has been collected, contact us so we can
                delete it promptly.
              </p>
            </section>

            {/* 8. International Transfers */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 font-geist">
                8.&nbsp;International&nbsp;Transfers
              </h2>
              <p className="mt-4">
                We are based in Switzerland. If you access the A320 Bundle App from outside
                Switzerland, your information may be transferred, stored, and
                processed there. Where required, we rely on adequacy decisions
                or Standard Contractual Clauses to safeguard transfers.
              </p>
            </section>

            {/* 9. Security */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 font-geist">
                9.&nbsp;Security
              </h2>
              <p className="mt-4">
                We employ industry-standard encryption in transit and at rest
                and restrict access to personal data on a need-to-know basis.
                Navigation database updates and feature downloads are delivered
                through secure channels. However, no system is 100% secure; use
                the App at your own risk.
              </p>
            </section>

            {/* 10. Offline Functionality */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 font-geist">
                10.&nbsp;Offline&nbsp;Functionality
              </h2>
              <p className="mt-4">
                The A320 Bundle App is designed to work offline. Training progress,
                scenarios, and navigation data are stored locally on your device.
                When you use the App offline, no data is transmitted to our
                servers. Data synchronization only occurs when you are connected
                to the internet and choose to sync or backup your progress.
              </p>
            </section>

            {/* 11. Changes */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 font-geist">
                11.&nbsp;Changes&nbsp;to&nbsp;This&nbsp;Policy
              </h2>
              <p className="mt-4">
                We may update this Policy from time to time. Material changes
                are announced in-app or via email. Continued use after the effective date
                constitutes acceptance of the revised Policy.
              </p>
            </section>

            {/* 12. Contact */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 font-geist">
                12.&nbsp;Contact&nbsp;Us
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
          <p className="text-center text-gray-600 dark:text-gray-400 font-geist">
            Need help?{" "}
            <Link
              href="/contact-us"
              className="text-blue-600 dark:text-blue-400 font-semibold hover:underline font-geist"
            >
              Contact&nbsp;Us
            </Link>
            {" "}or{" "}
            <Link
              href="/products/a320-bundle"
              className="text-blue-600 dark:text-blue-400 font-semibold hover:underline font-geist"
            >
              Return&nbsp;to&nbsp;Product&nbsp;Page
            </Link>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default A320BundlePrivacyPage;

