import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head"; // Import Head
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NavbarDemo from "@/components/resizable-navbar-demo";
import Footer from "@/components/footer";
import { IconGauge, IconTarget, IconTimeline, IconArrowUpRight } from "@tabler/icons-react";

const steps = [
  { title: "Import Syllabus", desc: "Upload your course outline (EASA/FAA Part-121/142) to our LMS." },
  { title: "Select Aircraft Pack", desc: "Choose B737, B747 & A320 type-rate simulation modules." },
  { title: "Assign Scenarios", desc: "Push standard and custom exercises to student devices." },
  { title: "Review Analytics", desc: "Analyze performance dashboards and gap metrics." },
];

const features = [
  {
    title: "Emulator Fidelity",
    description: "Experience realistic B737/B747 CDU logic, full failure sets, and cached nav-data—no internet required.",
    icon: IconGauge,
  },
  {
    title: "Accreditation Alignment",
    description: "Utilize pre-built modules that map to EASA & FAA Part-121/142 learning objectives.",
    icon: IconTarget,
  },
  {
    title: "Assessment Analytics",
    description: "Leverage auto-graded scenarios that feed directly to your LMS grade-book and skills matrix.",
    icon: IconTimeline,
  },
];

const TypeRatingPage = () => {
  return (
    <div className="bg-white text-black dark:bg-neutral-900 dark:text-white font-geist">
      <Head>
        <title>Type Rating Training | FMS & ACARS Emulators | SimvizLabs</title>
        <meta name="description" content="Accelerate pilot certification with SimvizLabs' high-fidelity FMS/ACARS emulators, accreditation-aligned modules, and adaptive LMS for type rating centers." />
        <meta name="keywords" content="type rating, pilot certification, FMS emulator, ACARS emulator, aviation training center, EASA training, FAA training, SimvizLabs" />
      </Head>
      <NavbarDemo />
      <main className="space-y-16 px-6 py-16 max-w-7xl mx-auto">
        {/* Hero */}
        <section className="grid md:grid-cols-2 items-center gap-8">
          <div className="space-y-4">
            <h1 className="mt-6 max-w-[20ch] text-3xl xs:text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-5xl font-extrabold !leading-[1.2] tracking-tight">Graduate Job-Ready Crews, Faster</h1>
            <p className="text-lg text-muted-foreground dark:text-gray-400">
              Certification-grade FMS & ACARS emulators plus an adaptive LMS—purpose-built for type-rating centres and university avionics programmes.
            </p>
            <div className="flex space-x-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto rounded-full text-base"
                >
                  Get in touch <IconArrowUpRight className="!h-5 !w-5 ml-1" />
                </Button>
              </Link>
            </div>
          </div>
          <div>
            <Image
              src="/placeholder.svg"
              alt="Instructor demonstrating FMS procedures using SimvizLabs emulator in a type rating school" // Updated Alt Text
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Key Benefits */}
        <section className="space-y-4 text-center">
          <h2 className="max-w-2xl text-3xl font-geist font-bold xs:text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-4xl bg-gradient-to-r from-black to-gray-800 text-transparent bg-clip-text text-center mx-auto !leading-[1.2]">
            Key Benefits
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">Discover the advantages of our integrated training solutions.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white dark:bg-neutral-800">
                <CardHeader>
                  <CardTitle className="text-black dark:text-white flex items-center justify-center">
                    <feature.icon className="mr-2 h-5 w-5" />
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

        {/* How It Works */}
        <section className="space-y-4 text-center">
          <h2 className="max-w-2xl text-3xl font-geist font-bold xs:text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-4xl bg-gradient-to-r from-black to-gray-800 text-transparent bg-clip-text text-center mx-auto !leading-[1.2]">
            How Our Platform Works!
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">A streamlined process for effective training.</p>
          <ol className="items-center sm:flex justify-center">
            {steps.map((step, index) => (
              <li key={index} className="relative mb-6 sm:mb-0">
                <div className="flex items-center justify-center sm:justify-start"> {/* <-- Added justify-center sm:justify-start */}
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

export default TypeRatingPage;
