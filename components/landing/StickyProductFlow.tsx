"use client";

import React, { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion, MotionValue, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface ProductData {
  id: string;
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

function ProductImage({ product, priority }: { product: ProductData, priority: boolean }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Check if image is already in cache on mount
  useEffect(() => {
    if (imgRef.current?.complete) {
      setIsLoaded(true);
    }
  }, []);

  return (
    <div className="relative w-full flex justify-center items-center">
      {/* Skeleton / Placeholder */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            key="skeleton"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: [0.4, 0.6, 0.4] }}
            exit={{ opacity: 0 }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 z-0 flex items-center justify-center"
          >
            <div className="w-[80vw] max-w-[800px] aspect-[16/10] bg-white/5 rounded-3xl backdrop-blur-sm border border-white/10" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{
          opacity: isLoaded ? 1 : 0,
          scale: isLoaded ? 1 : 0.95
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full flex justify-center"
      >
        <Image
          ref={imgRef}
          src={product.image}
          alt={product.title}
          width={1200}
          height={800}
          onLoad={() => setIsLoaded(true)}
          className="w-auto h-auto relative scale-[1.5] left-[25px] sm:scale-[1.5] lg:scale-[2] md:max-w-full md:max-h-[50vh]"
        // priority={priority}
        />
      </motion.div>
    </div>
  );
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

    let opacity: MotionValue<number>;
    let y: MotionValue<number>;

    // Sharp boundaries for "immediate" appearance
    const epsilon = 0.001;

    if (index === 0) {
      // First item starts visible, stays visible until its end, then instantly disappears
      opacity = useTransform(
        scrollYProgress,
        [0, end - epsilon, end],
        [1, 1, 0]
      );
      y = useTransform(
        scrollYProgress,
        [0, end - epsilon, end],
        [0, 0, -20]
      );
    } else if (index === products.length - 1) {
      // Last item instantly appears at its start, stays visible
      opacity = useTransform(
        scrollYProgress,
        [start - epsilon, start, 1],
        [0, 1, 1]
      );
      y = useTransform(
        scrollYProgress,
        [start - epsilon, start],
        [20, 0]
      );
    } else {
      // Middle items instantly appear and disappear at their boundaries
      opacity = useTransform(
        scrollYProgress,
        [start - epsilon, start, end - epsilon, end],
        [0, 1, 1, 0]
      );
      y = useTransform(
        scrollYProgress,
        [start - epsilon, start, end - epsilon, end],
        [20, 0, 0, -20]
      );
    }

    const pointerEvents = useTransform(
      opacity,
      (o) => (o > 0.1 ? ("auto" as const) : ("none" as const))
    );

    return { opacity, y, pointerEvents };
  };

  return (
    <div
      ref={containerRef}
      style={{ height: `${products.length * 250}vh` }}
      className="relative bg-black"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <section className="bg-black py-4 md:py-12 text-white overflow-hidden h-full w-full relative">
          <div className="mx-auto px-4 sm:px-8 h-full flex flex-col">
            <div className="relative h-full w-full max-w-[1600px] mx-auto">
              {products.map((product, index) => {
                const styles = getProductStyles(index);
                return (
                  <motion.div
                    key={index}
                    style={{
                      opacity: styles.opacity,
                      y: styles.y,
                      pointerEvents: styles.pointerEvents,
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    className="px-4"
                  >
                    {/* Text Content */}
                    <div className="flex flex-col items-center gap-3 md:gap-4 text-center mb-8 md:mb-12 z-10">
                      {product.isComingSoon && (
                        <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-[10px] md:text-xs font-medium text-[#0099FF] backdrop-blur-sm">
                          Launching Soon
                        </span>
                      )}
                      <div>
                        <p className="text-sm md:text-lg font-medium text-white/60 mb-1">{product.subtitle}</p>
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">{product.title}</h2>
                      </div>
                      {product.description && (
                        <p className="text-sm md:text-base text-white/70 max-w-lg mx-auto hidden sm:block">
                          {product.description}
                        </p>
                      )}
                      {!product.isComingSoon && (
                        <Button asChild className="bg-[#0099FF] text-white hover:bg-[#007acc] cursor-pointer rounded-full px-6 h-9 md:h-10 text-xs md:text-sm mt-2">
                          <Link href={`/our-products?product=${product.id}`}>
                            Learn More
                          </Link>
                        </Button>
                      )}
                    </div>

                    <ProductImage product={product} priority={index <= 1} />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
