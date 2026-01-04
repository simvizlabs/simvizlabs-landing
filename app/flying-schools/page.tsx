import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head"; // Import Head

import { Button } from "../../components/ui/button";
import NavbarDemo from "../../components/resizable-navbar-demo";
import Footer from "../../components/footer";
import { IconSchool, IconRocket, IconBriefcase, IconUsers, IconNotebook, IconLayoutDashboard, IconDeviceLaptop, IconChartHistogram, IconDeviceAudioTape, IconDeviceTabletQuestion } from "@tabler/icons-react";


const features = [
  {
    name: 'Modernize your Training Programs ',
    description:
      'Boost graduate success by embedding industry-relevant automation skills — without the cost of full simulators. Providing students with hands-on experience in transport category aircraft systems that are otherwise inaccessible.',
    icon: IconSchool,
  },
   {
    name: 'Enhanced Employability & Curriculum Value',
    description:
      'Equip students with practical experience in FMS, FCU/MCP, and FMA operations — key competencies evaluated in airline training and simulator checks.',
    icon: IconUsers,
  },
  {
    name: 'Empower Instructors',
    description:
      'Track student progress, efficiently assign modules, and monitor performance effectively through seamless LMS integration.',
    icon: IconRocket,
  },
  
  {
    name: 'Harness Cutting-Edge Technology',
    description:
      'Enhance your training program and optimize resources with realistic, state-of-the-art virtual simulations, an integrated LMS with content management system, and interactive playground.',
    icon: IconBriefcase,
  },
 

]



const AeronauticalsPage = () => {
  return (
    <div className="bg-white text-black dark:bg-neutral-900 dark:text-white font-geist">

      <Head>
        <title className="font-geist">Aeronautical Schools Training Solutions | EBAT & FMC Emulators | SimvizLabs</title>
        <meta name="description" content="Specialized training solutions for aeronautical schools, featuring SimvizLabs' tablet FMC emulators, EBAT dashboards, CPDLC/Non-Normal packs, and data-driven refresher solutions." className="font-geist" />
        <meta name="keywords" content="aeronautical school training, pilot training solutions, EBAT system, FMC emulator, CPDLC training, non-normal procedures, flight operations, SimvizLabs" className="font-geist" />
      </Head>
      <NavbarDemo />
      <main className="space-y-16 py-16">
        {/* Hero */}
        <div className="relative isolate overflow-hidden pt-14">
          <Image
            alt="Aeronautical Schools"
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
                Boost Your Students Career Success
                </h1>
                <p className="mt-8 text-lg font-medium text-pretty text-gray-200 sm:text-xl/8 font-geist">
                Give your students a competitive edge in airline interviews with our self-paced LMS course with an integrated FMS trainer.

      
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
              
              <p className="mt-2 text-4xl font-bold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance font-geist">
                Why Choose SimVizLabs?
              </p>
              <p className="mt-6 text-lg/8 text-gray-600 font-geist">
                            Prepare Your Students to give your students competitive edge with our training platform designed to bridge the gap between theoretical knowledge and airline expectations Campus to Cockpit.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                 {features.map((feature) => (
                  <div key={feature.name} className="relative font-geist">
                    <dt className="text-base/7 font-semibold text-gray-900 font-geist flex items-center">
                      <div className="flex size-10 items-center justify-center rounded-lg bg-blue-600 mr-4">
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
                       <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance font-geist">Our Training Management System</h2>
                       <p className="mt-6 text-lg/8 text-gray-600 font-geist">A streamlined process for effective training.</p>
                   </div>
   
                   <div className="relative mx-auto grid max-w-2xl lg:max-w-7xl divide-x divide-y border *:p-6 sm:*:p-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 font-geist">
                       <div className="space-y-3 font-geist">
                           <div className="flex items-center gap-2 font-geist">
                               <IconLayoutDashboard className="size-4 font-geist" />
                               <h3 className="text-md font-bold font-geist">Learning Management System </h3>
                           </div>
                           <p className="text-sm font-geist">Organize, launch, and track eLearning content</p>
                       </div>
                       <div className="space-y-2 font-geist">
                           <div className="flex items-center gap-2 font-geist">
                               <IconDeviceLaptop className="size-4 font-geist" />
                               <h3 className="text-md font-bold font-geist">Mobile Solutions</h3>
                           </div>
                           <p className="text-sm font-geist">Deploy online/offline training on iPAD (FMS, ACARS Trainer)</p>
                       </div>
                       <div className="space-y-2 font-geist">
                           <div className="flex items-center gap-2 font-geist">
                               <IconDeviceTabletQuestion className="size-4 font-geist" />
   
                               <h3 className="text-md font-bold font-geist">Quiz Generation System (QGS)</h3>
                           </div>
                           <p className="text-sm font-geist">Design and manage technical questions, exams, and quizzes</p>
                       </div>
                       <div className="space-y-2 font-geist">
                           <div className="flex items-center gap-2 font-geist">
                               <IconDeviceAudioTape className="size-4 font-geist" />
   
                               <h3 className="text-md font-bold font-geist">Electronic Training Records System </h3>
                           </div>
                           <p className="text-sm font-geist">Collect training and assessment data offline for EBT/ATQP/AQP</p>
                       </div>
                       <div className="space-y-2 font-geist">
                           <div className="flex items-center gap-2 font-geist">
                               <IconChartHistogram className="size-4 font-geist" />
   
                               <h3 className="text-md font-bold font-geist">Advanced Analytics</h3>
                           </div>
                           <p className="text-sm font-geist">Develop and maintain company-specific analytics and reports</p>
                       </div>
                       <div className="space-y-2 font-geist">
                           <div className="flex items-center gap-2 font-geist">
                               <IconNotebook className="size-4 font-geist" />
   
                               <h3 className="text-md font-bold font-geist">Curriculum Management</h3>
                           </div>
                           <p className="text-sm font-geist">Manage training curriculums</p>
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

export default AeronauticalsPage;