"use client";
import React from "react";
import Link from "next/link";
import NavbarDemo from "@/components/resizable-navbar-demo";
import Footer from "@/components/footer";
import { ArrowLeft } from "lucide-react";

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
          Last updated: 22nd December 2025
        </p>

        {/* Content */}
        <div className="mt-8 space-y-12 text-gray-800 dark:text-gray-300">
          {/* Intro */}
          <div>
            <p className="text-lg">
              This Privacy Policy outlines the practices of <strong>SimViz Labs</strong>, a software and digital services brand operated from the United States (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), regarding the collection, use, and disclosure of personal information when you use our Services.
            </p>
            <p className="mt-4">
              For the purpose of payment collection in India, <strong>M/S AHUJA & SONS</strong> acts as an authorized payment collection entity on behalf of SimViz Labs through PhonePe and other supported Indian payment methods.
            </p>
            <p className="mt-4">
              This Privacy Policy applies to your use of:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Our website: <a href="https://simvizlabs.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">https://simvizlabs.com</a></li>
              <li>Our mobile applications available on the Apple App Store</li>
              <li>Any related digital products, software, subscriptions, or services</li>
            </ul>
            <p className="mt-4">
              (collectively, the &quot;Services&quot;)
            </p>
            <p className="mt-4">
              By accessing or using our Services, you agree to the collection and use of information in accordance with this Privacy Policy.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                1. Information We Collect
              </h2>
              <p className="mt-4">
                We may collect the following types of information:
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-4">
                a. Contact Information
              </h3>
              <p className="mt-2">
                Such as name, email address, or other details you voluntarily provide when contacting us or registering for Services.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-4">
                b. Usage Data
              </h3>
              <p className="mt-2">
                Information about how you access and use the Services, including device information, IP address, app usage patterns, and interactions with features.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-4">
                c. Cookies and Tracking Technologies
              </h3>
              <p className="mt-2">
                We may use cookies or similar technologies to improve functionality, analyze usage, and enhance user experience on our website.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                2. How We Collect Information
              </h2>
              <p className="mt-4">
                We collect information through:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li><strong>Direct Interaction:</strong> When you voluntarily provide information by contacting us, registering, or using features.</li>
                <li><strong>Automated Technologies:</strong> Through cookies, analytics tools, and usage tracking when you access the website or applications.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                3. Purpose of Data Collection
              </h2>
              <p className="mt-4">
                We collect and use your information for the following purposes:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>To provide, operate, and maintain the Services</li>
                <li>To notify users about changes or updates to the Services</li>
                <li>To allow participation in features and functionality</li>
                <li>To improve user experience, performance, and reliability</li>
                <li>To comply with legal and regulatory obligations</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                4. Sharing of Your Information
              </h2>
              <p className="mt-4">
                We do <strong>not</strong> sell your personal information.
              </p>
              <p className="mt-4">
                We may share your information only:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>With trusted service providers who assist in operating the Services (such as hosting, analytics, or payment processing)</li>
                <li>With payment service providers (including PhonePe and Apple) solely for transaction processing</li>
                <li>With legal or regulatory authorities if required by law, court order, or governmental request</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                5. Data Retention
              </h2>
              <p className="mt-4">
                We retain personal data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy or to comply with legal obligations.
              </p>
              <p className="mt-4">
                When data is no longer required, we take reasonable steps to delete or anonymize it.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                6. Your Rights
              </h2>
              <p className="mt-4">
                You may have the right to:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Access the personal data we hold about you</li>
                <li>Request correction or updates to your personal data</li>
                <li>Request deletion of your personal data, where legally permissible</li>
              </ul>
              <p className="mt-4">
                You may exercise these rights by contacting us using the details provided below.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                7. Security
              </h2>
              <p className="mt-4">
                We use reasonable technical and organizational measures to protect your personal information from unauthorized access, misuse, loss, or disclosure.
              </p>
              <p className="mt-4">
                However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                8. Payments, Refunds, and Cancellations
              </h2>
              <p className="mt-4">
                All Services provided by SimViz Labs are digital in nature.
              </p>
              <p className="mt-4">
                For the Services provided, we offer <strong>no refunds</strong>, except where required by applicable law.
              </p>
              <p className="mt-4">
                Refunds and cancellations for purchases made through the Apple App Store are governed exclusively by Apple&apos;s policies.
              </p>
              <p className="mt-4">
                Payments collected via PhonePe are subject to the terms communicated at the time of purchase.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                9. Changes to This Privacy Policy
              </h2>
              <p className="mt-4">
                We may update this Privacy Policy from time to time.
              </p>
              <p className="mt-4">
                Any changes will be posted on this page with an updated &quot;Last updated&quot; date. Continued use of the Services after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                10. Contact Information
              </h2>
              <p className="mt-4">
                For any questions, concerns, or requests related to this Privacy Policy, you may contact us through:
              </p>
              <ul className="list-none pl-0 mt-4 space-y-2">
                <li>
                  🌐 Website: <a href="https://simvizlabs.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">https://simvizlabs.com</a>
                </li>
                <li>
                  📧 Email: info@simvizlabs.com
                </li>
              </ul>
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
