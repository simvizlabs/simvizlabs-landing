"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Airlines", href: "#" },
  { name: "Flying Schools", href: "#" },
  { name: "Approved Training Organisations", href: "#" },
  { name: "Our Products", href: "#" },
  { name: "About Us", href: "#" },
];

export function LandingNavbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-8">
        <Link href="/" className="flex items-center gap-2">
           <Logo />
           <span className="text-xl font-bold text-white">SimViz Labs</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden md:flex text-white hover:bg-white/10 hover:text-white">
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
}
