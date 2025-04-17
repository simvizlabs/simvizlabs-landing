import Link from 'next/link';
import { ArrowLeft } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const buttonVariants = cva(
"inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
{
variants: {
variant: {
default: "bg-primary text-primary-foreground shadow-sm shadow-black/5 hover:bg-primary/90",
destructive:
"bg-destructive text-destructive-foreground shadow-sm shadow-black/5 hover:bg-destructive/90",
outline:
"border border-input bg-background shadow-sm shadow-black/5 hover:bg-accent hover:text-accent-foreground",
secondary:
"bg-secondary text-secondary-foreground shadow-sm shadow-black/5 hover:bg-secondary/80",
ghost: "hover:bg-accent hover:text-accent-foreground",
link: "text-primary underline-offset-4 hover:underline",
},
size: {
default: "h-9 px-4 py-2",
sm: "h-8 rounded-lg px-3 text-xs",
lg: "h-10 rounded-lg px-8",
icon: "h-9 w-9",
},
},
defaultVariants: {
variant: "default",
size: "default",
},
},
);

export interface ButtonProps
extends React.ButtonHTMLAttributes<HTMLButtonElement>,
VariantProps<typeof buttonVariants> {
asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
({ className, variant, size, asChild = false, ...props }, ref) => {
const Comp = asChild ? Slot : "button";
return (
<Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
);
},
);
Button.displayName = "Button";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
({ className, type, ...props }, ref) => {
return (
<input
type={type}
className={cn(
"flex h-9 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm shadow-black/5 transition-shadow placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50",
type === "search" &&
"[&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none",
type === "file" &&
"p-0 pr-3 italic text-muted-foreground/70 file:me-3 file:h-full file:border-0 file:border-r file:border-solid file:border-input file:bg-transparent file:px-3 file:text-sm file:font-medium file:not-italic file:text-foreground",
className,
)}
ref={ref}
{...props}
/>
);
},
);
Input.displayName = "Input";

interface NotFoundProps {
title?: string;
description?: string;
}

export function Illustration(props: React.ComponentPropsWithoutRef<"svg">) {
return (
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 362 145" {...props}>
<path
fill="currentColor"
d="M62.6 142c-2.133 0-3.2-1.067-3.2-3.2V118h-56c-2 0-3-1-3-3V92.8c0-1.333.4-2.733 1.2-4.2L58.2 4c.8-1.333 2.067-2 3.8-2h28c2 0 3 1 3 3v85.4h11.2c.933 0 1.733.333 2.4 1 .667.533 1 1.267 1 2.2v21.2c0 .933-.333 1.733-1 2.4-.667.533-1.467.8-2.4.8H93v20.8c0 2.133-1.067 3.2-3.2 3.2H62.6zM33 90.4h26.4V51.2L33 90.4zM181.67 144.6c-7.333 0-14.333-1.333-21-4-6.666-2.667-12.866-6.733-18.6-12.2-5.733-5.467-10.266-13-13.6-22.6-3.333-9.6-5-20.667-5-33.2 0-12.533 1.667-23.6 5-33.2 3.334-9.6 7.867-17.133 13.6-22.6 5.734-5.467 11.934-9.533 18.6-12.2 6.667-2.8 13.667-4.2 21-4.2 7.467 0 14.534 1.4 21.2 4.2 6.667 2.667 12.8 6.733 18.4 12.2 5.734 5.467 10.267 13 13.6 22.6 3.334 9.6 5 20.667 5 33.2 0 12.533-1.666 23.6-5 33.2-3.333 9.6-7.866 17.133-13.6 22.6-5.6 5.467-11.733 9.533-18.4 12.2-6.666 2.667-13.733 4-21.2 4zm0-31c9.067 0 15.6-3.733 19.6-11.2 4.134-7.6 6.2-17.533 6.2-29.8s-2.066-22.2-6.2-29.8c-4.133-7.6-10.666-11.4-19.6-11.4-8.933 0-15.466 3.8-19.6 11.4-4 7.6-6 17.533-6 29.8s2 22.2 6 29.8c4.134 7.467 10.667 11.2 19.6 11.2zM316.116 142c-2.134 0-3.2-1.067-3.2-3.2V118h-56c-2 0-3-1-3-3V92.8c0-1.333.4-2.733 1.2-4.2l56.6-84.6c.8-1.333 2.066-2 3.8-2h28c2 0 3 1 3 3v85.4h11.2c.933 0 1.733.333 2.4 1 .666.533 1 1.267 1 2.2v21.2c0 .933-.334 1.733-1 2.4-.667.533-1.467.8-2.4.8h-11.2v20.8c0 2.133-1.067 3.2-3.2 3.2h-27.2zm-29.6-51.6h26.4V51.2l-26.4 39.2z"
/>
</svg>
)
}

export function NotFound({
title = "Page not found",
description = "Lost, this page is. In another system, it may be.",
}: NotFoundProps) {
return (
<div className="relative text-center z-[1] pt-52">
<h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-primary sm:text-7xl">
{title}
</h1>
<p className="mt-6 text-pretty text-lg font-medium text-muted-foreground sm:text-xl/8">
{description}
</p>
<div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-y-3 gap-x-6">
<Button variant="secondary" asChild className="group">
<a href="javascript:history.back()">
<ArrowLeft
className="me-2 ms-0 opacity-60 transition-transform group-hover:-translate-x-0.5"
size={16}
strokeWidth={2}
aria-hidden="true"
/>
Go back
</a>
</Button>
<Button asChild>
<Link href="/">Take me home</Link>
</Button>
</div>
</div>
);
}

export default NotFound;
