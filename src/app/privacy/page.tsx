"use client";

export default function PrivacyPolicyPage() {
  return (
    <div className="relative isolate bg-white">
      {/* Container */}
      <div className="mx-auto max-w-5xl px-6 lg:px-8 pt-20 pb-32 sm:pb-40">
        {/* Back Button */}
        <div className="flex items-center mb-6">
          <a
            href="/"
            className="flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
            Back to Home
          </a>
        </div>

        {/* Header */}
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-gray-500">Last updated: 21.01.2025</p>

        {/* Content */}
        <div className="mt-8 space-y-12 text-gray-800">
          <div>
            <p className="text-lg">
              This Privacy Policy details the data handling practices of the
              FMC-ACARS Preflight Trainer, developed by Simviz Labs. By using
              our app, you trust us with your information. We are committed to
              protecting that trust by respecting your privacy and safeguarding
              your data.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Data Collection and Use
              </h2>
              <p className="mt-4">
                <strong>Personal Information:</strong> We collect your Apple
                ID, name, email, and the organization you work for. This
                information helps us personalize your experience, ensuring the
                app meets your training needs.
              </p>
              <p className="mt-2">
                <strong>Device Information:</strong> To optimize your app
                experience, we collect data related to your device, such as the
                model, operating system, and settings preferences.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Purpose of Data Collection
              </h2>
              <p className="mt-4">
                The data we collect is primarily used to enhance app
                functionality, personalize your learning path, and ensure the
                content's relevance to your aviation training goals.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Third-Party Sharing
              </h2>
              <p className="mt-4">
                We affirm that we do not share any personal information with
                third parties. Our app functions offline, and all data
                processing is contained within the app itself, ensuring your
                data remains private and secure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                User Consent
              </h2>
              <p className="mt-4">
                Upon using FMC-ACARS Preflight Trainer, you'll encounter
                straightforward options to manage your personal data, including
                provisions to delete your account if desired. We believe in
                giving you full control over your information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                User Rights
              </h2>
              <p className="mt-4">
                Within the app’s settings screen, you have the ability to view,
                update, or request the deletion of your personal data. We
                empower you to manage your information directly within the app.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Data Security
              </h2>
              <p className="mt-4">
                Your data’s security is paramount. We employ encryption and
                follow industry best practices to protect your information from
                unauthorized access, disclosure, alteration, or destruction.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Subscription Information
              </h2>
              <p className="mt-4">
                If you subscribe to any of our services, we handle subscription
                data in accordance with best practices. You can manage your
                subscription within the app, including viewing, updating, and
                canceling your subscription.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Restore Purchases
              </h2>
              <p className="mt-4">
                Our app includes a "Restore Purchases" feature allowing you to
                restore previously purchased in-app items.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Contact Information
              </h2>
              <p className="mt-4">
                Should you have any questions about this Privacy Policy or our
                data practices, please contact us at{" "}
                <a
                  href="mailto:info@simvizlabs.com"
                  className="text-blue-600 hover:underline"
                >
                  info@simvizlabs.com
                </a>
                . For more information, visit our website at Simvizlabs.com.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Changes to This Policy
              </h2>
              <p className="mt-4">
                This Privacy Policy was last updated on 21.01.2025. We reserve
                the right to update and change our privacy practices. Any
                changes will be posted in this document, and we encourage users
                to review our policy periodically to stay informed about how we
                are protecting the personal information we collect.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Call-to-Action */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            Have any issues?{" "}
            <a
              href="/contact"
              className="text-blue-600 font-semibold hover:underline"
            >
              Contact Us
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}