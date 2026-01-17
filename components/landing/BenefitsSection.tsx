import Image from "next/image";
import { Check } from "lucide-react";

const benefits = [
  {
    title: "Reduce simulator hours & costs",
    description: <><p className="text-sm sm:text-base md:text-lg">More learning before you sit in the simulator. <br />Smarter prep = less wasted time.</p></>,
  },
  {
    title: "Build proficiency on real automation workflows",
    description: <><p className="text-sm sm:text-base md:text-lg">Hands-on practice with true FMC logic and CPDLC exchanges—not screenshots.</p></>,
  },
  {
    title: <>Worldwide ARINC 424 navigation Database to power realistic, <br />route-accurate scenarios and procedures.</>,
    description: "",
  },
];

export function BenefitsSection() {
  return (
    <section
      className="relative w-[100vw] h-[80vh] sm:h-[80vh] md:h-[100vh] pt-10 sm:mx-auto md:py-[15vh] overflow-hidden"
      style={{
        background: 'radial-gradient(170.74% 170.74% at 50% -101.23%, #FFF 36.45%, #C1E1FF 42%, #F5F5F7 100%)'
      }}
    >
      {/* <div className="flex max-w-7xl flex-col md:flex-row min-h-[60vh] md:min-h-[80vh] items-center">
         <div className="w-full md:w-1/2 px-6 sm:px-12 md:pl-16 lg:pl-24 py-12 md:py-20 flex flex-col z-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-black mb-10 md:mb-16">
            Train Smarter <br className="hidden sm:block" /> with Real <br className="" /> Airline Systems.
          </h2>

          <div className="flex flex-col gap-8 md:gap-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4 items-start group">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-black/20 text-black mt-1 group-hover:bg-black group-hover:text-white transition-colors">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold text-black leading-tight">
                    {benefit.title}
                  </h3>
                  {benefit.description && (
                    <div className="text-black/70 leading-relaxed text-base">
                      {benefit.description}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

         <div className="w-full md:w-1/2 relative h-[40vh] md:h-full flex items-end md:items-center justify-end overflow-visible">
          <div className="relative w-full h-full transform translate-y-10 md:translate-y-0 md:translate-x-10 lg:translate-x-20 scale-125 md:scale-150 lg:scale-[1.8]">
            <Image
              src="/landing/bg-benefits.png"
              alt="Real Airline Systems Simulation"
              fill
              className="object-contain object-right-bottom md:object-right"
              priority
            />
          </div>
        </div>
      </div> */}
      {/* Background Image */}
      <div className="absolute sm:block text-center text-bottom right-[-2vw] top-[10vh] sm:top-[15vh] md:top-[18vh] sm:right-[-2vw] md:right-[-5vw] lg:right-[0vw] lg:top-[10vh] w-[90vw] h-[90vh] z-0 md:opacity-100 pointer-events-none">
        <Image
          src="/landing/bg-benefits.png"
          alt="Benefits Background"
          fill
          className="object-contain object-right"
        />
      </div>

      <div className="relative z-10 max-w-[1440px] px-4 sm:px-8 md:px-24">
        <h2 className="mb-10 sm:mb-16 text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl">
          Train Smarter with <br /> Real Airline Systems.
        </h2>

        <div className="flex flex-col gap-6">
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
