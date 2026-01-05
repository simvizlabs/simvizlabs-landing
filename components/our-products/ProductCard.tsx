import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export interface ProductCardProps {
  title: string;
  description: string;
  imageSrc: string;
  badgeSrc?: string;
  className?: string;
  buttons?: {
    text: string;
    href?: string;
    variant: "outline" | "solid";
    icon?: React.ReactNode;
  }[];
}

export function ProductCard({
  title,
  description,
  imageSrc,
  badgeSrc,
  className,
  buttons,
}: ProductCardProps) {
  return (
    <div
      className={cn(
        "bg-[#f5f5f7] flex flex-col items-center justify-between rounded-3xl px-4 py-6 md:px-6 md:py-8 text-center h-full",
        className
      )}
    >
      <div className="flex flex-col items-center gap-5 w-full max-w-xl">
        <h3 className="text-[#191716] text-3xl md:text-5xl font-semibold leading-tight font-sans">
          {title}
        </h3>
        <p className="text-[#191716] text-lg md:text-2xl leading-normal font-sans text-center max-w-xl">
          {description}
        </p>

        {buttons && buttons.length > 0 && (
          <div className="flex flex-wrap gap-5 md:gap-8 justify-center mt-2">
            {buttons.map((btn, index) => (
              <Button
                key={index}
                asChild
                className={cn(
                  "rounded-3xl px-8 py-4 text-lg font-semibold transition-colors duration-200",
                  btn.variant === "outline"
                    ? "bg-transparent border border-[#1381e5] text-[#1381e5] hover:bg-[#1381e5]/10"
                    : "bg-[#1381e5] text-white hover:bg-[#106bc0]"
                )}
              >
                <Link href={btn.href || "#"}>
                  {btn.text} {btn.icon}
                </Link>
              </Button>
            ))}
          </div>
        )}
      </div>

      <div className="relative w-full mt-12 md:mt-20 flex flex-col items-center gap-8">
        <div className="relative w-full aspect-[16/10] max-w-5xl">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-contain"
            priority
          />
        </div>

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
    </div>
  );
}
