import { ProductCard } from "@/components/our-products/ProductCard";

export function OurProductsSection() {
  const b737Image = "/assets/our-products/eda6f0f09e9c208ab7cefc56ddfa2662695ae550.png";
  const b747Image = "/assets/our-products/b0738e33683cda336533d7d62466166f6fa760af.png";
  const appStoreBadge = "/assets/our-products/693648afe6672bb65b4e6a81157e261998467376.png";

  return (
    <section className="w-full py-20 px-4 md:px-8 bg-black">
      <div className="max-w-[1400px] mx-auto space-y-20">
        <div className="flex flex-col items-center text-center space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Our Products
          </h2>
          <p className="text-xl text-white/60 max-w-2xl">
            Experience flight simulation like never before with our high-fidelity tools.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* B737 Card - Node 2052:3168 */}
          <ProductCard
            title="B737 FMS Simulator"
            description="Realistic B737 FMC and MCP training focused on precise LNAV/VNAV logic, CDU workflows, and line-operations realism."
            imageSrc={b737Image}
            badgeSrc={appStoreBadge}
            buttons={[
              {
                text: "Watch Demo",
                href: "#",
                variant: "outline",
              },
              {
                text: "Download",
                href: "#",
                variant: "solid",
              },
            ]}
          />

            {/* B747 Card - Node 2052:3178 */}
          <ProductCard
            title="B747 FMS Simulator"
            description="High-fidelity B747 FMC training designed for long-range navigation, complex automation, and wide-body airline operations."
            imageSrc={b747Image}
            badgeSrc={appStoreBadge}
            buttons={[
              {
                text: "Learn More",
                href: "#",
                variant: "outline",
                icon: <span className="ml-2">→</span>,
              },
              {
                text: "Download",
                href: "#",
                variant: "solid",
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
