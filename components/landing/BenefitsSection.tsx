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
    title: "Real 424 Data for actual scenarios",
    description: "Specific for your flying environment.",
  },
];

export function BenefitsSection() {
  return (
    <section className="relative w-full py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
             <Image 
                src="/landing/bg-benefits.png" 
                alt="Background" 
                fill
                className="object-cover opacity-30"
            />
             <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />
             <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent" />
        </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-8">
        <h2 className="mb-16 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
          Train Smarter with Real Airline Systems.
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* We map the benefits visually similarly to the design. 
                The design has them in a vertical stack or grid. We use grid for cleanliness. */}
            <div className="space-y-8">
               {benefits.map((benefit, index) => (
                    <div key={index} className="flex gap-4">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0099FF] text-white">
                           <Check className="h-5 w-5" />
                        </div>
                        <div>
                            <h3 className="mb-2 text-xl font-semibold text-white">
                                {benefit.title}
                            </h3>
                            <p className="text-white/70">
                                {benefit.description}
                            </p>
                        </div>
                    </div>
               ))}
            </div>
        </div>
      </div>
    </section>
  );
}
