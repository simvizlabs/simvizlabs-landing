import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Data Input and Collection",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-s md:text-m font-normal mb-4">
            Model receives initial data inputs to establish a baseline for
            Course development.
          </p>

          <p className="text-neutral-800 dark:text-neutral-200 text-s md:text-m font-normal mb-4">
            De-identified data received from Training departments requiring
            focus.
          </p>

          <p className="text-neutral-800 dark:text-neutral-200 text-s md:text-m font-normal mb-4">
            Flight Events and tasks requiring special focus, recommended by
            TI&apos;s and Check Pilots.
          </p>

          <p className="text-neutral-800 dark:text-neutral-200 text-s md:text-m font-normal mb-4">
            Initial Set of Data Collected by running Pilot program utilizing
            Emulators and LMS initial scenarios.
          </p>

          <div className="grid grid-cols-1 gap-4">
            <Image
              src="/images/timeline-imgs/1.png"
              alt="startup template"
              width={1080}
              height={1080}
              objectFit="cover"
              className="rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Filtering and Selection",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-s md:text-m font-normal mb-4">
            Filtering algorithm creates set of initial scenarios consisting of
            tasks and events requiring focus.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-s md:text-m font-normal mb-4">
            Filtering system selects specific events and tasks to create set of
            scenarios and recommendation for LMS course.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-s md:text-m font-normal mb-4">
            Model identifies and pin points knowledge gaps and need for
            standardization implementation.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-s md:text-m font-normal mb-4">
            Produces performance based dashboards.
          </p>

          <div className="grid grid-cols-1 gap-4">
            <Image
              src="/images/timeline-imgs/2.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Final Scenarios and Courseware",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-s md:text-m font-normal mb-4">
            Model pushes and Runs the Scenarios to Emulators.
          </p>

          <p className="text-neutral-800 dark:text-neutral-200 text-s md:text-m font-normal mb-4">
            Final Recommendations are made to Decision makers and Instructors.
          </p>

          <p className="text-neutral-800 dark:text-neutral-200 text-s md:text-m font-normal mb-4">
            Final LMS courses are Pushed.
          </p>

          <div className="grid grid-cols-1 gap-4">
            <Image
              src="/images/timeline-imgs/3.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <div className="pt-12 text-center">
        <h2 className="text-5xl font-bold text-transparent pb-2 bg-clip-text bg-gradient-to-br from-gray-500 via-gray-700 to-gray-900">
          How our Platform works!
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Our platform is designed to transform training — combining emulators,
          interactive LMS,{" "}
          <br className="hidden md:block" /> 
          and a seamless data pipeline to craft dynamic
          scenarios that evolve with your training needs.
        </p>
      </div>
      <Timeline data={data} />
    </div>
  );
}
