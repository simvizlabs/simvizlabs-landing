"use client";
import Spotlight2 from "../ui/spotlight2";
import { SectionBadge } from "../ui/section-bade";
import { EldoraFeatures } from "../eldoraui/features";
import {
  PackageSearch,
  Settings,
  Eye,
  Plane,
  GraduationCap,
  Database,
} from "lucide-react";
import { TimelineDemo } from "./TimelineDemo";

const data = [
  {
    id: 1,
    title: "For Airlines",
    content:
      "Learning Analytic interactive emulators allow pilots to train remotely in complex, data-driven scenarios, creating performance benchmarks reviewed to refine and enhance training curriculum.",
    image: "/images/images/screenshots/profit-loss.png",
    icon: <Plane className="size-6 text-primary" />,
  },
  {
    id: 2,
    title: "For Aeronautical Schools",
    content:
      "Predictive machine learning software analyzes performance data to identify and prioritize improvement areas, guiding focused and effective training programs.",
    image: "/images/images/screenshots/inventory.png",
    icon: <GraduationCap className="size-6 text-primary" />,
  },
  {
    id: 3,
    title: "For Nav Database Services",
    content:
      "Dynamic, scalable software deploys tailored training scenarios to user devices, using data trends and airline inputs to address critical knowledge gaps.",
    image: "/images/images/screenshots/contacts.png",
    icon: <Database className="size-6 text-primary" />,
  },
];

export default function Workflows() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="pb-12 md:pb-10">
          {/* Section header */}
          {/* <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20"> */}
          <div className="flex items-center justify-center pb-3">
            <div className="relative flex items-center justify-center gap-3">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-blue-200/50"></div>
              <SectionBadge title="Advanced Aviation Solutions" />
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-blue-200/50"></div>
            </div>
          </div>
          <div className="mx-auto max-w-5xl pb-12 text-center md:pb-20">
              <h2 className="pt-10 animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.700),theme(colors.gray.700),theme(colors.gray.700),theme(colors.gray.700),theme(colors.gray.500))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-bold text-transparent md:text-5xl">
              Our Products and Solutions
              </h2>
              <p className="text-lg text-gray-700">
               Tailored to your specific operations and training needs from fleet-specific simulations to advanced analytics tools, our solutions are designed to elevate your organizations training standards.
              </p>
            </div>
          {/* </div> */}
          {/* Spotlight items */}

          <EldoraFeatures data={data} />
          {/* <Spotlight2 className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
             <a
              className="group/card relative h-full overflow-hidden rounded-2xl border-blue-700 bg-gray-200 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-gray-400/20 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-gray-500/80 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
              href="#0"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-100 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-300/50 after:via-gray-300/25 after:to-gray-300/50">
                 <div
                  className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={9}
                    height={8}
                    fill="none"
                  >
                    <path
                      fill="#F4F4F5"
                      d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
                    />
                  </svg>
                </div>
                 <Image
                  className="inline-flex"
                  src="/images/workflow-01.png"
                  width={350}
                  height={288}
                  alt="Workflow 01"
                />
                 <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-200/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                      <span className="bg-gradient-to-r from-blue-700 to-blue-700 bg-clip-text text-transparent">
                        For Airlines
                      </span>
                    </span>
                  </div>
                  <p className="text-gray-700">
                    Learning Analytic interactive emulators allow pilots to
                    train remotely in complex, data-driven scenarios, creating
                    performance benchmarks reviewed to refine and enhance
                    training curriculum.
                  </p>
                </div>
              </div>
            </a>
             <a
              className="group/card relative h-full overflow-hidden rounded-2xl border-blue-700 bg-gray-200 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-gray-400/20 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-gray-500/80 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
              href="#0"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-100 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-300/50 after:via-gray-300/25 after:to-gray-300/50">
                <div
                  className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={9}
                    height={8}
                    fill="none"
                  >
                    <path
                      fill="#F4F4F5"
                      d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
                    />
                  </svg>
                </div>
                <Image
                  className="inline-flex"
                  src="/images/workflow-02.png"
                  width={350}
                  height={288}
                  alt="Workflow 02"
                />
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-200/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                      <span className="bg-gradient-to-r from-blue-700 to-blue-700 bg-clip-text text-transparent">
                        For Aeronautical Schools
                      </span>
                    </span>
                  </div>
                  <p className="text-gray-700">
                    Predictive machine learning software analyzes performance
                    data to identify and prioritize improvement areas, guiding
                    focused and effective training programs.{" "}
                  </p>
                </div>
              </div>
            </a>
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl border-blue-700 bg-gray-200 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-gray-400/20 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-gray-500/80 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
              href="#0"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-100 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-300/50 after:via-gray-300/25 after:to-gray-300/50">
                <div
                  className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={9}
                    height={8}
                    fill="none"
                  >
                    <path
                      fill="#F4F4F5"
                      d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
                    />
                  </svg>
                </div>
                <Image
                  className="inline-flex"
                  src="/images/workflow-03.png"
                  width={350}
                  height={288}
                  alt="Workflow 03"
                />
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-200/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                      <span className="bg-gradient-to-r from-blue-700 to-blue-700 bg-clip-text text-transparent">
                        For Nav Database Services
                      </span>
                    </span>
                  </div>
                  <p className="text-gray-700">
                    Dynamic, scalable software deploys tailored training
                    scenarios to user devices, using data trends and airline
                    inputs to address critical knowledge gaps.
                  </p>
                </div>
              </div>
            </a>
          </Spotlight2> */}
        </div>
        <TimelineDemo />
      </div>
    </section>
  );
}
