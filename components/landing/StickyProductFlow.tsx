"use client";

import React, { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
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

function ProductImage({ 
  product, 
  priority, 
  scrollProgress, 
  isActive 
}: { 
  product: ProductData; 
  priority: boolean;
  scrollProgress: MotionValue<number>;
  isActive: MotionValue<number>;
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Check if image is already in cache on mount
  useEffect(() => {
    if (imgRef.current?.complete) {
      setIsLoaded(true);
    }
  }, []);

  // Create snapping scale effect - snaps to full scale when active
  const imageScale = useTransform(
    isActive,
    [0, 0.5, 1],
    [0.96, 1.02, 1],
    { clamp: false }
  );

  // Add a subtle bounce/snap effect when becoming active
  const snapY = useTransform(
    isActive,
    [0, 0.3, 0.6, 1],
    [0, -5, 2, 0],
    { clamp: false }
  );

  return (
    <div className="relative w-full flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{
          opacity: isLoaded ? 1 : 0,
        }}
        transition={{ 
          duration: 0.5, 
          ease: [0.25, 0.1, 0.25, 1],
          opacity: { duration: 0.4 }
        }}
        style={{ 
          scale: imageScale,
          y: snapY,
          willChange: 'opacity, transform',
        }}
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
  const [viewportHeight, setViewportHeight] = useState(0);
  const [shouldSnap, setShouldSnap] = useState(false);
  
  // Threshold in pixels - snap effect will only work below this height
  const SNAP_THRESHOLD = 768; // Adjust this value as needed (e.g., 768px, 1024px)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Track viewport height and determine if snap should be enabled
  useEffect(() => {
    const updateViewportHeight = () => {
      const height = window.innerHeight;
      setViewportHeight(height);
      setShouldSnap(height <= SNAP_THRESHOLD);
    };

    // Set initial value
    updateViewportHeight();

    // Listen for resize events
    window.addEventListener('resize', updateViewportHeight);
    
    return () => {
      window.removeEventListener('resize', updateViewportHeight);
    };
  }, [SNAP_THRESHOLD]);

  // Create transforms for each product - fade in then fade out as next appears
  const getProductStyles = (index: number) => {
    const step = 1 / products.length;
    const start = index * step;
    const end = start + step;

    let opacity: MotionValue<number>;
    let y: MotionValue<number>;
    let scale: MotionValue<number>;
    // Smooth transition buffer - increased for smoother crossfades
    // Overlapping transition: 15% transition duration for smoother blending
    const transitionDuration = 0.15; 
    const halfDuration = transitionDuration / 2;

    let isActive: MotionValue<number>;
    
    if (index === 0) {
      // First item starts visible, disappears instantly at end
      // Disappears instantly at end point
      opacity = useTransform(
        scrollYProgress,
        [end, end + 0.001],
        [1, 0],
        { clamp: false }
      );
      y = useTransform(
        scrollYProgress,
        [end - halfDuration, end + halfDuration],
        [0, -20],
        { clamp: false }
      );
      scale = useTransform(
        scrollYProgress,
        [end - halfDuration, end + halfDuration],
        [1, 0.96],
        { clamp: false }
      );
      // First item is active from start until it disappears instantly
      isActive = useTransform(
        scrollYProgress,
        [0, end, end + 0.001],
        [1, 1, 0],
        { clamp: false }
      );
    } else if (index === products.length - 1) {
      // Last item appears instantly
      // Appears instantly at start point
      opacity = useTransform(
        scrollYProgress,
        [start, start + 0.001],
        [0, 1],
        { clamp: false }
      );
      y = useTransform(
        scrollYProgress,
        [start - halfDuration, start + halfDuration],
        [20, 0],
        { clamp: false }
      );
      scale = useTransform(
        scrollYProgress,
        [start - halfDuration, start + halfDuration],
        [0.96, 1],
        { clamp: false }
      );
      // Last item is active once it's fully visible
      isActive = useTransform(
        scrollYProgress,
        [start, start + 0.001, 1],
        [0, 1, 1],
        { clamp: false }
      );
    } else {
      // Middle items appear instantly when they start, disappear instantly at end
      opacity = useTransform(
        scrollYProgress,
        [
          start, start + 0.001,
          end, end + 0.001
        ],
        [0, 1, 1, 0],
        { clamp: false }
      );
      y = useTransform(
        scrollYProgress,
        [
          start - halfDuration, start + halfDuration,
          end - halfDuration, end + halfDuration
        ],
        [20, 0, 0, -20],
        { clamp: false }
      );
      scale = useTransform(
        scrollYProgress,
        [
          start - halfDuration, start + halfDuration, // Entry
          end - halfDuration, end + halfDuration      // Exit
        ],
        [0.96, 1, 1, 0.96],
        { clamp: false }
      );
      // Middle items are active when they appear instantly until they disappear instantly
      isActive = useTransform(
        scrollYProgress,
        [
          start, start + 0.001,
          end, end + 0.001
        ],
        [0, 1, 1, 0],
        { clamp: false }
      );
    }

    const pointerEvents = useTransform(
      opacity,
      (o) => (o > 0.1 ? ("auto" as const) : ("none" as const))
    );

    return { opacity, y, scale, pointerEvents, isActive };
  };

  return (
    <div
      ref={containerRef}
      style={{ height: `${products.length * 125}vh` }}
      className={`relative bg-black ${shouldSnap ? 'snap-y snap-mandatory' : ''}`}
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
                      scale: styles.scale,
                      pointerEvents: styles.pointerEvents,
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      willChange: 'opacity, transform',
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

                    <ProductImage 
                      product={product} 
                      priority={index <= 1}
                      scrollProgress={scrollYProgress}
                      isActive={styles.isActive}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      {/* Scroll Snap Targets - Proper scroll sections for snap effect */}
      {products.map((_, index) => {
        return (
          <div
            key={`snap-${index}`}
            className={shouldSnap ? 'snap-start' : ''}
            style={{
              height: '125vh',
              position: 'relative'
            }}
          />
        );
      })}
    </div>
  );
}
