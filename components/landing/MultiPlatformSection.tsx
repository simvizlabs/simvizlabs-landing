import { cn } from "@/lib/utils";

export function MultiPlatformSection() {
  return (
    <section className="bg-white max-w-7xl px-6 sm:px-12 md:pl-16 lg:pl-24  items-start py-12 sm:py-16 md:py-24 text-black min-h-full">
      <div className="container">
        <div className="max-w-7xl ">
          <h2 className="mb-6 sm:mb-8 text-3xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            One Platform. <br /> Real Workflows. <br /> Real Results.
          </h2>
          <p className="text-base sm:text-lg text-black/80 leading-relaxed">
            Forget static slides and screenshots. SimViz Labs brings real aviation
            systems—FMS, CPDLC, ACARS into fully interactive, data-driven
            training experiences. Built for airlines, flight schools, and
            type-rating organizations who want pilots and crews ready for the
            real world, not just the test.
          </p>
        </div>
      </div>
    </section>
  );
}
