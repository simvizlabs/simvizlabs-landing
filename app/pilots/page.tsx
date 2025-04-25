import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import NavbarDemo from "@/components/resizable-navbar-demo";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PilotsPage = () => {
  return (
    <div className="bg-white text-black dark:bg-neutral-900 dark:text-white font-geist">
      <NavbarDemo />
      <main className="space-y-16 px-6 py-16 max-w-7xl mx-auto">
        {/* Hero */}
        <section className="grid md:grid-cols-2 items-center gap-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-extrabold">Master the Box—On the Go</h1>
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
              alt="Pilot Training Simulation"
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
                  B747
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button>Download on App Store</Button>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-neutral-800">
              <CardHeader>
                <CardTitle className="text-black dark:text-white flex items-center justify-center">
                  B737
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button>Download on App Store</Button>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-neutral-800">
              <CardHeader>
                <CardTitle className="text-black dark:text-white flex items-center justify-center">
                  Airbus A320
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button>Download on App Store</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center py-16">
          <h3 className="text-2xl font-semibold mb-4">Ready to Fly?</h3>
          <Button size="lg">Download Now</Button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PilotsPage;
