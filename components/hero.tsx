import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";
import { AuroraText } from "@/components/magicui/aurora-text";

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] w-full flex items-center justify-center overflow-hidden border-b border-accent">
      <div className="max-w-screen-xl w-full flex flex-col lg:flex-row mx-auto items-center justify-between gap-y-6 gap-x-10 px-6 pt-24 pb-12 lg:py-0">
        <div className="max-w-xl">
          
        <div className="pl-2 pr-1 py-1 rounded-full border border-foreground/10 hover:border-foreground/15 backdrop-blur-lg cursor-pointer flex items-center gap-2.5 select-none w-max">
          <div className="w-3.5 h-3.5 rounded-full bg-blue-200 flex items-center justify-center relative">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-600 flex items-center justify-center relative">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-600 flex items-center justify-center animate-ping"></div>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-blue-900 flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          <span className="inline-flex items-center justify-center gap-2 animate-text-gradient animate-background-shine bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-600 bg-[200%_auto] bg-clip-text text-sm text-transparent">
            Disrupting Distant Learning
            <span className="text-xs px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 border border-blue-200/30 dark:border-blue-700/30 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors flex items-center justify-center group">
              Learn More
              <ArrowRightIcon className="w-3.5 h-3.5 ml-1 text-blue-500 dark:text-blue-400 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </span>
        </div>
          <h1 className="mt-6 max-w-[20ch] text-3xl xs:text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-5xl font-extrabold !leading-[1.2] tracking-tight">
            Next-Gen Pilot Training for  <AuroraText>Safer Operations</AuroraText>
          </h1>
          <p className="mt-6 max-w-[60ch] xs:text-lg">
            Experience aviation distance learning powered by interactive simulators, real-world scenario training, and predictive learning analytics—designed to sharpen pilot proficiency and enhance operational safety.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto rounded-full text-base"
              >
                Get in touch <ArrowUpRight className="!h-5 !w-5" />
              </Button>
            </Link>
            {/* <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full text-base shadow-none gap-2">
              <Play className="h-4 w-4" />
              Watch Video
            </Button> */}
          </div>
        </div>
        <div className="relative lg:max-w-lg xl:max-w-xl w-full rounded-xl aspect-square flex items-center">
          <Image
            src="/hero-img.png"
            width={600}
            height={400}
            alt="Hero Image"
            className="rounded-md object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
