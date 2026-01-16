import Image from "next/image";
import { Button } from "@/components/ui/button";
import ScheduleDemoButton from "../MajorComponnts/ScheduleDemoButton";

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/landing/hero-bg.png"
          alt="Cockpit background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        {/* Overlay to ensure text readability matching design darkness */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 text-center py-20">
        <h1 className="max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
          Train smarter. Fly safer.
          <br className="hidden sm:block" />
          {" "}Operate with precision.
        </h1>

        <p className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-white/90 text-nowrap">
          Boost pilot readiness.
          <br className="block sm:hidden" />
          {" "}Elevate operational confidence.
          <br className="block sm:hidden" />
          {" "}Cut simulator costs.
        </p>

         <ScheduleDemoButton/>
      </div>
    </section>
  );
}
