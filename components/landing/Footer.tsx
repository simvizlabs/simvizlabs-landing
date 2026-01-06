import { Logo } from "@/components/logo";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Footer({
  className,
  theme = "dark"
}: {
  className?: string;
  theme?: "dark" | "light";
}) {
  const isDark = theme === "dark";

  // Base text/border styles
  const baseStyles = isDark
    ? "bg-black text-white/60 border-white/10"
    : "bg-white text-black/60 border-black/10";

  // Heading/Strong text styles
  const strongTextStyles = isDark ? "text-white" : "text-black";

  // Hover styles
  const hoverStyles = isDark ? "hover:text-white" : "hover:text-black";

  // Start of modification
  return (
    <footer className={cn("py-16 border-t font-geist", baseStyles, className)}>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-4">

          {/* Brand & Address */}
          <div className="space-y-6 lg:col-span-1">
            <div className={cn("flex items-center gap-2", strongTextStyles)}>
              <Logo />
              <span className="text-xl font-bold">SimViz Labs</span>
            </div>
            <p className="text-sm">
              Next Generation Aviation Solutions.
            </p>
            <address className="text-sm not-italic leading-relaxed">
              Headquarters XXX, USA<br />
              Technology Center XXX, India<br />
              Regional Office XXX, Singapore
            </address>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-3 lg:grid-cols-3">
            {/* Solutions */}
            <div>
              <h3 className={cn("mb-4 text-sm font-semibold", strongTextStyles)}>Our Solutions</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="#" className={cn("transition-colors", hoverStyles)}>Airlines</Link></li>
                <li><Link href="#" className={cn("transition-colors", hoverStyles)}>Aeronautical Schools</Link></li>
                <li><Link href="#" className={cn("transition-colors", hoverStyles)}>Type Rating Organizations</Link></li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className={cn("mb-4 text-sm font-semibold", strongTextStyles)}>Our Products</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="#" className={cn("transition-colors", hoverStyles)}>A320</Link></li>
                <li><Link href="#" className={cn("transition-colors", hoverStyles)}>B737</Link></li>
                <li><Link href="#" className={cn("transition-colors", hoverStyles)}>B747</Link></li>
                <li><Link href="#" className={cn("transition-colors", hoverStyles)}>LMS</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className={cn("mb-4 text-sm font-semibold", strongTextStyles)}>Legal</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="#" className={cn("transition-colors", hoverStyles)}>Terms</Link></li>
                <li><Link href="#" className={cn("transition-colors", hoverStyles)}>Privacy</Link></li>
                <li><Link href="#" className={cn("transition-colors", hoverStyles)}>Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className={cn("mt-16 border-t pt-8 flex flex-col items-center justify-between gap-4 sm:flex-row", isDark ? "border-white/10" : "border-black/10")}>
          <p className="text-sm">
            © 2025 SimViz Labs LLC. All rights reserved.
          </p>
          <div className="flex gap-4">
            {/* Social Icons Placeholders */}
            <div className={cn("h-6 w-6 rounded", isDark ? "bg-white/10" : "bg-black/10")}></div>
            <div className={cn("h-6 w-6 rounded", isDark ? "bg-white/10" : "bg-black/10")}></div>
            <div className={cn("h-6 w-6 rounded", isDark ? "bg-white/10" : "bg-black/10")}></div>
            <div className={cn("h-6 w-6 rounded", isDark ? "bg-white/10" : "bg-black/10")}></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
