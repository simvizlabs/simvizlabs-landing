import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import LearnMoreButton from "../MajorComponnts/LearnMoreButton";

export interface ProductHighlightCardProps {
    id?: string;
    title: string;
    description: string;
    imageSrc: string;
    badgeSrc?: string;
    primaryButton?: {
        text: string;
        href?: string;
        onClick?: () => void;
        icon?: React.ReactNode;
        className?: string;
    };
    secondaryButton?: {
        text: string;
        href?: string;
        onClick?: () => void;
        className?: string;
    };
    className?: string;
    layoutId?: string;
    comingSoon?: string;
}

export function ProductHighlightCard({
    id,
    title,
    description,
    imageSrc,
    badgeSrc,
    primaryButton,
    secondaryButton,
    className,
    layoutId,
    comingSoon,
}: ProductHighlightCardProps) {
    return (
        <motion.div
            id={id}
            layoutId={layoutId}
            className={cn(
                "bg-[#f5f5f7] rounded-3xl p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden",
                className
            )}
        >
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-8 max-w-xl">
                {comingSoon && (
                    <motion.span
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[#1381e5] text-sm md:text-base font-semibold uppercase tracking-wider mb-2 block"
                    >
                        {comingSoon}
                    </motion.span>
                )}
                <motion.h3
                    layoutId={`title-${layoutId}`}
                    className="text-4xl md:text-6xl font-bold text-black tracking-tight leading-tight"
                >
                    {title}
                </motion.h3>
                <motion.p
                    layoutId={`desc-${layoutId}`}
                    className="text-lg md:text-xl text-black/70 leading-relaxed"
                >
                    {description}
                </motion.p>
                <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-start">
                    {secondaryButton && (
                        <Button
                            variant="outline"
                            asChild={!!secondaryButton.href}
                            onClick={secondaryButton.onClick}
                            className={cn(
                                "rounded-3xl px-8 py-4 text-lg font-semibold border-[#1381e5] text-[#1381e5] hover:bg-[#1381e5]/10 hover:text-[#1381e5] transition-all",
                                secondaryButton.className
                            )}
                        >
                            {secondaryButton.href ? (
                                <Link href={secondaryButton.href}>
                                    {secondaryButton.text}
                                </Link>
                            ) : (
                                <span>{secondaryButton.text}</span>
                            )}
                        </Button>
                    )}
                    {primaryButton && (
                        primaryButton.text === "Learn More" ? (
                            <LearnMoreButton
                                onClick={primaryButton.onClick}
                                className={primaryButton.className}
                            />
                        ) : (
                            <Button
                                asChild={!!primaryButton.href}
                                onClick={primaryButton.onClick}
                                className={cn(
                                    "rounded-3xl px-8 py-4 text-lg font-semibold bg-[#1381e5] hover:bg-[#106bc0] text-white flex items-center gap-2 transition-all",
                                    primaryButton.className
                                )}
                            >
                                {primaryButton.href ? (
                                    <Link href={primaryButton.href}>
                                        {primaryButton.text}
                                        {primaryButton.icon || (
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        )}
                                    </Link>
                                ) : (
                                    <div className="flex items-center gap-2">
                                        {primaryButton.text}
                                        {primaryButton.icon || (
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        )}
                                    </div>
                                )}
                            </Button>
                        )
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
            <motion.div
                layoutId={`image-${layoutId}`}
                className="relative w-full lg:w-[60%] h-[500px] lg:h-[600px] shrink-0"
            >
                <Image
                    src={imageSrc}
                    alt={`${title} Mockup`}
                    fill
                    className="object-contain object-center lg:object-right-bottom"
                />
            </motion.div>
        </motion.div>
    );
}
