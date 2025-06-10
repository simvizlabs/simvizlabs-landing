import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head"; // Import Head

import { Button } from "../../components/ui/button";
import NavbarDemo from "../../components/resizable-navbar-demo";
import Footer from "../../components/footer";
import { IconNotebook, IconLayoutDashboard, IconDeviceLaptop, IconShieldHalf, IconGrain, IconRosetteDiscount, IconChartHistogram, IconDeviceAudioTape, IconDeviceTabletQuestion } from "@tabler/icons-react";


const features = [
  {
    name: 'Scenario-Based Safety Training',
    description:
      'Create realistic flight scenarios to reinforce SOPs and safety handling.',
    icon: IconShieldHalf,
  },
  {
    name: 'Pre-Simulator Proficiency Tools',
    description:
      'Equip pilots with hands-on practice before simulator sessions.',
    icon: IconDeviceLaptop,
  },
  {
    name: 'Automation & FMS Proficiency',
    description:
      'Strengthen FMC/MCP knowledge to enhance automation and judgment.',
    icon: IconGrain,
  },
  {
    name: 'Minimize Simulator Time',
    description:
      'Shift procedures and practice scenarios to digital pre-sim tools.',
    icon: IconRosetteDiscount,
  },
]



const TypeRatingOrganizationsPage = () => {
  return (
    <div className="bg-white text-black dark:bg-neutral-900 dark:text-white font-geist">

      <Head>
        <title className="font-geist">Type Rating Training Solutions | EBAT & FMC Emulators | SimvizLabs</title>
        <meta name="description" content="Specialized training solutions for type rating organizations, featuring SimvizLabs' tablet FMC emulators, EBAT dashboards, CPDLC/Non-Normal packs, and data-driven refresher solutions." className="font-geist" />
        <meta name="keywords" content="type rating training, pilot training solutions, EBAT system, FMC emulator, CPDLC training, non-normal procedures, flight operations, SimvizLabs" className="font-geist" />
      </Head>
      <NavbarDemo />
      <main className="space-y-16 py-16">
        {/* Hero */}
        <div className="relative isolate overflow-hidden pt-14">
          <Image
            alt="Type Rating Organizations"
            src="https://images.unsplash.com/photo-1521899922280-eed2230d7be8?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&blend=111827&sat=-100&exp=15&blend-mode=multiply"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 -z-10 size-full object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-288.75"
            />
          </div>
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                  Announcing our next round of funding.{' '}
                  <a href="#" className="font-semibold text-white">
                    <span aria-hidden="true" className="absolute inset-0" />
                    Read more <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div> */}
              <div className="text-center font-geist">
                <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl font-geist [text-shadow:_0_0_30px_rgba(255,255,255,0.3)]">
                Streamline Type Rating Training
                </h1>
                <p className="mt-8 text-lg font-medium text-pretty text-gray-200 sm:text-xl/8 font-geist">
                All-in-one platform for managing type rating content, assessments, and performance.

      
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="https://calendly.com/simvizlabs_demo/30min"
                    className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
                  >
                    Schedule a Call
                  </a>
                  <Link href="#why-choose" className="text-sm/6 font-semibold text-white">
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-288.75"
            />
          </div>
        </div>


        <div className="bg-white ">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
            <div className="mx-auto max-w-2xl lg:text-center mt-6" id="why-choose">
              
              <p className="mt-2 text-4xl font-bold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance font-geist text-center">
                Purpose-Built for Type Rating Organizations
              </p>
              <p className="mt-6 text-lg/8 text-gray-600 font-geist">
              Specialized tools to modernize training, prep pilots, and reduce simulator load.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-16 font-geist">
                    <dt className="text-base/7 font-semibold text-gray-900 font-geist">
                      <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-blue-600">
                        <feature.icon aria-hidden="true" className="size-6 text-white font-geist" />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-base/7 text-gray-600 font-geist">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

   
   
           <section className="py-12 font-geist">
               <div className="mx-auto max-w-7xl space-y-8 px-6 md:space-y-16 font-geist">
                   <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center  font-geist">
                       <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance font-geist">Unified Training Management Tools</h2>
                       <p className="mt-6 text-lg/8 text-gray-600 font-geist">Manage eLearning, assessments, analytics, and records in one place.</p>
                   </div>
   
                   <div className="relative mx-auto grid max-w-2xl lg:max-w-7xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3 font-geist">
                       <div className="space-y-3 font-geist">
                           <div className="flex items-center gap-2 font-geist w-[300px]">
                               <IconLayoutDashboard className="size-4 font-geist" />
                               <h3 className="text-md font-bold font-geist">Scalable eLearning Platform</h3>
                           </div>
                           <p className="text-sm font-geist">Launch SCORM content and track pilot progress instantly.</p>
                       </div>
                       <div className="space-y-2 font-geist">
                           <div className="flex items-center gap-2 font-geist w-[300px]">
                               <IconDeviceLaptop className="size-4 font-geist" />
                               <h3 className="text-md font-bold font-geist">Mobile & Offline Access</h3>
                           </div>
                           <p className="text-sm font-geist">Train offline on FMS/ACARS via iPad or desktop.</p>
                       </div>
                       <div className="space-y-2 font-geist">
                           <div className="flex items-center gap-2 font-geist w-[300px]">
                               <IconDeviceTabletQuestion className="size-4 font-geist" />
   
                               <h3 className="text-md font-bold font-geist">Scenario-Based Assessments</h3>
                           </div>
                           <p className="text-sm font-geist">Evaluate applied skills with dynamic, real-world quizzes.</p>
                       </div>
                       <div className="space-y-2 font-geist">
                           <div className="flex items-center gap-2 font-geist w-[300px]">
                               <IconDeviceAudioTape className="size-4 font-geist" />
   
                               <h3 className="text-md font-bold font-geist">Digital Training Records</h3>
                           </div>
                           <p className="text-sm font-geist">Log sessions and assessments in audit-ready cloud records.</p>
                       </div>
                       <div className="space-y-2 font-geist">
                           <div className="flex items-center gap-2 font-geist w-[300px]">
                               <IconChartHistogram className="size-4 font-geist" />
   
                               <h3 className="text-md font-bold font-geist">Live Performance Dashboards</h3>
                           </div>
                           <p className="text-sm font-geist">Track pilot performance and identify knowledge gaps fast.</p>
                       </div>
                       <div className="space-y-2 font-geist">
                           <div className="flex items-center gap-2 font-geist w-[300px]">
                               <IconNotebook className="size-4 font-geist" />
   
                               <h3 className="text-md font-bold font-geist">Curriculum & Compliance Tools</h3>
                           </div>
                           <p className="text-sm font-geist">Manage curriculums and qualification timelines with ease.</p>
                       </div>
                   </div>
               </div>
           </section>
         </main>
         <section>
           <div className="pb-12">
               <div className="mx-auto max-w-5xl px-6">
                   <div className="space-y-6 text-center">
                       {/* <h2 className="text-foreground text-balance text-4xl font-semibold lg:text-5xl font-geist">Want to learn more?</h2> */}
                       <div className="flex justify-center gap-3 font-geist">
                           <Button
                               asChild
                               size="lg"
                               className="font-geist">
                               <Link href="https://calendly.com/simvizlabs_demo/30min" className="font-geist">Request a Demo</Link>
                           </Button>
                           {/* <Button
                               asChild
                               variant="outline"
                               size="lg"
                               className="font-geist">
                               <Link href="/" className="font-geist">Back to home</Link>
                           </Button> */}
                       </div>
                   </div>
               </div>
           </div>
       </section>
         <Footer />
    </div>
  );
};

export default TypeRatingOrganizationsPage;