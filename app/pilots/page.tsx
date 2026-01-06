import React from "react";
import Image from "next/image";
import Head from "next/head"; // Import Head
import Link from "next/link"; // Import Link
import { Button } from "@/components/ui/button";
import NavbarDemo from "@/components/resizable-navbar-demo";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IconBrandAppstore } from "@tabler/icons-react"; // Import App Store Icon

const PilotsPage = () => {
  // Example App Store URLs - Replace with actual links
  const appStoreUrls = {
    b747: "https://apps.apple.com/us/app/fms-trainer-b747/id6464125512",
    b737: "https://apps.apple.com/us/app/fms-trainer-b737/id6740346553",
    a320: "https://apps.apple.com/us/app/airbus-a320-fms/id6743235055",
  };

  return (
    <div className="bg-white text-black dark:bg-neutral-900 dark:text-white font-geist">
      <Head>
        <title>iPad CDU/FMS Simulators for Pilots | B737, B747, A320 | SimViz Labs</title>
        <meta name="description" content="Practice realistic B737, B747, and A320 CDU/FMS workflows on your iPad with SimViz Labs' flight simulators. Download free and pro versions for pilot training." />
        <meta name="keywords" content="pilot training, CDU simulator, FMS simulator, iPad flight sim, B737 training, B747 training, A320 training, SimViz Labs" />
      </Head>
      <NavbarDemo />
      <main className="space-y-16 px-6 py-16 max-w-7xl mx-auto">
        {/* Hero */}
        <section className="grid md:grid-cols-2 items-center gap-8">
          <div className="space-y-4">
            <h1 className="mt-6 max-w-[20ch] text-3xl xs:text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-5xl font-extrabold !leading-[1.2] tracking-tight">Master the Box—On the Go</h1>
            <p className="text-lg text-muted-foreground dark:text-gray-400">
              Practice real CDU workflows on your iPad: choose from free B737, pro B747 & A320 packs.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button size="lg">Download Now</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
          <div>
            <Image
              src="/placeholder.svg"
              alt="Pilot using SimViz Labs CDU simulator on an iPad" // Updated Alt Text
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Our iPad Apps */}
        <section className="space-y-4 text-center">
          <h2 className="max-w-2xl text-3xl font-geist font-bold xs:text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-4xl bg-gradient-to-r from-black to-gray-800 text-transparent bg-clip-text text-center mx-auto !leading-[1.2]">
            Our iPad Apps
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">Download our apps and enhance your training.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white dark:bg-neutral-800">
              <CardHeader>
                <CardTitle className="text-black dark:text-white flex items-center justify-center">
                  B747 CDU Trainer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button asChild>
                  <Link href={appStoreUrls.b747} target="_blank" rel="noopener noreferrer">
                    <IconBrandAppstore className="mr-2 h-4 w-4" /> Download
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-neutral-800">
              <CardHeader>
                <CardTitle className="text-black dark:text-white flex items-center justify-center">
                  B737 CDU Trainer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button asChild>
                  <Link href={appStoreUrls.b737} target="_blank" rel="noopener noreferrer">
                    <IconBrandAppstore className="mr-2 h-4 w-4" /> Download
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-neutral-800">
              <CardHeader>
                <CardTitle className="text-black dark:text-white flex items-center justify-center">
                  Airbus A320 MCDU Trainer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button asChild>
                  <Link href={appStoreUrls.a320} target="_blank" rel="noopener noreferrer">
                    <IconBrandAppstore className="mr-2 h-4 w-4" /> Download
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center py-16">
          <h3 className="text-2xl font-semibold mb-4">Ready to Master the Box?</h3>
          <Button size="lg" asChild>
            {/* Link to a general App Store page or the most popular app */}
            <Link href={appStoreUrls.b737} target="_blank" rel="noopener noreferrer">
              <IconBrandAppstore className="mr-2 h-4 w-4" /> Download Now
            </Link>
          </Button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PilotsPage;
