import { cn } from "@/lib/utils";
import Image from "next/image";

interface ProductDeviceMockupProps {
  assets: {
    shadow: string;
    iPad: string;
    shadow1: string;
    iPad1: string;
    screen: string;
  };
  className?: string;
}

export function ProductDeviceMockup({ assets, className }: ProductDeviceMockupProps) {
  return (
    <div className={cn("relative aspect-[1920/1540] max-w-[800px]", className)}>
       
       {/* Device #2 Group (Back Device) */}
       <div className="absolute left-[25%] top-[25%] w-[54%] h-[45%]">
            <div className="relative w-full h-full rotate-[24.28deg]">
                  <div className="absolute inset-0 z-0">
                       <Image src={assets.shadow} alt="" fill className="object-contain" />
                  </div>
                  <div className="absolute inset-[2%] z-10">
                       <Image src={assets.iPad} alt="" fill className="object-contain" />
                  </div>
             </div>
       </div>

       {/* Device #1 Group (Front Device) - Main Focus */}
       <div className="absolute left-[31%] top-[-5%] w-[90%] h-[90%] z-20">
             <div className="relative w-full h-full"> 
                  <div className="absolute inset-0 z-0">
                       <Image src={assets.shadow1} alt="" fill className="object-contain" />
                  </div>
                  
                  <div className="absolute left-[12%] top-[5%] w-[66%] h-[70%] z-10">
                        <Image src={assets.iPad1} alt="" fill className="object-contain" />
                  </div>

                  <div className="absolute left-[13%] top-[7%] w-[62%] h-[66%] z-20 overflow-hidden rounded-[2%]" style={{ transform: 'rotate(-0.20deg)' }}>
                         <Image src={assets.screen} alt="Simulator Screen" fill className="object-cover" />
                  </div>
             </div>
       </div>
    </div>
  );
}
