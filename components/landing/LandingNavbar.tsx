"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { name: "Airlines", href: "#" },
  { name: "Flying Schools", href: "#" },
  { name: "Approved Training Organisations", href: "#" },
  { name: "Our Products", href: "#" },
  { name: "About Us", href: "#" },
];

export function LandingNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-md">
      <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4 sm:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
          <span className="text-lg md:text-xl font-bold text-white">SimViz Labs</span>
        </Link>

        {/* Desktop Nav */}
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

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" className="text-white hover:bg-white/10 hover:text-white">
            Contact Us
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] border-l border-white/10 bg-black/95 text-white backdrop-blur-xl sm:w-[400px]">
              <div className="flex flex-col gap-8 py-8">
                <div className="flex items-center gap-2 px-2">
                  <Logo />
                  <span className="text-xl font-bold">SimViz Labs</span>
                </div>
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-white/80 transition-colors hover:text-white px-2 py-1"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    href="#"
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-[#0099FF] transition-colors hover:text-[#007acc] px-2 py-1 mt-4"
                  >
                    Contact Us
                  </Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
