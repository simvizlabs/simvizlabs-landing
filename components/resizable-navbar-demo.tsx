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
import { useState, useCallback, useEffect } from "react";
import { IconSchool, IconPlane, IconBuildingCommunity, IconUser } from "@tabler/icons-react";
import { useRouter, usePathname } from 'next/navigation'; // Import useRouter and usePathname

interface NavbarLogoProps {
  isScrolled: boolean;
}

export const NavbarLogo = ({ isScrolled, mobileView = false }: NavbarLogoProps & { mobileView?: boolean }) => {
  // For desktop view or when mobileView is false, return the original component
  if (!mobileView) {
    return (
      <Link
        href={isScrolled ? "/products" : "/"}
        className={`relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 relative ${isScrolled ? 'text-sm' : 'text-3xl'} mr-3 font-normal text-extrabold font-geist transition-all duration-300`}
      >
        <Image src="/logo.svg" alt="SimvizLabs Logo" width={isScrolled ? 32 : 64} height={isScrolled ? 32 : 64} className="mr-1 transition-all duration-300" />
        <span className="font-extrabold text-[#0C5393] dark:text-[#3B82F6] font-geist">SimvizLabs</span>
      </Link>
    );
  }
  
  // For mobile view, return only the logo without text
  return (
    <Link
      href="/"
      className={`relative z-20 flex items-center px-0 py-1 transition-all duration-300`}
    >
      <Image src="/logo.svg" alt="SimvizLabs Logo" width={isScrolled ? 32 : 48} height={isScrolled ? 32 : 48} className="transition-all duration-300" />
    </Link>
  );
};

export default function NavbarDemo() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
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
      name: "Our Products",
      link: "/products",
    },
    {
      name: "More",
      link: "#",
      listMenu:[
      { name: "Airlines", link: "/airlines", icon: IconPlane },
      { name: "Type Rating Organisations", link: "/type-rating-schools", icon: IconSchool },
        { name: "Aeronautical Schools", link: "/aeronautical-schools", icon: IconBuildingCommunity },
        {name:"Products", link:"/products", icon: IconPlane},
      ]
      }
   ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter(); // Initialize useRouter
  const pathname = usePathname(); // Get current pathname

  const handleNavItemClick = useCallback((link: string) => {
    if (link.startsWith("#")) {
      if (pathname === '/') { // Checks if on the homepage
        // Smooth scroll if on the homepage
        if (typeof window !== 'undefined') {
          const element = document.querySelector(link);
          if (element) {
            // THIS LINE HANDLES THE SMOOTH SCROLL/EASING EFFECT:
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      } else {
        // Navigate to homepage with anchor if on another page
        router.push(`/${link}`);
      }
      // Close mobile menu if open
      setIsMobileMenuOpen(false);
    } else {
      // Handle regular links (if any added later)
      router.push(link);
      setIsMobileMenuOpen(false);
    }
  }, [pathname, router]); // Add pathname and router to dependencies

  return (
    <div className="relative w-full font-geist">
      <Navbar className="font-geist">
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo isScrolled={isScrolled} />
          <NavItems items={navItems} onItemClick={handleNavItemClick} />
          <div className="flex items-center gap-8">
            <NavbarButton variant="primary" href="/contact" className="font-geist">
              Contact Us
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav className="lg:hidden">
          <MobileNavHeader className="flex justify-between items-center px-4">
            <div className="flex items-center">
              <NavbarLogo isScrolled={isScrolled} mobileView={true} />
            </div>
            <div className="flex-1 flex justify-center items-center">
              <span className="font-extrabold text-[#0C5393] dark:text-[#3B82F6] font-geist text-xl">SimvizLabs</span>
            </div>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            navItems={navItems}
            handleNavItemClick={handleNavItemClick} // Pass the updated handler
         
          />
        </MobileNav>
      </Navbar>
    </div>
  );
}
