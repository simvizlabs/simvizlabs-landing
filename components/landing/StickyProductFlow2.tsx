"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProductData {
  id: string;
  title: string;
  subtitle: string;
  description?: string;
  image: string;
  orientation?: "left" | "right";
  isComingSoon?: boolean;
}

interface StickyProductFlow2Props {
  products: ProductData[];
}

function ProductImage({ product, priority }: { product: ProductData, priority: boolean }) {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    if (imgRef.current?.complete) {
      setIsLoaded(true);
    }
  }, []);

  return (
    <div className="relative w-full flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{
          opacity: isLoaded ? 1 : 0,
          scale: isLoaded ? 1 : 0.95
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
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
          priority={priority}
        />
      </motion.div>
    </div>
  );
}

function ProductCard({
  product,
  index,
  total,
  progress,
}: {
  product: ProductData;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const step = 1 / total;
  const rangeStart = (index + 1) * step; 
  const rangeEnd = (index + 2) * step;   
  
  const scale = useTransform(
    progress,
    [rangeStart, rangeEnd],
    [1, 0.5]
  );
  
  const targetScale = index === total - 1 ? 1 : scale;

  return (
    <motion.div
      style={{
        scale: targetScale,
      }}
      className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-black border-t border-white/5"
    >
      <div className="relative w-full max-w-[1600px] h-full flex flex-col items-center justify-center px-4">
        {/* Content Container - Matches StickyProductFlow Structure */}
        
        {/* Text Content */}
        <div className="flex flex-col items-center gap-3 md:gap-4 text-center mb-8 md:mb-12 z-10">
           {product.isComingSoon && (
            <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-[10px] md:text-xs font-medium text-[#0099FF] backdrop-blur-sm">
              Launching Soon
            </span>
          )}
          <div>
                        <p className="text-sm md:text-lg font-medium text-white/60 mb-1">{product.subtitle}</p>
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight text-white">{product.title}</h2>
          </div>
          {product.description && (
            <p className="text-sm md:text-base text-white max-w-lg mx-auto hidden sm:block">
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

        {/* Image */}
        <ProductImage product={product} priority={index === 0} />
      </div>
    </motion.div>
  );
}


export function StickyProductFlow2({ products }: StickyProductFlow2Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div 
      ref={containerRef} 
      // Height needs to accommodate scrolling all items. 
      // N items * 100vh? 
      // Actually standard sticky wrapper usually is (N+1) * 100vh or similar to give scroll room.
      style={{ height: `${products.length * 100}vh` }}
      className="relative bg-black"
    >
      {products.map((product, i) => (
        <ProductCard
          key={product.id}
          product={product}
          index={i}
          total={products.length}
          progress={scrollYProgress}
        />
      ))}
    </div>
  );
}
