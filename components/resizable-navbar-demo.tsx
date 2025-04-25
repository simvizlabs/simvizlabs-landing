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
import { useState } from "react";
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
        { name: "Type Rating Aviation Schools", link: "#tr-schools", icon: IconSchool },
        { name: "Airlines", link: "#airlines", icon: IconPlane },
        { name: "Aeronautical Schools", link: "#aero-schools", icon: IconBuildingCommunity },
        { name: "Pilots", link: "#pilots", icon: IconUser },
      ],
    },
    {
      name: "Training Intelligence System",
      link: "#training-intel",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
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
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Contact Us
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
