import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ProductHighlightCardProps {
    title: string;
    description: string;
    imageSrc: string;
    badgeSrc?: string;
    primaryButton?: {
        text: string;
        href: string;
        icon?: React.ReactNode;
    };
    secondaryButton?: {
        text: string;
        href: string;
    };
    className?: string;
}

export function ProductHighlightCard({
    title,
    description,
    imageSrc,
    badgeSrc,
    primaryButton,
    secondaryButton,
    className,
}: ProductHighlightCardProps) {
    return (
        <div className={cn(
            "bg-[#f5f5f7] rounded-3xl p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden",
            className
        )}>
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-8 max-w-xl">
                <h3 className="text-4xl md:text-6xl font-bold text-black tracking-tight leading-tight">
                    {title}
                </h3>
                <p className="text-lg md:text-xl text-black/70 leading-relaxed">
                    {description}
                </p>
                <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-start">
                    {secondaryButton && (
                        <Button
                            variant="outline"
                            asChild
                            className="rounded-full px-8 py-4 text-lg font-medium border-black/20 text-black hover:bg-black/5 transition-all"
                        >
                            <Link href={secondaryButton.href}>
                                {secondaryButton.text}
                            </Link>
                        </Button>
                    )}
                    {primaryButton && (
                        <Button
                            asChild
                            className="rounded-full px-8 py-4 text-lg font-medium bg-[#3b82f6] hover:bg-[#2563eb] text-white flex items-center gap-2 transition-all"
                        >
                            <Link href={primaryButton.href}>
                                {primaryButton.text}
                                {primaryButton.icon || (
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )}
                            </Link>
                        </Button>
                    )}
                </div>
                {badgeSrc && (
                    <div className="pt-4">
                        <Image
                            src={badgeSrc}
                            alt="Download on the App Store"
                            width={180}
                            height={54}
                            className="cursor-pointer hover:opacity-80 transition-opacity"
                        />
                    </div>
                )}
            </div>
            <div className="relative w-full lg:w-[60%] h-[500px] lg:h-[600px] shrink-0">
                <Image
                    src={imageSrc}
                    alt={`${title} Mockup`}
                    fill
                    className="object-contain object-center lg:object-right-bottom"
                />
            </div>
        </div>
    );
}
