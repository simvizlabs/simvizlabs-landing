"use client";

import { ProductCard } from "@/components/our-products/ProductCard";
import { ProductHighlightCard } from "@/components/our-products/ProductHighlightCard";
import SimulatorProductsLarge from "@/components/our-products/SimulatorProductsLarge";
import { useState, useEffect, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";
import { useSearchParams } from "next/navigation";

export function OurProductsSection() {
  return (
    <Suspense fallback={<div>Loading products...</div>}>
      <OurProductsContent />
    </Suspense>
  );
}

function OurProductsContent() {
  const searchParams = useSearchParams();
  const [expandedId, setExpandedId] = useState<string | null>("");

  useEffect(() => {
    const productId = searchParams.get("product");
    if (productId && ["a320", "b737", "b747"].includes(productId)) {
      handleLearnMore(productId);
    }
  }, [searchParams]);

  const appStoreBadge = "/app_store_badge.png";

  const products = {
    a320: {
      id: "a320",
      imageSrc: "/assets/our-products/a320-simulator.png",
      content: {
        headImage: "/assets/our-products/a320/a320_simualtor_landscape.png",
        title: "A320 FMS Simulator",
        description: "Aircraft-level A320 FMGC training with accurate managed/selected automation, CPDLC, and airline-specific ACARS workflows.",
        buttons: [
          {
            text: "Watch Demo",
            class: "rounded-full px-10 py-7 text-lg font-semibold border-black/10 text-black hover:bg-black/5 transition-all bg-white/50 backdrop-blur-sm shadow-sm",
            variant: "outline" as const,
            onClick: () => { window.location.href = "/demo"; }
          },
          {
            text: "Contact Us",
            onClick: () => { setExpandedId(null); },
            class: "rounded-full px-10 py-7 text-lg font-semibold bg-[#3b82f6] hover:bg-[#2563eb] text-white flex items-center gap-2 transition-all shadow-lg shadow-blue-500/20",
            variant: "default" as const,
            icon: <ChevronUp className="w-5 h-5" />
          }
        ],
        subtitle: "High-fidelity A320 FMS Simulator built to aircraft-level accuracy:",
        subscriptionContentIncluded: true,
      },
      featureCards: [
        { title: "Precise FMGC simulation", description: "Performance calculations, flight planning, and automation logic matches real A320 FMGC." },
        { title: "AI-powered CPDLC", description: "Master datalink clearances and controller communications with intelligent guidance." },
        { title: "Customizable ACARS module", description: "Configurable AOC menus tailored to your airline's specific dispatch procedures." },
        { title: "FCU and FMA training", description: "Master Flight Control Unit operations and Flight Mode Annunciator interpretation." },
        { title: "Integrated airbus systems", description: "Learn how FMGC, FCU, datalink, flight guidance (AP/FD/A-THR) integrate." }
      ]
    },
    b737: {
      id: "b737",
      imageSrc: "/assets/our-products/eda6f0f09e9c208ab7cefc56ddfa2662695ae550.png",
      content: {
        headImage: "/assets/our-products/b737/b737_simulator_landscape.png",
        title: "B737 FMS Simulator",
        description: "Realistic B737 FMC and MCP training focused on precise LNAV/VNAV logic, CDU workflows, and line-operations realism.",
        rotateImage: "90",
        buttons: [
          {
            text: "Watch Demo",
            class: "rounded-full px-10 py-7 text-lg font-semibold border-black/10 text-black hover:bg-black/5 transition-all bg-white/50 backdrop-blur-sm shadow-sm",
            variant: "outline" as const,
            onClick: () => { window.location.href = "/demo"; }
          },
          {
            text: "Contact Us",
            onClick: () => { setExpandedId(null); },
            class: "rounded-full px-10 py-7 text-lg font-semibold bg-[#3b82f6] hover:bg-[#2563eb] text-white flex items-center gap-2 transition-all shadow-lg shadow-blue-500/20",
            variant: "default" as const,
            icon: <ChevronUp className="w-5 h-5" />
          }
        ],
        subtitle: "Industry-leading B737 FMC training for professional pilots:",
        subscriptionContentIncluded: false,
      },
      featureCards: [
        { title: "Precise FMC simulation", description: "Performance calculations, flight planning, and automation logic that matches the real B737 FMC, including LNAV/VNAV modes and CDU programming" },
        { title: "AI-powered CPDLC", description: "Master datalink clearances, route amendments, and controller communications with intelligent guidance through the CDU interface." },
        { title: "Customizable ACARS module", description: "Configurable AOC menus tailored to your airline's specific dispatch procedures, message formats, and operational workflows via CDU." },
        { title: "MCP and FMA training", description: "Master Mode Control Panel operations and Flight Mode Annunciator interpretation for precise auto flight understanding in complex terminal environments and for each phase of flight." },
        { title: "Integrated boeing systems", description: "Learn how FMC, MCP, datalink, flight guidance (autopilot/autothrottle), and aircraft systems work together in realistic airline operations." }
      ]
    },
    b747: {
      id: "b747",
      imageSrc: "/assets/our-products/b0738e33683cda336533d7d62466166f6fa760af.png",
      content: {
        headImage: "/assets/our-products/b747/b747_simulator_landscape.png",
        title: "B747 FMS Simulator",
        description: "High-fidelity B747 FMC training designed for long-range navigation, complex automation, and wide-body airline operations.",
        rotateImage: "90",

        buttons: [
          {
            text: "Watch Demo",
            class: "rounded-full px-10 py-7 text-lg font-semibold border-black/10 text-black hover:bg-black/5 transition-all bg-white/50 backdrop-blur-sm shadow-sm",
            variant: "outline" as const,
            onClick: () => { window.location.href = "/demo"; }
          },
          {
            text: "Contact Us",
            onClick: () => { setExpandedId(null); },
            class: "rounded-full px-10 py-7 text-lg font-semibold bg-[#3b82f6] hover:bg-[#2563eb] text-white flex items-center gap-2 transition-all shadow-lg shadow-blue-500/20",
            variant: "default" as const,
            icon: <ChevronUp className="w-5 h-5" />
          }
        ],
        subtitle: "Master the Queen of the Skies with advanced FMS simulation:",
        subscriptionContentIncluded: false,
      },
      featureCards: [
        { title: "Precise FMC simulation", description: "Performance calculations, flight planning, and automation logic that matches the real B747 FMC, including long-range navigation planning and CDU operations." },
        { title: "AI-powered CPDLC", description: "Master datalink clearances, route amendments, and controller communications with intelligent guidance through the CDU interface." },
        { title: "Customizable ACARS module", description: "Configurable AOC menus tailored to your airline's specific dispatch procedures, message formats, and operational workflows via CDU." },
        { title: "MCP and FMA training", description: "Master Mode Control Panel operations and Flight Mode Annunciator interpretation for precise auto flight understanding in complex terminal environments and for each phase of flight." },
        { title: "Integrated boeing systems", description: "Learn how FMC, MCP, datalink, flight guidance (autopilot/autothrottle), and complex aircraft systems work together in realistic wide-body operations." }
      ]
    }
  };

  const handleLearnMore = (id: string) => {
    setExpandedId(id);
    // Smooth scroll to top of section when expanding
    const element = document.getElementById('our-products-heading');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="w-full py-20 px-4 md:px-8 bg-white relative overflow-hidden" id="our-products-section">
      <div className="max-w-[1400px] mx-auto space-y-20">
        <div className="flex flex-col items-center text-center space-y-6" id="our-products-heading">
          <h2 className="text-4xl md:text-6xl font-bold text-black tracking-tight">
            Our Products
          </h2>
          {/* <p className="text-xl text-black/60 max-w-2xl">
            Experience flight simulation like never before with our high-fidelity tools.
          </p> */}
        </div>

        <div className="flex flex-col gap-12">
          {/* A320 Row */}
          <div className="w-full">
            <AnimatePresence mode="wait">
              {expandedId === "a320" ? (
                <motion.div
                  key="a320-large"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                >
                  <SimulatorProductsLarge
                    layoutId="a320"
                    content={products.a320.content}
                    featureCards={products.a320.featureCards}
                    headImage={products.a320.content.headImage}
                    onClose={() => setExpandedId(null)}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="a320-preview"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <ProductHighlightCard
                    layoutId="a320"
                    title={products.a320.content.title}
                    description={products.a320.content.description}
                    imageSrc={products.a320.imageSrc}
                    badgeSrc={appStoreBadge}
                    primaryButton={{
                      text: "Learn More",
                      onClick: () => handleLearnMore("a320"),
                      icon: <ChevronDown className="w-5 h-5" />,
                      className: "px-10 py-7 text-lg font-semibold"
                    }}
                    secondaryButton={{
                      text: "Watch Demo",
                      href: "#",
                      className: "px-10 py-7 text-lg font-semibold"
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Grid or Rows for B737 and B747 */}
          {expandedId === "a320" || expandedId === null ? (
            <motion.div
              layout
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12"
            >
              {[products.b737, products.b747].map(product => (
                <ProductCard
                  key={product.id}
                  layoutId={product.id}
                  title={product.content.title}
                  description={product.content.description}
                  imageSrc={product.imageSrc}
                  badgeSrc={appStoreBadge}
                  buttons={[
                    {
                      text: "Watch Demo",
                      href: "#",
                      variant: "outline",
                      className: "px-8 py-6 text-base md:px-10 md:py-7 md:text-lg"
                    },
                    {
                      text: "Learn More",
                      variant: "solid",
                      onClick: () => handleLearnMore(product.id),
                      icon: <ChevronDown className="w-5 h-5" />,
                      className: "px-8 py-6 text-base md:px-10 md:py-7 md:text-lg"
                    },
                  ]}
                />
              ))}
            </motion.div>
          ) : (
            <div className="flex flex-col gap-12">
              {[products.b737, products.b747].map(product => (
                <div key={product.id} className="w-full">
                  <AnimatePresence mode="wait">
                    {expandedId === product.id ? (
                      <motion.div
                        key={`${product.id}-large`}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.4 }}
                      >
                        <SimulatorProductsLarge
                          layoutId={product.id}
                          content={product.content}
                          featureCards={product.featureCards}
                          headImage={product.content.headImage}
                          onClose={() => setExpandedId(null)}
                        />
                      </motion.div>
                    ) : (
                      <motion.div
                        key={`${product.id}-preview`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <ProductHighlightCard
                          layoutId={product.id}
                          title={product.content.title}
                          description={product.content.description}
                          imageSrc={product.imageSrc}
                          badgeSrc={appStoreBadge}
                          primaryButton={{
                            text: "Learn More",
                            onClick: () => handleLearnMore(product.id),
                          }}
                          secondaryButton={{
                            text: "Watch Demo",
                            href: "#",
                          }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
