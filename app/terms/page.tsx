"use client";
import React from "react";
import Link from "next/link";
import NavbarDemo from "@/components/resizable-navbar-demo";
import Footer from "@/components/footer";
import { ArrowLeft } from "lucide-react";

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
          Terms and Conditions &amp; End User License Agreement (EULA)
        </h1>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Last updated: 22nd December 2025
        </p>

        {/* Content */}
        <div className="mt-8 space-y-12 text-gray-800 dark:text-gray-300">
          {/* Intro */}
          <div>
            <p className="text-lg">
              These Terms and Conditions, together with the End User License Agreement (&quot;EULA&quot;), Privacy Policy, and any other applicable policies (collectively, the &quot;Terms&quot;), constitute a legally binding agreement between:
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li>
                <strong>SimViz Labs</strong>, a software and digital services brand operated from the United States (&quot;SimViz Labs&quot;, &quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), and
              </li>
              <li>
                <strong>You</strong> (&quot;User&quot;, &quot;you&quot;, or &quot;your&quot;).
              </li>
            </ul>
            <p className="mt-4">
              For the purpose of payment collection in India, <strong>MS AHUJA & SONS</strong>, an Indian entity, is authorized by SimViz Labs to collect payments on its behalf through PhonePe and other supported Indian payment methods.
            </p>
            <p className="mt-4">
              These Terms govern your access to and use of:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Our website: <a href="https://www.simvizlabs.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">https://www.simvizlabs.com</a></li>
              <li>Our mobile applications distributed via the Apple App Store</li>
              <li>Any related digital software, subscriptions, content, or services</li>
            </ul>
            <p className="mt-4">
              (collectively, the &quot;Services&quot;)
            </p>
            <p className="mt-4">
              By accessing the website, downloading or using our app, or making a payment via Apple In-App Purchases, PhonePe, or any other supported payment method, you confirm that you have read, understood, and agreed to be bound by these Terms and the EULA.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                1. Acceptance and Modification of Terms
              </h2>
              <p className="mt-4">
                By using our Services, you confirm that you are legally capable of entering into a binding agreement under applicable law.
              </p>
              <p className="mt-4">
                We reserve the right to modify these Terms at any time without prior notice. It is your responsibility to periodically review these Terms. Continued use of the Services after any modification constitutes acceptance of the revised Terms.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                2. Description of Services
              </h2>
              <p className="mt-4">
                SimViz Labs provides digital software-based services, including but not limited to:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>iOS applications</li>
                <li>Simulation and aviation-related software tools</li>
                <li>Digital features, content, and subscriptions</li>
              </ul>
              <p className="mt-4">
                All Services are digital in nature, unless explicitly stated otherwise.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                3. User Information and Account Responsibility
              </h2>
              <p className="mt-4">
                To access certain Services, you may be required to register or sign in using Apple ID or other permitted methods.
              </p>
              <p className="mt-4">
                You agree to:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Provide true, accurate, and complete information</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Be responsible for all activities carried out through your account</li>
              </ul>
              <p className="mt-4">
                SimViz Labs shall not be liable for any loss or damage resulting from unauthorized use of your account.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                4. Payments, Pricing, and Transactions
              </h2>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-4">
                4.1 Payment Methods
              </h3>
              <p className="mt-4">
                Payments for Services may be processed through:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Apple In-App Purchases (IAP) for iOS applications</li>
                <li>PhonePe and other Indian payment gateways, where payments are collected by Ahuja and Sons as an authorized payment collection partner of SimViz Labs</li>
              </ul>
              <p className="mt-4">
                By initiating a transaction, you acknowledge that you are entering into a legally binding and enforceable contract with SimViz Labs for the provision of Services.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-4">
                4.2 Payment Processing
              </h3>
              <p className="mt-4">
                SimViz Labs does not store your card, UPI, or banking details.
              </p>
              <p className="mt-4">
                All payments are processed securely by third-party payment providers in accordance with their respective terms and privacy policies.
              </p>
              <p className="mt-4">
                Ahuja and Sons acts only as a payment collection agent and does not provide the Services.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                5. Refunds and Cancellations
              </h2>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-4">
                Apple App Store Purchases
              </h3>
              <p className="mt-4">
                Refunds, cancellations, and subscription management for purchases made via the Apple App Store are governed solely by Apple&apos;s policies. SimViz Labs does not have the ability to issue refunds for Apple IAP transactions.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-4">
                PhonePe and Direct Payments
              </h3>
              <p className="mt-4">
                Refund eligibility (if any) for payments collected via PhonePe by Ahuja and Sons will be communicated at the time of purchase. Unless explicitly stated, digital products and subscriptions are non-refundable, except where required by applicable law.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                6. Intellectual Property Rights
              </h2>
              <p className="mt-4">
                All content, software, source code, designs, graphics, text, logos, trademarks, and materials associated with the Services are the exclusive intellectual property of SimViz Labs.
              </p>
              <p className="mt-4">
                You do not acquire any ownership rights by using the Services. Unauthorized use may result in legal action under applicable laws.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                7. Prohibited Use
              </h2>
              <p className="mt-4">
                You agree not to use the Services for any purpose that is:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Unlawful, illegal, or fraudulent</li>
                <li>In violation of these Terms</li>
                <li>Contrary to Indian, U.S., or other applicable local laws</li>
                <li>Harmful to the integrity, security, or operation of the Services</li>
              </ul>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                8. Disclaimer of Warranties
              </h2>
              <p className="mt-4">
                The Services are provided on an &quot;as is&quot; and &quot;as available&quot; basis.
              </p>
              <p className="mt-4">
                Neither SimViz Labs nor any third party provides any warranty regarding accuracy, performance, reliability, or suitability of the Services, to the fullest extent permitted by law.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                9. Limitation of Liability
              </h2>
              <p className="mt-4">
                Your use of the Services is entirely at your own risk.
              </p>
              <p className="mt-4">
                SimViz Labs shall not be liable for any indirect, incidental, consequential, or special damages arising from your use of or inability to use the Services.
              </p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                10. Third-Party Links and Services
              </h2>
              <p className="mt-4">
                The Services may contain links to third-party websites or services. Accessing such links is at your own risk and governed by the respective third-party terms and policies.
              </p>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                11. Force Majeure
              </h2>
              <p className="mt-4">
                Neither party shall be liable for failure or delay in performance due to events beyond reasonable control, including natural disasters, government actions, technical failures, or acts of God.
              </p>
            </section>

            {/* EULA Section */}
            <section>
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">
                END USER LICENSE AGREEMENT (EULA)
              </h2>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                12. License Grant
              </h2>
              <p className="mt-4">
                SimViz Labs grants you a limited, non-exclusive, non-transferable, revocable license to download, install, and use the application on Apple-branded devices you own or control, in accordance with Apple&apos;s App Store Usage Rules.
              </p>
            </section>

            {/* Section 13 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                13. License Restrictions
              </h2>
              <p className="mt-4">
                You shall not:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Copy, modify, reverse engineer, decompile, or disassemble the application</li>
                <li>Distribute, sublicense, lease, rent, or sell the application</li>
                <li>Use the application for any unlawful purpose</li>
              </ul>
            </section>

            {/* Section 14 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                14. Apple-Specific Terms
              </h2>
              <p className="mt-4">
                This EULA is an agreement between you and SimViz Labs, not Apple Inc.
              </p>
              <p className="mt-4">
                You acknowledge that:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Apple has no obligation to provide maintenance or support services</li>
                <li>Apple is not responsible for addressing claims related to the application</li>
                <li>Apple and its subsidiaries are third-party beneficiaries of this EULA and may enforce it against you</li>
                <li>If this EULA conflicts with Apple&apos;s Standard End User License Agreement, Apple&apos;s Standard EULA shall apply.</li>
              </ul>
            </section>

            {/* Section 15 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                15. Governing Law and Jurisdiction
              </h2>
              <p className="mt-4">
                These Terms and the EULA shall be governed by and construed in accordance with the laws of India.
              </p>
              <p className="mt-4">
                All disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of Kota, Rajasthan, India.
              </p>
            </section>

            {/* Section 16 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                16. Contact Information
              </h2>
              <p className="mt-4">
                All concerns or communications relating to these Terms or the EULA must be addressed using the contact information provided on our website:
              </p>
              <ul className="list-none pl-0 mt-4 space-y-2">
                <li>
                 Website: <a href="https://www.simvizlabs.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">https://www.simvizlabs.com</a>
                </li>
                <li>
                 Email: <a href="mailto:info@simvizlabs.com" className="text-blue-600 dark:text-blue-400 hover:underline">info@simvizlabs.com</a>
                </li>
                <li>
                 Phone: +1 (623)-428-4149 &nbsp;|&nbsp; +91 8931902560
                  
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

export default TermsAndConditionsPage;
