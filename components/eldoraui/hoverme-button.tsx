"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface HovermeButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  text?: string;
  icon?: React.ReactNode;
}

export function HovermeButton({ text = "View All", className, ...props }: HovermeButtonProps) {
  const handleClick = () => {
    document.getElementById('feature-section')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <button className={cn("group relative inline-flex h-[calc(48px+8px)] items-center justify-center rounded-full bg-neutral-900 py-1 pl-6 pr-14 font-medium text-neutral-50 font-geist", className)} onClick={handleClick} {...props}>
      <span className="z-10 pr-2">{text}</span>
      <div className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full bg-neutral-700 transition-[width] group-hover:w-[calc(100%-8px)]">
        <div className="mr-3.5 flex items-center justify-center">
          <ArrowUpRight
            width="15"
            height="15"
            className="h-5 w-5 text-neutral-50"
          />
        </div>
      </div>
    </button>
  );
}