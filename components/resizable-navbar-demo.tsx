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
import { useRouter, usePathname } from 'next/navigation';
import { useUser, UserButton } from "@clerk/nextjs";

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
        <Image src="/logo.svg" alt="SimViz Labs Logo" width={isScrolled ? 32 : 64} height={isScrolled ? 32 : 64} className="mr-1 transition-all duration-300" />
        <span className="font-extrabold text-[#0C5393] dark:text-[#3B82F6] font-geist">SimViz Labs</span>
      </Link>
    );
  }

  // For mobile view, return only the logo without text
  return (
    <Link
      href="/"
      className={`relative z-20 flex items-center px-0 py-1 transition-all duration-300`}
    >
      <Image src="/logo.svg" alt="SimViz Labs Logo" width={isScrolled ? 32 : 48} height={isScrolled ? 32 : 48} className="transition-all duration-300" />
    </Link>
  );
};

export default function NavbarDemo() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isIndia, setIsIndia] = useState(false);
  const [geoLoading, setGeoLoading] = useState(true);
  const { user, isLoaded: userLoaded } = useUser();

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

  // Check if user is from India using i18n locale detection
  useEffect(() => {
    const checkRegion = async () => {
      try {
        // First, try to get region from middleware header (set by Next.js middleware)
        const response = await fetch('/api/geolocation');
        const data = await response.json();

        if (data.success && data.isIndia) {
          setIsIndia(true);
        } else {
          // Fallback: Check browser locale
          const browserLocale = navigator.language || (navigator as any).userLanguage;
          const isIndianBrowserLocale = browserLocale.includes('IN') ||
            browserLocale.startsWith('hi') ||
            browserLocale.startsWith('ta') ||
            browserLocale.startsWith('te');
          setIsIndia(isIndianBrowserLocale);
        }
      } catch (error) {
        console.error('Error checking region:', error);
        // Fallback to browser locale
        const browserLocale = navigator.language || (navigator as any).userLanguage;
        const isIndianBrowserLocale = browserLocale.includes('IN');
        setIsIndia(isIndianBrowserLocale);
      } finally {
        setGeoLoading(false);
      }
    };

    checkRegion();
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
      name: "Airlines",
      link: "/airlines",
    },
    {
      name: "Flying Schools",
      link: "/flying-schools",
    },
    {
      name: "Approved Training Organisations",
      link: "/approved-training-organisations",
    },
    {
      name: "Our Products",
      link: "/our-products",
    },
    {
      name: "About Us",
      link: "/about-us",
    },
    {
      name: "Contact Us",
      link: "/contact",
    },
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
      <Navbar className="fixed top-0 z-50 w-full border-b border-white/10 bg-black lg:bg-black/20 lg:backdrop-blur-md font-geist transition-all duration-300">
        <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4 sm:px-8">
          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden lg:flex w-full items-center justify-between">
            <NavBody className="w-full max-w-full">
              <div className="flex items-center pr-8 lg:pr-12">
                <Link href="/" className="flex items-center gap-2">
                  <Image src="/logo.svg" alt="SimViz Labs Logo" width={32} height={32} className="mr-1" />
                  <span className="text-xl font-bold text-white">SimViz Labs</span>
                </Link>
              </div>

              <NavItems
                items={navItems}
                onItemClick={handleNavItemClick}
                className="text-sm font-medium text-white/80 transition-colors text-white hover:text-white pl-4 lg:pl-8"
              />

              {/* Show auth buttons/avatar only for Indian IP addresses AND on the specific path */}
              <div className="flex items-center gap-4 justify-end">
                {!geoLoading && isIndia && pathname === "/in/a320-bundle" && (
                  userLoaded && user ? (
                    <div className="flex items-center gap-3">
                      <NavbarButton
                        variant="primary"
                        href="/dashboard"
                        className="text-black hover:bg-white/10 hover:text-white font-geist"
                      >
                        Dashboard
                      </NavbarButton>
                      <UserButton
                        appearance={{
                          elements: {
                            avatarBox: "w-10 h-10",
                          },
                        }}
                        afterSignOutUrl="/"
                      />
                    </div>
                  ) : (
                    <>
                      <NavbarButton
                        variant="secondary"
                        href="/sign-in"
                        className="text-white hover:bg-white hover:text-black font-geist"
                      >
                        Sign In
                      </NavbarButton>
                      <NavbarButton
                        variant="primary"
                        href="/sign-up"
                        className="bg-[#1381e5] text-white hover:bg-[#1381e5]/90 font-geist"
                      >
                        Sign Up
                      </NavbarButton>
                    </>
                  )
                )}
              </div>
            </NavBody>
          </div>

          {/* Mobile Navigation - Hidden on desktop */}
          <div className="lg:hidden flex w-full items-center justify-between">
            <MobileNav>
              <MobileNavHeader className="flex justify-between items-center w-full">
                <Link href="/" className="flex items-center gap-2">
                  <Image src="/logo.svg" alt="SimViz Labs Logo" width={32} height={32} />
                  <span className="text-lg font-bold text-white">SimViz Labs</span>
                </Link>
                <MobileNavToggle
                  isOpen={isMobileMenuOpen}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-white"
                />
              </MobileNavHeader>

              <MobileNavMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                navItems={navItems}
                handleNavItemClick={handleNavItemClick}
                className="bg-black text-white border-l border-white/10"
              />
              {/* Show auth buttons/avatar only for Indian IP addresses - Mobile */}
              {!geoLoading && isIndia && pathname === "/in/a320-bundle" && isMobileMenuOpen && (
                <div className="fixed bottom-8 left-0 right-0 z-50 flex flex-col gap-3 px-4 lg:hidden">
                  {userLoaded && user ? (
                    <>
                      <NavbarButton
                        variant="primary"
                        href="/dashboard"
                        className="bg-white text-black w-full"
                      >
                        Dashboard
                      </NavbarButton>
                      <div className="flex justify-center">
                        <UserButton
                          appearance={{
                            elements: {
                              avatarBox: "w-10 h-10",
                            },
                          }}
                          afterSignOutUrl="/"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <NavbarButton
                        variant="secondary"
                        href="/sign-in"
                        className="text-white border border-white/20 w-full"
                      >
                        Sign In
                      </NavbarButton>
                      <NavbarButton
                        variant="primary"
                        href="/sign-up"
                        className="bg-[#1381e5] text-white hover:bg-[#1381e5]/90 w-full font-geist"
                      >
                        Sign Up
                      </NavbarButton>
                    </>
                  )}
                </div>
              )}
            </MobileNav>
          </div>
        </div>
      </Navbar>
    </div>
  );
}
