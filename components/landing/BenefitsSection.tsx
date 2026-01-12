import Image from "next/image";
import { Check } from "lucide-react";

const benefits = [
  {
    title: "Reduce simulator hours & costs",
    description: "More learning before you sit in the simulator. Smarter prep = less wasted time.",
  },
  {
    title: "Build proficiency on real automation workflows",
    description: "Hands-on practice with true FMC logic and CPDLC exchanges—not screenshots.",
  },
  {
    title: "Worldwide ARINC 424 navigation Database to power realistic, route-accurate scenarios and procedures.",
    description: "",
  },
];

export function BenefitsSection() {
  return (
    <section
      className="relative w-full pt-20 sm: pb-[15rem] md:pb-[15rem] lg:pb-[35rem] sm:mx-auto  md:py-24 overflow-hidden"
      style={{
        background: 'radial-gradient(170.74% 170.74% at 50% -101.23%, #FFF 36.45%, #C1E1FF 42%, #F5F5F7 100%)'
      }}
    >
      {/* Background Image */}
      <div className="absolute hidden sm:block text-center text-bottom sm:top-[10rem] md:top-[8rem] right-[calc(100%-45rem)] sm:right-[-22rem] md:right-[-10rem] lg:right-[-15rem] md:top-0 scale-[1.2] md:scale-[2] lg:scale-[3] w-full md:w-1/2 h-full z-0 md:opacity-100 pointer-events-none">
        <Image
          src="/landing/bg-benefits.png"
          alt="Benefits Background"
          fill
          className="object-contain object-right"
        />
      </div>

      <div className="relative z-10 mx-auto px-4 sm:px-8">
        <h2 className="mb-10 sm:mb-16 max-w-2xl text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl">
          Train Smarter with Real Airline Systems.
        </h2>

        <div className="flex flex-col gap-6 max-w-4xl">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-black text-black mt-1">
                <Check className="h-3.5 w-3.5" />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-bold text-black">
                  {benefit.title}
                </h3>
                {benefit.description && (
                  <span className="text-black/70 leading-relaxed text-sm sm:text-base">
                    {benefit.description}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
