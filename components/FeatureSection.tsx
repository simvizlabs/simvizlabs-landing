import Image from 'next/image';
import { Badge } from "@/components/ui/badge";
import { HovermeButtonDemo } from '@/components/eldoraui/hoverme';

interface FeatureSectionProps {
  description?: string;
  id?: string;
}

interface Feature {
  name: string;
  description: string;
  icon: React.ElementType;
}

const features: Feature[] = [
]

const FeatureSection = ({
  description = "Revolutionize Distance learning pilot training with LMS containing interactive playground, Event-based analytics & Data-driven solutions.",
}: FeatureSectionProps) => {
  return (
    <section id="feature108" className="py-16">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="px-4 py-1 rounded-full border border-foreground/10 hover:border-foreground/15 backdrop-blur-lg cursor-pointer flex items-center gap-2.5 select-none w-max mx-auto">
            <div className="bg-[linear-gradient(110deg,#808080,45%,#D3D3D3,55%,#808080)] bg-[length:250%_100%] bg-clip-text animate-background-shine text-transparent font-medium text-sm font-geist">
                Next-Gen Aviation Solutions
            </div>
          </div>
          <h1 className="max-w-2xl text-3xl font-geist font-bold xs:text-4xl sm:text-6xl lg:text-[2.75rem] xl:text-5xl bg-gradient-to-r from-black to-gray-800 text-transparent bg-clip-text">
            Our Products and Solutions
          </h1>
          <p className="text-muted-foreground text-lg font-geist leading-relaxed max-w-[60ch]">{description}</p>
        </div>
        {/* <div className="mx-auto mt-8 max-w-screen-xl rounded-2xl bg-muted/70 p-6 lg:p-16">
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
              className="rounded-xl w-full"
              style={{ order: 1 }}
              width={1024}
              height={1024}
            />
          </div>
        </div> */}
        {/* <div className="mx-auto mt-8 max-w-screen-xl rounded-2xl bg-muted/70 p-6 lg:p-16">
          <div className="grid place-items-center gap-20 lg:grid-cols-2 lg:gap-10">
            <Image
              src="/images/schools.png"
              alt="schools"
              className="rounded-xl w-full"
              style={{ order: 0 }}
              width={1024}
              height={1024}
            />
            <div className="flex flex-col gap-5">
              <Badge variant="outline" className="w-fit bg-background">
               For Schools and Airlines
              </Badge>
              <h3 className="text-3xl font-bold lg:text-4xl">
              Elevate Training Standards Across All Operations
              </h3>
              <p className="text-muted-foreground lg:text-lg">
              Seamlessly integrate our high-fidelity simulators, adaptive LMS modules, and data-driven scenario training into your programs—designed to accelerate pilot readiness, standardize airline procedures, and modernize aviation academy curricula.
              </p>
              <Button className="mt-2.5 w-fit gap-2" size="lg" asChild>
                <Link href="/contact">Get in touch</Link>
              </Button>
            </div>
          </div>
        </div> */}
        <div className="overflow-hidden bg-white py-24 sm:py-24">
       <div className="mx-auto max-w-7xl md:px-6 lg:px-4">
         <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
           <div className="px-6 md:px-0" >
             <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
             
             <Badge variant="outline" className="w-fit bg-background text-sm lg:text-lg mb-4 font-geist">
               Airlines
             </Badge>
             <p className="mt-4 text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl font-geist">
             Enhance Your Training Ecosystem
             </p>
             <p className="my-6 text-base text-gray-600 lg:text-xl/8 font-geist">
             Seamlessly integrate our application with data-driven scenario training into your training curriculum. Identify knowledge gaps, standardize airline procedures, lower training costs.
             </p>
               <HovermeButtonDemo text="Learn More" href="/airlines" />
             <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none font-geist">
               {features.map((feature) => (
                 <div key={feature.name} className="relative pl-9">
                   <dt className="inline font-semibold text-gray-900 font-geist">
                     <feature.icon className="absolute top-1 left-1 size-5 text-indigo-600" aria-hidden="true" />
                     {feature.name}
                   </dt>{' '}
                   <dd className="inline font-geist">{feature.description}</dd>
                 </div>
               ))}
             </dl>
           </div>
         </div>
           <Image
             src="/images/airline.png"
             alt="Product screenshot"
             className="rounded-xl w-full"
             width={1024}
             height={1024}
           />
        </div>
      </div>

      <div className="mx-auto max-w-7xl md:px-6 lg:px-4 pt-32">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
         <div className="px-6 lg:px-0 order-1 lg:order-0">
           <Image
             src="/images/schools.png"
             alt="Product screenshot"
             className="rounded-xl w-full"
             width={1024}
             height={1024}
           />
         </div>
         <div className="px-6 md:pl-16 lg:pt-4 lg:pr-2 order-0 lg:order-1">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
             
             <Badge variant="outline" className="w-fit bg-background text-sm lg:text-lg mb-4 font-geist">
             Aeronautical Colleges
            </Badge>
             <p className="mt-4 text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl font-geist">
             Boost Your Students’ Career Success
             </p>
             
             <p className="my-6 text-base text-gray-600 lg:text-xl/8 font-geist">
             Give your students a competitive edge in airline interviews with our self-paced LMS course with an integrated FMS trainer. </p>
               <HovermeButtonDemo text="Learn More" href="/aeronautical-schools" className="w-full lg:w-fit" />
             <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none font-geist">
               {features.map((feature) => (
                 <div key={feature.name} className="relative pl-9">
                   <dt className="inline font-semibold text-gray-900 font-geist">
                     <feature.icon className="absolute top-1 left-1 size-5 text-indigo-600" aria-hidden="true" />
                     {feature.name}
                   </dt>{' '}
                   <dd className="inline font-geist">{feature.description}</dd>
                 </div>
               ))}
             </dl>
           </div>
         </div>
        </div>
      </div>
<div className="overflow-hidden bg-white py-24 sm:py-24">
       <div className="mx-auto max-w-7xl md:px-6 lg:px-4">
         <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
           <div className="px-6 md:px-0" >
             <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
             
             <Badge variant="outline" className="w-fit bg-background text-sm lg:text-lg mb-4 font-geist">
             Type Rating Schools
             </Badge>
             <p className="mt-4 text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl font-geist">
            Integrate our Customizable FMS Trainer Solution
             </p>
             <p className="my-6 text-base text-gray-600 lg:text-xl/8 font-geist">
             Bridge the gap between legacy and Next Generation FMC and MCP variants with our tailored training solutions.
             </p>
               <HovermeButtonDemo text="Learn More" href="/type-rating-schools" />
             <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none font-geist">
               {features.map((feature) => (
                 <div key={feature.name} className="relative pl-9">
                   <dt className="inline font-semibold text-gray-900 font-geist">
                     <feature.icon className="absolute top-1 left-1 size-5 text-indigo-600" aria-hidden="true" />
                     {feature.name}
                   </dt>{' '}
                   <dd className="inline font-geist">{feature.description}</dd>
                 </div>
               ))}
             </dl>
           </div>
         </div>
           <Image
             src="/images/airline.png"
             alt="Product screenshot"
             className="rounded-xl w-full"
             width={1024}
             height={1024}
           />
        </div>
      </div>
      </div>

      
    </div>
      </div>
    </section>
  );
}

export default FeatureSection;