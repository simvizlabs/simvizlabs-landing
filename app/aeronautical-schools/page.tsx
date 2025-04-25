import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NavbarDemo from "@/components/resizable-navbar-demo";
import Footer from "@/components/footer";
import { IconEdit, IconActivity, IconWifiOff } from "@tabler/icons-react";

const steps = [
  { title: "Discover", desc: "Explore foundational concepts." },
  { title: "Practice", desc: "Engage in hands-on exercises." },
  { title: "Assess", desc: "Evaluate your understanding." },
  { title: "Certify", desc: "Achieve certification upon completion." },
];

const features = [
  {
    title: "Drag-n-Drop Lesson Builder",
    description: "Create customized lessons with ease.",
    icon: IconEdit,
  },
  {
    title: "Real-Time Instructor Panel",
    description: "Monitor student progress in real-time.",
    icon: IconActivity,
  },
  {
    title: "Offline Assessment Mode",
    description: "Conduct assessments even without internet connectivity.",
    icon: IconWifiOff,
  },
];

const AeronauticalSchoolsPage = () => {
  return (
    <div className="bg-white text-black dark:bg-neutral-900 dark:text-white font-geist">
      <NavbarDemo />
      <main className="space-y-16 px-6 py-16 max-w-7xl mx-auto">
        {/* Hero */}
        <section className="grid md:grid-cols-2 items-center gap-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-extrabold">Bridge the Theory–Practice Gap</h1>
            <p className="text-lg text-muted-foreground dark:text-gray-400">
              Interactive FMS labs, ACARS message simulators, and LMS quizzes—designed for Part-147 & ATC colleges.
            </p>
            <div className="flex space-x-4">
              <Button variant="default">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
          <div>
            <Image
              src="/placeholder.svg"
              alt="Aeronautical School Training"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Key Capabilities */}
        <section className="space-y-4 text-center">
          <h2 className="max-w-2xl text-3xl font-geist font-bold xs:text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-4xl bg-gradient-to-r from-black to-gray-800 text-transparent bg-clip-text text-center mx-auto !leading-[1.2]">
            Core Features
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">Explore our core features designed for aviation academies.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white dark:bg-neutral-800">
                <CardHeader className="flex flex-col items-center">
                  <feature.icon className="h-8 w-8 mb-2" />
                  <CardTitle className="text-black dark:text-white flex items-center justify-center">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Student Journey */}
        <section className="space-y-4 text-center">
          <h2 className="max-w-2xl text-3xl font-geist font-bold xs:text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-4xl bg-gradient-to-r from-black to-gray-800 text-transparent bg-clip-text text-center mx-auto !leading-[1.2]">
            Student Journey
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">A four-step path to aviation expertise.</p>
          <ol className="items-center sm:flex justify-center">
            {steps.map((step, index) => (
              <li key={index} className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                  <div className="z-10 flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                    <span className="text-lg font-bold text-blue-800 dark:text-blue-300">{index + 1}</span>
                  </div>
                  <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pe-8 sm:text-left text-center">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{step.title}</h3>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AeronauticalSchoolsPage;
