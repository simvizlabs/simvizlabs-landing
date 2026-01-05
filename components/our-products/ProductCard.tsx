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
        "bg-[#f5f5f7] flex flex-col items-center justify-between rounded-[24px] px-[40px] py-[60px] md:px-[83px] md:py-[72px] text-center h-full",
        className
      )}
    >
      <div className="flex flex-col items-center gap-[20px] w-full max-w-[600px]">
        <h3 className="text-[#191716] text-[32px] md:text-[48px] font-semibold leading-tight font-sans">
          {title}
        </h3>
        <p className="text-[#191716] text-[18px] md:text-[24px] leading-normal font-sans text-center max-w-[535px]">
          {description}
        </p>

        {buttons && buttons.length > 0 && (
          <div className="flex flex-wrap gap-[20px] md:gap-[30px] justify-center mt-2">
            {buttons.map((btn, index) => (
              <Button
                key={index}
                asChild
                className={cn(
                  "rounded-[24px] px-[28px] py-[15px] text-[17px] font-semibold transition-colors duration-200",
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

      <div className="relative w-full mt-[40px] md:mt-[60px] flex flex-col items-center gap-8">
        <div className="relative w-full aspect-[16/10] max-w-[800px]">
             <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-contain"
              priority
            />
        </div>

        {badgeSrc && (
          <div className="relative w-[200px] h-[65px] md:w-[260px] md:h-[85px]">
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
