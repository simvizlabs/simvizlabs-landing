import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import LearnMoreButton from "../MajorComponnts/LearnMoreButton";

export interface ProductCardProps {
  id?: string;
  title: string;
  description: string;
  imageSrc: string;
  badgeSrc?: string;
  className?: string;
  buttons?: {
    text: string;
    href?: string;
    onClick?: () => void;
    variant: "outline" | "solid";
    icon?: React.ReactNode;
    className?: string;
  }[];
  layoutId?: string;
  comingSoon?: string;
}

export function ProductCard({
  id,
  title,
  description,
  imageSrc,
  badgeSrc,
  className,
  buttons,
  layoutId,
  comingSoon,
}: ProductCardProps) {
  return (
    <motion.div
      layoutId={layoutId}
      className={cn(
        "bg-[#f5f5f7] flex flex-col items-center justify-between rounded-3xl px-4 py-6 md:px-6 md:py-8 text-center h-full",
        className
      )}
    >
      <div className="flex flex-col items-center gap-5 w-full max-w-xl">
        {comingSoon && (
          <motion.span
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#A4A4A4] text-xl md:text-2xl font-semibold uppercase tracking-wider -mb-3 block"
          >
            {comingSoon}
          </motion.span>
        )}
        <motion.h3
          layoutId={`title-${layoutId}`}
          className="text-[#191716] text-3xl md:text-5xl font-semibold leading-tight font-sans"
        >
          {title}
        </motion.h3>
        <motion.p
          layoutId={`desc-${layoutId}`}
          className="text-[#191716] text-lg md:text-2xl leading-normal font-sans text-center max-w-xl"
        >
          {description}
        </motion.p>

        {buttons && buttons.length > 0 && (
          <div className="flex flex-wrap md:flex-nowrap gap-4 md:gap-6 justify-center mt-2 w-full">
            {buttons.map((btn, index) => {
              if (btn.text === "Learn More") {
                return (
                  <LearnMoreButton
                    key={index}
                    onClick={btn.onClick}
                    className={btn.className}
                  />
                );
              }
              return (
                <Button
                  key={index}
                  asChild={!!btn.href}
                  onClick={btn.onClick}
                  className={cn(
                    "rounded-full px-8 py-4 text-lg font-semibold transition-colors duration-200 flex-shrink-0",
                    btn.variant === "outline"
                      ? "bg-transparent border border-[#1381e5] text-[#1381e5] hover:bg-[#1381e5]/10"
                      : "bg-[#1381e5] text-white hover:bg-[#106bc0]",
                    btn.className
                  )}
                >
                  {btn.href ? (
                    <Link href={btn.href}>
                      {btn.text} {btn.icon}
                    </Link>
                  ) : (
                    <span className="flex items-center rounded-full">{btn.text} {btn.icon}</span>
                  )}
                </Button>
              );
            })}
          </div>
        )}
      </div>

      <div className="relative w-full mt-12 md:mt-20 flex flex-col items-center gap-8">
        <motion.div
          layoutId={`image-${layoutId}`}
          className="relative w-full aspect-[16/10] max-w-5xl"
        >
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        {badgeSrc && (
          <div className="relative w-52 h-10 md:w-64 md:h-12">
            <Image
              src={badgeSrc}
              alt="App Store Badge"
              fill
              className="object-contain"
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}
