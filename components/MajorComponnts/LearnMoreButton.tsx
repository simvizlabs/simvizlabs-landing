import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface LearnMoreButtonProps {
    onClick?: () => void;
    isExpanded?: boolean;
    className?: string;
}

const LearnMoreButton = ({ onClick, isExpanded, className }: LearnMoreButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={cn(
                "rounded-full px-10 py-4  text-lg font-semibold bg-[#1381e5] hover:bg-[#106bc0] text-white flex items-center gap-2 transition-all shadow-lg shadow-blue-500/20", className
            )}
        >
            Learn More
            {isExpanded ? (
                <ChevronUp className="w-5 h-5" />
            ) : (
                <ChevronDown className="w-5 h-5" />
            )}
        </button>
    );
};

export default LearnMoreButton;
