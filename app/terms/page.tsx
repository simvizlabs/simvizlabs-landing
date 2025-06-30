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

const TermsAndConditionsPage = () => {
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
          Terms&nbsp;of&nbsp;Use&nbsp;(&nbsp;EULA&nbsp;)
        </h1>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Last updated: 30&nbsp;Jun&nbsp;2025
        </p>

        {/* Content */}
        <div className="mt-8 space-y-12 text-gray-800 dark:text-gray-300">
          {/* Intro */}
          <div>
            <p className="text-lg">
              Thank you for choosing <strong>FMC-ACARS Preflight Trainer</strong>.
              Please read these Terms of Use (&quot;Terms&quot;) carefully before
              using the application (the &quot;Application&quot;) operated by
              Simviz Labs (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
              Your download or use of the Application constitutes acceptance of
              these Terms and the applicable platform agreements described
              below.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {/* Definitions */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                Interpretation&nbsp;and&nbsp;Definitions
              </h2>
              <p className="mt-4">
                <strong>Interpretation:</strong> Words with initial capital
                letters have meanings defined under the conditions below.
              </p>
              <p className="mt-4">
                <strong>Definitions:</strong>
              </p>
              <ul className="list-disc pl-5 mt-2">
                <li>
                  <strong>Application:</strong> FMC-ACARS Preflight Trainer,
                  available on the Apple App Store and Google Play Store.
                </li>
                <li>
                  <strong>Account:</strong> A unique account created for you to
                  access our Service.
                </li>
                <li>
                  <strong>Device:</strong> Any device that can access the
                  Service, such as a computer, phone or tablet.
                </li>
                <li>
                  <strong>Subscription:</strong> An auto-renewable in-app
                  purchase providing access to premium functionality.
                </li>
              </ul>
            </section>

            {/* Apple EULA */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                Apple End-User License Agreement
              </h2>
              <p className="mt-4">
                When you download the Application from the Apple App Store, your
                use is also governed by Apple’s{" "}
                <a
                  href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Licensed Application End-User License Agreement
                </a>{" "}
                (&quot;Apple EULA&quot;). If any provision of these Terms
                conflicts with the Apple EULA, the Apple EULA controls to the
                extent of the conflict.
              </p>
            </section>

            {/* Subscription Terms */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                Subscription&nbsp;Terms
              </h2>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li>
                  <strong>Billing:</strong> Payment is charged to your Apple ID
                  at confirmation of purchase.
                </li>
                <li>
                  <strong>Auto-renewal:</strong> Your Subscription renews
                  automatically unless auto-renew is turned off at least
                  24 hours before the end of the current period.
                </li>
                <li>
                  <strong>Renewal charge:</strong> Your account will be charged
                  for renewal within 24 hours prior to the end of the current
                  period at the price shown. The cost may vary by location and
                  is displayed in the purchase flow.
                </li>
                <li>
                  <strong>Manage / Cancel:</strong> You can manage or cancel
                  your Subscription at any time in{" "}
                  <em>Settings&nbsp;&gt; Apple ID&nbsp;&gt; Subscriptions</em>{" "}
                  after purchase.
                </li>
                <li>
                  <strong>Free Trials:</strong> Unused portions of a free trial,
                  if offered, are forfeited when you purchase a Subscription.
                </li>
              </ul>
            </section>

            {/* User Accounts */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                User&nbsp;Accounts
              </h2>
              <p className="mt-4">
                You are responsible for maintaining the confidentiality of your
                Account credentials and for all activities that occur under your
                Account.
              </p>
            </section>

            {/* Termination */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                Termination
              </h2>
              <p className="mt-4">
                We may suspend or terminate access without notice if you breach
                these Terms or the Apple EULA. Upon termination, your right to
                use the Application ceases immediately; Subscription payments
                already processed are non-refundable except as required by law
                or Apple policy.
              </p>
            </section>

            {/* Privacy Policy */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                Privacy&nbsp;Policy
              </h2>
              <p className="mt-4">
                Your privacy is important to us. Our full Privacy Policy is
                available at&nbsp;
                <a
                  href="https://simvizlabs.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  https://simvizlabs.com/privacy
                </a>
                .
              </p>
            </section>

            {/* Changes */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                Changes&nbsp;to&nbsp;These&nbsp;Terms
              </h2>
              <p className="mt-4">
                We may update these Terms from time to time. Material changes
                will be announced in-app or via email. Continued use after
                changes take effect constitutes acceptance of the revised Terms.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                Contact&nbsp;Information
              </h2>
              <p className="mt-4">
                Questions? Email&nbsp;
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

export default TermsAndConditionsPage;
