import Image from 'next/image';
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Feature108Props {
  description?: string;
}

const Feature108 = ({
  description = "Revolutionize Distance learning pilot training with LMS containing interactive playground, Event-based analytics & Data-driven solutions.",
}: Feature108Props) => {
  return (
    <section id="feature108" className="py-24">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="px-4 py-1 rounded-full border border-foreground/10 hover:border-foreground/15 backdrop-blur-lg cursor-pointer flex items-center gap-2.5 select-none w-max mx-auto">
            <div className="bg-[linear-gradient(110deg,#808080,45%,#D3D3D3,55%,#808080)] bg-[length:250%_100%] bg-clip-text animate-background-shine text-transparent font-medium text-sm font-geist">
                Advanced Aviation Solutions
            </div>
          </div>
          <h1 className="max-w-2xl text-3xl font-geist font-bold xs:text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-5xl bg-gradient-to-r from-black to-gray-800 text-transparent bg-clip-text">
            Our Products and Solutions
          </h1>
          <p className="text-muted-foreground text-lg font-geist leading-relaxed max-w-[60ch]">{description}</p>
        </div>
        <div className="mx-auto mt-8 max-w-screen-xl rounded-2xl bg-muted/70 p-6 lg:p-16">
          <div className="grid place-items-center gap-20 lg:grid-cols-2 lg:gap-10">
            <div className="flex flex-col gap-5">
              <Badge variant="outline" className="w-fit bg-background">
                For Aspiring Pilots
              </Badge>
              <h3 className="text-3xl font-bold lg:text-4xl">
                Take the Controls with Confidence
              </h3>
              <p className="text-muted-foreground lg:text-lg">
                Build real‑world FMC/ACARS proficiency through guided simulation exercises, instant feedback, and scenario‑based challenges—so you’re fully prepared for your first flight deck assignment.
              </p>
              <Button className="mt-2.5 w-fit gap-2" size="lg" asChild>
                <Link href="https://apps.apple.com/us/developer/simviz-labs-llc/id1705562071">Check our apps</Link>
              </Button>
            </div>
            <Image
              src="/images/airline.png"
              alt="airline"
              className="rounded-xl"
              style={{ order: 1 }}
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-screen-xl rounded-2xl bg-muted/70 p-6 lg:p-16">
          <div className="grid place-items-center gap-20 lg:grid-cols-2 lg:gap-10">
            <Image
              src="/images/schools.png"
              alt="schools"
              className="rounded-xl"
              style={{ order: 0 }}
              width={500}
              height={500}
            />
            <div className="flex flex-col gap-5">
              <Badge variant="outline" className="w-fit bg-background">
               For Aeronautical Schools
              </Badge>
              <h3 className="text-3xl font-bold lg:text-4xl">
              Modernize Your Training Curriculum
              </h3>
              <p className="text-muted-foreground lg:text-lg">
                Seamlessly integrate our interactive simulators and customizable LMS modules to give students hands‑on avionics experience, accelerate learning outcomes, and produce job‑ready graduates.
              </p>
              <Button className="mt-2.5 w-fit gap-2" size="lg" asChild>
                <Link href="/contact">Get in touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature108;
