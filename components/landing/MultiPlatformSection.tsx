import { cn } from "@/lib/utils";

export function MultiPlatformSection() {
  return (
    <section className="bg-black py-24 text-white">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-8 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            One Platform. Real Workflows. Real Results.
          </h2>
          <p className="text-lg text-white/80 sm:text-x leading-relaxed">
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
