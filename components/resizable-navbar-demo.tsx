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
import { IconSchool, IconPlane, IconBuildingCommunity } from "@tabler/icons-react";
import { useRouter, usePathname } from 'next/navigation'; // Import useRouter and usePathname

interface NavbarLogoProps {
  isScrolled: boolean;
}

export const NavbarLogo = ({ isScrolled, mobileView = false }: NavbarLogoProps & { mobileView?: boolean }) => {
  // For desktop view or when mobileView is false, return the original component
  if (!mobileView) {
    return (
      <Link
        href="/"
        className={`relative z-20 mr-3 flex items-center space-x-2 px-2 py-1 ${isScrolled ? 'text-sm' : 'text-3xl'} font-normal text-extrabold font-geist transition-all duration-300`}
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
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  
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

  // Check if user is logged in by checking for Clerk session cookie
  // COMMENTED OUT - Authorization disabled
  // useEffect(() => {
  //   const checkAuthStatus = () => {
  //     if (typeof window !== 'undefined') {
  //       // Check for Clerk session cookie (__clerk_db_jwt or __session)
  //       const cookies = document.cookie.split(';');
  //       const hasClerkSession = cookies.some(cookie => 
  //         cookie.trim().startsWith('__clerk_db_jwt') || 
  //         cookie.trim().startsWith('__session') ||
  //         cookie.trim().startsWith('__clerk')
  //       );
  //       setIsLoggedIn(hasClerkSession);
  //     }
  //   };

  //   checkAuthStatus();
  //   // Check periodically in case auth status changes
  //   const interval = setInterval(checkAuthStatus, 1000);
  //   return () => clearInterval(interval);
  // }, []);
  
  const navItems = [
    {
      name: "Our Solutions",
      link: "#",
      children: [
       
        { name: "Airlines", link: "/airlines", icon: IconPlane },
        { name: "Aeronautical Schools", link: "/aeronautical-schools", icon: IconBuildingCommunity },
        { name: "Type Rating Aviation Schools", link: "/type-rating-schools", icon: IconSchool },
      
      ],
    },
    {
      name: "Our Products",
      link: "/products",
    },
    // {
    //   name:"Pricing",
    //   link:"/pricing",
    // },
    {
      name: "More",
      link: "#",
      listMenu:[
      { name: "Airlines", link: "/airlines", icon: IconPlane },
     
        { name: "Aeronautical Schools", link: "/aeronautical-schools", icon: IconBuildingCommunity },
        { name: "Type Rating Organisations", link: "/type-rating-schools", icon: IconSchool },
        {name:"Our Products", link:"/products", icon: IconPlane},
        // {name:"Pricing", link:"/pricing", icon: IconPlane}, // HIDDEN - Pricing removed
      ]
      }
   ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter(); // Initialize useRouter
  const pathname = usePathname(); // Get current pathname

  const handleNavItemClick = useCallback((link: string) => {
    if (link.startsWith("#")) {
      if (pathname === "/") {
        if (typeof window !== "undefined") {
          const element = document.querySelector(link);
          if (element) {
            // THIS LINE HANDLES THE SMOOTH SCROLL/EASING EFFECT:
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      } else {
        // Navigate to homepage with anchor if on another page
        router.push(`/${link}`);
      }
    } else {
      router.push(link);
    }
    setIsMobileMenuOpen(false);
  }, [pathname, router]);

  return (
    <div className="relative w-full font-geist">
      <Navbar className="font-geist">
        {/* Desktop Navigation - Hidden on mobile */}
        <div className="hidden lg:block">
          <NavBody>
            <NavbarLogo isScrolled={isScrolled} />
            <NavItems items={navItems} onItemClick={handleNavItemClick} />
            {/* HIDDEN - Sign In/Sign Up buttons commented out */}
            {/* <div className="flex items-center gap-4">
              {isLoggedIn ? (
                <NavbarButton 
                  variant="primary" 
                  href={process.env.NEXT_PUBLIC_LMS_URL ? `${process.env.NEXT_PUBLIC_LMS_URL}/home` : "/home"} 
                  className="font-geist"
                >
                  Dashboard
                </NavbarButton>
              ) : (
                <>
                  <NavbarButton 
                    variant="secondary" 
                    href={process.env.NEXT_PUBLIC_LMS_URL ? `${process.env.NEXT_PUBLIC_LMS_URL}/sign-in` : "/sign-in"} 
                    className="font-geist"
                  >
                    Sign In
                  </NavbarButton>
                  <NavbarButton 
                    variant="primary" 
                    href={process.env.NEXT_PUBLIC_LMS_URL ? `${process.env.NEXT_PUBLIC_LMS_URL}/sign-in` : "/sign-in"} 
                    className="font-geist"
                  >
                    Start Building
                  </NavbarButton>
                </>
              )}
            </div> */}
          </NavBody>
        </div>

        {/* Mobile Navigation - Hidden on desktop */}
        <div className="lg:hidden">
          <MobileNav>
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
              navItems={[...navItems, { name: "Contact Us", link: "/contact" }]}
              handleNavItemClick={handleNavItemClick}
            />
            {/* HIDDEN - Mobile Sign In/Sign Up buttons commented out */}
            {/* {isMobileMenuOpen && (
              <div className="fixed bottom-8 left-0 right-0 z-50 flex flex-col gap-3 px-4 lg:hidden">
                {isLoggedIn ? (
                  <NavbarButton 
                    variant="primary" 
                    href={process.env.NEXT_PUBLIC_LMS_URL ? `${process.env.NEXT_PUBLIC_LMS_URL}/home` : "/home"} 
                    className="font-geist w-full"
                  >
                    Dashboard
                  </NavbarButton>
                ) : (
                  <>
                    <NavbarButton 
                      variant="secondary" 
                      href={process.env.NEXT_PUBLIC_LMS_URL ? `${process.env.NEXT_PUBLIC_LMS_URL}/sign-in` : "/sign-in"} 
                      className="font-geist w-full"
                    >
                      Sign In
                    </NavbarButton>
                    <NavbarButton 
                      variant="primary" 
                      href={process.env.NEXT_PUBLIC_LMS_URL ? `${process.env.NEXT_PUBLIC_LMS_URL}/sign-in` : "/sign-in"} 
                      className="font-geist w-full"
                    >
                      Start Building
                    </NavbarButton>
                  </>
                )}
              </div>
            )} */}
          </MobileNav>
        </div>
      </Navbar>
    </div>
  );
}
