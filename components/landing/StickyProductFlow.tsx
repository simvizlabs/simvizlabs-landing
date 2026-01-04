"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface ProductData {
  title: string;
  subtitle: string;
  description?: string;
  image: string;
  orientation?: "left" | "right";
  isComingSoon?: boolean;
}

interface StickyProductFlowProps {
  products: ProductData[];
}

export function StickyProductFlow({ products }: StickyProductFlowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Create transforms for each product - fade in then fade out as next appears
  const getProductStyles = (index: number) => {
    const step = 1 / products.length;
    const start = index * step;
    const end = start + step;
    
    // Fade transitions with overlap
    const fadeInStart = Math.max(0, start - step * 0.3);
    const fadeInEnd = start + step * 0.2;
    const fadeOutStart = end - step * 0.3;
    const fadeOutEnd = Math.min(1, end + step * 0.1);

    let opacity: MotionValue<number>;
    let y: MotionValue<number>;

    if (index === 0) {
      // First item starts visible, fades out towards the end of its slot
      opacity = useTransform(
        scrollYProgress,
        [0, fadeOutStart, fadeOutEnd],
        [1, 1, 0]
      );
      y = useTransform(
        scrollYProgress,
        [0, fadeOutEnd],
        [0, -30]
      );
    } else if (index === products.length - 1) {
      // Last item fades in, stays visible
      opacity = useTransform(
        scrollYProgress,
        [fadeInStart, fadeInEnd, 1],
        [0, 1, 1]
      );
      y = useTransform(
        scrollYProgress,
        [fadeInStart, fadeInEnd],
        [50, 0]
      );
    } else {
      // Middle items fade in then fade out
      opacity = useTransform(
        scrollYProgress,
        [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
        [0, 1, 1, 0]
      );
      y = useTransform(
        scrollYProgress,
        [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
        [50, 0, 0, -30]
      );
    }

    return { opacity, y };
  };

  return (
    <div 
      ref={containerRef} 
      style={{ height: `${products.length * 100}vh` }} 
      className="relative bg-black"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <section className="bg-black py-24 text-white overflow-hidden h-full w-full">
          <div className="container mx-auto px-4 sm:px-8 h-full">
            <div className="flex flex-col items-center justify-center gap-16 h-full">
              {/* Text Content - Animated per product */}
              <div className="flex-0 space-y-4 text-center z-10 relative h-32 md:h-40 mt-16">
                {products.map((product, index) => {
                  const styles = getProductStyles(index);
                  return (
                    <motion.div
                      key={`text-${index}`}
                      style={{
                        opacity: styles.opacity,
                        y: styles.y,
                        position: 'absolute',
                        left: 0,
                        right: 0,
                      }}
                      className="flex flex-col items-center gap-2"
                    >
                      {product.isComingSoon && (
                        <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-medium text-[#0099FF] backdrop-blur-sm">
                          Launching Soon
                        </span>
                      )}
                      <div>
                        <p className="text-lg font-medium text-white/60 mb-1">{product.subtitle}</p>
                        <h2 className="text-3xl font-bold leading-tight sm:text-4xl">{product.title}</h2>
                      </div>
                      {product.description && (
                        <p className="text-base text-white/70 max-w-lg mx-auto">
                          {product.description}
                        </p>
                      )}
                      {!product.isComingSoon && (
                        <Button className="bg-[#0099FF] text-white hover:bg-[#007acc] rounded-full px-8 h-10 text-sm">
                          Learn More
                        </Button>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Product Image - Animated per product */}
              <div className="flex-1 w-full flex justify-center items-center relative" style={{ minHeight: '400px' }}>
                {products.map((product, index) => {
                  const styles = getProductStyles(index);
                  return (
                    <motion.div
                      key={`image-${index}`}
                      style={{
                        opacity: styles.opacity,
                        y: styles.y,
                        position: 'absolute',
                        inset: 0,
                      }}
                      className="flex items-center justify-center"
                    >
                      <Image 
                        src={product.image} 
                        alt={product.title}
                        width={800}
                        height={600}
                        className="w-full max-w-[700px] h-auto object-contain" 
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
