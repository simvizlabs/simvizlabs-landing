"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState, useCallback } from "react";
import { IconSchool, IconPlane, IconBuildingCommunity, IconUser } from "@tabler/icons-react";

export const NavbarLogo = () => {
  return (
    <Link
      href="/"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
    >
      <Image src="/logo.png" alt="SimvizLabs Logo" width={32} height={32} className="mr-2" />
      <span className="font-bold text-black dark:text-white">SimvizLabs</span>
    </Link>
  );
};

export default function NavbarDemo() {
  const navItems = [
    {
      name: "Our Solutions",
      link: "#",
      children: [
        { name: "Type Rating Aviation Schools", link: "/type-rating-schools", icon: IconSchool },
        { name: "Airlines", link: "/airlines", icon: IconPlane },
        { name: "Aeronautical Schools", link: "/aeronautical-schools", icon: IconBuildingCommunity },
        { name: "Pilots", link: "/pilots", icon: IconUser },
      ],
    },
    {
      name: "Training Intelligence System",
      link: "#feature108",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavItemClick = useCallback((link: string) => {
    if (link.startsWith("#")) {
      if (typeof window !== 'undefined') {
        const element = document.querySelector(link);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  }, []);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} onItemClick={handleNavItemClick} />
          <div className="flex items-center gap-8">
            <NavbarButton variant="primary">
              <Link href="/contact">Contact Us</Link>
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            navItems={navItems}
            handleNavItemClick={handleNavItemClick}
          />
        </MobileNav>
      </Navbar>
    </div>
  );
}
