import { cn } from "@/lib/utils";
import { ProductDeviceMockup } from "./ProductDeviceMockup";
import { Button } from "@/components/ui/button";

interface ProductShowcaseProps {
  title: string;
  subtitle: string;
  description?: string;
  assets: {
    shadow: string;
    iPad: string;
    shadow1: string;
    iPad1: string;
    screen: string;
  };
  orientation?: "left" | "right";
  isComingSoon?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function ProductShowcase({
  title,
  subtitle,
  description,
  assets,
  orientation = "left",
  isComingSoon = false,
  className,
  style,
}: ProductShowcaseProps) {
  return (
    <section className={cn("bg-black py-24 text-white overflow-hidden", className)} style={style}>
      <div className="container mx-auto px-4 sm:px-8 h-full">
        <div className="flex flex-col items-center justify-center gap-8 h-full">
          {/* Text Content */}
          <div className="flex-0 space-y-4 text-center z-10">
            {isComingSoon && (
               <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-medium text-[#0099FF] backdrop-blur-sm">
                 Launching Soon
               </span>
            )}
            <div>
              <p className="text-lg font-medium text-white/60 mb-1">{subtitle}</p>
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">{title}</h2>
            </div>
             {description && (
                <p className="text-base text-white/70 max-w-lg mx-auto">
                    {description}
                </p>
            )}
            {!isComingSoon && (
                <Button className="bg-[#0099FF] text-white hover:bg-[#007acc] rounded-full px-8 h-10 text-sm">
                    Learn More
                </Button>
            )}
          </div>

          {/* Device Mockup */}
          <div className="flex-1 w-full flex justify-center items-center min-h-0">
             <ProductDeviceMockup assets={assets} className="max-h-full w-auto object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
