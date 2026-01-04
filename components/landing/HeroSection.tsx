import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
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
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
          Train smarter. Fly safer.
          <br />
          Operate with precision.
        </h1>
        
        <p className="mt-6 max-w-2xl text-lg text-white/90 sm:text-xl">
          Boost pilot readiness. Elevate operational confidence. Cut simulator costs.
        </p>

        <div className="mt-10">
          <Button 
            size="lg" 
            className="h-12 bg-[#0099FF] text-white hover:bg-[#007acc] px-8 text-base font-semibold rounded-full"
          >
            Schedule a Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
