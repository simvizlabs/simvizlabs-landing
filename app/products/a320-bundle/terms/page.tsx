"use client";
import React from "react";
import Link from "next/link";
import NavbarDemo from "@/components/resizable-navbar-demo";
import Footer from "@/components/footer";
import { ArrowLeft } from "lucide-react";

const A320BundleTermsPage = () => {
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
          Terms&nbsp;and&nbsp;Conditions&nbsp;—&nbsp;A320&nbsp;Bundle
        </h1>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 font-geist">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        {/* Content */}
        <div className="mt-8 space-y-12 text-gray-800 dark:text-gray-300 font-geist">
          {/* Intro */}
          <div>
            <p className="text-lg">
              Thank you for choosing the <strong>A320 CDU Trainer Bundle</strong>.
              Please read these Terms and Conditions (&quot;Terms&quot;) carefully before
              purchasing or using the application (the &quot;Application&quot;) operated by
              Simviz Labs (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
              By purchasing or using the Application, you agree to be bound by these Terms.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {/* Definitions */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 font-geist">
                Interpretation&nbsp;and&nbsp;Definitions
              </h2>
              <p className="mt-4">
                <strong>Interpretation:</strong> Words with initial capital
                letters have meanings defined under the conditions below.
              </p>
              <p className="mt-4">
                <strong>Definitions:</strong>
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>
                  <strong>Application:</strong> A320 CDU Trainer Bundle,
                  a software application providing A320 MCDU and ATSU training functionality.
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
                  <strong>Purchase:</strong> A one-time payment providing access to
                  the A320 CDU Trainer Bundle including MCDU simulation, ATSU functionality,
                  tutorials, and all associated features.
                </li>
                <li>
                  <strong>Bundle:</strong> The complete A320 training package
                  including MCDU simulation, ATSU functionality, tutorials, and
                  all associated features.
                </li>
              </ul>
            </section>

            {/* License Grant */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 font-geist">
                License&nbsp;Grant
              </h2>
              <p className="mt-4">
                Subject to your compliance with these Terms, we grant you a
                limited, non-exclusive, non-transferable, revocable license to:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>
                  Download and install the A320 CDU Trainer Bundle on devices
                  you own or control.
                </li>
                <li>
                  Use the Application for personal, non-commercial training
                  purposes.
                </li>
                <li>
                  Access all features included in your purchased bundle,
                  including MCDU simulation, ATSU functionality, tutorials, and
                  navigation databases.
                </li>
              </ul>
            </section>

            {/* Payment Terms */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 font-geist">
                Payment&nbsp;Terms
              </h2>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li>
                  <strong>Pricing:</strong> The A320 Bundle is priced at ₹9,999 INR
                  (or equivalent in your local currency). All prices are subject to
                  change without notice, but changes will not affect purchases already completed.
                </li>
                <li>
                  <strong>Payment:</strong> Payment is required at the time of purchase.
                  We accept payment through our secure payment gateway. You agree to provide
                  accurate and complete payment information.
                </li>
                <li>
                  <strong>One-Time Purchase:</strong> This is a one-time purchase with no
                  automatic renewal. Once purchased, you will have lifetime access to the
                  A320 Bundle features included at the time of purchase.
                </li>
                <li>
                  <strong>Bundle Contents:</strong> Your purchase includes
                  access to all A320 training modules, MCDU simulation, ATSU
                  functionality, tutorials, and navigation database updates as
                  provided by us from time to time.
                </li>
                <li>
                  <strong>No Refunds:</strong> All sales are final. We do not offer
                  refunds, returns, or exchanges for any reason, including but not limited to:
                  change of mind, technical issues, compatibility problems, or dissatisfaction
                  with the product. By completing your purchase, you acknowledge and agree
                  that you have read and understood this no-refund policy.
                </li>
                <li>
                  <strong>Future Updates:</strong> We may provide updates, bug fixes, and
                  new features to the Application. Access to future updates is included with
                  your purchase, but we reserve the right to discontinue support or updates
                  at any time.
                </li>
              </ul>
            </section>

            {/* Restrictions */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 font-geist">
                Restrictions
              </h2>
              <p className="mt-4">You agree not to:</p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>
                  Copy, modify, distribute, sell, or lease any part of the
                  Application.
                </li>
                <li>
                  Reverse engineer, decompile, or disassemble the Application.
                </li>
                <li>
                  Remove, alter, or obscure any proprietary notices or labels.
                </li>
                <li>
                  Use the Application for any commercial purpose without our
                  written consent.
                </li>
                <li>
                  Share your account credentials with others or allow
                  unauthorized access to your account or license.
                </li>
              </ul>
            </section>

            {/* User Accounts */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 font-geist">
                User&nbsp;Accounts
              </h2>
              <p className="mt-4">
                You are responsible for maintaining the confidentiality of your
                Account credentials and for all activities that occur under your
                Account. You must immediately notify us of any unauthorized use
                of your Account.
              </p>
            </section>

            {/* Updates and Modifications */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 font-geist">
                Updates&nbsp;and&nbsp;Modifications
              </h2>
              <p className="mt-4">
                We may update the Application, including navigation databases,
                features, and functionality, from time to time. Updates may be
                automatic or require manual installation. We reserve the right
                to modify or discontinue features with reasonable notice.
              </p>
            </section>

            {/* Refund Policy */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 font-geist">
                Refund&nbsp;Policy
              </h2>
              <p className="mt-4">
                <strong>No Refunds:</strong> All purchases of the A320 Bundle are final
                and non-refundable. We do not provide refunds for any reason, including
                but not limited to:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Change of mind or dissatisfaction with the product</li>
                <li>Technical issues or compatibility problems</li>
                <li>Inability to use the Application due to device limitations</li>
                <li>Accidental purchases</li>
                <li>Failure to read or understand these Terms before purchase</li>
              </ul>
              <p className="mt-4">
                By completing your purchase, you acknowledge that you have read,
                understood, and agree to this no-refund policy. If you have any
                questions about the Application before purchasing, please contact
                us at{" "}
                <a
                  href="mailto:info@simvizlabs.com"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  info@simvizlabs.com
                </a>
                .
              </p>
            </section>

            {/* Termination */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 font-geist">
                Termination
              </h2>
              <p className="mt-4">
                We may suspend or terminate your access to the Application without
                notice if you breach these Terms. Upon termination, your right to
                use the Application ceases immediately. All payments are final and
                non-refundable, regardless of termination circumstances.
              </p>
            </section>

            {/* Disclaimer */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 font-geist">
                Disclaimer
              </h2>
              <p className="mt-4">
                The A320 CDU Trainer Bundle is a training and educational tool
                only. It is not a substitute for actual flight training, type
                rating, or certification. The Application is provided
                &quot;as is&quot; without warranties of any kind. We do not
                guarantee that use of the Application will result in any
                specific training outcomes or certification.
              </p>
            </section>

            {/* Privacy Policy */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 font-geist">
                Privacy&nbsp;Policy
              </h2>
              <p className="mt-4">
                Your privacy is important to us. Our full Privacy Policy for the
                A320 Bundle is available at&nbsp;
                <Link
                  href="/products/a320-bundle/privacy"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  /products/a320-bundle/privacy
                </Link>
                .
              </p>
            </section>

            {/* Changes */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 font-geist">
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
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 font-geist">
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
          <p className="text-center text-gray-600 dark:text-gray-400 font-geist">
            Need help?{" "}
            <Link
              href="/contact"
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

export default A320BundleTermsPage;

