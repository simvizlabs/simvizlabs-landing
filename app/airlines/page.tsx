import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NavbarDemo from "@/components/resizable-navbar-demo";
import Footer from "@/components/footer";
import { IconActivity, IconSend, IconSettings, IconLayoutDashboard } from "@tabler/icons-react";

const steps = [
  { title: "Import Syllabus", desc: "Upload your course outline (EASA/FAA Part-121/142) to our LMS." },
  { title: "Select Aircraft Pack", desc: "Choose B737, B747 & A320 type-rate simulation modules." },
  { title: "Assign Scenarios", desc: "Push standard and custom exercises to student devices." },
  { title: "Review Analytics", desc: "Analyze performance dashboards and gap metrics." },
];

const capabilities = [
  {
    title: "EBAT System",
    description: "Comprehensive evidence-based training tools.",
    icon: IconActivity,
  },
  {
    title: "Scenario Push to EFB / iPad",
    description: "Deliver targeted scenarios directly to pilot devices.",
    icon: IconSend,
  },
  {
    title: "CPDLC & Non-Normals Packs",
    description: "Specialized training modules for critical situations.",
    icon: IconSettings,
  },
  {
    title: "Ops Dashboard & BI Export",
    description: "Gain insights with operational dashboards and data exports.",
    icon: IconLayoutDashboard,
  },
];

const AirlinesPage = () => {
  return (
    <div className="bg-white text-black dark:bg-neutral-900 dark:text-white font-geist">
      <NavbarDemo />
      <main className="space-y-16 px-6 py-16 max-w-7xl mx-auto">
        {/* Hero */}
        <section className="grid md:grid-cols-2 items-center gap-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-extrabold">Fleet-Wide Standardization, Zero Classroom Fatigue</h1>
            <p className="text-lg text-muted-foreground dark:text-gray-400">
              Deploy tablet FMC emulators, EBAT dashboards, and data-driven refresher packs across every crew base.
            </p>
            <div className="flex space-x-4">
              <Button variant="default">
                <Link href="/contact">Request Demo</Link>
              </Button>
            </div>
          </div>
          <div>
            <Image
              src="/placeholder.svg"
              alt="Airline Training Simulation"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Key Capabilities */}
        <section className="space-y-4 text-center">
          <h2 className="max-w-2xl text-3xl font-geist font-bold xs:text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-4xl bg-gradient-to-r from-black to-gray-800 text-transparent bg-clip-text text-center mx-auto !leading-[1.2]">
            Key Capabilities
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">Explore our advanced capabilities for airline training.</p>
          <div className="grid md:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <Card key={index} className="bg-white dark:bg-neutral-800">
                <CardHeader className="flex flex-col items-center">
                  <capability.icon className="h-8 w-8 mb-2" />
                  <CardTitle className="text-black dark:text-white flex items-center justify-center">
                    {capability.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    {capability.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="space-y-4 text-center">
          <h2 className="max-w-2xl text-3xl font-geist font-bold xs:text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-4xl bg-gradient-to-r from-black to-gray-800 text-transparent bg-clip-text text-center mx-auto !leading-[1.2]">
            How Our Platform Works!
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">A streamlined process for effective training.</p>
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

export default AirlinesPage;
