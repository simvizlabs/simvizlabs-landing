"use client";
import { useState } from 'react';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function ContactPage() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "bb52624a-5b2f-4c6d-8835-5543a8100e22"); // Your Web3Forms Access Key

    // Add subject and from_name if desired
    formData.append("subject", "New Contact Form Submission from SimViz Labs Landing");
    formData.append("from_name", "SimViz Labs Contact Form");

    // Append existing form fields
    // Note: Ensure input names match what Web3Forms expects or adjust here
    // formData.append("name", `${formData.get('first-name')} ${formData.get('last-name')}`); // Example: Combine first/last name if needed

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully!");
      (event.target as HTMLFormElement).reset(); // Reset form fields
      setTimeout(() => setResult(""), 5000); // Clear message after 5 seconds
    } else {
      console.error("Error submitting form:", data);
      setResult(`Error: ${data.message}`);
    }
  };

  return (
    <div className="relative isolate bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        
        {/* Contact Information Section */}
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            {/* Background Pattern */}
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
              <svg
                aria-hidden="true"
                className="absolute inset-0 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
              >
                <defs>
                  <pattern
                    x="100%"
                    y={-1}
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width={200}
                    height={200}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect fill="white" width="100%" height="100%" strokeWidth={0} />
                <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" width="100%" height="100%" strokeWidth={0} />
              </svg>
            </div>
           {/* Back Button */}
<div className="flex items-center space-x-2 mb-4">
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
      className="w-5 h-5 mr-1"
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

<h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
  Get in touch
</h2>
            <p className="mt-6 text-lg text-gray-600">
  Have questions or need assistance? Reach out to us for support with our products and services.
</p>

{/* Schedule a Call Button */}
<div className="mt-6">
  <a
    href="https://calendly.com/simvizlabs_demo/30min"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
  >
    Schedule a Call
  </a>
</div>

<dl className="mt-10 space-y-4 text-base text-gray-600">
  <div className="flex gap-x-4">
    <dt>
      <PhoneIcon className="h-7 w-6 text-gray-400" />
    </dt>
    <dd>
      <a href="tel:+1 (623)-428-4149" className="hover:text-gray-900">
        +1 (623)-428-4149
      </a>
    </dd>
  </div>
  <div className="flex gap-x-4">
    <dt>
      <EnvelopeIcon className="h-7 w-6 text-gray-400" />
    </dt>
    <dd>
      <a href="mailto:info@simvizlabs.com" className="hover:text-gray-900">
        info@simvizlabs.com
      </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        {/* Contact Form Section */}
        <form onSubmit={onSubmit} className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              {/* Input fields need 'name' attributes for FormData */}
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold text-gray-900">
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    id="first-name"
                    name="first-name" // Ensure name attribute is present
                    type="text"
                    autoComplete="given-name"
                    required // Added required attribute
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-gray-900 shadow-sm border border-gray-300 placeholder:text-gray-400 focus:ring-blue-600 focus:border-blue-600"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold text-gray-900">
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    id="last-name"
                    name="last-name" // Ensure name attribute is present
                    type="text"
                    autoComplete="family-name"
                    required // Added required attribute
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-gray-900 shadow-sm border border-gray-300 placeholder:text-gray-400 focus:ring-blue-600 focus:border-blue-600"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    id="email"
                    name="email" // Ensure name attribute is present
                    type="email"
                    autoComplete="email"
                    required // Added required attribute
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-gray-900 shadow-sm border border-gray-300 placeholder:text-gray-400 focus:ring-blue-600 focus:border-blue-600"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message" // Ensure name attribute is present
                    rows={4}
                    required // Added required attribute
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-gray-900 shadow-sm border border-gray-300 placeholder:text-gray-400 focus:ring-blue-600 focus:border-blue-600"
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Send message
              </button>
            </div>
            {/* Display submission result */}
            {result && (
              <p className={`mt-4 text-sm ${result.startsWith('Error') ? 'text-red-600' : 'text-green-600'}`}>
                {result}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
