import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { BlurText } from "../ui/blur-text";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Container from "../global/container";

const Hero = () => {
    return (
      <div className="flex flex-col items-center text-center w-full max-w-5xl my-24 mx-auto z-40 relative">
        <Container delay={0.0}>
          <div className="pl-2 pr-1 py-1 rounded-full border border-foreground/10 hover:border-foreground/15 backdrop-blur-lg cursor-pointer flex items-center gap-2.5 select-none w-max mx-auto">
            <div className="w-3.5 h-3.5 rounded-full bg-primary/40 flex items-center justify-center relative">
              <div className="w-2.5 h-2.5 rounded-full bg-primary/60 flex items-center justify-center animate-ping">
                <div className="w-2.5 h-2.5 rounded-full bg-primary/60 flex items-center justify-center animate-ping"></div>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-primary flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            <span className="inline-flex items-center justify-center gap-2 animate-text-gradient animate-background-shine bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 bg-[200%_auto] bg-clip-text text-sm text-transparent">
              Disrupting Distant Learning
              <span className="text-xs text-secondary-foreground px-3 py-0.5 rounded-full bg-gradient-to-b from-foreground/20 to-foreground/10 flex items-center justify-center">
                Learn More
                <ArrowRightIcon className="w-3.5 h-3.5 ml-1 text-foreground/50" />
              </span>
            </span>
          </div>
        </Container>
        <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
          <h2 className="pt-10 animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.700),theme(colors.gray.700),theme(colors.gray.700),theme(colors.gray.700),theme(colors.gray.500))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-4xl font-semibold text-transparent md:text-[2.75rem] md:leading-tight">
            Next-Gen Interactive Distance Learning with Predictive Analytics
          </h2>
          <p className="text-lg text-gray-900">
            Experience aviation training redefined with predictive learning &
            analytics. Our interactive distance learning emulator helps airlines
            optimize training, boost efficiency, enhance safety, identify
            knowledge gaps, and dynamically tailor programs to individual needs.
          </p>
        </div>
        <Container delay={0.2}>
          <div className="flex items-center justify-center md:gap-x-6 mt-8 ">
            <Button asChild size="lg">
              <Link href="/app">Schedule a Call</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="hidden md:flex"
            >
              <Link href="#">Download our App</Link>
            </Button>
          </div>
        </Container>
        <Container delay={0.3}>
          <div className="relative mx-auto max-w-7xl rounded-xl lg:rounded-[32px] border border-neutral-200/50 p-2 backdrop-blur-lg border-neutral-700 bg-neutral-800/50 md:p-4 mt-12">
            <div className="absolute top-1/4 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-1/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>

            <div className="rounded-lg lg:rounded-[24px] border p-2 border-neutral-700 bg-black">
              <Image
                src="/images/dashboard.png"
                alt="dashboard"
                width={1920}
                height={1080}
                className="rounded-lg lg:rounded-[20px]"
              />
            </div>
          </div>
        </Container>
      </div>
    );
};

export default Hero
